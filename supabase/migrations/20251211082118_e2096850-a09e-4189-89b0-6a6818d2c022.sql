-- Fix: Remove public access to created_by field in page_versions

-- Drop the existing public SELECT policy
DROP POLICY IF EXISTS "Anyone can view page versions" ON public.page_versions;

-- Create a new policy that only allows admins to SELECT directly from page_versions
CREATE POLICY "Admins can view page versions with creator info"
ON public.page_versions
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create a public view that excludes the sensitive created_by field
CREATE OR REPLACE VIEW public.page_versions_public AS
SELECT 
  id,
  page_id,
  title,
  description,
  sections_snapshot,
  sources_snapshot,
  created_at
FROM public.page_versions;

-- Grant SELECT on the view to anon and authenticated roles
GRANT SELECT ON public.page_versions_public TO anon, authenticated;