import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Retirement Education for Employees | PointOak",
  description: "Fiduciary-aligned retirement education programs that close the readiness gap between what sponsors assume and what participants experience. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/education-communications/retirement-education/"
  }
};

const highlights = [
  "Named ERISA 3(21) and 3(38) fiduciary",
  "Working with plan sponsors since 2005",
  "Year-round programs by workforce stage"
];

const faqs = [
  {
    question: "What does an employee retirement education program cost?",
    answer: "Pricing depends on workforce size, education scope, and delivery format. The primary cost factors are participant count, session frequency, customization level, and whether delivery includes webinars, group sessions, or individual meetings. PointOak operates on a fee-only model with no commissions or product-based revenue, so education recommendations serve your participants rather than a sales agenda. Your initial consultation is complimentary with no obligation. Schedule a consultation to discuss scope and pricing for your plan."
  },
  {
    question: "What is the difference between advisor-led retirement education and recordkeeper materials?",
    answer: "Advisor-led programs are personalized, fiduciary-aligned, and designed to change savings behavior. Recordkeeper materials typically cover enrollment basics and fund descriptions available through the platform. Advisor-led retirement education addresses income planning, catch-up strategies, workforce segmentation, and personal finances in context. PointOak delivers education as a named ERISA fiduciary, which means the content is aligned with your participants' financial well being rather than provider and fee benchmarking considerations or product revenue."
  },
  {
    question: "How often should employers provide retirement education?",
    answer: "Effective programs run year-round rather than only during open enrollment periods. Sustained education cadence improves both understanding and action. Program frequency should align with plan changes, annual contribution-limit updates, workforce milestones, and savings goals at each career stage. A single enrollment-season campaign does not address the range of financial matters or savings fitness issues that arise across an employee's career."
  },
  {
    question: "How do you educate employees about their retirement plan?",
    answer: "Structured sessions segmented by career stage covering savings strategy, investing, and income planning. PointOak combines group sessions, webinars, and individual support designed for each workforce segment. Early-career participants learn about tax advantages, the employer match, and the power of starting early. Mid-career and near-retirement participants receive guidance on catch-up contributions, Social Security Administration benefit timing, and building retirement income. Each session helps employees understand how their personal finances connect to their retirement benefit."
  },
  {
    question: "What should employee retirement education include?",
    answer: "Education should cover savings strategy, investment basics, catch-up rules, and retirement income planning. A complete program addresses accumulation strategy, asset allocation decisions, employer match optimization, and near-retirement income decisions. The scope should match your workforce demographics. Plans with younger employees cover individual retirement account options and the value of free money in the match. Plans with an older workforce prioritize distribution strategy, Social Security coordination, and whether to roll assets into a new employer's plan or a similar plan structure."
  },
  {
    question: "How can employers improve retirement readiness?",
    answer: "Combine plan design features with targeted, ongoing education segmented by workforce stage. Readiness improves when education reinforces plan design features like auto-enrollment and employer match rather than operating in isolation. PointOak connects each session to provisions participants can act on, from early-career saving habits to near-retirement income strategy. The goal is participants who feel financially secure because they understand their plan and can make informed decisions about contributions, investment allocation, and retirement timing."
  },
  {
    question: "Why do employees ignore retirement plan emails until open enrollment?",
    answer: "Most plan communications are generic, infrequent, and disconnected from employees' actual financial questions. Timing, relevance, and format determine whether participants engage with retirement content. Year-round delivery through multiple channels outperforms periodic email blasts because it meets participants at moments that matter in their financial lives. Webinars, group sessions, and individual support create engagement that periodic newsletters about different tax advantages and contribution limits cannot replicate. Former employees frequently report that insufficient ongoing education cost them retirement benefits they could have captured."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Assess Your Current Education and Participation Data",
    description: "We review your communications, deferral rates, and readiness indicators to identify where employees need support with saving and investment decisions."
  },
  {
    number: 2,
    title: "Identify Workforce Segments and Knowledge Gaps",
    description: "Your workforce is mapped by career stage, saving patterns, and retirement proximity to address gaps in contributions and income planning."
  },
  {
    number: 3,
    title: "Design a Customized Education Strategy",
    description: "You receive a year-round calendar aligned to each segment's overall financial plan and retirement savings goals."
  },
  {
    number: 4,
    title: "Deliver Sessions and Communications",
    description: "Sessions help employees understand their investment options and retirement planning questions at each career stage."
  },
  {
    number: 5,
    title: "Monitor Outcomes and Refine the Program",
    description: "We track engagement and contribution changes, then adjust your company's education program to improve plan outcomes."
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
          { label: "Retirement Education" }
        ]}
        title="Retirement Education for Employees: Programs That Improve Readiness"
        subtitle="Plan sponsors consistently overestimate retirement readiness across their workforce. 91% of sponsors believe participants are prepared, while only 69% of participants agree. PointOak Retirement Advisors closes that gap with retirement education for employees delivered year-round and segmented by workforce stage."
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
            Benefits of Retirement Education for Employees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Higher Participant Engagement and Confidence</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Two-thirds of workers want more financial education from their employers. <a href="https://www.transamerica.com/retirement/guidance" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Transamerica&apos;s retirement guidance research</a> (2025) found 66% of employees seek information and advice on retirement goals from their employer sponsored plan.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Structured retirement education responds to that demand and builds confidence in achieving financial security through consistent saving for retirement.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Stronger Savings Behavior Across Career Stages</h3>
              <p className="text-gray-600 leading-relaxed">
                Auto-enrollment gets employees into the plan, but it does not increase retirement savings beyond the default rate. Research shows targeted financial education tied to career stage and financial goals increases voluntary contributions that auto-features alone cannot produce. That shift helps employees reach their retirement income targets and build long-term financial security.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Reduced Fiduciary Exposure Through Documented Education</h3>
              <p className="text-gray-600 leading-relaxed">
                The Employee Retirement Income Security Act requires plan sponsors to act prudently in participant communications. A structured education program creates a documented record for your fiduciary file, demonstrating that your committee fulfilled its obligation to inform participants. PointOak&apos;s <Link href="/fiduciary-support" className="text-medium-blue hover:underline">fiduciary support</Link> integrates directly with this effort.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Improved Retention and Recruitment Value</h3>
              <p className="text-gray-600 leading-relaxed">
                The Department of Labor recognizes that a strong retirement benefit helps employers attract and retain employees. Many employers use education programs as a recruitment differentiator alongside health benefits. Showing participants a path to a secure financial future increases the perceived value of the total compensation package.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Retirement-Income Preparedness Beyond Accumulation Basics</h3>
              <p className="text-gray-600 leading-relaxed">
                Most plan sponsor education programs focus exclusively on enrollment and fund selection. Participants approaching retirement need guidance on income needs, catch-up contributions, and Social Security timing. Financial education addressing these questions prepares participants for future financial security and helps younger employees understand the long-term benefits of early saving.
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
            How Retirement Education for Employees Works
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-6">
            Effective retirement plan education segments the workforce by career stage, savings level, and retirement proximity. Programs providing stage-appropriate retirement planning content improve financial literacy and drive stronger engagement. This is the foundation of <Link href="/our-services" className="text-medium-blue hover:underline">corporate retirement plan consulting</Link> that treats employee education as a behavior-change initiative, not a compliance checkbox.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-6">
            Cadence matters as much as content. <a href="https://www.psca.org/news/psca-news/2025/6/frequency-of-participant-education-campaigns/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">PSCA&apos;s 2025 participant education research</a> found 48.5% of sponsors now deliver year-round education, while 35% still communicate only as needed. Year-round programs outperform periodic email blasts through repetition and relevance, turning valuable resources into action across each participant&apos;s planning horizon.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            <Link href="/contact" className="text-medium-blue hover:underline">Schedule a consultation</Link> to discuss your plan&apos;s education strategy.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs Retirement Education for Employees
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Not every plan needs an outside education partner. These scenarios signal when your current approach is falling short.
          </p>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Participation Rate Has Plateaued Despite Auto-Enrollment</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Automatically enrolled employees often stay at default contributions indefinitely. Only 14% saved the statutory maximum in 2024 (Vanguard). Targeted education moves many employees past the default toward 401 k contributions that match their retirement income needs.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Employees Nearing Retirement Ask Basic Income Questions</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                When near-retirement participants still ask about catch-up rules or Social Security timing, your education program has a coverage gap. A secure retirement requires income-focused education on managing multiple retirement accounts, not enrollment reminders.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Rely on Recordkeeper Materials With Minimal Customization</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Default recordkeeper communications rarely change savings behavior. If your education is limited to periodic emails with generic content, participants lack the resources to start saving at the level their retirement accounts require.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Plan Recently Changed Providers or Added Features</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                New investment menus, match formulas, or auto-escalation features mean nothing if employees do not understand them. Transition periods create the highest-impact window for targeted education on contributions and plan features.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Committee Wants Documentation of Education Efforts</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Fiduciary files require evidence that your committee communicated plan changes and investment options to participants. A structured education program creates that documentation automatically while improving employee contributions and long-term retirement planning outcomes.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                <strong>Not the right fit?</strong> If your company does not yet have a retirement plan in place, <Link href="/plan-design" className="text-medium-blue hover:underline">plan design</Link> and setup should come first. Education programs work best after enrollment features and employer match formulas are established.
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
            Advisor-Led Retirement Education vs. Recordkeeper Default Communications
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Both approaches help employees understand investment options and risk tolerance. The right model depends on workforce complexity, your benefits structure, and how your committee defines readiness.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Dimension</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Advisor-Led Education</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Recordkeeper Default</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Personalization</td>
                  <td className="px-4 py-3 text-gray-700">Segmented by workforce stage, savings level, and retirement proximity</td>
                  <td className="px-4 py-3 text-gray-700">Standardized materials for all participants</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Communication cadence</td>
                  <td className="px-4 py-3 text-gray-700">Year-round webinars, group sessions, and individual support</td>
                  <td className="px-4 py-3 text-gray-700">Periodic emails, typically around enrollment</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Retirement income coverage</td>
                  <td className="px-4 py-3 text-gray-700">Income planning, asset allocation, catch-up strategies, Social Security</td>
                  <td className="px-4 py-3 text-gray-700">Enrollment basics and fund selection</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fiduciary alignment</td>
                  <td className="px-4 py-3 text-gray-700">Delivered by a named ERISA fiduciary</td>
                  <td className="px-4 py-3 text-gray-700">Content from the employer&apos;s plan recordkeeper</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Measurable outcomes</td>
                  <td className="px-4 py-3 text-gray-700">Tracks engagement, contribution changes, and readiness indicators</td>
                  <td className="px-4 py-3 text-gray-700">Tracks email opens and enrollment counts</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Workforce segmentation</td>
                  <td className="px-4 py-3 text-gray-700">Content for early-career, mid-career, and near-retirement employees</td>
                  <td className="px-4 py-3 text-gray-700">One message for all employees</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm leading-relaxed mt-6 italic">
            Sources: PSCA, 2025; Transamerica, 2025; PSCA citing Voya, 2025
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            PSCA citing Voya (2025) reports 77% of sponsors plan to add retirement income solutions within two years. Recordkeeper materials may suffice for simple plans with limited investment choices. PointOak&apos;s <Link href="/education-and-communications-program" className="text-medium-blue hover:underline">education and communications programs</Link> pair retirement experts with your specific investment lineup, covering compound interest, asset allocation, and contribution strategy so participants act on what they learn.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Retirement Education Process
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
            Why Choose PointOak for Retirement Education
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-6">
            The average employee-elective deferral rate was 7.7% in 2024, according to <a href="https://corporate.vanguard.com/content/dam/corp/research/pdf/how_america_saves_report_2025.pdf" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Vanguard&apos;s How America Saves 2025 report</a>. That figure reflects employers relying on auto-enrollment without reinforcing savings behavior through education. <Link href="/about" className="text-medium-blue hover:underline">Our approach to retirement plan consulting</Link> pairs retirement experts with plan-specific data to move participants past default rates and build retirement confidence.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            Your recordkeeper provides education materials, but that content serves the recordkeeper&apos;s platform, not your workforce&apos;s gaps. <Link href="/our-consulting-team" className="text-medium-blue hover:underline">Our senior advisors</Link> operate as a named ERISA fiduciary with no proprietary product incentives. The fee-only model builds every recommendation around participant outcomes, whether you work with federal government contractors or private-sector employers across multiple states.
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
            PointOak Retirement Advisors is a fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. We serve high-net-worth individuals and corporate plan sponsors nationwide as an SEC-registered investment advisor. Over $1.08 billion in assets under management, with 50+ years of collective experience across our team. Darsh Makim, CRPC, and his senior advisors work directly with every client. <Link href="/contact" className="text-medium-blue hover:underline">Schedule a consultation</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed text-center">
            Call (703) 595-4444 or <Link href="/contact" className="text-medium-blue hover:underline">schedule a consultation</Link> to review your plan&apos;s education approach.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
