import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Recordkeeper RFP Services for Plan Sponsors | PointOak",
  description: "401(k) recordkeeper RFP services with named fiduciary protection. Complete RFP management, Live Bid benchmarking, documented prudent process. Contact us.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/provider-fee-benchmarking/recordkeeper-rfp/"
  }
};

const highlights = [
  "Named fiduciary throughout entire RFP process",
  "Live Bid benchmarking with 450+ data points",
  "Complete RFP management and documentation protection"
];

const processSteps = [
  {
    number: 1,
    title: "Define Your Objectives",
    description: "We start by understanding your specific goals for the recordkeeper search. You&apos;ll discuss what&apos;s working and what&apos;s not with your current provider, identify must-have features, and establish evaluation criteria in advance."
  },
  {
    number: 2,
    title: "Custom RFP Development",
    description: "We draft a comprehensive RFP document tailored to your plan&apos;s needs. The RFP includes your plan specifications, service requirements, and specific questions designed to reveal meaningful differences between recordkeepers."
  },
  {
    number: 3,
    title: "Proposal Evaluation",
    description: "Once responses arrive, we conduct detailed analysis of all submissions using our scoring framework. You&apos;ll receive a clear comparison showing how each provider measures up across fees, services, technology, and compliance capabilities."
  },
  {
    number: 4,
    title: "Finalist Presentations & Selection",
    description: "We coordinate presentations with your top 2-3 finalists and facilitate Q&A sessions to address any concerns. You make the final selection with confidence, backed by thorough documentation of your prudent process."
  },
  {
    number: 5,
    title: "Implementation & Ongoing Monitoring",
    description: "After selection, we support the transition to your new recordkeeper and provide ongoing monitoring. You&apos;ll have complete documentation in your Virtual 401(k) Fiduciary File proving you followed a prudent process."
  }
];

const faqs = [
  {
    question: "How often should you conduct a 401(k) recordkeeper RFP?",
    answer: "The Department of Labor presumes plan sponsors conduct RFPs every three to five years as part of prudent fiduciary practice. We recommend annual benchmarking to monitor fees and services, with a comprehensive recordkeeper RFP every three years. However, you should conduct an RFP sooner if your recordkeeper is acquired, you experience service problems, or your plan experiences 20%+ growth in assets or participants."
  },
  {
    question: "What are the key criteria for evaluating recordkeeper proposals?",
    answer: "The most important evaluation criteria include total plan cost across all fee types, technology capabilities for participant and sponsor portals, service quality measured through response times and dedicated support, SECURE 2.0 implementation readiness, and cybersecurity controls to protect participant data. We also evaluate recordkeeper financial stability, investment options and advice availability, transition support capabilities, and quality of participant services."
  },
  {
    question: "How many recordkeepers should you include in an RFP?",
    answer: "We typically recommend including 3-5 potential recordkeepers in your request for proposal process. This provides meaningful comparison without creating evaluation overwhelm. The specific number depends on your plan size and complexity. Smaller plans may focus on 3 providers specializing in that market segment, while larger plans might evaluate 4-5 to ensure comprehensive market coverage."
  },
  {
    question: "What is the difference between benchmarking and an RFP?",
    answer: "Benchmarking compares your current fees and services against industry standards to determine reasonableness, typically using existing plan data and market surveys. A recordkeeper search through an RFP is a comprehensive process where you solicit detailed proposals from different recordkeepers, evaluate their complete service offerings, and potentially switch providers. We recommend benchmarking annually and conducting a formal recordkeeper RFP every three to five years."
  },
  {
    question: "Do you need an advisor to conduct a recordkeeper RFP?",
    answer: "While you can technically conduct an RFP yourself, the complexity and fiduciary implications make retirement plan advisor support essential for most plan sponsors. A specialized firm brings market knowledge of 130+ recordkeepers, expertise in drafting comprehensive RFP documents, objectivity in evaluating responses, and documentation practices that protect you in audits or litigation. Working with an advisor who acts as a named 3(21) or 3(38) fiduciary shifts legal responsibility."
  },
  {
    question: "What happens after we select a new recordkeeper?",
    answer: "After you select your new recordkeeper, we help manage the transition to minimize participant disruption. This includes coordinating the data transfer and plan documents migration, reviewing the service agreement to ensure all negotiated terms are included, developing participant communications to explain the change, and creating a transition timeline. Most transitions take 6-18 months depending on plan complexity."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Recordkeeper RFP Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "RFP Management",
  areaServed: { "@type": "Country", name: "United States" }
};

export default function RecordkeeperRFPPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Provider & Fee Benchmarking", href: "/corporate-retirement-plans/provider-fee-benchmarking" },
          { label: "Recordkeeper RFP Services" }
        ]}
        title="401(k) Recordkeeper RFP Services"
        subtitle="You&apos;re required to benchmark your plan&apos;s fees and services. But how do you ensure the RFP process protects you from fiduciary liability while identifying the best recordkeeper? PointOak specializes in conducting comprehensive recordkeeper RFPs that document your prudent process and deliver competitive results."
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
            Why Choose Us for 401(k) Recordkeeper RFP Support?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              PointOak has been registered and acting as fiduciary advisors since the first day we started our practice. All our retirement plan advisors can act as either a 3(21) or 3(38) named fiduciary under ERISA with all clients, providing direct liability protection throughout the RFP process and demonstrating our commitment to acting in your best interests.
            </p>
            <p>
              What sets us apart is our Live Bid benchmarking methodology. We perform over 10,000 benchmarks per year for other clients, reviewing over 450 data points per bidder using your actual plan information rather than industry averages. This means you get data accuracy that beats standard industry benchmarks. Plus, our meticulous, technology-driven process documents everything to help protect you from liability if you get audited.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Our Provider Selection & Benchmarking Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">RFP Management</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                When it&apos;s time to take your company&apos;s retirement plan to market, our RFP management services handle the complete request for proposal process on your behalf. We draft comprehensive RFP documents, identify potential recordkeepers suited to your plan&apos;s needs, and manage all vendor communications from start to finish. We project manage the entire RFP timeline so you can focus on running your business.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Live Bid Benchmarking</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our custom Live Bid benchmarking process uses your specific plan data to generate accurate fee and service comparisons across different recordkeepers. Unlike generic industry benchmarks that rely on average plan demographics, we analyze over 450 data points per provider using your actual participant count, asset levels, and plan features to ensure apples-to-apples comparisons. This comprehensive analysis evaluates fees, investments, and recordkeeping services.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Provider Comparison Analysis</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                After RFP responses arrive, we create side-by-side comparison analyses that cut through marketing language to reveal substantive differences in the services provided. Our evaluation framework scores each recordkeeper across quantitative factors like pricing and technology capabilities as well as qualitative factors like service philosophy and participant services quality. We present finalist recommendations with clear rationale tied to your plan&apos;s specific objectives.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fee Negotiation Support</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Once you&apos;ve identified your preferred recordkeeper, we help you negotiate the best possible fee structure and service terms. Our market knowledge from conducting 10,000+ benchmarks annually gives us the leverage to secure competitive pricing and favorable contract provisions on your behalf while eliminating hidden revenue sharing arrangements. We review all fee disclosures and plan documents to ensure transparency and reasonableness.
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
            What To Expect: Our RFP Process
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
