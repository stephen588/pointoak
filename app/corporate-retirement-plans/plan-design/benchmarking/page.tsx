import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Plan Benchmarking | Independent Fiduciary Services | PointOak",
  description: "Independent 401(k) plan benchmarking protecting plan sponsors from ERISA liability. Live Bid methodology analyzing 450+ data points, fee negotiation, investment analysis. 3(21)/3(38) fiduciary services nationwide.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/plan-design/benchmarking/"
  }
};

const highlights = [
  "Independent fiduciary protection through 3(21)/3(38) services",
  "Live Bid methodology with 450+ data points",
  "Proven results: 64% to 98% participation improvements"
];

const processSteps = [
  {
    number: 1,
    title: "Initial Consultation and Data Gathering",
    description: "You&apos;ll share your current plan documents, fee disclosures, and participant demographics with our team. We review your existing provider agreements and plan design to understand your starting point."
  },
  {
    number: 2,
    title: "Comprehensive Plan Analysis",
    description: "We analyze your plan fees, investment options, and services against comparable plans of similar size and industry. Our proprietary system evaluates investment returns, expense ratios, and service quality to identify gaps."
  },
  {
    number: 3,
    title: "Live Bid RFP Process",
    description: "We draft and distribute custom RFPs to qualified providers, collecting actual bids on your specific plan. This generates real pricing data rather than relying on industry averages that may not reflect your situation."
  },
  {
    number: 4,
    title: "Results Presentation and Recommendations",
    description: "You&apos;ll receive a detailed presentation comparing your current plan against bidder proposals across all key metrics. We provide specific, actionable recommendations for improving fees, investments, or services while documenting everything for your Virtual 401(k) Fiduciary File."
  },
  {
    number: 5,
    title: "Implementation Support and Ongoing Monitoring",
    description: "We work with you to implement approved changes and provide quarterly investment monitoring using our proprietary 10-point scoring system. As your 3(21) or 3(38) fiduciary, we continue protecting you from potential liability through meticulous documentation and regular benchmarking important to compliance."
  }
];

const faqs = [
  {
    question: "How much does 401(k) plan benchmarking cost?",
    answer: "Benchmarking costs vary based on plan complexity, participant count, and scope of analysis. Most independent advisors structure fees as a percentage of plan assets or per-participant charges. At PointOak, we provide transparent pricing during our initial consultation. Our focus is on delivering value that far exceeds our advisory costs through fee reductions, improved investment options, and reduced potential liability from ERISA compliance gaps."
  },
  {
    question: "What makes PointOak different from other benchmarking providers?",
    answer: "We generate over 90% of our revenue from retirement plan work, making us true specialists rather than generalists. Our Live Bid methodology analyzes 450+ data points per bidder using your actual plan information, not industry averages. All our advisors can serve as 3(21) or 3(38) named fiduciaries under ERISA. As an independently owned firm, we have no conflicts of interest from parent company products, ensuring our recommendations serve only your best interest."
  },
  {
    question: "How often should I benchmark my 401 k plan?",
    answer: "The DOL recommends formal benchmarking every three years minimum, but industry best practice is annual review. We conduct annual benchmarking studies to ensure your plan fees, investments, and services remain competitive. You should also benchmark after significant plan asset growth, when approaching provider contract renewals, or if you&apos;re concerned about potential liability from ERISA litigation trends. Regular benchmarking important demonstrates your commitment to fiduciary duty."
  },
  {
    question: "How do I know if my current 401(k) fees are too high?",
    answer: "Compare your all-in fees to plans of similar size and industry. Research shows plans under $1 million in assets average 1.26% in fees, while plans over $1 billion average just 0.27%. Anything above 1% is generally considered excessive. Review your 408(b)(2) fee disclosures carefully, as many plan sponsors miss indirect fees. Our Live Bid process provides definitive answers by getting actual competitive bids on your specific plan."
  },
  {
    question: "What&apos;s the difference between benchmarking and an RFP?",
    answer: "Benchmarking compares your current plan to industry standards using available data. An RFP (Request for Proposal) is a formal process where competing providers submit actual bids to service your plan. Our Live Bid benchmarking combines both approaches, using real RFP responses rather than industry averages for maximum accuracy. This methodology reveals your true competitive position and creates negotiating leverage with your current provider or alternatives."
  },
  {
    question: "Is 401(k) benchmarking required by law?",
    answer: "ERISA requires plan fiduciaries to ensure fees are reasonable but doesn&apos;t mandate formal benchmarking. However, proving you fulfilled your fiduciary responsibility requires documentation. The DOL suggests benchmarking every 3-5 years, and failure to benchmark is often cited in excessive fee lawsuits. With ERISA litigation up 35% in 2024 and average settlements at $4.6 million, regular benchmarking provides essential liability protection through documented due diligence."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Plan Benchmarking Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Plan Design Benchmarking",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function BenchmarkingPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Plan Design", href: "/corporate-retirement-plans/plan-design" },
          { label: "Plan Design Benchmarking" }
        ]}
        title="401(k) Plan Benchmarking: Protect Your Company and Empower Your Employees"
        subtitle="Are you certain your retirement plan fees are reasonable and your fiduciary obligations are met? With ERISA litigation surging 35% in 2024 and average settlements reaching $4.6 million, plan sponsors face mounting pressure to prove due diligence. PointOak Retirement Advisors provides comprehensive 401 k plan benchmarking through our independent Live Bid process, analyzing 450+ data points to protect you from liability while strengthening retirement benefits for your employees."
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
            Why Choose PointOak for 401(k) Plan Benchmarking Services
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              PointOak has been advising plan sponsors and participants since day one, generating over 90% of our revenue from working with corporate retirement plans. We&apos;re retirement plan specialists, not generalists offering retirement as a sideline. Our advisors are registered and act as fiduciaries under ERISA, serving as either 3(21) or 3(38) named fiduciaries with all clients.
            </p>
            <p>
              What sets our benchmarking process apart is our Live Bid methodology. We perform over 10,000 benchmarks per year, reviewing 450+ data points per bidder using your actual plan information rather than industry averages. This approach delivers data accuracy that beats standard industry benchmarks. Plus, as an independently owned firm, we offer unbiased advice without pressure to push proprietary products of a parent company. Our meticulous, technology-driven process documents everything to help protect you from liability if you get audited.
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
            Our 401(k) Plan Benchmarking Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Live Bid Benchmarking</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Our Live Bid benchmarking uses your specific plan information rather than average demographics, making our analysis among the most accurate in the industry. We conduct annual custom studies that review over 450 data points per bidder, ensuring you never pay more than you should for plan administration and services.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                This comprehensive approach evaluates your company&apos;s retirement plan across three critical areas: fees, investments, and services. We help you uncover inefficiencies and provide the ammunition to renegotiate better fees or services, or to make a provider switch that benefits your plan participants.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Three-Area Benchmark Analysis</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                We benchmark your 401 k plan comprehensively, evaluating plan fees, plan&apos;s investments, and service quality. This ensures you&apos;re meeting your fiduciary responsibility while maintaining competitive retirement benefits that help with attracting talent and employee retention.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our analysis examines administrative fees, investment fees, advisory costs, and individual service fees. We compare your plan against meaningful comparisons with similar-sized organizations to ensure compliance with industry standards and identify opportunities for improvement.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">RFP Management and Provider Comparison</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                We handle the complete drafting and management of Request for Proposal processes when you&apos;re considering alternative service providers. Our team creates side-by-side comparisons of current and bidding providers on both cost and quality, giving you the clarity needed to make informed decisions.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                This service creates leverage to negotiate better fees or services with your current provider. We evaluate how providers measure against industry averages and best practice standards, ensuring your plan remains a critical component of your employee benefits package.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fee Negotiation Support and Market Analysis</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                As required by the DOL, retirement plans should be benchmarked at least every three years to determine reasonableness of fees. We help ensure your plan providers are offering appropriate products and services for your dollars through regular benchmarking and strategic negotiation support.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our analysis covers the full spectrum of plan costs, from average fund fees to plan asset growth charges. We review plan documents and 408(b)(2) disclosures to identify all fees, including hidden costs that many plan sponsors miss.
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
            Common 401(k) Plan Benchmarking Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fee Transparency Issues</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Hidden costs in plan documents make it difficult to identify true all-in costs. Many plan sponsors discover they&apos;re paying significantly above reasonable fees only after comprehensive analysis.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We review all fee sources including investment expenses, administrative fees, and indirect compensation. Our analysis uncovers hidden costs and provides clear documentation for fiduciary obligations.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Interpreting 408(b)(2) Disclosures</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Complex disclosure documents make comparing services provided and costs nearly impossible. Most companies struggle to extract meaningful comparisons from required fee disclosures.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We translate disclosure documents into clear cost comparisons. Our three-area benchmark analysis breaks down administrative fees, investment fees, and services in plain language you can use.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Determining Reasonable Compensation</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Without access to comparable plan data, you can&apos;t verify if fees align with industry standards. The DOL requires reasonable fees but doesn&apos;t define &quot;reasonable.&quot;</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our Live Bid process uses actual RFP responses from providers bidding on plans like yours. With 10,000+ benchmarks annually, we know what competitive pricing looks like for your plan size.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Investment Performance Evaluation</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Tracking investment returns and comparing funds against appropriate benchmarks requires specialized knowledge. With 40,000+ funds available, selecting and monitoring becomes overwhelming.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our investment methodology evaluates over $120 billion in plan assets quarterly. We use a proprietary 10-point pass/fail scoring system to measure fund performance across multiple factors.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Plan Design Competitiveness</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">You may not know if your plan features like automatic enrollment or profit sharing align with best practice. Poor plan design directly impacts participation rates and retirement readiness.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We benchmark your plan design against similar organizations and industry standards. Our analysis has helped clients increase participation from 64% to 98% through strategic design improvements.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Provider Service Quality Assessment</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Beyond costs, evaluating service providers requires measuring participant satisfaction, education resources, and compliance support. Many plan sponsors focus only on fees and miss service quality gaps.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We evaluate all aspects of services provided, from participant support to compliance assistance. Our comprehensive approach ensures you&apos;re getting value, not just the lowest price.</td>
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
            What To Expect: Our 401(k) Benchmarking Process
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
