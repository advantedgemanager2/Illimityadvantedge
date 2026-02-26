import DynamicIcon from "@/components/docs/DynamicIcon";
import type { Json } from "@/integrations/supabase/types";

interface CardItem {
  icon?: string;
  title: string;
  description: string;
  color?: string;
}

interface CardGridProps {
  columns?: number;
  cards: CardItem[];
}

const colorClasses: Record<string, string> = {
  primary: "border-l-primary",
  emerald: "border-l-emerald-500",
  blue: "border-l-blue-500",
  amber: "border-l-amber-500",
  red: "border-l-red-500",
  green: "border-l-green-500",
  purple: "border-l-purple-500",
  cyan: "border-l-cyan-500",
};

const colClasses: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

export function getCardGridData(content: Json): CardGridProps {
  if (content && typeof content === "object" && !Array.isArray(content)) {
    const c = content as Record<string, unknown>;
    return {
      columns: (c.columns as number) || 3,
      cards: (c.cards as CardItem[]) || [],
    };
  }
  return { cards: [] };
}

export default function CardGrid({ columns = 3, cards }: CardGridProps) {
  if (cards.length === 0) return null;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${colClasses[columns] || "lg:grid-cols-3"} gap-4 my-6`}>
      {cards.map((card, i) => (
        <div
          key={i}
          className={`p-4 bg-muted/30 rounded-lg border border-border ${
            card.color ? `border-l-4 ${colorClasses[card.color] || ""}` : ""
          }`}
        >
          {card.icon && (
            <DynamicIcon name={card.icon} className="h-5 w-5 text-primary mb-2" />
          )}
          <h4 className="font-semibold text-foreground mb-2">{card.title}</h4>
          <p className="text-sm text-muted-foreground">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
