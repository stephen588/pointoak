import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Fiduciary Documentation | PointOak Advisors",
  description: "Structured 401(k) fiduciary documentation framework for plan sponsors covering required records, governance files, and fee benchmarking evidence. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/fiduciary-support/virtual-fiduciary-file/"
  }
};

const highlights = [
  "450+ data points reviewed per plan bidder",
  "Named 3(21) and 3(38) ERISA fiduciary",
  "Fee-only, zero commissions or conflicts"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We review your plan documents, governance records, and service provider agreements to map every documentation gap."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We build a structured framework with assigned owners, review cadences, and retention protocols for all services provided to your plan."
  },
  {
    number: 3,
    title: "Implement",
    description: "We activate the framework with ongoing monitoring, meeting support, and documentation updates."
  }
];

const faqs = [
  {
    question: "What does inadequate 401(k) fiduciary documentation cost a plan sponsor?",
    answer: "The IRS expects fiduciaries to document decision rationale at the time investment decisions were made, and the absence of that record weakens every defense in an audit or lawsuit. Beyond regulatory findings, individual committee members can face personal exposure when no governance trail demonstrates a prudent process. PointOak's documentation framework addresses these gaps before they become enforcement actions."
  },
  {
    question: "What is the difference between 3(21) and 3(38) fiduciary support?",
    answer: "Under a 3(21) arrangement, the sponsor documents acceptance or rejection of each recommendation, retaining the documentation burden. A 3(38) investment manager assumes liability for plan investments, shifting investment selection documentation but not all fiduciary responsibilities. PointOak offers both models through our fiduciary support services, with documentation protocols adapted to each."
  },
  {
    question: "How long should 401(k) plan records be kept?",
    answer: "There is no fixed year count. Different record categories including plan documents, trust records, and participant files related to providing benefits may carry different practical retention windows. PointOak builds retention protocols by category into each documentation framework so your team never has to guess which records to keep."
  },
  {
    question: "What documents should be in a 401(k) fiduciary file?",
    answer: "The IRS identifies core categories: the plan document, adoption agreement, amendments, trust and investment records, and participant data covering census information, balances, contributions, loans, and notices. Add governance layers like the committee charter, investment policy statement, fidelity bond records, and summary plan description to form the operational evidence regulators evaluate to confirm a 401(k) plan is compliant."
  },
  {
    question: "How often should a 401(k) committee review and document its decisions?",
    answer: "Regular meeting cadence creates the documented governance trail evidencing ongoing fiduciary attention and informed investment decisions. Annual investment review against the IPS is the minimum standard for evaluating a broad range of investment options. Retain the materials reviewed at each meeting alongside the minutes as ongoing communications of the committee's process."
  },
  {
    question: "What should be included in 401(k) committee meeting minutes?",
    answer: "PointOak supports committee meetings with structured agendas that drive the evidence trail for each action's exclusive purpose. We prepare documentation packages so the fiduciary file captures not just what was decided but why, including business decisions affecting plan participants and the supporting data behind each recommendation."
  },
  {
    question: "What happens if a service provider does not provide required fee disclosures?",
    answer: "DOL fee disclosure requirements require the fiduciary to request missing 408(b)(2) information in writing and notify the Employee Benefits Security Administration within 30 days if the provider fails to comply. The sponsor's written request and EBSA notice are themselves fiduciary documentation. Maintaining evidence of these steps through fee benchmarking records demonstrates the fiduciary acted in the plan's best interest."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Fiduciary Documentation",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Fiduciary Documentation Framework",
  areaServed: { "@type": "Country", name: "United States" }
};

export default function VirtualFiduciaryFilePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Fiduciary Support", href: "/corporate-retirement-plans/fiduciary-support" },
          { label: "Fiduciary Documentation" }
        ]}
        title="401(k) Fiduciary Documentation: A Governance Framework for Plan Sponsors"
        subtitle="Most plan sponsors maintain a 401(k) plan document but not a defensible fiduciary file. With $10.0 trillion in 401(k) plan assets across roughly 730,000 plans serving 70 million plan participants, documentation discipline is not optional. PointOak Retirement Advisors builds structured 401(k) fiduciary documentation frameworks for plan sponsors seeking governance that holds up under scrutiny."
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
            Benefits of 401(k) Fiduciary Documentation
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Defensible Evidence of a Prudent Process</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                <a href="https://www.irs.gov/retirement-plans/retirement-plan-fiduciary-responsibilities" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">IRS fiduciary responsibilities guidance</a> states that fiduciaries should document decision-making to show rationale at the time decisions were made. The decision alone is not the evidence. Your fiduciary duties require documented proof: the analysis, comparisons, and plan documents that demonstrate why a specific course of action was selected.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Faster Audit and Inquiry Response</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A structured file organized by category and retention purpose turns a multi-week scramble into a same-day response. Scattered emails and ad hoc plan records collapse under regulatory scrutiny. An organized governance file does not.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Clear Fiduciary Role Accountability</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Fiduciary responsibilities become ambiguous when roles are assumed rather than documented. Written committee charters, delegation agreements, and decision-ownership records prevent accountability disputes during turnover, limiting liability when leadership changes and protecting plan assets.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Documented Fee and Provider Oversight</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                DOL requires participant-directed 401(k) plans to provide quarterly statements detailing the plan&apos;s fees and expenses deducted from accounts. Recurring <Link href="/corporate-retirement-plans/provider-fee-benchmarking" className="text-medium-blue hover:text-navy underline">provider and fee benchmarking</Link> documentation is a fiduciary compliance obligation. Your file should evidence that only reasonable plan expenses were charged and reviewed against market comparables on a defined schedule.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Reduced Prohibited Transaction Exposure</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Missing 408(b)(2) fee disclosures can make a plan service provider arrangement a prohibited transaction under DOL rules. The DOL also requires a fidelity bond for at least 10% of plan funds handled, $1,000 minimum, generally $500,000 maximum. Evidence of both the bond and disclosure compliance belongs in your <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:text-navy underline">fiduciary support</Link> file to protect against self dealing and other prohibited transactions.
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
            How 401(k) Fiduciary Documentation Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              A fiduciary documentation system organizes plan documents, trust records, participant data, governance evidence, and plan service provider oversight records into a maintained framework. Industry best practice holds that documentation includes not only meeting minutes but the materials reviewed at each meeting. Retaining the plan&apos;s investment options analysis and diversifying plan investments reports alongside minutes creates a prudent process file rather than a simple archive.
            </p>
            <p>
              Industry guidance recommends benchmarking service provider fees every three to five years, and <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:text-navy underline">investment analysis</Link> against the IPS should occur at least annually for proper investment oversight. These cadences create a recurring documentation cycle of monitoring service providers, reviewing each service provider&apos;s performance, and updating governance records. This is a continuous plan management discipline, not a one-time file build.
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
            Who Needs 401(k) Fiduciary Documentation Support
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Not every plan sponsor needs the same documentation framework. These situations signal when formal support adds real value.
          </p>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Rely on Scattered Emails and Ad Hoc Recordkeeping</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plan administration documents, committee decisions, and service provider correspondence sit in inboxes and shared drives without categorization by retention purpose. A single audit request from federal government agencies exposes the disorder. Plan administrators need organized files to respond efficiently.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Committee Documents Meetings but Not Supporting Materials</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Committee members capture minutes but not the reports, fund comparisons, and analysis reviewed during the meeting. The supporting materials are what prove fiduciary duties were performed. Plan participants benefit when fiduciary decisions are backed by documented analysis.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Recently Changed Providers or Redesigned Your Plan</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Provider transitions and <Link href="/corporate-retirement-plans/plan-design" className="text-medium-blue hover:text-navy underline">plan design</Link> changes generate fiduciary decisions requiring documented rationale: why the new service provider was selected and how employee contributions handling changed. Without records, the decision trail disappears.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Form 5500 Filing Exposes Gaps Every Year</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Annual Form 5500 filing reveals documentation shortfalls. The DOL deadline falls at the end of the seventh month after the plan year closes. If plan administrators scramble to locate records each cycle, the governance framework needs attention.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Multiple Stakeholders Share Fiduciary Responsibility</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Role ambiguity increases when several people share fiduciary functions without documented committee charters and delegation agreements. Turnover or disputes expose gaps in accountability that ERISA regulations do not forgive. Plan fiduciaries must know who owns each decision.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-cloud-blue rounded-lg">
            <h3 className="text-navy font-outfit text-xl font-semibold mb-3">When Formal Documentation Support May Not Be Needed</h3>
            <p className="text-text-gray font-outfit text-base leading-relaxed">
              A very small 401(k) plan with a single engaged decision-maker and minimal governance complexity may not need a formal committee documentation framework. Basic compliance recordkeeping may be sufficient for most plans at that scale.
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
            Basic Compliance File vs. Full Fiduciary Governance File
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Both approaches satisfy the fiduciary checklist for required records. The distinction is whether your file stores plan documents or actively evidences a fiduciary compliance process that satisfies regulators during an examination.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Category</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Basic Compliance File</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Full Fiduciary Governance File</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Plan document, summary plan description, and amendments</td>
                  <td className="px-4 py-3 text-gray-700">Maintained per IRS requirements</td>
                  <td className="px-4 py-3 text-gray-700">Maintained in the same manner with version history and review log</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Investment policy statement</td>
                  <td className="px-4 py-3 text-gray-700">May not exist or may be outdated</td>
                  <td className="px-4 py-3 text-gray-700">Documented, reviewed annually against performance data</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Committee charter and meeting records</td>
                  <td className="px-4 py-3 text-gray-700">Informal or absent</td>
                  <td className="px-4 py-3 text-gray-700">Charter, minutes, and all materials reviewed at meetings</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fee and provider benchmarking files</td>
                  <td className="px-4 py-3 text-gray-700">Ad hoc or recordkeeper-provided reports</td>
                  <td className="px-4 py-3 text-gray-700">Documented review cadence with comparison evidence</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Participant notice and disclosure calendar</td>
                  <td className="px-4 py-3 text-gray-700">Reactive when issues arise</td>
                  <td className="px-4 py-3 text-gray-700">Calendarized with quarterly fee statements tracked</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fidelity bond documentation</td>
                  <td className="px-4 py-3 text-gray-700">May be current but unmonitored</td>
                  <td className="px-4 py-3 text-gray-700">Current, reviewed against DOL thresholds annually</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            A basic file meets minimum recordkeeping requirements. A full governance file is worth the investment when plan assets, committee size, or service provider complexity create meaningful fiduciary exposure. Our <Link href="/corporate-retirement-plans" className="text-medium-blue hover:text-navy underline">retirement plan consulting services</Link> build either approach based on your plan&apos;s needs, with documented attention to the plan&apos;s account records and other plan property.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Fiduciary Documentation Process
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
            Why Choose PointOak Retirement Advisors for 401(k) Fiduciary Documentation
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              A 2024 survey cited by PSCA and J.P. Morgan found that only 55% of plan sponsors knew they were plan fiduciaries. Documentation frameworks cannot depend on universal awareness of fiduciary status. PointOak builds the governance file so evidence exists whether every committee member recognizes their fiduciary responsibilities or not, with each fiduciary function documented by a retirement plan professional who performs duties prudently.
            </p>
            <p>
              Some sponsors assume a recordkeeper and plan document satisfy their fiduciary obligations. IRS guidance clarifies that hiring service providers is itself a fiduciary act, and responsibility does not transfer with the hire (<a href="https://www.irs.gov/retirement-plans/maintaining-your-retirement-plan-records" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">IRS recordkeeping guidance</a>). As a fee-only registered investment advisor acting solely in the best interest of plan participants, PointOak provides the documentation discipline a recordkeeper does not. Learn more <Link href="/about" className="text-medium-blue hover:text-navy underline">about PointOak</Link>.
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
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. SEC-registered investment advisor serving plan sponsors and high-net-worth individuals nationwide, with over $1.08 billion in assets under management and 50+ years of collective team experience. Darsh Makim, CRPC, leads the firm as Founder and President. Meet <Link href="/about/our-team" className="text-medium-blue hover:text-navy underline">our consulting team</Link> or <Link href="/contact" className="text-medium-blue hover:text-navy underline">schedule a complimentary consultation</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed text-center">
            Call (703) 595-4444 or <Link href="/contact" className="text-medium-blue hover:text-navy underline">schedule a consultation</Link> to review your plan&apos;s fiduciary governance file.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
