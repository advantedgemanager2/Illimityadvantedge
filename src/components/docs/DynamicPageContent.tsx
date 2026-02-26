import { ReactNode } from "react";
import DocsLayout from "@/components/layout/DocsLayout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TableOfContents from "@/components/layout/TableOfContents";
import PageMeta from "@/components/docs/PageMeta";
import PageNavigation from "@/components/docs/PageNavigation";
import SourceCitations from "@/components/docs/SourceCitations";
import Callout from "@/components/docs/Callout";
import StyledList from "@/components/docs/StyledList";
import AccordionSection from "@/components/docs/AccordionSection";
import DataTable from "@/components/docs/DataTable";
import BaselPillarsDiagram from "@/components/docs/BaselPillarsDiagram";
import TransitionPlanDiagram from "@/components/docs/TransitionPlanDiagram";
import CarbonLockInDiagram from "@/components/docs/CarbonLockInDiagram";
import StrategyDecisionPlanDiagram from "@/components/docs/StrategyDecisionPlanDiagram";
import CardGrid, { getCardGridData } from "@/components/docs/CardGrid";
import KpiMetric, { getKpiMetricData } from "@/components/docs/KpiMetric";
import ImageMedia, { getImageMediaData } from "@/components/docs/ImageMedia";
import { usePageContent, PageSection, PageSource } from "@/hooks/usePageContent";
import { Skeleton } from "@/components/ui/skeleton";
import type { Json } from "@/integrations/supabase/types";

interface DynamicPageContentProps {
  slug: string;
  breadcrumbs: { label: string; href?: string }[];
  navigation?: {
    prev?: { title: string; href: string; category: string };
    next?: { title: string; href: string; category: string };
  };
  fallback?: ReactNode;
}

// Map diagram names to components
const diagramComponents: Record<string, React.ComponentType> = {
  BaselPillarsDiagram,
  TransitionPlanDiagram,
  CarbonLockInDiagram,
  StrategyDecisionPlanDiagram,
};

// Helper to safely get content value
function getContentValue(content: Json, key: string): string {
  if (content && typeof content === "object" && !Array.isArray(content)) {
    return ((content as Record<string, unknown>)[key] as string) || "";
  }
  return "";
}

// Helper to safely get content items
function getContentItems(content: Json): string[] {
  if (content && typeof content === "object" && !Array.isArray(content)) {
    return ((content as Record<string, unknown>).items as string[]) || [];
  }
  return [];
}

// Helper to safely get accordion items
function getAccordionItems(content: Json): Array<{ title: string; content: ReactNode }> {
  if (content && typeof content === "object" && !Array.isArray(content)) {
    const items = (content as Record<string, unknown>).items as Array<{ title: string; content: string }>;
    if (Array.isArray(items)) {
      return items.map((item) => ({
        title: item.title || "",
        content: <p className="text-sm">{item.content}</p>,
      }));
    }
  }
  return [];
}

// Helper to safely get table data in dynamic format
function getTableData(content: Json): { 
  data: Array<Record<string, string>>; 
  columns: Array<{ key: string; header: string }>;
  caption?: string;
} {
  if (content && typeof content === "object" && !Array.isArray(content)) {
    const c = content as Record<string, unknown>;
    // Support both formats: headers/rows OR columns/data
    if (c.columns && c.data) {
      return {
        columns: c.columns as Array<{ key: string; header: string }>,
        data: c.data as Array<Record<string, string>>,
        caption: c.caption as string | undefined,
      };
    }
    // Convert simple headers/rows format
    if (c.headers && c.rows) {
      const headers = c.headers as string[];
      const rows = c.rows as string[][];
      const columns = headers.map((h, i) => ({ key: `col${i}`, header: h }));
      const data = rows.map((row) => {
        const obj: Record<string, string> = {};
        row.forEach((cell, i) => {
          obj[`col${i}`] = cell;
        });
        return obj;
      });
      return { columns, data, caption: c.caption as string | undefined };
    }
  }
  return { columns: [], data: [] };
}

// Render a single section based on its type
function renderSection(section: PageSection, index: number): ReactNode {
  const content = section.content || {};
  const key = section.id || `section-${index}`;

  switch (section.section_type) {
    case "heading":
      return (
        <section key={key} id={section.section_id} className="mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            {section.title || getContentValue(content, "text")}
          </h2>
        </section>
      );

    case "paragraph":
      return (
        <p key={key} className="text-muted-foreground mb-4">
          {getContentValue(content, "text")}
        </p>
      );

    case "callout":
      return (
        <Callout
          key={key}
          type={(getContentValue(content, "type") as "info" | "warning" | "tip" | "important") || "info"}
          title={getContentValue(content, "title") || section.title || undefined}
        >
          {getContentValue(content, "text")}
        </Callout>
      );

    case "list": {
      const listType = getContentValue(content, "listType") as "bullet" | "number" | "check" | "arrow";
      return (
        <StyledList
          key={key}
          style={listType || "bullet"}
          items={getContentItems(content)}
        />
      );
    }

    case "accordion":
      return <AccordionSection key={key} items={getAccordionItems(content)} />;

    case "table": {
      const tableData = getTableData(content);
      if (tableData.columns.length === 0) return null;
      return (
        <DataTable
          key={key}
          columns={tableData.columns}
          data={tableData.data}
          caption={tableData.caption}
        />
      );
    }

    case "blockquote":
      return (
        <blockquote
          key={key}
          className="border-l-4 border-primary pl-4 py-2 my-6 bg-muted/30 rounded-r-lg"
        >
          <p className="text-foreground italic">{getContentValue(content, "text")}</p>
          {getContentValue(content, "author") && (
            <cite className="text-sm text-muted-foreground mt-2 block">
              — {getContentValue(content, "author")}
            </cite>
          )}
        </blockquote>
      );

    case "diagram": {
      const diagramType = getContentValue(content, "diagramType");
      const DiagramComponent = diagramComponents[diagramType];
      if (DiagramComponent) {
        return <DiagramComponent key={key} />;
      }
      return null;
    }

    case "card_grid": {
      const cardData = getCardGridData(content);
      return <CardGrid key={key} columns={cardData.columns} cards={cardData.cards} />;
    }

    case "kpi_metric": {
      const kpiData = getKpiMetricData(content);
      return <KpiMetric key={key} columns={kpiData.columns} metrics={kpiData.metrics} />;
    }

    case "image_media": {
      const imageData = getImageMediaData(content);
      return <ImageMedia key={key} {...imageData} />;
    }

    default:
      return (
        <p key={key} className="text-muted-foreground mb-4">
          {getContentValue(content, "text")}
        </p>
      );
  }
}

// Generate TOC items from sections
function generateTocItems(sections: PageSection[]): Array<{ id: string; title: string; level: number }> {
  return sections
    .filter((s) => s.section_type === "heading" && s.section_id)
    .map((s) => ({
      id: s.section_id,
      title: s.title || getContentValue(s.content, "text") || "",
      level: 2,
    }));
}

// Convert page_sources to the format expected by SourceCitations
function formatSources(sources: PageSource[]): Array<{ id: number; title: string; author?: string; year?: string; url?: string }> {
  return sources.map((s) => ({
    id: s.source_number,
    title: s.title,
    author: s.author || undefined,
    year: s.year || undefined,
    url: s.url || undefined,
  }));
}

export default function DynamicPageContent({
  slug,
  breadcrumbs,
  navigation,
  fallback,
}: DynamicPageContentProps) {
  const { data: pageContent, isLoading, error } = usePageContent(slug);

  // Show fallback if no dynamic content and fallback provided
  if (!isLoading && !pageContent && fallback) {
    return <>{fallback}</>;
  }

  // Loading state
  if (isLoading) {
    return (
      <DocsLayout>
        <div className="flex gap-8">
          <article className="flex-1 min-w-0">
            <Skeleton className="h-6 w-64 mb-4" />
            <Skeleton className="h-10 w-96 mb-4" />
            <Skeleton className="h-4 w-32 mb-8" />
            <Skeleton className="h-24 w-full mb-4" />
            <Skeleton className="h-24 w-full mb-4" />
            <Skeleton className="h-24 w-full" />
          </article>
        </div>
      </DocsLayout>
    );
  }

  // Error or no content state
  if (error || !pageContent) {
    if (fallback) return <>{fallback}</>;
    return (
      <DocsLayout>
        <div className="text-center py-16">
          <p className="text-muted-foreground">Content not found.</p>
        </div>
      </DocsLayout>
    );
  }

  const tocItems = generateTocItems(pageContent.page_sections);
  const sources = formatSources(pageContent.page_sources);

  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs items={breadcrumbs} />

          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">
            {pageContent.title}
          </h1>

          <PageMeta
            lastUpdated={pageContent.last_updated || undefined}
            tags={pageContent.tags || []}
          />

          {pageContent.description && (
            <p className="text-lg text-muted-foreground mb-8">
              {pageContent.description}
            </p>
          )}

          {/* Render all sections */}
          {pageContent.page_sections.map((section, index) =>
            renderSection(section, index)
          )}

          {/* Source Citations */}
          {sources.length > 0 && <SourceCitations sources={sources} />}

          {/* Page Navigation */}
          {navigation && (
            <PageNavigation prev={navigation.prev} next={navigation.next} />
          )}
        </article>

        {tocItems.length > 0 && <TableOfContents items={tocItems} />}
      </div>
    </DocsLayout>
  );
}