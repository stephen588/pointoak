import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Provider Evaluation Services | PointOak Advisors",
  description: "401(k) provider evaluation and benchmarking services. Named fiduciary protection, 450+ data point analysis. Serving plan sponsors nationwide.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/provider-fee-benchmarking/provider-evaluation/"
  }
};

const highlights = [
  "Named 3(21) or 3(38) fiduciary protection",
  "450+ data points analyzed per provider",
  "Investment methodology evaluating $120B+ quarterly"
];

const processSteps = [
  {
    number: 1,
    title: "Initial Assessment",
    description: "Call or contact us to schedule a consultation. We gather data about your current plan and provider to understand your clear objectives for the evaluation process."
  },
  {
    number: 2,
    title: "Comprehensive Benchmarking",
    description: "We conduct a Live Bid benchmarking study analyzing 450+ data points per provider. You receive detailed comparisons of fee structure, investment options, plan features, and service capabilities."
  },
  {
    number: 3,
    title: "RFP Management & Provider Comparison",
    description: "We draft and manage your Request for Proposal process. Potential vendors submit responses we organize into side-by-side comparisons identifying valuable insights for easy evaluation."
  },
  {
    number: 4,
    title: "Selection Support & Documentation",
    description: "You review our analysis and recommendations with complete transparency. We document your entire evaluation process demonstrating prudent fiduciary decision-making to protect your company if audited."
  },
  {
    number: 5,
    title: "Ongoing Monitoring",
    description: "After provider selection, we continue quarterly investment monitoring and annual benchmarking studies. Your Virtual 401(k) Fiduciary File maintains all documentation, participant communications records, and compliance support materials."
  }
];

const faqs = [
  {
    question: "How much does 401(k) provider evaluation cost?",
    answer: "Provider evaluation costs vary based on plan type, participant count, plan assets, and scope of services. Many plan sponsors work with fiduciary advisors who include benchmarking as part of ongoing monitoring responsibilities. We provide a transparent fee structure upfront and can tailor our services to fit your business needs. The costs of a thorough evaluation are typically recovered through fee reductions identified in the benchmarking process."
  },
  {
    question: "What makes PointOak different from other retirement plan advisors?",
    answer: "Three things: we generate over 90% of our revenue from retirement plan work (not a side business), we act as your 3(21) or 3(38) named fiduciary on every engagement providing direct liability protection, and our Live Bid benchmarking analyzes 450+ data points per provider using your actual plan data rather than generic industry benchmarks. We&apos;ve focused exclusively on retirement plans since day one and document everything in Virtual 401(k) Fiduciary Files."
  },
  {
    question: "Should I use a 3(21) or 3(38) fiduciary for provider evaluation?",
    answer: "Both fiduciary types can help with the evaluation process, but they differ in scope of fiduciary responsibilities. A 3(21) co-fiduciary provides recommendations and guidance while you retain final decision authority. A 3(38) investment manager assumes discretionary responsibility for investment selection and ongoing monitoring. The choice depends on your internal resources and desired level of involvement. We offer both options and help you determine which fits your specific needs."
  },
  {
    question: "How long does a 401(k) provider evaluation typically take?",
    answer: "A comprehensive provider evaluation usually takes 8-12 weeks from initial assessment to final selection. The timeline includes gathering plan data (1-2 weeks), conducting benchmarking analysis (2-3 weeks), managing the RFP process with potential vendors (3-4 weeks), and finalizing your decision (2-3 weeks). We can expedite the process if you have a contract renewal deadline approaching or urgent compliance support needs."
  },
  {
    question: "How do I know if I really need to evaluate my 401(k) provider?",
    answer: "You should evaluate your 401(k) provider if you haven&apos;t benchmarked in the past 3 years, if your plan assets have grown significantly, if employees complain about service quality or online tools, or if you&apos;re uncertain whether your fee structure is competitive. Plan sponsors also evaluate when approaching contract renewals, after DOL guidance changes, or when trying to retain talent through better retirement plan features."
  },
  {
    question: "Can you help if we don&apos;t want to switch providers but want better terms?",
    answer: "Yes. Our Live Bid benchmarking creates leverage to negotiate improved fees or enhanced plan features with your current provider. When competing bids show better fee structure or capabilities, you can use this data to renegotiate your agreement. Many plan sponsors use our benchmarking reports every 2-3 years specifically for contract renegotiation rather than provider changes. This approach maintains continuity while ensuring competitive terms and transparent fees."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Service Provider Evaluation",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Provider Evaluation",
  areaServed: { "@type": "Country", name: "United States" }
};

export default function ProviderEvaluationPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Provider & Fee Benchmarking", href: "/corporate-retirement-plans/provider-fee-benchmarking" },
          { label: "Service Provider Evaluation" }
        ]}
        title="401(k) Provider Evaluation: Ensuring Your Plan Serves Employees"
        subtitle="You&apos;ve certainly thought about your 401(k) provider&apos;s performance. But how do you know if your fees are reasonable, your investments are competitive, and your provider is protecting you from fiduciary liability? PointOak Retirement Advisors specializes in helping plan sponsors evaluate retirement plan providers through documented, defensible processes that meet industry standards."
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
            Why Choose Us for 401(k) Provider Evaluation Services?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              The Department of Labor recommends plan sponsors conduct periodic benchmarking at least once every three years to ensure fees and services remain competitive. PointOak has been wholly focused on the retirement plan industry since day one, generating over 90% of our revenue from working with corporate retirement plans. We serve employers nationwide from our McLean, Virginia office.
            </p>
            <p>
              What sets us apart is our Live Bid benchmarking process that analyzes over 450 data points per provider using your actual plan data rather than relying on industry benchmarks for similar plan sizes. We act as your 3(21) or 3(38) named fiduciary, providing direct liability protection while our proprietary 10-point investment scoring system evaluates over $120 billion in plan assets quarterly.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Our Provider Evaluation Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Provider & Fee Benchmarking</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Comprehensive provider and fee benchmarking goes beyond simple cost comparison. Plan sponsors must determine whether provider fees are reasonable relative to services provided, a critical fiduciary responsibility under ERISA. Our Live Bid benchmarking process uses your specific plan data to compare fee structure, investment options, and service quality across different providers. We conduct annual custom benchmarking studies that review over 450 data points per bidder.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fiduciary Support for Provider Selection</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Selecting competent service providers is one of the most important fiduciary obligations. Our fiduciary support services help you meet ERISA requirements throughout the evaluation process. We act as your 3(21) co-fiduciary or 3(38) investment manager, providing documented oversight that protects you from personal liability. Our advisors have been registered and acting as named fiduciaries since the first day we started our practice.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Investment Analysis & Provider Comparison</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Provider evaluation requires assessing investment options and performance monitoring capabilities that different providers offer. Our investment analysis services evaluate how well potential vendors can build and maintain a diversified investment menu including mutual funds, index funds, and other options appropriate for your participants&apos; retirement goals. Our proprietary 10-point pass/fail scoring system measures fund performance across multiple factors.
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
