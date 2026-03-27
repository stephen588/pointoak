import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Recordkeeper RFP Consulting Services | PointOak",
  description: "PointOak's Live Bid process reviews 450+ data points per recordkeeper bidder. Named ERISA fiduciary for plan sponsors running a 401(k) RFP. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/provider-fee-benchmarking/recordkeeper-rfp/"
  }
};

const highlights = [
  "450+ data points reviewed per plan bidder",
  "Named 3(21) and 3(38) ERISA fiduciary",
  "Fee-only fiduciary since 2017"
];

const faqs = [
  {
    question: "How much does it cost to hire a consultant for a 401(k) recordkeeper RFP?",
    answer: "Advisory fees for RFP consulting vary based on plan size and scope. PointOak operates on a fee-only model, meaning we receive no commissions from the record keepers under evaluation. Advisory fees for RFP engagements are typically structured on an asset-based or project-based basis, influenced by plan complexity, the number of bidders, and whether transition oversight is included. Schedule a complimentary consultation to discuss your plan's scope and request a transparent fee proposal."
  },
  {
    question: "What's the difference between a bundled provider and a recordkeeper-only provider?",
    answer: "A bundled provider packages recordkeeping with investments and administration under one contract. A recordkeeper-only arrangement isolates the recordkeeping function, allowing your plan to select investments and administrative services independently. Bundled models simplify vendor management but can obscure fee structures. Recordkeeper-only models provide clearer fee isolation and give your investment committee more control over the fund lineup and investment options available to participants."
  },
  {
    question: "How often should a plan sponsor conduct a recordkeeper RFP?",
    answer: "Most fiduciary best practices recommend a formal review every three to five years. ERISA's prudent-process standard requires ongoing monitoring, not just periodic evaluation. Material triggers like fee escalation, technology gaps, or M&A activity warrant an off-cycle review regardless of when the last RFP occurred. PointOak provides fiduciary support to help committees establish appropriate review cadences based on plan complexity."
  },
  {
    question: "What should be included in a 401(k) provider RFP?",
    answer: "A thorough RFP covers plan demographics, fee disclosures, investment options, technology, and transition logistics. The SPARK Institute's RFP framework organizes questions into categories including plan operational information, compensation disclosures, participant services, and cybersecurity protocols. PointOak's RFP documents address each of these areas plus reporting requirements, with questions specific to your plan's design, participant demographics, and payroll integration."
  },
  {
    question: "What questions should you ask a future 401(k) recordkeeper?",
    answer: "Ask the right questions about fee transparency, cybersecurity, payroll integration, and participant experience. Revenue sharing disclosure and indirect compensation questions reveal the true cost of the arrangement. Cybersecurity questions should cover data breach response timelines and notification procedures. Other clients often overlook how providers handle plan amendments and regulatory updates, which affect long-term plan administration."
  },
  {
    question: "Who should be on a 401(k) RFP committee?",
    answer: "The committee typically includes HR, finance, legal counsel, and an independent retirement plan advisor. Each member carries fiduciary responsibilities requiring documentation. HR provides participant data, finance evaluates costs, and legal counsel reviews contract terms. PointOak assists the committee as a named fiduciary, contributing market knowledge and objective evaluation criteria."
  },
  {
    question: "What happens if a recordkeeper set up our plan incorrectly?",
    answer: "Plan setup errors can trigger compliance failures and non-discrimination testing problems. Corrective action programs through the DOL and IRS can address errors, but the process is time-consuming and carries costs. Reviewing plan document alignment against recordkeeper setup during an RFP is critical for contribution formulas, eligibility provisions, and vesting schedules. These discrepancies are easier to catch during a transition than after years of compounding."
  },
  {
    question: "How do I evaluate fund mapping when switching recordkeepers?",
    answer: "Fund mapping compares your current investment lineup to the new provider's available options. Share class differences between institutional and retail pricing can significantly affect participant costs. Every mapped fund should align with your plan's Investment Policy Statement. PointOak's investment analysis covers fund mapping as part of transition oversight, confirming that replacement funds match or improve on the risk, return, and expense profile of outgoing investments."
  },
  {
    question: "How do you compare 401(k) recordkeeping fees?",
    answer: "Compare total plan cost, not just the headline recordkeeping fee. Direct fees, revenue sharing offsets, per-participant charges, and asset-based charges make up the complete cost picture. Industry-wide costs have compressed significantly, which means small differences at the plan level carry more weight. The DOL guidance on retirement plan fees outlines the categories plan sponsors should evaluate when comparing providers."
  },
  {
    question: "How do you switch 401(k) providers without disrupting participants?",
    answer: "A structured transition plan with clear communication prevents most participant disruptions. Blackout period planning restricts account access during data migration, so advance participant notification is required under ERISA. Payroll coordination ensures contributions flow correctly on the first pay period after cutover. Most transitions take 60 to 90 days when fund mapping, payroll testing, and participant communication follow a structured timeline."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Recordkeeper RFP Consulting",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "RFP Consulting",
  areaServed: { "@type": "Country", name: "United States" }
};

export default function RecordkeeperRFPPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Provider & Fee Benchmarking", href: "/corporate-retirement-plans/provider-fee-benchmarking" },
          { label: "Recordkeeper RFP Services" }
        ]}
        title="401(k) Recordkeeper RFP Consulting for Plan Sponsors"
        subtitle="A 401(k) recordkeeper RFP is a fiduciary event and a critical decision, not a fee comparison. One-third of plan sponsors plan a recordkeeper search despite 71% satisfaction with their current provider. PointOak's Live Bid process delivers a documented evaluation from an independent retirement plan advisor."
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
            Benefits of 401(k) Recordkeeper RFP Consulting
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Documented Fiduciary Protection</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Average recordkeeper tenure fell to 7.5 years in 2024 from 8.4 years in 2022 (PSCA/Escalent 2024). Shorter cycles create more fiduciary decisions requiring documentation. A structured 401(k) RFP builds the ERISA paper trail your committee needs, from <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:text-navy underline">fiduciary support</Link> analysis through contract execution.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Stronger Technology and Cybersecurity Vetting</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Cybersecurity threats rose from 40% to 47% as sponsors&apos; top concern between 2022 and 2024 (PSCA/Escalent 2024). Most RFPs underweight this essential area with generic security questions instead of evaluating incident response protocols, SOC 2 compliance, and encryption across the full technology infrastructure.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Lower Plan Costs Through Competitive Bidding</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Fee decomposition separates direct recordkeeping charges from revenue sharing credits and indirect compensation. Without this breakdown, your committee can&apos;t compare providers on equal terms. Competitive bidding with structured fee disclosure forces the cost transparency that informal renewals rarely produce.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Objective Provider Evaluation</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Independence from recordkeeper affiliations determines whether evaluation criteria serve the plan or the advisor. Fee-only advisors with no revenue-sharing arrangements and open architecture score bidders on plan fit alone, eliminating conflicts that compromise the recordkeeper search.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Reduced Committee Decision Risk</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A structured RFP with weighted scoring, documented deliberation, and finalist comparison gives your committee audit-ready records. If the DOL or participants challenge a provider selection, the process itself becomes the defense. Informal reviews carry the compliance risk of an incomplete due diligence process.
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
            How 401(k) Recordkeeper RFP Consulting Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              An advisory-led RFP starts with a comprehensive RFP document covering plan demographics, fee structure, plan administration, payroll integration, reporting, and compensation disclosures. Each category maps to a weighted scoring framework so your committee evaluates record keepers against documented criteria rather than subjective impressions. <Link href="/corporate-retirement-plans/provider-fee-benchmarking" className="text-medium-blue hover:text-navy underline">Provider and fee benchmarking</Link> compares bidder fees to current plan costs.
            </p>
            <p>
              Average total plan cost fell to 0.32% of assets in 2021 from 0.47% in 2009 (<a href="https://www.ici.org/files/2024/24-rpt-dcplan-profile-401k.pdf" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">ICI/BrightScope defined contribution plan profile</a>). Fee compression means differences between competitive and overpriced plans hide in basis points, especially after accounting for revenue sharing arrangements. Granular analysis at the plan level exposes hidden costs that industry averages miss.
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
            Who Needs 401(k) Recordkeeper RFP Consulting
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Not every plan needs an RFP today. These scenarios signal when a structured evaluation makes sense.
          </p>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Recordkeeper Contract Is Approaching Renewal</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Long tenure without formal review signals fiduciary risk. If your committee can&apos;t document when it last assessed the market, renewal is the trigger to evaluate current provider fit against your specific needs.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Plan Fees Feel Opaque or Uncompetitive</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If your organization can&apos;t isolate recordkeeping fees from investment expenses and revenue sharing, you can&apos;t determine whether participants are overpaying. Fee opacity flags that competitive bidding is overdue.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Technology and Cybersecurity Expectations Have Changed</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Forty-eight percent of plan sponsors rated digital experience extremely important in 2024, up from 30% the prior year (Fidelity 2024). If your employer&apos;s technology hasn&apos;t kept pace, the gap affects participant outcomes.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Committee Faces an Upcoming ERISA Review or Audit</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Provider evaluation gaps are among the first items a DOL investigation targets. If your fiduciary file lacks a formal 401(k) RFP or competitive analysis, your committee carries exposure.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Merged, Acquired, or Restructured</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Multiple legacy retirement plans with duplicate record keepers create administrative waste. Consolidation through a single RFP aligns <Link href="/corporate-retirement-plans/plan-design" className="text-medium-blue hover:text-navy underline">plan design</Link>, reduces costs, and gives the combined company a clean fiduciary baseline.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-cloud-blue rounded-lg">
            <p className="text-text-gray font-outfit text-base leading-relaxed">
              Plans that completed a documented evaluation in the past three years with no material changes may not need a new RFP. PointOak&apos;s corporate retirement plan consulting provides ongoing monitoring between formal reviews.
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
            Bundled Provider vs. Recordkeeper-Only
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            The choice between a bundled provider and a recordkeeper-only arrangement shapes your RFP scope and helps establish which potential recordkeepers to evaluate.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Evaluation Criteria</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Bundled Provider</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Recordkeeper-Only</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fee Transparency</td>
                  <td className="px-4 py-3 text-gray-700">Fees embedded across services; harder to decompose</td>
                  <td className="px-4 py-3 text-gray-700">Fees isolated by function; simpler to benchmark</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Investment Menu Control</td>
                  <td className="px-4 py-3 text-gray-700">Often limited to provider&apos;s fund lineup</td>
                  <td className="px-4 py-3 text-gray-700">Open architecture; plan selects investments independently</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Payroll Integration</td>
                  <td className="px-4 py-3 text-gray-700">Single-vendor integration; simpler setup</td>
                  <td className="px-4 py-3 text-gray-700">Requires separate payroll coordination</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Provider Accountability</td>
                  <td className="px-4 py-3 text-gray-700">Single point of contact; diffused responsibility</td>
                  <td className="px-4 py-3 text-gray-700">Clear role separation; targeted accountability</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fee Payment Structure</td>
                  <td className="px-4 py-3 text-gray-700">46% plan pays; 35% employer; 19% split (ICI/PSCA 2023)</td>
                  <td className="px-4 py-3 text-gray-700">Same structures apply; cost allocation more visible</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6 text-sm italic">
            Sources: <a href="https://www.sparkinstitute.org/pdf/SPARK%20RFP%20Guide%204.0.pdf" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">SPARK Institute RFP Guide</a> 4.0 (2024); ICI Economics of 401(k) Plans (2024)
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            When a plan needs tight payroll integration and prefers a single vendor, bundled may fit. When the committee prioritizes fee transparency, investment independence through <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:text-navy underline">investment analysis</Link>, and accountability free of hidden costs, a recordkeeper-only search delivers stronger outcomes.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our 401(k) Recordkeeper RFP Process
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-medium-blue flex items-center justify-center text-white font-bold text-xl">1</div>
              <div>
                <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">Analyze Your Current Plan</h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">We review your recordkeeper contract, fee structure, and investment lineup to determine where your plan stands.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-medium-blue flex items-center justify-center text-white font-bold text-xl">2</div>
              <div>
                <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">Optimize the Evaluation Criteria</h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">Your committee receives a weighted scoring framework and customized RFP we develop around your plan&apos;s priorities.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-medium-blue flex items-center justify-center text-white font-bold text-xl">3</div>
              <div>
                <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">Implement the Selection</h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">We manage bidder communication, proposal evaluation, and transition oversight to create a documented, defensible selection.</p>
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
            Why Choose PointOak for 401(k) Recordkeeper RFP Consulting
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              PointOak operates as an <Link href="/about" className="text-medium-blue hover:text-navy underline">independent, fee-only advisory firm</Link> with no affiliations to record keepers, custodians, or bundled providers. Our Live Bid methodology uses actual plan data rather than industry averages to score every bidder across the complete evaluation. Fee-only compensation means our analysis serves your plan&apos;s objectives, not a product shelf.
            </p>
            <p>
              Some plan sponsors run RFPs internally or use recordkeeper-affiliated advisors. Internal teams lack the industry expertise and benchmarking resources to assess all potential providers objectively. Affiliated advisors may favor their parent company&apos;s platform, an undisclosed conflict your committee cannot afford.
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
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 in McLean, Virginia. As an SEC-registered investment advisor and fiduciary since inception, we manage over $1.08 billion in assets. Darsh Makim, CRPC, leads <Link href="/about/our-team" className="text-medium-blue hover:text-navy underline">our consulting team</Link> with 50+ years of collective experience, serving plan sponsors since 2005 across the DC/MD/VA metro area and nationwide. <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule a complimentary consultation</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed text-center">
            <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule a consultation</Link> to start building your plan&apos;s recordkeeper evaluation framework with a named ERISA fiduciary.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
