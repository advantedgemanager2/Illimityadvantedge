import type { Json } from "@/integrations/supabase/types";

interface ImageMediaProps {
  src: string;
  alt: string;
  caption?: string;
  width?: "full" | "large" | "medium" | "small";
  alignment?: "left" | "center" | "right";
}

const widthClasses: Record<string, string> = {
  full: "max-w-full",
  large: "max-w-4xl",
  medium: "max-w-2xl",
  small: "max-w-sm",
};

const alignmentClasses: Record<string, string> = {
  left: "mr-auto",
  center: "mx-auto",
  right: "ml-auto",
};

export function getImageMediaData(content: Json): ImageMediaProps {
  if (content && typeof content === "object" && !Array.isArray(content)) {
    const c = content as Record<string, unknown>;
    return {
      src: (c.src as string) || "",
      alt: (c.alt as string) || "",
      caption: c.caption as string | undefined,
      width: (c.width as ImageMediaProps["width"]) || "full",
      alignment: (c.alignment as ImageMediaProps["alignment"]) || "center",
    };
  }
  return { src: "", alt: "" };
}

export default function ImageMedia({
  src,
  alt,
  caption,
  width = "full",
  alignment = "center",
}: ImageMediaProps) {
  if (!src) return null;

  return (
    <figure className={`my-6 ${alignmentClasses[alignment] || "mx-auto"}`}>
      <img
        src={src}
        alt={alt}
        className={`rounded-lg border border-border ${widthClasses[width] || "max-w-full"}`}
        loading="lazy"
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-muted-foreground text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
