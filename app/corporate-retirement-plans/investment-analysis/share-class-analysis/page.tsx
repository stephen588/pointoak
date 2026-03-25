import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Share Class Analysis for Plan Sponsors | PointOak",
  description: "Expert 401(k) share class analysis to identify lowest-cost mutual funds, protect fiduciaries, and maximize retirement savings. Independent advisors nationwide.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/investment-analysis/share-class-analysis/"
  }
};

const highlights = [
  "Independent analysis across all share classes",
  "90% revenue from retirement plans only",
  "Documented process for fiduciary protection"
];

const processSteps = [
  {
    number: 1,
    title: "Initial Share Class Assessment",
    description: "You provide current fund lineup details. We catalog all available share classes for the same fund across your platform."
  },
  {
    number: 2,
    title: "Eligibility Analysis",
    description: "We determine which institutional share classes your plan qualifies for based on assets held and identify opportunities to save money."
  },
  {
    number: 3,
    title: "Cost-Benefit Recommendations",
    description: "You receive analysis comparing your fund&apos;s expense ratio against all available options, with projections showing how lower fees compound over a given period."
  },
  {
    number: 4,
    title: "Implementation Support",
    description: "We coordinate with your recordkeeper to implement changes, ensuring no sales charges or breakpoint discounts are overlooked during transitions."
  },
  {
    number: 5,
    title: "Ongoing Monitoring",
    description: "Quarterly reviews track whether most funds maintain appropriate pricing as annual contributions grow your plan or participants change jobs and trigger annual withdrawals."
  }
];

const faqs = [
  {
    question: "How much does 401(k) share class analysis cost nationwide?",
    answer: "Investment analysis fees vary based on plan assets held and complexity. Most retirement plan consulting engagements are structured as basis points on assets (typically 0.25% for larger plans) or flat annual fees. PointOak provides transparent pricing during initial consultations with no sales charges or front end load costs. We discuss fee structures that align with your budget and protect participants&apos; retirement savings."
  },
  {
    question: "What makes PointOak different from other financial advisors nationwide?",
    answer: "Three differentiators: We generate over 90% of revenue exclusively from employer sponsored retirement plan services (true specialists analyzing mutual funds daily, not generalists). All advisors act as 3(21) or 3(38) named fiduciaries, assuming direct liability for investment recommendations. Our methodology evaluates over $120 billion quarterly, identifying which mutual fund share classes offer lower fees and documenting the process to protect plan sponsors from fiduciary liability."
  },
  {
    question: "Is an R6 share or institutional share better for my retirement plan?",
    answer: "Both typically offer lower costs than retail share classes, but eligibility and pricing vary. R6 shares are specifically designed for employer sponsored retirement plans with $10+ million in assets and eliminate 12b-1 fees entirely. Institutional shares serve large institutional investors broadly and may have different minimums. We compare each fund&apos;s expense ratio across all available options, including management fees and other expenses, to determine which share class structure saves the most money for your specific plan and recordkeeper platform."
  },
  {
    question: "How often should mutual fund share classes be reviewed nationwide?",
    answer: "DOL regulations require fee benchmarking at least every three years to ensure costs remain reasonable. Best practice involves annual reviews because share class eligibility changes as annual contributions and employer match provisions grow your plan&apos;s assets held. When you cross $10 million, $50 million, or $100 million, new institutional share classes with lower fees typically become available. We conduct quarterly monitoring to identify exactly when asset growth triggers opportunities affecting participants&apos; retirement savings."
  },
  {
    question: "How do I know if my plan really needs share class analysis?",
    answer: "Warning signs include: participants invested in the same mutual fund at higher retail share classes when institutional options exist, any fund&apos;s expense ratio above 0.5% for index investments or 1.0% for actively managed bond mutual funds, plan assets exceeding $10 million without R6 share access, or no documented review in three-plus years. If individual investors in your plan pay higher annual fees than institutional investors would for the same fund, analysis protects you from fiduciary breach claims and helps participants save money over time."
  },
  {
    question: "Do you provide ongoing monitoring after implementing share class changes?",
    answer: "Yes. Our quarterly investment monitoring tracks whether mutual funds maintain appropriate share classes and alerts plan sponsors when fund managers introduce new lower-cost options. We review all investments across different classes, compare management fees and other expenses, and document decisions for your fiduciary file. This ongoing process satisfies your duty under ERISA to monitor investment options continuously, especially as participants make annual contributions or annual withdrawals that affect total assets held in each fund."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Share Class Analysis",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Share Class Analysis and Fee Optimization",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function ShareClassAnalysisPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Investment Analysis", href: "/corporate-retirement-plans/investment-analysis" },
          { label: "Share Class & Fee Analysis" }
        ]}
        title="401(k) Share Class Analysis for Plan Sponsors"
        subtitle="You&apos;re responsible for selecting mutual fund share classes for your employer sponsored retirement plan, but navigating the same fund offered in different classes with varying mutual fund fees is overwhelming. PointOak provides independent analysis that identifies lowest-cost fund share classes, protects your retirement savings, and documents your fiduciary process nationwide."
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
            Why Choose Us for 401(k) Share Class Analysis Nationwide?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Average equity mutual fund expense ratios in 401(k) plans fell 66% from 0.76% to 0.26% between 2000-2024, but many plan sponsors still pay higher fees because they don&apos;t know which share classes their plan qualifies for. PointOak specializes exclusively in employer sponsored retirement plan consulting, helping you access these lower costs.
            </p>
            <p>
              We generate over 90% of revenue from retirement plan services, not general financial advisor work. Our advisors act as 3(21) or 3(38) named fiduciaries from day one, and our proprietary methodology evaluates over $120 billion in retirement plan assets quarterly. This specialization means you get expert guidance on complex mutual fund share class decisions.
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
            Our Investment Analysis Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Share Class Fee Review</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our share class fee review evaluates every mutual fund in your plan to identify whether the same fund is available in lower-cost share classes that match your plan size. We analyze each fund&apos;s expense ratio, including management fees, 12b-1 fees, and other expenses across R shares, institutional share classes, and so-called clean shares. Most funds offer 6-8 different classes with fees that vary widely, and we identify which options minimize costs for your participants&apos; retirement savings.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Investment Policy Statement Development</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A comprehensive Investment Policy Statement establishes guidelines for mutual fund share class selection and documents criteria for evaluating investment options in your retirement plan. We draft IPS language addressing how fund managers are evaluated, what constitutes reasonable mutual fund fees, and when share classes should be reviewed. This protects plan sponsors from liability by documenting a prudent process for all investment decisions.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Quarterly Investment Monitoring</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our quarterly monitoring tracks whether your mutual funds maintain appropriate share classes as assets held in the plan grow or new lower-cost options become available for the same mutual fund. We measure fund performance and expenses quarterly using institutional measurement techniques. Individual investors in retail share classes often pay higher fees, but employer sponsored retirement plans can access institutional investors&apos; pricing when plan size qualifies.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fund Replacement Recommendations</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                When analysis reveals mutual funds with excessive annual fees or inappropriate share classes, we recommend specific replacements including target date funds, bond mutual funds, and equity options with lower costs. We identify whether different share classes of one fund make sense or if changing to different fund managers offers better value. Recommendations include how each option affects participants&apos; financial goals, and we provide additional details on sales charges, deferred sales charges, and front end load structures that may apply.
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
            Common 401(k) Share Class Challenges Nationwide
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Retail share classes when institutional pricing available</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Plan sponsors pay retail share classes with higher management fees and annual fees of 1.5% when the same mutual fund offers institutional share options at 0.5% for plans over $10 million in assets.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We identify all institutional share classes your plan qualifies for, compare each fund&apos;s expense ratio across different classes, and document potential savings of tens of thousands annually for participant accounts.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">C shares with ongoing 12b-1 fees</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Mutual funds sold as &quot;no load funds&quot; still charge C shares&apos; ongoing 12b-1 fees of 1% annually, which exceed the initial investment cost of A shares&apos; front end sales charge over a certain period.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We calculate total cost of ownership across different share classes over time, showing when lower cost A shares or institutional options reduce total expenses and associated fees for your participants.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Revenue sharing hidden in mutual fund fees</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">12b-1 fees and sub-TA fees pay recordkeepers and financial advisors, but disclosure documents don&apos;t clearly show how these other expenses reduce money available for investing in participant accounts.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our Live Bid benchmarking reveals all associated fees across 450+ data points, creates leverage to negotiate better pricing, and identifies funds where you pay less through different fee structures.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Plan growth without share class updates</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Your employer match and annual contribution increases pushed assets over $50 million, triggering eligibility for lower fees in institutional share classes that fund managers offer, but nobody reviewed available options.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Annual reviews ensure mutual fund share classes align with current plan size, and we proactively identify when growth creates opportunities to save costs for participants&apos; financial goals.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Same fund with 8+ share class options</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">One fund family offers the same fund in R1-R6 shares, A shares, C shares, institutional shares, clean shares, and others, each with different front end load structures, management fees, and other expenses.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our 10-point methodology evaluates all available different share classes for bonds, target date funds, and equity investments, showing exactly which option minimizes total costs over any given period for your specific situation.</td>
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
