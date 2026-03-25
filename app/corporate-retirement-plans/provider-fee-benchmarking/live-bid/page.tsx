import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Live Bid Benchmarking for Retirement Plans | PointOak",
  description: "Get accurate live bid benchmarking for your retirement plan. 10,000+ benchmarks yearly, zero conflicts. Named fiduciary support nationwide.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/provider-fee-benchmarking/live-bid/"
  }
};

const highlights = [
  "10,000+ live bid benchmarks conducted annually",
  "450+ data points analyzed per bidder",
  "Named fiduciary status with zero conflicts"
];

const processSteps = [
  {
    number: 1,
    title: "Discovery and Plan Analysis",
    description: "Call or email us to schedule your initial consultation. We&apos;ll review your current plan structure, demographics, and service agreements to understand your specific situation and objectives for the live bid benchmarking process."
  },
  {
    number: 2,
    title: "Data Collection and Benchmarking Scope",
    description: "You provide us with your plan documents and fee disclosures. We analyze over 450 data points to build an accurate profile for live bid comparison or market analysis, ensuring we can determine what constitutes reasonable plan expenses for your situation."
  },
  {
    number: 3,
    title: "Live Bid RFP or Market Analysis",
    description: "We either facilitate a full RFP with competing providers or conduct a comprehensive market analysis using our database of verified data from live bid pricing proposals. Both approaches deliver verified market data, not industry averages."
  },
  {
    number: 4,
    title: "Results Presentation and Recommendations",
    description: "You receive a detailed analysis showing exactly how your plan compares to the current market across key areas. We walk you through specific recommendations for negotiating retirement plan fees, provider change, or plan optimization."
  },
  {
    number: 5,
    title: "Implementation Support and Documentation",
    description: "We help you implement changes, whether that&apos;s securing a fee concession from your current provider or transitioning to a new one. Everything is documented for your Virtual 401(k) Fiduciary File to protect you during audits."
  }
];

const faqs = [
  {
    question: "How much does live bid benchmarking cost?",
    answer: "Live bid benchmarking services vary based on plan complexity and scope. Many plan sponsors find that even modest reductions in retirement plan costs discovered through the live bid benchmarking process more than offset the analysis cost. We provide transparent pricing during our initial consultation and can structure fees as a project cost or ongoing advisory relationship. The investment in proper provider benchmarking typically pays for itself many times over through negotiated savings."
  },
  {
    question: "What makes PointOak different from other retirement plan advisors?",
    answer: "Three things: we generate over 90% of our revenue from retirement plan work (true specialists), we conduct 10,000+ benchmarks annually and analyze 450+ data points per bidder giving us unmatched market intelligence, and we&apos;re independently owned with no recordkeeper affiliations so our recommendations are driven solely by your interests. We also serve as named fiduciaries under ERISA, demonstrating our commitment to acting in your best interest."
  },
  {
    question: "Is live bid benchmarking better than database comparisons?",
    answer: "Live bid benchmarking uses your actual current plan demographics to generate real live bid pricing proposals from qualified bidding providers. Database tools rely on industry averages that may not reflect your specific plan demographics, asset levels, or service expectations. While database tools offer speed, live bids deliver accuracy and negotiating leverage. Databases tell you what plans like yours might pay on average, while the live bid benchmarking process tells you exactly what providers will charge your specific plan right now."
  },
  {
    question: "How long does the live bid benchmarking process take?",
    answer: "A complete live bid RFP typically takes 30-60 days from initial data collection through final recommendations. The timeline depends on provider response times and the complexity of your plan. For plan sponsors facing contract renewals or audit deadlines, we can expedite the process. Between formal benchmarks, our Market Competitiveness Review provides faster insights in 10-15 business days using verified data from our database of live bid pricing proposals."
  },
  {
    question: "How do I know if I really need to benchmark my plan?",
    answer: "If it&apos;s been three or more years since your last benchmark, you should benchmark now to meet DOL best practices. You should also benchmark if you&apos;re approaching a contract renewal, preparing for a plan audit, facing participant complaints about retirement plan fees, or simply uncertain whether your current provider&apos;s fees fall within a reasonable range. Even plans that recently benchmarked benefit from annual market reviews, as the retirement plan landscape changes rapidly."
  },
  {
    question: "How can benchmarking help me negotiate with my current provider?",
    answer: "Armed with live bid pricing proposals from competing providers, you have concrete leverage for negotiating retirement plan fees with your incumbent provider. Providers know that losing a client is expensive, so they&apos;re often willing to offer a fee concession or service improvements when presented with competitive alternatives. We&apos;ve seen recordkeepers reduce plan provider&apos;s fees by 15-30% when faced with documented evidence that their pricing is above market based on a thorough market analysis."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Live Bid Benchmarking",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Live Bid Benchmarking",
  areaServed: { "@type": "Country", name: "United States" }
};

export default function LiveBidBenchmarkingPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Provider & Fee Benchmarking", href: "/corporate-retirement-plans/provider-fee-benchmarking" },
          { label: "Live Bid Benchmarking" }
        ]}
        title="Live Bid Benchmarking for Retirement Plans"
        subtitle="You&apos;re probably wondering if your retirement plan fees are truly reasonable. Without objective live bid pricing proposals from bidding providers, you can&apos;t know for certain. PointOak Retirement Advisors helps plan sponsors nationwide secure accurate, actionable benchmarking data through our proven Live Bid methodology."
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
            Why Choose Us for Live Bid Benchmarking?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              The Department of Labor recommends benchmarking retirement plans every three to five years to ensure determining fee reasonableness meets your fiduciary responsibility. As retirement plan advisors who generate over 90% of our revenue from working with corporate retirement plans, we&apos;ve conducted more than 10,000 benchmarks annually using our comprehensive Live Bid process with verified data from the current market.
            </p>
            <p>
              What sets us apart is our independence and depth of analysis. We&apos;re not affiliated with any recordkeeper or provider, which means our recommendations are driven solely by your interests. Our Live Bid methodology reviews over 450 data points per bidder, using actual live bid pricing proposals rather than industry averages. This analysis demonstrates accuracy that generic database benchmarks simply can&apos;t match, ensuring pricing reflects your current plan demographics and plan needs.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Our Provider & Fee Benchmarking Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Live Bid Benchmarking</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our Live Bid Benchmarking service uses your specific plan data to generate real pricing from bidding providers. This eliminates the guesswork of database averages and provides you with verified market pricing based on your actual plan characteristics. Unlike generic database tools that rely on industry averages, we create a custom Request for Proposal that reflects your plan&apos;s unique demographics, assets, and service expectations. You receive apples-to-apples comparisons across multiple qualified providers.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Three-Area Benchmark Analysis</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We evaluate retirement plan costs across fees, investments, and services throughout your entire plan ecosystem. This thorough market analysis ensures you&apos;re not just looking at recordkeeping costs but understanding the full picture of plan provider&apos;s fees, administration expenses, and investment management charges. Our analysis compares your plan against similar-sized plans in your industry, identifying opportunities for retirement plan fees falling through negotiation or provider change.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">RFP Management</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Managing a formal Request for Proposal process can feel like quite a task when it&apos;s not your primary job. We handle the entire RFP lifecycle, from drafting the proposal documents to coordinating provider presentations to synthesizing results into clear recommendations. We leverage our relationships with national recordkeepers to ensure your RFP receives serious attention and competitive pricing. You stay in control of the final decision while we manage the complex task of vendor coordination.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Provider Comparison Analysis</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                You don&apos;t need to launch a full RFP to understand how your current provider performs against the current market. Our Provider Comparison Analysis gives you a clear view of how your fees and services compare to what&apos;s available. This analysis is particularly valuable when your provider contract is approaching renewal. Armed with market data, you&apos;ll enter fee negotiation discussions with confidence and leverage, often securing a fee concession or service improvements without the disruption of a provider change.
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
