import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

const CodeBlock = ({ code, language = "text", title, className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("code-block my-4 rounded-lg overflow-hidden", className)}>
      {title && (
        <div className="code-block-header flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
          <span className="text-xs text-muted-foreground uppercase">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="code-block-content p-4 overflow-x-auto bg-secondary text-secondary-foreground text-sm font-mono">
          <code>{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-md bg-background/10 hover:bg-background/20 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-primary" />
          ) : (
            <Copy className="h-4 w-4 text-secondary-foreground/70" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;
