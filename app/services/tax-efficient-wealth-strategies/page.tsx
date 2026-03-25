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
  title: "Tax-Efficient Investing | PointOak Retirement Advisors",
  description: "Minimize your lifetime tax burden with tax-loss harvesting, Roth conversions, and strategic asset location. Independent fiduciary tax-efficient investing from PointOak.",
  alternates: {
    canonical: "https://www.pointoak.com/services/tax-efficient-wealth-strategies/"
  }
};

const highlights = [
  "TLH alpha ranges from 0.47% to 1.27% annually (Vanguard, 2024)",
  "IRS caps capital loss deductions at $3,000 per year against ordinary income",
  "Every session led by licensed securities advisors",
  "Independent advice with no proprietary products"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We review participant demographics, account types, and the tax considerations most relevant to your retirement plan and plan sponsor goals."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We tailor topics from managing taxes on qualified higher education expenses to charitable giving strategies for higher earners."
  },
  {
    number: 3,
    title: "Implement and Document",
    description: "Licensed advisors deliver sessions and document all activities for your Virtual 401(k) Fiduciary File."
  }
];

const faqs = [
  {
    question: "Is tax-loss harvesting worth it with a small taxable account?",
    answer: "TLH delivers limited benefit on small balances because the IRS caps ordinary-income deductions at $3,000 per year. Vanguard research estimates TLH alpha between 0.47% and 1.27%, but results depend on your tax bracket, gains to offset, and whether you reinvest tax savings. For most participants, fully funding 401(k) and IRA contribution limits first provides more certain tax savings. Consult a personal tax advisor to evaluate your tax situation."
  },
  {
    question: "Direct indexing vs. index ETF: which is more tax-efficient?",
    answer: "Direct indexing can harvest more granular losses, but the benefit decays over time and depends on your account size and ongoing contributions. AQR research shows the total active tax benefit from direct indexing can start large but declines as cost basis decreases. Exchange traded funds offer natural tax efficiency through low portfolio turnover and are often the better fit for smaller taxable accounts. A qualified tax professional can help you assess whether the complexity fits your tax purposes."
  },
  {
    question: "Does tax-loss harvesting work inside a 401(k) or Roth IRA?",
    answer: "No. Tax-loss harvesting only applies to taxable accounts; transactions inside tax-deferred retirement accounts do not generate taxable events. Inside an employer sponsored retirement plan, there are no realized capital gains to offset. The tax benefit in a retirement plan comes from pre-tax or Roth account contributions and contribution limits, not from loss harvesting. This is the most common misconception PointOak corrects in education sessions."
  },
  {
    question: "How do capital gains tax brackets work in 2026?",
    answer: "The 0% long-term capital gains rate applies below $49,450 (single) and $98,900 (married filing jointly) in 2026, per IRS Rev. Proc. 2025-32. Long-term capital gains are taxed at 0%, 15%, or 20% depending on income. Higher earners may also owe the 3.8% NIIT on investment income above MAGI thresholds, in addition to federal taxes and state and local taxes."
  },
  {
    question: "What are the 2026 contribution limits for tax-advantaged accounts?",
    answer: "The 2026 401(k) limit is $24,500, the IRA contribution limit is $7,500 ($8,600 age 50+), and HSA limits are $4,400 (self-only) and $8,750 (family). Funding your employer sponsored retirement plan and health savings accounts before a taxable brokerage account is the first step in managing taxes. HSAs cover qualified medical expenses tax-free and allow tax-deferred growth, making them one of the most efficient vehicles in any retirement savings strategy."
  },
  {
    question: "How do charitable contributions reduce tax liability?",
    answer: "Donating appreciated assets to a donor advised fund avoids capital gains taxes and may support an itemized deduction against adjusted gross income. Cash donations to qualified organizations are generally tax-deductible up to 60% of AGI (IRS Publication 526). Charitable giving with appreciated securities eliminates the capital gains taxes you would owe on a sale while still delivering the deduction. Coordinate your strategy with a personal tax advisor to manage taxes across your full income picture."
  },
  {
    question: "When should I consult a qualified tax professional?",
    answer: "Your retirement plan advisor handles plan design and fiduciary obligations; a qualified tax professional handles personalized tax advice and individual tax implications. PointOak does not offer personalized tax advice on individual returns. For tax law changes, managing taxes on your adjusted gross income, and your specific tax situation, work with a personal tax advisor alongside your retirement plan advisor."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Tax-Efficient Investing Education for Retirement Plan Participants",
  "provider": {
    "@type": "FinancialService",
    "name": "PointOak Retirement Advisors"
  },
  "serviceType": "Tax-Efficient Investing Education",
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
      "name": "Tax-Efficient Investing",
      "item": "https://www.pointoak.com/services/tax-efficient-wealth-strategies/"
    }
  ]
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our Tax-Efficient Investing Education Process",
  "step": processSteps.map((step, idx) => ({
    "@type": "HowToStep",
    "position": idx + 1,
    "name": step.title,
    "text": step.description
  }))
};

export default function TaxEfficientWealthStrategiesPage() {
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
          { label: "Tax-Efficient Investing" }
        ]}
        title="Tax-Efficient Investing Education for Retirement Plan Participants"
        subtitle="Most plan participants apply tax-loss harvesting and other tax-aware strategies to the wrong accounts. Tax-efficient investing means aligning investment decisions with the right account types, understanding IRS thresholds that affect your tax liability, and managing your tax burden before it compounds. PointOak delivers that education."
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

      {/* How Tax-Efficient Investing Works */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Tax-Efficient Investing Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Tax-efficient investing reduces tax drag by coordinating three decisions: asset location by account type, when you realize investment gains, and how you structure charitable giving and deductions. Each choice affects your taxable income, your tax bill, and the after-tax dollars you actually keep.
            </p>
            <p>
              Tax-deferred accounts and tax-advantaged accounts, including your 401(k), Roth IRA, traditional IRA, and health savings accounts, shelter investment income from current federal income tax. The 2026 401(k) elective deferral limit is $24,500, and HSA contribution limits are $4,400 (self-only) and $8,750 (family), per IRS Rev. Proc. 2025-19. Funding these accounts before turning to taxable accounts is the foundation of any sound financial strategy.
            </p>
            <p>
              In taxable accounts, tax-loss harvesting lets you offset capital gains with realized losses. When capital losses exceed capital gains generated, IRS rules allow a deduction against ordinary income up to $3,000 per tax year, with carryforward to future tax years (IRS Topic 409). Fixed income securities, municipal bonds, and exchange traded funds each carry different tax implications that change how much of your investment income you keep.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Image Break */}
      <AnimateOnScroll variant="fade">
      <section className="bg-cloud-blue py-4">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/asset-advisor-03.png"
              alt="Financial planning and tax-efficient investing analysis"
              fill
              className="object-cover object-[center_25%]"
              sizes="(max-width: 1170px) 100vw, 1170px"
            />
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Benefits of Tax-Efficient Investing Education */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Tax-Efficient Investing Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Reduced Tax Drag on Investment Returns
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Active portfolio management decisions made without a tax-aware framework create unnecessary capital gains taxes. S&amp;P Dow Jones Indices&apos; SPIVA After-Tax Scorecard (Year-End 2024) found that the median active large-cap core fund trailed the S&amp;P 500 by up to 4.4% annually after taxes, a direct measure of how much generalized tax-adjusted returns can erode.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Fewer Costly Mistakes
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The most common errors are applying tax-loss harvesting inside a retirement plan (it does not work there) and ignoring the net investment income tax. NIIT is 3.8% and applies above a MAGI threshold of $200,000 (single) and $250,000 (married filing jointly), per IRS Topic 559. Education prevents these tax surprises before they reach a federal income tax return.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Smarter Charitable Giving Decisions
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Donating appreciated assets to a donor advised fund can reduce your adjusted gross income and offset capital gains without triggering a taxable sale. IRS Publication 526 notes that charitable contributions may be tax-deductible up to 60% of AGI. Most participants with investment gains never consider this lever.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Virtual 401(k) Fiduciary File Documentation
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Every education session, participant consultation, and program delivery is documented in your Virtual 401(k) Fiduciary File — a living audit trail that demonstrates procedural prudence and protects your organization from liability.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Tax-Efficient Investing Education Programs */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Our Tax-Efficient Investing Education Programs
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Customized Group Education Sessions
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                In-person sessions led by licensed securities advisors covering tax considerations, account types, and retirement savings priorities. Best for interactive learning and immediate Q&amp;A.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Online Webinars
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Virtual education covering tax-aware investments, contribution limits, and Roth account vs. traditional IRA decisions. Best for multi-location or distributed sponsors.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                1-on-1 Consultation Sessions
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Individual reviews of each participant&apos;s tax situation, retirement accounts, and investment decisions. Best for higher tax bracket earners with complex tax implications.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Monthly Financial Newsletters
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Ongoing education on tax law changes, contribution limit updates, and tax-deductible savings opportunities including qualified medical expenses and HSA coordination.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Tax-Loss Harvesting Comparison Table */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Tax-Loss Harvesting vs. No Tax-Loss Harvesting
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Both approaches have merit. The decision depends on where your assets live and whether you have gains to offset.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-[#F3F4F6]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Factor</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">With TLH</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Without TLH</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">After-tax alpha potential</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">0.47%–1.27% annually (Vanguard)</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Baseline return only</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Capital loss deduction</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Up to $3,000/year against ordinary income</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">None</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Complexity</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Wash sale rules apply</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">None</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Account eligibility</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Taxable accounts only</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">All account types</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Long-term benefit</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Decays without new contributions</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Stable</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            TLH makes sense when you have meaningful taxable equity exposure, recurring contributions, and a current tax rate higher than your expected future rate. If your assets are mostly inside retirement accounts or your taxable balance is small, funding contribution limits first delivers more certain tax savings with less complexity.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs Tax-Efficient Investing Education */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Who Needs Tax-Efficient Investing Education?
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Participants Near or Above the NIIT Threshold
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If your MAGI is approaching $200,000 (single) or $250,000 (married filing jointly), long-term capital gains and investment income may face the 3.8% NIIT in addition to federal taxes, state and local taxes, and the federal alternative minimum tax. Education at this income level directly reduces the taxes you pay.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Participants Making Roth vs. Pre-Tax Decisions
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The Roth IRA vs. traditional IRA decision depends on your current tax bracket vs. your expected future tax rate. Education helps participants weigh pre-tax vs. after-tax dollars, traditional IRA contributions, and the long-term tax implications of each path.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Plan Sponsors Who Need Documented Education
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                ERISA-compliant sponsors benefit from documented education programs that demonstrate a prudent fiduciary process. PointOak designs sessions to support your fiduciary file with the same discipline applied across all our retirement plan consulting services.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                When This Might Not Be the Right Fit
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If your participants have no taxable accounts outside their employer sponsored retirement plan, advanced TLH education is not the priority. We help you identify which tax considerations deliver the most value for your workforce first.
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
            What To Expect: Our Process
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
                Why Choose PointOak for Tax-Efficient Investing Education?
              </h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                PointOak manages over $1 billion in client assets with a team of three partners bringing more than 50 years of collective experience. Our deep background in retirement plan consulting gives us real-world insight into tax-efficient strategies that most wealth advisors lack. We understand how tax-loss harvesting, Roth conversions, and strategic asset location work together because we&apos;ve applied these principles across institutional-scale portfolios.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mt-4">
                As a fee-only, independent fiduciary firm with no proprietary products, we focus solely on what works best for you. With fewer than 100 clients per partner, we deliver personalized attention and coordinate tax strategies across your entire financial picture — not just one isolated account.
              </p>
            </div>
            <div className="relative w-full h-[300px] lg:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/images/asset-data-02.png"
                alt="PointOak licensed advisors leading tax-efficient investing education session"
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
            Investment advisory services offered through PointOak Retirement Advisors, LLC. This site is published for U.S. residents only. Services may vary by state and advisor. PointOak does not provide tax or legal advice. Investing involves risk, including possible loss of principal.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
