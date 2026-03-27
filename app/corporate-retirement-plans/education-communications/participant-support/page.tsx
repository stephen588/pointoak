import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Participant Advice | PointOak Retirement Advisors",
  description: "Independent, fee-only 401(k) participant advice for rollover decisions, retirement income, and tax-aware withdrawals. Schedule a complimentary consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/education-communications/participant-support/"
  }
};

const highlights = [
  "Fee-only fiduciary since 2017",
  "Advising 401(k) participants since 2005",
  "SEC-registered advisor with no commissions"
];

const processSteps = [
  {
    number: 1,
    title: "Understand",
    description: "You share your 401(k) details and financial picture to establish clear goals. No cost, no obligation."
  },
  {
    number: 2,
    title: "Design",
    description: "We assist you with a plan integrating your 401(k) with retirement income, tax, and withdrawal decisions."
  },
  {
    number: 3,
    title: "Implement and Monitor",
    description: "Your strategy goes into action with ongoing support as your life and goals change."
  }
];

const faqs = [
  {
    question: "Is paying for 401(k) advice worth it if I'm already in a target-date fund?",
    answer: "It depends on the complexity of your situation beyond allocation. Target-date funds handle allocation but skip savings adequacy, tax-aware withdrawals, and rollover analysis. PointOak charges a transparent, asset-based fee with no commissions, and your complimentary consultation costs nothing. When retirement income, tax, or rollover decisions are involved, independent advice with fee benchmarking addresses gaps a default fund cannot."
  },
  {
    question: "Are managed accounts worth it in a 401(k)?",
    answer: "Managed accounts improve allocation inside your plan but do not address rollover, tax, or income decisions. Most participants have access to managed account options, yet adoption remains low. If your primary concern is allocation within your current plan, a managed account may work. If you face retirement timing, rollover, or multi-account decisions, the scope of a managed account falls short of what independent participant advice provides."
  },
  {
    question: "How do I know if I need 401(k) advice?",
    answer: "Common signs include approaching retirement, changing jobs, or uncertainty about whether your savings are on track. Confidence in withdrawal and tax decisions is where most participants report the largest gaps. If you're within ten years of retirement, carrying a significant balance without a drawdown strategy, or unsure whether your current allocation fits your goals, those are signals that assistance would add value. PointOak's initial conversation is complimentary, so you can assess the fit before any commitment."
  },
  {
    question: "Should I roll my 401(k) into an IRA or leave it in my plan?",
    answer: "A rollover is not automatically better, so compare fees, options, and services before deciding. The Department of Labor requires rollover advice to include a comparison of your existing plan against the proposed alternative. That means reviewing expense ratios, fund selection, withdrawal flexibility, and any services you'd gain or lose. PointOak evaluates both sides of the decision so you can make a confident choice based on your actual numbers."
  },
  {
    question: "What questions should I ask a 401(k) advisor before taking advice?",
    answer: "Ask about fiduciary status, compensation, conflicts of interest, and whether they reviewed your current plan first. The Department of Labor recommends verifying how an advisor is paid, whether they receive commissions or revenue-sharing, and whether they compared your plan's options before recommending changes. A fiduciary advisor must act in your interest and disclose these details upfront. PointOak provides this information at the start of every engagement."
  },
  {
    question: "Should I trust the advisor connected to my 401(k) provider?",
    answer: "Provider-connected advisors may have conflicts that limit the scope and independence of their guidance. An advisor affiliated with your plan's recordkeeper may be restricted to that provider's products or plan-level allocation only. Ask whether they operate as a fiduciary, how they're compensated, and whether their guidance extends to rollover analysis, tax coordination, and retirement income planning. If the answers are limited, an independent fiduciary advisor can offer broader coverage."
  },
  {
    question: "Can a financial advisor help with retirement income planning from a 401(k)?",
    answer: "Yes, and retirement income is where the largest gap exists between plan tools and actual participant advice. Turning a 401(k) balance into sustainable income involves withdrawal sequencing, tax bracket management, Social Security coordination, and required minimum distributions. Most in-plan tools do not cover this scope. PointOak coordinates your 401(k) withdrawals with other accounts and income sources to help you maintain your money throughout retirement."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Participant Advice",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "401(k) Participant Advisory",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function ParticipantSupportPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Education & Communications", href: "/corporate-retirement-plans/education-communications" },
          { label: "Participant Support" }
        ]}
        title="401(k) Participant Advice: Independent Guidance for Every Stage"
        subtitle="Most 401(k) participants make rollover, allocation, and withdrawal decisions without independent guidance. Cerulli and PSCA's 2025 research found 63% of active 401(k) participants do not have a financial advisor. PointOak Retirement Advisors provides fee-only, fiduciary 401(k) participant advice for the decisions that shape your retirement plan."
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
            Benefits of 401(k) Participant Advice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Know Whether You&apos;re Actually on Track</h3>
              <p className="text-gray-600 leading-relaxed">
                The most common question participants bring to an advisor is whether they&apos;ve saved enough to retire. Plan tools assess allocation but skip retirement readiness. Participant advice measures your retirement savings against your specific retirement goals, accounting for income needs, time horizon, and expected expenses.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Protect Your Balance from Hidden Fee Drag</h3>
              <p className="text-gray-600 leading-relaxed">
                A 1% fee difference can reduce your 401(k) balance by 28% over 35 years, according to the <a href="https://www.dol.gov/node/63354" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Department of Labor fee analysis</a>. That cost compounds silently across decades. Participant advice from a <Link href="/about" className="text-medium-blue hover:underline">fee-only fiduciary advisor</Link> reviews what you pay and whether it&apos;s justified before any rollover decision.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Get Withdrawal and Tax Guidance Your Plan Provider Skips</h3>
              <p className="text-gray-600 leading-relaxed">
                Fewer than 30% of active participants feel confident making withdrawal and tax decisions without an advisor, according to Cerulli and PSCA 2025. Plan providers rarely cover withdrawal sequencing, tax bracket management, or required minimum distributions. Participant advice addresses this gap with retirement income strategies around your financial picture.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Evaluate Rollover Decisions Before You Commit</h3>
              <p className="text-gray-600 leading-relaxed">
                The Department of Labor requires rollover advice to compare your current plan&apos;s fees, investment options, and services against the alternative before recommending a change. Many advisors skip this comparison. Fiduciary participant advice starts with the analysis, not the recommendation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Coordinate Your 401(k) with the Rest of Your Financial Picture</h3>
              <p className="text-gray-600 leading-relaxed">
                Your 401(k) doesn&apos;t exist in isolation. Participant advice integrates asset allocation, risk decisions, and investment selections with other accounts, taxes, Social Security, and estate planning. Treating each account separately leads to duplicated investments and missed tax strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* How It Works */}
      <AnimateOnScroll>
      <section className="bg-[#F5F3EF] py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How 401(k) Participant Advice Works
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-6">
            Participant advice evaluates your full 401(k) picture: whether contributions and allocation match your retirement goals, whether plan fees are competitive, how to determine if a rollover makes sense, and how to sequence withdrawals. A <Link href="/fiduciary-support" className="text-medium-blue hover:underline">fiduciary support</Link> standard means every recommendation must serve your interest and reflect actual investment results.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-6">
            According to the <a href="https://www.psca.org/news/psca-news/2024/12/half-of-retirement-savers-have-no-draw-down-strategy/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">PSCA participant survey</a>, 46% of participants said their 401(k) provider offered minimal or no resources on withdrawal strategies as they approached retirement. Independent advice covers what managed account services and in-plan investing tools miss: withdrawal planning, tax coordination, and strategies that track progress toward your spending needs.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            Have questions about a 401(k) rollover, your allocation, or retirement withdrawals? <Link href="/contact" className="text-medium-blue hover:underline">Schedule your consultation</Link> at no cost.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs 401(k) Participant Advice
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Not every 401(k) participant needs paid advice. These situations signal when it adds real value.
          </p>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You&apos;re Within 10 Years of Retirement</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Income, withdrawal, and tax decisions multiply as retirement approaches. Your plan&apos;s tools won&apos;t address Social Security timing, tax bracket management, or how to coordinate your 401(k) drawdown with other income sources. This is when guidance addresses gaps automated tools cannot.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You&apos;re Changing Jobs or Leaving an Employer</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Rolling over isn&apos;t automatically the right move. You need a comparison of your current plan&apos;s fees, investment options, and services against an IRA or new employer plan before you act. Evaluating advice options helps you make confident decisions about where your assets belong.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You&apos;ve Built Significant Savings but Aren&apos;t Sure About Your Mix</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Once your balance reaches a level where allocation, risk, and diversification carry real stakes, a target-date fund may no longer match your situation. The factors driving your investment decisions shift as your retirement savings and assets grow.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You&apos;re Already Retired and Managing Withdrawals</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Withdrawal sequencing, tax bracket management, and required minimum distribution decisions need ongoing coordination as your life and spending patterns change. Getting these wrong in early retirement compounds over the life of your savings.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Have Multiple Retirement Accounts Across Employers</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Scattered accounts create duplicated allocations, inconsistent risk exposure, and planning blind spots. Consolidation decisions require evaluating each account&apos;s fees, investment options, and tax implications before making changes.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">When 401(k) Advice Might Not Be the Right Fit</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If your balance is small, your situation is straightforward, and your target-date fund matches your comfort level, paid advice may not add enough value yet. A <Link href="/contact" className="text-medium-blue hover:underline">complimentary consultation</Link> can help you decide.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Comparison Tables */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            401(k) Participant Advice vs. In-Plan Managed Accounts
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            In-plan managed accounts and target-date funds serve real purposes. The question is whether they cover enough as your decisions grow more complex.
          </p>
          
          <h3 className="text-navy font-outfit text-2xl font-medium mb-6">Independent Fiduciary Advice vs. In-Plan Managed Account</h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Independent Fiduciary Advice</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">In-Plan Managed Account</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Advice scope</td>
                  <td className="px-4 py-3 text-gray-700">Full financial picture: taxes, rollover, income, estate</td>
                  <td className="px-4 py-3 text-gray-700">Portfolio allocation within current plan only</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fiduciary standard</td>
                  <td className="px-4 py-3 text-gray-700">Fee-only, legally obligated to act in your interest</td>
                  <td className="px-4 py-3 text-gray-700">Varies; may follow suitability standard only</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Conflicts of interest</td>
                  <td className="px-4 py-3 text-gray-700">No commissions, no proprietary products</td>
                  <td className="px-4 py-3 text-gray-700">May favor plan provider&apos;s fund options</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Retirement transition support</td>
                  <td className="px-4 py-3 text-gray-700">Withdrawal sequencing, tax coordination, Social Security</td>
                  <td className="px-4 py-3 text-gray-700">Typically limited to plan-level guidance</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Participant adoption</td>
                  <td className="px-4 py-3 text-gray-700">Participant-initiated based on need</td>
                  <td className="px-4 py-3 text-gray-700">79% have access; 9% use it (Vanguard 2025)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm leading-relaxed mb-8 italic">
            Source: Vanguard How America Saves 2025; U.S. Department of Labor 2025
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            In-plan managed accounts work when allocation is the primary concern. Independent fiduciary advice becomes the stronger choice when rollover, tax, retirement income, or multi-account decisions are involved. An advisor with <Link href="/our-services" className="text-medium-blue hover:underline">retirement plan consulting</Link> experience brings deeper insight into plan mechanics that affect your options.
          </p>

          <h3 className="text-navy font-outfit text-2xl font-medium mb-6">Target-Date Fund (DIY) vs. Personalized Participant Advice</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Target-Date Fund / DIY</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Personalized Advice</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Allocation approach</td>
                  <td className="px-4 py-3 text-gray-700">Automatic age-based glide path</td>
                  <td className="px-4 py-3 text-gray-700">Customized to goals, risk tolerance, full picture</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Savings adequacy check</td>
                  <td className="px-4 py-3 text-gray-700">Not assessed</td>
                  <td className="px-4 py-3 text-gray-700">Evaluates readiness against your retirement target</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Tax planning</td>
                  <td className="px-4 py-3 text-gray-700">None</td>
                  <td className="px-4 py-3 text-gray-700">Multi-year projections across account types</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Rollover decisions</td>
                  <td className="px-4 py-3 text-gray-700">Not addressed</td>
                  <td className="px-4 py-3 text-gray-700">Compares plan vs. IRA fees, options, services</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Cost</td>
                  <td className="px-4 py-3 text-gray-700">Low expense ratio only</td>
                  <td className="px-4 py-3 text-gray-700">Advisory fee; value depends on complexity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm leading-relaxed mt-6 italic">
            Source: U.S. Department of Labor 2025; EBRI/Greenwald Retirement Confidence Survey 2025
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Target-date funds handle allocation for disciplined savers with straightforward situations. Personalized advice adds value when retirement timing, tax coordination, or rollover decisions go beyond what a default fund covers. <a href="https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/choosing-the-right-person-to-give-you-investment-advice" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">DOL guidance on choosing an investment advice provider</a> outlines what to evaluate, including whether your advisor meets fiduciary standards.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our 401(k) Participant Advice Process
          </h2>
          <div className="relative">
            <div className="absolute left-[19px] top-10 bottom-10 w-px bg-[#C1C5C9] hidden sm:block" />
            <div className="flex flex-col gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
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
      <section className="bg-[#F5F3EF] py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Why Choose PointOak for 401(k) Participant Advice
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-6">
            <a href="https://www.cfp.net/news/2026/01/cfp-professional-advised-americans-experience-greater-financial-preparedness" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">CFP Board&apos;s 2026 study</a> found that 94% of households advised by CFP professionals feel confident achieving their financial goals, compared to 81% of unadvised Americans. That confidence gap narrows when your advisor carries fiduciary responsibilities, uses open-architecture product selection, and specializes in retirement decisions rather than general financial planning.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            You already have a plan, so the real question is whether paid guidance adds enough. <Link href="/our-consulting-team" className="text-medium-blue hover:underline">Our senior advisors</Link> bring a corporate retirement plan background. They understand fee structures, provider conflicts, investment menus, and where plan-level rules stop. That knowledge directly shapes the participant advice you receive.
          </p>
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
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            PointOak Retirement Advisors is a fee-only, SEC-registered wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. We serve high-net-worth individuals and corporate plan sponsors nationwide, with over $1.08 billion in assets under management and over 50 years of collective experience. Darsh Makim, CRPC, founded the firm after advising plan sponsors and participants since 2005. <Link href="/contact" className="text-medium-blue hover:underline">Schedule a complimentary consultation</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <CTASection />
      <Footer />
    </main>
  );
}
