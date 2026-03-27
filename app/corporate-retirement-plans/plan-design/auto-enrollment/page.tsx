import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Automatic Enrollment 401(k) Consulting | PointOak",
  description: "PointOak helps plan sponsors design and implement 401(k) automatic enrollment. Named ERISA fiduciary with benchmarking expertise. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/plan-design/auto-enrollment/"
  }
};

const highlights = [
  "94% participation in auto-enrollment retirement plans",
  "Named 3(21) and 3(38) ERISA fiduciary",
  "Fee-only, zero commissions since 2017"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We review your plan document, default rates, escalation schedule, notice process, and QDIA alignment to identify gaps."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We recommend defaults, escalation, and employer contribution structures using current benchmarks and target date fund consulting for QDIA selection."
  },
  {
    number: 3,
    title: "Implement",
    description: "We coordinate with your plan provider and service provider to execute amendments, deliver notices, and monitor contribution requirements."
  }
];

const faqs = [
  {
    question: "What does automatic enrollment cost an employer?",
    answer: "Costs depend on plan type, employer contribution structure, and administrative complexity. QACA arrangements require either a matching contribution or a 3% nonelective contribution to all eligible employees. Administrative costs include plan document amendments, notice production, and payroll configuration. Costs vary significantly by plan size and design, so no standard industry range applies. Schedule a consultation with PointOak to evaluate your plan's specific cost structure and required employer contributions before committing to a design approach."
  },
  {
    question: "What is the difference between ACA, EACA, and QACA?",
    answer: "Each arrangement type offers different withdrawal rules, testing relief, and employer contribution requirements. ACA is the basic automatic enrollment arrangement with no special testing relief. EACA adds a permissible withdrawal window of up to 90 days, letting participants retrieve initial contributions. QACA provides nondiscrimination testing relief but requires employer contributions and an escalation schedule from 3% to at least 6%. PointOak helps plan sponsors choose the right arrangement within their fiduciary support obligations."
  },
  {
    question: "How often should plan sponsors review automatic enrollment settings?",
    answer: "Review at least annually before each new plan year begins. Annual review before each plan year beginning ensures defaults, escalation schedules, and automatic enrollment notice delivery timelines remain current. Market benchmarks for contribution rates shift over time, and a plan that was competitive three years ago may now lag behind peers. Regulators expect good faith compliance with evolving guidance, making periodic review part of a defensible fiduciary process."
  },
  {
    question: "Which employers are required to use automatic enrollment under SECURE 2.0?",
    answer: "Covered new 401(k) and 403(b) plans established after December 29, 2022, must comply. The requirement applies to plan years beginning after December 31, 2024. Exceptions include employers in existence fewer than three years, those with fewer than 10 employees, church plans, governmental plans, and SIMPLE IRA plans. Plans established before the cutoff date are excluded. The IRS proposed regulations on automatic enrollment provide additional detail on scope for plan sponsors evaluating obligations. Final regulations from the federal government are expected to clarify remaining questions."
  },
  {
    question: "Can employees opt out of automatic enrollment in a 401(k)?",
    answer: "Yes, participants who are auto enrolled can opt out or adjust their contribution level before deferrals begin. Participants must have the opportunity to elect a different amount or stop elective deferrals entirely before automatic enrollment takes effect. Under EACA plans, participants may also withdraw contributions already deducted within the first 90 days, receiving a refund minus applicable investment gains or losses. This opt-out protection is a participant right under the plan terms."
  },
  {
    question: "What is the default contribution rate for automatic enrollment?",
    answer: "Plans can set any rate, though market practice has moved well above 3%. QACA plans must start at a minimum of 3% with annual increases to at least 6%. Beyond that floor, the majority of plans now set defaults higher, reflecting a broader shift in plan design expectations. Roth contributions can also be included as a default option under certain automatic enrollment designs, giving participants tax diversification within their retirement account from day one."
  },
  {
    question: "What should a plan sponsor look for in an advisor for automatic enrollment?",
    answer: "Look for SECURE 2.0 expertise, benchmarking capability, and named fiduciary accountability. Five areas matter: SECURE Act 2.0 applicability analysis for your specific plan, design benchmarking against current market data, notice and communication process management, QDIA and default investment guidance, and administrative coordination across your recordkeeper and payroll systems. PointOak addresses each as a named ERISA fiduciary with a documented, fee-only engagement structure and independent benchmarking methodology."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Automatic Enrollment Consulting",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Automatic Enrollment Implementation",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function AutoEnrollmentPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Plan Design", href: "/corporate-retirement-plans/plan-design" },
          { label: "Automatic Enrollment" }
        ]}
        title="401(k) Automatic Enrollment: Plan Design, Compliance, and Advisory Support"
        subtitle="Automatic enrollment 401k design drives your retirement plan's compliance and participation outcomes far beyond the payroll toggle. SECURE Act 2.0 requires the automatic enrollment feature for covered new plans established after December 31, 2024, raising stakes for plan sponsors who treat implementation as a checkbox. PointOak Retirement Advisors helps you design, benchmark, and implement automatic enrollment through plan design consulting backed by named ERISA fiduciary accountability."
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
            Benefits of Automatic Enrollment
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Higher Plan Participation Without Manual Outreach</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Voluntary enrollment depends on HR convincing eligible employees to participate one at a time through emails, meetings, and follow-ups. Auto enrollment reverses that default so participants are automatically enrolled unless they actively opt out. The shift helps attract talent that expects competitive retirement benefits without requiring constant outreach from your benefits team.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Stronger Retirement Outcomes for Participants</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Higher default contribution rates paired with annual escalation move plan participants toward retirement-adequate retirement savings over time. A participant starting at 4% who increases 1% per year reaches meaningful accumulation within a decade, securing their financial future. That long term growth happens without a single active decision from the participant.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Reduced Fiduciary Risk Through Structured Compliance</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Documented auto-enrollment design with timely notices, a qualified default investment, and matching contribution schedules aligned to plan terms builds a defensible fiduciary record. Employer contributions structured correctly under the plan further reduce exposure. <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:underline">Fiduciary support</Link> turns compliance from a liability question into a repeatable protocol your committee can stand behind.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Alignment with Current Industry Standards</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                By year-end 2024, 61% of defined contribution plans had adopted automatic enrollment, according to <a href="https://workplace.vanguard.com/content/dam/inst/iig-transformation/insights/pdf/2025/has/2025_How_America_Saves.pdf" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Vanguard&apos;s How America Saves 2025</a>. Plan sponsors without it are the exception, not the norm. Staying with voluntary-only enrollment signals a plan design that has not kept pace with market practice, participant expectations, or regulatory direction under the SECURE Act.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Simplified Onboarding for New Hires</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                New hires enter the plan at eligibility without paperwork delays or enrollment meetings. <Link href="/corporate-retirement-plans/education-and-communications" className="text-medium-blue hover:underline">Participant education programs</Link> shift from "how to sign up" to "how to use your plan effectively." A modern auto-enrollment design simplifies onboarding for small business owners while giving new employees immediate access to contribute toward retirement.
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
            How Automatic Enrollment Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Eligible employees are enrolled at a default contribution rate, with automatic contributions deducted from each employee&apos;s wages unless they elect a different percentage or opt out. Automatic enrollment contributions made without an investment direction go into qualified default investment alternatives per <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-automatic-enrollment" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">IRS automatic enrollment guidance</a>. Plan sponsors must deliver an <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:underline">investment analysis</Link>-compliant notice 30 to 90 days before eligibility, covering default investment selections and available investment options.
            </p>
            <p>
              Two-thirds of automatic enrollment plans now include automatic annual deferral increases, raising each participant&apos;s contribution level each plan year toward a higher target. This escalation design compounds the initial participation effect. Participants move from minimum defaults toward retirement-adequate savings as plan investments and contribution amounts grow without requiring active decisions.
            </p>
          </div>
          <div className="mt-8 bg-navy text-white rounded-lg p-6 md:p-8">
            <p className="font-outfit text-base leading-relaxed">
              <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-warm-gold hover:underline font-semibold">Schedule a consultation</a> to discuss your plan&apos;s automatic enrollment design and compliance requirements.
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
            Who Needs Automatic Enrollment Consulting
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Not every plan sponsor needs outside help with automatic enrollment. Our <Link href="/corporate-retirement-plans" className="text-medium-blue hover:underline">retirement plan consulting services</Link> are designed for situations like these.
          </p>
          <div className="space-y-8">
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Are Establishing a New 401(k) Plan</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The SECURE Act and its successor legislation require employers to include automatic enrollment for covered new plans established after the cutoff date. Your plan documents must reflect the correct enrollment structure from launch, because the design choices you make now follow your plan forward.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Current Plan Uses Voluntary Enrollment Only</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Participation in voluntary-only plans trails auto-enrollment plans significantly. Adding automatic enrollment closes that gap without requiring HR to chase every employee individually for your employer&apos;s plan. If employees eligible for the plan are not joining, the enrollment method is the first design variable to revisit.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Default Rate Has Not Changed in Years</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A 3% default set years ago no longer reflects current market practice. Reviewing your default contribution rate and escalation schedule against current benchmarks may reveal gaps in participant savings trajectory and your committee&apos;s fiduciary documentation. Most Americans now expect higher defaults aligned with retirement adequacy research.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Are Navigating a Plan Merger or Acquisition</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plan mergers change how automatic enrollment applies to incoming participants. Design rules, notice requirements, and plan year provisions need fresh review when an employee leaves employment at an acquired company and enters your existing plan. This is not a copy-and-paste exercise.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Committee Wants to Benchmark Plan Design</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                You need current data on adoption rates, default levels, and escalation design to evaluate whether your plan meets certain criteria for competitiveness. Independent benchmarking using actual plan data and other documents provides context that recordkeeper-generated reports alone cannot offer.
              </p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">When Automatic Enrollment Consulting Might NOT Be the Right Fit</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If your plan already documents auto-enrollment with current notices, competitive defaults, and escalation in place, a full design engagement may not be necessary. A focused compliance review may be sufficient.
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
            Automatic Enrollment vs. Voluntary Enrollment
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Both approaches permit employees to contribute to a retirement plan. This comparison clarifies where automatic enrollment requirements, elective deferrals, investment choices, and contribution levels differ under current SECURE 2.0 standards.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Voluntary Enrollment</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Automatic Enrollment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Employee Action Required</td>
                  <td className="px-4 py-3 text-gray-700">Must elect to enroll</td>
                  <td className="px-4 py-3 text-gray-700">Enrolled unless they opt out</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Typical Participation Rate</td>
                  <td className="px-4 py-3 text-gray-700">Lower</td>
                  <td className="px-4 py-3 text-gray-700">Materially higher</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Default Contribution Rate</td>
                  <td className="px-4 py-3 text-gray-700">Not applicable</td>
                  <td className="px-4 py-3 text-gray-700">Commonly 4% or higher; 61% of plans now default above 3%</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Escalation Feature</td>
                  <td className="px-4 py-3 text-gray-700">Not standard</td>
                  <td className="px-4 py-3 text-gray-700">Commonly includes annual increases</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">QDIA Required</td>
                  <td className="px-4 py-3 text-gray-700">Only if plan offers a default option</td>
                  <td className="px-4 py-3 text-gray-700">Required for defaulted contributions</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">SECURE 2.0 Mandate</td>
                  <td className="px-4 py-3 text-gray-700">No mandate</td>
                  <td className="px-4 py-3 text-gray-700">Required for covered new plans</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Notice Requirements</td>
                  <td className="px-4 py-3 text-gray-700">Summary plan description disclosure</td>
                  <td className="px-4 py-3 text-gray-700">Initial and annual automatic enrollment notice required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm italic mt-6">
            Sources: Vanguard How America Saves 2025; <a href="https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/publications/automatic-enrollment-401k-plans-for-small-businesses" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">DOL automatic enrollment guidance</a>
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Voluntary enrollment works for plans with consistently high organic engagement. When participants are auto enrolled by default, plans show stronger outcomes across participation, savings adequacy, and fiduciary documentation. <Link href="/corporate-retirement-plans/provider-and-fee-benchmarking" className="text-medium-blue hover:underline">Provider and fee benchmarking</Link> ensures your plan&apos;s contribution structure and costs remain competitive regardless of enrollment approach.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Automatic Enrollment Process
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
            Why Choose PointOak for Automatic Enrollment
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Plan sponsors sometimes treat auto-enrollment as a simple plan setting. Correct implementation requires plan-document amendments, notice timing, QDIA selection, escalation design, and employer contribution decisions that interact with one another. PointOak operates as a named 3(21) or 3(38) fiduciary under ERISA, taking documented responsibility for your business&apos;s retirement plan design rather than providing general commentary.
            </p>
            <p>
              Our fee-only model eliminates conflicts from commissions or proprietary products. PointOak&apos;s Live Bid benchmarking process reviews 450+ data points per bidder using actual plan data, giving plan sponsors independent evaluation rather than recordkeeper-driven recommendations. Learn more <Link href="/about" className="text-medium-blue hover:underline">about PointOak</Link> and our approach to retirement plan consulting.
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
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. SEC-registered investment advisor serving high-net-worth individuals and corporate plan sponsors nationwide. Over $1.08 billion in assets under management with 50+ years of collective team experience. Founder Darsh Makim, CRPC, has worked with plan sponsors and participants since 2005. <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Schedule a consultation</a>: (703) 595-4444. Meet <Link href="/our-consulting-team" className="text-medium-blue hover:underline">our consulting team</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Book a consultation</a> to review your plan&apos;s automatic enrollment design and next steps.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
