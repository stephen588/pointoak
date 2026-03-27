import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "3(21) Fiduciary Advisor Services for 401(k) Plans | PointOak",
  description: "Named 3(21) fiduciary advisor for 401(k) plans. PointOak reviews investments, supports ERISA compliance, and documents every decision. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/fiduciary-support/3-21/"
  }
};

const highlights = [
  "450+ data points reviewed per plan bidder",
  "Named 3(21) and 3(38) ERISA fiduciary",
  "Fee-only fiduciary since 2017"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We review your current plan structure, investment lineup, fees, and fiduciary documentation to identify gaps."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We present documented recommendations for investment changes, fee adjustments, and governance improvements with required disclosures."
  },
  {
    number: 3,
    title: "Implement",
    description: "We put approved changes into action, document every decision, and establish ongoing monitoring to manage your plan's performance."
  }
];

const faqs = [
  {
    question: "How much does 3(21) fiduciary advisory cost?",
    answer: "Cost depends on plan asset size, the scope of fiduciary services provided, and how frequently the advisor meets with the investment committee. Eligible employers with 50 or fewer employees can offset costs through the IRS startup-cost tax credit. The credit allows up to $5,000 in the first year plus $500 per year for three years for adding auto-enrollment. PointOak operates on a fee-only model with no commissions or indirect compensation. Schedule a consultation to discuss your plan."
  },
  {
    question: "What is the difference between a 3(21) and 3(38) fiduciary?",
    answer: "The core distinction is retained authority versus delegated authority. Under a 3(21) arrangement, the advisor provides recommendations and the committee makes the final call. Under a 3(38) arrangement, the manager controls the lineup independently. PointOak serves as both a named 3(21) and 3(38) fiduciary depending on your governance preference."
  },
  {
    question: "What should be included in a 3(21) fiduciary agreement?",
    answer: "A complete written agreement includes the advisor's fiduciary acknowledgment under ERISA, scope of investment advice, fee and compensation disclosure, committee review frequency, documentation commitments, and termination provisions. The DOL emphasizes clear agreements that leave no ambiguity about responsibilities. PointOak provides documented agreements specifying fiduciary scope, including coordination with target date fund consulting and the correct paperwork for each engagement."
  },
  {
    question: "What is a 3(21) fiduciary advisor?",
    answer: "ERISA Section 3(21) defines a fiduciary as someone who renders investment advice for compensation on a regular basis, with the understanding that advice serves as a primary basis for investment decisions. This creates shared responsibility: the advisor provides investment recommendations, and the plan sponsor retains final authority over the employee benefit plan's lineup."
  },
  {
    question: "Does a 3(21) advisor reduce fiduciary liability?",
    answer: "The advisor becomes a co-fiduciary, which means the employee retirement income security act requires documented expert support for investment decisions. The sponsor still must monitor performance and ensure fees are reasonable. Reduced exposure comes from the documented process, not blanket liability transfer. That fiduciary record demonstrates prudent governance."
  },
  {
    question: "What responsibilities stay with the plan sponsor under a 3(21) arrangement?",
    answer: "ERISA requires sponsors to prudently select and monitor the 3(21) provider, review fee reasonableness, approve every investment lineup change, and maintain fiduciary documentation. The DOL expects ongoing oversight, not a one-time delegation. Plan participants depend on the committee to verify the advisory relationship serves the plan's objectives."
  },
  {
    question: "How do you evaluate a 3(21) fiduciary advisor?",
    answer: "Five criteria matter most: a written fiduciary role statement, full fee disclosure per ERISA 408(b)(2), a documented monitoring cadence, cybersecurity diligence aligned with DOL cybersecurity guidance, and retirement-outcome orientation beyond fund menus. PointOak addresses each through the provider and fee benchmarking methodology and named fiduciary commitment."
  },
  {
    question: "Can the same advisor serve as both a 3(21) and 3(38) fiduciary?",
    answer: "Some advisors hold both designations and structure the engagement based on how much authority the committee wants to retain. PointOak serves as both a named 3(21) fiduciary advisor and a 3(38) investment manager, allowing plan sponsors to choose the model that fits their governance needs without changing providers."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "3(21) Fiduciary Advisor Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "3(21) Co-Fiduciary Advisory",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function ThreeTwentyOnePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Fiduciary Support", href: "/corporate-retirement-plans/fiduciary-support" },
          { label: "3(21) Fiduciary Services" }
        ]}
        title="3(21) Fiduciary Advisor Services for Retirement Plan Sponsors"
        subtitle="Investment decisions in your 401(k) plan carry fiduciary weight for plan participants and plan sponsors alike. PSCA reports 67% of plan sponsors now use a 3(21) fiduciary advisor on their 401(k) plan. PointOak Retirement Advisors is a named 3(21) fiduciary advisor, providing investment advice and fiduciary support while you retain authority."
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
            Benefits of 3(21) Fiduciary Advisory
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Structured Investment Oversight</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A 3(21) advisor reviews your plan's investments against the IPS and documents each recommendation. 401(k) plans hold $10.0 trillion in plan assets across roughly 730,000 plans (ICI 2025), making ad hoc fund selection a fiduciary liability. Structured <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:text-navy underline">investment analysis</Link> replaces guesswork with documented investment decisions.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Documented ERISA Compliance</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Every recommendation and committee discussion is recorded, building a fiduciary file that demonstrates prudent process under <a href="https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/publications/meeting-your-fiduciary-responsibilities" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">DOL fiduciary guidance</a>. If the DOL reviews your plan, that documentation shows plan fiduciaries followed a disciplined approach to managing retirement plan assets and meeting ERISA reporting requirements.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Transparent Fee Assessment</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A 3(21) advisor evaluates whether plan fees and indirect compensation are reasonable under ERISA 408(b)(2). This <Link href="/corporate-retirement-plans/provider-fee-benchmarking" className="text-medium-blue hover:text-navy underline">fee benchmarking</Link> process helps you meet disclosure requirements and demonstrate to participants that every dollar spent on plan service providers serves their best interest and protects plan assets.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Retained Authority Over Your Investment Lineup</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Unlike a 3(38) investment manager arrangement, the plan sponsor keeps final decision authority over the investment lineup. The financial advisor recommends changes based on documented analysis. The committee approves, modifies, or rejects each recommendation, preserving fiduciary responsibility where it belongs.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Stronger Committee Decision-Making</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Regular advisor-led reviews give committee members structured agendas, data-backed investment options, and documented rationale for every change. Plan documents reflect each decision, creating accountability that strengthens governance across the entire committee and other plan fiduciaries.
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
            How 3(21) Fiduciary Advisory Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Under ERISA, a 3(21) investment fiduciary provides advice for a fee, triggering co-fiduciary responsibility shared with the plan sponsor. The registered investment adviser provides investment recommendations aligned with your plan's objectives. The committee makes the final selection, and every recommendation is recorded in the fiduciary file.
            </p>
            <p>
              This structure combines outside expertise with internal accountability. The advisor's role is to provide advice, market analysis, and investment policy statement alignment reviews with documented rationale. The committee retains discretionary authority to accept, modify, or reject each recommendation, preserving governance control over <Link href="/corporate-retirement-plans/plan-design" className="text-medium-blue hover:text-navy underline">plan design</Link> and management decisions.
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
            Who Needs a 3(21) Fiduciary Advisor
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            The need depends on your committee's expertise, plan complexity, and how much authority you want to retain.
          </p>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Investment Committee Lacks Fiduciary Expertise</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Committee members serve governance roles but may not have investment backgrounds. A named 3(21) fiduciary advisor provides the analysis and documentation your committee needs to make prudent decisions alongside <Link href="/corporate-retirement-plans/participant-education" className="text-medium-blue hover:text-navy underline">participant education programs</Link> for employees.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your 401(k) Plan Has Outgrown Ad Hoc Fund Selection</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The average 401(k) plan offered 29 investment options in 2024 (ICI). Without structured review, investment lineup changes happen reactively. A 3(21) advisor brings discipline to each selection and documents decisions for the plan administrator.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Current Advisor Isn't Acting as a Named Fiduciary</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Some financial advisors provide recommendations without accepting fiduciary responsibility. A 3(21) arrangement puts accountability in a written agreement, clarifying who is responsible and how plan administrative functions are handled.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Want Expert Guidance but Prefer to Retain Final Authority</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plan administrators and business owners who want co-fiduciary support without delegating full discretion fit the 3(21) model. Your company retains control over investment decisions while gaining documented guidance that serves employees.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You're Concerned About DOL Scrutiny or Audit Exposure</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The DOL expects documented evidence of prudent process behind every plan decision. A 3(21) fiduciary advisor builds that fiduciary file alongside your committee, covering each review, recommendation, and rationale.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-cloud-blue rounded-lg">
            <p className="text-text-gray font-outfit text-base leading-relaxed">
              <strong className="text-navy">When 3(21) isn't the right fit:</strong> If the sponsor wants to fully delegate investment discretion, a 3(38) investment manager is the better model. That arrangement transfers selection authority to the manager rather than sharing it with the committee.
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
            3(21) Fiduciary Advisor vs. 3(38) Investment Manager
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Both models are valid under separate sections of ERISA. The right choice depends on how much investment authority your committee wants to retain.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Dimension</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">3(21) Fiduciary Advisor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">3(38) Investment Manager</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Role</td>
                  <td className="px-4 py-3 text-gray-700">Recommends investments; sponsor decides</td>
                  <td className="px-4 py-3 text-gray-700">Selects and manages investments with full discretion</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Sponsor Authority</td>
                  <td className="px-4 py-3 text-gray-700">Retained; committee approves all changes</td>
                  <td className="px-4 py-3 text-gray-700">Delegated; manager acts independently</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Shared Responsibility</td>
                  <td className="px-4 py-3 text-gray-700">Co-fiduciary; sponsor monitors the service provider</td>
                  <td className="px-4 py-3 text-gray-700">Sponsor monitors manager but does not select funds</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Adoption Rate</td>
                  <td className="px-4 py-3 text-gray-700">About one-third of plans (PSCA 2024)</td>
                  <td className="px-4 py-3 text-gray-700">About one-quarter of plans (PSCA 2024)</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Best Fit</td>
                  <td className="px-4 py-3 text-gray-700">Sponsors wanting expert input with governance control</td>
                  <td className="px-4 py-3 text-gray-700">Sponsors wanting full delegation of investment decisions</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Most sponsors maintain fiduciary responsibility for investment selection under a 3(21) arrangement (Voya 2025). When the committee wants expert guidance with retained authority, the 3(21) model fits. When full delegation is preferred, a 3(38) investment manager transfers discretion. PointOak's <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:text-navy underline">fiduciary support services</Link> cover both.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our 3(21) Fiduciary Advisory Process
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
            Why Choose PointOak for 3(21) Fiduciary Advisory
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Voya's 2025 survey found 91% of sponsors believed participants were prepared for retirement, but only 69% of participants agreed. That gap signals a need for advisory relationships built on rigorous plan analysis. Our <Link href="/about/our-team" className="text-medium-blue hover:text-navy underline">consulting team's</Link> deep corporate retirement plan background means every 3(21) engagement draws on real-world exposure to diverse plan designs, participant scenarios, and provider benchmarking across clients.
            </p>
            <p>
              The most common concern: does hiring a 3(21) advisor reduce liability? The answer is in <Link href="/about" className="text-medium-blue hover:text-navy underline">our approach</Link>. Every recommendation is documented under law, every fee assessed through the Live Bid methodology. Independence from any bank or insurance company means each recommendation serves your interest alone.
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
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. We serve plan sponsors and high-net-worth individuals nationwide through retirement plan consulting and wealth management. As an SEC-registered investment advisor and fiduciary since inception, we manage over $1.08 billion in assets under management with more than 50 years of collective team experience. <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule your consultation</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed text-center">
            Call (703) 595-4444 or <Link href="/contact" className="text-medium-blue hover:text-navy underline">schedule a consultation</Link> to discuss 3(21) fiduciary support for your plan.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
