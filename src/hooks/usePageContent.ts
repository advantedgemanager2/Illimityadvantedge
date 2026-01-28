import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Json } from "@/integrations/supabase/types";

export interface PageSection {
  id: string;
  section_id: string;
  section_type: string;
  title: string | null;
  content: Json;
  sort_order: number;
}

export interface PageSource {
  id: string;
  source_number: number;
  title: string;
  author: string | null;
  year: string | null;
  url: string | null;
}

export interface PageContent {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  last_updated: string | null;
  tags: string[];
  page_sections: PageSection[];
  page_sources: PageSource[];
}

export function usePageContent(slug: string) {
  return useQuery({
    queryKey: ["page-content", slug],
    queryFn: async (): Promise<PageContent | null> => {
      const { data, error } = await supabase
        .from("pages")
        .select(`
          *,
          page_sections(*),
          page_sources(*)
        `)
        .eq("slug", slug)
        .maybeSingle();

      if (error) {
        console.error("Error fetching page content:", error);
        return null;
      }

      if (!data) return null;

      return {
        ...data,
        page_sections: (data.page_sections || []).sort(
          (a, b) => (a.sort_order || 0) - (b.sort_order || 0)
        ),
        page_sources: (data.page_sources || []).sort(
          (a, b) => (a.source_number || 0) - (b.source_number || 0)
        ),
      } as PageContent;
    },
  });
}

// Helper to get a specific section's content
export function getSectionContent(
  pageContent: PageContent | null | undefined,
  sectionId: string
): Json | null {
  if (!pageContent) return null;
  const section = pageContent.page_sections.find((s) => s.section_id === sectionId);
  return section?.content || null;
}

// Helper to get text from a section
export function getSectionText(
  pageContent: PageContent | null | undefined,
  sectionId: string,
  fallback: string = ""
): string {
  const content = getSectionContent(pageContent, sectionId);
  if (!content || typeof content !== "object" || Array.isArray(content)) return fallback;
  return (content as Record<string, unknown>).text as string || fallback;
}

// Helper to get list items from a section
export function getSectionList(
  pageContent: PageContent | null | undefined,
  sectionId: string,
  fallback: string[] = []
): string[] {
  const content = getSectionContent(pageContent, sectionId);
  if (!content || typeof content !== "object" || Array.isArray(content)) return fallback;
  return ((content as Record<string, unknown>).items as string[]) || fallback;
}
