import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Hash } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useSearchIndex, searchPages, SearchResult } from "@/hooks/useSearchIndex";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const highlightMatch = (text: string, query: string) => {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-accent/30 text-foreground rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
};

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const { data: pages } = useSearchIndex();

  const results: SearchResult[] = useMemo(() => {
    if (!pages || pages.length === 0) return [];
    return searchPages(pages, query);
  }, [pages, query]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(results.map((r) => r.category)));
    return ["All", ...cats];
  }, [results]);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return results;
    return results.filter((r) => r.category === activeCategory);
  }, [results, activeCategory]);

  const grouped = useMemo(() => {
    return filtered.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, SearchResult[]>);
  }, [filtered]);

  const handleSelect = (result: SearchResult) => {
    const hash = result.sectionId ? `#${result.sectionId}` : "";
    navigate(`/${result.pageSlug}${hash}`);
    onOpenChange(false);
    setQuery("");
    setActiveCategory("All");
  };

  // Show all pages when query is empty
  const allPages = useMemo(() => {
    if (query || !pages) return null;
    const byCategory: Record<string, typeof pages> = {};
    for (const p of pages) {
      const cat = (p as any).page_categories?.name || "Uncategorized";
      if (!byCategory[cat]) byCategory[cat] = [];
      byCategory[cat].push(p);
    }
    return byCategory;
  }, [query, pages]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search pages and content..."
        value={query}
        onValueChange={setQuery}
      />

      {/* Category filters — only show when there are search results */}
      {query && categories.length > 1 && (
        <div className="flex gap-1 px-3 py-2 border-b border-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-2.5 py-1 text-xs font-medium rounded-full transition-colors",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <CommandList className="max-h-[400px]">
        {query && filtered.length === 0 && (
          <CommandEmpty className="py-6 text-center text-sm text-muted-foreground">
            No results found for "{query}"
          </CommandEmpty>
        )}

        {/* Search results */}
        {query &&
          Object.entries(grouped).map(([category, items]) => (
            <CommandGroup key={category} heading={category}>
              {items.map((item, idx) => (
                <CommandItem
                  key={`${item.pageSlug}-${item.sectionId}-${idx}`}
                  value={`${item.pageTitle} ${item.sectionTitle || ""} ${item.snippet}`}
                  onSelect={() => handleSelect(item)}
                  className="flex items-start gap-3 cursor-pointer py-3"
                >
                  {item.sectionId ? (
                    <Hash className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  ) : (
                    <FileText className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">
                      {highlightMatch(item.pageTitle, query)}
                      {item.sectionTitle && (
                        <span className="text-muted-foreground font-normal">
                          {" "}
                          &rsaquo; {highlightMatch(item.sectionTitle, query)}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                      {highlightMatch(item.snippet, query)}
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}

        {/* Browse all pages when query is empty */}
        {!query &&
          allPages &&
          Object.entries(allPages).map(([category, items]) => (
            <CommandGroup key={category} heading={category}>
              {items.map((page) => (
                <CommandItem
                  key={page.slug}
                  value={page.title}
                  onSelect={() => {
                    navigate(`/${page.slug}`);
                    onOpenChange(false);
                  }}
                  className="flex items-start gap-3 cursor-pointer py-3"
                >
                  <FileText className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{page.title}</div>
                    {page.description && (
                      <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                        {page.description}
                      </div>
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
      </CommandList>

      <div className="border-t border-border px-3 py-2 text-xs text-muted-foreground flex items-center gap-4">
        <span>
          <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">
            ↑↓
          </kbd>{" "}
          Navigate
        </span>
        <span>
          <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">↵</kbd>{" "}
          Select
        </span>
        <span>
          <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">
            Esc
          </kbd>{" "}
          Close
        </span>
      </div>
    </CommandDialog>
  );
};

export default SearchDialog;
