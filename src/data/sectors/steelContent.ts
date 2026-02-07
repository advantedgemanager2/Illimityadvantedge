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

  bestPracticesAndBenchmarks: {
    title: "Best Practices, Benchmarks and Boundaries",
    standards: [
      {
        name: "ResponsibleSteel",
        description: "International Standard Version 2.1 requires steel businesses to set science-based GHG emission reduction objectives. Does not offer specific solutions but supports industry efforts to transition to low-carbon steel production. Developed a unique dataset to enable the evaluation of emissions from any tonne of steel produced anywhere in the world with any level of scrap content.",
        recommendations: "IIGCC recommends using the ResponsibleSteel emission boundary, which includes Scope 1, Scope 2 and upstream Scope 3 including emissions associated with material extraction, material preparation and processing and transportation."
      },
      {
        name: "The Steel Climate Standard by CBI",
        description: "Recommends bio-based products for steelmaking decarbonization. Promotes replacing fossil-based carbon in the steel sector to minimise CO2 emissions using biomass resources like straw, corn stalks, sugarcane bagasse, sawdust, bark, timber harvests, logging leftovers and industrial waste.",
        potential: "Biochar-based BF ironmaking will increase gross emissions by 50% compared to current coal-based production, but net CO2 emissions might be lowered to 50 kg CO2/t molten iron due to biochar's burden-free classification."
      },
      {
        name: "Sustainable STEEL Principles",
        description: "Useful for distinguishing emissions from primary steel manufacturing and secondary steel manufacture from scrap, making emissions comparisons fairer and for identifying benchmark emissions scenarios like the IEA Net-Zero by 2050 Scenario and the Mission Possible Partnership's Technology Moratorium Scenario strategies."
      },
      {
        name: "Net Zero Steel Initiative",
        description: "Has identified four technology routes for decarbonization: enhanced utilisation of recycled steel, equipping coal blast furnaces with post-combustion CCS, utilisation of hydrogen-based DRI in EAFs, and constructing new non-spatially allocated facilities or importing environmentally friendly iron or steel when other solutions are not feasible.",
        goal: "Doubling the recycled steel production"
      },
      {
        name: "SteelZero",
        description: "Defined the SteelZero Low(er) Embodied Carbon Steel 2030 benchmark: 1.4 tCO2e/t for integrated steel and 0.2 tCO2e/t for recycled steel.",
        definitions: {
          lowEmbodiedCarbonSteel: "Crude steel with a GHG Emissions Intensity of less than or equal to the 2030 target threshold",
          ghgEmissionsIntensity: "Measured in metric tonnes of CO2e per metric tonne of Crude Steel, includes scope 1, 2 and 3 emissions as per The Greenhouse Gas Protocol",
          crudeSteel: "Steel in the first solid state after melting, suitable for further processing or for sale (synonymous with raw steel)"
        }
      }
    ]
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
      },
      {
        name: "Maximising Secondary Route Steel",
        description: "Approximately 40% of EU steel is produced via EAF route. By 2050, the supply of old scrap could equal or even surpass the demand for final steel if all waste had the same quality.",
        status: "Commercial",
        potential: "Significant reduction through recycling",
        challenges: "Copper contamination (>0.1 wt% causes surface defects), scrap quality limitations"
      },
      {
        name: "Natural Gas DRI/HBI+EAF",
        description: "Direct Reduced Iron or hot briquetted iron added to metal scrap. DRI is a high Fe, low residual metallic material for high-quality steel production.",
        status: "Commercial",
        potential: "30-60% reduction vs BF-BOF",
        note: "Subject to lock-in risk as it cannot achieve full decarbonization alone"
      },
      {
        name: "Molten Oxide Electrolysis (MOE)",
        description: "Direct conversion of oxide feedstock to liquid iron which can be easily separated from the molten oxide electrolyte. Sustainable and high efficiency production of high-purity iron from oxide ores.",
        status: "Research/Early pilot",
        potential: "Near-zero emissions",
        availability: "Steel expected from 2026"
      },
      {
        name: "Low Temperature Electrolysis (LTE)",
        description: "SIDERWIN has completed the first LTE trial in an industrial-size production unit.",
        status: "Demonstration",
        potential: "Near-zero emissions"
      }
    ],
    forthcomingTechnologies: {
      description: "Forthcoming technologies are intended to supplant existing processes with breakthrough technologies that rely on hydrogen or electricity to reduce iron ore, enabling production of steel with minimal CO2 emissions.",
      hydrogenDRI: {
        description: "The possibility of utilising hydrogen-based direct reduced iron (H-DRI) is significant as a technology approaching commercial feasibility. This would entail substantial demand for hydrogen and low-carbon electricity.",
        challenges: [
          "Acquisition of adequate energy and resources",
          "Recruitment of highly skilled workforce",
          "Establishing substantial customer base",
          "Electricity consumption rate 15 times more than coking",
          "Requirement for higher quality iron ore"
        ],
        premiumRequired: "$115 per tonne (approximately 20% of current market value)"
      }
    }
  },

  cbiMitigationCriteria: {
    title: "CBI Mitigation Criteria for Steel",
    preFacilities2022: {
      title: "Mitigation Criteria for facilities becoming operational before 2022",
      criteria: [
        {
          facilityType: "Electric Arc Furnace (EAF)",
          requirement: "Automatically eligible for optimization, installation and operation of mitigation measures"
        },
        {
          facilityType: "Production line with Blast Furnace (BF) operational 2007 or later",
          requirements: [
            "Investment shall not be for relining",
            "If pre-decarbonization baseline emissions intensity ≥ 2 tCO2/t steel: reduce emissions intensity by 20% between 2022-2030",
            "If pre-decarbonization baseline emissions intensity < 2 tCO2/t steel: reduce emissions intensity by 15% between 2022-2030"
          ]
        },
        {
          facilityType: "Production line with Blast Furnace (BF) operational prior to 2007",
          requirements: [
            "Investment shall not be for relining",
            "Reduce emissions intensity by 50% between 2022-2030"
          ]
        },
        {
          facilityType: "Production line with DRI",
          requirements: [
            "If fossil gas based: reduce emissions intensity by 20% between 2022-2030",
            "If coal based: reduce emissions intensity by 40% between 2022-2030"
          ]
        }
      ]
    },
    postFacilities2022: {
      title: "Mitigation Criteria for facilities becoming operational in 2022 or thereafter",
      criteria: [
        {
          facilityType: "Smelting reduction with integrated CCS/CCU",
          requirement: "CCS or CCUS should capture at least 70% of all emissions"
        },
        {
          facilityType: "Fossil gas-based DRI-EAF with integrated CCS/CCU",
          requirement: "CCS or CCUS should capture at least 70% of all emissions"
        },
        {
          facilityType: "Scrap based Electric Arc Furnace (EAF)",
          requirements: [
            "Use 70% of scrap as total annual inputs, OR",
            "Combined scrap and 100% Hydrogen based DRI should add to at least 70% of EAF total annual inputs"
          ]
        },
        {
          facilityType: "Electrolysis of iron ore steelmaking production line",
          requirement: "Plan describing how renewable energy use will be increased/introduced through captive power generation or renewable PPAs. Progress assessed every 36 months."
        },
        {
          facilityType: "100% Hydrogen-based DRI-EAF production line",
          requirement: "Hydrogen should follow the CBI Hydrogen Production Criteria"
        }
      ]
    }
  },

  technologyTablesFramework: {
    title: "Technology Tables Framework for Financial Institutions",
    description: "Framework for introducing technology assessment in lending and debt products. Financed emissions are directly linked to the emission intensity of a borrower's operations, with majority of steel emissions arising from Scope 1 and Scope 2 activities.",
    keyMetrics: [
      {
        metric: "Emission Intensity",
        description: "Calculated by dividing the amount of CO2eq produced by single machineries by the activity metric consumed in a specific timeframe"
      },
      {
        metric: "Type of Technology",
        description: "Tables allow benchmarking existing projects with portfolio technologies and those disclosed by clients. Each technology has its own range of emission intensity achievable for Net Zero."
      },
      {
        metric: "Expected Commercial Availability",
        description: "When the technology is expected to be commercially available for implementation on the market"
      }
    ],
    fourSteps: [
      {
        step: 1,
        title: "Identifying Alignment with Technological Pathways",
        description: "Use tables to identify the technological pathway that aligns with borrower's sector and operational processes. Assess year of expected commercial availability to understand feasibility and alignment with transition plan."
      },
      {
        step: 2,
        title: "Technology and Transition Plan Assessment",
        description: "Evaluate existing technologies in borrower's facilities. Verify if energy efficiency improvements, machinery upgrades, or technology switches are included in transition plan."
      },
      {
        step: 3,
        title: "Incorporation of Contractual Commitments",
        description: "Introduce technology-related clauses into loan agreements requiring alignment with identified technological pathway. Specify measures such as energy efficiency upgrades, adoption of cleaner technologies, or defined decarbonization milestones. Structure with clear KPIs and timelines."
      },
      {
        step: 4,
        title: "Risk Management and Enforcement Mechanisms",
        description: "Include contractual triggers for non-compliance such as Event of Default for material breaches and restructuring mechanisms to recalibrate loan terms if borrowers deviate from technological transition commitments."
      }
    ],
    integrationBenefits: [
      "Proactively engage borrowers in achieving net-zero pathways through financial incentives and accountability mechanisms",
      "Identify and prioritize financing for technologies aligned with long-term climate transition goals",
      "Hedge against stranded asset risks by evaluating emission intensity and commercial viability within sectoral transition timelines",
      "Foster innovation by proposing tailored financing solutions such as sustainability-linked loans (SLLs) or equipment leasing strategies"
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
    effectiveness: {
      title: "Effectiveness of Transition Plans",
      criteria: [
        {
          name: "Clear and ambitious targets",
          description: "Set clear and ambitious targets for reducing GHG emissions aligned with global climate goals (limiting warming to 1.5°C) in accordance with science-based pathway"
        },
        {
          name: "Comprehensive and transparent disclosure",
          description: "Include disclosure of relevant information on steel production assets, including current emissions (absolute and intensity basis), planned technology changes, and expected impact. Evaluate 'carbon performance' against TPI and EU Taxonomy benchmarks."
        },
        {
          name: "Technological innovation and research",
          description: "Prioritize investments in R&D of low-carbon steel production technologies including DRI-EAF with CCS"
        },
        {
          name: "Collaboration and partnerships",
          description: "Involve collaboration with governments, industry associations, research institutions, and financial institutions"
        },
        {
          name: "Financial support and incentives",
          description: "Include grants, subsidies, tax incentives, and access to green financing that make transition economically viable"
        },
        {
          name: "Monitoring, reporting and verification",
          description: "Establish robust mechanisms to track progress and ensure accountability with regular reporting on emissions reductions and technology deployment"
        },
        {
          name: "Continuous improvement and adaptation",
          description: "Plans should be dynamic and adaptable, with regular reviews and updates based on new information and technological developments"
        },
        {
          name: "Adaptation and climate resilience",
          description: "Incorporate adaptation and resilience strategy for long-term benefits including increased resilience and ability to capitalize on emerging opportunities"
        }
      ]
    },
    specificity: {
      title: "Specificity of Transition Plans",
      requirements: [
        "Disclosure of relevant information on ALL material steel production assets",
        "Details at asset, production route, company and group level",
        "Production technology by main route (BF-BOF, DRI-EAF, scrap-EAF)",
        "Production capacity and current emissions",
        "Planned technology changes over time and asset expected lifetime",
        "Expected impact of technology changes on CO2 emissions (absolute and intensity)",
        "Corporate policy with commitment to exit unabated coal-based primary steel production",
        "Not relining existing or investing in new BF assets without CCS at 90% capture rate after 2025-2028",
        "Definition of decommissioning commitments for potential stranded assets",
        "Realistic assumptions on overcoming technology constraints",
        "External consistency checks to avoid 'alignment greenwashing'",
        "Commitment to address environmental objectives beyond legal requirements",
        "Identification of CapEx sources for abatement options within 2030",
        "Human capital needs assessment for upskilling and reskilling",
        "Identification and management of internal, external and geographical dependencies"
      ]
    },
    actionsEvidencingCredibility: {
      title: "Actions Evidencing Credibility (based on TPT)",
      energyEfficiency: [
        "Implement best available techniques for energy efficiency (e.g., coke dry quenching)",
        "Implement material recirculation strategies for better collection and recycling",
        "Increase utilisation and lifetime of steel through durable product design",
        "Reduce steel losses in fabrication and minimise steel use in end products"
      ],
      scaleUpSecondary: [
        "Increase share of scrap-based steel based on scrap-EAF production route",
        "Enhance quality and efficiency of steel recycling to increase percentage of high-quality steel from recycled materials"
      ],
      nearZeroTechnologies: [
        "Transition from BF-BOF to DRI-EAF process",
        "Replace natural gas with green hydrogen in DRI-EAF process",
        "Implement CCUS technologies for fossil fuel-based production assets",
        "Invest in R&D to explore new methods of near-zero or low-carbon steel production"
      ],
      reliableMetrics: [
        "Energy intensity by steel production route",
        "Consumption of electricity, heat and steam",
        "Share of renewable/low carbon electricity procured or from captive power generation",
        "Consumption of feedstocks by type",
        "Consumption, production, and capacity figures by production route",
        "Scrap consumption by production route",
        "Current and targeted production capacity equipped with CCUS",
        "Plants where CCUS is expected to be used and expected capture rate",
        "Installed production technology by plant and planned changes",
        "Raw steel production percentage from (1) BOF processes and (2) EAF processes",
        "Total iron ore production",
        "Total coking coal production",
        "Corporate policy to exit unabated coal-based primary steel production",
        "Corporate policy to not build new or reline existing unabated BF-BOF by 2025-2028"
      ]
    },
    ghgEmissionsMetrics: [
      "Scope 1 and 2 emissions per unit of crude steel produced (tCO2e/t steel)",
      "Current and projected Scope 1, 2, and 3 GHG emissions by plant",
      "Emissions intensity by production route (Scope 1, 2, 3 emissions per unit of output)",
      "Projected reduction in emissions due to technology changes at asset, production route, and corporate levels",
      "Target boundary: SBTi states steelmakers must include all emissions within iron and steel core boundary",
      "Include emissions from purchased intermediate products under Scope 3 category 1",
      "Include emissions from sold intermediate products under Scope 3 category 10",
      "Set targets covering Scope 3 category 3 fuel and energy-related emissions",
      "Base year emissions and production (Mt hot rolled steel)",
      "Target year expected production (Mt hot rolled steel)",
      "Base year scrap ratio (%) for target calculation",
      "Target year expected scrap ratio (%)"
    ],
    carbonLockIn: "Carbon lock-in in the steel industry is defined as the action of enabling carbon-intensive technologies such as BF-BOF to persist causing lower carbon alternatives to be 'locked out'."
  },

  targetSetting: {
    title: "Steel Target Setting (SBTi Approach)",
    sdaApproach: {
      title: "Sectoral Decarbonisation Approach (SDA)",
      description: "A climate target setting approach which allocates global carbon budget across time (until 2050), divided by regions and sectors using Integrated Assessment Models (IAMs).",
      methodology: [
        "Identify an established global budget consistent with international emission targets (1.5°C, Well Below 2°C or NDCs)",
        "Allocate carbon budget until 2050, divided by regions and sectors",
        "Use Integrated Assessment Models (IAMs) to understand where and when is cheapest to reduce emissions",
        "Normalise sectoral emissions by physical production or relevant economic activity",
        "Calculate recent/current emission intensities and future intensities based on targets",
        "Compare company emission intensity pathway with sector benchmark pathway"
      ],
      constraints: [
        "Technology readiness of the region",
        "Economic availability",
        "Engineering considerations",
        "Political and social externalities"
      ],
      applicability: "Works well with carbon intensity of homogeneous sectors. Assumes company carbon intensity reduction converges with sector at similar rate.",
      notApplicableWhen: [
        "No available sectoral scenario",
        "The sector is heterogeneous"
      ]
    },
    acaApproach: {
      title: "Absolute Contraction Approach (ACA)",
      description: "Method applicable for heterogeneous sectors where determination of meaningful emission intensity is less straightforward.",
      methodology: "Companies set emission reduction targets aligned with global annual emissions reduction rate required to meet 1.5°C or WB-2°C.",
      advantages: "Applicable whatever the initial performance of the company",
      drawbacks: [
        "Does not acknowledge past efforts and investments for low-carbon transition",
        "Emission imbalances may occur due to mathematical construction of emission trajectories"
      ]
    },
    evaluatingBoundaries: {
      title: "How to Evaluate Steelmaker Boundaries",
      description: "Sustainable STEEL principles developed a 'fixed system boundary' based on Net-Zero Steel Pathway Methodology Project (NZSPMP) recommendations.",
      benefits: [
        "Standardisation of emissions evaluation regardless of integrated or non-integrated client",
        "Capacity to evaluate DRI always as scope 1 emissions even if steelmaker accounts for scope 2 or 3",
        "Does not require additional data collection for most steelmakers",
        "Financial institution can apply this model independently from how steelmaker delivers emission data"
      ]
    },
    evaluatingSectoralBenchmark: {
      title: "How to Evaluate Sectoral Benchmark Pathway",
      description: "There is a recognised difference between emission intensity of primary and secondary steelmaking reflected in the sectoral benchmark pathway.",
      financialInstitutionSteps: [
        "Understand which climate model is used by steelmaker (IEAs, World Energy Outlook etc.) and benchmark against 1.5°C, Below 2°C or NDCs using Transition Arc tool",
        "Divide sectoral benchmark pathway for integrated, recycled and split steelmaking. Use Transition Arc for primary/secondary, MPP Steel Sector Transition Strategy Model for split",
        "Use Transition Arc tool to verify if steelmaker is using correct sectoral benchmark pathway aligned with international climate goals"
      ],
      metricsComparison: {
        emissionIntensity: "If measured correctly can be compared with benchmark scenario of other companies",
        absoluteEmissions: "If relevant company activity can be found, historical emission intensities can be calculated",
        absoluteEmissionTargets: "Raises concerns for future activity levels - assume company activity increases at same rate as sector"
      }
    },
    nineCoreGriteria: {
      title: "9 Core Criteria for Steel Target Setting",
      criteria: [
        "For target-setting with iron & steel SDA, emissions must align with the defined core boundary, using hot rolled steel as the intensity denominator. Steelmakers using absolute contraction method must include all core boundary activities in targets.",
        "The iron & steel SDA covers emissions within the core boundary. If these emissions are under 95% of total scope 1 and 2, the remainder requires a separate target using SBTi methods. If over 95%, all emissions may be included in core boundary target.",
        "When using iron & steel core boundary for near-term target-setting, companies must include upstream emissions from purchased intermediate products within boundary, regardless of share of total emissions or scope 3 target coverage.",
        "When using iron & steel SDA for near-term targets, companies must include downstream emissions from processing sold intermediate products within core boundary, regardless of share of total emissions or scope 3 coverage.",
        "Near-term iron & steelmakers' science-based targets must include a scope 3 target covering all category 3 'fuel- and energy-related emissions' per GHG Protocol.",
        "When using iron & steel SDA for target-setting, companies must justify their growth projection in target submission, including relevant public or internal documents if applicable.",
        "When using iron & steel SDA for target-setting, target wording must mention that the calculation depends on the scrap share.",
        "When using iron & steel SDA for target-setting, annual disclosure of emissions and scrap ratio aligned with target boundary is mandatory.",
        "Iron- or steelmakers reducing their scrap ratio in target must justify this reduction during target validation and disclose that calculation is based on decreasing scrap ratio in public documents."
      ]
    },
    fourStepsForFinancialInstitutions: {
      title: "Four Steps for Financial Institutions to Address Science-Based Targets",
      steps: [
        {
          step: 1,
          title: "Determine target boundaries, scopes and target-setting methods",
          nearTerm: "Use SBTi 'Corporate Near-Term Criteria' and 'Corporate Net-Zero Standard Criteria'. At least 95% of all scope 1 and 2 emissions shall be included. Category 3 coverage shall be 100% of inventory.",
          longTerm: "Coverage shall be at least 90% for scope 3 emissions. Follow cross-sector guidance and may use Net-Zero Tool."
        },
        {
          step: 2,
          title: "Calculate Emissions Inventory",
          requirements: [
            "Follow SBTi Target Validation Protocol",
            "Follow GHG Protocol Corporate Accounting and Reporting Standard",
            "Follow Scope 2 Guidance and Corporate Value Chain (Scope 3) Standard",
            "Cover all relevant GHGs as required by GHG Protocol Corporate Standard and SBTi Criteria",
            "For scrap ratio, only include home scrap, prompt scrap and end-of-life scrap entering the melt shop"
          ]
        },
        {
          step: 3,
          title: "Construct targets",
          tools: {
            nearTerm: "Use SBTi standalone Steel Science-Based Target-Setting Tool. Iron and steelmakers use 'Iron & Steelmaker Tool' sheet. Steel purchasers use 'Steel Procurement Tool' sheet.",
            longTerm: "Use Net-Zero Tool",
            aca: "Use SBTi cross-sector tool, entering all core boundary emissions as if they were scope 1"
          }
        },
        {
          step: 4,
          title: "Submit target to SBTi",
          requirements: [
            "Follow general SBTi guidelines for target validation",
            "Follow SBTi Criteria C10 for emissions associated with biomass feedstocks",
            "Upstream iron ore suppliers and hydrogen producers may use iron & steel SDA for scope 3 category 10 targets with 1.5°C ambition",
            "For hydrogen producer (sector agnostic products), ambition must be WB2C",
            "For automaker/construction company (Category 1: purchased goods and services), ambition must be 1.5°C or WB2C"
          ]
        }
      ]
    },
    benchmarks: {
      combined1_5C: {
        title: "Combined Emission Intensity Benchmarks (1.5°C scenario)",
        values: [
          { year: 2030, intensity: "0.99 tCO2/t steel" },
          { year: 2040, intensity: "0.37 tCO2/t steel" },
          { year: 2050, intensity: "0.12 tCO2/t steel" }
        ]
      },
      primary1_5C: {
        title: "Primary Steel Benchmarks (1.5°C scenario)",
        values: [
          { year: 2030, intensity: "1.22 tCO2/t steel" },
          { year: 2040, intensity: "0.37 tCO2/t steel" },
          { year: 2050, intensity: "0.05 tCO2/t steel" }
        ]
      },
      secondary1_5C: {
        title: "Secondary Steel Benchmarks (1.5°C scenario)",
        values: [
          { year: 2030, intensity: "0.28 tCO2/t steel" },
          { year: 2040, intensity: "0.16 tCO2/t steel" },
          { year: 2050, intensity: "0.05 tCO2/t steel" }
        ]
      },
      scope1_2Emissions1_5C: {
        title: "Scope 1+2 Emissions (1.5°C scenario)",
        values: [
          { year: 2030, emissions: "2083 Mt" },
          { year: 2040, emissions: "749 Mt" },
          { year: 2050, emissions: "252 Mt" }
        ]
      }
    }
  },

  kpis: {
    title: "Key Performance Indicators",
    content: `The following KPIs are most relevant for assessing steel sector transition performance. KPIs have been derived from EU Taxonomy Regulation, target setting methodology by UNEP FI, ACT Initiative, Transition Plan Taskforce, WBCSD, WBA and academia.`,
    approach: "Based on identification of relevant materials and processes under EU Taxonomy technical screening criteria, with benchmarks identified and potential application at assets, company and value chain level considered.",
    indicators: [
      {
        name: "Physical Emission Intensity",
        introduction: "Disclosing targets in emission intensity metrics provides a relative assessment of environmental impact. Commonly used by World Steel Association, ResponsibleSteel, and SBTi Sectoral Decarbonization Approach.",
        issue: "Assessing solely through emission intensity may lead to misalignment with carbon budget. May not directly correlate with overall carbon budget - a borrower can align intensity targets but exceed carbon budget through production volume increases.",
        solution: "Emission intensity metrics enable more equitable comparison between steelmakers by normalizing emissions by output, allowing direct comparison regardless of size.",
        formula: "Scope 1+2 GHG emissions / tonnes of crude steel produced",
        benchmarks: {
          euTaxonomy: {
            title: "EU Taxonomy Substantial Contribution Thresholds",
            values: [
              { product: "Hot metal", threshold: "≤ 1.331 tCO2e/t crude steel" },
              { product: "Sintered ore", threshold: "≤ 0.163 tCO2e/t crude steel" },
              { product: "Coke (excluding lignite coke)", threshold: "≤ 0.144 tCO2e/t crude steel" },
              { product: "Iron casting", threshold: "≤ 0.299 tCO2e/t crude steel" },
              { product: "EAF high alloy steel", threshold: "≤ 0.266 tCO2e/t crude steel" },
              { product: "EAF carbon steel", threshold: "≤ 0.209 tCO2e/t crude steel" }
            ],
            scrapInputRequirements: [
              "High alloy steel: ≥70% scrap input relative to product output",
              "Carbon steel: ≥90% scrap input relative to product output"
            ]
          },
          tpiCombined: {
            title: "TPI Combined Benchmarks (1.5°C scenario)",
            values: [
              { year: 2030, intensity: "0.99 tCO2/t steel" },
              { year: 2040, intensity: "0.37 tCO2/t steel" },
              { year: 2050, intensity: "0.12 tCO2/t steel" }
            ]
          },
          tpiPrimary: {
            title: "TPI Primary Steel Benchmarks (1.5°C scenario)",
            values: [
              { year: 2030, intensity: "1.22 tCO2/t steel" },
              { year: 2040, intensity: "0.37 tCO2/t steel" },
              { year: 2050, intensity: "0.05 tCO2/t steel" }
            ]
          },
          tpiSecondary: {
            title: "TPI Secondary Steel Benchmarks (1.5°C scenario)",
            values: [
              { year: 2030, intensity: "0.28 tCO2/t steel" },
              { year: 2040, intensity: "0.16 tCO2/t steel" },
              { year: 2050, intensity: "0.05 tCO2/t steel" }
            ]
          }
        },
        note: "There is a systematic difference in emissions intensity between primary and secondary steelmaking. A combined benchmark may be too strict for pure primary producers and too lenient for pure secondary producers."
      },
      {
        name: "Scope 1+2 Emission Reduction Alignment",
        introduction: "Direct emissions from activities within operational boundaries (Scope 1) and emissions from electricity use (Scope 2) are contingent upon borrower's internal dependencies under management.",
        issue: "Non-alignment creates transition risks that are legal, reputational, and financial. Financial institution must ascertain whether borrower follows emission objectives, otherwise risks may cascade to the financial institution.",
        solution: "Measure alignment of company's near- and long-term scope 1 and 2 emissions intensity reduction targets with decarbonization pathway. Identify gap between company's targets and pathway as a percentage (commitment gap).",
        formula: "Commitment Gap = (T_S12 - CB_S12) / (BAU_S12 - CB_S12)",
        formulaExplanation: {
          T_S12: "Company's Scope 1+2 target at target year",
          CB_S12: "Company's Scope 1+2 benchmark pathway",
          BAU_S12: "Business-as-usual pathway (unchanging intensity from reporting year)"
        },
        benchmarks: [
          "Long-term: 80-95% CO2 emissions reduction by 2050 compared to 1990 levels",
          "Medium-term: 30% Scope 1 and 2 emissions intensity reduction by 2030 from 2015 baseline"
        ],
        scope1_2EmissionsBenchmarks: [
          { year: 2030, emissions: "2083 Mt (Under 1.5°C scenario)" },
          { year: 2040, emissions: "749 Mt (Under 1.5°C scenario)" },
          { year: 2050, emissions: "252 Mt (Under 1.5°C scenario)" }
        ]
      },
      {
        name: "Trend in Past Scope 3 Emission Intensity",
        introduction: "Emissions intensity of purchased crude steel refers to indirect emissions from production before reaching purchasing entity. Closely tied to sourcing and operational decisions reflecting environmental impact of upstream activities.",
        solution: "Measure alignment of company's recent purchased crude steel emissions intensity trend with decarbonization pathway. Compare gradient of trend over 5-year period to reporting year with pathway trend over 5-year period after reporting year.",
        formulaComponents: {
          CB_S12_gradient: "Company's Decarbonization Pathway Trend Gradient - projected linear trend for emissions intensity over future 5-year period",
          CEI_Y: "Company's Emissions Intensity at Reporting Year - actual emissions intensity recorded at reporting year",
          CR_S12_gradient: "Company's Recent Emissions Intensity Trend Gradient - slope of linear trend for historical emissions intensity over past 5 years",
          transitionRatio: "r_S12 = CR'_S12 / CB'_S12 - reveals how well recent reductions align with needed future reductions"
        },
        benchmarks: "ArcelorMittal committed to reducing Scope 3 emissions intensity by 25% by 2030",
        note: "Use TPI benchmarks for primary/secondary split assessment"
      },
      {
        name: "R&D in Climate Change Mitigation Technologies",
        introduction: "Gauges CapEx dedicated to innovative, decarbonizing technologies. Enables financial institution to quantify borrower's CapEx allocation for climate solutions relative to total capital investments.",
        issue: "Limited transparency on R&D spending directed toward low-carbon technologies hampers institution's ability to gauge alignment with sector's decarbonization pathway. Creates exposure to credit, reputational, and operational risks.",
        solution: "Measure ratio of R&D investments in mitigation-relevant technologies compared to total R&D. Higher maturity score indicates higher share in R&D costs for these technologies.",
        formula: "KPI = (I_mature + I_non-mature) × M / I_R&D",
        formulaComponents: {
          I_mature: "R&D investment in mature low-carbon technologies (TRL 8-11)",
          I_non_mature: "R&D investment in non-mature low-carbon technologies (TRL 1-7)",
          M: "Maturity score based on ACT methodology",
          I_RD: "Total R&D investment by the company"
        },
        trlDefinitions: {
          nonMature: [
            "TRL 1: Initial Idea - Basic principles defined",
            "TRL 2: Application Formulated - Concept and application formulated",
            "TRL 3: Concept Needs Validation - Requires prototyping",
            "TRL 4: Early Prototype - Proven under test conditions",
            "TRL 5: Large Prototype - Components tested under deployment-like conditions",
            "TRL 6: Full Prototype at Scale - Validated at full scale",
            "TRL 7: Pre-Commercial Demonstration - Operates successfully in anticipated conditions"
          ],
          mature: [
            "TRL 8: First-of-a-Kind Commercial - Commercial demonstration at full scale",
            "TRL 9: Commercial Operation - Commercially available, requires continuous improvement",
            "TRL 10: Integration at Scale - Commercial but may require additional integration efforts",
            "TRL 11: Proof of Stability - Demonstrates predictable growth and long-term stability"
          ]
        },
        relevantTechnologies: [
          "Improving energy efficiency",
          "Switching to alternative fuels (including low-carbon H2)",
          "Using emerging and innovative technologies",
          "Carbon capture and storage (CCS)",
          "Carbon capture, utilization and storage (CCUS)",
          "Material efficiency that reduces steel demands",
          "Waste heat recovery"
        ]
      },
      {
        name: "Scrap Reduction Strategy",
        introduction: "Pre-consumer scrap from yield losses during iron and steel-making is a major waste stream. Contributes significantly to GHG emissions. Steel sector faces mounting pressure to enhance resource efficiency.",
        issue: "Substantial number of companies lack cohesive approach to scrap management. Creates operational inefficiencies, heightened production costs, and undermines credibility of sustainability initiatives.",
        solution: "Global scrap market estimated at 600-650Mt, expected to rise to 800Mt by 2030 and around a billion tonnes by 2050.",
        bestPracticeElements: [
          "Basing strategy on costing of value of scrap",
          "Commitment to reduce scrap in direct operations (covers all operations and whole organisational boundary)",
          "Using targets with end dates for scrap reduction",
          "Having interim targets",
          "Following waste hierarchy approach (prevention first)",
          "Management at high level within organisation",
          "Monitoring, reporting and verification processes",
          "Continuous improvement/learning feedback mechanisms",
          "Commitments to employee education",
          "Linking scrap reduction strategy to core business strategy",
          "Linking scrap reduction strategy to core business operations (procurement, product design)"
        ],
        benchmarks: {
          wasteReduction: [
            "EU Commission baseline: up to 50% waste reduction by 2030",
            "Industry benchmark: 70% waste reduction by 2030 for companies adopting advanced circular practices"
          ],
          recyclingRate: "Actual recycling rate for steel packaging: approximately 84% as of 2019",
          emissionReduction: "Material efficiency and steel recycling can reduce emissions by up to 55% in EU",
          materialEfficiency: "Material efficiency improvements can reduce steel production by 22-28% in Europe by 2050 vs BAU",
          landfill: [
            "By 2025: maximum 10% recyclable waste to landfills",
            "By 2035: 65% municipal waste must be recycled"
          ],
          scrapShare: {
            formula: "Scrap Share = Scrap Input / Total Metallic Inputs",
            target: "45.3% share of metallic inputs by 2050 under SDS scenario"
          }
        }
      }
    ]
  },

  lockedInEmissions: {
    title: "Locked-in Emissions for the Steel Sector",
    introduction: "Achievement of climate goals is significantly impacted by locked-in emissions from continued use of carbon-intensive production methods and fossil-fuel-based energy sources. These emissions pose major challenge as they largely stem from traditional blast furnace operations and coal-based processes.",
    issue: "Credibility of transition plan is influenced by lack of awareness regarding potential locked-in emissions. Financial institution is exposed to increased risk of financing emissions if borrower's carbon budget is exceeded due to locked-in emissions.",
    solution: "The KPI enables financial institution to evaluate extent to which borrower's decarbonization objectives are aligned with downstream emissions. Analyzing locked-in emissions alongside science-based budgets introduces means to scrutinize potential cost of inaction.",
    formulas: {
      keyAssets: {
        title: "Formula for Locked-in Emissions for Key Assets",
        formula: "Cumulative emissions = Σ (Annual emissions × Remaining lifetime)",
        description: "Emissions calculated based on remaining operational lifetime of both active and planned facilities"
      },
      fossilFuelAssets: {
        title: "Formula for Fossil Fuel Assets",
        formula: "Locked-in emissions = Σ (Facility emissions × Remaining operational years)",
        description: "Applies to BF-BOF and other fossil fuel-dependent assets"
      },
      soldProducts: {
        title: "Formula for Locked-in Emissions Associated with Sold Products",
        formula: "Product locked-in emissions = Sales volume × Product emissions intensity × Product lifetime",
        description: "Emissions calculated over products lifetime, incorporating sales volume and emissions intensity"
      },
      cumulative: {
        title: "Formula for Cumulative Locked-in Emissions",
        formula: "Total locked-in = Facilities locked-in (Scope 1+2) + Products locked-in (Scope 3)",
        description: "Accounts for both direct and indirect GHG emissions under Scope 1, 2 and 3 categories"
      },
      carbonLockInRatio: {
        title: "Carbon Lock-in Ratio",
        formula: "Lock-in ratio = Cumulative locked-in emissions / Available carbon budget",
        description: "Evaluates how effectively a steel production company meets its decarbonization targets by comparing locked-in emissions with carbon budget"
      }
    },
    carbonBudget: {
      global: "400 GtCO2 until 2050 (1.5°C with 67% certainty)",
      steelSectorShare: "~19 Gt CO2 (5.0%)",
      oecmAllocation: {
        period2020_2030: "~14 Gt CO2",
        period2020_2050: "~19 Gt CO2"
      }
    },
    financialInstitutionAssessment: {
      title: "How Financial Institutions Should Assess Carbon Lock-in Risk",
      attributionFactor: {
        description: "Cumulative locked-in emissions influence the attribution factor as specified by UNEP-Fi and PCAF when there is fluctuation in emission intensity during production or in absolute emissions.",
        conditions: [
          "The denominator variable of the attribution factor is contingent upon the asset type",
          "The variable for corporate emissions is derived from self-reported data",
          "The variable for corporate output is a productivity statistic such as number of vehicles produced"
        ]
      },
      formulasForSteelSector: {
        listedCompanies: "Attribution Factor = Outstanding Amount / (Enterprise Value Including Cash)",
        privateBonds: "Attribution Factor = Outstanding Amount / (Total Debt + Total Equity)"
      },
      impact: "If emission intensity of borrower exceeds carbon budget, there will be an impact on financed emissions allocated to financial institution."
    },
    engagingWithLockedInEmissions: {
      title: "How to Engage with Locked-in Emissions Exceeding Carbon Budget",
      requiredData: [
        "The allocation methodology used by borrower to allocate its carbon budget",
        "Cumulative absolute direct and indirect 1, 2 and 3 emissions",
        "Product emission intensity",
        "Quantity of product produced"
      ]
    },
    assessingCredibility: {
      title: "How to Understand Whether Borrower's Carbon Budget is Credible",
      description: "Only 2 allocation methodologies developed by SBTi can be used to scientifically allocate future emissions.",
      methodologies: {
        sda: {
          name: "Sectoral Decarbonisation Approach (SDA)",
          description: "First method that applies convergence approach to translate sectoral pathway from 2°C scenario to company-specific targets. Works well with carbon intensity of homogeneous sectors.",
          applicability: "Assumes carbon intensity reduction of company converges with sector at similar rate"
        },
        aca: {
          name: "Absolute Contraction Approach (ACA)",
          description: "Applicable for heterogeneous sectors where determination of meaningful emission intensity is less straightforward.",
          applicability: "Companies set emission reduction targets aligned with global annual emissions reduction rate required to meet 1.5°C or WB-2°C"
        }
      },
      stepsToEvaluate: [
        "Assess allocation approach used by borrower",
        "Understand if it is SDA or ACA",
        "Understand whether target has been validated following SBTi Criteria Assessment Indicators (CAI) or complies with procedure for validation of SBTi targets",
        "Use SBTi target setting tool and assess validity of disclosed data",
        "Compare validity of disclosed data with cumulative locked-in emissions",
        "Calculate if borrower's emission intensity exceeds or is in line with carbon budget"
      ]
    },
    exceedingCarbonBudget: {
      title: "What to Do If Emission Intensity Exceeds Carbon Budget",
      pcafRequirements: [
        "Recognition",
        "Measurement",
        "Attribution",
        "Data quality",
        "Disclosure"
      ],
      attributionMethods: {
        listedCompanies: {
          formula: "Financed Emissions = Attribution Factor × Company Emissions",
          attributionFactor: "Outstanding Amount / Enterprise Value Including Cash"
        },
        privateBonds: {
          formula: "Financed Emissions = Attribution Factor × Company Emissions",
          attributionFactor: "Outstanding Amount / (Total Debt + Total Equity)"
        }
      },
      solution: "Understand which is the source of company emissions and if financed area is actively contributing to exceedance of borrower's carbon budget"
    },
    definition: "Carbon lock-in in the steel industry is defined as the action of enabling carbon-intensive technologies such as BF-BOF to persist, causing lower carbon alternatives to be 'locked out'."
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
