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
  title: "Tax-Efficient Wealth Strategies | PointOak Retirement Advisors",
  description: "PointOak coordinates asset location, gain timing, and withdrawal planning to improve after-tax returns. Fee-only fiduciary. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/services/tax-efficient-wealth-strategies/"
  }
};

const highlights = [
  "1.50%-2.16% added after-tax return annually",
  "Fee-only fiduciary since inception",
  "No commissions or proprietary products"
];

const benefitsData = [
  {
    title: "More After-Tax Returns in Your Account",
    description: "Tax-managed approaches improve after-tax outcomes over a full market cycle. The difference comes from coordinating three decisions: which tax-efficient investments to hold, when to realize long-term capital gains, and which account type shelters each position. Small, consistent tax savings compound alongside your returns and reduce your federal income tax burden."
  },
  {
    title: "Lower Exposure to High-Income Tax Surcharges",
    description: "The IRS Net Investment Income Tax adds 3.8% on net investment income above $200,000 (single) or $250,000 (married filing jointly). That surcharge stacks on top of federal income tax and capital gains taxes. Managing gain timing, long-term capital gains realization, and state and local taxes shrinks your overall tax burden and reduces taxable income across multiple brackets."
  },
  {
    title: "Year-Round Protection, Not a Year-End Scramble",
    description: "Cerulli Associates reports nearly 70% of affluent investors want their provider to help reduce their tax bill. Year-end-only moves miss gain budgeting, transition management, and asset placement decisions made throughout the year. Tax liability drops when the strategy runs twelve months, not one, and capital gains are managed proactively rather than reactively."
  },
  {
    title: "Retirement Income You Can Actually Keep",
    description: "Withdrawal sequencing determines which accounts you draw from: taxable, tax-deferred, or tax-free. The order affects your tax bracket and taxable income for years. Our approach to retirement plan consulting translates directly here, managing brackets across accounts rather than returns inside them."
  },
  {
    title: "Smarter Use of Charitable Intent",
    description: "Donating appreciated securities instead of cash preserves the fair market value deduction while avoiding capital gains on the appreciation. A donor-advised fund adds flexibility: take the charitable deduction now and distribute grants over time. Both reduce ordinary income exposure and long-term capital gains in a single move."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Understand",
    description: "We start by listening: your goals, concerns, tax situation, and what prompted you to seek advice. Clarity comes before any recommendations."
  },
  {
    number: 2,
    title: "Design",
    description: "Your strategy integrates investment management, retirement planning, and tax considerations into one coordinated plan built around your situation."
  },
  {
    number: 3,
    title: "Implement and Monitor",
    description: "We put the plan into action and stay involved with ongoing monitoring, regular check-ins, and adjustments as your life changes. The semi-annual review cadence keeps your plan current as tax rules, markets, and your circumstances evolve."
  }
];

const whoNeedsData = [
  {
    title: "You Have a Sizable Taxable Portfolio",
    description: "Taxable brokerage holdings generate capital gains, interest income, and qualified dividends that hit your return each year. The larger the taxable base, the more asset allocation across account types and gain timing decisions affect your after-tax results and federal tax liability."
  },
  {
    title: "Retirement Is Within Five Years",
    description: "Withdrawal sequencing decisions, which accounts to draw from, when to convert, how to manage brackets, affect decades of adjusted gross income in retirement. Tax-aware planning needs to start before distributions begin, not after, and should coordinate traditional IRA withdrawals with Roth IRA distributions to manage your tax treatment across retirement."
  },
  {
    title: "You Recently Had a Liquidity Event",
    description: "A business sale, inheritance, or significant stock vesting creates immediate tax considerations. Transition management and gain budgeting prevent avoidable hits that erode the value of your liquidity event."
  },
  {
    title: "Your CPA and Your Advisor Are Not Coordinating",
    description: "Tax preparation reports what already happened. Tax-efficient investments and portfolio decisions influence tax consequences before they are realized. Both roles matter, but they need to work together, not in sequence."
  },
  {
    title: "You Hold Concentrated Stock or RSUs",
    description: "Large positions in a single company create both investment risk and tax complexity. Diversification timing, investment gains realization, and charitable giving strategies all require coordination around your specific tax treatment."
  }
];

const faqs = [
  {
    question: "What does tax-efficient wealth management cost?",
    answer: "PointOak charges an asset-based advisory fee with no commissions and no hidden costs. The fee varies by account size and complexity. PointOak operates as a fee-only advisor, meaning compensation comes entirely from clients with no commissions or proprietary product incentives. The initial consultation is complimentary with no cost and no obligation. Scope of coordination, including the number of accounts, CPA integration, and charitable planning, can affect the overall engagement. Schedule a complimentary consultation to discuss your specific situation."
  },
  {
    question: "What is the difference between tax-aware investing and tax preparation?",
    answer: "Tax preparation reports last year's results; tax-aware investing shapes this year's decisions. A CPA calculates what you owe after gains, income, and tax deductions are realized. Tax-aware investing controls which gains are realized, which accounts hold which assets, and when withdrawals happen. PointOak coordinates both by working alongside your qualified tax professional so portfolio decisions and tax filing stay aligned."
  },
  {
    question: "What ongoing work does a tax-efficient strategy require?",
    answer: "Tax-aware investing is an ongoing discipline, not a one-time setup. Gain budgeting, loss harvesting, and asset placement require monitoring throughout the year. PointOak conducts regular reviews and adjusts strategies as tax law, markets, and your life circumstances change. The semi-annual review cadence keeps your plan current, with additional check-ins whenever your situation calls for them."
  },
  {
    question: "What is tax-efficient investing?",
    answer: "It is a set of portfolio and account decisions designed to reduce the taxes you pay on investment returns. Tax-efficient investing includes asset location, gain management, withdrawal sequencing, and charitable strategy using appreciated assets. The discipline works because these decisions interact, and coordinating them produces better after-tax outcomes than any single move in isolation. Investing involves risk, and tax-efficient strategies do not eliminate market volatility or guarantee returns."
  },
  {
    question: "How can I reduce taxes on my investments?",
    answer: "Start with account placement, gain timing, and choosing tax-aware investment vehicles. Hold tax-inefficient assets like taxable bonds and high-turnover funds in tax-deferred accounts such as a traditional IRA or 401(k). Keep tax-efficient holdings like index funds in taxable accounts. Manage realized capital gains deliberately so you control your tax bracket, and consider Roth conversions during low-income years. Consult your personal tax advisor for guidance specific to your situation."
  },
  {
    question: "Should I hold bonds in an IRA or brokerage account?",
    answer: "Most bonds belong in a tax-deferred account because their interest is taxed as ordinary income. Bond interest faces ordinary income tax rates, which can exceed capital gains rates significantly. Holding bonds in a traditional IRA or 401(k) defers that income entirely. The exception: municipal bonds generate tax-exempt interest income and often belong in taxable accounts where their tax benefits provide the most value."
  },
  {
    question: "Is tax-loss harvesting actually saving money or just delaying taxes?",
    answer: "Harvesting reduces your current tax bill, though the benefit varies depending on your future bracket and circumstances. Selling a losing position offsets realized gains and reduces ordinary income by up to the annual limit. The 'delay' concern is real: your new cost basis is lower, which may mean higher capital gains generated later. Harvesting works best as part of a broader tax-aware strategy rather than a standalone tactic, because tax brackets, rules, and personal circumstances change over time."
  },
  {
    question: "Do I need a financial advisor if my CPA already does my taxes?",
    answer: "Your CPA and your advisor serve different roles, and both matter for tax-efficient outcomes. CPAs handle tax compliance and filing based on events that already occurred. An advisor manages portfolio decisions that create or avoid taxable events throughout the year. Our team works alongside your CPA so neither role operates in isolation, and the coordination between portfolio structure and tax filing is where after-tax value is created."
  },
  {
    question: "What should go in taxable vs. IRA vs. Roth?",
    answer: "Place tax-inefficient assets in sheltered accounts and tax-efficient assets in taxable accounts. High-turnover funds and bonds generating ordinary income fit best in traditional IRA or 401(k) accounts where income is deferred. Growth-oriented holdings producing qualified dividends belong in taxable accounts at favorable rates. Roth IRA accounts suit high-growth assets since qualified distributions are tax-free, and your tax bracket, retirement timeline, and estate tax goals determine the right mix."
  },
  {
    question: "How do capital gains affect retirement taxes?",
    answer: "Capital gains in retirement can push you into a higher bracket and trigger surcharges on investment income. Realized gains add to your adjusted gross income, which can increase taxes on Social Security benefits and trigger the additional surcharge on net investment income for high earners. Cash donations and charitable deductions can partially offset this effect. PointOak coordinates gain realization with withdrawal sequencing so you manage your bracket deliberately rather than discovering the impact at filing time."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Tax-Efficient Wealth Strategies",
  "provider": {
    "@type": "FinancialService",
    "name": "PointOak Retirement Advisors"
  },
  "serviceType": "Tax-Efficient Investing",
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
      "name": "Tax-Efficient Wealth Strategies",
      "item": "https://www.pointoak.com/services/tax-efficient-wealth-strategies/"
    }
  ]
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our Wealth Management Process",
  "step": processSteps.map((step, idx) => ({
    "@type": "HowToStep",
    "position": idx + 1,
    "name": step.title,
    "text": step.description
  }))
};

export default function TaxEfficientWealthStrategiesPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Individuals & Families", href: "/for-individuals-families" },
          { label: "Tax-Efficient Wealth Strategies" }
        ]}
        title="Tax-Efficient Investing: A Year-Round Approach to Keeping More"
        subtitle="After-tax returns determine how much wealth you build, and most investment strategies ignore tax efficiency entirely. PointOak Retirement Advisors coordinates tax-efficient investing across your accounts, portfolio, and financial plan with a tax-aware investment strategy that integrates asset location, gain timing, and withdrawal sequencing."
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

      {/* Benefits of Tax-Efficient Wealth Strategies */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Tax-Efficient Wealth Strategies
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

      {/* How Tax-Efficient Wealth Strategies Work */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Tax-Efficient Wealth Strategies Work
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Asset location is the foundation: fixed income securities and high-turnover mutual funds generate income taxed at ordinary rates, while index-tracking exchange-traded funds produce mostly qualified dividends taxed at lower rates. Placing each in the right account type, whether a taxable brokerage account, Roth IRA, or tax-deferred account, improves tax efficiency across your portfolio. Tax-advantaged accounts shelter growth entirely, and taxable accounts hold <Link href="/" className="text-medium-blue hover:text-navy underline">tax-aware investments</Link> with minimal annual distributions.
            </p>
            <p>
              Under IRS wash-sale rules, buying a substantially identical security within 30 days of selling at a loss disallows the deduction, so tax-loss harvesting requires year-round monitoring. Gain management budgets realized capital gains across quarters and coordinates across investment accounts for meaningful tax diversification. Roth conversions during low-income years move assets from a traditional IRA to a Roth IRA, reducing future tax exposure.
            </p>
            <p>
              <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule your consultation</Link> to discuss how tax-aware strategies apply to your accounts and financial plan.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs Tax-Efficient Wealth Strategies */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs Tax-Efficient Wealth Strategies
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Not every investor needs a dedicated tax-aware strategy, but these five signals suggest you do.
          </p>

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
              If your assets sit entirely in tax-advantaged accounts like IRAs and 401(k)s with no taxable holdings, a standard retirement income plan may serve you better as a starting point. <Link href="/contact" className="text-navy font-medium hover:underline">Schedule a consultation</Link> to determine which approach fits.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Year-Round vs Year-End Table */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Tax-Aware Investing vs. Year-End Tax Harvesting
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Both approaches reduce taxes, but they differ in scope, timing, and what they can protect.
          </p>

          <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-6">
            Year-Round Tax-Aware Management vs. Year-End-Only Harvesting
          </h3>

          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Year-Round Tax-Aware Management</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Year-End-Only Harvesting</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Timing</td>
                  <td className="px-4 py-3 text-gray-700">Decisions integrated throughout the year</td>
                  <td className="px-4 py-3 text-gray-700">Concentrated in November and December</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Gain management</td>
                  <td className="px-4 py-3 text-gray-700">Budgets realized gains across quarters</td>
                  <td className="px-4 py-3 text-gray-700">Reacts to gains at year-end only</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Asset location</td>
                  <td className="px-4 py-3 text-gray-700">Coordinates placement across taxable, IRA, and Roth</td>
                  <td className="px-4 py-3 text-gray-700">Typically ignores account type</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Loss harvesting scope</td>
                  <td className="px-4 py-3 text-gray-700">Offsets gains plus up to $3,000 of ordinary income annually</td>
                  <td className="px-4 py-3 text-gray-700">Same offset, but limited window for execution</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Wash-sale management</td>
                  <td className="px-4 py-3 text-gray-700">Monitors 30-day windows proactively year-round</td>
                  <td className="px-4 py-3 text-gray-700">Higher risk of inadvertent violations</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Withdrawal coordination</td>
                  <td className="px-4 py-3 text-gray-700">Integrates with retirement income planning</td>
                  <td className="px-4 py-3 text-gray-700">Not addressed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Year-end harvesting works for simpler portfolios with limited taxable exposure. Year-round management wins when you have multiple account types, embedded gains, charitable intent, or retirement within sight. Loss harvesting alone captures only a fraction of what a full tax-aware discipline delivers on an after-tax basis.
          </p>

          <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-6">
            Mutual Funds and ETFs vs. Direct Indexing
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Mutual Funds and ETFs</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Direct Indexing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Tax-loss harvesting</td>
                  <td className="px-4 py-3 text-gray-700">Fund-level only</td>
                  <td className="px-4 py-3 text-gray-700">Individual security level</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Customization</td>
                  <td className="px-4 py-3 text-gray-700">Limited to fund mandate</td>
                  <td className="px-4 py-3 text-gray-700">Can exclude specific holdings or sectors</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Account minimums</td>
                  <td className="px-4 py-3 text-gray-700">Low entry point</td>
                  <td className="px-4 py-3 text-gray-700">Typically higher minimums required</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Complexity</td>
                  <td className="px-4 py-3 text-gray-700">Fewer moving parts, simpler oversight</td>
                  <td className="px-4 py-3 text-gray-700">Requires active portfolio management decisions</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Best for</td>
                  <td className="px-4 py-3 text-gray-700">Smaller portfolios valuing simplicity</td>
                  <td className="px-4 py-3 text-gray-700">Larger taxable accounts needing precision</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Most investors start with municipal bonds, index funds, and exchange-traded funds. Direct indexing becomes relevant for larger taxable accounts where individual-security harvesting adds measurable after-tax value. Your account size, tax position, and willingness to defer taxes through basis management determine which approach fits your income tax situation.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* What To Expect: Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Wealth Management Process
          </h2>

          <div className="relative">
            <div className="absolute left-[19px] top-10 bottom-10 w-px bg-[#C1C5C9] hidden sm:block" />

            <div className="flex flex-col gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
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

          <div className="mt-8">
            <Link href="/contact" className="text-medium-blue hover:text-navy underline font-outfit text-base">
              Schedule a complimentary consultation
            </Link> to start the conversation.
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Why Choose PointOak */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Why Choose PointOak for Tax-Efficient Wealth Strategies
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              <Link href="/our-consulting-team" className="text-medium-blue hover:text-navy underline">Our senior advisors</Link> build tax-aware investing into every wealth management relationship, drawing on the firm&apos;s corporate retirement plan background and thousands of participant scenarios where tax decisions changed outcomes. That depth in fixed income investments and asset allocation is rare among fee-only firms.
            </p>
            <p>
              A common objection: your CPA already handles taxes. Your CPA reports what happened last year, while a tax advisor working inside your portfolio influences decisions before they create taxable events. <Link href="/about" className="text-medium-blue hover:text-navy underline">Our independence</Link> means we coordinate with your CPA so both roles work together, not in sequence.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} sectionTitle="Tax-Efficient Wealth Strategies FAQ" />

      <CTASection />
      <Footer />
    </main>
  );
}