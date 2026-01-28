import { Download, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
  href: string;
  filename: string;
  fileSize?: string;
  variant?: "default" | "outline";
  className?: string;
}

const DownloadButton = ({
  href,
  filename,
  fileSize,
  variant = "default",
  className,
}: DownloadButtonProps) => {
  return (
    <a href={href} download={filename} className={cn("inline-block", className)}>
      <Button variant={variant} className="gap-2">
        <FileText className="h-4 w-4" />
        <span>{filename}</span>
        {fileSize && (
          <span className="text-xs opacity-70">({fileSize})</span>
        )}
        <Download className="h-4 w-4" />
      </Button>
    </a>
  );
};

export default DownloadButton;
