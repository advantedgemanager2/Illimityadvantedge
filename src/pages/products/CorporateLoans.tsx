import DynamicPageContent from "@/components/docs/DynamicPageContent";
import DocsLayout from "@/components/layout/DocsLayout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TableOfContents from "@/components/layout/TableOfContents";
import Callout from "@/components/docs/Callout";
import PageMeta from "@/components/docs/PageMeta";
import PageNavigation from "@/components/docs/PageNavigation";
import StyledList from "@/components/docs/StyledList";

const tocItems = [
  { id: "introduction", title: "Introduction", level: 2 },
  { id: "enhanced-requirements", title: "Enhanced Requirements in General Corporate Purpose Loans", level: 2 },
  { id: "components", title: "Components of General Corporate Purpose Loans", level: 2 },
  { id: "key-components", title: "Key Components of General Corporate Loans", level: 3 },
];

const CorporateLoansFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products/kpis-criteria" },
              { label: "Corporate Loans" },
            ]}
          />

          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">
            General Corporate Purpose Loans to Hard-to-Abate Companies
          </h1>

          <PageMeta
            lastUpdated="October 28, 2024"
            tags={["Corporate Loans", "Hard-to-Abate", "Transition Finance", "PCAF"]}
          />

          <p className="text-lg text-muted-foreground mb-8">
            General corporate purpose loans qualifying as transition finance for hard-to-abate borrowers, including enhanced requirements and key contractual components.
          </p>

          {/* Introduction Section */}
          <section id="introduction" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>

            <p className="text-muted-foreground mb-4">
              General corporate purpose loans, as defined by PCAF, encompass a wide range of on-balance sheet financial products including loans and lines of credit to various organizational structures. These loans can qualify as &quot;transition finance&quot; under EU Commission classification, provided they meet specific criteria. The key requirements are that the borrowers&apos; transition plans must be <strong>accountable, credible, and transparent</strong>, and the proposed mitigation actions must be credible.
            </p>

            <p className="text-muted-foreground mb-4">
              Lenders play a crucial role in ensuring the integrity of these loans as transition finance. They are responsible for conducting thorough credibility reviews of clients&apos; transition plans and incorporating appropriate legal safeguards. These safeguards include representations, warranties, undertakings, and conditions related to the transition plans and mitigation actions, which help protect against the risk of transition washing.
            </p>

            <Callout type="info" title="Loans to Hard-to-Abate Corporations">
              For loans to hard-to-abate corporations, additional considerations apply. Ideally, these loans should identify and provide updates on specific, credible mitigation actions to be completed within a set timeframe. These actions can be targeted at the plant, entity, or group level.
            </Callout>

            <p className="text-muted-foreground mb-4">
              In cases where specific actions are not identified, the loan should at minimum outline the types of technologies to be implemented, the criteria for prioritizing actions, and the scope of due diligence for selecting these actions. This approach ensures that even general corporate purpose loans can contribute meaningfully to the transition towards a more sustainable economy.
            </p>
          </section>

          {/* Enhanced Requirements Section */}
          <section id="enhanced-requirements" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Enhanced Requirements in General Corporate Purpose Loans in Transition Finance</h2>

            <p className="text-muted-foreground mb-4">
              General corporate purpose loans for hard-to-abate borrowers should incorporate comprehensive requirements to ensure their effectiveness as transition finance instruments. These loans should indicate the <strong>impact methodologies</strong> applied by the borrower and the <strong>expected abatement impact</strong> at both plant and company levels, based on the identified technologies.
            </p>

            <p className="text-muted-foreground mb-4">
              Borrowers should be required to submit detailed data on climate scenarios, technologies, resource usage, and alignment with European Green Deal policies, sectoral pathways, and technology roadmaps. This information is crucial for the lender&apos;s prudential transition planning. Additionally, borrowers must provide specific information about their reference production units and actual energy consumption, enabling the calculation of financed emissions under the PCAF Financed Emissions guidance.
            </p>

            <Callout type="warning" title="Event of Default Trigger">
              The loan structure should include undertakings to complete material mitigation actions within set timelines, with failure to meet these deadlines triggering an event of default. This applies regardless of whether mitigation actions are financed on a Use of Proceeds or project basis.
            </Callout>
          </section>

          {/* Components Section */}
          <section id="components" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Components of General Corporate Purpose Loans to Hard-to-Abate Borrowers</h2>

            <p className="text-muted-foreground mb-4">
              Enhanced requirements should aim to strengthen the role of general corporate purpose loans in facilitating meaningful transitions towards sustainability in challenging sectors. A similar approach can be adopted also for leverage loans in hard-to-abate sectors, provided the target company has published a transition plan.
            </p>

            <p className="text-muted-foreground mb-4">
              General corporate loans to companies active in hard-to-abate sectors should be revised to include new sets of <strong>representations, warranties, conditions, and undertakings</strong> concerning transition plans, transition data and the credibility of expected mitigation actions.
            </p>

            {/* Key Components */}
            <section id="key-components" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Key Components of General Corporate Loans to Hard-to-Abate Borrowers</h3>

              <h5 className="text-base font-semibold text-foreground mb-2">Representations, Warranties, and Conditions Precedent and Subsequent</h5>
              <p className="text-muted-foreground mb-4">
                These clauses concern transition plans and the credibility of expected mitigation actions.
              </p>

              <h5 className="text-base font-semibold text-foreground mb-2">Information Undertakings</h5>
              <p className="text-muted-foreground mb-4">
                They relate to data for calculating financed emissions, locked-in emissions, assessing soundness of climate scenarios, choice of technologies, resource and energy use, and alignment with relevant policies and pathways.
              </p>

              <h5 className="text-base font-semibold text-foreground mb-2">Affirmative Undertakings</h5>
              <p className="text-muted-foreground mb-4">
                Undertakings to complete mitigation actions within defined timeframes, in accordance with DNSH criteria and satisfying specific mitigation benchmarks.
              </p>
            </section>
          </section>

          <PageNavigation
            prev={{
              title: "KPIs Credibility Criteria",
              href: "/products/kpis-criteria",
              category: "Products"
            }}
            next={{
              title: "Sustainability-Linked Loans",
              href: "/products/sll",
              category: "Products"
            }}
          />
        </article>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const CorporateLoans = () => {
  return (
    <DynamicPageContent
      slug="products/corporate-loans"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products/kpis-criteria" },
        { label: "Corporate Loans" },
      ]}
      navigation={{
        prev: { title: "KPIs Credibility Criteria", href: "/products/kpis-criteria", category: "Products" },
        next: { title: "Sustainability-Linked Loans", href: "/products/sll", category: "Products" }
      }}
      fallback={<CorporateLoansFallback />}
    />
  );
};

export default CorporateLoans;
