import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Target, TrendingUp, Settings, FileCheck } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Target Date Fund Consulting | PointOak Retirement Advisors",
  description: "Target date fund consulting for plan sponsors nationwide. Independent TDF evaluation, glide path analysis, and DOL compliance. Named fiduciary protection.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/tdf-consulting/"
  }
};

const highlights = [
  "Independent analysis with no fund family conflicts",
  "Named fiduciary status under ERISA 3(21) and 3(38)",
  "Documented process for audit protection"
];

const subServices = [
  {
    title: "TDF Selection & Suitability",
    description: "We analyze participant demographics, savings rates, and retirement patterns to determine if a &quot;to retirement&quot; or &quot;through retirement&quot; approach fits your plan with complete documentation for fiduciary protection.",
    href: "/corporate-retirement-plans/tdf-consulting/tdf-selection/",
    icon: Target,
  },
  {
    title: "Glide Path Analysis",
    description: "We develop side-by-side comparisons of equity exposure, asset allocation strategies, and risk levels across TDF families to match strategy to participant retirement patterns.",
    href: "/corporate-retirement-plans/tdf-consulting/glide-path/",
    icon: TrendingUp,
  },
  {
    title: "Custom TDF Solutions",
    description: "We help you evaluate whether off-the-shelf TDFs from major fund families meet your needs, or if a customized glide path designed specifically for your participant population makes sense.",
    href: "/corporate-retirement-plans/tdf-consulting/custom-tdf/",
    icon: Settings,
  },
  {
    title: "TDF Documentation & Compliance",
    description: "Our evaluation methodology addresses every DOL requirement, creating a defensible record that demonstrates prudent process with quarterly monitoring and comprehensive fiduciary file documentation.",
    href: "/corporate-retirement-plans/tdf-consulting/tdf-documentation/",
    icon: FileCheck,
  },
];

const processSteps = [
  {
    number: 1,
    title: "Analyze Current State",
    description: "We review your existing target date funds and participant demographics to identify gaps."
  },
  {
    number: 2,
    title: "Evaluate Options",
    description: "You receive detailed comparison of TDF families, glide paths, fees, and suitability to your plan."
  },
  {
    number: 3,
    title: "Document Selection",
    description: "We create comprehensive documentation showing your prudent evaluation process for fiduciary protection."
  },
  {
    number: 4,
    title: "Implement Changes",
    description: "Our team works with your recordkeeper to transition participants and update plan documents."
  },
  {
    number: 5,
    title: "Monitor Ongoing",
    description: "You get quarterly reports on TDF performance, fees, and adherence to investment objectives."
  }
];

const faqs = [
  {
    question: "How much does target date fund consulting cost?",
    answer: "TDF consulting fees vary based on plan size, complexity, and scope of services. Our fees are typically structured as an annual retainer or percentage of plan assets. Most clients find the cost is far less than the potential liability exposure from selecting target date funds without proper documentation. We provide transparent pricing with no hidden charges."
  },
  {
    question: "What makes PointOak different from other TDF consulting firms?",
    answer: "Three critical differences set us apart. First, we generate over 90% of our revenue from retirement plans, so we&apos;re true specialists rather than generalists. Second, we&apos;re independently owned with no recordkeeper or fund family affiliations, eliminating conflicts of interest. Third, all our advisors can act as 3(21) or 3(38) named fiduciaries, providing direct liability protection."
  },
  {
    question: "How long does the TDF selection process usually take?",
    answer: "A comprehensive target date fund evaluation typically takes 4-6 weeks from initial analysis through final documentation. This timeline includes reviewing participant demographics, comparing glide paths across fund families, evaluating fees and performance, and preparing detailed reports. Implementation timing depends on your recordkeeper&apos;s processes and any participant communication requirements."
  },
  {
    question: "What is the difference between &quot;to&quot; and &quot;through&quot; retirement glide paths?",
    answer: "A &quot;to retirement&quot; glide path reaches its most conservative asset allocation at the target date, assuming participants will withdraw all savings when they retire. A &quot;through retirement&quot; glide path continues reducing equity exposure for 10-20 years past the target date, maintaining some growth potential for participants who draw down gradually. The right choice depends on your participant characteristics and withdrawal tendencies."
  },
  {
    question: "How do I choose the right target date fund for my 401(k) plan?",
    answer: "Start by analyzing your participant demographics including age distribution, salary levels, and expected retirement patterns. Then evaluate which glide path philosophy aligns with those characteristics. Compare fees to ensure you&apos;re getting appropriate share classes for your plan size. Finally, assess underlying fund quality and manager tenure. Document each step of this evaluation process for fiduciary protection."
  },
  {
    question: "What are the risks of target date funds?",
    answer: "Target date funds carry several important risks plan sponsors must understand. The principal value is not guaranteed at any time, including at the target date. Participants can lose money if the stocks and bonds owned by the fund decline. Different TDFs with the same target date may have vastly different risk levels due to glide path variations. Plus, participants who don&apos;t understand the fund&apos;s assumptions may end up with unsuitable allocations."
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Target Date Fund Consulting for Plan Sponsors",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Target Date Fund Consulting",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function TDFConsultingPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Target Date Fund Consulting" }
        ]}
        title="Target Date Fund Consulting for Plan Sponsors Who Want Real Answers"
        subtitle="You&apos;ve probably heard that the DOL expects plan sponsors to evaluate target date funds carefully before selection. But how many times have you wondered which glide path actually fits your participant demographics? We help you meet fiduciary obligations through documented TDF evaluation that protects you from liability."
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
            Why Choose Us for Target Date Fund Consulting?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Target date funds now hold $4.0 trillion in assets, making them the dominant investment in 401(k) plans. With 80% of plans offering TDFs and 60% of new contributions flowing into these funds, the DOL&apos;s 2013 guidance on proper selection isn&apos;t optional. PointOak specializes exclusively in retirement plan consulting, generating over 90% of our revenue from corporate plans.
            </p>
            <p>
              What sets us apart is our independence. We&apos;re not affiliated with any recordkeeper or fund family, so our TDF recommendations serve only your participants&apos; best interests. Acting as your 3(21) or 3(38) named fiduciary, we provide documented evaluation processes that protect you if audited. Our methodology evaluates glide path suitability, fees, underlying fund quality, and participant tendencies.
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
            Our Target Date Fund Consulting Services
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
            Common Target Date Fund Challenges for Plan Sponsors
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Glide path confusion</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Target date funds with identical target dates can have 40% variance in equity allocation. Plan sponsors lack framework to determine which approach fits their employees.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We evaluate participant characteristics and savings patterns to recommend glide paths aligned with your workforce, fully documented for compliance.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">DOL compliance gaps</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">The DOL&apos;s 2013 guidance requires fiduciaries to evaluate multiple factors before TDF selection. Most plan sponsors don&apos;t know what those factors are or how to document the process.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our evaluation methodology addresses every DOL requirement, creating a defensible record that demonstrates prudent process if you&apos;re audited.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Demographic mismatch</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Off-the-shelf target date funds are designed for average investors, but your participants may have different income levels, retirement age expectations, or savings rates.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We analyze your specific participant tendencies and demographics to determine if traditional TDFs fit or if customization would better serve employees.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fee transparency issues</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Understanding whether your plan is getting appropriate share classes for your size is complex. Many sponsors overpay without realizing it.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We benchmark TDF expenses against plans of similar size and provide leverage to negotiate better fees or identify lower-cost alternatives.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Recordkeeper conflicts</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Advisors affiliated with recordkeepers or fund families face pressure to recommend proprietary products, even when better options exist.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">As an independent firm with no fund family ties, we evaluate all options objectively and recommend only what serves your participants.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Monitoring gaps</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Many plans select target date funds once, then fail to review them quarterly. Changes in underlying funds, fees, or managers go unnoticed until problems emerge.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our ongoing monitoring catches issues early with documented quarterly reviews that demonstrate continuous fiduciary oversight.</td>
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
