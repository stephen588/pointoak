import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Fee Benchmarking | PointOak Retirement Advisors",
  description: "Ensure your 401(k) fees meet ERISA&apos;s &quot;reasonable&quot; standard. Independent benchmarking analyzing 450+ data points. Named fiduciary protection. Get your fee analysis.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/provider-fee-benchmarking/fee-benchmarking/"
  }
};

const highlights = [
  "Over 10,000 benchmarks performed annually",
  "Named fiduciary status reduces your liability",
  "90%+ revenue from retirement plan consulting"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze Your Current Fee Structure",
    description: "Call or email us to schedule your consultation. We confirm your appointment within 24 hours and begin gathering your 408(b)(2) disclosures to understand all fees paid from plan assets."
  },
  {
    number: 2,
    title: "Benchmark Against Market Data",
    description: "We conduct our Live Bid analysis using your specific plan data across 450+ benchmarking points. You receive a comprehensive comparison showing exactly where your plan costs and fee levels stand against most plans."
  },
  {
    number: 3,
    title: "Review Recommendations",
    description: "You receive our findings with specific, actionable recommendations on plan investments and administration fees. We explain your options for negotiation, provider changes, or plan design adjustments with no pressure."
  },
  {
    number: 4,
    title: "Implement & Document",
    description: "We work with your current or new plan service providers to implement approved changes. Everything is documented in your Virtual 401(k) Fiduciary File for audit protection."
  },
  {
    number: 5,
    title: "Ongoing Monitoring",
    description: "Annual benchmarking keeps plan fees competitive as the market evolves. Quarterly investment reviews ensure expense ratios remain reasonable and employees have access to low cost index funds."
  }
];

const faqs = [
  {
    question: "How much does fee benchmarking cost for our 401(k) plan?",
    answer: "We provide complimentary initial consultations to assess your plan and explain our benchmarking process. Our annual fee structure depends on your plan size and complexity. Most employer sponsors find the cost savings we uncover in excessive fees far exceed our fees. We&apos;re transparent about pricing upfront with no hidden charges or revenue sharing arrangements that create conflicts of interest."
  },
  {
    question: "What makes PointOak Retirement Advisors different from other retirement plan consultants?",
    answer: "Three things: we generate over 90% of our revenue from retirement plan work (true specialists, not generalists), all advisors act as 3(21) or 3(38) named fiduciaries directly reducing your fiduciary liability, and our Live Bid benchmarking analyzes 450+ data points per provider using your actual plan data. We&apos;re independently owned with no parent company products to push."
  },
  {
    question: "Is switching providers or renegotiating fees better for my 401(k) plan?",
    answer: "It depends on your current relationship and how your plan costs compare to market rates. If your provider offers competitive pricing but you&apos;re paying for unnecessary services or high cost funds, renegotiation often works well. If fees charged to plan assets are significantly above market or service quality is poor, a provider switch may better serve plan participants. We help you weigh both options with a complete cost-benefit analysis."
  },
  {
    question: "How long does the fee reasonableness benchmarking process usually take?",
    answer: "Most fee benchmarking studies for 401(k) plans are completed within 3-4 weeks from your initial consultation. The timeline includes gathering your 408(b)(2) disclosures, conducting our Live Bid analysis, and preparing your comprehensive report. If you choose to pursue an RFP for alternative service providers, that process typically adds 6-8 weeks."
  },
  {
    question: "How do I know if my plan really needs fee benchmarking?",
    answer: "You need benchmarking if your 401(k) plan hasn&apos;t been evaluated in the past three years, you&apos;re unsure whether plan fees are competitive, employees are asking questions about plan costs, or you&apos;re approaching a provider contract renewal. You also need it if you&apos;ve experienced significant growth in plan assets since your last review, as asset based fees may have increased automatically."
  },
  {
    question: "Do you offer warranties or ongoing support after benchmarking our retirement plan?",
    answer: "We provide annual benchmarking to ensure plan fees remain competitive as the market evolves. Our quarterly investment monitoring includes ongoing expense ratio reviews and fund performance analysis. All clients receive our Virtual 401(k) Fiduciary File documentation system and access to regulatory updates when Department of Labor guidance changes. We maintain ongoing relationships with plan fiduciaries, not one-time projects."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Fee Benchmarking Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Fee Benchmarking",
  areaServed: { "@type": "Country", name: "United States" }
};

export default function FeeBenchmarkingPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Provider & Fee Benchmarking", href: "/corporate-retirement-plans/provider-fee-benchmarking" },
          { label: "401(k) Fee Benchmarking" }
        ]}
        title="401(k) Fee Benchmarking: Expert Analysis for Plan Sponsors"
        subtitle="You&apos;re responsible for ensuring your 401(k) plan costs are &quot;reasonable&quot; under ERISA, but what does that actually mean when plan service providers use complex fee structures? Without independent benchmarking, you&apos;re making fiduciary decisions in the dark. PointOak Retirement Advisors provides data-driven fee analysis using our proprietary Live Bid methodology."
      />

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

      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Why Choose Us for 401(k) Fee Benchmarking?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              41% of plan participants don&apos;t know they pay any 401(k) fees, and 40% don&apos;t understand fee information when they see it. This awareness gap exposes plan sponsors to serious fiduciary liability. As employer sponsors navigate complex Department of Labor regulations, PointOak has been advising plan fiduciaries since day one, remaining wholly focused on retirement plan compliance and ensuring reasonable fees across the United States.
            </p>
            <p>
              What sets us apart is our Live Bid benchmarking process. We analyze 450+ data points per bidder using your actual plan data, not industry averages that hide what plan participants actually pay. Our investment advisory services include acting as 3(21) or 3(38) named fiduciaries, directly reducing your personal liability while our Virtual 401(k) Fiduciary Files document every process to protect you during audits.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Our 401(k) Fee Benchmarking Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Provider & Fee Benchmarking</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our Provider & Fee Benchmarking service analyzes your 401(k) plan against real market data. We conduct annual custom Live Bid benchmarking studies reviewing over 450 data points per bidder, making our analysis among the most accurate in the retirement plan industry for evaluating fee levels. We help you uncover fee inefficiencies and provide ammunition to renegotiate better terms or make informed provider changes.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fiduciary Support for Fee Oversight</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Managing reasonable plan costs requires expertise in ERISA regulations and Department of Labor requirements. Our Fiduciary Support services help you navigate the complex maze of fee disclosure rules and maintain compliance. Acting as your 3(21) co-fiduciary or 3(38) investment manager, we provide oversight that directly reduces your liability exposure when evaluating whether fees charged are excessive.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Investment Analysis & Fee Review</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                High cost funds can substantially reduce retirement savings without delivering better returns than low cost index funds. Our Investment Analysis methodology evaluates over $120 billion in retirement plan assets quarterly. We use a proprietary 10-point pass/fail scoring system to identify mutual funds with excessive fees and recommend cost effective alternatives.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
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

      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
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
