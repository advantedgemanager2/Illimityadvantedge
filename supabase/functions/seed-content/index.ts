import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders } from "../_shared/cors.ts";
import { verifyAdmin } from "../_shared/auth.ts";

// All page data to seed
const pages = [
  // ===== KNOW-HOW PAGES =====
  {
    slug: "know-how/transition-finance",
    title: "Transition Finance",
    description: "Understanding transition finance as a sustainable finance asset class supporting the decarbonization of hard-to-abate sectors.",
    tags: ["Sustainable Finance", "EU Regulation", "Hard-to-Abate Sectors"],
    last_updated: "2025-07-02",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "Transition finance is a **relatively recent addition** to the **sustainable finance asset classes** aimed at supporting **environmental and social objectives** of **emissions-intensive** economic activities. Its scope of application concerns the transition of **hard-to-abate sectors** toward **carbon neutrality**." } },
      { section_type: "paragraph", content: { text: "Several definitions and iterations of transition finance are available, provided by **EU Commission**, **G20**, **OECD** and **NGOs**. These definitions share the main purposes of **avoidance of lock-in risk** and the **pursuit of Paris goals**." } },
      { section_type: "callout", content: { type: "info", title: "Key Aspects at EU Level", text: "At EU level, transition finance key aspects pivot on the measurability of carbon abatement, the definition of a business and investment plan that is based on science, the credibility of the borrower's transition plan, and the alignment with the EU industrial pathways, environmental and climate objectives." } },
      { section_type: "callout", content: { type: "tip", title: "Core Purpose", text: "Ultimately, transition finance is about allocating finance to CapEx for credible mitigation actions that phase-out high-emitting assets, contributing to a real transition of the entire economy." } },
      { section_id: "relevance-of-definition", section_type: "heading", title: "Relevance of Definition", content: { text: "Relevance of Definition" } },
      { section_type: "paragraph", content: { text: "Its definition carries **policy significance** within **sustainable finance asset classes**, **linking credit allocation** with **policy objectives**." } },
      { section_type: "blockquote", content: { text: "Transition finance should be understood as the financing of climate- and environmental performance improvements to transition towards a sustainable economy, at a pace that is compatible with the climate and environmental objectives of the EU.", author: "European Commission" } },
      { section_type: "list", content: { listType: "check", items: ["The financing of investments compatible with and contributing to the transition, that avoids lock-ins", "Investments in undertakings or economic activities with a credible transition plan at the level of the undertaking or at activity level", "Investments in undertakings or economic activities with credible science-based targets"] } },
      { section_id: "product-label", section_type: "heading", title: "Do We Need a New Transition Finance Product Label?", content: { text: "Do We Need a New Transition Finance Product Label?" } },
      { section_type: "callout", content: { type: "warning", title: "Risks of a New Label", text: "The risk of adopting a new label is that such label will not be able to capture the multifaceted aspects of transition finance and will not be able to address regional approaches and wider objectives." } },
      { section_type: "list", content: { listType: "arrow", items: ["Inability to capture multifaceted aspects of transition finance", "Cannot address regional approaches and wider objectives", "Cannot incorporate policy-based requirements", "Lacks dynamism and competes with other existing asset classes"] } },
      { section_id: "transition-plans", section_type: "heading", title: "Transition Plans and Transition Finance", content: { text: "Transition Plans and Transition Finance" } },
      { section_type: "paragraph", content: { text: "Following the **EU Platform on Sustainable Finance** report in **January 2025**, **transition plans** have been identified as **key tools** to 'raise and grant transition finance'." } },
      { section_type: "callout", content: { type: "important", title: "Strategic Advantage", text: "FMPs which are capable to assess and understand the credibility and robustness behind the transition plan of their clients will face invaluable advantages." } },
    ],
    sources: [
      { source_number: 1, title: "Commission Recommendation (EU) 2023/1425 on facilitating finance for the transition to a sustainable economy", author: "European Commission", year: "2023", url: "https://eur-lex.europa.eu/eli/reco/2023/1425/oj" },
      { source_number: 2, title: "Communication of the Commission - The European Green Deal", author: "European Commission", year: "2019" },
      { source_number: 3, title: "EU Platform on Sustainable Finance Report on Transition Plans", author: "EU Platform on Sustainable Finance", year: "2025" },
    ],
  },
  {
    slug: "know-how/transition-risks",
    title: "Transition Risks",
    description: "Comprehensive analysis of transition risk drivers, technology risk, business model disruption, and policy risks affecting hard-to-abate sectors in the context of the European Green Deal.",
    tags: ["Transition Risks", "Technology Risk", "Business Model", "EU Policy", "CRR3"],
    last_updated: "2025-01-04",
    sections: [
      // Introduction
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "In order to help identify **transmission channels** and related **financial risks** deriving from **transition risks**, as requested by the **EBA** and the **ECB**, relevant **technology**, **legal** and **policy transition risks** and opportunities need to be ultimately identified so that the clients' **actual exposure** to these risks and the **impact on their business model** can be properly assessed and evaluated." } },
      { section_type: "paragraph", content: { text: "Clients' **current business models** may rely on technology that are expected to be **replaced** or on **energy sources** that may become **pricier** due to **regulatory initiatives**, such as **stricter efficiency standards** or the implementation of **carbon taxes**." } },
      { section_type: "callout", content: { type: "info", title: "Forward-Looking Approach", text: "Regulators demand a forward-looking approach, hence the need to identify trends and the transition risk drivers, which embody climate-related changes that have the potential to generate, amplify, or diminish transition risks. These drivers encompass modifications in government policies, law, and regulation, advancements in technology, and shifts in market and customer sentiment." } },

      // Bottom-up Transition Risk Assessment
      { section_id: "bottom-up-assessment", section_type: "heading", title: "Bottom-up Transition Risk Assessment", content: { text: "Bottom-up Transition Risk Assessment" } },
      { section_type: "paragraph", content: { text: "Understanding **bottom-up transition risks** of borrowers and their **underlying drivers** is a **critical exercise** for lenders. The available alternatives (**materiality analysis** and **ESG scoring**) are of **limited use** in this respect." } },
      { section_type: "callout", content: { type: "warning", title: "Limitations of Alternatives", text: "Materiality matrices provide insight into the materiality process and assess impact importance, but focus on ranking and overstate accuracy. ESG ratings might distract from addressing material impacts, risks and opportunities and the company's response to them. The link between issues and the credibility of the underlying analysis is more significant than their respective priority and ranking." } },
      { section_id: "risk-drivers", section_type: "heading", title: "Transition Risk Drivers", content: { text: "Transition Risk Drivers" } },
      { section_type: "paragraph", content: { text: "As indicated by the **TCFD**, any analysis of the **transition risks** that can affect an **industrial sector** must be based on the identification of **multiple drivers of change**. Below are the main steps for identifying the drivers of transition risks:" } },
      { section_type: "list", content: { listType: "number", items: ["Identify transition risk drivers by considering, at sector level, the key assumptions underlying the borrower's economic inputs, business model and strategy set out in their transition plans", "Assess whether these drivers are external or internal", "Among external drivers, identify the risk factors and the 'owner' of each individual factor, focusing on policy changes, climate change litigation risks, change in market preferences, technology change, availability of energy and resources", "Assess the technologies currently applied in the relevant sector and whether the underlying economic inputs and technologies create any environmental impact or are dependent on nature or on limited resources"] } },

      // Top-Down Transition Risk Assessment
      { section_id: "top-down-assessment", section_type: "heading", title: "Top-Down Transition Risk Assessment", content: { text: "Top-Down Transition Risk Assessment" } },
      { section_type: "paragraph", content: { text: "Understanding **top-down transition risks** through **macroeconomic**, **sectoral**, and **portfolio-level analysis** is a **critical complement** to **borrower-level assessments**. It allows lenders to identify **systemic exposures**, calibrate **portfolio strategy**, and anticipate **regulatory and market pressures** before they materialise at the **individual credit level**." } },
      { section_type: "list", content: { listType: "number", items: ["Map the sovereign and supranational policy landscape, including the ambition and implementation credibility of Nationally Determined Contributions (NDCs), national energy transition plans, and sectoral decarbonisation mandates, distinguishing between legislated commitments and stated policy intentions", "Classify portfolio exposures by sector using standardised taxonomies (NACE, GICS) and assign transition risk intensity ratings based on sector-level carbon intensity, regulatory exposure, and susceptibility to technology substitution, distinguishing between high, medium, and low transition risk sectors", "Measure financed emissions across the portfolio using PCAF-compliant methodologies, expressing carbon intensity as tCO₂e per million EUR financed, and benchmark against applicable sectoral and regional decarbonisation pathways to identify portfolio-level alignment gaps", "Assess the implied temperature alignment of the portfolio using forward-looking metrics — including PACTA, SBTi Portfolio Coverage, or Temperature Alignment Score methodologies — and compare the resulting portfolio trajectory against 1.5°C and well-below-2°C scenarios", "Apply macro-level transition scenarios — at minimum an orderly and a disorderly or delayed transition aligned with NGFS or IEA NZE frameworks — across short- (up to 3 years), medium- (3–10 years), and long-term (beyond 10 years) horizons to estimate aggregate portfolio value-at-risk from carbon price trajectories, energy mix shifts, and policy tightening", "Identify sectoral and geographic concentrations in high-transition-risk exposures and assess potential contagion effects within the portfolio, including second-order transmission through supply chain interdependencies and shared market structures among borrowers", "Evaluate the trajectory and ambition of carbon pricing regimes at sovereign and supranational level — including EU ETS phase reforms and CBAM expansion to new sectors — and estimate the aggregate cost burden these mechanisms may impose on carbon-intensive portfolio segments under each scenario", "Analyse macro-level transmission channels through which transition dynamics — including structural energy price volatility, labour market displacement in carbon-intensive sectors, and accelerated capital reallocation flows toward green assets — may affect the aggregate creditworthiness of the portfolio", "Assess the implications of emerging prudential frameworks — including EBA climate risk guidelines, ECB climate stress testing requirements, and Basel climate-related disclosure standards — for capital adequacy, provisioning levels, and supervisory expectations across the portfolio", "Aggregate stranded asset exposure across the portfolio by identifying sectors and asset classes most vulnerable to accelerated economic depreciation under transition scenarios, and estimate the portfolio-level impact on expected loss, LGD distributions, and economic capital requirements", "Benchmark sectoral portfolio weights against IEA, IPCC, or SBTi sectoral decarbonisation pathways to identify structural misalignments between current portfolio composition and a Paris-aligned lending strategy, and define rebalancing targets over short, medium, and long-term horizons", "Quantify the portfolio-level green and transition finance opportunity by identifying sectors, geographies, and borrower profiles where transition dynamics create demand for sustainable lending instruments — including green loans, sustainability-linked facilities, and transition bonds — aligned with the EU Taxonomy and applicable green bond standards", "Assess the policy credibility gap between current sovereign and sectoral commitments and the measures required to achieve portfolio alignment with Paris Agreement goals, and model the transition risk implications of a late and abrupt policy correction, including the potential for disorderly repricing of carbon-intensive assets across the portfolio"] } },

      // Transition Risk Drivers at Sector Level
      { section_id: "sector-level-drivers", section_type: "heading", title: "Transition Risk Drivers at Sector Level", content: { text: "Transition Risk Drivers at Sector Level" } },
      { section_id: "types-of-risks", section_type: "heading", title: "Types of Transition Risks", content: { text: "Types of Transition Risks" } },
      { section_type: "paragraph", content: { text: "The **CRR3** (Article 449a) defines **transition risk** as 'the risk of losses arising from any negative financial impact on the institution stemming from the current or prospective impacts of the transition of business activities and sectors to an environmentally sustainable economy.' **Transition risks** relate to actions taken to **reduce emissions** to reach **net zero**, **zero pollution** and **circular economy**:" } },
      { section_type: "list", content: { listType: "number", items: ["Technology risks", "Business Model Disruption", "Policy and regulatory risks", "Legal risks", "Reputational risks", "Policy-driven market risks"] } },
      { section_type: "callout", content: { type: "warning", title: "Uncertainty and Nonlinearity", text: "Transition risks are defined by significant uncertainty and nonlinearity, resulting in the likelihood of their occurrence not being accurately represented by historical data. As indicated by The Green Swan (Bolton et al., BIS), the presence of these unforeseen uncertainties renders conventional risk management methods virtually inconsequential." } },
      { section_id: "sectoral-drivers", section_type: "heading", title: "Main Sectoral Drivers of Transition Risks", content: { text: "Main Sectoral Drivers of Transition Risks" } },
      { section_type: "paragraph", content: { text: "**Financial institutions** should consider the following **sectoral drivers** of transition risks:" } },
      { section_type: "list", content: { listType: "number", items: ["Mainstream technology and energy transition — Change in mainstream technologies and impact of energy transition on current technologies and operations", "Impacts — Potential climate, environmental and biodiversity impacts related to the relevant hard-to-abate sector", "Policies and legislation — Current, potential and new material industrial, climate and environmental policies at EU level and internationally", "Climate change litigation — Status of current climate change and environmental litigation impacting the sector and relevant trends", "Dependencies — Drivers of change in the relevant sector by looking at dependencies for its economic inputs"] } },

      // Technology Risk
      { section_id: "technology-risk", section_type: "heading", title: "Technology Risk", content: { text: "Technology Risk" } },
      { section_type: "paragraph", content: { text: "Technology risk includes different risks such as **data and security breaches**, **cybersecurity risks**, **AI and algorithmic risks**, **obsolescence** of raw materials, processes and assets. In a transition context, technology risk engages with **new industrial processes**, **new and advanced materials**, **critical raw materials**, **grid management**, **renewable energy**, **biofuels**, **nuclear fusion**, **green hydrogen**, **carbon capture and storage**, changes in speed of **electrification**, **storage** and **grid efficiencies**, etc." } },
      { section_type: "callout", content: { type: "info", title: "EU Policies and Technology Risk", text: "Technology risk should not be viewed in isolation but is strictly correlated with EU policies and should be evaluated through the lenses of climate scenarios. The EU has enacted legislation such as the Net Zero Industry Act, the Ecodesign regulation, the Circular Economy Action Plan, and Zero Pollution policies that will dictate the direction of European heavy industries towards a real economy transition." } },
      { section_id: "trl", section_type: "heading", title: "Technology Readiness Level (TRL)", content: { text: "Technology Readiness Level (TRL)" } },
      { section_type: "paragraph", content: { text: "By adapting the **EU Commission Decision C(2014)4995** framework, the **Technology Readiness Level** can be defined as:" } },
      { section_type: "list", content: { listType: "number", items: ["TRL 1 — Exploratory research observing basic principles", "TRL 2 — Technology concepts and/or applications being formulated", "TRL 3 — Experimental proof of concept being validated", "TRL 4 — Technology subsystem or component validated in laboratory", "TRL 5 — Early system validation of the technology in relevant environment", "TRL 6 — Early field demonstration and completion of system refinements", "TRL 7 — Complete system prototype demonstration in operational environment", "TRL 8 — System complete and qualified for early commercial deployment", "TRL 9 — Actual system proven in operational environment for wide scale commercial deployment"] } },
      { section_type: "callout", content: { type: "tip", title: "Mobilisation of Finance", text: "As technologies mature, the green premium cost reduces and generally drives down cost of production, allowing mobilisation of senior debt finance from TRL 7 stage onwards." } },

      // Business Model Disruption
      { section_id: "business-model-disruption", section_type: "heading", title: "Business Model Disruption", content: { text: "Business Model Disruption" } },
      { section_type: "paragraph", content: { text: "**Business model disruption risk** arises when the transition renders a borrower's core revenue model **structurally unviable** — not through regulatory cost alone, but through **fundamental shifts** in the **competitive landscape**, **technology stack**, or **value chain** that incremental adaptation cannot reverse. It is distinct from technology and policy risk in that it operates at the **enterprise level**, threatening the **going concern basis** of the borrower rather than specific assets or compliance obligations." } },
      { section_type: "paragraph", content: { text: "A **business model** could be **disrupted** as a result of **acute and chronic physical risks** and of other **transition risks**. For companies in **hard-to-abate sectors**, **resilience** and creation of **long-term value** by avoiding that assets become **stranded** should be the main **transition objective**." } },
      { section_type: "paragraph", content: { text: "Disruption of the business model due to **climate transition** occurs when either the company's **value proposition** or its **operating model** is impacted." } },
      { section_type: "paragraph", content: { text: "**Examples of Operating Model Disruption:**" } },
      { section_type: "list", content: { listType: "number", items: ["Utilisation of new technology and new materials, reverse logistic and supply chains", "Impact on cost structure", "Leveraging strategic decisions about renewable energy, alternative fuels, energy efficiency and sustainable industrial processes", "Prioritising decisions on mitigation actions based on abatement costs and carbon lock-in considerations under a Net zero scenario", "Policy, legal and accounting factors leading to impairment of stranded assets"] } },
      { section_type: "paragraph", content: { text: "**Ways to Disrupt the Value Proposition:**" } },
      { section_type: "list", content: { listType: "number", items: ["Internalising impacts and externalities", "Delivering more value to stakeholders by considering impact on environment and social aspects", "Gearing corporate governance towards sustainable practices and advanced risk management", "Benchmarking against more sustainable peers or coalition frameworks", "Stakeholders' pressure due to the outcome of double materiality assessment"] } },
      { section_id: "business-model-risk", section_type: "heading", title: "Business Model Risk", content: { text: "Business Model Risk" } },
      { section_type: "paragraph", content: { text: "**Business model risks** arise from the **innovative nature** of the **technology/business model** and the **effectiveness** of product and process operations. They can be categorised into:" } },
      { section_type: "list", content: { listType: "arrow", items: ["Demand-side risks — Uncertainties regarding the size of the demand, availability of willing buyers, and difficulty of selling the product or service", "Supply-side risks — Uncertainties related to project operations and essential production inputs, including uninterrupted availability of inputs and fluctuating commodity prices"] } },
      { section_type: "callout", content: { type: "warning", title: "Stranded Assets", text: "A significant concern is the potential for stranded assets, which can be worsened by a lack of clear information regarding national and European transition plans and pathways in the early stages." } },

      // Policy and Regulatory Risks
      { section_id: "policy-regulatory-risks", section_type: "heading", title: "Policy and Regulatory Risks", content: { text: "Policy and Regulatory Risks" } },
      { section_type: "paragraph", content: { text: "**Policy and regulatory risks** refer to the possibility of **new enactment** or **interpretation of existing policies** and regulations that may lead to a **less favourable regulatory environment**. A non-exhaustive list includes:" } },
      { section_type: "list", content: { listType: "number", items: ["Carbon Tax policies such as EU ETS, CBAM and Emission Trading arrangements in other countries", "Energy price policies related to investments in hydrogen projects", "Commodity price policies", "Regulation on high level impact of land and forest use", "General GHG Emission Limits at regional level such as the EU Climate Law", "Amendments to EU banking regulations regarding green supporting, transition supporting and brown penalising factors", "Gradual extension of CSDDD to other companies and financial institutions", "Implementation of the Energy Performance Building Directive", "New sectoral GHG Emission Limits such as extension of EU ETS, CBAM or UK ETS", "Implementation of Land Use/Zoning Changes including new common agricultural policy and Nature Restoration Law", "Best Available Technologies regulations being amended and environmental legislation thresholds being raised", "Non-carbon Regulatory Requirements such as the European Green Deal or US Inflation Reduction Act"] } },

      // Legal and Accounting Risks
      { section_id: "legal-accounting", section_type: "heading", title: "Legal and Accounting Risks", content: { text: "Legal and Accounting Risks" } },
      { section_type: "paragraph", content: { text: "**Legal risk** encompasses **climate change litigation**, **regulatory enforcement actions**, and **evolving fiduciary duty standards** that may impose direct financial liability on corporates and the financial institutions that finance them. The expanding body of climate case law — including **Milieudefensie v Shell**, **KlimaSeniorinnen v Switzerland** (ECtHR, 2024), and financial institution-specific proceedings brought by **ClientEarth** — confirms that courts across jurisdictions are increasingly willing to impose binding transition obligations on both borrowers and lenders." } },
      { section_type: "paragraph", content: { text: "**Increased Exposure to Liability Risk**" } },
      { section_type: "paragraph", content: { text: "Liability could be triggered for **non-compliance** with more stringent **environmental**, **climate** and **human rights-related legislation** (such as **CSDDD**, and regulation of existing products and services)." } },
      { section_type: "paragraph", content: { text: "**Litigation Risk**" } },
      { section_type: "paragraph", content: { text: "Exposure to **litigation** as a result of new courts' approaches (e.g. following **ECHR judgments** on climate change, new approaches to **attribution of physical risks**, **constitutional changes**)." } },
      { section_type: "paragraph", content: { text: "**Enhanced Reporting Obligations**" } },
      { section_type: "paragraph", content: { text: "Impact of strengthening of **reporting obligations** and application of **stricter validation requirements** by third party auditors (e.g. applicability of **CSRD reporting obligations** to Listed SMEs)." } },
      { section_type: "callout", content: { type: "warning", title: "Asset Valuation Risks", text: "Changes in accounting rules related to impairment costs in connection with climate risks or commitments (e.g. IASB's Interpretation Committee future decisions on how entities reflect climate-related risks in impairment calculations under IAS 36) could lead to significant fluctuations in future cash flows." } },

      // Reputational Risk
      { section_id: "reputational", section_type: "heading", title: "Reputational Risk", content: { text: "Reputational Risk" } },
      { section_type: "paragraph", content: { text: "**Reputational risk** arises when the gap between a financial institution's **stated sustainability commitments** and its **actual financing behaviour** is publicly exposed — through **NGO campaigns**, **greenwashing allegations**, or **supervisory scrutiny** of ESG disclosures. It translates rapidly into commercial consequences, including **reduced access to green capital markets**, **loss of institutional investor confidence**, and **erosion of customer relationships**." } },
      { section_type: "paragraph", content: { text: "**Reputational risks**, in a transition context, are threats that can result from a company's association with **environmentally damaging practices** and with **socially impacting conducts**. Eventually, **reputational damage** can impact **revenues**, **profitability**, **enterprise value** and increased **crisis management costs**." } },
      { section_type: "paragraph", content: { text: "**Reputational liability** can have four main sources:" } },
      { section_type: "list", content: { listType: "number", items: ["Direct or indirect breach of specific environmental and social protection 'hard' legislation", "A breach of soft law or international treaties recognised by the sector as norms informing business conduct", "Misalignment from a sustainability standard adopted by other peers in the sector", "Perception of supporting organizations contributing to global warming or environmental and social damages"] } },

      // Policy-driven Market Risk
      { section_id: "policy-driven-market", section_type: "heading", title: "Policy-driven Market Risk", content: { text: "Policy-driven Market Risk" } },
      { section_type: "paragraph", content: { text: "**Policy-driven market risk** captures the financial impact on **asset values**, **commodity prices**, and **sector revenues** caused by **government intervention** in support of the transition — distinct from preference risk, which is demand-led. **Carbon price increases**, **fossil fuel subsidy phase-outs**, and **regulated product bans** such as the 2035 ICE vehicle phase-out alter the relative valuation of assets and compress operating margins for carbon-sensitive borrowers in ways that must be explicitly modelled under transition scenarios." } },
      { section_type: "paragraph", content: { text: "Trends in **market** and **consumer sentiment** deriving from **policy sources** will become increasingly relevant (e.g. in the **steel** and **cement** sectors, the impact of **real estate buyers** and **investors in SFDR funds** demanding **Net Zero aligned steel and cement** in constructions due to **embodied carbon emission** considerations)." } },

      // EU Climate and Environmental Policy
      { section_id: "eu-policy-risks", section_type: "heading", title: "EU Climate and Environmental Policy", content: { text: "EU Climate and Environmental Policy and Regulatory Risks" } },
      { section_type: "paragraph", content: { text: "Following the adoption of the **Paris Agreement** and the **UN Sustainable Development Goals**, the EU has been enacting **regulations**, **recommendations**, **directives** and **policy papers** aimed at establishing a framework for the transition towards a **low-carbon economy**, **circular economy** and restoration of **nature and biodiversity ecosystems**." } },
      { section_type: "paragraph", content: { text: "**European Green Deal**" } },
      { section_type: "paragraph", content: { text: "The **European Green Deal**, introduced in 2019, serves as the EU's comprehensive plan to steer its shift towards a **climate-neutral economy** by 2050. The primary objective is to facilitate a comprehensive overhaul of the European economy in **energy**, **transport**, **agriculture**, and **construction**. The Green Deal served as the foundation for developing several **policy instruments** aimed at facilitating the shift towards a low-carbon economy, based on three primary focal points: a decrease in **GHG emissions**, an increase in **renewable energy**, and an enhancement in **energy efficiency**." } },
      { section_type: "paragraph", content: { text: "**Climate Ambition:**" } },
      { section_type: "list", content: { listType: "arrow", items: ["EU Climate Law", "Revision of ETS and CBAM", "Fit for 55 plan (increase 2030 climate target to at least 50-55%)", "Effort Sharing Regulation", "Energy Efficiency Directive and Renewable Energy Directive", "CO2 emission performance standards for cars and vans", "EU Strategy on adaptation to climate change"] } },
      { section_type: "paragraph", content: { text: "**Clean, Affordable and Secure Energy:**" } },
      { section_type: "list", content: { listType: "arrow", items: ["REPowerEU", "Strategy for smart sector integration", "Renovation wave initiative for the building sector", "Revised TEN-E Regulation and Grid Action Plan", "Strategy on offshore renewable energy", "Renewable Energy Directive"] } },
      { section_type: "paragraph", content: { text: "**Industrial Strategy for Net Zero, Clean and Circular Economy:**" } },
      { section_type: "list", content: { listType: "arrow", items: ["Circular Economy Action Plan", "Eco-design regulations", "Green Deal Industrial Plan for the Net-Zero Age", "Net Zero Industry Act", "Industrial Emissions Directive", "European Critical Raw Materials Act"] } },

      // Transition Risk and Traditional Financial Risk
      { section_id: "transition-vs-traditional", section_type: "heading", title: "Transition Risk and Traditional Financial Risk", content: { text: "Transition Risk and Traditional Financial Risk" } },
      { section_type: "paragraph", content: { text: "The impact of **transition risks** on **traditional financial risks** must be understood through their **transmission channels** and effect on **credit risk parameters**. Transition risks can affect **probability of default (PD)** and **loss given default (LGD)** through multiple pathways including **stranded assets**, **regulatory costs**, and changes in **market demand** for carbon-intensive products and services." } },
      { section_type: "callout", content: { type: "important", title: "Transmission Channels", text: "Understanding how transition risk drivers materialise at sector level and how they transmit into traditional credit risk parameters is essential for proper risk assessment. Banks should evaluate how sectoral drivers impact the resilience of the corporate borrower's business model and whether they can augment the consequences of climate-related externalities." } },
    ],
    sources: [
      { source_number: 1, title: "The Green Swan", author: "Bolton et al, BIS", url: "https://www.bis.org/publ/othp31.htm" },
      { source_number: 2, title: "CRR3 (Article 449a) - Definition of Transition Risk", author: "European Commission" },
      { source_number: 3, title: "TCFD Recommendations", author: "Task Force on Climate-related Financial Disclosures" },
      { source_number: 4, title: "European Green Deal (COM(2019) 640 final)", author: "European Commission", year: "2019" },
    ],
  },
  {
    slug: "know-how/greenwashing-risks",
    title: "Greenwashing and Transition Washing Risks",
    description: "Understanding greenwashing and transition washing risks in lending products and their impact on financial institutions.",
    tags: ["ESG", "Compliance", "Risk Management"],
    last_updated: "2024-11-20",
    sections: [
      { section_id: "greenwashing-definition", section_type: "heading", title: "Definition of Greenwashing", content: { text: "Definition of Greenwashing" } },
      { section_type: "callout", content: { type: "info", title: "ESAs Definition", text: "The ESAs have proposed a high-level definition of greenwashing, namely, 'a practice whereby sustainability-related statements, declarations, actions or communications do not clearly and fairly reflect the underlying sustainability profile of an entity, a financial product or financial services.'" } },
      { section_id: "features", section_type: "heading", title: "Features of Greenwashing", content: { text: "Features of Greenwashing" } },
      { section_type: "paragraph", content: { text: "The **European Banking Authority (EBA)** has identified **key features of greenwashing** and indicated cases where **statements/declarations** are deemed **misleading**." } },
      { section_type: "callout", content: { type: "warning", title: "Misleading SLL Features", text: "These features include cases of sustainability-linked loans which are marketed as having real-world impact without evidence of a causal link." } },
      { section_type: "list", content: { listType: "bullet", items: ["Are marketed as having real-world impact even if the structure of the SLL does not allow it", "Include contractual provisions that provide for a margin reduction if targets are met and do not provide for a margin penalty if targets are not met"] } },
      { section_id: "impact", section_type: "heading", title: "Impact of Greenwashing", content: { text: "Impact of Greenwashing (EBA)" } },
      { section_type: "paragraph", content: { text: "Greenwashing impacts financial risks through **reputational risk**, **operational risk**, **business model risk**, **liquidity and funding risk**, **credit risk**, and **market risk**." } },
      { section_id: "transition-washing-definition", section_type: "heading", title: "Definition of Transition Washing", content: { text: "Definition of Transition Washing" } },
      { section_type: "callout", content: { type: "warning", title: "ClientEarth Definition", text: "It occurs where claims, acts or omissions create an impression that an entity is transitioning its economic or business activities to a state of net zero greenhouse gas emissions to a greater extent or more rapidly than it actually is." } },
      { section_id: "transition-washing-lending", section_type: "heading", title: "Transition Washing in Lending Products", content: { text: "Transition Washing in Lending Products" } },
      { section_type: "accordion", content: { items: [{ title: "Transition Lighting", content: "When the lender or borrower focuses on less material green aspects while hiding the lack of performance on the most material aspects." }, { title: "Transition Rinsing", content: "When the lender or the borrower changes its transition targets or SPTs before they are achieved." }, { title: "Transition Labelling", content: "When a product is labelled as a transition loan even if it does not have the required characteristics." }, { title: "Transition Hushing", content: "When client engagement and loan documentation fail to monitor regularly and effectively the real economy transition of the borrower." }] } },
    ],
    sources: [],
  },
  {
    slug: "know-how/credible-transition-plans",
    title: "Credible Transition Plans",
    description: "Understanding what makes a transition plan credible and how banks can assess the quality of counterparty transition strategies.",
    tags: ["Transition Planning", "CSRD", "ESRS E1"],
    last_updated: "2024-10-08",
    sections: [
      { section_id: "transition-plans", section_type: "heading", title: "Transition Plans", content: { text: "Transition Plans" } },
      { section_type: "paragraph", content: { text: "Banks must assess **resilience** and **climate-related financial risks** of clients in **high-emitting sectors**: **oil and gas**, **coal**, **power**, **steel**, **cement**, **shipping**, **chemical**, **aluminum**, and **automotive**." } },
      { section_type: "callout", content: { type: "important", title: "First Line of Defence", text: "The first line of defence that banks should set up is to establish a dialogue with counterparties about their transition plans and assess consistency with the institution's prudential transition planning." } },
      { section_id: "eu-law", section_type: "heading", title: "Transition Plans in EU Law", content: { text: "Transition Plans in EU Law" } },
      { section_type: "paragraph", content: { text: "The **European Union** has introduced **climate transition plan reporting** under the **Corporate Sustainability Reporting Directive (CSRD)**, expanding scope **beyond voluntary publishing**." } },
      { section_type: "callout", content: { type: "tip", title: "Governance Transformation", text: "Climate transition plans and reporting on climate-related financial risks and opportunities represent a significant innovation in EU corporate governance." } },
      { section_id: "objectives-key-elements", section_type: "heading", title: "Objectives and Key Elements under ESRS E1", content: { text: "Objectives of Transition Plans and Key Elements under ESRS E1" } },
      { section_type: "list", content: { listType: "check", items: ["Soundness of corporate strategy", "Resilience of business model", "Credibility of mitigation actions", "Effectiveness of processes", "Internal competence for risk management supervision"] } },
      { section_id: "credibility", section_type: "heading", title: "Credibility of Transition Plans", content: { text: "Credibility of Transition Plans" } },
      { section_type: "list", content: { listType: "check", items: ["Credit risk valuation", "Capital allocation", "Reputational risk", "Defining boundaries of greenwashing", "Legal liability"] } },
      { section_id: "main-features", section_type: "heading", title: "Main Features of a Credible Transition Plan", content: { text: "Main Features of a Credible Transition Plan" } },
      { section_type: "list", content: { listType: "check", items: ["Integration into corporate business plan", "Explicit reference to company's financial plan", "Alignment with financial reporting requirements", "CapEx, OpEx, M&A, and R&D obligations met", "Capital stock aligned with transition objectives and KPIs"] } },
    ],
    sources: [
      { source_number: 1, title: "Corporate Sustainability Reporting Directive (CSRD)", author: "European Union", year: "2022", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022L2464" },
      { source_number: 2, title: "EU Regulation 2024/1623 (CRR3)", author: "European Union", year: "2024" },
      { source_number: 3, title: "European Sustainability Reporting Standards (ESRS) E1", author: "EFRAG", year: "2023" },
    ],
  },
  {
    slug: "know-how/risk-assessment",
    title: "Transition Risk and Opportunity Assessment",
    description: "Methodologies, carbon lock-in risk assessment, and frameworks for banks to evaluate transition risks and opportunities.",
    tags: ["Transition Risk", "Carbon Lock-in", "Risk Assessment"],
    last_updated: "2025-01-05",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "The **ECB's analysis of January 2024** of **95 banks** covering **75% of euro area loans** found portfolios **substantially misaligned** with **Paris Agreement goals**. **Around 90%** face **elevated transition risks**." } },
      { section_type: "callout", content: { type: "warning", title: "Revenue Concentration Risk", text: "Banks generate over 60% of their interest income from counterparties in the most carbon-intensive sectors, which leaves them vulnerable to transition shocks." } },
      { section_type: "callout", content: { type: "info", title: "Temperature Alignment Gap", text: "The average implied temperature increase of large banks' non-SME corporate loan portfolios ranges between 3.7°C and 4.1°C—significantly above the Paris Agreement's 1.5°C target." } },
      { section_id: "assessment-approaches", section_type: "heading", title: "Transition Risk Assessment by Banks", content: { text: "Transition Risk Assessment by Banks" } },
      { section_type: "list", content: { listType: "number", items: ["Reference to global/macro-regional data using climate risk scenarios", "Correlating macro-global transition risk data with physical risk and macroeconomic variables", "Stress testing to simulate extreme scenarios", "Heat mapping for visualizing high-risk sectors and regions", "Assessing clients' transition pathways, targets, and plans for credibility"] } },
      { section_id: "carbon-lock-in", section_type: "heading", title: "Carbon Lock-in Risk", content: { text: "Carbon Lock-in Risk" } },
      { section_type: "paragraph", content: { text: "**Carbon lock-in risk** refers to **future GHG emissions** from **key assets** over their **operating lifetime**, representing **committed emissions** from **existing infrastructure**." } },
      { section_type: "diagram", content: { diagramType: "CarbonLockInDiagram" } },
      { section_type: "callout", content: { type: "warning", title: "Critical Barrier to Transition", text: "Carbon lock-in risk constitutes the most critical risk hindering transition and net zero efforts, hence exacerbating the occurrence of transition risk across portfolios." } },
    ],
    sources: [
      { source_number: 1, title: "Climate Risk Analysis of Euro Area Banks", author: "ECB", year: "2024" },
      { source_number: 2, title: "Paper on Banks' Alignment with Paris Temperature Target", author: "EBA Staff", year: "2024" },
      { source_number: 3, title: "Mechanisms to Prevent Carbon Lock-in in Transition Finance", author: "OECD", year: "2023" },
    ],
  },
  {
    slug: "know-how/solutions-deployment",
    title: "Solutions for Maximising Deployment",
    description: "Strategies for maximizing the deployment of transition finance through lending products and effective client engagement.",
    tags: ["Transition Finance", "Lending Products", "Strategy"],
    last_updated: "2024-10-06",
    sections: [
      { section_id: "symmetry-of-information", section_type: "heading", title: "Symmetry of Information", content: { text: "Transition Finance Products and Symmetry of Information" } },
      { section_type: "paragraph", content: { text: "According to an **OECD survey**, **bank lending** is the **largest source** of transition finance funding. This requires **full symmetry of information** between **lenders and borrowers**." } },
      { section_type: "callout", content: { type: "important", title: "Foundation of Client Relationships", text: "Banking products have a fundamental role to play in achieving symmetry of information as they constitute the backbone of the client/bank relationship." } },
      { section_type: "list", content: { listType: "bullet", items: ["Increased due diligence on clients' transition plans", "Adoption of transition-related metrics in the bank vs client relationship", "Inclusion of representations in legal documentation", "Introduction of KPIs, information undertakings, and covenants"] } },
      { section_id: "quantitative-metrics", section_type: "heading", title: "Quantitative Metrics as Strategy", content: { text: "Using Quantitative Metrics as Strategy Tool" } },
      { section_type: "callout", content: { type: "warning", title: "Limitations of Financed Emissions", text: "Financed emissions help little for determining the real economy transition impact of lending activities. Lending against borrowers' decarbonisation commitments is ineffectual." } },
      { section_type: "callout", content: { type: "tip", title: "Recommended Approach", text: "Client strategy, debt allocation, maturities and loan characteristics need to be based on quantitative transition-related metrics and credibility of clients' transition plans." } },
      { section_id: "solution", section_type: "heading", title: "The Solution for Asset Classes", content: { text: "The Solution for Asset Classes" } },
      { section_type: "list", content: { listType: "check", items: ["Reducing transition washing risk through targeted assessment", "Enhancing effectiveness of transition finance", "Strengthening bank's lines of defence vis-à-vis policy and legally driven transition risks", "Strengthening bank's lines of defence against greenwashing risk"] } },
    ],
    sources: [
      { source_number: 1, title: "OECD Guidance on Transition Finance", author: "OECD", year: "2022" },
      { source_number: 2, title: "Questions and Answers on the Sustainable Finance Package", author: "EU Commission" },
    ],
  },
  {
    slug: "know-how/litigation-risk",
    title: "Climate Change Litigation Risk",
    description: "Understanding the growing risk of climate-related litigation and its implications for financial institutions.",
    tags: ["Climate Litigation", "Legal Risk", "Financial Institutions"],
    last_updated: "2024-10-06",
    sections: [
      { section_id: "definition", section_type: "heading", title: "Definition, Trends and Impacts", content: { text: "Definition, Trends and Impacts" } },
      { section_type: "paragraph", content: { text: "**Climate change litigation** refers to **legal proceedings** related to climate causes and effects, addressing **climate impacts**, **mitigation efforts**, and **climate-related harm responsibility**." } },
      { section_type: "callout", content: { type: "info", title: "Role of Climate Litigation", text: "Climate litigation plays a crucial role in holding governments, corporations, and other actors accountable for their contributions to climate change." } },
      { section_id: "features-trends", section_type: "heading", title: "Features and Global Trends", content: { text: "Features, Global Trends and Impacts" } },
      { section_type: "list", content: { listType: "bullet", items: ["Cases directed against specific climate-damaging projects", "Lawsuits concerning the global climate as a whole", "Cases related to 'climate washing'", "Sources include constitutional provisions, statutory law, and civil law"] } },
      { section_type: "callout", content: { type: "warning", title: "Criminal Actions Emerging", text: "Criminal actions are starting to be undertaken in the EU under the new Environmental Crime Directive (Directive 2024/1203)." } },
      { section_id: "litigation-approaches", section_type: "heading", title: "Litigation Approaches in 2023", content: { text: "Litigation Approaches in 2023" } },
      { section_type: "paragraph", content: { text: "In **2023**, cases concerning **climate or transition washing** grew significantly with **47 cases filed**, bringing the **recorded total to more than 140**." } },
      { section_type: "callout", content: { type: "info", title: "High Success Rate", text: "These cases have met with significant success, with more than 70% of completed cases decided in favor of the claimants." } },
      { section_id: "klimaseniorinnen", section_type: "heading", title: "KlimaSeniorinnen Case", content: { text: "KlimaSeniorinnen Case" } },
      { section_type: "callout", content: { type: "important", title: "Landmark Decision", text: "On 9 April 2024, in KlimaSeniorinnen v. Switzerland, the ECtHR determined that there had been a breach of the rights to access courts (Article 6) and to respect for private and family life (Article 8)." } },
    ],
    sources: [
      { source_number: 1, title: "Climate Litigation Database", author: "Sabin Center for Climate Change Law", url: "http://climatecasechart.com/" },
      { source_number: 2, title: "Environmental Crime Directive 2024/1203", author: "European Parliament", year: "2024" },
      { source_number: 3, title: "Climate-related litigation: Raising awareness about a growing source of risk", author: "NGFS", year: "2021" },
    ],
  },
  // ===== GOVERNANCE PAGES =====
  {
    slug: "governance/prudential-planning",
    title: "Prudential Transition Planning",
    description: "Understanding, planning, and structuring the key features to build a prudential transition plan compliant with prudential requirements.",
    tags: ["Prudential Framework", "EBA Guidelines", "Basel III"],
    last_updated: "2025-07-14",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "A **transition plan** is a **detailed multi-year account** of **targets and actions** ensuring **business model and strategy** alignment with **limiting global warming to 1.5°C**." } },
      { section_type: "callout", content: { type: "info", title: "Definition", text: "A transition plan is a detailed multi-year account of targets and actions that sets out how a firm will ensure its business model and strategy are compatible with the goal of limiting global warming to 1.5°C." } },
      { section_type: "list", content: { listType: "number", items: ["Voluntary, market-led net zero transition plans", "Mandatory corporate disclosure net zero transition plans", "Mandatory prudential transition plans that focus on the risks of misalignment with net zero targets"] } },
      { section_id: "prudential-transition-plan", section_type: "heading", title: "The Prudential Transition Plan", content: { text: "The Prudential Transition Plan" } },
      { section_type: "callout", content: { type: "important", title: "Core Purpose", text: "The goal of prudential plans is not to force institutions to exit or divest from carbon intensive sectors. — EBA Guidelines" } },
      { section_type: "callout", content: { type: "warning", title: "Key Distinction", text: "Prudential transition plans are risk-based regulatory instruments focused on micro- and macro-prudential concerns related to transition risks, rather than general disclosure purposes." } },
      { section_id: "binding-framework", section_type: "heading", title: "Binding Legal Framework", content: { text: "Binding Legal Framework" } },
      { section_type: "callout", content: { type: "info", title: "Basel III Foundation", text: "Basel III international standards are the base for the prudential framework. The Basel framework is an internationally agreed set of measures and standards for prudential regulation." } },
      { section_type: "diagram", content: { diagramType: "BaselPillarsDiagram" } },
      { section_id: "pillar-1", section_type: "heading", title: "Pillar 1: Minimum Capital Requirements", content: { text: "Pillar 1: Minimum Capital Requirements" } },
      { section_type: "callout", content: { type: "warning", title: "Integration Challenges", text: "Integrating climate risks into the existing Pillar 1 framework presents challenges due to the framework's rigidity, short-term focus, and reliance on historical data." } },
      { section_id: "pillar-2", section_type: "heading", title: "Pillar 2: Risk Management Strategies", content: { text: "Pillar 2: Risk Management Strategies" } },
      { section_type: "list", content: { listType: "bullet", items: ["ICAAP: Internal Capital Adequacy Assessment Process", "ILAAP: Internal Liquidity Assessment Process", "SREP: Supervisory Review and Evaluation Process"] } },
      { section_id: "pillar-3", section_type: "heading", title: "Pillar 3: Disclosure Framework", content: { text: "Pillar 3: Disclosure Framework" } },
      { section_type: "list", content: { listType: "number", items: ["Disclosures should be clear", "Disclosures should be comprehensive", "Disclosures should be meaningful to users", "Disclosures should be consistent over time", "Disclosures should be comparable across banks"] } },
    ],
    sources: [
      { source_number: 1, title: "Basel III Framework: Finalising post-crisis reforms", author: "BCBS", year: "2017" },
      { source_number: 2, title: "Final Guidelines on the Management of ESG Risks", author: "EBA", year: "2025" },
      { source_number: 3, title: "Capital Requirements Regulation (CRR) and Capital Requirements Directive (CRD)", author: "European Parliament", year: "2024" },
    ],
  },
  {
    slug: "governance/net-zero-management",
    title: "Net Zero Risk Management",
    description: "Frameworks and strategies for financial institutions to manage net zero risks, transition planning, and client engagement.",
    tags: ["Net Zero", "Transition Planning", "Risk Management"],
    last_updated: "2024-10-08",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "**Net Zero** represents a **substantial shift** in **climate policy**—from **emission reduction** to **equilibrium** where activities **no longer contribute** to **greenhouse gas accumulation**." } },
      { section_type: "callout", content: { type: "info", title: "Key Concept", text: "Financial institutions' sustainable and trustworthy value creation is contingent upon the proper development and management of transition risks." } },
      { section_id: "why-net-zero-risk", section_type: "heading", title: "Why Banks Face a Net Zero Risk", content: { text: "Why Banks Face a Net Zero Risk" } },
      { section_type: "callout", content: { type: "warning", title: "Risk Exposure", text: "Financial institutions that have committed to Net Zero pledges are exposed to reputational, regulatory and potentially legal risks if such pledges are unachievable." } },
      { section_id: "prudential-non-prudential", section_type: "heading", title: "Prudential vs Non-Prudential Transition Plans", content: { text: "Prudential vs Non-Prudential Transition Plans" } },
      { section_type: "callout", content: { type: "important", title: "CRD VI Definition", text: "A prudential transition plan is the overview and articulation of the strategic actions and risk management tools deployed by institutions to demonstrate preparedness for the transition." } },
      { section_id: "relationship", section_type: "heading", title: "Relationship Between Transition Plans", content: { text: "Relationship Between Transition Plans" } },
      { section_type: "callout", content: { type: "tip", title: "EBA Position", text: "There is only one transition plan—a strategic plan designed by a bank to reduce operational and financed emissions to net zero levels over the long term." } },
      { section_type: "list", content: { listType: "number", items: ["Operational plan to reduce scope 1 and 2 emissions", "Net zero plan for financed emissions across the entire loan portfolio", "Financial and execution risks, including scenario analysis", "Sustainable finance lending, income and profitability targets"] } },
      { section_type: "diagram", content: { diagramType: "TransitionPlanDiagram" } },
      { section_id: "how-to-manage", section_type: "heading", title: "How to Manage Net Zero Risk", content: { text: "How to Manage Net Zero Risk" } },
      { section_type: "callout", content: { type: "tip", title: "Strategy", text: "This risk is manageable as long as the financial institution focuses its strategy on real economy transition of its borrowers and addresses climate vulnerabilities by reallocating capital." } },
    ],
    sources: [
      { source_number: 1, title: "Capital Requirements Directive (CRD VI)", author: "European Union", year: "2024" },
      { source_number: 2, title: "Guidelines on the Management of ESG Risks", author: "EBA", year: "2025" },
      { source_number: 3, title: "Transition Planning Processes", author: "NGFS", year: "2023" },
    ],
  },
  {
    slug: "governance/finance-framework",
    title: "Transition Finance Framework",
    description: "A comprehensive framework for setting metrics, targets, opportunities, and business strategies for deploying transition finance.",
    tags: ["Framework", "Metrics & KPIs", "Business Strategy"],
    last_updated: "2025-01-16",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "A **transition finance framework** sets out **key metrics**, **transition-related KPIs**, **targets**, **benchmarks**, and **preferred transition-enabling and low-carbon technologies**." } },
      { section_type: "callout", content: { type: "info", title: "Framework Purpose", text: "The framework is intended to be forward-looking, technology- and science-based, and capable of identifying the real economy transition needs of sectors." } },
      { section_id: "metrics-targets", section_type: "heading", title: "Metrics and Targets", content: { text: "Metrics and Targets" } },
      { section_type: "list", content: { listType: "bullet", items: ["Carbon emission intensity targets", "Locked-in emissions targets", "Financed emissions targets", "Committed low-carbon and transition-enabling CapEx targets", "Transition-related KPIs and benchmarks", "Decarbonisation time horizons"] } },
      { section_id: "opportunities-context", section_type: "heading", title: "Opportunities Context", content: { text: "Opportunities Context" } },
      { section_type: "list", content: { listType: "bullet", items: ["Key transition technologies based on TRLs", "Low-carbon and transition-enabling R&D and CapEx requirements", "Mitigation actions credibility requirements", "Decarbonisation levers"] } },
      { section_id: "business-strategy", section_type: "heading", title: "Business Strategy", content: { text: "Business Strategy" } },
      { section_type: "callout", content: { type: "warning", title: "Engagement Approach", text: "Banks should be aware of challenges faced by hard-to-abate clients and be proportionate, but equally strict when clients do not have adaptive capacity or refuse to engage." } },
      { section_id: "strategy-decision-plan", section_type: "heading", title: "Strategy Decision Plan", content: { text: "Strategy Decision Plan" } },
      { section_type: "diagram", content: { diagramType: "StrategyDecisionPlanDiagram" } },
      { section_id: "step-plan", section_type: "heading", title: "Step Plan for Assessment", content: { text: "Step Plan for Assessment" } },
      { section_type: "list", content: { listType: "number", items: ["Compliance with bank's metrics and transition-related KPIs", "Alignment with CapEx identified by bank in Transition Finance Framework", "Allocation into different categories based on assessment results", "Assessment of credibility of clients' transition plans"] } },
    ],
    sources: [
      { source_number: 1, title: "EU Taxonomy Regulation", author: "European Commission", year: "2020" },
      { source_number: 2, title: "Net Zero by 2050: A Roadmap for the Global Energy Sector", author: "IEA", year: "2021" },
      { source_number: 3, title: "Climate Scenarios for Central Banks and Supervisors", author: "NGFS", year: "2023" },
    ],
  },
  // ===== PRODUCTS PAGES =====
  {
    slug: "products/kpis-criteria",
    title: "KPIs and Criteria Selection",
    description: "Guidance on selecting appropriate Key Performance Indicators and criteria for transition finance products.",
    tags: ["KPIs", "Metrics", "Transition Finance"],
    last_updated: "2025-01-10",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "The selection of **appropriate Key Performance Indicators (KPIs)** is **fundamental** to **credibility and effectiveness** of transition finance. **KPIs must be material**, **measurable**, and **aligned with benchmarks**." } },
      { section_type: "callout", content: { type: "info", title: "KPI Requirements", text: "KPIs should be core and relevant, measurable, externally verifiable, and capable of being benchmarked against recognized industry standards or scientific targets." } },
      { section_id: "materiality", section_type: "heading", title: "Materiality Assessment", content: { text: "Materiality Assessment" } },
      { section_type: "paragraph", content: { text: "**KPIs must address material environmental impacts** for the specific sector. **Immaterial KPIs** undermine **credibility** and may constitute **transition washing**." } },
      { section_type: "list", content: { listType: "check", items: ["Carbon emissions intensity (Scope 1, 2, 3 where material)", "Energy efficiency metrics", "Renewable energy usage percentage", "Circular economy indicators", "Nature and biodiversity impact metrics"] } },
    ],
    sources: [
      { source_number: 1, title: "Sustainability-Linked Loan Principles", author: "LMA/APLMA/LSTA", year: "2023" },
      { source_number: 2, title: "EU Taxonomy Technical Screening Criteria", author: "European Commission", year: "2021" },
    ],
  },
  {
    slug: "products/corporate-loans",
    title: "Corporate Loans for Transition",
    description: "Structuring general corporate purpose loans to support transition objectives and manage transition risks.",
    tags: ["Corporate Loans", "GCPL", "Transition Finance"],
    last_updated: "2025-01-08",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "**General corporate purpose loans (GCPLs)** represent the **largest source** of finance for **European corporations**, offering **significant potential** for **supporting transition objectives** when **properly structured**." } },
      { section_type: "callout", content: { type: "important", title: "Untapped Potential", text: "GCPLs have been largely unaccounted for in the deployment of transition finance despite their significant potential impact on real economy transition." } },
      { section_id: "structuring", section_type: "heading", title: "Structuring Transition-Aligned GCPLs", content: { text: "Structuring Transition-Aligned GCPLs" } },
      { section_type: "list", content: { listType: "bullet", items: ["Enhanced due diligence on borrower transition plans", "Transition-related representations and warranties", "Information covenants on transition progress", "Affirmative covenants on CapEx alignment", "Pricing linked to transition performance"] } },
    ],
    sources: [
      { source_number: 1, title: "OECD Guidance on Transition Finance", author: "OECD", year: "2022" },
    ],
  },
  {
    slug: "products/sll",
    title: "Sustainability-Linked Loans",
    description: "Best practices for structuring sustainability-linked loans that drive real transition outcomes.",
    tags: ["SLL", "Sustainability-Linked", "Transition Finance"],
    last_updated: "2025-01-12",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "**Sustainability-linked loans (SLLs)** are the **largest source** of **sustainable finance in Europe**, but face **criticism** regarding **greenwashing risks** and **real-world impact**." } },
      { section_type: "callout", content: { type: "warning", title: "Credibility Concerns", text: "SLLs have been subject to criticism because of their greenwashing risks, particularly when KPIs are immaterial or SPTs are unambitious." } },
      { section_id: "best-practices", section_type: "heading", title: "Best Practices for SLL Structuring", content: { text: "Best Practices for SLL Structuring" } },
      { section_type: "list", content: { listType: "check", items: ["Material and ambitious KPIs aligned with sector pathways", "Science-based SPTs with clear benchmarking", "Symmetric margin adjustment mechanisms", "Independent external verification", "Regular monitoring and reporting obligations", "Meaningful consequences for non-achievement"] } },
    ],
    sources: [
      { source_number: 1, title: "Sustainability-Linked Loan Principles", author: "LMA/APLMA/LSTA", year: "2023" },
    ],
  },
  {
    slug: "products/contractual-solutions",
    title: "Contractual Solutions",
    description: "Legal documentation and contractual mechanisms for transition finance products.",
    tags: ["Legal", "Documentation", "Covenants"],
    last_updated: "2025-01-14",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "**Effective contractual solutions** are **essential** for ensuring **transition finance products** achieve **intended outcomes** while **protecting lender interests** and **managing transition risks**." } },
      { section_type: "callout", content: { type: "info", title: "Documentation Purpose", text: "Loan documentation should establish clear expectations, monitoring mechanisms, and consequences for transition performance." } },
      { section_id: "key-provisions", section_type: "heading", title: "Key Contractual Provisions", content: { text: "Key Contractual Provisions" } },
      { section_type: "list", content: { listType: "bullet", items: ["Transition plan representations and warranties", "Information undertakings on transition progress", "Affirmative covenants on CapEx and technology deployment", "Negative covenants on carbon-intensive activities", "Event of default triggers for material transition failures", "Margin ratchet mechanisms linked to KPIs"] } },
    ],
    sources: [],
  },
  {
    slug: "products/loan-policy",
    title: "Transition Loan Policy",
    description: "Framework for developing internal loan policies that integrate transition risk management.",
    tags: ["Policy", "Credit Risk", "Governance"],
    last_updated: "2025-01-15",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "A **comprehensive transition loan policy** provides the **framework** for **integrating transition considerations** into **credit decisions**, **client engagement**, and **portfolio management**." } },
      { section_type: "callout", content: { type: "important", title: "Policy Integration", text: "Transition considerations must be integrated into existing credit policies rather than treated as a separate overlay to ensure consistent application." } },
      { section_id: "policy-elements", section_type: "heading", title: "Key Policy Elements", content: { text: "Key Policy Elements" } },
      { section_type: "list", content: { listType: "number", items: ["Sectoral exposure limits based on transition risk assessment", "Minimum requirements for borrower transition plans", "KPI and SPT materiality and ambition standards", "Client engagement and escalation procedures", "Monitoring and reporting requirements", "Exception processes for high-risk exposures"] } },
    ],
    sources: [],
  },
  // ===== SECTORS PAGES =====
  {
    slug: "sectors/steel",
    title: "Steel Sector",
    description: "Transition pathways, technologies, and financing considerations for the steel sector.",
    tags: ["Steel", "Hard-to-Abate", "Industrial"],
    last_updated: "2025-01-18",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "The **steel sector** is responsible for approximately **7% of global CO2 emissions** and is **one of the most challenging sectors** to decarbonize due to **high process temperatures** and **reliance on carbon**." } },
      { section_type: "callout", content: { type: "info", title: "Sector Context", text: "Steel production is essential for the green transition itself, being required for wind turbines, electric vehicles, and infrastructure." } },
      { section_id: "decarbonisation-pathways", section_type: "heading", title: "Decarbonisation Pathways", content: { text: "Decarbonisation Pathways" } },
      { section_type: "list", content: { listType: "bullet", items: ["Hydrogen-based direct reduced iron (H2-DRI)", "Electric arc furnace (EAF) with scrap and DRI", "Carbon capture and storage (CCS)", "Increased scrap utilization and circularity", "Energy efficiency improvements"] } },
      { section_type: "callout", content: { type: "warning", title: "Carbon Lock-in Risk", text: "New blast furnace investments create 40+ year carbon lock-in. Transition finance should prioritize low-carbon pathways over incremental BF improvements." } },
    ],
    sources: [
      { source_number: 1, title: "Net Zero Steel Sector Roadmap", author: "IEA", year: "2022" },
      { source_number: 2, title: "Mission Possible: Steel", author: "Energy Transitions Commission", year: "2021" },
    ],
  },
  {
    slug: "sectors/cement",
    title: "Cement Sector",
    description: "Transition pathways, technologies, and financing considerations for the cement sector.",
    tags: ["Cement", "Hard-to-Abate", "Industrial"],
    last_updated: "2025-01-18",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "The **cement sector** accounts for approximately **8% of global CO2 emissions**, making it **one of the largest industrial emitters**. **Two-thirds of emissions** come from **process emissions (calcination)**." } },
      { section_type: "callout", content: { type: "warning", title: "Process Emissions Challenge", text: "Unlike other sectors, cement cannot be decarbonized through fuel switching alone due to inherent process emissions from limestone calcination." } },
      { section_id: "decarbonisation-pathways", section_type: "heading", title: "Decarbonisation Pathways", content: { text: "Decarbonisation Pathways" } },
      { section_type: "list", content: { listType: "bullet", items: ["Carbon capture and storage (CCS) - essential for process emissions", "Alternative binders and clinker substitutes", "Fuel switching to biomass and alternative fuels", "Energy efficiency and heat recovery", "Novel cement chemistries"] } },
    ],
    sources: [
      { source_number: 1, title: "Cement Technology Roadmap", author: "IEA/CSI", year: "2022" },
    ],
  },
  {
    slug: "sectors/automotive",
    title: "Automotive Sector",
    description: "Transition pathways, technologies, and financing considerations for the automotive sector.",
    tags: ["Automotive", "Transportation", "EV"],
    last_updated: "2025-01-18",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "The **automotive sector** faces **significant transition pressures** from **regulatory mandates** (including **EU's 2035 ICE phase-out**), **consumer preferences**, and **EV advancement**." } },
      { section_type: "callout", content: { type: "important", title: "Regulatory Mandate", text: "The EU has mandated 100% zero-emission new car sales from 2035, creating a clear transition pathway for European automotive financing." } },
      { section_id: "transition-considerations", section_type: "heading", title: "Key Transition Considerations", content: { text: "Key Transition Considerations" } },
      { section_type: "list", content: { listType: "bullet", items: ["ICE asset stranding risk assessment", "EV production capacity investment", "Supply chain transformation (batteries, critical minerals)", "Charging infrastructure requirements", "Workforce transition and reskilling"] } },
    ],
    sources: [
      { source_number: 1, title: "CO2 Emission Standards for Cars and Vans Regulation", author: "European Commission", year: "2023" },
    ],
  },
  {
    slug: "sectors/shipping",
    title: "Shipping Sector Transition",
    description: "Transition pathways, technologies, and financing considerations for the maritime shipping sector.",
    tags: ["Shipping", "Maritime", "Transportation"],
    last_updated: "2025-01-18",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "**International shipping** accounts for approximately **3% of global emissions** and faces **significant transition challenges** due to **long asset lives (25-30 years)**, **global regulatory complexity**, and **fuel infrastructure requirements**." } },
      { section_type: "callout", content: { type: "info", title: "IMO Targets", text: "The IMO has set targets for net-zero emissions by 2050 with interim checkpoints, driving demand for alternative fuels and vessel efficiency improvements." } },
      { section_id: "decarbonisation-pathways", section_type: "heading", title: "Decarbonisation Pathways", content: { text: "Decarbonisation Pathways" } },
      { section_type: "list", content: { listType: "bullet", items: ["Green ammonia and methanol as alternative fuels", "Green hydrogen for short-sea shipping", "LNG as transitional fuel (with lifecycle emissions caveats)", "Wind-assisted propulsion and energy efficiency", "Fleet renewal and right-sizing"] } },
      { section_type: "callout", content: { type: "warning", title: "Fuel Infrastructure Gap", text: "Alternative fuel availability and bunkering infrastructure remain significant barriers to shipping decarbonization, requiring coordinated investment." } },
    ],
    sources: [
      { source_number: 1, title: "IMO GHG Strategy", author: "International Maritime Organization", year: "2023" },
      { source_number: 2, title: "Poseidon Principles", author: "Poseidon Principles Secretariat", year: "2022" },
    ],
  },
];

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { adminClient: supabase, error: authError } = await verifyAdmin(req, corsHeaders);
    if (authError) return authError;

    console.log(`Starting seed of ${pages.length} pages...`);
    const results = [];

    for (const pageData of pages) {
      console.log(`Processing: ${pageData.slug}`);
      
      // Upsert page
      const { data: page, error: pageError } = await supabase
        .from("pages")
        .upsert(
          {
            slug: pageData.slug,
            title: pageData.title,
            description: pageData.description,
            tags: pageData.tags,
            last_updated: pageData.last_updated,
          },
          { onConflict: "slug" }
        )
        .select()
        .single();

      if (pageError) {
        console.error(`Error upserting page ${pageData.slug}:`, pageError);
        results.push({ slug: pageData.slug, error: pageError.message });
        continue;
      }

      // NON-DESTRUCTIVE: Upsert sections individually by section_id
      // Existing sections not in the seed data are LEFT UNTOUCHED
      let sectionsUpserted = 0;
      let sectionsSkipped = 0;
      if (pageData.sections && pageData.sections.length > 0) {
        for (let idx = 0; idx < pageData.sections.length; idx++) {
          const s = pageData.sections[idx];
          const sectionId = s.section_id || `section-${idx}`;

          // Check if this section already exists
          const { data: existing } = await supabase
            .from("page_sections")
            .select("id")
            .eq("page_id", page.id)
            .eq("section_id", sectionId)
            .maybeSingle();

          if (existing) {
            // Update existing section content and sort_order
            const { error: updateError } = await supabase
              .from("page_sections")
              .update({
                section_type: s.section_type,
                title: s.title || null,
                content: s.content,
                sort_order: s.sort_order ?? idx,
              })
              .eq("id", existing.id);

            if (updateError) {
              console.error(`Error updating section ${sectionId} for ${pageData.slug}:`, updateError);
            } else {
              sectionsUpserted++;
            }
          } else {
            // Insert new section — does not touch any existing sections
            const { error: insertError } = await supabase
              .from("page_sections")
              .insert({
                page_id: page.id,
                section_id: sectionId,
                section_type: s.section_type,
                title: s.title || null,
                content: s.content,
                sort_order: s.sort_order ?? idx,
              });

            if (insertError) {
              console.error(`Error inserting section ${sectionId} for ${pageData.slug}:`, insertError);
              sectionsSkipped++;
            } else {
              sectionsUpserted++;
            }
          }
        }
      }

      // NON-DESTRUCTIVE: Upsert sources by source_number
      // Existing sources not in the seed data are LEFT UNTOUCHED
      let sourcesUpserted = 0;
      if (pageData.sources && pageData.sources.length > 0) {
        for (const s of pageData.sources as { source_number: number; title: string; author?: string; year?: string; url?: string }[]) {
          const { data: existingSource } = await supabase
            .from("page_sources")
            .select("id")
            .eq("page_id", page.id)
            .eq("source_number", s.source_number)
            .maybeSingle();

          if (existingSource) {
            await supabase
              .from("page_sources")
              .update({
                title: s.title,
                author: s.author || null,
                year: s.year || null,
                url: s.url || null,
              })
              .eq("id", existingSource.id);
          } else {
            await supabase
              .from("page_sources")
              .insert({
                page_id: page.id,
                source_number: s.source_number,
                title: s.title,
                author: s.author || null,
                year: s.year || null,
                url: s.url || null,
              });
          }
          sourcesUpserted++;
        }
      }

      results.push({
        slug: pageData.slug,
        success: true,
        sectionsUpserted,
        sectionsSkipped,
        sourcesUpserted,
      });
    }

    console.log("Seeding complete");
    
    return new Response(JSON.stringify({ 
      totalPages: pages.length,
      results 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Seed error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});