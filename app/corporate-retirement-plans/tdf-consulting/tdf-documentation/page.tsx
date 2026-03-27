import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "TDF Fiduciary Documentation | PointOak Retirement Advisors",
  description: "PointOak's multi-step TDF review ties participant data, glide path, and fees to committee-ready fiduciary documentation. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/tdf-consulting/tdf-documentation/"
  }
};

const highlights = [
  "Named 3(21) and 3(38) ERISA fiduciary",
  "Fee-only with zero product conflicts",
  "Multi-step DOL-aligned TDF review"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze Your Current TDF Lineup and Participant Data",
    description: "You provide plan specific data and fund details. PointOak evaluates plan fees, glidepath, and alignment against the plan's objectives."
  },
  {
    number: 2,
    title: "Benchmark Against Vintage Peers and DOL Factors",
    description: "Your TDF series is compared to vintage peers on risk posture, asset allocation, and expenses across retirement years."
  },
  {
    number: 3,
    title: "Document Committee Rationale and Recommendations",
    description: "PointOak's target-date fund consulting process produces committee-ready reports, rationale documentation, and IPS-aligned artifacts to monitor funds."
  },
  {
    number: 4,
    title: "Establish Monitoring Cadence and Replacement Triggers",
    description: "You receive a defined review schedule with documented criteria for when a target date change or replacement is warranted."
  }
];

const faqs = [
  {
    question: "What does TDF fiduciary documentation support cost?",
    answer: "PointOak's fee-only consulting model means no commissions or hidden product costs influence TDF documentation. Fees are structured based on engagement scope and plan complexity. The initial consultation is complimentary and carries no obligation. PointOak does not earn commissions from fund companies or recordkeepers, so documentation recommendations are independent of any product revenue."
  },
  {
    question: "What is the difference between a TDF analysis and fiduciary documentation?",
    answer: "An analysis compares funds; fiduciary documentation records the committee's deliberative process and rationale. Analysis reports compare performance, fees, and risk posture across TDF series. Fiduciary documentation goes further: it captures participant-fit rationale, committee deliberations, IPS alignment, and monitoring triggers into a defensible record. PointOak's process produces both the analysis and the service plan documentation artifacts."
  },
  {
    question: "How often should a plan committee review its target-date fund lineup?",
    answer: "Committees should review target date fund lineups at least annually as part of their governance calendar. DOL guidance and industry practice support annual documented reviews. Each review should assess glide path, fees, participant-demographic changes, and underlying fund composition. PointOak builds a monitoring cadence with defined replacement triggers so committees know when action is warranted, not just when a calendar date arrives."
  },
  {
    question: "What should fiduciaries document when selecting a target-date fund?",
    answer: "Document the objective process, criteria applied, participant-fit factors, and committee rationale. DOL guidance specifies fiduciaries should document performance comparisons, fee analysis, glide-path evaluation, and how participant characteristics influenced the selection. PointOak structures these elements into committee-ready artifacts that satisfy regulatory expectations and build a defensible governance record."
  },
  {
    question: "What participant data should be used in a TDF review?",
    answer: "Ages, retirement dates, salary levels, contribution rates, employee turnover, and withdrawal patterns. DOL specifies these participant characteristics as factors fiduciaries should consider when evaluating whether a TDF's assumptions align with the plan's population. Generic TDF reviews often skip this step entirely. PointOak uses plan-specific demographic data, providing actual savings rates and contribution patterns, to assess fit rather than relying on national averages."
  },
  {
    question: "Are target-date funds prudent as a QDIA?",
    answer: "TDFs are the dominant QDIA choice, but prudence depends on a documented selection and monitoring process. The DOL's 2007 QDIA final rule established safe harbor relief for fiduciaries using target date funds as a qualified default, making them the default vehicle for retirement plan investors in most plans. Prudence is not conferred by the designation itself; it requires an objective process demonstrating the committee evaluated and monitored the selection."
  },
  {
    question: "Do low fees alone make a target-date fund prudent?",
    answer: "No; DOL guidance requires evaluation of glide path, underlying holdings, and participant fit beyond fees. Expense ratios are one factor, but DOL fiduciary guidance lists performance, glide-path design, underlying fund composition, and participant demographics as additional evaluation criteria. A committee that documents only a fee comparison leaves required factors unaddressed and creates a gap that litigation can target."
  },
  {
    question: "Why do CIT target-date funds require extra documentation attention?",
    answer: "CITs lack standard mutual-fund prospectus disclosures, so committees must document alternative data sources. A federal review found existing guidance has not been updated to address collective investment trust structures. CITs now hold over half of target date assets. Committees using CIT-based TDFs should document how they obtained and evaluated disclosure information that mutual-fund participants receive through standard prospectus requirements."
  },
  {
    question: "What should an advisor provide to support TDF fiduciary documentation?",
    answer: "Committee-ready reports, rationale logs, monitoring triggers, and IPS-aligned review artifacts. An advisor supporting TDF documentation should deliver analysis reports the client plan committee can file directly, written rationale for selection and monitoring decisions, a defined review cadence, and criteria for replacement evaluation. PointOak's process maps these deliverables to IPS language so the governance record stays connected to the committee's stated oversight framework."
  },
  {
    question: "When should a committee consider replacing a target-date fund series?",
    answer: "When documented monitoring reveals persistent misalignment with participant demographics, fees, or IPS standards. Replacement triggers include sustained underperformance versus vintage peers, fee drift, glide-path changes that no longer match participant profiles, or failure to meet IPS criteria. Delayed suitability analysis has been a focal point in recent fiduciary litigation. PointOak establishes documented triggers upfront so committees act on evidence, not reaction."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "TDF Fiduciary Documentation",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Target Date Fund Documentation",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function TDFDocumentationPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "TDF Consulting", href: "/corporate-retirement-plans/tdf-consulting" },
          { label: "TDF Documentation" }
        ]}
        title="TDF Fiduciary Documentation: A Committee-Ready Review Process"
        subtitle="Plan sponsors that selected a target date fund lineup without documenting the rationale face growing regulatory scrutiny. At year-end 2024, 98% of QDIA-designated plans used target date funds (PSCA). PointOak's target-date fund consulting delivers the TDF fiduciary documentation ERISA plan fiduciaries across defined contribution plans need."
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
            Benefits of TDF Fiduciary Documentation
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Defensible Fiduciary Record</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Choosing a recognizable fund family or low-fee series does not satisfy <a href="https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/fact-sheets/target-date-retirement-funds-tips-for-erisa-plan-fiduciaries" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">DOL&apos;s fiduciary tips for target-date fund oversight</a>. The standard requires an objective process evaluating fund performance, the fund&apos;s fees, and glide-path composition to produce a defensible fiduciary record. PointOak&apos;s <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:underline">fiduciary support</Link> builds that record.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Participant-Fit Precision</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Documentation must show that the plan&apos;s participant profile fits the fund&apos;s assumptions about retirement dates, salary levels, and contribution behavior. Individual level participant data converts a generic comparison into evidence that the plan&apos;s TDFs align with plan participants.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">CIT-Era Disclosure Clarity</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                CITs held 50.5% of target date assets by June 2024 (PSCA citing Morningstar), yet regulatory disclosure requirements for CITs differ from mutual-fund standards. Documentation must show how the committee evaluated the fund&apos;s fees, component funds, and performance when standard prospectus disclosures do not apply.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Reduced Litigation Exposure</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Recent fiduciary lawsuits have targeted IPS failures, delayed suitability analyses, and absent TDF evaluation criteria. Each allegation traces to a documentation gap. A defensible fiduciary process capturing the fund&apos;s investments, fees, and whether the particular TDF risk posture fits participant demographics addresses these claims at their origin.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">IPS-Aligned Governance Framework</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The review maps to Investment Policy Statement language and the committee&apos;s governance calendar, keeping documentation connected to fiduciary obligations. PointOak&apos;s <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:underline">investment analysis</Link> evaluates asset allocation, glide-path design, and component funds held within the IPS framework rather than as a standalone report.
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
            How TDF Fiduciary Documentation Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              A rigorous TDF review evaluates glidepath risk against plan specific data: participant ages, target retirement dates, salary levels, and contribution rates. The process scores fund performance across asset classes, analyzes underlying fund scores against vintage and peer averages, and maps fees to <Link href="/corporate-retirement-plans/provider-and-fee-benchmarking" className="text-medium-blue hover:underline">provider and fee benchmarking</Link> standards. Each output is investment policy documentation designed to present data objectively.
            </p>
            <p>
              Participant-level data changes every output. A target date fund that fits one plan population may carry misfit risk for another because age distributions, turnover rates, and account balances shift the glidepath assumptions. The TDF analysis process functions as a fiduciary documentation tool: each input produces a more precise fit analysis connecting the fund&apos;s risk posture to this plan&apos;s participants.
            </p>
          </div>
          <div className="mt-8 bg-navy text-white rounded-lg p-6 md:p-8">
            <p className="font-outfit text-base leading-relaxed">
              <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-warm-gold hover:underline font-semibold">Schedule a consultation</a> to discuss your committee&apos;s TDF documentation and review process.
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
            Who Needs TDF Fiduciary Documentation
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Not every plan committee needs outside documentation support. These scenarios signal when it matters.
          </p>
          <div className="space-y-8">
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Committee Selected the TDF Lineup Years Ago With No Documented Review Since</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                No meeting minutes, no benchmarking artifacts, no participant-fit analysis on file. When a plan fiduciary&apos;s decisions lack documentation, the defense depends on memory that regulators and courts reject.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Plan Auto-Enrolls Participants Into a TDF as the QDIA</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                In 2024, 59% of retirement plan participants were in a single TDF (Vanguard). When one fund is the popular retirement plan option, concentrated exposure makes documentation proportional to that default.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Lineup Includes CIT-Based Target-Date Funds</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                CIT disclosure and benchmarking differ from mutual-fund standards, and Department of Labor guidance has not been updated for collective investment trust structures. Committees must document how they sourced the data mutual-fund participants receive automatically.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Committee Is Concerned About Fiduciary Litigation Exposure</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Fiduciary litigation targets IPS gaps and delayed suitability analyses around TDFs. If your committee cannot produce documentation showing its TDF evaluation and monitoring rationale, that gap grows with each undocumented year.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Plan Is Transitioning Recordkeepers or Advisors</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Transitions trigger a re-evaluation window where documenting the new TDF selection is a fiduciary obligation. Salary data, account balances, and retirement dates should feed the analysis supporting the committee&apos;s decision.
              </p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 md:p-8">
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If your plan does not offer TDFs or uses a managed-account QDIA with separate documentation, this service may not apply. PointOak&apos;s <Link href="/corporate-retirement-plans" className="text-medium-blue hover:underline">retirement plan consulting services</Link> can help assess the right approach.
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
            TDF Fiduciary Documentation vs. Fee-and-Performance-Only Review
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            A target date fund analyzer can generate client ready reports comparing fees and returns. The question is whether those reports produce a defensible committee record.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Evaluation Factor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Full Fiduciary Documentation</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Fee-and-Performance-Only Review</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Scope</td>
                  <td className="px-4 py-3 text-gray-700">5+ dimensions: glide path, holdings, fees, demographics, disclosures</td>
                  <td className="px-4 py-3 text-gray-700">Expense ratios and trailing returns</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Participant-data inputs</td>
                  <td className="px-4 py-3 text-gray-700">Plan-specific ages, salary, contribution rates, retirement dates</td>
                  <td className="px-4 py-3 text-gray-700">No participant data (zero demographic inputs)</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Risk posture analysis</td>
                  <td className="px-4 py-3 text-gray-700">Assesses TDF risk posture fits against participant demographics</td>
                  <td className="px-4 py-3 text-gray-700">Not evaluated</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Documentation output</td>
                  <td className="px-4 py-3 text-gray-700">Committee-ready reports, rationale logs, monitoring cadence</td>
                  <td className="px-4 py-3 text-gray-700">Fund comparison spreadsheet</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">IPS alignment</td>
                  <td className="px-4 py-3 text-gray-700">Maps review to IPS language and committee calendar</td>
                  <td className="px-4 py-3 text-gray-700">Independent of IPS</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Vehicle awareness</td>
                  <td className="px-4 py-3 text-gray-700">Accounts for CIT disclosure and benchmarking differences</td>
                  <td className="px-4 py-3 text-gray-700">Applies mutual-fund framework to all vehicles</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Defensibility standard</td>
                  <td className="px-4 py-3 text-gray-700">Verifies fund&apos;s characteristics align with all DOL factors</td>
                  <td className="px-4 py-3 text-gray-700">Addresses fees and performance only</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            In a 2025 lawsuit, plaintiffs alleged 73% of participant retirement savings remained in imprudent TDFs due to process defects (PSCA). Fee screening filters candidates, but when a committee defends its QDIA, supporting fiduciary documentation within a prudent review ecosystem determines the outcome. PointOak&apos;s <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:underline">named fiduciary services</Link> build that record.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our TDF Review Process
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
            Why Choose PointOak for TDF Fiduciary Documentation
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              In 2024, 84% of actual participants used TDFs (PSCA). When one option holds that share of a plan&apos;s assets, documentation determines defensible governance or exposure. PointOak&apos;s retirement planning practice, shaped by <Link href="/about" className="text-medium-blue hover:underline">our approach</Link> to Department of Labor fiduciary standards, means we share fiduciary obligations as a named 3(21) and 3(38) fiduciary rather than advise from the sideline.
            </p>
            <p>
              Committees with an existing recordkeeper reviewing TDFs still face a gap: that evaluation may favor the recordkeeper&apos;s own shelf. PointOak&apos;s fee-only independence means documentation reflects objective analysis, not platform loyalty. <Link href="/our-consulting-team" className="text-medium-blue hover:underline">Our consulting team</Link> evaluates the full marketplace so recommendations serve the plan&apos;s participants.
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
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. As an SEC-registered investment advisor and fiduciary since inception, our team manages over $1.08 billion in assets under management with over 50 years of collective experience. Founder Darsh Makim, CRPC, has worked with plan sponsors and participants since 2005. <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Schedule a consultation</a>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Schedule your consultation</a> to review your committee&apos;s TDF documentation and fiduciary process.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
