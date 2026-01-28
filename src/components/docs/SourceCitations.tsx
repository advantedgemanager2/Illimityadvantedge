import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Source {
  id: number;
  title: string;
  author?: string;
  year?: string;
  url?: string;
}

interface SourceCitationsProps {
  sources: Source[];
  className?: string;
}

const SourceCitations = ({ sources, className }: SourceCitationsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (sources.length === 0) return null;

  return (
    <div className={cn("source-citations mt-12 pt-8 border-t border-border", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-lg font-semibold text-foreground hover:text-primary transition-colors"
      >
        <span>Sources & References</span>
        <span className="text-sm font-normal text-muted-foreground">({sources.length})</span>
        <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <ol className="mt-4 space-y-3 list-decimal list-inside">
          {sources.map((source) => (
            <li key={source.id} className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">{source.title}</span>
              {source.author && <span className="ml-1">— {source.author}</span>}
              {source.year && <span className="ml-1">({source.year})</span>}
              {source.url && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex items-center gap-1 text-primary hover:underline"
                >
                  View <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default SourceCitations;
