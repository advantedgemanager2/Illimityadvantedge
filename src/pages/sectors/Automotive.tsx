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
  { id: "best-practices", title: "Best Practices", level: 2 },
  { id: "lifecycle-stages", title: "Lifecycle Stages", level: 2 },
  { id: "market-technology", title: "Market & Technology", level: 2 },
  { id: "drivers-of-change", title: "Drivers of Change", level: 2 },
  { id: "impacts", title: "Environmental Impacts", level: 2 },
  { id: "regulation", title: "Regulation & Legislation", level: 2 },
  { id: "decarbonization", title: "Decarbonization Technologies", level: 2 },
  { id: "transition-plans", title: "Transition Plan Credibility", level: 2 },
  { id: "target-setting", title: "Target Setting (SBTi)", level: 2 },
  { id: "kpis", title: "KPIs for Automotive", level: 2 },
  { id: "locked-in-emissions", title: "Locked-in Emissions", level: 2 },
  { id: "supply-chain", title: "Supply Chain Components", level: 2 },
];

const sources = [
  {
    id: 1,
    title: "CO2 emission performance standards for cars and vans",
    author: "European Commission",
    year: "2023",
    url: "https://climate.ec.europa.eu/eu-action/transport/road-transport-reducing-co2-emissions-vehicles_en",
  },
  {
    id: 2,
    title: "Transport sector decarbonization",
    author: "International Energy Agency (IEA)",
    year: "2023",
    url: "https://www.iea.org/topics/transport",
  },
  {
    id: 3,
    title: "Alternative Fuels Infrastructure Regulation (AFIR)",
    author: "European Union",
    year: "2023",
    url: "https://eur-lex.europa.eu/eli/reg/2023/1804/oj",
  },
  {
    id: 4,
    title: "Global EV Outlook 2024",
    author: "International Energy Agency (IEA)",
    year: "2024",
    url: "https://www.iea.org/reports/global-ev-outlook-2024",
  },
  {
    id: 5,
    title: "Life Cycle Analysis of Passenger Cars",
    author: "ICCT",
    year: "2021",
    url: "https://theicct.org/",
  },
  {
    id: 6,
    title: "Transport Sector Guidance",
    author: "Science Based Targets initiative (SBTi)",
    year: "2023",
    url: "https://sciencebasedtargets.org/sectors/transport",
  },
  {
    id: 7,
    title: "European Automobile Manufacturers Association",
    author: "ACEA",
    year: "2024",
    url: "https://www.acea.auto/",
  },
];

const AutomotiveFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Sectors", href: "/sectors/steel" },
              { label: "Automotive" },
            ]}
          />

          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">
            Automotive Sector
          </h1>

          <PageMeta
            lastUpdated="January 29, 2026"
            tags={["Transport", "EVs", "Decarbonization", "Supply Chain", "Scope 3"]}
          />

          <p className="text-lg text-muted-foreground mb-8">
            Comprehensive analysis of the automotive sector's transition to low-carbon mobility, including electric vehicles, supply chain decarbonization, and transition finance considerations.
          </p>

          {/* Introduction Section */}
          <section id="introduction" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>

            <p className="text-muted-foreground mb-4">
              Automobiles, including cars, vehicles, trucks, and other wheeled passenger or commercial vehicles, play a significant role in our societal framework. The transportation sector accounts for <strong>23% of worldwide energy-related carbon dioxide (CO2) emissions</strong>.
            </p>

            <p className="text-muted-foreground mb-4">
              The primary obstacle to decarbonisation is in the identification and administration of carmakers' supply chains. The automobile industry relies extensively on suppliers, and a single end-product is the culmination of an assembly line including thousands of components, the majority of which are manufactured off-site.
            </p>

            <Callout type="info" title="Market Growth">
              The automobile sector is a prosperous market projected to experience a growth rate of 36.2% by 2027. Key stakeholders are responding to carbon reduction requirements by embracing electric vehicles (EVs), autonomous driving, and fuel cell vehicles (FCVs).
            </Callout>

            <p className="text-muted-foreground mb-4">
              In order for the automotive industry to attain Net-Zero emissions, it is necessary to implement innovative technology and effective policies that promote electric vehicles on existing road networks. A comprehensive strategy must include <strong>technical innovation, supply chain optimization, and consumer behavior modification</strong>.
            </p>
          </section>

          {/* Best Practices Section */}
          <section id="best-practices" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Best Practices</h2>

            <p className="text-muted-foreground mb-4">
              The first step entails the implementation of ambitious and feasible measures to reduce emissions through strategic planning. Financial institutions must evaluate whether car manufacturers have conducted a <strong>Life-Cycle Assessment (LCA)</strong> of their production processes.
            </p>

            <Callout type="tip" title="LCA Benefits">
              LCAs enable automotive manufacturers to facilitate decision-making during early design stages, enhancing cost-effectiveness and identifying areas requiring investment to achieve climate objectives.
            </Callout>

            <p className="text-muted-foreground mb-4">
              A holistic approach for an automotive producer to "drive" towards sustainable mobility requires a degree of regenerative economics. Key best practices include:
            </p>

            <StyledList
              style="check"
              items={[
                "Design for recyclability embedded into the development process",
                "Lightweight design and improved aerodynamics to reduce energy consumption",
                "Lean manufacturing principles to eliminate waste and maximize productivity",
                "Supply chain transparency and responsible sourcing of critical materials",
                "Investment in R&D for low-carbon technologies",
                "Circular economy integration through remanufacturing and recycling"
              ]}
            />
          </section>

          {/* Lifecycle Stages Section */}
          <section id="lifecycle-stages" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Lifecycle Stages</h2>

            <p className="text-muted-foreground mb-4">
              There are 4 phases in the Life Cycle Inventory (LCI) of an automotive manufacturer:
            </p>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Design and Development Stage</h4>
                <p className="text-muted-foreground text-sm">Automakers can improve fuel efficiency through physical design, better aerodynamics, lightweight materials, and design for recyclability to meet Extended Producer Responsibilities (EPR).</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Production Stage</h4>
                <p className="text-muted-foreground text-sm">Covers raw material extraction through component manufacturing. Energy-intensive activities include stamping, casting, and painting. Focus areas: procurement of rare earth elements, chip supply security, and manufacturing efficiency.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Use Stage</h4>
                <p className="text-muted-foreground text-sm">Includes distribution, operation, and maintenance. Key improvements: route optimization, fleet electrification, and infrastructure deployment for EVs and hydrogen.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">End of Life Stage</h4>
                <p className="text-muted-foreground text-sm">Divided into depollution, dismantling, shredding, and post-shredding technologies. Approximately 96% of raw materials can be conserved through remanufacturing.</p>
              </div>
            </div>

            <Callout type="important" title="Remanufacturing Benefits">
              There is an approximate 40% reduction in CO2e emissions and a 38% reduction in energy consumption through remanufacturing compared to new manufacturing.
            </Callout>
          </section>

          {/* Market & Technology Section */}
          <section id="market-technology" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Market & Mainstream Technology</h2>

            <p className="text-muted-foreground mb-4">
              The automotive industry is undergoing a fundamental transformation with the shift from internal combustion engines to electric powertrains:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Internal Combustion Engines (ICE)</h4>
                <p className="text-sm text-muted-foreground">Traditional technology being phased out. EU ban on new ICE cars from 2035.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Battery Electric Vehicles (BEV)</h4>
                <p className="text-sm text-muted-foreground">Zero tailpipe emissions. Dependent on battery supply chain and charging infrastructure.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Hybrid Vehicles</h4>
                <p className="text-sm text-muted-foreground">Transitional technology combining ICE and electric motors.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Hydrogen Fuel Cells (FCV)</h4>
                <p className="text-sm text-muted-foreground">Zero tailpipe emissions. Requires hydrogen production and refueling infrastructure.</p>
              </div>
            </div>

            <Callout type="warning" title="Supply Chain Challenges">
              EV batteries are significantly reliant on lithium (60kg), cobalt, copper, nickel, and graphite. These materials are frequently located in regions characterized by geopolitical sensitivity or instability.
            </Callout>
          </section>

          {/* Drivers of Change Section */}
          <section id="drivers-of-change" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Drivers of Change</h2>

            <p className="text-muted-foreground mb-4">
              Four main categories of drivers influence the automotive sector's transition:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Economic</h4>
                <p className="text-sm text-muted-foreground">Rising fuel costs driving EV adoption; carbon pricing mechanisms; investment in green technology; supply chain cost optimization.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Technology</h4>
                <p className="text-sm text-muted-foreground">Battery improvements (cost, range, charging); autonomous driving; connected cars (5G); hydrogen fuel cells; lightweight materials.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Society</h4>
                <p className="text-sm text-muted-foreground">Consumer preference for sustainability; urbanization and mobility patterns; shared mobility growth; environmental awareness.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Policy/Environment</h4>
                <p className="text-sm text-muted-foreground">Climate targets and regulations; emission standards; low-emission zones; incentives for zero-emission vehicles.</p>
              </div>
            </div>

            <Callout type="info" title="EU ETS Impact">
              The EU Emissions Trading System provides economic incentives for automotive companies to reduce emissions. Companies that reduce efficiently can profit by selling excess allowances.
            </Callout>
          </section>

          {/* Impacts Section */}
          <section id="impacts" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Environmental Impacts</h2>

            <p className="text-muted-foreground mb-4">
              The automotive sector has numerous environmental, social, and economic impacts:
            </p>

            <StyledList
              style="arrow"
              items={[
                "Climate change contribution: 23% of global energy-related CO2 emissions from transport",
                "Air pollution from tailpipe emissions (NOx, particulate matter)",
                "Energy consumption throughout vehicle lifecycle",
                "Resource depletion from critical material extraction",
                "Waste generation from end-of-life vehicles",
                "Noise pollution in urban areas",
                "Water pollution from manufacturing processes",
                "Land use and urban sprawl from car-centric infrastructure",
                "Biodiversity impact from resource extraction",
                "Supply chain vulnerabilities and geopolitical risks"
              ]}
            />
          </section>

          {/* Regulation Section */}
          <section id="regulation" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Regulation & Legislation</h2>

            <p className="text-muted-foreground mb-4">
              Key EU regulations affecting the automotive sector:
            </p>

            <div className="space-y-3 mb-6">
              <div className="p-3 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground">2035 ICE Ban</h4>
                <p className="text-sm text-muted-foreground">EU ban on sales of new petrol and diesel cars from 2035, accelerating the shift to zero-emission vehicles.</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground">CO2 Emission Standards</h4>
                <p className="text-sm text-muted-foreground">Progressive reduction targets: 55% reduction by 2030 and 100% by 2035 compared to 2021 levels.</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground">Alternative Fuels Infrastructure Regulation (AFIR)</h4>
                <p className="text-sm text-muted-foreground">Mandates charging and hydrogen refueling infrastructure deployment across the EU. 2025 targets are about 25% higher than estimated requirements.</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground">Battery Regulation</h4>
                <p className="text-sm text-muted-foreground">Requirements for battery sustainability, recycled content, and end-of-life management.</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground">Supply Chain Due Diligence</h4>
                <p className="text-sm text-muted-foreground">EU Conflict Minerals Regulation and upcoming Corporate Sustainability Due Diligence Directive.</p>
              </div>
            </div>
          </section>

          {/* Decarbonization Section */}
          <section id="decarbonization" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Decarbonization Technologies & Opportunities</h2>

            <p className="text-muted-foreground mb-4">
              Key decarbonization pathways for the automotive sector:
            </p>

            <StyledList
              style="check"
              items={[
                "Electrification of vehicle fleets (BEV and PHEV)",
                "Hydrogen fuel cell technology for heavy-duty and long-range applications",
                "Supply chain decarbonization through renewable energy and green materials",
                "Lightweighting through advanced materials (aluminum, carbon fiber, high-strength steel)",
                "Circular economy approaches: remanufacturing, recycling, and material recovery",
                "Digital twins and AI for manufacturing optimization",
                "Mobility as a Service (MaaS) and shared mobility models",
                "Vehicle-to-grid (V2G) technology for grid integration"
              ]}
            />

            <Callout type="tip" title="Prioritizing High-Impact Areas">
              Electrifying high-use vehicles like taxis, delivery vehicles, and postal trucks accelerates market transformation, demonstrates EV feasibility, and helps avoid downstream emissions from the use of sold products.
            </Callout>
          </section>

          {/* Transition Plans Section */}
          <section id="transition-plans" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Transition Plan Credibility</h2>

            <p className="text-muted-foreground mb-4">
              The automotive sector is strongly characterized by <strong>tailpipe emissions from the use of sold products (Scope 3 Category 11)</strong>. Financial institutions should evaluate transition plans based on:
            </p>

            <StyledList
              style="number"
              items={[
                "Share of low-carbon vehicles in production mix and sales targets",
                "Phase-out timeline for internal combustion engine production",
                "Supply chain decarbonization strategy (Scope 3 upstream)",
                "R&D investment in electrification and alternative powertrains",
                "Battery sourcing strategy and recycling commitments",
                "Alignment with science-based targets (SBTi automotive pathway)",
                "CapEx allocation for manufacturing transformation"
              ]}
            />

            <Callout type="warning" title="Carbon Lock-in Risk">
              Continued investment in ICE production capacity creates carbon lock-in risk. Financial institutions should assess the alignment of CapEx with Paris-aligned pathways.
            </Callout>
          </section>

          {/* Target Setting Section */}
          <section id="target-setting" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Target Setting (SBTi Approach)</h2>

            <p className="text-muted-foreground mb-4">
              The Science Based Targets initiative provides guidance for automotive sector target setting:
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3">Scope Coverage</h3>

            <StyledList
              style="check"
              items={[
                "Scope 1: Direct emissions from manufacturing",
                "Scope 2: Purchased electricity and heat",
                "Scope 3 Category 1: Supply chain (upstream)",
                "Scope 3 Category 11: Use of sold products (downstream) - often largest source"
              ]}
            />

            <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">EU Emission Standards Targets</h3>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 font-semibold">Year</th>
                    <th className="text-left py-2 font-semibold">Target (gCO2/km)</th>
                    <th className="text-left py-2 font-semibold">Reduction vs 2021</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b"><td className="py-2">2025</td><td>93.6</td><td>15%</td></tr>
                  <tr className="border-b"><td className="py-2">2030</td><td>49.5</td><td>55%</td></tr>
                  <tr><td className="py-2">2035</td><td>0</td><td>100%</td></tr>
                </tbody>
              </table>
            </div>

            <Callout type="info" title="Minimum Ambition">
              SBTi requires 1.5°C pathway alignment, 100% coverage of Scope 1+2 emissions, and Scope 3 target if emissions exceed 40% of total. Intensity metrics (gCO2/km) are preferred for vehicles.
            </Callout>
          </section>

          {/* KPIs Section */}
          <section id="kpis" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">KPIs for Automotive Sector</h2>

            <p className="text-muted-foreground mb-4">
              Key Performance Indicators for assessing automotive companies' transition progress:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Physical Emission Intensity</h4>
                <p className="text-sm text-muted-foreground">gCO2/km for vehicle fleet on well-to-wheel basis. EU targets: 93.6 (2025), 49.5 (2030), 0 (2035).</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Scope 1+2 Reduction</h4>
                <p className="text-sm text-muted-foreground">Manufacturing emissions per vehicle produced, aligned with 1.5°C pathway.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Low-Carbon Vehicle Share</h4>
                <p className="text-sm text-muted-foreground">Percentage of BEV/PHEV/FCEV in total sales. Target: 100% ZEV by 2035 in EU.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">R&D Spending</h4>
                <p className="text-sm text-muted-foreground">Investment in EVs, hydrogen, efficiency as % of total R&D. Should show increasing trend.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Scope 3 Upstream Intensity</h4>
                <p className="text-sm text-muted-foreground">Supply chain emissions per vehicle (steel, aluminum, plastics, batteries).</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Cumulative Downstream Emissions</h4>
                <p className="text-sm text-muted-foreground">Lifetime use-phase emissions of vehicles sold - largest emission source for OEMs.</p>
              </div>
            </div>
          </section>

          {/* Locked-in Emissions Section */}
          <section id="locked-in-emissions" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Locked-in Emissions</h2>

            <p className="text-muted-foreground mb-4">
              Locked-in emissions for the automotive sector relate to:
            </p>

            <StyledList
              style="arrow"
              items={[
                "Vehicle Fleet: Average lifespan 15+ years, cumulative emissions from vehicles already sold",
                "Production Assets: ICE manufacturing facilities, engine and transmission plants",
                "Infrastructure Lock-in: Fueling stations vs. charging infrastructure dependencies",
                "Supply Chain: Dependencies on ICE-specific components"
              ]}
            />

            <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">Assessment Approach</h3>

            <StyledList
              style="number"
              items={[
                "Calculate cumulative emissions from sold vehicles over remaining lifetime",
                "Assess committed emissions from planned ICE production",
                "Compare against sector carbon budget",
                "Evaluate stranded asset risk for ICE facilities"
              ]}
            />

            <Callout type="warning" title="Mitigation Strategies">
              Accelerate ICE phase-out timelines; invest in asset conversion (ICE to EV production); support early vehicle retirement schemes; develop circular economy for end-of-life vehicles.
            </Callout>
          </section>

          {/* Supply Chain Components Section */}
          <section id="supply-chain" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Supply Chain Components for Scope 3</h2>

            <p className="text-muted-foreground mb-4">
              Key materials for assessing upstream Scope 3 emissions:
            </p>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Steel (~54% of vehicle weight)</h4>
                <p className="text-muted-foreground text-sm">Emissions: ~1.8 tCO2/t for BF-BOF. Decarbonization: EAF with scrap, hydrogen-based DRI, green steel certification.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Aluminum (~12% of vehicle weight)</h4>
                <p className="text-muted-foreground text-sm">Emissions: ~15 tCO2/t primary aluminum. Decarbonization: Recycled aluminum, inert anode technology, renewable energy.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Plastics (~8-10% of vehicle weight)</h4>
                <p className="text-muted-foreground text-sm">Varies by polymer type. Decarbonization: Bio-based plastics, recycled content, lightweight design optimization.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">EV Batteries (30-50% of EV production emissions)</h4>
                <p className="text-muted-foreground text-sm">Mining, refining, cell production intensive. Decarbonization: Clean energy for production, recycling, second-life applications.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Glass (~3% of vehicle weight)</h4>
                <p className="text-muted-foreground text-sm">Energy-intensive melting. Decarbonization: Electric melting, hydrogen fuel, increased recycled cullet.</p>
              </div>
            </div>
          </section>

          <SourceCitations sources={sources} />

          <PageNavigation
            prev={{
              title: "Cement Sector",
              href: "/sectors/cement",
              category: "Sectors"
            }}
            next={{
              title: "Shipping Sector",
              href: "/sectors/shipping",
              category: "Sectors"
            }}
          />
        </article>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const Automotive = () => {
  return (
    <DynamicPageContent
      slug="sectors/automotive"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sectors", href: "/sectors/steel" },
        { label: "Automotive" },
      ]}
      navigation={{
        prev: { title: "Cement Sector", href: "/sectors/cement", category: "Sectors" },
        next: { title: "Shipping Sector", href: "/sectors/shipping", category: "Sectors" }
      }}
      fallback={<AutomotiveFallback />}
    />
  );
};

export default Automotive;
