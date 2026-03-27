import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Financial Wellness Programs | PointOak Retirement Advisors",
  description: "Financial wellness programs that connect employee financial health to retirement outcomes. Fee-only fiduciary advisory for plan sponsors. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/education-communications/financial-wellness/"
  }
};

const highlights = [
  "Fee-only fiduciary since inception",
  "Advising plan sponsors since 2005",
  "Independent, open-architecture guidance"
];

const processSteps = [
  {
    number: 1,
    title: "Assess Your Current Plan and Workforce Needs",
    description: "We evaluate your benefits landscape, plan structure, and participant financial wellness gaps."
  },
  {
    number: 2,
    title: "Design a Program Around Your Workforce",
    description: "We build a program integrating education, coaching, and investment analysis with your plan strategy."
  },
  {
    number: 3,
    title: "Launch with Enrollment and Communication Support",
    description: "Your program goes live with participant communications, enrollment guidance, and access to resources."
  },
  {
    number: 4,
    title: "Deliver Ongoing Education and Coaching",
    description: "Participants receive scheduled sessions, decision-support tools, and coaching aligned with plan milestones."
  },
  {
    number: 5,
    title: "Monitor Outcomes and Adjust",
    description: "We track participation, engagement, and plan-level behavior changes, then refine the program based on results."
  }
];

const faqs = [
  {
    question: "How much does a financial wellness program cost?",
    answer: "Costs vary based on program scope, participant count, and the level of personalization your workforce requires. Financial wellness program cost depends on whether you need education-only content, coaching, or integrated advisory. Broader scope with personalized guidance costs more than off-the-shelf webinar packages, and PointOak operates fee-only, so no hidden product commissions from financial institutions influence recommendations. Schedule a consultation to discuss pricing for your plan."
  },
  {
    question: "What's the difference between financial education and financial coaching?",
    answer: "Education provides knowledge; coaching applies it to individual decisions and behavior change. Financial education delivers information through workshops, webinars, or online content on budgeting, saving, and debt. Financial coaching works one-on-one with participants to apply that knowledge to their specific situation and financial priorities. Most employer programs stop at education; fewer provide the personalized coaching that drives behavior change."
  },
  {
    question: "How do you measure whether a financial wellness program is working?",
    answer: "Track participation rates, engagement depth, and plan-level behavior changes over time. Effective measurement goes beyond webinar attendance. A successful financial wellness program tracks utilization of coaching sessions, shifts in savings rates, changes in employee participation in the retirement plan, and self-reported financial confidence scores. PointOak monitors plan-level data alongside engagement metrics to determine whether your program is improving outcomes or just generating activity."
  },
  {
    question: "What is a financial wellness program?",
    answer: "A structured company benefit helping employees manage finances, reduce debt, and build toward retirement. Financial programs combine education, planning tools, and coaching to address participants' financial lives. Programs cover budgeting, debt management, emergency savings, and retirement planning. The scope ranges from basic resources to integrated advisory. What makes financial wellness important is connecting these elements to behavior change."
  },
  {
    question: "Are financial wellness programs worth it for employers?",
    answer: "Programs addressing real financial stress show measurable returns in engagement, retention, and plan performance. Employers with financially stressed workforces see the impact in absenteeism, turnover, and low retirement-plan engagement. Programs that improve financial stability reduce those costs. The return is clearest when you measure shifts in savings behavior, plan participation, and retention metrics against program spend rather than relying on survey satisfaction alone."
  },
  {
    question: "Do employees actually use financial wellness programs?",
    answer: "Usage depends on program design, but well-structured programs consistently see strong participation rates. Engagement rises when programs address relevant financial goals rather than generic topics. Programs tied to real decisions, such as enrollment periods, life changes, or debt payoff planning, see higher utilization. The employer's communication strategy and manager support also affect adoption."
  },
  {
    question: "Is a recordkeeper's education enough, or do we need a broader program?",
    answer: "Recordkeeper education covers retirement basics but usually stops short of day-to-day financial guidance. Most recordkeepers provide enrollment support and retirement-focused webinars but rarely address student loan assistance, emergency savings accounts, or daily cash-flow stress. PointOak builds financial programs connecting broader financial health to retirement-plan engagement. If your participants face financial challenges outside the plan, recordkeeper education alone is insufficient."
  },
  {
    question: "How do you evaluate a financial wellness provider?",
    answer: "Evaluate depth of service, personalization, retirement-plan integration, fiduciary alignment, and measurement capabilities. Start with whether the provider acts as a fiduciary and whether recommendations are independent of product sales. PointOak recommends assessing personalization depth, how closely the program connects to your retirement plan, the provider's measurement approach, and whether product commissions from financial institutions influence guidance. A provider that only delivers generic content is not offering a financial wellness program."
  },
  {
    question: "What should a workplace financial wellness program include?",
    answer: "Core components include education, coaching, debt and emergency savings support, and retirement-plan integration. A workplace financial wellness program covers budgeting tools, one-on-one coaching, debt management, student loan support, emergency fund building, and retirement-plan integration. Stronger programs connect employer matching contributions, tax benefits, and healthcare costs to measurable participant outcomes. Each component should tie to financial goals that improve plan-level engagement."
  },
  {
    question: "How do financial wellness programs support retirement planning?",
    answer: "They address the financial stress that prevents employees from engaging with their retirement plan. Employees carrying high-interest debt or lacking emergency savings rarely prioritize retirement contributions. Financial wellness programs that tackle day-to-day barriers free participants to take full advantage of their employer's plan, including wealth management services coordination for higher-earning participants. When employees feel financially stable, retirement engagement improves across contribution rates and investment selection."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Financial Wellness Programs",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Employee Financial Wellness Programs",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function FinancialWellnessPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Education & Communications", href: "/corporate-retirement-plans/education-communications" },
          { label: "Financial Wellness Programs" }
        ]}
        title="Financial Wellness Programs That Drive Retirement Outcomes"
        subtitle="Financial stress among employees is a plan-level problem affecting retirement readiness across your workforce. PwC's 2023 Employee Financial Wellness Survey found 60% of full-time U.S. employees were stressed about finances. PointOak Retirement Advisors designs employee financial wellness programs that connect financial well-being to retirement-plan outcomes."
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
            Benefits of Financial Wellness Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Reduced Productivity Loss</h3>
              <p className="text-gray-600 leading-relaxed">
                PwC's 2023 survey found one in three full-time employees said money worries negatively affected their productivity. Reduced financial stress translates directly to recaptured work hours. Programs targeting the causes of financial distraction deliver measurable gains in focus and output.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Stronger Retirement Plan Outcomes</h3>
              <p className="text-gray-600 leading-relaxed">
                Financial health and retirement planning are not separate conversations. Employees carrying debt, lacking emergency savings, or managing cash-flow shortfalls are less likely to increase retirement savings, regardless of income level. <Link href="/education-and-communications-program" className="text-medium-blue hover:underline">Education and communications programs</Link> that address day-to-day financial stability free participants to engage with retirement planning.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Improved Employee Retention and Satisfaction</h3>
              <p className="text-gray-600 leading-relaxed">
                Benefits packages with structured financial support give employers a measurable retention edge. Employee satisfaction rises when people see investment in their long term financial security beyond a standard 401(k). That signal matters in competitive markets where job satisfaction differentiates comparable offers.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Better Employee Financial Confidence</h3>
              <p className="text-gray-600 leading-relaxed">
                Financial confidence grows when employees move from anxiety to action. Improved mental health and workplace focus follow. Participants with control over daily finances engage more actively with their retirement plan, strengthening employee financial wellness and contribution rates.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Measurable Return on Benefit Spend</h3>
              <p className="text-gray-600 leading-relaxed">
                An effective financial wellness program tracks engagement depth, savings-rate changes, and plan participation shifts rather than attendance. That data lets plan sponsors evaluate whether the investment drives real behavior change. Measuring outcomes turns financial wellness from a soft perk into an accountable line item.
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
            How Financial Wellness Programs Work
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-6">
            Integrated wellness programs combine financial education, personalized financial guidance, and <Link href="/our-services" className="text-medium-blue hover:underline">retirement plan consulting services</Link> into a single framework. Financial coaching, digital financial tools, and one-on-one financial counseling work together so participants act on what they learn. Static content libraries and annual webinars inform but rarely change behavior.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-6">
            The 2024 TIAA Institute-GFLEC Personal Finance Index found U.S. adults answered only 48% of personal finance questions correctly. That financial literacy gap explains why financial education programs alone fall short. Participants need guided decision-making backed by real financial knowledge and practical financial wellness resources.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            Evaluate how a financial wellness program connects to your retirement-plan outcomes. <Link href="/contact" className="text-medium-blue hover:underline">Schedule a consultation</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs Financial Wellness Programs
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Not every organization needs an integrated financial wellness program. These scenarios signal when your plan and workforce do.
          </p>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Declining Participation Despite Available Benefits</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Participation rates have stalled and feedback points to financial challenges outside the retirement plan. Participants disengage because financial worries closer to home take priority over long-term savings.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Low Engagement with Recordkeeper Education</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your recordkeeper offers webinars and calculators, but utilization sits in single digits. Employees manage enrollment and stop engaging. Generic content fails to address the financial struggles preventing higher contributions.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Retention Pressure with No Benefit Differentiation</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Retention pressure is rising and your benefits package lacks differentiation. Employees facing financial pressure from student loan debt or family obligations see workplace financial wellness as a deciding factor.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Plan Committee Seeking Governance Integration</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your plan committee wants financial wellness integrated into fiduciary oversight and <Link href="/plan-design" className="text-medium-blue hover:underline">retirement plan design</Link>. The financial burden on participants affects plan-level outcomes, and addressing it falls within governance responsibility.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Multi-Generational Workforce with Varied Financial Concerns</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A multi-generational workforce faces different financial concerns at every career stage. Younger employees carry student loans and lack an emergency fund. Pre-retirement participants need debt management and distribution planning to achieve financial stability.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">When an Integrated Program May Not Be Necessary</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If your plan sees strong participation through recordkeeper education and your workforce shows minimal financial distress, basic enrollment communications may be sufficient. Not every plan needs an integrated program.
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
            Financial Wellness Programs vs. Education-Only Approaches
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Plan sponsors are not debating whether to offer financial wellness benefits. The question is which workplace financial wellness program matches your workforce.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Integrated Financial Wellness Program</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Education-Only / Recordkeeper Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Scope of Support</td>
                  <td className="px-4 py-3 text-gray-700">Full financial life: budgeting, debt, savings, retirement</td>
                  <td className="px-4 py-3 text-gray-700">Retirement-focused enrollment and contribution guidance</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Personalization</td>
                  <td className="px-4 py-3 text-gray-700">One-on-one coaching and financial counseling</td>
                  <td className="px-4 py-3 text-gray-700">Group webinars and self-service tools</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Delivery Model</td>
                  <td className="px-4 py-3 text-gray-700">Ongoing advisory with scheduled touchpoints</td>
                  <td className="px-4 py-3 text-gray-700">Periodic campaigns tied to enrollment windows</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Retirement-Plan Integration</td>
                  <td className="px-4 py-3 text-gray-700">Coordinated with plan design, investment menu, and fiduciary goals</td>
                  <td className="px-4 py-3 text-gray-700">Standalone content, not connected to plan governance</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Objectivity</td>
                  <td className="px-4 py-3 text-gray-700">Fee-only, fiduciary-aligned, no product sales</td>
                  <td className="px-4 py-3 text-gray-700">May promote recordkeeper proprietary funds</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Measurement</td>
                  <td className="px-4 py-3 text-gray-700">Participation depth, behavior shifts, plan-level outcomes</td>
                  <td className="px-4 py-3 text-gray-700">Attendance, click rates, basic engagement</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            EBRI's 2024 employer survey found 53% of employers offer planning education but only 44% provide personalized counseling or coaching. Financial wellness solutions limited to education fall short. Integrated financial wellness initiatives succeed when your committee ties retirement readiness metrics to <Link href="/fiduciary-support" className="text-medium-blue hover:underline">fiduciary support</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Financial Wellness Program Process
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
            Why Choose PointOak for Financial Wellness Programs
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-6">
            PwC reported 68% of employees who said their employer offered financial wellness services had used them. The engagement concern plan sponsors raise most often has a clear answer: programs designed around participants' financial lives drive usage. Our approach connects financial support directly to retirement-plan outcomes because we understand the plan side, not just the wellness side.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            Recordkeeper education covers retirement basics. It does not assist employees with debt, emergency savings, or daily cash-flow decisions that keep them from saving more. Learn <Link href="/about" className="text-medium-blue hover:underline">about PointOak</Link> and how <Link href="/our-consulting-team" className="text-medium-blue hover:underline">our consulting team</Link> builds programs where employees feel financially secure.
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
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. We provide retirement plan consulting and wealth management for clients nationwide. As an SEC-registered investment advisor held to the fiduciary standard since inception, our team brings over $1.08 billion in assets under management and 50+ years of collective experience. <Link href="/contact" className="text-medium-blue hover:underline">Schedule a complimentary consultation</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed text-center">
            See how a financial wellness program connects to your retirement-plan outcomes. <Link href="/contact" className="text-medium-blue hover:underline">Book a complimentary consultation</Link> with PointOak.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
