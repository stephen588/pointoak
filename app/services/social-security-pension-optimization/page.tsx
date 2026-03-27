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
  title: "Social Security & Pension Optimization | PointOak",
  description: "PointOak analyzes Social Security timing, pension elections, and survivor benefits as one integrated plan. Fee-only fiduciary. Schedule a complimentary consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/social-security-pension-optimization/"
  }
};

const highlights = [
  "8% annual benefit increase per year of delay past full retirement age",
  "Fee-only fiduciary advisors since 2017",
  "Complimentary 30-45 minute consultation"
];

const benefitsData = [
  {
    title: "Stronger Retirement Income Through Coordinated Timing",
    description: "The average monthly Social Security retirement benefit is $2,071 as of January 2026, according to the SSA. Whether that benefit amount covers essential expenses depends on when you claim, how your pension pays out, and which accounts fill the gap. Coordinating all three sources builds financial stability that isolated decisions miss."
  },
  {
    title: "Survivor Protection That Matches Your Household Needs",
    description: "Survivor benefits reflect the delayed retirement credits the higher-earning spouse earned. Your claiming age affects what the surviving spouse receives for life. The pension election form you choose, single-life or joint-and-survivor, shapes the same outcome from the pension side, and modeling both together protects the household."
  },
  {
    title: "Informed Pension Elections Based on Plan-Specific Terms",
    description: "Many retirees lack adequate long-term analysis when choosing between guaranteed monthly pension payments and a lump sum, according to CFPB pension payout guidance. Most pension elections are irreversible. Monthly pension payments may lose purchasing power over decades without a cost-of-living adjustment, while a lump sum shifts risk to you."
  },
  {
    title: "Tax-Aware Withdrawal Sequencing Across All Accounts",
    description: "Your pension election determines how much taxable income arrives each month. Monthly payments from a pension shift which accounts you should draw from and when. Sequencing withdrawals across tax-deferred, tax-free, and taxable accounts around that fixed income manages your bracket over time."
  },
  {
    title: "Reduced Risk of Irreversible Claiming Mistakes",
    description: "Anyone who turned 62 after January 1, 2016 generally cannot file for spousal benefits alone while letting their own benefits grow. That outdated strategy still circulates online. A fee-only fiduciary since inception models current rules to prevent irreversible mistakes that cost you monthly benefits for life."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Understand",
    description: "Bring your Social Security statements, pension packet, and recent tax returns to your consultation. We identify the factors shaping your timeline and goals."
  },
  {
    number: 2,
    title: "Design",
    description: "You receive a household strategy integrating your claiming age, pension election, and tax-aware withdrawal sequencing."
  },
  {
    number: 3,
    title: "Implement and Monitor",
    description: "Your financial planning stays current through ongoing check-ins as rates, tax law, or circumstances change."
  }
];

const whoNeedsData = [
  {
    title: "You Have Both Social Security and a Pension to Coordinate",
    description: "Your employer offered pension options and your Social Security claiming age is approaching. These decisions interact through survivor income and your tax situation. Modeling them together changes the outcome."
  },
  {
    title: "You Received a Pension Buyout or Lump-Sum Offer",
    description: "A lump-sum offer arrived with an election deadline. This decision is typically irreversible and depends on rate assumptions, personal circumstances, and longevity. Understanding whether the offer makes sense requires comparing it against guaranteed monthly payments."
  },
  {
    title: "You and Your Spouse Have Different Ages or Earning Histories",
    description: "Married couples with an age gap or one higher income earner face survivor protection that shifts depending on which spouse claims first and when. Household modeling reveals which combination protects both family members."
  },
  {
    title: "You Are Rolling Over a 401(k) While Weighing Social Security Timing",
    description: "A job change triggered a rollover decision alongside your claiming choice. Multiple accounts and your current age affect withdrawal sequencing and tax brackets. The rollover and claiming strategy makes sense to model as one integrated plan."
  },
  {
    title: "You Are Unsure Whether Your Advisor Modeled Household Scenarios",
    description: "You received a claiming recommendation without household modeling of survivor scenarios or pension interaction. If your financial goals were not part of the analysis, a second opinion either confirms or improves the strategy."
  }
];

const faqs = [
  {
    question: "How much does Social Security and pension optimization cost with an advisor?",
    answer: "PointOak charges a fee-only, asset-based advisory fee with no commissions or hidden costs. The fee varies by account size and complexity, and it is transparent from the start. PointOak requires a minimum of $500,000 in investable assets. The initial consultation is complimentary, lasting 30-45 minutes with no obligation. Schedule a complimentary consultation to discuss your situation before any commitment."
  },
  {
    question: "Should I take a lump sum pension or monthly payments?",
    answer: "The right choice depends on your longevity assumptions, survivor needs, investment discipline, and plan terms. A lump sum provides flexibility and legacy potential but requires disciplined investing to replace guaranteed income. Monthly payments guarantee income for life but lock you into the plan's terms. Most elections are irreversible, so the analysis should account for your spouse's needs, plan solvency, and your comfort managing risk."
  },
  {
    question: "How often should I revisit my Social Security and pension strategy?",
    answer: "Review your retirement income strategy at least annually and after any major financial or life change. Rate assumptions, your tax situation, and personal circumstances shift over time. Each change can alter the math behind your original decision. PointOak's Implement and Monitor phase includes regular check-ins to confirm your strategy still aligns with current conditions."
  },
  {
    question: "Is it better to take Social Security at 62, full retirement age, or 70?",
    answer: "The best claiming age depends on your health, family history, household income needs, and whether you need to protect a spouse's survivor benefit. Claiming at age 62 provides income sooner but permanently reduces your monthly benefits. Delaying to 70 earns the maximum benefit through accumulated credits. Current cost-of-living adjustments apply at any claiming age. SSA's retirement calculators show estimates but cannot integrate pension or household tax variables."
  },
  {
    question: "How do survivor benefits affect Social Security claiming strategy?",
    answer: "Survivor benefits can reflect the deceased worker's delayed retirement credits, which makes the higher earner's claiming age especially important. A surviving spouse can claim the deceased worker's full benefit, including delayed credits. Survivor pension types work differently from spousal benefits: a spousal benefit is capped at 50% of the worker's FRA amount, while a survivor benefit can include credits earned by delaying. Household modeling captures both scenarios."
  },
  {
    question: "Can I take spousal benefits and delay my own Social Security?",
    answer: "For most people who turned 62 after January 1, 2016, filing for spousal benefits also triggers your own retirement benefit. The restricted application strategy allowed collecting a spousal pension benefit while letting your own grow. The Social Security Administration eliminated that option for anyone born after January 1, 1954. PointOak can model your specific Social Security payments to determine whether any filing combination still improves household income."
  },
  {
    question: "Should I keep my pension or take a lump sum payout?",
    answer: "That depends on your plan's specific terms, your health, your spouse's income needs, and current interest rate assumptions. Keeping the pension preserves guaranteed monthly income without requiring investment skill. Taking a lump sum pension payout puts that money under your control but means you bear the investment and longevity risk. Plan solvency and PBGC protection are factors, and most elections are irreversible."
  },
  {
    question: "What should I bring to a Social Security and pension analysis meeting?",
    answer: "Bring your most recent Social Security statement, pension election packet, last two tax returns, and account balances for all retirement accounts. Include your spouse's Social Security statement and any pension details they have. Note any employer stock or RSU positions. The more complete the picture, the more precise the analysis. PointOak's complimentary consultation is 30-45 minutes with no obligation. Schedule a complimentary consultation to begin."
  },
  {
    question: "Does delaying Social Security increase survivor benefits?",
    answer: "Yes, if the higher-earning spouse delays, the survivor benefit reflects those delayed retirement credits. When the primary pensioner dies after delaying past full retirement age, their accumulated benefit transfers to the surviving spouse. The survivor can receive Social Security payments at that higher amount for the rest of their life. This is one of the strongest reasons for the higher earner to delay."
  },
  {
    question: "How are lump-sum pension payouts calculated?",
    answer: "Pension lump sums are calculated using IRS-published interest rate assumptions that convert your future monthly payments into a present value. Higher rates produce smaller lump sums; lower rates produce larger ones. Your age and the plan's specific formula also affect the offer. Comparing offers across at least two years of rate data helps determine whether the current figure represents good value."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Social Security Claiming Strategies and Pension Optimization",
  "provider": {
    "@type": "FinancialService",
    "name": "PointOak Retirement Advisors"
  },
  "serviceType": "Social Security and Pension Optimization",
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
      "name": "Social Security & Pension Optimization",
      "item": "https://www.pointoak.com/social-security-pension-optimization/"
    }
  ]
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our Social Security and Pension Optimization Process",
  "step": processSteps.map((step, idx) => ({
    "@type": "HowToStep",
    "position": idx + 1,
    "name": step.title,
    "text": step.description
  }))
};

export default function SocialSecurityPensionOptimizationPage() {
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
          { label: "Social Security & Pension Optimization" }
        ]}
        title="Social Security Claiming Strategies and Pension Optimization"
        subtitle="Social Security claiming strategies and pension elections affect each other through survivor income, tax brackets, and withdrawal sequencing. Most retirement planning treats them as separate decisions. PointOak Retirement Advisors runs household-level pension analysis to coordinate both into one integrated retirement income plan."
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

      {/* Benefits of Social Security and Pension Optimization */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Social Security and Pension Optimization
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

      {/* How Social Security and Pension Optimization Works */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Social Security and Pension Optimization Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Household-level modeling runs Social Security scenarios at multiple ages for both spouses, then layers in pension options: pension annuity or lump sum pension payout. Each combination is stress-tested against tax projections and portfolio drawdown. SSA&apos;s calculator compares benefits at 62, FRA, and 70 but cannot integrate your pension, your spouse&apos;s claiming age, or your tax bracket.
            </p>
            <p>
              The PBGC&apos;s 2026 maximum guarantee is $7,789.77 per month for straight-life and $7,010.79 for joint-and-50%-survivor at age 65, per <a href="https://www.pbgc.gov/workers-retirees/learn/guaranteed-benefits/monthly-maximum" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">PBGC guarantee tables</a>. The Pension Benefit Guaranty Corporation protects benefits up to these caps if your plan terminates. Lump sum payment calculations use interest rates to convert future payments into present value. Modeling that against potential investment returns requires a retirement plan consulting background.
            </p>
            <p>
              <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule your consultation</Link> to see how your Social Security timing and pension election interact.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Image Break */}
      {/* Who Needs Social Security and Pension Optimization */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/services/social-security-pension.png"
                alt="Financial advisor consulting with clients about Social Security and pension optimization"
                width={2936}
                height={1638}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
                Who Needs Social Security and Pension Optimization
              </h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Not every retiree needs integrated Social Security and pension analysis. These five situations signal that you do.
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
              This analysis may not be necessary if you are single with no pension, have already made irrevocable elections, or have straightforward finances where coordinated modeling adds no value. If you recognized yourself in any scenario above, <Link href="/contact" className="text-medium-blue hover:text-navy underline">schedule a complimentary consultation</Link> to make an informed decision about whether integrated analysis fits your situation.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Social Security Timing and Pension Election Comparisons */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Social Security Timing and Pension Election Comparisons
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Your Social Security benefits change depending on whether you claim at full retirement age or delay. The gap in retirement age produces different income, survivor, and break-even outcomes.
          </p>

          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Claim at Full Retirement Age</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Delay to Age 70</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Monthly income</td>
                  <td className="px-4 py-3 text-gray-700">Full benefit based on earnings record</td>
                  <td className="px-4 py-3 text-gray-700">Increased by delayed retirement credits each year past FRA</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Spousal benefit</td>
                  <td className="px-4 py-3 text-gray-700">Spousal max: 50% of worker&apos;s FRA benefit, not age-70 amount</td>
                  <td className="px-4 py-3 text-gray-700">Delay does not increase the spousal benefit cap</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Survivor benefit</td>
                  <td className="px-4 py-3 text-gray-700">Surviving spouse receives your FRA benefit</td>
                  <td className="px-4 py-3 text-gray-700">Surviving spouse receives higher amount with delayed credits</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Break-even</td>
                  <td className="px-4 py-3 text-gray-700">Immediate advantage if life expectancy is shorter</td>
                  <td className="px-4 py-3 text-gray-700">Typically requires living into early 80s to recoup</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Cash flow gap</td>
                  <td className="px-4 py-3 text-gray-700">No gap; Social Security income starts at FRA</td>
                  <td className="px-4 py-3 text-gray-700">Must cover gap years from savings or pension income</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Claiming at FRA fits when you need immediate income, expect shorter longevity, or have no dependent survivor to protect. Delay wins with average or longer life expectancy, a spouse relying on your survivor benefit, and bridge assets to cover the gap.
          </p>

          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Pension vs lump sum is the second critical election. Plan terms, health, and investment discipline determine which is right.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Lump Sum Payout</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Monthly Pension Annuity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Income certainty</td>
                  <td className="px-4 py-3 text-gray-700">No guaranteed income; depends on investments</td>
                  <td className="px-4 py-3 text-gray-700">Guaranteed monthly income for life</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Survivor protection</td>
                  <td className="px-4 py-3 text-gray-700">Remaining assets pass to heirs</td>
                  <td className="px-4 py-3 text-gray-700">Depends on annuity form: single-life vs. joint</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Rate sensitivity</td>
                  <td className="px-4 py-3 text-gray-700">Lump sum value varies with IRS segment rates</td>
                  <td className="px-4 py-3 text-gray-700">Monthly amount set by plan formula</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Inflation risk</td>
                  <td className="px-4 py-3 text-gray-700">Can target growth; purchasing power not guaranteed</td>
                  <td className="px-4 py-3 text-gray-700">Fixed payments lose value without COLA</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Flexibility</td>
                  <td className="px-4 py-3 text-gray-700">Full control; lump sum distributions on your schedule</td>
                  <td className="px-4 py-3 text-gray-700">Locked into plan&apos;s payment schedule</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-base leading-relaxed mt-8">
            The lump sum payout fits with investment discipline, legacy goals, or solvency concerns. The annuity wins when longevity protection or spousal income continuity is the priority. Independent, fee-only advisors model both without a product incentive favoring either option.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* What To Expect: Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What to Expect: Our Social Security and Pension Optimization Process
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
            Why Choose PointOak for Social Security and Pension Optimization
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Free online tools show your Social Security at different ages but stop there. Household-level analysis integrates pension elections, survivor scenarios, tax brackets, and other factors into one model. Our retirement plan consulting background draws on working with thousands of participants and pension structures, building fluency most wealth advisors lack.
            </p>
            <p>
              The CFPB found many retirees receive payments without adequate long-term analysis for pension elections. Our fee-only structure eliminates conflicts, including annuity sales incentives, so recommendations reflect benefits based on your plan&apos;s terms. <Link href="/about" className="text-medium-blue hover:text-navy underline">Darsh and his team</Link> build and explain every model directly.
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
            PointOak Retirement Advisors is a fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. We serve high-net-worth individuals and corporate plan sponsors as an SEC-registered investment advisor. Our team brings over 50 years of collective experience and manages over $1.08 billion in assets under management. Darsh Makim&apos;s practice dates to 2005. <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule a complimentary consultation</Link>.
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
              Book a complimentary consultation
            </Link> to get a personalized Social Security and pension analysis for your household.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <CTASection />
      <Footer />
    </main>
  );
}
