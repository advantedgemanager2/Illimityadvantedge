-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  role text NOT NULL,
  message text NOT NULL,
  page_slug text,
  is_read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- RLS: no public access (edge function uses service_role key)
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Admin can read and update
CREATE POLICY "Admins can manage contact requests"
  ON contact_requests FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );
