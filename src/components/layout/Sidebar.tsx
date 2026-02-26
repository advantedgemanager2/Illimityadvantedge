import { useState, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronDown, ChevronRight, GraduationCap, Building2, ClipboardList, Factory, Landmark, Car, Ship } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/hooks/useNavigation";
import DynamicIcon, { iconMap } from "@/components/docs/DynamicIcon";

interface NavItem {
  title: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
  badge?: string;
}

const FALLBACK_NAVIGATION: NavItem[] = [
  {
    title: "Transition Know-How Tool",
    icon: GraduationCap,
    children: [
      { title: "Transition Finance", href: "/know-how/transition-finance" },
      { title: "Transition Risks", href: "/know-how/transition-risks" },
      { title: "Greenwashing and Transition Washing Risks", href: "/know-how/greenwashing-risks" },
      { title: "Credible Transition Plans", href: "/know-how/credible-transition-plans" },
      { title: "Transition Risk Assessment by Banks", href: "/know-how/risk-assessment" },
      { title: "Solutions for Maximising Deployment", href: "/know-how/solutions-deployment" },
      { title: "Climate Change Litigation Risk", href: "/know-how/litigation-risk" },
    ],
  },
  {
    title: "Transition Governance Tool",
    icon: Building2,
    children: [
      { title: "Prudential Transition Planning", href: "/governance/prudential-planning" },
      { title: "Net Zero Risk Management", href: "/governance/net-zero-management" },
      { title: "Transition Finance Framework", href: "/governance/finance-framework" },
    ],
  },
  {
    title: "Products, KPIs & Contractual Solutions",
    icon: ClipboardList,
    children: [
      { title: "KPIs Credibility Criteria", href: "/products/kpis-criteria" },
      { title: "General Corporate Purpose Loans", href: "/products/corporate-loans" },
      { title: "Sustainability-Linked Loans", href: "/products/sll" },
      { title: "Contractual Solutions", href: "/products/contractual-solutions" },
      { title: "Transition Loan Products Policy", href: "/products/loan-policy" },
    ],
  },
  {
    title: "Steel",
    icon: Factory,
    href: "/sectors/steel",
  },
  {
    title: "Cement",
    icon: Landmark,
    href: "/sectors/cement",
  },
  {
    title: "Automotive",
    icon: Car,
    href: "/sectors/automotive",
  },
  {
    title: "Shipping",
    icon: Ship,
    href: "/sectors/shipping",
    badge: "Coming Soon",
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavItemComponent = ({ item, level = 0 }: { item: NavItem; level?: number }) => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(() => {
    if (item.children) {
      return item.children.some(child => location.pathname === child.href);
    }
    return false;
  });

  const isActive = item.href === location.pathname;
  const Icon = item.icon;
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <div className="mb-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
            "text-sidebar-foreground hover:bg-muted",
            level > 0 && "pl-8"
          )}
        >
          {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
          <span className="flex-1 text-left">{item.title}</span>
          {isExpanded ? (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
        
        {isExpanded && (
          <div className="mt-1 ml-3 border-l border-border pl-2 animate-fade-in">
            {item.children.map((child, idx) => (
              <NavItemComponent key={idx} item={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.href || "/"}
      className={cn(
        "nav-item mb-1",
        level > 0 && "pl-4",
        isActive && "nav-item-active"
      )}
    >
      {Icon && <Icon className="h-4 w-4" />}
      <span>{item.title}</span>
      {item.badge && (
        <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent font-medium">
          {item.badge}
        </span>
      )}
    </Link>
  );
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { data: categories } = useNavigation();

  const navigation: NavItem[] = useMemo(() => {
    if (!categories || categories.length === 0) return FALLBACK_NAVIGATION;

    return categories.map((cat) => {
      const Icon = iconMap[cat.icon];
      if (cat.pages.length === 1) {
        return {
          title: cat.pages[0].title,
          icon: Icon,
          href: `/${cat.pages[0].slug}`,
          badge: cat.pages[0].badge || undefined,
        };
      }
      return {
        title: cat.name,
        icon: Icon,
        children: cat.pages.map((page) => ({
          title: page.title,
          href: `/${page.slug}`,
          badge: page.badge || undefined,
        })),
      };
    });
  }, [categories]);

  return (
    <>
      {/* Mobile/Tablet overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-[280px] border-r border-border bg-sidebar overflow-y-auto scrollbar-thin",
          "transition-transform duration-200 ease-in-out",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <nav className="p-4" role="menu">
          {navigation.map((item, idx) => (
            <NavItemComponent key={idx} item={item} />
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
