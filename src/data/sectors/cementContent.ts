// Complete Cement Sector Content - All data from cement.txt

export const cementSections = {
  introduction: {
    title: "Introduction",
    content: `Cement, a fundamental building material, plays a significant role in modern society. Its importance cannot be understated, especially considering its various applications in construction and infrastructure development. However, it is also a **major source of CO2 emissions**, contributing approximately **8% of total global CO2 emissions**.

As global demand for cement continues to grow, spurred by emerging markets and increasing urbanisation, the challenge lies in maintaining production levels while also reducing CO2 emissions. This is a complex issue, requiring a balanced approach to ensure that the need for cement is met without compromising environmental sustainability.

Several key strategies have been identified to help cut emissions in cement production:
- Improving energy efficiency during the production process
- Switching to lower-carbon fuels
- Promoting material efficiency by reducing the clinker-to-cement ratio
- Advancing innovative near-zero emission production routes
- Implementing carbon capture and storage (CCS) technologies

In a scenario where net zero emissions are achieved by 2050, cement production is expected to level off. Material efficiency strategies and carbon capture and storage (CCS) are likely to play critical roles in this process.`
  },

  cementMarket: {
    title: "Cement Market",
    content: `The global cement market has been experiencing significant growth, driven by various factors across different regions.

**Market Value:**
- 2023: USD 383.02 billion
- Projected 2032: USD 614.88 billion
- CAGR (2024-2032): 5.4%

**Volume:**
- 2024: 4.14 billion tons
- Projected 2029: 5.88 billion tons
- CAGR: 7.23%

**Regional Distribution:**
- Asia-Pacific accounts for the largest share (USD 273.32 billion in 2022)
- China is the dominant producer and consumer
- Growth driven by Southeast Asia, China, and India
- Middle East and Africa showing increasing infrastructure activities

**Key Growth Drivers:**
- Rising demand from construction sector
- Increasing infrastructural projects
- Abundance of raw materials like fly ash
- Urbanization in developing nations

**Challenges:**
- Government regulations on carbon emissions
- Rising energy costs
- Competition from alternative materials`
  },

  cementTypes: {
    title: "Cement Types",
    types: [
      {
        name: "Ordinary Portland Cement (OPC)",
        description: "Most common type, suitable for residential buildings, bridges, and pavements. Production is highly energy-intensive, requiring temperatures up to 1450°C.",
        applications: "General construction"
      },
      {
        name: "Blended Cement",
        description: "Mixture of Portland cement with fly ash, silica fume, or slag. Enhances durability and reduces environmental impact.",
        applications: "Durable structures, sustainable construction"
      },
      {
        name: "High Strength Portland Cement",
        description: "Formulated to achieve higher strength at early ages.",
        applications: "High-load structures"
      },
      {
        name: "Sulfate Resisting Cement (SRC)",
        description: "Designed to withstand sulfate attacks.",
        applications: "Concrete exposed to high sulfate soil or water"
      },
      {
        name: "Low Heat Cement",
        description: "Generates less heat during hydration, suitable for mass concrete works.",
        applications: "Dams, thick slabs, large foundations"
      },
      {
        name: "Rapid Hardening Cement",
        description: "Achieves high strength in early stages after casting.",
        applications: "Fast-paced construction, precast elements"
      },
      {
        name: "White Cement",
        description: "Characterized by white color for aesthetic purposes.",
        applications: "Architectural projects, tiles, decorative elements"
      },
      {
        name: "Hydraulic Cement",
        description: "Sets and hardens by chemical reaction with water, remains strong underwater.",
        applications: "Underwater construction, water-tight structures"
      },
      {
        name: "Pozzolanic Cement",
        description: "Contains pozzolanic materials that enhance strength and durability.",
        applications: "Marine structures, chemical resistance applications"
      },
      {
        name: "Masonry Cement",
        description: "Includes additives to improve workability and adhesion.",
        applications: "Masonry work, bricklaying"
      },
      {
        name: "Oil Well Cement",
        description: "Used in drilling operations to seal wells.",
        applications: "Oil and gas industry"
      }
    ]
  },

  manufacturingProcess: {
    title: "Cement Manufacturing Process",
    stages: [
      {
        stage: 1,
        name: "Mining of Raw Materials",
        description: "Primary raw materials include limestone, clay, shale, and silica extracted from quarries and mines."
      },
      {
        stage: 2,
        name: "Crushing and Prehomogenisation",
        description: "Raw materials are crushed and blended to achieve uniform composition."
      },
      {
        stage: 3,
        name: "Raw Meal Preparation",
        description: "Crushed and homogenised materials are processed into a fine powder."
      },
      {
        stage: 4,
        name: "Clinker Production",
        description: "Raw meal is heated to high temperatures (up to 1450°C) in a kiln through a process called clinkerisation."
      },
      {
        stage: 5,
        name: "Grinding of Clinker",
        description: "Clinker is ground into a fine powder to produce cement."
      },
      {
        stage: 6,
        name: "Packaging and Shipment",
        description: "Final cement product is packaged for distribution."
      }
    ],
    emissionsSources: `The CO2 emissions result not only from the combustion of fossil fuels but also from the chemical process of limestone decarbonisation (calcination), which releases CO2 as a byproduct. This process emission accounts for approximately 60% of total cement emissions.`
  },

  driversOfChange: {
    title: "Drivers of Change",
    introduction: "4 main drivers of change apply to hard to abate sectors: economy, technology, society and environment. How a cement producer or financial institution is capable of anticipating these drivers and responding effectively defines organizational success.",
    mainDrivers: [
      {
        name: "Global Climate Goals and Target Setting",
        description: "Cement production accounts for about 8% of global CO2 emissions. The industry is under pressure to transition to net-zero by 2050. Adoption of science-based targets by major players will lead to a shift in the industry ecosystem globally."
      },
      {
        name: "Clinker Substitution",
        description: "Increasing use of alternative materials such as fly ash, calcined clays, GGBFS, and ground limestone to partially replace clinker. As traditional SCMs become scarcer, new SCMs like calcined clay, limestone, and recycled concrete gain prominence."
      },
      {
        name: "Regulatory Environment",
        description: "Government policies including carbon pricing mechanisms and incentives for net-zero production technologies. Stricter environmental regulations increase pressure to reduce emissions and adopt cleaner production methods."
      },
      {
        name: "Carbon Border Adjustment Mechanism (CBAM)",
        description: "Ensures imported cement products conform to same carbon pricing standards as domestic production. Prevents carbon leakage and levels playing field by imposing carbon pricing on imports."
      },
      {
        name: "Market Demand and Competition",
        description: "Demand for sustainable and low-carbon cement products acts as catalyst for change. Producers must embrace sustainable practices to meet evolving customer expectations."
      },
      {
        name: "Impact of Public Procurement",
        description: "IDDI obtaining commitments from public sector to procure low-emission cement. 30% share of very low-emission cement in public projects can save over 350 Mt CO2 annually."
      },
      {
        name: "Fossil Fuel Reduction and Alternative Fuels",
        description: "Reducing reliance on fossil fuels through co-processing and waste-derived fuels. Adoption of low-carbon fuels and potential hydrogen utilization for lowering emissions."
      },
      {
        name: "Best Available Techniques (BAT) Standards",
        description: "Implementation and enforcement of BAT standards encourage most environmentally friendly production methods. Sets benchmarks for environmental performance and drives innovation."
      }
    ],
    investorInitiatives: {
      title: "Investor-Led Sustainability Initiatives",
      targets: [
        "2030 target for % of cement procured with emissions intensity at or below ConcreteZero benchmark",
        "2030 target for average emissions intensity for total cement portfolio",
        "2030 target for increasing proportion of suppliers with verified 2050 net zero commitments",
        "Commitment to 100% net zero emissions cement by 2050"
      ],
      cementZeroRequirement: "Companies joining CementZero must publicly commit to purchasing and utilizing at least 50% low emission cement by 2030"
    }
  },

  decarbonizationTechnologies: {
    title: "Decarbonization Technologies",
    content: "Net-zero in the cement industry necessitates adoption of breakthrough manufacturing technologies requiring high capital investments. Solutions such as carbon capture and storage present opportunities but might not be entirely within immediate scope. Interim utilization and efficiency technologies can optimize production processes to minimize emissions based on best available technologies.",
    technologies: [
      {
        name: "Energy and Operational Efficiency",
        description: "Technological advancements focused on enhancing thermal energy management through optimized heat exchange processes in cement kilns. Achieved through state-of-the-art preheater and precalciner technologies that improve thermal efficiency by recovering heat from kiln exhaust gases.",
        status: "Commercial",
        potential: "10-20% reduction",
        details: {
          modernPlantRequirement: "~3.3 GJ thermal energy per ton of clinker (approximately twice thermodynamic minimum)",
          historicalProgress: "Global average thermal intensity decreased from 3.75 GJ/t (2000) to 3.5 GJ/t (2014), ~0.5% per year",
          digitalization: "Integration of IoT devices, AI, and machine learning algorithms enables real-time monitoring and optimization of production parameters"
        }
      },
      {
        name: "Waste Heat Recovery (WHR)",
        description: "Harnesses thermal energy from exhaust gases produced during clinker production. Captured heat transformed into electrical energy via steam turbines or Organic Rankine Cycle (ORC) systems.",
        status: "Commercial",
        potential: "5% improvement in fuel efficiency",
        details: {
          captureRate: "35-40% of heat losses from clinker cooling air stream and flue gas emissions",
          applications: "Power plant operations or feed into grid for additional revenue/cost savings",
          challenges: "High initial investment costs, efficiency contingent on specific plant characteristics (exhaust gas temperatures, volumes, layout)"
        }
      },
      {
        name: "Supplementary Cementitious Materials (SCMs)",
        description: "Materials used to partially replace cement, providing benefits in sustainability, performance, and cost-effectiveness. Includes fly ash, slag, silica fume, natural pozzolans, and calcined clay.",
        status: "Commercial",
        potential: "Up to 50% reduction",
        details: {
          emissionReduction: "For every ton of clinker replaced, CO2 emissions cut by approximately 0.8 ton",
          benefits: ["Enhanced concrete volume stability", "Improved strength development", "Resistance to shrinkage", "Better freezing/thawing resistance", "Improved fire resistance", "Reduced heat of hydration"],
          challenges: "Variability of supply and quality; fly ash availability tied to declining coal-fired power plants"
        }
      },
      {
        name: "Alternative Fuels",
        description: "Transition from conventional fossil fuels to biomass, waste-derived fuels, and hydrogen. Biomass derived from agricultural residues, wood chips, or algae offers renewable and carbon-neutral fuel option.",
        status: "Commercial/Pilot",
        potential: "20-40% reduction",
        details: {
          fuelTypes: ["Biomass (agricultural residues, wood chips, algae)", "Waste-derived fuels", "Hydrogen"],
          challenges: ["Variable physical/chemical properties requiring equipment adjustments", "Geographically dependent availability", "Infrastructure development needed for collection, processing, transport"],
          economicFactors: "Viability influenced by market prices, regulatory frameworks, carbon pricing mechanisms, and government subsidies"
        }
      },
      {
        name: "Carbon Capture and Storage (CCS)",
        description: "Capturing CO2 emissions at source, transporting to storage site (usually deep underground geological formations), preventing atmospheric release. Essential for addressing process emissions from calcination.",
        status: "Demonstration",
        potential: "Up to 90% capture",
        details: {
          technology: "Involves capture, transport, and secure geological storage",
          challenges: ["High costs for capture, transport, storage", "Technology still developing at required scale", "Geographically specific storage sites", "Long-distance CO2 transportation requirements"],
          potential: "Can achieve negative emissions when combined with bioenergy (BECCS)"
        }
      },
      {
        name: "Carbon Capture and Utilisation (CCU)",
        description: "Converting captured CO2 into chemicals, building materials, fuels, and other valuable products. Creates value from waste CO2.",
        status: "Pilot",
        potential: "Variable",
        details: {
          applications: ["Synthetic fuels", "Building materials", "Chemicals industry", "Food and beverage sector", "Plastics manufacture"],
          challenges: ["Energy-intensive conversion processes", "Need for developing markets for CO2-derived products"],
          examples: "Heidelberg Materials using BASF OASE® blue technology capturing ~70,000 tons CO2/year"
        }
      },
      {
        name: "Low-Carbon Cements and Novel Binders",
        description: "Development of geopolymer cements relying on industrial by-products (fly ash, slag) that don't require limestone calcination. Carbon-negative cements incorporate carbon capture directly into cement matrix.",
        status: "Research/Pilot",
        potential: "50-100% reduction",
        details: {
          geopolymerBenefits: ["Reduced CO2 emissions", "Enhanced durability", "Superior resistance to chemicals"],
          carbonNegative: "Sequesters more CO2 than emitted during production, transforming built environment into carbon sink",
          challenges: ["Scalability of production", "Availability of raw materials", "Adaptation of construction practices", "Long-term performance verification"]
        }
      },
      {
        name: "Innovations in Kiln Technology",
        description: "Research into alternative chemical compositions for clinker requiring lower calcination temperatures, potentially operating at up to 700°C lower than traditional methods.",
        status: "Research",
        potential: "Significant reduction",
        details: {
          focus: "Alternative fuels, more efficient thermal processes, fundamentally different chemical pathways",
          challenges: ["High capital costs", "Need for significant technical expertise", "Uncertainty about long-term durability of low-temperature clinkers"]
        }
      },
      {
        name: "Renewable Energy",
        description: "Shift towards renewable energy sources including direct solar thermal systems for process heat and procurement of renewable electricity for manufacturing operations.",
        status: "Commercial",
        potential: "Depends on grid",
        details: {
          options: ["On-site solar PV panels", "Wind turbines", "Power Purchase Agreements (PPAs) with renewable providers"],
          challenges: ["Intermittent nature of solar/wind requiring energy storage", "Initial transition costs (offset by long-term savings and regulatory incentives)"]
        }
      },
      {
        name: "Circular Economy and Material Recovery",
        description: "Adoption of circular economy principles including development of technologies for recycling concrete, recovering aggregates and cementitious materials from demolition waste.",
        status: "Developing",
        potential: "Significant contribution to sustainability",
        details: {
          strategies: ["Construction and demolition waste as raw materials", "Concrete recycling technologies", "Incorporating SCMs from industrial by-products"],
          challenges: ["Technological barriers to material recovery", "Regulatory hurdles", "Market acceptance of recycled materials"],
          standards: "Quality standards for recycled aggregates and incentivizing recycled content in construction"
        }
      }
    ],
    caseStudies: [
      {
        company: "HeidelbergCement (Lixhe plant, Belgium)",
        project: "LEILAC Project",
        description: "Advanced preheater and precalciner technologies for enhanced thermal efficiency. The plant employs kiln optimization strategies that recover heat from kiln exhaust gases, preheating raw meal before it enters the kiln. This reduces fuel consumption and decreases overall CO2 emissions.",
        keyFeatures: ["Preheater technology", "Precalciner systems", "Heat recovery optimization", "Reduced fuel consumption"]
      },
      {
        company: "Holcim (Lägerdorf plant, Germany)",
        project: "Carbon2Business",
        description: "Designed to capture more than 1.2 million tons of CO2 emissions annually using Oxyfuel technology (end-of-pipe solution). CO2 will be repurposed as industrial raw material. Target: net-zero cement production at Lägerdorf by 2029. Received substantial funding from EU Innovation Fund.",
        technology: "Oxyfuel technology substitutes combustion air with pure oxygen, yielding CO2-rich flue gas that can be cooled, purified, and liquefied for use in e-methanol production or plastics manufacture.",
        keyFeatures: ["1.2 million tons CO2 capture annually", "Oxyfuel end-of-pipe solution", "EU Innovation Fund support", "Net-zero by 2029 target"]
      },
      {
        company: "Buzzi Unicem (Vernasca, Italy)",
        project: "CLEANKER",
        description: "Innovative initiative funded by EU Horizon 2020 program, focusing on CO2 capture through advanced calcium looping (CaL) process. Involves construction and operation of CaL demonstration system within the cement plant.",
        keyFeatures: ["Calcium looping (CaL) process", "EU Horizon 2020 funding", "Demonstration system", "Advanced CO2 capture"]
      },
      {
        company: "Dalmia Cement (Murli Plant, India)",
        project: "WHR Systems",
        description: "Waste Heat Recovery systems designed to capture excess thermal energy during cement production, transforming it into electrical energy. Part of Dalmia Bharat's plan to expand capacity to 110-130 million tonnes per annum by 2031. Company has reduced carbon footprint by 22% over last decade.",
        target: "Carbon negative by 2040",
        keyFeatures: ["Waste Heat Recovery", "Thermal-to-electrical conversion", "22% carbon footprint reduction", "Carbon negative goal"]
      },
      {
        company: "Lafarge (Bath plant, Ontario, Canada)",
        project: "Cement 2020",
        description: "Pioneering initiative testing various types of biomass as renewable fuel alternatives to coal and petroleum coke. Goal to substitute up to 30% of traditional fossil fuels with alternative, lower-carbon options.",
        alternativeFuels: ["Hemp", "Sorghum", "Willow", "Switchgrass", "Oat hulls"],
        keyFeatures: ["Biomass fuel testing", "30% fossil fuel substitution target", "Multiple biomass types", "Lower-carbon alternatives"]
      },
      {
        company: "Heidelberg Materials (Germany)",
        project: "CCU with BASF OASE® blue technology",
        description: "Large-scale CCU facility in collaboration with Linde capturing approximately 70,000 tons of CO2 annually. CO2 destined for chemicals industry and food and beverage sectors.",
        keyFeatures: ["BASF OASE® blue technology", "70,000 tons CO2/year capture", "Linde collaboration", "Industrial CO2 utilization"]
      }
    ]
  },

  environmentalImpacts: {
    title: "Environmental Impacts",
    impacts: [
      {
        category: "Climate Change",
        description: "Cement production accounts for approximately 7-8% of global CO2 emissions. Average emissions per tonne of cement in EU: ~0.6 tCO2."
      },
      {
        category: "Waste and Groundwater Contamination",
        description: "Production generates overburden, tailings, clinker dust, kiln dust, and sludge. Heavy metals (Cd, Co, Cr, Pb, Ni) can contaminate soil and groundwater."
      },
      {
        category: "Water Use",
        description: "Production of one ton of cement requires approximately 0.35 ton of water. Water scarcity poses operational risks."
      },
      {
        category: "Air Pollution",
        description: "Emissions include volatile organic compounds (VOCs), particulate matter, NOx, SO2, and heavy metals."
      },
      {
        category: "Biodiversity Impact",
        description: "Quarrying operations can disrupt habitats. Accidental releases of dust and materials can impact local ecosystems."
      },
      {
        category: "Public Health",
        description: "PM2.5 exposure has caused approximately 2.9 million premature deaths globally (9% of total deaths). Heavy metals pose additional health risks."
      },
      {
        category: "Transportation Emissions",
        description: "Movement of raw materials and finished products contributes to CO2, NOx, and particulate matter emissions."
      },
      {
        category: "Concrete Waste",
        description: "Demolition and construction generate concrete debris requiring proper disposal or recycling."
      }
    ]
  },

  euPolicies: {
    title: "EU Policies",
    policies: [
      {
        name: "Industrial Emissions Directive (IED)",
        description: "Sets emission limits and Best Available Techniques (BAT) requirements for cement plants. Applies to clinker production >500 tonnes/day.",
        impact: "Requires integrated approach covering air, water, waste, energy efficiency"
      },
      {
        name: "Carbon Border Adjustment Mechanism (CBAM)",
        description: "Import levy on embedded carbon. Transitional phase since Oct 2023 (reporting). Financial obligations from 2026. Free allocation phasing out 2026-2034.",
        impact: "Addresses carbon leakage risk, levels playing field"
      },
      {
        name: "EU Emissions Trading System (EU ETS)",
        description: "Cap-and-trade system covering cement industry. Benchmark values adjusted to reflect technological progress.",
        impact: "Creates carbon price incentive for decarbonization"
      },
      {
        name: "EU Taxonomy Regulation",
        description: "Defines criteria for sustainable cement production. Key thresholds: Grey clinker ≤0.722 tCO2e/t; Cement from grey clinker ≤0.469 tCO2e/t.",
        impact: "Guides sustainable finance and investment"
      },
      {
        name: "Construction Products Regulation (CPR)",
        description: "Standards for construction materials. Under review to develop environmental performance requirements.",
        impact: "Sets product standards and environmental footprint requirements"
      },
      {
        name: "Circular Economy Action Plan (CEAP)",
        description: "Promotes circularity in production, including use of recycled materials and industrial symbiosis.",
        impact: "Encourages waste reduction and material efficiency"
      },
      {
        name: "Waste Shipment Regulation",
        description: "Controls export of waste. Restrictions on exports to non-OECD countries. Relevant for waste-derived fuels.",
        impact: "Affects alternative fuel sourcing"
      },
      {
        name: "Renovation Wave Initiative",
        description: "Programme to renovate 35 million buildings by 2030. Aims to double annual renovation rate from 1% to 2%.",
        impact: "Drives demand for sustainable building materials"
      }
    ]
  },

  transitionPlanCredibility: {
    title: "Transition Plan Credibility",
    effectiveness: {
      title: "Effectiveness of Transition Plans",
      criteria: [
        {
          name: "Clear and Ambitious Targets",
          description: "Establish concrete targets for GHG emission reduction including milestones for lowering clinker-to-cement ratio and increasing SCM use"
        },
        {
          name: "Comprehensive and Transparent Disclosure",
          description: "Provide transparent reporting on emissions, energy consumption, and adoption of low-carbon technologies using standardized measurements like Global Warming Potential (GWP)"
        },
        {
          name: "Technological Innovation and Research",
          description: "Invest in cutting-edge technologies: alternative fuels, more efficient kilns, novel cements with reduced limestone content or alternative binders"
        },
        {
          name: "Collaboration and Partnerships",
          description: "Forge partnerships with government bodies, scientific community, and construction industry to share knowledge and resources"
        },
        {
          name: "Financial Support and Incentives",
          description: "Financial mechanisms including subsidies for R&D, carbon pricing to incentivize low-carbon alternatives, and infrastructure investments"
        },
        {
          name: "Monitoring, Reporting, and Verification",
          description: "Implement rigorous monitoring and reporting frameworks with verification protocols to ensure data accuracy"
        },
        {
          name: "Continuous Improvement and Adaptation",
          description: "Living documents subject to frequent review and updates in response to technological breakthroughs and regulatory changes"
        }
      ]
    },
    specificity: {
      title: "Specificity of Transition Plans",
      requirements: [
        "Disclosure of all material cement production assets at asset, production process, company, and group levels",
        "Production methods (wet, dry, semi-dry, semi-wet processes), production capacity, current emissions",
        "Planned technological advancements, asset life expectancy, and expected impact on CO2 emissions",
        "Commitment to phase out high-emission production processes without CCUS",
        "Timeline for phasing out older, less efficient kilns (post-2025-2028)",
        "Evaluation of different production routes including alternative raw materials and fuels",
        "Definition of decommissioning commitments for potential stranded assets",
        "Realistic assumptions on overcoming technology constraints with transparency",
        "External consistency checks to avoid 'alignment greenwashing'",
        "Targets for waste management, water conservation, and air pollution beyond legal minimums",
        "Clear identification of CapEx sources for abatement options within 2030 timeframe",
        "Human capital assessment with strategies for upskilling and reskilling workers"
      ]
    },
    actionsEvidencingCredibility: {
      title: "Actions Evidencing Credibility (based on TPT)",
      energyEfficiency: [
        "Implement best available techniques for energy efficiency (e.g., waste heat recovery)",
        "Develop material recirculation strategies for better collection and recycling of cement and concrete",
        "Enhance durability and longevity of concrete through innovative design"
      ],
      secondaryMaterials: [
        "Increase use of alternative raw materials such as fly ash, slag, and recycled concrete aggregates",
        "Enhance quality and efficiency by optimizing use of SCMs to replace clinker"
      ],
      nearZeroTechnologies: [
        "Transition from traditional kiln technologies to efficient dry-process kilns and/or kiln electrification",
        "Explore use of alternative fuels like biogas, biomass, and waste-derived fuels",
        "Implement carbon capture, utilization, and storage (CCUS) technologies",
        "Invest in R&D for new methods of near-zero or low-carbon cement production"
      ],
      reliableMetrics: [
        "Energy intensity by cement production route",
        "Consumption of electricity, heat, and alternative fuels",
        "Share of renewable/low carbon electricity used in production process",
        "Consumption of raw materials and SCMs",
        "Production capacity and output figures by production route",
        "Current and targeted capacity for CCUS-equipped plants",
        "Facilities where CCUS is planned or in operation and expected capture rate",
        "Installed production technology by plant and expected impact of changes",
        "Cement production percentage from dry, semi-dry, semi-wet, and wet process routes",
        "Total limestone and other raw material use and reduction targets",
        "Corporate policy to phase out high-emission kiln technologies"
      ]
    }
  },

  ghgMetrics: {
    title: "GHG Emissions Metrics",
    metrics: [
      "Scope 1 and 2 emissions per unit of cement produced (tCO2e/tonne cement)",
      "Current and projected Scope 1, 2, and 3 GHG emissions by cement plant",
      "Emissions intensity by cement production process",
      "Projected reduction in emissions due to technology changes",
      "Clinker-to-cement ratio",
      "Alternative fuel substitution rate",
      "Thermal energy consumption per tonne of clinker"
    ],
    carbonLockIn: "Carbon lock-in in the cement industry is defined as the action of enabling carbon-intensive production methods, such as traditional rotary kilns, to persist, causing lower carbon alternatives, like alternative clinker materials or innovative kiln technologies, to be 'locked out'.",
    industryContext: "Average emissions per tonne of cement produced in EU is approximately 0.6 tCO2, considering direct emissions (scope 1), indirect emissions such as CO2 embedded in electricity use (scope 2), and raw material sourcing (scope 3)."
  },

  kpis: {
    title: "Key Performance Indicators for Cement",
    indicators: [
      {
        name: "Physical Emission Intensity",
        description: "Scope 1+2 GHG emissions per unit of cement or clinker produced",
        formula: "Scope 1+2 GHG emissions / tonnes of cement produced",
        benchmarks: {
          euTaxonomyMitigation: {
            greyClinker: "≤ 0.722 tCO2e/t clinker",
            cementFromGreyClinker: "≤ 0.469 tCO2e/t cement"
          },
          euTaxonomyAdaptation: {
            greyClinker: "≤ 0.816 tCO2e/t clinker",
            cementFromGreyClinker: "≤ 0.530 tCO2e/t cement"
          }
        }
      },
      {
        name: "Clinker-to-Cement Ratio",
        description: "Proportion of clinker used in cement production. Lower ratio indicates greater use of SCMs.",
        target: "Reduce clinker-to-cement ratio through increased SCM substitution",
        impact: "For every ton of clinker replaced by SCMs, CO2 emissions cut by approximately 0.8 ton"
      },
      {
        name: "Alternative Fuel Substitution Rate",
        description: "Percentage of traditional fossil fuels replaced by alternative fuels (biomass, waste-derived fuels, hydrogen)",
        target: "Increase alternative fuel use to reduce CO2 emissions by 20-40%"
      },
      {
        name: "Thermal Energy Efficiency",
        description: "Thermal energy consumption per tonne of clinker produced",
        benchmark: "Modern plants: ~3.3 GJ/t clinker (approximately twice thermodynamic minimum)",
        historicalProgress: "Global average decreased from 3.75 GJ/t (2000) to 3.5 GJ/t (2014), ~0.5% per year improvement"
      },
      {
        name: "Carbon Capture Rate",
        description: "Percentage of CO2 emissions captured through CCS/CCUS technologies",
        target: "Up to 90% capture rate for facilities with CCUS"
      },
      {
        name: "R&D Investment in Low-Carbon Technologies",
        description: "Ratio of R&D expenditure on decarbonization technologies to total R&D investment",
        focus: "Alternative fuels, efficient kilns, novel cements, CCUS technologies"
      }
    ]
  },

  lockedInEmissions: {
    title: "Locked-in Emissions for Cement Sector",
    definition: "Locked-in emissions in cement refer to committed future emissions from existing and planned production facilities that use carbon-intensive methods.",
    formulas: {
      keyAssets: {
        title: "Formula for Locked-in Emissions for Key Assets",
        formula: "Cumulative emissions = Σ (Annual emissions × Remaining lifetime)",
        description: "Based on remaining operational lifetime of existing kilns and planned facilities"
      },
      cumulative: {
        title: "Formula for Cumulative Locked-in Emissions",
        formula: "Total locked-in = Facilities locked-in (Scope 1+2) + Upstream locked-in (Scope 3)",
        description: "Accounts for direct kiln emissions and indirect emissions from raw material extraction"
      }
    },
    riskFactors: [
      "Traditional rotary kiln investments with 40+ year lifespans",
      "Lack of CCUS infrastructure at existing facilities",
      "Dependence on limestone calcination process",
      "High capital costs for technology transition"
    ],
    mitigationStrategies: [
      "Early decommissioning of inefficient kilns",
      "Retrofitting with CCUS technology",
      "Transition to alternative binders and SCMs",
      "Investment in low-carbon kiln technologies"
    ]
  },

  euTaxonomyCriteria: {
    title: "EU Taxonomy Technical Screening Criteria",
    climateMitigation: {
      thresholds: [
        "Grey cement clinker: ≤ 0.722 tCO2e/t clinker",
        "Cement from grey clinker: ≤ 0.469 tCO2e/t cement"
      ],
      dnsh: [
        "Climate adaptation: Comply with Appendix A criteria",
        "Water: Comply with Appendix B criteria",
        "Pollution prevention: Within BAT-AEL limits, no significant cross-media effects",
        "Biodiversity: Comply with Appendix D criteria"
      ]
    },
    climateAdaptation: {
      thresholds: [
        "Grey cement clinker: ≤ 0.816 tCO2e/t clinker",
        "Cement from grey clinker: ≤ 0.530 tCO2e/t cement"
      ],
      requirements: [
        "Robust climate risk and vulnerability assessment",
        "Physical and non-physical adaptation solutions",
        "Proportionate to scale and expected lifespan",
        "Based on best practice and available guidance",
        "Favor nature-based solutions where possible"
      ]
    },
    minimumSafeguards: [
      "OECD Guidelines for Multinational Enterprises",
      "UN Guiding Principles on Business and Human Rights",
      "Do no significant harm principle across all operations"
    ]
  },

  sources: {
    title: "Sources",
    citations: [
      {
        title: "Global Cement Market Size, Share, Analysis, Forecast",
        author: "Expert Market Research",
        year: "2024",
        url: "https://www.expertmarketresearch.com/reports/cement-market"
      },
      {
        title: "Technology Roadmap - Low-Carbon Transition in the Cement Industry",
        author: "International Energy Agency (IEA)",
        year: "2018",
        url: "https://www.iea.org/reports/technology-roadmap-low-carbon-transition-in-the-cement-industry"
      },
      {
        title: "Best ways to cut carbon emissions from the cement industry explored",
        author: "Imperial College London",
        year: "2021",
        url: "https://www.imperial.ac.uk/news/221654/best-ways-carbon-emissions-from-cement/"
      },
      {
        title: "EU Taxonomy Compass",
        author: "European Commission",
        url: "https://ec.europa.eu/sustainable-finance-taxonomy/taxonomy-compass"
      },
      {
        title: "Industrial and Livestock Rearing Emissions Directive",
        author: "European Commission",
        url: "https://environment.ec.europa.eu/topics/industrial-emissions-and-safety/industrial-emissions-directive_en"
      }
    ]
  }
};

export default cementSections;
