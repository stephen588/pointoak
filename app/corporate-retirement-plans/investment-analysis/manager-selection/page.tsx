import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Investment Manager Evaluation Services | PointOak",
  description: "Investment manager evaluation for 401(k) plans. Named fiduciary status, proprietary 10-point scoring, $120B+ assets evaluated quarterly. Contact us.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/investment-analysis/manager-selection/"
  }
};

const highlights = [
  "Named fiduciary status under ERISA",
  "Evaluating $120B+ in assets quarterly",
  "Retirement plan specialists since day one"
];

const processSteps = [
  {
    number: 1,
    title: "Initial Consultation and Discovery",
    description: "You schedule a consultation to discuss your current plan structure and investment concerns. We learn about your investment committee&apos;s composition, your existing advisor relationships, and specific challenges you&apos;re facing. This discovery helps us tailor our evaluation approach to your unique situation and investment objectives."
  },
  {
    number: 2,
    title: "Comprehensive Investment Analysis",
    description: "Our team conducts a thorough evaluation of your investment lineup using our 10-point scoring methodology combining quantitative analysis and qualitative analysis. We examine manager performance, investment management fees, team depth, investment strategy consistency, and alignment with your Investment Policy Statement. You receive a detailed report identifying strengths, weaknesses, and specific opportunities for improvement across your investment portfolios."
  },
  {
    number: 3,
    title: "Committee Presentation and Recommendations",
    description: "We present our findings to your investment committee with clear, actionable recommendations based on our comprehensive due diligence processes. You review the analysis, ask questions, and make informed decisions about fund changes or manager replacements. We provide the documentation and rationale your committee needs to demonstrate fiduciary prudence without pressure or rushed timelines."
  },
  {
    number: 4,
    title: "Implementation and Ongoing Monitoring",
    description: "After you approve changes, we coordinate with your recordkeeper to implement fund replacements and share class optimizations. Our quarterly monitoring continues to evaluate your lineup using the same rigorous methodology. You stay informed through regular reports and annual committee meetings, with ongoing support from your dedicated advisor who understands your plan&apos;s unique needs."
  }
];

const faqs = [
  {
    question: "How much does an investment manager evaluation cost?",
    answer: "Investment manager evaluation fees vary based on plan size and service scope. As a 3(21) investment advisor, we provide advisory services where you retain decision authority. As a 3(38) investment manager, we assume discretionary control over fund selection and monitoring. We offer transparent pricing with no hidden fees or revenue sharing arrangements. Contact us for a customized proposal based on your plan assets and participant count."
  },
  {
    question: "What makes PointOak different from other investment advisors?",
    answer: "Three things set us apart. First, we generate over 90% of our revenue from corporate retirement plans, making us true specialists rather than generalists. Second, all our advisors act as named fiduciaries under ERISA, providing direct liability protection you won&apos;t get from consultants. Third, our proprietary 10-point scoring system evaluates $120 billion in retirement plan assets quarterly, giving us unique perspective on manager performance and industry trends that supports better decision-making for our clients."
  },
  {
    question: "Should we hire a 3(21) investment advisor or a 3(38) investment manager?",
    answer: "A 3(21) co-fiduciary provides investment recommendations through operational due diligence and shares liability, but your committee retains final decision-making authority and responsibility. A 3(38) investment manager assumes full discretionary control over fund selection and monitoring, limiting your liability to selecting and monitoring the manager itself. Choose 3(21) if your committee wants to stay involved in investment decisions. Choose 3(38) if you want to outsource the responsibility completely while focusing on your core business."
  },
  {
    question: "How long does the investment evaluation process take?",
    answer: "Initial investment lineup evaluation typically takes two to three weeks from data receipt to final report delivery. We gather information about your current funds, run our analysis using both quantitative analysis and qualitative analysis methods, and prepare recommendations for your investment committee. Quarterly monitoring is ongoing once established. Implementation timelines for fund changes depend on your recordkeeper&apos;s processes but usually complete within 30 days of committee approval."
  },
  {
    question: "How do I know if our investment lineup needs improvement?",
    answer: "Warning signs include funds consistently underperforming their benchmarks, expense ratios higher than peer averages, frequent manager turnover at fund companies, investment strategy drift from stated objectives, or participant complaints about limited options. If your committee hasn&apos;t conducted a comprehensive review in three or more years, you&apos;re likely overdue. Many plan sponsors also discover issues when preparing for DOL audits or during provider benchmarking. Our initial evaluation identifies specific opportunities for enhancement."
  },
  {
    question: "What is the difference between qualitative and quantitative analysis?",
    answer: "Quantitative analysis examines measurable data like risk-adjusted returns, expense ratios, tracking error, and Sharpe ratios to assess fund performance numerically across different asset classes and market conditions. Qualitative analysis evaluates non-numeric factors like investment team depth, firm stability, investment philosophy consistency, portfolio construction methodology, and the overall investment approach. Both are essential for comprehensive investment manager evaluation. We combine sophisticated quantitative measurement with qualitative due diligence to provide complete assessments."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Investment Manager Evaluation Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Investment Manager Evaluation and Selection",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function ManagerSelectionPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Investment Analysis", href: "/corporate-retirement-plans/investment-analysis" },
          { label: "Manager Selection & Replacement" }
        ]}
        title="Investment Manager Evaluation for Retirement Plans"
        subtitle="You&apos;re responsible for selecting and monitoring investment managers, but the maze of DOL regulations and 40,000+ mutual funds makes it overwhelming. PointOak specializes exclusively in retirement plans, applying institutional-grade analytics and acting as your named fiduciary to protect you from liability while ensuring your participants have access to prudent investment options."
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
            Why Choose Us for Investment Manager Evaluation?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Excessive-fee lawsuits against plan sponsors rose 35% in 2024, and the DOL&apos;s expanded fiduciary definition increases your compliance obligations. PointOak has been registered and acting as a fiduciary since our first day in practice. We generate over 90% of our revenue from corporate retirement plans, which means we&apos;re fully dedicated to helping you achieve successful retirement outcomes for your employees.
            </p>
            <p>
              What sets us apart is our proprietary 10-point pass/fail scoring system that evaluates asset managers and investment managers across multiple factors including team depth, investment strategy consistency, and manager performance. We can act as either a 3(21) co-fiduciary providing recommendations or a 3(38) investment manager with full discretionary authority.
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
            Our Investment Manager Evaluation Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Investment Policy Statement Development</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your Investment Policy Statement serves as the foundation for all investment decisions and demonstrates fiduciary prudence. We draft comprehensive IPS documents that outline your plan&apos;s investment objectives, asset class guidelines, risk tolerance parameters, and manager selection criteria aligned with your organizational goals and participant demographics.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Initial Investment Lineup Evaluation</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We conduct a comprehensive assessment of your existing investment options to identify opportunities for improvement across all asset classes. Our evaluation examines manager performance relative to appropriate benchmarks, investment management fees compared to peer groups, investment team tenure and stability, investment style consistency, and alignment with your Investment Policy Statement.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Quarterly Investment Monitoring</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Ongoing monitoring is essential to fulfilling your fiduciary duty and ensuring investment managers continue to execute as expected under changing market conditions. We apply our proprietary 10-point pass/fail scoring system to evaluate over $120 billion in retirement plan assets every quarter, measuring fund performance across multiple factors including risk-adjusted returns, style consistency, and expense ratios.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Investment Fee & Share Class Review</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Investment management fees directly impact participant retirement outcomes, and ERISA requires plan fiduciaries to ensure expenses are reasonable. We analyze your investment lineup&apos;s expense ratios and determine whether you&apos;re using the most appropriate share classes available on your recordkeeping platform.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fund Replacement Recommendations</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                When our evaluation process identifies underperforming or inappropriate funds, we provide specific guidance on replacement options. Our recommendations consider not just past performance but also the fund&apos;s investment strategy, management team stability, fee structure, portfolio construction methodology, and fit within your overall lineup across multiple asset classes.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Annual Investment Committee Meeting</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your investment committee needs regular education and review to fulfill fiduciary responsibilities effectively. We conduct annual meetings to review our analysis and recommendations, discuss portfolio construction and asset allocation, explain market conditions affecting fund performance, and address committee member questions about investment due diligence and the manager selection process.
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
            Common Investment Manager Evaluation Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Overwhelming fiduciary liability exposure</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Excessive-fee lawsuits rose 35% in 2024, and the DOL&apos;s expanded fiduciary definition creates new compliance obligations for plan sponsors selecting investment managers and asset managers.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We act as your 3(21) co-fiduciary or 3(38) investment manager, assuming direct liability for investment advice or decisions and protecting you through documented diligence processes.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Lack of investment expertise</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Investment committees often include HR professionals and executives without institutional investment backgrounds tasked with evaluating 40,000+ mutual funds across multiple asset classes and determining the best managers for participants.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our retirement plan specialists apply institutional measurement techniques developed through evaluating $120 billion in assets quarterly, translating complex analysis into clear recommendations your team can understand.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Time drain of ongoing monitoring</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">ERISA requires quarterly investment monitoring to ensure managers execute as expected, but plan sponsors must balance this responsibility with their primary job functions and business operations.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We handle the entire monitoring process using our proprietary 10-point scoring system, delivering actionable quarterly reports that identify issues before they impact participant outcomes and long-term success.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Underperforming investment managers</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Research shows plan sponsors hire managers after strong performance, but post-hiring returns are typically indistinguishable from zero as return-chasing behavior fails to deliver results and future results disappoint expectations.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our evaluation methodology focuses on investment process consistency, team stability, and risk management rather than recent returns, helping you avoid performance-chasing mistakes and select one manager at a time deliberately.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Generic cookie-cutter recommendations</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Many advisors apply the same investment lineup to every plan, regardless of participant demographics, creating misalignment between fund offerings and actual workforce needs across different investment portfolios.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We customize investment analysis to your specific plan characteristics, considering factors like participant age distribution, salary levels, risk tolerance, and financial sophistication to build appropriate menus.</td>
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
