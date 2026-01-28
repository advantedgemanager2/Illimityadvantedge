import DynamicPageContent from "@/components/docs/DynamicPageContent";
import DocsLayout from "@/components/layout/DocsLayout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TableOfContents from "@/components/layout/TableOfContents";
import Callout from "@/components/docs/Callout";
import PageMeta from "@/components/docs/PageMeta";
import PageNavigation from "@/components/docs/PageNavigation";
import StyledList from "@/components/docs/StyledList";

const tocItems = [
  { id: "definition-trends", title: "Definition, Trends and Impacts", level: 2 },
  { id: "features-global-trends", title: "Features, Global Trends and Impacts", level: 3 },
  { id: "recent-impacts", title: "Recent Impacts for Financial Institutions", level: 3 },
  { id: "notable-approaches", title: "Recent Notable Litigation Approaches", level: 2 },
  { id: "approaches-2023", title: "Litigation Approaches in 2023", level: 3 },
  { id: "indirect-cases", title: "Cases Indirectly Related to Climate Issues", level: 3 },
  { id: "ecthr-cases", title: "ECtHR Cases", level: 3 },
  { id: "ecb-ngfs", title: "ECB and NGFS Resources", level: 2 },
];

const LitigationRiskFallback = () => {
  return (
    <DocsLayout>
      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Know-How Tool", href: "/know-how/transition-finance" },
              { label: "Litigation Risk" },
            ]}
          />

          <h1 className="text-3xl font-bold text-foreground mt-6 mb-4">
            Climate Change Litigation Risk
          </h1>

          <PageMeta
            lastUpdated="October 6, 2024"
            tags={["Climate Litigation", "Transition Risk", "ECtHR", "Financial Institutions"]}
          />

          <p className="text-lg text-muted-foreground mb-8">
            Understanding climate change litigation risk, its global trends, impacts on financial institutions, and the evolving jurisprudence of the European Court of Human Rights.
          </p>

          {/* Definition Section */}
          <section id="definition-trends" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Definition, Trends and Impacts</h2>

            <p className="text-muted-foreground mb-4">
              Climate change litigation, in a broad sense, refers to legal proceedings related to the causes and effects of climate change, particularly those of anthropogenic (human-caused) nature. It encompasses a wide range of cases that address various aspects of climate change, including its impacts, mitigation efforts, and responsibility for climate-related harm, as well as climate change policy and law, before judicial and quasi-judicial bodies.
            </p>

            <p className="text-muted-foreground mb-4">
              Overall, climate litigation plays a crucial role in holding governments, corporations, and other actors accountable for their contributions to climate change and their responsibilities to address its impacts. It seeks to address the complex legal and ethical issues surrounding climate change and advance climate action through legal means.
            </p>

            <section id="features-global-trends" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Features, Global Trends and Impacts of Climate Change Litigation</h3>

              <p className="text-muted-foreground mb-4">
                Climate change litigation can take different forms, e.g. cases directed against specific climate-damaging projects, lawsuits concerning the global climate as a whole, or cases related to &quot;climate washing&quot; (misleading or deceptive claims about climate action). It can draw on various sources, including constitutional provisions, statutory law, common law, civil law or others.
              </p>

              <Callout type="warning" title="Criminal Actions">
                Criminal actions are also starting to be undertaken; in this regard, possible grounds for actions in the EU may be the new Environmental Crime Directive and its national implementation (Directive 2024/1203 of 11 April 2024).
              </Callout>

              <p className="text-muted-foreground mb-4">
                It involves both public and private actors, with governments initially being the primary defendants, but increasingly individuals and non-governmental organizations (NGOs) are bringing cases against private parties, corporations and financial institutions.
              </p>

              <p className="text-muted-foreground mb-4">
                The number of climate change cases has been steadily increasing, with over 2,000 cases captured in the Sabin Center&apos;s climate litigation database at Columbia University (most of them in the United States). There is a &quot;rising tide&quot; of climate litigation across different jurisdictions, which could lead to &quot;cross-fertilisation&quot;, where courts might refer to each other across state borders and jurisdictions.
              </p>

              <Callout type="info" title="Impacts of Climate Litigation">
                Climate change litigation has significant impacts on climate governance, with judicial outcomes often favoring climate action. Successful cases against States have led to the development of new climate policies; even unsuccessful litigation can shape narratives and encourage decision-makers to change their approach. A growing number of cases has been filed against corporates challenging their climate plans and targets.
              </Callout>
            </section>

            <section id="recent-impacts" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Recent Impacts That Require Consideration from Financial Institutions</h3>

              <StyledList
                style="number"
                items={[
                  "Impact on climate banking supervisory governance — Banks are required in several jurisdictions to prepare climate change litigation risk assessment models to identify, manage and address such risks",
                  "Development of jurisprudence — International and regional courts are playing a key role in the development of jurisprudence relevant to climate change litigation, particularly in cases against States",
                  "Strategic litigation against companies — There is a rise in strategic cases targeting corporate actors from various sectors where tactics are borrowed from other jurisdictions",
                  "Increasing trend of actions on the biodiversity-nexus — Arguments that more ambitious measures are needed to restore nature and forests and enhance their carbon absorption capacities",
                ]}
              />
            </section>
          </section>

          {/* Notable Approaches Section */}
          <section id="notable-approaches" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Recent Global Notable Litigation Approaches and ECtHR&apos;s Jurisprudence</h2>

            <section id="approaches-2023" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Litigation Approaches in 2023</h3>

              <p className="text-muted-foreground mb-4">
                In 2023, the number of cases concerning climate or transition washing has grown and 47 cases were filed during the year, bringing the recorded total to more than 140. These cases have met with significant success, with more than 70% of completed cases decided in favor of the claimants.
              </p>

              <StyledList
                style="arrow"
                items={[
                  "More than 30 \"polluter pays\" cases worldwide currently seek to hold companies accountable for climate-related harm caused by their contributions to greenhouse gas emissions",
                  "Litigants continue to file new \"corporate framework\" cases seeking to ensure companies align group-level policies and governance processes with climate goals",
                  "A new category of \"transition risk\" cases includes cases filed against corporate directors and officers for their management of climate risks",
                ]}
              />
            </section>

            <section id="indirect-cases" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Cases Indirectly Related to Climate Issues</h3>

              <p className="text-muted-foreground mb-4">
                Of the over 230 cases filed in 2023, about 50 do not correspond with climate goals. Important categories of climate lawsuits that are not aligned include:
              </p>

              <StyledList
                style="number"
                items={[
                  "ESG backlash — Cases contesting the inclusion of climate risk in financial judgments",
                  "SLAPP — Strategic litigation against public participation lawsuits, aiming to dissuade NGOs and shareholder activists from advancing climate agendas",
                  "Just transition cases — Based on violations of human rights, contesting how climate policy will affect distribution or the methods used to create policies",
                  "Green vs. green projects — Cases addressing possible trade-offs between different climate and environmental objectives",
                ]}
              />
            </section>

            <section id="ecthr-cases" className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">ECtHR Cases</h3>

              <p className="text-muted-foreground mb-4">
                The European Convention on Human Rights (ECHR) does not explicitly enshrine a right to a healthy environment. However, the European Court of Human Rights (ECtHR) has been called upon to develop its case law on environmental issues, particularly under the rights to life and private and family life (Articles 2 and 8 of the ECHR).
              </p>

              <p className="text-muted-foreground mb-4">
                In the <strong>Cordella case against Italy</strong> (2019), the ECtHR stated that the persistence of environmental pollution endangered the health of applicants and the population living in at-risk areas. The Court found a breach of Article 8 of the Convention (right to respect for private life).
              </p>

              <Callout type="important" title="KlimaSeniorinnen v Switzerland (2024)">
                On 9 April 2024, the ECtHR determined that there had been a breach of the rights to access courts (Article 6, par. 1) and to respect for private and family life (Article 8). The Court determined that the right to effective protection from the serious negative impacts of climate change on lives, health, well-being, and quality of life is covered by Article 8 of the ECHR. Switzerland had not complied with its positive responsibilities, citing serious deficiencies in establishing an appropriate domestic regulatory framework.
              </Callout>
            </section>
          </section>

          {/* ECB and NGFS Section */}
          <section id="ecb-ngfs" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">ECB and NGFS Resources on Climate Change Litigation</h2>

            <p className="text-muted-foreground mb-4">
              While governments were the most common targets of climate litigation in the past, cases are now also increasingly being filed against corporates. Supervisors and banks are increasingly recognizing this as a significant risk that must be anticipated and dealt with effectively.
            </p>

            <p className="text-muted-foreground mb-4">
              Moreover, courts are beginning to assess the responsibility of financial institutions for the climate dimensions of their investments (e.g. ClientEarth v. Belgian National Bank, 2022).
            </p>

            <Callout type="info" title="NGFS Outlook">
              The Network for Greening the Financial System (NGFS) anticipates that in the future climate-related litigation will grow in numbers and evolve in terms of its form, scope, and targets of legal action.
            </Callout>

            <p className="text-muted-foreground mb-4">
              In this context, banks are susceptible to climate vulnerability in at least two separate ways, carrying inherent financial risks:
            </p>

            <StyledList
              style="number"
              items={[
                "Liability of supervised entities — Potential climate responsibility of banks' clients impacting indirectly PD and LGD, which can result in write-offs and dropping lines of business",
                "Climate risks impacting banks — Banks face liability when they do not meet their duties to reduce the impact of climate change, which can be reputational and could translate into the need to abandon lines of business",
              ]}
            />
          </section>

          <PageNavigation
            prev={{
              title: "Greenwashing Risks",
              href: "/know-how/greenwashing-risks",
              category: "Know-How Tool"
            }}
            next={{
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

const LitigationRisk = () => {
  return (
    <DynamicPageContent
      slug="know-how/litigation-risk"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Know-How Tool", href: "/know-how/transition-finance" },
        { label: "Litigation Risk" },
      ]}
      navigation={{
        prev: { title: "Greenwashing Risks", href: "/know-how/greenwashing-risks", category: "Know-How Tool" },
        next: { title: "Credible Transition Plans", href: "/know-how/credible-transition-plans", category: "Know-How Tool" }
      }}
      fallback={<LitigationRiskFallback />}
    />
  );
};

export default LitigationRisk;
