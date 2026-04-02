-- =============================================================
-- RAG Chatbot: pgvector extension + page_section_embeddings table
-- =============================================================

-- 1. Enable pgvector
CREATE EXTENSION IF NOT EXISTS vector WITH SCHEMA extensions;

-- 2. Embeddings table (denormalized for fast retrieval)
CREATE TABLE public.page_section_embeddings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES public.pages(id) ON DELETE CASCADE NOT NULL,
  section_id TEXT NOT NULL,
  page_slug TEXT NOT NULL,
  page_title TEXT NOT NULL,
  section_title TEXT,
  content_text TEXT NOT NULL,
  embedding extensions.vector(1024),
  chunk_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Indexes
CREATE INDEX idx_embeddings_page_id ON public.page_section_embeddings(page_id);
CREATE INDEX idx_embeddings_page_slug ON public.page_section_embeddings(page_slug);

-- No vector index for now — sequential scan gives perfect recall and is
-- fast enough for <5000 rows. Add an HNSW index if the table grows beyond
-- ~10k rows: CREATE INDEX ... USING hnsw (embedding vector_cosine_ops);

-- 4. Updated-at trigger
CREATE TRIGGER update_page_section_embeddings_updated_at
  BEFORE UPDATE ON public.page_section_embeddings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 5. RLS: public SELECT, service-role-only writes
ALTER TABLE public.page_section_embeddings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view embeddings" ON public.page_section_embeddings
  FOR SELECT USING (true);

CREATE POLICY "Service role can insert embeddings" ON public.page_section_embeddings
  FOR INSERT TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can update embeddings" ON public.page_section_embeddings
  FOR UPDATE TO service_role
  USING (true);

CREATE POLICY "Service role can delete embeddings" ON public.page_section_embeddings
  FOR DELETE TO service_role
  USING (true);

-- 6. Semantic search RPC function
CREATE OR REPLACE FUNCTION public.match_sections(
  query_embedding extensions.vector(1024),
  match_count INTEGER DEFAULT 10
)
RETURNS TABLE (
  id UUID,
  page_slug TEXT,
  page_title TEXT,
  section_id TEXT,
  section_title TEXT,
  content_text TEXT,
  similarity FLOAT
)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, extensions
AS $$
BEGIN
  RETURN QUERY
  SELECT
    pse.id,
    pse.page_slug,
    pse.page_title,
    pse.section_id,
    pse.section_title,
    pse.content_text,
    1 - (pse.embedding <=> query_embedding) AS similarity
  FROM public.page_section_embeddings pse
  ORDER BY pse.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;
