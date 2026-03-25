import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Zap, DollarSign, BarChart2, TrendingUp } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Plan Design Services | Independent Fiduciary | PointOak",
  description: "Expert 401(k) plan design services optimizing employer contributions, auto enrollment, and compliance. Independent 3(21)/3(38) fiduciary protecting plan sponsors nationwide. SECURE 2.0 guidance. Free consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/plan-design/"
  }
};

const highlights = [
  "Customized 401(k) plan features for your goals",
  "SECURE 2.0 compliance and auto enrollment guidance",
  "Independent fiduciary protection reducing your liability"
];

const subServices = [
  {
    title: "Auto Enrollment Design",
    description: "We guide you through automatic enrollment and automatic escalation features that can dramatically improve employee participation. Plans established after December 29, 2022 must implement auto enrollment by January 1, 2025 under SECURE 2.0.",
    href: "/corporate-retirement-plans/plan-design/auto-enrollment/",
    icon: Zap,
  },
  {
    title: "Employer Match Optimization",
    description: "We analyze whether safe harbor plan design eliminates testing requirements more cost-effectively than refunds and help simplify match formulas employees immediately grasp while reducing TPA costs.",
    href: "/corporate-retirement-plans/plan-design/employer-match/",
    icon: DollarSign,
  },
  {
    title: "Plan Benchmarking",
    description: "We compare your plan design against similar organizations and industry standards using data from our 10,000+ annual benchmarks to reveal whether your retirement benefits package helps you attract and retain talent.",
    href: "/corporate-retirement-plans/plan-design/benchmarking/",
    icon: BarChart2,
  },
  {
    title: "Plan Design Optimization",
    description: "We assess your existing 401(k) plan document and features to identify areas where your plan design could better serve your business goals and employee participation rates with comprehensive benchmarking.",
    href: "/corporate-retirement-plans/plan-design/optimization/",
    icon: TrendingUp,
  },
];

const processSteps = [
  {
    number: 1,
    title: "Analyze Your Current Plan",
    description: "We begin with a comprehensive review of your existing retirement plan design or your business needs if establishing a new plan. You&apos;ll schedule a consultation where we discuss your business goals, employee demographics, and current challenges with plan participation or nondiscrimination testing."
  },
  {
    number: 2,
    title: "Optimize Design Recommendations",
    description: "We develop customized plan design recommendations based on your specific situation. You&apos;ll receive detailed analysis showing how different plan features impact costs, employee participation, and compliance requirements. We compare traditional vs. safe harbor options, matching formulas, eligibility requirements, and vesting schedules specific to your needs."
  },
  {
    number: 3,
    title: "Implement and Monitor",
    description: "We coordinate with your service providers to implement approved plan design changes and provide ongoing monitoring. You&apos;ll receive annual reviews ensuring your plan design continues meeting your business goals as your company grows and regulations change. Our fiduciary support includes continuous compliance oversight and optimization recommendations."
  }
];

const faqs = [
  {
    question: "How much does 401(k) plan design consulting cost?",
    answer: "Plan design consulting fees vary based on plan complexity and participant count, typically ranging from $2,000-$5,000 for initial design or redesign projects. Many plan sponsors find that optimized design saves tens of thousands annually through reduced testing costs, lower employer contributions in safe harbor plans, or avoided penalties. We provide transparent pricing with no hidden fees and offer free initial consultations to discuss your specific needs."
  },
  {
    question: "What makes PointOak different from other retirement plan consultants?",
    answer: "We generate over 90% of our revenue from corporate retirement plans, making us true specialists rather than generalists. As an independently owned firm, we provide unbiased recommendations without pressure to push proprietary products. All our advisors act as 3(21) or 3(38) named fiduciaries under ERISA, providing direct liability protection. We perform 10,000+ benchmarks annually with 450+ data points per analysis, ensuring your plan design is backed by comprehensive market data."
  },
  {
    question: "Should I choose a safe harbor 401(k) or traditional plan design?",
    answer: "The right choice depends on your employee demographics and business goals. Safe harbor plans eliminate nondiscrimination testing but require mandatory employer contributions of at least 3% (basic match) or 4% (nonelective contribution). Traditional plans offer flexibility but may fail testing if highly compensated employees contribute significantly more than other participants. We analyze your specific workforce data to show exact cost comparisons and recommend the design that minimizes costs while meeting your objectives."
  },
  {
    question: "How long does implementing a new plan design take?",
    answer: "Initial plan design typically takes 2-4 weeks from consultation to final recommendations. Implementation timing depends on your plan year and amendment requirements. Mid-year changes to safe harbor status require specific timing and enhanced contributions. New plan establishment can be completed in 4-6 weeks. We manage all coordination with your TPA and recordkeeper to ensure smooth transitions and compliance with all deadlines."
  },
  {
    question: "How do I know if my current 401(k) plan design needs improvement?",
    answer: "Common warning signs include failed nondiscrimination testing, low employee participation rates below 60%, participant complaints about complicated match formulas, or concerns about whether your retirement benefits package competes effectively for talent. If you established your plan more than three years ago without reviewing design features, or if you&apos;re unsure about SECURE 2.0 compliance requirements, a comprehensive design review can identify opportunities for improvement. We offer complimentary assessments to evaluate your current plan structure."
  },
  {
    question: "Do you help with SECURE 2.0 automatic enrollment compliance?",
    answer: "Yes, we specialize in SECURE 2.0 compliance including the mandatory auto enrollment requirement affecting plans established after December 29, 2022. We ensure your plan document includes proper EACA or QACA provisions, help select default deferral percentages between 3-10% and auto increase schedules, prepare required participant notices 30-90 days in advance, and coordinate implementation with your recordkeeper. We also advise on exceptions for small businesses and exemptions for certain employee groups."
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Plan Design Services for Plan Sponsors Nationwide",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Plan Design",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function PlanDesignPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Plan Design" }
        ]}
        title="401(k) Plan Design Services for Plan Sponsors Nationwide"
        subtitle="You&apos;ve certainly thought about cost. But how much is too much and what are you getting for your plan design? From our McLean, Virginia office, PointOak serves plan sponsors nationwide who need specialized retirement plan design that goes beyond cookie-cutter templates to protect your business and employees."
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
            Why Choose PointOak for 401(k) Plan Design Nationwide
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              We generate over 90% of our revenue from working with corporate retirement plans. PointOak has been advising plan sponsors and participants since day one, remaining wholly focused on retirement plan design and the fiduciary obligations impacting employers nationwide.
            </p>
            <p>
              As an independently owned firm, we offer truly independent advice without pressure to push proprietary products. Acting as your 3(21) or 3(38) named fiduciary under ERISA, we provide oversight and support to help you create a retirement plan that meets your business goals while protecting you from liability.
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
            Our Plan Design Services
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
            Common 401(k) Plan Design Challenges Nationwide
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">SECURE 2.0 Auto Enrollment Mandate</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Plans established after 12/29/2022 must implement automatic enrollment by 1/1/2025, with 3-10% defaults and annual auto escalation. Non-compliance creates liability exposure.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We ensure your plan document includes required EACA provisions, help select appropriate default percentages, and manage participant communications within compliance deadlines.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Failed Nondiscrimination Testing</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Your plan fails ADP/ACP testing, forcing refunds to highly compensated employees. Executives can&apos;t maximize contributions despite the annual contribution limits allowing more.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We analyze whether safe harbor plan design eliminates testing requirements more cost-effectively than refunds. Alternative: redesign match formulas or implement profit sharing contribution strategies.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Poor Employee Participation Rates</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Low participation creates testing problems and means employees aren&apos;t building financially secure retirement savings. Only 40% of eligible employees actively contribute to the plan.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We recommend automatic enrollment features proven to boost participation to 90%+. Our education and communications programs drive engagement and informed decisions.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Overly Complex Match Formulas</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Your matching contributions use complicated formulas employees don&apos;t understand. &quot;Most people don&apos;t like to do math&quot; results in confusion and lower plan participants engagement.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We simplify to clear formulas like &quot;dollar-for-dollar match up to 4%&quot; that employees immediately grasp. Simpler structures also reduce TPA costs and administrative errors.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Wrong Safe Harbor vs. Traditional Choice</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">You chose safe harbor for simplicity but now 3% mandatory employer contributions cost more than traditional plan testing would. Or traditional plan testing failures cost more than safe harbor.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We analyze your specific employee demographics, highly compensated employees ratio, and historical data. You&apos;ll see exact cost comparisons showing which plan design saves money long-term.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Inadequate Vesting Schedules for High Turnover</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Immediate vesting in industries with high turnover means paying full employer contributions for employees who leave within months. This increases plan costs without improving employee retention benefits.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We design graded or cliff vesting schedules appropriate for your turnover patterns. Strategic vesting can reduce costs by 20-30% while still attracting talent with competitive retirement benefits.</td>
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
            What to Expect: Our Process
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
