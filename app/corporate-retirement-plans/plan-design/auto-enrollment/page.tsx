import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Automatic Enrollment 401k Compliance & Implementation | PointOak",
  description: "SECURE 2.0 automatic enrollment 401k compliance guidance for plan sponsors. Expert implementation, default rate strategy, correction procedures & fiduciary protection. 3(21)/3(38) services nationwide.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/plan-design/auto-enrollment/"
  }
};

const highlights = [
  "SECURE 2.0 compliant automatic enrollment implementation",
  "Named fiduciary protection for plan sponsors",
  "Meticulous documentation preventing costly compliance failures"
];

const processSteps = [
  {
    number: 1,
    title: "Compliance Assessment & Applicability Analysis",
    description: "You&apos;ll start with comprehensive review determining whether SECURE 2.0&apos;s mandate applies to your 401k plan. We analyze plan establishment dates, employee counts, and years in business to confirm requirements or exemptions for small businesses."
  },
  {
    number: 2,
    title: "Default Rate Selection & Contribution Design",
    description: "We conduct workforce analysis recommending optimal contribution rates and escalation schedules. You&apos;ll see how different percentage levels impact both participation and retirement readiness, using data from your employee demographics and compensation structures."
  },
  {
    number: 3,
    title: "Documentation & Amendment Development",
    description: "We draft required plan document amendments, Investment Policy Statement updates, and employee notification templates. You receive compliant documents ready for recordkeeper processing, all documented in your fiduciary file."
  },
  {
    number: 4,
    title: "Coordination & Implementation Execution",
    description: "We work with your payroll provider and recordkeeper to implement the automatic enrollment feature. You&apos;ll have minimal disruption as we handle technical setup, verify eligible employees appear correctly, and distribute required notices to participants."
  },
  {
    number: 5,
    title: "Ongoing Monitoring & Compliance Review",
    description: "Your relationship continues beyond implementation. We conduct quarterly monitoring to catch enrollment failures. You receive annual reviews confirming your automatic enrollment remains compliant with evolving rules. If we discover errors, we guide safe harbor correction procedures."
  }
];

const faqs = [
  {
    question: "Is automatic enrollment in 401k mandatory for all plans?",
    answer: "No, mandatory automatic enrollment applies only to new 401 k plans and 403(b) plans established after December 29, 2022, for plan years beginning after December 31, 2024. Plans established prior are not subject to the mandate. Exemptions exist for governmental plans, government plans, church plans, businesses with fewer employees (under 10), and businesses in existence less than three years. Multiple employer plans and single employer plans established before the effective date are grandfathered."
  },
  {
    question: "What are the requirements for automatic enrollment 401k compliance?",
    answer: "SECURE Act 2.0 requires plans to use default contribution rates between 3% and 10% of employee&apos;s wages for newly eligible employees. Plans must include automatic escalation increasing contributions by 1 percentage point annually until reaching 10-15% of compensation. Required notices must explain the automatic enrollment feature, contribution level options, investment choice in the default investment (typically a balanced fund or target date fund), and how to opt out or withdraw contributions within 90 days."
  },
  {
    question: "Can employees opt out of automatic enrollment 401k plans?",
    answer: "Yes, employees always retain the right to opt out of participation or change their contribution rate at any time. The automatic enrollment feature cannot require employees to participate against their wishes. Plans must provide clear information about how eligible employees can opt out, and the process must be straightforward. Under eligible automatic contribution arrangements, participants can withdraw automatically enrolled contributions within 90 days without the early withdrawal penalties that normally apply to retirement accounts."
  },
  {
    question: "What is the difference between EACA and QACA structures?",
    answer: "An eligible automatic contribution arrangement (EACA) requires specific required notices, allows 90-day permissible withdrawals, and provides safe harbor correction procedures. A qualified automatic contribution arrangement (QACA) includes EACA features plus requires employer contributions through matching (100% match on first 1% of pay and 50% on next 5%) or 3% nonelective contribution to all eligible employees. QACA plans receive nondiscrimination testing relief for highly compensated employees and non highly compensated employees."
  },
  {
    question: "What happens if you don&apos;t implement automatic enrollment when required?",
    answer: "Plans that fail to implement mandatory automatic enrollment face DOL penalties and required corrective contributions to affected employees. The employer&apos;s plan may lose qualified status, triggering tax consequences. Corrective contributions must make participants whole for missed retirement savings opportunities, and the dollar amount could be substantial if multiple employees were excluded. Enhanced correction procedures under the Internal Revenue Code offer some relief, but proper implementation is preferable."
  },
  {
    question: "Do you offer ongoing compliance monitoring for automatic enrollment?",
    answer: "Yes, our fiduciary services include comprehensive monitoring and support. We conduct quarterly reviews verifying your automatic enrollment feature operates correctly, catching census issues before they escalate. You receive annual compliance reviews confirming alignment with evolving rules. Our Virtual 401(k) Fiduciary Files maintain complete documentation protecting you in audits. As your named fiduciary, we share liability for automatic enrollment decisions."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatic Enrollment 401k Implementation Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "SECURE 2.0 Automatic Enrollment Compliance",
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
          { label: "Automatic Enrollment & Escalation" }
        ]}
        title="Automatic Enrollment 401k: SECURE 2.0 Compliance & Implementation Guidance"
        subtitle="You&apos;ve probably heard about SECURE 2.0&apos;s mandatory automatic enrollment requirements. But figuring out if it applies to your retirement plan, how to implement the automatic enrollment feature correctly, and what happens if you make a mistake can feel overwhelming. PointOak Retirement Advisors helps plan sponsors nationwide navigate auto enrollment requirements with confidence, protecting you from costly implementation errors while optimizing default contribution rates for employee retirement success."
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

      {/* Why Choose Us */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Why Choose PointOak for Automatic Enrollment 401k Implementation
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              We&apos;ve been advising plan sponsors on retirement plan compliance since day one, generating over 90% of our revenue from working with corporate 401k plans. What makes us different is our meticulous process. We document everything through Virtual 401(k) Fiduciary Files, which means if you face an audit, you&apos;ll have comprehensive records of every required notice sent, every investment election tracked, and every correction made.
            </p>
            <p>
              We apply institutional-grade methodology to help you design automatic contribution arrangements that work for eligible employees while satisfying contribution requirements.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Services */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Our Automatic Enrollment Implementation Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Fiduciary Support for Automatic Enrollment Compliance</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                We know that ensuring your retirement account programs comply with all fiduciary rules and mandates is not easy. SECURE 2.0&apos;s automatic enrollment requirements add complexity to plan sponsor obligations for plan years beginning after December 31, 2024. Acting as your 3(21) or 3(38) named fiduciary under ERISA, we help you navigate Department of Labor regulations surrounding eligible automatic contribution arrangements and automatic contribution arrangements.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our fiduciary support includes drafting Investment Policy Statement amendments for auto enrollment, establishing default contribution rates between 3% and 10% of compensation, and selecting appropriate default investment options. We help plans established after December 29, 2022 meet mandatory automatic enrollment rules while protecting plan sponsors from liability.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Plan Design Optimization for Automatic Enrollment</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Your automatic enrollment feature should optimize participation rates beyond basic compliance. We help you create automatic enrollment programs optimized for your workforce. With 93% participation in plans with automatic enrollment compared to 70% in voluntary enrollment, design choices matter. Research shows eligible employees who are automatically enrolled contribute at higher levels, with total retirement savings averaging 11% of pay versus 8% without auto enrollment.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our plan design services help you determine optimal default contribution levels (60% of plans now use 4% or higher), structure automatic escalation to reach the required 10-15% range, and design communications minimizing opt-outs. We analyze whether a traditional eligible automatic contribution arrangement or enhanced qualified automatic contribution arrangement makes sense for your business.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Implementation & Ongoing Administration</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                The difference between compliant and non-compliant automatic enrollment comes down to execution. Missing even five eligible employees from census data can trigger corrective employer contributions costing thousands. We guide implementation from plan document amendments through first payroll deduction, ensuring every eligible employee gets properly enrolled and every required notice gets distributed on time per the effective date.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our process coordinates with payroll providers and recordkeepers to establish automatic deduction features, verify census accuracy preventing omission errors, and create notification templates satisfying eligibility requirements. We maintain ongoing monitoring to catch administrative issues before they require safe harbor corrections.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Challenges Table */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Common Automatic Enrollment Challenges for Plan Sponsors
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-[#F3F4F6]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Challenge</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">What It Looks Like</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">How We Help</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">SECURE 2.0 Compliance Confusion</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Uncertainty whether the mandate applies based on establishment date, exemptions for businesses with fewer than 10 employees, or less than three years in operation. Governmental plans and church plans have different rules.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We analyze your situation against SECURE Act 2.0 requirements and provide definitive guidance on applicability, exemptions for new plan sponsors, and compliance deadlines.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Implementation Errors & Census Failures</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Missing eligible employees in auto enrollment due to incomplete census data or payroll integration problems. Employer makes corrective contributions if employees get excluded for consecutive years.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our meticulous verification catches omissions before they become problems requiring corrective employer contributions based on what participants would have received.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Default Contribution Rate Uncertainty</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Setting contribution levels too high triggers opt-outs while too low leaves employees undersaved. Research shows defaults are sticky with participants rarely changing initial investment elections or contribution percentages.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We analyze workforce demographics and industry benchmarks recommending rates balancing participation with adequacy, considering your compensation patterns and matching contribution structures.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Employee Communication Failures</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Not understanding required notice timing, missing distribution deadlines, or providing incomplete information about opt-out rights and 90-day withdrawal provisions under eligible automatic contribution arrangements.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We draft compliant notice templates and establish distribution tracking. Everything gets documented demonstrating regulatory compliance in audits per final regulations.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Escalation Design Problems</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Structuring annual escalation schedules reaching 10-15% without overwhelming participants. Balancing automatic increases with employee tolerance for higher contribution limits and elective deferrals.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We design escalation aligned with participant demographics, considering salary growth patterns and tolerance for increases. Our process helps employees benefit from taking advantage of higher retirement savings over time.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Correction Procedure Uncertainty</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Discovering enrollment failures months later and not knowing how to correct errors without penalties. Plans established prior to SECURE 2.0 may have different correction options than new plans.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We guide you through enhanced safe harbor correction procedures for automatic enrollment features. Our documentation proves reasonable correction efforts, potentially avoiding penalties entirely.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Automatic Enrollment Implementation Process
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

      {/* About */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            About PointOak Retirement Advisors
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            PointOak Retirement Advisors is an independent retirement plan consulting firm headquartered in McLean, Virginia, serving plan sponsors nationwide. The firm generates over 90% of its revenue from corporate retirement plans and acts as a 3(21) or 3(38) named fiduciary under ERISA with every client. PointOak evaluates over $120 billion in retirement plan assets quarterly.
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
