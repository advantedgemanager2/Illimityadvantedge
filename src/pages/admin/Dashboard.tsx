import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FileText, Clock, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const pageGroups = [
  {
    title: "Know-How",
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
    pages: [
      { slug: "governance/prudential-planning", title: "Prudential Planning" },
      { slug: "governance/net-zero-management", title: "Net Zero Management" },
      { slug: "governance/finance-framework", title: "Finance Framework" },
    ],
  },
  {
    title: "Products",
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
    pages: [
      { slug: "sectors/steel", title: "Steel" },
      { slug: "sectors/cement", title: "Cement" },
      { slug: "sectors/automotive", title: "Automotive" },
      { slug: "sectors/shipping", title: "Shipping" },
    ],
  },
];

export default function AdminDashboard() {
  const { data: pages } = useQuery({
    queryKey: ["admin-pages"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pages")
        .select("slug, title, updated_at")
        .order("updated_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const getPageStatus = (slug: string) => {
    const dbPage = pages?.find((p) => p.slug === slug);
    return dbPage ? "published" : "draft";
  };

  const totalPages = pageGroups.reduce((acc, g) => acc + g.pages.length, 0);
  const publishedPages = pages?.length || 0;

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Manage all page content from here
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Pages</CardDescription>
              <CardTitle className="text-4xl">{totalPages}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Published</CardDescription>
              <CardTitle className="text-4xl text-green-600">{publishedPages}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Drafts</CardDescription>
              <CardTitle className="text-4xl text-amber-600">{totalPages - publishedPages}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Page Groups */}
        <div className="space-y-8">
          {pageGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xl font-semibold text-foreground mb-4">{group.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.pages.map((page) => {
                  const status = getPageStatus(page.slug);
                  const dbPage = pages?.find((p) => p.slug === page.slug);
                  return (
                    <Card key={page.slug} className="group hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                            <CardTitle className="text-base">{page.title}</CardTitle>
                          </div>
                          <Badge variant={status === "published" ? "default" : "secondary"}>
                            {status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          {dbPage && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {new Date(dbPage.updated_at).toLocaleDateString()}
                            </div>
                          )}
                          <Link to={`/admin/edit/${page.slug}`}>
                            <Button size="sm" variant="ghost">
                              <Edit2 className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
