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
  { id: "need-for-contractual-solutions", title: "The Need for Contractual Solutions", level: 2 },
  { id: "data-availability", title: "Availability and Reliability of Data", level: 3 },
  { id: "solutions-transition-plans", title: "Contractual Solutions Related to Transition Plans", level: 2 },
  { id: "reps-warranties", title: "Representations and Warranties and Affirmative Covenants", level: 3 },
  { id: "beyond-maturity", title: "Solutions Extending Beyond Maturity Dates", level: 3 },
  { id: "restructuring-like", title: "Restructuring-Like Solutions", level: 3 },
  { id: "contractual-clauses", title: "Contractual Clauses", level: 2 },
  { id: "no-misleading", title: "No Misleading Information", level: 3 },
  { id: "financial-statements", title: "Financial Statements and Management Reports", level: 3 },
  { id: "positive-covenants", title: "Positive Covenants to Prevent Lack of Credibility", level: 3 },
];

const ContractualSolutionsFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products/kpis-criteria" },
              { label: "Contractual Solutions" },
            ]}
          />

          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">
            Contractual Solutions
          </h1>

          <PageMeta
            lastUpdated="October 27, 2024"
            tags={["Contractual Solutions", "Loan Documentation", "Transition Plans", "Representations", "Covenants"]}
          />

          <p className="text-lg text-muted-foreground mb-8">
            Recommended contractual solutions in the form of representations, warranties and undertakings to address borrowers&apos; liability for misleading transition-related data.
          </p>

          {/* Introduction Section */}
          <section id="introduction" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4">
              It is recommended that contractual solutions in the form of representations and warranties and undertakings be introduced in the loan documentation to address the borrowers&apos; liability for any misleading or any inaccurate transition-related data and any reputational liability that may also impact the lender.
            </p>
          </section>

          {/* The Need for Contractual Solutions */}
          <section id="need-for-contractual-solutions" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">The Need for Contractual Solutions</h2>
            <p className="text-muted-foreground mb-4">
              Climate risks, and in particular transition risks, as well as a lack of credibility in transition plans, translate, through the transmission channels, into <strong>financial risks for borrowers</strong>. These financial risks also impact lenders, who are required to account for them in their risk appetite frameworks and their prudential transition plans.
            </p>
            <p className="text-muted-foreground mb-4">
              Managing transition risks from a bottom-up perspective and financing credible mitigation actions requires client&apos;s transparency on climate transition plans, symmetry of information, identification of robust metrics, accountability on the part of the clients providing the relevant information, ability to dictate borrowers and clients&apos; commitments to implement the commitments.
            </p>
            <Callout type="warning" title="Impact of Unreliable Data">
              Unreliability of lenders&apos; climate data leads to incorrect assessment of climate-related financial risks, lock-in and stranding risk so impacting soundness of credit decisions. Lenders&apos; inability to monitor client&apos;s transition plan exposes them to the risk that their prudential plans are ineffectual and that impacts on capital and liquidity are wrongly assessed.
            </Callout>

            <section id="data-availability" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Availability and Reliability of Data</h3>
              <p className="text-muted-foreground mb-4">
                Climate risk identification and assessment are based on the review of reliable transition-related data regarding the borrowers, supported by a credibility analysis of their transition plans. The accuracy of this data (that is not traditionally obtained as part of the credit risk assessment) is paramount for the efficacy of the bank&apos;s risk framework and for the soundness of its credit decisions.
              </p>
              <p className="text-muted-foreground mb-4">
                While the underlying data could be acquired through sustainability reporting (to be contained in the management reports) and third-party providers, some of this data, because of its industrial, technological and peer-compared content that engages with competitive intelligence, could only be obtained and updated through <strong>direct engagement in the contractual relationship</strong>.
              </p>
            </section>
          </section>

          {/* Contractual Solutions Related to Transition Plans */}
          <section id="solutions-transition-plans" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contractual Solutions Related to Transition Plans</h2>

            <section id="reps-warranties" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Representations and Warranties and Affirmative Covenants</h3>
              <p className="text-muted-foreground mb-4">Representations and warranties as well as affirmative covenants should relate to:</p>
              <h5 className="text-base font-semibold text-foreground mb-2">Credibility of Pathways and Management of Transition Risks</h5>
              <p className="text-muted-foreground mb-4">
                Solution should address the credibility risk affecting the clients&apos; transition pathways in the relevant industry and management of transition risks, e.g. by requiring adoption of climate scenarios and data collection access to enable assessment of decarbonisation initiatives adopted by peers and coalition frameworks, readiness of technology, biodiversity impact and dependencies, assessment of transition and environmental legal and policy issues, etc.
              </p>
              <h5 className="text-base font-semibold text-foreground mb-2">Adaptive Capacity to Deliver Mitigation</h5>
              <p className="text-muted-foreground mb-4">
                Language should monitor the gradual build-up by clients of an adaptive organisational structure capable of delivering transition, e.g. by committing to employ key personnel with adequate competence, by adopting risk management procedures addressing a three lines of defence approach to transition risks, by including financial commitments to establish data collection and processes for carrying out Life-Cycle-Assessments, Environmental Product Declarations and carbon product footprint for their outputs.
              </p>
            </section>

            <section id="beyond-maturity" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Solutions Extending Beyond Maturity Dates</h3>
              <h5 className="text-base font-semibold text-foreground mb-2">Prohibition of Financial Indebtedness at No More Favourable Terms</h5>
              <p className="text-muted-foreground mb-4">
                Another area is the setting of time-bound objectives at client level independent of, and extending beyond, maturity dates, with a view to build long-term borrower/bank relationships and set objectives on time horizons beyond the initial loan participation, protecting the value of future loans and investments and reducing the refinancing risk.
              </p>
              <Callout type="important" title="Critical Negative Undertaking">
                This is a critical aspect, which can be addressed through the introduction of a negative undertaking in the loan documentation which prevents the borrower from entering into new financial indebtedness which does not contain equivalent or more stringent KPIs, SPTs and similar provisions. Clients are likely to initially resist this approach and will try to explore the vulnerability of the policies of different lenders: the role of banks with a larger financing capacity can be critical in this respect due to their ability to dictate key terms.
              </Callout>
            </section>

            <section id="restructuring-like" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Restructuring-Like Solutions</h3>
              <h5 className="text-base font-semibold text-foreground mb-2">Appointment of a Chief Transition Officer</h5>
              <p className="text-muted-foreground mb-4">
                Failure to prepare and implement a transition plan is not materially different from an industrial and technology risk that could likely become a material adverse effect on the financial conditions and creditworthiness of the borrower.
              </p>
              <p className="text-muted-foreground mb-4">
                The proposed initial solution is for the lender to have initially the ability to appoint, at the borrower&apos;s expense, a <strong>Chief Transition Officer (CTO)</strong> that will take care of preparing or perfecting a credible plan after having engaged with shareholders and the other stakeholders. The areas which the CTO may focus (based on TPT disclosure framework) on are:
              </p>
              <StyledList style="arrow" items={["Ambition: Strategic ambition, Business model and value chain, Key assumptions and external factors", "Action: Implementation Strategy and Engagement Strategy", "Accountability: Metrics and Governance"]} />
            </section>
          </section>

          {/* Contractual Clauses */}
          <section id="contractual-clauses" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contractual Clauses</h2>

            <section id="no-misleading" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">No Misleading Information</h3>
              <h5 className="text-base font-semibold text-foreground mb-2">Background</h5>
              <p className="text-muted-foreground mb-4">
                Lending market practice does not currently require that borrowers warrant the accuracy of sustainability and transition-related data. However, following the implementation of CSRD, the enactment of CRR3 and CRD VI, the forthcoming adoption of the EBA Guidelines on ESG Risks, and the Joint Report of the ESAs on greenwashing, the bilateral and syndicated markets need to engage with the legal risks deriving from the inaccuracy of this data.
              </p>
              <p className="text-muted-foreground mb-4">
                The liability risk for the provision of material sustainability and transition-related data that eventually feeds into lenders&apos; risk assessments and prudential plans should lie with the borrowers, even if such data is not strictly related to the client&apos;s credit position.
              </p>
              <p className="text-muted-foreground mb-4">
                This should also apply to the accuracy of this data and of the factual information provided in the sustainability and transition-related data, as well as the quality of the information and assumptions on which the lender&apos;s projections are based, and to the fact that the information provided is not untrue or misleading.
              </p>
              <h5 className="text-base font-semibold text-foreground mb-2">Solution and Wording</h5>
              <p className="text-muted-foreground mb-4">
                In summary, the representation related to &quot;no misleading information&quot; should be extended also to sustainability and transition-related data, whether this is contained in mandatory sustainability reporting or in other data supplied or made available by the borrower.
              </p>
              <h5 className="text-base font-semibold text-foreground mb-2">Negotiating Points</h5>
              <StyledList style="arrow" items={["The provision of transition-related data, limited to the best of the borrower's knowledge or limited to information contained in the information memorandum, is not sufficient to shield the lender from liability. Hence, attempts to limit any representation to this effect should be resisted.", "Any representation about transition-related data does not need to be repeated, given that an update of this data will need to be provided on an annual basis, when the management report is approved.", "It could be acceptable to provide a baseline whereby the borrower represents the accuracy only of information provided after the implementation of CSRD."]} />
            </section>

            <section id="financial-statements" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Financial Statements and Management Reports</h3>
              <h5 className="text-base font-semibold text-foreground mb-2">Background</h5>
              <p className="text-muted-foreground mb-4">
                The representation currently included in the LMA recommended wording relating to the preparation of the financial statements and their fair view does not catch the management report, that is just ancillary to the financial statements. Hence, the fairness and accuracy of the transition plan (and of the other sustainability information and data) are currently excluded from the scope of the representation. This is concerning; hence, several non-exclusive contractual solutions should be considered in this respect.
              </p>
              <h5 className="text-base font-semibold text-foreground mb-2">Solution</h5>
              <p className="text-muted-foreground mb-4">Include detailed information about the reliability of the management report and of the transition plan.</p>
              <h5 className="text-base font-semibold text-foreground mb-2">Wording</h5>
              <StyledList style="number" items={["The borrower represents that the management report has been prepared in accordance with the sustainability reporting standards set by Commission Delegated Regulation (EU) 2023/2772 of 31 July 2023 supplementing Directive 2013/34/EU, as amended and/or supplemented from time to time, consistently applied to ensure that all sustainability information necessary to meet the objectives and requirements under the relevant domestic law implementing the CSRD and the Reporting Standards have been duly reported.", "To the extent that the borrower omits any information that is not relevant for its business model and activity, or it decides not to report on climate change, then it should represent that it has performed a materiality assessment in accordance with IG1 Implementation Guideline - Materiality Assessment by EFRAG and provide in a side letter, subject to confidentiality, a detailed explanation to the lender.", "The borrower should represent that the impacts, dependencies, risks and opportunities set out in the management report fairly represent the factors and risks impacting its financial and business conditions and its operations, for the period to which they relate.", "The borrower represents that the budgets, forecasts (also based on climate scenario analysis), marginal abatement costs assessments, financial and investments plans related to the mitigation actions and other sustainability information supplied were prepared after careful and due consideration and have been prepared in good faith on the basis of materially relevant and high-quality information fit for purpose.", "The borrower should further represent: Since the date of the most recent management report delivered pursuant to the relevant clause there has been no material event or circumstance for its business model and activity that would need to be reported under IG1 Implementation Guideline - Materiality Assessment by EFRAG and/or the Reporting Standards."]} />
              <h5 className="text-base font-semibold text-foreground mb-2">Negotiating Points</h5>
              <p className="text-muted-foreground mb-4">
                Most of the companies borrowing transition finance are investment grade. They have an expectation that most, if not all, clauses in loan agreements are negotiable and they try to negotiate representations, undertakings and events of default. There are additional requirements to the language included in the LMA &quot;plain-vanilla&quot; loan that are generally credit-driven, jurisdiction-driven, sector/business driven, and policy-driven.
              </p>
            </section>

            <section id="positive-covenants" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Positive Covenants to Prevent Lack of Credibility of Transition Plans</h3>
              <h5 className="text-base font-semibold text-foreground mb-2">Background</h5>
              <p className="text-muted-foreground mb-4">
                The review and reliance on the borrowers&apos; credible transition plans are essential steps to avoid transition washing in lending products and to ensure that the borrowers&apos; pathways are aligned with the financed and locked-in emissions targets of the lender.
              </p>
              <Callout type="info" title="Credibility vs. Creditability">
                The compliance of a transition plan with the EFRAG Reporting standard does not make it credible. A plan complying with legislation and the Reporting Standard would be regarded as creditable, deserving attention and acknowledgment, however, this does not imply that it is believable, trustworthy taking into account the manner in which it was prepared and approved, and feasible with reference to certain strategic, climate and sustainability objectives, hence credible.
              </Callout>
              <p className="text-muted-foreground mb-4">
                Credibility means that the plan is accountable, capable of explaining the underlying decision-making process underpinning the decarbonization strategy based on risks and impacts properly analysed, and that the mitigation opportunities are properly evaluated so that the related actions are sustainable, executable, affordable, commercially viable, feasible and causing the abatement within a timeline that is consistent with a 1.5 degrees C warming pathway.
              </p>
              <h5 className="text-base font-semibold text-foreground mb-2">Solution</h5>
              <p className="text-muted-foreground mb-4">
                A lender is not supposed to carry out an audit of the client&apos;s plan, however, it is first required to assess the occurrence of any red alerts triggering the lack of credibility of the plan that impinge on the various credibility attributes, and second to ensure that the committed mitigation actions, albeit creditable, are also feasible, based on sound and ready technology, aligned with climate and sustainability policy objectives and supported by investment and financial plans. If red alerts are triggered, the lender needs to promptly act to address them.
              </p>
              <Callout type="tip" title="Contractual Requirement">
                The contractual documentation should require that the borrower undertakes to deliver to the lender, within a reasonable timeframe, an ESRS E1 transition plan that complies with minimum legal attributes and additional credibility criteria, even if it is not subject to CSRD.
              </Callout>
              <h5 className="text-base font-semibold text-foreground mb-2">Wording</h5>
              <p className="text-muted-foreground mb-4">
                Financial institutions should include in their contractual documentation with borrowers active in hard-to-abate sector or subject to sustainability reporting obligations under the CSRD to ensure that the Company&apos;s transition plan prepared in accordance with the sustainability reporting standards shall:
              </p>
              <StyledList style="check" items={["Cover all material GHG emissions and all GHG emissions categories in absolute and intensity values, accounted under the GHG Protocol or ISO 14064-1 that are verified and/or audited by a third-party expert of international repute", "Be integrated in its enterprise risk management model or alternatively provide a detailed explanation of how it manages and what procedures are used to monitor, manage and oversee that the transition plan is embedded in its wider control, review and accountability mechanisms", "Set targets for 2030, 2035 and 2050 for all material GHG emissions and for all GHG emissions categories in absolute and intensity values connected with all Company's activities taking into account the useful life of the organization's assets or infrastructure", "Set a base year and baseline value that is no older than the financial year no earlier than 3 years preceding the date of the loan agreement and, from 2030 onwards, update the base year for its GHG emission reduction targets after every five-year period thereafter", "Provide detailed information regarding the Company's CapEx in carbon-intensive assets and/or products", "Provide information related to the Company's forecasted production activities and the share of low-carbon products or services", "Include a detailed explanation and quantification of the undertaking's investments and funding supporting the implementation of its transition plan", "Include detailed explanation of how the transition plan is embedded in and aligned with the Company's overall business strategy and financial planning", "Include an assessment of the lock-in risk and stranding risk of the most relevant assets and infrastructure", "Include a detailed explanation of how the Company intends to manage its GHG-intensive and energy-intensive assets and products and their expected dates of phase-out", "Include a detailed explanation of how the Company is planning to maintain and build the appropriate skills and competences in order to achieve the strategic ambition of the transition plan", "Include an explanation regarding how the strategic ambition of its transition plan is linked to changes in sales, volumes, shifts in consumer/client preferences and demand, or regulatory barriers"]} />
            </section>
          </section>

          <PageNavigation
            prev={{
              title: "Sustainability-Linked Loans",
              href: "/products/sll",
              category: "Products"
            }}
            next={{
              title: "Loan Policy",
              href: "/products/loan-policy",
              category: "Products"
            }}
          />
        </article>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const ContractualSolutions = () => {
  return (
    <DynamicPageContent
      slug="products/contractual-solutions"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products/kpis-criteria" },
        { label: "Contractual Solutions" },
      ]}
      navigation={{
        prev: { title: "Sustainability-Linked Loans", href: "/products/sll", category: "Products" },
        next: { title: "Loan Policy", href: "/products/loan-policy", category: "Products" }
      }}
      fallback={<ContractualSolutionsFallback />}
    />
  );
};

export default ContractualSolutions;
