import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FileText, Shield, TrendingDown, FileCheck, Target, BarChart3 } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Investment Analysis for Plan Sponsors | PointOak",
  description: "PointOak develops your IPS and monitors 401(k) fund performance quarterly as a named ERISA fiduciary. Institutional-grade lineup design. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/investment-analysis/"
  }
};

const highlights = [
  "Named ERISA 3(21) and 3(38) fiduciary",
  "Quarterly fund monitoring with watchlist criteria",
  "Open-architecture, institutional-grade fund selection"
];

const benefitsData = [
  {
    title: "Documented Fiduciary Process Protection",
    description: "DOL holds fiduciaries responsible for selecting and monitoring every investment option in the plan. A documented process with clear evaluation criteria and committee minutes is your primary defense during an audit or litigation. Informal reviews leave gaps that regulators and plaintiffs target first.",
    icon: Shield
  },
  {
    title: "Lower Participant Investment Costs",
    description: "Fee-aware fund monitoring connects directly to the committee's duty of prudence. Investment fees across mutual funds and the full lineup represent the largest ongoing cost participants bear, making systematic fee benchmarking essential. Even small percentage differences in expense ratios compound across retirement accounts over decades, affecting account balances at retirement.",
    icon: TrendingDown
  },
  {
    title: "Consistent Fund Evaluation and Replacement Discipline",
    description: "Defined watchlist triggers remove subjectivity from fund reviews. When a fund underperforms its benchmark, experiences manager turnover, or drifts from its stated style, the investment policy statement dictates watchlist placement or replacement. This prevents ad hoc decisions driven by short-term performance swings or market noise.",
    icon: FileCheck
  },
  {
    title: "IPS as Active Governance Framework",
    description: "PSCA reported 82% of plans maintain an IPS, rising to 93% among large plans. This is standard governance, not optional paperwork. Your IPS defines asset allocation targets, asset class coverage, and evaluation criteria for bond funds, fixed income securities, money market funds, and every lineup category.",
    icon: FileText
  },
  {
    title: "Independent Oversight Free from Provider Conflicts",
    description: "Open-architecture fund selection draws from the entire market, not a single recordkeeper's shelf. Independent oversight eliminates the conflict of interest that exists when the entity monitoring performance also profits from the funds selected. Your committee receives recommendations based on merit and lower risk-adjusted cost, not revenue-sharing arrangements.",
    icon: Target
  }
];

const needsAnalysisData = [
  {
    title: "Your Committee Lacks Documented Monitoring Criteria",
    description: "Fund reviews happen informally without an IPS, written criteria, or consistent documentation. Participants rely on investment decisions your committee cannot demonstrate were made through a prudent process. A documented framework closes that gap."
  },
  {
    title: "Your Recordkeeper Provides the Lineup Without Independent Oversight",
    description: "The entity administering accounts and collecting fees also selects the funds. This dual role creates a conflict the DOL expects committees to address. Independent analysis separates plan administration from investment oversight."
  },
  {
    title: "Participant Inertia Masks Lineup Problems",
    description: "Vanguard reported only 5% of nonadvised plan participants traded in 2024. Low trading activity hides underperformance because participants absorb excess fees and poor returns without action. Committee-level monitoring catches what participant inertia conceals."
  },
  {
    title: "Your Plan Recently Changed Providers or Structure",
    description: "Provider transitions, mergers, and new employer groups create lineup gaps. Retirement accounts need re-evaluation when the participant base or plan structure shifts. Post-transition analysis ensures the menu matches current demographics and benefits."
  },
  {
    title: "Committee Members Lack Time or Investment Expertise",
    description: "Evaluating fund performance, comparing expense ratios, and monitoring company stock positions require specialized knowledge. Committee members with competing responsibilities lack bandwidth for ongoing oversight. Independent consulting delivers the discipline that protects participant contributions."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Review Your Current Lineup and Governance Documentation",
    description: "Your current fund lineup, fees, and fiduciary documentation are reviewed against DOL standards and IPS requirements."
  },
  {
    number: 2,
    title: "Develop Your Investment Policy Statement",
    description: "Your committee collaborates on evaluation criteria, watchlist triggers, and replacement thresholds within a written IPS built for future review cycles."
  },
  {
    number: 3,
    title: "Restructure Your Fund Menu",
    description: "Your lineup is rebuilt with institutional-grade, low-cost options spanning equity, fixed income, and other categories matched to participant demographics and plan design strategy."
  },
  {
    number: 4,
    title: "Implement Changes with Full Documentation",
    description: "Changes are executed and documented for your fiduciary file, with rationale for every fund addition, removal, or watchlist action recorded."
  },
  {
    number: 5,
    title: "Monitor Performance and Report to Your Committee",
    description: "Funds are reviewed quarterly against IPS criteria, with reports covering performance, income options, and replacement recommendations delivered to your committee."
  }
];

const faqs = [
  {
    question: "What does 401(k) investment consulting cost?",
    answer: "Fees vary by plan size, complexity, and fiduciary role. PointOak uses a fee-only model with no commissions or revenue-sharing from fund providers. Cost depends on plan assets, the number of investment options monitored, and whether the engagement is a 3(21) advisory or 3(38) discretionary arrangement. The initial consultation is complimentary with no obligation, and PointOak coordinates full fee transparency so plan sponsors can compare costs clearly."
  },
  {
    question: "What is the difference between 3(21) and 3(38) fiduciary services?",
    answer: "A 3(21) fiduciary advises your committee; a 3(38) fiduciary makes investment decisions. Under a 3(21) arrangement, the consultant recommends funds and the committee retains final authority. A 3(38) consultant exercises discretionary control over selection and monitoring, though appointing one does not eliminate the sponsor's duty to prudently monitor that manager. PointOak serves in either capacity through our fiduciary support services."
  },
  {
    question: "How often should 401(k) investments be monitored?",
    answer: "Quarterly reviews with documented criteria are the standard for prudent oversight. The DOL requires fiduciaries to monitor investments on an ongoing basis, with quarterly the most common review cadence. The IPS should define specific triggers for mid-cycle reviews, such as a portfolio manager departure or a significant market event. Watchlist criteria and replacement thresholds keep monitoring consistent rather than reactive to short-term volatility."
  },
  {
    question: "What is a 401(k) investment policy statement, and does our plan need one?",
    answer: "An IPS is a written framework that guides fund selection, monitoring, and replacement. Most plans already maintain one, and the IPS defines evaluation criteria, watchlist triggers, and replacement procedures that bring consistency to every fund decision. Without documented rationale, fund changes become harder to defend during audits. PointOak develops the IPS with your committee as the foundation for every quarterly review."
  },
  {
    question: "Do target-date funds still need to be reviewed?",
    answer: "Yes; default status does not exempt target-date funds from fiduciary monitoring. Target-date funds designated as a QDIA carry the same fiduciary duty of selection and monitoring as any other plan option. Glide path design, fees, and underlying fund composition require regular evaluation. Participant trading data shows individuals in single target-date funds rarely adjust allocations on their own, making committee oversight through rigorous target-date fund consulting essential rather than optional."
  },
  {
    question: "Is participant choice enough to protect the committee from fiduciary risk?",
    answer: "No; participant direction does not transfer the committee's investment oversight obligations. The DOL states that plan fiduciaries remain responsible for selecting and monitoring designated investment options, even in participant-directed plans. Section 404(c) protection requires a broad range of alternatives but does not eliminate the duty to monitor those options or document the process. DOL guidance on fiduciary duties reinforces that participant direction and fiduciary oversight are separate obligations."
  },
  {
    question: "What should trigger a fund watchlist or replacement review?",
    answer: "Sustained underperformance, fee increases, manager changes, and style drift are common triggers. The IPS should define specific criteria for watchlist placement and removal. Common triggers include sustained underperformance versus benchmark and peer group over multiple quarters, material fee increases, portfolio manager turnover, investment style drift, and organizational changes at the fund company. Documenting why a fund was placed on the watchlist and what conditions would prompt replacement protects the committee's fiduciary record."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Investment Analysis for Plan Sponsors and Committees",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Investment Analysis",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function InvestmentAnalysisPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Investment Analysis" }
        ]}
        title="401(k) Investment Analysis for Plan Sponsors and Committees"
        subtitle="Fiduciary duty to select and monitor retirement plan investments persists in participant-directed plans. ICI reported $8.9 trillion in 401(k) plan assets at year-end 2024. PointOak Retirement Advisors delivers 401(k) investment analysis paired with named fiduciary support: IPS development, institutional-grade lineup design, and documented fund governance monitoring."
      />

      {/* Highlights Bar */}
      <section className="bg-cloud-blue py-8 md:py-10">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                <p className="text-text-gray font-outfit text-sm md:text-base leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of 401(k) Investment Analysis */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of 401(k) Investment Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefitsData.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-cloud-blue rounded-lg p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-outfit text-navy text-xl font-semibold flex-1">{benefit.title}</h3>
                  </div>
                  <p className="text-text-gray font-outfit text-base leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* How 401(k) Investment Analysis Works */}
      <AnimateOnScroll>
      <section className="bg-[#F5F3EF] py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How 401(k) Investment Analysis Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              IPS criteria are applied to each fund during every review cycle: performance measured against benchmarks and peer groups across stocks, bonds, and alternative asset classes. Fees are compared to category medians, and fund managers are evaluated for consistency and tenure. Plans average 23 to 27.6 options per <a href="https://institutional.vanguard.com/content/dam/inst/iig-transformation/insights/pdf/2025/has/2025_How_America_Saves.pdf" target="_blank" rel="noopener noreferrer" className="text-navy underline hover:text-medium-blue transition-colors">Vanguard&apos;s 2025 How America Saves report</a> and PSCA data, making a systematic investment process the foundation of sound investment decisions.
            </p>
            <p>
              Watchlist flags identify funds with sustained underperformance, excessive costs, or portfolio manager changes. Replacement follows documented criteria, not reactive judgment. Exchange traded funds, institutional share classes, QDIAs, and target-date selections are all evaluated equally to maintain optimal diversification.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-300">
              <p>
                <Link href="/contact/" className="text-navy underline hover:text-medium-blue transition-colors font-medium">Schedule a consultation</Link> to discuss your plan&apos;s investment lineup and monitoring process.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs 401(k) Investment Analysis */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs 401(k) Investment Analysis
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Not every plan requires outside <Link href="/our-services/" className="text-navy underline hover:text-medium-blue transition-colors">retirement plan consulting services</Link>. These scenarios indicate when independent analysis strengthens your committee&apos;s governance.
          </p>
          <div className="space-y-6">
            {needsAnalysisData.map((item, idx) => (
              <div key={idx} className="bg-cloud-blue rounded-lg p-6 md:p-8 border-l-4 border-navy">
                <h3 className="font-outfit text-navy text-lg md:text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
            <div className="bg-[#F5F3EF] rounded-lg p-6 md:p-8 border-l-4 border-warm-gold">
              <h3 className="font-outfit text-navy text-lg md:text-xl font-semibold mb-3">When Investment Analysis Might Not Be Needed</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plans in final stages of termination or wind-down, where remaining assets are being distributed to participants rather than actively managed, typically do not benefit from an ongoing investment monitoring engagement.
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
            Independent Investment Consulting vs. Bundled Provider Oversight
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Most committees face this decision before they seek outside help: does the current provider relationship include genuine investment oversight, or administrative convenience that resembles it?
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Criteria</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Independent Consultant</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Bundled Provider</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Objectivity</td>
                  <td className="px-4 py-3 text-gray-700">No affiliation with fund providers; advice free from revenue-sharing conflicts</td>
                  <td className="px-4 py-3 text-gray-700">Potential conflict favoring proprietary or revenue-sharing fund options</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fee Benchmarking Depth</td>
                  <td className="px-4 py-3 text-gray-700">Like-for-like comparison across all available providers</td>
                  <td className="px-4 py-3 text-gray-700">Comparison often limited to in-network options</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fund Replacement Triggers</td>
                  <td className="px-4 py-3 text-gray-700">Defined watchlist criteria with documented replacement logic</td>
                  <td className="px-4 py-3 text-gray-700">Replacement timing may follow provider&apos;s own schedule</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Committee Reporting</td>
                  <td className="px-4 py-3 text-gray-700">Fiduciary-ready reports built for committee files and DOL review</td>
                  <td className="px-4 py-3 text-gray-700">Reporting format and content set by provider</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fiduciary Accountability</td>
                  <td className="px-4 py-3 text-gray-700">Named 3(21) or 3(38) ERISA fiduciary</td>
                  <td className="px-4 py-3 text-gray-700">Fiduciary role may be unclear or contractually limited</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Investment Fee Transparency</td>
                  <td className="px-4 py-3 text-gray-700">Independent review surfaces hidden costs across all share classes</td>
                  <td className="px-4 py-3 text-gray-700">Fee disclosure limited to provider&apos;s standard reporting</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm leading-relaxed mt-6 italic">
            Sources: U.S. GAO, U.S. Department of Labor
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Bundled oversight can make sense for low-complexity plans where the committee has internal financial expertise and resources. Independent consulting is the right focus when committees seek documented decision making, unbiased investment advice, and named fiduciary accountability. A <a href="https://www.gao.gov/products/gao-21-357" target="_blank" rel="noopener noreferrer" className="text-navy underline hover:text-medium-blue transition-colors">GAO report on 401(k) plan fees</a> found investment fees are typically the largest cost participants bear, reinforcing the value of independent oversight.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Investment Analysis Process
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
            Why Choose PointOak for 401(k) Investment Analysis
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              A <a href="https://www.psca.org/news/psca-news/2024/5/benchmarking-your-retirement-plan/" target="_blank" rel="noopener noreferrer" className="text-navy underline hover:text-medium-blue transition-colors">PSCA survey on advisor use</a> found 83% of plans use an independent investment advisor to support fiduciary responsibilities. PointOak operates as a named ERISA 3(21) or 3(38) fiduciary. <Link href="/about/" className="text-navy underline hover:text-medium-blue transition-colors">Our approach</Link> is fee-only and independent, with no ties to recordkeepers or fund providers.
            </p>
            <p>
              Every advisor claims quarterly monitoring. PointOak&apos;s process applies documented criteria, defined watchlist triggers, and committee-ready replacement logic. <Link href="/our-consulting-team/" className="text-navy underline hover:text-medium-blue transition-colors">Our consulting team</Link> delivers fiduciary-grade reporting, not a quarterly slide deck repackaging provider data.
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
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. SEC-registered investment advisor serving high-net-worth individuals and corporate plan sponsors nationwide. Over $1.08 billion in assets under management and 50 years of collective experience. Founder Darsh Makim, CRPC, has advised plan sponsors and participants since 2005. <Link href="/contact/" className="text-navy underline hover:text-medium-blue transition-colors">Schedule a complimentary consultation</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            Investment advisory services offered through PointOak Retirement Advisors, LLC. This site is published for residents of the United States only. PointOak Retirement Advisors, LLC does not provide tax or legal advice.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
