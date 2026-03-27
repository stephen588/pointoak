import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "3(38) Investment Fiduciary Services | PointOak",
  description: "PointOak serves as a named 3(38) ERISA fiduciary, reviewing 450+ data points per bidder to build and monitor your retirement plan lineup. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/fiduciary-support/3-38/"
  }
};

const highlights = [
  "450+ data points reviewed per plan bidder",
  "Named 3(21) and 3(38) ERISA fiduciary",
  "Fee-only, zero commissions or proprietary products"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We review your current plan structure, investment lineup, fees, and plan documents to establish a baseline."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We develop an investment policy statement and recommend lineup changes based on benchmarked data and defined criteria."
  },
  {
    number: 3,
    title: "Implement",
    description: "We execute changes, manage ongoing monitoring, and deliver quarterly reporting on plan assets and performance."
  }
];

const faqs = [
  {
    question: "How much do 3(38) investment fiduciary services cost?",
    answer: "Key cost factors include plan asset size, number of participants, investment menu complexity, and scope of governance support. Fee-only fiduciaries charge advisory fees with no commissions or revenue-sharing from fund companies. Small employers may offset costs through available retirement plan tax credits. PointOak's fee structure is transparent and discussed during the initial consultation. All investing involves risk, and fees represent one component of total plan cost. We act in your plan's best interest under our fiduciary duty."
  },
  {
    question: "What is the difference between a 3(21) and 3(38) fiduciary?",
    answer: "Under a 3(21) arrangement, the investment advisor recommends investment options and the committee makes final investment decisions. Under a 3(38), the investment manager selects, monitors, and replaces funds without requiring committee approval. The plan sponsor retains the duty to prudently select and monitor whichever provider it chooses."
  },
  {
    question: "How often should a 3(38) fiduciary review and report on plan investments?",
    answer: "A responsible 3(38) provider conducts regular fund-level performance reviews, monitors watchlisted investments against defined criteria, and updates the committee through written reports. PointOak provides quarterly reporting with documented rationale for fund changes, including target date fund consulting adjustments. The cadence aligns with your plan's governance calendar."
  },
  {
    question: "What is a 3(38) investment fiduciary?",
    answer: "ERISA section 3(38) defines an investment manager as a fiduciary that is either a registered investment adviser, bank, or insurance company with the power to manage, acquire, or dispose of plan assets. The designation carries specific legal requirements under federal or state law, including written acknowledgment of fiduciary status."
  },
  {
    question: "Does hiring a 3(38) fiduciary remove liability from the plan sponsor?",
    answer: "DOL fiduciary responsibilities guidance makes clear that even when a sponsor hires a 3(38) investment manager, the sponsor remains responsible for prudently choosing that provider and reviewing its performance. PointOak supports this retained duty through documented committee reporting, transparent methodology, and regular performance reviews that give the committee information to fulfill its fiduciary responsibility."
  },
  {
    question: "Who can serve as a 3(38) investment manager?",
    answer: "ERISA limits the 3(38) investment manager designation to three entity types under state law: registered investment advisers, banks, and insurance companies. A financial advisor or broker outside these categories cannot legally serve in a 3(38) capacity. Confirm any provider's SEC registration through the Investment Adviser Public Disclosure database."
  },
  {
    question: "How involved does the retirement committee stay after hiring a 3(38)?",
    answer: "Hiring a 3(38) fiduciary does not mean the committee disbands. The committee reviews investment reports, evaluates the provider's performance, and documents its oversight. Financial advisors in this role provide regular updates, shifting the workload from fund selection to evaluating the 3(38) provider's methodology against the investment policy statement."
  },
  {
    question: "What is the difference between a bundled recordkeeper 3(38) and an independent fiduciary advisor?",
    answer: "Some recordkeepers offer 3(38) coverage as an add-on, cost-effective for smaller plans with straightforward needs. An independent fiduciary advisor provides open-architecture fund selection, custom benchmarking, and direct senior-level access. PointOak operates as an independent, fee-only investment fiduciary. Investment managers offer different service depth depending on their model."
  },
  {
    question: "What should a plan sponsor look for in a 3(38) fiduciary?",
    answer: "Start with verification: the provider must be a registered investment adviser, bank, or insurance company under ERISA. Then evaluate the investment monitoring process, fee benchmarking discipline, committee reporting format, and willingness to accept written fiduciary acknowledgment. A strong provider explains how it documents decisions and provides investment recommendations. Correct paperwork and formal acknowledgment are non-negotiable."
  },
  {
    question: "Is a 3(38) fiduciary worth it for a small business 401(k)?",
    answer: "Small plan sponsors typically have less time for investment monitoring and less access to institutional benchmarking tools. A 3(38) fiduciary brings institutional-grade oversight regardless of plan size, helping participants work toward a comfortable retirement. Eligible small employers may benefit from IRS retirement plan startup cost credits that offset the cost of upgrading their fiduciary structure."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "3(38) Investment Fiduciary Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "3(38) Investment Manager",
  areaServed: { "@type": "Country", name: "United States" }
};

export default function ThreeThirtyEightPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Fiduciary Support", href: "/corporate-retirement-plans/fiduciary-support" },
          { label: "3(38) Fiduciary Services" }
        ]}
        title="3(38) Investment Fiduciary Services for Retirement Plans"
        subtitle="Delegating investment decisions does not eliminate fiduciary responsibility. PointOak serves as a named 3(38) investment fiduciary, bringing discretionary oversight to your retirement plan through our retirement plan consulting services."
      />

      {/* Highlights Bar */}
      <section className="bg-cloud-blue py-8 md:py-10">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                <p className="text-text-gray font-outfit text-sm md:text-base leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of 3(38) Investment Fiduciary Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Delegated Investment Discretion</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A 3(38) fiduciary takes discretionary authority over selecting, monitoring, and replacing plan investments. Your committee shifts from evaluating individual fund changes to overseeing the provider relationship. This transfer of fiduciary responsibility for investment selection reduces personal liability exposure for committee members.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Documented Fiduciary Protection</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A named 3(38) investment fiduciary creates a written accountability chain with formal acknowledgment of fiduciary liability for investment selection. The DOL still expects plan sponsors to prudently select and monitor any service provider they hire. Documented delegation makes that retained duty auditable rather than ambiguous.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fee Benchmarking Discipline</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                <a href="https://advisors.voya.com/document/business-building-defined-contribution/survey-retirement-landscape-plan-sponsor-sentiments.pdf" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">Voya&apos;s 2025 retirement landscape survey</a> found 37% of sponsors are extremely concerned about ensuring plan fees are reasonable. A 3(38) fiduciary builds fee due diligence into ongoing management of plan assets through systematic <Link href="/corporate-retirement-plans/provider-fee-benchmarking" className="text-medium-blue hover:text-navy underline">provider and fee benchmarking</Link>, addressing asset based fees alongside fund costs.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Institutional-Grade Investment Monitoring</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Defined watchlist criteria, documented replacement triggers, and structured performance reviews replace ad hoc committee judgment on plan investments. Your 3(38) fiduciary applies <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:text-navy underline">investment analysis</Link> protocols used in institutional investment management services, not subjective assessments driven by recent returns or headline risk.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Committee-Ready Governance Support</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Quarterly reporting, meeting preparation, decision memos, and plain-English summaries equip your committee to fulfill its retained monitoring duty. Every fund change ties back to the investment policy statement, so the committee reviews documented rationale rather than rebuilding analysis from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* How It Works */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How 3(38) Investment Fiduciary Services Work
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              ERISA defines an investment manager under the Employee Retirement Income Security Act as a registered investment advisor, bank, or insurance company with discretionary authority over plan assets. Investment advisers in this role select, monitor, and replace the plan&apos;s investment options without requiring committee approval. <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:text-navy underline">Fiduciary support services</Link> formalize this delegation through model portfolios and documented processes.
            </p>
            <p>
              As fee compression narrows cost differences between funds, 3(38) investment performance monitoring methodology and governance discipline become the real differentiators. Product selection alone no longer separates providers. <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule a consultation</Link> to discuss whether delegated fiduciary services fit your plan&apos;s investment oversight needs.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs This */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs a 3(38) Investment Fiduciary
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Not every plan needs a 3(38) fiduciary. These situations signal when delegated discretion adds value.
          </p>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Committee Lacks Investment Monitoring Bandwidth</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your committee meets infrequently and reviews funds ad hoc with no formal investment policy statement. Many plan sponsors carry fiduciary obligations without the bandwidth to execute, leaving 401 k plan decisions undocumented.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fiduciary Liability Concerns Are Growing</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A business owner facing ERISA litigation concerns needs a clear accountability chain for investment documentation. A 3(38) investment manager shifts fund-level plan decisions to a provider with the investment expertise to defend them under scrutiny.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Plan Fees Haven&apos;t Been Benchmarked Recently</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                No systematic fee review exists and the lineup may not reflect competitive pricing. About one-third of sponsors report their specialists hold 3(38) responsibility, so adoption is meaningful but far from universal.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You&apos;re Transitioning Recordkeepers or Plan Providers</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A provider transition creates a natural evaluation point for fiduciary structure. Rebuilding your investment lineup alongside recordkeeping changes and <Link href="/corporate-retirement-plans/plan-design" className="text-medium-blue hover:text-navy underline">plan design services</Link> under 3(38) delegation consolidates governance into a single framework.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Current Advisor Provides Recommendations but You Want Discretionary Oversight</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your advisor provides investment recommendations but the committee votes on every fund change. Moving to 3(38) converts that relationship into full delegation, and <Link href="/corporate-retirement-plans/participant-education" className="text-medium-blue hover:text-navy underline">participant education programs</Link> help plan participants understand lineup changes.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-cloud-blue rounded-lg">
            <h3 className="text-navy font-outfit text-xl font-semibold mb-3">When a 3(38) Fiduciary Might NOT Be the Right Fit</h3>
            <p className="text-text-gray font-outfit text-base leading-relaxed">
              When the committee has strong ERISA governance discipline, a current investment policy statement, and prefers retaining authority over fund changes, a 3(21) co-fiduciary arrangement keeps decision making in-house with advisory support.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Comparison Table */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            3(38) Fiduciary vs. 3(21) Co-Fiduciary Advisor
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Both fiduciary roles serve 401(k) plans. The right choice depends on how much decision making your committee wants to delegate per <a href="https://www.dol.gov/sites/dolgov/files/EBSA/about-ebsa/our-activities/resource-center/publications/archive/meeting-your-fiduciary-responsibilities.pdf" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">DOL fiduciary guidance</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Dimension</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">3(38) Investment Manager</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">3(21) Co-Fiduciary Advisor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Investment Authority</td>
                  <td className="px-4 py-3 text-gray-700">Discretionary: selects, monitors, replaces funds without committee vote</td>
                  <td className="px-4 py-3 text-gray-700">Advisory: renders investment advice and recommendations, committee makes final decision</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Liability Allocation</td>
                  <td className="px-4 py-3 text-gray-700">Assumes investment selection liability; sponsor monitors the provider</td>
                  <td className="px-4 py-3 text-gray-700">Shared: sponsor retains selection and monitoring responsibility</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Committee Time</td>
                  <td className="px-4 py-3 text-gray-700">Lower: 4 quarterly provider reviews replace per-fund decisions</td>
                  <td className="px-4 py-3 text-gray-700">Higher: evaluates each recommendation before acting</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Documentation Burden</td>
                  <td className="px-4 py-3 text-gray-700">Provider documents fund rationale and watchlist actions</td>
                  <td className="px-4 py-3 text-gray-700">Committee documents acceptance or rejection of each recommendation</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fee Scrutiny Support</td>
                  <td className="px-4 py-3 text-gray-700">Benchmarking embedded in delegated scope</td>
                  <td className="px-4 py-3 text-gray-700">Committee drives fee review with advisor input</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Override Flexibility</td>
                  <td className="px-4 py-3 text-gray-700">Fully delegated; committee monitors but does not override</td>
                  <td className="px-4 py-3 text-gray-700">Committee retains override authority on every recommendation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            When the committee wants delegated discretion, the 3(38) investment manager fits. When it prefers final say on fund changes, a 3(21) investment advisor works.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our 3(38) Fiduciary Process
          </h2>
          <div className="relative">
            <div className="absolute left-[19px] top-10 bottom-10 w-px bg-[#C1C5C9] hidden sm:block" />
            <div className="flex flex-col gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-10 h-10 rounded-full bg-medium-blue flex items-center justify-center">
                      <span className="font-outfit font-semibold text-white text-lg leading-none">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-text-gray font-outfit text-base leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Why Choose PointOak */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Why Choose PointOak for 3(38) Investment Fiduciary Services
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              <a href="https://advisors.voya.com/document/business-building-defined-contribution/survey-retirement-landscape-plan-sponsor-sentiments.pdf" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">Voya&apos;s 2025 survey</a> found 24% of sponsors are extremely concerned about monitoring investment performance. PointOak brings investment expertise and a proprietary benchmarking process to address this, with a named senior advisor from <Link href="/about/our-team" className="text-medium-blue hover:text-navy underline">our consulting team</Link> assigned to your committee. Direct accountability from the first meeting keeps focus on your plan&apos;s best interest.
            </p>
            <p>
              The difference between 3(38) service providers is the methodology. PointOak&apos;s approach builds on corporate retirement plan consulting with documented IPS development, defined watchlist criteria, and quarterly committee reporting. Past performance informs but does not dictate our selections, which draw from sources believed reliable. Learn more <Link href="/about" className="text-medium-blue hover:text-navy underline">about PointOak</Link>.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* About */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            About PointOak Retirement Advisors
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            <Link href="/" className="text-medium-blue hover:text-navy underline">PointOak Retirement Advisors</Link> is an independent, fee-only wealth advisory firm headquartered in McLean, Virginia. SEC-registered investment advisor and fiduciary since our 2017 founding. Darsh Makim, CRPC, has worked with plan sponsors and participants since 2005. Our team brings 50+ years of collective experience managing over $1.08 billion in assets under management. Investment advisory services delivered in-person and virtually nationwide. <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule a complimentary consultation</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed text-center">
            <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule your consultation</Link> for a no-cost conversation about your plan&apos;s fiduciary structure and our investment advisory services.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
