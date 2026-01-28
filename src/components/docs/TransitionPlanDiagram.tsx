import { ArrowDown, ArrowRight, Building2, Shield, Leaf, TrendingUp, AlertTriangle, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const TransitionPlanDiagram = () => {
  const integratedComponents = [
    {
      icon: Building2,
      title: "Operational Plan",
      description: "Scope 1 & 2 emissions reduction",
    },
    {
      icon: Leaf,
      title: "Net Zero Plan",
      description: "Financed emissions across portfolio",
    },
    {
      icon: AlertTriangle,
      title: "Risk Analysis",
      description: "Scenario analysis & stress testing",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Finance",
      description: "ESG lending & profitability targets",
    },
  ];

  return (
    <div className="my-8 p-6 bg-muted/30 rounded-xl border border-border">
      {/* Title */}
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-foreground mb-2">
          Unified Transition Plan Framework
        </h4>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          The EBA Guidelines establish that there is only one transition plan serving both prudential and strategic purposes
        </p>
      </div>

      {/* Central Unified Plan */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="bg-primary/10 border-2 border-primary rounded-xl p-5 text-center max-w-md">
            <Target className="h-8 w-8 text-primary mx-auto mb-2" />
            <h5 className="font-semibold text-foreground text-lg">Single Transition Plan</h5>
            <p className="text-sm text-muted-foreground mt-1">
              Strategic plan to reduce operational and financed emissions to net zero
            </p>
          </div>
        </div>
      </div>

      {/* Arrow Down */}
      <div className="flex justify-center mb-6">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>

      {/* Four Integrated Components */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {integratedComponents.map((component, idx) => (
          <div
            key={idx}
            className="bg-background border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors"
          >
            <component.icon className="h-6 w-6 text-primary mx-auto mb-2" />
            <h6 className="font-medium text-foreground text-sm">{component.title}</h6>
            <p className="text-xs text-muted-foreground mt-1">{component.description}</p>
          </div>
        ))}
      </div>

      {/* Arrow Down */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-4">
          <div className="h-px w-16 bg-border" />
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
          <div className="h-px w-16 bg-border" />
        </div>
      </div>

      {/* Two Applications */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Prudential Application */}
        <div className="relative">
          <div className={cn(
            "border-2 rounded-xl p-5 h-full",
            "border-blue-500/50 bg-blue-500/5"
          )}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Shield className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h5 className="font-semibold text-foreground">Prudential Application</h5>
                <span className="text-xs text-muted-foreground">CRD VI & EBA Requirements</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Financial stability & robustness</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Risk management integration</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Capital adequacy assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Supervisory review (SREP)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Strategic/Sustainability Application */}
        <div className="relative">
          <div className={cn(
            "border-2 rounded-xl p-5 h-full",
            "border-emerald-500/50 bg-emerald-500/5"
          )}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <Leaf className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                <h5 className="font-semibold text-foreground">Strategic Application</h5>
                <span className="text-xs text-muted-foreground">Net Zero & Sustainability Goals</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Emissions reduction targets</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Portfolio decarbonisation</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Client engagement & transition</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Sustainable finance opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground italic">
          "The successful deployment of transition plans with bottom-up supervision by financial institutions 
          of their clients is the foundation for the mitigation of risks related to compliance with macro 
          and micro prudential regulations."
        </p>
      </div>
    </div>
  );
};

export default TransitionPlanDiagram;
