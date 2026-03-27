import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Target Date Fund Selection | PointOak Retirement Advisors",
  description: "A fiduciary evaluation framework for target date fund selection covering glide path, fees, and participant fit. Schedule a consultation with PointOak.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/tdf-consulting/tdf-selection/"
  }
};

const highlights = [
  "450+ data points reviewed per plan bidder",
  "Named ERISA 3(21) and 3(38) fiduciary",
  "Fee-only fiduciary since 2017"
];

const processSteps = [
  {
    number: 1,
    title: "Step 1: Analyze Your Current TDF Lineup",
    description: "We review your existing target date funds, fees, glide paths, and participant demographics."
  },
  {
    number: 2,
    title: "Step 2: Benchmark Against the Market",
    description: "We compare your TDF series to alternatives through our retirement plan consulting services."
  },
  {
    number: 3,
    title: "Step 3: Evaluate Participant Fit",
    description: "We assess whether your workforce demographics and contribution patterns match glide path assumptions."
  },
  {
    number: 4,
    title: "Step 4: Present Findings to Your Committee",
    description: "We deliver documented findings with recommendations for your fiduciary file."
  },
  {
    number: 5,
    title: "Step 5: Implement and Establish Review Cadence",
    description: "We execute the selected approach and set periodic review triggers aligned with target retirement expectations."
  }
];

const faqs = [
  {
    question: "How much does target date fund consulting cost?",
    answer: "TDF consulting fees vary by plan size, complexity, and engagement scope. PointOak operates on a fee-only model with no commissions or product-related compensation. Consulting fees reflect the depth of evaluation, including benchmarking, glide path analysis, participant-fit review, and documentation, as well as the plan's asset size. The initial consultation is complimentary and carries no obligation. Schedule a complimentary consultation to discuss your plan's needs."
  },
  {
    question: "What is the difference between independent TDF consulting and using your recordkeeper's recommendation?",
    answer: "A recordkeeper presents its own fund lineup; an independent consultant evaluates across the full market. Recordkeeper recommendations are limited to products on their platform. Independent TDF consulting benchmarks multiple providers against DOL-aligned criteria, reviewing the fund's fees, glide path, underlying investments, and participant fit, then documents the rationale for the fiduciary file."
  },
  {
    question: "How often should a target date fund lineup be reviewed?",
    answer: "At minimum annually, with additional reviews triggered by strategy, fee, or provider changes. Federal guidance expects fiduciaries to review TDF selections periodically and reassess when the fund's strategy, management team, or plan objectives change. PointOak establishes a documented review cadence as part of implementation, with defined triggers that align with DOL expectations for ongoing prudence."
  },
  {
    question: "How do you choose a target-date fund?",
    answer: "Evaluate glide path design, fees, underlying holdings, participant fit, and post-retirement allocation. Choosing a target-date fund goes beyond matching the target year to an expected retirement date. A fiduciary-grade process reviews the fund's equity-to-fixed-income transition, total layered expenses, and how assumptions match actual participant behavior and financial goals. That includes whether the fund holds individual securities or other funds and the risk participants could lose money near retirement."
  },
  {
    question: "Are all 2050 target date funds the same?",
    answer: "No, same-year target date funds can differ substantially in risk, fees, and investment approach. Two 2050-dated funds may hold different equity percentages, use different individual investments, reach their most conservative asset allocation at different times, and charge different fees. That variation is why a structured comparison matters rather than selecting by year alone. Target date funds (TDFs) from different asset managers can have meaningfully different glide paths."
  },
  {
    question: "What is a glide path in a target date fund?",
    answer: "A glide path is the fund's planned shift from higher-risk to lower-risk investments over time. The glide path determines how much equity exposure the fund holds at each stage and when it reaches its conservative point. Some funds reach that point at the target date and function as an income fund, while others continue adjusting afterward. PointOak evaluates whether a fund's glide path and ready made portfolio structure fit your participants' actual retirement behavior."
  },
  {
    question: "Should I choose a later target date fund to stay more aggressive?",
    answer: "A later-dated fund increases equity exposure but introduces more volatility near retirement. Selecting a 2065 fund instead of a 2050 fund keeps a higher stock allocation longer. That works for some profiles but introduces more market risk near retirement if the participant needs stable income sooner. The decision should reflect the full financial picture rather than a preference for growth."
  },
  {
    question: "Are target date funds good in a taxable account?",
    answer: "Target date funds are designed for retirement accounts and create tax inefficiency in taxable settings. Inside a 401(k) or IRA, a target date fund's internal rebalancing and bond income have no immediate tax consequences. In a taxable account, those same actions generate capital gains distributions and taxable interest annually. Life cycle funds and other target date retirement funds are typically held in tax-advantaged retirement funds for this reason."
  },
  {
    question: "What should plan fiduciaries look at when selecting target date funds?",
    answer: "Plan fiduciaries should evaluate performance, fees, glide path design, participant demographics, and contribution patterns. Federal guidelines from the Employee Benefits Security Administration direct fiduciaries to establish an objective process for comparing TDF options covering investment strategy, total expenses, and glide path transitions. PointOak's target date fund consulting and fiduciary support services address each criterion and help plan sponsors develop effective employee communications around selection decisions."
  },
  {
    question: "What fees matter most in target date fund selection?",
    answer: "Both the TDF's expense ratio and the fees of its underlying funds affect long-term returns. A target date fund charges its own management fee, but it also holds underlying funds with separate investment expenses. PointOak reviews the all-in cost across both layers because even small fee differences compound over a 20- or 30-year holding period. That layered analysis extends beyond what a fund's prospectus or summary prospectus shows."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Target Date Fund Selection",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "TDF Selection and Consulting",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function TDFSelectionPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "TDF Consulting", href: "/corporate-retirement-plans/tdf-consulting" },
          { label: "TDF Selection & Suitability" }
        ]}
        title="Target Date Fund Selection: A Fiduciary Evaluation Framework"
        subtitle="Most target date fund selection stops at the target date. $4.0 trillion in retirement savings sat in target date funds (TDFs) at year-end 2024, per the Investment Company Institute. PointOak Retirement Advisors builds the documented evaluation process plan sponsors need, covering glide path, fees, and participant fit."
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
            Benefits of Target Date Fund Selection
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Better Participant Retirement Outcomes</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The fund&apos;s asset allocation sets investment risk at every stage of the glide path. Effective target date fund selection aligns risk tolerance assessment and glide path design to actual participant age distribution, contribution behavior, and retirement timing. Misalignment between diversification and asset allocation assumptions and real workforce patterns reduces retirement income.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Stronger Fiduciary Protection</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Target date funds represented 38% of total 401(k) assets by year-end 2022, according to the ICI&apos;s 2025 Fact Book. A documented selection process addressing key considerations around participant fit satisfies ERISA prudence requirements. That record is the foundation of defensible <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:underline">fiduciary support</Link>.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Lower All-In Investment Costs</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The <a href="https://www.investor.gov/index.php/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/target" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">SEC Investor Bulletin on target date funds</a> directs fiduciaries to review the fund&apos;s fees and the investment expenses of underlying holdings. Layered costs compound across the full holding period. Independent <Link href="/corporate-retirement-plans/provider-and-fee-benchmarking" className="text-medium-blue hover:underline">provider and fee benchmarking</Link> identifies cost gaps, including mutual funds and other investments within the TDF structure.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Alignment with Workforce Demographics</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                DOL guidance directs fiduciaries to consider participant ages, salary levels, turnover, and withdrawal patterns when evaluating target date retirement funds. A workforce of early-career employees has different investment objectives than one nearing mass retirement. Matching TDF assumptions to demographics supports each participant&apos;s future savings goal.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Audit-Ready Documentation</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                An objective evaluation process produces documentation that demonstrates ERISA-compliant decision-making. Every element of the selection rationale, from financial goals and investment returns analysis to participant-fit assessment, becomes part of the fiduciary file. If the DOL audits your plan, the record speaks for itself.
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
            How Target Date Fund Selection Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              88% of participants who held target date funds held a single age-appropriate fund, according to a joint ICI and EBRI study. Participants treat their TDF as a complete retirement solution. That reality means the fund&apos;s glide path, equity exposure, fixed income allocation, and underlying mutual funds define the investment mix for most plan members.
            </p>
            <p>
              Effective evaluation compares glide path design, active or passive implementation, total layered fees, and how each fund reaches its most conservative point. The <a href="https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/fact-sheets/target-date-retirement-funds-tips-for-erisa-plan-fiduciaries" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">DOL&apos;s fiduciary guidance on target date funds</a> frames these criteria for <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:underline">investment analysis</Link> committees. Funds continue to evolve as asset managers adjust allocations across different asset classes and cash equivalents.
            </p>
          </div>
          <div className="mt-8 bg-navy text-white rounded-lg p-6 md:p-8">
            <p className="font-outfit text-base leading-relaxed">
              <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-warm-gold hover:underline font-semibold">Schedule a consultation</a> to discuss your plan&apos;s target date fund lineup with PointOak.
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
            Who Needs Target Date Fund Selection
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Not every plan needs independent TDF evaluation. These five signals indicate a deeper analysis adds value.
          </p>
          <div className="space-y-8">
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Plan Uses the Recordkeeper&apos;s Default TDF</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                58% of defined contribution plan assets sat in off-the-shelf TDF suites, per Morningstar. Many plan sponsors accepted the default without evaluating different funds or documenting why that series fits their participants&apos; investment preferences.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Fiduciary Committee Hasn&apos;t Reviewed the TDF in Two or More Years</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Federal guidance expects ERISA plan fiduciaries to review TDF selections periodically. Strategy changes, fee adjustments, and management team turnover can shift the fund&apos;s suitability and introduce inflation risk if allocations lag purchasing power.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Are Changing Recordkeepers or Plan Providers</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A provider transition is the natural trigger to benchmark <Link href="/corporate-retirement-plans/tdf-consulting" className="text-medium-blue hover:underline">target date fund consulting</Link> options independently. Locking into a new default without evaluation misses the opportunity to align selection with your target retirement date assumptions.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Participant Demographics Have Shifted</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Workforce age distribution, turnover, salary profiles, and withdrawal patterns affect which glide path fits. Most plans experience demographic shifts over time that the original TDF selection no longer reflects, changing the investing landscape for participants across the plan.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Cannot Document Why Your Current TDF Was Selected</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If the fiduciary file lacks a written rationale connecting the TDF to participant characteristics and plan objectives, that gap creates compliance exposure during a DOL review.
              </p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">When independent evaluation may not be necessary:</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plans with minimal investment complexity and a workforce that closely matches the default fund&apos;s assumed participant profile may not need independent evaluation beyond confirming the existing selection.
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
            Structured TDF Evaluation vs. Default Selection
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Both approaches can satisfy fiduciary requirements. The right choice depends on plan complexity, participant diversity, and your committee&apos;s documentation expectations for the TDF lineup.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Evaluation Factor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Structured TDF Evaluation</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Default Selection</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Glide path review</td>
                  <td className="px-4 py-3 text-gray-700">Compares equity and fixed income curves across TDF providers</td>
                  <td className="px-4 py-3 text-gray-700">Accepts recordkeeper&apos;s standard series</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fee analysis</td>
                  <td className="px-4 py-3 text-gray-700">Reviews fund&apos;s fees and underlying investment expenses</td>
                  <td className="px-4 py-3 text-gray-700">Uses menu without independent benchmarking</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Participant fit</td>
                  <td className="px-4 py-3 text-gray-700">Considers age, salary, turnover, contribution rates</td>
                  <td className="px-4 py-3 text-gray-700">Assumes average participant profile</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Implementation</td>
                  <td className="px-4 py-3 text-gray-700">Evaluates active management style, index funds, and collective investment trusts</td>
                  <td className="px-4 py-3 text-gray-700">Accepts TDF provider&apos;s packaged investment strategies</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Documentation</td>
                  <td className="px-4 py-3 text-gray-700">Creates fiduciary file with selection rationale and supporting analysis</td>
                  <td className="px-4 py-3 text-gray-700">May lack documented prudence process</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Ongoing monitoring</td>
                  <td className="px-4 py-3 text-gray-700">Annual review with defined triggers for same target date funds</td>
                  <td className="px-4 py-3 text-gray-700">No formal review cadence</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Target date mutual fund fees reached new lows in 2024, according to <a href="https://www.morningstar.com/content/cs-assets/v3/assets/blt9415ea4cc4157833/blt3da7ebd510258119/68dc10ee6bd4350b353c1eb9/Target-Date_Landscape_Updated.pdf" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Morningstar&apos;s 2025 target-date landscape report</a>. With fee gaps narrowing, the asset mix, conservative asset allocation design, and underlying holdings are where selection separates plans. Independent <Link href="/corporate-retirement-plans/provider-and-fee-benchmarking" className="text-medium-blue hover:underline">fee benchmarking</Link> confirms whether other mutual funds or investment strategies better serve your participants.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Target Date Fund Selection Process
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
            Why Choose PointOak for Target Date Fund Selection
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Most target date fund guidance comes from fund manufacturers or publishers summarizing the basics. Our <Link href="/about" className="text-medium-blue hover:underline">approach to retirement plan consulting</Link> is different: we act as a named 3(21) or 3(38) ERISA fiduciary. Open architecture means we evaluate which target date funds provide the strongest fit, whether that is one fund or a redesigned suite, without proprietary influence.
            </p>
            <p>
              A recordkeeper presents its own fund lineup and has a structural incentive to keep you in-house. <Link href="/our-consulting-team" className="text-medium-blue hover:underline">Darsh and his team</Link> evaluate across the entire market using the Live Bid benchmarking methodology and document the selection rationale for your fiduciary file.
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
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. We serve plan sponsors and high-net-worth individuals nationwide with retirement plan consulting and wealth management. SEC-registered investment advisor. Over $1.08 billion in assets under management. Over 50 years of collective team experience. Fiduciary since inception. <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Schedule a consultation</a>: (703) 595-4444.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            Call PointOak at (703) 595-4444 or <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">book a consultation</a> to review your plan&apos;s target date fund lineup.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
