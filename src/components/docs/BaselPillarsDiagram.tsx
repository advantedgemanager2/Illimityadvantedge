import { Building2, Shield, Eye, ArrowRight, ArrowLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    id: "pillar-1",
    number: "1",
    title: "Minimum Capital",
    subtitle: "Requirements",
    icon: Building2,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-600 dark:text-blue-400",
    items: ["Credit Risk", "Market Risk", "Operational Risk", "Risk-Weighted Assets (RWA)"],
  },
  {
    id: "pillar-2",
    number: "2",
    title: "Supervisory Review",
    subtitle: "& Evaluation",
    icon: Shield,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    textColor: "text-emerald-600 dark:text-emerald-400",
    items: ["ICAAP", "ILAAP", "SREP Process", "Pillar 2 Requirements (P2R)"],
  },
  {
    id: "pillar-3",
    number: "3",
    title: "Market Discipline",
    subtitle: "& Disclosure",
    icon: Eye,
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-600 dark:text-amber-400",
    items: ["Public Disclosure", "Transparency", "Comparability", "5 Guiding Principles"],
  },
];

const BaselPillarsDiagram = () => {
  return (
    <div className="my-8 p-6 bg-muted/30 rounded-xl border border-border">
      <h4 className="text-lg font-semibold text-foreground text-center mb-2">
        The Three Pillars of the Basel Framework
      </h4>
      <p className="text-sm text-muted-foreground text-center mb-6">
        Integrated prudential regulation for banking supervision
      </p>

      {/* Pillars Grid */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              className={cn(
                "relative p-5 rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                pillar.bgColor,
                pillar.borderColor
              )}
            >
              {/* Pillar Number Badge */}
              <div
                className={cn(
                  "absolute -top-3 left-4 px-3 py-1 rounded-full text-white text-xs font-bold bg-gradient-to-r",
                  pillar.color
                )}
              >
                Pillar {pillar.number}
              </div>

              {/* Icon */}
              <div className="flex justify-center mt-2 mb-3">
                <div className={cn("p-3 rounded-full", pillar.bgColor)}>
                  <Icon className={cn("h-8 w-8", pillar.textColor)} />
                </div>
              </div>

              {/* Title */}
              <h5 className={cn("text-center font-semibold", pillar.textColor)}>
                {pillar.title}
              </h5>
              <p className="text-center text-sm text-muted-foreground mb-3">
                {pillar.subtitle}
              </p>

              {/* Items */}
              <ul className="space-y-1.5">
                {pillar.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <div className={cn("h-1.5 w-1.5 rounded-full bg-gradient-to-r", pillar.color)} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Connection Arrow (between pillars) */}
              {index < 2 && (
                <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                  <ArrowLeftRight className="h-5 w-5 text-muted-foreground/50" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Foundation Bar */}
      <div className="relative">
        <div className="absolute left-1/4 right-1/4 -top-3 flex justify-center">
          <div className="flex gap-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-3 w-0.5 bg-primary/30" />
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-lg p-4 border border-primary/20">
          <div className="flex items-center justify-center gap-3">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              CRR/CRD Implementation in EU
            </span>
            <ArrowRight className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Climate Risk Integration
            </span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-border/50">
        <p className="text-xs text-muted-foreground text-center">
          <strong>Key:</strong> ICAAP = Internal Capital Adequacy Assessment Process | 
          ILAAP = Internal Liquidity Assessment Process | 
          SREP = Supervisory Review and Evaluation Process | 
          RWA = Risk-Weighted Assets
        </p>
      </div>
    </div>
  );
};

export default BaselPillarsDiagram;
