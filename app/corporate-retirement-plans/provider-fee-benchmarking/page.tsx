import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { DollarSign, FileText, Target, TrendingUp } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Fee Benchmarking & Plan Analysis Services | PointOak",
  description: "Independent 401(k) fee benchmarking using Live Bid methodology. 450+ data points analyzed. Named fiduciary protection. Get your free consultation today.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/provider-fee-benchmarking/"
  }
};

const highlights = [
  "Named fiduciaries specializing in retirement plans",
  "450+ data points analyzed per provider",
  "Live competitive bidding, not database averages"
];

const subServices = [
  {
    title: "401(k) Fee Benchmarking",
    description: "Live Bid methodology uses your actual plan data across 450+ data points per provider to identify hidden costs and create defensible documentation.",
    href: "/corporate-retirement-plans/provider-fee-benchmarking/fee-benchmarking/",
    icon: DollarSign,
  },
  {
    title: "Recordkeeper RFP Services",
    description: "Complete request for proposal process management, from drafting specifications to coordinating responses and creating competitive pressure for better pricing.",
    href: "/corporate-retirement-plans/provider-fee-benchmarking/recordkeeper-rfp/",
    icon: FileText,
  },
  {
    title: "Service Provider Evaluation",
    description: "Side-by-side fee comparisons breaking down complex fee structures into clear all-in costs, making meaningful comparisons possible across different pricing models.",
    href: "/corporate-retirement-plans/provider-fee-benchmarking/provider-evaluation/",
    icon: Target,
  },
  {
    title: "Live Bid Benchmarking",
    description: "Actual competitive proposals from qualified providers using your specific plan characteristics, not generic industry averages or stale database data.",
    href: "/corporate-retirement-plans/provider-fee-benchmarking/live-bid/",
    icon: TrendingUp,
  },
];

const processSteps = [
  {
    number: 1,
    title: "Initial Plan Assessment",
    description: "You provide basic plan information, current fee disclosures, and plan documents. We confirm your plan details and timeline for the benchmark analysis."
  },
  {
    number: 2,
    title: "Data Collection and Analysis",
    description: "We gather your 408(b)(2) disclosures, Form 5500, and investment lineup. Our team calculates your true all-in fees, including hidden investment expenses."
  },
  {
    number: 3,
    title: "Live Competitive Bidding",
    description: "We coordinate with qualified providers to obtain competitive proposals based on your specific plan characteristics, plan assets, and requirements."
  },
  {
    number: 4,
    title: "Results Presentation",
    description: "You receive comprehensive reports comparing your current fees to competitive alternatives. We identify specific improvement opportunities and document everything for your fiduciary file."
  },
  {
    number: 5,
    title: "Implementation Support",
    description: "We help you negotiate with your current provider or implement a provider change. Ongoing monitoring ensures fees remain competitive through regular benchmarking."
  }
];

const faqs = [
  {
    question: "How much does 401(k) fee benchmarking cost?",
    answer: "Benchmarking investment is minimal compared to the cost of inaction. Research shows 80% of companies with 100+ employees are overpaying on administrative fees, often by tens to hundreds of thousands annually. Our Live Bid process typically identifies savings that far exceed benchmarking costs. We provide free initial consultations to discuss your specific situation and help you determine if your company's retirement plan needs evaluation."
  },
  {
    question: "What makes PointOak different from other 401(k) fee benchmarking services?",
    answer: "Three things set us apart: we generate over 90% of our revenue from retirement plans, making us specialists rather than generalists. Our Live Bid methodology analyzes 450+ data points per bidder using your actual plan information, not industry averages or stale data. We're registered named fiduciaries acting in 3(21) or 3(38) capacity with all clients, directly sharing your fiduciary liability and demonstrating our commitment to acting in the best interest of plan participants."
  },
  {
    question: "Should I benchmark fees if I just switched providers two years ago?",
    answer: "Yes. Industry fees decline 0.02% to 0.12% annually as recordkeeping becomes more efficient and competition intensifies. Plans benchmarked two years ago are likely paying more than current market rates for administration fees, investment management, and individual service fees. Plus, best practice and litigation trends support regular benchmarking every three years. Consistent benchmarking documents your ongoing fiduciary duty, not just point-in-time compliance."
  },
  {
    question: "How long does the 401(k) fee benchmarking process take?",
    answer: "Our Live Bid plan benchmarking typically takes four to six weeks from start to final presentation. Plan sponsors spend minimal time on the process—usually just one initial meeting to review plan documents and reviewing our final reports. We handle provider coordination, data collection, and analysis. If you choose to implement a provider change to reduce costs, that adds three to six months depending on plan complexity."
  },
  {
    question: "What is a reasonable 401(k) fee?",
    answer: "Reasonable fees depend on plan size, services provided, and participant count. Industry data shows average total plan costs of 1.09% for small plans ($5M in plan assets, 50 participants), 0.76% for medium plans ($50M assets), and under 0.50% for large plans ($500M+ assets). Plans paying above these industry averages, especially those above 0.30% in administration fees alone, are likely overpaying. We provide specific benchmarks and fee comparisons for your plan's characteristics."
  },
  {
    question: "Do warranties or ongoing services come with benchmarking?",
    answer: "Our plan benchmarking service includes comprehensive documentation for your Virtual 401(k) Fiduciary File, protecting you in DOL audits or litigation. We provide ongoing monitoring to track when your next benchmark is due, ensuring you maintain best-practice three-year cycles and continue meeting fiduciary obligations. Many clients engage us as their 3(21) or 3(38) named fiduciary for continuous plan oversight beyond benchmarking."
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Fee Benchmarking Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Fee Benchmarking",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function ProviderFeeBenchmarkingPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Provider & Fee Benchmarking" }
        ]}
        title="401(k) Fee Benchmarking Services"
        subtitle="You're concerned your company's retirement plan is overpaying, but you need proof, not guesswork. PointOak Retirement Advisors helps plan sponsors benchmark 401(k) fees using our comprehensive Live Bid process, identifying hidden costs and creating defensible documentation that protects you from fiduciary liability."
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
            Why Choose Us for 401(k) Fee Benchmarking?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Nearly 80% of companies with 100+ employees are overpaying on 401(k) administrative fees, making independent 401(k) fee benchmarking essential for plan fiduciaries meeting their fiduciary obligations. PointOak has been advising plan sponsors and plan participants since day one, generating over 90% of our revenue from working with corporate retirement plans.
            </p>
            <p>
              What sets us apart is our Live Bid plan benchmarking methodology. We perform over 10,000 benchmarks per year, analyzing 450+ data points per bidder using your actual plan data, not industry averages. As registered named fiduciaries acting in 3(21) or 3(38) capacity, we share your fiduciary duty and document everything to protect you from fiduciary liability.
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
            Our Provider &amp; Fee Benchmarking Services
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
            Common 401(k) Fee Benchmarking Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Hidden investment expenses</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Revenue sharing, 12b-1 fees, and wrap fees are buried in fund expense ratios. Your 408(b)(2) disclosure lists compensation sources, but determining your true all-in cost requires specialized expertise.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We identify all direct and indirect compensation paid from plan assets to providers. You receive clear reports showing exactly what your 401(k) plan pays.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Lack of internal expertise</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Employers don&apos;t have time to analyze complex fee structures or understand what constitutes reasonable fees for plans their size.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our retirement plan specialists handle the technical analysis. You receive clear recommendations in plain language, not consultant jargon.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Infrequent benchmarking</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Best practice calls for regular benchmarking every three years, but 60.5% of plan sponsors haven&apos;t conducted an RFP in four years.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We perform 10,000+ benchmarks annually. Our process is efficient and documented, making regular three-year benchmarking practical.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Conflicted advice</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Advisors affiliated with recordkeepers can&apos;t provide objective benchmarking of their parent company. Database fee comparisons lack the accuracy of live competitive bidding.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">As an independent firm, we have no conflicts. Our Live Bid methodology uses your actual plan information across 450+ data points.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">No follow-through after analysis</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Benchmark reports gather dust without implementation support. Plan fiduciaries receive data showing they&apos;re overpaying but lack guidance on negotiation or provider changes.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We provide ongoing support through negotiation or implementation. Our goal is documented fee improvement, not just reports.</td>
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
