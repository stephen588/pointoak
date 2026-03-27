import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Employer Match Explained | PointOak",
  description: "How your 401(k) employer match works, what a strong match looks like, and how to capture every dollar. PointOak can help. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/plan-design/employer-match/"
  }
};

const highlights = [
  "Fee-only fiduciary since inception",
  "Independent, open-architecture advice",
  "Complimentary consultation, no obligation"
];

const processSteps = [
  {
    number: 1,
    title: "Understand",
    description: "You share your goals and financial picture with our senior advisors in a complimentary consultation with no obligation."
  },
  {
    number: 2,
    title: "Design",
    description: "You receive a customized strategy integrating asset allocation, retirement planning, and tax-aware considerations for your situation."
  },
  {
    number: 3,
    title: "Implement and Monitor",
    description: "Your financial advisor implements the plan with ongoing monitoring, check-ins, and adjustments as your life changes."
  }
];

const faqs = [
  {
    question: "How much do I need to contribute to get the full employer match?",
    answer: "The deferral percentage required depends entirely on your plan's specific match formula. Most 401(k) plans require you to contribute a stated percentage of your salary before the employer puts money in. Common formulas match a fixed percentage of pay up to a threshold, but the only definitive source is your plan document. PointOak can review your Summary Plan Description and confirm the exact deferral rate needed to claim your full employer match so you are not leaving money behind."
  },
  {
    question: "What does a 6% 401(k) match actually mean?",
    answer: "A \"6% match\" can mean different dollar amounts depending on whether your employer matches dollar for dollar or at a partial rate. If your employer contributes 100% on the first 6% of pay, you receive 6% of your salary as a company match. If the formula is 50% on the first 6%, you receive 3%. The difference over a career is substantial. Your plan document is the only place that specifies which formula applies, so check before assuming the higher figure."
  },
  {
    question: "What happens to my employer match if I leave my job?",
    answer: "Vesting schedules determine how much of the employer match you keep when you separate from the company. Some 401(k) plans vest immediately, meaning every matched dollar is yours from day one. Others use cliff vesting or graded vesting, where ownership increases over time. The IRS permits all three structures. If you are considering a job change, PointOak helps you evaluate your unvested balance and factor it into your rollover decision."
  },
  {
    question: "Is a 3% employer match good?",
    answer: "A 3% match falls below the industry average, though context matters. The average employer match rate sits above 3%, so your 401(k) plan offers less than the typical benchmark. Whether that matters depends on your match formula type, vesting terms, and other retirement benefits your employer offers. A 3% immediate-vesting partial match from a company with profit sharing contributions may deliver more total value than a higher match with a six-year cliff."
  },
  {
    question: "Does a Roth 401(k) still get the employer match?",
    answer: "Choosing Roth 401(k) deferrals does not reduce your match eligibility. The IRS allows employers to calculate match based on your Roth 401(k) contributions just as they would with traditional pre-tax deferrals. Employer contributions always go into a separate pre-tax account, so you will owe income tax on the match portion when you withdraw it. See the IRS designated Roth account guidance for details. PointOak can model whether Roth or traditional deferrals produce a better after-tax outcome for your situation."
  },
  {
    question: "Why does my employer match seem lower than I expected?",
    answer: "Several plan mechanics can create a gap between the match you expected and the match you received. The most common causes are the IRS compensation cap for high earners, payroll-period matching with no reconciliation that stops matching once you hit your deferral limit mid-year, and misreading the formula. A partial match of 50% on 6% yields 3%, not 6%. Check your Summary Plan Description for the compensation definition, match formula, and whether a reconciliation provision exists."
  },
  {
    question: "Does maxing out my 401(k) early in the year hurt my employer match?",
    answer: "In payroll-period plans without reconciliation, front-loading can cost you match dollars. Once your year-to-date deferrals hit the annual limit, your contributions stop and so does the employer match for remaining pay periods. Plans with a reconciliation provision correct this at year end. Plans without one do not. The comparison section earlier on this page explains how to identify which type your 401(k) plan uses and pace your deferrals."
  },
  {
    question: "Where do I find my employer match rules?",
    answer: "Your Summary Plan Description is the authoritative document for every match rule in your plan. The IRS generally requires employers to provide the SPD within 90 days of your becoming a participant. Look for four sections: match formula, vesting schedule, compensation definition, and any reconciliation or profit sharing policy. If you cannot locate your SPD, request a copy from HR. PointOak reviews these documents to confirm you are reading the terms correctly."
  },
  {
    question: "Can my employer match my student loan payments instead of my 401(k) contributions?",
    answer: "SECURE 2.0 allows employers to treat qualifying student loan payments as eligible for matching contributions, but very few plans have adopted this feature. The provision applies to plan years beginning after December 31, 2023, but adoption remains extremely low as most employers evaluate administrative requirements. If your employer offers this option, the match on student loan payments follows the same formula and vesting rules as a traditional 401(k) employer match. Check your plan documents to see whether your plan has added this provision."
  },
  {
    question: "Does the employer match count toward the IRS 401(k) contribution limit?",
    answer: "Employer match dollars do not count against your personal deferral limit. Your elective deferrals are subject to one cap, and total combined contributions from all sources face a separate, higher annual additions limit. The employer contributes match dollars on top of what you defer, not instead of it. Companies that retain talent through generous matching programs structure their 401(k) plans to encourage saving, not discourage it."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Employer Match Guidance",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Employer Match Strategy",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function EmployerMatchPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Plan Design", href: "/corporate-retirement-plans/plan-design" },
          { label: "Employer Match Design" }
        ]}
        title="401(k) Employer Match: How It Works and How to Capture Every Dollar"
        subtitle="Millions of workers lose retirement savings by misreading their 401(k) employer match formula or vesting rules. Vanguard reported average employer contributions at 4.6% of pay in 2024, with a median of 4.0%. PointOak Retirement Advisors helps you claim every matching contribution your 401(k) plan offers and build long-term financial security."
      />

      {/* Highlights Bar */}
      <section className="bg-cloud-blue py-8 md:py-10">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                <p className="text-text-gray font-outfit text-sm md:text-base leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Understanding Your 401(k) Employer Match
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Retirement Growth Without Earning More</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A dollar-for-dollar match on your own contributions doubles each deferral&apos;s impact without requiring extra income. Compounding interest then multiplies that company match over decades inside your retirement account, building long-term financial security from money you never had to earn.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">A Clear Benchmark for Your Plan&apos;s Match Quality</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Vanguard found the most common formula in 2024 was 50 cents per dollar on the first 6% of pay, used by 13% of 401(k) plans. Knowing where your full company match ranks against that benchmark helps you evaluate whether your retirement plan deserves a larger share of your investment strategy.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Tax-Advantaged Compounding on Employer Dollars</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Employer matching contributions grow tax-deferred inside your retirement account, compounding alongside your own deferrals without triggering annual tax bills. That growth continues until you take distributions in retirement. The result is more retirement income generated from money your 401(k) employer contributed on your behalf.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Smarter Contribution Timing</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Front-loading deferrals in 401(k) plans without year-end reconciliation means hitting your limit early and forfeiting 401(k) match dollars in remaining pay periods. Spacing contributions across each payroll period through deliberate financial planning prevents that gap and protects your financial future.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Confidence During Job Changes</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your vesting schedule determines how much of an employer&apos;s match you keep when you leave. Checking your company&apos;s vesting schedules before resigning can prevent forfeiting thousands. If you are weighing a job change, <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">schedule a consultation</a> to evaluate your unvested balance and rollover options.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* How It Works */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How 401(k) Employer Matching Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Your 401(k) employer calculates match dollars each payroll period based on that check&apos;s salary deferrals, not once a year. The IRS sets the 2026 elective deferral limit at $24,500, which caps how much an employee contributes from their own pay. You must defer at least a certain amount each period to trigger employer matching contributions under your plan&apos;s match formulas.
            </p>
            <p>
              Employer match dollars do not count against your $24,500 contribution limits. The IRS caps total annual additions from all sources at $72,000 for 2026, excluding catch-up contributions. High earners whose annual salary exceeds the IRS compensation cap may see their effective match reduced because the formula applies only to eligible compensation.
            </p>
          </div>
          <div className="mt-8 bg-navy text-white rounded-lg p-6 md:p-8">
            <p className="font-outfit text-base leading-relaxed">
              <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-warm-gold hover:underline font-semibold">Schedule your consultation</a> to get clarity on your 401(k) employer match and contribution limits.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Should Review */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Should Review Their 401(k) Employer Match
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Not everyone needs to rethink their match strategy. Here is how to know.
          </p>
          <div className="space-y-8">
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Starting a New Job With a 401(k)</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your new employer offers an employer-sponsored retirement plan with an unfamiliar match formula. Setting your deferral rate correctly from your first paycheck means capturing match dollars immediately rather than playing catch-up later.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Not Sure You&apos;re Contributing Enough</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                You enrolled in your retirement savings plan years ago at a round number. Most employers disclose the full match threshold in their benefits guide, but few workers revisit it. One check tells you whether your rate captures every dollar.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Approaching Retirement With Complex Benefits</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                You are coordinating a 401(k) with Social Security timing, a pension, or catch-up contributions. Pre-retirees with employer-sponsored retirement plan benefits across multiple sources need a contribution strategy that accounts for all of them.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Changing Jobs and Evaluating a Rollover</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Unvested match dollars disappear if your vesting schedule has not matured when you leave. Weighing your current plan&apos;s remaining match value against a new employer&apos;s formula and deciding how to roll over your own money requires professional guidance.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">High Earner Hitting Compensation Limits</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your pay exceeds the IRS compensation cap, reducing your effective 401(k) match below what the formula suggests. A Roth 401(k) or after-tax money strategy could change the math, but only if modeled against your retirement savings goals.
              </p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">When PointOak May Not Be the Right Fit</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If you already work with a <a href="https://www.pointoak.com/about/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">fee-only fiduciary</a> who reviews your 401(k) annually and coordinates it with your broader financial plan, you are likely well-covered. PointOak requires $500,000 in investable assets.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Comparison Table */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Payroll-Period Matching vs. Annual Reconciliation
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Both payroll-period and reconciliation plans calculate match dollars differently, and your contribution strategy should reflect which rules apply. Your summary plan description specifies the method.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Payroll-Period Matching</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Annual Reconciliation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">How match is calculated</td>
                  <td className="px-4 py-3 text-gray-700">Per-paycheck based on that period&apos;s deferral</td>
                  <td className="px-4 py-3 text-gray-700">Year-end reconciliation against total annual deferrals</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Risk of missing match dollars</td>
                  <td className="px-4 py-3 text-gray-700">High if you front-load or pause contributions</td>
                  <td className="px-4 py-3 text-gray-700">Low because shortfalls are corrected at year end</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Vesting rules</td>
                  <td className="px-4 py-3 text-gray-700">44.1% used immediate vesting in 2024 (PSCA); rest vest over a set vesting period</td>
                  <td className="px-4 py-3 text-gray-700">Same vesting schedules apply; check whether you are fully vested before changing jobs</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Best for which saver</td>
                  <td className="px-4 py-3 text-gray-700">Steady contributor with even deferrals across every pay period</td>
                  <td className="px-4 py-3 text-gray-700">Variable-income earner or aggressive saver who may front-load</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Where to verify your plan&apos;s rules</td>
                  <td className="px-4 py-3 text-gray-700">Match formula section of your plan&apos;s SPD or your employer&apos;s plan documents</td>
                  <td className="px-4 py-3 text-gray-700">HR benefits team can confirm whether a reconciliation provision exists</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm italic mt-6">
            Sources: IRS plan disclosure guidance; PSCA 68th Annual 401(k) Survey 2025.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Reconciliation protects workers who front-load or earn variable income, while payroll-period plans reward steady deferrals across every check. PSCA reported 1.9% of plans matched student loan payments in 2024, a sign that matching funds and plan&apos;s rules keep growing more complex. Read the <a href="https://www.irs.gov/retirement-plans/plan-disclosure-documents-understanding-your-employers-retirement-plan" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">IRS plan disclosure guidance</a> to locate your basic match formula.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What to Expect: Our Retirement Planning Process
          </h2>
          <div className="relative">
            <div className="absolute left-[19px] top-10 bottom-10 w-px bg-[#C1C5C9] hidden sm:block" />
            <div className="flex flex-col gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-10 h-10 rounded-full bg-medium-blue flex items-center justify-center">
                      <span className="font-outfit font-semibold text-white text-lg leading-none">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-text-gray font-outfit text-base leading-relaxed">{step.description}</p>
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
            Why Choose PointOak for 401(k) Guidance
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              &quot;I just need the formula.&quot; That reaction is common, but a formula does not reveal whether your 401(k) plan has a reconciliation provision, how your employer&apos;s plan documents define eligible compensation, or what happens to unvested match dollars when you change jobs. PointOak&apos;s team has reviewed match formulas, vesting schedules, and plan designs from the plan sponsor side since 2005.
            </p>
            <p>
              We are a fee-only fiduciary with no commissions and no proprietary products. Our <a href="https://www.pointoak.com/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">wealth management services</a> coordinate your Roth account and 401(k) with your broader financial picture, including tax-aware strategies built with your CPA. <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Schedule a complimentary consultation</a> or call (703) 595-4444.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* About */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            About PointOak Retirement Advisors
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            PointOak Retirement Advisors is a fee-only fiduciary wealth advisory firm founded in 2017 and headquartered in McLean, Virginia, serving high-net-worth individuals and corporate plan sponsors nationwide as an SEC-registered investment advisor. Our team brings over 50 years of collective experience managing over $1.08 billion in assets, led by founder Darsh Makim, CRPC, who has worked with plan sponsors and participants since 2005. <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Schedule your consultation</a>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Book a consultation</a> with PointOak to confirm every employer match dollar is reaching your retirement account.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
