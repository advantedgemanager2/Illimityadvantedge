import DynamicPageContent from "@/components/docs/DynamicPageContent";
import DocsLayout from "@/components/layout/DocsLayout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TableOfContents from "@/components/layout/TableOfContents";
import Callout from "@/components/docs/Callout";
import PageMeta from "@/components/docs/PageMeta";
import PageNavigation from "@/components/docs/PageNavigation";
import StyledList from "@/components/docs/StyledList";

const tocItems = [
  { id: "transition-plans", title: "Transition Plans", level: 2 },
  { id: "eu-law", title: "Transition Plans in EU Law", level: 2 },
  { id: "objectives-key-elements", title: "Objectives and Key Elements under ESRS E1", level: 3 },
  { id: "issues-challenges", title: "Issues, Challenges and Implications", level: 3 },
  { id: "credibility", title: "Credibility of Transition Plans", level: 2 },
  { id: "main-features", title: "Main Features of a Credible Transition Plan", level: 2 },
];

const CredibleTransitionPlansFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Know-How Tool", href: "/know-how/transition-finance" },
              { label: "Credible Transition Plans" },
            ]}
          />

          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">
            Credible Transition Plans
          </h1>

          <PageMeta
            lastUpdated="October 8, 2024"
            tags={["Transition Plans", "CSRD", "ESRS E1", "Credibility", "EU Law"]}
          />

          <p className="text-lg text-muted-foreground mb-8">
            Examining the role, regulatory framework, key elements and credibility requirements of corporate climate transition plans under EU law.
          </p>

          {/* Transition Plans Section */}
          <section id="transition-plans" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Transition Plans</h2>

            <p className="text-muted-foreground mb-4">
              Banks need to especially assess the resilience and climate-related financial risks of clients operating in high-emitting sectors that are hard-to-abate, such as oil and gas, coal, power, steel, cement, shipping, chemical, aluminium and automotive. These risks also include transition risks significantly impacting the corporate strategy, business model, risk management, investment, and financial plans of these clients, hence indirectly impacting their creditworthiness.
            </p>

            <Callout type="info" title="EBA Requirements">
              The EBA is expressly demanding credit institutions assess mitigation opportunities, adaptive capacity, and the soundness of the transition planning of the clients. Banks should not solely rely on corporate sustainability disclosures but expressly collect non-public data by engaging with clients in sectors and business lines that present material exposures to ESG risks.
            </Callout>

            <p className="text-muted-foreground mb-4">
              The first line of defence that banks should set up is to establish a dialogue with counterparties about their transition plans and assess consistency with the institution&apos;s prudential transition planning. The consequence for credit institutions is that they will have to adjust their prudential frameworks with respect to exposure to counterparties that are failing to build up an adaptive capacity, to decarbonise fast enough, or to prepare a sound transition plan.
            </p>

            <Callout type="important" title="CRR3 Benchmark">
              The assessment by credit institutions of clients&apos; delay in transitioning should consider as a benchmark the level of climate and nature restoration ambitions of the EU and legal instruments such as the EU Climate Law and the DNSH under the EU Taxonomy Regulation. As indicated by recital (54) of CRR3, the technical screening criteria for &quot;do no significant harm&quot; should be used to identify assets or exposures for assessing dedicated prudential treatments and risk differentials.
            </Callout>
          </section>

          {/* EU Law Section */}
          <section id="eu-law" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Transition Plans in EU Law</h2>

            <p className="text-muted-foreground mb-4">
              The European Union has introduced reporting of climate transition plans under the Corporate Sustainability Reporting Directive (CSRD). This legislation expands the scope of climate transition plans beyond voluntary publishing, shifting their role from marketing and social responsibility to encompass legal, accounting, financial, and regulatory requirements.
            </p>

            <p className="text-muted-foreground mb-4">
              Climate transition plans and reporting on climate-related financial risks and opportunities represent a significant innovation in EU corporate governance. They are changing how directors and managers identify, assess, and manage climate-related impacts, risks, and opportunities in business plans.
            </p>

            <section id="objectives-key-elements" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Objectives of Transition Plans and Key Elements under ESRS E1</h3>

              <p className="text-muted-foreground mb-4">
                Transition plans allow creditors, investors and stakeholders to evaluate:
              </p>

              <StyledList
                style="check"
                items={[
                  "Soundness of corporate strategy",
                  "Resilience of business model",
                  "Credibility of mitigation actions",
                  "Effectiveness of processes",
                  "Internal competence for risk management supervision",
                ]}
              />

              <p className="text-muted-foreground mb-4 mt-4">
                The ESRS E1 outlines specific disclosure requirements for climate change mitigation transition plans, focusing on:
              </p>

              <StyledList
                style="arrow"
                items={[
                  "Past, current, and future mitigation efforts aligned with the 1.5°C warming limit and 2050 climate neutrality objective",
                  "Exposure to coal, oil, and gas",
                  "Decarbonisation strategies and planned actions, including product/service changes and new technology adoption",
                  "Investments and funding for transition plan implementation",
                  "Potential locked-in GHG emissions from key assets and products",
                  "Turnover, CapEx, and future Taxonomy alignment plans",
                  "Position relative to Paris-aligned Benchmarks for high-emitting companies",
                  "Integration of the transition plan into overall business strategy and financial planning",
                  "Progress on transition plan implementation",
                ]}
              />
            </section>

            <section id="issues-challenges" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Issues, Challenges and Implications</h3>

              <p className="text-muted-foreground mb-4">
                Non-exclusive list of issues facing corporations when preparing transition plans:
              </p>

              <StyledList
                style="arrow"
                items={[
                  "Assessment of climate impacts on business model based on climate scenarios and industrial pathways",
                  "Identification and management of carbon lock-in risk",
                  "Identification and management of transition washing and greenwashing",
                  "Assessment of the impact of change in consumers' preference",
                  "Identification and management of technology risks",
                  "Just transition considerations",
                  "Management of biodiversity loss, dependencies and impacts",
                  "Assessment of drivers of change impacting sector at global and European level",
                  "Cost/opportunity analysis of low-carbon technology advancements that surpass standard Best Available Technologies",
                  "Reporting of forward-looking risks and assessment of impact of carbon taxes",
                  "Identification of mitigation actions and related CapEx and OpEx investments",
                  "New abatement cost assessments and prioritisation of investments in low-carbon technologies",
                  "New frontiers of directors' liability",
                  "Potential impact on provisioning and impairment in accounts",
                  "New role of internal controls and external assurance",
                  "Managed phase-out of brown assets and reskilling/upskilling of workforce",
                ]}
              />

              <Callout type="warning" title="Accounting Implications">
                Some transition plan elements may have significant accounting relevance: Net Zero commitments may be interpreted as &quot;constructive obligations&quot; for financial statement provisions, and asset stranding risk assessment may impact impairment evaluations.
              </Callout>
            </section>
          </section>

          {/* Credibility Section */}
          <section id="credibility" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Credibility of Transition Plans</h2>

            <p className="text-muted-foreground mb-4">
              While the CSRD and related directives have not explicitly defined &quot;credible&quot; transition plans, the importance of credibility has been emphasized internationally and by the EU Commission. The challenge lies in identifying key credibility attributes based on current and forthcoming legal, accounting, and regulatory frameworks.
            </p>

            <p className="text-muted-foreground mb-4">
              Credible transition plans are crucial due to their impact on:
            </p>

            <StyledList
              style="check"
              items={[
                "Credit risk valuation",
                "Capital allocation",
                "Reputational risk",
                "Defining boundaries of greenwashing",
                "Legal liability",
              ]}
            />

            <Callout type="info" title="Impact on Credit Institutions">
              Climate transition planning efforts of clients are particularly relevant for the banking sector. They allow banks to assess the resilience and climate-related financial risks of NFCs in high-emitting, hard-to-abate sectors. Banks must integrate clients&apos; credible approach to climate and environmental impacts, risks, and opportunities into their own strategy and risk management.
            </Callout>
          </section>

          {/* Main Features Section */}
          <section id="main-features" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Main Features of a Credible Transition Plan</h2>

            <p className="text-muted-foreground mb-4">
              A credible transition plan must be incorporated into the corporate business plan and explicitly reference the company&apos;s financial plan, ensuring alignment with financial reporting. This method guarantees that all requirements and obligations related to capital expenditures, operating expenses, mergers and acquisitions, and research and development are met, aligning capital stock, working capital, and overall business operations with the company&apos;s transition objectives and key performance indicators.
            </p>

            <Callout type="tip" title="Capital Allocation">
              For certain companies, capital allocation strategies that facilitate the repositioning of capital stock will be essential. For some, operating expenditure may hold greater importance, encompassing expenses related to retraining and redeploying personnel, decommissioning stranded assets, or implementing low-carbon production practices.
            </Callout>
          </section>

          <PageNavigation
            prev={{
              title: "Litigation Risk",
              href: "/know-how/litigation-risk",
              category: "Know-How Tool"
            }}
            next={{
              title: "Solutions Deployment",
              href: "/know-how/solutions-deployment",
              category: "Know-How Tool"
            }}
          />
        </article>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const CredibleTransitionPlans = () => {
  return (
    <DynamicPageContent
      slug="know-how/credible-transition-plans"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Know-How Tool", href: "/know-how/transition-finance" },
        { label: "Credible Transition Plans" },
      ]}
      navigation={{
        prev: { title: "Litigation Risk", href: "/know-how/litigation-risk", category: "Know-How Tool" },
        next: { title: "Solutions Deployment", href: "/know-how/solutions-deployment", category: "Know-How Tool" }
      }}
      fallback={<CredibleTransitionPlansFallback />}
    />
  );
};

export default CredibleTransitionPlans;
