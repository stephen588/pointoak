import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "ERISA Compliance & Oversight | PointOak Retirement Advisors",
  description: "Expert ERISA compliance support with 3(21)/3(38) fiduciary services. Protect your plan from DOL audits. 10,000+ benchmarks annually. Contact us today.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/fiduciary-support/erisa-compliance/"
  }
};

const highlights = [
  "Named 3(21) or 3(38) fiduciaries under ERISA",
  "Over 10,000 benchmarks performed annually",
  "Virtual 401(k) Fiduciary Files for audit protection"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We conduct a comprehensive review of your current plan structure, fees, investments, and compliance processes to identify areas for improvement and potential ERISA violations that could subject your business to penalties."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We provide strategic recommendations on plan design, investment solutions, and provider relationships, with clear documentation of our fiduciary process and the expertise we apply in determining the best path forward for your organization."
  },
  {
    number: 3,
    title: "Implement",
    description: "We help you effect changes and provide ongoing support, including quarterly investment reviews and annual benchmarking, with everything documented in your Virtual Fiduciary File to maintain compliance with ERISA requirements and protect you during audits."
  }
];

const faqs = [
  {
    question: "How much does ERISA compliance support cost?",
    answer: "ERISA compliance services vary based on plan size, complexity, and the level of fiduciary responsibility you delegate. Our fees are transparent and clearly outlined before engagement. We provide comprehensive ERISA services including 3(21) or 3(38) fiduciary support, annual benchmarking to ensure reasonable costs, quarterly investment monitoring, and Virtual Fiduciary File maintenance. The cost of compliance is significantly less than the risk of Department of Labor fines and penalties."
  },
  {
    question: "What makes PointOak Retirement Advisors different from other ERISA compliance firms?",
    answer: "Three things: we generate over 90% of our revenue from retirement plans and employee benefit plans (we&apos;re specialists, not generalists managing various business lines), our advisors are registered and act as named fiduciaries under ERISA from day one (3(21) or 3(38) with all clients providing direct liability protections), and we perform over 10,000 benchmarks per year using our Live Bid process with 450+ data points per provider."
  },
  {
    question: "What&apos;s the difference between a 3(21) and 3(38) fiduciary?",
    answer: "A 3(21) co-fiduciary provides investment recommendations and guidance while you retain final decision-making authority and fiduciary responsibility for plan investments and managing plan assets. A 3(38) investment manager assumes full discretionary responsibility for selecting, managing, monitoring, and benchmarking the investment offerings available in your retirement plans. With a 3(38), we take on the investment fiduciary liability under ERISA law."
  },
  {
    question: "How long does it take to implement ERISA compliance improvements?",
    answer: "Initial analysis and recommendations typically take 30-60 days depending on plan complexity and whether you&apos;re addressing retirement plans, group health plans, or other welfare benefit plans. Implementation timelines vary based on the changes needed. Provider transitions generally take 90-120 days with careful planning to minimize disruption to participants. Investment lineup changes can be implemented more quickly, often within 30-45 days."
  },
  {
    question: "How do I know if our plan needs better ERISA compliance support?",
    answer: "Warning signs include: no Investment Policy Statement or one that hasn&apos;t been updated in years, Investment Committee meetings not documented or held irregularly, uncertainty about whether your fees are reasonable under ERISA requirements, no benchmarking study in the last three years, participant complaints about investment options or fees, and concerns about personal liability exposure under federal law."
  },
  {
    question: "Do you offer ongoing support after implementation?",
    answer: "Yes. ERISA compliance is not a one-time project but an ongoing fiduciary responsibility for employers subject to the Employee Retirement Income Security Act. We provide continuous ongoing support including quarterly investment monitoring using our proprietary 10-point scoring system, annual benchmarking studies, regular regulatory updates and fiduciary education, Investment Committee meeting support with complete documentation, and access to our Virtual 401(k) Fiduciary Files."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERISA Compliance & Oversight Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "ERISA Compliance Support",
  areaServed: { "@type": "Country", name: "United States" }
};

export default function ERISACompliancePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Fiduciary Support", href: "/corporate-retirement-plans/fiduciary-support" },
          { label: "ERISA Compliance & Oversight" }
        ]}
        title="Expert ERISA Compliance Support for Plan Sponsors"
        subtitle="The maze of Department of Labor regulations and fiduciary responsibilities can feel overwhelming. PointOak Retirement Advisors has been helping plan sponsors navigate ERISA compliance since day one, serving as your advocate to protect you from liability while ensuring your employees have access to a successful retirement plan."
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
            Why Choose Us for ERISA Compliance Support?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Last year, 71% of ERISA plan audits resulted in monetary penalties, with employers paying an average of $2.7 million each in fines, penalties, and plan restitution. Staying on top of the ever-changing regulations under the Employee Retirement Income Security Act requires specialized expertise. PointOak generates over 90% of its revenue from working with corporate retirement plans and employee benefit plans, which means we are fully dedicated to helping you achieve successful outcomes while protecting you from fiduciary risk.
            </p>
            <p>
              What sets us apart is our independence and process. As an independently owned firm, we offer truly independent ERISA compliance consulting without being driven by proprietary products of a parent company. We stay on top of Department of Labor mandates, maintain Virtual 401(k) Fiduciary Files for all clients, and perform over 10,000 benchmarks per year using our proprietary Live Bid process.
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
            Our ERISA Compliance Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fiduciary Support</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our fiduciary support services help plan sponsors meet their fiduciary obligations under federal law and minimize liability exposure by acting as your 3(21) or 3(38) named fiduciary under the Employee Retirement Income Security Act. We provide oversight and guidance for managing fiduciary duties, including Investment Policy Statement development, Investment Committee services, regulatory updates and education, and comprehensive annual fiduciary plan reviews.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Provider & Fee Benchmarking</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our provider and fee benchmarking services help plan sponsors select and monitor their plan provider while ensuring fees remain reasonable as required by ERISA regulations and the Department of Labor. We conduct annual custom Live Bid benchmarking studies that review over 450 data points per bidder, using your specific plan information rather than average demographics. This analysis helps you evaluate whether plan assets are being managed prudently.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Investment Analysis</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                With over 40,000 investment options available in the market, selecting and monitoring appropriate investments for plan participants can feel overwhelming. Our investment analysis services help plan sponsors build and maintain a low-cost, diversified investment menu that meets your fiduciary responsibilities under the Internal Revenue Code and ERISA requirements. Our methodology evaluates over $120 billion in retirement plan assets quarterly.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Plan Design</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our plan design services help employers move beyond cookie-cutter plans to create retirement programs optimized for their specific company needs and culture while addressing compliance issues. We conduct comprehensive current plan design reviews, analyze your organizational goals, and provide guidance on automatic enrollment and auto-escalation features that drive participation while maintaining compliance with ERISA mandates and federal law.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Education & Communications Programs</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our education and communications programs help create a financially savvy workforce by providing comprehensive guidance on retirement planning, debt management, and investment strategies while ensuring proper disclosures are distributed to plan participants. Licensed securities advisors lead interactive sessions covering retirement savings strategies, creating an environment that encourages active participation.
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
            Common ERISA Compliance Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Overwhelming regulatory complexity</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Department of Labor regulations constantly changing, SECURE 2.0 provisions rolling out through 2026, confusion about ERISA requirements versus optional features for retirement plans.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We stay on top of ever-changing fiduciary rules and ERISA law so we can implement best practices to keep you in compliance without the burden falling on your team.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fee reasonableness uncertainty</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">No clear definition of &quot;reasonable&quot; fees under ERISA, lack of transparency from current providers about costs and coverage, uncertainty about whether plan assets are being prudently managed.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our Live Bid benchmarking process analyzes 450+ data points to determine fee reasonableness and provide solutions for cost reduction through renegotiation or provider switches.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Inadequate fiduciary documentation</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Investment Committee meetings not documented properly, no Investment Policy Statement or outdated IPS, missing proof of prudent process if audited by Department of Labor.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We maintain Virtual 401(k) Fiduciary Files for all clients, documenting everything to help protect you from liability during federal audits and demonstrate your fiduciary duties were fulfilled appropriately.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Investment monitoring gaps</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Difficulty tracking performance across 40,000+ available funds, uncertainty about when to remove underperforming options from the plan, lack of quarterly oversight required by fiduciary obligations.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our proprietary 10-point scoring system evaluates $120 billion in plan assets quarterly, providing clear pass/fail metrics and specific fund replacement recommendations that act in participants&apos; best interests.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Approaching 3-year benchmark window</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Department of Labor and ERISA regulations require fee benchmarking at least every three years, creating urgency as deadline approaches without proper documentation of provider evaluation.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We perform annual benchmarking to ensure employers are always within the three-year requirement under federal law, with complete documentation of your prudent process for selecting and monitoring providers.</td>
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
