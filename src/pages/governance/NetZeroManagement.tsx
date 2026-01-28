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
  { id: "why-banks-face-net-zero-risk", title: "Why Banks Face a Net Zero Risk", level: 2 },
  { id: "how-to-manage-net-zero-risk", title: "How to Manage a Net Zero Risk", level: 2 },
  { id: "processes-credibility", title: "Processes Relevant for Credibility", level: 2 },
  { id: "sbti-methodologies", title: "Adoption of SBTi Methodologies", level: 2 },
  { id: "elements-credibility", title: "Elements Relevant for Credibility", level: 2 },
  { id: "bottom-up-entity-level", title: "Bottom-Up Assessment at Entity Level", level: 2 },
  { id: "bottom-up-entity-asset-level", title: "Bottom-Up Assessment at Entity and Asset Level", level: 2 },
];

const sources = [
  { id: 1, title: "EBA Guidelines on ESG Risks", author: "European Banking Authority", year: "2025" },
  { id: 2, title: "Capital Requirements Directive VI (CRD VI)", author: "European Commission", year: "2024" },
  { id: 3, title: "NGFS Transition Planning Practices", author: "Network for Greening the Financial System", year: "2024" },
  { id: 4, title: "SBTi Financial Institutions Net-Zero Standard", author: "Science Based Targets initiative", year: "2024" },
];

const NetZeroManagementFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Governance Tool", href: "/governance/prudential-planning" }, { label: "Net Zero Risk Management" }]} />
          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">Net Zero Risk Management</h1>
          <PageMeta lastUpdated="October 8, 2024" tags={["Net Zero", "Risk Management", "Transition Planning", "Prudential Regulation"]} />
          <p className="text-lg text-muted-foreground mb-8">Understanding how financial institutions should develop prudential transition plans and policies to facilitate their Net Zero transition and adhere to the European Green Deal policy agenda.</p>

          <section id="introduction" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4">The concept of Net Zero represents a substantial shift in climate policy, as it represents a transition from the sheer reduction of emissions to the establishment of a state of equilibrium in which human activities no longer contribute to the accumulation of greenhouse gases in the atmosphere.</p>
            <p className="text-muted-foreground mb-4">In this context, financial institutions are required to develop prudential transition plans and policies that enable them to facilitate their Net Zero transition and adhere to the European Green Deal policy agenda.</p>
            <Callout type="info" title="Value Creation and Transition Risks">Financial institutions&apos; sustainable and trustworthy value creation is contingent upon the proper development and management of transition risks. Transition risks are a subset of climate-related hazards that include Net Zero risks. The risks are cascading in character and vary across the value chain of enterprises.</Callout>
          </section>

          <section id="why-banks-face-net-zero-risk" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Why Banks Face a Net Zero Risk</h2>
            <p className="text-muted-foreground mb-4">Financial institutions that have committed to Net Zero pledges and to reduce the financed and facilitated emissions associated with their on- and off-balance sheet activities are exposed to reputational, regulatory and potentially legal risks, if such pledges are unachievable.</p>
            <h3 className="text-xl font-semibold text-foreground mb-4">Difference Between Prudential and Non-Prudential Transition Plans</h3>
            <p className="text-muted-foreground mb-4">The recent adoption of the Capital Requirements Directive (CRD VI) shed a new light on how financial institutions should manage their transition to Net Zero.</p>
            <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 bg-muted/30 rounded-r-lg"><p className="text-foreground italic">&quot;The overview and articulation of the strategic actions and risk management tools deployed by institutions, based on a forward-looking business environment analysis, to demonstrate how an institution ensures its robustness and preparedness for the transition towards a climate and environmentally resilient and sustainable economy.&quot;</p><cite className="text-sm text-muted-foreground mt-2 block">-- Definition of prudential transition planning under CRD VI</cite></blockquote>
            <h3 className="text-xl font-semibold text-foreground mb-4">Relationship Between Prudential and Non-Prudential Transition Plans</h3>
            <Callout type="important" title="EBA Position on Unified Planning">The EBA clearly stated that &quot;there is only one transition plan, a strategic plan designed by a bank to reduce operational and financed emissions to net zero levels over the long term. Separating transition plans into two views is not useful or productive.&quot;</Callout>
            <p className="text-muted-foreground mb-4">Financial institutions should develop one transition plan integrating:</p>
            <StyledList style="check" items={["Operational plan to reduce scope 1 and 2 emissions", "Net zero plan for financed emissions across loan portfolios", "Financial and execution risks (including scenario analysis and stress testing)", "Sustainable finance lending, income and profitability targets related to ESG"]} />
            <Callout type="tip" title="Foundation for Risk Mitigation">The successful deployment of transition plans with bottom-up supervision by financial institutions of their clients is the foundation for the mitigation of risks related to compliance with macro and micro prudential regulations.</Callout>
            <h3 className="text-xl font-semibold text-foreground mb-4">Assessment of Transition Plan of Borrowers</h3>
            <p className="text-muted-foreground mb-4">A <strong>financial institution&apos;s transition plan is net zero aligned only if the borrower to whom it is lending is aligned with their respective sectoral decarbonisation pathways</strong>. The financial institution needs to develop a <strong>bottom-up credibility assessment framework</strong>.</p>
          </section>

          <section id="how-to-manage-net-zero-risk" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How to Manage a Net Zero Risk</h2>
            <p className="text-muted-foreground mb-4"><strong>Micro prudential assessment of the financial institution by the relevant authority is strongly based on the credibility of the transition plan.</strong> The management of net zero risks starts from developing an understanding of the gap between the climate goals of the financial institution against the credibility of the sectoral transition plans of their borrowers.</p>
            <Callout type="tip" title="Managing Net Zero Risk">This risk is manageable as long as the financial institution focuses its strategy, transition plan and client engagement on real economy transition of its borrowers and addresses its climate vulnerabilities by reallocating capital from high emitting to transitional and sustainable activities.</Callout>
            <h3 className="text-xl font-semibold text-foreground mb-4">Elements That Impact Credibility</h3>
            <StyledList style="check" items={["The presence of a climate objective whether by temperature goal or emission goal", "A long-term scientific climate target across all scopes", "A governance structure for oversight and delivery of climate objectives", "Consistency between time horizon of targets", "Integration of backward looking data and forward looking projections", "All material scope 1, 2 and 3 value chain emissions", "Sector based regional targets", "Key assumptions and methodology", "Regular, periodic metrics as part of dynamically responsive transition plan", "Emission strategy reconciled with business strategy"]} />
            <h3 className="text-xl font-semibold text-foreground mb-4">Compliance with Micro Prudential Assessment</h3>
            <h4 className="text-lg font-semibold text-foreground mb-3">Climate Risk Management</h4>
            <p className="text-muted-foreground mb-4">The financial institution needs to integrate climate risk in their risk governance, processes, strategies, capital requirements and disclosure processes.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Net Zero Transition Planning</h4>
            <p className="text-muted-foreground mb-4">A credible transition plan needs: comprehensive coverage, supporting analytical tools, ambitious targets, effective delivery, transparent disclosure and integrated management.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Sustainable Finance Opportunity</h4>
            <p className="text-muted-foreground mb-4">The correct application of climate risk management and transition planning can lead the financial institution to optimize profitability and business opportunity.</p>
          </section>

          <section id="processes-credibility" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Processes Relevant for Credibility</h2>
            <p className="text-muted-foreground mb-4">Those processes contributing to transition planning have been identified by NGFS and should be integrated with the financial institutions&apos; risk management practices.</p>
            <h3 className="text-xl font-semibold text-foreground mb-4">Governance</h3>
            <StyledList style="arrow" items={["Approval and review of the transition plan by the board", "Documentation of roles and responsibilities of senior managers", "Training and capacity of the board to understand climate risks", "Remuneration aligned with transition plan execution"]} />
            <h3 className="text-xl font-semibold text-foreground mb-4">Engagement</h3>
            <p className="text-muted-foreground mb-4">Refers to the level of engagement and supply chain granularity assessment that the financial institution carries with its clients and investees, including gap analysis and data collection on scope 1, 2 and 3 emissions.</p>
            <h3 className="text-xl font-semibold text-foreground mb-4">Risk Analysis</h3>
            <StyledList style="arrow" items={["Methodology used to set risk appetite and analyze transition and physical risks", "Identification of external dependencies impacting risk quantification", "Use of KPIs for scenario analysis and maximum risk allowance", "Use of carbon credits in scope 3 calculation"]} />
            <h3 className="text-xl font-semibold text-foreground mb-4">Viable and Credible Actions</h3>
            <p className="text-muted-foreground mb-4">Undertake credible actions such as financing and offering financial services for clients with clear documentation and alignment of the overall strategy, while addressing transition risks.</p>
            <h3 className="text-xl font-semibold text-foreground mb-4">Monitoring and Reviewing</h3>
            <StyledList style="arrow" items={["Development of internal controls and monitoring processes with KPIs", "Periodical update and review of the transition plan with up-to-date climate science"]} />
          </section>

          <section id="sbti-methodologies" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Adoption of SBTi Methodologies by Financial Institutions</h2>
            <p className="text-muted-foreground mb-4">SBTi has identified three distinct categories: <strong>Mandatory, Optional, and Beyond Scope</strong>. The financial institution must incorporate at least 67% of the financed emissions from their lending activities into their target boundaries.</p>
            <Callout type="important" title="Minimum Coverage and Credibility Assessment">Financial institutions are required to guarantee that their objectives collectively encompass a minimum of 67% of their Portfolio Target Boundary (PTB). The asset level data outputs need to mirror the real economy impact of the financed emissions through a credibility assessment based on sectoral engagement.</Callout>
          </section>

          <section id="elements-credibility" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Elements Relevant for Credibility</h2>
            <StyledList style="check" items={["Governance for authorization, implementation, monitoring and updating", "Sector specific engagement strategy with data collection methodology", "Risk assessment considering climate risks and client risk profiles", "Training and educational measures for employees", "Monitoring structure and metrics such as KPIs"]} />
            <p className="text-muted-foreground mb-4">Financial institutions should also <strong>add consideration on the risk exposure to transition-washing and of the impact that their operations and actions have on biodiversity.</strong></p>
          </section>

          <section id="bottom-up-entity-level" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Bottom-Up Assessment at Entity Level - Approaches to Risk Governance</h2>
            <p className="text-muted-foreground mb-4">Top-down risk assessments need to be complemented by data about actual approaches undertaken by the relevant borrower with regard to climate scenarios, technological compatibility, transition governance, adaptive capacity, and phasing-out of high-emitting assets.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Clients&apos; Choice of Climate Scenarios</h4>
            <p className="text-muted-foreground mb-4">Lenders should evaluate and challenge the choice of the climate scenario and transition pathway of the client by reference to established science-based target frameworks.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Clients&apos; Technological Compatibility</h4>
            <p className="text-muted-foreground mb-4">Assessment of the compatibility with current and forecasted adoption of new technologies (e.g., CCS, CCUS, alternative fuels, disruptive technologies).</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Clients&apos; Adaptive Capacity</h4>
            <p className="text-muted-foreground mb-4">The client&apos;s adaptive capacity to effectively respond to the challenges underlying the current Net Zero transition.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Clients&apos; Transition Governance Structure</h4>
            <p className="text-muted-foreground mb-4">The governance and organisational procedures of the client that resulted in the development of the mitigation strategy, including credible targets, self-assessment of disruption risk, and management of litigation risks.</p>
          </section>

          <section id="bottom-up-entity-asset-level" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Bottom-Up Assessment at Entity and Asset Level - Methodologies and Due Diligence</h2>
            <h4 className="text-lg font-semibold text-foreground mb-3">DNSH, Emission Intensity, LCA and Natural Capital Assessment</h4>
            <p className="text-muted-foreground mb-4">Key due diligence on whether the client applies DNSH criteria, assesses natural capital losses, and employs ISO 14040/14044 standards for LCA.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Transition Risks Identification</h4>
            <p className="text-muted-foreground mb-4">Assessment of a client&apos;s ability to identify, assess and manage transition risks and business processes that interface with biodiversity and ecosystems.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Environmental Law Risk Assessment</h4>
            <p className="text-muted-foreground mb-4">Identification of bottom-up environmental risks impacting the client and its assets, including exposure to litigation and sanctions.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Client&apos;s Roadmap Assessment</h4>
            <p className="text-muted-foreground mb-4">Credibility assessment of the client&apos;s detailed roadmap for achieving emission reduction targets across Scope 1, 2 and 3.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Phasing-Out of High Emitting Assets</h4>
            <p className="text-muted-foreground mb-4">Evaluation of clients&apos; high-emitting assets, locked-in emissions, decommissioning timelines, abatement costs, and Technology Readiness Level.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Emissions Monitoring</h4>
            <p className="text-muted-foreground mb-4">Assessment of regular emissions monitoring and adherence to EU IED for Best Available Techniques (BAT).</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Circular Economy and Raw Materials</h4>
            <p className="text-muted-foreground mb-4">The level of recyclability, raw material dependency and environmental impact of the client.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Social Objectives</h4>
            <p className="text-muted-foreground mb-4">Assess through OECD guidelines if social considerations are pursued.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Climate Resilience</h4>
            <p className="text-muted-foreground mb-4">Based on IPCC guidelines, evaluate vulnerability and adaptation needs including flood defences, cooling systems, and infrastructure reinforcement.</p>
          </section>

          <SourceCitations sources={sources} />
          <PageNavigation
            prev={{ title: "Prudential Transition Planning", href: "/governance/prudential-planning", category: "Governance Tool" }}
            next={{ title: "Transition Finance Framework", href: "/governance/finance-framework", category: "Governance Tool" }}
          />
        </article>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const NetZeroManagement = () => {
  return (
    <DynamicPageContent
      slug="governance/net-zero-management"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Governance Tool", href: "/governance/prudential-planning" },
        { label: "Net Zero Risk Management" },
      ]}
      navigation={{
        prev: { title: "Prudential Transition Planning", href: "/governance/prudential-planning", category: "Governance Tool" },
        next: { title: "Transition Finance Framework", href: "/governance/finance-framework", category: "Governance Tool" }
      }}
      fallback={<NetZeroManagementFallback />}
    />
  );
};

export default NetZeroManagement;
