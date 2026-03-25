import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FileText, BarChart3, Users, PieChart } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Investment Analysis for Plan Sponsors | PointOak",
  description: "Specialized 401(k) investment analysis with 3(21)/3(38) fiduciary protection. Quarterly monitoring, proprietary scoring. Protect your plan now.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/investment-analysis/"
  }
};

const highlights = [
  "Named 3(21) or 3(38) fiduciary status",
  "Proprietary 10-point investment scoring methodology",
  "Quarterly monitoring of $120+ billion in assets"
];

const subServices = [
  {
    title: "Investment Policy Statement Development",
    description: "Your Investment Policy Statement establishes the foundation for prudent investment selection and ongoing monitoring aligned with your plan demographics and retirement savers&apos; needs.",
    href: "/corporate-retirement-plans/investment-analysis/ips/",
    icon: FileText,
  },
  {
    title: "Fund Monitoring & Review",
    description: "Quarterly investment monitoring keeps your retirement savings plan aligned with ERISA&apos;s ongoing fiduciary obligations using institutional measurement techniques.",
    href: "/corporate-retirement-plans/investment-analysis/fund-monitoring/",
    icon: BarChart3,
  },
  {
    title: "Manager Selection",
    description: "Fund replacement recommendations provide specific guidance on when to remove underperforming investments and which alternatives to add with clear criteria for making investment decisions.",
    href: "/corporate-retirement-plans/investment-analysis/manager-selection/",
    icon: Users,
  },
  {
    title: "Share Class Analysis",
    description: "Investment fees represent as much as 90% of total 401(k) plan costs. We analyze your current fund lineup to identify opportunities for fee reduction through share class upgrades.",
    href: "/corporate-retirement-plans/investment-analysis/share-class-analysis/",
    icon: PieChart,
  },
];

const processSteps = [
  {
    number: 1,
    title: "Analyze Current Plan Structure",
    description: "Call or complete our online contact form. We&apos;ll schedule a discovery call within 48 hours to understand your retirement savings plan."
  },
  {
    number: 2,
    title: "Evaluate Investment Lineup and Fees",
    description: "We conduct comprehensive due diligence on your current investment options, fees, and provider arrangements. You&apos;ll receive detailed analysis within two weeks."
  },
  {
    number: 3,
    title: "Optimize Through Strategic Recommendations",
    description: "You receive our written recommendations for investment menu improvements, fee reductions, and asset allocation enhancements. We review findings together and answer questions."
  },
  {
    number: 4,
    title: "Implement Changes and Ongoing Monitoring",
    description: "We work with your provider to effect approved changes and establish quarterly monitoring. Your Virtual 401(k) Fiduciary File documents everything for audit protection."
  }
];

const faqs = [
  {
    question: "How much does 401(k) investment analysis cost?",
    answer: "Investment analysis pricing depends on plan size, complexity, and service level. Most mid-sized plans invest 0.25% to 0.60% of assets for comprehensive fiduciary services including quarterly monitoring. We provide transparent fee proposals with no hidden costs. Our benchmarking often identifies fee savings that exceed our advisory costs. Many plans find the percentage of assets model aligns our interests with growing participant retirement savings."
  },
  {
    question: "What makes PointOak different from other investment advisors?",
    answer: "Three key differences set us apart. First, we generate over 90% of our revenue from corporate retirement plans, not wealth management, so we&apos;re true specialists. Second, all our advisors can act as named 3(21) or 3(38) fiduciaries under ERISA, providing direct liability protection. Third, our proprietary 10-point pass/fail methodology evaluates $120+ billion quarterly using institutional measurement techniques."
  },
  {
    question: "Is a target date fund or custom fund lineup better for my plan?",
    answer: "Target date funds work well for plans where employees lack investment knowledge and you want simplicity. Custom lineups offer more control over asset allocation and potentially lower fees but require ongoing fiduciary oversight. We analyze your participant demographics, risk tolerance levels, and plan objectives to recommend the right approach. Many plans use target date funds as the qualified default investment alternative while offering core funds for engaged participants."
  },
  {
    question: "How long does investment analysis usually take?",
    answer: "Initial investment lineup evaluation typically takes two weeks from data receipt to final report. Implementation of approved changes depends on recordkeeper timelines, usually 30 to 60 days. Quarterly monitoring becomes routine once established on a regular basis. Annual comprehensive reviews align with your plan year. We handle provider coordination to minimize disruption to plan contributions and participant access."
  },
  {
    question: "How do I know if I really need professional investment analysis?",
    answer: "If you&apos;re responsible for selecting or monitoring 401(k) plan investments, ERISA makes you a fiduciary requiring &quot;prudent expert&quot; knowledge. Most plan sponsors lack the expertise, time, or systems to evaluate thousands of mutual funds quarterly. Warning signs include not knowing your funds&apos; expense ratios, no documented monitoring process, or uncertainty about fiduciary liability. The DOL expects documented prudent process regardless of plan size."
  },
  {
    question: "What is the difference between a 3(21) and 3(38) investment fiduciary?",
    answer: "A 3(21) co-fiduciary provides investment recommendations and guidance, but you retain final decision authority and share fiduciary responsibility. A 3(38) investment manager assumes full discretionary authority for selecting and monitoring plan investments, assuming that fiduciary liability. Most plan sponsors prefer 3(21) services to maintain control while getting expert advice and liability protection for their retirement savings plan."
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Investment Analysis Services for Plan Sponsors",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Investment Analysis",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function InvestmentAnalysisPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Investment Analysis" }
        ]}
        title="401(k) Investment Analysis Services for Plan Sponsors"
        subtitle="You&apos;re overwhelmed by 40,000+ mutual funds and ERISA&apos;s &quot;prudent expert&quot; standard. PointOak Retirement Advisors provides specialized 401(k) investment analysis that protects you from fiduciary liability while building optimal investment options for your plan participants."
      />

      {/* Highlights Bar */}
      <section className="bg-cloud-blue py-8 md:py-10">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                <p className="text-text-gray font-outfit text-sm md:text-base leading-relaxed">{highlight}</p>
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
            Why Choose Us for 401(k) Investment Analysis?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              40% of plan participants don&apos;t fully understand fee information, and 41% don&apos;t even know they pay fees. With over 90% of our revenue generated from corporate retirement plans, PointOak brings focused expertise to investment due diligence that generalist financial advisors simply can&apos;t match. Our proprietary 10-point pass/fail methodology evaluates over $120 billion in retirement plan assets every quarter.
            </p>
            <p>
              What sets us apart is our registered named fiduciary status under ERISA. We act as your 3(21) co-fiduciary or 3(38) investment manager, providing direct liability protection while you maintain control. Our meticulous, technology-driven process documents everything in your Virtual 401(k) Fiduciary File to protect you during DOL audits.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Sub-Service Cards */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Our Investment Management Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="bg-white rounded-lg p-8 border border-gray-100 hover:shadow-lg hover:border-navy/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-cloud-blue flex items-center justify-center flex-shrink-0 group-hover:bg-navy/10 transition-colors">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-outfit text-navy text-xl font-medium mb-3 group-hover:text-navy/80 transition-colors">
                        {service.title}
                      </h3>
                      <p className="font-outfit text-dark-gray text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Challenges Table */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Common 401(k) Investment Analysis Challenges for Plan Sponsors
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Overwhelming fund universe</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Selecting from 40,000+ available mutual funds without expertise to evaluate performance, fees, or risk level across asset classes and investment strategy.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our 10-point pass/fail methodology evaluates fund options using institutional measurement techniques applied to $120+ billion quarterly.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fiduciary liability exposure</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">ERISA Section 404(a)(1)(B) requires &quot;prudent expert&quot; standard for investment selection. Plan sponsors lack documentation to prove prudent process during DOL audits.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We act as your named 3(21) or 3(38) fiduciary, providing direct liability protection and complete documentation in Virtual Fiduciary Files.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Hidden and excessive fees</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Revenue sharing, 12b-1 fees, and wrap fees buried in expense ratios reduce retirement savings. GAO study shows 41% of participants don&apos;t know they pay fees.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Annual benchmarking with 450+ data points per provider identifies hidden costs and creates leverage to negotiate better fee structures.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Infrequent monitoring allows drift</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Many plans review investments only at 3-year benchmark intervals. Fund managers change, strategies drift, and performance deteriorates between reviews despite market downturns.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Quarterly monitoring using proprietary scoring system flags underperforming funds immediately. You receive clear pass/fail reports every 90 days.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Target date fund confusion</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Target date funds&apos; glide paths may not match participant demographics. DOL requires specific evaluation of to-retirement vs. through-retirement approaches and fee levels.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Multi-step suitability analysis evaluates participant characteristics, glide path alignment, performance metrics, and fee competitiveness with documentation.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Lack of independent advice</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Recordkeeper-affiliated advisors have conflicts favoring proprietary funds. Generalist wealth managers lack retirement plan specialization and ERISA expertise.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">As independently owned firm generating 90%+ revenue from retirement plans, we provide conflict-free advice with deep regulatory knowledge.</td>
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

      {/* About PointOak */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            About PointOak Retirement Advisors
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            PointOak Retirement Advisors is an independent retirement plan consulting firm headquartered in McLean, Virginia, serving plan sponsors nationwide. The firm generates over 90% of its revenue from corporate retirement plans and acts as a 3(21) or 3(38) named fiduciary under ERISA with every client. PointOak evaluates over $120 billion in retirement plan assets quarterly using a proprietary 10-point pass/fail scoring system and conducts more than 10,000 plan benchmarks annually.
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
