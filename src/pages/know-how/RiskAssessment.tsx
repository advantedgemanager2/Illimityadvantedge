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
  { id: "assessment-by-banks", title: "Transition Risk Assessment by Banks", level: 2 },
  { id: "best-practices", title: "EU Banks' Best Practices", level: 2 },
  { id: "metrics", title: "Risk and Transition Opportunity Metrics", level: 2 },
  { id: "limitations", title: "Limitations of Materiality Mapping and ESG Scorings", level: 2 },
  { id: "carbon-intensity", title: "Carbon Emissions Intensity", level: 2 },
  { id: "carbon-lock-in", title: "Carbon Lock-in Risk", level: 2 },
  { id: "types-lock-in", title: "Types of Carbon Lock-in Risks", level: 3 },
  { id: "opportunity-assessment", title: "Transition Opportunity Assessment", level: 2 },
  { id: "client-pathways", title: "Evaluation of Clients' Transition Pathways", level: 2 },
];

const sources = [
  {
    id: 1,
    title: "Mechanisms to Prevent Carbon Lock-in in Transition Finance",
    author: "OECD",
    year: "2023",
    url: "https://www.oecd.org/en/publications/mechanisms-to-prevent-carbon-lock-in-in-transition-finance_d5c49358-en.html",
  },
  {
    id: 2,
    title: "Carbon Lock-in: Types, Causes, and Policy Implications",
    author: "Seth, Davis et al.",
    year: "2016",
    url: "https://sciencepolicy.colorado.edu/students/envs-geog_3022/seto_2016.pdf",
  },
];

const RiskAssessmentFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Know-How Tool", href: "/know-how/transition-finance" },
              { label: "Risk Assessment" },
            ]}
          />

          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">
            Transition Risk and Opportunity Assessment by Banks and Carbon Lock-in Risk
          </h1>

          <PageMeta
            lastUpdated="January 5, 2025"
            tags={["Risk Assessment", "Carbon Lock-in", "ECB", "ESG Scoring", "Banks"]}
          />

          <p className="text-lg text-muted-foreground mb-8">
            Examining how banks assess transition risks and opportunities, the limitations of current metrics, and the critical role of carbon lock-in risk in credit decisions.
          </p>

          {/* Introduction Section */}
          <section id="introduction" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>

            <Callout type="warning" title="ECB Analysis (January 2024)">
              According to ECB analysis, 95 banks covering 75% of euro area loans show that banks&apos; credit portfolios are substantially misaligned with the goals of the Paris Agreement, leading to elevated transition risks for roughly 90% of these banks. Banks generate over 60% of their interest income from counterparties in carbon-intensive sectors. Additionally, 70% of these banks could face elevated litigation risks as they are publicly committed to the Paris Agreement, but their credit portfolio is still measurably misaligned with it.
            </Callout>

            <p className="text-muted-foreground mb-4">
              In assessing the role of banks in mitigating or adapting to climate change, prudential supervisors have so far focused primarily on assessing banks&apos; resilience to climate-related financial shocks from a risk-oriented perspective, e.g. on the basis of specific climate stress tests.
            </p>

            <p className="text-muted-foreground mb-4">
              In a paper published in December 2024, EBA staff argued for a complementary perspective beyond prudential supervision that can be derived from the Paris Agreement, namely banks&apos; own contribution to global warming through their financing of climate-damaging activities. This perspective becomes particularly relevant in light of future mandatory disclosures on dual materiality under the CSRD.
            </p>
          </section>

          {/* Assessment by Banks Section */}
          <section id="assessment-by-banks" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Transition Risk Assessment by Banks</h2>

            <p className="text-muted-foreground mb-4">
              Banks assess transition risk at industrial sector portfolio level from different viewpoints and relying on different approaches:
            </p>

            <StyledList
              style="number"
              items={[
                "Making reference to global, macro-regional data to evaluate impact on quality of exposures using climate risk scenarios (EIA or NGFS) and historical credit data",
                "Correlating macro-global transition risk data with physical risk and macroeconomic variables via sensitivity analysis",
                "Using stress testing to simulate extreme scenarios and their potential impact on credit quality",
                "Staying informed about regulatory changes and policy shifts affecting credit quality",
                "Heat mapping to identify potentially high-risk sectors and regions, also assessing the warming factor of each sector on global temperatures",
                "Leveraging subject matter experts to identify and assess transition risks and opportunities",
                "Considering management quality, commitment to climate actions, invested and committed R&D and CapEx, and robustness of climate-related targets",
                "Comparing a company's decarbonisation performance to industry peers using a matrix integrating quantitative transition-related KPIs with qualitative scoring",
                "Assessing clients' transition pathways, targets and plans by focusing on credibility and efficacy of decarbonisation commitments",
                "Obtaining and using external data to help gauge potential for transitions and opportunities",
                "Considering climate sentiment to financing low-carbon and transition-enabling investments",
                "Using large data sets and machine learning algorithms to analyse financial performance and operational data",
                "Monitoring trends and developments impacting creditworthiness of entities within sectors",
              ]}
            />
          </section>

          {/* Best Practices Section */}
          <section id="best-practices" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">EU Banks&apos; Best Practices in C&amp;E Risk Management</h2>

            <p className="text-muted-foreground mb-4">
              Since 2022, a number of good practices have been identified by the ECB among EU financial institutions incorporating climate and environmental risks into their strategic goal-setting process. Initially, banks have generally reduced new financings to highly detrimental activities. Then, institutions have made progress by incorporating transition risks into their business strategy using climate scenarios and establishing specific targets for the short, medium, and long term.
            </p>

            <Callout type="tip" title="Best Practice">
              Targets have often been established according to prospective and evidence-based decarbonisation trajectories, and their Risk Appetite Statement has been aligned with such targets, based on particular climate scenario analysis.
            </Callout>
          </section>

          {/* Metrics Section */}
          <section id="metrics" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Risk and Transition Opportunity Metrics</h2>

            <p className="text-muted-foreground mb-4">
              Forward-looking climate financial transition metrics display a significant degree of heterogeneity due to variations in methodologies, data and assumptions. Current methodologies can produce four different transition financial risk values: <strong>balance sheet effects</strong>, <strong>financial asset metrics</strong>, <strong>alignment gap</strong> and a <strong>risk score</strong>.
            </p>

            <Callout type="warning" title="Limitations of Current Metrics">
              While these methodologies enhance emissions scenarios by offering a future-oriented view on the technologies required to reduce carbon emissions, they lack the required understanding of the carbon lock-in risk at client&apos;s asset level which needs specific engagement efforts. Equally, the adoption by lenders of mainly top-down approaches for transition risk assessment lacks the required level of granularity for supporting clients&apos; transition effectively.
            </Callout>
          </section>

          {/* Limitations Section */}
          <section id="limitations" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitations of Materiality Mapping and ESG Scorings</h2>

            <p className="text-muted-foreground mb-4">
              ESG scorings are subject to a high level of noise because of their use of different attributes and weightings of indicators, leading to different issues being ranked against each other. Rating agencies have conflicting assumptions and indicators, measuring the same attribute with multiple indicators and varying viewpoints on its relevance.
            </p>

            <Callout type="important" title="Key Limitation">
              It is unclear whether ESG scorings aim to target alpha creation, risk, or impact, as their aims vary. Integration of ESG risks and variables in lending and investment decisions based simply on ESG scores is, therefore, incorrect. ESG scorings and materiality matrices are ineffective for creating banking products, defining KPIs, SPTs, CapEx, OpEx, and priorities for SLL or Green financing.
            </Callout>
          </section>

          {/* Carbon Intensity Section */}
          <section id="carbon-intensity" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Carbon Emissions Intensity</h2>

            <p className="text-muted-foreground mb-4">
              Among the main metrics for evaluating transition risk, as indicated by EBA, is the carbon emissions intensity: the amount of CO2 equivalent emitted per unit of economic output or activity. Carbon emissions intensity per Euro can vary depending on the price of the product with no change in the carbon-intensity of the value chain process. It is therefore preferable to use carbon emissions intensity per activity in priority.
            </p>

            <p className="text-muted-foreground mb-4">
              The calculation of emission intensity is based on two steps:
            </p>

            <StyledList
              style="number"
              items={[
                "Life Cycle Assessment (LCA) — Analyzing environmental impact across all stages: manufacturing, transportation, use, and end-of-life",
                "Converting to CO2 equivalent (CO2e) — Consolidating all greenhouse gas emissions into a single measure",
              ]}
            />
          </section>

          {/* Carbon Lock-in Section */}
          <section id="carbon-lock-in" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Carbon Lock-in Risk</h2>

            <p className="text-muted-foreground mb-4">
              The usage of fossil fuel infrastructure and assets in the face of the prospect of replacing them with low-emission alternatives creates &quot;carbon lock-in,&quot; which delays or obstructs the switch to near-zero or zero-emission alternatives.
            </p>

            <Callout type="info" title="ESRS Definition">
              According to ESRS, locked-in GHG emissions are estimates of future GHG emissions likely to be caused by an undertaking&apos;s key assets or products sold within their operating lifetime. They are linked to three main variables: (1) the GHG or energy intensity character of the asset/product; (2) their expected lifetime; (3) the expected utilisation rate during the lifetime.
            </Callout>

            <p className="text-muted-foreground mb-4">
              Carbon lock-in is strictly associated with the risk that assets become stranded. The evaluation of borrowers&apos; measures to mitigate and prevent carbon lock-in risk plays a central role in due diligence that financial institutions should carry out, as it constitutes the most critical risk hindering transition and net zero efforts.
            </p>

            <section id="types-lock-in" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Types of Carbon Lock-in Risks</h3>

              <p className="text-muted-foreground mb-4">
                According to Seth, Davis et al. (2016), carbon lock-in consists of three primary categories:
              </p>

              <StyledList
                style="number"
                items={[
                  "Technological and infrastructural lock-in — Technologies and infrastructure that influence energy supply and release CO2 emissions. Escaping depends on projected feasibility and lifespans, transition costs, and availability of alternatives",
                  "Institutional lock-in — Governance and decision-making processes impacting energy production and consumption. Requires enhancing adaptability, promoting institutional transformation, and establishing a commitment to decarbonisation",
                  "Behavioural lock-in — Habits and norms associated with energy-related goods and services demand. Requires overcoming ingrained individual habits, preferences, and socially built practices deeply rooted in culture",
                ]}
              />

              <Callout type="warning" title="Reinforcing Effects">
                These three types of carbon lock-in reinforce each other. They are characterised not only by individual resistance to change, but also by a collective resistance in which any attempt to break free from lock-in in one area triggers a response in the other areas, further strengthening the collective resistance.
              </Callout>
            </section>
          </section>

          {/* Opportunity Assessment Section */}
          <section id="opportunity-assessment" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Transition Opportunity Assessment</h2>

            <p className="text-muted-foreground mb-4">
              Transition opportunities must be properly evaluated by lenders not only through top-down criteria that have their own limitations due to their proxy-based approach. Only a bottom-up assessment of the credibility of the client&apos;s transition plan that focuses on the relevant impacts, risks and opportunities can help validate such proxies and define the relevant information to determine the level and type of investment needed to pursue the relevant decarbonisation pathway.
            </p>
          </section>

          {/* Client Pathways Section */}
          <section id="client-pathways" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Evaluation of Clients&apos; Transition Pathways</h2>

            <p className="text-muted-foreground mb-4">
              Clients&apos; transition pathways and the evaluation of the credibility of a corporate&apos;s transition plan and the reading of individual R&amp;D and CapEx plans are fundamental in order to assess whether the company is locked-in into carbon-intensive technologies which intensifies anticipated transition risks.
            </p>

            <Callout type="tip" title="Real Economy Evaluation">
              A real economy evaluation of the client&apos;s transition pathway should assess: credible decarbonisation time horizon, trend in carbon emissions intensity and locked-in emissions, efficacy of decarbonisation technology chosen, engagement and impact of mitigation actions on value chain, and trend in R&amp;D and CapEx in low-carbon and transition-enabling technologies. This should be carried out against global, EU and coalition framework benchmarks.
            </Callout>
          </section>

          <SourceCitations sources={sources} />

          <PageNavigation
            prev={{
              title: "Transition Risks",
              href: "/know-how/transition-risks",
              category: "Know-How Tool"
            }}
            next={{
              title: "Greenwashing Risks",
              href: "/know-how/greenwashing-risks",
              category: "Know-How Tool"
            }}
          />
        </article>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const RiskAssessment = () => {
  return (
    <DynamicPageContent
      slug="know-how/risk-assessment"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Know-How Tool", href: "/know-how/transition-finance" },
        { label: "Risk Assessment" },
      ]}
      navigation={{
        prev: { title: "Transition Risks", href: "/know-how/transition-risks", category: "Know-How Tool" },
        next: { title: "Greenwashing Risks", href: "/know-how/greenwashing-risks", category: "Know-How Tool" }
      }}
      fallback={<RiskAssessmentFallback />}
    />
  );
};

export default RiskAssessment;
