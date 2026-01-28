import DynamicPageContent from "@/components/docs/DynamicPageContent";
import DocsLayout from "@/components/layout/DocsLayout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TableOfContents from "@/components/layout/TableOfContents";
import Callout from "@/components/docs/Callout";
import PageMeta from "@/components/docs/PageMeta";
import SourceCitations from "@/components/docs/SourceCitations";
import PageNavigation from "@/components/docs/PageNavigation";
import StyledList from "@/components/docs/StyledList";

const tocItems = [
  { id: "introduction", title: "Introduction", level: 2 },
  { id: "metrics-and-targets", title: "Metrics and Targets", level: 2 },
  { id: "opportunities-context", title: "Opportunities Context", level: 2 },
  { id: "business-strategy", title: "Business Strategy", level: 2 },
  { id: "strategy-decision-plan", title: "Strategy Decision Plan", level: 2 },
  { id: "step-plan", title: "Step Plan for Assessment", level: 2 },
  { id: "assessment-matrix-and-remedies", title: "Assessment Matrix and Remedies", level: 2 },
  { id: "target-clients-categories", title: "Target Client Categories", level: 2 },
];

const sources = [
  { id: 1, title: "EU Taxonomy Regulation and Technical Screening Criteria", author: "European Commission", year: "2024" },
  { id: 2, title: "NZBA Target-Setting Guidelines", author: "Net-Zero Banking Alliance", year: "2024" },
  { id: 3, title: "EFRAG ESRS E1 - Climate Change Disclosure Standard", author: "EFRAG", year: "2024" },
];

const FinanceFrameworkFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Governance Tool", href: "/governance/prudential-planning" }, { label: "Transition Finance Framework" }]} />
          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">Transition Finance Framework</h1>
          <PageMeta lastUpdated="January 16, 2025" tags={["Transition Finance", "Framework", "Hard-to-Abate Sectors", "Metrics"]} />
          <p className="text-lg text-muted-foreground mb-8">A comprehensive framework setting out the lender&apos;s key metrics, transition-related KPIs, targets, benchmarks, available opportunities, and preferred transition-enabling and low-carbon technologies.</p>

          <section id="introduction" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4">A transition finance framework sets out the lender&apos;s key metrics, transition-related KPIs, targets, benchmarks, available opportunities, and preferred transition-enabling and low-carbon technologies.</p>
            <p className="text-muted-foreground mb-4">The framework is intended to be forward-looking, technology- and science-based and capable of identifying the real economy transition needs of sectors that are consistent with the lenders&apos; net zero pathway; it should be strongly sector-based and aim at unleashing all debt capabilities of the lender across products and at setting a coherent approach linked with the borrowers&apos; transition plan credibility and their committed low-carbon and transition-enabling R&amp;D and CapEx.</p>
            <p className="text-muted-foreground mb-4">It can also include a business strategy (that indicates the level of exposure by sector, maturities, pricing, type of available products, and available counteractions against clients&apos; failures) with hard-to-abate clients that should inform the engagement with clients active in these sectors.</p>
            <h3 className="text-xl font-semibold text-foreground mb-4">Approach for Transition Finance Frameworks</h3>
            <p className="text-muted-foreground mb-4">Approaches to transition finance frameworks vary, some are prescriptive while others are non-committal indicating the lender&apos;s pathway in each hard-to-abate sector by reference to metrics and key technologies.</p>
            <p className="text-muted-foreground mb-4">If it is prescriptive, exceptions will have to be expressly spelled out.</p>
            <h3 className="text-xl font-semibold text-foreground mb-4">Structure of the Transition Finance Framework</h3>
            <p className="text-muted-foreground mb-4">Based also on the review of existing transition finance frameworks, the framework is divided in two main core parts, namely:</p>
            <StyledList style="check" items={["A metrics and target section dealing with metrics, transition-related KPIs, targets, benchmarks", "An opportunities context section also dealing with preferred transition-enabling and low-carbon technologies"]} />
            <Callout type="tip" title="Business Strategy Section">It is recommended that a business strategy section be also included. It would be extremely relevant as it has the merit of providing practical guidelines for the incorporation of transition-related issues and would constitute a key part of the lender&apos;s prudential transition plan. The business strategy section could be kept separate and confidential and used by the bank for internal and prudential purposes only.</Callout>
          </section>

          <section id="metrics-and-targets" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Metrics and Targets</h2>
            <p className="text-muted-foreground mb-4">The main metrics, transition-related KPIs, targets and benchmarks include:</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Carbon Emission Intensity Targets</h4>
            <p className="text-muted-foreground mb-4">Carbon emissions intensity targets that are, where possible, science-based, aligned with EU Taxonomy, IEA NZE 1.5&deg;C and NGFS Orderly scenario year on year. These generally refer to Scope 1 and 2. Where feasible in accordance with best practices, carbon emissions intensity targets should also be set by reference to upstream Scope 3 and downstream Scope 3.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Locked-In Emissions Targets</h4>
            <p className="text-muted-foreground mb-4">Locked-in emissions targets for each major client for a set timeline year on year.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Locked-In Emissions Reduction Ratio Targets</h4>
            <p className="text-muted-foreground mb-4">Locked-in emissions reduction ratio targets that indicate the percentage of reduction of locked-in emissions at sectoral portfolio level year on year.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Financed Emissions Targets</h4>
            <p className="text-muted-foreground mb-4">Financed emissions targets at sectoral portfolio level year on year and for each major client based on the lender&apos;s carbon budget and NZBA targets under IEA NZE 1.5&deg;C and NGFS Orderly scenario.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Committed Low-Carbon and Transition-Enabling CapEx Targets</h4>
            <p className="text-muted-foreground mb-4">Committed low-carbon and transition-enabling CapEx targets that indicate the amount of CapEx for key transition and low-carbon technologies committed by clients and to be financed by the lender or invested by clients with credible transition plans at sectoral portfolio level year on year.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Transition-Related KPIs and Benchmarks</h4>
            <p className="text-muted-foreground mb-4">Transition-related KPIs and benchmarks derived from EU policies and industrial pathway objectives, national policies and coalition frameworks.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Financed General Corporate Purpose Targets</h4>
            <p className="text-muted-foreground mb-4">Financed general corporate purpose targets to clients with credible transition plans year on year. This is a critical target given the relevance of GCPLs in banks&apos; portfolios.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Decarbonisation Time Horizons</h4>
            <p className="text-muted-foreground mb-4">The definition by the lender of time horizons for clients&apos; phasing-out high-emitting assets and for the phasing-in of transition-enabling technologies and low-carbon solutions is a critical component of the bank&apos;s plan, and should be compatible with its climate scenarios.</p>
            <Callout type="info" title="Short-Term Time Horizons">The definition of the short-term time horizon for introducing decarbonisation levers, starting from those that have a low or zero net cost, is relevant in order to size the deployment of transition finance in the next 5-year term.</Callout>
          </section>
          <section id="opportunities-context" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Opportunities Context</h2>
            <p className="text-muted-foreground mb-4">The Opportunities context requires the lender to identify at sectoral level:</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Key Transition Technologies</h4>
            <p className="text-muted-foreground mb-4">Key transition technologies applicable to clients based on TRLs, DNSH considerations (where available), regional/national industrial pathways, EU legislation such as the NZIA, and coalition frameworks.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Low-Carbon and Transition-Enabling R&amp;D and CapEx Requirements</h4>
            <p className="text-muted-foreground mb-4">Low-carbon and transition-enabling R&amp;D and CapEx requirements, potentially aligned with EU Taxonomy.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Mitigation Actions Credibility Requirements</h4>
            <p className="text-muted-foreground mb-4">The requirements are set in consideration of the credibility attributes included in the bank&apos;s transition plan credibility policy.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Impact of Drivers of Change</h4>
            <p className="text-muted-foreground mb-4">Impact of drivers of change (e.g. use of CCS and CDR, introduction of new regulations) based on conservative estimates aligned with the lender&apos;s prudential transition plan and scenarios.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Decarbonisation Levers</h4>
            <p className="text-muted-foreground mb-4">These include aggregated types of mitigation actions such as energy efficiency, electrification, fuel switching, use of renewable energy, products change, and supply-chain decarbonisation that fit with undertakings&apos; specific actions.</p>
            <Callout type="info" title="Scope of Decarbonisation Levers">As set out by EFRAG, decarbonisation levers are intended to achieve GHG emission reductions. As such, they are not limited to the undertaking&apos;s own operations and can extend to its value chain in order to reduce the undertaking&apos;s Scope 3 emissions.</Callout>
          </section>

          <section id="business-strategy" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Business Strategy</h2>
            <p className="text-muted-foreground mb-4">A business strategy with clients in hard-to-abate sectors should be based on a very clear and transparent approach that takes into account the economic, sectoral and country&apos;s peculiarities.</p>
            <p className="text-muted-foreground mb-4">It should ultimately indicate the level of exposure by sector, maturities, pricing, type of available products, and available counteractions against clients&apos; failures.</p>
            <h3 className="text-xl font-semibold text-foreground mb-4">Challenges for Hard-to-Abate Sectors</h3>
            <p className="text-muted-foreground mb-4">These sectors will strive as long as there is economic growth and they are supposed to decarbonise while keeping on producing to foster such growth.</p>
            <p className="text-muted-foreground mb-4">While CapEx for energy efficiency can generally be invested in existing transition-enabling technologies, low-carbon solutions needed for achieving near-zero rely on alternative sustainable technologies that have not yet reached commercial scale.</p>
            <p className="text-muted-foreground mb-4">In some cases their ability to reach near-zero will depend upon the availability of renewable energy, grid capacity, and energy storage. In other cases, decarbonisation relies on novel operative models such as a closed loop supply chain that has not yet been established.</p>
            <Callout type="warning" title="Reluctance to Change">Companies are reluctant to change their technologies and infrastructure before they have seen a return on their previous investments, unless they are confident that it will lead to significant emissions reductions, cost savings or higher prices for green products. Depending on the sector, the need for green products is not yet established and cannot be governed through the use of offtake agreements from customers for green products.</Callout>
            <p className="text-muted-foreground mb-4">However, data shows that carbon and cost reductions are more effective at a granular level, impacting all assets and product offerings from improving energy efficiency and reducing waste to designing products more efficiently. However, companies often have difficulty in understanding which measures will deliver the greatest savings and how to focus on engineering resources and funding.</p>
            <Callout type="important" title="Proportionate but Strict Approach">When setting a business strategy, banks should be aware of the challenges faced by its hard-to-abate clients and be proportionate in their approach, but equally be strict about taking a hard line when clients do not have the adaptive capacity to deal with decarbonisation, do not engage, do not set targets, do not prepare an accountable and reasonable plan or refuse to analyze ways to reduce costs and emissions simultaneously.</Callout>
            <h3 className="text-xl font-semibold text-foreground mb-4">Denial Scenario Approach</h3>
            <p className="text-muted-foreground mb-4">In a denial scenario the approach should not be too dissimilar from the one adopted in debt restructuring where the calling of events of defaults should be used tactically together with the exploitation of deleveraging options. The objective should be not to create any industrial or business leakage upon default but, as a start, to improve quality of transition planning and improve transition governance at borrower level so to ensure that the client sets targets and identifies credible and effective mitigation actions. In this phase, new financings should be avoided altogether.</p>
            <p className="text-muted-foreground mb-4">Once satisfactory transition governance at client level is achieved, a credible plan can be implemented, and financings with a shorter maturity for transition-enabling CapEx could be considered, while overall financed emissions should be reduced, through the use of equity cures, if feasible.</p>
            <p className="text-muted-foreground mb-4">For clients that accept engagement and have a transition plan that is barely credible, there are two concurrent actions: first, ensuring a gradual improvement of the transition plans&apos; credibility over time; and second, implementing a reduced trajectory of carbon emissions intensity through energy efficiency, use of renewable energy alternatives, fuel switch, and adoption of circular transition solutions at zero or low net cost.</p>
            <Callout type="tip" title="Debt Capacity Opportunity">The use of decarbonisation levers would generally cause a production cost reduction and an increase in EBITDA which would increase debt capacity. Such debt capacity can be used for transition-linked loans, UoP loans for R&amp;D, and additional transition-enabling and low-carbon technologies.</Callout>
            <h3 className="text-xl font-semibold text-foreground mb-4">Strategy Implementation Components</h3>
            <p className="text-muted-foreground mb-4">The business strategy, that is implemented through a strategy decision plan, pivots around transition plan credibility and it relies on:</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">KPIs Selection</h4>
            <p className="text-muted-foreground mb-4">Selection of KPIs based on lender&apos;s objectives and metrics and choice of scenarios. They should definitely include transition-related KPIs, and also, depending on the sector, potentially circular transition, biodiversity protection, air pollution and water management KPIs.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Contractual Solutions</h4>
            <p className="text-muted-foreground mb-4">Revision of contractual documentation to reflect transition features and KPIs, alignment of climate scenarios between borrowers and lenders, increasing legal protections for lenders, avoiding asymmetry of information that can lead to transition washing, and covenants based on the transition plan credibility scoring of clients and committed low-carbon or transition-enabling R&amp;D and CapEx targets.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Lending Products</h4>
            <p className="text-muted-foreground mb-4">Revision of the various types of lending products for deploying transition finance and adoption of a product policy encompassing general corporate purpose loans, UoP and green loans, transition-linked loans and sustainability-linked loans.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Transition-Washing and Greenwashing</h4>
            <p className="text-muted-foreground mb-4">Adoption of a policy addressing transition-washing risks in products and criteria for assessing clients&apos; greenwashing practices.</p>
          </section>

          <section id="strategy-decision-plan" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Strategy Decision Plan and Its Components</h2>
            <p className="text-muted-foreground mb-4">A strategy decision plan comprises the adoption of step plans, matrixes, and priority list of clients for the deployment of the relevant transition finance products. It applies the bank&apos;s metrics and verifies alignment with bank&apos;s targets, considers transition washing risks, and provides for a sectoral adjustment of exposure, tenor, type of lending products and available counteractions against clients&apos; failures.</p>
            <p className="text-muted-foreground mb-4">The strategy decision plan is composed of 4 tools:</p>
            <StyledList style="number" items={[
              "Step plan — For the assessment of clients' bottom-up real and committed emissions and CapEx targets and data",
              "Assessment matrix — For the classification of hard-to-abate clients in the portfolio based on their emissions targets and the credibility of their transition plans",
              "Bank's actions and remedies — Borrowers' failure to decarbonize and to provide relevant transition data requires remedies and counteractions",
              "Target client categories — Categories of priority clients to be targeted based on their actual level of aggregate locked-in emissions and their commitment within or beyond 2030 but no later than 2035",
            ]} />
          </section>

          <section id="step-plan" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Step Plan for the Assessment of Clients&apos; Transition-Related Targets and Data</h2>
            <p className="text-muted-foreground mb-4">The step plan identifies 4 separate steps, starting with compliance with the bank&apos;s metrics, alignment with CapEx identified by the bank in its Transition Finance Framework and the allocation in different categories accordingly, and finally with the assessment of the credibility of the clients&apos; transition plans.</p>
          </section>

          <section id="assessment-matrix-and-remedies" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Assessment Matrix and Bank&apos;s Actions and Remedies</h2>
            <p className="text-muted-foreground mb-4">The Pugh matrix aims at classifying hard-to-abate clients in the portfolio based on their ambitions and the credibility of their transition plans. It is at the outset target-based rather than relying on historical emissions, recognizing that in hard-to-abate sectors there is no substantial trend in emission abatement.</p>

            <h3 className="text-xl font-semibold text-foreground mb-4">Features of the Assessment Matrix</h3>
            <h4 className="text-lg font-semibold text-foreground mb-3">Evaluation Criteria</h4>
            <p className="text-muted-foreground mb-4">Clients&apos; targets for several transition-related KPIs are assessed within five clusters: peers in the sector, peers with similar financed emissions, companies already aligned with the bank&apos;s targets, and those that will commit to do so in 12 and 24 months.</p>

            <h4 className="text-lg font-semibold text-foreground mb-3">Baseline</h4>
            <p className="text-muted-foreground mb-4">The baseline is a client with a light orange score in its transition plan credibility assessment that has average carbon emissions intensity, locked-in emissions, and low-carbon CapEx targets compared to peers. The baseline assumes the client&apos;s carbon emissions intensity will align with the bank&apos;s within 12 months and phase-out of high-emitting assets will occur by no later than 2035.</p>

            <h4 className="text-lg font-semibold text-foreground mb-3">Methodology</h4>
            <p className="text-muted-foreground mb-4">The target-based data set is verified against the credibility score of clients&apos; transition plans. A correction factor accounts for greenwashing and transition washing risks. This translates into points and allocation of companies into 4 clusters:</p>
            <StyledList style="number" items={[
              "Aligned/Aligning within 2030 (Green/Dark green)",
              "Aligned/Aligning within 2035 (Light green/Light orange)",
              "Not likely aligning within 2035 (Dark orange)",
              "Not aligning or not willing to align at all (Red/Brown)",
            ]} />

            <h3 className="text-xl font-semibold text-foreground mb-4">Remedies</h3>
            <Callout type="info" title="Response Strategy">Strategically, the commercial focus in the short-term should be on the first two categories while the third category should be subject to serious scrutiny to verify the client&apos;s adaptive capacity to align with 2035.</Callout>
            <StyledList style="arrow" items={[
              "Category 1 (Aligned/Aligning within 2030): General purpose loans with transition-related safeguards, dedicated UoP financing, and transition/sustainability-linked loans may be granted",
              "Category 2 (Aligned/Aligning within 2035): General purpose loans with safeguards, tenor may need to be reduced, UoP financing can be granted, but SLLs should not be granted",
              "Category 3 (Not likely aligning within 2035): Given a grace period (ideally not longer than 12 months) to improve. No new financing granted, lender should seek to reduce exposure",
              "Category 4 (Not aligning at all): Positions should be deleveraged. No new facilities should be granted",
            ]} />
          </section>

          <section id="target-clients-categories" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Target Client Categories</h2>
            <h3 className="text-xl font-semibold text-foreground mb-4">Allocation of Clients Based on Locked-in Emissions and Short-Term Commitments</h3>
            <p className="text-muted-foreground mb-4">Clients that are actually aligned with the bank&apos;s carbon emissions intensity target and have at least a light orange/green score in the matrix are then allocated in different categories by reference to their actual level of aggregate locked-in emissions and their commitment within or beyond 2030 but no later than 2035.</p>
            <p className="text-muted-foreground mb-4">This classification is based on actual verified locked-in emissions data rather than a simple target.</p>
            <Callout type="tip" title="Prioritisation Principle">Those with the highest level of locked-in emissions with the most credible transition plan (starting with those with the highest financed emissions) should be financed first. Tackling those with the highest locked-in and financed emissions first will reduce the risk of stranding more than proportionally.</Callout>
            <p className="text-muted-foreground mb-4">The classification identifies two clusters:</p>
            <StyledList style="number" items={[
              "First cluster: Clients in different bands of locked-in emissions which have committed within 2030 to transition-enabling and/or low-carbon CapEx aligned with bank's preferred technologies",
              "Second cluster: Companies that have committed beyond 2030 but no later than 2035 to transition-enabling and/or low-carbon CapEx aligned with bank's preferred technologies",
            ]} />
          </section>

          <SourceCitations sources={sources} />

          <PageNavigation
            prev={{ title: "Net Zero Risk Management", href: "/governance/net-zero-management", category: "Governance Tool" }}
            next={{ title: "KPIs Credibility Criteria", href: "/products/kpis-criteria", category: "Products" }}
          />
        </article>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const FinanceFramework = () => {
  return (
    <DynamicPageContent
      slug="governance/finance-framework"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Governance Tool", href: "/governance/prudential-planning" },
        { label: "Transition Finance Framework" },
      ]}
      navigation={{
        prev: { title: "Net Zero Risk Management", href: "/governance/net-zero-management", category: "Governance Tool" },
        next: { title: "KPIs Credibility Criteria", href: "/products/kpis-criteria", category: "Products" }
      }}
      fallback={<FinanceFrameworkFallback />}
    />
  );
};

export default FinanceFramework;