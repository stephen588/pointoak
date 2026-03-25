import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "DC Retirement Planning Guide | Plan Sponsor Resources | PointOak",
  description: "DC retirement planning resource for plan sponsors. Covers fiduciary responsibilities, investment monitoring, fee benchmarking, plan design, and participant education. Expert guidance from McLean, VA. Learn more.",
  openGraph: {
    title: "DC Metro Retirement Planning | PointOak",
    description: "What every plan sponsor in the Washington DC metro area needs to know about managing retirement plans.",
    url: "https://www.pointoak.com/resources/dc-metro-retirement-planning/",
  },
};

const tocItems = [
  { id: "unique-challenges", label: "Why DC Presents Unique Challenges" },
  { id: "fiduciary-responsibilities", label: "Fiduciary Responsibilities" },
  { id: "investment-monitoring", label: "Investment Monitoring" },
  { id: "fee-benchmarking", label: "Fee Benchmarking" },
  { id: "plan-design", label: "Plan Design Best Practices" },
  { id: "education", label: "Participant Education" },
  { id: "challenges", label: "Common Challenges" },
  { id: "selecting-consultant", label: "Selecting the Right Consultant" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const faqs = [
  {
    question: "What are the biggest retirement plan risks for DC-area employers?",
    answer: "The most common risks include paying above-market fees, failing to document fiduciary decisions, offering an investment menu that hasn&apos;t been reviewed in years, and low employee participation rates. Each of these can lead to DOL scrutiny, potential lawsuits, or simply poor retirement outcomes for your workforce.",
  },
  {
    question: "How often should a retirement plan be benchmarked?",
    answer: "The DOL requires benchmarking at least every three years, but annual benchmarking is considered best practice. A thorough benchmark should review hundreds of data points per bidder using your actual plan data (not industry averages) to ensure your fees remain competitive.",
  },
  {
    question: "What&apos;s the difference between a 3(21) and 3(38) fiduciary?",
    answer: "A 3(21) co-fiduciary provides recommendations and guidance while the plan sponsor retains final decision-making authority. A 3(38) investment manager assumes discretionary responsibility for selecting and monitoring investments, shifting more liability away from the plan sponsor.",
  },
  {
    question: "What types of retirement plans do these guidelines apply to?",
    answer: "The fiduciary principles and best practices covered on this page apply to 401(k) plans, 403(b) plans, 457(b) plans, and other defined contribution retirement plans. Regardless of plan type, ERISA compliance and prudent oversight remain essential.",
  },
  {
    question: "Does PointOak only work with DC-area companies?",
    answer: "No. While our office is in McLean, Virginia (just minutes from Washington, DC), we work with plan sponsors across the United States. Our technology-driven process allows us to deliver the same level of support regardless of location.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "DC Retirement Planning: What Every Plan Sponsor Needs to Know",
    description: "Comprehensive resource for DC metro area plan sponsors covering fiduciary responsibilities, investment monitoring, fee benchmarking, and plan design.",
    url: "https://www.pointoak.com/resources/dc-metro-retirement-planning/",
    publisher: {
      "@type": "Organization",
      name: "PointOak Retirement Advisors",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function DCMetroRetirementPlanningPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "DC Metro Retirement Planning" },
        ]}
        title="DC Metro Retirement Planning"
        subtitle="What Every Plan Sponsor Needs to Know"
      />

      {/* Article with TOC sidebar */}
      <AnimateOnScroll>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* TOC Sidebar */}
            <aside className="lg:w-[280px] flex-shrink-0">
              <div className="lg:sticky lg:top-8">
                <h3 className="font-outfit text-navy text-sm font-bold uppercase tracking-wider mb-4">
                  In This Guide
                </h3>
                <nav className="space-y-2">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block font-outfit text-dark-gray text-sm hover:text-navy transition-colors py-1 border-l-2 border-transparent hover:border-navy pl-3"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article Content */}
            <article className="flex-1 min-w-0">
              <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                Managing a retirement plan in the Washington, DC metropolitan area comes with a unique set of challenges. Between evolving ERISA regulations, DOL scrutiny, and the competitive talent market that defines the nation&apos;s capital, plan sponsors need more than a basic understanding of compliance. They need a clear view of the landscape and the information to take action.
              </p>
              <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                This resource page covers the key elements of DC retirement planning, from fiduciary responsibilities and investment monitoring to fee benchmarking and plan design. Whether you&apos;re new to the plan sponsor role or looking to update your approach after years of managing a retirement plan, the insights below will help you navigate the decisions that matter most for your organization and your employees.
              </p>
              <div className="bg-cloud-blue rounded-lg p-6 mb-10">
                <Link
                  href="/contact"
                  className="inline-block bg-navy text-white font-outfit font-medium px-8 py-3 rounded hover:bg-opacity-90 transition-all"
                >
                  Speak with a Retirement Plan Specialist →
                </Link>
              </div>

              {/* Why DC Presents Unique Challenges */}
              <div id="unique-challenges" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-4">
                  Why DC Retirement Planning Presents Unique Challenges
                </h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Washington, DC is home to a unique mix of employers: federal contractors, nonprofit organizations, trade associations, professional service firms, and growing private-sector companies. Each faces distinct demands when it comes to retirement plan management. Whether your employees participate in a 401(k), 403(b), or 457(b) plan, the fiduciary obligations remain equally complex.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  The DC metro area&apos;s competitive labor market means your retirement plan isn&apos;t just a compliance checkbox. It&apos;s a recruitment and retention tool. Employees expect access to well-managed plans with competitive fees and strong investment options. And with total US retirement assets reaching $48.1 trillion as of September 2025, plan sponsors are managing more assets and facing greater liability exposure than ever before.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  DC-area employers also navigate a regulatory environment shaped by proximity to federal policymakers. Changes to DOL guidance, ERISA enforcement actions, and fiduciary standards often impact this region&apos;s employers first. Staying informed isn&apos;t optional. It&apos;s essential to protect your organization and the members who depend on your plan.
                </p>
              </div>

              {/* Understanding Your Fiduciary Responsibilities */}
              <div id="fiduciary-responsibilities" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-4">
                  Understanding Your Fiduciary Responsibilities
                </h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  At the core of every retirement plan is a fiduciary obligation. As a plan sponsor, you&apos;re subject to ERISA&apos;s standards of care, which require you to act prudently, diversify investments, follow plan documents, and pay only reasonable fees. Falling short on any of these can expose you and your organization to personal liability.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  There are two primary fiduciary roles that plan sponsors should understand. A 3(21) co-fiduciary provides advisory recommendations while the plan sponsor retains final decision-making authority. A 3(38) investment manager takes on discretionary responsibility for selecting and monitoring plan investments, shifting a significant portion of liability away from the sponsor.
                </p>
              </div>

              {/* How Investment Monitoring Protects Your Plan */}
              <div id="investment-monitoring" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-4">
                  How Investment Monitoring Protects Your Plan
                </h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  With over 40,000 mutual funds available, selecting the right options for your plan&apos;s investment menu requires a disciplined, repeatable process. Plan sponsors should evaluate fund performance across multiple factors, including risk-adjusted returns, peer group rankings, fund manager tenure, and expense ratios.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Institutional-quality evaluation methods typically use scoring systems that measure each fund against objective criteria on a quarterly basis. This approach helps plan sponsors identify underperforming funds early, find suitable replacements when necessary, and document the rationale behind every decision. That documentation is critical if your plan is ever subject to a DOL audit or participant lawsuit.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  PointOak&apos;s investment methodology, for example, evaluates over $120 billion in retirement plan assets every quarter using a proprietary 10-point pass/fail scoring system. This type of rigorous, data-based approach transforms complex analytics into clear, actionable insights for plan fiduciaries. Learn more about what a thorough <Link href="/investment-analysis" className="text-navy font-medium hover:underline">investment analysis</Link> process should include.
                </p>
              </div>

              {/* Fee Benchmarking in DC Retirement Planning */}
              <div id="fee-benchmarking" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-4">
                  Fee Benchmarking in DC Retirement Planning
                </h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  You&apos;ve certainly thought about cost. But how much is too much, and what are you getting for your money? How does your plan stack up against similar-sized plans in your market? These are prudent questions to ask, and the DOL requires that plans be benchmarked at least every three years to determine the reasonableness of fees.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  The goal of benchmarking isn&apos;t just to confirm you&apos;re paying a fair price. It&apos;s to give you the ammunition to renegotiate better fees or make a provider switch if the data supports it. Plan sponsors who benchmark annually (rather than waiting the minimum three years) tend to maintain more competitive fee structures and stronger provider relationships over time. Explore our <Link href="/provider-and-fee-benchmarking" className="text-navy font-medium hover:underline">provider and fee benchmarking</Link> resource for a closer look at what this process involves.
                </p>
              </div>

              {/* Plan Design Best Practices */}
              <div id="plan-design" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-4">
                  Plan Design Best Practices for DC-Area Employers
                </h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  A cookie-cutter retirement plan rarely serves the unique culture and goals of your organization. Effective plan design should account for your workforce demographics, industry norms, and the specific outcomes you want to achieve for both the company and its employees.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  Features like automatic enrollment and auto-escalation have been shown to significantly boost participation rates. According to BLS data, just 53% of private-sector workers who had access to a retirement plan actually participated. Strong plan design can close that gap, turning eligible members into active participants saving for their financial future. Plan design should also account for the retirees and beneficiaries who depend on your plan&apos;s structure, ensuring that distribution options, vesting schedules, and account provisions serve everyone appropriately.
                </p>
              </div>

              {/* Participant Education */}
              <div id="education" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-4">
                  Participant Education: Turning Access into Action
                </h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Your plan is only as effective as the number of people using it well. Education programs led by licensed advisors can cover everything from basic budgeting to retirement income strategies, helping employees find the information they need to make confident decisions about their account.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  Effective education takes many forms: customized group sessions, one-on-one consultations, online webinars, and live website demonstrations. The goal isn&apos;t just participation. It&apos;s financial planning literacy that helps employees understand how their contributions today translate to retirement readiness tomorrow.
                </p>
              </div>

              {/* Common Challenges */}
              <div id="challenges" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-6">
                  Common Challenges and What to Do About Them
                </h2>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="font-outfit text-sm font-medium text-left px-4 py-3">Challenge</th>
                        <th className="font-outfit text-sm font-medium text-left px-4 py-3">What Plan Sponsors Should Know</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Keeping pace with changing ERISA regulations</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Assign responsibility for tracking regulatory updates, or work with a specialist who stays on top of changes</td>
                      </tr>
                      <tr className="bg-cloud-blue">
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Determining if plan fees are reasonable</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Benchmark annually using your actual plan data, not industry averages</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Selecting and monitoring investments</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Use a repeatable, documented scoring methodology evaluated at least quarterly</td>
                      </tr>
                      <tr className="bg-cloud-blue">
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Low employee participation rates</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Implement auto-enrollment and invest in ongoing education programs</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Protecting against fiduciary liability</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Engage a named 3(21) or 3(38) fiduciary and maintain thorough documentation</td>
                      </tr>
                      <tr className="bg-cloud-blue">
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Managing provider relationships</td>
                        <td className="font-outfit text-sm text-dark-gray px-4 py-3">Conduct periodic RFPs and negotiate based on competitive benchmarking data</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* How to Select the Right Retirement Plan Consultant */}
              <div id="selecting-consultant" className="scroll-mt-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-4">
                  How to Select the Right Retirement Plan Consultant
                </h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Not all advisors are created equal. When evaluating a retirement plan consultant, plan sponsors should look for several key qualities.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  First, look for specialization. Advisors who focus exclusively on retirement plans (rather than offering them as a side service alongside wealth management or insurance) bring deeper knowledge of ERISA compliance, DOL enforcement trends, and plan design best practices. PointOak, for instance, generates over 90% of its revenue from corporate retirement plans.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Second, confirm independence. An independently owned firm has no parent company pushing proprietary products. Every recommendation should be based solely on what&apos;s best for you and your employees, free from conflicts of interest.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Third, request documentation of their process. A meticulous, technology-driven approach that documents every decision, meeting, and review in a comprehensive fiduciary file protects you if you ever face a DOL audit. From the date of engagement through every quarterly update, your record should reflect the prudent steps taken on behalf of your plan.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  Finally, verify fiduciary status. Any advisor you select should be willing to serve as a named fiduciary under ERISA, sharing in the fiduciary responsibility rather than simply providing recommendations with no accountability.
                </p>
              </div>

              {/* Take the Next Step */}
              <div className="bg-cloud-blue rounded-lg p-8 mb-12">
                <h2 className="font-outfit text-navy text-2xl font-medium mb-4">
                  Take the Next Step
                </h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-6">
                  Whether you&apos;re requesting a second opinion on your current plan advisor, submitting your first RFP in years, or looking to update your plan&apos;s investment lineup, having the right information is the first step.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-6">
                  PointOak Retirement Advisors helps plan sponsors across the DC metro area and nationwide navigate every aspect of retirement plan management. Contact our team by email at <a href="mailto:info@pointoak.com" className="text-navy font-medium hover:underline">info@pointoak.com</a>, call us at <a href="tel:7035954444" className="text-navy font-medium hover:underline">(703) 595-4444</a>, or use our online contact page to start the conversation.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-navy text-white font-outfit font-medium px-8 py-3 rounded hover:bg-opacity-90 transition-all"
                >
                  Get In Touch →
                </Link>
              </div>

              {/* FAQ */}
              <div id="faq" className="scroll-mt-8">
                <ServiceDetailFAQ faqs={faqs} />
              </div>
            </article>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Disclaimer */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-6">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="font-outfit text-medium-gray text-xs leading-relaxed">
            Investment advisory services offered through PointOak Retirement Advisors, LLC. This guide is for informational purposes only and does not constitute investment advice. PointOak Retirement Advisors, LLC does not provide tax or legal advice.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <CTASection />
      <Footer />
    </>
  );
}
