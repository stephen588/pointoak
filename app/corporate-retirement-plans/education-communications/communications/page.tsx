import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401k Employee Communications | PointOak Retirement Advisors",
  description: "Strategic 401(k) employee communications from a named ERISA fiduciary. Plans with proactive design reach 94% vs 64% participation. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/education-communications/communications/"
  }
};

const highlights = [
  "Named ERISA 3(21) and 3(38) fiduciary",
  "Fee-only, no recordkeeper commissions",
  "Independent from all plan providers"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We review your current participant communications, enrollment data, and plan features to identify where engagement breaks down."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We design a segmented communication strategy with channel, timing, and messaging recommendations specific to your workforce and essential plan features."
  },
  {
    number: 3,
    title: "Implement",
    description: "Our team deploys communications, tracks participant engagement, and adjusts our approach based on results."
  }
];

const faqs = [
  {
    question: "How much does 401(k) communication consulting cost?",
    answer: "PointOak's fees vary by plan size and engagement scope, with no commissions, recordkeeper revenue, or product sales involved. PointOak operates on a fee-only model. There are no commissions from recordkeepers or product providers influencing recommendations. Communication strategy consulting is typically part of a broader retirement plan consulting engagement, with fees structured around plan complexity and asset size. The initial meeting is a complimentary consultation with no cost and no obligation. Specific fee structures are discussed during that conversation once we understand your plan's scope. Plans implementing new payroll-integrated communications may have different needs than those refining existing programs."
  },
  {
    question: "What's the difference between required 401(k) notices and employee education?",
    answer: "Required notices satisfy IRS and ERISA legal obligations, while education and communications programs drive participation and savings behavior. IRS and ERISA mandate specific disclosures including the summary plan description, safe harbor notices, and auto-enrollment notices. These documents explain plan terms and participant rights. Education goes further: it prompts employees to review contribution rates, understand investment options, and take action at career milestones. PointOak helps plan sponsors build both the compliance layer and the engagement strategy that helps employees save for retirement."
  },
  {
    question: "Does better 401(k) communication actually increase participation?",
    answer: "Targeted communication campaigns produce measurable increases in participant engagement, account activity, and 401(k) plan participation rates. Plans with proactive communication strategies show higher participation and more frequent contribution reviews than those relying on default notices alone. PointOak designs communication programs tied to measurable outcomes, tracking election changes, deferral increases, and account activity so plan sponsors can see what is working and where to invest future resources."
  },
  {
    question: "How do you communicate a 401(k) plan to employees effectively?",
    answer: "Effective communication segments messages by employee group, delivers them through accessible channels, and ties content to specific plan features that matter to participants. Start with what employees care about: the company match, their money, and what they need to do. Deliver enrollment and contribution messaging through channels employees actually use, including personal email, text, and print for non-desk workers. Avoid jargon and communicate the value of starting contributions early so employees save consistently. Time messages to moments when employees are most receptive, not just during open enrollment."
  },
  {
    question: "What should be included in a 401(k) employee communication plan?",
    answer: "A communication plan covers enrollment, match details, contribution limits, investment options, and trigger-based outreach at career milestones. Beyond legally required notices, include onboarding materials for new hires, annual contribution limit updates (the 2026 employee limit is $24,500), Roth election explanations, re-engagement campaigns for non-participants, and retirement readiness content for near-retirement employees. PointOak maps each communication to a specific plan feature and participant action so nothing is sent without a purpose. Financial literacy content helps employees understand how their contributions grow over time and the role of consistent retirement savings."
  },
  {
    question: "Why do employees ignore retirement-plan emails?",
    answer: "Most retirement-plan messages arrive at the wrong time, through the wrong channel, with no clear action step. Capital Group research found employees deleted or ignored retirement communications sent during working hours, especially in shift-based or patient-care environments. Employees were more receptive before and after shifts and on days off. Timing, channel, and a clear call to action determine whether a message about how to save and invest gets read or ignored."
  },
  {
    question: "What should plan sponsors look for in a 401(k) communication partner?",
    answer: "Look for independence from recordkeepers, workforce segmentation capability, measurable reporting, and integration with your plan design. A communication partner should separate compliance notices from engagement campaigns, avoid jargon that confuses participants, and track measurable outcomes beyond emails sent. PointOak operates independently from all providers, builds communication strategies around your specific plan data, and ties every message to features like auto-escalation and Roth options that help employees participate and save for the future. We communicate directly with participants and coordinate with your payroll team to ensure contribution changes take effect smoothly."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Employee Communications",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "401(k) Employee Communications Strategy",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function CommunicationsPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Education & Communications", href: "/corporate-retirement-plans/education-communications" },
          { label: "Communications" }
        ]}
        title="401(k) Employee Communications That Drive Participation"
        subtitle="Most plan sponsors treat required notices as their 401(k) plan's communication strategy. Vanguard's 2025 data shows 401(k) plans with automatic enrollment reached 94% participation versus 64% for voluntary enrollment, proving plan design and communication are inseparable. PointOak Retirement Advisors designs 401(k) employee communications that connect plan features to participant action."
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
            Benefits of 401(k) Employee Communications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Higher Plan Participation Rates</h3>
              <p className="text-gray-600 leading-relaxed">
                A targeted communication case study documented a 91% increase in account-balance visits after a 10-week targeted communication campaign at a single employer. Clear and consistent communication moves employees from passive enrollment to active engagement with their retirement savings and investment decisions.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Increased Employee Savings Rates</h3>
              <p className="text-gray-600 leading-relaxed">
                Targeted messages prompt employees to save more through their 401(k). The same campaign produced a 30% increase in contribution percentage reviews, showing participants reconsidered how much to contribute after receiving communications tied to their specific plan features and retirement benefits.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Stronger ERISA Compliance Documentation</h3>
              <p className="text-gray-600 leading-relaxed">
                Communications that document plan disclosures, auto-enrollment notices, and participant acknowledgments build a defensible <Link href="/fiduciary-support" className="text-medium-blue hover:underline">fiduciary support</Link> file. During a DOL audit, plan sponsors with organized records of notice delivery and financial education outreach demonstrate the prudent process regulators expect.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">More Confident Investment Decisions</h3>
              <p className="text-gray-600 leading-relaxed">
                Participants who understand the <Link href="/investment-analysis" className="text-medium-blue hover:underline">investment analysis</Link> behind their 401(k) plan's fund menu and the value of their company match make informed decisions rather than passive defaults. Financial literacy around these features turns employees into confident participants who actively manage their investments and retirement benefits.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Measurable Engagement Outcomes</h3>
              <p className="text-gray-600 leading-relaxed">
                Advisor-led communication programs track opens, account visits, election changes, and contribution adjustments. Plan sponsors get data their recordkeeper's generic emails do not provide: evidence that financial wellness communications are changing behavior, not just reaching inboxes.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* How It Works */}
      <AnimateOnScroll>
      <section className="bg-[#F5F3EF] py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How 401(k) Employee Communications Work
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-6">
            Effective 401(k) communication strategies segment messages by employee cohort: new hires, mid-career, and near-retirement. Each group receives content through various communication channels they actually use, timed to attention windows rather than business hours. Payroll integration ensures contribution changes from enrollment or investment options decisions take effect seamlessly.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-6">
            <a href="https://workplace.vanguard.com/content/dam/inst/iig-transformation/insights/pdf/2025/has/2025_How_America_Saves.pdf" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Vanguard's 2025 How America Saves report</a> found 45% of participants increased their deferral rate in 2024, many through automatic enrollment escalation prompts. This supports a lifecycle process where communications tie to specific <Link href="/plan-design" className="text-medium-blue hover:underline">plan design</Link> features like default contribution rate increases and Roth election windows rather than a single enrollment burst.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            <Link href="/contact" className="text-medium-blue hover:underline">Schedule a consultation</Link> to review your plan's participant communication strategy.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs a 401(k) Communication Strategy
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Not every 401(k) plan needs an advisor-led communication strategy. These situations signal your current approach is falling short.
          </p>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Participation Has Stalled Despite a Company Match</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your company offers a match, but eligible employees still don't participate or contribute beyond the default. Communication isn't reaching them or explaining the value of their retirement benefits clearly enough.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Workforce Includes Non-Desk or Shift Employees</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Recordkeeper emails go unread when your workforce doesn't sit at desks. Frontline and field employees need multi-channel delivery timed to off-hours attention windows, not messages buried in an inbox they rarely access.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Recently Adopted Auto-Enrollment Under SECURE 2.0</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                New auto-enrollment plans require specific IRS notices and participant education about defaults, opt-out rights, and escalation features. <Link href="/education-and-communications-program" className="text-medium-blue hover:underline">Education and communications programs</Link> help employers meet these requirements while driving engagement beyond the compliance paperwork.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Employees Rarely Change Contributions or Investment Elections</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Low engagement after enrollment means participants set and forget, missing benefits like auto-escalation or Roth options. Financial wellness programs re-engage employees at career milestones when contribution changes matter most.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Plan Is Approaching a DOL Audit or Fiduciary Review</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Documentation of participant communications, notice delivery, and education programs strengthens your fiduciary file. Plan sponsors approaching an audit need evidence that eligible employees received required disclosures and had access to plan education.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">When a Communication Strategy May Not Be the Priority</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If your 401(k) plan already shows 90%+ participation, strong deferral rates, and documented compliance, the investment may be better directed toward plan design optimization or <Link href="/provider-and-fee-benchmarking" className="text-medium-blue hover:underline">fee benchmarking</Link>.
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
            Strategic Communications vs. Required Notices Only
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Required notices and strategic communications both serve plan sponsors. The difference is between satisfying a legally required disclosure and changing how employees approach their investment choices.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Dimension</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Required Notices Only</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Advisor-Led Communication Strategy</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Primary Goal</td>
                  <td className="px-4 py-3 text-gray-700">Satisfy IRS and DOL disclosure requirements</td>
                  <td className="px-4 py-3 text-gray-700">Drive measurable participation, contributions, and savings behavior</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Content Type</td>
                  <td className="px-4 py-3 text-gray-700">Summary plan description, safe harbor notice, auto-enrollment notice</td>
                  <td className="px-4 py-3 text-gray-700">Enrollment campaigns, company match explanations, contribution prompts, retirement readiness education</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Delivery Timing</td>
                  <td className="px-4 py-3 text-gray-700">IRS 30-90 day window before plan year</td>
                  <td className="px-4 py-3 text-gray-700">Lifecycle-based: onboarding, raises, milestones, annual reviews</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Audience Segmentation</td>
                  <td className="px-4 py-3 text-gray-700">All eligible employees receive identical documents</td>
                  <td className="px-4 py-3 text-gray-700">Segmented by tenure, age, role, and contribution level</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Measurable Outcomes</td>
                  <td className="px-4 py-3 text-gray-700">Delivery confirmation and acknowledgment</td>
                  <td className="px-4 py-3 text-gray-700">Account visits, election changes, deferral increases, engagement tracking</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Participation Impact</td>
                  <td className="px-4 py-3 text-gray-700">61% adopted auto-enrollment; engagement beyond defaults still needed</td>
                  <td className="px-4 py-3 text-gray-700">Targeted campaigns lift account visits and contribution reviews measurably</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm leading-relaxed mt-6 italic">
            Sources: Vanguard How America Saves 2025; IRS Retirement Notices guidance
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Required notices are the floor. Plan sponsors with flat participation, low deferral rates, or disengaged participants after enrollment need a communication strategy that goes beyond compliance. PointOak's <Link href="/our-services" className="text-medium-blue hover:underline">corporate retirement plan consulting</Link> connects compliance documentation with engagement strategies that move retirement outcomes.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Communication Strategy Process
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
            Why Choose PointOak for 401(k) Employee Communications
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-6">
            The <a href="https://www.ebri.org/docs/default-source/rcs/2025-rcs/rcs_25-fs-2.pdf" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">EBRI/Greenwald 2025 Retirement Confidence Survey</a> found 84% of workers expect workplace retirement plans to be a retirement income source. Your communications directly affect whether participants feel confident or caught off guard. <Link href="/our-consulting-team" className="text-medium-blue hover:underline">Our consulting team</Link> brings deep plan sponsor experience to every communication strategy, implementing approaches that lead to measurable engagement.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            Recordkeepers send generic emails because their business model depends on platform retention, not participant outcomes. PointOak is independent from every recordkeeper and provider. Communication recommendations are based on what changes participant behavior, not what keeps a platform contract in place.
          </p>
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
            PointOak Retirement Advisors is a fee-only, SEC-registered investment advisor founded in 2017 and headquartered in McLean, Virginia. We provide corporate retirement plan consulting and wealth management for plan sponsors and high-net-worth individuals nationwide. Our team brings over 50 years of collective experience and manages over $1.08 billion in assets under management. Darsh Makim, CRPC, leads every client engagement. <Link href="/contact" className="text-medium-blue hover:underline">Schedule your consultation</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed text-center">
            Call PointOak at (703) 595-4444 or <Link href="/contact" className="text-medium-blue hover:underline">schedule a consultation</Link> to discuss your plan's communication strategy.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
