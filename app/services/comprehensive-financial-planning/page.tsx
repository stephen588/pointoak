import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Comprehensive Financial Planning | PointOak Retirement Advisors",
  description: "PointOak coordinates retirement, tax, estate, and investment decisions into one plan. Fee-only fiduciary since 2017. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/comprehensive-financial-planning/"
  }
};

const highlights = [
  "Fee-only fiduciary since 2017",
  "Senior advisor from first meeting",
  "No commissions, no proprietary products"
];

const benefitsData = [
  {
    title: "Fewer Gaps in Your Financial Preparedness",
    description: "Coordinated planning keeps estate documents, emergency reserves, and retirement projections current and aligned. Households working with a qualified planner complete wills, maintain adequate savings, and update beneficiary designations at higher rates than those managing finances independently. Gaps close because one advisor owns the full picture."
  },
  {
    title: "Lower Tax Impact Across Retirement",
    description: "Tax-aware withdrawal sequencing, asset location, and multi-year bracket management reduce total taxes across a retirement spanning decades. A withdrawal that looks fine in isolation can cost thousands when it conflicts with your Roth conversion timeline or estate taxes. Budgeting for these interactions maximizes what you keep."
  },
  {
    title: "One Point of Contact for Every Financial Decision",
    description: "According to Cerulli Associates research, 82% of affluent investors prefer a single financial services provider. An integrated planning approach replaces the coordination burden of managing a CPA, estate attorney, and investment account separately. One advisor holds the full context, which means faster decisions and fewer gaps."
  },
  {
    title: "Clarity on Whether You Can Retire When You Want",
    description: "Dynamic spending models and guardrail frameworks define exactly how much you can safely spend and when you can afford to spend more. Income projections across Social Security, portfolio distributions, and pensions replace guesswork with a specific number. That clarity changes how you think about your savings and your timeline."
  },
  {
    title: "A Legacy Plan That Reflects Your Intentions",
    description: "Estate planning coordination ensures your investment strategy, beneficiary designations, and legal documents point in the same direction. Without a coordinated approach to planning, households often discover mismatches between what their will says and what their accounts actually do. Closing that gap protects your legacy and your family's financial well being."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Schedule a Complimentary Consultation",
    description: "Schedule a complimentary consultation to explore your goals, concerns, and financial priorities. No cost, no obligation."
  },
  {
    number: 2,
    title: "Understand Your Full Financial Picture",
    description: "Share your accounts, income sources, objectives, and concerns so both sides align before any recommendations."
  },
  {
    number: 3,
    title: "Design Your Coordinated Strategy",
    description: "We implement a customized plan integrating retirement income, tax-aware strategies, investments, and estate coordination, with each recommendation flexible and specific to your situation."
  },
  {
    number: 4,
    title: "Implement and Monitor Over Time",
    description: "Ongoing check-ins and semi-annual reviews keep your strategy focused and aligned as life and goals evolve."
  }
];

const whoNeedsData = [
  {
    title: "Approaching Retirement With Complex Decisions",
    description: "You are within five years of retirement, facing income, tax, and Social Security claiming decisions that interact. Northwestern Mutual's 2025 Planning and Progress Study found 69% of Americans say financial uncertainty has caused them depression or anxiety. A coordinated plan replaces that uncertainty with a defined strategy."
  },
  {
    title: "After a Major Liquidity Event",
    description: "A business sale, large inheritance, or significant stock vesting demands coordinated tax, investment, and estate decisions in a compressed timeframe. Handling each separately risks money left on the table and potential risks that compound quickly."
  },
  {
    title: "Frustrated With Transactional Advice",
    description: "You pay advisory fees but receive portfolio updates without tax coordination, retirement projections, or estate alignment. Nobody connects your account performance to the life you are trying to fund."
  },
  {
    title: "Managing Multiple Professionals With No Coordinator",
    description: "Your CPA, attorney, and investment advisor each handle their piece, but nobody owns the full financial picture. Our senior advisors serve as that central point of contact."
  },
  {
    title: "Considering a 401(k) Rollover or Roth Conversion",
    description: "Leaving a job or consolidating retirement accounts means working through tax implications, future income needs, and employer benefit coordination. One rollover decision can reshape your tax situation for decades."
  }
];

const faqs = [
  {
    question: "How much does comprehensive financial planning cost?",
    answer: "Fee-only advisors charge asset-based fees with no commissions or hidden costs. PointOak uses an asset-based fee structure that varies by account size and complexity, with a $500,000 minimum in investable assets. Fee-only means compensation comes solely from you, eliminating the incentive to recommend products that pay a commission. The initial consultation is complimentary, typically lasting 30 to 45 minutes with no obligation. Your advisor explains how fees work and what services are included so you can evaluate the relationship before any commitment. Schedule a complimentary consultation to discuss your situation."
  },
  {
    question: "How is comprehensive financial planning different from wealth management?",
    answer: "Comprehensive planning coordinates retirement, tax, estate, and investment decisions rather than managing a portfolio alone. Many advised relationships remain transactional, delivering portfolio updates without connecting performance to tax strategy or retirement income. PointOak integrates investment management and multi-domain planning under one team, so your portfolio strategy and income projections draw from the same data and the same advisor."
  },
  {
    question: "Is financial planning a one-time event or an ongoing relationship?",
    answer: "A real financial plan requires ongoing monitoring because your life and the markets change. PointOak follows a semi-annual review cadence with additional meetings as needed. Plans adjust for retirement timing changes, tax law shifts, estate updates, and market conditions. A plan never revisited becomes outdated within months, so ongoing engagement ensures your income projections and withdrawal sequencing stay current."
  },
  {
    question: "What is comprehensive financial planning?",
    answer: "It is the coordination of retirement income, tax strategy, estate planning, and investment management into one decision framework. The scope includes retirement income modeling, tax-aware withdrawal sequencing, estate coordination, Social Security optimization, and investment allocation, where each component informs the others. A Social Security claiming decision affects taxable income, which affects Roth conversion timing, which affects your estate value. Single-service advice misses these dependencies entirely."
  },
  {
    question: "What should a comprehensive financial plan include?",
    answer: "A complete plan covers retirement income, tax strategy, estate coordination, risk management, and investment allocation. PointOak's framework includes retirement income planning, investment management, tax-efficient strategies, 401(k) rollover and Roth conversion guidance, Social Security optimization, and estate coordination. Each element connects through shared objectives and projections, and the plan accounts for workplace benefits including employer retirement programs and equity compensation."
  },
  {
    question: "Are you a fiduciary, and what does that mean for me?",
    answer: "PointOak has operated as a fiduciary since the firm was founded in 2017. A fiduciary is legally obligated to act in your best interest, not simply recommend 'suitable' products. PointOak is an SEC-registered, fee-only investment advisor with no commissions or proprietary products influencing recommendations, which you can verify through the firm's SEC investment adviser registration. The suitability standard used by many wirehouses only requires that a product fit your general profile."
  },
  {
    question: "How do I know if an advisor is actually holistic or just selling investments?",
    answer: "Ask whether the advisor coordinates tax, estate, and retirement income decisions or only manages a portfolio. Many advised relationships remain transactional despite carrying a 'comprehensive' label, so verify the advisor's SEC registration, confirm fee-only compensation, and request a planning agenda for the first year. Check FINRA BrokerCheck for background disclosures. If conversations focus on fund selection without mentioning tax brackets or withdrawal sequencing, the relationship is investment-only."
  },
  {
    question: "What should I ask before rolling over a 401(k)?",
    answer: "Ask about tax implications, investment options, fee differences, and how the rollover fits your broader plan. PointOak's corporate retirement plan background means the team has advised thousands of participants on rollover decisions. Ask any advisor about the tax impact of timing, how investment options and fees compare to your current plan, and whether the rollover coordinates with your retirement income projections and Roth conversion timeline."
  },
  {
    question: "Is holistic financial planning worth it?",
    answer: "Households with qualified planning show stronger financial preparedness across every measure studied. Research shows comprehensively planned households report higher confidence, stronger reserves, and greater estate readiness. Value increases with complexity: multiple income sources, retirement proximity, and cross-account tax decisions all benefit from coordination. For households with straightforward finances, a full planning relationship may exceed the incremental benefit."
  },
  {
    question: "When should I hire a financial planner before retirement?",
    answer: "Five years before your target retirement date gives enough time to optimize tax, income, and withdrawal decisions. Compressing major decisions into a short window increases stress and limits your options. Roth conversions produce better tax outcomes spread over multiple years, and Social Security claiming analysis requires multi-year income projections. Starting five years out gives your advisor runway to sequence decisions across tax years and build progress toward your income target."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Comprehensive Financial Planning",
  "provider": {
    "@type": "FinancialService",
    "name": "PointOak Retirement Advisors"
  },
  "serviceType": "Financial Planning",
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
      "name": "Comprehensive Financial Planning",
      "item": "https://www.pointoak.com/comprehensive-financial-planning/"
    }
  ]
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our Financial Planning Process",
  "step": processSteps.map((step, idx) => ({
    "@type": "HowToStep",
    "position": idx + 1,
    "name": step.title,
    "text": step.description
  }))
};

export default function ComprehensiveFinancialPlanningPage() {
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
          { label: "Comprehensive Financial Planning" }
        ]}
        title="Comprehensive Financial Planning Built Around Your Goals"
        subtitle="Tax, retirement, and estate decisions interact, but most households manage them in separate silos. CFP Board's 2026 Financial Planning Longitudinal Study found 94% of households with qualified comprehensive planning report confidence in achieving their financial goals, compared with 81% of unadvised households. PointOak Retirement Advisors builds one plan connecting every dimension of your wealth."
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

      {/* Benefits of Comprehensive Financial Planning */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Comprehensive Financial Planning
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

      {/* How Comprehensive Financial Planning Works */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Comprehensive Financial Planning Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              A comprehensive plan treats retirement income modeling, multi-year tax projections, estate document alignment, and investment allocation as connected variables inside a single strategic plan. Monte Carlo analysis stress-tests your portfolio against thousands of market scenarios, creating data that defines safe spending levels rather than static assumptions.
            </p>
            <p>
              The dependencies matter. A withdrawal decision shifts your tax bracket, which changes your Roth conversion window, which alters your estate value. Strategies that account for these interactions require both technical skill and ongoing attention to your circumstances.
            </p>
            <p>
              <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule your complimentary consultation</Link> to discuss how coordinated planning fits your financial picture.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs Comprehensive Financial Planning */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs Comprehensive Financial Planning
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Coordinated planning is not for everyone. These scenarios signal when it becomes essential.
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
              <strong className="text-navy">When Comprehensive Financial Planning Might Not Be the Right Fit:</strong> Households with straightforward finances, a single income source, and no estate complexity may not need this level of coordination. A standalone investment account or target-date fund may serve those situations well.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Comprehensive Financial Planning vs. Investment-Only Advice */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Comprehensive Financial Planning vs. Investment-Only Advice
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Many advised relationships carry a &quot;comprehensive&quot; label but deliver only portfolio management. J.D. Power&apos;s 2024 investor satisfaction research found 41% of advised client experiences remained transactional rather than comprehensive.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Comprehensive Financial Planning</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Investment-Only Advice</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Scope of advice</td>
                  <td className="px-4 py-3 text-gray-700">Retirement, tax, estate, and investments coordinated as one plan</td>
                  <td className="px-4 py-3 text-gray-700">Portfolio allocation and rebalancing only</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Tax coordination</td>
                  <td className="px-4 py-3 text-gray-700">Sequenced withdrawals across tax-deferred, tax-free, and taxable accounts</td>
                  <td className="px-4 py-3 text-gray-700">Withdrawals from whichever account is convenient</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Estate and legacy planning</td>
                  <td className="px-4 py-3 text-gray-700">Beneficiary designations, documents, and investment strategy aligned</td>
                  <td className="px-4 py-3 text-gray-700">Not addressed or referred out separately</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Retirement income strategy</td>
                  <td className="px-4 py-3 text-gray-700">Dynamic spending models with income projections across all sources</td>
                  <td className="px-4 py-3 text-gray-700">Standard withdrawal rate applied to portfolio balance</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Implementation accountability</td>
                  <td className="px-4 py-3 text-gray-700">One advisor owns the full plan and every action step</td>
                  <td className="px-4 py-3 text-gray-700">Trades executed without broader financial context</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Ongoing monitoring</td>
                  <td className="px-4 py-3 text-gray-700">Semi-annual reviews adjusting for tax law, life changes, and markets</td>
                  <td className="px-4 py-3 text-gray-700">Quarterly portfolio statements with periodic rebalancing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-sm leading-relaxed mt-6 italic">
            Sources: J.D. Power 2024 U.S. Full-Service Investor Satisfaction Study; CFP Board 2026
          </p>

          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Comprehensive planning is the stronger choice when tax, retirement income, and estate decisions interact. Financial advisors who offer advice across these services create support that compounds over time. Investment-only advice serves households with low complexity and no need for cross-domain coordination. PointOak&apos;s wealth management services integrate both investing and planning under one team.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* What To Expect: Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Financial Planning Process
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
            Why Choose PointOak for Comprehensive Financial Planning
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              CFP Board&apos;s 2026 study found 83% of households with qualified comprehensive planning maintain emergency reserves covering three months of income, compared with 53% of unadvised households. PointOak&apos;s planning process produces these outcomes because retirement income modeling, tax-aware withdrawal sequencing, and estate coordination are handled by one team with the expertise and resources to achieve them.
            </p>
            <p>
              The most common hesitation is that &quot;comprehensive&quot; means nothing. PointOak&apos;s fee-only model removes commissions from recommendations, open-architecture selection eliminates proprietary fund restrictions, and <Link href="/about" className="text-medium-blue hover:text-navy underline">senior advisors</Link> bring expertise shaped by advising thousands of corporate retirement plan participants on the same tax and income decisions that drive private wealth planning.
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
            PointOak Retirement Advisors is a fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia, serving clients across the DC metro area and nationwide as an SEC-registered investment advisor. Our team brings 50+ years of collective experience and manages over $1.08 billion in assets, led by Darsh Makim, CRPC, with senior advisors involved in every client relationship. <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule a complimentary consultation</Link>.
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
            Your complimentary consultation starts with your questions. <Link href="/contact" className="text-medium-blue hover:text-navy underline font-semibold">Schedule a time that works for you</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <CTASection />
      <Footer />
    </main>
  );
}
