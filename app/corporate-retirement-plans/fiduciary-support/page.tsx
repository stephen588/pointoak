import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Shield, CheckCircle, TrendingUp, FileText, Layers, Users } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "ERISA Fiduciary Support for Your Company's Retirement Plan",
  description: "PointOak Retirement Advisors is a named ERISA fiduciary and registered investment advisor providing retirement plan fiduciary services to plan sponsors.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/fiduciary-support/"
  }
};

const highlights = [
  "450+ data points reviewed per plan bidder",
  "Named 3(21) or 3(38) ERISA fiduciary",
  "Fee-only, SEC-registered since 2017"
];

const benefitsData = [
  {
    title: "Defined Liability Boundaries for Your Committee",
    description: "Under a 3(38) investment manager appointment, the investment manager assumes fiduciary liability for the plan's investment decisions. Per DOL fiduciary responsibilities guidance, your committee's fiduciary obligations narrow to selecting and monitoring that manager. The liability boundary is defined in writing, not assumed.",
    icon: Shield
  },
  {
    title: "Independent Investment Monitoring With Documented Process",
    description: "Monitoring the plan's investments is a retained fiduciary responsibility regardless of arrangement. PointOak conducts IPS-aligned investment analysis across the full fund lineup, tracking investment performance and reporting findings directly to your committee. Every recommendation draws on open-architecture selection in the best interest of plan participants.",
    icon: TrendingUp
  },
  {
    title: "Fee Benchmarking That Withstands Regulatory Scrutiny",
    description: "Industry data from 2024 shows that 74% of plan sponsors prioritized fee review. PointOak's provider and fee benchmarking applies a detailed evaluation built on actual plan data and plan documents, not industry averages. Fee disclosure requirements are measured against current market conditions, including asset based fees and administration services costs.",
    icon: CheckCircle
  },
  {
    title: "Governance Documentation for Committee Records",
    description: "Plan sponsors report that tracking legislation and understanding fiduciary responsibilities rank among their top plan management challenges. PointOak documents every recommendation, committee decision, and review outcome. Your fiduciary file stays current with a governance record built for regulatory scrutiny and protection against improper use of plan assets.",
    icon: FileText
  }
];

const fiduciaryNeedsData = [
  {
    title: "Your Committee Manages Investments Without a Defined Fiduciary Partner",
    description: "Plan sponsors say plan administration distracts from their core business. One 2024 survey put the figure above 70%. Without a named fiduciary partner, your committee carries fiduciary responsibility for undocumented investment decisions."
  },
  {
    title: "Your Advisor's Fiduciary Role Is Undefined or Unclear",
    description: "A significant share of 401(k) plans can't confirm their advisor's fiduciary role. When the responsibility boundary is unclear, your committee may be personally liable for decisions you assumed were covered by an outside investment advisor."
  },
  {
    title: "Your Plan Has Not Had a Fee or Investment Review in Over 12 Months",
    description: "Delayed reviews leave outdated fee arrangements and stale fund structures in place. A documented review cadence with correct paperwork is a core fiduciary responsibility, not an optional exercise."
  },
  {
    title: "Your Organization Is Growing and Plan Complexity Is Increasing",
    description: "Growing headcount, multi-tier matching, or cross-state operations add compliance burden. As a business owner or HR leader, you face fiduciary exposure that internal resources may not cover."
  }
];

const fiduciaryOptions = [
  {
    title: "3(21) Co-Fiduciary Advisory",
    description: "The advisor renders investment advisory recommendations as a co-fiduciary, sharing fiduciary responsibility with your committee. Your committee retains final authority over the investment lineup, acting on recommendations rather than delegating. Best for committees with active governance who want expert input while keeping control.",
    href: "/corporate-retirement-plans/fiduciary-support/3-21/",
    icon: Shield
  },
  {
    title: "3(38) Investment Management",
    description: "The 3(38) investment manager accepts discretionary control over the plan's fund lineup per the investment management agreement, including selection, monitoring, and replacement with full discretion. Your committee's discretionary responsibility shifts to selecting and monitoring the 3(38) investment fiduciary. Best for sponsors who want to delegate day-to-day investment decisions and reduce direct management burden.",
    href: "/corporate-retirement-plans/fiduciary-support/3-38/",
    icon: Shield
  }
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "Our consulting team evaluates your plan structure, fees, and investment decisions against current ERISA requirements."
  },
  {
    number: 2,
    title: "Optimize",
    description: "You receive documented recommendations for your investment lineup, fee alignment, and committee governance workflow."
  },
  {
    number: 3,
    title: "Implement",
    description: "Approved changes take effect with ongoing monitoring, benchmarking, and committee reporting on a defined cadence."
  }
];

const faqs = [
  {
    question: "What does ERISA fiduciary support cost?",
    answer: "Fees vary by plan size, complexity, and the scope of fiduciary services engaged. Common fee structures include asset based fees calculated as a percentage of plan assets and flat annual consulting fees. The right structure depends on your plan's size and the level of fiduciary involvement. PointOak uses a fee-only model with no commissions, revenue sharing, or hidden compensation from investment providers. Every dollar of advisory fees comes directly from the client relationship. The initial consultation is complimentary with no obligation."
  },
  {
    question: "What is the difference between a 3(21) and a 3(38) fiduciary?",
    answer: "A 3(21) advises while the committee decides; a 3(38) fiduciary takes discretionary control over investments. Under a 3(21) arrangement, the investment adviser provides recommendations and the committee retains final authority. Under a 3(38), the investment fiduciary accepts responsibility for selecting and monitoring the plan's fund lineup. Both are ERISA fiduciary roles, but the liability allocation between the adviser and the committee differs significantly based on the written agreement."
  },
  {
    question: "What responsibilities stay with the plan sponsor after outsourcing fiduciary support?",
    answer: "The sponsor must prudently select, monitor, and document oversight of the fiduciary provider. DOL guidance makes clear that delegating investment decisions does not eliminate all fiduciary responsibility. The sponsor retains the duty to evaluate the provider's qualifications, confirm their registration status, and periodically review performance. Documentation of both the selection process and ongoing oversight protects the committee if its decisions are later questioned."
  },
  {
    question: "Does hiring a 3(38) fiduciary remove all liability from the plan sponsor?",
    answer: "No, the sponsor retains liability for selecting and monitoring the 3(38) manager. The sponsor is not responsible for the manager's individual investment picks, but the duty to choose and oversee the 3(38) provider is a fiduciary obligation that cannot be delegated further. PointOak provides the documentation and reporting committees need to demonstrate that oversight is ongoing and informed."
  },
  {
    question: "What does an ERISA fiduciary actually do for a 401(k) plan?",
    answer: "An ERISA fiduciary controls plan assets or provides investment advice for compensation. Duties include selecting and monitoring investments, evaluating plan fees, maintaining governance documentation, and acting in the best interest of participants. The Employee Retirement Income Security Act holds anyone who exercises authority over a plan to this standard. PointOak's engagement covers investment monitoring, fee benchmarking, and committee reporting, including coordination with education and communications programs that support participant outcomes."
  },
  {
    question: "How often should plan fees and investments be reviewed?",
    answer: "Most governance standards call for at least an annual fiduciary review. Plans with active advisory relationships tend to see stronger fee and investment outcomes over time. Annual reviews are the minimum standard, but quarterly investment monitoring is common for plans with outsourced fiduciary support. PointOak builds a documented review cadence into every engagement so committees can demonstrate ongoing prudence."
  },
  {
    question: "What should we ask a 401(k) fiduciary provider during an RFP?",
    answer: "Ask providers to confirm their fiduciary role in writing and describe their monitoring methodology. Request a written acknowledgment of fiduciary status, a description of monitoring cadence, and a detailed explanation of fee benchmarking methodology. Ask for references from plans of similar size. Submit questions in advance and require written responses so your committee has a documented record of the evaluation for its fiduciary file."
  },
  {
    question: "How do we evaluate whether a fiduciary advisor is actually independent?",
    answer: "Verify SEC registration, confirm no recordkeeper ties, and ask about all compensation sources. DOL Field Assistance Bulletin 2007-01 outlines prudent selection criteria, including reviewing registration status under federal or state law and confirming the advisor acknowledges fiduciary status. Ask whether the financial advisor receives compensation from any investment provider or recordkeeper. A fee-only advisor structured to provide advice without product incentives eliminates that conflict of interest."
  },
  {
    question: "Is a retirement plan consultant automatically a fiduciary?",
    answer: "Not necessarily; fiduciary status depends on the specific services and authority exercised. Providing investment advice for a fee triggers fiduciary status, but consultants delivering general education may fall outside that threshold. The Investment Advisers Act and ERISA each define fiduciary obligations differently. Whether the consultant is a certified financial planner or another investment adviser, the role must be formally established in writing for liability allocation to be clear."
  },
  {
    question: "Why do some companies keep a 3(21) arrangement instead of moving to 3(38)?",
    answer: "Committees that want to retain final investment authority often prefer the 3(21) structure. A 3(21) arrangement gives the committee expert recommendations while preserving decision-making control over fund selection, including target date fund consulting decisions. Sponsors with active investment committees and governance bandwidth find this structure effective. The choice depends on internal capacity, not on which arrangement is inherently superior."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERISA Fiduciary Support for Your Company's Retirement Plan",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Fiduciary Support",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function FiduciarySupportPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Fiduciary Support" }
        ]}
        title="ERISA Fiduciary Support for Your Company's Retirement Plan"
        subtitle="One in five 401(k) plan sponsors can't identify their advisor's fiduciary role. PSCA's 2025 survey found 38.1% of plan sponsors use a 3(21) advisor, 25% use a 3(38), and 20% remain unsure. PointOak Retirement Advisors is a named ERISA fiduciary and registered investment advisor providing retirement plan fiduciary services to plan sponsors."
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

      {/* Benefits of ERISA Fiduciary Support */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of ERISA Fiduciary Support
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

      {/* How ERISA Fiduciary Support Works */}
      <AnimateOnScroll>
      <section className="bg-[#F5F3EF] py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How ERISA Fiduciary Support Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Under a 3(21) arrangement, the advisor serves in a fiduciary capacity to provide investment recommendations to the committee, which retains final decision authority. Under a 3(38) fiduciary arrangement, the investment manager accepts discretionary authority over the plan&apos;s investment strategy, including fund selection, monitoring, and replacement. ERISA defines both as fiduciary roles with distinct liability structures.
            </p>
            <p>
              Per <a href="https://www.dol.gov/sites/dolgov/files/EBSA/about-ebsa/our-activities/resource-center/publications/meeting-your-fiduciary-responsibilities.pdf" target="_blank" rel="noopener noreferrer" className="text-navy underline hover:text-medium-blue transition-colors">DOL guidance on fiduciary responsibilities</a>, plan fiduciaries must still prudently select and periodically monitor any named fiduciary they appoint. Effective oversight includes a documented review cadence, IPS-aligned investment evaluation, and regular committee reporting that tracks decisions and rationale over time.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-300">
              <p>
                <Link href="/contact/" className="text-navy underline hover:text-medium-blue transition-colors font-medium">Schedule a consultation</Link> to evaluate your plan&apos;s fiduciary structure and governance needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs ERISA Fiduciary Support */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs ERISA Fiduciary Support
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Not every retirement plan needs an outsourced fiduciary arrangement. These scenarios help you assess where governance gaps exist.
          </p>
          <div className="space-y-6">
            {fiduciaryNeedsData.map((item, idx) => (
              <div key={idx} className="bg-cloud-blue rounded-lg p-6 md:p-8 border-l-4 border-navy">
                <h3 className="font-outfit text-navy text-lg md:text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
            <div className="bg-[#F5F3EF] rounded-lg p-6 md:p-8 border-l-4 border-warm-gold">
              <h3 className="font-outfit text-navy text-lg md:text-xl font-semibold mb-3">When ERISA Fiduciary Support Might NOT Be the Right Fit</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Very small plans with minimal investment options and low administrative complexity may not need an outsourced fiduciary. A targeted review through our <Link href="/our-services/" className="text-navy underline hover:text-medium-blue transition-colors">retirement plan consulting services</Link> can determine the right fit.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Fiduciary Support Options */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Our Fiduciary Support Options
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            The right fiduciary arrangement depends on how much investment discretion your committee wants to retain.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fiduciaryOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Link
                  key={option.href}
                  href={option.href}
                  className="bg-white rounded-lg p-8 border border-gray-100 hover:shadow-lg hover:border-navy/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-cloud-blue flex items-center justify-center flex-shrink-0 group-hover:bg-navy/10 transition-colors">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-outfit text-navy text-xl font-medium mb-3 group-hover:text-navy/80 transition-colors">
                        {option.title}
                      </h3>
                      <p className="font-outfit text-dark-gray text-sm leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Comparison Table */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Outsourced Fiduciary Support vs. In-House Committee Oversight
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Both outsourced fiduciary support and in-house committee oversight can work. The right approach depends on your committee&apos;s governance capacity, internal expertise, and available bandwidth.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Governance Factor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Outsourced Fiduciary Support</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">In-House Committee Oversight</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fiduciary liability allocation</td>
                  <td className="px-4 py-3 text-gray-700">Shared or transferred per written agreement</td>
                  <td className="px-4 py-3 text-gray-700">Fully retained by committee members</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Investment monitoring cadence</td>
                  <td className="px-4 py-3 text-gray-700">Quarterly or semi-annual documented reviews</td>
                  <td className="px-4 py-3 text-gray-700">Dependent on internal bandwidth</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fee benchmarking methodology</td>
                  <td className="px-4 py-3 text-gray-700">Independent service provider with structured process</td>
                  <td className="px-4 py-3 text-gray-700">Self-directed using recordkeeping services data</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Committee documentation</td>
                  <td className="px-4 py-3 text-gray-700">Governance records maintained per engagement</td>
                  <td className="px-4 py-3 text-gray-700">Committee responsible for own record-keeping</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Compliance tracking</td>
                  <td className="px-4 py-3 text-gray-700">Ongoing legislative and regulatory monitoring</td>
                  <td className="px-4 py-3 text-gray-700">Internal review of fund lineup and investment options</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm leading-relaxed mt-6 italic">
            Sources: DOL Meeting Your Fiduciary Responsibilities; 2024 DC industry trends data
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Recent defined contribution research shows shows nearly half of sponsors reduced fees after their most recent review. In-house oversight works when your committee has expertise for investment management services. Outsourced support closes the gap when governance and <Link href="/plan-design/" className="text-navy underline hover:text-medium-blue transition-colors">plan design</Link> compete with core operations.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Fiduciary Support Process
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
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Why Choose PointOak for ERISA Fiduciary Support
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              More than half of plan sponsors now use an outside fiduciary to outsource governance. PointOak serves as a named 3(21) or 3(38) fiduciary with investment advisory services grounded in its proprietary Live Bid benchmarking methodology and open-architecture investment selection. The firm&apos;s fiduciary duty is documented, not implied.
            </p>
            <p>
              Many 401(k) plans have an advisor without defined fiduciary roles or accountability. PointOak operates as a fee-only, SEC-registered advisor with no recordkeeper affiliations, proprietary products, or commission incentives. Learn more <Link href="/about/" className="text-navy underline hover:text-medium-blue transition-colors">about PointOak</Link> and how our investment professionals serve plan sponsors from the same side of the table as your committee.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* About PointOak */}
      <AnimateOnScroll>
      <section className="bg-[#F5F3EF] py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            About PointOak Retirement Advisors
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. We serve plan sponsors and high-net-worth individuals nationwide as an SEC-registered investment advisor. Our team brings over 50 years of collective experience and manages $1.08 billion in assets. Founder Darsh Makim, CRPC, has worked with plan sponsors and participants since 2005. <Link href="/contact/" className="text-navy underline hover:text-medium-blue transition-colors">Schedule a consultation</Link>.
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
