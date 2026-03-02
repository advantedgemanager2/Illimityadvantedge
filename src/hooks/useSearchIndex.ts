import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface SearchResult {
  pageTitle: string;
  pageSlug: string;
  sectionId: string | null;
  sectionTitle: string | null;
  snippet: string;
  category: string;
}

interface RawSection {
  section_id: string;
  section_type: string;
  title: string | null;
  content: Record<string, unknown> | null;
  sort_order: number;
}

interface RawPage {
  slug: string;
  title: string;
  description: string | null;
  tags: string[] | null;
  page_sections: RawSection[];
  page_categories: { name: string } | null;
}

// Extract all searchable text from a section's content JSON
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

// Find the nearest heading (section_id) above a given section index
function findParentHeading(
  sections: RawSection[],
  targetIndex: number
): { sectionId: string | null; sectionTitle: string | null } {
  for (let i = targetIndex; i >= 0; i--) {
    if (sections[i].section_type === "heading" && sections[i].section_id) {
      return {
        sectionId: sections[i].section_id,
        sectionTitle: sections[i].title || null,
      };
    }
  }
  return { sectionId: null, sectionTitle: null };
}

// Create a snippet around the matched text
function createSnippet(text: string, query: string, maxLen = 120): string {
  const lower = text.toLowerCase();
  const qLower = query.toLowerCase();
  const idx = lower.indexOf(qLower);
  if (idx === -1) return text.slice(0, maxLen);

  const start = Math.max(0, idx - 40);
  const end = Math.min(text.length, idx + query.length + 80);
  let snippet = text.slice(start, end);
  if (start > 0) snippet = "..." + snippet;
  if (end < text.length) snippet = snippet + "...";
  return snippet;
}

export function useSearchIndex() {
  return useQuery({
    queryKey: ["search-index"],
    queryFn: async (): Promise<RawPage[]> => {
      const { data, error } = await supabase
        .from("pages")
        .select(
          `slug, title, description, tags,
           page_sections(section_id, section_type, title, content, sort_order),
           page_categories!category_id(name)`
        )
        .eq("is_published", true)
        .order("title");

      if (error) {
        console.error("Search index fetch error:", error);
        return [];
      }

      return (data || []) as unknown as RawPage[];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function searchPages(
  pages: RawPage[],
  query: string
): SearchResult[] {
  if (!query || query.length < 2) return [];

  const qLower = query.toLowerCase();
  const results: SearchResult[] = [];
  const seen = new Set<string>(); // avoid duplicates per page+section

  for (const page of pages) {
    const category =
      page.page_categories?.name || "Uncategorized";

    // Search page title and description
    const pageMeta = `${page.title} ${page.description || ""} ${(page.tags || []).join(" ")}`;
    if (pageMeta.toLowerCase().includes(qLower)) {
      const dedup = `${page.slug}::page`;
      if (!seen.has(dedup)) {
        seen.add(dedup);
        results.push({
          pageTitle: page.title,
          pageSlug: page.slug,
          sectionId: null,
          sectionTitle: null,
          snippet: createSnippet(page.description || page.title, query),
          category,
        });
      }
    }

    // Search sections
    const sorted = [...(page.page_sections || [])].sort(
      (a, b) => (a.sort_order || 0) - (b.sort_order || 0)
    );

    for (let i = 0; i < sorted.length; i++) {
      const section = sorted[i];
      const sectionText = `${section.title || ""} ${extractText(section.content)}`;

      if (sectionText.toLowerCase().includes(qLower)) {
        const heading = findParentHeading(sorted, i);
        const dedup = `${page.slug}::${heading.sectionId || "top"}`;
        if (!seen.has(dedup)) {
          seen.add(dedup);
          results.push({
            pageTitle: page.title,
            pageSlug: page.slug,
            sectionId: heading.sectionId,
            sectionTitle: heading.sectionTitle || section.title,
            snippet: createSnippet(sectionText, query),
            category,
          });
        }
      }
    }
  }

  // Sort: exact title matches first, then by page title
  results.sort((a, b) => {
    const aTitle = a.pageTitle.toLowerCase().includes(qLower) ? 0 : 1;
    const bTitle = b.pageTitle.toLowerCase().includes(qLower) ? 0 : 1;
    if (aTitle !== bTitle) return aTitle - bTitle;
    return a.pageTitle.localeCompare(b.pageTitle);
  });

  return results.slice(0, 30);
}
