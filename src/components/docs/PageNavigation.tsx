import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  category?: string;
}

interface PageNavigationProps {
  prev?: NavItem;
  next?: NavItem;
  className?: string;
}

const PageNavigation = ({ prev, next, className }: PageNavigationProps) => {
  if (!prev && !next) return null;

  return (
    <nav className={cn("page-navigation mt-12 pt-8 border-t border-border", className)}>
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        {prev ? (
          <Link
            to={prev.href}
            className="group flex-1 flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all"
          >
            <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Previous</p>
              <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                {prev.title}
              </p>
              {prev.category && (
                <p className="text-xs text-muted-foreground">{prev.category}</p>
              )}
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {next ? (
          <Link
            to={next.href}
            className="group flex-1 flex items-center justify-end gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all"
          >
            <div className="text-right">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Next</p>
              <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                {next.title}
              </p>
              {next.category && (
                <p className="text-xs text-muted-foreground">{next.category}</p>
              )}
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </nav>
  );
};

export default PageNavigation;
