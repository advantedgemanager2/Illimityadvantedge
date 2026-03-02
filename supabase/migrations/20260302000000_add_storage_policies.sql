-- Storage policies for page-media bucket

-- Allow anyone to read (public bucket for rendering images on frontend)
CREATE POLICY "Public read access on page-media"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'page-media');

-- Allow admin users to upload files
CREATE POLICY "Admin users can upload to page-media"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'page-media'
    AND EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );

-- Allow admin users to update their uploads
CREATE POLICY "Admin users can update page-media"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'page-media'
    AND EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );

-- Allow admin users to delete files
CREATE POLICY "Admin users can delete from page-media"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'page-media'
    AND EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );
