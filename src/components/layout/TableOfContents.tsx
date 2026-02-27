import { useEffect, useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
  children?: ReactNode;
}

const TableOfContents = ({ items, children }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  const TocContent = () => (
    <nav className="border-l border-border" aria-label="Table of contents">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={() => setIsExpanded(false)}
          className={cn(
            "toc-link",
            item.level === 3 && "pl-6",
            activeId === item.id && "toc-link-active"
          )}
          aria-current={activeId === item.id ? "location" : undefined}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile collapsible ToC */}
      <div className="xl:hidden mb-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full px-4 py-3 bg-muted/50 rounded-lg text-sm font-medium"
          aria-expanded={isExpanded}
        >
          <span>On this page</span>
          <ChevronDown className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
        </button>
        {isExpanded && (
          <div className="mt-2 p-4 bg-muted/30 rounded-lg">
            <TocContent />
          </div>
        )}
      </div>

      {/* Desktop sticky ToC */}
      <div className="hidden xl:block w-[240px] shrink-0">
        <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            On this page
          </p>
          <TocContent />
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </>
  );
};

export default TableOfContents;
