import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Fund Monitoring for Plan Sponsors | PointOak",
  description: "PointOak provides 401(k) fund monitoring as a named ERISA fiduciary, reviewing plan lineups with 450+ data points per bidder. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/investment-analysis/fund-monitoring/"
  }
};

const highlights = [
  "450+ data points reviewed per plan bidder",
  "Named 3(21) and 3(38) ERISA fiduciary",
  "Fee-only fiduciary since 2017"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We review your current investment lineup, fee structure, committee processes, and fiduciary documentation to identify gaps."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We deliver targeted consulting recommendations for fund selection, IPS updates, fee restructuring, and governance improvements."
  },
  {
    number: 3,
    title: "Implement",
    description: "We execute changes, establish ongoing monitoring cadence, and produce committee-ready documentation to ensure compliance."
  }
];

const faqs = [
  {
    question: "How much does 401(k) fund monitoring cost?",
    answer: "401(k) fund monitoring fees vary based on plan asset size, number of investment options monitored, the fiduciary role level, and scope of committee reporting. PointOak receives no money from fund companies, insurance carriers, or securities firms. Our fee-only model means no commissions or revenue-sharing arrangements that could influence fund recommendations. The cost depends on plan complexity, total assets, whether the engagement is a 3(21) advisory or 3(38) discretionary arrangement, and the depth of quarterly reporting required. Schedule a consultation to discuss pricing for your specific plan."
  },
  {
    question: "What is the difference between a 3(21) advisor and a 3(38) investment manager?",
    answer: "A 3(21) advisor recommends investments as a co-fiduciary, while a 3(38) investment manager takes discretionary authority over fund selection and ongoing monitoring. Under a 3(21) arrangement, the advisor provides recommendations and the sponsor retains final decision authority. Under a 3(38) arrangement, the manager selects and monitors funds independently, and fiduciary responsibility transfers. Both structures require the sponsor to oversee the advisor or manager."
  },
  {
    question: "How often should a 401(k) investment committee review funds?",
    answer: "Quarterly investment committee reviews are typically the most common cadence across retirement plans, aligning with DOL fee disclosure requirements to create consistent governance. Quarterly meetings let committees evaluate fund performance against IPS criteria while disclosure data is current. Plans with stable lineups may review semi-annually, but quarterly cadence reduces the risk of compounding underperformance or missing share-class changes. PointOak structures each review to coincide with current fee and performance data."
  },
  {
    question: "Do target-date funds still need to be monitored?",
    answer: "Target-date funds require the same fiduciary monitoring as any other investment option, regardless of their role as a qualified default. TDF structures vary in glide path design, fee layers, underlying fund selection, and whether they use active or passive strategies. Some newer series incorporate stable-value allocations that benefit from ongoing scrutiny. The DOL treats target-date funds like any other plan investment, meaning the committee must evaluate suitability, cost, and performance on an ongoing basis."
  },
  {
    question: "What should be in a 401(k) investment policy statement?",
    answer: "An effective IPS defines fund evaluation criteria, performance benchmarks, watchlist triggers, removal procedures, review cadence, and the roles of each committee member and advisor. The IPS is the governing document for all plan investment decisions. It should specify benchmarks for each fund category, watchlist thresholds, removal timelines, and documentation procedures. PointOak builds each IPS around the plan's participant demographics, plan design, and menu structure so the governance framework takes form before scrutiny arrives."
  },
  {
    question: "Does participant direction remove fiduciary responsibility?",
    answer: "Participant direction does not eliminate the fiduciary duty to prudently select and monitor every investment alternative offered under the retirement plan. ERISA Section 404(c) may provide certain protections when participants direct their own accounts, but it does not relieve fiduciaries of the obligation to choose and monitor the investment menu. PointOak helps sponsors document that ongoing selection and monitoring process so the fiduciary record is clear regardless of how participants direct employee contributions. Our participant education programs complement this oversight."
  },
  {
    question: "What triggers a fund to go on watch or be replaced?",
    answer: "Common watchlist triggers include sustained underperformance against benchmarks, portfolio manager turnover, style drift, expense ratio increases, and organizational changes at the fund company. Each trigger should be defined in the IPS before it occurs, not determined after the fact. A fund might underperform its benchmark for consecutive quarters and enter the watchlist with a defined remediation period before removal. Manager departures or significant shifts in investment process can justify immediate escalation. PointOak establishes these criteria upfront and applies them consistently."
  },
  {
    question: "What does a recordkeeper do versus a fiduciary monitoring advisor?",
    answer: "A recordkeeper handles account administration and contribution data tracking, while a fiduciary monitoring advisor evaluates the investment menu, benchmarks fees, and produces governance documentation. Recordkeepers process transactions, distribute statements, manage participant loans and distributions, and maintain the plan's recordkeeping platform. They do not typically evaluate whether funds should remain, whether fees are competitive, or whether the IPS is being followed. A monitoring advisor fills that role through independent fund reviews and documented recommendations each quarter."
  },
  {
    question: "What is 401(k) fund monitoring?",
    answer: "401(k) fund monitoring is the ongoing fiduciary process of selecting, evaluating, and documenting the investment options offered to participants within a retirement plan. The Department of Labor requires plan fiduciaries to act prudently when choosing and overseeing investments. Fund monitoring operationalizes that duty through IPS governance, performance and fee reviews, watchlist management, and committee documentation. It covers mutual funds, collective investment trusts, and other securities where employee contributions are invested."
  },
  {
    question: "Why is quarterly fund monitoring not just about performance?",
    answer: "Quarterly reviews address fee changes, manager turnover, share-class availability, IPS compliance, and market developments that matter beyond raw investment returns. A fund can meet its performance benchmark while increasing its expense ratio, losing key personnel, or drifting from its stated style. Quarterly monitoring catches these factors that affect participant earnings and savings over time. Department of Labor rules and IRS reporting requirements can also change how plan sponsors structure and disclose investments, making non-return factors part of prudent oversight."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Fund Monitoring Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Investment Monitoring and Fiduciary Services",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function FundMonitoringPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Investment Analysis", href: "/corporate-retirement-plans/investment-analysis" },
          { label: "Fund Monitoring & Reporting" }
        ]}
        title="401(k) Fund Monitoring for Plan Sponsors and Fiduciary Committees"
        subtitle="Your fiduciary duty to select and monitor 401(k) plan investment options persists regardless of participant direction or target-date defaults. PointOak Retirement Advisors provides 401(k) fund monitoring as a named ERISA fiduciary for plan sponsors nationwide."
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
            Benefits of 401(k) Fund Monitoring
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Reduced Fiduciary Liability Exposure</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                <a href="https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/publications/meeting-your-fiduciary-responsibilities" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">DOL fiduciary guidance</a> defines prudence by the process used to make decisions, not by outcomes alone. A documented monitoring framework with IPS-based criteria and watchlist triggers is a plan sponsor&apos;s primary defense under applicable DOL rules. PointOak&apos;s <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:underline">fiduciary support</Link> builds that framework before it&apos;s needed.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Documented Governance That Withstands Scrutiny</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                PSCA reports 82% of retirement plans have an Investment Policy Statement, but only 44% formally review it annually. The gap between maintaining a policy on paper and enforcing it through practice is where fiduciary exposure grows. Structured 401(k) fund monitoring closes that gap by tying plan documents to a recurring review cadence with recorded outcomes.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Stronger Participant Outcomes from Menu Design</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Vanguard found the average plan offered 27.6 investment options in 2024, yet participants used only 2.3 funds, with most defaulting into target date funds. Monitoring ensures the lineup reflects actual participant behavior. Removing redundant or underperforming funds concentrates oversight where it matters.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Lower Plan Costs Through Ongoing Fee Oversight</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                DOL fee disclosure rules require transparency, but disclosure alone doesn&apos;t lower fees. Ongoing <Link href="/corporate-retirement-plans/provider-and-fee-benchmarking" className="text-medium-blue hover:underline">fee benchmarking</Link> against share-class alternatives catches expense drift that erodes returns on employee contributions over time. This review cycle converts static fee data into actionable decisions that keep plan costs competitive.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Clear Accountability Across Plan Service Providers</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Retaining a 3(21) or 3(38) advisor doesn&apos;t eliminate a sponsor&apos;s oversight duty. Monitoring defines each provider&apos;s role, documents who is responsible for fund selection versus administration, and closes compliance gaps between service providers. Clear accountability reduces the risk of undocumented handoffs that leave fiduciary responsibility undefined.
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
            How 401(k) Fund Monitoring Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Fund monitoring operates through a recurring cycle anchored to the Investment Policy Statement. The IPS defines evaluation criteria: benchmark comparisons, peer-group rankings, expense ratios, and manager tenure. The committee applies those criteria during reviews, and <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:underline">investment analysis</Link> results determine whether a mutual fund stays on the menu, enters a watchlist, or gets replaced.
            </p>
            <p>
              <a href="https://www.psca.org/news/psca-news/2025/3/frequency-of-formal-retirement-plan-committee-meetings/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">PSCA committee meeting research</a> found quarterly meetings are the most common committee cadence. That frequency aligns with DOL quarterly fee disclosure requirements and creates a natural checkpoint for performance data, manager changes, and share-class availability. Gaps between reviews allow underperformance and fee drift to compound without documentation.
            </p>
          </div>
          <div className="mt-8 bg-navy text-white rounded-lg p-6 md:p-8">
            <p className="font-outfit text-base leading-relaxed">
              Talk to a named fiduciary about your plan&apos;s fund monitoring process. <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-warm-gold hover:underline font-semibold">Schedule a consultation</a>.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs It */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs 401(k) Fund Monitoring
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Not every retirement plan needs outside monitoring support. These scenarios indicate when it does.
          </p>
          <div className="space-y-8">
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Committee Reviews Funds Without Documented Criteria</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Informal reviews based on recent returns lack the structure regulators expect. Without IPS-based criteria, there&apos;s no documented basis for keeping or removing a fund. Structured monitoring replaces guesswork with defensible, recorded decisions.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Plan Relies Heavily on Target-Date Defaults</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plan sponsors often assume defaults are self-policing, but target-date structures keep evolving. <Link href="/corporate-retirement-plans/tdf-consulting" className="text-medium-blue hover:underline">Target-date fund consulting</Link> ensures default retirement savings options receive the same scrutiny as every active fund.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Have No Named Fiduciary Advisor for Investments</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your recordkeeper handles administration, but no one holds named fiduciary responsibility for fund selection. That gap leaves the investment menu without an independent evaluator. PointOak&apos;s <Link href="/corporate-retirement-plans" className="text-medium-blue hover:underline">retirement plan consulting services</Link> fill that role.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Recently Changed Providers or Plan Structure</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Provider transitions create the highest-risk period for documentation gaps between third party administrators. Structured monitoring during and after a recordkeeper change captures fund decisions and service provider handoffs that would otherwise go unrecorded.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">A DOL Inquiry or Audit Has Raised Fiduciary Concerns</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                An audit letter or participant complaint exposes oversight gaps that retroactive documentation cannot close. Structured monitoring demonstrates a corrective response aligned with DOL guidance that regulators can verify.
              </p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">When 401(k) Fund Monitoring Might NOT Be the Right Fit</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A smaller plan with a single target-date suite, a current IPS, documented quarterly reviews, and annual fee benchmarks may not need outside monitoring. The plan sponsor already owns the process.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* 3(21) vs 3(38) Table */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            3(21) Advisor vs. 3(38) Investment Manager
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            <a href="https://institutional.vanguard.com/insights-and-research/report/previewing-how-america-saves-2025.html" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Vanguard&apos;s How America Saves 2025</a> found 67% of participants hold professionally managed allocations. That concentration makes the choice between different types of oversight models consequential.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">3(21) Advisor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">3(38) Investment Manager</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fiduciary Role</td>
                  <td className="px-4 py-3 text-gray-700">Co-fiduciary providing investment advice and recommendations</td>
                  <td className="px-4 py-3 text-gray-700">Delegated portfolio manager with discretionary authority</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Decision Authority</td>
                  <td className="px-4 py-3 text-gray-700">Recommends funds; sponsor makes final selections</td>
                  <td className="px-4 py-3 text-gray-700">Selects and monitors funds independently</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Sponsor Liability</td>
                  <td className="px-4 py-3 text-gray-700">Shared; sponsor retains final investment decisions</td>
                  <td className="px-4 py-3 text-gray-700">Transferred for fund selection; sponsor oversight remains</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Best For</td>
                  <td className="px-4 py-3 text-gray-700">Sponsors who want control with structured process support</td>
                  <td className="px-4 py-3 text-gray-700">Sponsors who want delegated authority with accountability</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">PointOak Role</td>
                  <td className="px-4 py-3 text-gray-700">Serves as named 3(21) co-fiduciary advisor</td>
                  <td className="px-4 py-3 text-gray-700">Serves as named 3(38) investment manager</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            A 3(21) engagement works when the committee wants to retain final decisions but needs structured process support and investment advice. A 3(38) engagement works when the committee wants delegated fund selection authority with documented accountability. PointOak serves in both capacities through our <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:underline">fiduciary support services</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our 401(k) Fund Monitoring Process
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
            Why Choose PointOak for 401(k) Fund Monitoring
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              <a href="https://www.ici.org/news-release/25-low-expense-ratios-benefit-retirement-savers" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">ICI research</a> shows average equity mutual fund expense ratios in 401(k) plans fell from 0.76% in 2000 to 0.26% in 2024, a 66% decline. That reduction didn&apos;t happen passively. It resulted from ongoing fee benchmarking and share-class scrutiny, exactly the consulting discipline PointOak applies to every plan through <Link href="/about" className="text-medium-blue hover:underline">our independence</Link> and open-architecture evaluation.
            </p>
            <p>
              Many sponsors assume their current service provider handles monitoring. A recordkeeper administers accounts. A named fiduciary monitors the lineup against documented criteria, manages watchlist triggers, and produces committee-ready reports. PointOak serves as a named 3(21) or 3(38) fiduciary, separating administration from oversight so each role is clear on paper and in practice.
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
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. We are an SEC-registered investment advisor with over $1.08 billion in assets under management and over 50 years of collective experience across <Link href="/our-consulting-team" className="text-medium-blue hover:underline">our team</Link>. We serve plan sponsors and high-net-worth individuals nationwide. <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Schedule a complimentary consultation</a>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            Your fiduciary record is only as strong as your monitoring process. <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Schedule your consultation</a> to evaluate where your plan stands.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
