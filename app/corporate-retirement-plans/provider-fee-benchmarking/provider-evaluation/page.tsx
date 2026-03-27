import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Provider Evaluation | PointOak Retirement Advisors",
  description: "Evaluate 401(k) providers with a benchmark-backed framework. PointOak reviews 450+ data points per bidder as your named ERISA fiduciary. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/provider-fee-benchmarking/provider-evaluation/"
  }
};

const highlights = [
  "450+ data points reviewed per 401(k) provider bidder",
  "Fee-only fiduciary since 2017",
  "Named 3(21) and 3(38) ERISA fiduciary"
];

const faqs = [
  {
    question: "How much does 401(k) provider evaluation consulting cost?",
    answer: "PointOak charges a fee-only consulting rate with no commissions or hidden compensation. Consulting fees depend on plan complexity, total plan assets, and the scope of the evaluation. PointOak's fee-only model means compensation comes directly from you, never from provider referral payments, revenue sharing, or product commissions that could influence which 401(k) provider your committee selects. The initial consultation is complimentary with no obligation."
  },
  {
    question: "What is the difference between a formal provider evaluation and an internal review?",
    answer: "A formal evaluation uses standardized criteria and documented scoring; an internal review often lacks both. An internal review typically relies on relationship familiarity and surface-level metrics without structured documentation. A formal evaluation compares 401(k) providers against identical bid parameters, documents the committee's rationale at every decision point, and creates the fiduciary record regulators expect. PointOak structures every evaluation to serve as a committee-defensible document that demonstrates your fiduciary responsibility was met."
  },
  {
    question: "How often should a company benchmark its 401(k) provider?",
    answer: "Most fiduciary advisors recommend a formal benchmarking review every three to five years. The DOL instructs sponsors to periodically review provider performance and costs. Market fee compression means pricing can shift meaningfully within a few years, and sponsors who wait longer risk paying above-market rates without realizing it. Contract renewal windows and major plan changes are natural triggers for re-evaluation, ensuring employees participate in a 401(k) plan with competitive pricing and services."
  },
  {
    question: "How do you evaluate a 401(k) provider?",
    answer: "Compare 401(k) providers across fees, recordkeeping, investment governance, participant support, and cybersecurity posture. DOL's service-provider selection guidance recommends obtaining identical bids using the same plan data and evaluating each provider's fee structure, recordkeeping platform, participant access to educational resources, and compliance support structure. A documented scoring process that addresses input from multiple stakeholders on the committee strengthens the fiduciary position. This approach creates a defensible record showing the committee asked the right questions and made a reasoned selection."
  },
  {
    question: "Should I choose the lowest-cost 401(k) provider?",
    answer: "The DOL says fiduciaries are not required to select the least costly provider. Cost matters, but service scope, fiduciary support, investment menu quality, and cybersecurity protections all factor into prudent provider selection. A provider that costs slightly more but delivers stronger compliance support and participant resources may represent a better fiduciary decision. Your committee's responsibility is to document a reasoned process, not simply choose the cheapest option."
  },
  {
    question: "What is the difference between a recordkeeper, TPA, and retirement plan advisor?",
    answer: "Each serves a different function, and understanding those roles is crucial to a sound evaluation. A recordkeeper handles account administration and participant transactions, while a TPA manages annual nondiscrimination testing, government filings, and plan documents. A retirement plan advisor provides fiduciary guidance, investment oversight, and provider benchmarking. Knowing whether your plan bundles or separates these roles prevents governance gaps."
  },
  {
    question: "How should cybersecurity factor into 401(k) provider evaluation?",
    answer: "The DOL now instructs plan sponsors to assess provider security standards as part of fiduciary diligence. Ask about third-party security audits, breach notification timelines, insurance coverage, and whether the contract limits the provider's liability for data breaches. PointOak includes cybersecurity diligence in every 401(k) provider evaluation, treating it as standard practice rather than an afterthought in the due-diligence process."
  },
  {
    question: "What key takeaways should our committee focus on during a 401(k) provider evaluation?",
    answer: "Focus on fee transparency, service accountability, investment governance, and fiduciary documentation. Managing a 401(k) plan means balancing cost control with service quality. Your committee should prioritize providers that offer clear fee structures, demonstrate strong recordkeeping accuracy, and support fiduciary obligations with documented compliance processes. These key takeaways form the foundation of a defensible provider selection that serves your company and employees."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Provider Evaluation",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Provider Evaluation",
  areaServed: { "@type": "Country", name: "United States" }
};

export default function ProviderEvaluationPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Provider & Fee Benchmarking", href: "/corporate-retirement-plans/provider-fee-benchmarking" },
          { label: "Provider Evaluation" }
        ]}
        title="401(k) Provider Evaluation for Plan Sponsors and Fiduciary Committees"
        subtitle="Every plan sponsor's 401(k) provider decision carries fiduciary weight that compounds with each contribution cycle. 401(k) plans held $7.4 trillion in assets serving 70 million active participants at year-end 2023, per the Investment Company Institute. PointOak Retirement Advisors provides retirement plan consulting centered on rigorous 401(k) provider evaluation."
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
            Benefits of 401(k) Provider Evaluation
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Documented Fiduciary Defensibility</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The DOL requires plan sponsors to document 401(k) provider selection and periodically review performance. A formal 401(k) provider evaluation creates the committee record that satisfies fiduciary obligations under ERISA&apos;s fiduciary responsibilities standard. <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:text-navy underline">Fiduciary support</Link> structures this documentation from the start.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Lower Participant-Level Costs</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The GAO found that a 1-percentage-point higher annual fee materially reduces long-term retirement balances. Many 401(k) plans carry fee structures set before recent market compression. Benchmarking reveals whether your provider fees reflect current pricing or a legacy overcharge, and the benefit to employees is immediate.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Stronger Investment Menu Oversight</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Evaluation exposes whether your 401(k) plan investments reflect open-architecture selection or disproportionate proprietary weighting. It also tests whether the target date fund meets DOL suitability expectations for your participant demographics. <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:text-navy underline">Investment analysis</Link> during evaluation prevents lineup drift from going undetected.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Clearer Provider Service Accountability</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Industry surveys confirm plan sponsors evaluate providers across multiple service dimensions beyond fees. A structured evaluation holds your provider to scope commitments in recordkeeping, participant support, and reporting. Documented service-level expectations protect your committee and enhance accountability when performance falls short.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Cybersecurity and Data Protection Assurance</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                <a href="https://www.dol.gov/agencies/ebsa/key-topics/retirement-benefits/cybersecurity/tips-for-hiring-a-service-provider-with-strong-security-practices" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">DOL cybersecurity guidance</a> instructs sponsors to assess security standards, audit certifications, breach timelines, and contract liability terms. Most evaluations skip this entirely, creating risk committees may not recognize until a breach occurs. This diligence benefits participants whose retirement goals depend on secure account data.
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
            How 401(k) Provider Evaluation Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              A thorough 401(k) provider evaluation compares recordkeeping platform capabilities, participant services, plan sponsor support, investment governance, and fee competitiveness. The process uses standardized criteria and documented scoring across identical bid parameters so every 401(k) provider responds to the same plan data. This benchmarking discipline, aligned with DOL guidance, replaces subjective assessments with defensible results.
            </p>
            <p>
              Industry data compiled by PSCA shows recordkeeping fees declined from $57 per participant in 2016 to $42 in 2025. That pricing compression means sponsors who have not benchmarked recently may be operating under stale pricing assumptions. A current evaluation using today&apos;s investment options and pricing structure exposes gaps that industry averages alone would miss.
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
            Who Needs 401(k) Provider Evaluation
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Not every plan sponsor needs a formal provider evaluation right now. These scenarios signal it&apos;s time.
          </p>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Committee Has Not Benchmarked Fees in Three or More Years</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                DOL guidance requires periodic review of provider costs. Market compression means your 401(k) plan assets may bear above-market charges set years ago. <Link href="/corporate-retirement-plans/provider-fee-benchmarking" className="text-medium-blue hover:text-navy underline">Provider and fee benchmarking</Link> resets that baseline.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Participants or Committee Members Are Raising Service Complaints</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Recurring issues with recordkeeping accuracy, loan processing, or call-center responsiveness signal your current provider may not be meeting the service level participants expect. Documented complaints strengthen the case for evaluation.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Organization Is Preparing for a DOL Audit or Fiduciary Review</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A documented evaluation strengthens your committee&apos;s defensibility record before regulators arrive. Employers preparing for audit scrutiny need evidence that provider selection followed a prudent, repeatable process rather than inertia or convenience.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Are Going Through a Merger, Acquisition, or Rapid Growth</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Workforce changes shift demographics, contribution patterns, and capacity requirements. Your business may have outgrown the provider platform that fit a smaller employee count, and your company needs a fresh evaluation.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Provider&apos;s Contract Is Up for Renewal</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Renewal windows are the natural trigger for competitive benchmarking before re-committing. Evaluating alternatives before signing gives your committee documented evidence that the renewal terms reflect current market pricing, not a default rollover.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-cloud-blue rounded-lg">
            <p className="text-text-gray font-outfit text-base leading-relaxed">
              If your organization launched its 401(k) plan within the past 12 months, initial <Link href="/corporate-retirement-plans/plan-design" className="text-medium-blue hover:text-navy underline">plan design</Link> and enrollment strategy may be a higher priority than provider benchmarking at this stage.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Comparison Tables */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            401(k) Provider Evaluation: Bundled vs. Unbundled and Open vs. Proprietary
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Two structural decisions shape every 401(k) provider evaluation: how plan providers bundle services and whether the investment platform is open or proprietary.
          </p>

          <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">Bundled vs. Unbundled Provider Structure</h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Evaluation Criteria</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Bundled</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Unbundled</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Accountability</td>
                  <td className="px-4 py-3 text-gray-700">Single contract; one provider handles all services</td>
                  <td className="px-4 py-3 text-gray-700">Multiple contracts across recordkeeper, TPA, and advisor</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fee Transparency</td>
                  <td className="px-4 py-3 text-gray-700">One combined fee; component costs may be obscured</td>
                  <td className="px-4 py-3 text-gray-700">Itemized fees by role and function</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Service Flexibility</td>
                  <td className="px-4 py-3 text-gray-700">Standard package from one provider</td>
                  <td className="px-4 py-3 text-gray-700">Specialist selection for each plan function</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Payroll Integration</td>
                  <td className="px-4 py-3 text-gray-700">Typically built in</td>
                  <td className="px-4 py-3 text-gray-700">Requires coordination with payroll provider</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fiduciary Role Clarity</td>
                  <td className="px-4 py-3 text-gray-700">May bundle advisory with recordkeeping services</td>
                  <td className="px-4 py-3 text-gray-700">Distinct named fiduciaries for each role</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-base leading-relaxed text-sm italic mb-10">
            Source: DOL EBSA service-provider guidance
          </p>

          <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">Open Architecture vs. Proprietary-Leaning Investment Platform</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Evaluation Criteria</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Open Architecture</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Proprietary-Leaning</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fund Access</td>
                  <td className="px-4 py-3 text-gray-700">Entire marketplace of mutual funds and share classes</td>
                  <td className="px-4 py-3 text-gray-700">Limited to funds the platform providers offer</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Conflict Exposure</td>
                  <td className="px-4 py-3 text-gray-700">Minimal; no recordkeeper revenue from fund selection</td>
                  <td className="px-4 py-3 text-gray-700">Recordkeeper revenue incentives influence the lineup</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Lineup Flexibility</td>
                  <td className="px-4 py-3 text-gray-700">Committee-controlled; any fund meeting IPS criteria</td>
                  <td className="px-4 py-3 text-gray-700">Platform-dependent; changes require provider approval</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Proprietary Weighting</td>
                  <td className="px-4 py-3 text-gray-700">Committee selects independently</td>
                  <td className="px-4 py-3 text-gray-700">61% of plans included proprietary options, representing 27% of plan assets (BrightScope/ICI, 2021)</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Committee Documentation</td>
                  <td className="px-4 py-3 text-gray-700">Independent selection rationale for each fund</td>
                  <td className="px-4 py-3 text-gray-700">Platform-default rationale; plan features may limit choices</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6 text-sm italic">
            Source: <a href="https://www.ici.org/files/2024/24-rpt-dcplan-profile-401k.pdf" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">BrightScope/ICI Defined Contribution Plan Profile</a>, 2024
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            When a plan sponsor values simplicity, a bundled model with open-architecture investments fits. When the committee wants specialist roles, maximum lineup control, and clearer service level accountability, unbundled with a <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:text-navy underline">named fiduciary</Link> creates separation between retirement plan providers and the advisory function.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our 401(k) Provider Evaluation Process
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-medium-blue flex items-center justify-center text-white font-bold text-xl">1</div>
              <div>
                <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">Analyze</h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">We review your plan structure, provider fees, investment lineup, and compliance documentation with your plan administrator.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-medium-blue flex items-center justify-center text-white font-bold text-xl">2</div>
              <div>
                <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">Optimize</h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">Your committee receives a documented proposal with <Link href="/corporate-retirement-plans/provider-fee-benchmarking" className="text-medium-blue hover:text-navy underline">provider and fee benchmarking</Link> results for informed decisions.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-medium-blue flex items-center justify-center text-white font-bold text-xl">3</div>
              <div>
                <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">Implement</h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">We execute changes, address the right questions from your committee, and provide ongoing monitoring and reporting.</p>
              </div>
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
            Why Choose PointOak for 401(k) Provider Evaluation
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              A PLANSPONSOR survey of 3,172 plan sponsors confirmed providers are evaluated across four service areas, not fees alone. PointOak&apos;s Live Bid methodology applies that discipline using your plan&apos;s actual data rather than industry averages. <Link href="/about/our-team" className="text-medium-blue hover:text-navy underline">Darsh and his team</Link> deliver every evaluation as a named ERISA fiduciary, reducing fiduciary liability through documented results.
            </p>
            <p>
              Every top-ranking page for 401(k) provider evaluation was written by a recordkeeper or institution selling a platform. PointOak brings expertise as an <Link href="/about" className="text-medium-blue hover:text-navy underline">independent, fee-only advisory firm</Link> with no proprietary products, no platform revenue, and no incentive beyond the right fit for your plan.
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
            PointOak Retirement Advisors is a fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. We provide wealth management and corporate retirement plan consulting to clients nationwide. As an SEC-registered investment advisor and fiduciary since inception, our team brings over 50 years of collective experience and manages more than $1.08 billion in assets. <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule a consultation</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed text-center">
            <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule a consultation</Link> to start your 401(k) plan&apos;s provider evaluation with a named fiduciary advisor.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
