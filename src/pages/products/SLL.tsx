import DynamicPageContent from "@/components/docs/DynamicPageContent";
import DocsLayout from "@/components/layout/DocsLayout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TableOfContents from "@/components/layout/TableOfContents";
import Callout from "@/components/docs/Callout";
import PageMeta from "@/components/docs/PageMeta";
import PageNavigation from "@/components/docs/PageNavigation";
import StyledList from "@/components/docs/StyledList";

const tocItems = [
  { id: "introduction", title: "Introduction", level: 2 },
  { id: "revisiting-slls", title: "Revisiting SLLs in a Transition Context", level: 2 },
  { id: "focus-areas", title: "Focus Areas for Transition-Linked Loans", level: 3 },
  { id: "more-transparency", title: "More Transparency from Borrowers", level: 2 },
  { id: "new-materiality", title: "New Definition of Materiality", level: 2 },
];

const SLLFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products/kpis-criteria" },
              { label: "Sustainability-Linked Loans" },
            ]}
          />

          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">
            Sustainability-Linked Loans
          </h1>

          <PageMeta
            lastUpdated="October 27, 2024"
            tags={["SLL", "Transition-Linked Loans", "KPIs", "SPTs", "Greenwashing"]}
          />

          <p className="text-lg text-muted-foreground mb-8">
            Revisiting sustainability-linked loans for hard-to-abate borrowers to address greenwashing risks and foster meaningful transition through Transition-Linked Loans (TLLs).
          </p>

          {/* Introduction Section */}
          <section id="introduction" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>

            <p className="text-muted-foreground mb-4">
              Sustainability-linked loans to hard-to-abate borrowers should reflect a high level of <strong>symmetry of information</strong> and <strong>sector-specific knowledge</strong>, which, unlike current SLLs that are sector-agnostic and rely on asymmetry of information, would help identify KPIs and calibrate SPTs with a certain degree of objectivity in accordance with science-based best practices, by aligning them with the client&apos;s credible transition pathway in the specific sector. Transition, environmental and biodiversity issues for hard-to-abate companies demand a different market approach to SLL compared to traditional ESG issues also in relation to step-up and step-down mechanics.
            </p>

            <p className="text-muted-foreground mb-4">
              This implies a structural change for executing SLLs, where lender and client engage on a substantially equally informed basis and where, even if the product is not use-of-proceeds based, the impact on the business model and the intended mitigation actions to be carried out during the life of the loan are well identified and the scope of any potential departure from such actions is precisely set.
            </p>

            <Callout type="info" title="Sector and Technology Specificity">
              This approach reflects the need to ensure, in a transition context, that SLLs be sector and technology specific rather than sector agnostic and be able to refer to the actual transition plan and its iterations, so that the bank can reduce its climate-alignment washing risk in SLLs and its exposure to climate change litigation.
            </Callout>

            <p className="text-muted-foreground mb-4">
              Through new contractual undertakings the client should become truly accountable to any issue related to the non-credibility of its transition plan and exposed to the triggering of an Event of Default if the transition pathway misalignment becomes measurably material.
            </p>

            <p className="text-muted-foreground mb-4">
              KPIs can be materially different, and borrowers should bear the consequences accordingly. <strong>Material KPIs</strong> addressing transition, environmental and biodiversity issues should only be subject to step-up while less material KPIs could be subject to a step-down mechanism.
            </p>
          </section>

          {/* Revisiting SLLs Section */}
          <section id="revisiting-slls" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Revisiting SLLs in a Transition Context to Address Greenwashing Risks</h2>

            <p className="text-muted-foreground mb-4">
              Sustainability-linked loans (SLLs) for hard-to-abate borrowers require significant revision to effectively foster transition and to become <strong>Transition-linked loans (TLLs)</strong>. Current SLLs face challenges due to information asymmetry and non-transition-related key performance indicators (KPIs) and sustainability performance targets (SPTs). To address these issues and align with the 2023 LMA Principles and Guidelines, specific guardrails are proposed.
            </p>

            <p className="text-muted-foreground mb-4">
              The product framework to be established by the lender should aim at enhancing the effectiveness of Sustainability-Linked Loans in driving meaningful transitions in hard-to-abate sectors, ensuring rigorous standards and accountability throughout the loan lifecycle, and to enable the creation of a robust asset class, the Transition-linked loans.
            </p>

            <Callout type="tip" title="Mitigating Greenwashing Risk">
              This approach allows financial institutions to assess and mitigate exposure to greenwashing and transition washing risks in TLL development. Institutions can then prioritise areas most relevant to their specific use cases, ensuring a more robust and effective approach to transition finance in challenging sectors.
            </Callout>

            {/* Focus Areas */}
            <section id="focus-areas" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Focus Areas for Transition-Linked Loans</h3>

              <p className="text-muted-foreground mb-4">
                Financial institutions developing TLLs in hard-to-abate transition contexts should focus on five key areas:
              </p>

              <h5 className="text-base font-semibold text-foreground mb-2">1. Selection of Transition-related Key Performance Indicators (KPIs)</h5>
              <p className="text-muted-foreground mb-4">
                In a transition context, KPIs should focus on real economy transition rather than general sustainability improvements. They should incentivise rapid acceleration of transition efforts, with failure to meet minimum transition levels triggering events of default. To mitigate greenwashing risks, margin step-downs should be avoided in TLL structures.
              </p>
              <StyledList style="check" items={["Scope application aligned with science-based standards", "Linkage to the borrower's transition strategy, lock-in risk, and relevant policies", "Benchmarking against Sustainability Performance Targets (SPTs)", "Scientific calculation methodologies", "Alignment with the borrower's core transition and business strategy", "Setting at entity, country, or project/plant level"]} />

              <h5 className="text-base font-semibold text-foreground mb-2">2. Calibration of Transition Performance Targets (TPTs)</h5>
              <p className="text-muted-foreground mb-4">
                TPTs must be ambitious, exceed regulatory requirements, and be material to the borrower&apos;s business.
              </p>
              <StyledList style="check" items={["Identification of credible benchmarks (e.g., science-based targets, alignment with EU policies)", "Verifiability and potential for renegotiation", "Significance of the chosen baseline", "Alignment with the borrower's science-based decarbonisation strategy", "Calibration beyond regulatory targets and coalition frameworks"]} />

              <h5 className="text-base font-semibold text-foreground mb-2">3. Loan Characteristics</h5>
              <p className="text-muted-foreground mb-4">Several changes could be considered:</p>
              <StyledList style="arrow" items={["Flexibility for updating KPIs and SPTs based on operational changes and policy developments", "Assessment of trigger events that could lead to loan default", "Mechanisms for loan adjustments to avoid default", "Include restructuring-like remedies", "Partial mandatory prepayments to adjust level of financed emissions"]} />

              <h5 className="text-base font-semibold text-foreground mb-2">4. Reporting</h5>
              <p className="text-muted-foreground mb-4">Annual reporting should include:</p>
              <StyledList style="arrow" items={["SPT benchmarking against sectoral decarbonization pathways", "Verification of transition performance against SPTs", "Impact on loan characteristics"]} />

              <h5 className="text-base font-semibold text-foreground mb-2">5. Verification</h5>
              <p className="text-muted-foreground mb-4">Key characteristics include:</p>
              <StyledList style="arrow" items={["Third-party verification of the borrower's transition profile and SPT performance", "Assessment of Do No Significant Harm (DNSH) and Just Transition risks", "Evaluation of KPI and SPT alignment with ongoing operations and future investments", "Analysis of emission levels, technology implementation, and baseline consistency"]} />
            </section>
          </section>

          {/* More Transparency Section */}
          <section id="more-transparency" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">More Transparency from Borrowers</h2>

            <p className="text-muted-foreground mb-4">
              Additional transparency from the borrowers in hard to abate sector should not just be required in &quot;the presence of controversial issues&quot; as indicated by the 2023 LMA&apos;s Guidelines for Sustainability Linked Loan Principles (the &quot;LMA Guidelines&quot;) but be <strong>mandatory in all cases</strong> as symmetry of information about borrowers&apos; transition pathways and transition plans is key to avoid greenwashing, reputational and litigation risks for lenders and borrowers and to help managing transition risks more effectively.
            </p>

            <Callout type="important" title="Fundamental Requirement">
              It is fundamental that lenders fully understand whether their client applies DNSH criteria in its operations, assesses natural capital losses, dependencies and impacts from its operations and whether it is aware of sectorial best practices, potential decarbonisation opportunities and related client&apos;s benchmarking by reference to adoption of product carbon footprint and LCA practices, sectorial best practices, initiatives, and peers&apos; technologies.
            </Callout>

            <p className="text-muted-foreground mb-4">
              The solution to this current asymmetry (and to reducing greenwashing and climate-alignment washing risks) in SLLs can be identified in a <strong>product-driven approach</strong> by introducing a significant step-up in the engagement with hard-to-abate borrowers and by linking the engagement outcomes -- reflecting the credibility of the transition plans -- to material and ambitious KPIs and SPTs, to be included in the loan documentation, that track steps to be made by the borrower to improve transition achievements and adhere to a Net zero or Near zero pathway seeking to enhance the application of EU taxonomy, while pursuing a Just Transition policy.
            </p>
          </section>

          {/* New Definition of Materiality Section */}
          <section id="new-materiality" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">New Definition of Materiality</h2>

            <p className="text-muted-foreground mb-4">
              The notion of materiality of the KPIs and SPTs set out in the LMA Guidelines should engage not only with E, S and G factors generally, but with various key aspects of transition finance such as <strong>lock-in risk</strong>, <strong>adoption of decarbonisation technologies</strong>, reference to targets aligned with EU Taxonomy and Green Deal objectives, impact on biodiversity, waste and water management.
            </p>
          </section>

          <PageNavigation
            prev={{
              title: "Corporate Loans",
              href: "/products/corporate-loans",
              category: "Products"
            }}
            next={{
              title: "Contractual Solutions",
              href: "/products/contractual-solutions",
              category: "Products"
            }}
          />
        </article>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const SLL = () => {
  return (
    <DynamicPageContent
      slug="products/sll"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products/kpis-criteria" },
        { label: "Sustainability-Linked Loans" },
      ]}
      navigation={{
        prev: { title: "Corporate Loans", href: "/products/corporate-loans", category: "Products" },
        next: { title: "Contractual Solutions", href: "/products/contractual-solutions", category: "Products" }
      }}
      fallback={<SLLFallback />}
    />
  );
};

export default SLL;
