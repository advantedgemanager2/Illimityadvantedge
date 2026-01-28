import DynamicPageContent from "@/components/docs/DynamicPageContent";
import DocsLayout from "@/components/layout/DocsLayout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TableOfContents from "@/components/layout/TableOfContents";
import Callout from "@/components/docs/Callout";
import PageMeta from "@/components/docs/PageMeta";
import PageNavigation from "@/components/docs/PageNavigation";
import StyledList from "@/components/docs/StyledList";

const tocItems = [
  { id: "guidelines", title: "Guidelines for Development of a Transition Loan Products Policy", level: 2 },
  { id: "scope-characteristics", title: "Scope and Characteristics of Transition Loan Products", level: 2 },
  { id: "use-of-proceeds", title: "Use of Proceeds", level: 2 },
  { id: "transition-loan-product-policy", title: "Transition Loan Product Policy", level: 2 },
];

const LoanPolicyFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products/kpis-criteria" },
              { label: "Loan Policy" },
            ]}
          />

          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">
            Transition Loan Products Policy
          </h1>

          <PageMeta
            lastUpdated="January 1, 2025"
            tags={["Loan Policy", "Transition Finance", "Product Policy", "Hard-to-Abate"]}
          />

          <p className="text-lg text-muted-foreground mb-8">
            Guidelines for the development of a transition loan products policy covering general corporate purpose, sustainability-linked, and use of proceeds loans.
          </p>

          {/* Guidelines Section */}
          <section id="guidelines" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Guidelines for the Development of a Transition Loan Products Policy</h2>

            <p className="text-muted-foreground mb-4">
              The structure for a proposed transition lending product policy should be based on several pillars, namely:
            </p>

            <StyledList
              style="number"
              items={[
                "Wide scope adaptability of transition features in products covering general corporate purpose, sustainability-linked, and use of proceeds loans rather than restricting application by labeling one specific type of loans",
                "Products tied with identification and monitoring borrowers' real economy mitigation actions while reducing financed emissions (and potentially also with financing of real economy mitigation actions, although it should not be a pre-requisite)",
                "Transition data being provided not only through sustainability reporting but also through compliance with information covenants set out in loan documentation",
                "Products providing for qualitative KPIs for continuous credibility assessment of clients' transition plans",
                "Products including multiple quantitative transition-related KPIs capable of identifying clients' responses to address transition risks",
                "Transition features and KPIs applicable to all available products if the client operates in a hard-to-abate sector",
                "Limited use of SLLs step-down features in a transition context, unless the borrower is implementing credible mitigation actions impacting upstream Scope 3 for which the borrower has no or little control over",
                "Non-compliance with reps and warranties re credibility of transition data, informative covenants, and qualitative and quantitative KPIs triggering counteractions from lenders",
                "Product characteristics contributing to limit transition washing effectively",
                "Integration with transition washing and transition plan credibility policies and with transition finance framework"
              ]}
            />
          </section>

          {/* Scope and Characteristics Section */}
          <section id="scope-characteristics" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Scope and Characteristics of Transition Loan Products</h2>

            <p className="text-muted-foreground mb-4">
              Transition loan products should be gradually evolving to address the complex challenges of financing sustainable economic transitions. These products can take various forms, ranging from <strong>Use of Proceeds products</strong> for specific mitigation actions to <strong>whole-of-business products</strong> that cover the transformation of a client&apos;s entire business, including its supply chain. Between these extremes lie sustainability-linked loans with science-based KPIs and general purpose financing with covenants addressing transition plan actions.
            </p>

            <p className="text-muted-foreground mb-4">
              The key objectives of transition lending are multifaceted. They aim to address carbon lock-in risk, meet EU climate and sustainability objectives, effectively reduce financed emissions, and achieve real economic transition. However, the path to achieving these objectives is not straightforward, as the relationship between carbon emissions and the cost of debt is non-linear and influenced by various factors.
            </p>

            <Callout type="warning" title="Challenges in Transition Finance">
              Challenges in transition finance include the ineffectiveness of purely punitive measures for high-emitting borrowers and the need for a balanced approach that combines accountability with support.
            </Callout>

            <p className="text-muted-foreground mb-4">
              To address these challenges, a set of mandatory components for transition loan products has been proposed. These include:
            </p>

            <StyledList
              style="check"
              items={[
                "Continuous verification of transition plan accountability and credibility",
                "Use of multiple KPIs aligned with EU Taxonomy and other relevant frameworks",
                "Identification of credible mitigation actions",
                "Events of default triggered by failure to complete these actions",
                "Acquisition and monitoring of borrower's data for the lender's prudential transition plan"
              ]}
            />

            <Callout type="tip" title="Product Adaptability">
              The adaptability of transition loan products is crucial. A transition loan product policy could include core provisions for general corporate purpose loans to hard-to-abate borrowers, with additional provisions for other sub-products. This flexibility allows for tailored solutions that can effectively contribute to reducing financed emissions while addressing transition risks and achieving climate objectives across various levels of business operations.
            </Callout>
          </section>

          {/* Use of Proceeds Section */}
          <section id="use-of-proceeds" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Use of Proceeds</h2>

            <Callout type="info" title="Under Development">
              Currently under development.
            </Callout>
          </section>

          {/* Transition Loan Product Policy Section */}
          <section id="transition-loan-product-policy" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Transition Loan Product Policy</h2>

            <p className="text-muted-foreground mb-4">
              The transition loan product policy document provides the detailed framework and guidance for implementing the principles outlined in this section.
            </p>
          </section>

          <PageNavigation
            prev={{
              title: "Contractual Solutions",
              href: "/products/contractual-solutions",
              category: "Products"
            }}
            next={{
              title: "Steel Sector",
              href: "/sectors/steel",
              category: "Sectors"
            }}
          />
        </article>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const LoanPolicy = () => {
  return (
    <DynamicPageContent
      slug="products/loan-policy"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products/kpis-criteria" },
        { label: "Loan Policy" },
      ]}
      navigation={{
        prev: { title: "Contractual Solutions", href: "/products/contractual-solutions", category: "Products" },
        next: { title: "Steel Sector", href: "/sectors/steel", category: "Sectors" }
      }}
      fallback={<LoanPolicyFallback />}
    />
  );
};

export default LoanPolicy;
