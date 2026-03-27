import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Investment Management Services | PointOak Retirement Advisors",
  description: "Disciplined, fiduciary investment management for high-net-worth individuals. PointOak builds portfolios aligned with your goals, risk tolerance, and tax situation.",
  alternates: {
    canonical: "https://www.pointoak.com/services/investment-management/"
  }
};

const highlights = [
  "$120B in plan assets evaluated quarterly",
  "Proprietary 10-point pass/fail scoring system",
  "Named fiduciary: 3(21) or 3(38) from day one",
  "10,000+ benchmarks per year"
];

const processSteps = [
  {
    number: 1,
    title: "IPS Development",
    description: "We draft an Investment Policy Statement aligned with your plan's financial assets, risk tolerance, and portfolio strategy."
  },
  {
    number: 2,
    title: "Lineup Evaluation",
    description: "We conduct a full assessment of your existing investment options — performance, expense ratios, share class suitability, and style consistency."
  },
  {
    number: 3,
    title: "Quarterly Monitoring",
    description: "Using our proprietary 10-point scoring system, we evaluate your fund lineup against IPS benchmarks and regulatory constraints every quarter."
  },
  {
    number: 4,
    title: "Fee & Share Class Review",
    description: "We examine share classes on your platform and compare expense ratios against current market benchmarks to reduce fee exposure."
  },
  {
    number: 5,
    title: "Committee Reporting",
    description: "We facilitate your annual committee meeting, presenting monitoring results with documented attendance, decisions, and supporting data."
  }
];

const faqs = [
  {
    question: "What is the difference between a 3(21) and a 3(38) investment manager?",
    answer: "A 3(21) co-fiduciary advises your committee while you retain final fund approval; a 3(38) investment manager assumes full discretionary responsibility for selecting and monitoring your plan's investments. Under 3(21), PointOak provides recommendations and your committee approves each fund change; under 3(38), PointOak makes those decisions directly. DOL guidance requires sponsors to prudently select and monitor the investment adviser under either arrangement. PointOak offers both structures."
  },
  {
    question: "Does hiring a 3(38) eliminate fiduciary liability?",
    answer: "No. Hiring a 3(38) reduces exposure for individual fund decisions but does not eliminate your obligation to prudently select and monitor the manager. DOL guidance states that even when you delegate investment decisions to a qualified investment adviser, you retain the duty to monitor. That means documenting selection criteria, reviewing credentials through FINRA BrokerCheck, and maintaining a fiduciary file with evidence of ongoing oversight. PointOak's Virtual 401(k) Fiduciary File supports that residual obligation directly."
  },
  {
    question: "Do target date funds require ongoing monitoring?",
    answer: "Yes. DOL guidance covers TDF selection and monitoring, including glide path evaluation, underlying asset class review, and expense ratio benchmarking. In 2022, TDFs represented 38% of 401(k) plan assets per ICI, making QDIA oversight consequential for most sponsors. PointOak's TDF consulting follows DOL guidelines and documents every evaluation in your fiduciary file."
  },
  {
    question: "How do we verify an investment manager's credentials?",
    answer: "Use FINRA BrokerCheck and the SEC's Investment Adviser Public Disclosure database to verify registration, credentials, disciplinary history, and disclosed conflicts of interest. FINRA makes BrokerCheck free and publicly accessible. For registered investment advisers, SEC IAPD includes Form ADV filings with fee disclosures and client service standards."
  },
  {
    question: "Why do plan fees and share classes matter?",
    answer: "In 2024, the asset-weighted average equity fund expense ratio was 0.40% per ICI; share class and fee differences are directly linked to long-term participant outcomes. Fee drag compounds over time and is one of the clearest places to demonstrate fiduciary prudence. PointOak's share class review and Live Bid benchmarking assist clients in identifying overcharges directly linked to participants' financial future."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Investment Management Services for Retirement Plans",
  "provider": {
    "@type": "FinancialService",
    "name": "PointOak Retirement Advisors"
  },
  "serviceType": "Investment Management",
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
      "name": "Investment Management",
      "item": "https://www.pointoak.com/services/investment-management/"
    }
  ]
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our Investment Management Process",
  "step": processSteps.map((step, idx) => ({
    "@type": "HowToStep",
    "position": idx + 1,
    "name": step.title,
    "text": step.description
  }))
};

export default function InvestmentManagementPage() {
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
          { label: "Investment Management" }
        ]}
        title="Investment Management Services for Retirement Plans"
        subtitle="Investment management for retirement plans is a fiduciary-governed, documented process of selecting, monitoring, and defending your 401(k) fund lineup under ERISA's standards of care. PointOak delivers named fiduciary investment management backed by a proprietary 10-point scoring system evaluating over $120 billion in assets every quarter."
      />

      {/* Highlights Bar */}
      <section className="bg-cloud-blue py-8 md:py-10">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* How Investment Management Works */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Investment Management Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              A prudent process starts with an Investment Policy Statement defining asset allocation targets, risk tolerance thresholds, and watchlist triggers for your investment portfolios. Each fund is then measured quarterly across asset classes including mutual funds, exchange traded funds, fixed income, and private equity alternatives, using benchmarks for portfolio performance, fund managers&apos; tenure, and expense ratios. That sequence turns portfolio management into a documentable record a DOL auditor can follow.
            </p>
            <p>
              PointOak&apos;s proprietary 10-point pass/fail system evaluates fund valuations, risk-adjusted returns, and share class suitability against IPS criteria every quarter. In 2024, 65% of active large-cap U.S. equity investment managers failed to achieve above-average fund performance relative to the S&P 500 per SPIVA, which is why disciplined criteria matter more than chasing returns.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Image Break */}
      <AnimateOnScroll variant="fade">
      <section className="bg-cloud-blue py-4">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="relative w-full rounded-lg overflow-hidden">
            <Image
              src="/images/services/investment-management.png"
              alt="Team collaborating on financial strategy and investment planning"
              width={2936}
              height={1638}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Benefits of Investment Management */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Investment Management
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Lower Fee Exposure
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                In 2024, the asset-weighted average expense ratio for equity mutual funds was 0.40% per the Investment Company Institute. Share class mismatches within the same fund family can push your plan above that benchmark without improving participant outcomes. PointOak&apos;s fee and share class review uncovers those inefficiencies and creates leverage to negotiate a reasonable price.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Documented Prudence for Audit Defense
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                DOL guidance states that plan fiduciaries retain responsibility for selecting and monitoring plan investments even when participants direct their own assets. A documented process with committee minutes, IPS records, and quarterly monitoring reports demonstrates procedural prudence. PointOak maintains that record inside your Virtual 401(k) Fiduciary File.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Evidence-Based Fund Selection
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                With over 40,000 investment companies offering funds across the financial world, selecting a lineup without a scoring rubric invites inconsistency. PointOak&apos;s scoring system gives your committee clear, defensible criteria tied to your plan&apos;s financial goals. That consistency protects your employees&apos; financial future and their long-term outcomes.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Virtual 401(k) Fiduciary File
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Every quarterly review, committee meeting, and fund change is documented in your Virtual 401(k) Fiduciary File — a living audit trail that demonstrates procedural prudence. If the DOL or FINRA triggers a review, your governance record is organized and ready.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Investment Management Services */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Our Investment Management Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Investment Policy Statement Development
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We draft an IPS aligned with your plan&apos;s financial assets, risk tolerance, and portfolio strategy. The IPS defines selection criteria and watchlist triggers your committee applies consistently. Ideal for plans building a new governance foundation or resetting a stale process.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Initial Investment Lineup Evaluation
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We conduct a full assessment of your existing investment options, evaluating portfolio performance, expense ratios, share class suitability, and style consistency across client portfolios. The output is a prioritized remediation plan.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Quarterly Investment Monitoring
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Using institutional measurement techniques applied to over $120 billion in plan assets each quarter, we evaluate your fund lineup against IPS benchmarks and review legislative and regulatory constraints affecting your options. Each cycle produces documented results your committee acts on.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Investment Fee and Share Class Review
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We examine share classes available on your platform and compare expense ratios against current market benchmarks. For clients managing significant financial assets, a lower-cost share class on your existing platform reduces fee exposure without requiring a fund change.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                TDF Consulting and QDIA Evaluation
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We evaluate target date fund glide paths, underlying asset classes, and fees using DOL-aligned diligence guidelines. In 2022, TDFs represented 38% of 401(k) plan assets per ICI, making this one of the highest-stakes investment decisions your plan fiduciaries make.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* 3(38) vs 3(21) Comparison Table */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            3(38) vs. 3(21): Which Structure Fits Your Plan?
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Both are ERISA-recognized investment management structures. The right choice depends on your governance capacity and how much decision authority your management teams want to retain.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-[#F3F4F6]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Factor</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">3(38) Discretionary Manager</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">3(21) Co-Fiduciary Advisor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Decision Authority</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Manager selects and changes funds directly</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Sponsor retains final approval</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Committee Workload</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Lower for fund decisions</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Higher; committee reviews each change</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Residual Sponsor Duty</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Must prudently select and monitor manager</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Retains accountability for fund changes</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Eligibility</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Bank, insurance company, or registered investment adviser</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Broader eligibility under ERISA</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Documentation</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Manager documents fund decisions</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Both parties document per IPS</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Choose 3(38) when your committee wants lower governance workload and clearer accountability lines. Choose 3(21) when leadership wants final approval on every change. Either way, DOL guidance requires prudent selection and monitoring of your investment adviser. PointOak serves as a named fiduciary under both structures.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs Investment Management */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Who Needs Investment Management?
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                No Documented Monitoring Process
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your plan has no IPS, no scoring criteria, and no written committee record. That is exactly the gap that draws DOL attention during an audit.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                TDF Used as QDIA Without Recent Review
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Target date funds require ongoing evaluation of glide paths and fees per DOL guidance. A fund chosen once and never revisited is not a prudent process.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Governance Fatigue
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your committee feels unequipped to evaluate fund-specific data. A 3(38) structure with quarterly monitoring reduces that burden while maintaining the governance record DOL requires.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                When It May Not Be the Right Fit
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If your organization already employs internal investment staff who maintain a documented IPS and run quarterly reviews, a <Link href="/corporate-retirement-plans/provider-fee-benchmarking" className="text-navy font-medium hover:underline">provider and fee benchmarking study</Link> may be more appropriate.
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
                Why Choose PointOak for Investment Management?
              </h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                PointOak manages over $1 billion in client assets with a team of three partners bringing more than 50 years of collective experience. Our background in institutional retirement plan consulting gives us unique insight into portfolio construction, risk management, and investment discipline — expertise that translates directly into better outcomes for individual investors. As a fee-only, independent fiduciary firm, we build portfolios without proprietary products or hidden conflicts. With fewer than 100 clients per partner, every portfolio receives the personalized attention and ongoing monitoring it deserves.
              </p>
            </div>
            <div className="relative w-full h-[300px] lg:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/images/asset-data-01.png"
                alt="PointOak team collaborating on investment analysis and fund monitoring"
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
            Investment advisory services offered through PointOak Retirement Advisors, LLC. This site is published for residents of the United States only. Not all of the products and services referenced on this site are available in every state and through every representative or advisor listed. PointOak Retirement Advisors, LLC does not provide tax or legal advice.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
