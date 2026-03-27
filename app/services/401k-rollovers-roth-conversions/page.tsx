import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Rollover and Roth Conversion Planning | PointOak",
  description: "PointOak helps high-net-worth clients evaluate rollover options and model Roth conversion tax effects. Fee-only fiduciary. Schedule a complimentary consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/services/401k-rollovers-roth-conversions/"
  }
};

const highlights = [
  "Fee-only, zero commissions or proprietary products",
  "SEC-registered fiduciary since 2017",
  "Complimentary 30-45 minute initial consultation"
];

const benefitsData = [
  {
    title: "Clarity on Which Move Saves You More",
    description: "A rollover preserves tax-deferred growth. A Roth conversion triggers income taxes on pre-tax money the year you convert. Which move saves more depends on your current tax bracket, projected retirement income, and whether tax-free Roth access outweighs today's bill."
  },
  {
    title: "Protection from Social Security and Medicare Tax Surprises",
    description: "IRS Publication 915 confirms that up to 85% of Social Security benefits become taxable income once combined income exceeds certain thresholds. A poorly sized Roth conversion pushes you past those thresholds and increases Medicare premiums two years later through IRMAA surcharges."
  },
  {
    title: "A Strategy for Paying Taxes on Your Terms",
    description: "Converting your entire balance in one year spikes your tax rate and triggers secondary costs. Partial Roth IRA conversions spread across multiple years let you fill lower brackets strategically, reducing future taxes on those funds. Our approach to retirement planning makes bracket management a multi-year discipline."
  },
  {
    title: "A Wider Conversion Window Before RMDs Begin",
    description: "Under IRS Publication 590-B, required minimum distributions from traditional IRAs begin after age 73. The years between retirement and that deadline are your prime conversion window, when taxable income drops before Social Security and RMDs overlap. Tax-free withdrawals from Roth funds then replace income from tax-deferred retirement accounts."
  },
  {
    title: "Fewer Irreversible Mistakes",
    description: "Roth conversions cannot be undone once the tax year closes. Withdrawn tax-free distributions only deliver their tax advantage if the conversion was sized and timed correctly. PointOak's corporate retirement plan background means your review draws on thousands of participant scenarios before you convert."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Understand",
    description: "We review your retirement accounts, tax situation, and goals to clarify your rollover and conversion options."
  },
  {
    number: 2,
    title: "Design",
    description: "We build a multi-year strategy covering conversion sizing, bracket management, and coordination with your CPA."
  },
  {
    number: 3,
    title: "Implement and Monitor",
    description: "We execute transfers to your new account at the right financial institution and monitor results annually."
  }
];

const whoNeedsData = [
  {
    title: "You Left a Job with an Unmanaged 401(k)",
    description: "Your old 401 k in a former employer's retirement plan sits disconnected from your financial life. Without a rollover strategy, retirement funds risk early withdrawal penalty or misallocation across outdated investment options."
  },
  {
    title: "You Are Within Five Years of Retirement",
    description: "Pre-tax balances are large and the conversion window is shrinking. Required minimum distributions, Social Security timing, and Medicare decisions are converging, and modeling those interactions now prevents costly overlap."
  },
  {
    title: "You Are Frustrated with Conflicted Advice",
    description: "A wirehouse advisor recommended an IRA without addressing Rule of 55 access or institutional pricing from your employer-sponsored retirement plan. Independence matters when advice shapes whether you pay income tax now or later."
  },
  {
    title: "You Received a Large Distribution or Inheritance",
    description: "A sudden liquidity event demands coordinated placement of retirement funds and decisions about which accounts to withdraw funds from first. IRA rollover choices grow complex when matching contributions or catch-up contributions are involved."
  },
  {
    title: "You Want One Advisor Who Sees the Full Picture",
    description: "Multiple accounts with no coordinated strategy creates blind spots. Our senior advisors review every account and tax implication, ensuring rollover contributions and Roth contributions align with your goals."
  }
];

const faqs = [
  {
    question: "How much does 401(k) rollover and Roth conversion planning cost?",
    answer: "PointOak charges a fee-only, asset-based advisory fee with no commissions. The fee varies by account size and complexity, with minimum amounts set at $500,000 in investable assets. Your initial complimentary consultation typically runs 30-45 minutes with no obligation. PointOak does not earn commissions or sell proprietary products, so the fee you pay is the only compensation the firm receives. Come prepared with your most recent account statements and any questions about your rollover or conversion options."
  },
  {
    question: "What is the difference between a 401(k) rollover and a Roth conversion?",
    answer: "A rollover moves money between accounts; a Roth conversion changes the tax treatment. A rollover to a traditional IRA or new employer plan keeps the money tax-deferred. A Roth conversion moves pre-tax funds into a Roth IRA and triggers income tax on the converted amount that year. The two moves serve different goals and carry different tax consequences, which is why PointOak evaluates both options together as part of a coordinated strategy."
  },
  {
    question: "Is rollover and conversion planning a one-time decision or an ongoing strategy?",
    answer: "For most high-net-worth clients, conversion planning spans multiple tax years. An initial rollover may be a single event, but Roth conversion sizing depends on income, tax brackets, and Medicare thresholds that shift year to year. PointOak's senior advisors monitor these variables and adjust the conversion pace at each review so the strategy stays aligned with your changing financial picture."
  },
  {
    question: "What are my options for an old 401(k)?",
    answer: "You can leave it, roll it to a new IRA, move it to a new employer plan, or cash out. Each option carries different tax, access, and cost implications. Leaving money in a former employer's plan may preserve Rule of 55 access and creditor protection under ERISA. Cashing out usually triggers taxes and a potential penalty that permanently reduces the balance."
  },
  {
    question: "When does a Roth conversion make sense?",
    answer: "It often makes sense in lower-income years before required minimum distributions begin. Converting during years when taxable income is temporarily low lets you fill a lower bracket with conversion income. Early retirement, a gap year between jobs, or a year with unusually large deductions can all create windows. The key is modeling the full impact on your taxes, Medicare premiums, and Social Security rather than looking at the current-year bill alone."
  },
  {
    question: "How much tax will I owe on a Roth conversion?",
    answer: "You owe income tax on the pre-tax amount you convert, calculated at your marginal rate. The converted amount is added to your other taxable income for the year, and that total determines your bracket. A large conversion in a high-income year pushes you into a higher bracket and affects Medicare premiums two years later. PointOak models these interactions before recommending a conversion amount for any given year."
  },
  {
    question: "Can a Roth conversion increase my Medicare premiums?",
    answer: "Yes, because Medicare uses a two-year income lookback to set premiums. A conversion that raises your modified adjusted gross income above certain thresholds triggers Income-Related Monthly Adjustment Amounts for Parts B and D. The premium increase applies two years after the conversion year, which means a 2025 conversion affects your 2027 premiums. Planning conversion size around these brackets is a core part of what PointOak evaluates during each annual review."
  },
  {
    question: "Does rolling a Roth 401(k) into a Roth IRA start a new 5-year clock?",
    answer: "It depends on whether you already have a Roth IRA with prior contributions. If you have an existing Roth IRA with Roth IRA contributions predating the rollover, the 5-year clock for qualified distributions runs from that earlier contribution date. If the Roth IRA is new, the clock starts when you open it. This is one reason timing and account structure matter in rollover execution, and why reviewing the full picture before moving funds avoids unintended waiting periods."
  },
  {
    question: "Can I undo a Roth conversion if I change my mind?",
    answer: "No. Roth conversions made since 2018 are permanent and cannot be reversed. The IRS eliminated the recharacterization option for Roth conversions starting January 1, 2018. Once funds move to a Roth IRA and the tax year closes, the conversion stands regardless of market performance or changes in your circumstances. This is why PointOak stress-tests the numbers before a client converts."
  },
  {
    question: "Can a Roth conversion make more of my Social Security taxable?",
    answer: "Yes, because conversion income counts toward provisional income thresholds. Conversion income pushes combined income above the levels where Social Security benefits become partially or substantially taxable. This interaction is one of the secondary effects that most advisory pages overlook entirely. A year-by-year conversion plan accounts for the relationship between conversion amounts and Social Security taxation so you do not inadvertently create a higher overall tax burden."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "401(k) Rollover and Roth Conversion Planning",
  "provider": {
    "@type": "FinancialService",
    "name": "PointOak Retirement Advisors"
  },
  "serviceType": "Retirement Planning",
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
      "name": "401(k) Rollover and Roth Conversion Planning",
      "item": "https://www.pointoak.com/services/401k-rollovers-roth-conversions/"
    }
  ]
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our 401(k) Rollover and Roth Conversion Planning Process",
  "step": processSteps.map((step, idx) => ({
    "@type": "HowToStep",
    "position": idx + 1,
    "name": step.title,
    "text": step.description
  }))
};

export default function RolloversConversionsPage() {
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
          { label: "401(k) Rollover and Roth Conversion Planning" }
        ]}
        title="401(k) Rollover and Roth Conversion Planning"
        subtitle="A 401(k) rollover mistake costs more than one year's taxes: it costs decades of compounding. PointOak Retirement Advisors helps high-net-worth clients evaluate rollover options and model Roth conversion tax effects."
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

      {/* Benefits of 401(k) Rollover and Roth Conversion Planning */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of 401(k) Rollover and Roth Conversion Planning
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

      {/* How 401(k) Rollovers and Roth Conversions Work */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How 401(k) Rollovers and Roth Conversions Work
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              A direct rollover (also called a trustee-to-trustee transfer) moves pre-tax money from one retirement account to another without triggering current taxes. A Roth conversion moves pre-tax funds into a Roth IRA, making the converted amount taxable in the conversion year. The distinction determines whether you owe taxes now or later.
            </p>
            <p>
              Under <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">IRS rollover rules</a>, non-direct eligible rollover distributions face 20% mandatory federal tax withholding from your plan administrator. To transfer funds in full, you must replace the withheld amount within 60 days or the shortfall becomes taxable. Converting money from a pre-tax account to a Roth IRA requires coordination with your tax advisor to manage immediate tax obligations.
            </p>
            <p>
              <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule a complimentary consultation</Link> to review your rollover and Roth conversion options.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs 401(k) Rollover and Roth Conversion Planning */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs 401(k) Rollover and Roth Conversion Planning
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Your best move depends on your situation. These scenarios show where professional modeling matters most.
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
              <strong className="text-navy">Not the right fit?</strong> If your investable assets are below $500,000 or you need tax preparation rather than tax-aware planning, PointOak may not be the right fit. We coordinate with your CPA but do not provide tax advice.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Tax-Deferred Rollover vs. Roth Conversion */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Tax-Deferred Rollover vs. Roth Conversion
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Both paths preserve retirement savings. The right choice depends on your current tax bracket, when you need access, and what other income sources interact with the decision.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Tax-Deferred Rollover</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Roth IRA Conversion</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Tax impact this year</td>
                  <td className="px-4 py-3 text-gray-700">Generally none if structured as a direct transfer</td>
                  <td className="px-4 py-3 text-gray-700">Converted amount becomes taxable income in the conversion year</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Tax in retirement</td>
                  <td className="px-4 py-3 text-gray-700">Withdrawals taxed as ordinary income taxes at your future rate</td>
                  <td className="px-4 py-3 text-gray-700">Qualified withdrawals are tax-free after the 5-year clock</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Required minimum distributions</td>
                  <td className="px-4 py-3 text-gray-700">RMDs begin after age 73 for traditional IRA rollovers</td>
                  <td className="px-4 py-3 text-gray-700">No RMDs during the Roth IRA owner&apos;s lifetime</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Access before 59½</td>
                  <td className="px-4 py-3 text-gray-700">Rule of 55 preserved if kept in employer plan; penalty-free withdrawals under certain conditions</td>
                  <td className="px-4 py-3 text-gray-700">10% penalty on earnings if under 59½ and before 5-year clock</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Medicare and Social Security effect</td>
                  <td className="px-4 py-3 text-gray-700">No immediate income spike from the rollover itself</td>
                  <td className="px-4 py-3 text-gray-700">Conversion income pushes you into higher tax brackets and raises IRMAA premiums</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Partial conversion flexibility</td>
                  <td className="px-4 py-3 text-gray-700">Not applicable; rollover moves the balance as directed</td>
                  <td className="px-4 py-3 text-gray-700">Choose how much to convert each year through partial withdrawal to manage your current bracket</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Cash-out alternative</td>
                  <td className="px-4 py-3 text-gray-700">Cashing out $50,000 before 59½ could leave $29,500 after taxes and early withdrawal penalty (Fidelity)</td>
                  <td className="px-4 py-3 text-gray-700">Same penalty structure applies once funds are converted and the 5-year clock is satisfied</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            A tax-deferred rollover often wins when current-year income is high. When you convert money from a pre-tax account, you pay taxes at ordinary income tax rates on the full amount. PointOak&apos;s retirement income planning models both paths against your tax implications before making a recommendation.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* What To Expect: Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What to Expect: Our Rollover and Conversion Planning Process
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
            Why Choose PointOak for 401(k) Rollover and Roth Conversion Planning
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              The 2025 standard Medicare Part B premium is $185 per month according to <a href="https://www.ssa.gov/blog/en/posts/2025-02-06.html" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">SSA&apos;s 2025 premium schedule</a>, and higher-income retirees pay more. PointOak models these secondary effects before recommending any conversion. Corporate retirement plan work gives the team direct exposure to how plan design, participant behavior, and investment strategy interact.
            </p>
            <p>
              A common hesitation: &quot;I can read this on Fidelity&apos;s site or handle it myself.&quot; Fidelity&apos;s guide explains mechanics. PointOak builds a year-by-year strategy calibrated to your tax brackets, Medicare thresholds, Social Security timing, and coordination with your tax professional. Our fiduciary standard as a fee-only financial professional means no incentive to recommend a rollover that benefits the advisor instead of you.
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
            PointOak Retirement Advisors is a fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. We provide wealth management and retirement plan consulting to clients across the DC metro area and nationwide. SEC-registered investment advisor, fiduciary since inception. Over $1.08 billion in assets under management with 50+ years of collective team experience. Call us at <Link href="/contact" className="text-medium-blue hover:text-navy underline">(703) 595-4444</Link>.
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
              Schedule your complimentary consultation
            </Link> to discuss your 401(k) rollover and Roth conversion options with PointOak.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <CTASection />
      <Footer />
    </main>
  );
}
