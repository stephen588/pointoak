import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Comprehensive Financial Planning | PointOak Retirement Advisors",
  description: "Comprehensive financial planning that integrates investments, taxes, retirement, and estate goals into one coordinated strategy. Independent fiduciary guidance from PointOak.",
  alternates: {
    canonical: "https://www.pointoak.com/services/comprehensive-financial-planning/"
  }
};

const highlights = [
  "$120B+ in retirement plan assets evaluated quarterly",
  "Named 3(21) and 3(38) fiduciary status under ERISA, from day one",
  "10,000+ benchmarks per year, 450+ data points per bidder"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We review your plan structure, investment lineup, fees, and documentation to identify gaps and explore opportunities to improve your finances and governance."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We develop strategies and present findings with supporting data so your committee can make confident financial decisions aligned with your plan&apos;s objectives."
  },
  {
    number: 3,
    title: "Implement",
    description: "We work with your providers to execute changes, document every decision, and establish the monitoring cadence that keeps your plan on track."
  }
];

const faqs = [
  {
    question: "How much does comprehensive financial planning for a retirement plan cost?",
    answer: "Fees vary by scope and plan size; PointOak scopes each engagement individually. Common advisory models include roughly 1% of AUM, retainers of $2,500 to $9,200, or hourly rates of $200 to $400, per NerdWallet&apos;s 2026 guidance. PointOak does not publish standardized pricing because plan complexity and scope vary significantly. Contact us and we&apos;ll scope accurately."
  },
  {
    question: "What&apos;s the difference between comprehensive fiduciary support and a one-time investment review?",
    answer: "Comprehensive support includes ongoing monitoring, governance documentation, and named fiduciary accountability. A one-time review is a point-in-time snapshot. The CFP Board&apos;s 7-step financial planning process includes monitoring and updating as core steps, and a one-time review does not fulfill ERISA&apos;s ongoing fiduciary standard of care. PointOak maintains that cadence with quarterly monitoring, annual reviews, and a continuously updated fiduciary file."
  },
  {
    question: "How often should a retirement plan be reviewed?",
    answer: "Quarterly for investments, annually for a full review, and at least every three years for fee benchmarking. PointOak conducts quarterly investment monitoring and delivers annual fiduciary plan reviews to your committee. Industry guidance supports a fee benchmarking cadence of at least every three years, per USI&apos;s 2025 plan fee review guidance."
  },
  {
    question: "Does comprehensive retirement plan support include tax planning or estate plan advice?",
    answer: "No. PointOak does not provide tax planning, estate plan services, or guidance on estate taxes or income tax structuring. PointOak&apos;s scope covers ERISA fiduciary governance, investment management, and plan design. We coordinate with your tax and legal counsel for matters outside that scope and do not provide legal advice."
  },
  {
    question: "What improves retirement plan participation rates?",
    answer: "Automatic enrollment is the highest-impact plan design lever for improving participation and long-term savings outcomes. Plans with automatic enrollment show 94% participation compared with 64% for voluntary enrollment, per PSCA&apos;s summary of Vanguard&apos;s 2025 data. PointOak helps plan sponsors implement auto-enrollment and auto-escalation with full documentation and committee support."
  },
  {
    question: "What are the SECURE 2.0 auto-enrollment requirements?",
    answer: "Certain new plans must default eligible employees at a minimum 3% contribution rate with at least 1% annual escalation until reaching 10% to 15%. These requirements took effect in 2025 per PLANADVISER. Existing plans are not required to adopt auto-enrollment, but PointOak reviews participation and savings impact for all clients during annual plan design assessments."
  },
  {
    question: "Should we use a specialist or our recordkeeper&apos;s advisory services?",
    answer: "Recordkeeper-affiliated advisors have inherent conflicts; an independent specialist has no proprietary products to defend. PointOak benchmarks your recordkeeper objectively and can recommend alternatives when the data supports it. Independence ensures every recommendation reflects your employees&apos; interests, not a parent company&apos;s revenue priorities."
  },
  {
    question: "What credentials should I look for in a retirement plan financial advisor?",
    answer: "Named fiduciary status under ERISA, retirement plan specialization, and verifiable credentials through FINRA BrokerCheck. PointOak&apos;s advisors act as named 3(21) or 3(38) fiduciaries with all clients, and the firm generates over 90% of its revenue from corporate retirement plans. Verify advisor credentials at FINRA BrokerCheck."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Comprehensive Financial Planning and Fiduciary Support Services",
  "provider": {
    "@type": "FinancialService",
    "name": "PointOak Retirement Advisors"
  },
  "serviceType": "Financial Planning",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.pointoak.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "For Individuals & Families",
      "item": "https://www.pointoak.com/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Comprehensive Financial Planning",
      "item": "https://www.pointoak.com/services/comprehensive-financial-planning/"
    }
  ]
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our Process",
  "step": processSteps.map((step, idx) => ({
    "@type": "HowToStep",
    "position": idx + 1,
    "name": step.title,
    "text": step.description
  }))
};

export default function ComprehensiveFinancialPlanningPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Individuals & Families", href: "/services" },
          { label: "Comprehensive Financial Planning" }
        ]}
        title="Comprehensive Financial Planning and Fiduciary Support Services"
        subtitle="Comprehensive financial planning for retirement plan sponsors means structured governance, documented financial decisions, and ongoing monitoring built around your employees&apos; long term goals, not wealth management advice. The DOL&apos;s EBSA recovered $1.384 billion for employee benefit plans in FY 2024, a clear signal that fiduciary process failures carry real consequences. PointOak Retirement Advisors helps plan sponsors meet those obligations with expertise, independence, and accountability."
      />

      {/* Highlights Bar */}
      <section className="bg-cloud-blue py-8 md:py-10">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                <p className="text-text-gray font-outfit text-sm md:text-base leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Comprehensive Financial Planning Works for Plan Sponsors
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              A holistic approach to retirement planning integrates investment strategy, fee benchmarking, risk oversight, fiduciary documentation, and regulatory compliance into an integrated planning process. As your investment adviser and named fiduciary under ERISA, PointOak applies a proprietary 10-point pass/fail scoring system to quarterly monitoring, measuring risk-adjusted returns, peer group rankings, fund manager tenure, and risk tolerance across your full portfolio. That process produces defensible financial decisions your committee can stand behind.
            </p>
            <p>
              What separates comprehensive support from a one-time review is documentation. Every recommendation, committee meeting, and monitoring output is maintained in a Virtual 401(k) Fiduciary File, the primary audit defense artifact for plan sponsors facing DOL scrutiny. That infrastructure is what PointOak builds from day one.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Image Break */}
      <AnimateOnScroll variant="fade">
      <section className="bg-cloud-blue py-4">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/asset-advisor-06.png"
              alt="Financial planning team meeting with retirement plan committee"
              fill
              className="object-cover object-[center_25%]"
              sizes="(max-width: 1170px) 100vw, 1170px"
            />
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Benefits */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Comprehensive Fiduciary Support
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Reduced Fiduciary Liability Exposure
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Documented governance artifacts (an Investment Policy Statement, committee records, and a maintained fiduciary file) demonstrate proper management of fiduciary obligations if your plan faces an audit. Achieving this level of documentation protects resources and keeps your financial goals on track.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Higher Participation and Savings Outcomes
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plans with automatic enrollment show 94% participation compared with 64% for voluntary enrollment plans, per PSCA&apos;s summary of Vanguard data. PointOak helps plan sponsors explore auto-enrollment and auto-escalation features that improve employees&apos; future retirement security, making investing the default choice rather than something current income pressures cause participants to defer.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Ongoing Fee and Investment Oversight
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Average mutual fund expense ratios in 401(k) plans fell 44% for hybrid funds and 69% for bond funds from 2000 to 2024, per ICI. Quarterly monitoring and annual benchmarking ensure your plan achieves those savings and your assets stay properly managed, freeing up money your organization can redirect toward funding other business priorities.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Services */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Our Fiduciary Support Services
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            The right service depends on how much discretion you want to retain and the maturity of your committee governance.
          </p>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                3(21) Co-Fiduciary Services
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                PointOak acts as your investment adviser, providing guidance while your committee retains final authority over financial decisions. This comprehensive approach lets plan sponsors provide advice to their committees with an expert sharing accountability on every recommendation. Best for committees with experienced members who want structured support and clear documentation.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                3(38) Investment Manager Services
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                PointOak assumes discretionary investment management responsibility under ERISA, handling investment strategy development and ongoing monitoring. Committee workload is reduced; broader accountability shifts to PointOak. Best for sponsors seeking to fully delegate investment management.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Investment Policy Statement (IPS) Development
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                PointOak helps create a comprehensive IPS formalizing investment objectives, asset class guidelines, monitoring criteria, and governance rules. Without a current IPS, committees lack the documented resources needed for responsible fiduciary decision-making.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Virtual 401(k) Fiduciary File
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A centralized digital system maintaining all processes, procedures, and meeting records. This is your primary resource if the government initiates a plan inquiry or audit.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Annual Fiduciary Plan Review
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A comprehensive annual review covering investment performance, fee benchmarking, plan design, and regulatory updates. This creates a consistent governance rhythm and a dated record of due diligence to present to leadership.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Comparison Table */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Fiduciary Specialist vs. Generalist Wealth Management
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Plan sponsors regularly compare retirement plan specialists with a generalist financial advisor or wealth advisor at a broader wealth management firm. The difference has real implications.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-[#F3F4F6]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Factor</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">PointOak Fiduciary Support</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Generalist Wealth Advisor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Focus</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Corporate retirement plans</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Broad wealth management and other services</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fiduciary role</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Named 3(21) or 3(38) under ERISA</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Often non-discretionary or limited scope</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Benchmarking methodology</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">450+ data points, actual plan data</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Industry averages or infrequent review</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Revenue from retirement plans</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">90%+</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Typically a small share of business</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            A wealth advisor whose retirement plan work is a fraction of their business brings different priorities and shallower knowledge to your ERISA challenges. PointOak&apos;s entire practice is built around the potential risks, regulations, and objectives plan sponsors face.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs This */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Who Needs Comprehensive Fiduciary Support?
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Sponsors in Any Industry with Fiduciary Exposure
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                From public sector organizations to private business, plan fiduciaries face the same life challenges: committee turnover, regulatory change, fee scrutiny, and savings gaps. Managing a plan without a current IPS, documented benchmarks, or a defensible investment strategy means carrying potential risks that structured governance resolves.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Plans Falling Short on Participation or Current Needs
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Addressing participants&apos; current needs means understanding current income levels, saving rates, and plan design features that move behavior. PointOak helps you develop strategies connecting auto-enrollment, budgeting education, and contribution escalation to outcomes your employees can achieve.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                When It May Not Be the Right Fit
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If your plan is small and already managed by a specialist with current documentation, a targeted review may address current needs more efficiently. Contact us and we&apos;ll scope honestly.
              </p>
            </div>
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
                      <span className="font-outfit font-semibold text-white text-lg leading-none">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-gray font-outfit text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Why Choose PointOak */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
                Why Choose PointOak for Comprehensive Financial Planning?
              </h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                PointOak manages over $1 billion in client assets with a team of three partners bringing more than 50 years of collective experience. Our comprehensive financial planning integrates investments, taxes, retirement income, estate goals, and risk management into one coordinated strategy. Unlike advisors who focus on isolated pieces of your financial life, we bring everything together — ensuring your investment portfolio, tax strategies, and retirement plan work in harmony. As a fee-only, independent fiduciary firm with no proprietary products, we focus solely on your best interest. With fewer than 100 clients per partner, you receive the personalized attention and ongoing coordination that comprehensive planning requires.
              </p>
            </div>
            <div className="relative w-full h-[300px] lg:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/images/asset-couples-04.png"
                alt="Comprehensive financial planning data analysis and monitoring"
                fill
                className="object-cover object-[center_25%]"
                sizes="(max-width: 1024px) 100vw, 585px"
              />
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* About PointOak */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            About PointOak Retirement Advisors
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm headquartered in McLean, Virginia, specializing in retirement planning and wealth management for high-net-worth individuals and families. The firm has operated as a full-scope fiduciary since inception, managing over $1 billion in assets with a team of three partners bringing more than 50 years of collective experience. PointOak also serves corporate plan sponsors through its retirement plan consulting practice.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* FAQ Section */}
      <ServiceDetailFAQ faqs={faqs} />

      {/* Disclaimer */}
      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            Investment advisory services offered through PointOak Retirement Advisors, LLC. Published for U.S. residents only. Not all products and services are available in every state and through every representative. PointOak Retirement Advisors, LLC does not provide tax or legal advice.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
