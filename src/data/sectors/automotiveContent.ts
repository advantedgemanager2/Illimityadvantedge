// Complete Automotive Sector Content - All data from automotive.txt

export const automotiveSections = {
  introduction: {
    title: "Introduction",
    content: `Automobiles, including cars, vehicles, trucks, and other wheeled passenger or commercial vehicles, play a significant role in our societal framework. The transportation sector accounts for **23% of worldwide energy-related carbon dioxide (CO2) emissions**.

The primary obstacle to decarbonisation is in the identification and administration of carmakers' supply chains. The automobile industry relies extensively on suppliers, and a single end-product is the culmination of an assembly line including thousands of components, the majority of which are manufactured off-site from the car manufacturer's premises.

The automobile sector is a prosperous market that is projected to experience significant growth. The key stakeholders in the industry are responding to the requirements for reducing carbon emissions by embracing and investing in emerging technologies such as electric vehicles (EVs), autonomous driving, and fuel cell vehicles (FCVs).

In order for the automotive industry to attain Net-Zero emissions, it is necessary to implement innovative technology and effective policies that promote the use of electric vehicles on existing road networks. A comprehensive strategy must include technical innovation, supply chain optimization, and consumer behavior modification.`
  },

  marketOverview: {
    title: "Market and Mainstream Technology",
    content: `**Market Value:**
- European passenger car manufacturing: projected to peak at €413.2bn by 2025, stabilizing around €291.1bn by 2028
- Projected value increase of 16.7% from 2022 to 2028

**Market Segmentation (2023):**
- Passenger cars: 85.2% of total volume
- Light commercial vehicles: 12.16%
- Heavy trucks: 2.34%
- Heavy buses: 0.25%

**Regional Production:**
Germany is the largest producer in Europe, followed by Spain, Czechia, France, and Turkey.

**Registration by Fuel Type (2023):**
1. Petrol cars (highest)
2. Hybrid electric vehicles
3. Battery-electric vehicles
4. Diesel
5. Plug-in hybrid electric vehicles

**Key Players:**
Volkswagen, Daimler, PSA, and Renault are leading multinational manufacturers in Europe.`,

    businessModel: `**Primary Business Model:**
- B2B selling of vehicles to dealerships
- Assembly line production with 5,000-10,000 parts per vehicle
- Most components sourced from suppliers

**Additional Revenue Streams:**
- Licensed garages for maintenance and service
- Subscription services (e.g., Ford Pro+ fleet management, BMW heated seats)

**Suppliers:**
- Responsible for component and part manufacturing
- Often operate on Just-in-Time (JIT) supply model
- Collaborate on product design and engineering

**Dealerships:**
- Primary B2C interface
- Provide financing and leasing options
- Offer after-sales services`
  },

  mainstreamTechnologies: {
    title: "Mainstream Technologies",
    technologies: [
      {
        name: "Internal Combustion Engines (ICE)",
        description: "Primary powertrain technology since inception of automotive vehicles. Relies on igniting fuel-air mixture. Transport sector accounts for 23% of global energy-related CO2 emissions; road vehicles account for 70% of transport emissions (16.7% of global).",
        innovations: ["HCCI engines", "Variable Valve Timing (VVT)", "Synthetic and biofuels"]
      },
      {
        name: "Battery Electric Vehicles (BEVs)",
        description: "Entirely powered by electricity stored in rechargeable batteries. Zero tailpipe emissions. 1 in 5 new cars sold in 2023 was electric.",
        applications: "From compact city cars to SUVs and commercial vehicles"
      },
      {
        name: "Plug-in Hybrid Electric Vehicles (PHEVs)",
        description: "Combine ICE with electric motor and battery. Can be charged externally and operate using gasoline for longer journeys.",
        examples: "Toyota Prius Prime, Ford Escape PHEV, Mitsubishi Outlander PHEV"
      },
      {
        name: "Hybrid Electric Vehicles (HEVs)",
        description: "Combine ICE with electric motors to optimize fuel efficiency. Switch between electric for low-speed and ICE for higher speeds.",
        features: "Enhanced battery capacities and sophisticated energy management"
      },
      {
        name: "Fuel Cell Vehicles (FCVs)",
        description: "Produce electricity through chemical reaction in fuel cell (usually hydrogen). Only byproducts are water and heat.",
        challenges: "Lack of hydrogen infrastructure, high production costs"
      },
      {
        name: "Autonomous Driving",
        description: "Uses sensors, cameras, radar, lidar, GPS, and AI for self-driving capability.",
        levels: [
          "Level 0: No automation",
          "Level 1: Driver assistance",
          "Level 2: Partial automation",
          "Level 3: Conditional automation",
          "Level 4: High automation",
          "Level 5: Full automation"
        ]
      }
    ]
  },

  bestPractices: {
    title: "Best Practices",
    lifecycleStages: [
      {
        stage: "Design and Development",
        practices: [
          "Improve fuel efficiency through aerodynamics",
          "Lightweight design for better fuel economy",
          "Design for recyclability and disassembly",
          "Develop efficient powertrains and regenerative braking",
          "Advance battery technology"
        ]
      },
      {
        stage: "Production - Procurement",
        practices: [
          "Secure access to rare earth elements and critical components",
          "Strengthen supply chain resilience",
          "Address geopolitical sourcing risks",
          "Local sourcing where possible (e.g., British Lithium in Cornwall)",
          "Invest in R&D for alternative materials (e.g., magnesium for lithium)"
        ]
      },
      {
        stage: "Production - Manufacturing",
        practices: [
          "Energy efficiency improvements in stamping, casting, painting",
          "Heat pump technology for waste heat utilization",
          "Digital twins and AI tools",
          "Lean manufacturing principles",
          "Carbon-neutral manufacturing processes"
        ]
      },
      {
        stage: "Use - Distribution",
        practices: [
          "Route optimization",
          "Minimize empty backhaul trips",
          "Electrification of delivery fleets",
          "Just-in-time and lean inventory practices",
          "Collaborative logistics sharing"
        ]
      },
      {
        stage: "Use - Operation",
        practices: [
          "Transition to EV and hydrogen technology",
          "Vehicle-to-vehicle and vehicle-to-infrastructure communication",
          "Intelligent transportation systems",
          "Infrastructure development for charging and hydrogen refueling"
        ]
      },
      {
        stage: "End of Life",
        practices: [
          "Remanufacturing (conserves ~96% of raw materials, ~40% CO2e reduction)",
          "High vehicle utilization models (ride-hailing, car sharing, MaaS)",
          "Recycling centers for materials recovery",
          "Modular designs for easy disassembly"
        ]
      }
    ],
    decarbonizationPractices: [
      "Vehicle electrification (EVs, PHEVs)",
      "Sustainable and recyclable materials",
      "Comprehensive lifecycle assessments",
      "Energy-efficient manufacturing (lean production)",
      "Supply chain decarbonization",
      "Circular economy approach",
      "Renewable energy for manufacturing",
      "Zero-emission transport for logistics",
      "Light-weighting through innovative engineering",
      "Alternative fuels (hydrogen, biofuels)",
      "Consumer education and outreach"
    ]
  },

  environmentalImpacts: {
    title: "Environmental Impacts",
    impacts: [
      {
        category: "Climate Change - GHG Emissions",
        description: "Road vehicles account for 16.7% of global emissions. CO2 emissions trap heat, causing global warming, extreme weather, rising sea levels, ocean acidification, and biodiversity loss."
      },
      {
        category: "Embedded Emissions",
        description: "EV battery production accounts for 40-60% of overall production emissions. Battery components (nickel, manganese, cobalt, lithium, graphite) require energy-intensive mining and processing."
      },
      {
        category: "Air Pollution",
        description: "Vehicles emit NOx and particulate matter contributing to smog and respiratory problems. Dieselgate scandal exposed NOx emissions cheating."
      },
      {
        category: "Energy Consumption",
        description: "Manufacturing a car can consume energy equivalent to driving it thousands of miles. Aluminium production is extremely energy-intensive."
      },
      {
        category: "Resource Depletion",
        description: "Mining of rare earth metals (neodymium, dysprosium) and battery materials (lithium, cobalt) causes habitat destruction and environmental degradation."
      },
      {
        category: "Land Use and Urban Sprawl",
        description: "Roads and parking infrastructure encroach on natural habitats. Suburban expansion increases commute times and energy consumption."
      },
      {
        category: "Waste Generation",
        description: "Includes manufacturing waste, packaging waste, end-of-life vehicles, hazardous waste, e-waste, scrap metal, rubber, and plastics."
      },
      {
        category: "Noise Pollution",
        description: "Traffic noise disrupts sleep patterns, causes stress, and interferes with wildlife behavior and communication."
      },
      {
        category: "Water Pollution",
        description: "Oil and heavy metals from vehicles contaminate water bodies through rainwater runoff."
      },
      {
        category: "Biodiversity Impact",
        description: "Road construction fragments habitats, disrupts wildlife migration. Invasive species spread facilitated by roads."
      },
      {
        category: "Public Health",
        description: "Air pollution linked to respiratory diseases, cardiovascular issues, and mental health problems. Children and elderly particularly vulnerable."
      }
    ]
  },

  regulationAndLegislation: {
    title: "Regulation and Legislation",
    regulations: [
      {
        name: "EU Climate Neutrality Goal",
        description: "Climate-neutral by 2050. European Climate Law enacted March 2020. Fit for 55 Package targets 55% GHG reduction by 2030, ban on new ICE cars and vans by 2035."
      },
      {
        name: "EU Emissions Trading System (EU ETS)",
        description: "Cap-and-trade system incentivizing emission reductions. Companies can profit by selling excess allowances. Supports innovation in low-carbon technologies."
      },
      {
        name: "Vehicle Emission Standards",
        description: "Euro 6 standards for passenger vehicles require real-world emissions testing (RDE). Heavy-duty vehicles must meet Euro VI standards. Performance standards set fleet-wide CO2 targets."
      },
      {
        name: "Clean Mobility",
        description: "Alternative Fuels Infrastructure Regulation (AFIR) mandates EV charging and hydrogen refueling stations. Clean Vehicles Directive sets targets for public procurement."
      },
      {
        name: "Circular Economy",
        description: "End-of-Life Vehicles Directive targets 95% recovery rate. Battery Directive extended to all battery types with recycling targets."
      },
      {
        name: "Supply Chain Transparency",
        description: "Corporate Sustainability Reporting Directive (CSRD) requires emissions reporting. Corporate Due Diligence Directive addresses supply chain human rights and environmental impacts."
      },
      {
        name: "EV Infrastructure",
        description: "Trans-European Transport Network (TEN-T) integrates EV infrastructure. AFIR sets distance-based targets for charging stations on major routes."
      },
      {
        name: "EV Incentives",
        description: "Vary by member state: purchase subsidies, tax exemptions, access to low-emission zones, reduced registration fees."
      },
      {
        name: "Heavy-Duty Vehicles",
        description: "Specific CO2 emission standards for trucks and buses. Incentives for zero-emission HDVs. Charging and hydrogen infrastructure requirements."
      }
    ],
    coalitionFrameworks: [
      "Science Based Targets initiative (SBTi)",
      "Climate Action 100+",
      "Drive to Zero campaign",
      "Transport Decarbonisation Alliance",
      "EV100 initiative"
    ]
  },

  driversOfChange: {
    title: "Drivers of Change",
    drivers: [
      {
        category: "Economic",
        factors: [
          "Rising fuel costs driving EV adoption",
          "Carbon pricing mechanisms",
          "Investment in green technology",
          "Supply chain cost optimization"
        ]
      },
      {
        category: "Technology",
        factors: [
          "Battery technology improvements (cost, range, charging speed)",
          "Autonomous driving capabilities",
          "Connected car technology (5G networks)",
          "Hydrogen fuel cell development",
          "Lightweight materials innovation"
        ]
      },
      {
        category: "Society",
        factors: [
          "Consumer preference for sustainable products",
          "Urbanization and changing mobility patterns",
          "Shared mobility services growth",
          "Environmental awareness"
        ]
      },
      {
        category: "Environment/Policy",
        factors: [
          "Climate targets and regulations",
          "Emission standards tightening",
          "Low-emission zones in cities",
          "Incentives for zero-emission vehicles"
        ]
      }
    ]
  },

  transitionPlanCredibility: {
    title: "Transition Plan Credibility",
    content: `Transition plans for the automotive industry must address the entire value chain from component suppliers to vehicle end-of-life.`,
    effectiveness: [
      "Clear and ambitious emission reduction targets",
      "Science-based targets aligned with 1.5°C pathways",
      "Comprehensive scope 1, 2, and 3 coverage",
      "Timeline for ICE phase-out",
      "EV production capacity expansion plans",
      "Supply chain decarbonization strategy",
      "Battery lifecycle management",
      "CapEx allocation for electrification"
    ],
    specificity: [
      "Production capacity by powertrain type",
      "EV sales targets by year and market",
      "Battery sourcing and production plans",
      "Charging infrastructure investments",
      "Supplier engagement programs",
      "R&D investment in zero-emission technologies",
      "Workforce transition plans"
    ],
    carbonLockInRisk: `Carbon lock-in risk in automotive relates to:
- Continued investment in ICE production capacity
- Long vehicle lifespans (15+ years average)
- Infrastructure lock-in (fueling stations vs. charging)
- Supply chain dependencies on ICE components`
  },

  targetSetting: {
    title: "Automotive Target Setting (SBTi Sectoral Approach)",
    introduction: "SBTi has published methodology for target setting of the land transport sector, clarifying previously undefined methodologies for automotive manufacturers to accurately assess carbon budgets.",
    generalCriteria: [
      "All targets, whether absolute or intensity, covering land transport activities must be on a Well-to-Wheel (WTW) basis",
      "Automotive manufacturer must set sector SDA targets and disclose/report base year, most recent year and target year activity data with metrics (passenger-kilometre or tonne-kilometres)",
      "Emissions covered when using SDA Transport Tool must be in scope 3, related to transportation activities outside company's organisational boundary",
      "Automakers are prohibited from using transport SDA to establish targets for scope 3 category 11, only for other scope 3 categories",
      "Where intensity targets set for scope 3 using transport SDA are aggregated with other scope 3 targets on absolute basis, the intensity sub-target shall also be disclosed"
    ],
    specificCriteria: {
      title: "Specific Criteria for Automaker Target Setting",
      targetBoundary: {
        description: "Use SBTi 'Corporate Near-Term Criteria' and 'Corporate Net-Zero Standard Criteria' for scope 1, 2 and 3 emissions (not category 11 of scope 3).",
        requirements: [
          "Portfolio of emissions across vehicle category should be specified without geographical exclusions",
          "Calculation of emissions should reflect real life emissions using WLTP (Worldwide Harmonised Light Vehicle Test Procedure) or WHDC (World Harmonised Heavy-Duty Certification)"
        ]
      },
      scope3Category11: {
        description: "For calculation and target setting of category 11 scope 3 emissions:",
        requirements: [
          "Automakers shall use WTW basis",
          "Must set absolute emission reduction targets for emissions from use of sold products consistent with limiting global warming to 1.5°C",
          "Phase out of ICE cars and vans by 2035 in Europe and by 2040 globally",
          "Set consistent interim targets"
        ],
        statementFormat: "Company X commits to work toward the phase out of new internal combustion engine vehicles by 2035 in leading markets and by 2040 globally [or add earlier dates]",
        targetWording: "[Company Name] commits to reduce absolute scope 1 and 2 GHG emissions X% by [target year] from a [base year] base year, and absolute scope 3 GHG emissions from use of sold products X% by [target year] from a [base year] base year"
      }
    },
    intensityVsAbsoluteTargets: {
      title: "Emission Intensity vs Absolute Targets",
      description: "SBTi allows automaker targets to be expressed in intensity terms, but companies must disclose credible and justifiable projected target year unit sales and use them to calculate intensity reductions equivalent to absolute target ambition.",
      disclosureFormat: "Scope 3 category 11 automaker targets should be in passenger-kilometers or metric tonne-kilometer of sold manufactured vehicles"
    },
    minimumAmbition: {
      title: "Minimum Ambition",
      nearTerm: {
        tool: "SBTi Corporate Near-Term Tool",
        method: "Select 'absolute contraction approach' and input WTW absolute emission for lifetime of vehicles sold in base year for entire portfolio",
        output: "Percentage reduction to be achieved for scope 3 category 11"
      },
      longTerm: {
        tool: "SBTi Corporate Net-Zero Tool",
        minimumAmbition: "4.2% yearly reduction with base year to 2020 for 1.5°C alignment"
      }
    },
    scopeCoverage: {
      scope1: "Direct emissions from manufacturing",
      scope2: "Purchased electricity and heat",
      scope3: "Supply chain (Category 1: purchased goods and services) and use of sold products (Category 11)"
    },
    keyMetric: "gCO2/km for passenger vehicles (well-to-wheel basis), includes upstream fuel/electricity production"
  },

  kpis: {
    title: "Key Performance Indicators",
    methodology: "The approach applied for KPI selection is based on identification of relevant materials and processes under the technical screening criteria set by the EU Taxonomy Regulation. KPIs have been derived from target setting methodology by UNEP FI, ACT Initiative, Transition Plan Taskforce, WBCSD, WBA and academia.",
    indicators: [
      {
        name: "Physical Emission Intensity",
        description: "Average tank-to-wheel gram CO2 emissions per kilometre (gCO2/km) for newly registered passenger vehicles, quantified according to WLTP standards.",
        introduction: "Disclosing targets in emission intensity metrics translates into the assessment of relative environmental impact. Financial institutions need to compare emission intensity targets against a reference point set by a climate scenario.",
        issue: "Evaluating a borrower's performance using emission intensity indicators may distort alignment with carbon budget. Physical intensity metrics do not establish direct correlation with carbon budget - output can align with targets but production rate may cause carbon budget exceedance.",
        solution: "Use emission intensity metrics to evaluate key transition activities, but also consider absolute emission metrics to assess if carbon budget is kept within disclosed targets.",
        formula: "KPI ratio = (AANVy - AANVy+1) / (FINVy - FINVy+1)",
        formulaComponents: {
          AANVy: "Actual Average new vehicle emissions in year 0",
          AANVy_plus1: "Actual Average new vehicle emissions in year 1",
          FINVy: "Financial institution's Sectoral Average new vehicle emissions target in year 0 (1.5°C)",
          FINVy_plus1: "Financial institution's Sectoral Average new vehicle emissions target in year 1 (1.5°C)"
        },
        benchmarks: {
          tpi: {
            title: "TPI Benchmarks (WLTP)",
            nationalPledges: {
              "2030": "110.9 gCO2/km",
              "2050": "77.93 gCO2/km"
            },
            below2Degrees: {
              "2030": "85.9 gCO2/km",
              "2050": "24.83 gCO2/km"
            },
            onePointFiveDegrees: {
              "2030": "55.16 gCO2/km",
              "2050": "0.54 gCO2/km"
            }
          },
          euEmissionStandards: {
            title: "EU Emission Performance Standards (Regulation EU 2019/631)",
            cars: [
              { period: "2020-2024", target: "95 gCO2/km" },
              { period: "2025-2029", target: "93.6 gCO2/km (15% reduction)" },
              { period: "2030-2034", target: "49.5 gCO2/km (55% reduction)" },
              { period: "2035+", target: "0 gCO2/km (100% reduction)" }
            ],
            vans: [
              { period: "2020-2024", target: "147 gCO2/km" },
              { period: "2025-2029", target: "153.9 gCO2/km then 125 gCO2/km (15% reduction)" },
              { period: "2030-2034", target: "90.6 gCO2/km then 73.5 gCO2/km (55% reduction)" },
              { period: "2035+", target: "0 gCO2/km (100% reduction)" }
            ]
          }
        }
      },
      {
        name: "Scope 1+2 Emission Reduction Alignment",
        description: "Measure of alignment of company's near- and long-term scope 1 and 2 emissions intensity reduction targets with decarbonisation pathway.",
        introduction: "Direct emissions from activities within operational boundaries (Scope 1) and emissions from electricity use (Scope 2) are contingent upon borrower's internal dependencies under management.",
        issue: "Non-alignment creates transition risks that are legal, reputational, and financial. Financial institution must ascertain whether borrower is in compliance with emission objectives.",
        solution: "Compare trend of company's target pathway to benchmark pathway trend and identify gap between both pathways in target year (commitment gap).",
        formula: "Commitment Gap = (EIc(TY) - EIc(RY)) / (EIB(TY) - EIc(RY))",
        formulaComponents: {
          EIc_TY: "Company scope 1 and 2 emissions intensity at target year",
          EIc_RY: "Company scope 1 and 2 emissions intensity at reporting year",
          EIB_TY: "Company's benchmark scope 1 and 2 emissions intensity at target year"
        },
        benchmarks: {
          "2030Target": { cars: "49.5 gCO2/km", vans: "153.9 gCO2/km" },
          "2035_2050Target": { cars: "0 gCO2/km", vans: "0 gCO2/km" }
        }
      },
      {
        name: "Trend in Past Scope 3 Upstream Emission Intensity",
        description: "Measure of alignment of past trend of company's scope 3 upstream emissions intensity with decarbonization pathway for each material.",
        introduction: "Scope 3 upstream emissions stem from operations before production processes: purchased goods and services, capital goods, fuel and energy related activities, transportation and distribution, waste, business travel, employee commuting, and leased assets.",
        issue: "Under ambitious EV adoption scenario, share of GHG emissions from material production projected to increase to 35% in 2030 and 60% in 2040 due to reduced in-use emissions from EVs and increased emissions from producing EV materials.",
        solution: "Compare company's scope 3 upstream emission intensity gradient over past 5 years with decarbonization pathway trend gradient over next 5 years.",
        materialBenchmarks: {
          aluminum: { current: "16-20 tCO2/t (integrated), 0.5-1 tCO2/t (recycled)", target2030: "7-8 tCO2/t", target2050: "Near zero" },
          steel: { current: "1.8-2.3 tCO2/t (BF), 0.3-0.7 tCO2/t (EAF)", target2030: "0.5 tCO2/t", target2050: "0.2 tCO2/t" },
          glass: { current: "0.85-1.0 tCO2/t", target2030: "0.5 tCO2/t", target2050: "Net-zero" },
          batteries: { current: "73-98 kgCO2/kWh", target2030: "40 kgCO2/kWh", target2050: "5-10 kgCO2/kWh" }
        }
      },
      {
        name: "Cumulative Scope 3 Downstream Emissions",
        description: "Measure of alignment of cumulative scope 3 downstream emissions with carbon budget calculated from low-carbon benchmark pathway and projected sales over 5-year period.",
        formula: "L.5years / B.5years",
        formulaComponents: {
          L_5years: "Total cumulative in-use GHG emissions implied by sales from RY+1 to RY+5",
          B_5years: "Company's vehicles carbon budget over 5 years after reporting year"
        },
        note: "Absolute GHG emissions over time is most robust measure for assessing company's contribution to global warming. 5-year horizon balances forward-looking assessment with forecast accuracy."
      },
      {
        name: "R&D Spending on Low-Carbon Technologies",
        description: "Ratio of R&D costs/investments in low-carbon technologies compared to total R&D investment.",
        introduction: "Underlies level of CapEx borrower is investing in innovating and decarbonizing products and production processes.",
        issue: "Lack of understanding regarding R&D spending on low-carbon technologies and limited information on CapEx in technology enabling sector decarbonization creates unfeasibility risks.",
        solution: "Measure ratio of company's R&D investment in low-carbon technologies over last 3 years to total R&D expenditure over same period.",
        scope: "Should include EV and hybrid vehicles, fuel-cell technologies, technologies reducing critical raw material processing, battery and fuel-cell recycling, and all 'net-zero technologies' under Net Zero Industry Act.",
        benchmarks: {
          horizonEurope: "35% of €95.5 billion budget for climate-related R&D",
          fitFor55: "40-50% of total R&D budget toward low-carbon technologies for 2030 targets",
          europeanBatteryAlliance: "50% of R&D budget by 2025 on battery technology, recycling, sustainability",
          euTaxonomy: "50% or more by 2030 for sustainable transport and clean energy technologies",
          greenDealIndustryPlan: "50% or more by 2025 on green technologies including zero-emission vehicles"
        }
      },
      {
        name: "Share of Low-Carbon Vehicles",
        description: "Measure of company's sales in last five years and expected growth in next three years of low-carbon vehicles, compared with 1.5°C scenario requirements.",
        introduction: "GHG emissions intensity pathways cannot be met without change in drivetrain technology. Sales are direct output measure indicating business model change.",
        dimensions: {
          dimension1: "Gap analysis comparing company's share of total sales from low-carbon vehicles with sector benchmark",
          dimension2: "Trend analysis comparing gradient of company's projected low-carbon vehicle share (RY to RY+3) with benchmark gradient"
        },
        benchmarks: {
          "2026": "35-40% of new vehicle sales as low-carbon vehicles",
          "2030": "50% of new vehicle sales as low-carbon vehicles",
          "2035": "100% zero-emission vehicles (all sales)",
          annualGrowthRate: "+5-7% annual growth in low-carbon vehicle sales (2024-2027)",
          acea2030: "BEV market share projected to reach 50-60%",
          euClimateLaw2050: "Full decarbonization of automotive sector (net-zero emissions)"
        }
      }
    ]
  },

  lockedInEmissions: {
    title: "Locked-in Emissions for the Automotive Sector",
    definitions: {
      keyAssets: "The sum of estimated scope 1 and 2 GHG emissions over the operating lifetime of active and firmly planned assets. Key assets are those owned or controlled by the company, consisting of existing and planned assets (stationary or mobile installations, facilities and equipment) that are sources of significant direct or energy-indirect GHG emissions. Firmly planned key assets are those the company will most likely deploy within next 5 years.",
      soldProducts: "The volume of sales of products in the reporting year multiplied by the sum of estimated direct use-phase GHG emissions over their expected lifetime."
    },
    formulas: {
      keyAssets: {
        title: "Formula for Locked-in Emissions for Key Assets",
        formula: "Cumulative emissions = Σ (Annual emissions × Remaining lifetime)",
        description: "Emissions calculated based on remaining operational lifetime of both active and planned facilities"
      },
      fossilFuelAssets: {
        title: "Formula for Fossil Fuel Assets",
        formula: "Locked-in emissions = Σ (Facility emissions × Remaining operational years)",
        description: "Applies to ICE manufacturing facilities and fossil fuel-dependent assets"
      },
      soldProducts: {
        title: "Formula for Locked-in Emissions Associated with Sold Products",
        formula: "Product locked-in emissions = Sales volume × Product emissions intensity × Product lifetime",
        description: "Emissions calculated over products lifetime (15+ years average for vehicles), incorporating sales volume and emissions intensity"
      },
      cumulative: {
        title: "Formula for Cumulative Locked-in Emissions",
        formula: "Total locked-in = Facilities locked-in (Scope 1+2) + Products locked-in (Scope 3)",
        description: "Accounts for both direct and indirect GHG emissions under Scope 1, 2 and 3 categories"
      }
    },
    financialInstitutionAssessment: {
      title: "How Financial Institutions Should Assess Carbon Lock-in Risk",
      description: "Financial institutions encounter dynamic risk when evaluating locked-in emissions, inherently linked to borrower's carbon budget. Cumulative locked-in emissions influence the attribution factor as specified by UNEP-Fi and PCAF when there is fluctuation in emission intensity or absolute emissions.",
      conditions: [
        "The denominator variable of the attribution factor is contingent upon the asset type",
        "The variable for corporate emissions is derived from self-reported data",
        "The variable for corporate output is a productivity statistic (e.g., number of vehicles produced)"
      ],
      portfolioEmissionsFormula: {
        description: "Portfolio emissions formula follows WACI (Weighted Average Carbon Emission Intensity) methodology. Primary metric is exhaust emissions in intensity format (emissions per kilometre).",
        note: "For institutions using scope 1 and 2 emissions in target setting (typically absolute terms), conversion to intensity metric is necessary."
      }
    },
    engagingWithLockedInEmissions: {
      title: "How to Engage with Locked-in Emissions Exceeding Carbon Budget",
      requiredData: [
        "The allocation methodology used by borrower to allocate its carbon budget",
        "Cumulative absolute direct and indirect scope 1, 2 and 3 emissions",
        "Product emission intensity",
        "Quantity of products produced"
      ]
    },
    assessingCredibility: {
      title: "How to Understand Whether Borrower's Carbon Budget is Credible",
      description: "Only 2 allocation methodologies developed by SBTi can be used to scientifically allocate future emissions.",
      methodologies: {
        sda: {
          name: "Sectoral Decarbonisation Approach (SDA)",
          description: "First method that applies convergence approach to translate sectoral pathway from 2°C scenario to company-specific targets accounting for growth and initial performance.",
          applicability: "Works well with carbon intensity of homogeneous sectors. Assumes company's carbon intensity reduction converges with sector at similar rate.",
          notApplicableWhen: ["No available sectoral scenario", "The sector is heterogeneous"]
        },
        aca: {
          name: "Absolute Contraction Approach (ACA)",
          description: "Applicable for heterogeneous sectors where determination of meaningful emission intensity is less straightforward.",
          methodology: "Companies set emission reduction targets aligned with global annual emissions reduction rate required to meet 1.5°C or WB-2°C.",
          drawbacks: ["Does not acknowledge past efforts and investments for low-carbon transition", "Emission imbalances may occur due to mathematical construction of emission trajectories"]
        }
      },
      stepsToEvaluate: [
        "Assess what allocation approach is used by borrower",
        "Understand if it is SDA or ACA",
        "Understand whether target has been validated following SBTi Criteria Assessment Indicators (CAI) or complies with procedure for validation of SBTi targets",
        "Use SBTi target setting tool and assess validity of disclosed data",
        "Compare validity of disclosed data with cumulative locked-in emissions",
        "Calculate if borrower's emission intensity exceeds or is in line with carbon budget"
      ]
    },
    exceedingCarbonBudget: {
      title: "What to Do If Emission Intensity Exceeds Carbon Budget",
      pcafRequirements: ["Recognition", "Measurement", "Attribution", "Data quality", "Disclosure"],
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
    benchmarks: {
      title: "EU Fleet Targets (WLTP)",
      passengerCars: [
        { period: "2020-2024", target: "95 gCO2/km", notes: "Baseline" },
        { period: "2025-2029", target: "93.6 gCO2/km", notes: "15% reduction" },
        { period: "2030-2034", target: "49.5 gCO2/km", notes: "55% reduction (Major decarbonisation)" },
        { period: "2035+", target: "0 gCO2/km", notes: "100% reduction (Net-zero emissions)" }
      ],
      lightCommercialVehicles: [
        { period: "2020-2024", target: "147 gCO2/km", notes: "Baseline" },
        { period: "2025-2029", target: "125 gCO2/km", notes: "15% reduction" },
        { period: "2030-2034", target: "73.5 gCO2/km", notes: "55% reduction" },
        { period: "2035+", target: "0 gCO2/km", notes: "100% reduction" }
      ]
    }
  },

  supplyChainComponents: {
    title: "Supply Chain Components for Scope 3 Upstream Emissions",
    introduction: "This section is applicable when borrowers lack GHG emissions data for category 1 scope 3 related to acquired goods and services. Until carbon accounting and emission intensity data are readily accessible, the optimal alternative is to ascertain whether materials used in vehicle production conform to EU standards for climate objectives.",
    components: {
      aluminum: {
        title: "Aluminum",
        importance: "Essential for automotive sector due to lightweight properties. Around 40% of aluminum end use in Europe is from transport sector. Low density (~2.71 g/cm3, one-third of steel) makes it suitable for lightweight vehicles. Reducing vehicle weight by 10% can lead to 6-8% improvement in fuel efficiency.",
        share: "~12% of vehicle weight",
        emissions: "High energy intensity (16-20 tCO2/t integrated, 0.5-1 tCO2/t recycled)",
        kpis: {
          sasu: {
            name: "Share of Secondary Aluminum Used (SASU)",
            description: "Tracks percentage of recycled aluminum in production, directly reducing carbon emissions and production costs. Using secondary aluminum requires less energy than primary aluminum.",
            targets: {
              "2030": "42%",
              "2035": "44%",
              "2050": "56%"
            }
          },
          snepa: {
            name: "Share of Near Zero Emission Primary Aluminum Production (SNEPA)",
            description: "Measures proportion of primary aluminum produced with near zero emissions using advanced technologies. Essential for meeting global net zero targets.",
            targets: {
              "2030": "7% of all primary aluminum",
              "2035": "19%",
              "2050": "96%"
            }
          },
          ghgPerTonne: {
            name: "GHG Emissions per Tonne of Aluminum",
            description: "Ensures aluminum production aligns with EU Taxonomy environmental standards.",
            euTaxonomyBenchmark: "≤ 1.484 tCO2e per ton of aluminum manufactured"
          },
          electricityCarbon: {
            name: "Carbon Intensity of Electricity Used",
            description: "Evaluates carbon intensity of electricity sources powering aluminum production.",
            benchmark: "≤ 100 g CO2e/kWh for indirect emissions from electricity used"
          },
          electricityConsumption: {
            name: "Electricity Consumption",
            description: "Measures energy efficiency of aluminum production process.",
            benchmark: "≤ 15.5 MWh per ton of aluminum"
          }
        }
      },
      steel: {
        title: "Steel",
        importance: "Critical material constituting approximately 50-60% of average vehicle weight. Advanced high-strength steels (AHSS) achieve weight reductions of up to 25% compared to traditional mild steel. A 10% reduction in vehicle weight results in 6-8% improvement in fuel economy.",
        share: "~54% of vehicle weight",
        emissions: "~1.8-2.3 tCO2/t for BF-BOF route, 0.3-0.7 tCO2/t for EAF route",
        kpis: {
          carbonIntensity: {
            name: "Carbon Intensity of Steel Products",
            description: "Tracks GHG emissions (CO2e) per ton of steel. Helps monitor and reduce carbon footprint of materials used in manufacturing.",
            euTaxonomyBenchmarks: [
              { type: "Hot metal", threshold: "≤ 1.331 tCO2e/t steel" },
              { type: "Sintered ore", threshold: "≤ 0.163 tCO2e/t steel" },
              { type: "Coke (excluding lignite coke)", threshold: "≤ 0.144 tCO2e/t steel" },
              { type: "Iron casting", threshold: "≤ 0.299 tCO2e/t steel" },
              { type: "EAF high alloy steel", threshold: "≤ 0.266 tCO2e/t steel" },
              { type: "EAF carbon steel", threshold: "≤ 0.209 tCO2e/t steel" }
            ]
          },
          recycledContent: {
            name: "Percentage of Recycled Content in Steel",
            description: "Measures proportion of recycled steel in final product. Reduces need for raw material extraction, lowers energy consumption and GHG emissions.",
            euTaxonomyBenchmarks: {
              highAlloySteel: "≥ 70% recycled content",
              carbonSteel: "≥ 90% recycled content"
            }
          },
          nearZeroEmission: {
            name: "Share of Near-Zero Emission Iron Production",
            description: "Measures proportion of steel sourced from production methods using CCUS, electrolytic hydrogen-based production, or iron ore electrolysis.",
            ieaProjections: {
              "2030": { total: "8%", ccus: "3%", hydrogen: "5%", electrolysis: "0%" },
              "2040": { total: "27%", ccus: "10%", hydrogen: "15%", electrolysis: "2%" },
              "2050": { total: "95%", ccus: "37%", hydrogen: "44%", electrolysis: "14%" }
            }
          },
          greenSteel: {
            name: "Share of Green Steel in New Cars",
            description: "Measures proportion of environmentally friendly, low-emission steel produced using recycled steel, CCUS, and hydrogen-based reduction.",
            targets: {
              "2030": "At least 40% of steel used in new cars sold in EU should be green steel",
              "2035": "At least 75%",
              "2040": "100%"
            }
          }
        }
      },
      plastics: {
        title: "Plastics",
        importance: "Vital due to lightweight properties, durability, versatility. Make up about 10-15% of vehicle weight but occupy nearly 50% of total vehicle volume. A 10% reduction in vehicle weight improves fuel efficiency by 6-8%. EVs contain 10-15% more plastic than ICE vehicles.",
        share: "~10-15% of vehicle weight, ~50% of volume",
        emissions: "85-100 GJ per ton for materials like polypropylene, with 1.5-3.2 tons CO2/t",
        kpis: {
          prp: {
            name: "Percentage of Recycled Plastic (PRP)",
            description: "Based on proposed ELV Regulation Article 6. Measures percentage of total plastic in vehicle from recycled sources.",
            target: "≥ 25% of plastic must be from recycled materials (post-consumer plastic waste)"
          },
          prpElv: {
            name: "Percentage of Recycled Plastic from ELVs (PRP-ELV)",
            description: "Measures percentage of recycled plastic specifically from end-of-life vehicles. Ensures closed-loop recycling within automotive industry.",
            target: "≥ 25% of recycled plastic must come from end-of-life vehicles",
            combinedTarget: "At least 6.25% of total plastic from recycled ELV materials"
          },
          ppEes: {
            name: "Percentage of Plastic from Energy Efficient Suppliers (PP-EES)",
            description: "Proportion of plastic from suppliers adhering to energy efficiency standards aligned with EU's 11.7% energy reduction target by 2030.",
            target: "100% sourcing from suppliers meeting 11.7% energy efficiency standards by 2030"
          },
          biomassDerived: {
            name: "Percentage of Biomass-Derived Plastics",
            description: "Tracks proportion of biomass-derived plastics ensuring lower life cycle GHG emissions than fossil fuel-based plastics. Must be verified through ISO 14067:2018 or ISO 14064-1:2018.",
            targets: {
              "2030": "10%",
              "2050": "18%"
            }
          },
          chemicallyRecycled: {
            name: "Percentage of Chemically Recycled Plastics",
            description: "Measures plastics from chemical recycling processes. Chemical recycling breaks down plastics into molecular components, enabling production of high-quality materials from plastics that cannot be mechanically recycled.",
            targets: {
              "2030": "5-10%",
              "2050": "19%"
            }
          }
        }
      },
      glass: {
        title: "Glass",
        share: "~3% of vehicle weight",
        emissions: "Energy-intensive melting process, 0.85-1.0 tCO2/t",
        kpis: {
          carbonFootprint: {
            name: "Carbon Footprint",
            description: "Crucial metric for assessing environmental impact of glass in vehicle manufacturing.",
            formula: "CFTotal = Aglass × CFunit",
            formulaComponents: {
              CFTotal: "Total carbon footprint from glass used (kg CO2)",
              Aglass: "Total surface area of glass used (m²)",
              CFunit: "Carbon footprint per square meter (kg CO2/m²)"
            },
            benchmark: "7 kg CO2/m² for Low-E glass (used by AGC and Guardian Glass)"
          },
          ghgEmissionIntensity: {
            name: "GHG Emission Intensity",
            description: "Based on IEA SDS pathways. Scope 1+2 emission intensity projections relative to 2020 baseline (base 100).",
            projections: {
              "2030": "73% of 2020 value",
              "2035": "62% of 2020 value",
              "2040": "53% of 2020 value",
              "2045": "44% of 2020 value",
              "2050": "35% of 2020 value"
            },
            note: "Glass shapers should add GHG emissions of glass purchased (scope 3) to their scope 1 and 2 emissions for consistency."
          }
        }
      },
      batteries: {
        title: "Batteries (EV)",
        share: "30-50% of EV production emissions",
        emissions: "73-98 kgCO2/kWh (current), from mining, refining, cell production",
        kpis: {
          carbonIntensity: {
            name: "Battery Carbon Intensity",
            targets: {
              current: "73-98 kgCO2/kWh",
              "2030": "40 kgCO2/kWh",
              "2050": "5-10 kgCO2/kWh"
            }
          }
        },
        decarbonization: "Clean energy for production, battery recycling, second-life applications"
      }
    }
  },

  sources: {
    title: "Sources",
    citations: [
      {
        title: "IEA Global EV Outlook",
        year: "2024",
        url: "https://www.iea.org/reports/global-ev-outlook-2024"
      },
      {
        title: "ICCT Life Cycle Analysis of Passenger Cars",
        year: "2021",
        url: "https://theicct.org/"
      },
      {
        title: "European Commission - Fit for 55",
        url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_21_3541"
      },
      {
        title: "Science Based Targets - Transport Sector Guidance",
        url: "https://sciencebasedtargets.org/sectors/transport"
      },
      {
        title: "ACEA - European Automobile Manufacturers Association",
        url: "https://www.acea.auto/"
      }
    ]
  }
};

export default automotiveSections;
