import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "IPS Development for Retirement Plans | PointOak Advisors",
  description: "Investment Policy Statement development by named fiduciaries. Custom IPS integrated with monitoring and benchmarking. Protect your plan. Get in touch.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/investment-analysis/ips/"
  }
};

const highlights = [
  "Named fiduciary status with every IPS",
  "Integrated with quarterly investment monitoring",
  "Annual review process included"
];

const processSteps = [
  {
    number: 1,
    title: "Initial Consultation and Plan Assessment",
    description: "You&apos;ll meet with our financial professional team to discuss your plan demographics, participant characteristics, and investment objectives. We confirm your appointment and outline next steps within 24 hours via e mail."
  },
  {
    number: 2,
    title: "Investment Committee Collaboration",
    description: "We work directly with your Investment Committee to define fiduciary responsibilities, establish risk tolerance, and identify investment goals. You&apos;ll provide input on investment philosophy, time horizon, and decision-making preferences during collaborative sessions."
  },
  {
    number: 3,
    title: "Draft IPS Development",
    description: "You receive a customized draft IPS within two to three weeks. We present the document with specific details, explain each section, and gather feedback for revisions."
  },
  {
    number: 4,
    title: "Board Approval and Implementation",
    description: "Your board or governing body reviews and approves the final IPS. We help present the document and integrate it with your existing investment monitoring and benchmarking processes for the future."
  },
  {
    number: 5,
    title: "Ongoing Annual Review",
    description: "You participate in scheduled annual reviews to assess whether your IPS remains current. We recommend updates based on regulatory changes, plan evolution, and investment landscape shifts affecting how assets are invested."
  }
];

const faqs = [
  {
    question: "How much does Investment Policy Statement development cost?",
    answer: "IPS development typically costs between $3,000 and $8,000 depending on plan complexity, participant count, and customization requirements. Our fees include initial development, Investment Committee collaboration, board presentation support, and first-year annual review. We provide transparent pricing with specific details during consultation and no hidden expenses."
  },
  {
    question: "What makes PointOak different from other retirement plan advisors for IPS development?",
    answer: "Three key differences set us apart. First, all our investment advisors are registered as 3(21) or 3(38) named fiduciaries, so we understand IPS liability implications personally. Second, we generate over 90% of revenue from retirement plan work, making us true specialists rather than generalists. Third, we integrate your IPS with our proprietary investment monitoring and Live Bid benchmarking processes, ensuring the document matches actual practice for managing the plan&apos;s investments."
  },
  {
    question: "How long does the IPS development process take?",
    answer: "Most retirement plans complete IPS development in four to six weeks from initial consultation to board approval. The timeline includes Investment Committee collaboration sessions (one to two weeks), draft development (two to three weeks), revision cycles (one week), and board presentation preparation. Complex plans with multiple committees or unique requirements affecting asset allocation may require eight to ten weeks."
  },
  {
    question: "Is an Investment Policy Statement required for a 401(k) plan?",
    answer: "ERISA does not legally require an IPS. However, the DOL stated in Interpretive Bulletin 2016-01 that an IPS serves a &quot;legitimate purpose&quot; and is consistent with ERISA&apos;s duty of prudence. The DOL regularly requests IPSs during plan audits to evaluate how plan sponsors manage fiduciary risk. With 96% of large plans maintaining an IPS, not having one subjects your retirement plan to greater scrutiny and potential breach allegations."
  },
  {
    question: "What should be included in a retirement plan Investment Policy Statement?",
    answer: "A comprehensive IPS defines investment objectives, outlines Investment Committee roles and fiduciary responsibilities, establishes asset allocation guidelines and permitted asset classes, specifies criteria for selecting investment options including share class selection, describes monitoring procedures on a regular basis, and documents the review process. It should include both quantitative factors like expense ratios and performance benchmarks, and qualitative factors like manager tenure and organizational stability. An effective IPS must balance specificity with flexibility to serve as a practical road map."
  },
  {
    question: "How often should an Investment Policy Statement be updated?",
    answer: "Review your IPS annually on a regular basis to ensure it remains current with regulations, investment products, and plan demographics. Make amendments as needed for material changes in plan design, investment philosophy, or fiduciary roles. Conduct comprehensive rewrites every three to five years to refresh the entire document and confirm it reflects current thinking about investment goals, the time horizon for plan participants, and market conditions affecting how assets are invested."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Investment Policy Statement Development",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "IPS Development and Fiduciary Services",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function IPSPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Investment Analysis", href: "/corporate-retirement-plans/investment-analysis" },
          { label: "Investment Policy Statement" }
        ]}
        title="Investment Policy Statement Development for Retirement Plans"
        subtitle="You&apos;re facing overwhelming ERISA regulations and are uncertain about your fiduciary obligations. PointOak Retirement Advisors specializes in developing effective IPS documents that protect retirement plan sponsors from fiduciary risk while establishing a clear framework for prudent investment decisions nationwide."
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
            Why Choose Us for Investment Policy Statement Development?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              With over 90% of our revenue from retirement plan work, PointOak brings specialized expertise to IPS development. Our investment advisors act as 3(21) or 3(38) named fiduciaries with all clients, ensuring we understand the liability implications personally.
            </p>
            <p>
              What sets us apart is our integrated approach. We don&apos;t deliver a template and disappear. Your IPS connects directly to our proprietary 10-point investment scoring system and Live Bid benchmarking process. Every IPS becomes part of your Virtual 401(k) Fiduciary File, with annual reviews on a regular basis and quarterly monitoring to ensure you actually follow the framework we create together.
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
            Our Investment Policy Statement Development Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Customized IPS Creation</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our Investment Policy Statement development creates a framework tailored to your plan demographics, participant sophistication, and organizational objectives. We avoid rigid mandates that create the Tussey v. ABB pitfall while providing enough structure to demonstrate procedural prudence during DOL audits.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">3(21) and 3(38) Fiduciary Role Definition</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your IPS must clearly define whether your investment adviser serves in a 3(21) co-fiduciary advisory role or a 3(38) discretionary investment manager capacity. We help you understand how each approach affects fiduciary responsibilities and structure your IPS accordingly, ensuring clarity around who makes final investment decisions and who bears accountability.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Investment Selection and Monitoring Criteria</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We establish objective, quantitative criteria for selecting and monitoring the plan&apos;s investments without being so specific that minor performance variations trigger unnecessary changes. Your IPS will define permitted asset classes, sub asset classes, performance benchmarks, share class selection guidelines, and expense ratio thresholds, plus qualitative factors like manager tenure and organizational stability.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Annual Review and Update Process</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                An IPS you don&apos;t maintain becomes a liability rather than protection. We schedule annual reviews on a regular basis to ensure your IPS reflects current investment products, evolving plan demographics, and market conditions. Our process keeps documentation current without requiring constant rewrites, preserving the document&apos;s value as an effective IPS.
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
            Common Investment Policy Statement Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Generic Template Risk</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Download a boilerplate IPS that doesn&apos;t reflect your plan&apos;s actual decision-making process or participant demographics, creating a &quot;check the box&quot; compliance problem that fails best practice standards.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We customize every IPS based on your plan demographics, participant sophistication, and organizational culture. Your framework matches how investment decisions actually get made.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Too Rigid or Too Vague</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">IPS language either forces decisions you don&apos;t want (Tussey v. ABB problem) or provides no meaningful guidelines, making the document useless during DOL audits.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We create flexible frameworks with objective criteria for evaluation. You get structure that demonstrates prudence without mandating specific actions that might be inappropriate for your course.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Disconnected from Actual Practice</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Your IPS establishes criteria for fund selection, but your investment managers use different metrics for quarterly monitoring, creating documentation gaps during audits of the portfolio.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We integrate your IPS directly with our proprietary 10-point investment scoring system and quarterly monitoring process. Criteria match the analysis you receive on a regular basis.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">No Ongoing Maintenance</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Your IPS sits in a file for years without review, becoming stale and potentially creating liability when market conditions, regulations, or the plan&apos;s goals change.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We schedule annual reviews and track all amendments through your Virtual 401(k) Fiduciary File. Documentation stays current as we serve your ongoing needs without constant rewrites.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Lack of Specialized Expertise</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Your advisor doesn&apos;t understand fiduciary role nuances, leading to unclear 3(21) versus 3(38) definitions and ambiguous responsibility assignments affecting how the plan&apos;s investments are managed.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">All our investment advisors are registered named fiduciaries who personally understand liability implications. We define roles clearly because we serve in those roles ourselves and manage fiduciary risk daily.</td>
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
