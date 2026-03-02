import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders } from "../_shared/cors.ts";
import { verifyAdmin } from "../_shared/auth.ts";

const pages = [
  // ===== 1. CORPORATE LOANS =====
  {
    slug: "products/corporate-loans",
    title: "General Corporate Purpose Loans to Hard-to-Abate Companies",
    description: "General corporate purpose loans qualifying as transition finance for hard-to-abate borrowers, including enhanced requirements and key contractual components.",
    tags: ["Corporate Loans", "Hard-to-Abate", "Transition Finance", "PCAF"],
    last_updated: "2024-10-28",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "General corporate purpose loans, as defined by PCAF, encompass a wide range of on-balance sheet financial products including loans and lines of credit to various organizational structures. These loans can qualify as \"transition finance\" under EU Commission classification, provided they meet specific criteria. The key requirements are that the borrowers' transition plans must be accountable, credible, and transparent, and the proposed mitigation actions must be credible." } },
      { section_type: "paragraph", content: { text: "Lenders play a crucial role in ensuring the integrity of these loans as transition finance. They are responsible for conducting thorough credibility reviews of clients' transition plans and incorporating appropriate legal safeguards. These safeguards include representations, warranties, undertakings, and conditions related to the transition plans and mitigation actions, which help protect against the risk of transition washing." } },
      { section_type: "callout", content: { type: "info", title: "Loans to Hard-to-Abate Corporations", text: "For loans to hard-to-abate corporations, additional considerations apply. Ideally, these loans should identify and provide updates on specific, credible mitigation actions to be completed within a set timeframe. These actions can be targeted at the plant, entity, or group level." } },
      { section_type: "paragraph", content: { text: "In cases where specific actions are not identified, the loan should at minimum outline the types of technologies to be implemented, the criteria for prioritizing actions, and the scope of due diligence for selecting these actions. This approach ensures that even general corporate purpose loans can contribute meaningfully to the transition towards a more sustainable economy." } },

      { section_id: "enhanced-requirements", section_type: "heading", title: "Enhanced Requirements in General Corporate Purpose Loans in Transition Finance", content: { text: "Enhanced Requirements in General Corporate Purpose Loans in Transition Finance" } },
      { section_type: "paragraph", content: { text: "General corporate purpose loans for hard-to-abate borrowers should incorporate comprehensive requirements to ensure their effectiveness as transition finance instruments. These loans should indicate the impact methodologies applied by the borrower and the expected abatement impact at both plant and company levels, based on the identified technologies." } },
      { section_type: "paragraph", content: { text: "Borrowers should be required to submit detailed data on climate scenarios, technologies, resource usage, and alignment with European Green Deal policies, sectoral pathways, and technology roadmaps. This information is crucial for the lender's prudential transition planning. Additionally, borrowers must provide specific information about their reference production units and actual energy consumption, enabling the calculation of financed emissions under the PCAF Financed Emissions guidance." } },
      { section_type: "callout", content: { type: "warning", title: "Event of Default Trigger", text: "The loan structure should include undertakings to complete material mitigation actions within set timelines, with failure to meet these deadlines triggering an event of default. This applies regardless of whether mitigation actions are financed on a Use of Proceeds or project basis." } },

      { section_id: "components", section_type: "heading", title: "Components of General Corporate Purpose Loans to Hard-to-Abate Borrowers", content: { text: "Components of General Corporate Purpose Loans to Hard-to-Abate Borrowers" } },
      { section_type: "paragraph", content: { text: "Enhanced requirements should aim to strengthen the role of general corporate purpose loans in facilitating meaningful transitions towards sustainability in challenging sectors. A similar approach can be adopted also for leverage loans in hard-to-abate sectors, provided the target company has published a transition plan." } },
      { section_type: "paragraph", content: { text: "General corporate loans to companies active in hard-to-abate sectors should be revised to include new sets of representations, warranties, conditions, and undertakings concerning transition plans, transition data and the credibility of expected mitigation actions." } },

      { section_id: "key-components", section_type: "heading", title: "Key Components of General Corporate Loans to Hard-to-Abate Borrowers", content: { text: "Key Components of General Corporate Loans to Hard-to-Abate Borrowers" } },
      { section_type: "paragraph", content: { text: "Representations, Warranties, and Conditions Precedent and Subsequent\nThese clauses concern transition plans and the credibility of expected mitigation actions.\n\nInformation Undertakings\nThey relate to data for calculating financed emissions, locked-in emissions, assessing soundness of climate scenarios, choice of technologies, resource and energy use, and alignment with relevant policies and pathways.\n\nAffirmative Undertakings\nUndertakings to complete mitigation actions within defined timeframes, in accordance with DNSH criteria and satisfying specific mitigation benchmarks." } },
    ],
    sources: [
      { source_number: 1, title: "OECD Guidance on Transition Finance", author: "OECD", year: "2022" },
    ],
  },

  // ===== 2. SUSTAINABILITY-LINKED LOANS =====
  {
    slug: "products/sll",
    title: "Sustainability-Linked Loans",
    description: "Revisiting sustainability-linked loans for hard-to-abate borrowers to address greenwashing risks and foster meaningful transition through Transition-Linked Loans (TLLs).",
    tags: ["SLL", "Transition-Linked Loans", "KPIs", "SPTs", "Greenwashing"],
    last_updated: "2024-10-27",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "Sustainability-linked loans to hard-to-abate borrowers should reflect a high level of symmetry of information and sector-specific knowledge, which, unlike current SLLs that are sector-agnostic and rely on asymmetry of information, would help identify KPIs and calibrate SPTs with a certain degree of objectivity in accordance with science-based best practices, by aligning them with the client's credible transition pathway in the specific sector. Transition, environmental and biodiversity issues for hard-to-abate companies demand a different market approach to SLL compared to traditional ESG issues also in relation to step-up and step-down mechanics." } },
      { section_type: "paragraph", content: { text: "This implies a structural change for executing SLLs, where lender and client engage on a substantially equally informed basis and where, even if the product is not use-of-proceeds based, the impact on the business model and the intended mitigation actions to be carried out during the life of the loan are well identified and the scope of any potential departure from such actions is precisely set." } },
      { section_type: "callout", content: { type: "info", title: "Sector and Technology Specificity", text: "This approach reflects the need to ensure, in a transition context, that SLLs be sector and technology specific rather than sector agnostic and be able to refer to the actual transition plan and its iterations, so that the bank can reduce its climate-alignment washing risk in SLLs and its exposure to climate change litigation." } },
      { section_type: "paragraph", content: { text: "Through new contractual undertakings the client should become truly accountable to any issue related to the non-credibility of its transition plan and exposed to the triggering of an Event of Default if the transition pathway misalignment becomes measurably material." } },
      { section_type: "paragraph", content: { text: "KPIs can be materially different, and borrowers should bear the consequences accordingly. Material KPIs addressing transition, environmental and biodiversity issues should only be subject to step-up while less material KPIs could be subject to a step-down mechanism." } },

      { section_id: "revisiting-slls", section_type: "heading", title: "Revisiting SLLs in a Transition Context to Address Greenwashing Risks", content: { text: "Revisiting SLLs in a Transition Context to Address Greenwashing Risks" } },
      { section_type: "paragraph", content: { text: "Sustainability-linked loans (SLLs) for hard-to-abate borrowers require significant revision to effectively foster transition and to become Transition-linked loans (TLLs). Current SLLs face challenges due to information asymmetry and non-transition-related key performance indicators (KPIs) and sustainability performance targets (SPTs). To address these issues and align with the 2023 LMA Principles and Guidelines, specific guardrails are proposed." } },
      { section_type: "paragraph", content: { text: "The product framework to be established by the lender should aim at enhancing the effectiveness of Sustainability-Linked Loans in driving meaningful transitions in hard-to-abate sectors, ensuring rigorous standards and accountability throughout the loan lifecycle, and to enable the creation of a robust asset class, the Transition-linked loans." } },
      { section_type: "callout", content: { type: "tip", title: "Mitigating Greenwashing Risk", text: "This approach allows financial institutions to assess and mitigate exposure to greenwashing and transition washing risks in TLL development. Institutions can then prioritise areas most relevant to their specific use cases, ensuring a more robust and effective approach to transition finance in challenging sectors." } },

      { section_id: "focus-areas", section_type: "heading", title: "Focus Areas for Transition-Linked Loans", content: { text: "Focus Areas for Transition-Linked Loans" } },
      { section_type: "paragraph", content: { text: "Financial institutions developing TLLs in hard-to-abate transition contexts should focus on five key areas:" } },

      { section_type: "paragraph", content: { text: "1. Selection of Transition-related Key Performance Indicators (KPIs)\nIn a transition context, KPIs should focus on real economy transition rather than general sustainability improvements. They should incentivise rapid acceleration of transition efforts, with failure to meet minimum transition levels triggering events of default. To mitigate greenwashing risks, margin step-downs should be avoided in TLL structures." } },
      { section_type: "list", content: { listType: "check", items: ["Scope application aligned with science-based standards", "Linkage to the borrower's transition strategy, lock-in risk, and relevant policies", "Benchmarking against Sustainability Performance Targets (SPTs)", "Scientific calculation methodologies", "Alignment with the borrower's core transition and business strategy", "Setting at entity, country, or project/plant level"] } },

      { section_type: "paragraph", content: { text: "2. Calibration of Transition Performance Targets (TPTs)\nTPTs must be ambitious, exceed regulatory requirements, and be material to the borrower's business." } },
      { section_type: "list", content: { listType: "check", items: ["Identification of credible benchmarks (e.g., science-based targets, alignment with EU policies)", "Verifiability and potential for renegotiation", "Significance of the chosen baseline", "Alignment with the borrower's science-based decarbonisation strategy", "Calibration beyond regulatory targets and coalition frameworks"] } },

      { section_type: "paragraph", content: { text: "3. Loan Characteristics\nSeveral changes could be considered:" } },
      { section_type: "list", content: { listType: "arrow", items: ["Flexibility for updating KPIs and SPTs based on operational changes and policy developments", "Assessment of trigger events that could lead to loan default", "Mechanisms for loan adjustments to avoid default", "Include restructuring-like remedies", "Partial mandatory prepayments to adjust level of financed emissions"] } },

      { section_type: "paragraph", content: { text: "4. Reporting\nAnnual reporting should include:" } },
      { section_type: "list", content: { listType: "arrow", items: ["SPT benchmarking against sectoral decarbonization pathways", "Verification of transition performance against SPTs", "Impact on loan characteristics"] } },

      { section_type: "paragraph", content: { text: "5. Verification\nKey characteristics include:" } },
      { section_type: "list", content: { listType: "arrow", items: ["Third-party verification of the borrower's transition profile and SPT performance", "Assessment of Do No Significant Harm (DNSH) and Just Transition risks", "Evaluation of KPI and SPT alignment with ongoing operations and future investments", "Analysis of emission levels, technology implementation, and baseline consistency"] } },

      { section_id: "more-transparency", section_type: "heading", title: "More Transparency from Borrowers", content: { text: "More Transparency from Borrowers" } },
      { section_type: "paragraph", content: { text: "Additional transparency from the borrowers in hard to abate sector should not just be required in \"the presence of controversial issues\" as indicated by the 2023 LMA's Guidelines for Sustainability Linked Loan Principles (the \"LMA Guidelines\") but be mandatory in all cases as symmetry of information about borrowers' transition pathways and transition plans is key to avoid greenwashing, reputational and litigation risks for lenders and borrowers and to help managing transition risks more effectively." } },
      { section_type: "callout", content: { type: "important", title: "Fundamental Requirement", text: "It is fundamental that lenders fully understand whether their client applies DNSH criteria in its operations, assesses natural capital losses, dependencies and impacts from its operations and whether it is aware of sectorial best practices, potential decarbonisation opportunities and related client's benchmarking by reference to adoption of product carbon footprint and LCA practices, sectorial best practices, initiatives, and peers' technologies." } },
      { section_type: "paragraph", content: { text: "The solution to this current asymmetry (and to reducing greenwashing and climate-alignment washing risks) in SLLs can be identified in a product-driven approach by introducing a significant step-up in the engagement with hard-to-abate borrowers and by linking the engagement outcomes -- reflecting the credibility of the transition plans -- to material and ambitious KPIs and SPTs, to be included in the loan documentation, that track steps to be made by the borrower to improve transition achievements and adhere to a Net zero or Near zero pathway seeking to enhance the application of EU taxonomy, while pursuing a Just Transition policy." } },

      { section_id: "new-materiality", section_type: "heading", title: "New Definition of Materiality", content: { text: "New Definition of Materiality" } },
      { section_type: "paragraph", content: { text: "The notion of materiality of the KPIs and SPTs set out in the LMA Guidelines should engage not only with E, S and G factors generally, but with various key aspects of transition finance such as lock-in risk, adoption of decarbonisation technologies, reference to targets aligned with EU Taxonomy and Green Deal objectives, impact on biodiversity, waste and water management." } },
    ],
    sources: [
      { source_number: 1, title: "Sustainability-Linked Loan Principles", author: "LMA/APLMA/LSTA", year: "2023" },
    ],
  },

  // ===== 3. CONTRACTUAL SOLUTIONS =====
  {
    slug: "products/contractual-solutions",
    title: "Contractual Solutions",
    description: "Recommended contractual solutions in the form of representations, warranties and undertakings to address borrowers' liability for misleading transition-related data.",
    tags: ["Contractual Solutions", "Loan Documentation", "Transition Plans", "Representations", "Covenants"],
    last_updated: "2024-10-27",
    sections: [
      { section_id: "introduction", section_type: "heading", title: "Introduction", content: { text: "Introduction" } },
      { section_type: "paragraph", content: { text: "It is recommended that contractual solutions in the form of representations and warranties and undertakings be introduced in the loan documentation to address the borrowers' liability for any misleading or any inaccurate transition-related data and any reputational liability that may also impact the lender." } },

      { section_id: "need-for-contractual-solutions", section_type: "heading", title: "The Need for Contractual Solutions", content: { text: "The Need for Contractual Solutions" } },
      { section_type: "paragraph", content: { text: "Climate risks, and in particular transition risks, as well as a lack of credibility in transition plans, translate, through the transmission channels, into financial risks for borrowers. These financial risks also impact lenders, who are required to account for them in their risk appetite frameworks and their prudential transition plans." } },
      { section_type: "paragraph", content: { text: "Managing transition risks from a bottom-up perspective and financing credible mitigation actions requires client's transparency on climate transition plans, symmetry of information, identification of robust metrics, accountability on the part of the clients providing the relevant information, ability to dictate borrowers and clients' commitments to implement the commitments." } },
      { section_type: "callout", content: { type: "warning", title: "Impact of Unreliable Data", text: "Unreliability of lenders' climate data leads to incorrect assessment of climate-related financial risks, lock-in and stranding risk so impacting soundness of credit decisions. Lenders' inability to monitor client's transition plan exposes them to the risk that their prudential plans are ineffectual and that impacts on capital and liquidity are wrongly assessed." } },

      { section_id: "data-availability", section_type: "heading", title: "Availability and Reliability of Data", content: { text: "Availability and Reliability of Data" } },
      { section_type: "paragraph", content: { text: "Climate risk identification and assessment are based on the review of reliable transition-related data regarding the borrowers, supported by a credibility analysis of their transition plans. The accuracy of this data (that is not traditionally obtained as part of the credit risk assessment) is paramount for the efficacy of the bank's risk framework and for the soundness of its credit decisions." } },
      { section_type: "paragraph", content: { text: "While the underlying data could be acquired through sustainability reporting (to be contained in the management reports) and third-party providers, some of this data, because of its industrial, technological and peer-compared content that engages with competitive intelligence, could only be obtained and updated through direct engagement in the contractual relationship." } },

      { section_id: "solutions-transition-plans", section_type: "heading", title: "Contractual Solutions Related to Transition Plans", content: { text: "Contractual Solutions Related to Transition Plans" } },

      { section_id: "reps-warranties", section_type: "heading", title: "Representations and Warranties and Affirmative Covenants", content: { text: "Representations and Warranties and Affirmative Covenants" } },
      { section_type: "paragraph", content: { text: "Representations and warranties as well as affirmative covenants should relate to:" } },
      { section_type: "paragraph", content: { text: "Credibility of Pathways and Management of Transition Risks\nSolution should address the credibility risk affecting the clients' transition pathways in the relevant industry and management of transition risks, e.g. by requiring adoption of climate scenarios and data collection access to enable assessment of decarbonisation initiatives adopted by peers and coalition frameworks, readiness of technology, biodiversity impact and dependencies, assessment of transition and environmental legal and policy issues, etc." } },
      { section_type: "paragraph", content: { text: "Adaptive Capacity to Deliver Mitigation\nLanguage should monitor the gradual build-up by clients of an adaptive organisational structure capable of delivering transition, e.g. by committing to employ key personnel with adequate competence, by adopting risk management procedures addressing a three lines of defence approach to transition risks, by including financial commitments to establish data collection and processes for carrying out Life-Cycle-Assessments, Environmental Product Declarations and carbon product footprint for their outputs." } },

      { section_id: "beyond-maturity", section_type: "heading", title: "Solutions Extending Beyond Maturity Dates", content: { text: "Solutions Extending Beyond Maturity Dates" } },
      { section_type: "paragraph", content: { text: "Prohibition of Financial Indebtedness at No More Favourable Terms\nAnother area is the setting of time-bound objectives at client level independent of, and extending beyond, maturity dates, with a view to build long-term borrower/bank relationships and set objectives on time horizons beyond the initial loan participation, protecting the value of future loans and investments and reducing the refinancing risk." } },
      { section_type: "callout", content: { type: "important", title: "Critical Negative Undertaking", text: "This is a critical aspect, which can be addressed through the introduction of a negative undertaking in the loan documentation which prevents the borrower from entering into new financial indebtedness which does not contain equivalent or more stringent KPIs, SPTs and similar provisions. Clients are likely to initially resist this approach and will try to explore the vulnerability of the policies of different lenders: the role of banks with a larger financing capacity can be critical in this respect due to their ability to dictate key terms." } },

      { section_id: "restructuring-like", section_type: "heading", title: "Restructuring-Like Solutions", content: { text: "Restructuring-Like Solutions" } },
      { section_type: "paragraph", content: { text: "Appointment of a Chief Transition Officer\nFailure to prepare and implement a transition plan is not materially different from an industrial and technology risk that could likely become a material adverse effect on the financial conditions and creditworthiness of the borrower." } },
      { section_type: "paragraph", content: { text: "The proposed initial solution is for the lender to have initially the ability to appoint, at the borrower's expense, a Chief Transition Officer (CTO) that will take care of preparing or perfecting a credible plan after having engaged with shareholders and the other stakeholders. The areas which the CTO may focus (based on TPT disclosure framework) on are:" } },
      { section_type: "list", content: { listType: "arrow", items: ["Ambition: Strategic ambition, Business model and value chain, Key assumptions and external factors", "Action: Implementation Strategy and Engagement Strategy", "Accountability: Metrics and Governance"] } },

      { section_id: "contractual-clauses", section_type: "heading", title: "Contractual Clauses", content: { text: "Contractual Clauses" } },

      { section_id: "no-misleading", section_type: "heading", title: "No Misleading Information", content: { text: "No Misleading Information" } },
      { section_type: "paragraph", content: { text: "Background\nLending market practice does not currently require that borrowers warrant the accuracy of sustainability and transition-related data. However, following the implementation of CSRD, the enactment of CRR3 and CRD VI, the forthcoming adoption of the EBA Guidelines on ESG Risks, and the Joint Report of the ESAs on greenwashing, the bilateral and syndicated markets need to engage with the legal risks deriving from the inaccuracy of this data." } },
      { section_type: "paragraph", content: { text: "The liability risk for the provision of material sustainability and transition-related data that eventually feeds into lenders' risk assessments and prudential plans should lie with the borrowers, even if such data is not strictly related to the client's credit position." } },
      { section_type: "paragraph", content: { text: "This should also apply to the accuracy of this data and of the factual information provided in the sustainability and transition-related data, as well as the quality of the information and assumptions on which the lender's projections are based, and to the fact that the information provided is not untrue or misleading." } },
      { section_type: "paragraph", content: { text: "Solution and Wording\nIn summary, the representation related to \"no misleading information\" should be extended also to sustainability and transition-related data, whether this is contained in mandatory sustainability reporting or in other data supplied or made available by the borrower." } },
      { section_type: "paragraph", content: { text: "Negotiating Points" } },
      { section_type: "list", content: { listType: "arrow", items: ["The provision of transition-related data, limited to the best of the borrower's knowledge or limited to information contained in the information memorandum, is not sufficient to shield the lender from liability. Hence, attempts to limit any representation to this effect should be resisted.", "Any representation about transition-related data does not need to be repeated, given that an update of this data will need to be provided on an annual basis, when the management report is approved.", "It could be acceptable to provide a baseline whereby the borrower represents the accuracy only of information provided after the implementation of CSRD."] } },

      { section_id: "financial-statements", section_type: "heading", title: "Financial Statements and Management Reports", content: { text: "Financial Statements and Management Reports" } },
      { section_type: "paragraph", content: { text: "Background\nThe representation currently included in the LMA recommended wording relating to the preparation of the financial statements and their fair view does not catch the management report, that is just ancillary to the financial statements. Hence, the fairness and accuracy of the transition plan (and of the other sustainability information and data) are currently excluded from the scope of the representation. This is concerning; hence, several non-exclusive contractual solutions should be considered in this respect." } },
      { section_type: "paragraph", content: { text: "Solution\nInclude detailed information about the reliability of the management report and of the transition plan." } },
      { section_type: "paragraph", content: { text: "Wording" } },
      { section_type: "list", content: { listType: "number", items: ["The borrower represents that the management report has been prepared in accordance with the sustainability reporting standards set by Commission Delegated Regulation (EU) 2023/2772 of 31 July 2023 supplementing Directive 2013/34/EU, as amended and/or supplemented from time to time, consistently applied to ensure that all sustainability information necessary to meet the objectives and requirements under the relevant domestic law implementing the CSRD and the Reporting Standards have been duly reported.", "To the extent that the borrower omits any information that is not relevant for its business model and activity, or it decides not to report on climate change, then it should represent that it has performed a materiality assessment in accordance with IG1 Implementation Guideline - Materiality Assessment by EFRAG and provide in a side letter, subject to confidentiality, a detailed explanation to the lender.", "The borrower should represent that the impacts, dependencies, risks and opportunities set out in the management report fairly represent the factors and risks impacting its financial and business conditions and its operations, for the period to which they relate.", "The borrower represents that the budgets, forecasts (also based on climate scenario analysis), marginal abatement costs assessments, financial and investments plans related to the mitigation actions and other sustainability information supplied were prepared after careful and due consideration and have been prepared in good faith on the basis of materially relevant and high-quality information fit for purpose.", "The borrower should further represent: Since the date of the most recent management report delivered pursuant to the relevant clause there has been no material event or circumstance for its business model and activity that would need to be reported under IG1 Implementation Guideline - Materiality Assessment by EFRAG and/or the Reporting Standards."] } },
      { section_type: "paragraph", content: { text: "Negotiating Points\nMost of the companies borrowing transition finance are investment grade. They have an expectation that most, if not all, clauses in loan agreements are negotiable and they try to negotiate representations, undertakings and events of default. There are additional requirements to the language included in the LMA \"plain-vanilla\" loan that are generally credit-driven, jurisdiction-driven, sector/business driven, and policy-driven." } },

      { section_id: "positive-covenants", section_type: "heading", title: "Positive Covenants to Prevent Lack of Credibility of Transition Plans", content: { text: "Positive Covenants to Prevent Lack of Credibility of Transition Plans" } },
      { section_type: "paragraph", content: { text: "Background\nThe review and reliance on the borrowers' credible transition plans are essential steps to avoid transition washing in lending products and to ensure that the borrowers' pathways are aligned with the financed and locked-in emissions targets of the lender." } },
      { section_type: "callout", content: { type: "info", title: "Credibility vs. Creditability", text: "The compliance of a transition plan with the EFRAG Reporting standard does not make it credible. A plan complying with legislation and the Reporting Standard would be regarded as creditable, deserving attention and acknowledgment, however, this does not imply that it is believable, trustworthy taking into account the manner in which it was prepared and approved, and feasible with reference to certain strategic, climate and sustainability objectives, hence credible." } },
      { section_type: "paragraph", content: { text: "Credibility means that the plan is accountable, capable of explaining the underlying decision-making process underpinning the decarbonization strategy based on risks and impacts properly analysed, and that the mitigation opportunities are properly evaluated so that the related actions are sustainable, executable, affordable, commercially viable, feasible and causing the abatement within a timeline that is consistent with a 1.5 degrees C warming pathway." } },
      { section_type: "paragraph", content: { text: "Solution\nA lender is not supposed to carry out an audit of the client's plan, however, it is first required to assess the occurrence of any red alerts triggering the lack of credibility of the plan that impinge on the various credibility attributes, and second to ensure that the committed mitigation actions, albeit creditable, are also feasible, based on sound and ready technology, aligned with climate and sustainability policy objectives and supported by investment and financial plans. If red alerts are triggered, the lender needs to promptly act to address them." } },
      { section_type: "callout", content: { type: "tip", title: "Contractual Requirement", text: "The contractual documentation should require that the borrower undertakes to deliver to the lender, within a reasonable timeframe, an ESRS E1 transition plan that complies with minimum legal attributes and additional credibility criteria, even if it is not subject to CSRD." } },
      { section_type: "paragraph", content: { text: "Wording\nFinancial institutions should include in their contractual documentation with borrowers active in hard-to-abate sector or subject to sustainability reporting obligations under the CSRD to ensure that the Company's transition plan prepared in accordance with the sustainability reporting standards shall:" } },
      { section_type: "list", content: { listType: "check", items: ["Cover all material GHG emissions and all GHG emissions categories in absolute and intensity values, accounted under the GHG Protocol or ISO 14064-1 that are verified and/or audited by a third-party expert of international repute", "Be integrated in its enterprise risk management model or alternatively provide a detailed explanation of how it manages and what procedures are used to monitor, manage and oversee that the transition plan is embedded in its wider control, review and accountability mechanisms", "Set targets for 2030, 2035 and 2050 for all material GHG emissions and for all GHG emissions categories in absolute and intensity values connected with all Company's activities taking into account the useful life of the organization's assets or infrastructure", "Set a base year and baseline value that is no older than the financial year no earlier than 3 years preceding the date of the loan agreement and, from 2030 onwards, update the base year for its GHG emission reduction targets after every five-year period thereafter", "Provide detailed information regarding the Company's CapEx in carbon-intensive assets and/or products", "Provide information related to the Company's forecasted production activities and the share of low-carbon products or services", "Include a detailed explanation and quantification of the undertaking's investments and funding supporting the implementation of its transition plan", "Include detailed explanation of how the transition plan is embedded in and aligned with the Company's overall business strategy and financial planning", "Include an assessment of the lock-in risk and stranding risk of the most relevant assets and infrastructure", "Include a detailed explanation of how the Company intends to manage its GHG-intensive and energy-intensive assets and products and their expected dates of phase-out", "Include a detailed explanation of how the Company is planning to maintain and build the appropriate skills and competences in order to achieve the strategic ambition of the transition plan", "Include an explanation regarding how the strategic ambition of its transition plan is linked to changes in sales, volumes, shifts in consumer/client preferences and demand, or regulatory barriers"] } },
    ],
    sources: [],
  },

  // ===== 4. TRANSITION LOAN POLICY =====
  {
    slug: "products/loan-policy",
    title: "Transition Loan Products Policy",
    description: "Guidelines for the development of a transition loan products policy covering general corporate purpose, sustainability-linked, and use of proceeds loans.",
    tags: ["Loan Policy", "Transition Finance", "Product Policy", "Hard-to-Abate"],
    last_updated: "2025-01-01",
    sections: [
      { section_id: "guidelines", section_type: "heading", title: "Guidelines for the Development of a Transition Loan Products Policy", content: { text: "Guidelines for the Development of a Transition Loan Products Policy" } },
      { section_type: "paragraph", content: { text: "The structure for a proposed transition lending product policy should be based on several pillars, namely:" } },
      { section_type: "list", content: { listType: "number", items: ["Wide scope adaptability of transition features in products covering general corporate purpose, sustainability-linked, and use of proceeds loans rather than restricting application by labeling one specific type of loans", "Products tied with identification and monitoring borrowers' real economy mitigation actions while reducing financed emissions (and potentially also with financing of real economy mitigation actions, although it should not be a pre-requisite)", "Transition data being provided not only through sustainability reporting but also through compliance with information covenants set out in loan documentation", "Products providing for qualitative KPIs for continuous credibility assessment of clients' transition plans", "Products including multiple quantitative transition-related KPIs capable of identifying clients' responses to address transition risks", "Transition features and KPIs applicable to all available products if the client operates in a hard-to-abate sector", "Limited use of SLLs step-down features in a transition context, unless the borrower is implementing credible mitigation actions impacting upstream Scope 3 for which the borrower has no or little control over", "Non-compliance with reps and warranties re credibility of transition data, informative covenants, and qualitative and quantitative KPIs triggering counteractions from lenders", "Product characteristics contributing to limit transition washing effectively", "Integration with transition washing and transition plan credibility policies and with transition finance framework"] } },

      { section_id: "scope-characteristics", section_type: "heading", title: "Scope and Characteristics of Transition Loan Products", content: { text: "Scope and Characteristics of Transition Loan Products" } },
      { section_type: "paragraph", content: { text: "Transition loan products should be gradually evolving to address the complex challenges of financing sustainable economic transitions. These products can take various forms, ranging from Use of Proceeds products for specific mitigation actions to whole-of-business products that cover the transformation of a client's entire business, including its supply chain. Between these extremes lie sustainability-linked loans with science-based KPIs and general purpose financing with covenants addressing transition plan actions." } },
      { section_type: "paragraph", content: { text: "The key objectives of transition lending are multifaceted. They aim to address carbon lock-in risk, meet EU climate and sustainability objectives, effectively reduce financed emissions, and achieve real economic transition. However, the path to achieving these objectives is not straightforward, as the relationship between carbon emissions and the cost of debt is non-linear and influenced by various factors." } },
      { section_type: "callout", content: { type: "warning", title: "Challenges in Transition Finance", text: "Challenges in transition finance include the ineffectiveness of purely punitive measures for high-emitting borrowers and the need for a balanced approach that combines accountability with support." } },
      { section_type: "paragraph", content: { text: "To address these challenges, a set of mandatory components for transition loan products has been proposed. These include:" } },
      { section_type: "list", content: { listType: "check", items: ["Continuous verification of transition plan accountability and credibility", "Use of multiple KPIs aligned with EU Taxonomy and other relevant frameworks", "Identification of credible mitigation actions", "Events of default triggered by failure to complete these actions", "Acquisition and monitoring of borrower's data for the lender's prudential transition plan"] } },
      { section_type: "callout", content: { type: "tip", title: "Product Adaptability", text: "The adaptability of transition loan products is crucial. A transition loan product policy could include core provisions for general corporate purpose loans to hard-to-abate borrowers, with additional provisions for other sub-products. This flexibility allows for tailored solutions that can effectively contribute to reducing financed emissions while addressing transition risks and achieving climate objectives across various levels of business operations." } },

      { section_id: "use-of-proceeds", section_type: "heading", title: "Use of Proceeds", content: { text: "Use of Proceeds" } },
      { section_type: "callout", content: { type: "info", title: "Under Development", text: "Currently under development." } },

      { section_id: "transition-loan-product-policy", section_type: "heading", title: "Transition Loan Product Policy", content: { text: "Transition Loan Product Policy" } },
      { section_type: "paragraph", content: { text: "The transition loan product policy document provides the detailed framework and guidance for implementing the principles outlined in this section." } },
    ],
    sources: [],
  },
];

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const { adminClient, error: authError } = await verifyAdmin(req, corsHeaders);
  if (authError) return authError;

  try {
    const results: string[] = [];

    for (const page of pages) {
      // Upsert the page
      const { data: pageData, error: pageError } = await adminClient
        .from("pages")
        .upsert(
          {
            slug: page.slug,
            title: page.title,
            description: page.description,
            tags: page.tags,
            last_updated: page.last_updated,
          },
          { onConflict: "slug" }
        )
        .select("id")
        .single();

      if (pageError || !pageData) {
        results.push(`FAIL ${page.slug}: ${pageError?.message}`);
        continue;
      }

      const pageId = pageData.id;

      // Delete existing sections and sources for this page
      await adminClient.from("page_sections").delete().eq("page_id", pageId);
      await adminClient.from("page_sources").delete().eq("page_id", pageId);

      // Insert sections
      const sectionRows = page.sections.map((s, i) => ({
        page_id: pageId,
        section_id: s.section_id || `section-${i}`,
        section_type: s.section_type,
        title: s.title || "",
        content: s.content,
        sort_order: i,
      }));

      const { error: secError } = await adminClient
        .from("page_sections")
        .insert(sectionRows);

      if (secError) {
        results.push(`FAIL ${page.slug} sections: ${secError.message}`);
        continue;
      }

      // Insert sources
      if (page.sources.length > 0) {
        const sourceRows = page.sources.map((s) => ({
          page_id: pageId,
          source_number: s.source_number,
          title: s.title,
          author: s.author || null,
          year: s.year || null,
          url: null,
        }));

        await adminClient.from("page_sources").insert(sourceRows);
      }

      results.push(`OK ${page.slug}: ${page.sections.length} sections`);
    }

    return new Response(
      JSON.stringify({ success: true, results }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
