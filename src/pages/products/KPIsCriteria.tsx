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
  { id: "rationale", title: "Rationale Behind the Use of Credible KPIs", level: 2 },
  { id: "credibility-criteria", title: "Credibility Criteria: Areas of Interest", level: 2 },
  { id: "resource-allocation", title: "Client's Ability to Allocate Resources", level: 3 },
  { id: "transition-vulnerability", title: "Client's Transition Vulnerability", level: 3 },
  { id: "lock-in-risk", title: "Carbon Lock-In Risk Management", level: 3 },
  { id: "decarbonization-pathway", title: "Robustness of Planned Decarbonization Pathway", level: 3 },
  { id: "internal-audit", title: "Client's Internal Audit", level: 3 },
  { id: "non-public-data", title: "Non-Public Data Gathering", level: 3 },
  { id: "first-line-defense", title: "First Line of Defense", level: 3 },
  { id: "prudential-adjustment", title: "Prudential Transition Planning Adjustment", level: 3 },
  { id: "key-considerations", title: "Key Considerations for Transition Plan Credibility", level: 3 },
];

const KPIsCriteriaFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products/kpis-criteria" },
              { label: "KPIs Credibility Criteria" },
            ]}
          />

          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">
            KPIs Credibility Criteria
          </h1>

          <PageMeta
            lastUpdated="January 7, 2025"
            tags={["KPIs", "Credibility", "Transition Plans", "Hard-to-Abate Sectors"]}
          />

          <p className="text-lg text-muted-foreground mb-8">
            A further critical objective in the pursuit of Near Zero, Net Zero and EU Green Deal objectives is the utilisation of credible KPIs that accurately represent the impact of operations on the real economy.
          </p>

          {/* Introduction Section */}
          <section id="introduction" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>

            <p className="text-muted-foreground mb-4">
              A further critical objective in the pursuit of Near Zero, Net Zero and EU Green Deal objectives is the utilisation of credible KPIs that accurately represent the impact of operations on the real economy. This enables the financial institution to circumvent policy and regulatory risks, as well as greenwashing, which would otherwise impede the climate transition.
            </p>

            <Callout type="info" title="Core Purpose">
              Credible KPIs enable financial institutions to circumvent policy and regulatory risks, as well as greenwashing, which would otherwise impede the climate transition.
            </Callout>
          </section>

          {/* Rationale Section */}
          <section id="rationale" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Rationale Behind the Use of Credible KPIs</h2>

            <p className="text-muted-foreground mb-4">
              The importance of evaluating the credibility of transition plans by implementing KPIs that reflect the client&apos;s impact on the real economy lies in the current sustainability reporting standards only provide the minimum requirements, which do not reflect the client&apos;s alignment with the sectoral climate goals. Additionally, the EU&apos;s regulations do not provide a binding definition of credible transition plans.
            </p>

            <p className="text-muted-foreground mb-4">
              This results in a gap that must be addressed through an <strong>internal governance analysis</strong> conducted by the financial institution. This analysis must be in accordance with the EU Green Deal guidelines, the climate targets of the financial institution, and the decarbonization strategy of the client, which affects the bank&apos;s financed emissions.
            </p>

            <Callout type="warning" title="Regulatory Imperative">
              The impending necessity for financial institutions to develop prudential transition plans in accordance with the guidelines of the European Banking Authority (EBA) is the justification for this. The challenging task of identifying the scope and attributes of their clients&apos; climate transition plans, which are derived from enterprise risk management practices, climate science, monitoring of technological innovations, EU climate policy, and legal sources, hinders this.
            </Callout>
          </section>

          {/* Credibility Criteria Section */}
          <section id="credibility-criteria" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Credibility Criteria: Areas of Interest</h2>

            <p className="text-muted-foreground mb-4">
              Particularly pertinent to credit institutions is the identification of transition indicators, which are key performance indicators (KPIs) that can quantify the client&apos;s transition pathway, as well as its governance of carbon transition risks, impacts, and opportunities, and &quot;how the transition and alignment are embedded within a business model.&quot;
            </p>

            <p className="text-muted-foreground mb-4">
              Key performance indicators (KPIs) may mitigate disparities between prudential and non-prudential transition strategies. Furthermore, key performance indicators (KPIs) should not only assess the company&apos;s alignment with Near Zero or Net Zero, but also whether it is consistently aligning with the objectives of the <strong>EU Green Deal (EGD)</strong> to optimise the transition efforts of EU private and public institutions.
            </p>

            <p className="text-muted-foreground mb-4">
              The financial institution must address several critical areas that pertain to the credibility criteria. Areas that can be identified include the following:
            </p>

            {/* Resource Allocation */}
            <section id="resource-allocation" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Client&apos;s Ability to Allocate Resources</h3>
              <p className="text-muted-foreground mb-4">
                The ability of the client to implement and assess if and how the availability and allocation of financial resources at an affordable cost for R&amp;D and CapEx in transition-enabling and low-carbon technologies and for a sufficient duration impinge on the implementation of such actions.
              </p>
            </section>

            {/* Transition Vulnerability */}
            <section id="transition-vulnerability" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Client&apos;s Transition Vulnerability</h3>
              <p className="text-muted-foreground mb-4">
                The degree of vulnerability to transition risks of the borrower and its governance of the transition process, considering the relevance of opportunities from technological developments and impacts from environmental and climate regulations applicable or foreseeable to the sector of activity of the counterparty.
              </p>
              <p className="text-muted-foreground mb-4">
                While these aspects are better assessed through a qualitative analysis of the transition plan, weak spots such as <strong>carbon emissions intensity</strong> and <strong>time horizon for phasing-out high-emitting assets</strong> and phasing-in transition-enabling and low-carbon technologies should be included in specific quantitative KPIs.
              </p>
            </section>

            {/* Carbon Lock-In Risk */}
            <section id="lock-in-risk" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Carbon Lock-In Risk Management</h3>

              <Callout type="important" title="Most Critical Risk">
                Carbon lock-in risk, in light of the lifetime of high-emitting assets in hard-to-abate sectors, is the most critical risk.
              </Callout>

              <p className="text-muted-foreground mb-4">
                Its management involves carrying out Life Cycle Assessments, assessing the level of locked-in emissions at asset and project level, focusing on decarbonisation levers that can also bring a production cost reduction, identifying credible decarbonisation levers and transition-enabling technologies, setting up internal roles for the carrying out of an implementation plan, identifying financial resources, and creating a timeline for action.
              </p>
              <p className="text-muted-foreground mb-4">
                The assessment of the client&apos;s delay in transitioning to a low-carbon economy is firstly quantitative by reference to the level of locked-in emissions over time benchmarked against the climate objectives of the EU Climate Law and to the choice for the technology adopted, benchmarked against the technologies identified by the bank.
              </p>
              <p className="text-muted-foreground mb-4">
                Such an assessment is also qualitative, through a valuation of the process adopted by the assessment of the opportunities and credible mitigation, and it is carried out through an analysis of the clients&apos; transition plans.
              </p>
            </section>

            {/* Decarbonization Pathway */}
            <section id="decarbonization-pathway" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Robustness of the Planned Decarbonization Pathway</h3>
              <p className="text-muted-foreground mb-4">
                The client decarbonization plans should be integrated in the overall business strategy and cover the transition to environmental objectives.
              </p>
              <p className="text-muted-foreground mb-4">
                These aspects are unlikely to be caught effectively through the use of quantitative KPIs as they will require an in-depth analysis of the client&apos;s decision-making processes, but they can be singled-out through an engagement process with the client, following a credibility assessment of its transition plan.
              </p>
            </section>

            {/* Internal Audit */}
            <section id="internal-audit" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Client&apos;s Internal Audit</h3>
              <p className="text-muted-foreground mb-4">
                If the client has assessed if delayed decarbonization, failure to decarbonize and the materialisation of transition risks will impact the business model and its creditworthiness.
              </p>
            </section>

            {/* Non-Public Data */}
            <section id="non-public-data" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Non-Public Data Gathering</h3>
              <p className="text-muted-foreground mb-4">
                The express collection of non-public data through the engagement with clients in sectors or business lines which present material exposures to ESG risks.
              </p>
            </section>

            {/* First Line of Defense */}
            <section id="first-line-defense" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">First Line of Defense</h3>
              <p className="text-muted-foreground mb-4">
                The establishment of a first line of defense which is composed of a dialogue engagement with counterparties in which the consistency with the institution&apos;s prudential transition planning is assessed.
              </p>
            </section>

            {/* Prudential Adjustment */}
            <section id="prudential-adjustment" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Prudential Transition Planning Adjustment</h3>
              <p className="text-muted-foreground mb-4">
                The adjustment by credit institutions of their prudential transition planning framework as a consequence of the failing of the exposure that the clients have due to the lack of their adaptive capacity to decarbonise or to prepare a sound transition plan:
              </p>

              <StyledList
                style="check"
                items={[
                  "The investment of the credit institutions in clients which have credible transition plans at the level of the undertaking or at the activity level.",
                  "Credit institutions to ensure that the economic activities with credible science based targets are supported by information ensuring integrity, transparency and accountability of the data.",
                  "The introduction by the client in its transition plan of information which include, milestones, activities, processes and resources encouraging the client to have them time bound, science-based and actionable."
                ]}
              />
            </section>

            {/* Key Considerations */}
            <section id="key-considerations" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Key Considerations for Transition Plan Credibility</h3>
              <p className="text-muted-foreground mb-4">
                The transition plan credibility and the risk associated to it should consider the impact on <strong>credit risk valuation</strong>, <strong>capital allocation</strong>, <strong>reputational risk</strong> and the definition and boundaries of greenwashing and related legal liability.
              </p>
              <p className="text-muted-foreground mb-4">
                Credibility of the transition plan engages with accounting issues such as impairment. Also consideration should be given as to whether the Net Zero transition commitment should be interpreted as a &quot;constructive obligation&quot; for the purpose of recognizing a provision in financial statements.
              </p>
              <p className="text-muted-foreground mb-4">
                Credibility is also impacted by the enforceability in the member states of effective, proportionate and dissuasive sanctions against clients and their directors and external auditors.
              </p>

              <Callout type="tip" title="Critical First Step">
                Identifying the nature and attributes of scientific, regulatory, legal, risk management and technological issues is a critical first step in arranging an effective transition governance that is transition plan-focused.
              </Callout>
            </section>
          </section>

          <PageNavigation
            prev={{
              title: "Transition Finance Framework",
              href: "/governance/finance-framework",
              category: "Governance Tool"
            }}
            next={{
              title: "Corporate Loans",
              href: "/products/corporate-loans",
              category: "Products"
            }}
          />
        </article>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const KPIsCriteria = () => {
  return (
    <DynamicPageContent
      slug="products/kpis-criteria"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products/kpis-criteria" },
        { label: "KPIs Credibility Criteria" },
      ]}
      navigation={{
        prev: { title: "Transition Finance Framework", href: "/governance/finance-framework", category: "Governance Tool" },
        next: { title: "Corporate Loans", href: "/products/corporate-loans", category: "Products" }
      }}
      fallback={<KPIsCriteriaFallback />}
    />
  );
};

export default KPIsCriteria;
