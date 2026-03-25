import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Retirement Plan Optimization Services | PointOak Retirement Advisors",
  description: "Retirement plan optimization for plan sponsors nationwide. Named 3(21)/3(38) fiduciary services, Live Bid benchmarking, and investment analysis. 90%+ revenue from retirement plans. Get in touch.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/plan-design/optimization/"
  }
};

const highlights = [
  "Named 3(21) or 3(38) fiduciary status",
  "90%+ revenue from retirement plans only",
  "$120 billion in retirement assets evaluated quarterly"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We review your plan&apos;s investments, fees, and processes to identify opportunities for more retirement income."
  },
  {
    number: 2,
    title: "Optimize",
    description: "You receive strategies for adjusting asset allocation, plan design, and provider relationships aligned with financial goals."
  },
  {
    number: 3,
    title: "Implement",
    description: "We handle implementation details, allowing employees to benefit from changes while you focus on business."
  },
  {
    number: 4,
    title: "Monitor",
    description: "Quarterly reviews ensure your defined contribution plan maintains value and supports lifetime income goals."
  }
];

const faqs = [
  {
    question: "How much does retirement plan optimization cost?",
    answer: "Fees typically range 0.10%-0.40% of assets depending on plan size and scope. We provide transparent pricing showing value delivered. Our process ensures total plan costs support employees building wealth for their future retirement."
  },
  {
    question: "What makes PointOak different?",
    answer: "We generate 90%+ revenue from retirement plans (not generalists). All advisors act as named fiduciaries. Independence means guidance without proprietary products. Our 10,000+ annual benchmarks demonstrate particular focus on plan sponsor outcomes and employee benefits."
  },
  {
    question: "How often should 401(k) plans be benchmarked?",
    answer: "DOL recommends every three years minimum. Annual reviews are most effective ways to maintain competitive fees. Our Live Bid process uses current data for accurate analysis."
  },
  {
    question: "What is 3(21) versus 3(38) fiduciary?",
    answer: "A 3(21) provides guidance while you retain decisions. A 3(38) takes discretionary control over investment selection. Both decrease risk of personal liability."
  },
  {
    question: "How do you evaluate investments?",
    answer: "We measure risk factors, expense ratios, peer rankings, and manager tenure. Our 10-point system helps with maximizing return potential across retirement accounts."
  },
  {
    question: "Can plan design increase employee savings?",
    answer: "Yes. Auto-enrollment and employer matches significantly boost personal savings rates. Taking advantage of these features drives better retirement income outcomes for employees."
  },
  {
    question: "Do you help with tax-efficient strategies?",
    answer: "We provide guidance on tax-deferred accounts, tax-free accounts, Roth conversions, and tax brackets to help employees optimize income and build long-term financial security."
  },
  {
    question: "How do retirees benefit from plan optimization?",
    answer: "Better investment options, lower fees, and improved plan design create more retirement income. Participants approaching average retirement age gain guaranteed lifetime income potential."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Retirement Plan Optimization Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Retirement Plan Optimization",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function PlanDesignOptimizationPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Plan Design", href: "/corporate-retirement-plans/plan-design" },
          { label: "Plan Design Optimization" }
        ]}
        title="Retirement Plan Optimization Services for Plan Sponsors Nationwide"
        subtitle="Your retirement plan demands more attention than you have time to give. Between ERISA regulations, investment monitoring, and fee benchmarking, fiduciary responsibilities keep growing. PointOak Retirement Advisors helps plan sponsors achieve better retirement outcomes and long-term financial security for employees."
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
            Why Choose Us for Retirement Plan Optimization?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              The DOL recovered $1.4 billion in FY 2023 from ERISA enforcement, making fiduciary liability protection essential for plan sponsors managing retirement accounts. PointOak generates over 90% of revenue from corporate retirement plans, with particular focus on helping private sector employers achieve financial goals for their workforce.
            </p>
            <p>
              Our independence makes a significant difference. We provide guidance without pressure to push proprietary products. Our advisors act as named fiduciaries, allowing employees to benefit from unbiased investment strategies and optimizing income potential in their retirement savings.
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
            Our Retirement Plan Optimization Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fiduciary Support</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Your fiduciary support needs extend beyond compliance. We act as your 3(21) or 3(38) named fiduciary, helping decrease risk of personal liability while navigating regulations. We document everything in your Virtual 401(k) Fiduciary File for audit defense.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Direct fiduciary liability protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Complete documentation for audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Ongoing regulatory monitoring</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Provider and Fee Benchmarking</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Our provider and fee benchmarking uses a Live Bid process reviewing 450+ data points per bidder. Analysis demonstrates where you can save money on plan costs. Taking advantage of benchmarking is one of the most effective ways to boost retirement income for retirees.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">450+ data points analyzed per provider</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Custom Live Bid benchmarking process</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Fee negotiation support included</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Investment Analysis</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Our investment analysis methodology evaluates $120 billion quarterly using a 10-point scoring system. We assess risk factors, asset managers, expense ratios, and performance to build investment menus maximizing return potential. Our analysis covers tax-deferred accounts, taxable accounts, and fixed income options including municipal bonds for long term financial planning.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Proprietary 10-point scoring system</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Quarterly monitoring with recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Asset allocation guidance included</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Plan Design</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Our plan design services help create DC plans that drive better outcomes. Auto-enrollment and employer matches boost personal savings rates significantly. We benchmark against peers and implement creative solutions for boosting personal savings rates across your workforce.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Auto-enrollment and escalation guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Peer and industry benchmarking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Implementation support with providers</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Target Date Fund Consulting</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Our TDF consulting evaluates glide paths, fees, and asset managers for participants approaching retirement age. We help determine whether traditional TDFs or customized solutions deliver guaranteed lifetime income potential through their average lifespan.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Glide path comparison analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">DOL compliance documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Participant communication support</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Education and Communications Programs</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Our education programs help employees understand employer contributions, Roth conversions, tax brackets, and the value of tax-free accounts versus tax-deferred options. Licensed advisors lead sessions on wealth building, social security benefits, and retirement strategy planning.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Licensed advisors lead sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Group and individual options</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Focus on retirement readiness</span>
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
            Common Retirement Plan Optimization Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fiduciary liability exposure</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">ERISA lawsuits average $12 million settlements. Personal risk for fiduciaries managing retirement assets grows.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Named fiduciary services with Virtual 401(k) Fiduciary File documentation for audit protection.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Hidden fee structures</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Revenue sharing and wrap charges hide true costs. Many plans spending 30-50% more than necessary.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Live Bid benchmarking reveals all-in costs, giving leverage to save money through negotiation.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Investment selection complexity</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">40,000+ funds available. Evaluating risk, performance, and tax implications requires specialized focus.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">10-point scoring evaluates $120 billion quarterly with clear pass/fail recommendations.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Low participation rates</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Only 53% of private sector workers participate. Employee contributions remain below average retirement age needs.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Plan design with auto-features and education drives higher personal savings rates.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Defined benefit to DC transitions</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Companies shifting from defined benefit plans need guidance on defined contribution plan optimization.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We help structure DC plans delivering guaranteed income potential for retirees.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Poor retirement readiness</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Employees lack sufficient assets for financial security. Social security alone won&apos;t cover future needs.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Holistic approach combining investment guidance, plan design, and education for better outcomes.</td>
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
