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
  { id: "dri-route", title: "Direct Reduced Iron (DRI)", level: 3 },
  { id: "best-practices", title: "Best Practices & Benchmarks", level: 2 },
  { id: "impacts", title: "Environmental Impacts", level: 2 },
  { id: "eu-policies", title: "EU Policies", level: 2 },
  { id: "decarbonization", title: "Decarbonization Technologies", level: 2 },
  { id: "transition-plans", title: "Transition Plan Credibility", level: 2 },
  { id: "target-setting", title: "Target Setting (SBTi)", level: 2 },
  { id: "kpis", title: "KPIs for Steel Sector", level: 2 },
  { id: "locked-in-emissions", title: "Locked-in Emissions", level: 2 },
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
  {
    id: 5,
    title: "Climate Bonds Steel Criteria",
    author: "Climate Bonds Initiative (CBI)",
    year: "2023",
    url: "https://www.climatebonds.net/files/files/Climate%20Bonds%20Steel%20Criteria.pdf",
  },
  {
    id: 6,
    title: "Steel Transition Strategy",
    author: "Mission Possible Partnership (MPP)",
    year: "2022",
    url: "https://missionpossiblepartnership.org/action-sectors/steel/",
  },
  {
    id: 7,
    title: "Carbon Performance Assessment of Steel",
    author: "Transition Pathway Initiative (TPI)",
    year: "2021",
    url: "https://www.transitionpathwayinitiative.org/publications/44",
  },
  {
    id: 8,
    title: "ResponsibleSteel International Production Standard V2.1",
    author: "ResponsibleSteel",
    year: "2024",
    url: "https://www.responsiblesteel.org/",
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

            <div id="dri-route" className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Direct Reduced Iron (DRI)</h3>

              <p className="text-muted-foreground mb-4">
                DRI is produced by reducing iron ore using natural gas or hydrogen without melting. It produces a solid iron product (sponge iron) that can be used in EAF as a substitute for scrap.
              </p>

              <p className="text-muted-foreground mb-4">
                <strong>Hydrogen-Based DRI</strong> is an emerging technology with significant potential for near-zero emissions when using green hydrogen. Several pilot projects are underway globally, and this route is expected to be a key decarbonization pathway.
              </p>

              <Callout type="info" title="Key Advantage">
                DRI-EAF with green hydrogen can achieve up to 95% emission reduction compared to BF-BOF route, making it one of the most promising decarbonization technologies for the steel sector.
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

          {/* EU Policies Section */}
          <section id="eu-policies" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">EU Policies</h2>

            <p className="text-muted-foreground mb-4">
              Several EU policies and regulatory frameworks affect the steel sector:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">EU Emissions Trading System (EU ETS)</h4>
                <p className="text-sm text-muted-foreground">Cap-and-trade system covering steel production. Free allocation is being phased out as CBAM is introduced.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Carbon Border Adjustment Mechanism (CBAM)</h4>
                <p className="text-sm text-muted-foreground">Import levy on embedded carbon in steel products. Transitional phase since Oct 2023; financial obligations from 2026.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Industrial Emissions Directive (IED)</h4>
                <p className="text-sm text-muted-foreground">Sets emission limits and Best Available Techniques (BAT) requirements for industrial installations.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">EU Taxonomy Regulation</h4>
                <p className="text-sm text-muted-foreground">Defines criteria for sustainable steel production. Key thresholds apply to different production processes.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Fit for 55 Package</h4>
                <p className="text-sm text-muted-foreground">Comprehensive climate policy targeting 55% emission reduction by 2030.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Green Deal Industrial Plan</h4>
                <p className="text-sm text-muted-foreground">Support measures for clean technology manufacturing and green industrial transition.</p>
              </div>
            </div>

            <Callout type="important" title="EU Taxonomy Thresholds">
              Key emission thresholds for EU Taxonomy alignment include: Hot metal ≤1.331 tCO2e/t, EAF high alloy ≤0.266 tCO2e/t, EAF carbon steel ≤0.209 tCO2e/t.
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

          {/* Target Setting Section */}
          <section id="target-setting" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Target Setting (SBTi Approach)</h2>

            <p className="text-muted-foreground mb-4">
              The Science Based Targets initiative (SBTi) provides guidance for steel sector target setting using the <strong>Sectoral Decarbonization Approach (SDA)</strong>.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3">Core Requirements</h3>

            <StyledList
              style="number"
              items={[
                "Emissions must align with the defined core boundary, using hot rolled steel as the intensity denominator",
                "Include upstream emissions from purchased intermediate products within the boundary",
                "Include downstream emissions from processing sold products within the core boundary",
                "Set scope 3 targets covering all category 3 fuel- and energy-related emissions",
                "Justify growth projections in target submission",
                "Annual disclosure of emissions and scrap ratio aligned with target boundary"
              ]}
            />

            <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">Emission Intensity Benchmarks (1.5°C Scenario)</h3>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 font-semibold">Year</th>
                    <th className="text-left py-2 font-semibold">Combined (tCO2/t)</th>
                    <th className="text-left py-2 font-semibold">Primary (tCO2/t)</th>
                    <th className="text-left py-2 font-semibold">Secondary (tCO2/t)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b"><td className="py-2">2030</td><td>0.99</td><td>1.22</td><td>0.28</td></tr>
                  <tr className="border-b"><td className="py-2">2040</td><td>0.37</td><td>0.37</td><td>0.16</td></tr>
                  <tr><td className="py-2">2050</td><td>0.12</td><td>0.05</td><td>0.05</td></tr>
                </tbody>
              </table>
            </div>

            <Callout type="info" title="Scrap Ratio Consideration">
              There is a systematic difference in emissions intensity between primary and secondary steelmaking. Combined benchmarks may be too strict for pure primary producers and too lenient for pure secondary producers.
            </Callout>
          </section>

          {/* KPIs Section */}
          <section id="kpis" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">KPIs for Steel Sector</h2>

            <p className="text-muted-foreground mb-4">
              Key Performance Indicators for assessing steel companies' transition progress:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Physical Emission Intensity</h4>
                <p className="text-sm text-muted-foreground">tCO2e per tonne of crude steel produced. EU Taxonomy: Hot metal ≤1.331, EAF carbon steel ≤0.209 tCO2e/t.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Scope 1+2 Reduction Targets</h4>
                <p className="text-sm text-muted-foreground">Long-term: 80-95% by 2050 vs 1990. Medium: 30% intensity reduction by 2030 from 2015 baseline.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Scope 3 Emission Intensity Trend</h4>
                <p className="text-sm text-muted-foreground">Alignment with decarbonization pathway over 5-year periods. Example: ArcelorMittal targets 25% Scope 3 reduction by 2030.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">R&D Investment</h4>
                <p className="text-sm text-muted-foreground">Ratio of R&D in mature and non-mature low-carbon technologies (hydrogen, CCS, efficiency, waste heat recovery).</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Scrap Utilization Rate</h4>
                <p className="text-sm text-muted-foreground">Target: 45.3% share of metallic inputs by 2050 under SDS scenario. Material efficiency can reduce emissions 55%.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Waste Reduction</h4>
                <p className="text-sm text-muted-foreground">Industry benchmark: 70% waste reduction by 2030. Steel packaging recycling rate ~84% as of 2019.</p>
              </div>
            </div>
          </section>

          {/* Locked-in Emissions Section */}
          <section id="locked-in-emissions" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Locked-in Emissions</h2>

            <p className="text-muted-foreground mb-4">
              <strong>Carbon lock-in</strong> in the steel industry is defined as the action of enabling carbon-intensive technologies such as BF-BOF to persist, causing lower carbon alternatives to be 'locked out'.
            </p>

            <Callout type="warning" title="Carbon Budget">
              The global carbon budget to limit warming to 1.5°C (67% certainty) is 400 GtCO2 until 2050. The steel industry share is approximately 19 Gt CO2 (5.0%). OECM allocates ~14 Gt for 2020-2030 and ~19 Gt for 2020-2050.
            </Callout>

            <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">Assessment Framework</h3>

            <p className="text-muted-foreground mb-4">
              Financial institutions should assess locked-in emissions by evaluating:
            </p>

            <StyledList
              style="check"
              items={[
                "Remaining operational lifetime of carbon-intensive assets",
                "Planned capacity additions and their emission profiles",
                "Gap between committed emissions and carbon budget",
                "Allocation methodology used by borrowers (SDA or ACA)",
                "Whether targets are SBTi validated",
                "Stranded asset risk for carbon-intensive facilities"
              ]}
            />

            <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">Engagement Steps</h3>

            <p className="text-muted-foreground mb-4">
              When locked-in emissions exceed the carbon budget, financial institutions should:
            </p>

            <StyledList
              style="number"
              items={[
                "Assess the allocation approach used by the borrower (SDA or ACA)",
                "Verify if targets have been validated following SBTi criteria",
                "Use SBTi target setting tool to assess validity of disclosed data",
                "Compare with cumulative locked-in emissions",
                "Calculate if emission intensity exceeds the carbon budget",
                "Understand how exceeding emissions connect to financed emissions"
              ]}
            />
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
