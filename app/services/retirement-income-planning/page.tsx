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
  title: "Retirement Income Planning | PointOak Retirement Advisors",
  description: "PointOak coordinates withdrawals, Social Security, taxes, and Medicare into one retirement income plan. Fee-only fiduciary since 2017. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/services/retirement-income-planning/"
  }
};

const highlights = [
  "Retirement plan specialists since 2005",
  "Fee-only fiduciary wealth advisory",
  "Complimentary no-obligation initial consultation"
];

const benefitsData = [
  {
    title: "Sustainable Cash Flow Through Retirement",
    description: "Guardrail spending frameworks replace fixed withdrawal rules with dynamic models that adjust to market risk. We stress-test portfolios against thousands of scenarios to calculate safe spending levels. Your retirement cash flow maintains your lifestyle through inflation without eroding principal."
  },
  {
    title: "Lower Tax Impact on Retirement Withdrawals",
    description: "Wrong-account withdrawals in the wrong year push you into a higher bracket and reduce what you keep. Tax-aware sequencing determines which accounts to tap: tax-deferred, tax-free, or taxable. Multi-year projections manage your taxes across a decade, not one filing at a time."
  },
  {
    title: "Coordinated Social Security and Medicare Decisions",
    description: "When you claim Social Security, and at what age, affects your tax bracket, Medicare premiums, and how long your portfolio lasts. We model spousal benefit scenarios against your full income picture. Each claiming decision factors in IRMAA thresholds and lifetime coverage costs."
  },
  {
    title: "Protection Against Unexpected Retirement Costs",
    description: "Fidelity's 2025 retiree health care cost estimate projects $172,500 in lifetime healthcare costs for a 65-year-old retiring in 2025. That excludes long term care or extended nursing stays. Planning builds these costs into your withdrawal strategy before they arrive."
  },
  {
    title: "A Written, Personalized Withdrawal Strategy",
    description: "Most affluent households lack a documented plan for turning assets into income. A written withdrawal strategy assigns each source a role, a timeline, and a tax treatment. Our approach to retirement planning puts these decisions on paper so they can be tracked."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Understand",
    description: "We discuss your goals, concerns, and full financial picture so both sides align before any recommendations."
  },
  {
    number: 2,
    title: "Design",
    description: "We develop a customized strategy integrating retirement income, investment management, and tax-aware considerations for your situation."
  },
  {
    number: 3,
    title: "Implement and Monitor",
    description: "Your plan goes into action with ongoing monitoring, check-ins, and adjustments as life and goals change."
  }
];

const whoNeedsData = [
  {
    title: "Approaching Retirement with Multiple Income Sources",
    description: "Pension income, Social Security, employer plans, portfolio withdrawals, and rental earnings each carry different tax treatment. Sequencing them reduces your effective rate and extends how long assets last."
  },
  {
    title: "Considering a 401(k) Rollover",
    description: "A 401(k) rollover triggers decisions about tax treatment, withdrawal timing, and how the new account fits your broader retirement income plan. Eligible rollover options include traditional IRAs and Roth conversions."
  },
  {
    title: "Frustrated with Generic Advice from Your Current Provider",
    description: "Recordkeeper guidance focuses on fund selection while you earn a salary. Once withdrawals begin, coordinating taxes, Social Security, and healthcare costs requires a different approach and specialized services."
  },
  {
    title: "Facing Roth Conversion or Withdrawal Timing Decisions",
    description: "The window for Roth conversions narrows as required minimum distributions begin at age 73. Every year before that is a chance to convert at a lower bracket within your full income picture."
  },
  {
    title: "Carrying Significant Assets but No Documented Income Plan",
    description: "Most affluent households lack a written income plan. The 2025 EBRI Retirement Confidence Survey found 45% of retirees said spending exceeded expectations. Our senior advisors build documented strategies to prevent this."
  }
];

const faqs = [
  {
    question: "How much does retirement income planning cost?",
    answer: "PointOak charges a transparent, asset-based fee with no commissions or hidden costs. The fee is based on a percentage of assets under management and varies by account size and complexity. There is a $500,000 minimum in investable assets. PointOak is fee-only, meaning the firm earns no commissions and uses no proprietary products. Your initial consultation is complimentary, typically lasting 30 to 45 minutes with no obligation. Schedule a complimentary consultation to discuss your situation and learn what the fee would look like for your accounts."
  },
  {
    question: "What is retirement income planning, and how is it different from general financial planning?",
    answer: "Retirement income planning focuses on turning accumulated assets into sustainable income, not just growing them. General financial planning covers budgeting, insurance, and wealth accumulation across your working years. Retirement income planning narrows the focus to withdrawal sequencing, Social Security timing, tax bracket management, required minimum distributions, and healthcare budgeting, all coordinated into one integrated strategy for the income phase of your financial life."
  },
  {
    question: "How often should a retirement income plan be reviewed?",
    answer: "PointOak reviews retirement income plans on a semi-annual cadence with adjustments as needed. Semi-annual reviews cover portfolio performance, tax law changes, and shifts in your spending or goals. If a major life event occurs between reviews, such as a health change, market disruption, or new tax legislation, PointOak schedules additional meetings. You can always reach us by phone or email between scheduled conversations."
  },
  {
    question: "When should I start retirement income planning?",
    answer: "Five to ten years before retirement gives the most flexibility for Roth conversions and claiming decisions. Required minimum distributions begin at age 73, and Medicare enrollment starts at age 65. Starting earlier opens a window for strategic Roth conversions at lower tax brackets, Social Security claiming analysis, and healthcare cost projections. The earlier you plan, the more levers are available to reduce lifetime taxes and strengthen your income."
  },
  {
    question: "How much of my retirement income will Social Security realistically cover?",
    answer: "For affluent households, Social Security typically replaces a modest fraction of pre-retirement income. The average Social Security benefit covers a smaller share of spending for higher earners than for median-income retirees. Most households with investable assets above $500,000 need coordinated portfolio income, tax-aware withdrawals, and strategic claiming to maintain their standard of living. Social Security is one piece of the income plan, not the foundation."
  },
  {
    question: "Do I need a fiduciary advisor for retirement income planning?",
    answer: "A fiduciary advisor is legally required to act in your interest, which matters when income decisions are irreversible. Many retirement income decisions, such as Social Security claiming and Roth conversions, cannot be reversed once made. A fiduciary is bound by law to act in your interest, not sell the highest-commission product. PointOak has operated as a fiduciary since inception in 2017. Schedule a complimentary consultation to discuss your plan."
  },
  {
    question: "Can I rely on my 401(k) provider for retirement income advice?",
    answer: "Most recordkeepers offer general guidance but do not integrate taxes, claiming strategy, or healthcare planning. Recordkeeper tools can estimate account balances and suggest contribution rates, but they typically do not coordinate withdrawal sequencing across multiple accounts, model Social Security claiming scenarios against your tax bracket, or factor in Medicare costs. A retirement income plan requires that level of integration, which most provider platforms are not built to deliver."
  },
  {
    question: "Is the 4% rule still realistic after inflation and taxes?",
    answer: "Static withdrawal rules ignore your individual tax situation, healthcare costs, and market sequence risk. The 4% rule was designed as a general starting point, not a retirement income plan. It ignores your specific tax bracket, the mix of taxable and tax-free accounts, and healthcare cost spikes. A dynamic withdrawal strategy adjusts spending year by year based on portfolio performance and tax conditions."
  },
  {
    question: "What should I look for in a retirement income planner?",
    answer: "Look for a written income plan, SEC registration, fiduciary status, and ongoing monitoring. A strong retirement income planner provides a documented withdrawal strategy, coordinates Social Security and tax planning, holds SEC registration, and operates under the fiduciary standard. Ongoing monitoring matters because tax laws, Medicare thresholds, and your spending will shift over time. PointOak meets each of these criteria and has since the firm's founding."
  },
  {
    question: "Why do retirees say spending is higher than expected?",
    answer: "Healthcare, dental, and lifestyle costs routinely exceed pre-retirement estimates for affluent households. Retirees often underestimate out-of-pocket healthcare costs, dental work, travel, home maintenance, and supporting adult children or aging parents. These expenses compound when inflation is factored in. A retirement income plan stress-tests your spending assumptions before retirement begins, building reserves for the categories most likely to surprise you."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Retirement Income Planning",
  "provider": {
    "@type": "FinancialService",
    "name": "PointOak Retirement Advisors"
  },
  "serviceType": "Retirement Income Planning",
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
      "name": "Retirement Income Planning",
      "item": "https://www.pointoak.com/services/retirement-income-planning/"
    }
  ]
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our Retirement Income Planning Process",
  "step": processSteps.map((step, idx) => ({
    "@type": "HowToStep",
    "position": idx + 1,
    "name": step.title,
    "text": step.description
  }))
};

export default function RetirementIncomePlanningPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Individuals & Families", href: "/for-individuals-families" },
          { label: "Retirement Income Planning" }
        ]}
        title="Retirement Income Planning That Coordinates Every Dollar"
        subtitle="Turning accumulated assets into sustainable retirement income means coordinating withdrawals, Social Security, taxes, and Medicare. PointOak Retirement Advisors builds retirement income plans that coordinate every source into one financial planning strategy."
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

      {/* Benefits of Retirement Income Planning */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Retirement Income Planning
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

      {/* How Retirement Income Planning Works */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Retirement Income Planning Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Retirement income planning coordinates the timing of portfolio withdrawals, Social Security claims, Roth conversions, and required minimum distributions into one investment strategy. Each decision changes your tax bracket, which in turn affects every other account and income source. The approach reduces guesswork by mapping these interactions across your full retirement timeline.
            </p>
            <p>
              According to <a href="https://www.investmentnews.com/retirement-planning/mass-affluent-americans-confident-about-retirement-but-few-have-a-plan-prudential/262770" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">a 2025 Prudential study</a>, only 25% of mass affluent Americans had a clearly defined withdrawal strategy. A structured plan replaces ad hoc decisions with multi-year investment projections that adapt as tax laws change. The difference between investing to earn returns and planning for income is this level of coordination.
            </p>
            <p>
              <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule a complimentary consultation</Link> to discuss your retirement income plan, or contact us at (703) 595-4444.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs Retirement Income Planning */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/services/retirement-income-planning.png"
                alt="Financial advisor consulting with clients about retirement income planning"
                width={2936}
                height={1638}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
                Who Needs Retirement Income Planning
              </h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Retirement income planning fits specific situations. These scenarios focus on when coordinating income sources matters most.
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
              <strong className="text-navy">When retirement income planning may not be the right fit:</strong> This service may not be the right fit if you are still in early accumulation, primarily focused on contributing to retirement accounts, or hold less than $500,000 in investable assets.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Fiduciary Advisor vs. DIY Approach - Table */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Retirement Income Planning: Fiduciary Advisor vs. DIY Approach
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Most retirement savers manage withdrawals independently. <a href="https://www.investmentnews.com/retirement-planning/401k-participants-seek-advice-but-few-turn-to-financial-advisors/260912" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">Cerulli research</a> shows 63% of active 401(k) participants work without an advisor. The table below compares both approaches for six coordination decisions.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Criterion</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">DIY / Recordkeeper</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Fiduciary Retirement Income Planner</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Tax coordination across account types</td>
                  <td className="px-4 py-3 text-gray-700">General guidance; no multi-year bracket analysis or account-specific sequencing</td>
                  <td className="px-4 py-3 text-gray-700">Complete analysis of tax-deferred, tax-free, and taxable accounts with multi-year projections</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Social Security claiming analysis</td>
                  <td className="px-4 py-3 text-gray-700">Online calculators; no integration with portfolio or tax plan</td>
                  <td className="px-4 py-3 text-gray-700">Spousal benefit modeling integrated with withdrawal and tax strategy</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Healthcare and Medicare cost planning</td>
                  <td className="px-4 py-3 text-gray-700">Medicare.gov resources; no link to income or IRMAA bracket management</td>
                  <td className="px-4 py-3 text-gray-700">Medicare costs and IRMAA thresholds built into withdrawal projections</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Withdrawal sequencing and RMD timing</td>
                  <td className="px-4 py-3 text-gray-700">Ad hoc decisions; no IRS RMD coordination with other income sources</td>
                  <td className="px-4 py-3 text-gray-700">Sequenced withdrawals coordinating IRS required distributions with all income</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Ongoing adjustment and monitoring</td>
                  <td className="px-4 py-3 text-gray-700">Self-directed review when time permits</td>
                  <td className="px-4 py-3 text-gray-700">Scheduled semi-annual review with proactive adjustments for tax and market changes</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Regulatory accountability and fiduciary duty</td>
                  <td className="px-4 py-3 text-gray-700">No fiduciary duty; suitability standard at most</td>
                  <td className="px-4 py-3 text-gray-700">SEC-registered fiduciary advisory services with legal obligation to act in your interest</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-sm leading-relaxed mt-6 italic">
            Source: Cerulli Associates via InvestmentNews, 2025
          </p>

          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            A DIY approach works when income comes from Social Security and a single retirement account. A fiduciary retirement income planner adds measurable value when multiple accounts, tax brackets, and Medicare thresholds require year-over-year coordination.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* What To Expect: Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Retirement Income Planning Process
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

          <div className="mt-8">
            <Link href="/contact" className="text-medium-blue hover:text-navy underline font-outfit text-base">
              Schedule your consultation
            </Link> to begin.
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Why Choose PointOak */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Why Choose PointOak for Retirement Income Planning
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              That number changes annually and directly affects withdrawal planning, IRMAA brackets, and Roth conversion decisions. Our corporate retirement plan background means the team tracks these costs and thresholds daily.
            </p>
            <p>
              Every advisor claims retirement expertise, but PointOak is fee-only with no commissions. You get direct access to Darsh and his senior team at our office from your first meeting. <Link href="/about" className="text-medium-blue hover:text-navy underline">Learn about PointOak</Link>.
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
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia, serving high-net-worth individuals and corporate plan sponsors nationwide. SEC-registered investment advisor (CRD #314866) with over $1.08 billion in assets under management and 50+ years of collective experience across the team. Darsh and his team work directly with every client.
          </p>
          <p>
            <Link href="/contact" className="text-medium-blue hover:text-navy underline font-outfit text-base">
              Schedule a complimentary consultation
            </Link>
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
            <Link href="/contact" className="text-medium-blue hover:text-navy underline font-semibold">
              Schedule your consultation
            </Link> to receive a clear picture of how your retirement income sources work together.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <CTASection />
      <Footer />
    </main>
  );
}
