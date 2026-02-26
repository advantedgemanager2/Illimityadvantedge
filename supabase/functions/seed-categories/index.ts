import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders } from "../_shared/cors.ts";
import { verifyAdmin } from "../_shared/auth.ts";

const categories = [
  { name: "Transition Know-How Tool", slug: "know-how", icon: "GraduationCap", sort_order: 1 },
  { name: "Transition Governance Tool", slug: "governance", icon: "Building2", sort_order: 2 },
  { name: "Products, KPIs & Contractual Solutions", slug: "products", icon: "ClipboardList", sort_order: 3 },
  { name: "Sector Analysis", slug: "sectors", icon: "Factory", sort_order: 4 },
];

const pageCategoryMap: Record<string, { sort_order: number }> = {
  "know-how/transition-finance": { sort_order: 1 },
  "know-how/transition-risks": { sort_order: 2 },
  "know-how/greenwashing-risks": { sort_order: 3 },
  "know-how/credible-transition-plans": { sort_order: 4 },
  "know-how/risk-assessment": { sort_order: 5 },
  "know-how/solutions-deployment": { sort_order: 6 },
  "know-how/litigation-risk": { sort_order: 7 },
  "governance/prudential-planning": { sort_order: 1 },
  "governance/net-zero-management": { sort_order: 2 },
  "governance/finance-framework": { sort_order: 3 },
  "products/kpis-criteria": { sort_order: 1 },
  "products/corporate-loans": { sort_order: 2 },
  "products/sll": { sort_order: 3 },
  "products/contractual-solutions": { sort_order: 4 },
  "products/loan-policy": { sort_order: 5 },
  "sectors/steel": { sort_order: 1 },
  "sectors/cement": { sort_order: 2 },
  "sectors/automotive": { sort_order: 3 },
  "sectors/shipping": { sort_order: 4 },
};

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { adminClient: supabase, error: authError } = await verifyAdmin(req, corsHeaders);
    if (authError) return authError;

    console.log("Seeding categories...");

    // Upsert categories
    for (const cat of categories) {
      const { error } = await supabase
        .from("page_categories")
        .upsert(cat, { onConflict: "slug" });
      if (error) {
        console.error(`Error upserting category ${cat.slug}:`, error);
        throw error;
      }
    }

    // Get category IDs
    const { data: dbCategories, error: catError } = await supabase
      .from("page_categories")
      .select("id, slug");
    if (catError) throw catError;

    const catMap = Object.fromEntries(dbCategories.map((c: any) => [c.slug, c.id]));

    // Link existing pages to categories
    for (const [slug, info] of Object.entries(pageCategoryMap)) {
      const categorySlug = slug.split("/")[0];
      const categoryId = catMap[categorySlug];
      if (!categoryId) continue;

      const { error } = await supabase
        .from("pages")
        .update({
          category_id: categoryId,
          sort_order: info.sort_order,
          is_published: true,
        })
        .eq("slug", slug);

      if (error) {
        console.error(`Error linking page ${slug}:`, error);
      }
    }

    // Special case: Shipping page badge
    await supabase
      .from("pages")
      .update({ badge: "Coming Soon" })
      .eq("slug", "sectors/shipping");

    console.log("Categories seeded and pages linked successfully");

    return new Response(
      JSON.stringify({ success: true, categories: categories.length }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error in seed-categories:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: msg }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
