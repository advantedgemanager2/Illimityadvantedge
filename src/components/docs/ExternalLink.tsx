import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const SmartLink = ({ href, children, className }: LinkProps) => {
  const isExternal = href.startsWith("http") || href.startsWith("//");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-1 text-primary no-underline hover:underline underline-offset-4 transition-colors",
          className
        )}
      >
        {children}
        <ExternalLinkIcon className="h-3 w-3 shrink-0" aria-hidden="true" />
        <span className="sr-only">(opens in new tab)</span>
      </a>
    );
  }

  return (
    <Link
      to={href}
      className={cn(
        "text-primary no-underline hover:underline underline-offset-4 transition-colors font-medium",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default SmartLink;
