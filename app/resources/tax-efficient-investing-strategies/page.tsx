import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Tax-Efficient Investing Strategies for 2025 | PointOak",
  description: "Asset location added $112K to a $1M retirement portfolio in Morningstar's 2025 study. See which accounts, thresholds, and tactics actually reduce your tax drag.",
  alternates: {
    canonical: "https://www.pointoak.com/resources/tax-efficient-investing-strategies/"
  }
};

const tocItems = [
  { id: "intro", label: "Introduction" },
  { id: "what-it-means", label: "What Tax-Efficient Investing Actually Means" },
  { id: "asset-location", label: "Where Each Investment Belongs" },
  { id: "harvesting", label: "When Tax-Loss Harvesting Backfires" },
  { id: "thresholds", label: "2025 Tax Thresholds & Limits" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const faqs = [
  {
    question: "What is tax-efficient investing?",
    answer: "Tax-efficient investing is a coordinated system of account selection, investment placement, and strategic loss management designed to reduce the taxes that erode your returns each year. Most investors equate tax efficiency with selling losers in December. The real framework starts earlier: choosing account types that shelter the right income, selecting funds that generate fewer taxable events, and timing loss realization to match actual gains. Tax drag, the cumulative erosion from taxes on dividends, interest, and distributions, compounds quietly over decades. Addressing it requires a year-round system rather than a seasonal tactic. We coordinate with your CPA to ensure every decision aligns with your broader financial plan."
  },
  {
    question: "What is asset location in investing?",
    answer: "Asset location means placing each investment in the account type (taxable, tax-deferred, or Roth) where its income faces the lowest tax impact. This is distinct from asset allocation, which determines your stock-bond mix. Each account type carries different tax treatments, and asset location assigns each holding where its income faces the least erosion. Morningstar's 2025 study found bequest advantages ranging from $70,000 to $250,000 across portfolios with 40% to 60% equity allocations. PointOak integrates this tax-aware portfolio design across every account in your household."
  },
  {
    question: "How does tax-loss harvesting work?",
    answer: "You sell an investment at a loss to offset realized gains or up to $3,000 of ordinary income per year, with unused losses carrying forward. The carryforward mechanism is where most of the long-term value lives. Unused capital losses roll to future tax years indefinitely, offsetting gains or offset income whenever they arise. Timing matters year-round, not just in December. A sharp market decline in March creates the same harvesting opportunity as one in November. The key is matching each harvest to your actual gain and income picture for the year. A tax loss harvesting guide should emphasize coordination with your broader tax strategy."
  },
  {
    question: "How do I avoid a wash sale if I still want market exposure?",
    answer: "Replace the sold position with a security that is not substantially identical while maintaining similar market exposure during the 31-day waiting period. The IRS applies a facts-and-circumstances standard to 'substantially identical.' Selling one total-market ETF and immediately buying another with a near-identical portfolio risks triggering the wash-sale rule. Waiting 31 days is the cleanest path but leaves a gap in market exposure. Some investors use a different index as a bridge (switching from an S&P 500 fund to a total-market fund, for example). Coordinate with a tax professional before executing any sell investments decision involving the wash-sale window."
  },
  {
    question: "Should bonds go in my IRA and stocks in my taxable account?",
    answer: "Generally yes for bonds generating ordinary income, but account capacity and your individual tax bracket can change the answer. Bond interest is taxed at ordinary income rates, which run higher than long-term capital gains rates for most earners. Sheltering taxable bonds and bond funds in tax deferred accounts removes that annual drag. If your tax-deferred space is already full, municipal bonds held in taxable accounts avoid federal income tax entirely. PointOak's senior advisors coordinate fixed income placement across your full household to match each account's capacity and your bracket."
  },
  {
    question: "Why did I owe taxes on a mutual fund I didn't sell?",
    answer: "Mutual funds distribute taxable capital gains to shareholders annually, and the IRS treats those distributions as realized income even when reinvested. Fund managers sell holdings inside the fund throughout the year, generating realized capital gains passed to shareholders as distributions. Reinvesting those distributions does not defer the tax event. You owe capital gains taxes on the distribution in the year it occurs, regardless of whether you sold a single share. Index funds and ETFs typically generate fewer taxable gains because they trade less frequently, making them a stronger choice for taxable accounts."
  },
  {
    question: "What are the 2025 capital gains tax thresholds?",
    answer: "For 2025, single filers pay 0% on long-term capital gains up to $48,350 in taxable income and 15% up to $533,400. Married couples filing jointly reach the 0% ceiling at $96,700, per IRS Revenue Procedure 2024-40. These thresholds adjust annually for inflation. Investors near a threshold boundary can time asset sales or Roth conversions to stay within a lower capital gains tax rate bracket. Recognizing gains in a year when your income dips below the 0% line converts what would be a future 15% liability into zero. Qualified dividends also benefit from these preferential rates."
  },
  {
    question: "Which accounts should I max out before investing in a taxable brokerage account?",
    answer: "Start with your employer match, then fund your HSA, then your IRA or 401(k) up to annual limits, then invest in taxable. The 2025 limits are $4,300 for a self-only HSA ($8,550 family), $7,000 for IRAs, and $23,500 for 401(k) plans. Each dollar placed in a tax advantaged account reduces current or future tax drag on growth. A fee-only financial advisor can map the right funding sequence to your household's specific tax picture. PointOak builds this prioritization into every client's plan."
  }
];

export default function TaxEfficientInvestingStrategiesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Tax-Efficient Investing Is a System, Not a Year-End Checklist",
      description: "Asset location added $112K to a $1M retirement portfolio in Morningstar's 2025 study. See which accounts, thresholds, and tactics actually reduce your tax drag.",
      url: "https://www.pointoak.com/resources/tax-efficient-investing-strategies/",
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
          name: "Tax-Efficient Investing Strategies"
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
          { label: "Tax-Efficient Investing Strategies" }
        ]}
        title="Tax-Efficient Investing Is a System, Not a Year-End Checklist"
        subtitle="Most investors treat tax-efficient investing as a December ritual: scan the portfolio for losers, harvest a few, move on. That approach captures a fraction of the available tax savings. Morningstar's 2025 research shows that asset location alone can improve after tax returns by six figures over a retirement horizon, and that's before harvesting enters the picture. This post covers the full system behind tax efficient investing strategies: account placement, harvesting rules, and the 2025 thresholds that shape your decisions."
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
                <div className="bg-cloud-blue rounded-lg p-6 mb-8">
                  <h3 className="font-outfit text-navy text-lg font-medium mb-3">Key Takeaways</h3>
                  <ul className="list-disc pl-5 text-dark-gray space-y-2">
                    <li>Morningstar&apos;s 2025 study found disciplined asset location added an average of $112,000 to a $1M retirement portfolio&apos;s final bequest</li>
                    <li>Excess capital losses beyond realized capital gains can offset only $3,000 of ordinary income per year; the rest carries forward indefinitely</li>
                    <li>2025 HSA limits ($4,300 self-only, $8,550 family) represent significant tax deduction opportunities and tax savings most investors underuse</li>
                    <li>A loss sale triggers wash-sale disallowance if you buy a substantially identical security within 30 days before or 30 days after the sale</li>
                  </ul>
                </div>
              </div>

              <div id="what-it-means" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">What Tax-Efficient Investing Actually Means</h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Tax drag is the cumulative erosion of returns caused by taxes on dividends, interest payments, capital gain distributions, and realized gains. Over a 30-year horizon, even modest annual drag compounds into a substantial reduction of your ending portfolio value. The goal of every tax efficient investing strategy is the same: lower your tax burden without sacrificing the investment approach that serves your long-term goals.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  True tax efficiency operates as a three-part system:
                </p>
                <ul className="list-disc pl-5 text-dark-gray space-y-2 mb-4">
                  <li><strong>Account selection and asset location:</strong> placing each investment in the account type where its tax treatment creates the least drag</li>
                  <li><strong>Tax-aware investment selection:</strong> choosing tax efficient investments and fixed income securities that minimize taxable distributions and unnecessary turnover</li>
                  <li><strong>Strategic loss harvesting:</strong> offsetting realized gains with realized tax losses, timed to match your actual tax situation</li>
                </ul>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  These aren&apos;t independent tactics. They interact. A harvesting decision changes your cost basis, which shifts future tax implications. Investment decisions made without considering account placement ignore the tax consequences of where that asset sits. Managed in isolation, the tax burden compounds. Coordinating them as a single <Link href="/" className="text-medium-blue hover:underline">wealth management</Link> approach is what turns disconnected tactics into a working investment strategy.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  Asset allocation determines how much you hold in stocks versus bonds. Asset location, a separate decision, determines which account holds each position. Confusing the two misses the point: a bond fund paying ordinary income faces a sharply different tax outcome depending on whether it sits in taxable accounts or an IRA.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  That placement choice is a year-round portfolio design decision, not something to revisit once income taxes come due.
                </p>
              </div>

              <div id="asset-location" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">Where Each Investment Belongs: A Household Asset Location Framework</h2>
                <blockquote className="border-l-4 border-medium-blue pl-4 text-gray-600 italic mb-4">
                  <strong>Morningstar&apos;s 2025 study found that disciplined asset location added 7 to 30 basis points of annual decumulation performance, without reducing spending.</strong> Over a full retirement, placement decisions alone drove the bequest differences described in the takeaways above. (<a href="https://www.morningstar.com/content/cs-assets/v3/assets/blt9415ea4cc4157833/blta52662bcd6133ff0/691255324079b5059da66729/the-overlooked-edge-final.pdf" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Morningstar&apos;s 2025 asset location research</a>)
                </blockquote>

                <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Why Placement Depends on Tax Character</h3>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Asset allocation sets your stock-bond mix. Asset location answers a different question: given what you own, which account should hold each position? Different tax treatments on the same income create the opportunity.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Bond interest and REIT distributions face ordinary income rates, which can exceed 35% for high earners. Qualified dividends and long-term capital gains face lower rates. Municipal bond income owes nothing at the federal level.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Fixed income investments generating ordinary income belong in tax deferred accounts or a Roth account, where that income either grows tax-deferred or escapes taxation entirely. Index equity funds held in taxable accounts work well because their tax treatment is already favorable. Health savings accounts deserve your highest-growth holdings because qualified withdrawals are completely tax-free.
                </p>

                <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Household Asset Location Matrix</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Asset Type</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Taxable Brokerage Account</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Tax-Deferred (IRA / 401k)</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Roth / HSA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Taxable bonds / bond funds</td>
                        <td className="px-4 py-3 text-gray-700">Avoid</td>
                        <td className="px-4 py-3 text-gray-700">Best fit</td>
                        <td className="px-4 py-3 text-gray-700">Acceptable</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">REITs / real estate investment trusts</td>
                        <td className="px-4 py-3 text-gray-700">Avoid</td>
                        <td className="px-4 py-3 text-gray-700">Best fit</td>
                        <td className="px-4 py-3 text-gray-700">Best fit</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Actively managed equity funds</td>
                        <td className="px-4 py-3 text-gray-700">Acceptable</td>
                        <td className="px-4 py-3 text-gray-700">Acceptable</td>
                        <td className="px-4 py-3 text-gray-700">Best fit</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Index equity funds / ETFs</td>
                        <td className="px-4 py-3 text-gray-700">Best fit</td>
                        <td className="px-4 py-3 text-gray-700">Acceptable</td>
                        <td className="px-4 py-3 text-gray-700">Acceptable</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Municipal bonds</td>
                        <td className="px-4 py-3 text-gray-700">Best fit</td>
                        <td className="px-4 py-3 text-gray-700">Avoid</td>
                        <td className="px-4 py-3 text-gray-700">Avoid</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  This matrix is a starting framework, not a formula. Available space in tax advantaged accounts is the binding constraint. Many investors lack enough retirement accounts capacity to shelter all of their fixed income. When tax deferred space is full, municipal bonds held in taxable accounts offer a second-best path for fixed income exposure.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Morningstar found the strongest bequest improvements ($70,000 to $250,000) for portfolios with 40% to 60% equity allocations, precisely because those portfolios had more bonds to place optimally. Coordinating placement across taxable accounts, employer plans, and IRAs requires a household-level view. That&apos;s central to <Link href="/about/" className="text-medium-blue hover:underline">our approach to retirement planning</Link>, where every account is part of a single strategy.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  Placing fixed income securities in tax deferred accounts also shields you from forced selling when interest rates rise and bond prices fall. Tax advantaged accounts protect you from the tax liability that arises when rebalancing between asset classes, keeping your asset location decisions intact without triggering taxable events.
                </p>
              </div>

              <div id="harvesting" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">When Tax-Loss Harvesting Backfires</h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  <em>"Is tax-loss harvesting just selling losers in December?"</em> This question appears in nearly every investing forum. The short answer reveals why a tax loss harvesting strategy is more nuanced than it sounds.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Tax loss harvesting involves selling investments at a loss to offset gains realized elsewhere in your portfolio. When it works, you reduce capital gains taxes dollar-for-dollar. But several Internal Revenue Service rules limit when it works and how much value it actually delivers.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Here are four scenarios where harvesting fails or backfires:
                </p>
                <ol className="list-decimal pl-5 text-dark-gray space-y-3 mb-4">
                  <li><strong>The $3,000 ceiling.</strong> If your tax losses exceed your realized gains, only $3,000 of the excess can offset ordinary income per year (<a href="https://www.irs.gov/publications/p550" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">IRS Publication 550</a>). An investor with $20,000 in harvested losses and no capital gains to offset would need nearly seven years to use them all.</li>
                  <li><strong>The 61-day wash-sale window.</strong> You can&apos;t sell investments at a loss and repurchase a substantially identical security within 30 days before or 30 days after the sale. The Internal Revenue Service treats "substantially identical" as a facts-and-circumstances test, not a simple ticker swap, so selling one S&P 500 index fund and buying another with a near-identical portfolio may still trigger disallowance.</li>
                  <li><strong>Phantom mutual fund gains.</strong> Mutual funds distribute realized capital gains to shareholders annually, even when reinvested. Short term capital gains distributions face ordinary income tax rates. You can owe capital gains taxes on a fund you never sold.</li>
                  <li><strong>No gains to offset.</strong> If you have no realized gains and are already below the $3,000 ordinary income cap, harvesting creates tax losses you can&apos;t use this year. The value of any tax loss harvesting guide depends on having gains elsewhere to offset gains against.</li>
                </ol>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  Investing involves risk, and harvesting during downturns means weighing immediate tax savings against long-term portfolio positioning. Actively managed mutual funds generate higher turnover and more frequent capital gain distributions than index funds, making them less suitable for taxable accounts where those distributions trigger immediate ordinary income tax rates.
                </p>
              </div>

              <div id="thresholds" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">2025 Tax Thresholds and Contribution Limits That Affect Your Decisions</h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Every tax-efficient investing strategy depends on knowing where the brackets fall. The table below shows 2025 long-term capital gains tax rate thresholds by filing status, sourced to <a href="https://www.irs.gov/pub/irs-irbs/irb24-45.pdf" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">IRS Revenue Procedure 2024-40</a>.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Filing Status</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">0% Rate Ceiling</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">15% Rate Ceiling</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">20% Rate Floor</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Single</td>
                        <td className="px-4 py-3 text-gray-700">$48,350</td>
                        <td className="px-4 py-3 text-gray-700">$533,400</td>
                        <td className="px-4 py-3 text-gray-700">Above $533,400</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Head of Household</td>
                        <td className="px-4 py-3 text-gray-700">$64,750</td>
                        <td className="px-4 py-3 text-gray-700">$566,700</td>
                        <td className="px-4 py-3 text-gray-700">Above $566,700</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Married Filing Jointly</td>
                        <td className="px-4 py-3 text-gray-700">$96,700</td>
                        <td className="px-4 py-3 text-gray-700">$600,050</td>
                        <td className="px-4 py-3 text-gray-700">Above $600,050</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Investors with taxable income below the 0% ceiling can realize long term gains completely free of federal income tax. That changes the harvesting calculus: if your income puts you in the 0% bracket, selling appreciated positions generates no tax liability, and there is no loss to harvest against.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Your marginal tax rate on ordinary income also determines which accounts deliver the greatest tax benefits. Tax deferred retirement savings accounts (401(k), traditional IRA) reduce your current-year tax bill by deferring income taxes on contributions and growth. Roth and HSA accounts eliminate future taxes entirely, per <a href="https://www.irs.gov/retirement-plans/cola-increases-for-dollar-limitations-on-benefits-and-contributions" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">IRS retirement plan contribution limits</a>:
                </p>
                <ul className="list-disc pl-5 text-dark-gray space-y-2 mb-4">
                  <li><strong>HSA:</strong> $4,300 self-only / $8,550 family</li>
                  <li><strong>Traditional or Roth IRA:</strong> $7,000</li>
                  <li><strong>401(k) / 403(b):</strong> $23,500</li>
                </ul>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  Once tax advantaged space is full, remaining investments go into taxable accounts where placement and fund selection become the primary levers for reducing drag. State and local taxes add another layer: high earners in states with local income taxes face combined marginal rates exceeding 50% on ordinary income, which makes coordinating these thresholds with a tax advisor essential. Tax laws vary by jurisdiction, and working with a tax professional who understands the federal alternative minimum tax alongside your state situation ensures your investing strategy accounts for the full picture.
                </p>
              </div>

              <div id="faq" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">Frequently Asked Questions</h2>
                <ServiceDetailFAQ faqs={faqs} />
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  Coordinating asset location, loss harvesting, and account selection across your household takes more than a spreadsheet. PointOak Retirement Advisors offers a complimentary consultation: no cost, no obligation. <Link href="/contact/" className="text-medium-blue hover:underline">Schedule your consultation</Link> to discuss your investing strategy with a fiduciary financial advisor.
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
