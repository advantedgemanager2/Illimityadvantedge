import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders } from "../_shared/cors.ts";
import { verifyAdmin } from "../_shared/auth.ts";

const page = {
  slug: "sectors/shipping",
  title: "Shipping Sector",
  description:
    "Analysis of the maritime shipping sector's decarbonization challenges, alternative fuels, regulatory framework, environmental impacts, and transition finance considerations for this critical global trade enabler.",
  tags: [
    "Hard-to-Abate",
    "Maritime",
    "Decarbonization",
    "Alternative Fuels",
    "Poseidon Principles",
    "IMO",
    "FuelEU",
  ],
  last_updated: "2026-03-02",
  sections: [
    // ===== 1. INTRODUCTION =====
    {
      section_id: "introduction",
      section_type: "heading",
      title: "Introduction",
      content: { text: "Introduction" },
    },
    {
      section_type: "paragraph",
      content: {
        text: "The maritime shipping sector is the backbone of global trade, responsible for transporting **over 90% of internationally traded goods** by volume and over 70% by value. Despite this central economic role, the sector accounts for approximately **2\u20133% of global greenhouse gas (GHG) emissions** \u2014 a share comparable to that of major emitting nations. Crucially, shipping exerts a **powerful multiplier effect on global emissions**: by enabling just-in-time production, globally dispersed supply chains, and long-haul logistics, it indirectly amplifies the carbon footprint of the entire global economy. Decarbonizing shipping is therefore not merely a technical priority but a strategic step toward making global production and consumption models compatible with the Paris Agreement.",
      },
    },
    {
      section_type: "paragraph",
      content: {
        text: "The sector faces a profound and multi-dimensional transition challenge. The IMO\u2019s 2023 GHG Strategy targets **net-zero emissions by 2050** and a **40% reduction in carbon intensity by 2030**. At the 83rd session of the Marine Environment Protection Committee (MEPC 83, April 2025), the IMO reached a historic milestone with the preliminary approval of the **IMO Net-Zero Framework** \u2014 a legally binding package combining a fuel carbon intensity standard and a global GHG pricing mechanism, applicable to ships above 5,000 gross tonnage from 2027. This framework is expected to be formally adopted at an extraordinary IMO session in October 2025.",
      },
    },
    {
      section_type: "callout",
      content: {
        type: "info",
        title: "Key Decarbonization Pathways",
        text: "Alternative fuels (LNG, green methanol, ammonia, hydrogen), vessel design efficiency, wind-assisted propulsion, digital route optimization, and carbon capture systems. No single pathway will dominate; a multi-fuel, technology-agnostic model is emerging.",
      },
    },
    {
      section_type: "paragraph",
      content: {
        text: "For financial institutions, shipping presents a **structurally complex transition exposure**. Fleet assets have operational lifetimes of **20\u201330 years**; carbon lock-in risk is systemic; and the sector\u2019s heterogeneity \u2014 across vessel types, routes, regulatory jurisdictions, and fuel compatibility \u2014 demands **granular, vessel-specific assessment frameworks** rather than generic sector-level approaches.",
      },
    },

    // ===== 2. SHIPPING MARKET =====
    {
      section_id: "shipping-market",
      section_type: "heading",
      title: "Shipping Market",
      content: { text: "Shipping Market" },
    },
    {
      section_type: "paragraph",
      content: {
        text: "The global shipping fleet comprises **over 100,000 merchant vessels** of varying sizes and types. The sector facilitates the movement of raw materials, energy resources, consumer goods, and food across continents, making it structurally indispensable to the global economy. Shipping is the **lowest-emission mode of freight transport per tonne-kilometre**, but its absolute emission volumes \u2014 estimated at **137.5 million tonnes of CO\u2082** within the EU-27 in 2022, up 8.5% from the prior year (EMSA, 2025) \u2014 and its projected growth make decarbonization urgently necessary.",
      },
    },
    {
      section_type: "paragraph",
      content: {
        text: "The global maritime market is dominated by a handful of vessel categories by emission volume: **bulk carriers, container ships, tankers, and LNG carriers** collectively account for the largest share of financed assets and carbon exposure. The sector is **cyclical in nature**, with freight rates and vessel values fluctuating significantly based on trade volumes, commodity demand, and geopolitical disruptions \u2014 all of which affect the financial profile of shipowners and the **credit risk assessment** of lending institutions.",
      },
    },
    {
      section_type: "callout",
      content: {
        type: "info",
        title: "Emission Trends (EU-27)",
        text: "CO\u2082 emissions rose to 137.5 Mt in 2022 (+8.5% YoY). Methane emissions more than doubled between 2018 and 2023, driven by LNG adoption. SOx emissions fell 70% since 2014 following SECA establishment. NOx emissions rose 10% between 2015 and 2023 (EMSA, 2025).",
      },
    },
    {
      section_type: "paragraph",
      content: {
        text: "The financial scale of the sector\u2019s transition is substantial. Ricardo\u2019s \u201cZero Emission Blueprint for Shipping\u201d identifies **265 essential initiatives**, estimating that approximately **USD 5 billion** is required for the pre-commercial implementation phase alone, with total transition investment requirements **estimated in the trillions** over the coming decades. Banks active in ship finance are therefore both **critically exposed to transition risk** and strategically positioned to accelerate or delay the decarbonization of the global fleet.",
      },
    },

    // ===== 3. VESSEL TYPES =====
    {
      section_id: "vessel-types",
      section_type: "heading",
      title: "Vessel Types",
      content: { text: "Vessel Types" },
    },
    {
      section_type: "paragraph",
      content: {
        text: "The global commercial fleet encompasses **seven principal vessel categories**, each characterized by distinct structural, propulsion, operational, and cargo characteristics. For banks, a **vessel-type-specific assessment framework** is essential: the decarbonization potential, fuel compatibility, retrofit feasibility, and regulatory exposure of each category differ substantially, and a generic sector-level approach will systematically misassess transition risk and opportunity.",
      },
    },
    {
      section_type: "card_grid",
      content: {
        columns: 2,
        cards: [
          {
            icon: "Ship",
            title: "Container Ships",
            description:
              "Transport standardized ISO containers; capacity measured in TEU. Classes range from Feeder (up to 3,000 TEU) to Ultra Large Container Ships (18,000+ TEU). Operate on fixed liner routes. Two-stroke low-speed diesel engines standard. Leading adopters of LNG propulsion; high methanol retrofit interest.",
            color: "blue",
          },
          {
            icon: "Package",
            title: "Bulk Carriers",
            description:
              "Transport unpackaged dry cargo (grain, coal, iron ore, cement). Classified by DWT: Handysize (10,000\u201340,000 DWT), Handymax/Supramax (40,000\u201360,000 DWT), Panamax (60,000\u201380,000 DWT), Capesize (120,000+ DWT), VLOC (200,000+ DWT). Tramp shipping model. Carry approximately 40% of global cargo volume. Slow steaming is key efficiency lever.",
            color: "amber",
          },
          {
            icon: "Droplets",
            title: "Tanker Ships",
            description:
              "Transport crude oil, petroleum products, chemicals, and LNG. Sub-classified by cargo type and size: Aframax (80,000\u2013120,000 DWT), Suezmax (120,000\u2013200,000 DWT), VLCC (200,000\u2013320,000 DWT), ULCC (320,000+ DWT). Chemical tankers require specialized tank materials. LNG carriers operate at -162\u00b0C requiring cryogenic insulation. Subject to strict MARPOL environmental and safety standards.",
            color: "slate",
          },
          {
            icon: "Car",
            title: "Ro-Ro / Passenger Ships",
            description:
              "Roll-on/Roll-off vessels carry wheeled vehicles; Ro-Pax combines vehicles and passengers. Cruise ships and ferries fall in the passenger category. Medium-to-high-speed diesel engines; growing adoption of LNG and hybrid propulsion. Shore power (cold ironing) a key decarbonization lever in port.",
            color: "emerald",
          },
          {
            icon: "Boxes",
            title: "General Cargo Ships",
            description:
              "Versatile multi-purpose vessels for non-containerized cargo (machinery, steel, timber, oversized loads). Operate on tramp model. Often equipped with onboard cranes for port-independent operations. Medium-powered diesel engines. Breakbulk and multipurpose (MPP) are key sub-categories.",
            color: "purple",
          },
          {
            icon: "Fish",
            title: "Fishing Vessels",
            description:
              "Highly specialized vessels for capture, processing, and storage of marine resources. Range from small artisanal boats to factory trawlers. High fuel intensity per unit of catch. Subject to VMS tracking and FAO/IMO sustainability standards. Significant biodiversity and bycatch exposure.",
            color: "cyan",
          },
          {
            icon: "Flame",
            title: "LNG Carriers",
            description:
              "Purpose-built for liquefied natural gas transport at -162\u00b0C. Among the most technically sophisticated and capital-intensive vessels. May be powered by boil-off gas from cargo, creating a unique dual-function energy system. Growing demand driven by energy security diversification and gas transition role.",
            color: "orange",
          },
        ],
      },
    },

    // ===== 4. OPERATIONAL AND TECHNICAL CHARACTERISTICS =====
    {
      section_id: "manufacturing-process",
      section_type: "heading",
      title: "Operational and Technical Characteristics",
      content: { text: "Operational and Technical Characteristics" },
    },
    {
      section_type: "paragraph",
      content: {
        text: "Assessing a vessel\u2019s transition potential requires analysis of its **intrinsic technical and operational characteristics**, which directly determine **decarbonization feasibility, retrofit cost, regulatory compliance trajectory, and residual asset value**. A standardized assessment framework must consider the following parameters:",
      },
    },
    {
      section_type: "list",
      content: {
        listType: "number",
        items: [
          "Year of Construction \u2014 Vessels built before 2013 predate the EEDI and are structurally less compatible with alternative fuels and retrofitting. Ships built between 2013 and 2022 are EEDI-compliant but may lack dual-fuel capability. Vessels built from January 2023 onward are subject to both EEXI and CII from commissioning.",
          "Fuel Type and Dual-Fuel Capability \u2014 HFO and MDO-powered vessels carry the highest transition cost and regulatory risk. LNG-ready, methanol-ready, and ammonia-ready vessels represent lower transition risk. Dual-fuel capability is a critical positive indicator for future fuel flexibility.",
          "Retrofit Feasibility \u2014 Determined by available onboard space, structural configuration, vessel age, and expected remaining economic life. Key retrofit options include scrubber installation, fuel system conversion, hull and propeller optimization, and digital energy management integration.",
          "Vessel Lifespan and Remaining Economic Life \u2014 Standard vessel life is 20\u201330 years, though regulatory and market pressures have compressed effective economic life to 10\u201315 years for non-compliant tonnage. Ships with fewer than 8\u201310 years of remaining life are poor candidates for capital-intensive retrofits.",
          "Trade Route and Operational Profile \u2014 Short-sea shipping vessels are better candidates for electrification and hybrid propulsion. Ocean-going vessels on high-speed liner routes have different fuel efficiency profiles than tramp operators. Emission Control Area (ECA) exposure determines the urgency of SOx compliance.",
          "CII Rating and Trajectory \u2014 The IMO\u2019s Carbon Intensity Indicator assigns annual ratings of A through E. A D or E rating triggers a mandatory Corrective Action Plan. A persistent D or E rating over multiple years signals structural non-compliance risk and potential stranded asset exposure.",
        ],
      },
    },
    {
      section_type: "callout",
      content: {
        type: "warning",
        title: "Asset Obsolescence Risk",
        text: "Ships that are technically operational but non-compliant with CII, EEXI, or FuelEU Maritime standards face accelerating devaluation, reduced charter appeal, and exclusion from ESG-screened logistics chains. For banks, this compresses Loan-to-Value (LTV) ratios and elevates Loss Given Default (LGD) on ship finance portfolios. Investment horizons have contracted from 25\u201330 years to 10\u201315 years for conventional tonnage.",
      },
    },

    // ===== 5. DRIVERS OF CHANGE =====
    {
      section_id: "drivers-of-change",
      section_type: "heading",
      title: "Drivers of Change",
      content: { text: "Drivers of Change" },
    },
    {
      section_type: "paragraph",
      content: {
        text: "Successfully navigating the shipping transition requires understanding the forces reshaping the sector. These drivers operate across **regulatory, technological, market, and financial dimensions**, and their interaction determines the pace and shape of the energy transition.",
      },
    },
    {
      section_type: "card_grid",
      content: {
        columns: 2,
        cards: [
          {
            icon: "Scale",
            title: "Global Decarbonization Targets and Regulatory Tightening",
            description:
              "IMO 2023 GHG Strategy (net zero by 2050); MEPC 83 Net-Zero Framework (2027 entry into force); EU ETS inclusion (2024); FuelEU Maritime (2025); CII and EEXI (2023). Regulatory intensity is accelerating and expanding geographically.",
            color: "blue",
          },
          {
            icon: "Fuel",
            title: "Shift to Alternative Fuels",
            description:
              "LNG as current frontrunner (methane slip risk); methanol gaining traction (Maersk, others); ammonia and green hydrogen as long-term zero-emission targets; biofuels as near-term bridge. Multi-fuel model likely; no single dominant solution.",
            color: "emerald",
          },
          {
            icon: "Cog",
            title: "Innovations in Vessel Design and Fuel Efficiency",
            description:
              "Hull hydrodynamics optimization; air lubrication systems; advanced antifouling coatings; waste heat recovery; wind-assisted propulsion (Flettner rotors, rigid sails, traction kites \u2014 up to 20% fuel reduction on favourable routes per Hoffmeister et al., 2025).",
            color: "purple",
          },
          {
            icon: "TrendingUp",
            title: "ESG Investor and Cargo Owner Pressure",
            description:
              "Major shippers require decarbonized logistics partners. ESG-screened charter markets and sustainability-linked freight contracts are growing. Investor divestment from high-CII fleets is accelerating secondary market bifurcation between green and brown tonnage.",
            color: "amber",
          },
          {
            icon: "Anchor",
            title: "Green Shipping Corridors and Port Infrastructure",
            description:
              "Coordinated decarbonization zones between major port pairs (e.g., Singapore\u2013Rotterdam). Shore power (cold ironing) expansion. Green hydrogen and ammonia bunkering infrastructure investment. Port infrastructure is a binding constraint on alternative fuel adoption timelines.",
            color: "cyan",
          },
          {
            icon: "Cpu",
            title: "Supply Chain Resilience and Digitalization",
            description:
              "Pandemic-driven supply chain disruptions have accelerated investment in redundancy, route flexibility, and digital monitoring. AI-driven route optimization, predictive maintenance, digital twins, and blockchain documentation are reshaping operational efficiency and emission management.",
            color: "slate",
          },
        ],
      },
    },
    {
      section_type: "callout",
      content: {
        type: "info",
        title: "Financial System as Transition Accelerator",
        text: "Banks active in ship finance occupy a uniquely leveraged position. By conditioning credit pricing on CII ratings, transition plan quality, and alternative fuel compatibility, financial institutions can directly influence fleet renewal decisions and accelerate the adoption of low-emission vessels across the global fleet.",
      },
    },

    // ===== 6. DECARBONIZATION TECHNOLOGIES =====
    {
      section_id: "decarbonization",
      section_type: "heading",
      title: "Decarbonization Technologies",
      content: { text: "Decarbonization Technologies" },
    },
    {
      section_type: "paragraph",
      content: {
        text: "Achieving net-zero emissions in the maritime sector requires a combination of **currently available technologies** \u2014 which can deliver incremental but material emission reductions \u2014 and **emerging breakthrough solutions** that promise transformational change. No single technology will be sufficient; a **layered, vessel-type-calibrated approach** is required.",
      },
    },
    {
      section_type: "card_grid",
      content: {
        columns: 1,
        cards: [
          {
            icon: "Flame",
            title: "Alternative Fuels \u2014 LNG",
            description:
              "Most commercially mature option. Reduces SOx, NOx, and particulate matter substantially; modest CO\u2082 reduction. Key risk: methane slip (unburned CH\u2084 escaping to atmosphere), which has high global warming potential and partially offsets climate gains.",
            color: "blue",
          },
          {
            icon: "Beaker",
            title: "Alternative Fuels \u2014 Methanol",
            description:
              "Growing adoption (Maersk, CMA CGM). Lower energy density than HFO but compatible with existing port infrastructure. Green methanol (from renewable hydrogen + captured CO\u2082) offers near-zero lifecycle emissions. Dual-fuel retrofit feasible on many vessel types.",
            color: "emerald",
          },
          {
            icon: "AlertTriangle",
            title: "Alternative Fuels \u2014 Ammonia",
            description:
              "Carbon-free combustion. High energy density. Significant challenges: toxicity, corrosiveness, NOx formation during combustion, and near-complete absence of bunkering infrastructure. Environmental and safety risk of spills in marine environments requires stringent protocols.",
            color: "amber",
          },
          {
            icon: "Zap",
            title: "Alternative Fuels \u2014 Green Hydrogen",
            description:
              "Zero-emission combustion. Produced from renewable electricity. Storage and transport challenges (low density, cryogenic or high-pressure systems). Requires massive green hydrogen production scale-up. Best-suited for fuel cell propulsion on smaller vessels or short-sea routes.",
            color: "cyan",
          },
          {
            icon: "Wind",
            title: "Wind-Assisted Propulsion Systems (WAPS)",
            description:
              "Flettner rotors, rigid sails, and traction kites. Can reduce fuel consumption by up to 20% on favourable ocean routes (Hoffmeister et al., 2025). Commercially deployable on bulk carriers, tankers, and general cargo vessels. Compatible with all fuel types as a fuel-saving overlay.",
            color: "sky",
          },
          {
            icon: "Gauge",
            title: "Energy Efficiency Technologies",
            description:
              "Air lubrication systems (5\u201310% fuel reduction per DNV GL, 2020); hull hydrodynamic optimization; anti-biofouling coatings; high-efficiency propellers; waste heat recovery; slow steaming strategies. Low-cost, near-term options applicable across existing fleet.",
            color: "green",
          },
          {
            icon: "Battery",
            title: "Hybrid and Electric Propulsion",
            description:
              "Battery-diesel hybrid systems effective for short-sea shipping, ferries, and port operations. Full electric vessels limited by battery energy density for ocean-going use. Fuel cells (PEMFC and SOFC) offer high-efficiency zero-emission propulsion \u2014 SOFC compatible with LNG, methanol, and ammonia.",
            color: "purple",
          },
          {
            icon: "Cpu",
            title: "Digitalization and Smart Operations",
            description:
              "Real-time emission monitoring; predictive route optimization; digital twins; CFD hull simulations; AI-powered energy management. Enable significant operational efficiency gains across all vessel types without hardware investment.",
            color: "slate",
          },
        ],
      },
    },
    {
      section_type: "callout",
      content: {
        type: "tip",
        title: "Technology Readiness by Vessel Type",
        text: "LNG and methanol retrofits are most viable for container ships and large tankers. Wind-assisted propulsion delivers the greatest fuel savings on bulk carriers and tankers on fixed trade routes. Short-sea ferries and Ro-Pax vessels are best candidates for hybrid and full electric propulsion. Ammonia and hydrogen remain pre-commercial for ocean-going vessels.",
      },
    },

    // ===== 7. ENVIRONMENTAL IMPACTS =====
    {
      section_id: "impacts",
      section_type: "heading",
      title: "Environmental Impacts",
      content: { text: "Environmental Impacts" },
    },
    {
      section_type: "paragraph",
      content: {
        text: "The environmental footprint of maritime shipping extends **well beyond its direct greenhouse gas emissions**. The sector\u2019s scale, geographic reach, and operational intensity generate a broad range of **environmental impacts on atmosphere, ocean, and marine ecosystems**.",
      },
    },
    {
      section_type: "list",
      content: {
        listType: "arrow",
        items: [
          "GHG emissions: ~2\u20133% of global CO\u2082; CH\u2084 emissions from LNG shipping more than doubled between 2018 and 2023",
          "Air pollution: SOx, NOx, and black carbon emissions affect human health in port cities and coastal regions",
          "Oil spill and chemical leak risk: Tanker accidents cause severe and long-lasting marine ecosystem damage",
          "Ballast water discharge: Transfers invasive marine species between ecosystems, disrupting biodiversity",
          "Biofouling: Transfer of non-native organisms on hull surfaces to new marine environments",
          "Underwater noise pollution: Engine and propeller noise disrupts cetacean communication, navigation, and feeding",
          "Seabed disturbance: Anchor chains and bottom trawling damage benthic ecosystems; 27% of European coastal seabed disturbed, 5% severely damaged (EMSA, 2025)",
          "Graywater and sewage discharge: 40% increase in graywater releases from EU-flagged vessels between 2014 and 2023 (EMSA, 2025)",
          "Collision risk with marine wildlife: Vessel traffic in Natura 2000 protected areas increased collision risk with cetaceans and sea turtles from 2017 to 2022",
        ],
      },
    },

    // ===== 8. REGULATORY FRAMEWORK =====
    {
      section_id: "eu-policies",
      section_type: "heading",
      title: "Regulatory Framework",
      content: { text: "Regulatory Framework" },
    },
    {
      section_type: "paragraph",
      content: {
        text: "The maritime sector is subject to a **layered and rapidly tightening regulatory architecture** spanning international, European, and national levels. For banks, understanding this framework is essential for assessing **counterparty transition vulnerability**, identifying **regulatory lock-in risk** in financed assets, and calibrating credit pricing to forward-looking compliance trajectories.",
      },
    },
    {
      section_type: "card_grid",
      content: {
        columns: 2,
        cards: [
          {
            icon: "Shield",
            title: "MARPOL 73/78 Convention",
            description:
              "Foundational international treaty on marine pollution prevention. Regulates oil, chemicals, sewage, garbage, and air emissions from ships. Annex VI governs air pollution and GHG performance standards.",
            color: "blue",
          },
          {
            icon: "Gauge",
            title: "IMO Energy Efficiency Regulations (EEDI / EEXI / CII)",
            description:
              "EEDI: design efficiency standard for newbuilds (from 2013). EEXI: one-time baseline efficiency check for existing ships over 5,000 GT (from January 2023). CII: annual operational carbon intensity rating (A\u2013E), with mandatory Corrective Action Plans for D/E-rated vessels. Progressive tightening through 2030.",
            color: "emerald",
          },
          {
            icon: "Target",
            title: "IMO 2023 GHG Strategy",
            description:
              "Targets: net-zero GHG by 2050; 20\u201330% reduction by 2030; 70\u201380% reduction by 2040 (vs. 2008). Indicative checkpoints established at MEPC 80. Basis for all subsequent national and regional implementing legislation.",
            color: "purple",
          },
          {
            icon: "Scale",
            title: "IMO Net-Zero Framework (MEPC 83, 2025)",
            description:
              "Preliminary approval April 2025; formal adoption October 2025; entry into force 2027. Two pillars: (1) fuel carbon intensity standard; (2) global GHG economic pricing mechanism. Applies to vessels over 5,000 GT (approx. 85% of sector emissions).",
            color: "amber",
          },
          {
            icon: "Banknote",
            title: "EU Emissions Trading System \u2014 Shipping (from 2024)",
            description:
              "Ships above 5,000 GT must purchase ETS allowances for: 100% of intra-EU emissions; 50% of extra-EU voyage emissions. Phase-in: 40% of required allowances in 2024, rising to 100% by 2026. MRV Regulation (EU) 2015/757 provides the emission reporting baseline.",
            color: "red",
          },
          {
            icon: "Fuel",
            title: "FuelEU Maritime (from January 2025)",
            description:
              "Imposes progressively stricter GHG intensity limits on maritime fuels. Incentivizes adoption of bio-LNG, green methanol, hydrogen, and ammonia. Penalizes vessels unable to meet targets; rewards early adopters through a pooling mechanism.",
            color: "cyan",
          },
          {
            icon: "Globe",
            title: "Carbon Border Adjustment Mechanism (CBAM \u2014 from 2026)",
            description:
              "Applies carbon pricing to emissions-intensive goods imported into the EU. Impacts maritime transport of carbon-intensive cargo. Omnibus Regulation (proposed February 2025) introduces de minimis threshold and aligns CBAM with ETS methodology.",
            color: "orange",
          },
          {
            icon: "MapPin",
            title: "Emission Control Areas (ECAs)",
            description:
              "Designated sea areas (Baltic Sea, North Sea, English Channel, US/Canadian coastal waters, US Caribbean) where sulfur content in marine fuel is capped at 0.10% \u2014 well below the global 0.50% IMO 2020 standard. Expansion of ECA coverage is ongoing.",
            color: "slate",
          },
        ],
      },
    },

    // ===== 9. EU TAXONOMY CRITERIA =====
    {
      section_id: "eu-taxonomy",
      section_type: "heading",
      title: "EU Taxonomy Criteria",
      content: { text: "EU Taxonomy Criteria" },
    },
    {
      section_type: "paragraph",
      content: {
        text: "The EU Taxonomy Regulation (EU) 2020/852 classifies water transport activities under **NACE codes H50.1 and H50.2**. For a shipping activity to be considered sustainable under the Climate Change Mitigation objective, it must meet specific technical screening criteria relating to **CO\u2082 emission intensity, compliance with IMO efficiency standards, and fuel type**. The Taxonomy is a critical lever for determining a bank\u2019s **Green Asset Ratio (GAR)** and its access to taxonomy-aligned financing instruments.",
      },
    },

    {
      section_type: "heading",
      title: "Climate Mitigation \u2014 Substantial Contribution Criteria",
      content: { text: "Climate Mitigation \u2014 Substantial Contribution Criteria" },
    },
    {
      section_type: "paragraph",
      content: {
        text: "For vessels to qualify under the EU Taxonomy for Climate Change Mitigation, activities must demonstrate compliance with the following:",
      },
    },
    {
      section_type: "list",
      content: {
        listType: "check",
        items: [
          "New vessels: Carbon intensity at or below 50% of the EEDI Phase 3 reference line for the relevant ship type and size category \u2014 equivalent to a \u201cbest in class\u201d designation.",
          "Existing vessels: Compliance with the Energy Efficiency Existing Ship Index (EEXI) at the Phase 3 equivalent threshold.",
          "Fuel criteria: Progressive use of zero- or low-carbon fuels aligned with the FuelEU Maritime GHG intensity trajectory.",
          "CII rating: A or B rating under the IMO Carbon Intensity Indicator system.",
        ],
      },
    },

    {
      section_type: "heading",
      title: "Do No Significant Harm (DNSH) Criteria",
      content: { text: "Do No Significant Harm (DNSH) Criteria" },
    },
    {
      section_type: "list",
      content: {
        listType: "check",
        items: [
          "Climate adaptation: Physical climate risk assessment per Appendix A; vessel routing protocols updated for extreme weather scenarios",
          "Water and marine resources: Ballast water management systems compliant with IMO Ballast Water Management Convention; no illegal discharges",
          "Circular economy: Ship recycling plans compliant with EU Ship Recycling Regulation (EU) 517/2014 and Hong Kong Convention standards",
          "Pollution prevention: Compliance with MARPOL Annex VI emission limits; no use of prohibited substances; scrubber washwater discharge management",
          "Biodiversity: Operational protocols in Particularly Sensitive Sea Areas (PSSAs) and Natura 2000 maritime zones; anti-biofouling systems compliant with AFS Convention",
        ],
      },
    },

    {
      section_type: "heading",
      title: "Taxonomy Limitations in Maritime \u2014 Critical Assessment",
      content: { text: "Taxonomy Limitations in Maritime \u2014 Critical Assessment" },
    },
    {
      section_type: "paragraph",
      content: {
        text: "Despite the ambition of the framework, the EU Taxonomy presents **structural weaknesses for maritime applications**. The regulation lacks sufficient granularity for vessel sub-categories: guidance on hybrid propulsion, bio-based fuel lifecycle assessment, retrofit pathway eligibility, and vessel lifecycle management is incomplete. The **DNSH principle** \u2014 requiring an activity not to cause significant harm to any other environmental objective \u2014 is conceptually sound but practically ambivalent in the maritime context, where decarbonization technologies (e.g., biofuels, LNG) may generate **indirect biodiversity, land-use, or methane emission trade-offs**. These gaps reduce the Taxonomy\u2019s operational utility for banks assessing individual vessel-level Taxonomy alignment, and may produce heterogeneous GAR calculations across institutions.",
      },
    },
    {
      section_type: "callout",
      content: {
        type: "info",
        title: "Minimum Safeguards",
        text: "Taxonomy-aligned shipping activities must comply with OECD Guidelines for Multinational Enterprises, ILO Maritime Labour Convention (MLC 2006), and UN Guiding Principles on Business and Human Rights, covering crew welfare, labour standards, and responsible business conduct.",
      },
    },

    // ===== 10. TRANSITION PLAN CREDIBILITY =====
    {
      section_id: "transition-plans",
      section_type: "heading",
      title: "Transition Plan Credibility",
      content: { text: "Transition Plan Credibility" },
    },

    {
      section_type: "heading",
      title: "The Poseidon Principles \u2014 Credit Portfolio Alignment",
      content: {
        text: "The Poseidon Principles \u2014 Credit Portfolio Alignment",
      },
    },
    {
      section_type: "paragraph",
      content: {
        text: "The **Poseidon Principles**, launched in 2019 and now joined by **over 30 leading ship finance banks**, provide the primary sectoral framework for aligning bank credit portfolios with IMO decarbonization targets. The framework operates through the **Annual Efficiency Ratio (AER)** \u2014 carbon intensity per tonne of cargo per nautical mile \u2014 calculated from mandatory IMO Data Collection System (DCS) data. Banks aggregate the AER across their financed fleet and compare it to the IMO reference trajectory, generating a **climate alignment score**. A negative deviation indicates outperformance; a positive value signals underperformance relative to the Paris Agreement pathway. The Poseidon Principles create a **direct link between vessel-level environmental performance and credit policy**: compliant fleets attract preferential financing; non-compliant fleets face higher capital requirements or portfolio exclusion.",
      },
    },

    {
      section_type: "heading",
      title: "Effectiveness Criteria for Shipowner Transition Plans",
      content: { text: "Effectiveness Criteria for Shipowner Transition Plans" },
    },
    {
      section_type: "list",
      content: {
        listType: "check",
        items: [
          "Clear GHG emission reduction targets covering Scope 1 and 3 (including upstream fuel chain and cargo-related emissions), aligned to IMO 2023 GHG Strategy milestones",
          "Fleet-level CII improvement trajectory with vessel-by-vessel breakdowns and annual performance targets",
          "Fuel switching roadmap: timeline for phasing out HFO/MDO, phasing in alternative fuels with infrastructure dependency analysis",
          "Capital expenditure commitment: credible capex plan for fleet renewal, retrofit programmes, and dual-fuel upgrades",
          "Governance integration: transition plan embedded in board-level decision-making, executive remuneration, and ESRS E1 reporting under CSRD",
          "Independent verification and third-party assurance of emission data and milestone progress",
        ],
      },
    },

    {
      section_type: "heading",
      title: "Specificity Requirements",
      content: { text: "Specificity Requirements" },
    },
    {
      section_type: "list",
      content: {
        listType: "check",
        items: [
          "Disclosure of full fleet inventory with vessel-level CII ratings, EEXI compliance status, and fuel type",
          "Year of construction and estimated remaining economic life for each material vessel",
          "Explicit plan for phasing out D/E-rated vessels with decommissioning or conversion timelines",
          "Alternative fuel compatibility assessment by vessel type and trade route",
          "Identification of bunkering infrastructure dependencies and transition risk associated with fuel availability gaps",
          "Scope 3 emission quantification: upstream fuel lifecycle (well-to-wake) and downstream cargo emissions",
          "Just Transition provisions: crew retraining, skills development, and social impact of fleet restructuring",
        ],
      },
    },

    {
      section_type: "heading",
      title: "Key Actions for Credible Maritime Transition Plans (TPT-based)",
      content: {
        text: "Key Actions for Credible Maritime Transition Plans (TPT-based)",
      },
    },
    {
      section_type: "list",
      content: {
        listType: "arrow",
        items: [
          "Adopt or commit to the Poseidon Principles and publish annual AER alignment scores",
          "Implement vessel CII improvement plans, including speed optimization, hull maintenance, and fuel management",
          "Commission EEXI compliance assessments for all vessels over 5,000 GT and execute Engine Power Limitation (EPL) where required",
          "Develop a fleet renewal schedule prioritizing dual-fuel newbuilds and eligible retrofit candidates",
          "Integrate FuelEU Maritime compliance planning into fuel procurement and charter party agreements",
          "Establish a green shipping corridor strategy aligned with port decarbonization infrastructure",
          "Report transition plan progress against time-bound milestones in annual ESRS E1 disclosures",
        ],
      },
    },

    // ===== 11. GHG EMISSIONS METRICS =====
    {
      section_id: "ghg-metrics",
      section_type: "heading",
      title: "GHG Emissions Metrics",
      content: { text: "GHG Emissions Metrics" },
    },
    {
      section_type: "paragraph",
      content: {
        text: "Assessing the climate alignment and transition risk profile of a shipping counterparty requires a set of **validated, vessel-level GHG metrics**. These metrics must be capable of capturing both **static design efficiency and dynamic operational performance**, and must be integrable into the bank\u2019s credit risk assessment, **ICAAP inputs, and Pillar 3 ESG disclosures**.",
      },
    },
    {
      section_type: "list",
      content: {
        listType: "check",
        items: [
          "CII (Carbon Intensity Indicator): Annual operational GHG intensity rating (A\u2013E) per IMO MEPC.354(78). Expressed in grams of CO\u2082 equivalent per capacity-mile. Directly reflects regulatory compliance status; D/E ratings trigger mandatory Corrective Action Plan.",
          "EEXI (Energy Efficiency Existing Ship Index): Design-based energy efficiency index for existing vessels over 5,000 GT. One-time compliance assessment; sets minimum efficiency baseline. Non-compliant vessels require Engine Power Limitation (EPL) or equivalent corrective measures.",
          "EEDI (Energy Efficiency Design Index): Design efficiency standard for newbuilds (from 2013). Sets maximum allowable CO\u2082 per tonne-nautical mile for new vessels. Progressive Phase 0\u20133 tightening through 2025. Key indicator for assessing the technological generation of a vessel.",
          "AER (Annual Efficiency Ratio): Poseidon Principles\u2019 core metric. Carbon intensity expressed as grams of CO\u2082 per deadweight tonne-nautical mile, calculated from IMO DCS mandatory data. Enables portfolio-level climate alignment scoring against IMO trajectory.",
          "gCO\u2082/tonne-mile: Generic carbon intensity benchmark enabling cross-fleet and cross-modal transport comparisons. Used in well-to-wake lifecycle assessments. Key input for Scope 3 emission calculations in financed emission reporting.",
          "Percentage of Alternative Fuel Used: Share of total fuel consumption from low- or zero-carbon sources (LNG, methanol, ammonia, hydrogen, biofuels, e-fuels). Emerging proxy for climate alignment score and access to sustainability-linked finance instruments. Well-to-wake carbon intensity of the specific fuel used must be validated to avoid methane slip distortions.",
          "SFC (Specific Fuel Consumption): Fuel consumed per kWh of useful engine output (g/kWh). Key indicator of engine efficiency and fuel economy. Two-stroke engines: 170\u2013190 g/kWh; four-stroke engines: 190\u2013220 g/kWh. Useful for retrofit ROI calculations and fuel switching assessments.",
          "Scope 3 Financed Emissions (PCAF Standard): Absolute and intensity-based financed emissions attributable to ship finance portfolios. Required under PCAF Global GHG Accounting Standard (Third Edition, December 2025) and EBA Pillar 3 ITS on ESG disclosures. Covers well-to-wake fuel lifecycle and downstream freight emissions.",
        ],
      },
    },
    {
      section_type: "callout",
      content: {
        type: "warning",
        title: "Carbon Lock-In in Shipping",
        text: "A vessel powered by conventional HFO with a 20+ year remaining operational life represents a long-duration carbon lock-in risk. At current carbon prices and regulatory trajectories, the residual emissions embedded in such assets may represent a material and underpriced credit risk. Banks should model vessel-level locked-in emissions against CII regulatory tightening schedules when assessing loan tenors and covenant structures.",
      },
    },

    {
      section_type: "heading",
      title: "SBTi and Poseidon Principles Alignment Requirements",
      content: {
        text: "SBTi and Poseidon Principles Alignment Requirements",
      },
    },
    {
      section_type: "paragraph",
      content: {
        text: "Shipping companies seeking to set science-based targets under the **SBTi Financial Institutions Net-Zero Standard** (July 2025) must align their fleet-level emission reduction pathways with **IMO\u2019s 1.5\u00b0C-compatible scenarios**. Banks applying the Poseidon Principles are required to:",
      },
    },
    {
      section_type: "list",
      content: {
        listType: "number",
        items: [
          "Report annual AER for each financed vessel using IMO DCS verified data",
          "Calculate portfolio-level climate alignment score relative to IMO reference decarbonization trajectory",
          "Disclose alignment scores publicly in annual reports and ESG disclosures",
          "Integrate alignment scores into credit origination criteria and covenant frameworks",
          "Apply progressive financing restrictions or pricing adjustments to vessels with persistent D/E CII ratings or negative AER trajectories exceeding defined thresholds",
        ],
      },
    },
  ],
  sources: [
    {
      source_number: 1,
      title: "IMO 2023 GHG Strategy",
      author: "International Maritime Organization",
      year: "2023",
    },
    {
      source_number: 2,
      title: "MEPC 83 \u2014 IMO Net-Zero Framework",
      author: "International Maritime Organization",
      year: "2025",
    },
    {
      source_number: 3,
      title: "EMSA Maritime Transport Statistics Report",
      author: "European Maritime Safety Agency",
      year: "2025",
    },
    {
      source_number: 4,
      title: "FuelEU Maritime Regulation (EU) 2023/1805",
      author: "European Union",
      year: "2023",
    },
    {
      source_number: 5,
      title: "EU ETS Extension to Shipping \u2014 Directive 2023/959",
      author: "European Union",
      year: "2023",
    },
    {
      source_number: 6,
      title: "Poseidon Principles Framework",
      author: "Poseidon Principles Secretariat",
      year: "2019",
    },
    {
      source_number: 7,
      title: "EU Taxonomy Regulation (EU) 2020/852 \u2014 Delegated Acts",
      author: "European Union",
      year: "2020\u20132023",
    },
    {
      source_number: 8,
      title:
        "Transition in the Shipping Sector: Bank\u2019s Assessment of Alternative Fuels",
      author: "Loparco, V. \u2014 LUISS University",
      year: "2025",
    },
    {
      source_number: 9,
      title: "BIMCO Shipping KPI Standard",
      author: "Baltic and International Maritime Council",
      year: "2018",
    },
    {
      source_number: 10,
      title:
        "Alternative Fuel Selection Framework toward Decarbonizing Maritime Deep-Sea Shipping",
      author: "Moshiul, Mohammad & Hira \u2014 Sustainability",
      year: "2023",
    },
    {
      source_number: 11,
      title:
        "Wind-Assisted Propulsion Systems (WAPS): How WAPS Can Help to Comply with GHG Regulations",
      author: "Hoffmeister et al.",
      year: "2025",
    },
    {
      source_number: 12,
      title:
        "A Prompt Decarbonization Pathway for Shipping: Green Hydrogen, Ammonia, and Methanol",
      author: "Shi, Zhu, Feng, Yang & Xia \u2014 Atmosphere",
      year: "2023",
    },
    {
      source_number: 13,
      title:
        "Carbon-related credit concentration and banking systemic risk",
      author: "Research in International Business and Finance \u2014 ScienceDirect",
      year: "2025",
    },
  ],
};

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { adminClient, error: authError } = await verifyAdmin(
      req,
      corsHeaders
    );
    if (authError) return authError;

    const results: string[] = [];

    // Upsert the page
    const { data: pageData, error: pageError } = await adminClient
      .from("pages")
      .upsert(
        {
          slug: page.slug,
          title: page.title,
          description: page.description,
          tags: page.tags,
          last_updated: page.last_updated,
        },
        { onConflict: "slug" }
      )
      .select("id")
      .single();

    if (pageError || !pageData) {
      return new Response(
        JSON.stringify({
          error: `Failed to upsert page: ${pageError?.message}`,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const pageId = pageData.id;

    // Delete existing sections and sources for this page
    await adminClient.from("page_sections").delete().eq("page_id", pageId);
    await adminClient.from("page_sources").delete().eq("page_id", pageId);

    // Insert sections
    const sectionRows = page.sections.map((s, i) => ({
      page_id: pageId,
      section_id: s.section_id || `section-${i}`,
      section_type: s.section_type,
      title: s.title || "",
      content: s.content,
      sort_order: i,
    }));

    const { error: secError } = await adminClient
      .from("page_sections")
      .insert(sectionRows);

    if (secError) {
      results.push(`FAIL sections: ${secError.message}`);
    } else {
      results.push(`OK: ${page.sections.length} sections inserted`);
    }

    // Insert sources
    if (page.sources.length > 0) {
      const sourceRows = page.sources.map((s) => ({
        page_id: pageId,
        source_number: s.source_number,
        title: s.title,
        author: s.author || null,
        year: s.year || null,
        url: null,
      }));

      const { error: srcError } = await adminClient
        .from("page_sources")
        .insert(sourceRows);

      if (srcError) {
        results.push(`FAIL sources: ${srcError.message}`);
      } else {
        results.push(`OK: ${page.sources.length} sources inserted`);
      }
    }

    return new Response(
      JSON.stringify({ success: true, results }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
