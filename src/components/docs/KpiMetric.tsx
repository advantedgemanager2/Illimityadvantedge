import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { Json } from "@/integrations/supabase/types";

interface MetricItem {
  value: string;
  label: string;
  description?: string;
  trend?: "up" | "down" | "stable";
  trendLabel?: string;
  color?: string;
}

interface KpiMetricProps {
  columns?: number;
  metrics: MetricItem[];
}

const borderColorClasses: Record<string, string> = {
  green: "border-l-green-500",
  red: "border-l-red-500",
  blue: "border-l-blue-500",
  amber: "border-l-amber-500",
  primary: "border-l-primary",
  emerald: "border-l-emerald-500",
  purple: "border-l-purple-500",
};

const trendIcons = {
  up: TrendingUp,
  down: TrendingDown,
  stable: Minus,
};

const trendColors = {
  up: "text-green-500",
  down: "text-red-500",
  stable: "text-muted-foreground",
};

const colClasses: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

export function getKpiMetricData(content: Json): KpiMetricProps {
  if (content && typeof content === "object" && !Array.isArray(content)) {
    const c = content as Record<string, unknown>;
    return {
      columns: (c.columns as number) || 3,
      metrics: (c.metrics as MetricItem[]) || [],
    };
  }
  return { metrics: [] };
}

export default function KpiMetric({ columns = 3, metrics }: KpiMetricProps) {
  if (metrics.length === 0) return null;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${colClasses[columns] || "lg:grid-cols-3"} gap-4 my-6`}>
      {metrics.map((metric, i) => {
        const TrendIcon = metric.trend ? trendIcons[metric.trend] : null;
        return (
          <div
            key={i}
            className={`p-5 rounded-lg border border-border bg-card ${
              metric.color ? `border-l-4 ${borderColorClasses[metric.color] || ""}` : ""
            }`}
          >
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-foreground">
                {metric.value}
              </span>
              {TrendIcon && (
                <TrendIcon className={`h-5 w-5 mb-1 ${trendColors[metric.trend!]}`} />
              )}
            </div>
            <p className="text-sm font-medium text-foreground mt-1">
              {metric.label}
            </p>
            {metric.description && (
              <p className="text-xs text-muted-foreground mt-1">
                {metric.description}
              </p>
            )}
            {metric.trendLabel && (
              <p className="text-xs text-muted-foreground mt-1">
                {metric.trendLabel}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
