import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders } from "../_shared/cors.ts";

const VOYAGE_API_URL = "https://api.voyageai.com/v1/embeddings";
const VOYAGE_MODEL = "voyage-3";
const BATCH_SIZE = 20; // Voyage AI batch limit
const MAX_CHUNK_CHARS = 1000;
const OVERLAP_CHARS = 200;

// Port of extractText from src/hooks/useSearchIndex.ts
function extractText(content: unknown): string {
  if (!content || typeof content !== "object") return "";
  const c = content as Record<string, unknown>;
  const parts: string[] = [];

  if (typeof c.text === "string") parts.push(c.text);
  if (typeof c.title === "string") parts.push(c.title);

  if (Array.isArray(c.items)) {
    for (const item of c.items) {
      if (typeof item === "string") parts.push(item);
      if (item && typeof item === "object") {
        const obj = item as Record<string, unknown>;
        if (typeof obj.title === "string") parts.push(obj.title);
        if (typeof obj.content === "string") parts.push(obj.content);
        if (typeof obj.description === "string") parts.push(obj.description);
      }
    }
  }
  if (Array.isArray(c.cards)) {
    for (const card of c.cards) {
      if (card && typeof card === "object") {
        const obj = card as Record<string, unknown>;
        if (typeof obj.title === "string") parts.push(obj.title);
        if (typeof obj.description === "string") parts.push(obj.description);
      }
    }
  }
  if (Array.isArray(c.metrics)) {
    for (const m of c.metrics) {
      if (m && typeof m === "object") {
        const obj = m as Record<string, unknown>;
        if (typeof obj.label === "string") parts.push(obj.label);
        if (typeof obj.value === "string") parts.push(obj.value);
      }
    }
  }

  return parts.join(" ");
}

// Split long text into overlapping chunks
function chunkText(text: string): string[] {
  if (text.length <= MAX_CHUNK_CHARS + 200) return [text];

  const chunks: string[] = [];
  let start = 0;
  while (start < text.length) {
    const end = Math.min(start + MAX_CHUNK_CHARS, text.length);
    chunks.push(text.slice(start, end));
    if (end >= text.length) break;
    start = end - OVERLAP_CHARS;
  }
  return chunks;
}

// Call Voyage AI embeddings API
async function embedTexts(
  texts: string[],
  apiKey: string
): Promise<number[][]> {
  const res = await fetch(VOYAGE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      input: texts,
      model: VOYAGE_MODEL,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Voyage API error (${res.status}): ${errText}`);
  }

  const json = await res.json();
  return json.data.map((d: { embedding: number[] }) => d.embedding);
}

interface SectionRow {
  section_id: string;
  section_type: string;
  title: string | null;
  content: Record<string, unknown> | null;
  sort_order: number;
}

interface PageRow {
  id: string;
  slug: string;
  title: string;
  page_sections: SectionRow[];
}

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Validate secrets
    const voyageKey = Deno.env.get("VOYAGE_API_KEY") || Deno.env.get("VOYAGE");
    if (!voyageKey) {
      return new Response(
        JSON.stringify({ error: "VOYAGE_API_KEY not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const adminClient = createClient(supabaseUrl, supabaseServiceKey);

    // Verify caller is admin via auth header
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      const {
        data: { user },
        error: authError,
      } = await adminClient.auth.getUser(token);
      if (authError || !user) {
        return new Response(
          JSON.stringify({ error: "Unauthorized" }),
          {
            status: 401,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      // Check admin role
      const { data: roleData } = await adminClient
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();
      if (!roleData) {
        return new Response(
          JSON.stringify({ error: "Admin role required" }),
          {
            status: 403,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
    }

    // Optional: filter to single page
    let pageSlugFilter: string | null = null;
    try {
      const body = await req.json();
      pageSlugFilter = body.page_slug || null;
    } catch {
      // No body is fine — process all pages
    }

    // Fetch published pages with sections
    let query = adminClient
      .from("pages")
      .select("id, slug, title, page_sections(section_id, section_type, title, content, sort_order)")
      .eq("is_published", true)
      .order("title");

    if (pageSlugFilter) {
      query = query.eq("slug", pageSlugFilter);
    }

    const { data: pages, error: pagesError } = await query;
    if (pagesError) throw pagesError;
    if (!pages || pages.length === 0) {
      return new Response(
        JSON.stringify({ message: "No pages found", count: 0 }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Build chunks from all pages
    interface EmbeddingRow {
      page_id: string;
      section_id: string;
      page_slug: string;
      page_title: string;
      section_title: string | null;
      content_text: string;
      chunk_index: number;
    }

    const allRows: EmbeddingRow[] = [];
    const allTexts: string[] = [];

    for (const page of pages as unknown as PageRow[]) {
      const sections = [...(page.page_sections || [])].sort(
        (a, b) => (a.sort_order || 0) - (b.sort_order || 0)
      );

      // Find nearest heading for each section (same logic as useSearchIndex)
      function findParentHeading(idx: number): { id: string | null; title: string | null } {
        for (let i = idx; i >= 0; i--) {
          if (sections[i].section_type === "heading" && sections[i].section_id) {
            return { id: sections[i].section_id, title: sections[i].title || null };
          }
        }
        return { id: null, title: null };
      }

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const text = `${section.title || ""} ${extractText(section.content)}`.trim();
        if (!text || text.length < 20) continue;

        const heading = findParentHeading(i);
        const sectionId = heading.id || section.section_id;
        const sectionTitle = heading.title || section.title;
        const chunks = chunkText(text);

        for (let ci = 0; ci < chunks.length; ci++) {
          allRows.push({
            page_id: page.id,
            section_id: sectionId,
            page_slug: page.slug,
            page_title: page.title,
            section_title: sectionTitle,
            content_text: chunks[ci],
            chunk_index: ci,
          });
          allTexts.push(chunks[ci]);
        }
      }
    }

    if (allTexts.length === 0) {
      return new Response(
        JSON.stringify({ message: "No content to embed", count: 0 }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Embed in batches
    const allEmbeddings: number[][] = [];
    for (let i = 0; i < allTexts.length; i += BATCH_SIZE) {
      const batch = allTexts.slice(i, i + BATCH_SIZE);
      const embeddings = await embedTexts(batch, voyageKey);
      allEmbeddings.push(...embeddings);
    }

    // Delete existing embeddings for the pages we're re-embedding
    if (pageSlugFilter) {
      await adminClient
        .from("page_section_embeddings")
        .delete()
        .eq("page_slug", pageSlugFilter);
    } else {
      // Delete all and re-insert
      await adminClient
        .from("page_section_embeddings")
        .delete()
        .neq("id", "00000000-0000-0000-0000-000000000000"); // delete all rows
    }

    // Insert new embeddings in batches of 50
    const INSERT_BATCH = 50;
    let insertedCount = 0;
    for (let i = 0; i < allRows.length; i += INSERT_BATCH) {
      const batch = allRows.slice(i, i + INSERT_BATCH).map((row, j) => ({
        ...row,
        embedding: JSON.stringify(allEmbeddings[i + j]),
      }));

      const { error: insertError } = await adminClient
        .from("page_section_embeddings")
        .insert(batch);

      if (insertError) {
        console.error(`Insert batch error at offset ${i}:`, insertError);
        throw insertError;
      }
      insertedCount += batch.length;
    }

    return new Response(
      JSON.stringify({
        success: true,
        pages_processed: (pages as unknown as PageRow[]).length,
        chunks_embedded: insertedCount,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: err instanceof Error ? err.message : JSON.stringify(err) }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
