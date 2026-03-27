import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Custom Target Date Funds | PointOak Retirement Advisors",
  description: "Independent fiduciary evaluation and custom target date fund design for plan sponsors. 450+ data points reviewed per bidder. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/tdf-consulting/custom-tdf/"
  }
};

const highlights = [
  "450+ data points reviewed per plan bidder",
  "Named 3(21) and 3(38) ERISA fiduciary",
  "Fee-only since 2017, zero product commissions"
];

const processSteps = [
  {
    number: 1,
    title: "Step 1: Analyze Your Current Default",
    description: "We review your existing TDF structure, fee layers, glide path, and participant demographics to establish a baseline."
  },
  {
    number: 2,
    title: "Step 2: Evaluate Custom Fit",
    description: "We assess whether your plan's demographics, asset scale, and committee capacity meet the threshold for custom implementation."
  },
  {
    number: 3,
    title: "Step 3: Design and Recommend",
    description: "You receive a documented recommendation with the rationale your fiduciary file requires."
  },
  {
    number: 4,
    title: "Step 4: Implement and Monitor",
    description: "We implement approved changes and continue as your point of contact through our retirement plan consulting services."
  }
];

const faqs = [
  {
    question: "What does custom target date fund implementation cost?",
    answer: "Cost depends on plan size, custom structure complexity, and the implementation vehicle selected. Key factors include wrapper fees, underlying fund expenses, and the advisory fee for ongoing fiduciary oversight. DOL guidance directs fiduciaries to compare total costs and identify what services justify any fee differential. PointOak provides fee-layer analysis as part of every custom TDF evaluation, ensuring your committee has full visibility before committing money to a new structure."
  },
  {
    question: "How are custom target date funds different from managed accounts?",
    answer: "Custom target date funds adjust allocations at the plan level; managed accounts personalize at the participant level. A custom TDF designs the glide path and selects managers for the entire workforce based on demographics. A managed account adjusts for each individual using personal data such as account balance and salary. PointOak evaluates both approaches to determine which default design serves your participants and their long-term financial life."
  },
  {
    question: "How often should a fiduciary committee review its custom target date fund?",
    answer: "Plan fiduciaries should review the custom TDF at least annually and document each review. DOL guidance requires a documented periodic review process covering glide path performance, fee competitiveness, manager retention decisions, and participant outcome tracking. PointOak structures this review cadence as part of ongoing target date fund consulting engagements, so your committee has a clear schedule and fiduciary documentation for every cycle."
  },
  {
    question: "What fiduciary factors matter most when evaluating custom target date funds?",
    answer: "Glide path fit, total fee transparency, governance capacity, and manager selection discipline are the primary factors. DOL fiduciary guidance for target-date funds names comparing and periodically reviewing TDF options as core fiduciary responsibilities. Committees should evaluate whether the glide path reflects actual participant demographics, whether fees are transparent at every layer, and whether governance resources support ongoing oversight. PointOak builds its evaluation around these aspects."
  },
  {
    question: "When should a plan sponsor consider a custom target date strategy?",
    answer: "Consider custom when your workforce demographics, plan scale, or existing lineup no longer fit a packaged suite. Common signals include a wide age or salary spread across participants, institutional-scale assets that qualify for CIT pricing, or a committee seeking open-architecture manager selection. A recordkeeper transition is another trigger. PointOak's evaluation determines whether custom is appropriate before recommending any specific structure, so you get started with an honest assessment."
  },
  {
    question: "Does \"custom\" always mean lower fees?",
    answer: "Custom does not guarantee lower fees; some structures add cost layers that must be weighed against the benefits. A custom target date fund may use lower-cost CITs or institutional share classes, but it can also introduce wrapper fees, manager overlay fees, or consulting costs absent in a packaged suite. The net cost impact depends on plan scale, vehicle, and architecture. Independent fee analysis is the only way to compare total value accurately."
  },
  {
    question: "When is a packaged target date fund the better choice?",
    answer: "A packaged suite often works better for smaller plans or committees without bandwidth for ongoing custom oversight. Plans below a certain asset threshold may not access the institutional pricing that makes custom cost-effective. A committee without a regular meeting cadence may find the ongoing oversight difficult to sustain. Schedule a consultation with PointOak for a candid assessment of which structure serves your plan."
  },
  {
    question: "What role does the investment committee play in managing a custom target date fund?",
    answer: "The committee approves the glide path, selects managers, and documents each decision for the fiduciary file. Custom target date funds add governance responsibilities beyond what a packaged suite requires. Your committee reviews manager performance, approves rebalancing changes, and maintains fiduciary documentation. PointOak structures this ongoing oversight to keep the fiduciary file current."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Target Date Fund Design",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Custom TDF Implementation",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function CustomTDFPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "TDF Consulting", href: "/corporate-retirement-plans/tdf-consulting" },
          { label: "Custom TDF Design" }
        ]}
        title="Custom Target Date Funds: Fiduciary Evaluation and Design"
        subtitle="Most plans still run target date funds selected years ago without independent review. Target-date fund assets reached $4.0 trillion at year-end 2024, making the retirement asset allocation default a consequential decision. PointOak Retirement Advisors evaluates and designs custom target date funds for plan sponsors."
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
            Benefits of Custom Target Date Funds
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Glide Path Aligned to Your Workforce</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A packaged glide path assumes a generic investor profile. Custom target date fund design starts with your actual workforce: age distribution, salary bands, and retirement behavior. The resulting asset allocation is tailored to your plan's financial goals and risk tolerance.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Open-Architecture Manager Selection</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Custom design gives your committee more control over manager selection across a wider variety of investments. <a href="https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/fact-sheets/target-date-retirement-funds-tips-for-erisa-plan-fiduciaries" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">DOL fiduciary guidance</a> notes that non-proprietary options diversify portfolio exposure beyond a single provider. PointOak's <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:underline">investment analysis</Link> supports this open-architecture approach with flexibility to offer conservative and growth-oriented funds.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fee Transparency Across Every Layer</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Custom structures expose fees at every layer: wrapper, underlying fund, and overlay. Research in the <a href="https://link.springer.com/article/10.1057/s41260-024-00349-0" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Journal of Asset Management</a> found that lower-expense-ratio funds outperformed same-vintage peers on average. Full fee visibility lets your committee adjust costs and use that insight to improve participant outcomes.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Reduced Single-Provider Concentration</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Around 80% of total target-date assets sit with the five largest managers, per Morningstar. Most plans inherit that concentration by default. Custom target date solutions allow diversification across providers and reduce reliance on any single firm's proprietary lineup.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Participant Communication Matched to Plan Design</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Off-the-shelf TDF marketing rarely explains the actual allocation strategy your participants hold. Customization extends to participant communications that describe the real glide path, not generic fund fact sheets. Accurate participant education reinforces confidence in the plan's default.
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
            How Custom Target Date Funds Work
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Custom target date fund design requires four committee-level decisions: glide path shape, asset class mix and manager selection, implementation vehicle (CIT vs. mutual fund), and rebalancing governance. PointOak's <Link href="/corporate-retirement-plans/tdf-consulting" className="text-medium-blue hover:underline">target date fund consulting</Link> structures each decision around the plan's invested allocations across multiple asset classes.
            </p>
            <p>
              Vehicle choice carries material cost implications. <a href="https://www.morningstar.com/business/insights/research/tdf-landscape" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Morningstar</a> reported that collective investment trusts captured 52% of total target-date assets by mid-2024, a structural shift toward institutional pricing. For plans with sufficient scale, CITs reduce expense ratios on underlying holdings below what mutual fund share classes offer. This is a fiduciary consideration, not a detail to defer.
            </p>
          </div>
          <div className="mt-8 bg-navy text-white rounded-lg p-6 md:p-8">
            <p className="font-outfit text-base leading-relaxed">
              <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-warm-gold hover:underline font-semibold">Schedule a consultation</a> to evaluate whether a custom target date fund fits your plan.
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
            Who Needs Custom Target Date Funds
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Not every plan needs a custom target date fund. These signals suggest your plan is ready.
          </p>
          <div className="space-y-8">
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Current Default Has Never Been Benchmarked</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If your plan's TDF was selected years ago without a documented comparison, the DOL's periodic review expectation may be unmet. <Link href="/corporate-retirement-plans/provider-and-fee-benchmarking" className="text-medium-blue hover:underline">Provider and fee benchmarking</Link> establishes the baseline.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Workforce Demographics Do Not Match Provider Assumptions</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Wide age distribution, unusual salary bands, or high turnover create participant profiles that generic glide paths miss. A custom target date approach accounts for your plan's actual demographic experience rather than a provider's broad assumptions.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Plan Has Outgrown Its Off-the-Shelf Suite</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Asset scale qualifies your plan for institutional vehicles and fee structures unavailable in packaged suites. Choosing to stay in a retail-priced lineup when CIT pricing is accessible costs participants directly over time.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Committee Wants Open-Architecture Manager Selection</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your committee seeks hands-on control over manager selection rather than accepting a single firm's lineup. This requires governance capacity for ongoing oversight and documented selection criteria.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">A Recordkeeper Change Triggered a Default Review</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A recordkeeper transition is a natural moment to evaluate whether the current default still fits. Treat the change as an opportunity to reassess your asset allocation strategy.
              </p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">When Custom Might NOT Be the Right Fit</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Smaller plans with limited committee bandwidth often benefit from a packaged suite's simplicity and lower governance burden. Custom adds value only when the plan's scale and complexity justify it.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Comparison Tables */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Custom Target Date Funds vs. Packaged Target Date Funds
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Custom target date solutions, packaged suites, and managed accounts each serve different plan profiles. The right choice depends on demographics, asset scale, and committee capacity.
          </p>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Custom TDF</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Packaged TDF</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Glide path design</td>
                  <td className="px-4 py-3 text-gray-700">Configured to plan demographics</td>
                  <td className="px-4 py-3 text-gray-700">Standardized to broad market assumptions</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Manager selection</td>
                  <td className="px-4 py-3 text-gray-700">Open-architecture, committee-selected</td>
                  <td className="px-4 py-3 text-gray-700">Provider's proprietary or curated lineup</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fee structure</td>
                  <td className="px-4 py-3 text-gray-700">Layered (wrapper + underlying); committee controls each</td>
                  <td className="px-4 py-3 text-gray-700">Bundled; simpler but less transparent</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Governance burden</td>
                  <td className="px-4 py-3 text-gray-700">Higher; requires documented review cadence</td>
                  <td className="px-4 py-3 text-gray-700">Lower; largely provider-managed</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Implementation vehicle</td>
                  <td className="px-4 py-3 text-gray-700">Can use CITs for institutional pricing</td>
                  <td className="px-4 py-3 text-gray-700">Typically mutual fund based</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm italic mb-8">
            Sources: DOL, Morningstar, DCIIA
          </p>

          <h3 className="text-navy font-outfit text-2xl lg:text-3xl font-medium mb-6">
            Custom TDF vs. Managed Account
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Custom TDF</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Managed Account</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Personalization level</td>
                  <td className="px-4 py-3 text-gray-700">Plan-level (workforce demographics)</td>
                  <td className="px-4 py-3 text-gray-700">Participant-level (individual data)</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Default adoption</td>
                  <td className="px-4 py-3 text-gray-700">59% of participants in single TDF</td>
                  <td className="px-4 py-3 text-gray-700">7% of participants in managed account</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fee pressure</td>
                  <td className="px-4 py-3 text-gray-700">Institutional vehicle pricing available</td>
                  <td className="px-4 py-3 text-gray-700">Fees above 30 bps may require higher risk to match</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Governance complexity</td>
                  <td className="px-4 py-3 text-gray-700">Committee oversees glide path and managers</td>
                  <td className="px-4 py-3 text-gray-700">Provider manages individual allocations</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Communication clarity</td>
                  <td className="px-4 py-3 text-gray-700">Plan-wide messaging; consistent</td>
                  <td className="px-4 py-3 text-gray-700">Individualized; harder to communicate at scale</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm italic mt-6">
            Sources: Vanguard's How America Saves 2025; industry consulting research
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Custom fits plans with the assets, economic rationale, and committee bandwidth to justify ongoing oversight. Packaged suites deliver value through simplicity. An independent evaluation through <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:underline">fiduciary support</Link> helps your committee document its decision regardless of which structure fits.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Custom Target Date Fund Process
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
            Why Choose PointOak for Custom Target Date Funds
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              According to <a href="https://www.pimco.com/us/en/about-us/press-release/2025/401k-plan-sponsors-expected-to-favor-blend-target-date-funds-according-to-pimco-consultant-survey" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">PIMCO's 2025 DC Consulting Study</a>, 80% of aggregators expect plan sponsors to increase blend target-date fund implementation. PointOak evaluates these shifts through independent research, not product inventory. Our clients receive insight on participant communications alongside the structural recommendation, ensuring your workforce understands how their invested assets are managed.
            </p>
            <p>
              The concern that custom is vendor-driven is valid when the advisor earns commissions. As an <Link href="/about" className="text-medium-blue hover:underline">independent, fee-only firm</Link> and named 3(21) and 3(38) ERISA fiduciary, PointOak treats no evaluation as a solicitation. We sell no proprietary funds and start every analysis with whether custom fits.
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
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. SEC-registered investment advisor serving clients nationwide with over $1.08 billion in assets under management. Darsh Makim's practice dates to 2005, backed by 50+ years of collective team experience. Named 3(21) and 3(38) ERISA fiduciary. <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Schedule a complimentary consultation</a>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            Contact PointOak at (703) 595-4444 or <a href="https://www.pointoak.com/contact/" target="_blank"