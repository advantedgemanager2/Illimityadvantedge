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
  { id: "the-prudential-transition-plan", title: "The Prudential Transition Plan", level: 2 },
  { id: "transition-planning-vs-transition-plan", title: "Transition Planning vs Transition Plan", level: 2 },
  { id: "binding-discipline-and-soft-law", title: "Binding Discipline and Soft Law", level: 2 },
  { id: "soft-law", title: "Soft Law", level: 2 },
  { id: "challenges-and-opportunities", title: "Challenges and Opportunities", level: 2 },
  { id: "key-components", title: "Key Components", level: 2 },
  { id: "prudential-supervision", title: "Prudential Supervision", level: 2 },
];

const sources = [
  { id: 1, title: "EBA Final Guidelines on ESG Risks", author: "European Banking Authority", year: "2025" },
  { id: 2, title: "Speech by Frank Elderson", author: "European Central Bank", year: "2023" },
  { id: 3, title: "Basel III International Standards", author: "BCBS", year: "2023" },
];

const PrudentialPlanningFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Governance Tool", href: "/governance/prudential-planning" }, { label: "Prudential Transition Planning" }]} />
          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">Prudential Transition Planning</h1>
          <PageMeta lastUpdated="July 14, 2025" tags={["Prudential Regulation", "Transition Planning", "ESG Risk Management", "CRD VI"]} />
          <p className="text-lg text-muted-foreground mb-8">This section is thought to guide you in the understanding, planning and structure of the key features to build a prudential transition plan compliant with prudential requirements.</p>

          <section id="the-prudential-transition-plan" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">The Prudential Transition Plan</h2>
            <p className="text-muted-foreground mb-4">A transition plan is a detailed multi-year account of targets and actions, that sets out how a given firm will ensure that its business model and strategy are compatible with a specific objective, such as the goal of limiting global warming to 1.5&deg;C above pre-industrial levels, in line with the Paris Agreement. In the financial sector, transition plans have emerged to give credibility to voluntary pledges made by banks. Policymakers are increasingly recognising the importance of integrating them into the firm&apos;s strategy and nonfinancial disclosure, as transition plans offer an additional and supplementary prudential instrument to ensure the financial stability of banks, thanks to the <strong>forward-looking and long-time horizons approach</strong>, by reflecting the exposure and magnitude of risk within an individual financial institution.</p>
            <p className="text-muted-foreground mb-4">The concept of transition plans originates in the private sector with initiatives such as the Taskforce for Climate-related Financial Disclosures (TCFD). However, the concept of using transition plans for the purposes of financial supervision has gained momentum more recently following a speech by ECB board member Frank Elderson, who pointed to the transition plan as a way to overcome the &quot;tragedy of the horizon.&quot;</p>
            <Callout type="info" title="Frank Elderson&#39;s Proposal">Frank Elderson proposed legally binding requirements for banks to show &quot;at any point in time, from now until 2050, the bank&apos;s alignment and potential divergence with the relevant policy objectives through which the EU implements the Paris Agreement.&quot; Individual banks would have to outline how they plan to navigate the climate transition, not only by decarbonizing and greening, but also by embedding Paris-alignment goals horizontally across bank activities.</Callout>
            <p className="text-muted-foreground mb-4">There are three types of transition plan:</p>
            <StyledList style="number" items={["Voluntary, market-led net zero transition plans", "Mandatory corporate disclosure net zero transition plans", "Mandatory prudential transition plans that focus on the risks of misalignment with net zero targets"]} />
            <Callout type="important" title="Prudential vs Corporate Disclosure Frameworks">Prudential transition plans are focused on the management of ESG risks and distinguished from climate transition plans under CSRD/ISSB and CSDDD. Duplication should be avoided. Yet, banks&apos; prudential transition plans should be consistent with those prepared under the CSRD/CSDDD even though their objective is to assess the safety and soundness of the short-term and medium-term transition path.</Callout>
            <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 bg-muted/30 rounded-r-lg"><p className="text-foreground italic">&quot;The goal of prudential plans is not to force institutions to exit or divest from carbon intensive sectors.&quot;</p><cite className="text-sm text-muted-foreground mt-2 block">-- European Banking Authority</cite></blockquote>
            <p className="text-muted-foreground mb-4">Prudential transition plans differ from typical transition plans, as they would be prepared and assessed with the distinct purpose of managing systemic risks resulting from misalignment with climate policy goals. They are risk-based regulatory instruments and an additional forward-looking assessment tool to safeguard the stability of the financial system.</p>
            <Callout type="tip" title="Enabler for Policy Tools">Prudential transition plans could be an enabler to leverage other policy tools to better manage climate-related financial risks as they can support the economic transition to net zero by requiring detailed adjustment targets at specific milestones between now and 2050.</Callout>
          </section>

          <section id="transition-planning-vs-transition-plan" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Transition Planning vs Transition Plan: The Difference Between the Path and the Goal</h2>
            <p className="text-muted-foreground mb-4">Transition plans are a useful tool which bring together aspects of the transition planning process to meet the needs and interests of a range of users. Transition plans are the key product of the transition planning process, mainly used as an external-facing output for external audiences and represent the strategy of how firms plan to align their core business with a specific strategic climate outcome.</p>
            <p className="text-muted-foreground mb-4"><strong>Transition planning</strong> is understood to capture the bank&apos;s iterative process of developing, implementing, monitoring and adjusting its strategy and physical and transition risk management frameworks.</p>
            <Callout type="info" title="Key Distinction">Transition plan and transition planning are unsymmetrically intertwined: there cannot be a transition plan without transition planning, while the inverse may be possible. Transition planning can take place without the disclosure of an underlying, formal transition plan.</Callout>
          </section>

          <section id="binding-discipline-and-soft-law" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Binding Discipline and Soft Law</h2>
            <p className="text-muted-foreground mb-4">The management of climate risks has received considerable attention from legislators and supervisors, especially in Europe. Integrating climate risks into the broader risk management framework is particularly challenging because climate risks act as risk drivers for existing risks, rather than being a separate type of risk.</p>
            <Callout type="warning" title="Basel III Limitations">The BCBS highlights the current limitations in terms of data granularity and methodological limitations and the inadequacy of the capital frameworks to fully capture climate-related financial risks.</Callout>
            <h3 className="text-xl font-semibold text-foreground mb-4">The Pillars</h3>
            <p className="text-muted-foreground mb-4">The Basel framework is structured around three fundamental pillars:</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Pillar 1</h4>
            <p className="text-muted-foreground mb-4">Focuses on minimum capital requirements for credit, market and operational risks determined as fixed percentages of Risk-Weighted Asset (RWA).</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Pillar 2</h4>
            <p className="text-muted-foreground mb-4">Encourages institutions to implement individual risk management strategies beyond minimum regulatory requirements. Key components include ICAAP, ILAAP and SREP.</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">Pillar 3</h4>
            <p className="text-muted-foreground mb-4">Sets out a bank-specific disclosure framework. Five guiding principles:</p>
            <StyledList style="number" items={["Disclosures should be clear", "Disclosures should be comprehensive", "Disclosures should be meaningful to users", "Disclosures should be consistent over time", "Disclosures should be comparable across banks"]} />
          </section>

          <section id="soft-law" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Soft Law</h2>
            <p className="text-muted-foreground mb-4">Key soft law frameworks include the TCFD and the NZBA. EBA published the Final Guidelines on the Management of ESG Risks in 2025.</p>
            <Callout type="info" title="Guidelines Scope">The Guidelines set out requirements for institutions for the identification, measurement, management and monitoring of ESG risks and aim at supporting their safety and soundness.</Callout>
            <Callout type="warning" title="Application Timeline">The Guidelines will apply from 11 January 2026 except for small and non-complex institutions (11 January 2027).</Callout>
          </section>

          <section id="challenges-and-opportunities" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Challenges and Opportunities</h2>
            <StyledList style="arrow" items={["Business strategy analysis through scenario analysis and stress testing", "Portfolio composition: the risk from misalignment and the carbon lock-in risk", "Portfolio alignment to the business strategy", "Holistic approach and credibility of the transition plan", "Sectoral approach for an effective prudential transition plan"]} />
          </section>

          <section id="key-components" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Key Components of a Prudential Transition Plan</h2>
            <p className="text-muted-foreground mb-4">The key components are outlined in the EBA guidelines and encompass strategic actions and risk management tools deployed by institutions based on a forward-looking business environment analysis.</p>
          </section>

          <section id="prudential-supervision" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Prudential Transition Plan Supervision</h2>
            <p className="text-muted-foreground mb-4"><strong>The Single Supervisory Mechanism</strong> provides the framework through which the ECB directly supervises significant euro area institutions through the SREP.</p>
            <h3 className="text-xl font-semibold text-foreground mb-4">The SREP Process</h3>
            <p className="text-muted-foreground mb-4">The SREP serves as a key mechanism through which the ECB can tailor supervisory expectations and impose additional capital and liquidity requirements, including in relation to climate risks.</p>
            <h3 className="text-xl font-semibold text-foreground mb-4">The SREP Outcome</h3>
            <p className="text-muted-foreground mb-4">Climate risk considerations are now relevant to the first three core SREP elements -- business model analysis, internal governance and risk management, and risks to capital.</p>
            <Callout type="info" title="Evolution of Climate Risk in SREP">In the 2022 SREP cycle, the ECB reported qualitative integration of climate risks influenced SREP scores. The 2023 cycle reflected a more advanced stage with climate risks increasingly contributing to P2R determination.</Callout>
            <Callout type="tip" title="P2G Potential">The forward-looking nature of the P2G makes it particularly suited for addressing climate risks. As frameworks mature, both P2R and P2G are expected to become central levers for climate risk integration.</Callout>
          </section>

          <SourceCitations sources={sources} />
          <PageNavigation next={{ title: "Net Zero Risk Management", href: "/governance/net-zero-management", category: "Governance Tool" }} />
        </article>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const PrudentialPlanning = () => {
  return (
    <DynamicPageContent
      slug="governance/prudential-planning"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Governance Tool", href: "/governance/prudential-planning" },
        { label: "Prudential Transition Planning" },
      ]}
      navigation={{
        next: { title: "Net Zero Risk Management", href: "/governance/net-zero-management", category: "Governance Tool" }
      }}
      fallback={<PrudentialPlanningFallback />}
    />
  );
};

export default PrudentialPlanning;
