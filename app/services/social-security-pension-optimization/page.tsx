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
  title: "Social Security Claiming Strategies & Pension Analysis | PointOak Retirement Advisors",
  description: "Maximize Social Security and pension benefits with PointOak. We model claiming strategies, spousal benefits, and pension vs. lump sum decisions for optimal lifetime income.",
  alternates: {
    canonical: "https://www.pointoak.com/services/social-security-pension-optimization/"
  }
};

const highlights = [
  "SSA maximum benefit at 70: $5,181/month (2026)",
  "Claiming at 62 with FRA 67 permanently reduces a $1,000 PIA to $700",
  "Independent guidance, no proprietary product pressure"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We assess your SSA earnings record, current age, FRA, pension plan documents, and household structure to determine benefit eligibility across all claiming options."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We model claiming scenarios and pension options, calculating break-even ages, survivor-income outcomes, and pension annuity equivalent values against current market rates."
  },
  {
    number: 3,
    title: "Implement",
    description: "We deliver a documented decision record and filing timeline so your strategy is clear and defensible."
  }
];

const faqs = [
  {
    question: "Is Social Security claiming strategy planning worth it?",
    answer: "Yes: deemed filing rules, earnings test thresholds, and survivor-benefit exceptions create complexity that directly changes lifetime retirement income outcomes. The 2026 earnings test has exempt amounts of $24,480 and $65,160, and deemed filing closes most spousal-delay approaches for anyone turning 62 on or after January 2, 2016. PointOak maps these rules to your record rather than applying a generic claiming framework."
  },
  {
    question: "Should I take my pension as a lump sum or monthly pension?",
    answer: "It depends on IRS 417(e) segment rates, whether COLA or subsidies are included, survivor needs, and PBGC exposure. Segment rates for August 2025 were 4.20/5.29/6.08, and rising rates reduce the lump sum amount. The SOA notes lump sums may exclude COLA and subsidies, changing the true value comparison. PointOak runs a comparable-income test before recommending a pension option."
  },
  {
    question: "What happens to my spouse if I delay Social Security to 70?",
    answer: "Your delayed benefit becomes the survivor-income floor: a surviving spouse can receive up to 100% of your benefit at their survivor FRA. Per SSA, survivor payments start at 71.5% and reach 100% at survivor FRA, available as early as age 60. When the higher earner delays to 70, the household survivor-income floor rises substantially, affecting your family's financial stability for the rest of their life."
  },
  {
    question: "What is the maximum Social Security benefit in 2026?",
    answer: "Per SSA, the 2026 maximum monthly benefit is $2,969 at age 62, $4,152 at full retirement age, and $5,181 at age 70. These figures apply to workers who earned at or above the taxable maximum starting at age 22. Most retirees receive less, making the impact of claiming age critical to model against your earnings record, living expenses, and lifestyle goals."
  },
  {
    question: "How do interest rates affect my pension lump sum offer?",
    answer: "When IRS 417(e) segment rates rise, lump sum offers generally decrease because the present value of future pension payments falls. Segment rates for August 2025 were 4.20%, 5.29%, and 6.08%. A rise of 100 basis points can reduce a lump sum offer by tens of thousands of dollars depending on your monthly pension amount, current age, and actuarial assumptions used by your plan."
  },
  {
    question: "Can I claim survivor benefits first and switch to my own retirement benefit later?",
    answer: "Yes: SSA confirms deemed filing does not apply to survivor benefits, preserving the survivor-first strategy for eligible spouses. A surviving spouse can claim survivor income as early as age 60 while their own retirement benefit accumulates delayed retirement credits to 70. Survivor FRA may differ from standard retirement FRA, affecting the benefit percentage at each claiming age and the optimal switching point."
  },
  {
    question: "What is deemed filing and who does it affect?",
    answer: "Deemed filing applies to anyone turning 62 on or after January 2, 2016, and generally requires filing for retirement and spousal benefits at the same time. This rule eliminated most \"file spousal-only, delay your own\" approaches. The exception: survivor benefits remain outside deemed filing, preserving the survivor-first strategy for households where a surviving spouse has their own earnings record and time before age 70."
  },
  {
    question: "What does PBGC guarantee, and what are the limits?",
    answer: "PBGC guarantees certain benefits in PBGC-trusteed single-employer plans, with a 2026 age-65 maximum of $7,789.77/month for a straight-life annuity. The joint-and-50% survivor maximum at age 65 is $7,010.79/month, and guarantees decrease for younger retirees and certain early-retirement subsidies. Workers whose pension benefit exceeds PBGC limits carry uninsured exposure if the company cannot fund the plan."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Social Security Claiming Strategies and Pension Analysis",
  "provider": {
    "@type": "FinancialService",
    "name": "PointOak Retirement Advisors"
  },
  "serviceType": "Social Security and Pension Planning",
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
      "item": "https://www.pointoak.com/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Social Security & Pension",
      "item": "https://www.pointoak.com/services/social-security-pension-optimization/"
    }
  ]
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our Social Security and Pension Analysis Process",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Individuals & Families", href: "/services" },
          { label: "Social Security & Pension" }
        ]}
        title="Social Security Claiming Strategies and Pension Analysis"
        subtitle="The difference between claiming Social Security at 62 versus 70 exceeds $2,200 per month in 2026, per SSA benefit examples. Choosing the wrong pension option permanently reduces your monthly income or strips survivor benefits from your family. PointOak's retirement plan specialists help you assess these decisions with rules-based clarity and documented analysis."
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

      {/* How Social Security Claiming Works */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Social Security Claiming Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              The Social Security Administration calculates your benefit from your earnings record and primary insurance amount (PIA), then adjusts it based on retirement age. For people born in 1943 or later, delayed retirement credits add 8% per year past full retirement age, stopping at age 70. A worker with FRA 67 who claims at 62 receives $700 instead of $1,000, per SSA&apos;s early-retirement table.
            </p>
            <p>
              Deemed filing rules eliminated most &quot;spousal-only while delaying your own&quot; strategies for anyone turning 62 on or after January 2, 2016. Filing for retirement benefits generally triggers filing for spousal benefits at the same time. Survivor benefits are exempt: a surviving spouse can claim survivor income first and let their own retirement benefit grow to 70.
            </p>
            <p>
              Spousal benefits range from 32.5% to 50% of the worker&apos;s PIA depending on claiming age. The 2026 earnings test sets exempt amounts at $24,480 below normal retirement age and $65,160 in the year you reach normal retirement age, with payments withheld at $1 per $2 or $1 per $3 above those thresholds.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* How Pension Analysis Works */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Pension Analysis Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Pension lump sum amounts are calculated using IRS 417(e) minimum present value segment rates and standardized mortality tables. For August 2025, segment rates were 4.20%, 5.29%, and 6.08%: when rates rise, lump sum offers fall because future pension obligations cost less to settle today. Monthly pension options often include cost of living adjustment provisions, early-retirement subsidies, and joint-and-survivor annuity elections that protect a spouse after the primary pensioner dies.
            </p>
            <p>
              The Society of Actuaries notes lump sums may exclude COLA and subsidies entirely, making a dollar-for-dollar comparison misleading. For 2026, the Pension Benefit Guaranty Corporation maximum monthly guarantee for a 65-year-old in a PBGC-trusteed single-employer plan is $7,789.77 for a straight-life annuity and $7,010.79 for a joint-and-50% survivor annuity. Pensions above those PBGC limits carry real exposure if the company cannot fund plan obligations.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Image Break */}
      <AnimateOnScroll variant="fade">
      <section className="bg-white py-4">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/services/social-security-pension.png"
              alt="Couple planning Social Security claiming strategy and pension decisions"
              fill
              className="object-cover object-[center_25%]"
              sizes="(max-width: 1170px) 100vw, 1170px"
            />
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Claiming Options Compared */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Claim at 62 vs. Delay to 70
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border border-[#F3F4F6]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Factor</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Claim at 62</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Delay to 70</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Monthly benefit (FRA 67 example)</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">$2,969 / $700 per $1,000 PIA</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">$5,181 / $1,240 per $1,000 PIA</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Survivor income impact</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Lower base for surviving spouse</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Higher floor for surviving spouse</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Break-even age</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">~80.4 for FRA 67 (T. Rowe Price)</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Favors delay past break-even</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">COLA compounding</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Applied to lower base</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Applied to higher base</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Delaying to 70 wins for higher earners with longevity and a spouse who depends on survivor income. Per SSA, the 2026 maximum monthly benefit is $2,969 at age 62 versus $5,181 at age 70, and each annual cost of living adjustment compounds on that higher base for the rest of retirement. Claiming at 62 makes sense when health is poor, income is urgent, or investment returns from early claims can outpace the delayed retirement credit rate.
          </p>

          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6 mt-12">
            Monthly Pension vs. Lump Sum
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-[#F3F4F6]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Factor</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Monthly Pension Annuity</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Lump Sum Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Lifetime income</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Guaranteed for life</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Depends on investment returns</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Inflation protection</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">May include COLA</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Not automatic</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Survivor protection</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Joint-and-survivor options available</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Inheritable, no guaranteed income</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">PBGC coverage</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Yes, with limits by age</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Not applicable after rollover</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">IRS 417(e) sensitivity</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Not applicable</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Higher rates reduce the offer</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            The monthly pension wins when guaranteed lifetime income and survivor protection outweigh liquidity. The lump sum wins when pension value is weak, estate planning drives the decision, or you can manage investment risk independently.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs This Service */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Who Needs This Service?
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Approaching retirement with a pension lump sum window
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plans often allow the lump sum only during certain periods, and rising IRS segment rates reduce the offer. Timing the decision matters, and waiting can cost real money.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Higher-earning spouse in a two-income household
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your claiming decision determines the household survivor-income floor. The important consideration is not just your own break-even age but what your spouse receives if you die first.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Workers affected by the Social Security Fairness Act
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The Social Security Fairness Act (signed January 5, 2025) eliminates WEP and GPO reductions for workers with non-covered public pensions. If you were previously told your retirement benefits would be reduced, your expected payments may now be higher.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                When this may not be the right fit
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Straightforward single-life Social Security situations with no pension may not need a formal consulting engagement. PointOak adds the most value when household complexity, pension elections, and PBGC exposure are all present.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What to Expect: Our Process
          </h2>

          <div className="relative">
            <div className="absolute left-[19px] top-10 bottom-10 w-px bg-[#C1C5C9] hidden sm:block" />

            <div className="flex flex-col gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-10 h-10 rounded-full bg-medium-blue flex items-center justify-center">
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
        </div>
      </section>
      </AnimateOnScroll>

      {/* Why Choose PointOak */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
                Why Choose PointOak for Social Security and Pension Analysis?
              </h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                PointOak manages over $1 billion in client assets with a team of three partners bringing more than 50 years of collective experience. Our deep background in retirement plan consulting means we work within SSA rules, PBGC limits, and pension plan mechanics every day — experience that translates directly into better Social Security and pension decisions for individual clients. As a fee-only, independent fiduciary firm with no proprietary products, our recommendations are driven solely by your best interest.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mt-4">
                Most clients arrive worried about making an irreversible mistake with their pension option or filing date. We address that directly by mapping your specific retirement benefits, running comparable-income tests, and documenting every rationale so your answers are clear. With fewer than 100 clients per partner, you receive the personalized attention this critical decision deserves.
              </p>
            </div>
            <div className="relative w-full h-[300px] lg:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/images/asset-advisor-04.png"
                alt="PointOak advisors conducting Social Security and pension analysis session"
                fill
                className="object-cover object-[center_25%]"
                sizes="(max-width: 1024px) 100vw, 585px"
              />
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* About PointOak */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            About PointOak Retirement Advisors
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm headquartered in McLean, Virginia, specializing in retirement planning and wealth management for high-net-worth individuals and families. The firm has operated as a full-scope fiduciary since inception, managing over $1 billion in assets with a team of three partners bringing more than 50 years of collective experience. PointOak also serves corporate plan sponsors through its retirement plan consulting practice.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* FAQ Section */}
      <ServiceDetailFAQ faqs={faqs} />

      {/* Disclaimer */}
      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            Investment advisory services offered through PointOak Retirement Advisors, LLC. This site is published for residents of the United States only. Not all of the products and services referenced on this site are available in every state and through every representative or advisor listed. PointOak Retirement Advisors, LLC does not provide tax or legal advice.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
