import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  FileText,
  LogOut,
  ChevronRight,
  BookOpen,
  Building2,
  Package,
  Factory,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminLayoutProps {
  children: ReactNode;
}

const pageGroups = [
  {
    title: "Know-How",
    icon: BookOpen,
    pages: [
      { slug: "know-how/transition-finance", title: "Transition Finance" },
      { slug: "know-how/transition-risks", title: "Transition Risks" },
      { slug: "know-how/greenwashing-risks", title: "Greenwashing Risks" },
      { slug: "know-how/credible-transition-plans", title: "Credible Transition Plans" },
      { slug: "know-how/risk-assessment", title: "Risk Assessment" },
      { slug: "know-how/solutions-deployment", title: "Solutions Deployment" },
      { slug: "know-how/litigation-risk", title: "Litigation Risk" },
    ],
  },
  {
    title: "Governance",
    icon: Building2,
    pages: [
      { slug: "governance/prudential-planning", title: "Prudential Planning" },
      { slug: "governance/net-zero-management", title: "Net Zero Management" },
      { slug: "governance/finance-framework", title: "Finance Framework" },
    ],
  },
  {
    title: "Products",
    icon: Package,
    pages: [
      { slug: "products/kpis-criteria", title: "KPIs & Criteria" },
      { slug: "products/corporate-loans", title: "Corporate Loans" },
      { slug: "products/sll", title: "SLL" },
      { slug: "products/contractual-solutions", title: "Contractual Solutions" },
      { slug: "products/loan-policy", title: "Loan Policy" },
    ],
  },
  {
    title: "Sectors",
    icon: Factory,
    pages: [
      { slug: "sectors/steel", title: "Steel" },
      { slug: "sectors/cement", title: "Cement" },
      { slug: "sectors/automotive", title: "Automotive" },
      { slug: "sectors/shipping", title: "Shipping" },
    ],
  },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { user, signOut } = useAuth();
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-muted/30 flex flex-col">
        <div className="p-4 border-b border-border">
          <Link to="/admin" className="flex items-center gap-2">
            <LayoutDashboard className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">Admin CMS</span>
          </Link>
        </div>

        <ScrollArea className="flex-1 p-4">
          <nav className="space-y-6">
            <Link
              to="/admin"
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
                location.pathname === "/admin"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>

            {pageGroups.map((group) => (
              <div key={group.title}>
                <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <group.icon className="h-4 w-4" />
                  {group.title}
                </div>
                <div className="mt-1 space-y-1">
                  {group.pages.map((page) => {
                    const isActive = location.pathname === `/admin/edit/${page.slug}`;
                    return (
                      <Link
                        key={page.slug}
                        to={`/admin/edit/${page.slug}`}
                        className={cn(
                          "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        <FileText className="h-4 w-4" />
                        <span className="truncate">{page.title}</span>
                        {isActive && <ChevronRight className="h-4 w-4 ml-auto" />}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </ScrollArea>

        <div className="p-4 border-t border-border">
          <div className="text-xs text-muted-foreground mb-2 truncate">
            {user?.email}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={signOut}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
