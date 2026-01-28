-- Fix the security definer view issue by setting security_invoker = true
ALTER VIEW public.page_versions_public SET (security_invoker = true);