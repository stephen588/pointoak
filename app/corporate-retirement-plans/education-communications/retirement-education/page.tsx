import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Retirement Education for Employees | Workplace Programs | PointOak",
  description: "Retirement education for employees that increases participation and protects plan sponsors. Licensed advisors, customized programs, full fiduciary documentation. 90% revenue from retirement plans. Get started today.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/education-communications/retirement-education/"
  }
};

const highlights = [
  "Licensed securities advisors lead sessions",
  "Customized to your workforce demographics",
  "Full documentation for fiduciary protection"
];

const processSteps = [
  {
    number: 1,
    title: "Assess Your Current Education Gaps",
    description: "We review participation rates and contribution levels to identify education needs and compare your plan against a similar plan in your industry."
  },
  {
    number: 2,
    title: "Customize Your Education Program",
    description: "Based on workforce demographics and company culture, we design sessions covering topics that matter most to your employees."
  },
  {
    number: 3,
    title: "Deliver Engaging Education",
    description: "Our licensed advisors lead sessions using plain language, real examples, and interactive tools that make retirement planning accessible."
  },
  {
    number: 4,
    title: "Document Everything for Compliance",
    description: "All education is recorded in your Virtual 401(k) Fiduciary File, demonstrating commitment to employee financial well being."
  },
  {
    number: 5,
    title: "Monitor and Adjust",
    description: "We track participation changes and gather employee feedback to continuously improve your retirement education program."
  }
];

const faqs = [
  {
    question: "How much does retirement education for employees cost?",
    answer: "Education program pricing depends on workforce size, session frequency, and format. Many plan sponsors find improved participation and reduced fiduciary risk (factors that affect savings) justify the investment. Contact us for a customized proposal."
  },
  {
    question: "What makes PointOak different from other retirement education providers?",
    answer: "Three factors distinguish our approach: we generate over 90% of revenue from retirement plans (true specialists), all advisors act as named fiduciaries under ERISA, and we're independently owned with no proprietary products to push. Your employees receive objective guidance."
  },
  {
    question: "How long does it take to implement an education program?",
    answer: "Most programs launch within 4-6 weeks. The process includes workforce assessment, content customization, and delivery. Ongoing programs follow your cadence, whether quarterly sessions, annual enrollment meetings, or new hire onboarding."
  },
  {
    question: "How do you educate employees about retirement plans?",
    answer: "We use multiple formats based on workforce needs: in-person group sessions, one-on-one consultations, online webinars, and combo approaches. All sessions are led by licensed securities advisors who explain retirement savings and investment basics in accessible language."
  },
  {
    question: "What should retirement plan education include?",
    answer: "Effective programs cover plan features, enrollment procedures, employer match, contribution strategies, and investment options. We also address debt management and how retirement benefits fit into employees' overall financial plan."
  },
  {
    question: "How often should retirement education be provided?",
    answer: "Annual education is the minimum, but lifecycle touchpoints work better. Within a few years, your workforce changes as employees get a raise, build earnings, and approach retirement. We recommend education at onboarding, enrollment, and career milestones."
  },
  {
    question: "Do employers have to provide retirement education?",
    answer: "No legal requirement mandates education, but ERISA 404(c) safe harbor requires specific participant information. Education helps satisfy these requirements while improving outcomes. Documentation protects you during Department of Labor audits."
  },
  {
    question: "How can employers help employees prepare for retirement?",
    answer: "Beyond education, employers can implement automatic enrollment, auto-escalation, and appropriate plan design elements. Education works best when combined with features that make saving the default."
  },
  {
    question: "Why do some employees avoid enrolling in retirement plans?",
    answer: "Research shows 40% say they're &quot;too busy&quot; and 19% find it &quot;too much hassle.&quot; Financial constraints rank lower than expected. Effective education addresses these behavioral barriers by simplifying decisions. We focus on removing friction, not just providing information."
  },
  {
    question: "What&apos;s the difference between retirement education and investment advice?",
    answer: "Education covers general principles: how plans work, the importance of saving, and broad investment concepts. Advice involves specific recommendations for individual situations. As your 3(21) or 3(38) fiduciary, PointOak provides both, helping employees understand options and make appropriate choices."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Retirement Education for Employees",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Employee Retirement Education Programs",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function RetirementEducationPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Education & Communications", href: "/corporate-retirement-plans/education-communications" },
          { label: "Employee Retirement Education" }
        ]}
        title="Retirement Education for Employees: Building Financial Security Through Workplace Programs"
        subtitle="Your employees have access to a retirement plan. But are they using it effectively? 67% of participants grade the retirement industry &quot;C, D, or F&quot; for explaining saving and investing. PointOak Retirement Advisors helps plan sponsors close this gap with customized education programs that drive participation and protect your fiduciary responsibilities."
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
            Why Choose Us for Employee Retirement Education?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Nearly 9 in 10 employees want their employer involved in retirement education, yet most HR departments learn retirement plans alongside the workers they teach. PointOak generates over 90% of revenue from corporate retirement plans, making us true retirement experts focused on helping your employees achieve financial security.
            </p>
            <p>
              What sets us apart is independence and fiduciary commitment. As a 3(21) or 3(38) named fiduciary under ERISA, we provide objective education without pressure to push proprietary products. Every session is documented in your Virtual 401(k) Fiduciary File, protecting you from Department of Labor audit liability.
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
            Our Employee Education Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Customized Group Education Sessions</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Our education and communications programs bring licensed securities advisors directly to your workplace. These interactive sessions cover saving for retirement fundamentals, investment options, and strategies for achieving financial security.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Group sessions create an environment where employees feel comfortable asking questions about personal finances. We tailor content to workforce demographics, whether you have young savers focused on debt or pre-retirees planning retirement income.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Interactive sessions with Q&amp;A</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Covers debt management and budgeting</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Tailored to workforce age and needs</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">One-on-One Consultation Sessions</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Some employees need personalized guidance to understand how their retirement plan fits into their overall financial plan. Our human advisors meet individually with workers to review account balances, contribution rates, and investment returns.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                These consultations help employees track retirement readiness and make informed decisions about salary deferrals, deducted amounts, and contributions. Many discover they can bank small amounts more when we explain the power of compound interest.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Personalized retirement readiness reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Allocation and contribution guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Confidential financial discussions</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Online Webinars and Virtual Education</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Remote and distributed workforces need flexible education resources. Our online webinars deliver the same substantive content as in-person sessions, allowing employees to participate regardless of location.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Virtual sessions work well for companies with multiple offices or workers who have less time during traditional hours. We record sessions so employees can access material later, ensuring everyone has the tools and resources needed to plan for a comfortable retirement.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Live and recorded session options</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Accessible from any location</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Same depth as in-person programs</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Combo Group and Breakout Sessions</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                For maximum impact, we combine group presentations with individual breakout consultations. Employees receive foundational education together, then discuss their specific situation privately with an advisor.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                This format addresses both general financial literacy and personal retirement goals efficiently. Plan sponsors appreciate the comprehensive approach, and employees leave with concrete action steps to help their family secure a better financial future.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Efficient use of education time</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Group learning plus personal guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Immediate action planning</span>
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
            Common Retirement Education Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Low participation despite plan access</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Only 53% of workers with access participate. Many cite being &quot;too busy&quot; or enrollment being &quot;too much hassle.&quot;</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We simplify messaging and focus on essential decisions. Sessions explain automatic enrollment, helping employees take advantage of employer matching and start saving.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Diverse financial literacy levels</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Your workforce spans generations with different money experiences. Young savers need debt guidance while pre-retirees focus on Social Security and Medicare benefits timing.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our lifecycle approach segments education by age and career stage, delivering relevant content to eligible Young Savers, Accumulators, and Pre-Retirees separately.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Choice overload reducing engagement</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Research shows for every 10 funds added to a plan, participation drops 1.5-2%. Too many investment options make the subject too complex.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We help employees understand target date funds and simplified strategies, reducing complexity that prevents action even when automatically enrolled.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fiduciary liability exposure</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">10% of plan sponsors faced ERISA class action lawsuits in five years. Inadequate documentation creates risk.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Every session is documented in your fiduciary support file, demonstrating ERISA 404(c) compliance.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Limited internal HR expertise</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Most HR professionals learn retirement details alongside employees, creating knowledge gaps.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our licensed advisors bring specialized retirement expertise, freeing HR to focus on other responsibilities.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Remote workforce accessibility</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Distributed teams make consistent education delivery challenging. Traditional sessions miss employees elsewhere.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We offer multiple formats including webinars, recorded sessions, and live demonstrations accessible anywhere.</td>
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
            Retirement Education Across the United States
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            From our McLean, Virginia headquarters, we serve plan sponsors nationwide. Whether your workforce is in one location or spread across multiple states, we customize education delivery to reach every eligible employee while meeting your fiduciary obligations under federal government regulations.
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
