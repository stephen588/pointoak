import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { TrendingUp, Heart, Users, CheckCircle, Target, Shield } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Participant Education Programs | PointOak",
  description: "PointOak's 401(k) participant education programs help plan sponsors turn retirement plan features into participant understanding. Named ERISA fiduciary. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/education-communications/"
  }
};

const highlights = [
  "Named 3(21) and 3(38) ERISA fiduciary for plan sponsors",
  "Year-round participant communication programs",
  "Deep retirement plan expertise"
];

const benefitsData = [
  {
    title: "Stronger Retirement Readiness Across Your Workforce",
    description: "Participants who receive structured planning support are measurably more prepared for retirement than those left to figure it out alone. PointOak's 401k education programs, built from deep retirement plan consulting services experience, connect your plan's features to each participant's financial goals through fiduciary-guided advice. Participants who enroll with clear guidance make better saving and investment decisions from day one, building financial literacy that carries through their entire career.",
    icon: TrendingUp
  },
  {
    title: "Higher Engagement with Plan Features",
    description: "85% of participants say financial wellness programs are valuable (J.P. Morgan 2025). The gap is turning that interest into action. Education that explains matching formulas, vesting schedules, and contribution strategies moves participants from passive enrollment to active investing and saving decisions. Understanding benefit plans drives engagement across your workforce and gives participants control over their long-term financial wellness.",
    icon: Users
  },
  {
    title: "Reduced Financial Stress in the Workplace",
    description: "Financial stress follows participants into the office, affecting both mental health and productivity. When your workforce is distracted by debt, emergency savings gaps, or basic retirement questions, retention suffers. Education addressing these concerns builds financial literacy and restores focus across your organization. Participants gain control over their finances, reducing the health impacts of chronic financial worry.",
    icon: Heart
  },
  {
    title: "Regulatory Changes Translated Into Action Steps",
    description: "New plan features like PLESAs and auto-enrollment changes require more than a compliance notice. Advisor-led programs translate SECURE 2.0 provisions into action steps participants can follow: what changed, what it means for their retirement, and what to do next. Tax credits and other incentives become accessible when participants understand how to use them, turning complex regulatory subjects into practical value.",
    icon: CheckCircle
  },
  {
    title: "A Competitive Advantage in Talent Retention",
    description: "Participants increasingly expect retirement guidance as part of their benefits package, not just access to a plan. Pairing a structured education program with the retirement tools already available in your plan strengthens your total rewards story and positions your business as an employer investing in its people. Demand for financial wellness resources continues to rise across every industry, making advisor-led participant education a competitive differentiator for companies seeking top talent.",
    icon: Target
  }
];

const educationNeedsData = [
  {
    title: "Your Workforce Shows Signs of Financial Stress",
    description: "60% of full-time workers report financial stress (PwC 2023). When HR fields concerns about debt, plan basics, or economic factors affecting savings, a structured education program fills the gap between benefit plans and financial well being."
  },
  {
    title: "You Are Implementing SECURE 2.0 Changes",
    description: "PLESAs, auto-enrollment provisions, and Roth catch-up changes create communication needs that default notices cannot address. Advisor-led education helps participants understand what changed and what action to take during this transition."
  },
  {
    title: "Participation Is High but Engagement Is Low",
    description: "Auto-enrollment raised participation numbers, but many participants still do not understand matching, vesting, or investment options. Education turns passive enrollment into active decisions about saving, investing, and retirement goals."
  },
  {
    title: "Your Plan Committee Wants Fiduciary Documentation",
    description: "A structured education program with documented outreach supports the plan committee's ERISA obligations. Every session and communication touchpoint becomes part of the fiduciary record your organization maintains."
  },
  {
    title: "You Are Competing for Talent and Need a Stronger Benefits Story",
    description: "Pairing retirement plan design with visible education programs strengthens your total rewards positioning. Participants who receive retirement guidance, not just plan access, see your business as invested in their financial goals."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We review current participant communication, plan design, and workforce demographics to identify education gaps."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We design a lifecycle-segmented communication strategy focused on your plan's specific features and participant needs."
  },
  {
    number: 3,
    title: "Implement",
    description: "We deliver the program, monitor participant engagement, and adjust messaging to maintain results over time."
  }
];

const faqs = [
  {
    question: "What does a 401(k) participant education program cost?",
    answer: "Cost depends on workforce size, communication scope, and whether your plan needs a full program or targeted support. PointOak's consulting fee is transparent and tied to program scope. Key factors include participant count, communication frequency, depth of one-on-one support, and how tightly education integrates with existing plan features. PointOak does not earn commissions or sell products. The fee covers advisory education services only. The cost of weak education, from under-saving to poor investment decisions across your workforce, often exceeds what a structured program costs. Schedule a consultation to discuss what your plan needs."
  },
  {
    question: "Should participant education come from the advisor or the recordkeeper?",
    answer: "Advisor-led education is fiduciary-guided and plan-specific; recordkeeper communication is platform-driven and standardized. The comparison above outlines differences in scope, customization, and fiduciary perspective. Advisor-led education is shaped by fiduciary obligation and built around your plan's features. Recordkeeper communication follows templated campaigns around platform capabilities. Many plan sponsors use both, with fiduciary support services guiding the education strategy."
  },
  {
    question: "How often should plan sponsors communicate with participants?",
    answer: "Year-round communication tied to enrollment, plan changes, and participant life events produces the strongest results. Annual enrollment is one touchpoint, not a communication strategy. Effective programs include onboarding education, mid-year updates tied to plan changes, SECURE 2.0 communications as provisions take effect, and pre-retirement sessions for eligible participants. Missing these windows means missing the moments when participants are most likely to act on their finances."
  },
  {
    question: "What is 401(k) participant education?",
    answer: "Structured programs that help participants understand and act on their retirement plan features beyond compliance disclosures. 401(k) participant education goes beyond compliance notices and summary plan descriptions. It includes plain-language explanations of matching formulas, vesting schedules, investment options, and distribution rules delivered through group sessions, digital content, and individual guidance. The goal is moving participants from passive enrollment to active, informed decisions about their retirement savings."
  },
  {
    question: "What should a retirement plan communication program include?",
    answer: "Lifecycle-segmented content covering enrollment, matching, vesting, fees, SECURE 2.0 changes, and individual guidance pathways. A strong program segments content by participant stage. New hires need enrollment and matching explanations. Mid-career participants need investment education and plan design context. Pre-retirees need distribution and Social Security coordination guidance. SECURE 2.0 provisions should be woven into each segment as they take effect."
  },
  {
    question: "Does better participant education actually improve retirement outcomes?",
    answer: "Participants with planning support show measurably stronger retirement preparedness than those without structured guidance. Research consistently shows that participants who receive structured planning support are far more likely to be on track for retirement. PointOak's programs move participants from passive enrollment to active decisions about contribution rates, investment options, and retirement goals. The shift from awareness to action is where outcomes change."
  },
  {
    question: "Why do participants still feel confused about their 401(k) even when notices are sent?",
    answer: "Compliance notices use regulatory language filed in formal documents that most participants never read. Summary plan descriptions and DOL reporting and disclosure guide documents are written for legal accuracy, not participant comprehension. Vesting schedules, matching formulas, and fee disclosures appear in documents participants rarely open. Education delivers that same information in plain-language formats at decision moments: onboarding, open enrollment, and job transitions."
  },
  {
    question: "Can unclear vesting and matching information cost participants money?",
    answer: "Participants who don't understand vesting or matching may forfeit employer contributions by leaving too early. Vesting schedules determine when employer contributions become fully owned by the participant. Workers who leave before full vesting forfeit money their employer set aside for them. Education explaining vesting during onboarding and at key milestones helps participants factor this into career and financial decisions."
  },
  {
    question: "What SECURE 2.0 changes should participants be educated about?",
    answer: "Key provisions include PLESAs, automatic enrollment changes, expanded catch-up contributions, and student loan matching. PLESAs became available for plan years after December 31, 2023. Automatic enrollment requirements begin in 2025 for certain new plans. Expanded catch-up contributions and student loan matching create additional tax planning considerations for interested participants. PointOak translates each provision into participant-facing communication explaining what changed, who is eligible, and what steps to take."
  },
  {
    question: "What should employers look for in a 401(k) education provider?",
    answer: "Look for plain-language capability, lifecycle segmentation, SECURE 2.0 fluency, and evidence of engagement outcomes. Evaluate whether the provider segments education by participant lifecycle, communicates in plain language, and demonstrates engagement results. SECURE 2.0 fluency matters because new provisions require ongoing updates. Integration with broader financial wellness and retirement tools should be standard, not an add-on. Ask for documented outcomes from plan sponsors with similar workforce profiles."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Participant Education and Communication Programs",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Participant Education & Communications",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function EducationCommunicationsPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Education & Communications" }
        ]}
        title="401(k) Participant Education and Communication Programs"
        subtitle="Most plan sponsors assume recordkeeper notices count as participant financial education. They don't. 77% of workers say retirement investing guidance is what they most want from employers (Goldman Sachs 2024). PointOak's 401(k) participant education programs deliver that guidance through advisor-led retirement plan communication that turns retirement plans into something your workforce actually understands and can control."
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

      {/* Benefits of 401(k) Participant Education */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of 401(k) Participant Education
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

      {/* How 401(k) Participant Education Works */}
      <AnimateOnScroll>
      <section className="bg-[#F5F3EF] py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How 401(k) Participant Education Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Only 1 in 3 workers say they have the time, interest, and knowledge to manage their own savings (Goldman Sachs 2024). Effective defined contribution plan education structures communication around decisions related to enrollment, contribution rates, and investment strategies rather than expecting participants to find resources on their own.
            </p>
            <p>
              Strong programs segment communication by lifecycle stage and tie each touchpoint to an action prompt. <a href="https://www.dol.gov/agencies/ebsa/employers-and-advisers/guidance/field-assistance-bulletins/2012-02" target="_blank" rel="noopener noreferrer" className="text-navy underline hover:text-medium-blue transition-colors">DOL participant disclosure guidance</a> requires certain notices, but compliance documents do not produce comprehension. Genuine <Link href="/corporate-retirement-plans/fiduciary-support/" className="text-navy underline hover:text-medium-blue transition-colors">fiduciary support</Link> delivers education participants act on, including online access to participant website tools and timely information on saving strategies.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-300">
              <p>
                <Link href="/contact/" className="text-navy underline hover:text-medium-blue transition-colors font-medium">Schedule a Consultation</Link> to discuss how advisor-led education can strengthen your plan&apos;s participant outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs 401(k) Participant Education */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs 401(k) Participant Education
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Not every organization needs an advisor-led education program. These scenarios help you decide.
          </p>
          <div className="space-y-6">
            {educationNeedsData.map((item, idx) => (
              <div key={idx} className="bg-cloud-blue rounded-lg p-6 md:p-8 border-l-4 border-navy">
                <h3 className="font-outfit text-navy text-lg md:text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
            <div className="bg-[#F5F3EF] rounded-lg p-6 md:p-8 border-l-4 border-warm-gold">
              <h3 className="font-outfit text-navy text-lg md:text-xl font-semibold mb-3">When It Might NOT Be the Right Fit</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If your organization does not yet have a retirement plan in place, or needs recordkeeping and administration rather than advisory education, a different starting point makes more sense.
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
            Advisor-Led Education vs. Recordkeeper Communication
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Both advisor-led education and recordkeeper communication serve a function. The right choice depends on what your participants need to understand and act on.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Advisor-Led Education</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Recordkeeper Communication</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Communication Scope</td>
                  <td className="px-4 py-3 text-gray-700">Year-round, segmented by lifecycle stage</td>
                  <td className="px-4 py-3 text-gray-700">Enrollment-focused, standardized campaigns</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Communication Frequency</td>
                  <td className="px-4 py-3 text-gray-700">Ongoing, tied to plan events and participant needs</td>
                  <td className="px-4 py-3 text-gray-700">2-4 campaigns per year</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fiduciary Perspective</td>
                  <td className="px-4 py-3 text-gray-700">Shaped by fiduciary obligation to participants</td>
                  <td className="px-4 py-3 text-gray-700">Shaped by platform capabilities</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Content Customization</td>
                  <td className="px-4 py-3 text-gray-700">Built around plan design and workforce goals</td>
                  <td className="px-4 py-3 text-gray-700">Templated to platform defaults</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">SECURE 2.0 Responsiveness</td>
                  <td className="px-4 py-3 text-gray-700">Translates new rules into action steps</td>
                  <td className="px-4 py-3 text-gray-700">Adds required notices as regulations take effect</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Participant Support Model</td>
                  <td className="px-4 py-3 text-gray-700">Group sessions plus 1:1 guidance pathways</td>
                  <td className="px-4 py-3 text-gray-700">Self-service tools and call center access</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm leading-relaxed mt-6 italic">
            Sources: Capital Group 2024, <a href="https://www.goldmansachs.com/what-we-do/ayco/insights/2024-retirement-survey-insights-report" target="_blank" rel="noopener noreferrer" className="text-navy underline hover:text-medium-blue transition-colors">Goldman Sachs 2024 Retirement Survey</a>, Phase 2 competitive audit
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            53% of workers want to learn more about government matching contributions to IRAs or 401(k)s (Schwab 2024). When your workforce faces these decisions, an advisor-led program through a <Link href="/our-services/" className="text-navy underline hover:text-medium-blue transition-colors">corporate retirement plan consulting</Link> relationship delivers outcomes and services that a compliance campaign alone cannot.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Education and Communications Process
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
            Why Choose PointOak for Participant Education
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              80% of workers with a personalized plan report being on track or ahead of schedule, compared with 39% without one (<a href="https://www.goldmansachs.com/what-we-do/ayco/insights/2024-retirement-survey-insights-report" target="_blank" rel="noopener noreferrer" className="text-navy underline hover:text-medium-blue transition-colors">Goldman Sachs 2024 Retirement Survey</a>). PointOak&apos;s 401 k participant education programs draw on direct experience consulting across the industry with plan sponsors and participants since 2005. <Link href="/about/" className="text-navy underline hover:text-medium-blue transition-colors">Our approach to retirement plan consulting</Link> translates complexity into insights companies and their participants can act on.
            </p>
            <p>
              Your recordkeeper provides communication. <Link href="/our-consulting-team/" className="text-navy underline hover:text-medium-blue transition-colors">Darsh and his team</Link> design education around your specific plan design, workforce demographics, and fiduciary goals. We build every program around what your participants need to understand, not around a platform&apos;s standard campaign library.
            </p>
          </div>
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
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. We serve high-net-worth individuals and corporate plan sponsors nationwide as an SEC-registered investment advisor. Led by Darsh Makim, CRPC, our team brings over 50 years of collective experience and manages over $1.08 billion in assets. <Link href="/contact/" className="text-navy underline hover:text-medium-blue transition-colors">Schedule a Consultation</Link>.
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
