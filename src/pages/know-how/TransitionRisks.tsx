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
  { id: "bottom-up-assessment", title: "Bottom-up Transition Risk Assessment", level: 2 },
  { id: "risk-drivers", title: "Transition Risk Drivers", level: 3 },
  { id: "sector-level-drivers", title: "Transition Risk Drivers at Sector Level", level: 2 },
  { id: "types-of-risks", title: "Types of Transition Risks", level: 3 },
  { id: "sectoral-drivers", title: "Main Sectoral Drivers", level: 3 },
  { id: "technology-risk", title: "Technology Risk", level: 2 },
  { id: "trl", title: "Technology Readiness Level (TRL)", level: 3 },
  { id: "business-model-disruption", title: "Business Model Disruption", level: 2 },
  { id: "business-model-risk", title: "Business Model Risk", level: 3 },
  { id: "policy-regulatory", title: "Policy and Regulatory Risks", level: 2 },
  { id: "legal-accounting", title: "Legal and Accounting Risks", level: 2 },
  { id: "reputational", title: "Reputational Risk", level: 2 },
  { id: "policy-driven-market", title: "Policy-driven Market Risk", level: 2 },
  { id: "eu-climate-policy", title: "EU Climate and Environmental Policy", level: 2 },
  { id: "transition-vs-traditional", title: "Transition Risk and Traditional Financial Risk", level: 2 },
];

const TransitionRisksFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Know-How Tool", href: "/know-how/transition-finance" },
              { label: "Transition Risks" },
            ]}
          />

          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">
            Transition Risks
          </h1>

          <PageMeta
            lastUpdated="October 6, 2024"
            tags={["Transition Risks", "Technology Risk", "Business Model", "EU Policy", "CRR3"]}
          />

          <p className="text-lg text-muted-foreground mb-8">
            Comprehensive analysis of transition risk drivers, technology risk, business model disruption, and policy risks affecting hard-to-abate sectors in the context of the European Green Deal.
          </p>

          {/* Introduction Section */}
          <section id="introduction" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>

            <p className="text-muted-foreground mb-4">
              In order to help identify transmission channels and related financial risks deriving from transition risks, as requested by the EBA and the ECB, relevant technology, legal and policy transition risks and opportunities need to be ultimately identified so that the clients&apos; actual exposure to these risks and the impact on their business model can be properly assessed and evaluated.
            </p>

            <p className="text-muted-foreground mb-4">
              Clients&apos; current business models may rely on technology that are expected to be replaced or on energy sources that may become pricier due to regulatory initiatives, such as stricter efficiency standards or the implementation of carbon taxes.
            </p>

            <Callout type="info" title="Forward-Looking Approach">
              Regulators demand a forward-looking approach, hence the need to identify trends and the transition risk drivers, which embody climate-related changes that have the potential to generate, amplify, or diminish transition risks. These drivers encompass modifications in government policies, law, and regulation, advancements in technology, and shifts in market and customer sentiment.
            </Callout>
          </section>

          {/* Bottom-up Assessment Section */}
          <section id="bottom-up-assessment" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Bottom-up Transition Risk Assessment</h2>

            <p className="text-muted-foreground mb-4">
              Understanding bottom-up transition risks of borrowers and their underlying drivers is a critical exercise for lenders. The available alternatives (materiality analysis and ESG scoring) are of limited use in this respect.
            </p>

            <Callout type="warning" title="Limitations of Alternatives">
              Materiality matrices provide insight into the materiality process and assess impact importance, but focus on ranking and overstate accuracy. ESG ratings might distract from addressing material impacts, risks and opportunities and the company&apos;s response to them. The link between issues and the credibility of the underlying analysis is more significant than their respective priority and ranking.
            </Callout>

            <section id="risk-drivers" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Transition Risk Drivers</h3>

              <p className="text-muted-foreground mb-4">
                As indicated by the TCFD, any analysis of the transition risks that can affect an industrial sector must be based on the identification of multiple drivers of change. Below are the main steps for identifying the drivers of transition risks:
              </p>

              <StyledList
                style="number"
                items={[
                  "Identify transition risk drivers by considering, at sector level, the key assumptions underlying the borrower's economic inputs, business model and strategy set out in their transition plans",
                  "Assess whether these drivers are external or internal",
                  "Among external drivers, identify the risk factors and the \"owner\" of each individual factor, focusing on policy changes, climate change litigation risks, change in market preferences, technology change, availability of energy and resources",
                  "Assess the technologies currently applied in the relevant sector and whether the underlying economic inputs and technologies create any environmental impact or are dependent on nature or on limited resources",
                ]}
              />
            </section>
          </section>

          {/* Sector Level Drivers Section */}
          <section id="sector-level-drivers" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Transition Risk Drivers at Sector Level</h2>

            <section id="types-of-risks" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Types of Transition Risks</h3>

              <p className="text-muted-foreground mb-4">
                The CRR3 (Article 449a) defines transition risk as &quot;the risk of losses arising from any negative financial impact on the institution stemming from the current or prospective impacts of the transition of business activities and sectors to an environmentally sustainable economy.&quot; Transition risks relate to actions taken to reduce emissions to reach net zero, zero pollution and circular economy:
              </p>

              <StyledList
                style="number"
                items={[
                  "Technology risks",
                  "Business Model Disruption",
                  "Policy and regulatory risks",
                  "Legal risks",
                  "Reputational risks",
                  "Policy-driven market risks",
                ]}
              />

              <Callout type="important" title="Uncertainty and Nonlinearity">
                Transition risks are defined by significant uncertainty and nonlinearity, resulting in the likelihood of their occurrence not being accurately represented by historical data. As indicated by The Green Swan (Bolton et al., BIS), the presence of these unforeseen uncertainties renders conventional risk management methods virtually inconsequential.
              </Callout>
            </section>

            <section id="sectoral-drivers" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Main Sectoral Drivers of Transition Risks</h3>

              <p className="text-muted-foreground mb-4">
                Financial institutions should consider the following sectoral drivers of transition risks:
              </p>

              <StyledList
                style="number"
                items={[
                  "Mainstream technology and energy transition — Change in mainstream technologies and impact of energy transition on current technologies and operations",
                  "Impacts — Potential climate, environmental and biodiversity impacts related to the relevant hard-to-abate sector",
                  "Policies and legislation — Current, potential and new material industrial, climate and environmental policies at EU level and internationally",
                  "Climate change litigation — Status of current climate change and environmental litigation impacting the sector and relevant trends",
                  "Dependencies — Drivers of change in the relevant sector by looking at dependencies for its economic inputs",
                ]}
              />
            </section>
          </section>

          {/* Technology Risk Section */}
          <section id="technology-risk" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Technology Risk</h2>

            <p className="text-muted-foreground mb-4">
              Technology risk includes different risks such as data and security breaches, cybersecurity risks, AI and algorithmic risks, obsolescence of raw materials, processes and assets. In a transition context, technology risk engages with new industrial processes, new and advanced materials, critical raw materials, grid management, renewable energy, biofuels, nuclear fusion, green hydrogen, carbon capture and storage, changes in speed of electrification, storage and grid efficiencies, etc.
            </p>

            <Callout type="info" title="EU Policies and Technology Risk">
              Technology risk should not be viewed in isolation but is strictly correlated with EU policies and should be evaluated through the lenses of climate scenarios. The EU has enacted legislation such as the Net Zero Industry Act, the Ecodesign regulation, the Circular Economy Action Plan, and Zero Pollution policies that will dictate the direction of European heavy industries towards a real economy transition.
            </Callout>

            <section id="trl" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Technology Readiness Level (TRL)</h3>

              <p className="text-muted-foreground mb-4">
                By adapting the EU Commission Decision C(2014)4995 framework, the Technology Readiness Level can be defined as:
              </p>

              <StyledList
                style="number"
                items={[
                  "TRL 1 — Exploratory research observing basic principles",
                  "TRL 2 — Technology concepts and/or applications being formulated",
                  "TRL 3 — Experimental proof of concept being validated",
                  "TRL 4 — Technology subsystem or component validated in laboratory",
                  "TRL 5 — Early system validation of the technology in relevant environment",
                  "TRL 6 — Early field demonstration and completion of system refinements",
                  "TRL 7 — Complete system prototype demonstration in operational environment",
                  "TRL 8 — System complete and qualified for early commercial deployment",
                  "TRL 9 — Actual system proven in operational environment for wide scale commercial deployment",
                ]}
              />

              <Callout type="tip" title="Mobilisation of Finance">
                As technologies mature, the green premium cost reduces and generally drives down cost of production, allowing mobilisation of senior debt finance from TRL 7 stage onwards.
              </Callout>
            </section>
          </section>

          {/* Business Model Disruption Section */}
          <section id="business-model-disruption" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Business Model Disruption</h2>

            <p className="text-muted-foreground mb-4">
              A business model could be disrupted as a result of acute and chronic physical risks and of other transition risks. For companies in hard-to-abate sectors, resilience and creation of long-term value by avoiding that assets become stranded should be the main transition objective.
            </p>

            <p className="text-muted-foreground mb-4">
              Disruption of the business model due to climate transition occurs when either the company&apos;s <strong>value proposition</strong> or its <strong>operating model</strong> is impacted.
            </p>

            <h4 className="font-semibold text-foreground mb-2">Examples of Operating Model Disruption:</h4>
            <StyledList
              style="number"
              items={[
                "Utilisation of new technology and new materials, reverse logistic and supply chains",
                "Impact on cost structure",
                "Leveraging strategic decisions about renewable energy, alternative fuels, energy efficiency and sustainable industrial processes",
                "Prioritising decisions on mitigation actions based on abatement costs and carbon lock-in considerations under a Net zero scenario",
                "Policy, legal and accounting factors leading to impairment of stranded assets",
              ]}
            />

            <h4 className="font-semibold text-foreground mt-4 mb-2">Ways to Disrupt the Value Proposition:</h4>
            <StyledList
              style="number"
              items={[
                "Internalising impacts and externalities",
                "Delivering more value to stakeholders by considering impact on environment and social aspects",
                "Gearing corporate governance towards sustainable practices and advanced risk management",
                "Benchmarking against more sustainable peers or coalition frameworks",
                "Stakeholders' pressure due to the outcome of double materiality assessment",
              ]}
            />

            <section id="business-model-risk" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Business Model Risk</h3>

              <p className="text-muted-foreground mb-4">
                Business model risks arise from the innovative nature of the technology/business model and the effectiveness of product and process operations. They can be categorised into:
              </p>

              <StyledList
                style="arrow"
                items={[
                  "Demand-side risks — Uncertainties regarding the size of the demand, availability of willing buyers, and difficulty of selling the product or service",
                  "Supply-side risks — Uncertainties related to project operations and essential production inputs, including uninterrupted availability of inputs and fluctuating commodity prices",
                ]}
              />

              <Callout type="warning" title="Stranded Assets">
                A significant concern is the potential for stranded assets, which can be worsened by a lack of clear information regarding national and European transition plans and pathways in the early stages.
              </Callout>
            </section>
          </section>

          {/* Policy and Regulatory Risks Section */}
          <section id="policy-regulatory" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Policy and Regulatory Risks</h2>

            <p className="text-muted-foreground mb-4">
              Policy and regulatory risks refer to the possibility of new enactment or interpretation of existing policies and regulations that may lead to a less favourable regulatory environment. A non-exhaustive list includes:
            </p>

            <StyledList
              style="number"
              items={[
                "Carbon Tax policies such as EU ETS, CBAM and Emission Trading arrangements in other countries",
                "Energy price policies related to investments in hydrogen projects",
                "Commodity price policies",
                "Regulation on high level impact of land and forest use",
                "General GHG Emission Limits at regional level such as the EU Climate Law",
                "Amendments to EU banking regulations regarding green supporting, transition supporting and brown penalising factors",
                "Gradual extension of CSDDD to other companies and financial institutions",
                "Implementation of the Energy Performance Building Directive",
                "New sectoral GHG Emission Limits such as extension of EU ETS, CBAM or UK ETS",
                "Implementation of Land Use/Zoning Changes including new common agricultural policy and Nature Restoration Law",
                "Best Available Technologies regulations being amended and environmental legislation thresholds being raised",
                "Non-carbon Regulatory Requirements such as the European Green Deal or US Inflation Reduction Act",
              ]}
            />
          </section>

          {/* Legal and Accounting Risks Section */}
          <section id="legal-accounting" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Legal and Accounting Risks</h2>

            <h4 className="font-semibold text-foreground mb-2">Increased Exposure to Liability Risk</h4>
            <p className="text-muted-foreground mb-4">
              Liability could be triggered for non-compliance with more stringent environmental, climate and human rights-related legislation (such as CSDDD, and regulation of existing products and services).
            </p>

            <h4 className="font-semibold text-foreground mb-2">Litigation Risk</h4>
            <p className="text-muted-foreground mb-4">
              Exposure to litigation as a result of new courts&apos; approaches (e.g. following ECHR judgments on climate change, new approaches to attribution of physical risks, constitutional changes).
            </p>

            <h4 className="font-semibold text-foreground mb-2">Enhanced Reporting Obligations</h4>
            <p className="text-muted-foreground mb-4">
              Impact of strengthening of reporting obligations and application of stricter validation requirements by third party auditors (e.g. applicability of CSRD reporting obligations to Listed SMEs).
            </p>

            <Callout type="warning" title="Asset Valuation Risks">
              Changes in accounting rules related to impairment costs in connection with climate risks or commitments (e.g. IASB&apos;s Interpretation Committee future decisions on how entities reflect climate-related risks in impairment calculations under IAS 36) could lead to significant fluctuations in future cash flows.
            </Callout>
          </section>

          {/* Reputational Risk Section */}
          <section id="reputational" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Reputational Risk</h2>

            <p className="text-muted-foreground mb-4">
              Reputational risks, in a transition context, are threats that can result from a company&apos;s association with environmentally damaging practices and with socially impacting conducts. Eventually, reputational damage can impact revenues, profitability, enterprise value and increased crisis management costs.
            </p>

            <p className="text-muted-foreground mb-4">
              Reputational liability can have four main sources:
            </p>

            <StyledList
              style="number"
              items={[
                "Direct or indirect breach of specific environmental and social protection \"hard\" legislation",
                "A breach of soft law or international treaties recognised by the sector as norms informing business conduct",
                "Misalignment from a sustainability standard adopted by other peers in the sector",
                "Perception of supporting organizations contributing to global warming or environmental and social damages",
              ]}
            />
          </section>

          {/* Policy-driven Market Risk Section */}
          <section id="policy-driven-market" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Policy-driven Market Risk</h2>

            <p className="text-muted-foreground mb-4">
              Trends in market and consumer sentiment deriving from policy sources will become increasingly relevant (e.g. in the steel and cement sectors, the impact of real estate buyers and investors in SFDR funds demanding Net Zero aligned steel and cement in constructions due to embodied carbon emission considerations).
            </p>
          </section>

          {/* EU Climate Policy Section */}
          <section id="eu-climate-policy" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">EU Climate and Environmental Policy and Regulatory Risks</h2>

            <p className="text-muted-foreground mb-4">
              Following the adoption of the Paris Agreement and the UN Sustainable Development Goals, the EU has been enacting regulations, recommendations, directives and policy papers aimed at establishing a framework for the transition towards a low-carbon economy, circular economy and restoration of nature and biodiversity ecosystems.
            </p>

            <h4 className="font-semibold text-foreground mb-2">European Green Deal</h4>
            <p className="text-muted-foreground mb-4">
              The European Green Deal, introduced in 2019, serves as the EU&apos;s comprehensive plan to steer its shift towards a climate-neutral economy by 2050. The primary objective is to facilitate a comprehensive overhaul of the European economy in energy, transport, agriculture, and construction. The Green Deal served as the foundation for developing several policy instruments aimed at facilitating the shift towards a low-carbon economy, based on three primary focal points: a decrease in GHG emissions, an increase in renewable energy, and an enhancement in energy efficiency.
            </p>

            <h4 className="font-semibold text-foreground mb-2">Main Policy Tools</h4>

            <h5 className="font-medium text-foreground mt-3 mb-2">Climate Ambition</h5>
            <StyledList
              style="arrow"
              items={[
                "EU Climate Law",
                "Revision of ETS and CBAM",
                "Fit for 55 plan (increase 2030 climate target to at least 50-55%)",
                "Effort Sharing Regulation",
                "Energy Efficiency Directive and Renewable Energy Directive",
                "CO2 emission performance standards for cars and vans",
                "EU Strategy on adaptation to climate change",
              ]}
            />

            <h5 className="font-medium text-foreground mt-3 mb-2">Clean, Affordable and Secure Energy</h5>
            <StyledList
              style="arrow"
              items={[
                "REPowerEU",
                "Strategy for smart sector integration",
                "Renovation wave initiative for the building sector",
                "Revised TEN-E Regulation and Grid Action Plan",
                "Strategy on offshore renewable energy",
                "Renewable Energy Directive",
              ]}
            />

            <h5 className="font-medium text-foreground mt-3 mb-2">Industrial Strategy for Net Zero, Clean and Circular Economy</h5>
            <StyledList
              style="arrow"
              items={[
                "Circular Economy Action Plan",
                "Eco-design regulations",
                "Green Deal Industrial Plan for the Net-Zero Age",
                "Net Zero Industry Act",
                "Industrial Emissions Directive",
                "European Critical Raw Materials Act",
              ]}
            />
          </section>

          {/* Transition vs Traditional Financial Risk Section */}
          <section id="transition-vs-traditional" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Transition Risk and Traditional Financial Risk</h2>

            <p className="text-muted-foreground mb-4">
              The impact of transition risks on traditional financial risks must be understood through their transmission channels and effect on credit risk parameters. Transition risks can affect probability of default (PD) and loss given default (LGD) through multiple pathways including stranded assets, regulatory costs, and changes in market demand for carbon-intensive products and services.
            </p>

            <Callout type="important" title="Transmission Channels">
              Understanding how transition risk drivers materialise at sector level and how they transmit into traditional credit risk parameters is essential for proper risk assessment. Banks should evaluate how sectoral drivers impact the resilience of the corporate borrower&apos;s business model and whether they can augment the consequences of climate-related externalities.
            </Callout>
          </section>

          <PageNavigation
            prev={{
              title: "Transition Finance",
              href: "/know-how/transition-finance",
              category: "Know-How Tool"
            }}
            next={{
              title: "Risk Assessment",
              href: "/know-how/risk-assessment",
              category: "Know-How Tool"
            }}
          />
        </article>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const TransitionRisks = () => {
  return (
    <DynamicPageContent
      slug="know-how/transition-risks"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Know-How Tool", href: "/know-how/transition-finance" },
        { label: "Transition Risks" },
      ]}
      navigation={{
        prev: { title: "Transition Finance", href: "/know-how/transition-finance", category: "Know-How Tool" },
        next: { title: "Risk Assessment", href: "/know-how/risk-assessment", category: "Know-How Tool" }
      }}
      fallback={<TransitionRisksFallback />}
    />
  );
};

export default TransitionRisks;
