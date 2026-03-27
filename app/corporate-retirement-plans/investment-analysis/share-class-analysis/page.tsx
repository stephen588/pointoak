import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Share Class Analysis | PointOak Retirement Advisors",
  description: "PointOak's fiduciary-grade 401(k) share class analysis compares retail, R, and institutional fund classes to reduce participant costs. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/investment-analysis/share-class-analysis/"
  }
};

const highlights = [
  "450+ data points reviewed per bidder",
  "Named 3(21) and 3(38) ERISA fiduciary",
  "Fee-only, no revenue-sharing conflicts"
];

const processSteps = [
  {
    number: 1,
    title: "Inventory Your Current Lineup",
    description: "We catalog every fund, share class, expense ratio, and revenue-sharing arrangement across your plan's investment options."
  },
  {
    number: 2,
    title: "Compare Identical Funds Across Available Classes",
    description: "Each fund is evaluated against lower-cost institutional and clean share alternatives your plan qualifies for."
  },
  {
    number: 3,
    title: "Evaluate Net Cost Including Administrative Offsets",
    description: "Revenue sharing and recordkeeping fees are mapped to show true account value impact per participant."
  },
  {
    number: 4,
    title: "Document Committee Findings",
    description: "Your PointOak financial advisor delivers a written analysis with class-by-class comparisons and recommendations."
  },
  {
    number: 5,
    title: "Implement Changes and Monitor",
    description: "Approved changes execute with your recordkeeper, and ongoing monitoring tracks share class availability and fee shifts."
  }
];

const faqs = [
  {
    question: "Should a 401(k) plan always use the lowest-cost share class available?",
    answer: "No. DOL guidance requires fees to be reasonable relative to services, not simply the lowest available. Selecting solely on expense ratio can be counterproductive when plan-level account fees and cost offsets are ignored. A bond fund or money market fund with a higher expense ratio may include recordkeeping subsidies. That arrangement can produce a lower net cost than a stripped-down institutional share class paired with separate per-participant charges. PointOak evaluates net cost aligned with each plan's investment objective and asset allocation strategy, not headline numbers."
  },
  {
    question: "When should a plan consider clean shares or CITs instead of mutual fund share classes?",
    answer: "When plan size qualifies and the recordkeeper supports non-mutual-fund vehicles on its platform. Clean shares strip embedded distribution costs and serve as an intermediate step between retail and institutional share classes. CITs can offer lower pricing for qualifying 401(k) plans, particularly in target date funds and fixed income securities allocations. PointOak's target date fund consulting evaluates these vehicles based on plan size and recordkeeper platform support."
  },
  {
    question: "How often should a plan's share class lineup be reviewed?",
    answer: "Annually, aligned with your investment committee meeting cycle and defined contribution plan oversight duties. Fiduciary duty requires ongoing monitoring of individual funds and their share classes, not one-time selection. Courts have evaluated whether committees maintained regular review processes. PointOak's fiduciary support services build annual reviews into plan oversight, tracking whether each fund company has introduced lower-cost classes."
  },
  {
    question: "What is the difference between R shares and institutional shares in a 401(k)?",
    answer: "R shares typically embed revenue-sharing and sub transfer agency costs; institutional shares strip distribution fees to a lower base. R shares were designed for retirement accounts and often include layered costs covering transfer agent expenses, sub transfer agency payments, and revenue-sharing flows to recordkeepers. Institutional share classes carry lower average expense ratios because these distribution components are removed. The trade-off: 401(k) plans using institutional shares may pay recordkeeping costs directly rather than through embedded fund charges."
  },
  {
    question: "How do you compare different share classes of the same mutual fund in a 401(k)?",
    answer: "By isolating cost differences across share classes for the same underlying portfolio and documenting each variance. The same portfolio of index funds or actively managed holdings exists inside each share class. The difference is the wrapper: distribution fees, other expenses, and revenue-sharing layers. FINRA's fund comparison framework applies this same-fund logic, and PointOak extends it across every position in the lineup to produce a cost map the committee can act on."
  },
  {
    question: "How does revenue sharing affect 401(k) fund expenses?",
    answer: "Revenue sharing redirects a portion of fund expenses to offset recordkeeping or administrative costs within the plan. A fund's operating expenses include a revenue-sharing component paid to the recordkeeper or administrator. Without monitoring, that amount may exceed services rendered. Plans with higher account maintenance activity generate more revenue sharing than administration requires. PointOak isolates these flows to identify whether participants subsidize costs beyond what the plan consumes."
  },
  {
    question: "Can a plan use a more expensive share class if recordkeeping fees are offset?",
    answer: "Yes, if the committee documents that total participant cost is reasonable after accounting for all offsets. DOL advisory material cautions against selecting solely for the lowest expense ratio or the highest revenue-sharing yield. The committee must document that net cost, including accounting expenses, legal expenses, and other administrative charges, is prudent. PointOak provides that documentation with a net-cost analysis the committee can reference during audits."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Share Class Analysis",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Share Class Analysis and Fee Optimization",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function ShareClassAnalysisPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Investment Analysis", href: "/corporate-retirement-plans/investment-analysis" },
          { label: "Share Class & Fee Analysis" }
        ]}
        title="401(k) Share Class Analysis for Plan Sponsors"
        subtitle="Many 401(k) plans hold identical mutual funds in retail wrappers when institutional share classes cost less on the same platform. Average equity fund expense ratios in 401(k) plans fell from 0.76% to 0.26% between 2000 and 2024. PointOak's share class analysis, part of our provider and fee benchmarking, isolates where participants absorb associated fees that add no investment value."
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
            Benefits of 401(k) Share Class Analysis
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Lower Participant Costs Without Changing Funds</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Pew research found retail equity mutual fund share classes carried median annual operating expenses 37% higher than institutional share class alternatives for the same portfolios. Moving to a lower priced share class reduces operating expenses without altering the underlying holdings or investment strategy.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Documented Fiduciary Compliance</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Courts evaluate whether committees investigated lower-cost share class alternatives before accepting current fund expenses. A documented share class review produces the fiduciary record regulators and auditors expect. PointOak&apos;s <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:underline">fiduciary support</Link> process ensures that documentation meets ERISA standards.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Revenue Sharing Transparency</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Many 401(k) plans embed provider compensation inside fund expenses through revenue sharing arrangements without isolating the dollar amount. Share class analysis separates investment cost from the administrative subsidy buried in each mutual fund&apos;s expense ratio, giving committees a clear view of who receives what.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Stronger Provider Negotiations</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plan sponsors who document their net cost position per fund negotiate recordkeeper and advisor fees from a verified baseline rather than a provider&apos;s summary. Share class analysis produces that fund-level baseline, giving the committee documented data in any fee discussion or provider evaluation.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Cleaner Investment Menu for Participants</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Replacing legacy retail or R-share classes with institutional or clean shares removes embedded distribution costs and other administrative expenses participants never chose. The result is a simplified lineup where each fund&apos;s expense ratio reflects investment management, not intermediary compensation.
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
            How 401(k) Share Class Analysis Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              The mutual fund industry manages $5.3 trillion in fund assets across 401(k) plans, or 61% of all plan holdings (ICI, 2025). That concentration means mutual fund share classes are the primary cost variable in most lineups. Analysis compares the same fund across distribution classes to isolate embedded distribution, revenue-sharing, and management fees.
            </p>
            <p>
              The net-cost evaluation framework maps expense ratio plus revenue-sharing arrangement plus plan-level administrative offsets to arrive at true participant cost per fund. Fund prospectuses disclose the expense ratio but not how revenue sharing flows through the plan. PointOak&apos;s <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:underline">investment analysis</Link> maps the full equation, documented for the committee&apos;s fiduciary file.
            </p>
          </div>
          <div className="mt-8 bg-navy text-white rounded-lg p-6 md:p-8">
            <p className="font-outfit text-base leading-relaxed">
              Request a 401(k) share class review for your plan. <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-warm-gold hover:underline font-semibold">Schedule a consultation</a> with no cost or obligation.
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
            Who Needs 401(k) Share Class Analysis
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Share class analysis serves targeted purposes within <Link href="/corporate-retirement-plans" className="text-medium-blue hover:underline">retirement plan consulting</Link>. These scenarios tell committees when to act.
          </p>
          <div className="space-y-8">
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Legacy Retail or R-Share Lineup Unreviewed for 3+ Years</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Employer sponsored retirement plans retaining the same fund classes for years risk embedding costs plan participants no longer need to pay. Unreviewed lineups create fiduciary documentation gaps committees cannot explain during audits.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Committee Told "Fees Are Competitive" Without Documentation</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Provider assurances without a same-fund, cross-class comparison leave gaps courts have scrutinized. Custodial expenses and administrative costs bundled into share class pricing require independent verification, not a provider&apos;s word.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Revenue Sharing Subsidizes Recordkeeping but Amounts Are Not Monitored</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                GAO documented a provider receiving $18,000 in revenue-sharing payments against $10,000 in administrative expenses owed. Most revenue sharing goes unmonitored, and excess compensation erodes plan assets without committee awareness.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Provider Change or RFP in Progress</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A share class review during an RFP gives the committee a documented cost baseline before evaluating new proposals. That baseline turns a subjective provider comparison into a data-driven decision.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fiduciary Litigation Concern or DOL Audit Preparation</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Retirement plans facing scrutiny need documented evidence that lower-cost alternatives were investigated. A current share class analysis is the most direct proof an investment committee can produce.
              </p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Not the right fit:</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plans already using institutional-only or CIT lineups with a documented annual review process and independent benchmarking in place have this analysis covered. A second layer adds cost without value.
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
            Retail vs. Institutional Mutual Fund Share Classes
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Share class selection is a fiduciary documentation exercise, not solely a cost comparison. Platform availability and plan size determine which fund share classes your 401(k) plan can access.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Retail Share Class</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Institutional Share Class</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Expense Ratio</td>
                  <td className="px-4 py-3 text-gray-700">Higher; embeds 12b-1, sales charges, and distribution fees</td>
                  <td className="px-4 py-3 text-gray-700">Lower; stripped of distribution costs</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Revenue Sharing</td>
                  <td className="px-4 py-3 text-gray-700">Often embedded in fund share expenses</td>
                  <td className="px-4 py-3 text-gray-700">Minimal or none</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Shareholder Fees</td>
                  <td className="px-4 py-3 text-gray-700">May include front end load, deferred sales charges, redemption fees, or purchase fees</td>
                  <td className="px-4 py-3 text-gray-700">Typically no sales loads or exchange fees</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Platform Availability</td>
                  <td className="px-4 py-3 text-gray-700">Standard on most recordkeeper platforms</td>
                  <td className="px-4 py-3 text-gray-700">Requires verification; plan may need same share class waiver</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fiduciary Risk</td>
                  <td className="px-4 py-3 text-gray-700">Higher when a lower-cost fund share class exists (Tibble: 24-40 bps cheaper, no quality differences)</td>
                  <td className="px-4 py-3 text-gray-700">Lower when selection is documented as prudent</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm leading-relaxed mt-6 italic">
            Sources: FINRA Fund Analyzer, Tibble v. Edison (9th Circuit, 2013), Investor.gov
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            When platform constraints prevent institutional access, retail or C shares can be documented as reasonable after net-cost analysis. No load funds and lower cost A shares offer intermediate options. When identical portfolios exist in institutional share classes, the fiduciary case for switching is well established.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our 401(k) Share Class Analysis Process
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
            Why Choose PointOak Retirement Advisors for 401(k) Share Class Analysis
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              ICI reports 401(k) investors in equity mutual funds paid an average of 0.31% in 2023, versus 0.42% for all equity mutual fund assets. That pricing advantage exists at the plan level, but only when share classes are properly selected. PointOak helps plan sponsors verify their lineup captures these lower ongoing costs.
            </p>
            <p>
              PointOak operates as a <Link href="/about" className="text-medium-blue hover:underline">fee-only fiduciary since 2017</Link> with no revenue-sharing income, proprietary products, or recordkeeper affiliations. That independence removes the conflict GAO identified. Every financial professional on our team evaluates share classes based on fiduciary responsibility to plan participants, not revenue to compensating brokers.
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
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. We serve plan sponsors and high-net-worth individuals nationwide as an SEC-registered investment advisor with over 50 years of collective experience and over $1.08 billion in assets under management. CRPC-credentialed founder Darsh Makim leads every client relationship. <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Schedule a complimentary consultation</a>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            Talk to a named ERISA fiduciary about your plan&apos;s share class positioning. <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Schedule your consultation</a>.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
