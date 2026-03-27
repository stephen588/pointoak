import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Live Bid Benchmarking for Retirement Plans | PointOak",
  description: "Get accurate live bid benchmarking for your retirement plan. 10,000+ benchmarks yearly, zero conflicts. Named fiduciary support nationwide.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/provider-fee-benchmarking/live-bid/"
  }
};

const highlights = [
  "450+ data points reviewed per plan bidder",
  "Named 3(21) and 3(38) ERISA fiduciary",
  "Fee-only fiduciary since 2017"
];

const faqs = [
  {
    question: "What is Live Bid benchmarking?",
    answer: "Live Bid benchmarking uses your actual plan data to solicit real pricing proposals from qualified providers. Unlike database tools that rely on industry averages, Live Bid generates specific quotes based on your plan's demographics, asset levels, and service requirements. This approach delivers negotiating leverage and precise cost comparisons rather than generalized estimates."
  },
  {
    question: "How is Live Bid different from database benchmarking?",
    answer: "Database benchmarking compares your plan to industry averages based on similar plan characteristics. Live Bid goes further by soliciting actual proposals from providers using your specific plan data. Database tools tell you what plans like yours typically pay. Live Bid tells you exactly what providers will charge your plan right now, creating concrete leverage for fee negotiations."
  },
  {
    question: "How long does the Live Bid process take?",
    answer: "A complete Live Bid RFP typically takes 8-12 weeks from initial data gathering through final recommendations. The timeline includes plan analysis (1-2 weeks), RFP preparation and distribution (1-2 weeks), provider response period (3-4 weeks), analysis and finalist selection (2-3 weeks), and final decision support. We can expedite this process when contract deadlines require faster turnaround."
  },
  {
    question: "Do I need to switch providers to benefit from Live Bid benchmarking?",
    answer: "No. Many sponsors use Live Bid results to negotiate better terms with their current provider. When presented with documented evidence that competitive providers offer lower fees or enhanced services, incumbent providers often match or improve their terms to retain the relationship. Live Bid creates leverage whether you change providers or stay put."
  },
  {
    question: "How much does Live Bid benchmarking cost?",
    answer: "Fees vary based on plan complexity and scope of analysis. PointOak operates on a fee-only model with no commissions from providers, meaning our recommendations are driven solely by your plan's interests. Most sponsors find that fee reductions identified through Live Bid benchmarking exceed the cost of the analysis many times over. We provide transparent pricing during your initial consultation."
  },
  {
    question: "Can Live Bid benchmarking help with fiduciary compliance?",
    answer: "Yes. The DOL requires plan sponsors to periodically review provider fees and services to ensure they remain reasonable. Live Bid creates documented evidence of this prudent process, including competitive market analysis, scoring criteria, and committee deliberations. This documentation protects your committee during audits and demonstrates fulfillment of your fiduciary duties."
  },
  {
    question: "What makes PointOak's Live Bid methodology different?",
    answer: "We analyze 450+ data points per provider using your actual plan data, not industry averages. As an independent, fee-only advisor with no recordkeeper affiliations, we have no conflicts of interest in provider selection. We've conducted 10,000+ benchmarks annually, giving us unmatched market intelligence. Every evaluation is delivered by a named ERISA fiduciary, providing direct liability protection for your committee."
  },
  {
    question: "How often should we conduct Live Bid benchmarking?",
    answer: "Most fiduciary best practices recommend comprehensive benchmarking every three to five years, with annual market reviews between formal searches. Contract renewal periods, significant asset growth, M&A activity, or service quality concerns warrant off-cycle Live Bid analysis regardless of when you last benchmarked."
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
        subtitle="Database tools tell you what similar plans pay. Live Bid tells you exactly what providers will charge your specific plan. PointOak's Live Bid methodology uses your actual plan data to solicit real pricing proposals from qualified providers, creating documented leverage for fee negotiations and fiduciary defensibility."
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

      {/* Benefits */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Live Bid Benchmarking
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Real Pricing, Not Industry Averages</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Database benchmarking tools estimate costs based on similar plans. Live Bid generates actual proposals from qualified providers using your specific plan characteristics—participant count, asset levels, service requirements, and plan features. You receive concrete pricing you can act on, not statistical estimates that may not reflect what providers would actually charge your plan.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Negotiating Leverage with Current Provider</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Armed with competitive proposals, you have documented evidence to support fee negotiations. Providers know losing a client is expensive, so they&apos;re often willing to reduce fees or enhance services when presented with Live Bid results showing competitive alternatives. Many sponsors achieve 15-30% fee reductions without changing providers.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fiduciary Documentation and Audit Protection</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The DOL expects plan sponsors to periodically verify that fees remain reasonable. Live Bid creates the documented prudent process regulators require: competitive market analysis, objective scoring criteria, committee deliberations, and selection rationale. This documentation protects your committee during <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:text-navy underline">fiduciary reviews</Link> and participant lawsuits.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Comprehensive Service and Technology Comparison</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Live Bid evaluates more than fees. Providers submit detailed proposals covering recordkeeping platforms, participant services, investment options, reporting capabilities, and cybersecurity protocols. You compare providers across 450+ data points, ensuring any change delivers better value rather than just lower cost.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Independent Analysis with No Provider Conflicts</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                As an independent, fee-only advisor with no recordkeeper affiliations, PointOak has no financial incentive to steer you toward any particular provider. Our Live Bid methodology scores proposals objectively against your plan&apos;s priorities, not our revenue relationships. <Link href="/about" className="text-medium-blue hover:text-navy underline">Our independence</Link> ensures recommendations serve your plan alone.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* How It Works */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Live Bid Benchmarking Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Live Bid benchmarking starts with comprehensive plan data collection: participant demographics, current fee structure, service agreements, and investment lineup. We use this information to create a detailed RFP distributed to qualified providers. Each provider responds with binding proposals based on your actual plan specifications, not generalized estimates.
            </p>
            <p>
              We analyze responses across fees, investments, technology, services, and compliance capabilities using weighted scoring aligned with your committee&apos;s priorities. You receive side-by-side comparisons showing exactly how providers stack up and what switching or staying would mean for your plan. This documented analysis supports negotiation with your current provider or selection of a new one, with full <Link href="/corporate-retirement-plans/provider-fee-benchmarking/recordkeeper-rfp" className="text-medium-blue hover:text-navy underline">RFP management</Link> and transition support throughout.
            </p>
          </div>
          <div className="mt-8">
            <Link 
              href="/contact"
              className="inline-block bg-medium-blue hover:bg-navy text-white font-outfit font-medium px-8 py-3 rounded transition-colors"
            >
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs This */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs Live Bid Benchmarking
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Live Bid benchmarking makes sense in these situations:
          </p>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Provider Contract Is Approaching Renewal</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Renewal periods are natural benchmarking triggers. Live Bid results give you concrete alternatives before signing a new term, ensuring renewal pricing reflects current market rates rather than automatic escalation or inertia.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Haven&apos;t Benchmarked in Three or More Years</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Market compression means pricing shifts quickly. A plan that was competitively priced three years ago may be significantly overpriced today. Live Bid resets your baseline with current market data and identifies opportunities for <Link href="/corporate-retirement-plans/provider-fee-benchmarking/fee-benchmarking" className="text-medium-blue hover:text-navy underline">fee reduction</Link>.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Plan Has Experienced Significant Growth</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Asset-based fees increase automatically as your plan grows. Live Bid evaluates whether your fee percentage should decline with scale, as larger plans typically command better pricing. You may be paying more than necessary simply because fees haven&apos;t been renegotiated since the plan was smaller.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You&apos;re Uncertain Whether Current Fees Are Competitive</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If you can&apos;t answer "Are our fees reasonable?" with documented confidence, Live Bid provides that certainty. Real proposals from qualified providers remove guesswork and give your committee defensible evidence for fiduciary decision-making.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Face Upcoming Fiduciary Review or Audit</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                DOL audits scrutinize provider selection and fee monitoring processes. Live Bid creates the documented evidence of prudent process regulators expect, including competitive analysis, objective criteria, and reasoned decision-making. This documentation protects your committee before questions arise.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-cloud-blue rounded-lg">
            <p className="text-text-gray font-outfit text-base leading-relaxed">
              Plans with recent documented benchmarking (within past 12-18 months) and no material changes may benefit more from annual monitoring than a new Live Bid cycle. PointOak provides <Link href="/corporate-retirement-plans/provider-fee-benchmarking" className="text-medium-blue hover:text-navy underline">ongoing benchmarking support</Link> between formal searches.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Process */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Live Bid Process
          </h2>
          <div className="relative">
            <div className="absolute left-[19px] top-10 bottom-10 w-px bg-[#C1C5C9] hidden sm:block" />
            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-medium-blue flex items-center justify-center">
                    <span className="font-outfit font-semibold text-white text-lg leading-none">1</span>
                  </div>
                </div>
                <div className="flex-1 pb-2">
                  <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">Discover and Analyze</h3>
                  <p className="text-text-gray font-outfit text-base leading-relaxed">We review your current plan structure, fee agreements, and service relationships to understand your specific situation and priorities for the benchmarking process.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-medium-blue flex items-center justify-center">
                    <span className="font-outfit font-semibold text-white text-lg leading-none">2</span>
                  </div>
                </div>
                <div className="flex-1 pb-2">
                  <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">RFP Development and Distribution</h3>
                  <p className="text-text-gray font-outfit text-base leading-relaxed">We create a comprehensive RFP using your actual plan data and distribute it to qualified providers. Each receives identical information to ensure apples-to-apples comparisons.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-medium-blue flex items-center justify-center">
                    <span className="font-outfit font-semibold text-white text-lg leading-none">3</span>
                  </div>
                </div>
                <div className="flex-1 pb-2">
                  <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">Proposal Analysis</h3>
                  <p className="text-text-gray font-outfit text-base leading-relaxed">We analyze responses across 450+ data points covering fees, investments, technology, services, and compliance. You receive side-by-side comparisons with clear scoring against your priorities.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-medium-blue flex items-center justify-center">
                    <span className="font-outfit font-semibold text-white text-lg leading-none">4</span>
                  </div>
                </div>
                <div className="flex-1 pb-2">
                  <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">Recommendations and Decision Support</h3>
                  <p className="text-text-gray font-outfit text-base leading-relaxed">We present findings with specific recommendations for negotiation with your current provider or selection of a new one. All analysis is documented for fiduciary file protection.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-medium-blue flex items-center justify-center">
                    <span className="font-outfit font-semibold text-white text-lg leading-none">5</span>
                  </div>
                </div>
                <div className="flex-1 pb-2">
                  <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">Implementation and Ongoing Monitoring</h3>
                  <p className="text-text-gray font-outfit text-base leading-relaxed">We support implementation of approved changes and provide ongoing monitoring to ensure fees remain competitive as market conditions evolve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Why Choose PointOak */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Why Choose PointOak for Live Bid Benchmarking
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              PointOak has conducted 10,000+ benchmarks annually using our proprietary Live Bid methodology. We analyze 450+ data points per provider using your actual plan data, not industry averages that may not reflect your specific situation. As a fee-only advisor with no recordkeeper affiliations, we have zero conflicts of interest in provider recommendations.
            </p>
            <p>
              Our <Link href="/about/our-team" className="text-medium-blue hover:text-navy underline">consulting team</Link> delivers every Live Bid engagement as a named 3(21) or 3(38) ERISA fiduciary, providing direct liability protection for your committee. Our independence, depth of market intelligence, and fiduciary commitment distinguish our Live Bid process from database tools and captive advisor benchmarking.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* About */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            About PointOak Retirement Advisors
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. As an SEC-registered investment advisor and named 3(21) and 3(38) ERISA fiduciary, we serve plan sponsors and high-net-worth individuals nationwide. Led by Darsh Makim, CRPC, our team brings 50+ years of collective experience managing over $1.08 billion in assets. <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule a consultation</Link> to discuss your plan.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed text-center">
            Call (703) 595-4444 or <Link href="/contact" className="text-medium-blue hover:text-navy underline">schedule a consultation</Link> to discuss Live Bid benchmarking for your plan.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
