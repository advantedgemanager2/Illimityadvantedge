import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface NavigationPage {
  id: string;
  slug: string;
  title: string;
  sort_order: number;
  is_published: boolean;
  badge: string | null;
}

export interface NavigationCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  sort_order: number;
  pages: NavigationPage[];
}

export function useNavigation() {
  return useQuery({
    queryKey: ["navigation"],
    queryFn: async (): Promise<NavigationCategory[]> => {
      const { data, error } = await supabase
        .from("page_categories")
        .select(`
          *,
          pages(id, slug, title, sort_order, is_published, badge)
        `)
        .order("sort_order");

      if (error) throw error;

      return (data || []).map((cat) => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        icon: cat.icon,
        sort_order: cat.sort_order,
        pages: ((cat.pages as NavigationPage[]) || [])
          .filter((p) => p.is_published)
          .sort((a, b) => a.sort_order - b.sort_order),
      }));
    },
    staleTime: 5 * 60 * 1000,
  });
}
