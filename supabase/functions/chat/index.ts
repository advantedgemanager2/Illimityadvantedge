import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders } from "../_shared/cors.ts";

const VOYAGE_API_URL = "https://api.voyageai.com/v1/embeddings";
const VOYAGE_MODEL = "voyage-3";
const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_MODEL = "claude-haiku-4-5-20251001";

const SYSTEM_PROMPT = `You are the AdvantEdge Transition Finance Toolkit assistant. Your role is to help banking professionals navigate transition finance concepts, regulations, and best practices.

STRICT RULES:
1. Answer ONLY from the provided context sections. Never use external knowledge.
2. ALWAYS cite your sources using markdown links in the format [Page Title](/page-slug#section-id). If a section has no section_id, link to just [Page Title](/page-slug).
3. When your answer draws from multiple pages, cite ALL relevant pages. Proactively surface connections across different areas (e.g., linking KPIs to sector analysis, or regulation to product design).
4. If the provided context does not contain enough information to answer the question, say: "I don't have enough information in the toolkit to answer that question. Try browsing the relevant sections or refining your question."
5. Answer in the same language as the user's question (Italian if asked in Italian, English if asked in English).
6. Be concise but thorough. Use bullet points for lists. Bold key terms.
7. Never fabricate page names, section titles, or URLs that don't appear in the context.`;

// Embed a single query via Voyage AI
async function embedQuery(text: string, apiKey: string): Promise<number[]> {
  const res = await fetch(VOYAGE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      input: [text],
      model: VOYAGE_MODEL,
      input_type: "query",
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Voyage API error (${res.status}): ${errText}`);
  }

  const json = await res.json();
  return json.data[0].embedding;
}

interface MatchedSection {
  page_slug: string;
  page_title: string;
  section_id: string;
  section_title: string | null;
  content_text: string;
  similarity: number;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Validate secrets
    const voyageKey = Deno.env.get("VOYAGE_API_KEY") || Deno.env.get("VOYAGE");
    const anthropicKey = Deno.env.get("ANTHROPIC_API_KEY") || Deno.env.get("ILLIMITY_ADVANTEDGE_CLAUDE");
    if (!voyageKey || !anthropicKey) {
      return new Response(
        JSON.stringify({ error: "API keys not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const adminClient = createClient(supabaseUrl, supabaseServiceKey);

    // Verify user is authenticated
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Authentication required" }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const token = authHeader.replace("Bearer ", "");
    const {
      data: { user },
      error: authError,
    } = await adminClient.auth.getUser(token);
    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: "Invalid session" }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Parse request
    const { question, history } = (await req.json()) as {
      question: string;
      history?: ChatMessage[];
    };

    if (!question || typeof question !== "string" || question.trim().length < 2) {
      return new Response(
        JSON.stringify({ error: "Question is required (min 2 chars)" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Step 1: Embed the question
    const queryEmbedding = await embedQuery(question.trim(), voyageKey);

    // Step 2: Semantic search via match_sections RPC
    const { data: matches, error: matchError } = await adminClient.rpc(
      "match_sections",
      {
        query_embedding: JSON.stringify(queryEmbedding),
        match_count: 10,
      }
    );

    if (matchError) {
      console.error("Match sections error:", matchError);
      throw matchError;
    }

    const sections = (matches || []) as MatchedSection[];

    // Step 3: Build context from matched sections
    const contextBlocks = sections.map((s, i) => {
      const sectionRef = s.section_id
        ? `${s.page_title} > ${s.section_title || s.section_id}`
        : s.page_title;
      const link = s.section_id
        ? `/${s.page_slug}#${s.section_id}`
        : `/${s.page_slug}`;
      return `[Source ${i + 1}] "${sectionRef}" (link: ${link}, similarity: ${s.similarity.toFixed(3)})\n${s.content_text}`;
    });

    const contextString = contextBlocks.join("\n\n---\n\n");

    // Step 4: Build messages array
    const messages: Array<{ role: string; content: string }> = [];

    // Include conversation history (last 6 turns max)
    if (history && Array.isArray(history)) {
      const recentHistory = history.slice(-6);
      for (const msg of recentHistory) {
        messages.push({ role: msg.role, content: msg.content });
      }
    }

    // Add current question with context
    messages.push({
      role: "user",
      content: `Here are the relevant sections from the AdvantEdge Transition Finance Toolkit:\n\n${contextString}\n\n---\n\nUser question: ${question.trim()}`,
    });

    // Step 5: Call Anthropic with streaming
    const anthropicRes = await fetch(ANTHROPIC_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": anthropicKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: ANTHROPIC_MODEL,
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages,
        stream: true,
      }),
    });

    if (!anthropicRes.ok) {
      const errText = await anthropicRes.text();
      console.error("Anthropic API error:", errText);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Step 6: Forward SSE stream, extracting text deltas
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = anthropicRes.body!.getReader();
        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
              if (!line.startsWith("data: ")) continue;
              const data = line.slice(6).trim();
              if (data === "[DONE]") continue;

              try {
                const event = JSON.parse(data);
                if (
                  event.type === "content_block_delta" &&
                  event.delta?.type === "text_delta"
                ) {
                  const text = event.delta.text;
                  controller.enqueue(
                    encoder.encode(`data: ${JSON.stringify({ text })}\n\n`)
                  );
                }
                if (event.type === "message_stop") {
                  controller.enqueue(encoder.encode("data: [DONE]\n\n"));
                }
              } catch {
                // Skip unparseable lines
              }
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (err) {
          console.error("Stream error:", err);
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
