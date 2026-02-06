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
    title: "Automotive Target Setting (SBTi Approach)",
    content: `The Science Based Targets initiative provides guidance for automotive sector target setting:

**Scope Coverage:**
- Scope 1: Direct emissions from manufacturing
- Scope 2: Purchased electricity and heat
- Scope 3: Supply chain (Category 1) and use of sold products (Category 11)

**Key Metric:**
- gCO2/km for passenger vehicles (well-to-wheel basis)
- Includes upstream fuel/electricity production

**Minimum Ambition:**
- 1.5°C pathway alignment
- Covers 100% of scope 1 and 2 emissions
- Scope 3 target if >40% of total emissions

**Intensity vs. Absolute Targets:**
- Intensity metrics (gCO2/km) preferred for vehicles
- Absolute targets for manufacturing operations
- Combined approach recommended`
  },

  kpis: {
    title: "Key Performance Indicators",
    indicators: [
      {
        name: "Physical Emission Intensity",
        description: "gCO2/km for vehicle fleet on well-to-wheel basis",
        benchmarks: "EU 2025: 93.6 gCO2/km; EU 2030: 49.5 gCO2/km; EU 2035: 0 gCO2/km"
      },
      {
        name: "Scope 1+2 Emission Reduction",
        description: "Manufacturing emissions per vehicle produced",
        target: "Aligned with 1.5°C pathway"
      },
      {
        name: "Scope 3 Upstream Intensity",
        description: "Emissions from supply chain per vehicle",
        focus: "Steel, aluminum, plastics, batteries"
      },
      {
        name: "Scope 3 Downstream (Use of Sold Products)",
        description: "Lifetime emissions from vehicles sold",
        note: "Largest emission source for automakers"
      },
      {
        name: "R&D Spending on Low-Carbon Technologies",
        description: "% of R&D budget on EVs, hydrogen, efficiency",
        target: "Increasing trend aligned with transition"
      },
      {
        name: "Share of Low-Carbon Vehicles",
        description: "% of sales from BEV, PHEV, FCEV",
        target: "100% ZEV sales by 2035 in EU"
      }
    ]
  },

  lockedInEmissions: {
    title: "Locked-in Emissions",
    content: `Locked-in emissions for automotive relate to:

**Vehicle Fleet:**
- Average vehicle lifespan: 15+ years
- Cumulative emissions from vehicles already sold
- Regional differences in fleet turnover

**Production Assets:**
- ICE manufacturing facilities
- Engine and transmission plants
- Supply chain dependencies

**Assessment Approach:**
1. Calculate cumulative emissions from sold vehicles over remaining lifetime
2. Assess committed emissions from planned ICE production
3. Compare against sector carbon budget
4. Evaluate stranded asset risk for ICE facilities

**Mitigation:**
- Accelerate ICE phase-out timelines
- Invest in asset conversion (ICE to EV production)
- Support early vehicle retirement schemes
- Develop circular economy for end-of-life vehicles`
  },

  supplyChainComponents: {
    title: "Supply Chain Components for Scope 3",
    components: [
      {
        material: "Aluminum",
        share: "~12% of vehicle weight",
        emissions: "High energy intensity (~15 tCO2/t primary aluminum)",
        decarbonization: "Recycled aluminum, inert anode technology, renewable energy"
      },
      {
        material: "Steel",
        share: "~54% of vehicle weight",
        emissions: "~1.8 tCO2/t for BF-BOF route",
        decarbonization: "EAF with scrap, hydrogen-based DRI, green steel"
      },
      {
        material: "Plastics",
        share: "~8-10% of vehicle weight",
        emissions: "Varies by polymer type",
        decarbonization: "Bio-based plastics, recycled content, lightweight design"
      },
      {
        material: "Glass",
        share: "~3% of vehicle weight",
        emissions: "Energy-intensive melting process",
        decarbonization: "Electric melting, hydrogen fuel, recycled cullet"
      },
      {
        material: "Batteries (EV)",
        share: "30-50% of EV production emissions",
        emissions: "Mining, refining, cell production",
        decarbonization: "Clean energy for production, battery recycling, second-life applications"
      }
    ]
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
