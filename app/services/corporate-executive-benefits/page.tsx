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
  title: "Executive Benefits Planning | PointOak Retirement Advisors",
  description: "RSU, stock option, and deferred compensation planning coordinated with retirement income and tax strategy. Fee-only fiduciary. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/services/corporate-executive-benefits/"
  }
};

const highlights = [
  "Fee-only fiduciary since inception",
  "SEC-registered investment advisor",
  "Complimentary no-obligation consultation"
];

const benefitsData = [
  {
    title: "Tax-Event Coordination Across Compensation Types",
    description: "Morgan Stanley's 2025 research found 44% of executives involved in equity plan decisions have no formal financial plan. RSUs, ISOs, non-qualified stock options, and deferred compensation each carry distinct tax triggers and planning windows. Without coordination, every vesting event becomes a reactive decision rather than a strategic one."
  },
  {
    title: "Concentration Risk Reduction for Employer Stock",
    description: "IRS Publication 5992 confirms RSUs are generally taxed as ordinary income at vesting, not at grant. Once that event settles, holding company stock becomes a concentration question. A sell-or-hold framework based on total net worth and diversification targets replaces decisions driven by stock price sentiment. Investment decisions that reduce concentration risk protect retirement benefits from single-employer exposure."
  },
  {
    title: "Retirement-Income Integration for Equity Decisions",
    description: "Schwab's 2025 Workplace Survey found 44% of stock plan participants primarily think of equity compensation as helping finance retirement. Vesting schedules, exercise windows, and deferred compensation payout timing directly interact with Social Security claiming, retirement savings drawdown, and income sequencing. Investment decisions made today shape retirement income streams for decades."
  },
  {
    title: "Coordinated Planning With Your Tax and Legal Professionals",
    description: "PointOak coordinates investment decisions with your CPA and estate attorney so equity timing, tax strategy, and estate planning connect through one advisory relationship rather than siloed conversations. An integrated approach built around your full compensation package, retirement benefits, and cash flow eliminates gaps. Learn how our team coordinates planning."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Understand Your Equity Position",
    description: "We map your RSU grants, stock options, 401(k) contributions, and deferred compensation alongside your full financial picture and available investment funds."
  },
  {
    number: 2,
    title: "Map Tax Events and Planning Windows",
    description: "Each compensation type's tax trigger, vesting schedule, and expiration date is documented and prioritized by deadline."
  },
  {
    number: 3,
    title: "Design Your Coordinated Strategy",
    description: "Equity decisions integrate with retirement income planning, tax-aware withdrawal sequencing, and diversification targets for your portfolio."
  },
  {
    number: 4,
    title: "Implement With Your Tax and Legal Professionals",
    description: "We coordinate execution with your CPA, tax professional, and estate attorney so no decision happens in isolation."
  },
  {
    number: 5,
    title: "Monitor and Adjust",
    description: "Vesting events, tax law changes, and life changes trigger strategy reviews on top of scheduled check-ins."
  }
];

const whoNeedsData = [
  {
    title: "New Equity Grant, Promotion, or IPO Event",
    description: "A significant RSU grant, equity-heavy promotion, or IPO event at your company creates multiple decisions at once. When RSUs vest alongside stock options, tax and diversification choices converge in a compressed window with no room for a reactive approach. Multiple compensation types vesting simultaneously magnify downside risk when stock ownership is concentrated in one employer."
  },
  {
    title: "Retirement Within Five Years With Unvested Equity",
    description: "Retirement is approaching, and you hold unvested shares, unexercised options, or deferred compensation with payout elections ahead. Senior executives in this position face tightening planning windows across every compensation type simultaneously. Companies use these plans to retain top talent through retirement, which means your departure timeline directly affects your equity strategy."
  },
  {
    title: "Multiple Vesting Events in a Single Tax Year",
    description: "Multiple vesting events in one calendar year concentrate your tax exposure. Many employees delay action, waiting for better market conditions or avoiding the tax question entirely. Schwab's 2025 data found 49% of participants who had not sold or exercised were waiting on the market, while 29% cited tax concerns."
  },
  {
    title: "Evaluating a Deferred Compensation Election",
    description: "You are considering a deferred compensation election without a clear picture of employer credit risk or the payout constraints that 409A imposes. Our senior advisors review these elections alongside your total financial picture and business ownership exposure before the deadline passes."
  },
  {
    title: "Concentrated Employer Stock Across Accounts",
    description: "Your retirement and brokerage account both hold concentrated positions in company shares, with no diversification plan connecting that exposure to your total portfolio risk or retirement timeline. Without a framework for when to sell, loyalty and inertia replace strategy."
  }
];

const faqs = [
  {
    question: "How much does executive benefits planning cost?",
    answer: "PointOak charges an asset-based advisory fee with no commissions or hidden costs. The fee varies by account size and complexity. PointOak operates on a fee-only model, meaning compensation comes entirely from advisory fees, not product sales or commissions. The minimum is $500,000 in investable assets. The initial consultation is complimentary with no obligation, giving you the chance to discuss your equity compensation situation and determine whether ongoing advisory services fit your needs."
  },
  {
    question: "What is the difference between RSUs and stock options?",
    answer: "RSUs deliver shares at vesting; stock options give the right to buy shares at a set price. RSUs and stock options follow different tax rules, carry different risks, and require decisions at different points. The comparison table above outlines each type's tax trigger, planning window, and common mistakes. The critical distinction is that RSU holders face decisions after vesting, while option holders face decisions about when and whether to exercise."
  },
  {
    question: "How often should I review my equity compensation strategy?",
    answer: "Review your strategy at least annually and whenever a major vesting event or life change occurs. PointOak monitors plans on an ongoing basis with semi-annual reviews and additional meetings as needed. New vesting events, tax law changes, job transitions, and shifts in personal financial wellness or retirement timelines all trigger a review. Equity strategies must adjust as stock prices, tax brackets, and life circumstances change."
  },
  {
    question: "How are RSUs taxed when they vest?",
    answer: "RSUs are generally taxed as ordinary income at the fair market value on the vesting date. The Internal Revenue Service treats the vesting date as the taxable event. Payroll withholding covers collection, but the supplemental rate may not match your actual tax obligation. The post-vest hold or sell decision is a portfolio question since the taxable event has already occurred."
  },
  {
    question: "Should I sell RSUs as soon as they vest?",
    answer: "It depends on your concentration risk, portfolio balance, and whether holding serves a deliberate strategy. The tax event has already occurred at vesting, so the decision becomes whether the position fits your portfolio and retirement goals. Many participants hold out of inertia rather than a structured plan. A disciplined framework based on diversification targets and total net worth removes emotion from the sell decision."
  },
  {
    question: "How does deferred compensation work for executives?",
    answer: "Nonqualified deferred compensation lets executives postpone receiving income and the associated taxes to a later date. The election must typically be made before compensation is earned. The deferred amount remains a general obligation of the employer, creating credit risk unlike a 401(k). If the plan fails compliance requirements, consequences include accelerated taxation and penalties. PointOak reviews deferred comp elections alongside total retirement income and employer stability."
  },
  {
    question: "What should I look for in an advisor for equity compensation planning?",
    answer: "Look for tax-event fluency across compensation types, a concentration-risk framework, and fiduciary alignment. An effective advisor can provide tax-event analysis across RSUs, ISOs, NQSOs, and deferred compensation with no gaps between your equity strategy and retirement plan. Ask whether equity decisions integrate with retirement income planning and Social Security timing. Investors should confirm the advisor is a fee-only fiduciary with no product-sales incentives."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Executive Benefits Planning",
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
      "item": "https://www.pointoak.com/for-individuals-families/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Executive Benefits Planning",
      "item": "https://www.pointoak.com/services/corporate-executive-benefits/"
    }
  ]
};

export default function CorporateExecutiveBenefitsPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Individuals & Families", href: "/for-individuals-families" },
          { label: "Executive Benefits Planning" }
        ]}
        title="Executive Benefits Planning: RSUs, Stock Options, and Equity Compensation"
        subtitle="Executives and highly compensated employees accumulate RSUs, stock options, and deferred compensation without a strategy connecting those assets to tax events or retirement timing. PointOak coordinates your equity compensation decisions with retirement income planning, tax-aware strategies, and diversification targets through integrated wealth management."
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

      {/* Benefits of Executive Benefits Planning */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Executive Benefits Planning
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefitsData.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-navy font-outfit text-xl font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* How Executive Benefits Planning Works */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Executive Benefits Planning Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Each equity plan design creates a different tax trigger, planning window, and interaction with retirement benefits. When shares vest, the decision for restricted stock units differs from the exercise strategy for non-qualified stock options or the election timing for deferred compensation. Executive benefit programs designed to retain key executives layer these obligations across schedules where each compensation type is typically taxed at a different point.
            </p>
            <p>
              A nonqualified deferred compensation plan that fails IRC 409A requirements triggers regular income tax plus an additional 20% tax and premium interest (IRS IRM 4.23.5). That penalty makes deferred compensation review essential for executives with significant deferrals. A missed election or improper payout structure can dwarf the original tax benefit the plan was designed to deliver.
            </p>
            <p>
              Equity compensation decisions are too interconnected with your tax and retirement picture to manage reactively. <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule your consultation</Link>.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Image Break */}
      {/* Who Needs Executive Benefits Planning */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/services/executive-benefits.png"
                alt="Financial advisor consulting with executive about equity compensation and benefits planning"
                width={2936}
                height={1638}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
                Who Needs Executive Benefits Planning
              </h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Top executives, key employees, and highly compensated employees face these scenarios most often. Each one signals that coordination is overdue.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {whoNeedsData.map((item, idx) => (
              <div key={idx}>
                <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                  {item.title}
                </h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-[#F5F3EF] rounded-lg">
            <p className="text-text-gray font-outfit text-base leading-relaxed">
              <strong className="text-navy">When Executive Benefits Planning Might NOT Be the Right Fit:</strong> When equity compensation represents a minor share of total net worth and retirement planning is straightforward, a general financial advisor may be sufficient. PointOak&apos;s minimum is $500,000 in investable assets.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Executive Compensation Types Compared */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Executive Compensation Types Compared
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Five compensation types appear most often when employers at public companies use equity to attract executive talent and align pay with long-term company goals. Each demands different timing, carries different risk, and punishes different mistakes.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Compensation Type</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Tax Trigger</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Planning Window</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Primary Risk</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Common Mistake</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">RSUs (Restricted Stock Units)</td>
                  <td className="px-4 py-3 text-gray-700">Ordinary income at vesting (IRS Pub. 5992)</td>
                  <td className="px-4 py-3 text-gray-700">Between grant and vesting</td>
                  <td className="px-4 py-3 text-gray-700">Concentration in employer stock</td>
                  <td className="px-4 py-3 text-gray-700">Treating the post-vest hold as a default</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">ISOs (Incentive Stock Options)</td>
                  <td className="px-4 py-3 text-gray-700">AMT at exercise; capital gains at qualifying sale</td>
                  <td className="px-4 py-3 text-gray-700">Exercise timing relative to AMT and holding period</td>
                  <td className="px-4 py-3 text-gray-700">AMT surprise in high-exercise years</td>
                  <td className="px-4 py-3 text-gray-700">Exercising without modeling AMT impact</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">NQSOs (Non-Qualified Stock Options)</td>
                  <td className="px-4 py-3 text-gray-700">Ordinary income at exercise on the spread</td>
                  <td className="px-4 py-3 text-gray-700">Between grant and expiration</td>
                  <td className="px-4 py-3 text-gray-700">Expiration and lost value</td>
                  <td className="px-4 py-3 text-gray-700">Waiting until expiration forces a rushed decision</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Deferred Compensation (NQDC)</td>
                  <td className="px-4 py-3 text-gray-700">Deferred until payout; 409A failure triggers 20% penalty plus interest</td>
                  <td className="px-4 py-3 text-gray-700">Election before services are performed</td>
                  <td className="px-4 py-3 text-gray-700">Employer credit risk</td>
                  <td className="px-4 py-3 text-gray-700">Assuming deferral always saves taxes</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Employer Stock (Concentrated Position)</td>
                  <td className="px-4 py-3 text-gray-700">Depends on account type and sale timing</td>
                  <td className="px-4 py-3 text-gray-700">Ongoing</td>
                  <td className="px-4 py-3 text-gray-700">Portfolio concentration</td>
                  <td className="px-4 py-3 text-gray-700">Holding out of loyalty with no diversification plan</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-sm leading-relaxed mt-6 italic">
            Sources: IRS Publication 525, IRS Publication 5992, IRS IRM 4.23.5, SSA 2026 thresholds
          </p>

          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Integrated planning matters most when multiple compensation types overlap with retirement timing. Stock option strategies, RSU sell decisions, and deferred compensation elections all interact with each other and with your broader investment portfolio. A single modest grant with a straightforward retirement picture may not require this level of coordination, but executives managing overlapping plans benefit from a unified strategy.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* What To Expect: Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Executive Benefits Planning Process
          </h2>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[19px] top-10 bottom-10 w-px bg-[#C1C5C9] hidden sm:block" />

            <div className="flex flex-col gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 z-10">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                      <span className="font-outfit font-semibold text-white text-lg leading-none">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step content */}
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
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Why Choose PointOak for Executive Benefits Planning
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              The 2026 Social Security wage base is $184,500 (<a href="https://www.ssa.gov/cola/factsheets/2026.html" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">SSA 2026 fact sheet</a>). For executives with large vesting events, that threshold affects payroll tax exposure and retirement benefit calculations. PointOak&apos;s experience advising employers on executive benefit programs and <Link href="/about" className="text-medium-blue hover:text-navy underline">retirement plan consulting</Link> means your advisor understands how equity compensation interacts with retirement timing across hundreds of participant scenarios. Our clients receive coordinated guidance that connects equity decisions to their broader financial picture.
            </p>
            <p>
              Payroll withholding on RSUs does not mean taxes are handled. Supplemental rates rarely match actual liability for high earners whose equity should supplement retirement income over time. PointOak&apos;s fee-only fiduciary model and wealth management services are built around your situation, not product sales or commission-driven recommendations.
            </p>
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
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-6">
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. SEC-registered and held to the fiduciary standard since inception, with over $1.08 billion in assets under management and over 50 years of collective team experience. We serve clients in-person across the DC/MD/VA metro area and virtually nationwide. <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule a complimentary consultation</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* FAQ Section */}
      <ServiceDetailFAQ faqs={faqs} />

      {/* Final CTA */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 text-center">
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            Your equity compensation decisions carry retirement and tax consequences that compound over time. <Link href="/contact" className="text-medium-blue hover:text-navy underline font-semibold">Book a complimentary consultation</Link> or call (703) 595-4444.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <CTASection />
      <Footer />
    </main>
  );
}
