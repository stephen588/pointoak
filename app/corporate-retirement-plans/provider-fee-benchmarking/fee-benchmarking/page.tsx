import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Fee Reasonableness | PointOak Retirement Advisors",
  description: "401(k) fee reasonableness requires documented benchmarking. PointOak reviews 450+ data points per bidder. Fee-only fiduciary since 2017. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/provider-fee-benchmarking/fee-benchmarking/"
  }
};

const highlights = [
  "450+ data points reviewed per plan bidder",
  "Named 3(21) and 3(38) ERISA fiduciary",
  "Fee-only, SEC-registered, fully independent"
];

const faqs = [
  {
    question: "How do I know if my 401(k) fees are reasonable?",
    answer: "Reasonable means fees match the level and quality of services your 401(k) plan actually receives. No single number defines a reasonable fee. Reasonableness depends on documented comparison of total plan compensation against market benchmarks for similar-size 401(k) plans with comparable service scope. PointOak's fee benchmarking process evaluates every cost layer, from recordkeeping to investment expenses, so your committee has defensible evidence. The process and documentation behind the evaluation determine reasonableness, not an arbitrary threshold."
  },
  {
    question: "What is considered a reasonable 401(k) expense ratio?",
    answer: "It depends on 401(k) plan size, service scope, and share class selection. Industry averages provide a starting point but obscure meaningful differences across 401(k) plan structures. A small plan's cost profile differs fundamentally from a large plan's, so direct comparison requires context-adjusted benchmarking rather than a single target number. The total assets in your plan, investment menu complexity, and provider service scope all factor into what constitutes a reasonable expense ratio."
  },
  {
    question: "How often should a 401(k) plan be benchmarked?",
    answer: "Best practice calls for regular benchmarking on a defined cycle, with formal market searches less frequently. A regular benchmarking cadence demonstrates ongoing fiduciary diligence and creates a defensible paper trail across multiple review cycles. PointOak works with committees to establish a review schedule tied to 401(k) plan milestones and contract renewal dates, so the process is documented before any questions arise rather than assembled reactively."
  },
  {
    question: "Are 401(k) plan sponsors required to benchmark fees?",
    answer: "ERISA requires fiduciaries to monitor compensation and confirm it remains reasonable. No statute names a specific benchmarking frequency, but the obligation to act prudently includes periodically verifying that provider compensation reflects current market conditions. PointOak helps committees document this monitoring with structured reports and committee-ready findings so the obligation is met with evidence tied to actual 401(k) plan data, not general industry assumptions."
  },
  {
    question: "What fees must be disclosed under 408(b)(2)?",
    answer: "Service providers must disclose direct and indirect compensation, along with potential conflicts of interest. The 408(b)(2) rule gives fiduciaries the information needed to evaluate whether provider compensation is reasonable relative to services delivered. This is a fiduciary-level fee disclosure layer beyond the participant-facing notices most committees review. Understanding the distinction between 408(b)(2) provider disclosures and 404a-5 participant notices matters for evaluating total plan cost."
  },
  {
    question: "What is the difference between plan administration fees and investment fees?",
    answer: "Plan administration fees cover recordkeeping and compliance; investment fees cover fund management and portfolio expenses. Plan administration fees pay for recordkeeping, account maintenance, and regulatory filings. Investment fees include expense ratios, sub-transfer agent fees, and revenue-sharing arrangements embedded in fund pricing. Both contribute to total plan cost and should be benchmarked independently. Plans pursuing strong retirement outcomes need visibility into each category, not a blended number that masks where assets invested are charged."
  },
  {
    question: "Do participant fee disclosures tell me everything I need to know?",
    answer: "Participant disclosures show account-level charges but do not replace a fiduciary-level fee analysis. The 404a-5 participant notices help participants compare investment options within a plan and against other plans. They do not capture the full provider compensation fiduciaries must evaluate, including indirect payments and revenue sharing. PointOak reviews both disclosure levels to build a complete cost picture supporting retirement goals, including tax-free Roth provisions."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Fee Reasonableness Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Fee Reasonableness Review",
  areaServed: { "@type": "Country", name: "United States" }
};

export default function FeeBenchmarkingPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Provider & Fee Benchmarking", href: "/corporate-retirement-plans/provider-fee-benchmarking" },
          { label: "401(k) Fee Reasonableness" }
        ]}
        title="401(k) Fee Reasonableness: A Fiduciary Framework for Plan Sponsors"
        subtitle="401(k) fee reasonableness requires plan sponsors to document that fees paid match services provided, not simply find the lowest number. Average equity fund expense ratios fell from 0.76% to 0.26% between 2000 and 2024 per ICI, so pricing assumptions from even a few years ago may already be outdated. PointOak Retirement Advisors' retirement plan consulting services deliver the independent benchmarking fiduciary duty demands."
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
            Benefits of 401(k) Fee Benchmarking
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Reduced Fiduciary Liability</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A documented fee review creates an auditable record of prudent process. DOL Field Assistance Bulletin 2002-03 requires fiduciaries to periodically monitor fee reasonableness. <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:text-navy underline">Fiduciary support</Link> paired with scheduled fee disclosure reviews protects your committee against claims of excessive 401(k) plan fees.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Full Visibility into Total Plan Cost</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Hidden fees distort plan costs. A <a href="https://www.gao.gov/products/gao-12-325" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">U.S. Government Accountability Office</a> report found small-plan administration fees averaged 1.33% of assets versus 0.15% for large plans. Independent benchmarking separates plan expenses from revenue sharing offsets so your committee sees how fees affect participants&apos; retirement savings.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Market-Competitive Pricing by Plan Size</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Industry averages obscure more than they reveal. <Link href="/corporate-retirement-plans/provider-fee-benchmarking" className="text-medium-blue hover:text-navy underline">Provider and fee benchmarking</Link> compares your 401(k) plan&apos;s total cost structure against similar-size retirement plans with comparable service scope, using actual bid data rather than published expense ratios alone.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Stronger Participant Retirement Outcomes</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Fee drag compounds across decades. Even a fraction-of-a-percent difference in investment fees erodes retirement savings invisibly year over year but substantially at the account balance level. Benchmarking is one of the clearest actions a fiduciary can take to protect plan participants&apos; outcomes and maximize investment returns.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Defensible Committee Governance</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Committee minutes paired with benchmark reports create the evidence trail ERISA&apos;s prudent-process requirement demands. Regulators evaluate the process a committee followed, not just the fee levels it accepted. Documented governance demonstrates that reasonable fees were confirmed through structured analysis.
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
            How 401(k) Fee Benchmarking Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Independent fee benchmarking evaluates total plan compensation across every service layer: recordkeeping, advisory, investment management, and revenue-sharing arrangements among plan service providers. A prudent process examines the fee structure of each provider rather than spot-checking a single cost line, because fee levels at one layer can mask overcharges at another.
            </p>
            <p>
              Best practice calls for benchmarking every one to three years, with a formal recordkeeper search every five to seven years, according to industry best practice. That cadence generates fee information your committee can reference across review cycles. Regularly reviewing fees on a defined calendar proves a cost-effective commitment to fiduciary compliance and surfaces fee disclosure statements that might go unexamined.
            </p>
          </div>
          <div className="mt-8">
            <Link 
              href="/contact"
              className="inline-block bg-medium-blue hover:bg-navy text-white font-outfit font-medium px-8 py-3 rounded transition-colors"
            >
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs This */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs 401(k) Fee Benchmarking
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            These scenarios signal that an independent fee review should move to the front of your committee&apos;s agenda.
          </p>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Plan Hasn&apos;t Been Benchmarked in Over Three Years</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Many plans drift past the recommended benchmarking window as share classes shift and service terms evolve. An independent review resets your baseline so your committee can make informed decisions about current retirement plan fees.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Recently Assumed Fiduciary Responsibility</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                New committee members inherit fee arrangements they didn&apos;t negotiate. Establishing a documented baseline is the fastest way to understand what your plan fiduciaries are overseeing: total fees, service scope, and provider performance.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Provider&apos;s Fee Structure Feels Opaque</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Revenue sharing, indirect compensation, and bundled pricing obscure true cost. When employer sponsors can&apos;t isolate what each service costs, high fees persist undetected behind bundled structures. An independent review separates every cost layer.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Plan Is Facing or Preparing for a Compliance Review</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Hughes v. Northwestern University (2022) intensified scrutiny of fiduciary process around fees. Documentation matters before a review, not after. An <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:text-navy underline">investment analysis</Link> paired with fee benchmarking builds defensible records showing best interest guided every decision.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Plan Assets Have Grown Without a Fee Re-Evaluation</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Asset-based fees increase total dollar cost as a 401(k) plan grows, even when the percentage stays flat. Small plans that were once competitively priced can generally fall behind market rates as assets scale.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-cloud-blue rounded-lg">
            <p className="text-text-gray font-outfit text-base leading-relaxed">
              <strong className="text-navy">When Independent Fee Benchmarking Might Not Be Needed:</strong> A plan with a recent documented benchmark and stable service arrangements may not need another review. If current market data is on file with no material provider changes, existing documentation can satisfy fiduciary responsibility until the next cycle.
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
            Independent Fee Benchmarking vs. Internal Committee Review
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Two approaches exist for evaluating 401(k) fee reasonableness: optimize for lowest cost, or document best value for your plan&apos;s service scope.
          </p>

          <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">Lowest-Fee Provider vs. Best-Value Provider</h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Criterion</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Lowest-Fee Provider</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Best-Value Provider</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Primary goal</td>
                  <td className="px-4 py-3 text-gray-700">Minimize total plan cost</td>
                  <td className="px-4 py-3 text-gray-700">Match cost to service scope and quality</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Evaluation method</td>
                  <td className="px-4 py-3 text-gray-700">Price comparison across providers</td>
                  <td className="px-4 py-3 text-gray-700">Service-for-fee analysis across all cost layers</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fiduciary defensibility</td>
                  <td className="px-4 py-3 text-gray-700">Weak if service quality differences are ignored</td>
                  <td className="px-4 py-3 text-gray-700">Strong when documented with market benchmarks</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Risk</td>
                  <td className="px-4 py-3 text-gray-700">Underfunded service, compliance gaps</td>
                  <td className="px-4 py-3 text-gray-700">Slightly higher fee if service scope expands</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">When it wins</td>
                  <td className="px-4 py-3 text-gray-700">Truly commoditized services with identical scope</td>
                  <td className="px-4 py-3 text-gray-700">Complex plans needing fiduciary, education, or compliance support</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Lowest-fee selection works only when investment options, administration fees, and service scope are truly identical across bidders. Plans with wrap fees, actively managed funds alongside low-cost index funds, or <Link href="/corporate-retirement-plans/target-date-fund-consulting" className="text-medium-blue hover:text-navy underline">target date fund consulting</Link> requirements need a best-value framework that evaluates investment management cost against service scope.
          </p>

          <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">Ad Hoc Review vs. Scheduled Benchmarking Process</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Criterion</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Ad Hoc Review</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Scheduled Benchmarking</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Trigger</td>
                  <td className="px-4 py-3 text-gray-700">Something feels wrong or a complaint surfaces</td>
                  <td className="px-4 py-3 text-gray-700">Calendar-based, independent of events</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Documentation</td>
                  <td className="px-4 py-3 text-gray-700">Inconsistent or absent</td>
                  <td className="px-4 py-3 text-gray-700">Systematic committee records each cycle</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Market comparison</td>
                  <td className="px-4 py-3 text-gray-700">Spot checks against limited data</td>
                  <td className="px-4 py-3 text-gray-700">Comprehensive multi-provider analysis across all cost layers</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Defensibility under audit</td>
                  <td className="px-4 py-3 text-gray-700">Weak without regular cadence evidence</td>
                  <td className="px-4 py-3 text-gray-700">Strong with documented 1-3 year review cycle</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Recommended cadence</td>
                  <td className="px-4 py-3 text-gray-700">None defined</td>
                  <td className="px-4 py-3 text-gray-700">Every 1-3 years; formal search every 5-7 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6 text-sm italic">
            Source: Industry benchmarking standards; DOL Field Assistance Bulletin 2002-03
          </p>

          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Average total 401(k) plan cost was 0.81% of assets in 2021 per ICI and BrightScope, but plans holding index funds, mutual funds, and other investments across dozens of investment alternatives cannot be evaluated against a single average. Scheduled benchmarking creates the consistent evidence trail that ad hoc reviews, by definition, cannot produce.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Fee Benchmarking Process
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-medium-blue flex items-center justify-center text-white font-bold text-xl">1</div>
              <div>
                <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">Analyze</h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed"><Link href="/about/our-team" className="text-medium-blue hover:text-navy underline">Our consulting team</Link> reviews plan investments, administrative costs, and record keeping fees at every plan level.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-medium-blue flex items-center justify-center text-white font-bold text-xl">2</div>
              <div>
                <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">Optimize</h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">You receive specific recommendations backed by current market data, fiduciary documentation, and a clear cost-to-service comparison.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-medium-blue flex items-center justify-center text-white font-bold text-xl">3</div>
              <div>
                <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">Implement</h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">Your committee executes changes with ongoing monitoring support and a defined review cadence.</p>
              </div>
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
            Why Choose PointOak Retirement Advisors for 401(k) Fee Review
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              The <a href="https://www.dol.gov/node/63354" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">U.S. Department of Labor</a> does not set a specific permissible fee level for retirement plans. Reasonableness must be determined through documented evaluation of expenses paid across every service layer. PointOak is fee-only, SEC-registered, and independent from every recordkeeper and provider, so advisor fees reflect unbiased analysis rather than revenue-sharing incentives.
            </p>
            <p>
              A reputable provider name doesn&apos;t guarantee annual fees are generally charged at competitive rates. Individual service fees and costs deducted directly from participant accounts still require verification against current benchmarks, which is where <Link href="/about" className="text-medium-blue hover:text-navy underline">open-architecture independence</Link> eliminates provider bias.
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
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 in McLean, Virginia. As an SEC-registered investment advisor and named 3(21) and 3(38) ERISA fiduciary, we serve plan sponsors and high-net-worth individuals nationwide. Led by Darsh Makim, CRPC, our team brings 50+ years of collective experience managing over $1.08 billion in assets. <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule a consultation</Link> to discuss your plan.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            Contact PointOak at (703) 595-4444 or <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">schedule a consultation</a> to discuss your plan&apos;s fee structure.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}