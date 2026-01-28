import { ReactNode } from "react";
import { Check, Circle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ListStyle = "bullet" | "check" | "number" | "arrow";

interface StyledListProps {
  items: ReactNode[];
  style?: ListStyle;
  className?: string;
}

const icons = {
  bullet: Circle,
  check: Check,
  arrow: ChevronRight,
};

const StyledList = ({ items, style = "bullet", className }: StyledListProps) => {
  const isNumbered = style === "number";
  const Icon = !isNumbered ? icons[style] : null;

  return (
    <ul className={cn("styled-list my-4 space-y-2", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          {isNumbered ? (
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
              {index + 1}
            </span>
          ) : Icon ? (
            <Icon className={cn(
              "flex-shrink-0 h-5 w-5 mt-0.5",
              style === "check" && "text-primary",
              style === "bullet" && "text-muted-foreground h-2 w-2 mt-2",
              style === "arrow" && "text-primary"
            )} />
          ) : null}
          <span className="text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default StyledList;
