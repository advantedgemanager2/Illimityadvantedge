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
  { id: "steel-market", title: "Steel Market", level: 2 },
  { id: "production-routes", title: "Production Routes", level: 2 },
  { id: "integrated-route", title: "Integrated Route (BF-BOF)", level: 3 },
  { id: "recycling-route", title: "Recycling Route (EAF)", level: 3 },
  { id: "best-practices", title: "Best Practices & Benchmarks", level: 2 },
  { id: "impacts", title: "Environmental Impacts", level: 2 },
  { id: "decarbonization", title: "Decarbonization Technologies", level: 2 },
  { id: "transition-plans", title: "Transition Plan Credibility", level: 2 },
  { id: "kpis", title: "KPIs for Steel Sector", level: 2 },
];

const sources = [
  {
    id: 1,
    title: "Iron and Steel Technology Roadmap",
    author: "International Energy Agency (IEA)",
    year: "2020",
    url: "https://www.iea.org/reports/iron-and-steel-technology-roadmap",
  },
  {
    id: 2,
    title: "Towards competitive and clean European steel",
    author: "European Commission",
    year: "2021",
    url: "https://commission.europa.eu/system/files/2021-05/swd-competitive-clean-european-steel_en.pdf",
  },
  {
    id: 3,
    title: "Steel Science-Based Target-Setting Guidance",
    author: "Science Based Targets initiative (SBTi)",
    year: "2023",
    url: "https://sciencebasedtargets.org/resources/files/SBTi-Steel-Guidance.pdf",
  },
  {
    id: 4,
    title: "European Steel in Figures 2023",
    author: "EUROFER",
    year: "2023",
    url: "https://www.eurofer.eu/publications/brochures-booklets-and-factsheets/european-steel-in-figures-2023/",
  },
];

const SteelFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Sectors", href: "/sectors/steel" },
              { label: "Steel" },
            ]}
          />

          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">
            Steel Sector
          </h1>

          <PageMeta
            lastUpdated="January 29, 2026"
            tags={["Hard-to-Abate", "Heavy Industry", "Decarbonization", "BF-BOF", "EAF"]}
          />

          <p className="text-lg text-muted-foreground mb-8">
            Comprehensive analysis of the steel sector's decarbonization pathways, production technologies, environmental impacts, and transition finance considerations.
          </p>

          {/* Introduction Section */}
          <section id="introduction" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>

            <p className="text-muted-foreground mb-4">
              The worldwide <strong>need for steel</strong> has been steadily increasing and is <strong>projected to keep rising</strong>. The steel industry is anticipated to be one of the few industries remaining reliant on coal in 2050, as it plays a crucial role as a reducing agent.
            </p>

            <p className="text-muted-foreground mb-4">
              <strong>Electricity-based production</strong> and the use of various technologies such as <strong>carbon capture and hydrogen-based production</strong> are expected to be decisive in achieving Near Zero emissions in the meantime.
            </p>

            <Callout type="warning" title="Urgent Action Required">
              There is a general consensus over the <strong>urgency to discontinue production from</strong> unmitigated Blast Furnace-Basic Oxygen Furnace (<strong>BF-BOF</strong>) facilities at the earliest opportunity.
            </Callout>

            <p className="text-muted-foreground mb-4">
              According to Bashmakov et al. (2022), there are three primary methods recognised in the literature for the steel sector to decrease Scope 1 and 2 CO2 emissions and attain net zero by 2050:
            </p>

            <StyledList
              style="number"
              items={[
                "Decrease in steel demand by increasing the efficiency of materials, promoting circular material flows, and reducing the overall demand in ultimate use, particularly in construction and manufacturing industries",
                "Increase the manufacture of steel from scrap materials using the scrap-EAF manufacturing method, which allows for recycling but necessitates the removal of carbon from the electricity used",
                "Improve the energy and material efficiency of current BF-BOF and DRI-EAF assets through upgrades or replacements, while developing and implementing innovative production methods at larger scale"
              ]}
            />
          </section>

          {/* Steel Market Section */}
          <section id="steel-market" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Steel Market</h2>

            <p className="text-muted-foreground mb-4">
              According to EU Commission's 2023 data, the <strong>EU is the second largest producer after China</strong>, producing 170 million tonnes a year, equal to 1.3% of EU GDP with 500 production sites in 23 Member States with 330,000 direct jobs and 2.6 million indirect jobs.
            </p>

            <Callout type="info" title="Carbon Intensity">
              Overall the sector's carbon intensity in the EU is equal to 200 million tonnes of CO2 emissions (approximately 5% of EU emissions).
            </Callout>

            <p className="text-muted-foreground mb-4">
              According to Roland Berger, the construction industry comprises 38% of the total steel demand in Europe. Automotive, mechanical engineering, and metalware industries make up 16%, 15%, and 14% of the demand, respectively. The IEA estimates that demand for steel is expected to increase by one-third between 2020 and 2050.
            </p>
          </section>

          {/* Production Routes Section */}
          <section id="production-routes" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Steel Production Routes</h2>

            <p className="text-muted-foreground mb-4">
              In the European Union, steel production is currently carried out through two primary methods, each characterised by distinct raw material and energy requirements.
            </p>

            <div id="integrated-route" className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Integrated Route (BF-BOF)</h3>

              <p className="text-muted-foreground mb-4">
                The first method involves a <strong>Blast Furnace-Basic Oxygen Furnace (BF-BOF)</strong> utilising mined iron ore, which undergoes a sequence of energy-intensive procedures and is transformed into iron and then, thanks to a basic oxygen converter and the addition of scrap metal, leads to the production of virgin steel.
              </p>

              <p className="text-muted-foreground mb-4">
                The BF-BOF route accounts for <strong>60% of EU steel production</strong>. The average carbon dioxide emissions per tonne of crude steel produced using this pathway is approximately <strong>1.9 tCO2/t</strong>.
              </p>

              <Callout type="important" title="Blast Furnace Lifespan">
                According to Climate Bonds Initiative, blast furnaces have a lifespan of decades. Most of the blast furnaces in operations in the EU can be in operation for at least two decades. <strong>To achieve Net Zero, 74% of existing blast furnaces need to be replaced with low-carbon alternatives by 2030</strong>. CBI estimates that EUR 21-31bn in CapEx is required to transition the European steel sector.
              </Callout>
            </div>

            <div id="recycling-route" className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Recycling Route (EAF)</h3>

              <p className="text-muted-foreground mb-4">
                The second method entails the utilisation of recycled steel scrap, which is directly melted into steel using an <strong>Electric Arc Furnace (EAF)</strong>. This route accounts for <strong>40% of EU production</strong>.
              </p>

              <p className="text-muted-foreground mb-4">
                On average, an Electric Arc Furnace consumes around <strong>500 kWh of power per tonne of steel</strong>. The cumulative emissions from EAF operations amount to around <strong>0.2-0.3 tCO2 per tonne of steel</strong>.
              </p>

              <Callout type="tip" title="Emission Reduction Potential">
                The mitigation of indirect emissions could be achieved through the use of renewable electricity in the EAF process. The integration of renewable electricity in conjunction with hydrogen production is crucial for enhancing the overall sustainability of the steelmaking process.
              </Callout>
            </div>
          </section>

          {/* Best Practices Section */}
          <section id="best-practices" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Best Practices & Benchmarks</h2>

            <p className="text-muted-foreground mb-4">
              Several frameworks and standards have been developed to guide steel sector decarbonization:
            </p>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Responsible Steel Standard v2.1</h4>
                <p className="text-muted-foreground text-sm">Requires steel businesses to set science-based GHG emission reduction objectives. IIGCC recommends using the Responsible Steel emission boundary, which includes Scope 1, Scope 2 and upstream Scope 3.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Sustainable STEEL Principles</h4>
                <p className="text-muted-foreground text-sm">Useful for distinguishing emissions from primary steel manufacturing and secondary steel manufacture from scrap, making emissions comparisons fairer.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">SteelZero Benchmark</h4>
                <p className="text-muted-foreground text-sm">Established at 1.4 tCO2e/t for integrated steel and 0.2 tCO2e/t for recycled steel for 2030 targets.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Net Zero Steel Initiative</h4>
                <p className="text-muted-foreground text-sm">Has identified four technology routes including enhanced recycled steel utilization, CCS on BF-BOFs, hydrogen-based DRI-EAF, and new non-spatially allocated facilities.</p>
              </div>
            </div>
          </section>

          {/* Impacts Section */}
          <section id="impacts" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Environmental Impacts</h2>

            <p className="text-muted-foreground mb-4">
              The steel industry has several major serious impacts on climate, environment and public health, which can lead to legal liabilities and reputational risks:
            </p>

            <StyledList
              style="arrow"
              items={[
                "Climate change contribution due to excessive GHG emissions (approximately 7% of global and 5% of EU CO2 emissions)",
                "Excessive water usage (approximately 28 m³ per tonne of steel produced)",
                "Excessive waste production and groundwater contamination from slag and sludge containing heavy metals",
                "Air pollution from flue gases and dust particles",
                "Public health concerns due to air pollution and heavy metals exposure",
                "Biodiversity impact from mining and industrial operations"
              ]}
            />

            <Callout type="warning" title="1.5°C Scenario Challenge">
              Under a 1.5°C scenario, steel demand is projected to increase by approximately 12% by 2050. The sector needs to apply new low-CO2 technologies this decade to avoid the danger of stranded assets.
            </Callout>
          </section>

          {/* Decarbonization Technologies Section */}
          <section id="decarbonization" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Decarbonization Technologies</h2>

            <p className="text-muted-foreground mb-4">
              The Net Zero Steel Initiative has identified four technology routes that have the potential to contribute to the decarbonization of the steel industry:
            </p>

            <StyledList
              style="check"
              items={[
                "Enhanced utilisation of recycled steel with the aim of doubling recycled steel production",
                "Equipping coal blast furnaces (BF-BOFs) and DRI-EAF facilities with post-combustion carbon capture and storage (CCS)",
                "Hydrogen-based direct reduction iron (DRI) in electric arc furnaces (DRI-EAF-H)",
                "Constructing new non-spatially allocated facilities or importing environmentally friendly iron or steel"
              ]}
            />

            <Callout type="info" title="Biomass Alternative">
              The Steel Climate Standard by CBI recommends bio-based products for steelmaking decarbonization. Biomass resources like straw, corn stalks, sawdust, and timber harvests can replace coal in steelmaking with a renewable, carbon-rich alternative.
            </Callout>
          </section>

          {/* Transition Plans Section */}
          <section id="transition-plans" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Transition Plan Credibility</h2>

            <p className="text-muted-foreground mb-4">
              Financial institutions assessing steel sector borrowers should evaluate the credibility of transition plans based on several key criteria:
            </p>

            <StyledList
              style="number"
              items={[
                "Science-based target setting following the Sectoral Decarbonization Approach (SDA)",
                "Clear boundaries for emissions accounting (Scope 1, 2, and upstream Scope 3)",
                "Alignment with sectoral benchmark pathways",
                "Specific CapEx commitments for low-carbon technology deployment",
                "Timeline for phasing out unmitigated BF-BOF production"
              ]}
            />
          </section>

          {/* KPIs Section */}
          <section id="kpis" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">KPIs for Steel Sector</h2>

            <p className="text-muted-foreground mb-4">
              Key Performance Indicators for assessing steel companies' transition progress:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Physical Emission Intensity</h4>
                <p className="text-sm text-muted-foreground">tCO2e per tonne of crude steel produced</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Scope 1+2 Reduction Targets</h4>
                <p className="text-sm text-muted-foreground">Alignment with science-based pathways</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Scope 3 Emission Intensity Trend</h4>
                <p className="text-sm text-muted-foreground">Year-over-year improvement tracking</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">R&D Investment</h4>
                <p className="text-sm text-muted-foreground">Spending on climate change mitigation technologies</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Scrap Utilization Rate</h4>
                <p className="text-sm text-muted-foreground">Percentage of recycled content in production</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Locked-in Emissions</h4>
                <p className="text-sm text-muted-foreground">Future emissions from existing assets</p>
              </div>
            </div>
          </section>

          <SourceCitations sources={sources} />

          <PageNavigation
            prev={{
              title: "Loan Policy",
              href: "/products/loan-policy",
              category: "Products"
            }}
            next={{
              title: "Cement Sector",
              href: "/sectors/cement",
              category: "Sectors"
            }}
          />
        </article>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const Steel = () => {
  return (
    <DynamicPageContent
      slug="sectors/steel"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sectors", href: "/sectors/steel" },
        { label: "Steel" },
      ]}
      navigation={{
        prev: { title: "Loan Policy", href: "/products/loan-policy", category: "Products" },
        next: { title: "Cement Sector", href: "/sectors/cement", category: "Sectors" }
      }}
      fallback={<SteelFallback />}
    />
  );
};

export default Steel;
