import { useMemo } from "react";
import { useNavigation } from "@/hooks/useNavigation";

interface NavLink {
  title: string;
  href: string;
  category: string;
}

export function usePageNavigation(slug: string) {
  const { data: categories } = useNavigation();

  return useMemo(() => {
    if (!categories || categories.length === 0) return { prev: undefined, next: undefined };

    // Flatten all pages in order: categories sorted by sort_order, pages within each sorted by sort_order
    const flatPages: { title: string; slug: string; category: string }[] = [];
    for (const cat of categories) {
      for (const page of cat.pages) {
        flatPages.push({ title: page.title, slug: page.slug, category: cat.name });
      }
    }

    const currentIndex = flatPages.findIndex((p) => p.slug === slug);
    if (currentIndex === -1) return { prev: undefined, next: undefined };

    let prev: NavLink | undefined;
    let next: NavLink | undefined;

    if (currentIndex > 0) {
      const p = flatPages[currentIndex - 1];
      prev = { title: p.title, href: `/${p.slug}`, category: p.category };
    }

    if (currentIndex < flatPages.length - 1) {
      const n = flatPages[currentIndex + 1];
      next = { title: n.title, href: `/${n.slug}`, category: n.category };
    }

    return { prev, next };
  }, [categories, slug]);
}
