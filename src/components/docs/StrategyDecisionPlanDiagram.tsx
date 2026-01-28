import { ClipboardList, Grid3X3, Shield, Target } from "lucide-react";

const tools = [
  {
    icon: ClipboardList,
    title: "Step Plan",
    description: "Assessment of clients' bottom-up real and committed emissions and CapEx targets",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Grid3X3,
    title: "Assessment Matrix",
    description: "Classification of hard-to-abate clients based on emissions targets and transition plan credibility",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Shield,
    title: "Remedies & Actions",
    description: "Bank's responses and counteractions for clients' failure to decarbonise",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Target,
    title: "Target Categories",
    description: "Priority clients based on locked-in emissions levels and short-term commitments",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10",
  },
];

const StrategyDecisionPlanDiagram = () => {
  return (
    <div className="my-8 p-6 bg-muted/30 rounded-xl border border-border">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-foreground mb-2">Strategy Decision Plan</h3>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Four integrated tools for deploying transition finance products
        </p>
      </div>

      {/* Central Flow */}
      <div className="relative">
        {/* Connection Lines - Desktop */}
        <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2" />
        
        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-3 left-4 z-10">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {index + 1}
                </span>
              </div>
              
              {/* Tool Card */}
              <div className="bg-background rounded-lg border border-border p-4 pt-6 h-full hover:shadow-md transition-shadow">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${tool.bgColor} mb-3`}>
                  <tool.icon className={`h-5 w-5 ${tool.color}`} />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-2">{tool.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
              </div>

              {/* Arrow for mobile */}
              {index < tools.length - 1 && (
                <div className="md:hidden flex justify-center py-2">
                  <div className="w-0.5 h-4 bg-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Output Section */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs text-muted-foreground">Aligned/Aligning 2030</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-lime-500" />
            <span className="text-xs text-muted-foreground">Aligned/Aligning 2035</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span className="text-xs text-muted-foreground">Not Likely Aligning</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span className="text-xs text-muted-foreground">Not Aligning</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyDecisionPlanDiagram;
