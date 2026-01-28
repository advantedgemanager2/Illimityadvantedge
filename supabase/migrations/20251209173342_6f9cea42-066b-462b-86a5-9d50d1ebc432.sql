-- Create page_versions table to store version history
CREATE TABLE public.page_versions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_id UUID NOT NULL REFERENCES public.pages(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  sections_snapshot JSONB NOT NULL DEFAULT '[]'::jsonb,
  sources_snapshot JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE public.page_versions ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Anyone can view page versions"
ON public.page_versions
FOR SELECT
USING (true);

CREATE POLICY "Admins can insert versions"
ON public.page_versions
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete versions"
ON public.page_versions
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create index for faster lookups
CREATE INDEX idx_page_versions_page_id ON public.page_versions(page_id);
CREATE INDEX idx_page_versions_created_at ON public.page_versions(created_at DESC);