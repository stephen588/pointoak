import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Retirement Income Planning Guide | Tax-Efficient Strategies | PointOak",
  description: "Comprehensive retirement income planning guide for plan sponsors and employees. Tax-efficient withdrawal strategies, Social Security timing, RMD planning & Roth conversion guidance.",
  openGraph: {
    title: "Retirement Income Planning Guide | PointOak",
    description: "Tax-efficient strategies to make your retirement savings last. Withdrawal planning, Social Security timing, and Roth conversions.",
    url: "https://www.pointoak.com/resources/retirement-income-planning-guide/",
  },
};

const tocItems = [
  { id: "withdrawal-strategy", label: "Why Your Withdrawal Strategy Matters" },
  { id: "account-types", label: "Understanding Account Types" },
  { id: "withdrawal-strategies", label: "Three Withdrawal Strategies" },
  { id: "social-security", label: "Social Security Timing" },
  { id: "common-challenges", label: "Common Challenges" },
  { id: "plan-sponsors", label: "How Plan Sponsors Can Help" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const faqs = [
  {
    question: "What is the most tax efficient retirement withdrawal strategy?",
    answer: "There's no single answer, because the best withdrawal strategy depends on your individual tax situation, account balances, and retirement goals. However, research consistently shows that a blended approach — drawing from multiple account types strategically — tends to reduce total taxes compared to simply draining one account before moving to the next. Working with a financial professional who understands your complete picture is the most reliable way to minimize taxes.",
  },
  {
    question: "When should I start taking Social Security benefits?",
    answer: "Most people benefit from waiting beyond age 62 to claim. Every year you delay (up to age 70) increases your monthly benefit. However, factors like your health, other income sources, and whether you have a spouse also play a role. The right answer depends on your specific situation and overall retirement income plan.",
  },
  {
    question: "How do required minimum distributions affect my taxes?",
    answer: "Once you reach age 73, you must begin taking required minimum distributions from tax-deferred retirement accounts like traditional 401(k)s and IRAs. These distributions count as ordinary income, so they could push you into a higher tax bracket or increase the portion of your Social Security benefits subject to tax. Planning for RMDs before they begin — for example, through strategic Roth conversions — can significantly reduce your future tax burden.",
  },
  {
    question: "Should I convert my traditional IRA to a Roth IRA in retirement?",
    answer: "Roth conversions can be a powerful strategy, especially in years when your income is lower than usual. You'll owe taxes on the converted amount, but future withdrawals will be tax-free. This approach is particularly valuable for retirees who expect their tax rates to increase in later years. The key is running projections to determine whether the upfront tax cost is worth the long-term savings.",
  },
  {
    question: "How much can I safely withdraw from my retirement savings each year?",
    answer: "The traditional guideline suggests withdrawing no more than 4% of your portfolio in the first year of retirement, then adjusting for inflation. However, this rule is a starting point, not a guarantee. Your actual safe withdrawal rate depends on your portfolio allocation, market conditions, life expectancy, and other factors. Many retirees benefit from a dynamic approach that adjusts withdrawals based on portfolio performance.",
  },
];

export default function RetirementIncomePlanningGuidePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Retirement Income Planning Guide: Tax-Efficient Strategies to Make Your Savings Last",
      description: "Comprehensive guide to retirement income planning, withdrawal strategies, Social Security timing, and tax-efficient retirement account management.",
      url: "https://www.pointoak.com/resources/retirement-income-planning-guide/",
      publisher: { "@type": "Organization", name: "PointOak Retirement Advisors" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        breadcrumbs={[
          { label: "Resources", href: "/resources/" },
          { label: "Retirement Income Planning Guide" },
        ]}
        title="Retirement Income Planning Guide"
        subtitle="Tax-Efficient Strategies to Make Your Savings Last"
      />

      {/* Article Layout: TOC Sidebar + Content */}
      <AnimateOnScroll>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Table of Contents - Sidebar */}
            <aside className="lg:w-[280px] flex-shrink-0">
              <div className="lg:sticky lg:top-8">
                <h3 className="font-outfit text-navy text-sm font-bold uppercase tracking-wider mb-4">In This Guide</h3>
                <nav className="space-y-2">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block font-outfit text-dark-gray text-sm hover:text-navy transition-colors py-1 border-l-2 border-transparent hover:border-navy pl-3"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 min-w-0">
              {/* Intro */}
              <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                You&apos;ve spent decades building your retirement savings. But as retirement age approaches, a new challenge takes center stage: how do you turn those assets into reliable income that lasts? Most people focus so heavily on accumulating money that they never develop a clear plan for withdrawing it.
              </p>
              <p className="font-outfit text-dark-gray text-base leading-relaxed mb-10">
                A retirement income planning guide isn&apos;t just about knowing when to retire. It&apos;s about understanding which accounts to tap first, how to minimize taxes on every dollar you withdraw, and how to protect your portfolio from market conditions that could erode your purchasing power in later years.
              </p>

              {/* Section: Withdrawal Strategy */}
              <div id="withdrawal-strategy" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-4">
                  Why Your Retirement Withdrawal Strategy Matters More Than You Think
                </h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Many retirees assume that once they stop working, their tax situation simplifies. The reality is quite different. Between Social Security benefits, required minimum distributions from tax-deferred accounts, capital gains, and Roth IRA withdrawals, your income in retirement can come from multiple sources — each taxed differently.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  Without a deliberate withdrawal strategy, you could end up paying far more in total taxes than necessary. A well-designed strategy helps you control your tax bracket year by year, taking advantage of lower-tax windows to reduce total taxes paid over your lifetime.
                </p>
              </div>

              {/* Section: Account Types */}
              <div id="account-types" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-4">
                  Understanding Your Retirement Account Types
                </h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-6">
                  Before you can build a withdrawal strategy, you need to understand how different account types are taxed:
                </p>
                <div className="space-y-4 mb-4">
                  <div className="bg-cloud-blue rounded-lg p-6">
                    <h3 className="font-outfit text-navy text-lg font-medium mb-2">Tax-Deferred Accounts</h3>
                    <p className="font-outfit text-dark-gray text-sm leading-relaxed">
                      Traditional 401(k), Traditional IRA — Contributions were pre-tax. Every withdrawal counts as ordinary income. Required minimum distributions start at age 73.
                    </p>
                  </div>
                  <div className="bg-cloud-blue rounded-lg p-6">
                    <h3 className="font-outfit text-navy text-lg font-medium mb-2">Roth Accounts</h3>
                    <p className="font-outfit text-dark-gray text-sm leading-relaxed">
                      Roth IRA, Roth 401(k) — Contributions were after-tax. Qualified withdrawals are tax-free. Roth IRAs are not subject to RMDs during the original holder&apos;s lifetime.
                    </p>
                  </div>
                  <div className="bg-cloud-blue rounded-lg p-6">
                    <h3 className="font-outfit text-navy text-lg font-medium mb-2">Taxable Accounts</h3>
                    <p className="font-outfit text-dark-gray text-sm leading-relaxed">
                      Brokerage and savings accounts — Interest, dividends, and capital gains are taxable. Long-term capital gains are generally taxed at lower rates than ordinary income.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section: Three Strategies */}
              <div id="withdrawal-strategies" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-6">
                  Three Common Withdrawal Strategies
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-outfit text-navy text-xl font-medium mb-3">The Traditional Approach</h3>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      Spend down taxable accounts first, then tax-deferred, then Roth. The logic: let tax-free money compound as long as possible. The drawback: large RMDs later could push you into higher tax brackets.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-outfit text-navy text-xl font-medium mb-3">The Proportional Withdrawal Strategy</h3>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      Withdraw from multiple account types each year in proportion to their balances. This smooths your tax burden across retirement and provides more predictable tax outcomes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-outfit text-navy text-xl font-medium mb-3">The Tax Bracket Management Approach</h3>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      The most sophisticated strategy: fill up your current tax bracket with tax-deferred distributions, use taxable accounts for additional expenses, and preserve Roth for high-income years. During early retirement, consider Roth conversions at lower rates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section: Social Security */}
              <div id="social-security" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-4">
                  Social Security: Timing Your Monthly Benefit
                </h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Your Social Security benefits represent a critical piece of the retirement income puzzle. Filing at 62 means a permanently reduced benefit. Waiting until full retirement age (67 for most) gets you 100%. Delaying until 70 increases your benefit by roughly 8% per year.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  Coordinating your claiming strategy with withdrawals from other accounts can help you minimize taxes and avoid bumping into a higher tax bracket.
                </p>
              </div>

              {/* Section: Common Challenges */}
              <div id="common-challenges" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-6">
                  Common Challenges Retirees Face
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="font-outfit text-sm font-medium text-left px-4 py-3">Challenge</th>
                        <th className="font-outfit text-sm font-medium text-left px-4 py-3">What&apos;s at Stake</th>
                        <th className="font-outfit text-sm font-medium text-left px-4 py-3">How to Address It</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Rising living expenses", "Inflation erodes purchasing power", "Maintain growth investments for long-term protection"],
                        ["Market volatility", "Down markets early in retirement deplete savings faster", "Keep 1-2 years of expenses in cash or stable investments"],
                        ["Healthcare costs", "Medical expenses increase with age", "Factor Medicare premiums and out-of-pocket costs into your plan"],
                        ["Outliving your money", "Savings need to last 25-30+ years", "Use conservative withdrawal rates, adjust based on conditions"],
                        ["Tax law changes", "Future tax rates are uncertain", "Diversify across taxable, tax-deferred, and tax-free accounts"],
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-cloud-blue"}>
                          <td className="font-outfit text-sm text-dark-gray px-4 py-3 font-medium">{row[0]}</td>
                          <td className="font-outfit text-sm text-dark-gray px-4 py-3">{row[1]}</td>
                          <td className="font-outfit text-sm text-dark-gray px-4 py-3">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section: Plan Sponsors */}
              <div id="plan-sponsors" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-4">
                  How a Plan Sponsor Can Help Employees Prepare
                </h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  If you&apos;re a plan sponsor, the retirement readiness of your employees reflects on your plan&apos;s effectiveness. Education programs that cover withdrawal strategies, Social Security timing, and tax-efficient investing can make a meaningful difference.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  PointOak&apos;s <Link href="/corporate-retirement-plans/education-communications/" className="text-navy font-medium hover:underline">Education & Communications Programs</Link> help your workforce understand these concepts through interactive sessions. And our <Link href="/corporate-retirement-plans/investment-analysis/" className="text-navy font-medium hover:underline">investment analysis process</Link> evaluates over $120 billion in retirement plan assets quarterly.
                </p>
                <p className="font-outfit text-medium-gray text-sm italic">
                  Note: The examples and scenarios throughout this guide are for illustrative purposes only and do not represent specific investment recommendations.
                </p>
              </div>

              {/* FAQ */}
              <div id="faq" className="scroll-mt-8">
                <ServiceDetailFAQ faqs={faqs} />
              </div>
            </article>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Disclaimer */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-6">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="font-outfit text-medium-gray text-xs leading-relaxed">
            Investment advisory services offered through PointOak Retirement Advisors, LLC. This guide is for informational purposes only and does not constitute investment advice.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <CTASection />
      <Footer />
    </>
  );
}
