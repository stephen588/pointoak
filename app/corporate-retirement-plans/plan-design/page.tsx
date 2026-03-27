import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Zap, DollarSign, BarChart2, CheckCircle, TrendingUp, Users } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Plan Design Services | PointOak Retirement Advisors",
  description: "PointOak helps plan sponsors design 401(k) plans with the right match formula, auto-enrollment defaults, and safe harbor structure. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/plan-design/"
  }
};

const highlights = [
  "Named 3(21) and 3(38) ERISA fiduciary",
  "Plan sponsors advised since 2005",
  "Fee-only with no proprietary products"
];

const benefitsData = [
  {
    title: "Higher Employee Participation and Savings Rates",
    description: "Automatic enrollment with auto escalation converts passive non-savers into active participants. Plans using auto-enrollment as a default design feature consistently increase participation and retirement savings rates compared to voluntary-enrollment designs. Adding an escalation schedule compounds the effect each plan year, driving higher employee contributions over time.",
    icon: TrendingUp
  },
  {
    title: "Federal Tax Credits That Offset Setup Costs",
    description: "The IRS allows eligible employers to claim up to $5,000 per year in startup-cost credits for three years, plus an additional $500 per year for three years for adding automatic enrollment. These tax benefits directly reduce the cost of launching or redesigning a 401 k plan. Plan sponsors establishing plans under SECURE 2.0 provisions should model credits against projected employer contribution costs before selecting a design.",
    icon: DollarSign
  },
  {
    title: "Reduced Nondiscrimination Testing Exposure",
    description: "Safe harbor 401k and QACA designs eliminate ADP/ACP nondiscrimination testing when the plan satisfies all required conditions. Highly compensated employees can maximize elective deferrals without the constraints that testing failures impose. Pairing this structural fix with fiduciary support ensures the plan document stays aligned with testing exemption requirements year over year, reducing administrative complexity.",
    icon: CheckCircle
  },
  {
    title: "Stronger Employee Retention and Recruiting Value",
    description: "A competitive matching contribution functions as deferred compensation that shows up on every participant statement. Plan sponsors use well-designed match formulas and auto-enrollment features to differentiate their benefits package during recruiting. Employee retention improves when 401 k plan design makes saving automatic and the employer's role is visible.",
    icon: Users
  },
  {
    title: "A Match Formula That Fits Your Budget and Workforce",
    description: "Employer match design should connect the default deferral rate with the full-match capture threshold so participants receive the maximum employer contribution without manual adjustments. A dollar for dollar match on the first 3% of compensation delivers clear value that employees understand. Provider and fee benchmarking confirms your match and participation rates align with market benchmarks for basic match, enhanced match, and nonelective structures.",
    icon: BarChart2
  }
];

const designNeedsData = [
  {
    title: "Your Voluntary-Enrollment Plan Has Low Participation",
    description: "An existing plan without an automatic enrollment feature often shows participation well below auto-enrolled designs. Design changes combined with education and communications programs close the gap. Eligible participants who never opted in under voluntary enrollment often contribute when auto-enrolled."
  },
  {
    title: "Nondiscrimination Testing Keeps Failing or Limiting HCE Deferrals",
    description: "When highly compensated employees are capped by ADP/ACP failures, the plan's structure is the constraint. Safe harbor 401 k or QACA design removes it, letting key employees defer at the statutory maximum alongside non highly compensated employees. Business owners facing repeated testing failures should evaluate whether safe harbor plans eliminate the constraint entirely."
  },
  {
    title: "You Are Starting a New 401(k) After SECURE 2.0",
    description: "IRS proposed regulations apply SECURE 2.0 auto-enrollment requirements to certain newly established 401 k plans for plan years beginning after December 31, 2024. A business owner launching a new plan needs design built around these requirements from day one, not retrofitted after the first compliance cycle."
  },
  {
    title: "Your Current Safe Harbor Plan Has Not Been Reviewed in Years",
    description: "Small businesses that adopted template safe harbor 401 k plans years ago may find the match formula, default rate, and vesting schedule no longer fit. Annual review against current IRS limits and industry benchmarks reveals whether the design still serves its intended purpose."
  },
  {
    title: "Virginia's RetirePath Mandate Is Approaching and You Want a Custom Alternative",
    description: "Virginia employers with 25 or more eligible employees face RetirePath enrollment deadlines. Adopting a qualified employer retirement plan gives the plan sponsor control over match design, safe harbor 401 k elections, and plan features that RetirePath cannot offer. Business owners gain flexibility to structure employer contributions around their compensation strategy."
  }
];

const planOptions = [
  {
    title: "Traditional 401(k)",
    description: "Maximum employer discretion on contributions with no required match or nonelective contribution, subject to ADP/ACP and top-heavy testing. Traditional 401 k plans allow profit sharing contributions when business performance supports them.",
    bestFor: "Plan sponsors with balanced workforce demographics and manageable testing results.",
    icon: Zap
  },
  {
    title: "Safe Harbor 401(k)",
    description: "Required employer match (basic match: 100% of the first 3% plus 50% of the next 2%) or a 3% nonelective contribution, with safe harbor contributions fully vested immediately and ADP/ACP testing eliminated. Vanguard's 2024 data reports the average promised employer match at 4.6% of employee compensation.",
    bestFor: "Employers where HCE participation triggers testing problems. Target date fund consulting supports the default investment options that harbor 401 k plans pair with auto-enrollment.",
    icon: CheckCircle
  },
  {
    title: "QACA Safe Harbor 401(k)",
    description: "Requires auto enrollment at 3% or more with escalation to at least 6% by year 5, using the QACA match formula (100% of the first 1% plus 50% of deferrals from 1% to 6%) or a 3% nonelective contribution. Allows up to two-year cliff vesting on safe harbor match amounts, and the enhanced match option lets plan sponsors increase generosity beyond the QACA minimum.",
    bestFor: "Plan sponsors who want both testing relief and higher participation defaults.",
    icon: TrendingUp
  }
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "Our consulting team reviews your plan document, contribution design, participation data, and compliance history."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We connect match formula, auto-enrollment defaults, safe harbor 401 k structure, and plan features to your workforce demographics and budget."
  },
  {
    number: 3,
    title: "Implement",
    description: "We execute plan amendments, coordinate provider changes, deliver eligible participants their required notices, and monitor ongoing performance."
  }
];

const faqs = [
  {
    question: "What does 401(k) plan design consulting cost?",
    answer: "Consulting fees depend on plan complexity and asset size under a fee-only model with no commissions. PointOak does not charge commissions or earn revenue from product sales. Consulting fees reflect the scope of the engagement, plan asset size, and design complexity. Employer contribution costs are a separate variable: nonelective contributions, basic match, enhanced match, and QACA formula each carry distinct budget profiles. A safe harbor 401 k plan with a 3% nonelective costs the same percentage of employee's compensation regardless of participation, while a match formula ties employer cost to how many participants defer. Federal tax credits for plan startup and auto-enrollment can offset a meaningful portion of first-year costs for eligible small employers."
  },
  {
    question: "What's the difference between a safe harbor 401(k) and a QACA safe harbor plan?",
    answer: "Both eliminate ADP/ACP testing, but they differ on auto-enrollment requirements, match formulas, and vesting rules. The decision turns on your workforce. QACA allows up to two-year cliff vesting on the safe harbor match, which matters if turnover is high enough that immediate vesting creates unnecessary cost. QACA also requires automatic enrollment, so plan sponsors who want both testing relief and higher participation adopt it by default. PointOak evaluates turnover patterns and contribution budget to determine which structure fits before recommending a design."
  },
  {
    question: "How often should a 401(k) plan design be reviewed?",
    answer: "Review 401 k plan design at least annually, timed with the safe harbor notice window before each plan year. Safe harbor 401 k notices must reach participants 30 to 90 days before the plan year begins, making that window the natural trigger for reviewing match formula, default deferral rate, and vesting schedule. SECURE 2.0 changes, workforce shifts, and nondiscrimination testing results can all prompt mid-cycle reviews. PointOak monitors plan performance as part of the ongoing consulting engagement and flags when design adjustments are warranted."
  },
  {
    question: "What is a safe harbor 401(k)?",
    answer: "A plan design that satisfies IRS requirements to eliminate ADP/ACP nondiscrimination testing in exchange for required employer contributions. Two primary structures exist: traditional safe harbor 401 k and QACA safe harbor. Both require the plan document specifies the employer contribution formula and that participants receive timely notice. The tradeoff is straightforward: the employer commits to a defined contribution formula, and the plan is exempt from actual deferral percentage and actual contribution percentage testing for that plan year."
  },
  {
    question: "Does a safe harbor 401(k) still need nondiscrimination testing?",
    answer: "Safe harbor 401 k plans are exempt from ADP/ACP testing when all requirements are met, but other testing obligations may still apply. Top-heavy testing remains unless the plan also satisfies top-heavy safe harbor rules through its employer contribution structure. Plans with additional features like profit sharing or after tax contributions may trigger separate testing requirements. PointOak evaluates which testing obligations apply to your specific 401 k plan design and documents the exemptions in your fiduciary file."
  },
  {
    question: "Should we use automatic enrollment in our 401(k) plan?",
    answer: "For most plan sponsors, automatic enrollment materially increases participation and savings rates over voluntary designs. Plans with auto-enrollment show consistently stronger participation across plan sizes and industries. IRS proposed regulations under SECURE 2.0 require the automatic enrollment feature for certain newly established 401 k plans for plan years beginning after December 31, 2024. Participants who do not want to contribute can withdraw automatic contributions within 90 days, or an employee affirmatively elects to opt out through payroll deductions. See IRS automatic enrollment guidance for current regulatory requirements."
  },
  {
    question: "Do I have to give an annual safe harbor notice?",
    answer: "IRS requires safe harbor 401 k and QACA notices 30 to 90 days before each plan year begins. QACA and EACA notices must also explain the automatic contribution arrangement, default deferral percentage of employee's salary, and default investment options. Missing or late notices is one of the most common compliance failures in harbor 401 k plans. The notice must describe the employer contribution formula, the plan's provisions for opting out, and how payroll deductions will begin for newly eligible employees."
  },
  {
    question: "Can I switch to a safe harbor 401(k) mid-year?",
    answer: "Mid-year safe harbor 401 k amendments are possible but carry notice timing constraints and may require retroactive contributions. Plan sponsors converting mid-year must satisfy either a full-year or three-month safe harbor notice requirement depending on the amendment date. Retroactive nonelective contributions may be required to cover the gap period. PointOak helps plan sponsors evaluate amendment timing so the transition protects both the fiduciary file and the contribution budget."
  },
  {
    question: "How does Virginia's RetirePath program compare with a custom 401(k)?",
    answer: "RetirePath provides basic retirement savings access, while a custom 401 k adds employer match design, safe harbor elections, and full plan customization. RetirePath is a state-facilitated Roth IRA with no employer contributions, limited investment options, and a fixed structure. Virginia employers that adopt a qualified employer retirement plan are no longer required to participate in RetirePath. A custom 401 k plan gives the plan sponsor control over match formulas, vesting schedules, and auto-enrollment defaults that directly affect employee retention and recruiting."
  },
  {
    question: "What tax credits are available if we start a 401(k) or add auto-enrollment?",
    answer: "Eligible small employers can claim IRS startup-cost credits and auto-enrollment credits for the first three tax years. Credits apply when a new 401 k plan is established or when automatic enrollment is added to an existing plan. Employers should model credits against projected pre tax elective deferrals, roth contributions, and employer contribution costs to understand the net financial impact. Not all employers qualify; eligibility depends on employee count and whether the employer previously maintained a plan. See IRS startup-cost credit guidance for current eligibility rules."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Plan Design: Auto-Enrollment, Employer Match, and Safe Harbor Strategy",
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
        title="401(k) Plan Design: Auto-Enrollment, Employer Match, and Safe Harbor Strategy"
        subtitle="The right 401(k) plan design determines whether retirement plan participants actually save enough. PointOak Retirement Advisors helps plan sponsors with 401k plan design that connects match formula, auto-enrollment defaults, and safe harbor 401k structure into one strategy."
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

      {/* Benefits of 401(k) Plan Design */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of 401(k) Plan Design
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

      {/* How 401(k) Plan Design Works */}
      <AnimateOnScroll>
      <section className="bg-[#F5F3EF] py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How 401(k) Plan Design Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Participation reached 94% in plans with automatic enrollment versus 82% overall according to Vanguard's 2024 data. That gap is a function of design mechanics: when an automatic contribution arrangement pairs a default deferral rate with an escalation schedule and a match threshold, participants save more without taking affirmative action. The safe harbor 401 k election determines whether this structure also eliminates actual deferral percentage and actual contribution percentage testing on elective deferrals.
            </p>
            <p>
              QACA requires auto-enrollment starting at 3% of an employee's salary, rising to at least 6% by year 5, with ADP/ACP testing relief in exchange. Traditional safe harbor 401 k demands 100% immediate vesting on safe harbor contributions but imposes no auto-enrollment mandate. Choosing between them depends on workforce demographics, turnover rates, and whether <Link href="/corporate-retirement-plans/investment-analysis/" className="text-navy underline hover:text-medium-blue transition-colors">investment analysis</Link> supports the default fund lineup tied to auto-enrolled participants.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-300">
              <p>
                Ready to evaluate your 401k plan design? <Link href="/contact/" className="text-navy underline hover:text-medium-blue transition-colors font-medium">Schedule a consultation</Link> to review your current structure and identify where design changes improve outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs 401(k) Plan Design Consulting */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs 401(k) Plan Design Consulting
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Not every plan requires a full redesign. These scenarios signal when working with a consultant changes outcomes.
          </p>
          <div className="space-y-6">
            {designNeedsData.map((item, idx) => (
              <div key={idx} className="bg-cloud-blue rounded-lg p-6 md:p-8 border-l-4 border-navy">
                <h3 className="font-outfit text-navy text-lg md:text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
            <div className="bg-[#F5F3EF] rounded-lg p-6 md:p-8 border-l-4 border-warm-gold">
              <h3 className="font-outfit text-navy text-lg md:text-xl font-semibold mb-3">When Plan Design Consulting Might Not Be the Right Fit</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Employers with only a few certain employees and no immediate growth plans may find a SIMPLE IRA or SEP arrangement sufficient. Full 401 k plan design consulting delivers the most value when the workforce is large enough for employer match strategy and testing to matter.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our 401(k) Plan Design Options */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Our 401(k) Plan Design Options
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            The right plan design depends on workforce demographics, testing history, and contribution budget.
          </p>
          <div className="space-y-6">
            {planOptions.map((option, idx) => {
              const Icon = option.icon;
              return (
                <div key={idx} className="bg-white rounded-lg p-8 border border-gray-100">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-cloud-blue flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-outfit text-navy text-xl font-medium mb-3">
                        {option.title}
                      </h3>
                      <p className="font-outfit text-dark-gray text-base leading-relaxed mb-3">
                        {option.description}
                      </p>
                      <p className="font-outfit text-navy text-sm leading-relaxed">
                        <strong>Best for:</strong> {option.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Comparison Table */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Custom 401(k) Plan Design vs. Virginia's RetirePath Program
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Virginia employers with 25 or more eligible employees face a choice: adopt a custom qualified plan or default into RetirePath.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Custom 401(k)</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Virginia RetirePath</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Employer contributions</td>
                  <td className="px-4 py-3 text-gray-700">Match design, safe harbor, or nonelective; employer contributes based on plan terms</td>
                  <td className="px-4 py-3 text-gray-700">No employer contributions permitted</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Plan customization</td>
                  <td className="px-4 py-3 text-gray-700">Match formulas, vesting schedule, safe harbor type, auto enrollment defaults</td>
                  <td className="px-4 py-3 text-gray-700">Fixed state-facilitated Roth IRA structure</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Nondiscrimination testing</td>
                  <td className="px-4 py-3 text-gray-700">Required unless safe harbor or QACA eliminates it</td>
                  <td className="px-4 py-3 text-gray-700">No testing (not a qualified plan)</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Employee vesting</td>
                  <td className="px-4 py-3 text-gray-700">Depends on design; 44.1% of plans with matching used immediate vesting in 2024 (PSCA)</td>
                  <td className="px-4 py-3 text-gray-700">Fully vested (employee's own paycheck contributions only)</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Recruiting and retention value</td>
                  <td className="px-4 py-3 text-gray-700">Employer match and plan features function as compensation tools</td>
                  <td className="px-4 py-3 text-gray-700">Access only; no employer-funded benefit</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Investment options</td>
                  <td className="px-4 py-3 text-gray-700">Open architecture across the full marketplace</td>
                  <td className="px-4 py-3 text-gray-700">Limited state-selected investment options</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm leading-relaxed mt-6 italic">
            Sources: IRS, Code of Virginia, RetirePath Virginia program documentation
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            RetirePath solves the access requirement for Virginia employers meeting the eligibility threshold. A custom 401 k plan adds match design, safe harbor 401 k strategy, and recruiting value that a state-facilitated IRA cannot deliver. <a href="https://www.retirepathva.com/files/retirepathva_brochure_2023.pdf" target="_blank" rel="noopener noreferrer" className="text-navy underline hover:text-medium-blue transition-colors">RetirePath Virginia program details</a> outline the enrollment timeline for covered employers.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our 401(k) Plan Design Process
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
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Why Choose PointOak for 401(k) Plan Design
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              PSCA's 68th Annual Survey reported 64.3% of plans used automatic enrollment in 2024. As adoption rises, the design decisions surrounding default rates, match thresholds, and safe harbor 401 k elections grow more consequential. PointOak acts as a named 3(21) or 3(38) ERISA fiduciary focused on connecting these design levers into a 401 k plan structure that fits your workforce. Learn more <Link href="/about/" className="text-navy underline hover:text-medium-blue transition-colors">about PointOak</Link> and how we work with plan sponsors.
            </p>
            <p>
              Plan sponsors sometimes encounter advisors who push expensive safe harbor 401 k templates without proving fit. We evaluate whether safe harbor, QACA, or traditional 401 k design serves your workforce demographics and employer matching contributions budget before recommending a structure. The fee-only model eliminates product-sale incentives that influence employee contributions guidance at bank-affiliated firms.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* About PointOak */}
      <AnimateOnScroll>
      <section className="bg-[#F5F3EF] py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            About PointOak Retirement Advisors
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. We are an SEC-registered investment advisor serving plan sponsors and high-net-worth individuals nationwide, with over $1.08 billion in assets under management and 50 years of collective team experience. Darsh Makim, CRPC, has advised plan sponsors since 2005. Over 90% of our revenue comes from corporate retirement plan consulting. We serve as a named 3(21) and 3(38) ERISA fiduciary. <Link href="/contact/" className="text-navy underline hover:text-medium-blue transition-colors">Schedule a consultation</Link> to discuss your plan.
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