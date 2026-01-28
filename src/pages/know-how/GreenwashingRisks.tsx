import DynamicPageContent from "@/components/docs/DynamicPageContent";
import DocsLayout from "@/components/layout/DocsLayout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TableOfContents from "@/components/layout/TableOfContents";
import Callout from "@/components/docs/Callout";
import PageMeta from "@/components/docs/PageMeta";
import PageNavigation from "@/components/docs/PageNavigation";
import StyledList from "@/components/docs/StyledList";

const tocItems = [
  { id: "definition", title: "Definition of Greenwashing", level: 2 },
  { id: "features", title: "Features of Greenwashing", level: 2 },
  { id: "eba-examples", title: "EBA Examples", level: 2 },
  { id: "esma-examples", title: "ESMA Examples", level: 2 },
  { id: "product-approval", title: "Product Approval Process", level: 2 },
  { id: "impact", title: "Impact of Greenwashing", level: 2 },
  { id: "transition-washing", title: "Definition of Transition Washing", level: 2 },
  { id: "transition-washing-lending", title: "Transition Washing in Lending Products", level: 2 },
];

const GreenwashingRisksFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Know-How Tool", href: "/know-how/transition-finance" },
              { label: "Greenwashing Risks" },
            ]}
          />

          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">
            Greenwashing and Transition Washing Risks in Lending Products
          </h1>

          <PageMeta
            lastUpdated="November 20, 2024"
            tags={["Greenwashing", "Transition Washing", "ESAs", "EBA", "ESMA", "Lending Products"]}
          />

          <p className="text-lg text-muted-foreground mb-8">
            Understanding greenwashing and transition washing risks, their definitions under EU financial law, and their implications for lending products and financial institutions.
          </p>

          {/* Definition Section */}
          <section id="definition" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Definition of Greenwashing</h2>

            <p className="text-muted-foreground mb-4">
              <strong>Is there a definition of greenwashing in financial law?</strong>
            </p>

            <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 bg-muted/30 rounded-r-lg">
              <p className="text-foreground italic">
                &quot;A practice whereby sustainability-related statements, declarations, actions or communications do not clearly and fairly reflect the underlying sustainability profile of an entity, a financial product or financial services. This practice may be misleading to consumers, investors or other market participants.&quot;
              </p>
              <cite className="text-sm text-muted-foreground mt-2 block">— European Supervisory Authorities (ESAs)</cite>
            </blockquote>
          </section>

          {/* Features Section */}
          <section id="features" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Features of Greenwashing</h2>

            <p className="text-muted-foreground mb-4">
              The European Banking Authority (EBA) has identified certain key features of greenwashing and indicated cases in which statements/declarations/actions or communications are deemed to be misleading, e.g. by error or omission, which relate to the approach to integrating sustainability, to sustainability results and impacts and to future commitments.
            </p>

            <Callout type="warning" title="SLL-Specific Greenwashing">
              These features include cases of sustainability-linked loans which:
            </Callout>

            <StyledList
              style="arrow"
              items={[
                "Are marketed as having real-world impact even if the structure of the SLL does not allow it or without evidence of a causal link in the real economy",
                "Include contractual provisions that provide for a margin reduction if targets are met and do not provide for a margin penalty if targets are not met",
              ]}
            />
          </section>

          {/* EBA Examples Section */}
          <section id="eba-examples" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Examples of Greenwashing That Could Also Apply to Loans (EBA)</h2>

            <p className="text-muted-foreground mb-4">
              Examples of greenwashing applicable to bonds which would also apply to loans include:
            </p>

            <StyledList
              style="number"
              items={[
                "If the SPTs set out in the bonds refer to something the issuer would achieve anyway, or if the SPTs account for a tiny portion of the issuer's CO2 emissions",
                "Presenting bonds as having 'use of proceeds' for green purposes without ensuring that the proceeds are fully used towards a green project or green collateral",
                "Misleading references to an ESG bond label",
              ]}
            />
          </section>

          {/* ESMA Examples Section */}
          <section id="esma-examples" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Examples of Greenwashing Identified by ESMA</h2>

            <p className="text-muted-foreground mb-4">
              The European Securities and Markets Authority (ESMA) has identified greenwashing examples with respect to sustainability-linked bonds and green bonds in its progress report:
            </p>

            <StyledList
              style="arrow"
              items={[
                "Misleading claims about real-world impact based on an unproven causal link between an ESG metric and real-world impact, implying that ESG metrics mean more than what they do",
                "Omission or lack of clarity about where exactly the impact is achieved and how it is measured",
                "ESG metric selected being ill-constructed, ill-suited to measure impact or not relevant for the sustainable objective",
                "Interdependencies between product and entity level — while a product may be accurately portrayed as sustainable, if messaging implies the entire organisation should be perceived as sustainable, it could give rise to greenwashing concerns for the entire institution",
              ]}
            />
          </section>

          {/* Product Approval Section */}
          <section id="product-approval" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Relevance of Product Approval Process for Reducing Greenwashing Risks</h2>

            <p className="text-muted-foreground mb-4">
              The EBA in its progress report of May 2023 indicated that product approval processes could help reducing the risk, citing that some institutions have put in place strict internal standards and criteria for products and services labelled as sustainable, reducing space for interpretation.
            </p>

            <Callout type="tip" title="Best Practice">
              Some banks have actively interacted with borrowers to ensure that KPIs and SPTs in sustainability-linked loans are both significant and ambitious. Additionally, they have emphasised to borrowers the imprudence of promoting loans acquired as sustainability-linked.
            </Callout>
          </section>

          {/* Impact Section */}
          <section id="impact" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Impact of Greenwashing According to EBA</h2>

            <p className="text-muted-foreground mb-4">
              Greenwashing impacts financial risks and, as indicated by the EBA, the transmission channels of greenwashing-related financial risks can be summarised as follows:
            </p>

            <h5 className="font-semibold text-foreground mb-2">Reputational Risk</h5>
            <StyledList
              style="arrow"
              items={[
                "Media campaigns and consumer association initiatives deteriorating public perception when found involved in greenwashing",
                "Published customer complaints regarding greenwashing",
                "Ongoing litigation/legal actions due to alleged greenwashing",
                "Information revealing financing of environmentally or socially harmful activities",
                "Lack of trust and credibility from clients, employees, business partners and investors",
              ]}
            />

            <h5 className="font-semibold text-foreground mt-4 mb-2">Operational Risk</h5>
            <StyledList
              style="arrow"
              items={[
                "Losses related to liability claims from mis-selling of products as green whereas they do not comply with standards",
                "Litigation against institutions arguing that advertised support for environmental initiatives constitutes greenwashing",
                "Litigation due to misalignment between internal environmental policies and activities",
              ]}
            />

            <h5 className="font-semibold text-foreground mt-4 mb-2">Risk to Business Model</h5>
            <StyledList
              style="arrow"
              items={[
                "Reductions in earnings or loss of confidence by investors, depositors or interbank market participants",
                "Loss of income resulting from conduct failure and fines",
              ]}
            />

            <h5 className="font-semibold text-foreground mt-4 mb-2">Liquidity and Funding Risk</h5>
            <StyledList
              style="arrow"
              items={[
                "Reduced access to market funding or less favorable conditions motivated by reputational damage",
                "Reduced ability to issue green bonds due to lack of confidence from reputational damage",
              ]}
            />

            <h5 className="font-semibold text-foreground mt-4 mb-2">Credit Risk</h5>
            <p className="text-muted-foreground mb-4">
              Impact on the counterparties of the institution, which could subsequently affect their ability to honour their commitments to the institution.
            </p>

            <h5 className="font-semibold text-foreground mt-4 mb-2">Market Risk</h5>
            <StyledList
              style="arrow"
              items={[
                "Losses due to a drop in market price of green-labelled financial instruments if no longer regarded as green",
                "Higher volatility in market price of financial instruments issued by entities affected by greenwashing controversies",
              ]}
            />
          </section>

          {/* Transition Washing Definition Section */}
          <section id="transition-washing" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Definition of Transition Washing</h2>

            <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 bg-muted/30 rounded-r-lg">
              <p className="text-foreground italic">
                &quot;It occurs where claims, acts or omissions create an impression that an entity is transitioning its economic or business activities to a state of net zero greenhouse gas emissions to a greater extent or more rapidly than it actually is.&quot;
              </p>
              <cite className="text-sm text-muted-foreground mt-2 block">— ClientEarth</cite>
            </blockquote>
          </section>

          {/* Transition Washing in Lending Section */}
          <section id="transition-washing-lending" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Transition Washing in Lending Products</h2>

            <p className="text-muted-foreground mb-4">
              Transition washing is a practice that translates into a claim that the lender, its portfolio or the borrower is transitioning to Net Zero or Near Zero, where such a claim:
            </p>

            <StyledList
              style="arrow"
              items={[
                "Overstates the transition or emission abatement features or the positive impact of the loan/debt product, the portfolio or the Use of Proceeds (not substantiated by a robust science-based analysis)",
                "Overstates the choice of a KPI that is not material for the emission abatement or the sustainability of the borrower",
                "Gives a misleading or unclear impression about the sustainability characteristics of the borrower or of the product",
              ]}
            />

            <Callout type="important" title="Forms of Transition Washing">
              Transition washing takes several distinct forms in lending products:
            </Callout>

            <StyledList
              style="number"
              items={[
                "Transition lighting — The lender or borrower focuses strategy, products, or services on less material green or transition aspects while hiding the lack of performance on the most material aspects",
                "Transition rinsing — The lender or borrower changes its transition targets or SPTs before they are achieved",
                "Transition labelling — The lender or hard-to-abate borrower labels a product as a transition loan even if it does not have the required characteristics, or sets targets that cannot reach net zero objectives and/or fails to include undertakings to address transition risks",
                "Transition hushing — Client engagement and loan documentation fail to monitor regularly and effectively the real economy transition of the borrower, translating into under-reporting",
              ]}
            />
          </section>

          <PageNavigation
            prev={{
              title: "Risk Assessment",
              href: "/know-how/risk-assessment",
              category: "Know-How Tool"
            }}
            next={{
              title: "Litigation Risk",
              href: "/know-how/litigation-risk",
              category: "Know-How Tool"
            }}
          />
        </article>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const GreenwashingRisks = () => {
  return (
    <DynamicPageContent
      slug="know-how/greenwashing-risks"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Know-How Tool", href: "/know-how/transition-finance" },
        { label: "Greenwashing Risks" },
      ]}
      navigation={{
        prev: { title: "Risk Assessment", href: "/know-how/risk-assessment", category: "Know-How Tool" },
        next: { title: "Litigation Risk", href: "/know-how/litigation-risk", category: "Know-How Tool" }
      }}
      fallback={<GreenwashingRisksFallback />}
    />
  );
};

export default GreenwashingRisks;
