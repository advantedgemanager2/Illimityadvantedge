import { Calendar } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { cn } from "@/lib/utils";

interface PageMetaProps {
  lastUpdated?: string;
  tags?: string[];
  className?: string;
}

const PageMeta = ({ lastUpdated, tags, className }: PageMetaProps) => {
  return (
    <div className={cn("page-meta flex flex-wrap items-center gap-3 mb-4", className)}>
      {lastUpdated && (
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Last updated: {lastUpdated}</span>
        </div>
      )}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <StatusBadge key={tag} variant="sector">
              {tag}
            </StatusBadge>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageMeta;
