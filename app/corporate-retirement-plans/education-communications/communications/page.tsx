import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Employee Communications | Retirement Plan Education | PointOak",
  description: "401(k) employee communications that drive retirement plan participation. Licensed advisors lead customized education programs with full fiduciary documentation. Nationwide service.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/education-communications/communications/"
  }
};

const highlights = [
  "Licensed securities advisors lead all sessions",
  "Personalized messaging for multi-generational workforce",
  "Complete fiduciary documentation included"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We assess your current communication effectiveness, employee demographics, and participation gaps. You&apos;ll see exactly where your plan struggles."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We design a segmented strategy addressing your multi-generational workforce. Different employees need different messaging."
  },
  {
    number: 3,
    title: "Implement",
    description: "Our licensed advisors execute through sessions, webinars, and consultations. You receive complete fiduciary documentation and ongoing measurement."
  }
];

const faqs = [
  {
    question: "How much does 401(k) employee communication cost?",
    answer: "Costs depend on workforce size, session frequency, and scope. We discuss needs during an initial consultation and provide transparent pricing. Many employers find improved participation rates deliver meaningful ROI that exceeds program costs."
  },
  {
    question: "What makes PointOak Retirement Advisors different from other consultants?",
    answer: "Three things: we generate 90%+ of revenue from retirement plans (true specialists), our advisors act as named fiduciaries under ERISA, and we're independently owned. Your employees get unbiased advice focused on their success."
  },
  {
    question: "How long does it take to implement an education program?",
    answer: "Most programs launch within 4-6 weeks. We analyze your situation, optimize the strategy, then implement on your schedule. Ongoing programs continue throughout the year."
  },
  {
    question: "How do I communicate my 401k to employees effectively?",
    answer: "Start by understanding your audience. Different workers need different approaches. Combine group seminars with consultations, use multiple channels, and maintain consistent engagement beyond enrollment periods. Our team helps you build this comprehensive strategy."
  },
  {
    question: "What is the best way to encourage employees to participate in 401k?",
    answer: "Emphasize the company match (it's free money), simplify enrollment, offer personalized guidance, and communicate regularly. Automatic enrollment helps, but education ensures employees contribute enough to maximize their retirement benefits."
  },
  {
    question: "What should be included in 401k employee education?",
    answer: "Cover plan basics (eligibility, contribution limits, company match), investment fundamentals, compound interest, enrollment steps, and account management. Address budgeting too, as financial stress affects the ability to save."
  },
  {
    question: "How often should you communicate with employees about retirement?",
    answer: "Beyond annual enrollment, maintain monthly touchpoints through newsletters, quarterly group sessions, and event-triggered outreach (raises, life changes). Consistent communication builds financial literacy and keeps benefits relevant."
  },
  {
    question: "How do you measure the effectiveness of 401k communications?",
    answer: "Track participation rates, deferral percentages, session attendance, and reduction in repetitive HR questions. We provide engagement data and help demonstrate ROI to leadership."
  },
  {
    question: "How do I get employees to actually read the 401k materials we send them?",
    answer: "Stop sending dense documents. Use short content in multiple formats (video, infographics). Segment by relevance so workers see information that matters. Time communications around events when employees think about money."
  },
  {
    question: "What&apos;s the right balance between education and information overload?",
    answer: "Focus on actionable steps, not comprehensive knowledge. Workers need to know what to do next. Deliver information in small doses throughout the year rather than overwhelming them during enrollment."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Employee Communications Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Retirement Plan Communications",
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
          { label: "Retirement Plan Communications" }
        ]}
        title="401(k) Employee Communications That Drive Retirement Plan Participation"
        subtitle="Your employees don&apos;t participate in your retirement plan the same way you expected. You&apos;ve invested in competitive benefits and solid investment options, yet engagement stays flat. PointOak Retirement Advisors creates customized 401(k) employee communications that make a meaningful difference in how your workforce saves for retirement."
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
            Why Choose Us for 401(k) Employee Communications?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              73% of employees don&apos;t feel completely educated about their company&apos;s benefits, directly impacting retirement plan participation rates. PointOak generates over 90% of revenue from corporate retirement plans, giving us deep expertise in participant education and effective communication strategies that encourage employees to save more money.
            </p>
            <p>
              What sets us apart is our independence. We&apos;re not pushing proprietary products. Our licensed securities advisors create personalized messaging that resonates with your workforce, then document everything in your Virtual 401(k) Fiduciary File for audit protection.
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
            Our Education &amp; Communications Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Customized Group Education Sessions</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Your education and communications program should reflect your company culture. Our licensed advisors lead interactive sessions that engage employees at every career stage, covering automatic enrollment benefits, the company match, and managing investment options effectively.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                These presentations create a financially savvy workforce by making complex retirement concepts accessible. Participants leave confident about their ability to contribute, not overwhelmed by paperwork.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Led by licensed securities advisors</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Topics customized to your workforce</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Interactive format drives engagement</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Online Webinars</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Remote and hybrid workers need access to the same retirement education as on-site colleagues. Our webinars deliver personalized financial guidance to distributed teams, ensuring every participant can discuss their retirement benefits with an expert.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Virtual sessions track attendance and engagement data, giving plan sponsors clear insight into which strategies work. Your team can participate from anywhere while we maintain the interactive approach that drives enrollment.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Accessible to remote workforce nationwide</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Engagement tracking and reporting included</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Same interactive approach as in-person events</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">1-on-1 Consultation Sessions</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Some employees need individual attention to feel confident about retirement decisions. Our consultants meet privately with participants to review account allocations, discuss the company match, and help them understand how contributions translate into retirement savings.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                These sessions address personal concerns workers won&apos;t raise in group seminars. Half leave with a clear action plan and the confidence to participate fully in their 401(k) plan.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Private account reviews with licensed advisors</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Personalized allocation guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Direct answers to individual concerns</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Combo Group + Breakout Sessions</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                The most effective communication programs combine group presentations with individual breakout consultations. Leaders and employees hear consistent messaging about plan benefits, then get personalized advice tailored to their position in life.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                This format maximizes engagement while respecting time constraints. Participants gain both the broad education and individual focus needed to take meaningful action.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Group education plus individual consultations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Efficient use of employee time</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Addresses both general and personal concerns</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Provider Education Resources</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Your recordkeeper offers education tools, but are you using them effectively? We coordinate with plan providers to leverage their resources and specialists, ensuring you get full value from existing relationships while filling gaps with independent advice.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                This approach stretches your education budget by combining provider resources with our expertise. Employees benefit from multiple touchpoints without duplicating efforts.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Maximize existing provider resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Fill gaps with independent guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Coordinate all education efforts</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Live Website Demonstrations</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                19% of non-participants say enrollment is &quot;too much hassle&quot;. Live demonstrations remove that barrier by walking employees through the exact steps to enroll, adjust contributions, and manage their retirement accounts.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Interactive demos transform intimidating interfaces into familiar tools. Workers who previously avoided enrollment gain confidence and start preparing for retirement.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Step-by-step enrollment walkthroughs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Reduce &quot;too complicated&quot; objections</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Hands-on practice with actual platform</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Monthly Financial Newsletters</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Effective communication isn&apos;t a one-time event. Monthly newsletters keep retirement benefits top-of-mind, reinforce key messaging, and share timely financial education that encourages employees to save throughout the year.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Ongoing engagement builds financial literacy over time. Each touchpoint reminds participants about the importance of their retirement plan and how to pay attention to their contributions.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Consistent ongoing engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Timely financial education topics</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Reinforces participation and contributions</span>
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
            Common 401(k) Employee Communication Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Information overload</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Employees receive dense enrollment paperwork and give up before starting. 67% grade the industry &quot;C, D, or F&quot; for explaining retirement.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our advisors break complex topics into digestible sessions that lead employees to confident decisions.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Multi-generational workforce</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Five generations work together, each with different communication preferences and savings priorities. One-size messaging fails.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Segmented strategies deliver relevant content to early-career workers and near-retirees differently.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">HR bandwidth constraints</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">HR managers spend 12+ hours weekly on payroll and benefits admin. Strategic education falls to the bottom of the line.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We manage your complete education program, freeing your team to focus on other priorities.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Low engagement with materials</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Employees ignore emails and skip seminars. 40% say they&apos;re &quot;too busy&quot; and paperwork piles up unread.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Interactive sessions and consultations engage workers who tune out traditional presentations.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Remote workforce disconnect</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Distributed teams miss in-person events. Virtual meeting attendance is challenging to encourage.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Online webinars and virtual consultations give every worker access regardless of location.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Compliance documentation gaps</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">DOL audits require documented participant communication. Many plan sponsors can&apos;t prove their education track record.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Every session and communication gets documented in your Virtual 401(k) Fiduciary File.</td>
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
