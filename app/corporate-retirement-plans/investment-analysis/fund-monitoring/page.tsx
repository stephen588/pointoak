import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Fund Monitoring Services | PointOak",
  description: "Expert 401(k) fund monitoring from named fiduciaries. Quarterly investment analysis of $120B+ assets. Protect your plan from $3.2M average settlement costs.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/investment-analysis/fund-monitoring/"
  }
};

const highlights = [
  "Named 3(21) and 3(38) fiduciaries under ERISA",
  "Quarterly monitoring of $120 billion in assets",
  "Proprietary 10-point investment scoring system"
];

const processSteps = [
  {
    number: 1,
    title: "Plan and Investment Policy Review",
    description: "We evaluate your current investment options, plan documentation, and Investment Policy Statement to establish baseline performance and identify improvement opportunities."
  },
  {
    number: 2,
    title: "Initial Investment Analysis",
    description: "Your dedicated advisor conducts comprehensive due diligence on all plan investments using our proprietary 10-point scoring system across multiple performance factors."
  },
  {
    number: 3,
    title: "Recommendations and Implementation",
    description: "We present specific recommendations for fund changes, share class optimization, and IPS updates. You decide which changes to implement with our fiduciary support."
  },
  {
    number: 4,
    title: "Quarterly Monitoring",
    description: "We evaluate over $120 billion quarterly, measuring your fund performance against peer groups, tracking expense ratios, and monitoring risk-adjusted returns using institutional techniques."
  },
  {
    number: 5,
    title: "Annual Committee Meetings",
    description: "Your Investment Committee receives comprehensive presentations reviewing analysis, discussing recommendations, and documenting all decisions for audit protection and fiduciary compliance."
  }
];

const faqs = [
  {
    question: "How much does 401(k) investment monitoring cost?",
    answer: "Investment monitoring fees typically range from 0.25% to 0.75% of plan assets annually, depending on plan size and service complexity. Many plan sponsors find that fees recovered through our benchmarking process and share class optimization exceed advisory costs. We provide transparent fee proposals showing exactly what services are covered and how our fiduciary support protects you from the $3.2 million average litigation settlement."
  },
  {
    question: "What makes PointOak different from other retirement plan advisors?",
    answer: "Three things set us apart. First, we generate over 90% of our revenue from corporate retirement plans, demonstrating true specialization rather than treating DC plans as a side business. Second, all our advisors can act as 3(21) or 3(38) named fiduciaries under ERISA, providing direct liability protection. Third, we&apos;re independently owned with no parent company pressure to recommend proprietary products. Our investment methodology evaluates over $120 billion quarterly using a proven 10-point scoring system."
  },
  {
    question: "How long does the investment monitoring process take?",
    answer: "Initial analysis typically takes 30-45 days from plan documentation review through recommendations. Quarterly monitoring reviews occur within two weeks of quarter-end, with Investment Committee meetings scheduled at your convenience. The process is designed to minimize demands on your time while providing comprehensive fiduciary oversight. We handle coordination with third party administrators and recordkeepers to implement any changes."
  },
  {
    question: "How often should 401(k) investments be monitored?",
    answer: "The Department of Labor and courts expect ongoing prudent monitoring as a separate fiduciary duty established in the Supreme Court Tibble decision. We conduct quarterly reviews to demonstrate procedural prudence and catch performance issues early. Annual monitoring is the minimum best practice, but quarterly analysis provides stronger audit protection and ensures investments consistently serve participants&apos; best interest."
  },
  {
    question: "What is the difference between 3(21) and 3(38) fiduciary?",
    answer: "A 3(21) co-fiduciary provides investment recommendations and advice while plan sponsors retain final decision-making authority. A 3(38) investment manager has discretionary responsibility for selecting and monitoring plan investments, assuming greater liability but relieving sponsors of investment decisions. Both are named fiduciaries under ERISA. We can act in either capacity depending on how much fiduciary responsibility you want to delegate."
  },
  {
    question: "How do you evaluate 401(k) fund performance?",
    answer: "Our proprietary 10-point pass/fail scoring system evaluates multiple characteristics including fund style consistency, risk-adjusted returns against peer groups, expense ratios, fund manager tenure, and asset flows. We measure performance using institutional techniques applied to over $120 billion in retirement plan assets quarterly. Funds must meet established criteria across all factors to pass. Those consistently failing receive replacement recommendations with documented rationale."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Fund Monitoring Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Investment Monitoring and Fiduciary Services",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function FundMonitoringPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Investment Analysis", href: "/corporate-retirement-plans/investment-analysis" },
          { label: "Fund Monitoring & Reporting" }
        ]}
        title="401(k) Fund Monitoring Services"
        subtitle="ERISA excessive fee litigation has surged 35%, with plan sponsors facing average settlements of $3.2 million. PointOak provides documented quarterly monitoring that protects you from liability while ensuring your plan investments serve participants&apos; best interests."
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
            Why Choose Us for 401(k) Fund Monitoring?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Conflicted investment advice costs retirement savers $17 billion annually, making independent fiduciary oversight essential for plan sponsors. PointOak generates over 90% of its revenue from working with corporate retirement plans. We act as your 3(21) or 3(38) named fiduciary, providing the specialized expertise you need to meet regulatory requirements and protect participants.
            </p>
            <p>
              What sets us apart is our investment methodology for evaluating over $120 billion in retirement plan assets every quarter. Our proprietary 10-point pass/fail scoring system combines sophisticated institutional measurement techniques with easy-to-understand analytics. As an independently owned firm, we offer unbiased advice free from pressure to push proprietary products of a parent company.
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
            Our Investment Monitoring Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Quarterly Investment Analysis</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our investment analysis provides comprehensive due diligence across all plan investments using institutional measurement techniques. We evaluate fund performance, expense ratios, risk-adjusted returns, peer group rankings, and fund manager tenure quarterly to ensure your investment options remain prudent and in participants&apos; best interest.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Investment Policy Statement Development</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We create comprehensive Investment Policy Statement documentation aligned with your plan&apos;s goals and participant characteristics. The IPS establishes clear guidelines for investment selection, ongoing monitoring requirements, and procedures for replacing underperforming funds. This documentation demonstrates procedural prudence and helps protect plan sponsors from fiduciary liability.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Share Class and Fee Analysis</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We conduct detailed analysis of investment fund fees and share classes to ensure plan participants aren&apos;t paying more than necessary. Many investments offer multiple share classes with materially different expense ratios. Our evaluation identifies opportunities to access lower-cost share classes and analyzes revenue sharing arrangements that can complicate true cost determination.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fund Replacement Recommendations</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                When investments fail to meet IPS criteria or consistently underperform peer groups, we provide specific guidance on fund replacement. Our process evaluates potential replacement options across the same characteristics used in ongoing monitoring, ensuring new selections align with your investment policy statement and serve participants&apos; retirement savings goals.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Target Date Fund Evaluation</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Target date fund consulting requires specialized analysis of glide paths, underlying asset allocation, and expense structures. We evaluate whether traditional target date funds or customized solutions best align with your participant demographics and characteristics. Our multi-step suitability process follows Department of Labor guidelines for TDF selection and monitoring.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Investment Committee Support</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We work directly with your plan&apos;s Investment Committee to provide education, analysis, and fiduciary guidance. Annual committee meetings review investment analysis, discuss fund recommendations, and document decisions for your Virtual 401(k) Fiduciary File. Our advisors help committee members understand their fiduciary responsibility and establish best practices for fulfilling ongoing monitoring requirements.
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
            Common 401(k) Fund Monitoring Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Investment selection complexity</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">More than 40,000 mutual funds available. Plan fiduciaries lack expertise to evaluate performance across expense ratios, risk-adjusted returns, peer rankings, and manager tenure.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our 10-point pass/fail scoring evaluates fund characteristics quarterly. We measure performance across multiple factors using the same institutional techniques applied to $120 billion in assets.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fee reasonableness uncertainty</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">80% of mid-to-large employers overpay on plan fees. Department of Labor requires fees be &quot;reasonable&quot; but provides no clear definition or safe harbor.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Annual benchmarking using our Live Bid process analyzes 450+ data points per provider. We create leverage to negotiate better fees and identify lower-cost share class opportunities.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Litigation exposure surge</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">ERISA excessive fee lawsuits increased 35% in 2024. Average settlement reached $3.2 million. Smaller plans with $250-$500 million increasingly targeted by plaintiff firms.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Named 3(21) or 3(38) fiduciary status provides direct liability protection. Documented quarterly monitoring and Virtual 401(k) Fiduciary Files demonstrate procedural prudence if audited.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Documentation gaps</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Supreme Court Tibble decision established ongoing monitoring as separate fiduciary duty. Many plans lack documented prudent process showing investment selection rationale and review procedures.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We document everything we do with clients. Virtual 401(k) Fiduciary Files maintain all processes, procedures, committee meetings, and investment decisions for complete audit protection.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Conflicted advisor recommendations</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Conflicted investment advice costs retirement savers $17 billion annually. Recordkeeper-affiliated advisors have inherent conflicts favoring parent company products and proprietary funds.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Complete independence as separately owned firm. We generate 90% of revenue from retirement plans with no parent company pressure to recommend specific investments or providers.</td>
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
            What To Expect - Our Process
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
