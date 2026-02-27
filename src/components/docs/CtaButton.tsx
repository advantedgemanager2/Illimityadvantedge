import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactFormDialog from "@/components/docs/ContactFormDialog";
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
  pageSlug?: string;
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
  pageSlug,
}: CtaButtonProps) {
  const [formOpen, setFormOpen] = useState(false);

  // Determine if this CTA should open the contact form or navigate
  const isContactForm = !url || url === "#" || url === "contact" || url === "form";
  const isExternal = url.startsWith("http") || url.startsWith("mailto:");

  const handleClick = () => {
    if (isContactForm) {
      setFormOpen(true);
    } else if (isExternal) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  };

  if (placement === "side") {
    return (
      <>
        <div className="rounded-lg border border-border bg-muted/30 p-4 space-y-3">
          {description && (
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          )}
          <Button variant={variant} size={size} className="w-full" onClick={handleClick}>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <ContactFormDialog
          open={formOpen}
          onOpenChange={setFormOpen}
          ctaDescription={description}
          pageSlug={pageSlug}
        />
      </>
    );
  }

  // Inline / bottom placement
  return (
    <>
      <div
        className={cn(
          "rounded-lg border border-border bg-muted/30 p-6 my-8",
          "flex flex-col sm:flex-row items-start sm:items-center gap-4"
        )}
      >
        {description && (
          <p className="flex-1 text-foreground leading-relaxed">{description}</p>
        )}
        <Button variant={variant} size={size} className="shrink-0" onClick={handleClick}>
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <ContactFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        ctaDescription={description}
        pageSlug={pageSlug}
      />
    </>
  );
}
