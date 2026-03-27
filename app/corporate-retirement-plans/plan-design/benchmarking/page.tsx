import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Plan Benchmarking | PointOak Retirement Advisors",
  description: "PointOak reviews 450+ data points per bidder to benchmark your 401(k) fees, investments, and plan design. Named ERISA fiduciary. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/plan-design/benchmarking/"
  }
};

const highlights = [
  "450+ data points reviewed per plan bidder",
  "Named 3(21) and 3(38) ERISA fiduciary",
  "Fee-only fiduciary since 2017"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "Provide plan documents and current plan assets data for review against peer benchmarks."
  },
  {
    number: 2,
    title: "Optimize",
    description: "You receive a scored report with prioritized findings and recommendations to determine your next steps."
  },
  {
    number: 3,
    title: "Implement",
    description: "Your committee acts on recommendations with PointOak's support through provider negotiations and ongoing monitoring."
  }
];

const faqs = [
  {
    question: "How much does 401(k) plan benchmarking cost?",
    answer: "Benchmarking fees vary by plan size, complexity, and the scope of the review. PointOak operates on a fee-only model, which means no commissions, no revenue-sharing arrangements with providers, and no product-based compensation of any kind. The consulting fee is based on plan assets and the scope of the engagement. A fee-only benchmarking review covering recordkeeping and fund costs falls at a different price point than a full 401(k) plan benchmarking engagement with ongoing monitoring, investment review, and design analysis. PointOak's fee-only structure ensures that every recommendation serves your committee's interests rather than generating provider compensation. Schedule a consultation to discuss your plan's scope and receive a transparent fee proposal before any engagement begins."
  },
  {
    question: "What's the difference between fee benchmarking and full-plan benchmarking?",
    answer: "Fee benchmarking reviews costs; full 401(k) plan benchmarking adds design, service, and participant outcomes. Fee benchmarking focuses on recordkeeping and fund expense ratios compared against peer-plan averages. Full-plan benchmarking evaluates those costs alongside auto-features, investment lineup construction, provider service quality, and participation data. For most 401(k) plans, full-plan benchmarking creates a stronger fiduciary record and surfaces improvement opportunities in areas that fee-only reviews do not examine."
  },
  {
    question: "How often should a 401(k) plan be benchmarked?",
    answer: "Annual benchmarking with a deeper market review every three to five years. Prudent fiduciary practice calls for annual monitoring of fees, investments, and plan metrics to confirm the plan continues to serve participants effectively. Court filings and industry guidance suggest conducting a competitive bid for recordkeeping services every three to five years. PointOak builds ongoing monitoring into its consulting engagements so regular benchmarking efforts function as a continuous process rather than a one-time project."
  },
  {
    question: "Is 401(k) benchmarking a fiduciary responsibility?",
    answer: "Yes; ERISA requires plan fiduciaries to monitor service providers and ensure reasonable expenses. The IRS and DOL both state that fiduciaries must prudently select and monitor providers and confirm plan fees are reasonable for the services received. Hiring an outside advisor does not transfer this responsibility from the committee. A documented benchmarking process provides evidence that the committee is meeting its obligations, and PointOak's fiduciary support services formalize that accountability as a named fiduciary sharing the legal obligation."
  },
  {
    question: "What should you compare when benchmarking a 401(k) plan?",
    answer: "Compare fees, investments, plan design, provider service, and participant outcomes against peer 401(k) plans. Start with recordkeeping and advisory fees, then evaluate fund expense ratios and performance across the investment menu. Review plan design features including auto-enrollment, auto-escalation, match formulas, and eligibility provisions. Assess provider service and participant engagement. Peer-plan data turns each area into a scored comparison, giving your committee a clear basis for decisions rather than assumptions."
  },
  {
    question: "Can benchmarking improve participant outcomes beyond reducing fees?",
    answer: "Yes; benchmarking plan design and auto-features often has a larger impact than fee reduction alone. 401(k) plans that benchmark design against peers can identify where auto-enrollment, escalation, and match structures lag. Research shows these features drive meaningfully higher savings rates over time, helping participants build real retirement security. PointOak's benchmarking evaluates the full plan so committees can act on design improvements and access opportunities that cost reductions alone would never reveal."
  },
  {
    question: "What should a retirement committee document during benchmarking?",
    answer: "Document provider comparisons, fee reasonableness findings, investment reviews, decisions, and follow-up actions. A prudent-process record should include the data reviewed, peer comparisons used, alternatives considered, decisions made, and the rationale behind each decision. This documentation protects the committee if fiduciary decisions are ever questioned by the DOL or in litigation. PointOak delivers scored benchmarking reports designed specifically for committee files, regulatory review, and ongoing plan management success."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Plan Benchmarking Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Plan Benchmarking",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function BenchmarkingPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Plan Design", href: "/corporate-retirement-plans/plan-design" },
          { label: "Plan Benchmarking" }
        ]}
        title="401(k) Plan Benchmarking: A Fiduciary-First Review Process"
        subtitle="Plan sponsors face rising scrutiny over retirement plans and growing employee expectations. Morgan Stanley at Work reported in 2025 that 84% of employees believe employers should more actively assist with financial issues. PointOak's 401(k) plan benchmarking process evaluates plan fees, providers, investments, and design to deliver documented, committee-ready findings."
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
            Benefits of 401(k) Plan Benchmarking
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Documented Fiduciary Protection</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Every plan fiduciary carries a legal obligation to monitor providers and confirm that fees remain reasonable relative to the services delivered. IRS guidance makes clear that this duty is ongoing, not a one-time checkbox. A structured benchmarking review creates the documented record your committee needs to demonstrate a prudent process. PointOak&apos;s <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:underline">fiduciary support</Link> formalizes that record with scored findings tied to plan documents and committee decisions.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Lower Plan Costs Without Sacrificing Service</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Fee benchmarking often surfaces overpayment, but reducing expenses at the cost of plan service quality is not a prudent outcome. DOL guidance requires fiduciaries to evaluate whether fees are reasonable in context, not simply whether they are the lowest available. A disciplined review weighs recordkeeping costs, advisory expenses, and fund-level fees against the service quality and plan features your participants receive.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Stronger Participant Savings Rates</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The Plan Sponsor Council of America reported that 64.3% of 401(k) plans used automatic enrollment by the end of 2024. Plans that benchmark design against industry standards, not just plan fees, can pinpoint where auto-features, match formulas, and eligibility provisions lag peers. <Link href="/corporate-retirement-plans/plan-design" className="text-medium-blue hover:underline">Plan design consulting</Link> turns those findings into specific improvements that drive higher participation and savings rates among participants.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">A More Competitive Benefits Package</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Retirement benefits carry real weight in recruitment and retention, particularly as employee expectations around financial wellness continue to rise. Plans that benchmark against peer data can position the benefits package as a differentiator rather than an afterthought. The review identifies where your plan stands on investment options, employer match, and design relative to competitors in your industry and helps attract top talent.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Actionable Committee-Level Reporting</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Generic provider-generated reports rarely give committees the context needed to make decisions. Benchmarking delivers scored comparisons with documented rationale, showing where your plan leads and where it trails. Committees receive a decision-support tool built for diligent oversight, where every finding maps to a specific action or a documented justification for the status quo.
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
            How 401(k) Plan Benchmarking Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              A formal benchmarking process evaluates several aspects of your plan against peer data: recordkeeping and advisory fees, <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:underline">investment analysis</Link> covering the investment lineup&apos;s expense ratios and fund performance, plan design features such as auto-enrollment and escalation, and provider service quality. The process produces meaningful comparisons benchmarked against retirement plans of similar size and industry, giving committees the data to separate assumptions from evidence.
            </p>
            <p>
              Benchmarking plan management and design, not just costs, is where measurable differences emerge. Vanguard&apos;s 2025 research found that participants in plans with automatic enrollment plus automatic annual increases save 20-30% more within three years than participants only auto-enrolled. Evaluating design alongside fees and funds reveals the specific levers that drive asset growth and stronger participant outcomes.
            </p>
          </div>
          <div className="mt-8 bg-navy text-white rounded-lg p-6 md:p-8">
            <p className="font-outfit text-base leading-relaxed">
              <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-warm-gold hover:underline font-semibold">Schedule a consultation</a> to discuss how a benchmarking review can support your committee&apos;s oversight process.
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
            Who Needs 401(k) Plan Benchmarking
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Not every plan needs a full benchmarking engagement right now. These scenarios signal when a review is overdue.
          </p>
          <div className="space-y-8">
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Committee Lacks a Documented Review Process</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your company&apos;s retirement plan has no formal benchmarking record, or the last review was conducted more than three years ago. IRS guidance confirms that employers retain fiduciary responsibility for monitoring providers and ensuring plan fees remain reasonable. Without documentation, your committee carries risk it cannot defend in an audit or participant survey.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Suspect Fees Are Higher Than They Should Be</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Recordkeeping, advisory, or fund expenses have never been compared against peer plans through a formal <Link href="/corporate-retirement-plans/provider-and-fee-benchmarking" className="text-medium-blue hover:underline">provider and fee benchmarking</Link> process. Fee reasonableness is not about finding the lowest cost. It requires evaluating whether the money you are spending aligns with the administration services and support delivered to your plan participants.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Participation or Savings Rates Trail Peer Plans</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Voya reported in 2025 that financially stressed employees who postpone retirement cost employers an average of $51,000 per employee. Weak participation and low deferral rates often signal plan design issues rather than employee disinterest. Benchmarking combined with targeted <Link href="/corporate-retirement-plans/education-and-communications" className="text-medium-blue hover:underline">education and communications programs</Link> can identify where the plan continues to underperform and why.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">A Provider Contract Is Up for Renewal</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                An upcoming renewal is the natural inflection point for competitive evaluation. PLANSPONSOR litigation filings reference a best practice of market-testing recordkeeping services every three to five years. Conducting a benchmarking review before renewal gives your company leverage and documentation regardless of whether you stay or switch.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Leadership Wants to Strengthen the Benefits Package</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Rising employee demand for financial wellness support has made plan quality a recruitment and retention factor. Businesses that benchmark against peers can identify specific gaps in match design, Roth availability, or loan and hardship withdrawal provisions. The findings give leadership a clear picture of where the plan stands and what changes attract talent and protect company profits.
              </p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">When benchmarking may not be the right fit</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plans launched within the last 12 months or micro-plans with only a few participants may benefit more from initial plan design consulting than a full benchmarking review.
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
            Fee Benchmarking vs. Full-Plan Benchmarking
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Both approaches serve important considerations for plan sponsors, but the scope determines what your committee actually learns.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Dimension</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Fee Benchmarking</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Full-Plan Benchmarking</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Scope</td>
                  <td className="px-4 py-3 text-gray-700">Reviews recordkeeping and fund costs against peer averages</td>
                  <td className="px-4 py-3 text-gray-700">Adds plan design, provider service, participation, and outcome evaluation</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fee Data</td>
                  <td className="px-4 py-3 text-gray-700">Compares plan fees to peers; ICI reports 401(k) equity fund avg expense ratio of 0.26% vs 0.40% industrywide in 2024</td>
                  <td className="px-4 py-3 text-gray-700">Evaluates whether fee levels are reasonable relative to service quality delivered</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fiduciary Documentation</td>
                  <td className="px-4 py-3 text-gray-700">Documents fee reasonableness only</td>
                  <td className="px-4 py-3 text-gray-700">Documents the full prudent-process record IRS and DOL expect from fiduciaries</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Plan Design</td>
                  <td className="px-4 py-3 text-gray-700">Not evaluated</td>
                  <td className="px-4 py-3 text-gray-700">Reviews auto-features, match, eligibility, and Roth availability against peer benchmarks</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Participant Outcomes</td>
                  <td className="px-4 py-3 text-gray-700">Not evaluated</td>
                  <td className="px-4 py-3 text-gray-700">Assesses participation rates, savings behavior, and engagement signals</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm italic mt-6">
            Sources: <a href="https://www.ici.org/news-release/25-low-expense-ratios-benefit-retirement-savers" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Investment Company Institute</a> 2025, IRS, DOL, PSCA
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Fee benchmarking is a useful starting point when cost is the immediate concern. Full 401(k) plan benchmarking supports a broader fiduciary standard and uncovers improvement opportunities in design and participant outcomes that fee reviews alone miss. For plans considering investment options like <Link href="/corporate-retirement-plans/target-date-fund-tdf-consulting" className="text-medium-blue hover:underline">target date fund consulting</Link>, the full-plan approach provides the necessary context for evaluating both cost and fit.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our 401(k) Plan Benchmarking Process
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
            Why Choose PointOak for 401(k) Plan Benchmarking
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              J.P. Morgan reported in 2025 that over half of plan sponsors are unaware of their fiduciary roles and responsibility. PointOak serves as a named 3(21) or 3(38) fiduciary, meaning we share the legal obligation and document your committee&apos;s prudent process. <Link href="/our-consulting-team" className="text-medium-blue hover:underline">Darsh Makim and his team</Link> work directly with your committee, applying the same benchmarking methodology to every engagement regardless of plan size, following <a href="https://www.irs.gov/retirement-plans/retirement-plan-fiduciary-responsibilities" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">IRS fiduciary guidance</a> throughout.
            </p>
            <p>
              PointOak is fee-only and independent, with no commissions, no proprietary products, and no provider affiliations that compromise recommendations. The Live Bid methodology evaluates every bidder against the same multi-point scoring criteria so fiduciaries on your committee receive objective, comparable results in your best interest. That independence is why the findings hold up under scrutiny from the Department of Labor or plan auditors.
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
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. SEC-registered investment advisor with over $1.08 billion in assets under management. Our team brings over 50 years of collective experience serving high-net-worth individuals and corporate plan sponsors nationwide. Learn more <Link href="/about" className="text-medium-blue hover:underline">about PointOak</Link> or call us at (703) 595-4444 to <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">schedule a consultation</a>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Book a consultation</a> with Darsh and his team to discuss your plan&apos;s benchmarking needs.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
