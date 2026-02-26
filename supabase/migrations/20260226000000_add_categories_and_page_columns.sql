-- 1. Page categories table for dynamic navigation
CREATE TABLE public.page_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  icon TEXT NOT NULL DEFAULT 'FileText',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Add new columns to pages
ALTER TABLE public.pages
  ADD COLUMN category_id UUID REFERENCES public.page_categories(id) ON DELETE SET NULL,
  ADD COLUMN sort_order INTEGER DEFAULT 0,
  ADD COLUMN is_published BOOLEAN DEFAULT true,
  ADD COLUMN badge TEXT;

-- 3. Indexes
CREATE INDEX idx_pages_category_id ON public.pages(category_id);
CREATE INDEX idx_pages_sort_order ON public.pages(sort_order);
CREATE INDEX idx_page_categories_sort_order ON public.page_categories(sort_order);

-- 4. RLS for page_categories
ALTER TABLE public.page_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view categories" ON public.page_categories
  FOR SELECT USING (true);

CREATE POLICY "Admins can insert categories" ON public.page_categories
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update categories" ON public.page_categories
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete categories" ON public.page_categories
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- 5. Trigger for updated_at on page_categories
CREATE TRIGGER update_page_categories_updated_at
  BEFORE UPDATE ON public.page_categories
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
