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

  decarbonizationTechnologies: {
    title: "Decarbonization Technologies",
    content: `Research has identified several strategies for decarbonising the cement industry:`,
    technologies: [
      {
        name: "Energy and Operational Efficiency",
        description: "Incremental improvements in kiln efficiency and heat recovery systems. Modern plants require about 3.3 GJ of thermal energy per ton of clinker.",
        status: "Commercial",
        potential: "10-20% reduction"
      },
      {
        name: "Waste Heat Recovery (WHR)",
        description: "Captures thermal energy from exhaust gases and converts to electricity via steam turbines or ORC systems. Can capture 35-40% of heat losses.",
        status: "Commercial",
        potential: "5% improvement in fuel efficiency"
      },
      {
        name: "Supplementary Cementitious Materials (SCMs)",
        description: "Substitution of clinker with materials like fly ash, slag, silica fume, and calcined clay. For every ton of clinker replaced, CO2 emissions cut by ~0.8 ton.",
        status: "Commercial",
        potential: "Up to 50% reduction"
      },
      {
        name: "Alternative Fuels",
        description: "Use of biomass, waste-derived fuels, and hydrogen to replace coal and petroleum coke in kilns.",
        status: "Commercial/Pilot",
        potential: "20-40% reduction"
      },
      {
        name: "Carbon Capture and Storage (CCS)",
        description: "Capturing CO2 emissions from the chemical reactions in clinker production and storing underground.",
        status: "Demonstration",
        potential: "Up to 90% capture"
      },
      {
        name: "Carbon Capture and Utilisation (CCU)",
        description: "Converting captured CO2 into useful products or using it in concrete curing.",
        status: "Pilot",
        potential: "Variable"
      },
      {
        name: "Low-Carbon Cements and Novel Binders",
        description: "Development of geopolymer cements and carbon-negative cement formulations that don't require limestone calcination.",
        status: "Research/Pilot",
        potential: "50-100% reduction"
      },
      {
        name: "Innovations in Kiln Technology",
        description: "Low-temperature clinker processes operating at temperatures up to 700°C lower than traditional methods.",
        status: "Research",
        potential: "Significant reduction"
      },
      {
        name: "Renewable Energy",
        description: "Shifting to renewable electricity and solar thermal systems for process heat.",
        status: "Commercial",
        potential: "Depends on grid"
      }
    ],
    caseStudies: [
      {
        company: "HeidelbergCement (Lixhe plant, Belgium)",
        project: "LEILAC Project",
        description: "Advanced preheater and precalciner technologies for enhanced thermal efficiency."
      },
      {
        company: "Holcim (Lägerdorf plant, Germany)",
        project: "Carbon2Business",
        description: "Capturing 1.2 million tons of CO2 annually using Oxyfuel technology. Target: net-zero by 2029."
      },
      {
        company: "Buzzi Unicem (Vernasca, Italy)",
        project: "CLEANKER",
        description: "Advanced calcium looping (CaL) process for CO2 capture, funded by EU Horizon 2020."
      },
      {
        company: "Dalmia Cement (India)",
        project: "WHR Systems",
        description: "Waste Heat Recovery at Murli Plant, targeting carbon negative by 2040."
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
        "Clear and ambitious targets for GHG emission reduction",
        "Milestones for lowering clinker-to-cement ratio",
        "Increasing use of supplementary cementitious materials",
        "Comprehensive and transparent disclosure",
        "Standardized measurements (Global Warming Potential)",
        "Investment in cutting-edge technologies",
        "Collaboration and partnerships with stakeholders",
        "Financial support mechanisms and incentives",
        "Rigorous monitoring, reporting, and verification",
        "Continuous improvement and adaptation"
      ]
    },
    specificity: {
      title: "Specificity of Transition Plans",
      requirements: [
        "Disclosure of all material cement production assets",
        "Data at asset, production process, company, and group levels",
        "Production methods, capacity, current emissions",
        "Planned technological advancements and timelines",
        "Commitment to exit unabated high emission production",
        "Timeline for phasing out inefficient kilns",
        "Evaluation of different production routes",
        "Decommissioning commitments for stranded assets",
        "Realistic assumptions about technology constraints",
        "External consistency checks",
        "Targets beyond legal requirements",
        "Clear CapEx sources for abatement",
        "Human capital needs assessment"
      ]
    },
    actions: [
      "Increase energy efficiency and material efficiency in production routes",
      "Implement best available techniques (e.g., waste heat recovery)",
      "Develop material recirculation strategies",
      "Scale up secondary material production (SCMs)",
      "Develop and scale near-zero emission production technologies",
      "Transition to efficient dry-process kilns or kiln electrification",
      "Implement CCUS technologies",
      "Use alternative binding materials",
      "Adopt reliable metrics and transparent reporting"
    ]
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
    carbonLockIn: `Carbon lock-in in the cement industry is defined as the action of enabling carbon-intensive production methods, such as traditional rotary kilns, to persist, causing lower carbon alternatives, like alternative clinker materials or innovative kiln technologies, to be 'locked out'.`
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
