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
  { id: "symmetry-of-information", title: "Transition Finance Products and Symmetry of Information", level: 2 },
  { id: "credibility-metrics", title: "Using Transition Plans' Credibility as a Strategy Tool", level: 2 },
  { id: "asset-classes", title: "Approaches to Different Asset Classes", level: 2 },
  { id: "gcpl", title: "General Corporate Purpose Loans", level: 3 },
  { id: "sll-green-loans", title: "Sustainability-Linked Loans and Green/UoP Loans", level: 3 },
  { id: "solution", title: "The Solution for These Asset Classes", level: 3 },
];

const sources = [
  {
    id: 1,
    title: "OECD Guidance on Transition Finance: Ensuring Credibility of Corporate Climate Transition Plans",
    author: "OECD",
    year: "2022",
    url: "https://doi.org/10.1787/7c68a1ee-en",
  },
  {
    id: 2,
    title: "Questions and Answers on the Sustainable Finance Package",
    author: "EU Commission",
    year: "2023",
    url: "https://ec.europa.eu/commission/presscorner/detail/en/qanda_23_3194",
  },
  {
    id: 3,
    title: "ESMA Report on Trends, Risks and Vulnerabilities Risk Analysis",
    author: "European Securities and Markets Authority",
    year: "2023",
  },
];

const SolutionsDeploymentFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Know-How Tool", href: "/know-how/transition-finance" },
              { label: "Solutions Deployment" },
            ]}
          />

          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">
            Solutions for Maximising Deployment of Transition Finance
          </h1>

          <PageMeta
            lastUpdated="October 6, 2024"
            tags={["Transition Finance", "Lending Products", "Asset Classes", "SLL"]}
          />

          <p className="text-lg text-muted-foreground mb-8">
            Exploring how banking products and lending standards can be empowered to maximise the deployment of transition finance across different asset classes.
          </p>

          {/* Symmetry of Information Section */}
          <section id="symmetry-of-information" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Transition Finance Products and Symmetry of Information</h2>

            <p className="text-muted-foreground mb-4">
              As indicated by a survey carried out by OECD, bank lending is supposedly the largest source of funding of transition finance. This requires that the overall client engagement is based on full symmetry. Banking products have a fundamental role to play in achieving such a symmetry as they constitute the backbone of the client/bank relationship.
            </p>

            <Callout type="info" title="Achieving Symmetry">
              Symmetry can be achieved through increased due diligence on clients&apos; transition plans, the adoption of transition-related metrics in the bank vs client relationship, the inclusion of representations in legal documentation supporting the accuracy and credibility of the information provided by the borrowers, and the introduction of KPIs, information undertakings and negative and affirmative covenants.
            </Callout>
          </section>

          {/* Credibility Metrics Section */}
          <section id="credibility-metrics" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Using Transition Plans&apos; Credibility and Quantitative Metrics as a Strategy Tool</h2>

            <p className="text-muted-foreground mb-4">
              Financed emissions could be a proxy for the decarbonisation efforts of financial institutions but help little for determining their real economy transition impact.
            </p>

            <Callout type="warning" title="Limitations of Commitments-Based Lending">
              Equally lending against borrowers&apos; decarbonisation commitments is ineffectual and often gives rise to transition washing.
            </Callout>

            <p className="text-muted-foreground mb-4">
              Client strategy, debt allocation, maturities and loan characteristics need to be based on quantitative transition-related metrics (e.g. on lock-in risk and EGD-alignment) and credibility of clients&apos; transition plans rather than on simple ESG scorings.
            </p>
          </section>

          {/* Asset Classes Section */}
          <section id="asset-classes" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Approaches to Different Asset Classes</h2>

            <section id="gcpl" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">How Can Lenders Empower General Corporate Purpose Loans in the Deployment of Transition Finance?</h3>

              <p className="text-muted-foreground mb-4">
                General corporate purpose loans represent the main source of finance for European corporations. Although general corporate purpose finance bears relevance in the calculation of financed emissions, it has been unaccounted for in the deployment of transition finance. Given its scope, general corporate purpose finance could play a significant role in pushing borrowers to engage on transition issues and in promoting the credibility of transition plans.
              </p>
            </section>

            <section id="sll-green-loans" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">What About Sustainability-Linked Loans? And Green/UoP Loans?</h3>

              <p className="text-muted-foreground mb-4">
                Sustainability-linked loans made available by the banking sector are recognised as the largest source of sustainable finance in Europe. However, SLLs have been subject to criticism because of their greenwashing risks, and their role in transition finance requires careful consideration.
              </p>

              <Callout type="warning" title="Challenges with Green Loans">
                While the role of green loans should be undoubtedly extremely important in order to achieve Net Zero, it is widely recognized that green loans suffer from labour intensiveness and high execution time and costs at lenders and borrowers&apos; level and from limited or lack of &quot;greenium&quot;. The relation between these factors creates a cost-time/benefit issue and constitutes a deterrent for the effective deployment of the green loan as the key lending product.
              </Callout>
            </section>

            <section id="solution" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">What&apos;s the Solution for These Asset Classes?</h3>

              <p className="text-muted-foreground mb-4">
                These asset classes should equally have a critical role in fostering Net-zero transition. Hence, empowering not only green/UoP loans but also GCPLs and SLLs with effective means for accelerating transition should be a key objective of lending product design and lending standards.
              </p>

              <Callout type="tip" title="Sector-Based Approach">
                These asset classes, and in particular SLLs, should abandon a sector agnostic approach and convert to a sector impact and risk-based and opportunity-based approach that is capable of maximising transition finance.
              </Callout>

              <p className="text-muted-foreground mb-4">
                This would help:
              </p>

              <StyledList
                style="check"
                items={[
                  "Reducing transition washing risk",
                  "Enhancing effectiveness of transition finance by linking credit allocation to the continuous credibility and ambitiousness of the borrowers' transition plans",
                  "Strengthening the bank's lines of defence vis-à-vis policy and legally driven transition risks and greenwashing risk",
                ]}
              />
            </section>
          </section>

          <SourceCitations sources={sources} />

          <PageNavigation
            prev={{
              title: "Credible Transition Plans",
              href: "/know-how/credible-transition-plans",
              category: "Know-How Tool"
            }}
          />
        </article>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const SolutionsDeployment = () => {
  return (
    <DynamicPageContent
      slug="know-how/solutions-deployment"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Know-How Tool", href: "/know-how/transition-finance" },
        { label: "Solutions Deployment" },
      ]}
      navigation={{
        prev: { title: "Credible Transition Plans", href: "/know-how/credible-transition-plans", category: "Know-How Tool" }
      }}
      fallback={<SolutionsDeploymentFallback />}
    />
  );
};

export default SolutionsDeployment;
