import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "ERISA Compliance Support | PointOak Retirement Advisors",
  description: "PointOak delivers ERISA compliance support with named fiduciary oversight, fee benchmarking, and governance documentation for plan sponsors. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/fiduciary-support/erisa-compliance/"
  }
};

const highlights = [
  "Named 3(21) and 3(38) ERISA fiduciary",
  "450+ data points reviewed per plan bidder",
  "Fee-only fiduciary since 2017"
];

const processSteps = [
  {
    number: 1,
    title: "Review Your Plan Documents and Compliance Procedures",
    description: "We review your plan documents, governance records, and compliance procedures against ERISA requirements and IRS qualification rules."
  },
  {
    number: 2,
    title: "Identify Governance Gaps and Fiduciary Exposure",
    description: "You receive a clear report mapping covered areas, retained plan administrator duties, and gaps creating exposure."
  },
  {
    number: 3,
    title: "Develop Targeted Remediation and Governance Recommendations",
    description: "We recommend corrections and benchmarking actions prioritized by risk, including voluntary compliance programs where applicable."
  },
  {
    number: 4,
    title: "Implement Changes With Ongoing Monitoring",
    description: "Your committee receives fiduciary support training, documentation, and recurring reviews to prevent missed deadlines."
  }
];

const faqs = [
  {
    question: "How much does ERISA compliance support cost?",
    answer: "PointOak's fee-only model means no commissions or hidden revenue-sharing. Pricing varies based on the number of plans, total assets, governance scope, and whether the engagement includes named fiduciary services under the Employee Retirement Income Security Act of 1974. Most plan sponsors find that independent compliance support costs less than a single DOL correction or fee-litigation settlement. PointOak provides a transparent fee proposal after the initial plan review, covering all benefit plans in scope."
  },
  {
    question: "What is the difference between a compliance advisor and a bundled vendor's compliance support?",
    answer: "Bundled vendors handle recordkeeping but typically do not accept fiduciary responsibility for governance. An independent advisor benchmarks fees, documents committee decisions, and accepts named fiduciary duties. ERISA is a federal law that sets minimum standards for pension plans and other employee benefit plans, and independent advisors help sponsors meet those standards."
  },
  {
    question: "Is ERISA compliance support a one-time project or an ongoing process?",
    answer: "The DOL requires ongoing provider monitoring, periodic fee disclosure, and annual reporting. PointOak's engagement includes recurring governance reviews tied to your plan year cycle, not just initial remediation. Each review updates your plan description SPD compliance, investment menu analysis, and documentation so your fiduciary file stays current."
  },
  {
    question: "Who is responsible for ERISA compliance in a 401(k) plan?",
    answer: "Even when tasks are delegated to a recordkeeper or TPA, the sponsor retains the duty to monitor those providers and verify fee reasonableness. Hiring outside help does not eliminate oversight obligations. The Employee Benefits Security Administration within the Department of Labor enforces these requirements and can review any plan sponsor's governance practices."
  },
  {
    question: "Can ERISA compliance be outsourced?",
    answer: "A named 3(21) or 3(38) fiduciary can accept defined responsibilities under the act. The sponsor still must prudently select and monitor those providers. Most plan sponsors already use outsourced fiduciary oversight for coverage of key governance functions. PointOak documents what transfers and what stays, creating clear accountability under the Internal Revenue Code."
  },
  {
    question: "What does ERISA compliance support typically include?",
    answer: "Typical services include Form 5500 coordination, investment menu monitoring, fee benchmarking, plan document and summary plan description review, correction support, and committee facilitation. Scope varies by plan size and complexity. Any material modification triggers updated disclosure, and wrap documents consolidate multiple welfare benefit plans into a single plan description for ERISA reporting."
  },
  {
    question: "Do recordkeepers or TPAs handle all ERISA compliance?",
    answer: "A recordkeeper manages transactions, statements, and reporting. That is not the same as overseeing the plan's investment menu, benchmarking fees, documenting governance decisions, or ensuring correction procedures are in place. Those fiduciary duties require separate oversight, and sponsors who assume their vendor handles everything expose themselves and their beneficiaries to unmanaged risk."
  },
  {
    question: "Why is ERISA compliance support more than just Form 5500 filing?",
    answer: "Plan sponsors owe ongoing provider monitoring, periodic fee disclosure to participants, investment menu oversight, and documented committee governance. The Employee Retirement Income Security Act sets standards for plan administration that extend across every quarter, not just filing season. Treating compliance as a filing exercise leaves the rest of the obligation unmanaged."
  },
  {
    question: "How should a plan sponsor evaluate an ERISA compliance support provider?",
    answer: "Ask whether the provider will accept named fiduciary status, how often governance reviews occur, whether fee benchmarking uses open-market data, and how errors are corrected. Some sponsors seek legal counsel for specific dispute resolution, a separate function from ongoing compliance. PointOak provides a documented responsibility matrix and quarterly or semi-annual governance reviews."
  },
  {
    question: "Can retirement-plan errors be self-corrected?",
    answer: "The IRS allows self-correction for eligible operational failures when the plan sponsor has established compliance procedures in place. A plan document alone does not qualify. Document failures typically require formal correction through VFCP or VCP. EBSA's Self Correction Component received 176 applications in FY 2025, confirming sponsors actively use these pathways."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERISA Compliance Support",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "ERISA Compliance Advisory",
  areaServed: { "@type": "Country", name: "United States" }
};

export default function ERISACompliancePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Fiduciary Support", href: "/corporate-retirement-plans/fiduciary-support" },
          { label: "ERISA Compliance" }
        ]}
        title="ERISA Compliance Support for Retirement Plan Sponsors"
        subtitle="Plan sponsors retain fiduciary responsibilities no recordkeeper covers. The DOL's Employee Benefits Security Administration oversees roughly 801,000 private industry retirement plans covering about 156 million participants and families. PointOak Retirement Advisors delivers ERISA compliance support with named fiduciary oversight and governance documentation through our retirement plan consulting services."
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

      {/* Benefits */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of ERISA Compliance Support
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Reduced Fiduciary Liability Exposure</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                EBSA restored nearly $1.4 billion to retirement plans in FY 2025 and referred 75 cases for litigation (<a href="https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/fact-sheets/ebsa-monetary-results" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">EBSA monetary results</a>). Documented <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:text-navy underline">fiduciary support</Link> proves your committee acted in plan participants' best interests. That record positions plan fiduciaries favorably when the DOL or litigants raise questions.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Earlier Error Detection Before Enforcement Escalates</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                IRS guidance allows self-correction of operational failures, but only when established compliance procedures are in place. A plan document does not satisfy that standard. Ongoing monitoring catches issues while voluntary correction paths remain, helping you avoid costly penalties and minimize risk before compliance deadlines pass.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">A Documented Governance Process for Your Committee</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The DOL requires fiduciaries to prudently select and monitor service providers. Hiring a recordkeeper does not eliminate that duty. Structured committee support, meeting minutes, and documented plan administrator decisions create the audit trail satisfying ERISA's prudence standard and ensure compliance with ongoing oversight.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Defined Responsibility Boundaries Between Sponsor and Providers</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Most employee benefit plans involve multiple service providers, and fiduciary duties do not transfer automatically between them. PointOak maps what stays with the sponsor, what gets delegated, and what falls through the gap. Clear responsibility boundaries prevent assumptions that leave critical oversight tasks unassigned.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Independent Fee Analysis That Protects Plan Participants</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Seventy-four percent of DC plan sponsors said reviewing plan fees was their top focus in 2024. Independent <Link href="/corporate-retirement-plans/provider-fee-benchmarking" className="text-medium-blue hover:text-navy underline">provider and fee benchmarking</Link> uses open-market data rather than vendor self-reporting to satisfy ERISA's fee-reasonableness standard. That analysis protects plan assets and fiduciaries responsible for them.
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
            How ERISA Compliance Support Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              ERISA compliance support operates as a continuous monitoring and governance system, not periodic filing assistance. Three operational layers drive it: fiduciary monitoring, document and procedure governance, and correction with ongoing support. Under IRS rules, self-correction requires established compliance procedures beyond a written plan document and summary plan description.
            </p>
            <p>
              The DOL requires participant-level disclosure before first investment direction, annually, and with actual fee data at least quarterly for participant-directed plans (<a href="https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/publications/meeting-your-fiduciary-responsibilities" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">DOL fiduciary guidance</a>). That cadence makes compliance support an ongoing operational function. Each cycle involves <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:text-navy underline">investment analysis</Link>, fee review, and governance documentation tied to current ERISA regulations and Department of Labor requirements.
            </p>
          </div>
          <div className="mt-8">
            <Link 
              href="/contact"
              className="inline-block bg-medium-blue hover:bg-navy text-white font-outfit font-medium px-8 py-3 rounded transition-colors"
            >
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs This */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs ERISA Compliance Support
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Not every plan sponsor needs the same level of outside support. These scenarios signal when independent compliance oversight adds value.
          </p>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Plan Sponsors Relying on Recordkeepers for Fiduciary Monitoring</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your recordkeeper handles transactions, not fiduciary monitoring. Private employers and private sector employers in this position carry unmanaged risk when assuming bundled vendors cover all ERISA compliance.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">HR Leaders Preparing for a DOL Review or IRS Audit</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Internal documentation is incomplete or procedures are not formalized. A DOL review requires evidence of a functioning governance process across the full plan year with organized records and documented decisions.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fiduciary Committees Without Formal Governance Documentation</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                No committee charter, documented selection process, or structured minutes means IRS self-correction eligibility is at risk. <Link href="/corporate-retirement-plans/participant-education" className="text-medium-blue hover:text-navy underline">Education and communications programs</Link> for committee members build the procedures required for voluntary correction.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Organizations That Have Not Benchmarked Plan Fees Recently</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                ERISA's fee-reasonableness standard requires periodic benchmarking. If your last independent review was two or more years ago, exposure exists. Employers owe employees a retirement plan priced at reasonable levels, and regulators expect the data to prove it.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Sponsors Managing Plans Under Expanding ERISA Requirements</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                DOL's cybersecurity guidance and ongoing SECURE 2.0 implementation widen what compliance covers for clients across industries. Internal teams may lack bandwidth to track regulatory changes, updated <Link href="/corporate-retirement-plans/plan-design" className="text-medium-blue hover:text-navy underline">plan design</Link> requirements, and new disclosure obligations simultaneously.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-cloud-blue rounded-lg">
            <p className="text-text-gray font-outfit text-base leading-relaxed">
              <strong className="text-navy">When an alternative is better:</strong> If you operate only a SEP-IRA or SIMPLE IRA without ERISA obligations or need one-time legal representation for a specific dispute, a specialized ERISA attorney may be a better fit.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Comparison Table */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            ERISA Compliance Support vs. Bundled Vendor Administration
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Both models can serve plan sponsors, but the right choice depends on plan complexity, who controls plan assets, and how fiduciary monitoring responsibilities are handled.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Bundled Vendor Administration</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Independent Compliance Advisory</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Independence from plan providers</td>
                  <td className="px-4 py-3 text-gray-700">Tied to parent vendor's products and economics</td>
                  <td className="px-4 py-3 text-gray-700">No vendor affiliation; benchmarks across all providers</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fee benchmarking</td>
                  <td className="px-4 py-3 text-gray-700">Self-reported or limited to own marketplace</td>
                  <td className="px-4 py-3 text-gray-700">Open-market analysis using actual plan data</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Ongoing governance cadence</td>
                  <td className="px-4 py-3 text-gray-700">Typically annual review around Form 5500</td>
                  <td className="px-4 py-3 text-gray-700">Quarterly or semi-annual governance with committee support</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Responsibility mapping</td>
                  <td className="px-4 py-3 text-gray-700">Often unclear what remains the sponsor's duty</td>
                  <td className="px-4 py-3 text-gray-700">Documented delegation vs. retained duties for plan fiduciaries</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Correction and remediation</td>
                  <td className="px-4 py-3 text-gray-700">May flag issues but limited correction guidance</td>
                  <td className="px-4 py-3 text-gray-700">Coordinates VFCP, SCC, and IRS self-correction pathways</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Bundled administration can work when plans are straightforward and your internal team has governance experience. When complexity grows, committees rotate, or benchmarking has not been independently verified, advisory <Link href="/corporate-retirement-plans/provider-fee-benchmarking" className="text-medium-blue hover:text-navy underline">provider and fee benchmarking</Link> and fiduciary oversight help sponsors comply with ERISA's monitoring standard.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our ERISA Compliance Support Process
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
            Why Choose PointOak for ERISA Compliance Support
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              The DOL received 797 Voluntary Fiduciary Correction Program applications in FY 2025 (<a href="https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/fact-sheets/ebsa-monetary-results" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">EBSA enforcement and correction data</a>). That volume confirms plan errors are common and enforcement is active. PointOak helps sponsors identify issues before formal correction is required and coordinates the pathway through VFCP, SCC, or IRS self-correction when it is.
            </p>
            <p>
              Plan sponsors often assume their recordkeeper handles compliance, but TPAs do not absorb fiduciary monitoring duties under labor law. PointOak serves as a named fiduciary under ERISA, accepting defined responsibilities documented in writing. See how that structure works through <Link href="/about/our-team" className="text-medium-blue hover:text-navy underline">our consulting team</Link> and <Link href="/about" className="text-medium-blue hover:text-navy underline">about PointOak</Link>.
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
            PointOak Retirement Advisors is an SEC-registered, fee-only investment advisory firm founded in 2017 and headquartered in McLean, Virginia. We provide corporate retirement plan consulting and wealth management nationwide with over $1.08 billion in assets under management. Our team brings 50+ years of collective experience, and Darsh Makim's practice dates to 2005. Named 3(21) and 3(38) ERISA fiduciary. <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule a consultation</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed text-center">
            <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule your consultation</Link> to discuss your plan's ERISA compliance and fiduciary governance.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
