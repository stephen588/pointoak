import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Investment Manager Evaluation | PointOak Retirement Advisors",
  description: "Evaluate investment managers on process, fees, conflicts, and fit. PointOak's fee-only fiduciary framework helps you make informed decisions. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/investment-analysis/manager-selection/"
  }
};

const highlights = [
  "Fee-only fiduciary since 2017",
  "Retirement plan expertise since 2005",
  "SEC-registered independent advisor"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We review your investment process, manager relationships, fee structures, and fiduciary documentation to identify gaps."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We develop recommendations matched to your strategy, risk profile, and fiduciary requirements for ongoing portfolio management."
  },
  {
    number: 3,
    title: "Implement",
    description: "We execute decisions and establish ongoing monitoring with defined review triggers, with our senior advisors accountable throughout."
  }
];

const faqs = [
  {
    question: "What does it cost to work with an investment manager?",
    answer: "Fees vary by service model, account size, and the scope of financial planning included. The three common structures are AUM-based fees (a percentage of assets managed), flat fees, and hourly fees. Broader planning scope, tax coordination, and estate planning integration increase total cost. Simpler portfolios with fewer accounts cost less. PointOak operates on a fee-only model with no commissions, and the initial consultation is complimentary. Fee differences compound meaningfully over time, making a transparent comparison essential. Schedule a complimentary consultation to discuss your situation."
  },
  {
    question: "Is past performance enough to choose an investment manager?",
    answer: "Past performance is one input, but it should never be the only criterion. Strong candidates routinely underperform their peers for multi-year stretches without any change in process or philosophy. Evaluation should include process discipline, fee transparency, conflict review, and team stability. PointOak's evaluation framework addresses all five dimensions: process, fees, conflicts, communication, and fit."
  },
  {
    question: "How often should you review an investment manager?",
    answer: "At minimum annually, with additional reviews triggered by specific events. Key triggers include personnel departures, style drift, prolonged underperformance relative to an appropriate benchmark, or changes in your own goals. Monitoring should ask not just what happened but why. Was the strategy's style out of favor, or did the manager abandon their stated investment approach to chase returns?"
  },
  {
    question: "How do you evaluate an investment manager?",
    answer: "Start with document review, then assess process, philosophy, people, fees, and fit. The CFA Institute framework structures evaluation in three parts: define the universe, analyze track records using quantitative factors, and assess the investment process qualitatively. Verify registration, review Form CRS and Form ADV, compare fees, and evaluate communication. PointOak applies this framework for both corporate plan and individual wealth clients through our investment analysis services."
  },
  {
    question: "What documents should I review before hiring an investment adviser?",
    answer: "Form CRS, Form ADV, fee schedules, and BrokerCheck or IAPD records. Form CRS summarizes services, fees, conflicts, standard of conduct, and disciplinary history in a short document. Form ADV provides deeper detail on the advisory business, fee structure, and potential conflicts. Verify registration through SEC's IAPD or FINRA BrokerCheck, where PointOak's disclosures are also available through PointOak's SEC profile."
  },
  {
    question: "What is the difference between Form ADV and Form CRS?",
    answer: "Form CRS is a brief summary for retail investors; Form ADV is the full regulatory disclosure. Form CRS covers services, fees, conflicts, standard of conduct, and reportable disciplinary history in a short-form document designed for individual investors. Form ADV provides detailed disclosure of the firm's business, fee structure, investment strategies, and potential conflicts of interest. Both are filed with the SEC and available to the public."
  },
  {
    question: "Is a fiduciary advisor automatically better?",
    answer: "Fiduciary status is a legal standard, not a guarantee of fit or performance. A fiduciary is legally required to act in your best interest, a higher bar than the suitability standard. Fiduciary status alone does not reveal fees, conflicts, or communication approach, so verify through Form CRS and Form ADV review. PointOak has operated as a fiduciary since inception in 2017."
  },
  {
    question: "Is a 1% AUM fee justifiable?",
    answer: "It depends entirely on what services and planning depth the fee covers. A 1% fee covering financial planning, tax-aware withdrawal strategies, and ongoing monitoring may deliver more value than a lower fee for portfolio management alone. Ask for a complete fee schedule and compare total cost, not the headline rate. Fee-only advisors like PointOak do not earn commissions on top of advisory fees."
  },
  {
    question: "What should I look for in an investment manager besides performance?",
    answer: "Evaluate process consistency, fee transparency, conflict disclosure, and communication approach. Institutional buyers prioritize similar-client experience and specialization alongside track records. Review the manager's investment philosophy, team stability, reporting cadence, and willingness to explain decisions in clear terms. A strong manager communicates proactively, not only after problems surface."
  },
  {
    question: "How do I verify whether an advisor is properly registered?",
    answer: "Check SEC's IAPD database or FINRA BrokerCheck before engaging any advisor. Registration is the most important first check per Investor.gov guidance, with SEC-registered advisors searchable in the Investment Adviser Public Disclosure database. FINRA BrokerCheck covers broker registrations and disciplinary history. Both are free and take minutes to search."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Investment Manager Evaluation Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Investment Manager Evaluation and Selection",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function ManagerSelectionPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Investment Analysis", href: "/corporate-retirement-plans/investment-analysis" },
          { label: "Manager Selection & Replacement" }
        ]}
        title="Investment Manager Evaluation: A Fiduciary Decision Framework"
        subtitle="Most investment manager evaluation stops at recent returns, overlooking process discipline and conflicts. An institutional fund performance study found 92% of top-quartile fund managers had at least one three-year bottom-half stretch over a decade. PointOak Retirement Advisors uses a structured manager selection process to evaluate what performance alone cannot reveal."
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

      {/* Benefits Section */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Investment Manager Evaluation
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fewer Costly Manager Changes</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Distinguishing cyclical underperformance from a genuine process breakdown prevents premature firing and unnecessary transition costs. A disciplined selection process means you act on evidence rather than impatience, protecting long term success across full market cycles and varied market environments.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Transparent Fee Assessment</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Reviewing Form ADV, fee schedules, and total cost structure reveals whether investment management fees align with services delivered. Even small differences in fee structures compound over time, per <a href="https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Investor.gov fee guidance</a>. This review is foundational to investment due diligence and helps investors gain comfort with total costs.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Better Manager-Goal Alignment</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Cerulli Associates data shows experience with similar clients (55%) and specialization (53%) rank among the top factors in institutional investment manager selection. Evaluating fit against your investment objectives ensures the manager&apos;s expertise matches the complexity of your specific situation and investment strategy.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Defensible Fiduciary Documentation</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A documented evaluation process creates a fiduciary record of prudent selection criteria, not just favorable returns. Through disciplined <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:underline">investment analysis</Link> and ongoing due diligence, every decision demonstrates it was made in the client&apos;s best interest with a deeper understanding of each manager&apos;s approach.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Informed Retention Decisions</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Ongoing evaluation with defined review triggers builds a repeatable retention framework for every manager relationship. Committees and individuals assess manager performance against documented process criteria rather than short-term results, gaining confidence from each formal review cycle.
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
            How Investment Manager Evaluation Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              The CFA Institute&apos;s three-part framework defines the manager universe, applies quantitative analysis of track records across full market cycles, and follows with qualitative analysis of the manager&apos;s investment process and philosophy. A manager&apos;s investment philosophy forms the foundation every assessment builds upon, revealing unknown risks that performance data alone cannot surface.
            </p>
            <p>
              GIPS compliance, per the CFA Institute, is the most reliable method for verifying reported performance is presented fairly and accurately. Combining qualitative and quantitative factors in operational due diligence and portfolio construction produces stronger decisions than either approach alone. <Link href="/corporate-retirement-plans/provider-and-fee-benchmarking" className="text-medium-blue hover:underline">Provider and fee benchmarking</Link> adds a verification layer for active management mandates across asset classes.
            </p>
          </div>
          <div className="mt-8 bg-navy text-white rounded-lg p-6 md:p-8">
            <p className="font-outfit text-base leading-relaxed">
              Want an objective review of your current investment manager? <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-warm-gold hover:underline font-semibold">Schedule your consultation</a> to start.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs It */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs Investment Manager Evaluation
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            A formal evaluation is not always necessary. These scenarios signal when a structured review protects your interests.
          </p>
          <div className="space-y-8">
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Investment Committee Is Reviewing an Underperforming Manager</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                When market conditions drive underperformance, evaluation separates style factors from process failure. Your investment committee gains a defensible basis for decisions independent of what other investors do.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Are Rolling Over or Consolidating Retirement Accounts</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A major transition opens multiple advisory options. Evaluating investment managers on process and fit prevents choosing on brand alone. The decision shapes how you invest for decades and affects long term compounding across your portfolio.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Plan Sponsor Role Requires Fiduciary Documentation</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                ERISA obligations require documented manager selection. A formal framework through <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:underline">fiduciary support</Link> demonstrates investment advice was evaluated on substance, not claims from fund managers.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Question Your Current Advisor&apos;s Fees or Conflicts</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Cerulli found 38% of affluent investors seek new advice for diversification and 25% for performance. Structured evaluation clarifies whether concerns about a portfolio manager justify changing course or your arrangement remains sound.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Are a Business Owner Selecting a Retirement Plan Advisor</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Choosing the wrong plan advisor affects fiduciary liability and capital preservation. Applying evaluation criteria to your <Link href="/corporate-retirement-plans" className="text-medium-blue hover:underline">retirement plan consulting</Link> selection protects participants from unvetted risk across mutual funds and other vehicles.
              </p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Not the right fit?</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If your portfolio is straightforward, individual investments are minimal, and you carry no fiduciary obligations, a registration check on FINRA BrokerCheck and a basic fee comparison may be sufficient.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Comparison Table */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Investment Manager Evaluation vs. Performance-Based Selection
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Past performance is one input in manager selection, not the complete picture. Meaningful differences emerge when diligence processes examine the key drivers behind future performance.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Criterion</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Performance-Based Approach</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Full Evaluation Framework</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Scope of analysis</td>
                  <td className="px-4 py-3 text-gray-700">Recent returns and rankings</td>
                  <td className="px-4 py-3 text-gray-700">Process, philosophy, people, fees, operations, and fit</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Time horizon</td>
                  <td className="px-4 py-3 text-gray-700">1-3 year trailing periods</td>
                  <td className="px-4 py-3 text-gray-700">Full market cycles, typically 7-10 years</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fee assessment</td>
                  <td className="px-4 py-3 text-gray-700">Headline rate comparison only</td>
                  <td className="px-4 py-3 text-gray-700">Total cost review using Form ADV and fee schedules</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Conflict detection</td>
                  <td className="px-4 py-3 text-gray-700">Visible only after losses compound</td>
                  <td className="px-4 py-3 text-gray-700">Form CRS review of conflicts, conduct, disciplinary history</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Retention logic</td>
                  <td className="px-4 py-3 text-gray-700">Fire after short-term lag</td>
                  <td className="px-4 py-3 text-gray-700">Evaluate whether process held and style was out of favor</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Documentation</td>
                  <td className="px-4 py-3 text-gray-700">No formal record</td>
                  <td className="px-4 py-3 text-gray-700">Documented fiduciary evaluation file</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm leading-relaxed mt-6 italic">
            Sources: CFA Institute; Investor.gov
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            See <a href="https://www.investor.gov/introduction-investing/getting-started/working-investment-professional" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Investor.gov&apos;s guide to working with investment professionals</a> for additional verification steps.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-4">
            For example, a large cap growth manager may lag during value-oriented cycles without any change in discipline. A performance screen is still a reasonable first filter for narrowing strong candidates among active managers. For fiduciary hiring or retention decisions, a full evaluation examines the manager&apos;s approach, thought process, and risk exposures. <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:underline">Fiduciary advisory services</Link> formalize this discipline.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Investment Manager Evaluation Process
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
            Why Choose PointOak for Investment Manager Evaluation
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Cerulli Associates found that 35% of high-net-worth individuals began their advisory relationship because of services or client experience. PointOak&apos;s fee-only independence means evaluation recommendations carry no product-sales incentive. Clients work directly with Darsh and his team, and that same leadership team stays involved throughout the manager selection process.
            </p>
            <p>
              Every advisor claims fiduciary status. PointOak has been fee-only and fiduciary since 2017 with no commissions and no proprietary products. Open-architecture selection means your portfolio and investment advice are never influenced by corporate affiliations. Learn more <Link href="/about" className="text-medium-blue hover:underline">about PointOak</Link>.
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
            PointOak Retirement Advisors is a fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. We are an SEC-registered investment advisor and fiduciary since inception, serving clients nationwide through wealth management and retirement plan consulting. Our team brings over 50 years of collective experience and manages over $1.08 billion in assets. <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Schedule a complimentary consultation</a>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            Ready to evaluate your current advisory relationship? <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Book a consultation</a> or call (703) 595-4444.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
