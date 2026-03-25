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
  description: "Expert target date fund selection for 401(k) plans. Independent fiduciary analysis of glide paths, fees, and asset allocation. Protect your plan from liability.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/tdf-consulting/tdf-selection/"
  }
};

const highlights = [
  "Named fiduciary status under ERISA 3(21) and 3(38)",
  "Independent evaluation of 150+ target date series",
  "Complete DOL-compliant documentation process"
];

const processSteps = [
  {
    number: 1,
    title: "Demographic Analysis",
    description: "We review your participant data to understand ages, salary levels, and retirement patterns across your workforce."
  },
  {
    number: 2,
    title: "Universe Evaluation",
    description: "You receive comparison of target date fund options across glide paths, fees, underlying investments, and performance from multiple providers."
  },
  {
    number: 3,
    title: "Suitability Matching",
    description: "We match your workforce characteristics to target date approaches that align with your participants&apos; needs and risk tolerance."
  },
  {
    number: 4,
    title: "Committee Presentation",
    description: "Your investment committee receives comprehensive analysis with clear recommendations and supporting documentation for decision-making."
  },
  {
    number: 5,
    title: "Implementation Support",
    description: "We coordinate with your recordkeeper to implement the selected target retirement funds and provide participant communications."
  }
];

const faqs = [
  {
    question: "How much does target date fund selection consulting cost?",
    answer: "Target date fund consulting fees vary based on plan size, scope of analysis, and whether you need ongoing monitoring or a one-time evaluation. Most engagements are structured as either project-based fees for initial selection or annual retainers that include quarterly monitoring. We provide transparent pricing during our initial consultation. The investment in proper TDF selection typically pays for itself through fee savings and far exceeds the cost of potential litigation from improper selection."
  },
  {
    question: "What makes PointOak different from other retirement plan advisors for TDF selection?",
    answer: "Three critical differences: We generate over 90% of our revenue from retirement plan consulting, making us true specialists rather than generalists. We act as named fiduciaries under ERISA sections 3(21) or 3(38), assuming liability for investment decisions. And we&apos;re completely independent with no proprietary products to push. Our methodology evaluates over $120 billion in retirement plan assets quarterly, providing perspective most advisors simply don&apos;t have."
  },
  {
    question: "How long does the target date fund evaluation process take?",
    answer: "A comprehensive target date fund evaluation typically takes 6-8 weeks from initial data gathering to investment committee presentation. This includes participant demographic analysis, evaluation of multiple target date fund families, glide path comparison, fee benchmarking, and documentation preparation. Implementation can occur within 30-60 days after your committee&apos;s decision. Rush timelines are possible when plan sponsors face urgent deadlines like contract renewals or audit responses."
  },
  {
    question: "What factors should plan sponsors consider when selecting target date funds?",
    answer: "The DOL guidance identifies several critical factors: fund&apos;s performance across multiple time periods, expense ratios and fees, how the glide path aligns with your participants&apos; likely retirement ages and risk tolerance, quality of underlying funds or individual securities, whether the fund uses a &quot;to retirement&quot; or &quot;through retirement&quot; approach, and the investment manager&apos;s experience. You should also consider your workforce demographics, average account balances, and whether employees need more conservative or aggressive asset allocation than typical target date funds provide."
  },
  {
    question: "What is the difference between &quot;to retirement&quot; and &quot;through retirement&quot; target date funds?",
    answer: "&quot;To retirement&quot; target date funds reach their most conservative asset allocation at the target retirement date, then maintain that conservative mix of stocks, bonds, and cash equivalents. &quot;Through retirement&quot; funds continue becoming more conservative for 10-20 years after the target date, recognizing that retirees may need their money to last 30+ years and can&apos;t afford to be too conservative too soon. Most target date funds today use the &quot;through retirement&quot; approach to manage inflation risk during extended retirements."
  },
  {
    question: "How often should target date funds be reviewed and monitored?",
    answer: "Plan fiduciaries should review target date funds at least every three years as part of comprehensive benchmarking, per DOL guidance. However, prudent ongoing monitoring occurs quarterly to track fund&apos;s performance, fee changes, manager departures, and strategy shifts. Annual investment committee meetings should include target date fund review with documentation. If your fund experiences significant underperformance, management changes, or fee increases between regular reviews, immediate evaluation is warranted."
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
        title="Target Date Fund Selection"
        subtitle="Selecting the right target date fund for your 401(k) plan isn&apos;t just an investment decision. It&apos;s a fiduciary responsibility that can expose your organization to liability. PointOak provides independent target date fund evaluation and selection services that help plan sponsors make defensible, well-documented decisions."
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

      {/* Why Choose Us */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Why Choose Us for Target Date Fund Selection?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Target date funds account for more than $4 trillion in assets across mutual funds and collective investment trusts, with 87% of plans using TDFs as their qualified default investment alternative. This massive concentration of retirement savings makes proper target date fund selection critical for plan sponsors.
            </p>
            <p>
              What sets us apart is our independence. We generate over 90% of our revenue from retirement plan consulting. Our multi-step target date suitability and selection process evaluates investment objectives, asset allocation strategies, and fund&apos;s asset allocation changes over time. We document everything to protect you from liability if audited, and we act as your named fiduciary under ERISA.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Services */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Our Target Date Fund Consulting Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">TDF Suitability Analysis</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Not all target date funds match every workforce. Our TDF suitability analysis examines your participant demographics, age distribution, salary levels, and retirement patterns to determine which target date approaches align with your employees&apos; characteristics. We analyze whether a traditional life cycle funds series or a custom solution best serves your plan.
              </p>
              <ul className="space-y-2 text-text-gray font-outfit text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Participant demographic deep-dive analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Risk tolerance and timeline assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Custom versus off-the-shelf TDF evaluation</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Qualitative TDF Evaluation</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Understanding what&apos;s inside the target date fund matters as much as the glide path itself. Our qualitative evaluation examines the underlying funds, investment strategies, and asset mix that drive fund&apos;s performance over time. We assess the quality and diversification of individual investments within each target retirement date option you&apos;re considering.
              </p>
              <ul className="space-y-2 text-text-gray font-outfit text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Underlying investment quality assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Fund manager tenure and philosophy review</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Inflation risk management evaluation</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">TDF Performance Analysis</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Past performance doesn&apos;t guarantee future results, but it reveals how different funds handle market volatility and whether they deliver on investment objectives. We conduct comprehensive performance analysis measuring each fund&apos;s investment returns against appropriate peer groups and benchmarks across multiple time periods.
              </p>
              <ul className="space-y-2 text-text-gray font-outfit text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Multi-period return and risk analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Peer group performance comparison</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Risk-adjusted return measurement</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Glide Path Comparison</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                The fund&apos;s glide path determines how asset allocation shifts from stocks to more bonds and cash equivalents as the target retirement date approaches. Different target date funds use dramatically different glide paths. Some reach their most conservative point at retirement (&quot;to retirement&quot;), while others investments continue becoming more conservative for years afterward (&quot;through retirement&quot;).
              </p>
              <ul className="space-y-2 text-text-gray font-outfit text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>&quot;To retirement&quot; versus &quot;through retirement&quot; analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Equity exposure at target retirement comparison</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Most conservative mix timing evaluation</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">TDF Fee & Share Class Review</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Expense ratios can vary dramatically across target date funds, from under 10 basis points for low cost passive options to over 50 basis points for actively managed strategies. Over a 30-year career, these fee differences can cost participants tens of thousands of dollars in lost retirement savings.
              </p>
              <ul className="space-y-2 text-text-gray font-outfit text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Comprehensive expense ratio benchmarking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Institutional share class availability review</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Cost-benefit analysis of active versus passive</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">TDF Documentation Support</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                The Department of Labor expects plan fiduciaries to document their target date fund selection and monitoring process. We create comprehensive documentation showing your investment committee reviewed multiple options, considered appropriate factors, and made a prudent decision based on your plan&apos;s specific needs.
              </p>
              <ul className="space-y-2 text-text-gray font-outfit text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>DOL-compliant process documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Investment committee meeting support</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Audit-ready fiduciary file maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Challenges Table */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Common Target Date Fund Selection Challenges
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-[#F3F4F6]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Challenge</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">What It Looks Like</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">How We Help</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Overwhelming TDF Complexity</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Over 150 different target date series exist with vastly different investment strategies, glide paths, and underlying funds. Comparing them objectively is nearly impossible without specialized expertise.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our proven evaluation methodology examines all major target date fund families. We provide side-by-side comparison of glide paths, asset allocation, and investment philosophy to identify the best fit.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fiduciary Liability Exposure</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Recent lawsuits against Citigroup, Capital One, and Cisco plan sponsors for TDF underperformance create fear that selecting the wrong fund could lead to personal liability and legal expenses.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Acting as your 3(21) or 3(38) named fiduciary, we assume liability for the selection process. Our comprehensive documentation demonstrates prudent decision-making that protects you from DOL scrutiny.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fee Variation Impact</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Actively managed target date funds charge 53 basis points on average while passive options cost just 9 basis points. Over a career, this difference costs a participant with a $100,000 balance over $40,000.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We benchmark expense ratios across all share classes and fund families. Our analysis shows exactly what participants pay and identifies lower-cost alternatives that maintain investment quality.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Glide Path Mismatch Risk</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Generic target date funds assume all participants retire at 65 with similar risk profiles. Your workforce may have different retirement patterns, ages, or need for conservative or aggressive asset allocation.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We analyze your specific participant demographics and match them to target date approaches. Custom or semi-custom solutions may better serve your workforce than off-the-shelf life cycle funds.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Proprietary Product Pressure</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Your recordkeeper promotes their own target date funds without objective comparison. These may not be the best option but switching seems complicated and creates relationship friction.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">As independent advisors, we have no proprietary products to sell. We objectively evaluate your current provider&apos;s target retirement funds against all major alternatives using consistent criteria.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect - Our Process
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

      {/* About */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            About PointOak Retirement Advisors
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            PointOak Retirement Advisors is an independent retirement plan consulting firm headquartered in McLean, Virginia, serving plan sponsors nationwide. The firm generates over 90% of its revenue from corporate retirement plans and acts as a 3(21) or 3(38) named fiduciary under ERISA with every client. PointOak evaluates over $120 billion in retirement plan assets quarterly.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            Investment advisory services offered through PointOak Retirement Advisors, LLC. This site is published for residents of the United States only. PointOak Retirement Advisors, LLC does not provide tax or legal advice.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
