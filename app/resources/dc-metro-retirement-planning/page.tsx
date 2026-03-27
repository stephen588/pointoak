import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "DC Area Retirement Planning: What 2026 Changes for Virginia, Maryland, and DC | PointOak",
  description: "Retiring in the DC area means planning across three jurisdictions that each tax retirement income differently. McLean alone has a median household income above $250,000, putting many retirees in brackets that trigger higher Medicare premiums and phaseouts on state deductions.",
  alternates: {
    canonical: "https://www.pointoak.com/resources/dc-metro-retirement-planning/"
  }
};

const tocItems = [
  { id: "intro", label: "Introduction" },
  { id: "what-it-involves", label: "What DC-Area Retirement Planning Involves" },
  { id: "2026-rules", label: "2026 Retirement Rules" },
  { id: "tax-comparison", label: "DC vs. Virginia vs. Maryland Taxes" },
  { id: "social-security", label: "Social Security Timing" },
  { id: "medicare-housing", label: "Medicare, Housing, and Costs" },
  { id: "professional-help", label: "When to Get Professional Help" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const faqs = [
  {
    question: "How much money do you need to retire in the DC area?",
    answer: "National rules of thumb fail in a region where median household income tops $250,000 and median home values exceed $1.4 million. Your number depends on housing costs, healthcare exposure, tax jurisdiction, and income sources. A retiree in McLean with a paid-off home and federal pension needs a very different portfolio than someone renting in Bethesda with only 401(k) savings. PointOak Retirement Advisors builds retirement income planning around your actual cost structure, not a generic multiplier."
  },
  {
    question: "Is Virginia or Maryland better for retirees near DC?",
    answer: "Neither state is universally better; the answer depends on your income sources, property situation, and whether you're eligible for specific deductions. Virginia's age deduction shelters up to $12,000 per qualifying taxpayer 65 and older. Maryland offers a pension exclusion calculated through a worksheet that can benefit retirees with qualifying pension income. DC provides income-tested senior property tax relief for homeowners with federal adjusted gross income under $154,750. Coordinated planning evaluates all three jurisdictions against your specific income sources to find the lowest lifetime tax cost."
  },
  {
    question: "When should I claim Social Security if I plan to keep working?",
    answer: "Claiming while earning above $24,480 in 2026 triggers a benefit reduction for anyone under full retirement age of 67. The earnings test withholds $1 for every $2 earned above the threshold. Those withheld benefits aren't lost permanently; SSA recalculates your benefit at FRA to account for months of reduction. But if your spouse plans to claim spousal benefits based on your record, early claiming also caps their maximum. Delaying to 70 adds roughly 8% per year to your monthly check, which compounds the advantage for both household members and family beneficiaries who watch their combined benefit grow."
  },
  {
    question: "What does Medicare cost in retirement in 2026?",
    answer: "The standard 2026 Medicare Part B premium is $202.90 per month, with higher costs for retirees above income thresholds. Part A is premium-free for most retirees with sufficient work history. Without premium-free eligibility, Part A runs $311 or $565 per month. Higher earners pay IRMAA surcharges on both Part B and Part D. In the DC area, where many retirees have six-figure incomes even after leaving work, IRMAA exposure is a real subject to plan around rather than a theoretical risk."
  },
  {
    question: "Can I retire in McLean or Northern Virginia without downsizing?",
    answer: "Yes, if your cash flow and withdrawal strategy can cover housing costs on a $1.4 million median-value home without depleting your portfolio. Property taxes, maintenance, insurance, and potential HOA fees on a Northern Virginia home add up quickly. The question isn't just whether you can afford the mortgage. It's whether staying in a high-value home makes sense when that equity could generate income elsewhere. Watch how your annual housing costs compare to the income your portfolio can sustain, and factor in Virginia's property tax relief programs for eligible seniors."
  },
  {
    question: "Is it worth taking Social Security early if I'm burned out from work?",
    answer: "Claiming before 67 permanently reduces your monthly benefit, and working even part-time above the earnings test can reduce it further. The reduction for claiming at 62 is approximately 30% compared to your full benefit at 67. That's a permanent cut, not a temporary one. If burnout is driving the decision, the better question is whether you can bridge the gap between leaving work and age 67 using savings or a phased transition. Early claiming to find relief from a career can cost six figures in lifetime benefits, making this an important decision to model before you commit."
  },
  {
    question: "Do I need a financial planner if most of my money is in a 401(k) and TSP?",
    answer: "A concentrated position in tax-deferred accounts creates withdrawal, tax, and rollover decisions that grow more complex the larger the balance. The 2026 TSP and 401(k) contribution limit of $24,500 means eligible late-career savers may be adding significantly each year. Once you retire, you'll need to decide whether to leave assets in the TSP, roll over to an IRA, or participate in a phased withdrawal. Each choice has different tax implications across DC, Virginia, and Maryland. Our team at PointOak has coordinated thousands of these transitions, drawing on advisory experience that dates to 2005."
  },
  {
    question: "What decisions should I make before retiring in the DC metro area?",
    answer: "A pre-retirement checklist for DC-area retirees covers at least six categories: Social Security timing, Medicare enrollment, tax jurisdiction, withdrawal order, housing, and beneficiary designations. Most people focus on the first two and learn about the rest after mistakes are already locked in. Required minimum distributions begin at age 73 under SECURE 2.0, which means your withdrawal sequencing strategy needs to account for forced distributions well before they start. Estate coordination and beneficiary updates are equally critical, especially if you own property in multiple jurisdictions or hold accounts across several custodians. Build your retirement income planning checklist at least two years before your target date."
  }
];

export default function DCMetroRetirementPlanningPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "DC Area Retirement Planning: What 2026 Changes for Virginia, Maryland, and DC",
      description: "Retiring in the DC area means planning across three jurisdictions that each tax retirement income differently.",
      url: "https://www.pointoak.com/resources/dc-metro-retirement-planning/",
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
          name: "DC Area Retirement Planning"
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
          { label: "DC Area Retirement Planning" }
        ]}
        title="DC Area Retirement Planning: What 2026 Changes for Virginia, Maryland, and DC"
        subtitle="Retiring in the DC area means planning across three jurisdictions that each tax retirement income differently. McLean alone has a median household income above $250,000 (U.S. Census Bureau, 2020-2024), putting many retirees in brackets that trigger higher Medicare premiums and phaseouts on state deductions. This guide covers the 2026 rules, state-by-state tax comparisons, Social Security timing, and cost factors that shape your DC retirement plan."
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
                <p className="font-outfit text-sm text-medium-gray mb-4"><strong>Last Updated: June 2026</strong></p>
                <div className="bg-cloud-blue rounded-lg p-6 mb-8">
                  <h3 className="font-outfit text-navy text-lg font-medium mb-3">Key Takeaways</h3>
                  <ul className="list-disc pl-5 text-dark-gray space-y-2">
                    <li>2026 401(k) and TSP limit: $24,500; ages 60-63 catch-up rises to $11,250</li>
                    <li>Virginia's age deduction reaches $12,000; Maryland and DC offer separate pension and property tax relief</li>
                    <li>Medicare Part B standard premium: $202.90/month in 2026</li>
                    <li>Social Security COLA: 2.8% for 2026</li>
                  </ul>
                </div>
              </div>

              <div id="what-it-involves" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">What DC-Area Retirement Planning Actually Involves</h2>
                <blockquote className="border-l-4 border-medium-blue pl-4 text-gray-600 italic mb-4">
                  20.2% of McLean CDP residents are age 65 or older (U.S. Census Bureau, 2020-2024).
                </blockquote>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  That concentration of retirees exists for a reason. The DC metro area combines a large federal and government-adjacent workforce, high housing values, and cross-border tax complexity that doesn't exist in single-state metros. Your retirement income might come from a federal pension, a TSP, Social Security, and taxable investments simultaneously, and each source is treated differently depending on whether you file in DC, Virginia, or Maryland. Understanding these overlapping rules separates a retirement plan that works from one that leaks value at every turn.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  The planning dimensions specific to this region include:
                </p>
                <ul className="list-disc pl-5 text-dark-gray space-y-2 mb-4">
                  <li>State income tax treatment that varies by jurisdiction, income source, and age</li>
                  <li>Social Security timing decisions complicated by continued federal employment or consulting</li>
                  <li>Medicare enrollment and cost management, especially IRMAA exposure at DC-area income levels</li>
                  <li>Withdrawal sequencing across tax-deferred, tax-free, and taxable account types</li>
                  <li>Housing equity decisions driven by property values well above national medians</li>
                  <li>Coordination of all five factors across DC, Virginia, and Maryland rules</li>
                </ul>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  For retirees managing this kind of complexity, <Link href="/our-services/" className="text-medium-blue hover:underline">retirement plan consulting</Link> that accounts for jurisdiction-level differences is the baseline, not a luxury.
                </p>
              </div>

              <div id="2026-rules" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">2026 Retirement Rules That Change Your Planning Math</h2>
                
                <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Contribution Limits for Late-Career Savers</h3>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  The IRS raised several retirement account limits for 2026, and one change creates a narrow but significant savings window. Workers ages 60 through 63 can now make catch-up contributions of $11,250 to eligible 401(k), 403(b), 457, and TSP plans, up from the standard age-50 catch-up of $8,000. For DC-area federal employees maxing out their TSP in the final years before retirement, this means an additional $3,250 in annual tax-deferred savings during the highest-earning stretch of their careers.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Here's how the 2026 limits break down per <a href="https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">IRS 2026 contribution limits</a>:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Account Type</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Standard Limit</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Age 50+ Catch-Up</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Ages 60-63 Catch-Up</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Max Total (60-63)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">401(k) / 403(b) / TSP</td>
                        <td className="px-4 py-3 text-gray-700">$24,500</td>
                        <td className="px-4 py-3 text-gray-700">$8,000</td>
                        <td className="px-4 py-3 text-gray-700">$11,250</td>
                        <td className="px-4 py-3 text-gray-700">$35,750</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">IRA</td>
                        <td className="px-4 py-3 text-gray-700">$7,500</td>
                        <td className="px-4 py-3 text-gray-700">$1,100</td>
                        <td className="px-4 py-3 text-gray-700">$1,100</td>
                        <td className="px-4 py-3 text-gray-700">$8,600</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-6">
                  The ages 60-63 window is exactly four years. Missing it means those dollars stay on the table permanently.
                </p>

                <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Social Security Updates for 2026</h3>
                <blockquote className="border-l-4 border-medium-blue pl-4 text-gray-600 italic mb-4">
                  The 2026 Social Security cost-of-living adjustment is 2.8% (SSA).
                </blockquote>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Benefits rose 2.8% in January 2026, per <a href="https://www.ssa.gov/cola/factsheets/2026.html" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">SSA's 2026 COLA fact sheet</a>. The maximum Social Security benefit at full retirement age in 2026 is $4,152 per month, paid to eligible beneficiaries who maximized their earnings history.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  A separate update carries particular weight in the DC area. The Social Security Fairness Act became law on January 5, 2025, eliminating the Windfall Elimination Provision and Government Pension Offset that had reduced benefits for public-sector retirees with pensions. SSA identified 2.8 million affected beneficiaries and sent 3.1 million payments totaling $17 billion by July 2025. For the DC metro's large population of federal employees and public-sector workers who contributed to both Social Security and a government pension, this changes the math on claiming strategy and retirement income projections.
                </p>
              </div>

              <div id="tax-comparison" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">DC vs. Virginia vs. Maryland: How Retirement Taxes Compare</h2>
                <blockquote className="border-l-4 border-medium-blue pl-4 text-gray-600 italic mb-4">
                  Virginia allows an age deduction of up to $12,000 per qualifying taxpayer age 65 or older (Virginia Tax).
                </blockquote>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  The three jurisdictions surrounding DC each handle retirement income, property taxes, and pension distributions under different rules. See <a href="https://www.tax.virginia.gov/subtractions" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Virginia Tax age deduction rules</a> for eligibility details.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Factor</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">DC</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Virginia</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Maryland</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Retirement income tax</td>
                        <td className="px-4 py-3 text-gray-700">Taxed as ordinary income; no blanket retirement exclusion</td>
                        <td className="px-4 py-3 text-gray-700">Age deduction up to $12,000 for eligible taxpayers 65+</td>
                        <td className="px-4 py-3 text-gray-700">Pension exclusion for qualifying taxpayers 65+ per worksheet</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Property tax relief for seniors</td>
                        <td className="px-4 py-3 text-gray-700">Income-tested homestead deduction using prior-year federal AGI</td>
                        <td className="px-4 py-3 text-gray-700">Real estate tax relief programs vary by county</td>
                        <td className="px-4 py-3 text-gray-700">Homeowners' and renters' tax credits; varies by county</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Pension / 401(k) distributions</td>
                        <td className="px-4 py-3 text-gray-700">Fully taxable at DC rates</td>
                        <td className="px-4 py-3 text-gray-700">Partially offset by age deduction if eligible</td>
                        <td className="px-4 py-3 text-gray-700">Partially excluded under pension exclusion rules</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  A simple comparison of top tax rates doesn't capture the real difference. The interaction between your income sources, deduction eligibility, and property situation determines which jurisdiction produces the best after-tax outcome. Someone with a federal pension plus TSP distributions might see a materially different result in Maryland than in Virginia, even at the same gross income.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  This is where coordinated <Link href="/our-services/" className="text-medium-blue hover:underline">retirement income planning</Link> across asset allocation, withdrawal order, and tax jurisdiction adds measurable value and helps protect your assets from unnecessary tax erosion year over year.
                </p>
              </div>

              <div id="social-security" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">Social Security Timing When You Plan to Keep Working</h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  For anyone born in 1960 or later, full retirement age is exactly 67, per <a href="https://www.ssa.gov/benefits/retirement/planner/1960.html" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">SSA full retirement age for 1960+ births</a>. Not "around 66." Not "66 and change." That distinction matters because every month of early claiming applies a precise reduction formula, and every month of delay past 67 earns an 8% annual credit up to age 70.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  <strong>Should I claim Social Security if I'm still working?</strong>
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  It depends on how much you earn. In 2026, the earnings-test limit is $24,480 for people under FRA. Benefits above that threshold are reduced by $1 for every $2 earned. In the year you reach FRA, the limit jumps to $65,160 with a smaller reduction. Many DC-area professionals earning well above these limits find that claiming early while working full-time triggers both benefit reductions and higher tax brackets, creating a double loss on the same income.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  <strong>Does delaying past 67 still make sense?</strong>
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Each year of delay adds roughly 8% to your monthly benefit, which is a guaranteed return few investments match. For someone in good health with other income sources to bridge the gap, delayed claiming functions as longevity insurance.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  The factors that shape this decision for DC-area retirees include:
                </p>
                <ul className="list-disc pl-5 text-dark-gray space-y-2">
                  <li>Current earnings relative to the $24,480 and $65,160 thresholds</li>
                  <li>Whether you need Social Security cash flow to cover living costs before 70</li>
                  <li>Spousal benefit coordination and survivor benefit implications</li>
                  <li>Life expectancy and family health history</li>
                  <li>How claiming timing interacts with your tax bracket across jurisdictions</li>
                </ul>
              </div>

              <div id="medicare-housing" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">Medicare, Housing, and the Costs That Shape Retirement Income</h2>
                <blockquote className="border-l-4 border-medium-blue pl-4 text-gray-600 italic mb-4">
                  The 2026 Medicare Part B standard premium is $202.90 per month (Medicare.gov).
                </blockquote>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  That figure covers most retirees, but DC-area incomes frequently trigger IRMAA surcharges. Medicare uses your tax return from two years prior to set income-adjusted premiums. A withdrawal spike in one year, such as a large Roth conversion or stock option exercise, can push your Part B and Part D premiums higher for a future coverage period. This connection between investment strategy and healthcare costs makes withdrawal sequencing a live planning variable, not a footnote. Easy access to your tax return history and income projections helps you model IRMAA exposure before it hits.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Part A costs $311 or $565 per month for retirees who don't qualify for premium-free coverage based on work history.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  McLean's median home value is $1,412,700 (U.S. Census Bureau, 2020-2024). That equity shapes every major retirement decision: aging in place with high property taxes, downsizing to free up cash flow, or using a home equity strategy to supplement income. For many retirees in Northern Virginia, their home is the single largest asset on the balance sheet. <Link href="/about/" className="text-medium-blue hover:underline">Our approach to retirement income planning</Link> treats housing as a planning lever, not an afterthought. The insights you gain from modeling different housing scenarios often reveal opportunities to improve cash flow or reduce lifestyle risk.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  The cost categories that DC-area retirees need to map against their withdrawal plan:
                </p>
                <ul className="list-disc pl-5 text-dark-gray space-y-2">
                  <li>Medicare premiums: standard and income-adjusted (IRMAA)</li>
                  <li>Housing: mortgage payoff, property taxes, maintenance on high-value homes</li>
                  <li>Jurisdiction-specific property tax relief eligibility</li>
                  <li>How each cost category interacts with which accounts you draw from and when</li>
                </ul>
              </div>

              <div id="professional-help" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">When Coordinated Retirement Planning Is Worth Professional Help</h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  When your retirement involves multiple account types, cross-jurisdiction tax rules, Social Security timing, and Medicare cost management, the cost of uncoordinated decisions often exceeds the cost of advice. Each section of this guide described a planning dimension that interacts with every other one. The risk isn't getting one decision wrong; it's making five decisions in isolation that conflict. If you request a review of your current plan, you'll often discover gaps that weren't visible when looking at each piece separately.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Specific scenarios where coordination changes the outcome:
                </p>
                <ul className="list-disc pl-5 text-dark-gray space-y-2 mb-4">
                  <li>Rolling over a 401(k) or TSP while managing the tax impact across DC, Virginia, and Maryland filing rules</li>
                  <li>Coordinating Social Security claiming with continued federal employment income and the earnings test</li>
                  <li>Sequencing withdrawals to avoid IRMAA surcharges in future Medicare coverage periods</li>
                  <li>Consolidating retirement accounts from multiple employers into a coherent investment strategy and withdrawal plan</li>
                </ul>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  PointOak Retirement Advisors is a fee-only fiduciary that coordinates investment, retirement income, and tax-aware strategies across these exact scenarios. Darsh and his team have guided thousands of participants through these transitions, drawing on advisory experience that dates to 2005. If any of the situations above match yours, a 30-minute conversation can clarify whether your current plan accounts for these interactions. <Link href="/contact/" className="text-medium-blue hover:underline">Schedule a consultation</Link> to discuss your situation.
                </p>
              </div>

              <div id="faq" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">Frequently Asked Questions</h2>
                <ServiceDetailFAQ faqs={faqs} />
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  Retirement in the DC area is a series of tax, income, and healthcare choices that interact across three jurisdictions. <Link href="/contact/" className="text-medium-blue hover:underline">Schedule your consultation</Link> or call (703) 595-4444 to coordinate those moving parts with a fee-only fiduciary. The first conversation is complimentary: 30-45 minutes, no cost, no obligation.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      </AnimateOnScroll>
      <CTASection />
      <Footer />
    </>
  );
}
