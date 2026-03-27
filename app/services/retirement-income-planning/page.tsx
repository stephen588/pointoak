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
  title: "Retirement Income Planning | PointOak Retirement Advisors",
  description: "Build a sustainable retirement income strategy with PointOak. We help high-net-worth individuals plan withdrawals, optimize Social Security, and protect their lifestyle through retirement.",
  alternates: {
    canonical: "https://www.pointoak.com/services/retirement-income-planning/"
  }
};

const highlights = [
  "Average Social Security payment: $2,071/month in January 2026",
  "Education covering income gap, RMDs, and withdrawal strategies",
  "Independent fiduciary consulting, zero parent company conflicts",
  "Group workshops, virtual benefits fairs, and 1-on-1 sessions"
];

const processSteps = [
  {
    number: 1,
    title: "Consultation",
    description: "We review your plan demographics, retirement readiness data, and education goals."
  },
  {
    number: 2,
    title: "Data Gathering",
    description: "We analyze contribution rates, income gap indicators, and participation patterns."
  },
  {
    number: 3,
    title: "Strategy Development",
    description: "We build an education calendar combining workshops, campaigns, and 1-on-1 sessions."
  },
  {
    number: 4,
    title: "Implementation",
    description: "Licensed advisors deliver sessions covering income sources, investing basics, and withdrawal strategy."
  },
  {
    number: 5,
    title: "Monitoring",
    description: "We track engagement and refresh content as Social Security COLA, RMD rules, and inflation data evolve."
  }
];

const faqs = [
  {
    question: "What is the average Social Security payment for retired workers in 2026?",
    answer: "The estimated average monthly Social Security retirement benefit for January 2026 is $2,071, per the SSA. This reflects the 2026 COLA of 2.8%, which increased average retirement income by roughly $56 per month. For most retirees, the average Social Security payment covers only a portion of essential expenses, making it a starting point for income gap analysis rather than a complete answer."
  },
  {
    question: "What is the median household income for retirees age 65 and older?",
    answer: "Median household income for householders age 65 and older was $59,648 in 2024, per the US Census Bureau ACS brief. Average annual expenditures were $78,535 in 2024, per BLS data, meaning many retired households face a meaningful income gap if they rely primarily on social security income and modest retirement savings. PointOak helps employees manage this gap before they retire."
  },
  {
    question: "When should participants start taking Social Security?",
    answer: "Delaying Social Security benefits until age 70 can increase monthly payments by up to 28%, per Kiplinger, but requires bridge income from retirement savings or other assets. For participants with adequate retirement accounts, delaying is often the highest-return financial planning decision available. PointOak's 1-on-1 sessions help employees estimate both scenarios and reach a sound answer using their actual data."
  },
  {
    question: "Does retirement income planning cover annuities?",
    answer: "Yes. Annuities from an insurance company can serve as a guaranteed income floor, and PointOak's programs address when and how to evaluate them. PointOak evaluates annuity options independently, without any affiliated insurance company relationship influencing recommendations. Guidance reflects participant retirement income needs and cost tradeoffs, not a product interest."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Retirement Income Planning Education",
  "provider": {
    "@type": "FinancialService",
    "name": "PointOak Retirement Advisors"
  },
  "serviceType": "Retirement Income Planning",
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
      "name": "Retirement Income Planning",
      "item": "https://www.pointoak.com/services/retirement-income-planning/"
    }
  ]
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our Retirement Income Planning Process",
  "step": processSteps.map((step, idx) => ({
    "@type": "HowToStep",
    "position": idx + 1,
    "name": step.title,
    "text": step.description
  }))
};

export default function RetirementIncomePlanningPage() {
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
          { label: "Retirement Income Planning" }
        ]}
        title="Retirement Income Planning Education & Consulting for Plan Participants"
        subtitle="Most retirees discover their retirement income falls short of essential expenses only after they stop working. PointOak delivers retirement income planning education so your employees begin closing the income gap well before their retirement date."
      />

      {/* Highlights Bar */}
      <section className="bg-cloud-blue py-8 md:py-10">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* How Retirement Income Planning Works */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Retirement Income Planning Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Retirement income planning maps what participants will spend against what their income sources will actually pay. It starts by classifying essential expenses separately from discretionary spending, then tracking every income source by start date: social security income, retirement accounts, pensions, and any annuities from an insurance company. A withdrawal strategy is then selected that accounts for inflation, sequence-of-returns risk, and required minimum distributions beginning at age 73.
            </p>
            <p>
              Multiple withdrawal frameworks exist, each with different aspects that affect retirement savings longevity. The bucket strategy holds three to five years of living expenses in cash, staged into fixed income and equities for growth, per BlackRock. Delaying Social Security benefits until age 70 can increase monthly payments by up to 28%, per Kiplinger, making the claiming date one of the highest-impact decisions in any income plan.
            </p>
            <p>
              PointOak translates this complexity into structured participant education through custom workshops, 1-on-1 consultation sessions, and virtual benefits fairs. Licensed advisors walk employees through retirement income calculator tools, income gap estimates, and withdrawal strategy selection, all within fiduciary-safe boundaries that protect plan sponsors from liability.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Image Break — Consultation */}
      <AnimateOnScroll variant="fade">
      <section className="bg-cloud-blue py-4">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="relative w-full rounded-lg overflow-hidden">
            <Image
              src="/images/services/retirement-income-planning.png"
              alt="A friendly financial advisor gestures gently while explaining a retirement income concept to a relaxed couple"
              width={2936}
              height={1638}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Benefits of Retirement Income Planning Education */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Retirement Income Planning Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Close the Income Gap Early
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                More than half of aged households receive 50% or more of their income from Social Security alone, per SSA data, and social security income covers only about 31% of total income for most retirees. PointOak&apos;s education programs help employees estimate the gap, access insights on their retirement savings runway, and build a financial planning approach that helps them make ends meet throughout retirement.
              </p>
            </div>

            {/* Benefit 2 */}
            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Prepare Participants for Social Security Decisions
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The government confirmed a 2.8% Social Security COLA for 2026, increasing average retirement benefits by roughly $56 per month. PointOak&apos;s workshops give participants the tools to track payments, understand how social security income interacts with withdrawal sequencing, and decide when to begin claiming based on data and sound judgment.
              </p>
            </div>

            {/* Benefit 3 */}
            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Build Plans That Reflect Real Spending
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Households in their 70s spend approximately $5,165 per month, per an Investopedia summary of BLS data, and most retirees find that lifestyle costs do not fall as sharply as expected. PointOak workshops help participants model essential expenses and discretionary spending separately so retirement savings projections reflect real cost assumptions, not outdated tips and rules of thumb.
              </p>
            </div>

            {/* Benefit 4 */}
            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Maintain Current Plans as Rules Evolve
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                RMDs begin at age 73, Social Security adjusts annually, and inflation continuously erodes purchasing power. PointOak&apos;s ongoing monitoring keeps education current so employees maintain an accurate income plan as costs, payments, and benefits rules change over time.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Retirement Income Planning Services */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Our Retirement Income Planning Services
          </h2>
          <div className="space-y-8">
            {/* Service 1 */}
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                1-on-1 Consultation Sessions
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Licensed advisors meet individually with employees to review retirement accounts, social security income timelines, and income gap estimates. This format is intended for participants within five to seven years of retirement who need focused attention on withdrawal strategy and claiming decisions, including soft retirement transitions from full-time work.
              </p>
            </div>

            {/* Service 2 */}
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Custom Educational Workshops
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Group sessions cover essential expenses, income source mapping, withdrawal strategy frameworks, and Social Security basics. Workshops give plan sponsors a repeatable education model built with fidelity to fiduciary standards, giving clients a scalable way to track participant engagement and improve plan-level retirement readiness.
              </p>
            </div>

            {/* Service 3 */}
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Tailored Communication Campaigns
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Multi-touch campaigns deliver retirement income planning content to specific employee segments, driving access to workshops and 1-on-1 sessions. They are designed for employees who would not otherwise save time or pay attention to generic benefits messaging.
              </p>
            </div>

            {/* Service 4 */}
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Virtual Benefits Fairs
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Digital events give distributed workforces the ability to visit live sessions and access tools and data on retirement savings, investing, and income planning, regardless of location. Participants from large cities and smaller markets, including McLean, Virginia, Ann Arbor, Michigan, Highlands Ranch, Colorado, South Bend, Indiana, and Thousand Oaks, California, can attend without traveling.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Bucket Strategy vs. the 4% Rule - Table */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Bucket Strategy vs. the 4% Rule
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Both approaches help participants manage retirement income risk. Which one fits depends on spending flexibility, retirement account wealth, and comfort with market volatility.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-[#F3F4F6]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Factor</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Bucket Strategy</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">4% Rule</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Core structure</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Cash reserve (3-5 yrs) + staged risk tiers</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Fixed annual percentage from portfolio</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Spending flexibility</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Requires periodic cash refill</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Benefits from willingness to cut spending</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">RMD interaction</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Cash tier absorbs RMD distributions</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">RMDs add taxable income; sequencing matters</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Social Security timing</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Cash bridges income while delaying claiming</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Assumes SS already counted in the plan</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Best for</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Participants managing sequence risk</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Participants with simple, flexible portfolios</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            The bucket strategy is better suited to retired workers who need a clear plan to manage risk during a market downturn. The 4% rule suits participants who can adjust lifestyle spending if returns fall short. A Florida retiree with limited liquidity faces the same sequence risk as participants in large cities elsewhere, and both benefit from a structured income plan over a generic rule.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs Retirement Income Planning Education? */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Who Needs Retirement Income Planning Education?
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Participants 5-7 Years From Retirement
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Employees in this window face imminent Social Security claiming decisions, RMD planning, and withdrawal strategy selection. Without structured guidance, most default to the first available option, often leaving retirement income on the table. Key financial planning decisions begin to get counted before participants realize it.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Employees With Limited Retirement Savings
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                About half of aged households receive at least 50% of their income from Social Security, and about one-quarter receive at least 90%, per SSA policy data. For participants with limited wealth in retirement accounts, education shifts to income gap management, realistic essential expense modeling, and tips on how to manage money and maintain retirement benefits as intended.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                When This Program Is Not the Right Fit
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Participants who need individualized tax advice, estate planning, or investment management beyond an educational scope should work with a personal financial advisor. PointOak&apos;s programs are intended to deliver education within fiduciary-safe boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* What To Expect: Our Process */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Process
          </h2>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[19px] top-10 bottom-10 w-px bg-[#C1C5C9] hidden sm:block" />

            <div className="flex flex-col gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 z-10">
                    <div className="w-10 h-10 rounded-full bg-medium-blue flex items-center justify-center">
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
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
                Why Choose PointOak for Retirement Income Planning?
              </h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                PointOak manages over $1 billion in client assets with a team of three partners bringing more than 50 years of collective experience in retirement planning and wealth management. Our dual expertise — deep roots in institutional retirement plan consulting combined with personalized wealth advisory — gives us real-world insight into retirement scenarios that most advisors lack. With fewer than 100 clients per partner, we deliver the personalized attention your retirement income strategy deserves. As a fee-only fiduciary firm with no proprietary products, we are legally obligated to act in your best interest at every step.
              </p>
            </div>
            <div className="relative w-full h-[300px] lg:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/images/asset-couples-01.png"
                alt="A happy couple in their 60s sitting at a kitchen table reviewing financial documents together"
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
