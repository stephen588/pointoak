import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Financial Wellness Programs | Employee Financial Education | PointOak",
  description: "Fiduciary-grade financial wellness programs led by licensed securities advisors. Reduce employee financial stress, increase 401(k) participation & improve retention. Get expert guidance.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/education-communications/financial-wellness/"
  }
};

const highlights = [
  "Licensed securities advisors lead all sessions",
  "Plan-specific guidance (not generic budgeting tools)",
  "Documented for fiduciary compliance"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze Your Workforce Needs",
    description: "You share your plan participation rates, employee demographics, and specific financial wellness goals with our team."
  },
  {
    number: 2,
    title: "Design Your Program",
    description: "We create a customized financial education curriculum addressing your employees&apos; key areas of financial stress and retirement readiness gaps."
  },
  {
    number: 3,
    title: "Deliver Financial Education",
    description: "Licensed securities advisors facilitate sessions (in-person, virtual, or hybrid) that help employees gain financial confidence."
  },
  {
    number: 4,
    title: "Document Everything",
    description: "All program activities are documented in your fiduciary file, protecting you from liability while demonstrating your commitment to employee benefits."
  },
  {
    number: 5,
    title: "Measure and Adjust",
    description: "We track participation, engagement, and plan contribution changes, then optimize your program for increased productivity and reduced absenteeism."
  }
];

const faqs = [
  {
    question: "How much do financial wellness programs cost?",
    answer: "Program cost depends on your workforce size, session frequency, and delivery format (in-person, virtual, or hybrid). We provide transparent pricing during your initial consultation. Whether you run small businesses or large enterprises, our fiduciary-grade approach includes licensed advisors and full documentation for your employee benefits investment."
  },
  {
    question: "What makes PointOak different from other financial wellness providers?",
    answer: "Three things: our advisors are licensed securities professionals (not wellness coaches), we generate 90%+ of revenue from retirement plans (true specialists), and we act as fiduciaries. Our financial wellness solutions integrate directly with your 401(k), unlike standalone apps that ignore your plan's specific features."
  },
  {
    question: "How quickly can we implement a financial wellness program?",
    answer: "Most companies launch within 4-6 weeks of initial consultation. We handle curriculum development, scheduling, and communication materials. Implementation timelines depend on session complexity and whether you need custom content for specific employee demographics or financial challenges."
  },
  {
    question: "What is a financial wellness program?",
    answer: "A financial wellness program provides employees with financial education, resources, and personalized financial guidance to improve their financial health. Effective programs cover retirement planning, debt management, emergency fund building, and student loan assistance. Our programs go beyond generic budgeting tools to address your employees' specific financial lives."
  },
  {
    question: "Do financial wellness programs really work?",
    answer: "Yes. Research shows employees who receive retirement education contribute 50% more to their 401(k) plans. Companies with strong wellness programs see 18.8% higher retention rates. Our clients report less stress among employees, reduced absenteeism, and workers who feel financially secure about their financial future."
  },
  {
    question: "What should be included in a financial wellness program?",
    answer: "Effective financial wellness programs include retirement planning education, debt management strategies, emergency fund guidance, student loan debt resources, and personalized financial coaching. The right tools vary by workforce, but programs should address the broad range of personal finances challenges causing employee financial stress."
  },
  {
    question: "How do you measure the success of a financial wellness program?",
    answer: "We track participation rates, employee engagement, 401(k) contribution changes, loan rates, and hardship withdrawal trends. Clear communication with plan sponsors ensures you understand why financial wellness is important and your program ROI. Success means employees gain financial confidence while plan sponsors can retain talent."
  },
  {
    question: "How do financial wellness programs reduce turnover?",
    answer: "Financially stressed employees are twice as likely to seek new jobs. When employees feel financially secure, job satisfaction increases. Our financial wellness benefits address the root causes of financial worries, helping companies retain talent by demonstrating genuine investment in employee well being."
  },
  {
    question: "Is there actually data showing financial wellness programs help employees save more in their 401(k)?",
    answer: "Absolutely. The Department of Labor reports that employees receiving financial education contribute 50% more to retirement plans. Our programs specifically connect financial literacy to your plan's features, ensuring employees understand employer matching contributions and take full advantage of available benefits."
  },
  {
    question: "My employees are taking 401(k) loans constantly. Would a financial wellness program help?",
    answer: "Yes. High loan rates indicate employees lack emergency funds and face unexpected expenses without alternatives. Our financial wellness initiatives teach building savings, managing debt, and handling financial shock without raiding retirement accounts. Many employers see loan rates drop significantly after implementing comprehensive financial education programs."
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
        title="Financial Wellness Programs for Your Workforce"
        subtitle="Your employees are struggling with financial stress, and it&apos;s affecting their work performance and retirement readiness. PointOak Retirement Advisors delivers fiduciary-grade financial wellness programs led by licensed securities advisors who help employees feel financially secure and on the right path toward financial freedom."
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
            Why Choose Us for Employee Financial Wellness Programs?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Financial stress costs U.S. businesses $183 billion annually in lost productivity, with many employees spending 3+ hours per week at work managing personal finances. PointOak generates over 90% of its revenue from working with corporate retirement plans, giving us unique expertise in connecting financial education to retirement planning outcomes.
            </p>
            <p>
              What sets us apart is our fiduciary approach to financial wellness. Unlike recordkeeper-affiliated programs or generic wellness apps, we provide personalized financial guidance through licensed advisors who act in your employees&apos; best interests. Our sessions integrate directly with your 401(k) plan, addressing the specific investment education and debt management challenges your workforce faces.
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
            Our Financial Education Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Customized Group Education Sessions</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Our education and communications programs bring licensed securities advisors directly to your workplace for interactive financial wellness sessions. These in-person meetings cover debt management, budgeting tools, retirement planning, and building savings strategies tailored to your employees&apos; financial challenges. Think of it as financial counseling integrated with your retirement plan.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Group sessions create engagement and encourage active participation in their financial journey. Employees gain access to expert guidance on managing debt, understanding their 401(k) options, and setting realistic financial goals for long-term financial stability.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Interactive sessions with licensed advisors</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Topics customized to workforce demographics</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Documented attendance for fiduciary files</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Online Webinars</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Virtual financial education programs serve distributed workforces and remote employees who need financial wellness resources without geographic barriers. Webinars cover the same comprehensive topics as in-person sessions, from emergency fund strategies to retirement readiness planning.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Your employees can participate from anywhere while gaining financial knowledge that helps them feel more confidence about their future. These sessions address student loan debt, everyday expenses, and retirement planning with the same fiduciary-grade content.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Accessible for remote and hybrid teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Recorded sessions available for replay</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Live Q&amp;A with licensed advisors</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">1-on-1 Consultation Sessions</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Individual retirement account reviews give employees personalized financial guidance on their specific financial struggles and goals. Licensed advisors help participants understand their 401(k) allocation, evaluate employer matching contributions, and create actionable plans for financial security.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                These private consultations address sensitive topics like student debt, financial worries, and unexpected expenses. Employees leave with clear next steps for their financial lives and more confidence in their overall well being.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Private, confidential financial reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Allocation assistance for 401(k) accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Personalized action plans provided</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Combo Group + Breakout Sessions</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Our most effective financial wellness program format combines group presentations with individual consultation breakouts. Employees receive broad financial education during group sessions, then gain access to one-on-one time for personalized financial support.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                This approach maximizes engagement while respecting that many employees have private financial challenges. The combo format drives higher participation and better retention of financial knowledge.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Group learning plus private consultations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Higher engagement than standalone formats</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Addresses broad range of financial needs</span>
                </li>
              </ul>
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
            Common Financial Wellness Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Low Program Utilization</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Employees don&apos;t attend lunch-and-learns or engage with digital wellness programs despite available resources.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our licensed advisors create engaging sessions that address real financial worries, driving participation through relevant content.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Generic Content</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Recordkeeper-provided tools offer budgeting tips but no connection to your specific 401(k) plan or investment options.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We deliver plan-specific financial education tied directly to your retirement plan features, auto-enrollment, and auto-escalation.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fiduciary Documentation Gaps</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">No proof that financial education efforts meet ERISA standards for participant communication and retirement readiness.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Every session is documented in your virtual 401(k) fiduciary file, demonstrating your commitment to employee financial well being.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">High 401(k) Loan Rates</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Employees constantly borrow against retirement accounts for unexpected expenses, damaging their financial future.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our emergency fund and debt management education helps employees build savings instead of borrowing from retirement.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Financial Stress Affecting Work</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Employee financial stress creates a silent productivity killer, with workers distracted by money management concerns.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Comprehensive financial wellness initiatives address root causes, improving mental health and work performance.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Disconnect From Retirement Goals</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Employees don&apos;t understand how today&apos;s financial decisions impact their retirement planning and long-term financial security.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We connect everyday expenses and student loan assistance discussions directly to retirement readiness outcomes.</td>
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
            What To Expect: Our Process
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
