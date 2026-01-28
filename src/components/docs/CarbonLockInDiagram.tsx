import { cn } from "@/lib/utils";
import { Cog, Building2, Users } from "lucide-react";

const CarbonLockInDiagram = () => {
  return (
    <div className="my-8 p-6 bg-muted/30 rounded-xl border border-border">
      <h4 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-6">
        Carbon Lock-in Reinforcement Cycle
      </h4>
      
      <div className="relative w-full max-w-lg mx-auto aspect-square">
        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-destructive/10 border-2 border-dashed border-destructive/30 flex items-center justify-center">
            <span className="text-xs font-medium text-destructive text-center px-2">
              Mutual Reinforcement
            </span>
          </div>
        </div>

        {/* SVG Arrows */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          {/* Arrow from Tech to Institutional */}
          <path
            d="M 140 100 Q 200 140 260 100"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="4 2"
            className="opacity-60"
          />
          <polygon
            points="260,100 250,95 250,105"
            fill="hsl(var(--primary))"
            className="opacity-60"
          />
          
          {/* Arrow from Institutional to Behavioral */}
          <path
            d="M 310 150 Q 330 220 290 290"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="4 2"
            className="opacity-60"
          />
          <polygon
            points="290,290 295,280 285,280"
            fill="hsl(var(--primary))"
            className="opacity-60"
          />
          
          {/* Arrow from Behavioral to Tech */}
          <path
            d="M 110 290 Q 70 220 90 150"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="4 2"
            className="opacity-60"
          />
          <polygon
            points="90,150 85,160 95,160"
            fill="hsl(var(--primary))"
            className="opacity-60"
          />

          {/* Reverse arrows */}
          {/* Arrow from Institutional to Tech */}
          <path
            d="M 250 120 Q 200 160 150 120"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            strokeDasharray="4 2"
            className="opacity-40"
          />
          
          {/* Arrow from Behavioral to Institutional */}
          <path
            d="M 280 280 Q 310 210 300 160"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            strokeDasharray="4 2"
            className="opacity-40"
          />
          
          {/* Arrow from Tech to Behavioral */}
          <path
            d="M 100 160 Q 80 230 120 280"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            strokeDasharray="4 2"
            className="opacity-40"
          />
        </svg>

        {/* Technological Lock-in - Top Left */}
        <div className="absolute top-0 left-0 w-40">
          <div className={cn(
            "p-4 rounded-lg border-2 bg-card shadow-md",
            "border-primary/50 hover:border-primary transition-colors"
          )}>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-md bg-primary/10">
                <Cog className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-sm text-foreground">Technological</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Infrastructure & technology influencing energy supply and emissions
            </p>
          </div>
        </div>

        {/* Institutional Lock-in - Top Right */}
        <div className="absolute top-0 right-0 w-40">
          <div className={cn(
            "p-4 rounded-lg border-2 bg-card shadow-md",
            "border-secondary/50 hover:border-secondary transition-colors"
          )}>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-md bg-secondary/10">
                <Building2 className="w-5 h-5 text-secondary-foreground" />
              </div>
              <span className="font-semibold text-sm text-foreground">Institutional</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Governance & decision-making processes impacting energy systems
            </p>
          </div>
        </div>

        {/* Behavioral Lock-in - Bottom Center */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40">
          <div className={cn(
            "p-4 rounded-lg border-2 bg-card shadow-md",
            "border-accent/50 hover:border-accent transition-colors"
          )}>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-md bg-accent/10">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <span className="font-semibold text-sm text-foreground">Behavioural</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Habits & norms driving demand for energy-related goods/services
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-6 max-w-md mx-auto">
        Each type of lock-in reinforces the others, creating collective resistance to change. 
        Breaking free in one area triggers responses in the other areas.
      </p>
    </div>
  );
};

export default CarbonLockInDiagram;
