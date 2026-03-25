import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Shield, DollarSign, TrendingUp, Target, Layers, Users } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "ERISA Fiduciary Support | PointOak Retirement Advisors",
  description: "Expert ERISA fiduciary support for retirement plans. 3(21) & 3(38) named fiduciary services protect plan sponsors from liability. Independent advice nationwide.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/fiduciary-support/"
  }
};

const highlights = [
  "Named fiduciary status from day one",
  "Over $120 billion in assets evaluated quarterly",
  "Complete independence with no conflicts of interest"
];

const subServices = [
  {
    title: "3(21) Fiduciary Services",
    description: "Co-fiduciary who provides investment advice and recommendations while you retain final decision-making authority and some liability.",
    href: "/corporate-retirement-plans/fiduciary-support/3-21/",
    icon: Shield,
  },
  {
    title: "3(38) Fiduciary Services",
    description: "Investment manager who assumes full discretionary authority over investment selection and monitoring, taking on that liability themselves.",
    href: "/corporate-retirement-plans/fiduciary-support/3-38/",
    icon: Shield,
  },
  {
    title: "ERISA Compliance & Oversight",
    description: "Stay current on all ERISA regulations with our comprehensive compliance monitoring and DOL audit preparation services.",
    href: "/corporate-retirement-plans/fiduciary-support/erisa-compliance/",
    icon: Layers,
  },
  {
    title: "Virtual Fiduciary File",
    description: "Comprehensive documentation system maintaining all fiduciary processes and procedures, creating the audit trail you need if the DOL comes calling.",
    href: "/corporate-retirement-plans/fiduciary-support/virtual-fiduciary-file/",
    icon: Target,
  },
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We conduct a comprehensive assessment of your current plan structure, fees, investments, and processes. You'll identify areas for improvement through detailed analysis."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We develop strategic recommendations on plan design, investments, and provider relationships. You receive actionable advice tailored to your organization's specific needs."
  },
  {
    number: 3,
    title: "Implement",
    description: "We help effect changes and provide ongoing monitoring and support. Your plan receives quarterly investment reviews and annual benchmarking to ensure continued success."
  }
];

const faqs = [
  {
    question: "How much does ERISA fiduciary support cost?",
    answer: "Fiduciary advisory services typically range from 20 basis points (0.20% of plan assets) with annual minimums around $20,000 and maximums capped at $100,000 for larger plans. We provide transparent pricing with no hidden revenue-sharing arrangements. Contact us for a custom quote based on your plan size and specific needs."
  },
  {
    question: "What makes PointOak different from other fiduciary advisors?",
    answer: "Three things set us apart: we generate over 90% of our revenue from retirement plans (true specialization, not generalists), we're independently owned with no parent company conflicts or proprietary products to push, and all our advisors act as named fiduciaries (3(21) or 3(38)) from day one."
  },
  {
    question: "What is the difference between a 3(21) and 3(38) fiduciary?",
    answer: "A 3(21) fiduciary is a co-fiduciary who provides investment advice and recommendations, but you retain final decision-making authority and some liability. A 3(38) investment manager assumes full discretionary authority over investment selection and monitoring, taking on that liability themselves. The 3(38) role provides maximum fiduciary protection for plan sponsors."
  },
  {
    question: "How long does it take to implement ERISA fiduciary support services?",
    answer: "Initial plan analysis and fiduciary documentation typically take 30-60 days depending on plan complexity. We begin acting as your named fiduciary immediately upon engagement, providing liability protection from day one. Ongoing services include quarterly investment monitoring and annual plan reviews."
  },
  {
    question: "What happens during a DOL audit of our retirement plan?",
    answer: "The DOL's Employee Benefits Security Administration may audit your plan to review fiduciary compliance, investment selections, fee arrangements, and participant disclosures. They closed 907 civil investigations in 2022, with 595 leading to monetary results. We act as your point of contact with the DOL and provide all required documentation from your Virtual 401(k) Fiduciary Files."
  },
  {
    question: "Can we delegate all fiduciary responsibilities to avoid liability?",
    answer: "You can transfer significant fiduciary liability by hiring a 3(38) investment manager for discretionary investment management and a 3(16) plan administrator for plan administration duties. However, plan sponsors retain some fiduciary responsibility for prudently selecting and monitoring these service providers."
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERISA Fiduciary Support for Retirement Plans",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Fiduciary Support",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function FiduciarySupportPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Fiduciary Support" }
        ]}
        title="ERISA Fiduciary Support for Retirement Plans"
        subtitle="You're responsible for your company's retirement plan, but navigating the maze of ERISA regulations feels overwhelming. PointOak specializes in protecting plan sponsors from fiduciary liability while ensuring your employees get the retirement benefits they deserve."
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
            Why Choose Us for ERISA Fiduciary Support?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              71% of plan sponsors have recently reassessed or plan to reassess their fiduciary responsibilities, and for good reason. The DOL recovered $1.4 billion from plans in 2022 alone. PointOak has been advising plan sponsors and participants since day one, remaining wholly focused on the retirement plan industry.
            </p>
            <p>
              What sets us apart is our independence and specialization. We generate over 90% of our revenue from working with corporate retirement plans. Our advisors are registered and act as fiduciaries under ERISA, serving as either 3(21) or 3(38) named fiduciaries with all clients. We apply a meticulous, technology-driven process, documenting everything to help protect you from liability.
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
            Our Fiduciary Services
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
            Common ERISA Fiduciary Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Personal liability exposure</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Settlements reaching $50-62M and DOL civil penalties adding 20% on top.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We act as your 3(21) or 3(38) named fiduciary, directly sharing or assuming liability.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Regulatory complexity</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">43% of plan sponsors are unaware of their full fiduciary responsibilities.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We stay current on all ERISA regulations and act as your DOL point of contact.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fee uncertainty</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">&quot;Reasonable fees&quot; isn&apos;t defined by ERISA; hidden revenue-sharing obscures costs.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Live Bid benchmarking reviews 450+ data points per provider using your actual data.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Investment monitoring burden</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">40,000+ options to evaluate; quarterly monitoring consumes time and expertise.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our 10-point scoring system evaluates $120B quarterly, handling all monitoring.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Documentation gaps</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">DOL audits with a six-year lookback reveal inadequate decision documentation.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Virtual 401(k) Fiduciary Files document every process and procedure.</td>
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
