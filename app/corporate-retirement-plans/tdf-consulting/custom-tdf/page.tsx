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
  description: "Custom target date funds tailored to your plan&apos;s demographics. Named fiduciary expertise. Comprehensive DOL suitability analysis. Protect your plan from liability.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/tdf-consulting/custom-tdf/"
  }
};

const highlights = [
  "Named fiduciary status under ERISA 3(21) and 3(38)",
  "Evaluating $120+ billion in retirement plan assets quarterly",
  "90%+ revenue from retirement plan consulting"
];

const processSteps = [
  {
    number: 1,
    title: "Participant Demographic Analysis",
    description: "We examine your plan&apos;s participant data to understand unique workforce characteristics."
  },
  {
    number: 2,
    title: "Suitability Evaluation",
    description: "Your investment committee receives our assessment of whether custom or off-the-shelf TDFs better suit your plan."
  },
  {
    number: 3,
    title: "Provider Comparison",
    description: "We present side-by-side analysis of glide paths, fees, and performance across suitable providers."
  },
  {
    number: 4,
    title: "Implementation & Documentation",
    description: "We handle the transition and provide comprehensive fiduciary documentation for your files."
  }
];

const faqs = [
  {
    question: "How much do custom target date funds cost?",
    answer: "Custom target date fund costs vary based on plan size, investment strategies complexity, and whether you use collective investment trusts or mutual fund structures. Fees and expense ratios typically range from 0.20% to 0.50% depending on active versus passive management approaches. Many custom solutions prove cost-competitive with other funds through strategic manager selection. We provide transparent fee analysis comparing total cost across all viable options. Principal amounts are not guaranteed over the life of the investment."
  },
  {
    question: "What makes PointOak Retirement Advisors different from other retirement plan consultants?",
    answer: "Three things set us apart: we generate over 90% of our revenue from retirement plan consulting (true specialization across the investment world, not a side business), all our advisors act as named fiduciaries under ERISA sections 3(21) or 3(38) providing direct liability protection, and our research-driven methodology evaluates over $120 billion in assets quarterly using a proprietary 10-point scoring system. We&apos;ve focused exclusively on retirement plans and investing strategies for clients since day one, giving us unique perspective that generalist financial professionals lack."
  },
  {
    question: "How long does custom TDF implementation usually take?",
    answer: "Most custom target date fund implementations require 60-90 days from final investment committee decision to participant account conversion. This timeline includes provider selection, legal documentation review, recordkeeper coordination, participant communication development, and fund mapping. Economic conditions and market volatility rarely cause delays. We handle DOL notification requirements and coordinate with all service providers to ensure seamless transition intended to minimize any disruption to plan operations and participant experience."
  },
  {
    question: "What is the difference between custom and off-the-shelf target date funds?",
    answer: "Off-the-shelf target date funds use a standardized glide path designed for the average investor, with asset allocation based solely on expected retirement year. Custom target date funds tailor the glide path to your client&apos;s specific plan demographics, allowing more control over underlying asset classes selection, manager choices, and how investments gradually shift from growth to conservative allocations. Plans with concentrated age groups or unique characteristics often achieve better retirement outcomes through customization aligned with their population&apos;s actual needs throughout their working life."
  },
  {
    question: "What participant demographics should trigger consideration of custom TDFs?",
    answer: "Several factors suggest custom solutions may better serve your plan based on sources believed reliable through industry research: participant ages concentrated in narrow ranges rather than evenly distributed, average account balances significantly above or below national medians, high percentage of highly compensated employees, existing defined benefit plan coverage affecting retirement income needs, or unique risk tolerance patterns. DOL guidance emphasizes evaluating these characteristics across a broad range of factors when selecting target date funds to ensure alignment with your workforce reality."
  },
  {
    question: "How does DOL guidance apply to custom target date fund selection?",
    answer: "The Department of Labor&apos;s 2013 tips for ERISA plan fiduciaries require evaluating whether a target date fund&apos;s investment strategies and characteristics align with your plan&apos;s participant demographics. This suitability analysis should consider participant age distribution, retirement income sources, risk capacity, and financial sophistication across the participant population. Plan sponsors must document the selection process and monitor performance over time. Proper documentation demonstrates the prudent, research-based process DOL expects during plan audits and protects fiduciaries from liability in an increasingly complex regulatory world."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Target Date Fund Consulting",
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
          { label: "Custom vs Off-the-Shelf TDFs" }
        ]}
        title="Custom Target Date Funds"
        subtitle="One-size-fits-all target date funds rarely match your plan&apos;s unique participant demographics. And with $3.47 trillion in target date assets and rising fiduciary litigation, proper selection of your qualified default investment alternative matters more than ever. PointOak helps plan sponsors implement custom target date solutions and provides comprehensive documentation for DOL compliance."
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
            Why Choose Us for Custom Target Date Funds?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Target date funds now account for 86% of qualified default investment alternatives, making proper selection a critical fiduciary decision for plan sponsors. Yet a GAO report found that investment options vary significantly in performance, particularly for participants nearing retirement. We know that navigating DOL suitability requirements while managing fiduciary liability is not easy.
            </p>
            <p>
              As your advocate and financial professional partner, we act as named fiduciaries under ERISA sections 3(21) or 3(38), conducting comprehensive demographic analysis and documenting every decision to protect you from liability. Our methodology helps evaluate over $120 billion in retirement plan assets quarterly, and we perform over 10,000 benchmarks per year through our Live Bid process.
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
                DOL guidance requires plan sponsors to evaluate whether a target date fund suits their participants&apos; characteristics before selection. Our Target Date Fund (TDF) Consulting delivers the comprehensive suitability analysis the Department of Labor expects to see during plan audits.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We examine participant age distribution, salary levels, account balances, and other factors to determine whether custom or off-the-shelf solutions better serve your workforce. The multi-step evaluation process includes glide path comparison across providers, assessment of &quot;to retirement&quot; versus &quot;through retirement&quot; approaches, and analysis of underlying asset class exposures.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Qualitative TDF Evaluation</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Beyond demographics, successful target date fund selection requires understanding each provider&apos;s investment philosophy and risk management approach. We evaluate fund strategies, underlying asset allocation methodologies, portfolio construction, and the quality of managers across all asset classes.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our analysis covers active versus passive management approaches, diversification across traditional and alternative asset classes, and the balance between equity exposure, bonds, and fixed income investments. We examine how each series handled past market downturns and whether their strategy assumptions match current retirement realities.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Glide Path Comparison</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                The glide path determines how asset allocation changes over time as participants age, making glide path design the most important element in any target date strategy. We conduct side-by-side comparisons of glide paths from multiple providers. Plans with mostly younger workers expect different asset allocation patterns than those with employees nearing retirement.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We analyze whether a &quot;to retirement&quot; approach (reaching maximum conservatism at the target date) or &quot;through retirement&quot; design (continuing to adjust past retirement) better serves your plan participants. The comparison includes modeling potential outcomes under different market scenarios to illustrate how each glide path would perform.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">TDF Performance Analysis</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Historical performance data reveals how well each target date fund has executed its strategy during different market conditions, though past performance does not guarantee future results. We evaluate return patterns, risk-adjusted metrics, and consistency relative to stated objectives. Performance analysis examines how the funds weathered market downturns.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our proprietary 10-point pass/fail scoring system measures fund performance across multiple factors, including style consistency, risk-adjusted returns, peer group rankings, manager tenure, and expense ratios. This methodology has been used to evaluate over $120 billion in retirement plan assets quarterly, combining sophisticated institutional measurement techniques with accessible analytics.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">TDF Fee & Share Class Review</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Target date funds carry dual-layer investment expenses: the overall fund expense ratio plus the costs of underlying mutual funds. We analyze total investment expenses across providers, identifying opportunities to access lower-cost share classes or collective investment trust structures. Custom target date solutions often achieve cost savings through strategic manager selection.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The fee analysis examines whether you&apos;re paying for active management that delivers value or simply overpaying for index exposure. We review revenue sharing arrangements, 12b-1 fees, and administrative costs to ensure you know exactly where participant money goes. The average asset-weighted expense ratio for target date funds fell to 0.30% in 2023, but wide variation exists.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Custom TDF Implementation Support</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Transitioning to a custom target date solution requires careful planning to minimize participant disruption and ensure seamless implementation and operations. We work with your recordkeeper and investment providers to manage the implementation timeline, typically 60-90 days from decision to completion.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our team handles the operational details. We develop clear communications and education materials explaining why the change benefits participants and what action, if any, they need to take. Most implementations involve automatic mapping from existing target date funds to the new custom series, maintaining each participant&apos;s target retirement date alignment without requiring participant action.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">TDF Documentation Support</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                The Department of Labor expects plan sponsors to document their target date fund selection process as part of their plan fiduciary responsibilities, including why they chose a particular series and how it aligns with participant demographics. We provide complete process documentation for your fiduciary files, including the suitability analysis results, glide path comparison data, and performance evaluation.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                This documentation demonstrates the prudent process followed by your investment committee and serves as general information for regulatory reviews. We maintain these records in our Virtual 401(k) Fiduciary File system, ensuring everything is organized and audit-ready if the DOL requests your fiduciary files.
              </p>
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
            Common Custom Target Date Fund Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">One-size-fits-all TDFs don&apos;t match workforce</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Plans with concentrated high earners in their 50s find standard 2035 funds too conservative, leaving growth potential untapped and retirement readiness at risk.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Multi-step suitability analysis evaluates your participant demographics against available glide paths. We identify custom solutions that match your workforce characteristics.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fiduciary litigation exposure from improper selection</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">GAO 2024 report documented significant performance variation among same-date TDFs. Plan sponsors face lawsuits alleging they failed to conduct proper suitability analysis.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Named fiduciary status under ERISA 3(21) or 3(38) provides direct liability protection. Comprehensive documentation demonstrates prudent process for DOL audits.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">DOL compliance requirements unclear</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">DOL 2013 guidance requires evaluating participant demographics when selecting TDFs, but most sponsors don&apos;t know which factors matter or how to document properly.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our process follows DOL framework: participant analysis, glide path evaluation, fee review, performance assessment. All decisions documented in Virtual 401(k) Fiduciary Files.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Dual-layer fee opacity and cost concerns</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Target date funds charge wrapper fees plus underlying fund expenses. Average 0.30% expense ratio but many sponsors overpay without realizing it.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Fee benchmarking across providers reveals total cost of ownership. Custom solutions can be more cost-effective through strategic manager selection and CIT structures.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Limited control over manager selection</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Off-the-shelf TDFs lock you into single fund family&apos;s managers across all asset classes, constraining access to best-in-class investment options.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Custom solutions allow selecting superior managers for each asset class. We perform ongoing due diligence using our 10-point scoring system.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Implementation complexity and participant disruption</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Sponsors worry that changing TDF providers will confuse participants, trigger taxable events, or require lengthy blackout periods.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">60-90 day implementation timeline with automatic fund mapping minimizes disruption. Clear participant communications explain changes without requiring action.</td>
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
            What To Expect: Our Process
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
