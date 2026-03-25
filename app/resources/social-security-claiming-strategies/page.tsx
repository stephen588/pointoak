import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Social Security Claiming Strategies | Maximize Retirement Benefits | PointOak",
  description: "Learn social security claiming strategies to maximize retirement benefits. Understand spousal benefits, delayed retirement credits, tax implications, and how timing affects lifetime income.",
  openGraph: {
    title: "Social Security Claiming Strategies | PointOak",
    description: "How to maximize your Social Security retirement benefits through strategic claiming timing, spousal benefits, and tax planning.",
    url: "https://www.pointoak.com/resources/social-security-claiming-strategies/",
  },
};

const tocItems = [
  { id: "claiming-age", label: "Why Your Claiming Age Matters" },
  { id: "full-retirement-age", label: "Full Retirement Age & Benefit Calculations" },
  { id: "spousal-survivor", label: "Spousal & Survivor Benefits" },
  { id: "tax-implications", label: "Tax Implications" },
  { id: "broader-plan", label: "Social Security in Your Broader Plan" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const faqs = [
  {
    question: "When is the earliest I can claim Social Security?",
    answer: "You can start your social security retirement benefits as early as age 62. However, claiming early permanently reduces your monthly benefit by up to 30% compared to waiting until your full retirement age. The decision depends on your health, financial needs, marital status, and other income sources.",
  },
  {
    question: "What are delayed retirement credits?",
    answer: "For each month you delay claiming past your full retirement age (up to age 70), your benefit increases by approximately 0.67% per month, or 8% per year. These delayed retirement credits result in a permanently higher benefit for the rest of your life.",
  },
  {
    question: "Can my spouse claim benefits on my record?",
    answer: "Yes. A spouse can receive up to 50% of your primary insurance amount as a spousal benefit, provided they're at least 62 or caring for your child under 16. If your spouse has their own work record, they'll receive the higher benefit of the two.",
  },
  {
    question: "How does claiming early affect my surviving spouse?",
    answer: "If you claim early and receive a reduced benefit, your surviving spouse receives that reduced amount (assuming it's still the higher of the two household benefits). Delaying your claim locks in a higher benefit that your surviving spouse receives after you pass away.",
  },
  {
    question: "Will working while receiving benefits reduce my social security payments?",
    answer: "If you haven't reached your full retirement age, the annual earnings limit applies. In 2026, the limit is $24,480 for those under FRA (benefits reduced by $1 for every $2 over the limit). Once you reach full retirement age, there's no earnings limit and no reduction.",
  },
  {
    question: "Is Social Security income taxable?",
    answer: "Yes, depending on your combined income. For individuals with combined income above $25,000, up to 50% of benefits may be taxable. Above $34,000, up to 85% becomes taxable. For married couples, the thresholds are $32,000 and $44,000 respectively.",
  },
  {
    question: "What is the maximum Social Security benefit?",
    answer: "The maximum monthly benefit in 2026 for someone claiming at age 70 is $5,251. At full retirement age it's approximately $4,018, and at age 62 it's $2,969. Your actual benefit depends on your earnings history and when you claim.",
  },
  {
    question: "Should I factor investment advice into my claiming decision?",
    answer: "Absolutely. Your broader investment strategies, including how you draw from retirement savings and taxable brokerage accounts, directly impact when it makes sense to start benefits. A coordinated approach that considers Social Security alongside your complete financial picture typically produces better outcomes.",
  },
  {
    question: "How does the Bipartisan Budget Act affect my options?",
    answer: "The Bipartisan Budget Act of 2015 eliminated the \"file and suspend\" and \"restricted application\" strategies. Under current rules, if you file for benefits before your FRA, you're deemed to be filing for all benefits you're eligible for. Survivor benefits remain a separate filing decision.",
  },
  {
    question: "Does PointOak provide investment advice on Social Security timing?",
    answer: "PointOak specializes in helping plan sponsors build and manage retirement plans that set employees up for success. Our education and communications programs help participants understand how Social Security interacts with their 401(k) savings. For individual Social Security claiming decisions, we recommend consulting a qualified financial advisor or tax professional. PointOak does not provide tax or legal advice.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Social Security Claiming Strategies: How to Maximize Your Retirement Benefits",
    description: "Comprehensive guide to Social Security claiming strategies, spousal benefits, delayed retirement credits, and tax implications for retirement planning.",
    url: "https://www.pointoak.com/resources/social-security-claiming-strategies/",
    publisher: {
      "@type": "Organization",
      name: "PointOak Retirement Advisors",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function SocialSecurityClaimingStrategiesPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Social Security Claiming Strategies" },
        ]}
        title="Social Security Claiming Strategies"
        subtitle="How to Maximize Your Retirement Benefits"
      />

      {/* Article with TOC sidebar */}
      <AnimateOnScroll>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* TOC Sidebar */}
            <aside className="lg:w-[280px] flex-shrink-0">
              <div className="lg:sticky lg:top-8">
                <h3 className="font-outfit text-navy text-sm font-bold uppercase tracking-wider mb-4">
                  In This Guide
                </h3>
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

            {/* Article Content */}
            <article className="flex-1 min-w-0">
              <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                Deciding when to claim Social Security benefits is one of the most consequential financial decisions you&apos;ll make in retirement. The difference between filing at age 62 versus waiting until age 70 can mean hundreds of thousands of dollars in lifetime benefits, yet more than two-thirds of workers still claim before reaching full retirement age.
              </p>
              <p className="font-outfit text-dark-gray text-base leading-relaxed mb-10">
                For plan sponsors helping employees navigate this decision, and for individuals approaching retirement themselves, understanding social security claiming strategies is essential to building a secure financial future. At <Link href="/about" className="text-navy font-medium hover:underline">PointOak Retirement Advisors</Link>, we help plan sponsors and participants make informed decisions about retirement income, including how Social Security fits into the broader picture.
              </p>

              {/* Why Your Claiming Age Matters */}
              <div id="claiming-age" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-4">
                  Why Your Social Security Claiming Age Matters
                </h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Your monthly benefit amount changes significantly depending on when you start benefits. The Social Security Administration calculates your primary insurance amount (PIA) based on your earnings history — specifically your highest 35 years of annual earnings. That PIA represents what you&apos;d receive at your full retirement age (FRA). For anyone born in 1960 or later, your full retirement age is 67, but you can claim as early as age 62 or delay as late as age 70.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  The financial impact is substantial. Filing at age 62 permanently reduces your benefits by as much as 30%, dropping a $2,000 monthly benefit at FRA to roughly $1,400 per month. Waiting until age 70 earns you delayed retirement credits of 8% per year beyond your FRA, boosting that same benefit to approximately $2,480 — a 24% increase.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  The annual earnings limit adds another layer. If you collect benefits before reaching full retirement age and continue working, the SSA reduces your benefit payments by $1 for every $2 earned above $24,480 in 2026.
                </p>
              </div>

              {/* Full Retirement Age */}
              <div id="full-retirement-age" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-4">
                  Understanding Full Retirement Age and Benefit Calculations
                </h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Your full retirement age determines the baseline for every claiming decision. The benefit calculation starts with your earnings record, averaging your 35 highest-earning years to determine your primary insurance amount. If you have fewer than 35 years of covered employment, zeros fill the gaps, pulling your benefit amount down.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Someone with a shorter life expectancy or immediate financial burden may benefit from claiming early. However, research consistently shows that waiting until age 70 helps maximize lifetime benefits for individuals who live to average life expectancy or beyond. Each month you delay past your FRA, your benefit grows by two-thirds of 1%.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  The break-even point typically falls around age 78 to 80. Beyond that point, the person who waited receives more money in total benefit payments.
                </p>
              </div>

              {/* Spousal & Survivor Benefits */}
              <div id="spousal-survivor" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-6">
                  Spousal Benefits and Survivor Benefits: Strategies for Married Couples
                </h2>

                <h3 className="font-outfit text-navy text-xl font-medium mb-3">How Spousal Benefits Work</h3>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  A spouse can claim spousal benefits worth up to 50% of the higher earning spouse&apos;s PIA, even if the lower earning spouse has limited or no earnings history. To claim spousal benefits, the primary worker must have already filed for their own retirement benefit. If you&apos;re eligible for both your own benefits and a spousal benefit, you&apos;ll receive the higher amount.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-6">
                  Since the Bipartisan Budget Act of 2015 eliminated the &quot;file and suspend&quot; strategy, deemed filing rules now require most people to file for all benefits they&apos;re eligible for simultaneously. However, survivor benefits are treated differently.
                </p>

                <h3 className="font-outfit text-navy text-xl font-medium mb-3">Survivor Benefits for a Surviving Spouse</h3>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  When one spouse passes away, the surviving spouse receives the higher of the two social security payments. This is why it often makes sense for the higher earner to delay claiming as long as possible: it locks in a larger benefit that protects the surviving spouse financially.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-6">
                  A key strategy for married couples: the lower earning spouse claims their own benefits early to provide household income, while the higher earning spouse delays until age 70 to maximize the eventual survivor benefit.
                </p>

                <h3 className="font-outfit text-navy text-xl font-medium mb-3">Divorced Spousal Benefits</h3>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  If your marriage lasted at least 10 years and you haven&apos;t remarried, you may qualify for a divorced spousal benefit based on your ex-spouse&apos;s record. Your ex-spouse doesn&apos;t need to know you&apos;re claiming, and it doesn&apos;t reduce their benefit amount.
                </p>
              </div>

              {/* Tax Implications */}
              <div id="tax-implications" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-4">
                  Tax Implications of Social Security Income
                </h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-6">
                  Many retirees are surprised to learn that social security benefits can be subject to income tax. The IRS uses a formula based on your combined income (also called provisional income) to determine how much of your benefit is taxable. Your provisional income equals your adjusted gross income plus any nontaxable interest plus half of your social security income.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="font-outfit text-sm font-medium text-left px-4 py-3">Filing Status</th>
                        <th className="font-outfit text-sm font-medium text-left px-4 py-3">Combined Income</th>
                        <th className="font-outfit text-sm font-medium text-left px-4 py-3">Taxable Portion</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3 font-medium">Single filer</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Below $25,000</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">0% taxable</td>
                      </tr>
                      <tr className="bg-cloud-blue">
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3 font-medium">Single filer</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">$25,000 – $34,000</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Up to 50% taxable</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3 font-medium">Single filer</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Above $34,000</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Up to 85% taxable</td>
                      </tr>
                      <tr className="bg-cloud-blue">
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3 font-medium">Married filing jointly</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Below $32,000</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">0% taxable</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3 font-medium">Married filing jointly</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">$32,000 – $44,000</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Up to 50% taxable</td>
                      </tr>
                      <tr className="bg-cloud-blue">
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3 font-medium">Married filing jointly</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Above $44,000</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Up to 85% taxable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  Strategic withdrawal sequencing from retirement savings, taxable brokerage accounts, and Roth accounts can help manage your taxable income and keep more of your social security payments intact. For example, drawing from Roth IRAs (which don&apos;t count toward provisional income) in higher-income years can reduce the tax hit on your benefits.
                </p>
              </div>

              {/* Broader Retirement Plan */}
              <div id="broader-plan" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-6">
                  How Social Security Fits into Your Broader Retirement Plan
                </h2>

                <div className="space-y-6">
                  <div className="bg-cloud-blue rounded-lg p-6">
                    <h3 className="font-outfit text-navy text-lg font-medium mb-2">Coordinate with Retirement Plan Distributions</h3>
                    <p className="font-outfit text-dark-gray text-sm leading-relaxed">
                      The timing of 401(k) or IRA withdrawals affects your taxable income, which affects how much of your benefits get taxed. Delaying Social Security while drawing down taxable accounts in your early 60s can create a lower-tax window and preserve more of your lifetime benefits.
                    </p>
                  </div>

                  <div className="bg-cloud-blue rounded-lg p-6">
                    <h3 className="font-outfit text-navy text-lg font-medium mb-2">Factor in Medicare Part B Premiums</h3>
                    <p className="font-outfit text-dark-gray text-sm leading-relaxed">
                      Medicare coverage begins at age 65, and your Part B premiums are income-tested. Higher income can trigger IRMAA surcharges, increasing your Medicare costs. Planning your claiming age alongside Medicare enrollment helps minimize this burden.
                    </p>
                  </div>

                  <div className="bg-cloud-blue rounded-lg p-6">
                    <h3 className="font-outfit text-navy text-lg font-medium mb-2">Consider Your Family History and Health</h3>
                    <p className="font-outfit text-dark-gray text-sm leading-relaxed">
                      Your life expectancy and family history of longevity should influence when you claim. If your family members have historically lived into their 80s and 90s, delaying benefits provides more money over your lifetime and stronger protection against outliving your savings.
                    </p>
                  </div>

                  <div className="bg-cloud-blue rounded-lg p-6">
                    <h3 className="font-outfit text-navy text-lg font-medium mb-2">Account for Dependent Children</h3>
                    <p className="font-outfit text-dark-gray text-sm leading-relaxed">
                      If you have dependent children under age 18 (or up to 19 if still in high school), they may qualify for benefits based on your record when you start receiving benefits. This can influence your claiming timeline, particularly for parents who had children later in life.
                    </p>
                  </div>
                </div>
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
            Investment advisory services offered through PointOak Retirement Advisors, LLC. This guide is for informational purposes only and does not constitute investment advice. PointOak Retirement Advisors, LLC does not provide tax or legal advice.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <CTASection />
      <Footer />
    </>
  );
}
