import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Retirement Income Planning Guide (2026 Data, DC Metro Taxes)",
  description: "Morningstar's 2025 data puts safe withdrawal rates at 3.7%, not 4%. See how DC, MD, and VA tax retirement income differently and compare four withdrawal strategies.",
  alternates: {
    canonical: "https://www.pointoak.com/resources/retirement-income-planning-guide/"
  }
};

const tocItems = [
  { id: "intro", label: "Introduction" },
  { id: "key-takeaways", label: "Key Takeaways" },
  { id: "plan-components", label: "What Goes Into a Retirement Income Plan" },
  { id: "withdrawal-rate", label: "The 4% Rule in 2026" },
  { id: "compare-strategies", label: "Withdrawal Strategies Compared" },
  { id: "taxes-metro", label: "How DC, MD, VA Tax Retirement Income" },
  { id: "need-a-plan", label: "When You Need More Than a Calculator" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const faqs = [
  {
    question: "How do I plan retirement income from multiple accounts?",
    answer: "Start by mapping each account's tax treatment and withdrawal rules, then build a sequencing calendar that coordinates draws across all of them. The practical first step is listing every income source and its tax character: taxable brokerage accounts, traditional IRAs and 401(k)s, Roth accounts, Social Security, and any pensions. From there, build an annual calendar that staggers withdrawals to manage your tax bracket. Coordinated retirement income planning accounts for RMD deadlines, Social Security timing, and capital gains exposure in a single framework rather than treating each account as a separate decision. A coordinated approach prevents you from triggering unnecessary taxes by pulling from the wrong account at the wrong time."
  },
  {
    question: "What is the best retirement withdrawal strategy?",
    answer: "The right withdrawal strategy depends on your spending flexibility, account mix, and tax situation, not on a single universal rule. Morningstar's research shows sustainable withdrawal rates ranging from 3.7% to 5.7% depending on how willing a retiree is to adjust spending during downturns. A retiree with guaranteed income covering essential expenses has more flexibility than someone relying entirely on portfolio withdrawals. The right strategy coordinates all of your additional income sources into a plan built around your actual financial life. A proportional withdrawal strategy that adjusts distributions based on current portfolio value can extend longevity during volatile markets."
  },
  {
    question: "Is the 4% rule still safe in 2026?",
    answer: "The 4% rule is a starting point for analysis, not a guarantee of safe retirement spending in current market conditions. Morningstar's 2025 research estimates a 3.7% baseline for fixed withdrawals and a 3.9% base case when modest flexibility is allowed. 'Safe' depends on your time horizon, portfolio allocation, and willingness to reduce spending during downturns. The 4% rule was never designed as a rigid floor. Treating it as one ignores the specific market and inflation conditions that determine whether any fixed rate holds for your retirement. Investing strategies that balance growth and income affect how much you can safely withdraw over time."
  },
  {
    question: "Should I withdraw from taxable or tax-deferred accounts first?",
    answer: "The answer depends on your current and projected tax brackets, not on a default ordering rule. Withdrawing from the wrong account in the wrong year can push up to 85% of your Social Security into federal taxable income territory and move you into a higher bracket. The cost basis of taxable holdings matters too: selling appreciated assets triggers capital gains, while tax-deferred withdrawals count as ordinary income. Tax-aware retirement planning models these interactions across multiple years rather than optimizing one year at a time. Multi-year tax planning lets you time Roth conversions, capital gains harvesting, and RMD withdrawals to minimize what you pay over your entire retirement."
  },
  {
    question: "When should I claim Social Security if I still plan to work?",
    answer: "If you claim before full retirement age and earn above certain thresholds, Social Security temporarily withholds part of your benefit amount. In 2026, the earnings test reduces benefits by $1 for every $2 earned above $24,480 if you're under full retirement age, per the Social Security Administration. In the year you reach full retirement age, the threshold rises to $65,160 with a $1-for-$3 reduction. Withheld benefits are recalculated and restored after you reach full retirement age, but the cash flow disruption matters for retirees counting on that income during the gap. The decision to pay yourself from Social Security while working affects both your benefit amount and your overall retirement plan timeline."
  },
  {
    question: "How do RMDs fit into a retirement income plan?",
    answer: "Required minimum distributions from tax-deferred accounts become mandatory withdrawals that must be integrated into your broader income and tax strategy. Your 2026 RMD is calculated using your December 31, 2025 account balance divided by the IRS life expectancy factor from Publication 590-B. You can take future RMDs as installments (monthly, quarterly, or semi-annually) rather than a single lump sum. Spreading distributions across the year gives you more control over bracket management and cash flow timing, especially when coordinating with Social Security and other income."
  },
  {
    question: "What if I retire into a bad market?",
    answer: "Sequence-of-returns risk is the single largest threat in early retirement, but flexible spending and cash reserves reduce its impact significantly. Cutting spending by even 10% during a down market extends portfolio longevity considerably, as Morningstar's flexible models demonstrate. Keeping one to two years of living expenses in cash or short-term bonds means you avoid selling equities at depressed prices. The key is having a plan in place before the downturn rather than reacting after losses compound."
  },
  {
    question: "How much of my retirement income will come from Social Security?",
    answer: "The average retired worker receives $2,071 per month from Social Security as of January 2026, but most retirees need portfolio income to supplement that check. The Social Security Administration applied a 2.8% cost-of-living adjustment to reach that figure. For most retirees, $2,071 covers a portion of essential expenses but falls short of replacing pre-retirement income. Health care costs alone can consume a significant share. Discretionary spending and inflation over a 25- to 30-year retirement require taking advantage of all available income sources, with portfolio withdrawals filling the gap Social Security leaves."
  },
  {
    question: "Does where I live in the DC metro affect retirement income taxes?",
    answer: "DC, Maryland, and Virginia each apply different rules to Social Security, pensions, and retirement account withdrawals at the state level. Virginia does not tax Social Security and offers an age deduction for residents 65 and older. DC exempts Social Security and part of federal pension income. Maryland exempts Social Security and provides a separate pension exclusion. These differences can shift annual tax liability by thousands of dollars, so working with a tax professional alongside your advisor matters. PointOak does not provide tax advice but helps DC-area clients model how residency decisions affect net retirement income. Understanding these state-level differences lets you structure your retirement plan to minimize what you pay in taxes over your lifetime."
  },
  {
    question: "When should I get professional help with retirement income planning?",
    answer: "If your retirement involves multiple account types, Social Security timing decisions, and state tax considerations, a fee-only fiduciary adds measurable value. Only 35% of non-retirees feel their savings are on track, yet the complexity of coordinating withdrawals, tax brackets, and claiming strategies increases every year. PointOak Retirement Advisors works with clients facing exactly these decisions as a fee-only fiduciary with decades of experience across real withdrawal scenarios."
  }
];

export default function RetirementIncomePlanningGuidePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Retirement Income Planning Guide (2026 Data, DC Metro Taxes)",
      description:
        "Morningstar's 2025 data puts safe withdrawal rates at 3.7%, not 4%. See how DC, MD, and VA tax retirement income differently and compare four withdrawal strategies.",
      url: "https://www.pointoak.com/resources/retirement-income-planning-guide/",
      publisher: { "@type": "Organization", name: "PointOak Retirement Advisors" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Resources",
          item: "https://www.pointoak.com/resources/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Retirement Income Planning Guide"
        }
      ]
    }
  ];

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        breadcrumbs={[
          { label: "Resources", href: "/resources/" },
          { label: "Retirement Income Planning Guide" }
        ]}
        title="Retirement Income Planning: Why a Withdrawal Rate Is Not a Plan"
        subtitle="Picking a withdrawal rate feels like a plan until you realize it ignores Social Security timing, tax-bracket management, and which account you pull from first. A real retirement income plan coordinates those moving parts into a single framework. This retirement income planning guide covers withdrawal strategies, DC-metro tax considerations, and what changes when you're approaching retirement with real money at stake."
      />
      <AnimateOnScroll>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Table of Contents */}
            <aside className="lg:w-[280px] flex-shrink-0">
              <div className="lg:sticky lg:top-8">
                <h3 className="font-outfit text-navy text-sm font-bold uppercase tracking-wider mb-4">In This Guide</h3>
                <nav className="space-y-2">
                  {tocItems.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="block font-outfit text-dark-gray text-sm hover:text-navy transition-colors py-1 border-l-2 border-transparent hover:border-navy pl-3">
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
            {/* Main Content */}
            <article className="flex-1 min-w-0">
              <div id="intro" className="mb-10">
                <p className="font-outfit text-sm text-medium-gray mb-4"><strong>Last Updated: March 2026</strong></p>
              </div>
              <div id="key-takeaways" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">Key Takeaways</h2>
                <ul className="list-disc pl-5 text-dark-gray space-y-2">
                  <li>Morningstar's 2025 research sets the baseline safe starting withdrawal rate at 3.7%, not 4%</li>
                  <li>The average retired worker receives $2,071 per month from Social Security as of January 2026 (SSA)</li>
                  <li>Flexible spending rules can push sustainable withdrawal rates as high as 5.7% (Morningstar)</li>
                  <li>DC, Maryland, and Virginia each tax Social Security and pension income differently at the state level</li>
                </ul>
              </div>
              <div id="plan-components" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">What Goes Into a Retirement Income Plan Beyond the Withdrawal Rate</h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  A withdrawal rate answers one question: how much can I spend each year? A retirement plan answers dozens. Deciding whether you have enough money to retire depends on how multiple income sources work together, not on a single percentage applied to your retirement savings.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  <Link href="/" className="text-medium-blue hover:underline">Retirement income planning</Link> coordinates at least five moving parts:
                </p>
                <ul className="list-disc pl-5 text-dark-gray space-y-2 mb-4">
                  <li>Social Security timing and spousal benefit claiming strategy</li>
                  <li>Withdrawal sequencing across taxable, tax-deferred, and Roth accounts</li>
                  <li>Required minimum distribution scheduling starting at age 73</li>
                  <li>Tax-bracket management to reduce lifetime tax liability</li>
                  <li>Spending flexibility rules that adjust withdrawals based on portfolio performance</li>
                </ul>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Each component affects the others. Claiming Social Security benefits at 62 instead of 70 reduces your guaranteed income by roughly 30%, which forces your portfolio to cover more living expenses and accelerates the drawdown. Pushing your retirement age back by even one year changes the math on withdrawal sequencing, RMD timing, and tax brackets simultaneously.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  The goal is to build a retirement plan where your income sources, tax strategy, and spending rules work as a coordinated system aligned with your retirement goals. Other factors like health care costs, longevity assumptions, and legacy intentions shape how you structure withdrawals from retirement savings accounts. Coordinating these elements avoids costly mistakes that emerge when decisions are made in isolation.
                </p>
              </div>
              <div id="withdrawal-rate" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">The 4% Rule in 2026: What Current Research Actually Says</h2>
                <blockquote className="border-l-4 border-medium-blue pl-4 text-gray-600 italic mb-4">
                  Morningstar's 2025 research estimates a 3.7% baseline safe starting withdrawal rate for inflation-adjusted spending over a 30-year retirement, down from the widely cited 4% rule.
                </blockquote>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  The full methodology behind <a href="https://marketing.morningstar.com/business/insights/research/the-state-of-retirement-income" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Morningstar's 2025 retirement income research</a> accounts for three shifts since the original study was published in 1994. Equity valuations are elevated and interest rate expectations remain uncertain, both compressing expected future returns for retirees entering the market today. Life expectancy estimates have lengthened the planning horizon, meaning many retirees now need their withdrawal strategy to hold up for 30 years or longer.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Among common withdrawal strategies, the fixed-rate approach carries a specific risk that online calculators tend to understate: sequence-of-returns risk. Poor market conditions in the first three to five years of retirement can permanently damage a portfolio, even when long-term average returns eventually recover. J.P. Morgan's modeling demonstrates that two retirees with identical 30-year average returns can have dramatically different outcomes depending on when the losses occur.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Early losses force withdrawals from a shrinking base, leaving less capital to benefit from the eventual recovery. Investment decisions made during those early years determine whether your portfolio survives or depletes prematurely. Proper asset allocation and withdrawal timing make the difference, and modeling these scenarios across different market conditions shows exactly how much.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  Historical averages do not guarantee future results. A fixed withdrawal strategy treats every retirement as identical. The next section compares four retirement withdrawal strategies that account for spending flexibility, tax positioning, and the risk of poor early returns.
                </p>
              </div>
              <div id="compare-strategies" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">Four Withdrawal Strategies Compared: Fixed, Flexible, Tax-Aware, and Guaranteed-Income</h2>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Strategy</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">How It Works</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Best When</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Key Risk</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Fixed Percentage</td>
                        <td className="px-4 py-3 text-gray-700">Withdraw the same inflation-adjusted amount annually</td>
                        <td className="px-4 py-3 text-gray-700">Stable spending needs, strong early returns</td>
                        <td className="px-4 py-3 text-gray-700">Portfolio depletion if early markets decline</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Flexible Spending</td>
                        <td className="px-4 py-3 text-gray-700">Adjust withdrawals based on portfolio performance</td>
                        <td className="px-4 py-3 text-gray-700">Retirees can reduce spending 10% in down years</td>
                        <td className="px-4 py-3 text-gray-700">Income volatility during retirement</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Tax-Bracket-Managed</td>
                        <td className="px-4 py-3 text-gray-700">Sequence retirement withdrawals across account types by bracket</td>
                        <td className="px-4 py-3 text-gray-700">Multiple accounts spanning taxable, tax-deferred, Roth</td>
                        <td className="px-4 py-3 text-gray-700">Requires annual tax projections</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Guaranteed-Income Floor</td>
                        <td className="px-4 py-3 text-gray-700">Cover essential expenses with Social Security or annuity; invest the rest</td>
                        <td className="px-4 py-3 text-gray-700">Baseline living expenses security is the priority</td>
                        <td className="px-4 py-3 text-gray-700">Lower growth on income allocated to guarantees</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Fixed Percentage</h3>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      The classic approach: withdraw a set percentage (historically 4%, now closer to 3.7%) and adjust for inflation annually. Simplicity is the appeal. The risk is that a fixed withdrawal ignores market reality, pulling the same amount whether your portfolio is up 20% or down 30%.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Flexible Spending</h3>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      <a href="https://www.morningstar.com/content/cs-assets/v3/assets/blt9415ea4cc4157833/bltb73b87c5d0c70ead/692f43f57737a31596684522/working_file_11.19_FINAL_REVISE.pdf" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Morningstar's December 2025 update</a> shows that flexible spending rules can push sustainable withdrawal rates from a 3.9% base case to as high as 5.7%. The mechanism is straightforward: cut spending by 10% during poor markets and increase it during strong ones. This approach works for retirees whose essential expenses are already covered by guaranteed income like Social Security, freeing portfolio withdrawals for discretionary spending. Proportional withdrawals tied to current portfolio value reduce the risk of depleting savings during extended downturns. You preserve capital during market declines while maintaining purchasing power during growth periods.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Tax-Bracket-Managed Sequencing</h3>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed mb-3">
                      The conventional advice of "withdraw from taxable accounts first, Roth last" oversimplifies a critical decision. Up to 85% of Social Security benefits may be taxable federally, meaning your withdrawal order directly affects how much of your monthly benefit you keep.
                    </p>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      Tax-bracket-managed sequencing coordinates retirement withdrawals across taxable accounts, tax-deferred accounts, and Roth IRA balances year by year using multi-year tax projections. Roth IRA balances, which grow tax-free and carry no RMDs during the owner's lifetime, are often most valuable when preserved for later years. Required minimum distributions add another layer. The IRS allows RMD installments (monthly or quarterly), not just a single annual withdrawal, giving retirees more control over bracket management within each tax year. Coordinating when you pay taxes on these distributions with your other income sources can reduce your lifetime tax burden significantly.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Guaranteed-Income Floor</h3>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed mb-3">
                      J.P. Morgan recommends covering essential expenses with guaranteed income before building an investment strategy for discretionary spending. Social Security provides the foundation. For retirees whose living expenses exceed their Social Security income, a pension or annuity may fill the gap.
                    </p>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      When evaluating annuities, compare the claims-paying ability ratings from AM Best or Moody's to assess the insurer's financial strength. Remaining assets can then follow a growth-oriented investment strategy designed to fund travel, gifts, and legacy goals. Some retirees combine elements: a bucket strategy that separates near-term spending reserves from long-term growth investments, paired with tax-bracket-managed withdrawals from different retirement accounts. The right approach depends on your spending flexibility, account mix, tax situation across DC, Maryland, or Virginia, and longevity assumptions. <Link href="/our-services/" className="text-medium-blue hover:underline">Retirement plan consulting</Link> that accounts for all four dimensions produces a different outcome than picking one approach in isolation.
                    </p>
                  </div>
                </div>
              </div>
              <div id="taxes-metro" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">How DC, Maryland, and Virginia Tax Retirement Income Differently</h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Where you live in the DC metro area directly affects how much retirement income you keep after taxes. The tax implications of your withdrawal strategy change depending on which jurisdiction claims you as a resident. The differences are significant enough to shift net income by thousands of dollars per year.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  At the federal level, up to 85% of Social Security benefits may be taxable depending on combined income, per IRS Publication 915. State treatment varies:
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Jurisdiction</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Social Security Treatment</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Pension/Retirement Income</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Key Deduction</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Washington, DC</td>
                        <td className="px-4 py-3 text-gray-700">Fully exempt from DC taxable income</td>
                        <td className="px-4 py-3 text-gray-700">First $3,000 of DC/federal pension exempt</td>
                        <td className="px-4 py-3 text-gray-700">Limited pension exclusion</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Virginia</td>
                        <td className="px-4 py-3 text-gray-700">Fully exempt from state tax</td>
                        <td className="px-4 py-3 text-gray-700"><a href="https://www.tax.virginia.gov/news/virginia-taxes-and-your-retirement" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Virginia's retirement income tax treatment</a>: age deduction up to $12,000 for 65+</td>
                        <td className="px-4 py-3 text-gray-700">Age deduction (income limits apply)</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Maryland</td>
                        <td className="px-4 py-3 text-gray-700">Exempt from state income tax</td>
                        <td className="px-4 py-3 text-gray-700">Separate pension exclusion computation</td>
                        <td className="px-4 py-3 text-gray-700">Pension exclusion up to $39,500 (65+)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  These differences matter for tax-savvy withdrawals during retirement. A retiree in Virginia who has reached full retirement age pays no state taxes on Social Security, which changes the calculus on when to claim and how aggressively to draw from tax-deferred accounts in each tax bracket. A DC resident faces different ordinary income tax rates on pension distributions than a Maryland resident does.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  Estate taxes add another layer with different thresholds in each jurisdiction, though that falls outside the scope of income planning. To minimize taxes across your retirement, coordinate withdrawal order with your state's rules rather than comparing tax rates in isolation. State rules change, and you may owe taxes differently than you expect. Consult a tax professional for guidance specific to your situation. Understanding these jurisdictional differences before you retire lets you structure your income plan to keep more of what you've saved.
                </p>
              </div>
              <div id="need-a-plan" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">When a Retirement Income Plan Needs More Than a Calculator</h2>
                <blockquote className="border-l-4 border-medium-blue pl-4 text-gray-600 italic mb-4">
                  Only 35% of non-retirees in 2024 said their retirement savings were on track, according to the Federal Reserve's 2025 economic well-being survey.
                </blockquote>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Most people who feel behind are not lacking money. Their financial situation involves variables that interact in ways a calculator cannot model: which account to draw from this year, when to trigger Social Security, how a Roth conversion affects Medicare premiums, and which state's rules apply. Professional money managers who specialize in retirement income coordinate these moving parts rather than optimizing one variable at a time.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  That complexity is why <Link href="/about/" className="text-medium-blue hover:underline">PointOak's approach to retirement planning</Link> starts with understanding your full picture before recommending a withdrawal. As a fee-only fiduciary since 2017 with over $1.08 billion in assets under management, we bring more than 50 years of collective experience. Darsh and <Link href="/our-consulting-team/" className="text-medium-blue hover:underline">our senior advisors</Link> have worked with plan sponsors and participants since 2005, giving them thousands of real withdrawal scenarios across every market condition.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  The <a href="https://www.federalreserve.gov/publications/2025-economic-well-being-of-us-households-in-2024-savings-and-investments.htm" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Federal Reserve's 2025 economic well-being