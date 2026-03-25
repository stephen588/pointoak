import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Participant Advice | Employee Retirement Guidance | PointOak",
  description: "401(k) participant advice helping plan sponsors deliver investment guidance to employees. Licensed advisors, education programs, one-on-one consultations. Named 3(21)/3(38) fiduciary. Get in touch.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/education-communications/participant-support/"
  }
};

const highlights = [
  "Licensed securities advisors provide personalized guidance",
  "90%+ revenue from retirement plans exclusively",
  "Named 3(21) and 3(38) fiduciary status"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We review your current participant engagement, plan demographics, and financial wellness survey data to understand your workforce needs."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We design a customized education program addressing the specific factors affecting your participants, from retirement readiness to life stage considerations."
  },
  {
    number: 3,
    title: "Implement",
    description: "Our advisors deliver sessions, track participation, and measure outcomes. Everything is documented in your Virtual 401(k) Fiduciary File for audit protection."
  }
];

const faqs = [
  {
    question: "How much does participant advice cost?",
    answer: "Participant education program fees depend on your plan size, participant count, and service frequency. Plans under $50 million typically see advisor fees of 17-37 basis points annually. We provide transparent pricing with no hidden costs and can often reduce your total plan expenses by identifying inefficiencies elsewhere."
  },
  {
    question: "What makes PointOak different from other retirement plan advisors?",
    answer: "Three factors: we generate over 90% of our revenue from retirement plans (true specialists, not generalists), all our advisors serve as named 3(21) or 3(38) fiduciaries under ERISA, and we're independently owned with no pressure to push proprietary investments. Our sole focus is helping your participants achieve successful retirement outcomes."
  },
  {
    question: "How long does it take to implement a participant advice program?",
    answer: "Most organizations launch their first education session within 30-45 days. Our Analyze phase takes 1-2 weeks to review your plan demographics and determine the right approach. We then Optimize your program design and schedule Implementation based on your preferred timeline and employee availability."
  },
  {
    question: "What is the difference between 3(21) and 3(38) fiduciary?",
    answer: "A 3(21) co-fiduciary provides investment advice and recommendations while you retain final decision authority. A 3(38) investment manager assumes discretionary responsibility for selecting and monitoring plan investments. Both share fiduciary liability, but 3(38) offers plan sponsors fewer direct obligations for investment decisions."
  },
  {
    question: "Should employees use target date funds in their 401(k)?",
    answer: "Target date funds offer a less burdensome investment option that can gradually shift to more conservative allocations as participants approach retirement. However, they don't reflect actual investment results for individual circumstances. Our investment analysis helps you evaluate whether TDFs or personalized advice better serves your participants."
  },
  {
    question: "How can I help employees understand their 401(k)?",
    answer: "Beyond enrollment materials, employees benefit from ongoing education addressing retirement planning, investing basics, and how to track progress toward goals. Group sessions create peer engagement while one-on-one consultations address individual questions about risk, distributions, and future projections."
  },
  {
    question: "What advice options work best for mass affluent employees?",
    answer: "Participants in the mass affluent category often need more sophisticated guidance than target date funds provide. They benefit from personalized consultations addressing tax implications, retirement income planning, and asset allocation strategies that account for their complete financial picture."
  },
  {
    question: "How do I know if my employees are on track for retirement?",
    answer: "Survey data shows the majority of participants don't know if they're saving enough. Our education programs teach employees how to track progress, review their account balance against retirement goals, and determine whether their current savings rate will support their future income needs. Annual reviews help participants stay on course."
  },
  {
    question: "What should I do if my plan has high expense ratios affecting participants?",
    answer: "High fees directly impact participant retirement savings over time. Our provider and fee benchmarking services analyze your plan costs against 450+ data points to identify whether you're paying competitive rates. We provide the ammunition to renegotiate better fees or evaluate novel solutions."
  },
  {
    question: "Do you offer support for participants approaching retirement?",
    answer: "Yes. Our advisors help participants nearing retirement understand their income options, withdrawal strategies, and how to maintain their savings through retirement. We address guarantees, distributions, and how to balance growth with conservative investments as participants move from accumulation to decumulation."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "401(k) Participant Advice Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "401(k) Participant Advisory",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function ParticipantSupportPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Education & Communications", href: "/corporate-retirement-plans/education-communications" },
          { label: "One-on-One Participant Support" }
        ]}
        title="401(k) Participant Advice for Plan Sponsors"
        subtitle="Your employees want help with their retirement savings, but 63% of 401(k) participants don&apos;t have a financial advisor. PointOak Retirement Advisors helps plan sponsors deliver the investment advice and guidance your workforce needs to achieve retirement goals."
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
            Why Choose Us for 401(k) Participant Advice?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Employees lose an average of 7.3 hours per week to financial stress, costing U.S. employers $183 billion annually. Your plan participants need a trusted advisor who can help them build confidence in their retirement planning decisions. PointOak has been wholly focused on the retirement plan industry since day one, generating over 90% of our revenue from corporate retirement plans.
            </p>
            <p>
              What sets us apart is our independence and fiduciary standards. Unlike recordkeeper-affiliated advice options, we provide guidance free from conflicts of interest. Our licensed securities advisors act as 3(21) or 3(38) named fiduciaries, sharing responsibility for the investment advice we deliver. This gives your employees the ability to make informed decisions about their retirement assets.
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
            Our Participant Education Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Customized Group Education Sessions</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Our education and communications programs bring licensed securities advisors directly to your workforce. These interactive sessions address retirement planning, risk tolerance assessment, and retirement income strategies tailored to your organization&apos;s demographics.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Group sessions create an environment that encourages active participation. We cover debt management, budgeting, and savings priorities so employees can see their complete financial picture. Your participants leave with actionable steps to track progress toward retirement goals.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Led by licensed securities advisors</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Covers budgeting, debt, and retirement savings</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Tailored to your workforce demographics</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">One-on-One Consultation Sessions</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Some plan participants need personalized attention to review their account balance, determine appropriate investments, and establish a retirement planning strategy. Our individual consultations provide professional advice addressing each employee&apos;s unique factors including age, risk tolerance, and retirement goals.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                These sessions help participants understand tax implications of their contributions and withdrawals. Advisors review current allocations and help employees gradually shift their investments as they move through the accumulation phase toward retirement income needs.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Personalized investment advice for participants</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Address individual risk tolerance factors</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Review account allocations and projections</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Online Webinars</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                For distributed workforces, our online webinars deliver the same thought leadership and guidance as in-person sessions. Plan participants can join from any location, making retirement planning support accessible across your entire organization.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Webinars maintain engagement through interactive elements and live Q&amp;A. We record sessions so employees who cannot attend can review the material later. This ensures your majority of participants can access professional help regardless of schedule or location.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Accessible for remote and distributed teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Interactive format with live Q&amp;A</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Recorded for future employee access</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Monthly Financial Newsletters</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Ongoing engagement keeps retirement planning top of mind between education sessions. Our monthly newsletters deliver timely guidance on market conditions, regulatory updates, and financial planning strategies that help participants stay confident about their future.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Consistent communication reinforces positive savings behaviors and helps participants maintain focus on their retirement goals. Newsletters address seasonal topics like annual enrollment decisions and year-end contribution strategies.
              </p>
              <p className="text-text-gray font-outfit text-sm font-semibold mb-2">Highlights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Ongoing support beyond initial sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Timely market and regulatory updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-gray font-outfit text-sm">Reinforces positive savings behaviors</span>
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
            Common Participant Advice Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Unadvised participants lack confidence</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Only 38% of workers feel confident making 401(k) investment decisions alone, leading to analysis paralysis or poor allocation choices</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our one-on-one consultations give participants the professional advice they need to invest confidently based on their risk tolerance</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Financial stress crushing productivity</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">56% of financially stressed employees spend 3+ hours weekly at work on personal finances, reducing focus and output</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Comprehensive education programs reduce money worries so employees can retain focus and achieve better work-life balance</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Participants relying on wrong sources</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">52% of participants without an advisor rely on their recordkeeper as their primary source for retirement guidance</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Independent advisors provide unbiased guidance free from recordkeeper conflicts, serving as a trusted advisor for your workforce</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Multi-generational workforce needs</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Gen Z faces student debt while Boomers need decumulation strategies, yet most plans offer one-size-fits-all solutions</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We tailor sessions by life stage so each generation gets relevant guidance for their accumulation phase or income planning needs</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Low participation and deferral rates</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Many plans fall below the 84.9% industry benchmark participation rate, leaving employees unprepared for retirement</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Engaging education helps participants establish higher contribution levels and track progress toward retirement savings goals</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fiduciary liability exposure</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Plan sponsors have obligations to ensure participants can make informed decisions, yet lack documented education programs</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our Virtual 401(k) Fiduciary File documents all participant support, helping you maintain compliance with fiduciary standards</td>
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
