import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Executive Benefits Planning | PointOak Retirement Advisors",
  description: "Specialized planning for RSUs, stock options, deferred compensation, and other executive benefits. PointOak helps you make the most of complex compensation packages with independent fiduciary guidance.",
  alternates: {
    canonical: "https://www.pointoak.com/services/corporate-executive-benefits/"
  }
};

const highlights = [
  "22% flat withholding often underfunds the true tax bill",
  "92% of surveyed companies now grant time-based RSUs",
  "Independent fiduciary process documents every planning decision"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We review your compensation package, vesting schedules, and tax implications to map income timing across your planning horizon."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We identify gaps between existing equity and retirement income goals and coordinate with your tax professional and legal counsel."
  },
  {
    number: 3,
    title: "Implement",
    description: "We document every decision in your Virtual 401(k) Fiduciary File and schedule annual reviews as IRS thresholds and vesting milestones change."
  }
];

const faqs = [
  {
    question: "Do I owe more taxes if my company withheld at vesting?",
    answer: "Possibly, because IRS Publication 15 allows flat 22% supplemental withholding, which often underfunds the real income tax bill for highly compensated employees. If your marginal rate exceeds 22%, the gap becomes your liability at filing. Wages above $1 million are withheld at 37%. PointOak coordinates with your tax professional to model this before shares vest. PointOak does not provide tax advice."
  },
  {
    question: "What is the difference between RSUs and stock options?",
    answer: "RSUs convert to company shares automatically at vest; stock options give the right to buy shares at a set price and require an exercise decision. RSUs deliver guaranteed value as long as stock price is above zero. When executives sell shares after vest, they pay taxes only on gains above the cost basis. Nonqualified options are taxed at exercise, while incentive stock options may qualify for favorable treatment if holding rules per IRS Publication 525 are met. The right choice depends on each executive&apos;s financial situation."
  },
  {
    question: "How often should an executive benefits plan be reviewed?",
    answer: "At minimum annually, because IRS limits and vesting milestones shift the tax implications of your financial plan each calendar year. The 2026 401(k) limit is $24,500 and the Social Security wage base is $184,500 (IRS Topic 751). NQDC election windows are tied to calendar-year deadlines. PointOak schedules annual reviews to keep each executive&apos;s plan aligned with current rules."
  },
  {
    question: "What is a nonqualified deferred compensation plan?",
    answer: "An NQDC plan lets a select group of highly compensated employees defer income to a later date, pushing income taxation past the calendar year it is earned. IRS Publication 5528 defines NQDC plans as arrangements paid in a later year than earned. Unlike 401(k) balances, NQDC balances are unsecured employer obligations. Election timing and distribution events are governed by 409A rules, making plan documentation critical."
  },
  {
    question: "What happens if a 409A rule is violated?",
    answer: "A 409A violation triggers a 20% additional tax on the deferred amount plus interest, applied to the executive in the year the compensation vests. Per 26 USC 409A, common triggers include missed election deadlines and improper distribution timing. PointOak documents plan design rationale and coordinates with legal counsel but does not provide legal or tax advice. An attorney familiar with executive compensation should review all NQDC documents."
  },
  {
    question: "What is a SERP?",
    answer: "A SERP (supplemental executive retirement plan) is an employer-funded benefit that provides retirement income above what qualified plans can deliver to senior executives. SERPs are a form of nonqualified deferred compensation offered to a select group of executives, providing a more generous formula of retirement income than a standard 401(k). Funding options include company assets, a rabbi trust, or a life insurance policy. PointOak helps document the selection and monitoring process."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Executive Benefits Planning Services",
  "provider": {
    "@type": "FinancialService",
    "name": "PointOak Retirement Advisors"
  },
  "serviceType": "Executive Compensation Planning",
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
      "name": "Corporate Executive Benefits",
      "item": "https://www.pointoak.com/services/corporate-executive-benefits/"
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

export default function CorporateExecutiveBenefitsPage() {
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
          { label: "Corporate Executive Benefits" }
        ]}
        title="Executive Benefits Planning: Equity Compensation and Retirement Income Strategies"
        subtitle="Many executives hit the $24,500 401(k) elective deferral limit and still need a structured path to retirement income. Restricted stock units, stock options, and nonqualified deferred compensation plans exist precisely for that gap. PointOak Retirement Advisors helps plan sponsors build a financial plan that captures every available advantage and documents the rationale at every step."
      />

      {/* Highlights Bar */}
      <section className="bg-cloud-blue py-8 md:py-10">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, idx) => (
              <AnimateOnScroll key={idx} delay={idx + 1}>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <p className="text-text-gray font-outfit text-sm md:text-base leading-relaxed">
                    {highlight}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-16 lg:py-20">
          <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
            <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
              How Executive Benefits Planning Works
            </h2>
            <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
              <p>
                Equity compensation delivers income through vesting schedules tied to time, performance, or both. When shares vest, the IRS treats that value as ordinary income subject to federal taxes, and employers withhold at a flat 22% for supplemental wages up to $1 million (37% above that, per IRS Publication 15). That rate rarely matches a senior executive&apos;s marginal income tax rate, making coordination with a tax professional essential.
              </p>
              <p>
                The instrument determines when taxation applies and shapes your tax planning approach. Restricted stock units convert to company shares on a preset later date at no cost to the employee, while incentive stock options require a holding period (the later of one year after transfer or two years after grant, per IRS Publication 525) to qualify for favorable treatment. Nonqualified deferred compensation plans allow highly compensated employees to defer income beyond qualified-plan limits, but 409A violations carry a 20% additional tax plus interest under 26 USC 409A.
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
                src="/images/asset-corporate-01.png"
                alt="Corporate executive benefits planning meeting"
                fill
                className="object-cover object-[center_25%]"
                sizes="(max-width: 1170px) 100vw, 1170px"
              />
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Benefits */}
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <AnimateOnScroll>
            <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
              Benefits of Executive Benefits Planning
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll delay={1}>
              <div>
                <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                  Reduce Tax Timing Surprises
                </h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">
                  IRS Publication 15 confirms supplemental wages are withheld at a flat 22%, which often underfunds the actual income tax owed when an RSU grant vests in a high-income calendar year. A documented planning process models the gap before shares vest, protecting cash flow and reducing underpayment risk.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={2}>
              <div>
                <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                  Supplement Retirement Income Beyond Plan Limits
                </h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">
                  The 2026 401(k) elective deferral limit is $24,500 (IRS IR-2025-111), a ceiling highly compensated employees reach quickly. NQDC plans and SERPs supplement retirement income by deferring compensation to a later date when ordinary income may be lower, coordinated with social security timing and retirement benefits from other sources.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={3}>
              <div>
                <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                  Retain Key Employees Through Total Compensation
                </h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">
                  An NFP survey cited by WorldatWork reports executives who understand their benefits are 2.3 times more likely to stay, yet only 29% say they comprehend what they have. A well-communicated executive benefits plan, including stock units, disability insurance, and death benefit coverage, reinforces that the compensation package is working to retain key executives and top talent.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <AnimateOnScroll>
            <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
              Our Executive Benefits Planning Services
            </h2>
            <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
              Which structure fits your executives depends on their financial situation, your company&apos;s equity plan, and retention goals.
            </p>
          </AnimateOnScroll>
          <div className="space-y-8">
            <AnimateOnScroll delay={1}>
              <div className="border-l-4 border-medium-blue pl-6">
                <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                  RSU Planning
                </h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">
                  Restricted stock units are typically offered as part of total compensation for key employees and senior executives. When vested RSUs convert to company shares, ordinary income and federal taxes apply immediately, establishing the cost basis for any future sale. PointOak coordinates with the employee&apos;s tax professional to manage calendar-year income spikes from each RSU grant.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={2}>
              <div className="border-l-4 border-medium-blue pl-6">
                <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                  Stock Option Strategies
                </h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">
                  Incentive stock options and nonqualified options shift taxation differently, each with distinct obligations tied to stock price and exercise timing. ISOs may qualify for favorable tax treatment if IRS holding rules are met but can trigger an AMT adjustment at exercise. PointOak documents the decision rationale and integrates timing strategy into each executive&apos;s broader financial plan.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={3}>
              <div className="border-l-4 border-medium-blue pl-6">
                <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                  NQDC and SERP Planning
                </h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">
                  NQDC plans allow a select group of senior executives to defer income beyond qualified-plan limits to a later date, deferring income taxation until distribution and building retirement savings outside the qualified-plan framework. A supplemental executive retirement plan can provide a more generous formula of retirement income than standard employer plans, funded through company assets or a life insurance policy. PointOak documents every election and distribution trigger to support 409A compliance.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={4}>
              <div className="border-l-4 border-medium-blue pl-6">
                <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                  Executive Life Insurance and Protection Benefits
                </h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">
                  A restricted endorsement bonus arrangement combines an employer bonus with an insurance policy that limits access to cash value until vesting completes. Disability insurance and death benefit coverage are other types of executive benefit programs that protect key executives and the business&apos;s success against unexpected events, completing a total compensation package that goes beyond cash and dividends.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <AnimateOnScroll>
        <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
          <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
            <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
              RSUs vs. Stock Options: Which Is Right for Your Executives?
            </h2>
            <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
              Both instruments are forms of equity compensation, but they shift tax timing and cost requirements differently. The right choice depends on your executives&apos; financial situation, stock price trajectory, and liquidity needs.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border border-[#F3F4F6]">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-6 py-4 text-left font-outfit text-base font-medium">Factor</th>
                    <th className="px-6 py-4 text-left font-outfit text-base font-medium">RSUs</th>
                    <th className="px-6 py-4 text-left font-outfit text-base font-medium">Stock Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Tax timing</td>
                    <td className="px-6 py-4 font-outfit text-base text-text-gray">Ordinary income at vest</td>
                    <td className="px-6 py-4 font-outfit text-base text-text-gray">At exercise (NQSOs) or qualifying sale (ISOs)</td>
                  </tr>
                  <tr className="bg-cloud-blue">
                    <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Value guarantee</td>
                    <td className="px-6 py-4 font-outfit text-base text-text-gray">Yes, unless stock price hits zero</td>
                    <td className="px-6 py-4 font-outfit text-base text-text-gray">No; worthless if price falls below strike</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Cost basis</td>
                    <td className="px-6 py-4 font-outfit text-base text-text-gray">Fair market value at vest</td>
                    <td className="px-6 py-4 font-outfit text-base text-text-gray">Strike (exercise) price</td>
                  </tr>
                  <tr className="bg-cloud-blue">
                    <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">AMT risk</td>
                    <td className="px-6 py-4 font-outfit text-base text-text-gray">Generally none</td>
                    <td className="px-6 py-4 font-outfit text-base text-text-gray">ISOs can trigger an AMT adjustment</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Cost to executive</td>
                    <td className="px-6 py-4 font-outfit text-base text-text-gray">None</td>
                    <td className="px-6 py-4 font-outfit text-base text-text-gray">Exercise price to acquire shares</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
              RSUs deliver guaranteed value at vest with simpler mechanics. ISOs give more control over when taxation applies but require holding-period discipline. For executives maxing qualified-plan limits, NQDC plans address what neither instrument can: deferring income past the calendar year it is earned.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Who Needs This */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <AnimateOnScroll>
            <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
              Who Needs Executive Benefits Planning?
            </h2>
          </AnimateOnScroll>

          <div className="space-y-8">
            <AnimateOnScroll delay={1}>
              <div>
                <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                  Executives Approaching a Large Vest Event
                </h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">
                  Concentrated company stock combined with flat supplemental withholding can create a significant tax gap in a single calendar year, particularly when a large RSU grant coincides with other compensation income.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={2}>
              <div>
                <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                  Highly Compensated Employees Maxing Qualified Plans
                </h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">
                  Once the $24,500 deferral limit is reached, NQDC plans and SERPs provide a structured path to supplement retirement income. Without a plan, excess compensation accumulates as taxable investments with no deferral advantage.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={3}>
              <div>
                <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                  Employers Building Retention Programs
                </h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">
                  A compensation package that includes stock units, disability insurance, and a restricted endorsement bonus arrangement signals long-term commitment, rewarding key employees whose performance drives the business&apos;s success.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={4}>
              <div>
                <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                  When Executive Benefits Planning May Not Be the Right Fit
                </h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">
                  If your company has no equity compensation plan and executive pay falls within standard qualified-plan limits, PointOak&apos;s fiduciary support or plan design services may address your needs without a separate executive benefits layer.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <AnimateOnScroll>
            <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
              What To Expect: Our Process
            </h2>
          </AnimateOnScroll>

          <div className="relative">
            <div className="absolute left-[19px] top-10 bottom-10 w-px bg-[#C1C5C9] hidden sm:block" />

            <div className="flex flex-col gap-6">
              {processSteps.map((step) => (
                <AnimateOnScroll key={step.number} delay={step.number}>
                  <div className="flex gap-6">
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
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose PointOak */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimateOnScroll>
              <div>
                <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
                  Why Choose PointOak Retirement Advisors for Executive Benefits Planning?
                </h2>
                <p className="text-text-gray font-outfit text-base leading-relaxed">
                  PointOak manages over $1 billion in client assets with a team of three partners bringing more than 50 years of collective experience. Executive compensation packages — RSUs, stock options, deferred compensation, and equity awards — require specialized knowledge to maximize value and minimize tax impact. Our deep background in retirement planning and wealth management gives us unique insight into coordinating these benefits with your broader financial strategy. As a fee-only, independent fiduciary firm with no proprietary products, we analyze your executive benefits objectively, coordinating with your tax advisor to optimize timing and tax efficiency. With fewer than 100 clients per partner, you receive the personalized attention complex executive benefits require.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade" delay={2}>
              <div className="relative w-full h-[300px] lg:h-[380px] rounded-lg overflow-hidden">
                <Image
                  src="/images/asset-advisor-08.png"
                  alt="Executive benefits planning strategy session"
                  fill
                  className="object-cover object-[center_25%]"
                  sizes="(max-width: 1024px) 100vw, 585px"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

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
