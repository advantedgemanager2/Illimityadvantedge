import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Json } from "@/integrations/supabase/types";

type CtaPlacement = "inline" | "side";
type CtaVariant = "default" | "secondary" | "outline";
type CtaSize = "sm" | "default" | "lg";

export interface CtaButtonProps {
  buttonText: string;
  url: string;
  description?: string;
  placement?: CtaPlacement;
  variant?: CtaVariant;
  size?: CtaSize;
}

export function getCtaButtonData(content: Json): CtaButtonProps {
  if (content && typeof content === "object" && !Array.isArray(content)) {
    const c = content as Record<string, unknown>;
    return {
      buttonText: (c.buttonText as string) || "Contact Us",
      url: (c.url as string) || "#",
      description: (c.description as string) || undefined,
      placement: (c.placement as CtaPlacement) || "inline",
      variant: (c.variant as CtaVariant) || "default",
      size: (c.size as CtaSize) || "default",
    };
  }
  return { buttonText: "Contact Us", url: "#" };
}

export default function CtaButton({
  buttonText,
  url,
  description,
  placement = "inline",
  variant = "default",
  size = "default",
}: CtaButtonProps) {
  const isExternal = url.startsWith("http") || url.startsWith("mailto:");

  if (placement === "side") {
    return (
      <div className="rounded-lg border border-border bg-muted/30 p-4 space-y-3">
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        )}
        <Button variant={variant} size={size} className="w-full" asChild>
          <a
            href={url}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    );
  }

  // Inline / bottom placement
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-muted/30 p-6 my-8",
        "flex flex-col sm:flex-row items-start sm:items-center gap-4"
      )}
    >
      {description && (
        <p className="flex-1 text-foreground leading-relaxed">{description}</p>
      )}
      <Button variant={variant} size={size} className="shrink-0" asChild>
        <a
          href={url}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  );
}
