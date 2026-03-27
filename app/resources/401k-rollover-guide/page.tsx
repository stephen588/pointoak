import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Rollover Guide: Rules, Tax Traps, and When Not to Roll",
  description: "The IRS withholds 20% on indirect rollovers. This guide covers rollover rules, after-tax splits, and when keeping your old plan is the smarter move.",
  alternates: {
    canonical: "https://www.pointoak.com/resources/401k-rollover-guide/"
  }
};

const tocItems = [
  { id: "intro", label: "Introduction" },
  { id: "key-takeaways", label: "Key Takeaways" },
  { id: "terminology", label: "Rollover vs Transfer vs Conversion" },
  { id: "four-options", label: "Should You Roll Over?" },
  { id: "direct-vs-indirect", label: "Direct vs Indirect Rollover" },
  { id: "after-tax", label: "After-Tax 401(k) Money" },
  { id: "second-opinion", label: "Why Advice Deserves a Second Opinion" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const faqs = [
  {
    question: "What is the difference between a rollover and a transfer?",
    answer: "A rollover moves retirement funds between different account types and may trigger withholding, while a transfer moves funds directly between IRAs with no tax impact. The IRS treats direct trustee-to-trustee IRA transfers differently from rollovers. Transfers between IRAs are not subject to the one-per-year rollover limit and involve no withholding. A rollover from a qualified retirement plan to a rollover IRA may follow different rules depending on whether funds pass through your hands. The distinction determines your tax exposure and timing flexibility."
  },
  {
    question: "Should I roll over my 401(k) to an IRA when I leave my job?",
    answer: "It depends on your age, your plan's pricing, and whether you need penalty-free access to funds before 59½. Rolling over is not automatic. If you're between 55 and 59½, your employer-sponsored plan may allow penalty-free withdrawals that an IRA would not. Institutional fees in some 401(k) plans are lower than retail IRA equivalents, and creditor protection may be stronger. Review all four options before deciding."
  },
  {
    question: "What are the rules for rolling over a 401(k)?",
    answer: "Direct rollovers avoid withholding, indirect rollovers must be completed within 60 days, and required minimum distributions cannot be rolled over. A direct rollover sends funds straight from your plan account to the receiving plan or IRA with no withholding. An indirect rollover gives you 60 days to redeposit the full distribution amount. The one-per-year rule applies to IRA-to-IRA rollovers only, not 401(k)-to-IRA rollovers. Required minimum distributions are excluded from eligible rollover amounts under IRS rules."
  },
  {
    question: "Can I roll over a 401(k) without paying taxes?",
    answer: "Yes, a direct rollover of pretax money to a traditional IRA or another employer plan is not a taxable event. Funds remain tax-deferred as long as pretax dollars move to a traditional IRA or another qualified plan. A Roth conversion, however, is fully taxable because you're shifting pretax money into a tax-free account. Designated Roth 401(k) balances rolled to a Roth IRA are generally not taxable since contributions were already taxed. The tax outcome depends entirely on the source and destination of the funds."
  },
  {
    question: "How long do I have to roll over a 401(k)?",
    answer: "You have 60 days for an indirect rollover, but a qualified plan loan offset gets extra time until your tax filing deadline including extensions. The standard window is 60 days from the date you receive the distribution. Miss that deadline and the IRS treats the full amount as taxable income for that year. One important exception: a qualified plan loan offset rollover extends the deadline to your tax filing date, including extensions, under IRS Topic 413. This matters if your plan loan accelerates when you leave your previous employer and you cannot repay it immediately."
  },
  {
    question: "Is it dumb to leave an old 401(k) where it is?",
    answer: "Sometimes the smartest move is doing nothing, especially if the plan offers institutional pricing and you need age-55 access. An employer-sponsored plan with low-cost institutional fund classes, broad protection from creditors under federal law, and penalty-free withdrawal access between 55 and 59½ can be worth keeping. The real question is whether your former employer's plan still serves your retirement goals or whether consolidation into one account would simplify management."
  },
  {
    question: "If the check is made out to me, is that already a taxable event?",
    answer: "Not automatically, but 20% has already been withheld and you have 60 days to redeposit the full original amount. Receiving the check triggers mandatory 20% withholding, not an immediate tax liability. You can still complete the rollover by depositing the full distribution amount into an IRA or plan within 60 days, replacing the withheld portion from your own funds. Any shortfall you don't replace becomes taxable income and may face a 10% early withdrawal penalty if you're under 59½. The withheld amount is reconciled when you file your tax return via the appropriate IRS form."
  },
  {
    question: "Can I move only part of my 401(k) and leave the rest?",
    answer: "Many plans allow partial distributions, but the rules depend entirely on your specific plan document. Check with your plan administrator before assuming you can split the balance. Some 401(k) plans permit partial rollovers while others require an all-or-nothing distribution after separation. If partial rollovers are available, you can transfer funds selectively, moving some retirement assets to an IRA while keeping the remainder in the plan. Your plan provider can confirm what options are available."
  },
  {
    question: "What happens to after-tax money in a 401(k) rollover?",
    answer: "The IRS allows you to split after-tax contributions to a Roth IRA and pretax amounts to a traditional IRA in one distribution. This split-destination approach lets the after-tax portion enter a Roth IRA where future growth and withdrawals are tax-free, while the pretax portion stays tax-deferred. The after-tax money itself is not taxed again since you already paid income tax on those contributions. Proper execution requires coordination between your plan and the IRA custodian at each new financial institution holding your accounts."
  },
  {
    question: "Why does every advisor seem to recommend a rollover?",
    answer: "FINRA notes that advisors may earn fees on IRA money but receive no compensation when assets stay in an employer plan. The incentive structure is straightforward. IRA assets generate ongoing advisory fees for the advisor. Plan balances typically do not. FINRA's regulatory guidance states that rollover marketing should present a balanced view of all options, including the possibility that staying put is better. Fee-only fiduciaries like PointOak have no compensation tied to where your retirement plan assets land, which changes the conversation entirely."
  }
];

export default function FourZeroOneKRolloverGuidePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "401(k) Rollover Guide: Rules, Tax Traps, and When Not to Roll Over",
      description: "The IRS withholds 20% on indirect rollovers. This guide covers rollover rules, after-tax splits, and when keeping your old plan is the smarter move.",
      url: "https://www.pointoak.com/resources/401k-rollover-guide/",
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
          name: "401(k) Rollover Guide"
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
          { label: "401(k) Rollover Guide" }
        ]}
        title="401(k) Rollover Guide: Rules, Tax Traps, and When Not to Roll Over"
        subtitle="Leaving a job with a 401(k) balance forces a decision most people aren't prepared for: not just how to move retirement savings, but whether moving them is the right call. The IRS applies 20% mandatory federal income tax withholding to eligible rollover distributions paid directly to you instead of sent to another retirement account. This 401(k) rollover guide covers the rules, the tax traps, and the scenarios where your employer-sponsored retirement plan is exactly where your money should stay."
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
                <p className="font-outfit text-sm text-medium-gray mb-4"><em>Last Updated: June 2025</em></p>
              </div>
              <div id="key-takeaways" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">Key Takeaways</h2>
                <ul className="list-disc pl-5 text-dark-gray space-y-2">
                  <li>A direct rollover avoids the 20% mandatory withholding triggered by distributions paid to you</li>
                  <li>The age-55 exception allows penalty-free 401(k) withdrawals; rolling to an IRA forfeits that access</li>
                  <li>After-tax contributions can be split: pretax to a traditional IRA, after-tax to a Roth IRA</li>
                  <li>FINRA flags that advisors may earn fees on IRA assets but nothing if your old 401(k) stays in the plan</li>
                </ul>
              </div>
              <div id="terminology" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">Rollover vs. Transfer vs. Conversion: What the Terms Actually Mean</h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Most guides use "rollover," "transfer," and "conversion" as if they mean the same thing. The IRS disagrees. Each term triggers different tax rules, different deadlines, and different limits on how often you can move money.
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Type</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">What It Is</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Tax Treatment</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Key Rule</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Direct rollover</td>
                        <td className="px-4 py-3 text-gray-700">Plan sends funds to another plan or IRA on your behalf</td>
                        <td className="px-4 py-3 text-gray-700">No tax withheld; not taxable for pretax money</td>
                        <td className="px-4 py-3 text-gray-700">Avoids 20% withholding and 60-day deadline</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Indirect (60-day) rollover</td>
                        <td className="px-4 py-3 text-gray-700">You receive a rollover check and redeposit within 60 days</td>
                        <td className="px-4 py-3 text-gray-700">20% withheld at distribution; refunded if completed on time</td>
                        <td className="px-4 py-3 text-gray-700">One-per-year limit for IRA-to-IRA; must replace withheld amount</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Trustee-to-trustee transfer</td>
                        <td className="px-4 py-3 text-gray-700">Direct movement between IRAs without you touching funds</td>
                        <td className="px-4 py-3 text-gray-700">No tax withheld; not a taxable event</td>
                        <td className="px-4 py-3 text-gray-700">Not subject to the one-per-year rollover limit (IRS Pub. 590-A)</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Roth conversion</td>
                        <td className="px-4 py-3 text-gray-700">Pretax or traditional funds moved into a Roth IRA</td>
                        <td className="px-4 py-3 text-gray-700">Entire distribution taxable as ordinary income that year</td>
                        <td className="px-4 py-3 text-gray-700">No income limit; no annual cap</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  The distinction between an IRA rollover and an IRA transfer matters most when frequency is an issue. Unlimited direct transfers between IRAs are permitted through trustee-to-trustee transfer arrangements, but only one indirect IRA-to-IRA rollover per year. See <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">IRS rollover guidance</a> for the complete rollover process rules. Rollovers from employer plans to IRAs are not subject to the one-per-year cap.
                </p>
              </div>
              <div id="four-options" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">Should You Roll Over Your 401(k)? Four Options, One Framework</h2>
                <blockquote className="border-l-4 border-medium-blue pl-4 text-gray-600 italic mb-4">
                  Workers who leave an employer at age 55 or older can take penalty-free withdrawals from that employer&apos;s plan account. Roll those funds into an IRA and you lose access until 59½. (Vanguard / IRS)
                </blockquote>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-outfit text-navy text-xl font-semibold mb-3">When Staying in Your Current Plan Makes Sense</h3>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      Your former employer&apos;s plan may be worth keeping. Institutional share classes often carry lower investment fees than comparable mutual funds available in a retail IRA. If you&apos;re between 55 and 59½, the age-55 rule preserves penalty-free access that an IRA cannot replicate. Federal law also provides broad creditor protection in employer plans, while IRA protection varies by state. Some 401(k) plans offer stable value funds or other investment options unavailable outside the employer&apos;s retirement plan. Not every old 401(k) is a bad plan.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-outfit text-navy text-xl font-semibold mb-3">When an IRA Rollover Works Better</h3>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed mb-3">
                      Rolling to a traditional IRA or Roth IRA makes sense when your former employer&apos;s plan charges high fees, limits investment choices, or uses a narrow fund menu. A rollover IRA opens the full marketplace: individual stocks, ETFs, bonds, mutual funds, and sector-specific funds that your employer&apos;s plan never offered.
                    </p>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      Consolidation is another reason. Retirement accounts scattered across previous employers become harder to track, rebalance, and coordinate into one account. Combining them into one rollover IRA simplifies <Link href="/our-services/" className="text-medium-blue hover:underline">retirement income planning</Link> and gives you a clearer picture of where you stand.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-outfit text-navy text-xl font-semibold mb-3">When Your New Employer&apos;s Plan Is the Move</h3>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed mb-3">
                      A new plan deserves consideration when it offers institutional pricing, plan loan availability, or Roth 401(k) contributions you want to continue. Some new plans accept incoming rollovers and preserve the age-55 withdrawal exception for the transferred balance.
                    </p>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      Cash out is a fourth option, but rarely the right one. You&apos;ll face 20% withholding plus a 10% early withdrawal penalty if you&apos;re under 59½, and the full amount becomes taxable income. The mechanics of how you move the money matter as much as where you send it.
                    </p>
                  </div>
                </div>
              </div>
              <div id="direct-vs-indirect" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">Direct Rollover vs. Indirect Rollover: The Rules That Cost People Money</h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Rules that trip people up:
                </p>
                <ul className="list-disc pl-5 text-dark-gray space-y-2 mb-4">
                  <li>An indirect rollover requires your plan to withhold 20% for federal income taxes before cutting the check. You must replace that 20% from your own pocket or you&apos;ll owe taxes on the shortfall.</li>
                  <li>Miss the 60-day deadline and the entire amount becomes taxable income. If you&apos;re under 59½, add a 10% early withdrawal penalty.</li>
                  <li>The one-per-year rule applies to IRA-to-IRA rollovers. 401(k)-to-IRA rollovers are exempt from this limit.</li>
                  <li>Required minimum distributions cannot be rolled over. Any RMD amount included in a rollover must be corrected as an excess contribution.</li>
                  <li>A direct rollover avoids the withholding and the 60-day clock entirely. Pre-tax money moves to the receiving plan or IRA without triggering tax consequences.</li>
                </ul>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  The tax implications of getting this wrong compound fast. If you receive a $200,000 distribution and $40,000 is withheld, you need $200,000 in the new account within 60 days. Fail to replace the withheld portion and you&apos;ll pay taxes on the $40,000 shortfall at your ordinary income tax rate, potentially pushing you into a higher tax bracket for the year.
                </p>
                <blockquote className="border-l-4 border-medium-blue pl-4 text-gray-600 italic mb-4">
                  The IRS gives you exactly 60 days from the date you receive a distribution to complete an indirect rollover. Miss that window and the full amount is treated as a taxable distribution. (<a href="https://www.irs.gov/taxtopics/tc413" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">IRS Topic 413</a>)
                </blockquote>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  The rules get more nuanced when your 401(k) holds after-tax contributions.
                </p>
              </div>
              <div id="after-tax" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">After-Tax 401(k) Money: The Split-Destination Rule Most Guides Skip</h2>
                <blockquote className="border-l-4 border-medium-blue pl-4 text-gray-600 italic mb-4">
                  IRS example: A participant with a $100,000 balance ($80,000 in pretax contributions and earnings, $20,000 in after-tax contributions) can direct the $80,000 to a traditional IRA and the $20,000 to a Roth IRA in a single distribution. (<a href="https://www.irs.gov/retirement-plans/rollovers-of-after-tax-contributions-in-retirement-plans" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">IRS after-tax rollover guidance</a>)
                </blockquote>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  This split-destination option matters most if you made after-tax (non-Roth) contributions to your 401(k) or participated in a money purchase pension plan that tracked after-tax amounts. The after-tax portion directed to a Roth IRA grows tax-free from that point forward. Qualified withdrawals from a Roth IRA are tax-free and penalty-free in retirement, meaning you never owe income taxes on those funds again.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  A full Roth conversion of the entire balance would force unnecessary taxes on the pretax portion when a split avoids that outcome. Execution requires coordination. Work with your plan administrator and the receiving financial institution to ensure pretax and after-tax portions are directed correctly. Errors in allocation trigger unexpected tax bills. This is where <Link href="/our-services/" className="text-medium-blue hover:underline">coordinated retirement planning</Link> with an advisor who understands plan mechanics makes a measurable difference.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  <strong>What if my plan has both pretax and Roth contributions?</strong> Designated Roth contributions can only roll to another Roth account. They are already in the Roth bucket and are not part of the split-destination calculation for after-tax non-Roth money. The complexity of these rules raises a bigger question: who benefits when you move your money?
                </p>
              </div>
              <div id="second-opinion" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">Why Rollover Advice Deserves a Second Opinion</h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Rollover recommendations are among the most commercially significant conversations in personal finance. The scale of the market explains why.
                </p>
                <blockquote className="border-l-4 border-medium-blue pl-4 text-gray-600 italic mb-4">
                  As of June 30, 2025, IRA assets in the United States totaled $18.0 trillion, with roughly half originating from employer-plan rollovers. (Investment Company Institute quarterly data)
                </blockquote>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  <a href="https://www.finra.org/rules-guidance/notices/13-45" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">FINRA&apos;s regulatory guidance on rollovers</a> makes the incentive structure explicit: advisors may earn asset-based fees on IRA assets but receive no compensation if your money stays in the plan. FINRA says rollover marketing should include a balanced discussion of all available options, with specific attention to fee comparisons between the existing plan and the proposed IRA. Your tax advisor can confirm whether the rollover&apos;s tax impact justifies the move.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  PointOak Retirement Advisors operates as a <Link href="/about/" className="text-medium-blue hover:underline">fee-only fiduciary since 2017</Link>, earning no commissions on rollovers. Our corporate retirement plan consulting background means we evaluate your existing plan with the same rigor we bring to the institutional clients whose plans we help design, benchmark, and monitor. That perspective changes the conversation from "should you roll over?" to "what does your specific situation actually call for?"
                </p>
              </div>
              <div id="faq">
                <ServiceDetailFAQ faqs={faqs} />
              </div>
            </article>
          </div>
        </div>
      </section>
      </AnimateOnScroll>
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-6">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="font-outfit text-medium-gray text-xs leading-relaxed">
            Investment advisory services offered through PointOak Retirement Advisors, LLC. This guide is informational only and does not constitute investment advice.
          </p>
        </div>
      </section>
      </AnimateOnScroll>
      <CTASection />
      <Footer />
    </>
  );
}
