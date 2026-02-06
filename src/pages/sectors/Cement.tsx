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
  { id: "cement-market", title: "Cement Market", level: 2 },
  { id: "cement-types", title: "Cement Types", level: 2 },
  { id: "manufacturing-process", title: "Manufacturing Process", level: 2 },
  { id: "decarbonization", title: "Decarbonization Technologies", level: 2 },
  { id: "impacts", title: "Environmental Impacts", level: 2 },
  { id: "eu-policies", title: "EU Policies", level: 2 },
  { id: "transition-plans", title: "Transition Plan Credibility", level: 2 },
];

const sources = [
  {
    id: 1,
    title: "Global Cement Market Size, Share, Analysis, Forecast",
    author: "Expert Market Research",
    year: "2024",
    url: "https://www.expertmarketresearch.com/reports/cement-market",
  },
  {
    id: 2,
    title: "Technology Roadmap - Low-Carbon Transition in the Cement Industry",
    author: "International Energy Agency (IEA)",
    year: "2018",
    url: "https://www.iea.org/reports/technology-roadmap-low-carbon-transition-in-the-cement-industry",
  },
  {
    id: 3,
    title: "Best ways to cut carbon emissions from the cement industry explored",
    author: "Imperial College London",
    year: "2021",
    url: "https://www.imperial.ac.uk/news/221654/best-ways-carbon-emissions-from-cement/",
  },
];

const CementFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Sectors", href: "/sectors/steel" },
              { label: "Cement" },
            ]}
          />

          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">
            Cement Sector
          </h1>

          <PageMeta
            lastUpdated="January 29, 2026"
            tags={["Hard-to-Abate", "Construction", "Clinker", "CCS", "Decarbonization"]}
          />

          <p className="text-lg text-muted-foreground mb-8">
            Analysis of the cement sector's decarbonization challenges, production technologies, environmental impacts, and transition finance considerations for this critical construction material.
          </p>

          {/* Introduction Section */}
          <section id="introduction" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>

            <p className="text-muted-foreground mb-4">
              Cement, a fundamental building material, plays a significant role in modern society. Its importance cannot be understated, especially considering its various applications in construction and infrastructure development. However, it is also a <strong>major source of CO2 emissions</strong>, contributing approximately <strong>8% of total global CO2 emissions</strong>.
            </p>

            <p className="text-muted-foreground mb-4">
              As global demand for cement continues to grow, spurred by emerging markets and increasing urbanisation, the challenge lies in maintaining production levels while also reducing CO2 emissions.
            </p>

            <Callout type="info" title="Key Decarbonization Strategies">
              Several key strategies have been identified to help cut emissions in cement production: improving energy efficiency, switching to lower-carbon fuels, and promoting material efficiency by reducing the clinker-to-cement ratio.
            </Callout>

            <p className="text-muted-foreground mb-4">
              In a scenario where net zero emissions are achieved by 2050, cement production is expected to level off. <strong>Material efficiency strategies</strong> and <strong>carbon capture and storage (CCS)</strong> are likely to play critical roles in this process.
            </p>
          </section>

          {/* Cement Market Section */}
          <section id="cement-market" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cement Market</h2>

            <p className="text-muted-foreground mb-4">
              The global cement market has been experiencing significant growth, driven by various factors across different regions. As of 2023, the market reached a value of <strong>USD 383.02 billion</strong>, propelled by rising demand from the construction sector.
            </p>

            <p className="text-muted-foreground mb-4">
              It is anticipated to grow at a compound annual growth rate (CAGR) of <strong>5.4%</strong> during the forecast period of 2024-2032, potentially reaching <strong>USD 614.88 billion by 2032</strong>.
            </p>

            <Callout type="info" title="Regional Distribution">
              The Asia-Pacific region accounted for a significant share, with a market size of USD 273.32 billion in 2022, mainly due to demand from developing nations like Southeast Asia, China, and India. China plays a dominant role as both a producer and consumer.
            </Callout>

            <p className="text-muted-foreground mb-4">
              In terms of volume, the cement market is expected to reach <strong>4.14 billion tons in 2024</strong> and grow at a CAGR of 7.23% to reach 5.88 billion tons by 2029.
            </p>
          </section>

          {/* Cement Types Section */}
          <section id="cement-types" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cement Types</h2>

            <p className="text-muted-foreground mb-4">
              In the European Union, several types of mainstream cement are produced:
            </p>

            <div className="space-y-3 mb-6">
              <div className="p-3 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground">Ordinary Portland Cement (OPC)</h4>
                <p className="text-sm text-muted-foreground">Most common type, suitable for residential buildings, bridges, and pavements. Production is highly energy-intensive, requiring temperatures up to 1450°C.</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground">Blended Cement</h4>
                <p className="text-sm text-muted-foreground">Mixture of Portland cement with fly ash, silica fume, or slag. Enhances durability and can reduce environmental impact.</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground">Low Heat Cement</h4>
                <p className="text-sm text-muted-foreground">Generates less heat during hydration, suitable for mass concrete works where preventing thermal cracking is critical.</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground">Sulfate Resisting Cement</h4>
                <p className="text-sm text-muted-foreground">Designed for construction where concrete is exposed to soil or water with high sulfate content.</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground">Pozzolanic Cement</h4>
                <p className="text-sm text-muted-foreground">Contains pozzolanic materials that enhance strength and durability by reacting with calcium hydroxide.</p>
              </div>
            </div>
          </section>

          {/* Manufacturing Process Section */}
          <section id="manufacturing-process" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cement Manufacturing Process</h2>

            <p className="text-muted-foreground mb-4">
              The production of cement involves several key stages, with clinker production being the most energy and carbon intensive:
            </p>

            <StyledList
              style="number"
              items={[
                "Mining of Raw Materials: Primary raw materials include limestone, clay, shale, and silica extracted from quarries and mines",
                "Crushing and Prehomogenisation: Raw materials are crushed and blended to achieve uniform composition",
                "Raw Meal Preparation: Crushed materials are processed into a fine powder",
                "Clinker Production: Raw meal is heated to high temperatures (up to 1450°C) in a kiln to produce clinker through clinkerisation",
                "Grinding of Clinker: Clinker is ground into fine powder to produce cement",
                "Packaging and Shipment: Final cement product is packaged for distribution"
              ]}
            />

            <Callout type="warning" title="Emissions Source">
              The CO2 emissions result not only from the combustion of fossil fuels but also from the chemical process of limestone decarbonisation (calcination), which releases CO2 as a byproduct. This process emission accounts for approximately 60% of total cement emissions.
            </Callout>
          </section>

          {/* Decarbonization Technologies Section */}
          <section id="decarbonization" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Decarbonization Technologies</h2>

            <p className="text-muted-foreground mb-4">
              Research has identified several strategies for decarbonising the cement industry:
            </p>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Energy and Operational Efficiency</h4>
                <p className="text-muted-foreground text-sm">Incremental improvements in kiln efficiency and heat recovery systems.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Alternative Fuels</h4>
                <p className="text-muted-foreground text-sm">Use of biomass and municipal waste to replace fossil fuels in kilns.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Supplementary Cementitious Materials (SCMs)</h4>
                <p className="text-muted-foreground text-sm">Substitution of clinker with waste materials like blast furnace slag and coal ash to reduce the clinker-to-cement ratio.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Carbon Capture and Storage (CCS)</h4>
                <p className="text-muted-foreground text-sm">Capturing CO2 emissions from the chemical reactions in clinker production. Critical for addressing process emissions.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Carbon Capture and Utilisation (CCU)</h4>
                <p className="text-muted-foreground text-sm">Converting captured CO2 into useful products or using it in concrete curing.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Innovative Cement Types</h4>
                <p className="text-muted-foreground text-sm">Development of novel binders and low-carbon cement formulations.</p>
              </div>
            </div>

            <Callout type="tip" title="Combined Approach Needed">
              Achieving substantial emissions reductions will likely require a combination of interventions, including technological innovations and changes in production practices.
            </Callout>
          </section>

          {/* Impacts Section */}
          <section id="impacts" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Environmental Impacts</h2>

            <p className="text-muted-foreground mb-4">
              The cement industry has several major environmental and health impacts:
            </p>

            <StyledList
              style="arrow"
              items={[
                "Climate change contribution: approximately 8% of global CO2 emissions",
                "Excessive energy consumption: cement kilns require temperatures up to 1450°C",
                "Air pollution from dust, particulate matter, and NOx emissions",
                "Water usage in cooling and dust suppression",
                "Waste generation from quarrying and production processes",
                "Biodiversity impact from limestone quarrying operations",
                "Transportation emissions from heavy material logistics",
                "Concrete waste at end-of-life"
              ]}
            />
          </section>

          {/* EU Policies Section */}
          <section id="eu-policies" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">EU Policies</h2>

            <p className="text-muted-foreground mb-4">
              Several EU policies and regulations affect the cement sector:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Industrial Emissions Directive (IED)</h4>
                <p className="text-sm text-muted-foreground">Sets emission limits and Best Available Techniques (BAT) requirements.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Carbon Border Adjustment Mechanism (CBAM)</h4>
                <p className="text-sm text-muted-foreground">Addresses carbon leakage risk for cement imports.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">EU Taxonomy Regulation</h4>
                <p className="text-sm text-muted-foreground">Defines criteria for sustainable cement production activities.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Construction Products Regulation (CPR)</h4>
                <p className="text-sm text-muted-foreground">Standards for construction materials including cement.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Circular Economy Package</h4>
                <p className="text-sm text-muted-foreground">Promotes recycling and resource efficiency.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Renovation Wave Initiative</h4>
                <p className="text-sm text-muted-foreground">Drives demand for sustainable building materials.</p>
              </div>
            </div>
          </section>

          {/* Transition Plans Section */}
          <section id="transition-plans" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Transition Plan Credibility</h2>

            <p className="text-muted-foreground mb-4">
              Financial institutions assessing cement sector borrowers should evaluate transition plans based on:
            </p>

            <StyledList
              style="check"
              items={[
                "Clinker-to-cement ratio reduction targets and progress",
                "Alternative fuel substitution rates and roadmap",
                "CCS/CCU deployment plans and feasibility",
                "Energy efficiency improvement commitments",
                "Scope 1, 2, and 3 emission reduction targets aligned with science-based pathways",
                "CapEx allocation for low-carbon technologies",
                "Timeline for achieving key decarbonization milestones"
              ]}
            />

            <Callout type="important" title="GHG Metrics">
              Key metrics include CO2 per tonne of cite, clinker-to-cement ratio, alternative fuel rate, and thermal energy consumption per tonne of clinker.
            </Callout>
          </section>

          <SourceCitations sources={sources} />

          <PageNavigation
            prev={{
              title: "Steel Sector",
              href: "/sectors/steel",
              category: "Sectors"
            }}
            next={{
              title: "Automotive Sector",
              href: "/sectors/automotive",
              category: "Sectors"
            }}
          />
        </article>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const Cement = () => {
  return (
    <DynamicPageContent
      slug="sectors/cement"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sectors", href: "/sectors/steel" },
        { label: "Cement" },
      ]}
      navigation={{
        prev: { title: "Steel Sector", href: "/sectors/steel", category: "Sectors" },
        next: { title: "Automotive Sector", href: "/sectors/automotive", category: "Sectors" }
      }}
      fallback={<CementFallback />}
    />
  );
};

export default Cement;
