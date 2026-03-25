import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { GraduationCap, Heart, Headphones, MessageSquare } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401k Participant Education | Retirement Plan Education Programs | PointOak",
  description: "401k participant education programs that drive retirement outcomes. Licensed advisors deliver customized education protecting plan sponsors from fiduciary liability. 73% of employees need better education. Get independent guidance.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/education-communications/"
  }
};

const highlights = [
  "Licensed securities advisors lead all sessions",
  "Customized to your workforce demographics",
  "Comprehensive documentation for fiduciary files"
];

const subServices = [
  {
    title: "Retirement Education Sessions",
    description: "Customized group education sessions bring licensed securities advisors directly to your employees. Our presenters address retirement goals, investment options, and enrollment strategies tailored to your company culture and participant demographics.",
    href: "/corporate-retirement-plans/education-communications/retirement-education/",
    icon: GraduationCap,
  },
  {
    title: "Financial Wellness Programs",
    description: "Comprehensive financial wellness education covering debt management, budgeting, and retirement planning principles that help participants make informed decisions about their financial security and retirement savings goals.",
    href: "/corporate-retirement-plans/education-communications/financial-wellness/",
    icon: Heart,
  },
  {
    title: "One-on-One Participant Support",
    description: "Individual retirement account reviews give participants personalized assistance with their specific finances. Employees receive guidance on contributions, investment options, and strategies to reach their retirement savings goals.",
    href: "/corporate-retirement-plans/education-communications/participant-support/",
    icon: Headphones,
  },
  {
    title: "Ongoing Communications",
    description: "Year-round engagement through educational newsletter content, webinars, and digital resources keeps retirement planning top of mind. Regular communication helps participants stay focused on their financial security.",
    href: "/corporate-retirement-plans/education-communications/communications/",
    icon: MessageSquare,
  },
];

const processSteps = [
  {
    number: 1,
    title: "Analyze Current Education Efforts",
    description: "You&apos;ll receive a comprehensive assessment of your existing participant education. We review participation rates, enrollment data, and engagement metrics to identify gaps."
  },
  {
    number: 2,
    title: "Customize Your Program",
    description: "We design education content matched to your workforce demographics. Industry-specific examples, generational preferences, and company culture all factor into the plan."
  },
  {
    number: 3,
    title: "Implement Education Campaign",
    description: "Licensed advisors deliver your program through your chosen formats. Every session is documented for your fiduciary protection."
  },
  {
    number: 4,
    title: "Measure and Optimize",
    description: "We track participation changes, deferral rate improvements, and employee engagement. Quarterly reviews ensure your program delivers results."
  }
];

const faqs = [
  {
    question: "How much does 401k participant education cost?",
    answer: "Education program cost depends on your workforce size, delivery formats, and session frequency. We customize proposals based on your specific needs and budget. Initial consultations are complimentary, and we provide transparent pricing without hidden fees. Most employers find education pays for itself through improved testing results and reduced liability exposure."
  },
  {
    question: "What makes PointOak different from other education providers?",
    answer: "Three factors distinguish our approach: independence (no products to sell), specialization (90%+ of revenue from retirement plans), and fiduciary status (we act as named fiduciaries under ERISA). Our licensed securities advisors can go deeper than generic educators while maintaining compliance with investment advice regulations."
  },
  {
    question: "Is in-person or virtual education better for our employees?",
    answer: "Both formats serve different needs effectively. In-person sessions typically generate higher engagement and allow for deeper Q&A. Virtual webinars reach distributed workforces and accommodate varied schedules. We recommend combo approaches that combine group sessions with individual breakouts to maximize participation across all employee types."
  },
  {
    question: "How long does it take to implement an education program?",
    answer: "Most programs launch within four to six weeks of engagement. This timeline includes workforce analysis, content customization, scheduling, and communication preparation. Ongoing programs operate on quarterly or annual cycles depending on your preference and budget. We coordinate with your HR department to minimize administrative burden."
  },
  {
    question: "How do we know if participants need education?",
    answer: "Several indicators signal education gaps: low participation rates, minimal contribution percentages, high hardship withdrawal activity, or failed nondiscrimination testing. If employees rarely access plan resources or express confusion about investment options, education can address these issues directly."
  },
  {
    question: "What&apos;s the difference between education and investment advice under ERISA?",
    answer: "DOL Interpretive Bulletin 96-1 establishes safe harbors for participant education versus fiduciary advice. Education covers general investment concepts, plan features, and retirement planning principles. Advice involves specific recommendations for individual circumstances. Our programs stay within education safe harbors while providing meaningful guidance that helps participants prepare for retirement."
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401k Participant Education Programs That Drive Retirement Outcomes",
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
        title="401k Participant Education Programs That Drive Retirement Outcomes"
        subtitle="Most employees don&apos;t understand their retirement plan. In fact, 73% don&apos;t feel completely educated about their company benefits, and 67% grade the industry &quot;C, D or F&quot; for explaining saving and investing. You&apos;re responsible for providing education that actually works. PointOak Retirement Advisors delivers 401k participant education programs designed to engage your workforce and protect you from fiduciary liability."
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

      {/* Why Choose Us */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Why Choose Us for 401k Participant Education
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              When nearly half of plan sponsors don&apos;t even realize they&apos;re fiduciaries, education becomes more than an employee benefit. It becomes a compliance requirement. PointOak has been advising plan sponsors since day one, generating over 90% of revenue from retirement plan consulting. Our advisors are registered and act as named fiduciaries under ERISA.
            </p>
            <p>
              What sets us apart is independence. We have no proprietary products to sell, no recordkeeper affiliations to satisfy. Your participants receive education focused on retirement readiness and financial security, not fund sales pitches. Our process-driven approach documents everything for your fiduciary file.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Sub-Service Cards */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Our Education &amp; Communications Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="bg-white rounded-lg p-8 border border-gray-100 hover:shadow-lg hover:border-navy/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-cloud-blue flex items-center justify-center flex-shrink-0 group-hover:bg-navy/10 transition-colors">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-outfit text-navy text-xl font-medium mb-3 group-hover:text-navy/80 transition-colors">
                        {service.title}
                      </h3>
                      <p className="font-outfit text-dark-gray text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Challenges Table */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Common 401k Participant Education Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Low participation rates</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Only 77% of eligible employees enroll, risking failed nondiscrimination testing and compliance issues with DOL requirements.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Targeted enrollment campaigns and simplified sign-up assistance increase NHCE participation to protect your plan.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Gen Z disengagement</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Just 36% of Gen Z workers participate versus 71% of millennials, creating a generational gap in retirement savings.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Age-appropriate digital education and mobile-first resources engage younger workers where they already spend time.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Information overload</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Employees feel overwhelmed by complicated investment options and tune out generic presentations about funds and percentages.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We simplify choices with clear frameworks that help participants decide without needing to become investors themselves.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Limited HR bandwidth</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Your benefits department lacks time to develop and deliver comprehensive education while managing other responsibilities.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We handle the entire education process, freeing your team to focus on core business functions.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fiduciary liability exposure</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Inadequate education documentation leaves plan sponsors subject to DOL audits, potential attorney involvement, and ERISA law violations.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Every session creates detailed records for your fiduciary file, demonstrating your commitment to participant welfare.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Post-seminar inaction</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Only 14% of participants make changes after attending workplace education, wasting money and effort on programs that don&apos;t work.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Behavioral strategies and follow-up communication convert education into actual enrollment and contribution increases.</td>
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

      {/* About PointOak */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            About PointOak Retirement Advisors
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            PointOak Retirement Advisors is an independent retirement plan consulting firm headquartered in McLean, Virginia, serving plan sponsors nationwide. The firm generates over 90% of its revenue from corporate retirement plans and acts as a 3(21) or 3(38) named fiduciary under ERISA with every client. PointOak evaluates over $120 billion in retirement plan assets quarterly using a proprietary 10-point pass/fail scoring system and conducts more than 10,000 plan benchmarks annually.
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
