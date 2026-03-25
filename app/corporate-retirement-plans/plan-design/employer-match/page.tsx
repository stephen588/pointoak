import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Employer Match Strategy | Benchmarking & Fiduciary Guidance | PointOak",
  description: "Expert 401(k) employer match consulting for plan sponsors. Industry-leading benchmarking, safe harbor guidance, and fiduciary protection from matching errors. Independent advice on match formulas that balance cost and competitiveness.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/plan-design/employer-match/"
  }
};

const highlights = [
  "Independent benchmarking across 10,000+ retirement plans annually",
  "Named fiduciary protection from costly matching errors",
  "Custom match formulas aligned with business goals"
];

const processSteps = [
  {
    number: 1,
    title: "Comprehensive Benchmarking Analysis",
    description: "You&apos;ll receive a detailed comparison of how your current match formula stacks up against similar-sized companies in your industry. We analyze your specific plan demographics rather than using generic averages."
  },
  {
    number: 2,
    title: "Cost vs. Competitiveness Assessment",
    description: "We evaluate the big difference between overly generous matches that strain budgets and insufficient matches that lose you talent. You&apos;ll see exactly where your contribution rate falls and what adjustments make sense."
  },
  {
    number: 3,
    title: "Compliance & Risk Review",
    description: "Our fiduciaries review your employer&apos;s plan documents to ensure matching calculations align with IRS requirements. We identify operational errors before they become costly corrections requiring income taxes or penalties."
  },
  {
    number: 4,
    title: "Custom Match Formula Recommendations",
    description: "You decide which match formula best fits your goals after reviewing our analysis. We provide specific advice on full match, partial match, profit sharing contributions, or hybrid structures."
  },
  {
    number: 5,
    title: "Ongoing Monitoring & Support",
    description: "We stay on top of contribution limits, vesting schedules, and regulatory changes. Our Virtual 401(k) Fiduciary Files document everything for audit protection, and you&apos;ll receive annual reviews of your match amount competitiveness."
  }
];

const faqs = [
  {
    question: "What is a good 401(k) employer match percentage?",
    answer: "A good employer match typically ranges from 4% to 6% of employee salary, with the national average at 4.6% to 4.7%. The most common match formula is a 50% partial match on the first 6% of employee contributions, which delivers a 3% employer contribution when employees contribute at least 6%. Dollar for dollar matches on the first 3% to 5% are also considered strong. Your industry, company size, and total compensation package all factor into what constitutes a competitive match for your specific situation."
  },
  {
    question: "Does employer match count toward the 401(k) limit?",
    answer: "No, employer matching contributions do not count toward the employee&apos;s annual contribution limit of $24,500 for 2026 (or $32,500 with catch-up contributions for those 50 and older). However, all employer contributions do count toward the combined employee and employer limit of $72,000 per year. This means employees can still take full advantage of the employer match even after maxing out their personal deferrals. High earners should note the maximum amount of compensation that can be considered for matching is $350,000 in 2026."
  },
  {
    question: "Can an employer change their 401(k) match?",
    answer: "Yes, employers can change or even suspend their employer 401 k match, but specific rules apply depending on your plan type. Traditional matches can generally be modified with proper plan amendments and employee communications. Safe harbor matches require at least 30 days&apos; advance notice before mid-year changes, and reducing or suspending a safe harbor match mid-year triggers ADP/ACP testing for that year. Economic downturns often force companies to adjust employer offers, but proper compliance procedures protect you from DOL issues and maintain employee trust."
  },
  {
    question: "Are employers required to offer 401(k) matching?",
    answer: "No, employer matching contributions are entirely voluntary. However, 98% of companies offer some form of employer contribution because matching is such a valuable benefit for attracting and keeping talent. While there&apos;s no legal requirement to offer a match, competitive pressure drives most employers to include matching in their retirement savings plan. Some employers choose profit sharing contributions or nonelective contributions instead of traditional matching, which can satisfy safe harbor requirements without requiring employees to contribute first."
  },
  {
    question: "What is the average 401(k) employer match in 2026?",
    answer: "The average employer match in 2026 remains around 4.6% to 4.7% of employee compensation, based on recent Vanguard and Fidelity research. The most common match formula is a 50% match on the first 6% of employee salary, which costs employers about 3% when employees participate fully. About 16% of plans use this exact formula. Dollar for dollar matches on the first 3% to 5% are the second most common structure. These averages vary significantly by industry, with technology and finance sectors typically offering higher matches to retain talent."
  },
  {
    question: "Is a 4% employer match competitive for attracting talent?",
    answer: "A 4% match sits slightly below the national average of 4.6% to 4.7%, which could make it harder to attract top talent if competitors offer more generous matching contributions. However, a 4% match can still be competitive when combined with other strong benefits, immediate vesting, or automatic enrollment features that maximize participation. The bigger picture matters more than the match amount alone. We help you benchmark your total retirement package against similar companies in your industry to determine if your 4% match supports your talent goals or if increasing to 5% or 6% would make a big difference."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Employer Match Strategy Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Employer Match Consulting",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function EmployerMatchPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Plan Design", href: "/corporate-retirement-plans/plan-design" },
          { label: "Employer Match Design" }
        ]}
        title="401(k) Employer Match: Strategic Guidance for Plan Sponsors"
        subtitle="You&apos;ve set your retirement plan&apos;s employer match, but is it competitive enough to retain talent without straining your budget? PointOak Retirement Advisors helps plan sponsors nationwide design and optimize 401 k employer match formulas that balance cost management with talent attraction, backed by industry-leading benchmarking data and fiduciary expertise."
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
            Why Choose Us for Employer Match Strategy Nationwide
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              PointOak Retirement Advisors generates over 90% of our revenue from corporate retirement plans, making us true retirement plan specialists rather than generalists. Our advisors are registered as 3(21) or 3(38) named fiduciaries under ERISA, serving plan sponsors across the United States with meticulous, technology-driven processes.
            </p>
            <p>
              As an independently owned firm, we provide objective guidance on employer matching contributions without parent company conflicts. Our Live Bid benchmarking process analyzes 450+ data points per provider across 10,000+ plans annually, giving you the ammunition to design a company match that works for your budget and your employees.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Understanding Options */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Understanding Your 401(k) Employer Match Options
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">What Is a 401(k) Employer Match?</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                A 401 k employer match is when your company contributes to employees&apos; retirement accounts based on how much they save. The employer puts money into the 401 k plan alongside employee contributions, creating a powerful incentive for retirement savings. Most companies offer some form of matching contributions, with 98% of 401(k) plans including this valuable benefit.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The match works as free money for employees who participate. When an employee contributes a certain percentage of their salary, the employer adds matching funds according to the plan&apos;s match formula. This employer contribution doesn&apos;t count toward the employee&apos;s annual contribution limit of $24,500 (2026), though it does count toward the combined limit of $72,000.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Dollar for Dollar Match vs. Partial Match</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                A dollar for dollar match means the employer contributes the full amount of what the employee contributes, typically up to a set percentage of salary. For example, a 100% match on the first 3% means employees get the full employer match when they contribute at least 3% of their pay.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A partial match works differently. The employer contributes a fraction of what employees save. The most common structure is a 50% match on the first 6% of employee contributions. This partial match formula lets you retain talent while managing costs more carefully than a full match.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Safe Harbor Match Requirements</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Safe harbor matching contributions offer automatic compliance with nondiscrimination testing. The basic safe harbor formula requires a 100% match on the first 3% of employee contributions plus a 50% match on the next 2%. Enhanced safe harbor options include a full employer match on the first 4% to 6% of salary.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                All safe harbor matches must be fully vested immediately. There&apos;s no vesting period for these employer&apos;s matching contributions. In exchange for this immediate vesting schedule, your retirement plan becomes exempt from complex ACP testing that traditional matches require.
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
            Common Employer Match Challenges for Retirement Plans
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Balancing Cost vs. Competition</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Your match formula seems expensive, but reducing it might cost you valuable employees who leave money on the table at competitors offering better retirement accounts.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We benchmark your employer contribution against industry standards using Live Bid data from 10,000+ plans. You&apos;ll know if you&apos;re overpaying or risking talent loss.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">ACP Testing Failures</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Highly compensated employees can&apos;t get the full company match because your traditional match failed nondiscrimination testing, requiring corrective distributions and frustrated participants.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our fiduciary support services help you evaluate safe harbor options that eliminate testing. We compare the true up cost against testing headaches.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Operational Errors</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Matching calculations use the wrong definition of compensation, or contributions post to the wrong pay period, creating liability exposure and correction requirements.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">As 3(21) or 3(38) named fiduciaries, we oversee your match administration and catch errors before DOL audits. Our process documentation protects you.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Mid-Year Match Changes</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Economic pressure forces you to consider suspending employer offers temporarily, but you&apos;re unsure about compliance requirements and the impact on employee morale.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We guide you through proper notice requirements (30+ days for safe harbor changes) and help you understand testing implications when you leave money in the plan.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Vesting Schedule Complexity</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">You want to use vesting to retain talent, but safe harbor matches require immediate vesting. Choosing between retention tools and compliance simplicity is confusing.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our plan design consulting evaluates whether traditional matches with vesting periods make sense for your turnover rates, or if safe harbor&apos;s automatic deductions benefit outweighs the loss of vesting.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Roth Match Confusion</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">SECURE 2.0 now allows Roth matching contributions, but you&apos;re uncertain if offering this option complicates payroll or provides enough value to employees.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We help you assess whether a Roth account option for matching fits your employee demographics and explain the investment options and tax implications clearly.</td>
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
            What To Expect: Our Employer Match Optimization Process
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
