// Complete Steel Sector Content - All data from steel.txt

export const steelSections = {
  introduction: {
    title: "Introduction",
    content: `Steel is a critical material for the global economy, essential for construction, transportation, and manufacturing. However, steel production is one of the most carbon-intensive industrial processes, accounting for approximately 7-9% of global CO2 emissions. The steel industry faces significant pressure to decarbonize while meeting growing global demand.

The primary production routes for steel are:
- **Blast Furnace-Basic Oxygen Furnace (BF-BOF)**: The dominant route, responsible for approximately 70% of global steel production. It uses iron ore and coal/coke as primary inputs.
- **Electric Arc Furnace (EAF)**: Uses primarily scrap steel and electricity. Accounts for approximately 30% of global production and has significantly lower direct emissions.

As the world transitions to net-zero emissions, the steel sector must adopt new technologies and practices to reduce its carbon footprint while maintaining competitiveness.`
  },

  steelMarket: {
    title: "Steel Market",
    content: `The global steel market is substantial and continues to grow:

**Market Size and Production:**
- Global crude steel production reached approximately 1.9 billion tonnes in 2023
- China remains the dominant producer, accounting for over 50% of global production
- The European Union produces approximately 150 million tonnes annually

**Market Trends:**
- Growing demand from emerging economies
- Increasing focus on green steel and low-carbon production
- Rising raw material costs and supply chain volatility
- Consolidation among major producers

**Regional Distribution:**
- Asia-Pacific dominates production and consumption
- Europe and North America focus on high-value steel products
- Growing capacity in the Middle East and Africa

**Price Dynamics:**
- Steel prices are influenced by iron ore, coking coal, and energy costs
- Carbon pricing increasingly affects European steel economics
- Premium pricing emerging for verified low-carbon steel`
  },

  productionRoutes: {
    title: "Production Routes",
    bfBof: {
      title: "Blast Furnace - Basic Oxygen Furnace (BF-BOF)",
      content: `The BF-BOF route is the traditional and dominant method for primary steel production:

**Process Overview:**
1. **Raw Material Preparation**: Iron ore is processed into sinter or pellets; coal is converted to coke
2. **Blast Furnace**: Iron ore is reduced to molten iron (hot metal) using coke as both fuel and reducing agent
3. **Basic Oxygen Furnace**: Hot metal is refined into steel by blowing oxygen to remove carbon

**Key Characteristics:**
- Highly carbon-intensive: ~1.8-2.2 tCO2 per tonne of crude steel
- Capital-intensive with long asset lifetimes (40+ years)
- Economies of scale favor large integrated facilities
- Dependent on coking coal and iron ore

**Emission Sources:**
- Coke production: ~0.15 tCO2/t steel
- Sintering: ~0.3 tCO2/t steel
- Blast furnace: ~1.2 tCO2/t steel
- Basic oxygen furnace: ~0.1 tCO2/t steel`
    },
    eaf: {
      title: "Electric Arc Furnace (EAF)",
      content: `The EAF route offers significantly lower direct emissions:

**Process Overview:**
1. Scrap steel (and/or DRI) is charged into the furnace
2. Electric arcs melt the charge
3. Alloying elements added to achieve desired steel grade
4. Molten steel is cast and processed

**Key Characteristics:**
- Lower direct emissions: ~0.4-0.6 tCO2 per tonne (with scrap)
- Dependent on electricity grid carbon intensity
- More flexible and can be scaled more easily
- Limited by scrap availability and quality

**Advantages:**
- Lower capital costs than integrated facilities
- Faster startup and shutdown
- Better suited for specialty and long steel products
- Can utilize 100% scrap or DRI`
    },
    dri: {
      title: "Direct Reduced Iron (DRI)",
      content: `DRI is produced by reducing iron ore using natural gas or hydrogen:

**Process Overview:**
- Iron ore is reduced to iron without melting
- Natural gas or hydrogen serves as the reducing agent
- Produces a solid iron product (sponge iron)

**Key Characteristics:**
- Lower emissions than BF when using natural gas
- Near-zero emissions possible with green hydrogen
- Can be used in EAF as a substitute for scrap
- Growing importance for decarbonization pathways

**Hydrogen-Based DRI:**
- Emerging technology with significant potential
- Requires large quantities of clean hydrogen
- Several pilot projects underway globally
- Expected to be key decarbonization pathway`
    }
  },

  decarbonizationTechnologies: {
    title: "Decarbonization Technologies",
    content: `The steel industry has several pathways to reduce emissions:`,
    technologies: [
      {
        name: "Hydrogen-Based Direct Reduction",
        description: "Using green hydrogen instead of natural gas or coal to reduce iron ore, potentially achieving near-zero emissions.",
        status: "Pilot/Demonstration",
        potential: "Up to 95% emission reduction"
      },
      {
        name: "Carbon Capture and Storage (CCS)",
        description: "Capturing CO2 emissions from blast furnaces and storing them underground or utilizing them in other processes.",
        status: "Commercial pilots",
        potential: "50-90% emission reduction"
      },
      {
        name: "Electric Arc Furnace with Clean Electricity",
        description: "Maximizing scrap usage and powering EAFs with renewable electricity.",
        status: "Commercial",
        potential: "Up to 80% emission reduction vs BF-BOF"
      },
      {
        name: "Electrolysis",
        description: "Direct electrolysis of iron ore using electricity, eliminating the need for carbon-based reducing agents.",
        status: "Research/Early pilot",
        potential: "Near-zero emissions"
      },
      {
        name: "Biomass and Alternative Fuels",
        description: "Replacing coal/coke with biomass or other low-carbon fuels in blast furnaces.",
        status: "Limited commercial",
        potential: "20-40% emission reduction"
      },
      {
        name: "Energy Efficiency Improvements",
        description: "Optimizing existing processes through heat recovery, process integration, and digitalization.",
        status: "Commercial",
        potential: "10-20% emission reduction"
      }
    ]
  },

  environmentalImpacts: {
    title: "Environmental Impacts",
    impacts: [
      {
        category: "Climate Change",
        description: "Steel production accounts for 7-9% of global CO2 emissions, making it one of the largest industrial sources of greenhouse gases."
      },
      {
        category: "Air Pollution",
        description: "Emissions include particulate matter, sulfur dioxide (SO2), nitrogen oxides (NOx), and volatile organic compounds (VOCs)."
      },
      {
        category: "Water Use and Pollution",
        description: "Significant water consumption for cooling and processing; potential contamination from heavy metals and process chemicals."
      },
      {
        category: "Waste Generation",
        description: "Slag, dust, and sludge from production processes require proper management and disposal or recycling."
      },
      {
        category: "Resource Depletion",
        description: "Consumption of iron ore, coal, and other raw materials; mining impacts on ecosystems."
      },
      {
        category: "Energy Consumption",
        description: "One of the most energy-intensive industries, consuming approximately 8% of global final energy."
      }
    ]
  },

  euPolicies: {
    title: "EU Policies",
    policies: [
      {
        name: "EU Emissions Trading System (EU ETS)",
        description: "Cap-and-trade system covering steel production. Free allocation is being phased out as CBAM is introduced.",
        impact: "Creates carbon price signal; incentivizes emission reductions"
      },
      {
        name: "Carbon Border Adjustment Mechanism (CBAM)",
        description: "Import levy on embedded carbon in steel products from non-EU countries.",
        impact: "Prevents carbon leakage; levels playing field for EU producers"
      },
      {
        name: "Industrial Emissions Directive (IED)",
        description: "Sets emission limits and requires Best Available Techniques (BAT) for industrial installations.",
        impact: "Drives adoption of cleaner production technologies"
      },
      {
        name: "EU Taxonomy Regulation",
        description: "Defines criteria for sustainable economic activities, including steel production.",
        impact: "Guides green finance and investment decisions"
      },
      {
        name: "Fit for 55 Package",
        description: "Comprehensive climate policy package targeting 55% emission reduction by 2030.",
        impact: "Accelerates decarbonization requirements"
      },
      {
        name: "Green Deal Industrial Plan",
        description: "Support measures for clean technology manufacturing and green industrial transition.",
        impact: "Provides funding and regulatory support for decarbonization"
      }
    ]
  },

  transitionPlanCredibility: {
    title: "Transition Plan Credibility",
    content: `Financial institutions assessing steel sector borrowers should evaluate transition plans based on:

**Key Assessment Criteria:**
- Science-based emission reduction targets (1.5°C aligned)
- Clear timeline and milestones for technology deployment
- Adequate capital allocation for decarbonization investments
- Credible assumptions about technology availability and costs
- Plans for addressing stranded asset risk
- Scope 1, 2, and 3 emission coverage

**Red Flags:**
- Overreliance on unproven technologies
- Lack of near-term action despite long-term targets
- Insufficient capital allocation
- Heavy dependence on offsets
- Ignoring scope 3 emissions`,
    kpis: [
      "CO2 emissions intensity (tCO2/t crude steel)",
      "Share of production from low-carbon routes",
      "CapEx allocation for decarbonization",
      "Progress against stated targets",
      "Scrap utilization rate",
      "Energy intensity",
      "Renewable energy share"
    ]
  },

  targetSetting: {
    title: "Steel Target Setting (SBTi Approach)",
    content: `The Science Based Targets initiative (SBTi) provides guidance for steel sector target setting:

**Sectoral Decarbonization Approach (SDA):**
- Uses sector-specific pathways aligned with climate scenarios
- Accounts for production growth and initial performance
- Differentiates between primary and secondary steelmaking

**Key Requirements:**
1. Emissions must align with the defined core boundary
2. Use hot rolled steel as the intensity denominator
3. Include upstream emissions from purchased intermediate products
4. Include downstream emissions from processing sold products
5. Set scope 3 targets covering fuel and energy-related emissions
6. Justify growth projections in target submission
7. Mention scrap share dependency in target wording
8. Annual disclosure of emissions and scrap ratio

**Emission Intensity Benchmarks (1.5°C scenario):**
- 2030: 0.99 tCO2/t steel
- 2040: 0.37 tCO2/t steel
- 2050: 0.12 tCO2/t steel

**For Primary Steel:**
- 2030: 1.22 tCO2/t steel
- 2040: 0.37 tCO2/t steel
- 2050: 0.05 tCO2/t steel

**For Secondary Steel:**
- 2030: 0.28 tCO2/t steel
- 2040: 0.16 tCO2/t steel
- 2050: 0.05 tCO2/t steel`
  },

  kpis: {
    title: "Key Performance Indicators",
    content: `The following KPIs are most relevant for assessing steel sector transition performance:`,
    indicators: [
      {
        name: "Physical Emission Intensity",
        formula: "Scope 1+2 GHG emissions / tonnes of crude steel produced",
        benchmarks: {
          euTaxonomy: [
            "Hot metal: ≤ 1.331 tCO2e/t crude steel",
            "Sintered ore: ≤ 0.163 tCO2e/t crude steel",
            "Coke: ≤ 0.144 tCO2e/t crude steel",
            "EAF high alloy: ≤ 0.266 tCO2e/t crude steel",
            "EAF carbon steel: ≤ 0.209 tCO2e/t crude steel"
          ],
          tpi: [
            "2030: 0.99 tCO2/t steel",
            "2040: 0.37 tCO2/t steel",
            "2050: 0.12 tCO2/t steel"
          ]
        }
      },
      {
        name: "Scope 1+2 Emission Reduction Alignment",
        description: "Measures alignment of near- and long-term targets with decarbonization pathway",
        benchmarks: [
          "Long-term: 80-95% reduction by 2050 vs 1990",
          "Medium-term: 30% intensity reduction by 2030 from 2015 baseline"
        ]
      },
      {
        name: "R&D in Climate Mitigation Technologies",
        description: "Ratio of R&D investment in low-carbon technologies to total R&D",
        relevantTechnologies: [
          "Energy efficiency improvements",
          "Alternative fuels (including hydrogen)",
          "Carbon capture and storage",
          "Waste heat recovery",
          "Novel production processes"
        ]
      },
      {
        name: "Scrap Utilization Rate",
        description: "Share of scrap in metallic inputs",
        target: "45.3% by 2050 under SDS scenario"
      }
    ]
  },

  lockedInEmissions: {
    title: "Locked-in Emissions",
    content: `Carbon lock-in in the steel industry refers to enabling carbon-intensive technologies (such as BF-BOF) to persist, causing lower carbon alternatives to be 'locked out'.

**Assessment Framework:**

Financial institutions should assess:
1. Remaining operational lifetime of carbon-intensive assets
2. Planned capacity additions and their emission profiles
3. Gap between committed emissions and carbon budget
4. Decommissioning plans and timelines

**Key Formulas:**

**Locked-in emissions for key assets:**
Cumulative emissions = Σ (Annual emissions × Remaining lifetime)

**Carbon lock-in ratio:**
Lock-in ratio = Cumulative locked-in emissions / Available carbon budget

**Carbon Budget Reference:**
- Global carbon budget for 1.5°C (67% certainty): 400 GtCO2 until 2050
- Steel sector share: ~19 Gt CO2 (5.0%)
- OECM allocation: ~14 Gt CO2 (2020-2030), ~19 Gt CO2 (2020-2050)

**Risk Mitigation:**
Financial institutions should:
- Understand allocation methodology used by borrowers
- Verify if targets are SBTi validated
- Compare locked-in emissions against carbon budget
- Assess stranded asset risk for carbon-intensive facilities`
  },

  sources: {
    title: "Sources",
    citations: [
      {
        title: "Climate Bonds Initiative (CBI), Steel Sector Criteria",
        year: "2023",
        url: "https://www.climatebonds.net/files/files/Climate%20Bonds%20Steel%20Criteria.pdf"
      },
      {
        title: "Science Based Targets initiative (SBTi), Steel Science-Based Target-Setting Guidance",
        year: "2023",
        url: "https://sciencebasedtargets.org/sectors/steel"
      },
      {
        title: "IEA, Iron and Steel Technology Roadmap",
        year: "2020",
        url: "https://www.iea.org/reports/iron-and-steel-technology-roadmap"
      },
      {
        title: "Mission Possible Partnership (MPP), Steel Transition Strategy",
        year: "2022",
        url: "https://missionpossiblepartnership.org/action-sectors/steel/"
      },
      {
        title: "Transition Pathway Initiative (TPI), Carbon Performance Assessment",
        year: "2021",
        url: "https://www.transitionpathwayinitiative.org/publications/44"
      },
      {
        title: "World Steel Association, Short Range Outlook",
        year: "2024",
        url: "https://worldsteel.org/data/short-range-outlook/"
      },
      {
        title: "ResponsibleSteel International Production Standard",
        year: "2024",
        url: "https://www.responsiblesteel.org/"
      }
    ]
  }
};

export default steelSections;
