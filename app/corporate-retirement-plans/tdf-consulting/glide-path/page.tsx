import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Target Date Fund Glide Path Consulting | PointOak Retirement Advisors",
  description: "Target date fund glide path consulting for plan sponsors. Over 90% revenue from retirement plans. Documented fiduciary selection process. Get in touch.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/tdf-consulting/glide-path/"
  }
};

const highlights = [
  "Independent glide path analysis",
  "Documented fiduciary selection process",
  "$120 billion evaluated quarterly"
];

const processSteps = [
  {
    number: 1,
    title: "Plan Assessment",
    description: "You share plan data and participant demographics. We analyze workforce characteristics to establish glide path criteria."
  },
  {
    number: 2,
    title: "Glide Path Analysis",
    description: "We evaluate available target date fund options, comparing equity allocation, underlying funds, and asset mix."
  },
  {
    number: 3,
    title: "Suitability Recommendations",
    description: "You receive detailed analysis with recommendations on which glide path design and TDF series fits your plan."
  }
];

const faqs = [
  {
    question: "How much does target date fund glide path consulting cost?",
    answer: "Consulting fees depend on plan complexity, number of TDF series being evaluated, and scope of ongoing monitoring. We provide transparent pricing after understanding your needs. Engagements typically include initial analysis, recommendations, and fiduciary file documentation. Contact us for a proposal tailored to your retirement plan."
  },
  {
    question: "What makes PointOak Retirement Advisors different from other target date fund consultants?",
    answer: "Three things: specialization, independence, and documentation. We generate over 90% of revenue from retirement plans. We&apos;re independently owned with no proprietary products creating conflicts. And we document everything using our Virtual 401(k) Fiduciary File system to protect your investment decision if questioned."
  },
  {
    question: "How long does a target date fund glide path evaluation usually take?",
    answer: "A comprehensive glide path evaluation typically takes four to six weeks from receiving plan data to delivering recommendations. Complex evaluations involving multiple provider comparisons may require additional time. We work with your timeline for urgent situations requiring faster turnaround."
  },
  {
    question: "What is the difference between a &quot;to&quot; and &quot;through&quot; retirement glide path?",
    answer: "A &quot;to retirement&quot; glide path reaches its most conservative portfolio at the target retirement date and maintains that asset mix afterward. A &quot;through retirement&quot; approach continues shifting toward more conservative investments for years past the target date. The right approach depends on your participant population characteristics and retirement planning patterns."
  },
  {
    question: "How do I know if my target date fund glide path is appropriate for plan participants?",
    answer: "Appropriate glide paths align with your participant population&apos;s characteristics. Key factors include average retirement date, salary levels, contribution rates, and whether participants have other retirement savings sources. We evaluate your workforce data against your current TDF&apos;s assumptions to identify mismatches that could affect retirement outcomes."
  },
  {
    question: "Can target date funds lose money at or after the target retirement date?",
    answer: "Yes. Target date funds are not guaranteed, and past performance is not necessarily indicative of future results. Plan participants can lose money at any time, including at and after the target date. Funds with higher risk through more equity exposure at retirement carry more investment risk but also more growth potential."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Target Date Fund Glide Path Consulting",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "TDF Glide Path Analysis",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function GlidePathPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "TDF Consulting", href: "/corporate-retirement-plans/tdf-consulting" },
          { label: "Glide Path Analysis" }
        ]}
        title="Target Date Fund Glide Path Consulting for Plan Sponsors"
        subtitle="Your plan participants depend on target date funds to guide their long-term retirement savings through decades of asset allocation changes. PointOak Retirement Advisors helps you evaluate glide path design and select target date funds aligned with your participant population."
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
            Why Choose Us for Target Date Fund Glide Path Consulting?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Target date fund assets recently surpassed $4 trillion, yet equity exposure can vary by 40% among funds sharing the same target retirement date. Many plan sponsors struggle to determine which glide path truly fits their workforce. PointOak has been wholly focused on retirement plan consulting since day one, generating over 90% of our revenue from corporate retirement plans.
            </p>
            <p>
              What sets us apart is our independence. We&apos;re not affiliated with any fund family or recordkeeper, so our target date fund recommendations are based solely on your plan&apos;s objectives and participant population. Our meticulous documentation protects your investment decision if it&apos;s ever questioned.
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
            Our Target Date Fund Glide Path Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">TDF Suitability Analysis</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Your participant population has unique characteristics that affect which glide path design makes sense. Our Target Date Fund (TDF) Consulting begins with comprehensive analysis of workforce demographics, contribution patterns, and retirement behaviors.
              </p>
              <ul className="space-y-2 text-text-gray font-outfit text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Participant demographic analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Retirement behavior assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Risk tolerance evaluation by age</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Glide Path Comparison</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Not all target date funds are created equal. Even funds with identical target retirement dates can have dramatically different asset allocation strategies and equity allocation throughout the glide path. Our side-by-side comparison examines how different fund families approach portfolio construction.
              </p>
              <ul className="space-y-2 text-text-gray font-outfit text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Side-by-side glide path analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Equity allocation comparison by age</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Underlying fund evaluation</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">&quot;To&quot; vs &quot;Through&quot; Retirement Analysis</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                One of the most important glide path design decisions involves whether target date funds reach their most conservative point at the target date or continue adjusting through retirement years. Our analysis helps you understand which approach supports successful retirement outcomes for your participant population.
              </p>
              <ul className="space-y-2 text-text-gray font-outfit text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>To vs through comparison</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Post-retirement asset mix analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Longevity and inflation risk assessment</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Qualitative TDF Evaluation</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Beyond glide path comparison, we assess the broad range of qualitative factors that affect future performance and retirement outcomes. Our evaluation examines investment manager tenure, fund style consistency, and how asset classes work together throughout the glide path design.
              </p>
              <ul className="space-y-2 text-text-gray font-outfit text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Investment manager evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Asset class diversification review</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Risk management assessment</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">TDF Fee and Share Class Review</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Fees directly impact long term retirement savings. A 1% difference in expenses over 35 years can reduce a participant&apos;s nest egg by tens of thousands of dollars. Our fee analysis identifies opportunities to reduce added expenses through appropriate share class selection.
              </p>
              <ul className="space-y-2 text-text-gray font-outfit text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Expense ratio comparison</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Share class optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Fee impact modeling</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">TDF Documentation Support</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Department of Labor guidance makes clear that plan fiduciaries need a documented process for selecting and periodically review target date funds. Our Fiduciary Support services include comprehensive documentation demonstrating your prudent evaluation methodology.
              </p>
              <ul className="space-y-2 text-text-gray font-outfit text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Complete selection documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Investment Policy Statement integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-medium-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Ongoing monitoring records</span>
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
            Common Target Date Fund Glide Path Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Overwhelming fund options</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Over 60 glide path strategies exist with equity exposure varying 40% among same-date funds, making comparison difficult.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our structured evaluation framework narrows options to those aligned with your participant population and investment objectives.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Demographic mismatch</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Off-the-shelf target date funds assume average participants, but your workforce may retire earlier, later, or have different financial situation factors.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We analyze your actual participant data to recommend glide paths designed for populations with similar characteristics.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">To vs through confusion</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">The difference between reaching the most conservative point at retirement versus through retirement affects how much investment risk participants carry.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We explain practical implications of each approach and recommend based on how your plan participants actually behave.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Documentation gaps</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">DOL guidance requires documented selection process, but many plan sponsors lack evidence of the analysis behind their investment decision.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our comprehensive documentation demonstrates your prudent fiduciary process for your Virtual 401(k) Fiduciary File.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Proprietary product concerns</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Recordkeeper-affiliated advisors may favor their firm&apos;s date fund over alternatives, creating potential conflicts in investment advice.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">As an independent firm with no products to sell, our recommendations are based solely on what serves your participants.</td>
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
