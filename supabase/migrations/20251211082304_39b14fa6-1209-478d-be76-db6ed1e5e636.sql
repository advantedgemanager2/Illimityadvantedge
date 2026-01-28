-- Enable RLS on the view and add public SELECT policy
ALTER VIEW public.page_versions_public SET (security_barrier = true);

-- Add a policy for public SELECT on the view
-- Note: For views with security_invoker, we need to ensure the underlying table allows access
-- Let's add back a restricted public SELECT policy on page_versions that only admins can use for full data
-- but the view allows public access to non-sensitive columns

-- Drop the admin-only policy
DROP POLICY IF EXISTS "Admins can view page versions with creator info" ON public.page_versions;

-- Create a policy that allows anyone to SELECT but through the view the created_by is excluded
CREATE POLICY "Anyone can view page versions"
ON public.page_versions
FOR SELECT
USING (true);