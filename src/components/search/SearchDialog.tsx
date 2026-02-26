import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Building2, ClipboardList, Factory, Car, Ship, Landmark, FileText } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/hooks/useNavigation";
import { iconMap } from "@/components/docs/DynamicIcon";

interface SearchItem {
  title: string;
  href: string;
  category: string;
  description: string;
  keywords: string[];
  icon: React.ElementType;
}

const FALLBACK_SEARCH_INDEX: SearchItem[] = [
  { title: "Transition Finance", href: "/know-how/transition-finance", category: "Know-How", description: "Understanding transition finance mechanisms and EU regulatory framework", keywords: ["EU taxonomy", "sustainable finance", "regulation"], icon: GraduationCap },
  { title: "Transition Risks", href: "/know-how/transition-risks", category: "Know-How", description: "Assessing climate-related financial risks in banking portfolios", keywords: ["climate risk", "financial risk", "portfolio"], icon: GraduationCap },
  { title: "Greenwashing Risks", href: "/know-how/greenwashing-risks", category: "Know-How", description: "Identifying and mitigating greenwashing and transition washing risks", keywords: ["ESG", "compliance", "disclosure"], icon: GraduationCap },
  { title: "Credible Transition Plans", href: "/know-how/credible-transition-plans", category: "Know-How", description: "Framework for evaluating corporate transition plan credibility", keywords: ["net zero", "decarbonization", "targets"], icon: GraduationCap },
  { title: "Risk Assessment", href: "/know-how/risk-assessment", category: "Know-How", description: "Methodologies for transition risk assessment by banks", keywords: ["PD", "LGD", "credit risk"], icon: GraduationCap },
  { title: "Solutions Deployment", href: "/know-how/solutions-deployment", category: "Know-How", description: "Maximizing deployment of transition finance solutions", keywords: ["implementation", "best practices"], icon: GraduationCap },
  { title: "Litigation Risk", href: "/know-how/litigation-risk", category: "Know-How", description: "Climate change litigation risks for financial institutions", keywords: ["legal", "liability", "court"], icon: GraduationCap },
  { title: "Prudential Planning", href: "/governance/prudential-planning", category: "Governance", description: "Prudential transition planning requirements and best practices", keywords: ["ECB", "regulation", "capital"], icon: Building2 },
  { title: "Net Zero Management", href: "/governance/net-zero-management", category: "Governance", description: "Managing net zero commitments and portfolio alignment", keywords: ["NZBA", "targets", "emissions"], icon: Building2 },
  { title: "Finance Framework", href: "/governance/finance-framework", category: "Governance", description: "Building a robust transition finance framework", keywords: ["policy", "strategy", "governance"], icon: Building2 },
  { title: "KPIs Criteria", href: "/products/kpis-criteria", category: "Products", description: "Key performance indicators and credibility criteria", keywords: ["metrics", "measurement", "targets"], icon: ClipboardList },
  { title: "Corporate Loans", href: "/products/corporate-loans", category: "Products", description: "General corporate purpose loans for transition activities", keywords: ["lending", "credit", "financing"], icon: ClipboardList },
  { title: "Sustainability-Linked Loans", href: "/products/sll", category: "Products", description: "Sustainability-linked loan structures and pricing mechanisms", keywords: ["SLL", "margin ratchet", "KPI"], icon: ClipboardList },
  { title: "Contractual Solutions", href: "/products/contractual-solutions", category: "Products", description: "Contractual mechanisms for transition finance products", keywords: ["covenants", "terms", "conditions"], icon: ClipboardList },
  { title: "Loan Policy", href: "/products/loan-policy", category: "Products", description: "Transition loan products policy framework", keywords: ["policy", "guidelines", "standards"], icon: ClipboardList },
  { title: "Steel Sector", href: "/sectors/steel", category: "Sectors", description: "Transition pathways and KPIs for steel industry financing", keywords: ["heavy industry", "decarbonization", "EAF"], icon: Factory },
  { title: "Cement Sector", href: "/sectors/cement", category: "Sectors", description: "Cement industry transition assessment and financing", keywords: ["construction", "emissions", "CCUS"], icon: Landmark },
  { title: "Automotive Sector", href: "/sectors/automotive", category: "Sectors", description: "Automotive industry electrification and transition finance", keywords: ["EV", "electrification", "OEM"], icon: Car },
  { title: "Shipping Sector", href: "/sectors/shipping", category: "Sectors", description: "Maritime shipping decarbonization pathways", keywords: ["IMO", "maritime", "fuel"], icon: Ship },
];

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const highlightMatch = (text: string, query: string) => {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-accent/30 text-foreground rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
};

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const { data: navCategories } = useNavigation();

  const searchIndex = useMemo(() => {
    const totalPages = navCategories?.reduce((sum, cat) => sum + cat.pages.length, 0) ?? 0;
    if (!navCategories || navCategories.length === 0 || totalPages === 0) return FALLBACK_SEARCH_INDEX;
    return navCategories.flatMap((cat) =>
      cat.pages.map((page) => ({
        title: page.title,
        href: `/${page.slug}`,
        category: cat.name,
        description: "",
        keywords: [],
        icon: iconMap[cat.icon] || FileText,
      }))
    );
  }, [navCategories]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(searchIndex.map((i) => i.category)));
    return ["All", ...cats];
  }, [searchIndex]);

  const filteredItems = useMemo(() => {
    let items = searchIndex;
    
    if (activeCategory !== "All") {
      items = items.filter((item) => item.category === activeCategory);
    }
    
    if (!query) return items;
    
    const lowerQuery = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.keywords.some((k) => k.toLowerCase().includes(lowerQuery))
    );
  }, [query, activeCategory]);

  const groupedItems = useMemo(() => {
    return filteredItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, SearchItem[]>);
  }, [filteredItems]);

  const handleSelect = (href: string) => {
    navigate(href);
    onOpenChange(false);
    setQuery("");
    setActiveCategory("All");
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search documentation..."
        value={query}
        onValueChange={setQuery}
      />
      
      {/* Category filters */}
      <div className="flex gap-1 px-3 py-2 border-b border-border">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-2.5 py-1 text-xs font-medium rounded-full transition-colors",
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <CommandList className="max-h-[400px]">
        <CommandEmpty className="py-6 text-center text-sm text-muted-foreground">
          No results found for "{query}"
        </CommandEmpty>
        {Object.entries(groupedItems).map(([category, items]) => (
          <CommandGroup key={category} heading={category}>
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <CommandItem
                  key={item.href}
                  value={`${item.title} ${item.description} ${item.keywords.join(" ")}`}
                  onSelect={() => handleSelect(item.href)}
                  className="flex items-start gap-3 cursor-pointer py-3"
                >
                  <Icon className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">
                      {highlightMatch(item.title, query)}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                      {highlightMatch(item.description, query)}
                    </div>
                  </div>
                </CommandItem>
              );
            })}
          </CommandGroup>
        ))}
      </CommandList>
      
      <div className="border-t border-border px-3 py-2 text-xs text-muted-foreground flex items-center gap-4">
        <span><kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">↑↓</kbd> Navigate</span>
        <span><kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">↵</kbd> Select</span>
        <span><kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">Esc</kbd> Close</span>
      </div>
    </CommandDialog>
  );
};

export default SearchDialog;
