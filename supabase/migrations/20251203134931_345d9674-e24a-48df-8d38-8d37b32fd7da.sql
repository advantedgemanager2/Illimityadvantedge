-- 1. Role enum and user_roles table
CREATE TYPE public.app_role AS ENUM ('admin', 'editor');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, role)
);

-- 2. Pages table (stores page metadata)
CREATE TABLE public.pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  last_updated DATE DEFAULT CURRENT_DATE,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Page sections table (stores editable content blocks)
CREATE TABLE public.page_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES public.pages(id) ON DELETE CASCADE NOT NULL,
  section_id TEXT NOT NULL,
  section_type TEXT NOT NULL,
  title TEXT,
  content JSONB NOT NULL DEFAULT '{}',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(page_id, section_id)
);

-- 4. Page sources table (citations)
CREATE TABLE public.page_sources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES public.pages(id) ON DELETE CASCADE NOT NULL,
  source_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  author TEXT,
  year TEXT,
  url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(page_id, source_number)
);

-- 5. Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- 6. Enable RLS on all tables
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_sources ENABLE ROW LEVEL SECURITY;

-- 7. RLS Policies for user_roles
CREATE POLICY "Users can view own role" ON public.user_roles 
  FOR SELECT TO authenticated 
  USING (auth.uid() = user_id);

-- 8. RLS Policies for pages (public read, admin write)
CREATE POLICY "Anyone can view pages" ON public.pages 
  FOR SELECT USING (true);

CREATE POLICY "Admins can insert pages" ON public.pages 
  FOR INSERT TO authenticated 
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update pages" ON public.pages 
  FOR UPDATE TO authenticated 
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete pages" ON public.pages 
  FOR DELETE TO authenticated 
  USING (public.has_role(auth.uid(), 'admin'));

-- 9. RLS Policies for page_sections
CREATE POLICY "Anyone can view sections" ON public.page_sections 
  FOR SELECT USING (true);

CREATE POLICY "Admins can insert sections" ON public.page_sections 
  FOR INSERT TO authenticated 
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update sections" ON public.page_sections 
  FOR UPDATE TO authenticated 
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete sections" ON public.page_sections 
  FOR DELETE TO authenticated 
  USING (public.has_role(auth.uid(), 'admin'));

-- 10. RLS Policies for page_sources
CREATE POLICY "Anyone can view sources" ON public.page_sources 
  FOR SELECT USING (true);

CREATE POLICY "Admins can insert sources" ON public.page_sources 
  FOR INSERT TO authenticated 
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update sources" ON public.page_sources 
  FOR UPDATE TO authenticated 
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete sources" ON public.page_sources 
  FOR DELETE TO authenticated 
  USING (public.has_role(auth.uid(), 'admin'));

-- 11. Update timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_pages_updated_at
  BEFORE UPDATE ON public.pages
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_page_sections_updated_at
  BEFORE UPDATE ON public.page_sections
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();