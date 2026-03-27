import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Retirement Plan Optimization | PointOak Retirement Advisors",
  description: "PointOak's retirement plan optimization reviews plan design, fees, fiduciary process, and participant outcomes. 450+ data points per bidder. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/plan-design/optimization/"
  }
};

const highlights = [
  "450+ data points reviewed per plan bidder",
  "Fee-only fiduciary since 2017",
  "Named 3(21) and 3(38) ERISA fiduciary"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We review your current plan structure, fees, investments, and fiduciary processes against current market data."
  },
  {
    number: 2,
    title: "Optimize",
    description: "You receive documented recommendations for plan design, provider evaluation, investment menu, and participant strategy."
  },
  {
    number: 3,
    title: "Implement",
    description: "We execute approved changes and provide ongoing monitoring, benchmarking, and fiduciary documentation. Our approach ensures continuity."
  }
];

const faqs = [
  {
    question: "What does retirement plan consulting cost?",
    answer: "Consulting fees vary based on plan size, participant count, complexity, and the scope of fiduciary services engaged. PointOak operates as a fee-only advisor, meaning compensation comes entirely from client fees with no commissions, revenue sharing, or product-based incentives. Consulting engagements are typically structured as asset-based fees or flat fees depending on plan complexity and scope. Factors that influence cost include total plan assets, participant count, scope of fiduciary responsibility, benchmarking depth, and whether coordination with a tax advisor or accounting advice is needed. The fee-only structure aligns PointOak's compensation directly with the plan sponsor's interests, eliminating conflicts from recordkeeper relationships or fund placement."
  },
  {
    question: "Is lowering fees enough to optimize a retirement plan?",
    answer: "Fee reduction is one component, but optimization requires plan design and governance review beyond cost analysis. DOL guidance extends fiduciary duties past fee review to include provider selection, investment monitoring, and documentation. A plan with low fees but poor participation or an outdated investment menu still underperforms. Provider and fee benchmarking is a starting point, but full optimization evaluates whether savings and design deliver retirement readiness."
  },
  {
    question: "How often should a company review its retirement plan?",
    answer: "Most plan sponsors benefit from a formal review at least annually, with deeper audits every two to three years. DOL expects ongoing monitoring, not a one-time assessment. Regulatory changes like SECURE 2.0 provisions and annual IRS limit adjustments create natural review triggers that affect whether participants are on track for a secure retirement. PointOak's Implement phase includes ongoing benchmarking and fiduciary documentation that keeps the review process current."
  },
  {
    question: "How do you optimize a retirement plan?",
    answer: "Optimization follows a structured framework: audit design, benchmark fees, evaluate investments, assess behavior, and document governance. The process starts with plan design: auto-enrollment, auto-escalation, and match structure. Fee and provider benchmarking compare costs against current market data, and investment menu evaluation assesses fund alignment with participant demographics. PointOak also analyzes contribution rates and assets, documenting every step to build a fiduciary record."
  },
  {
    question: "What plan features increase 401(k) participation?",
    answer: "Automatic enrollment and auto-escalation are the two design features with the strongest documented effect on participation. 401(k) plans that adopt automatic enrollment consistently show higher participation than voluntary-enrollment plans. Auto-escalation builds on that advantage by gradually increasing deferral rates, helping most employees build toward adequate retirement income without requiring active decisions. Matching formulas that help participants take full advantage of employer contributions provide additional motivation."
  },
  {
    question: "What should plan sponsors look for in a retirement plan advisor?",
    answer: "Sponsor selection criteria should start with named fiduciary status, documented benchmarking methodology, and recordkeeper independence. A 3(21) or 3(38) named fiduciary provides documented accountability that a general advisor relationship does not. When plan sponsors seek investment advice, independence from recordkeeper affiliations ensures recommendations serve participants. PointOak's fiduciary support services include documented benchmarking through a proprietary process that reviews current plan data rather than relying on broad averages."
  },
  {
    question: "Are target-date funds enough, or should a plan offer managed accounts?",
    answer: "Target-date funds serve as a strong default for most participants, while managed accounts address more complex financial situations. TDFs provide age-appropriate asset allocation and automatic de-risking that work well for the majority of 401(k) participants. Managed accounts add value for employees with higher retirement assets, concentrated positions, or financial stress from competing lifetime income priorities. PointOak's target date fund consulting evaluates which structure aligns with your participant demographics and retirement goals."
  },
  {
    question: "How do I know if my plan's investment options are competitive?",
    answer: "Compare your fund lineup against institutional-grade options, review expense ratios, and assess alignment with participant demographics. An independent analysis removes recordkeeper bias by evaluating each fund on its merits. Expense ratios matter, but so do risk-adjusted performance, share class availability, and whether the menu covers the right investments for your workforce. Plans that haven't reviewed fund lineups in two or more years often carry legacy options below institutional benchmarks."
  },
  {
    question: "What changed for retirement plans under SECURE 2.0?",
    answer: "SECURE 2.0 introduced automatic-enrollment mandates, expanded catch-up contributions, and broader flexibility for plan design updates. Plans established after December 29, 2022 must include automatic enrollment with specific minimum deferral and escalation requirements. Catch-up contribution rules expanded for participants aged 60 through 63, allowing higher tax-advantaged account limits. Additional provisions address part-time employee eligibility, emergency savings, and new tax benefits for Roth employer contributions, each requiring plan document amendments."
  },
  {
    question: "What are the 2026 401(k) contribution limits?",
    answer: "The 2026 elective deferral limit is $24,500, with catch-up contributions of $8,000 for participants age 50 and older. Participants ages 60 through 63 qualify for a higher catch-up of $11,250 under SECURE 2.0 provisions. Total annual additions from all sources cannot exceed $72,000. The IRS 2026 contribution limit announcement provides the full breakdown for 401(k) plans and other tax-advantaged accounts across the private sector and for public employees."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Retirement Plan Optimization Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Plan Optimization",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function OptimizationPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Plan Design", href: "/corporate-retirement-plans/plan-design" },
          { label: "Plan Optimization" }
        ]}
        title="Retirement Plan Optimization for Plan Sponsors and Fiduciaries"
        subtitle="Most retirement plans run on defaults that no longer serve plan sponsors or participants. Vanguard reported 94% participation in automatic-enrollment plans versus 64% in voluntary-enrollment plans in 2024. PointOak Retirement Advisors' retirement plan consulting services evaluate design, fees, governance, and participant outcomes to close that gap."
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
            Benefits of Retirement Plan Optimization
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Higher Participant Engagement</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Schwab found 12% of 401(k) participants reduced contributions in 2025. Plan design that pairs auto-escalation with targeted <Link href="/corporate-retirement-plans/education-and-communications" className="text-medium-blue hover:underline">education and communications programs</Link> counteracts that behavior before it compounds. Optimization improves participation rates and financial wellness through structure, not just messaging.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Reduced Fiduciary Liability</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                <a href="https://www.dol.gov/sites/dolgov/files/EBSA/about-ebsa/our-activities/resource-center/publications/meeting-your-fiduciary-responsibilities.pdf" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">DOL fiduciary guidance</a> requires documented provider comparison, fee-reasonableness review, and ongoing monitoring across all plan rules. Most defined contribution plans lack a consistent documentation trail. Optimization builds that trail through structured <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:underline">fiduciary support</Link> that protects the committee at every decision point.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Competitive Plan Design</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plan sponsors who haven&apos;t benchmarked their match formula, automatic enrollment settings, or investment menu against current market norms risk falling behind peer plans. Optimization evaluates <Link href="/corporate-retirement-plans/plan-design" className="text-medium-blue hover:underline">plan design</Link> against industry data on contribution structures, auto-features, and fund lineups so your plan attracts and retains talent.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Stronger Retirement Readiness Across Your Workforce</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Retirement readiness depends on more than individual savings discipline. Plan-level metrics like deferral rates, asset allocation patterns, and distribution behavior reveal whether your workforce is building long term financial security or falling short. Optimization connects these signals to design changes that move outcomes, with particular focus on high income earners approaching retirement age.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Alignment with Current Regulations</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                SECURE 2.0 created new automatic-enrollment requirements for plans established after December 2022 and expanded catch-up contribution rules. IRS limit adjustments continue annually. Optimization ensures your plan design reflects current regulations rather than the environment from the plan&apos;s last review.
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
            How Retirement Plan Optimization Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Optimization audits five interconnected dimensions: plan design, fiduciary governance, <Link href="/corporate-retirement-plans/provider-and-fee-benchmarking" className="text-medium-blue hover:underline">provider and fee benchmarking</Link>, investment management, and participant behavior. Strong fund lineups mean less when participants aren&apos;t enrolled. These dimensions interact, so reviewing them in isolation misses the dependencies that determine participant outcomes.
            </p>
            <p>
              Vanguard reported 67% of participants in professionally managed allocations in 2024, with target date funds and managed accounts driving that shift. Evaluating whether your plan&apos;s investment options and asset allocation match participant demographics is central to <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:underline">investment analysis</Link>. An integrated approach connects how 401(k) plans work with other retirement savings vehicles to maximize retirement readiness.
            </p>
          </div>
          <div className="mt-8 bg-navy text-white rounded-lg p-6 md:p-8">
            <p className="font-outfit text-base leading-relaxed">
              <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-warm-gold hover:underline font-semibold">Schedule a consultation</a> to evaluate your retirement plan against current market benchmarks and fiduciary standards.
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
            Who Needs Retirement Plan Optimization
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Not every plan requires a full optimization engagement. These signals indicate when a structured review will produce measurable improvements.
          </p>
          <div className="space-y-8">
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Plan Hasn&apos;t Been Reviewed in Three or More Years</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plan design, fee benchmarks, and regulations shift every year. A plan reviewed in 2022 predates SECURE 2.0 implementation, current IRS limits, and evolving auto-feature adoption trends across the retirement funds landscape. Changes in workforce demographics over the past decade compound the misalignment.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Participation Rates Are Below Industry Benchmarks</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The average employer contribution reached 4.8% in 2024 according to PSCA. If your employer match and participation fall below comparable benchmarks, plan design rather than employee apathy is likely the root cause. Helping employees maximize their employer match through better plan structure makes a significant difference in retirement outcomes.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Committee Lacks a Documented Fiduciary Process</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plan sponsors bear personal liability without documented fiduciary processes. DOL expects evidence of provider comparison, fee review, and ongoing monitoring. Absent that documentation, your committee&apos;s financial situation shifts from managed risk to open exposure.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Suspect Plan Fees Are Above Market</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Fee-only benchmarking reveals whether costs are competitive but misses design and governance gaps. A full review evaluates retirement accounts, tax benefits of plan structure, and provider service alongside fee data.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">SECURE 2.0 Requirements Apply to Your Plan</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                New automatic-enrollment mandates and catch-up contribution changes affect most defined contribution plans established after 2022. Plan sponsors approaching key retirement age thresholds for participants face expanded <Link href="/corporate-retirement-plans/target-date-fund-tdf-consulting" className="text-medium-blue hover:underline">target date fund consulting</Link> requirements under updated DOL expectations.
              </p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">When Retirement Plan Optimization Might NOT Be the Right Fit</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Organizations with very small plans under 20 participants or newly established plans without sufficient assets or complexity may not need consulting-level engagement. A basic recordkeeper review may be adequate in those cases.
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
            Retirement Plan Optimization vs. Fee-Only Benchmarking
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Fee-only benchmarking and full optimization address different questions about retirement savings. Scope determines whether you receive a cost report or actionable investment advice.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Dimension</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Full Retirement Plan Optimization</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Fee-Only Benchmarking</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Scope</td>
                  <td className="px-4 py-3 text-gray-700">Reviews design, governance, fees, investments, and participant behavior</td>
                  <td className="px-4 py-3 text-gray-700">Reviews fees and fund expenses</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fiduciary Documentation</td>
                  <td className="px-4 py-3 text-gray-700">Builds documented process across all ERISA duties</td>
                  <td className="px-4 py-3 text-gray-700">Covers fee reasonableness only</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Participant Outcomes</td>
                  <td className="px-4 py-3 text-gray-700">Measures participation, deferral rates, and retirement readiness</td>
                  <td className="px-4 py-3 text-gray-700">Does not address participant behavior</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Benchmark Depth</td>
                  <td className="px-4 py-3 text-gray-700">Benchmarks against current savings data (12.5% total retirement savings rate, PSCA 2025)</td>
                  <td className="px-4 py-3 text-gray-700">Compares fund expense ratios</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Regulatory Alignment</td>
                  <td className="px-4 py-3 text-gray-700">Incorporates SECURE 2.0 and IRS changes into plan design</td>
                  <td className="px-4 py-3 text-gray-700">Does not address design compliance</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm italic mt-6">
            Sources: DOL EBSA, Vanguard How America Saves 2025, PSCA Annual Survey 2025
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Fee-only benchmarking works when a sponsor needs a focused cost review. Full optimization is the appropriate retirement planning process when participation, governance, or design haven&apos;t been measured against current benchmarks. <a href="https://www.dol.gov/sites/dolgov/files/ebsa/about-ebsa/our-activities/resource-center/publications/meeting-your-fiduciary-responsibilities.pdf" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">DOL fiduciary responsibilities guidance</a> frames both as components of a comprehensive plan oversight duty.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Retirement Plan Optimization Process
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
            Why Choose PointOak for Retirement Plan Optimization
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Most retirement plan optimization content treats the topic as personal savings advice, not sponsor-level governance and design. PointOak&apos;s benchmarking uses actual plan data through a proprietary Live Bid process, not industry averages that mask plan-specific issues. Independence from any recordkeeper means every recommendation is based solely on your financial goals and participant outcomes.
            </p>
            <p>
              Your current recordkeeper may claim to handle optimization, but few provide investment advice as a named 3(21) or 3(38) ERISA fiduciary. PointOak does, with documented process discipline. Plan sponsors work directly with <Link href="/our-consulting-team" className="text-medium-blue hover:underline">our senior advisors</Link> for informed decisions and long term success.
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
            PointOak Retirement Advisors is a fee-only wealth advisory firm founded in 2017 in McLean, Virginia. SEC-registered investment advisor, fiduciary since inception, with over $1.08 billion in assets under management. Darsh Makim, CRPC, has worked with plan sponsors and participants since 2005, backed by 50+ years of collective team experience. We serve the DC/MD/VA metro area and clients nationwide. <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Schedule a complimentary consultation</a>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Schedule your complimentary consultation</a> to see how your plan measures against current benchmarks and fiduciary standards.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
