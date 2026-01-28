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
  { id: "relevance-of-definition", title: "Relevance of Definition", level: 2 },
  { id: "product-label", title: "New Transition Finance Product Label?", level: 2 },
  { id: "transition-plans", title: "Transition Plans and Transition Finance", level: 2 },
];

const sources = [
  {
    id: 1,
    title: "Commission Recommendation (EU) 2023/1425 on facilitating finance for the transition to a sustainable economy",
    author: "European Commission",
    year: "2023",
    url: "https://eur-lex.europa.eu/eli/reco/2023/1425/oj",
  },
  {
    id: 2,
    title: "Communication of the Commission - The European Green Deal",
    author: "European Commission",
    year: "2019",
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=COM%3A2019%3A640%3AFIN",
  },
  {
    id: 3,
    title: "EU Platform on Sustainable Finance Report on Transition Plans",
    author: "EU Platform on Sustainable Finance",
    year: "2025",
  },
];

const TransitionFinanceFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Know-How Tool", href: "/know-how/transition-finance" },
              { label: "Transition Finance" },
            ]}
          />

          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">
            Transition Finance
          </h1>
          
          <PageMeta 
            lastUpdated="July 2, 2025" 
            tags={["Sustainable Finance", "EU Regulation", "Hard-to-Abate Sectors"]} 
          />

          <p className="text-lg text-muted-foreground mb-8">
            Understanding transition finance as a sustainable finance asset class supporting the decarbonization of hard-to-abate sectors.
          </p>

          {/* Introduction Section */}
          <section id="introduction" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            
            <p className="text-muted-foreground mb-4">
              Transition finance is a relatively recent addition to the sustainable finance asset classes as a category which is firstly aimed at supporting alignment with environmental and social objectives of economic activities that are emissions-intensive and do not currently have an environmentally sustainable alternatives, but still remain significant for socio-economic progress. Its scope of application concerns the transition of the <strong>hard-to-abate sectors</strong> with high emissions toward carbon neutrality.
            </p>

            <p className="text-muted-foreground mb-4">
              Several definitions and iterations of transition finance are available, provided by the EU Commission, the G20, the International Platform for Sustainable Finance, the Platform for Sustainable Finance, OECD and NGOs such as ClientEarth. These definitions share the main purposes of transition finance that are the <strong>avoidance of lock-in risk</strong> and the <strong>pursuit of Paris goals</strong>.
            </p>

            <p className="text-muted-foreground mb-4">
              Transition finance is not just use of proceeds based (as envisaged by the forthcoming LMA Transition Loan Principles), but encompasses sustainability-linked based finance and structured finance in order to establish a connection between transition performance and the cost of capital.
            </p>

            <p className="text-muted-foreground mb-4">
              It should also include finance for general purposes to borrowers active in hard-to-abate sectors, given that the ultimate role of transition finance should be that of reducing transition risks and the phasing-out of high-emitting assets.
            </p>

            <Callout type="info" title="Key Aspects at EU Level">
              At EU level, transition finance key aspects pivot on the <strong>measurability of carbon abatement</strong>, the definition of a business and investment plan that is <strong>based on science</strong>, the <strong>credibility of the borrower's transition plan</strong>, and the alignment with the EU industrial pathways, environmental and climate objectives, as supplemented by benchmarks set by sectoral coalition frameworks.
            </Callout>

            <Callout type="tip" title="Core Purpose">
              Ultimately, transition finance is about allocating finance to CapEx for credible mitigation actions that phase-out high-emitting assets, contributing to a real transition of the entire economy.
            </Callout>
          </section>

          {/* Relevance of Definition Section */}
          <section id="relevance-of-definition" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Relevance of Definition</h2>
            
            <p className="text-muted-foreground mb-4">
              Its definition is not just relevant in order to describe its purpose and application, but also because, within the sustainable finance asset classes, it carries a <strong>policy significance</strong>, linking credit allocation with policy objectives.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 bg-muted/30 rounded-r-lg">
              <p className="text-foreground italic">
                "Transition finance should be understood as the financing of climate- and environmental performance improvements to transition towards a sustainable economy, at a pace that is compatible with the climate and environmental objectives of the EU."
              </p>
              <cite className="text-sm text-muted-foreground mt-2 block">— European Commission</cite>
            </blockquote>

            <p className="text-muted-foreground mb-4">
              The EU Commission has also provided a definition of "transition finance" as, inter alia:
            </p>

            <StyledList 
              style="check"
              items={[
                "The financing of investments compatible with and contributing to the transition, that avoids lock-ins",
                "Investments in undertakings or economic activities with a credible transition plan at the level of the undertaking or at activity level",
                "Investments in undertakings or economic activities with credible science-based targets, where proportionate, that are supported by information ensuring integrity, transparency and accountability"
              ]}
            />

            <Callout type="info" title="Multifaceted Purpose">
              The purpose of transition debt finance in an EU context is multifaceted and can be located in credit allocation seeking to achieve:
            </Callout>

            <StyledList 
              style="number"
              items={[
                "Avoidance of lock-in risk",
                "Assurance of credibility of transition plans",
                "Enhancement and investment in science-based mitigation actions",
                "Pursuit of the EU Green Deal and EU climate and environmental objectives",
                "Addressing transition and nature-related risks while taking into account environmental and social impacts"
              ]}
            />
          </section>

          {/* Product Label Section */}
          <section id="product-label" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Do We Need a New Transition Finance Product Label?</h2>
            
            <p className="text-muted-foreground mb-4">
              It is debatable whether a new label is required to increase the deployment of transition finance.
            </p>

            <Callout type="warning" title="Risks of a New Label">
              The risk of adopting a new label is that such label will not be able to capture the multifaceted aspects of transition finance and will not be able to address regional approaches and wider objectives.
            </Callout>

            <p className="text-muted-foreground mb-4">
              Key concerns with introducing a new transition finance label include:
            </p>

            <StyledList 
              style="arrow"
              items={[
                "Inability to capture multifaceted aspects of transition finance",
                "Cannot address regional approaches and wider objectives (adaptation, resilience, value chain impact)",
                "Cannot incorporate policy-based and banking supervisor-influenced requirements",
                "Lacks dynamism and competes with other existing asset classes",
                "Does not address sectoral differences or technology and industrial policies",
                "May not accommodate nature-based solutions, Do No Significant Harm principles, or just transition requirements"
              ]}
            />

            <p className="text-muted-foreground mb-4">
              On the contrary, a global label could be free from technological determinism and sectoral approaches. While this would facilitate, in principle, deployment of capital and be applicable to several jurisdictions, the drawbacks of a label are probably too serious.
            </p>

            <Callout type="tip" title="Alternative Approach">
              It is more efficient to revisit the current asset classes to cater for transition approaches and solutions rather than creating a new label.
            </Callout>
          </section>

          {/* Transition Plans Section */}
          <section id="transition-plans" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Transition Plans and Transition Finance</h2>
            
            <p className="text-muted-foreground mb-4">
              Following the report published by the EU Platform on Sustainable Finance in January 2025, transition plans have been identified as key tools to <strong>"raise and grant transition finance"</strong>.
            </p>

            <p className="text-muted-foreground mb-4">
              Financial Market Participants (FMPs) are encouraged following this report to think of transition plans as an opportunity to provide effective transition finance. Transition plans provide FMPs with the necessary information and knowledge of the counterparty to develop banking products which are rooted in robust corporate transition plans and science-based targets.
            </p>

            <Callout type="important" title="Strategic Advantage">
              FMPs which are capable to assess and understand the credibility and robustness behind the transition plan of their clients will face invaluable advantages. It is a structural change management which will need the transversal collaboration of multiple stakeholders.
            </Callout>
          </section>

          <SourceCitations sources={sources} />

          <PageNavigation
            next={{
              title: "Transition Risks",
              href: "/know-how/transition-risks",
              category: "Know-How Tool"
            }}
          />
        </article>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const TransitionFinance = () => {
  return (
    <DynamicPageContent
      slug="know-how/transition-finance"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Know-How Tool", href: "/know-how/transition-finance" },
        { label: "Transition Finance" },
      ]}
      navigation={{
        next: { title: "Transition Risks", href: "/know-how/transition-risks", category: "Know-How Tool" }
      }}
      fallback={<TransitionFinanceFallback />}
    />
  );
};

export default TransitionFinance;
