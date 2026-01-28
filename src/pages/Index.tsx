import { useState } from "react";
import { Link } from "react-router-dom";
import DocsLayout from "@/components/layout/DocsLayout";
import SearchDialog from "@/components/search/SearchDialog";
import { 
  GraduationCap, 
  Building2, 
  ClipboardList, 
  Factory, 
  Landmark, 
  Car, 
  Ship, 
  ArrowRight, 
  Search,
  FileText,
  Users,
  TrendingUp,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

const toolCategories = [
  {
    title: "Transition Know-How Tool",
    description: "Understanding transition finance fundamentals, risks, and credible transition planning for banking professionals.",
    icon: GraduationCap,
    href: "/know-how/transition-finance",
    color: "bg-primary/10 text-primary border-primary/20",
    pages: [
      "Transition Finance",
      "Transition Risks",
      "Greenwashing Risks",
      "Credible Plans",
      "Risk Assessment",
      "Solutions Deployment",
      "Litigation Risk"
    ]
  },
  {
    title: "Transition Governance Tool",
    description: "Prudential planning, net zero risk management, and governance frameworks for financial institutions.",
    icon: Building2,
    href: "/governance/prudential-planning",
    color: "bg-secondary/10 text-secondary border-secondary/20",
    pages: [
      "Prudential Planning",
      "Net Zero Management",
      "Finance Framework"
    ]
  },
  {
    title: "Products & Contractual Solutions",
    description: "KPI criteria, sustainability-linked loans, contractual frameworks, and transition loan policies.",
    icon: ClipboardList,
    href: "/products/kpis-criteria",
    color: "bg-accent/10 text-accent border-accent/20",
    pages: [
      "KPIs Criteria",
      "Corporate Loans",
      "Sustainability-Linked Loans",
      "Contractual Solutions",
      "Loan Policy"
    ]
  },
];

const sectors = [
  {
    title: "Steel",
    description: "Transition pathways and financing considerations for the steel industry.",
    icon: Factory,
    href: "/sectors/steel",
    color: "from-slate-500 to-slate-700",
  },
  {
    title: "Cement",
    description: "Decarbonization strategies and lending approaches for cement production.",
    icon: Landmark,
    href: "/sectors/cement",
    color: "from-stone-500 to-stone-700",
  },
  {
    title: "Automotive",
    description: "EV transition, supply chain considerations, and financing frameworks.",
    icon: Car,
    href: "/sectors/automotive",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Shipping",
    description: "Maritime decarbonization and alternative fuel financing.",
    icon: Ship,
    href: "/sectors/shipping",
    color: "from-cyan-500 to-cyan-700",
    comingSoon: true,
  },
];

const stats = [
  { label: "Documentation Pages", value: "19", icon: FileText },
  { label: "Sector Analyses", value: "4", icon: TrendingUp },
  { label: "Product Types", value: "5", icon: ClipboardList },
  { label: "Governance Tools", value: "3", icon: Shield },
];

const Index = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <DocsLayout>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      
      <div className="max-w-5xl">
        {/* Hero Section */}
        <div className="relative mb-16 py-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl -z-10" />
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Transition Finance Toolkit
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
            A comprehensive knowledge base for banking professionals covering ESG transition risks, 
            prudential planning, lending products, and hard-to-abate sector analysis.
          </p>

          {/* Search Bar */}
          <button
            onClick={() => setSearchOpen(true)}
            className="w-full max-w-2xl flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all text-left group"
          >
            <Search className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="flex-1 text-muted-foreground">Search documentation...</span>
            <kbd className="hidden sm:inline-flex h-6 items-center gap-1 rounded border border-border bg-muted px-2 font-mono text-xs text-muted-foreground">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"
              >
                <div className="p-2 rounded-md bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tool Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Documentation Tools</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {toolCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.title}
                  to={category.href}
                  className={cn(
                    "group relative p-6 rounded-xl border-2 bg-card hover:shadow-lg transition-all duration-300",
                    category.color
                  )}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={cn("p-3 rounded-lg", category.color)}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.pages.slice(0, 4).map((page) => (
                      <span
                        key={page}
                        className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                      >
                        {page}
                      </span>
                    ))}
                    {category.pages.length > 4 && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        +{category.pages.length - 4} more
                      </span>
                    )}
                  </div>
                  <ArrowRight className="absolute top-6 right-6 h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* Sector Analysis */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Sector Analysis</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <Link
                  key={sector.title}
                  to={sector.href}
                  className={cn(
                    "group relative overflow-hidden rounded-xl p-6 text-white transition-all hover:shadow-xl hover:-translate-y-1",
                    `bg-gradient-to-br ${sector.color}`,
                    sector.comingSoon && "opacity-75"
                  )}
                >
                  {sector.comingSoon && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/20 text-xs font-medium backdrop-blur-sm">
                      Coming Soon
                    </div>
                  )}
                  <Icon className="h-10 w-10 mb-4 opacity-90" />
                  <h3 className="font-semibold text-lg mb-1">{sector.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {sector.description}
                  </p>
                  <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* Getting Started */}
        <section className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-3">Getting Started</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            New to transition finance? Start with our foundational guides to understand the key concepts 
            and regulatory landscape before diving into specific sectors and products.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/know-how/transition-finance"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/know-how/transition-risks"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card hover:bg-muted transition-colors font-medium"
            >
              Explore Risks
            </Link>
            <Link
              to="/products/kpis-criteria"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card hover:bg-muted transition-colors font-medium"
            >
              View Products
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
};

export default Index;
