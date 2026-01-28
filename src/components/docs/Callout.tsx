import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "tip" | "important";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const config = {
  tip: {
    emoji: "💡",
    label: "TIP",
    borderColor: "border-l-emerald-500",
    labelColor: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/5",
  },
  info: {
    emoji: "ℹ️",
    label: "INFO",
    borderColor: "border-l-primary",
    labelColor: "text-primary",
    bgColor: "bg-primary/5",
  },
  warning: {
    emoji: "⚠️",
    label: "WARNING",
    borderColor: "border-l-accent",
    labelColor: "text-accent",
    bgColor: "bg-accent/5",
  },
  important: {
    emoji: "❗",
    label: "IMPORTANT",
    borderColor: "border-l-destructive",
    labelColor: "text-destructive",
    bgColor: "bg-destructive/5",
  },
};

const Callout = ({ type = "info", title, children }: CalloutProps) => {
  const { emoji, label, borderColor, labelColor, bgColor } = config[type];

  return (
    <div
      className={cn(
        "border-l-4 rounded-r-lg pl-4 pr-4 py-3 my-4",
        borderColor,
        bgColor
      )}
    >
      <div className="flex items-start gap-3">
        <span className="text-lg leading-none mt-0.5" role="img" aria-label={label}>
          {emoji}
        </span>
        <div className="flex-1 min-w-0">
          <span className={cn("text-xs font-semibold uppercase tracking-wide", labelColor)}>
            {title || label}
          </span>
          <div className="mt-1 text-sm text-foreground/90 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callout;
