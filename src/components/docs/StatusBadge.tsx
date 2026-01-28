import { cn } from "@/lib/utils";

type BadgeVariant = "coming-soon" | "updated" | "new" | "sector" | "default";

interface StatusBadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  "coming-soon": "bg-accent/20 text-accent border-accent/30",
  "updated": "bg-primary/20 text-primary border-primary/30",
  "new": "bg-emerald-500/20 text-emerald-600 border-emerald-500/30",
  "sector": "bg-secondary/20 text-secondary border-secondary/30",
  "default": "bg-muted text-muted-foreground border-border",
};

const StatusBadge = ({ variant = "default", children, className }: StatusBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default StatusBadge;
