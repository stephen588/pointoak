import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "TDF Fiduciary Documentation Services | PointOak Retirement Advisors",
  description: "TDF fiduciary documentation consulting for plan sponsors. Named ERISA fiduciary with multi-step TDF suitability process. Document your prudent process. Get In Touch.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/tdf-consulting/tdf-documentation/"
  }
};

const highlights = [
  "Multi-step TDF suitability and selection process",
  "Complete fiduciary file documentation support",
  "Named 3(21) or 3(38) ERISA fiduciary status"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze Current State",
    description: "You share your current TDF documentation, plan demographics, and Investment Committee records. We evaluate existing gaps against what DOL expects."
  },
  {
    number: 2,
    title: "Participant Suitability Assessment",
    description: "We analyze your workforce characteristics including employees ages and account balances to determine appropriate TDF risk levels and document alignment."
  },
  {
    number: 3,
    title: "TDF Evaluation and Comparison",
    description: "Your current TDF is evaluated against alternatives using performance, the fund&apos;s fees, and qualitative factors. Everything is documented thoroughly."
  },
  {
    number: 4,
    title: "Investment Committee Presentation",
    description: "We present findings and recommendations to your committee, helping facilitate discussion about investment options and documenting all decisions made."
  },
  {
    number: 5,
    title: "Ongoing Monitoring and Documentation",
    description: "Quarterly reviews monitor funds for significant changes in performance, strategy, or management staff, maintaining your fiduciary file documentation."
  }
];

const faqs = [
  {
    question: "How much does TDF fiduciary documentation consulting cost?",
    answer: "TDF consulting fees depend on plan size, current documentation status, and scope of other services needed. Plans with existing documentation may need only periodic review support, while those building processes from scratch require more comprehensive engagement. We provide transparent pricing after understanding your specific situation and never charge hidden fees or unexpected additional costs."
  },
  {
    question: "What makes PointOak different from other TDF consulting firms?",
    answer: "Three factors distinguish our approach. First, we generate over 90% of revenue from retirement plans, making us true specialists rather than generalists. Second, we serve as named 3(21) or 3(38) fiduciaries, backing recommendations with direct liability protection. Third, our technology-driven Virtual 401(k) Fiduciary File system maintains documentation organized for audit defense, covering all individual investment options within your plan&apos;s TDFs."
  },
  {
    question: "How long does the TDF selection and documentation process take?",
    answer: "Initial TDF evaluation and documentation typically requires 60 to 90 days, allowing time for data gathering, analysis, Investment Committee review, and documentation finalization. A new report from industry researchers shows that proper evaluation over a longer period produces better outcomes. Ongoing monitoring then follows quarterly cycles. We can accommodate accelerated timelines for urgent situations."
  },
  {
    question: "What documentation is required for target date fund selection?",
    answer: "The DOL expects documentation showing you established an objective process for comparing and selecting TDFs, understood the fund&apos;s investments and asset allocation glide path, reviewed the fund&apos;s fees and expenses, considered whether custom options includes component investments not managed by your TDF vendor would better fit your plan, developed effective participant communications, and maintained records of how you reached decisions on individual investment options. We help ensure all elements are properly documented."
  },
  {
    question: "How often should plan fiduciaries review target date funds?",
    answer: "Plan fiduciaries should monitor funds at minimum on an annual basis, with many experts recommending quarterly monitoring for performance tracking. Reviews should examine whether there have been significant changes in any criteria you considered when selecting TDFs, including investment strategy changes, management staff turnover, fee modifications, or shifts in participant demographics. We provide quarterly monitoring support to help you stay current."
  },
  {
    question: "What is the difference between &quot;to&quot; and &quot;through&quot; TDF glide paths?",
    answer: "A &quot;to retirement&quot; glide path reaches its most conservative investments at the target retirement date, while a &quot;through retirement&quot; fixed date approaches continue shifting after the approximate date. As the fund nears retirement years, asset allocation becomes more conservative to reduce volatility. Neither approach is inherently better; appropriate choice depends on your plan participants&apos; characteristics. Documenting why your selected glide path suits your workforce is essential."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "TDF Fiduciary Documentation Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Target Date Fund Documentation",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function TDFDocumentationPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "TDF Consulting", href: "/corporate-retirement-plans/tdf-consulting" },
          { label: "TDF Fiduciary Documentation" }
        ]}
        title="TDF Fiduciary Documentation"
        subtitle="Your retirement plan likely has most plan participants invested in target date funds as the default investment option. How confident are you that your selection and monitoring process is properly documented? PointOak Retirement Advisors helps plan sponsors understand and build the documented, defensible TDF fiduciary process the Department of Labor expects ERISA plan fiduciaries to maintain."
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
            Why Choose Us for TDF Fiduciary Documentation?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Target date fund assets reached a record $4 trillion in 2024, with 98% of plans using TDFs as their qualified default investment alternative. This concentration has made TDF selection and documentation a primary target for ERISA litigation. PointOak has been wholly focused on retirement plan fiduciary obligations since day one, with over 90% of revenue from corporate retirement plans.
            </p>
            <p>
              What sets us apart is our multi-step TDF suitability and selection process that documents every decision point. We act as your 3(21) or 3(38) named fiduciary under ERISA, backing our recommendations with direct liability protection. Our Virtual 401(k) Fiduciary File system maintains comprehensive documentation of your TDF evaluation, helping protect you if the DOL comes calling.
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
            Our Target Date Fund Consulting Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">TDF Suitability Analysis</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Understanding whether your TDF&apos;s characteristics align with your plan participants is the foundation of a defensible selection process. Our Target Date Fund (TDF) Consulting begins with comprehensive analysis of participant demographics, account balances, savings behaviors, and retirement readiness characteristics to determine appropriate glide path risk levels based on employees ages and target retirement date expectations.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We evaluate whether a traditional TDF or customized solution best fits your workforce profile. This suitability analysis documents the alignment between your participants savings patterns and the fund&apos;s investments, creating the paper trail DOL guidance requires. Our process examines how the fund&apos;s characteristics align with your specific retirement plan investors.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Qualitative TDF Evaluation</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Not all TDFs are created equal, even among retirement funds with the same retirement date. We conduct thorough qualitative evaluation of fund strategies, underlying asset classes, management staff tenure, and investment philosophy. Small differences in primary strategy can significantly impact how participants approach retirement.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our evaluation examines whether the TDF uses a &quot;to retirement&quot; or &quot;through retirement&quot; glide path approach and how that aligns with your plan&apos;s objectives. We analyze component funds held within the TDF structure and evaluate how the fund nears its most conservative investments as participants approach their retirement years.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">TDF Performance and Fee Analysis</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                How does your TDF stack up against alternatives? We conduct comprehensive performance analysis comparing your current or prospective TDF against peer funds across multiple time periods. Our methodology evaluates risk-adjusted returns, peer group rankings, and performance consistency over a longer period to identify potential concerns before they become litigation targets.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Fee analysis examines all layers of TDF costs, including the fund&apos;s fees, expense ratios on component investments, and any overlay expenses charged by the TDF vendor. We use our Investment Analysis methodology to evaluate whether fees are reasonable for the services provided, documenting our findings for your fiduciary records.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">TDF Documentation Support</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Documentation is your primary defense in TDF litigation. We help you build and maintain complete fiduciary files that demonstrate your objective process for selecting and monitoring target date funds. This includes component investments analysis, meeting minutes, evaluation frameworks, comparison analyses, and decision rationales covering individual investment options within the TDF structure.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our Virtual 401(k) Fiduciary File system maintains digital copies of all TDF-related documentation, organized and accessible when you need it. We document everything we do with you. Our fiduciary advisor team helps ensure your records reflect the things DOL suggests plan sponsors maintain on an annual basis.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Employee TDF Communications</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Participant education is a regulatory disclosure requirement that many plan sponsors overlook. We develop effective communications that help plan participants understand how target date funds work, what the glide path means for their investments, and the approximate date when investors plan to start withdrawing money from the fund.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our licensed securities advisors can lead interactive sessions through our Education & Communications Programs that educate participants about TDF concepts in accessible terms. Proper participant communications not only fulfill disclosures required by law but also increase engagement with your retirement plan. Check EBSA&apos;s website for updates on regulatory disclosure requirements.
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
            Common TDF Fiduciary Documentation Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Rising litigation exposure</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Record TDF settlements reaching $69 million have plaintiffs&apos; attorneys actively investigating underperforming funds across the industry in the near future.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We help build documented, defensible selection processes that demonstrate your prudent fiduciary oversight to protect against claims.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Inadequate selection documentation</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Many ERISA plan fiduciaries lack formal records showing how they compared TDFs, evaluated the fund&apos;s fees, or considered participant demographics before selecting TDFs.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our multi-step process documents every evaluation factor, creating the paper trail the TDF tip highlights establish as required for fiduciary defense.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Proprietary fund conflicts</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">TDF vendors offer discounts for using their funds, but recordkeeper convenience is not a fiduciary defense if the fund underperforms other services available.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We conduct independent evaluation of proprietary vs. non-proprietary options using commercially available resources to document objective comparison.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Glide path suitability uncertainty</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Plan sponsors struggle to determine whether conservative investments &quot;to retirement&quot; or &quot;through retirement&quot; approaches align with their specific participant population.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our suitability analysis matches glide path characteristics to your workforce demographics and retirement years expectations, documenting the selection rationale.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fee transparency difficulties</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">TDFs have multiple fee layers including expenses charged on component funds held within the structure, making true cost comparison difficult without detailed analysis.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We conduct bottom-up fee analysis examining all cost components and benchmark against peers, documenting findings for your fiduciary file.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Outdated guidance challenges</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">DOL&apos;s 2013 tips represent a relatively recent evolution but don&apos;t address CITs or income-enabled TDFs, leaving sponsors uncertain about current fiduciary expectations.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We stay current on litigation outcomes and regulatory developments, providing assistance navigating today&apos;s fiduciary standards with updated process documentation.</td>
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
