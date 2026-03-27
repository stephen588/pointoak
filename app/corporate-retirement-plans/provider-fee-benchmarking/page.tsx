import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { DollarSign, FileText, Target, TrendingUp, Shield, CheckCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Fee Benchmarking Services | PointOak Retirement Advisors",
  description: "Compare total 401(k) plan costs, evaluate recordkeepers, and determine when an RFP is warranted. PointOak reviews 450+ data points per bidder as a named ERISA fiduciary.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/provider-fee-benchmarking/"
  }
};

const highlights = [
  "450+ data points reviewed per plan bidder",
  "Named 3(21) and 3(38) ERISA fiduciary",
  "Fee-only since 2017, no recordkeeper affiliations"
];

const benefitsData = [
  {
    title: "Documented Fiduciary Prudence",
    description: "ERISA makes fee oversight a core fiduciary responsibility for plan fiduciaries. A structured benchmark, coordinated with your fiduciary support framework, creates the written record of a prudent process. Industry best practice recommends reviewing investment expenses and recordkeeping fees every one to three years, with a formal provider search every five to seven.",
    icon: Shield
  },
  {
    title: "Visibility Into Total Plan Cost",
    description: "Most investment committees review expense ratios and administrative fees but overlook indirect compensation channels embedded in revenue-sharing arrangements. A 2025 defined contribution industry survey found that 52% of plan sponsors evaluated float income within the last year, while 18% had never evaluated it. Those hidden plan costs reduce participant account balances without appearing on any statement.",
    icon: DollarSign
  },
  {
    title: "Stronger Negotiation Leverage",
    description: "Market data from a structured plan benchmarking process gives your committee specific numbers to bring to the table. Recordkeepers respond differently when they know fees have been tested against actual competitor pricing. Industry experience confirms that benchmarking results strengthen a committee's position in fee negotiations by removing guesswork from the conversation.",
    icon: Target
  },
  {
    title: "Better Participant Outcomes",
    description: "Lower investment fees mean more dollars stay invested for plan participants across their careers. Every basis point recovered through benchmarking compounds into retirement savings rather than subsidizing provider revenue sharing arrangements. Rigorous investment analysis keeps the fund lineup aligned with participant needs.",
    icon: TrendingUp
  },
  {
    title: "Clear Escalation Path from Benchmark to RFP",
    description: "A benchmark that ends with a fee comparison misses the point. The real output is a decision framework: renegotiate existing terms, re-paper the service agreement, or launch a competitive RFP. This escalation path is the gap most benchmarking reports leave unaddressed.",
    icon: CheckCircle
  }
];

const needsBenchmarkingData = [
  {
    title: "Your Plan Hasn't Been Market-Tested in Three or More Years",
    description: "No RFI or RFP has been run since the current provider arrangement began. Pricing, platform capabilities, and service models shift within that window. Three years without a market test is the limit most plan fiduciaries can defend."
  },
  {
    title: "Your Committee Questions Whether Current Fees Are Reasonable",
    description: "Committee members are asking whether participant-paid charges, admin fees, or advisor fees align with plan size and complexity. If no one can point to a recent benchmark, the question itself is the answer."
  },
  {
    title: "Your Recordkeeper Changed Ownership or Service Structure",
    description: "Mergers, platform migrations, or team turnover at the recordkeeper can alter service delivery without committee approval. The 401(k) plan your providers agreed to support may differ materially from the plan they are now servicing."
  },
  {
    title: "You're Preparing for a Fiduciary Audit or Committee Transition",
    description: "New committee members need a documented baseline. Department of Labor reviews require evidence of a prudent fee-evaluation process. A current benchmark satisfies both and identifies gaps in plan documents before they become audit findings."
  },
  {
    title: "Your Plan Has Outgrown Its Original Design",
    description: "Growing plan assets, higher participant counts, or workforce changes may mean the original plan design and pricing no longer fit. Providers tier their pricing by plan size, and growth alone can make an existing arrangement uncompetitive."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Analyze Your Current Plan",
    description: "We review your current fee structure, investment lineup, service arrangements, and provider agreements against plan documents."
  },
  {
    number: 2,
    title: "Benchmark Against the Market",
    description: "We evaluate your plan's costs against market data through our provider and fee benchmarking methodology."
  },
  {
    number: 3,
    title: "Deliver Recommendations",
    description: "You receive committee-ready findings with action items: renegotiate terms, re-paper services, or proceed to RFP."
  },
  {
    number: 4,
    title: "Implement and Monitor",
    description: "We execute agreed changes and establish an ongoing benchmarking cadence for fiduciary documentation."
  }
];

const faqs = [
  {
    question: "How much does 401(k) fee benchmarking cost?",
    answer: "Cost depends on plan size, asset level, and whether the engagement includes full RFP support. PointOak structures benchmarking as a fee-only consulting engagement with no hidden provider referral fees or commissions. The fee depends on total plan assets, participant count, number of providers evaluated, and whether the engagement extends into RFP management. Some advisory services charge asset-based fees tied to plan size, which can misalign incentives as assets grow. PointOak's cost reflects the scope of work performed. Your initial consultation is complimentary and covers enough ground to define engagement scope and provide a clear fee estimate."
  },
  {
    question: "What's the difference between fee benchmarking and a full retirement plan RFP?",
    answer: "Benchmarking tests current pricing against the market; an RFP invites competitive bids for the entire provider relationship. A fee benchmark evaluates whether current costs are reasonable relative to comparable plans without necessarily changing providers. An RFP opens the relationship to competing recordkeepers, evaluating pricing, service models, platforms, and participant experience together. Most committees benchmark every one to three years and conduct a formal search every five to seven, using the benchmark to evaluate whether escalation is warranted."
  },
  {
    question: "How often should a 401(k) plan be benchmarked?",
    answer: "Recordkeeping fees should be benchmarked every one to three years, with a formal provider search every five to seven. SGR Law recommends annual fee benchmarking combined with a periodic RFI or RFP cycle. PointOak helps committees establish a documented cadence aligned with plan size and complexity so that each cycle produces a defensible fiduciary record. The right interval depends on prior findings, provider landscape shifts, and how recently the plan underwent structural changes."
  },
  {
    question: "What fees should be included in a 401(k) cost analysis?",
    answer: "A complete analysis covers investment product fees, recordkeeping charges, transaction fees, and all indirect compensation. The DOL's fee disclosure categories include investment product fees, plan administration expenses, start-up and conversion charges, and termination fees. A thorough cost analysis also captures indirect compensation: revenue sharing, sub-transfer agency fees, float income, and brokerage window or IRA rollover revenue the provider collects. Missing any category creates a gap that litigation counsel and DOL examiners specifically target during enforcement actions."
  },
  {
    question: "How do you evaluate a 401(k) recordkeeper beyond price?",
    answer: "Recordkeeper evaluation should assess service model, platform architecture, compliance support, and participant experience alongside pricing. A complete recordkeeper evaluation examines escalation responsiveness, payroll integration capabilities, participant education resources, compliance support, platform flexibility for plan design changes, and transparency around indirect compensation. Pricing matters, but a low-cost recordkeeper with poor service delivery or rigid platform limitations creates problems that outweigh fee savings. PointOak scores each dimension against plan-specific priorities rather than applying a single ranking model."
  },
  {
    question: "What is a reasonable recordkeeping fee for a 401(k) plan?",
    answer: "Reasonable depends on plan size, participant count, service scope, and plan complexity rather than a single number. Per-participant recordkeeping costs vary significantly based on plan assets, average account balance, number of participants, and the services included. Small businesses with fewer participants often face different pricing structures than larger plans, making direct comparisons misleading without controlling for scope. PointOak benchmarks recordkeeping fees using actual plan data from comparable plans, controlling for size, complexity, and service model to determine what reasonable means for your profile."
  },
  {
    question: "What should a retirement plan committee document during benchmarking?",
    answer: "Document the benchmark cadence, fee categories reviewed, comparison methodology, findings, and the committee's decision rationale. A defensible record includes dates and scope of each review, fee categories and providers evaluated, data sources and comparison methodology, findings with identified gaps, and the committee's rationale for each decision. That rationale should cover whether the committee chose to renegotiate, maintain the current arrangement, or escalate to an RFP. This documentation supports an ERISA prudent-process defense if the Department of Labor audits the plan or participants file litigation."
  },
  {
    question: "What are the warning signs that your current recordkeeper is no longer a fit?",
    answer: "Escalation difficulties, stale pricing, platform limitations, and poor participant experience are the clearest signals. Red flags include difficulty reaching a named service contact, unclear division of fiduciary responsibility between the recordkeeper and your advisor, pricing untested against the market for three-plus years, platform restrictions affecting investment flexibility or plan design options, and poor participant experience with enrollment, contributions, or distributions. PointOak's benchmarking identifies these signals before they escalate into compliance findings or participant complaints."
  },
  {
    question: "Why aren't expense ratios enough to judge total 401(k) cost?",
    answer: "Expense ratios capture fund-level costs but exclude recordkeeping, transaction fees, indirect compensation, and float income. Fund expense ratios represent one layer of total plan cost. They exclude administrative fees, transaction charges, revenue sharing payments to recordkeepers, sub-transfer agency fees, float income, and termination fees. Research shows a meaningful spread between the lowest and highest-cost fund options within the same asset class in retirement savings plans. Benchmarking evaluates all cost layers together, producing the complete picture that expense ratios alone cannot provide."
  },
  {
    question: "What is indirect compensation in a 401(k) plan?",
    answer: "Indirect compensation includes revenue sharing, sub-transfer agency fees, float income, and other payments beyond direct plan fees. Providers collect indirect compensation through several channels: revenue sharing from fund companies, sub-transfer agency fees for participant recordkeeping, float income earned on plan assets during processing windows, brokerage window revenue, and IRA rollover revenue from departing participants. Research indicates that more than half of plan sponsors have never evaluated some of these categories. Quantifying each channel is essential to assessing total provider compensation accurately."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Fee Benchmarking and Recordkeeper Evaluation",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Fee Benchmarking",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function ProviderFeeBenchmarkingPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Provider & Fee Benchmarking" }
        ]}
        title="401(k) Fee Benchmarking and Recordkeeper Evaluation"
        subtitle="Checking plan fees against a survey average is not 401(k) fee benchmarking. About 7 in 10 plan sponsors track recordkeeping fees annually (2025 industry survey), yet most never evaluate indirect compensation. PointOak Retirement Advisors reviews total plan cost, recordkeeper service, and the benchmark-to-RFP decision your committee needs documented."
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

      {/* Benefits of 401(k) Fee Benchmarking */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of 401(k) Fee Benchmarking
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

      {/* How 401(k) Fee Benchmarking Works */}
      <AnimateOnScroll>
      <section className="bg-[#F5F3EF] py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How 401(k) Fee Benchmarking Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              A rigorous 401(k) cost analysis evaluates five categories: investment product fees, recordkeeping and administration fees, transaction costs, indirect compensation including revenue sharing, and float income treatment. The <a href="https://www.dol.gov/agencies/ebsa/employers-and-advisers/plan-administration-and-compliance/fiduciary-responsibilities/401k-plan-fee-disclosure-tool" target="_blank" rel="noopener noreferrer" className="text-navy underline hover:text-medium-blue transition-colors">DOL's fee disclosure framework</a> adds start-up, conversion, and termination fees to the scope. Each category requires its own data source and comparison methodology to benchmark fees accurately.
            </p>
            <p>
              ICI and BrightScope data shows the asset-weighted average expense ratio for domestic equity mutual funds in 401(k) plans was 0.36%, compared to 0.06% for index funds. That sixfold spread demonstrates why expense ratios alone are an incomplete proxy for total investment costs. Regular benchmarking captures the full fee picture, including the administrative and indirect costs that fund-level metrics never reflect.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-300">
              <p>
                <Link href="/contact/" className="text-navy underline hover:text-medium-blue transition-colors font-medium">Schedule a consultation</Link> to find out how your plan's fees compare against the current market.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs 401(k) Fee Benchmarking */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs 401(k) Fee Benchmarking
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Not every plan needs a formal benchmark today. These five scenarios signal that your committee should act.
          </p>
          <div className="space-y-6">
            {needsBenchmarkingData.map((item, idx) => (
              <div key={idx} className="bg-cloud-blue rounded-lg p-6 md:p-8 border-l-4 border-navy">
                <h3 className="font-outfit text-navy text-lg md:text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
            <div className="bg-[#F5F3EF] rounded-lg p-6 md:p-8 border-l-4 border-warm-gold">
              <h3 className="font-outfit text-navy text-lg md:text-xl font-semibold mb-3">When Benchmarking Might Not Be the Right Fit</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plans under 12 months old with straightforward investment menus and a recently completed provider selection typically don't need a formal benchmarking engagement yet. Revisit once the plan's first full year of operational data is available.
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
            401(k) Fee Benchmarking vs. Full Retirement Plan RFP
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Both a fee study and a full retirement plan RFP serve fiduciary objectives. The right choice depends on your plan's specific data rather than industry averages, and whether service gaps exist beyond pricing.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Fee Benchmarking</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Full Retirement Plan RFP</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Primary Purpose</td>
                  <td className="px-4 py-3 text-gray-700">Fee and cost validation against market</td>
                  <td className="px-4 py-3 text-gray-700">Full provider evaluation with competitive bids</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Scope</td>
                  <td className="px-4 py-3 text-gray-700">Pricing, fund costs, indirect compensation</td>
                  <td className="px-4 py-3 text-gray-700">Pricing, service model, participant experience, platform architecture</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Typical Cadence</td>
                  <td className="px-4 py-3 text-gray-700">Every 1-3 years (industry best practice)</td>
                  <td className="px-4 py-3 text-gray-700">Every 5-7 years (industry best practice)</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Committee Output</td>
                  <td className="px-4 py-3 text-gray-700">Benchmark report with fee comparisons and action items</td>
                  <td className="px-4 py-3 text-gray-700">Finalist presentations, scoring matrix, transition plan</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">When Sufficient</td>
                  <td className="px-4 py-3 text-gray-700">Fees are the primary concern and services remain acceptable</td>
                  <td className="px-4 py-3 text-gray-700">Service, platform, or provider relationship needs reassessment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm leading-relaxed mt-6 italic">
            Sources: Industry benchmarking standards, SGR Law
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            In one documented case, an RFP produced a $49/participant proposal with expanded service versus the incumbent's $63/participant (SGR Law). An RFP is warranted when the benchmark reveals gaps no revised proposal can resolve.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our 401(k) Fee Benchmarking Process
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
            Why Choose PointOak for 401(k) Fee Benchmarking
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              A 2025 ERISA complaint alleged per-participant costs of $295.10 versus an Encore benchmark average of $41 for comparable plans (PSCA). That gap is what inadequate benchmarking produces. We operate as a named 3(21) or 3(38) fiduciary with a legal obligation to act in your plan's best interest, with no recordkeeper affiliations and no advisor fees tied to provider selection.
            </p>
            <p>
              Plan sponsors sometimes suspect benchmarking is a pretext for a provider switch. Our fee-only model eliminates that conflict: no commissions from recordkeepers, no proprietary funds in our recommendations, no incentive to recommend a change unless actual plan data supports it. Our <Link href="/our-services/" className="text-navy underline hover:text-medium-blue transition-colors">retirement plan consulting services</Link> are structured around this independence.
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
            <Link href="/about/" className="text-navy underline hover:text-medium-blue transition-colors">PointOak Retirement Advisors</Link> is a fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia, providing retirement plan consulting and wealth management for clients nationwide as an SEC-registered investment advisor. Our team brings over 50 years of collective experience and manages over $1.08 billion in assets under management. <Link href="/contact/" className="text-navy underline hover:text-medium-blue transition-colors">Schedule a consultation</Link> to discuss your plan.
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
