import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Shield, Users, DollarSign, Settings, CheckCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Target Date Fund Consulting | PointOak Retirement Advisors",
  description: "PointOak's TDF consulting matches glide path design to your plan's participant base. Named 3(21)/3(38) fiduciary. 450+ data points per bidder. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/tdf-consulting/"
  }
};

const highlights = [
  "450+ data points reviewed per plan bidder",
  "Named 3(21) and 3(38) ERISA fiduciary",
  "Fee-only fiduciary since 2017"
];

const benefitsData = [
  {
    title: "Documented Fiduciary Protection",
    description: "DOL's TDF fiduciary guidance requires a thorough, objective evaluation for comparing TDFs designated as your plan's QDIA. PointOak's consulting produces that documentation trail: selection rationale, comparison criteria, and a review cadence for each fund series. Your committee's fiduciary support record starts here.",
    icon: Shield
  },
  {
    title: "Participant-Matched Default Design",
    description: "PSCA reports 71% of TDF investors held their entire account in a single target date fund. When participants default into one fund, the glide path's equity exposure and asset allocation must reflect their demographics: ages, salary bands, turnover rates, and risk tolerance. A generic asset mix fails most plans.",
    icon: Users
  },
  {
    title: "Independent Vehicle and Fee Analysis",
    description: "PointOak's fee-only model eliminates recordkeeper and manufacturer bias from TDF evaluation. We review fees and expenses at the component level across mutual funds, CITs, and custom structures. Our provider and fee benchmarking process spans all available asset classes, vehicles, and investment strategies.",
    icon: DollarSign
  },
  {
    title: "Custom vs. Off-the-Shelf Clarity",
    description: "DOL directs plan fiduciaries to evaluate whether a custom solution or off-the-shelf target date fund fits their plan better. PointOak answers that question with data: participant demographics, fee analysis, governance capacity, and diversification needs specific to your plan's profile. The right path depends on your investment options and participant base.",
    icon: Settings
  },
  {
    title: "Ongoing Monitoring and Review Cadence",
    description: "DOL requires periodic review of TDF selections, not a one-time recommendation. PointOak establishes a documented monitoring framework covering glide path changes, fee shifts, and participant demographic updates. Each review cycle produces an updated fiduciary record with security against future DOL inquiries.",
    icon: CheckCircle
  }
];

const needsConsultingData = [
  {
    title: "Your Committee Has No Documented TDF Selection Process",
    description: "If your current TDF was inherited or auto-selected by the recordkeeper, your fiduciary file likely lacks the documented comparison DOL expects for QDIA selections. A custom solution approach starts with independent consulting to close that gap."
  },
  {
    title: "Your Plan Is Considering a Recordkeeper Change",
    description: "Recordkeeper transitions open access to different fund lineups, share classes, and CIT options. Evaluate your TDF series independently as part of a broader plan design review before the transition closes."
  },
  {
    title: "Your Participant Demographics Differ from Generic Assumptions",
    description: "Plans with unusual age distributions, high turnover, or concentrated salary bands need a different glide path than off-the-shelf defaults. Your participant data and investor ages should drive TDF selection, not a generic model built on standard assumptions."
  },
  {
    title: "Your Committee Wants to Evaluate Custom or Blended Structures",
    description: "Custom and blended TDF structures add governance complexity that requires justification. An independent consultant determines whether a custom solution is warranted for your plan's size, demographics, and capacity before your committee commits."
  },
  {
    title: "You Have Concerns About Fiduciary Exposure on Your QDIA",
    description: "If committee members are uncertain the current QDIA would withstand DOL scrutiny, independent consulting creates the defensible record a solid process requires. Documentation provides the security that separates a prudent decision from an inherited one."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We evaluate your current TDF lineup: participant demographics, glide path structure, fees, vehicle type, and fiduciary documentation."
  },
  {
    number: 2,
    title: "Optimize",
    description: "You receive recommendations on TDF selection, custom-vs-off-the-shelf fit, allocation changes, and a monitoring framework."
  },
  {
    number: 3,
    title: "Implement",
    description: "We execute changes, update your fiduciary file, and establish a review cadence with participant education support."
  }
];

const faqs = [
  {
    question: "How much does target date fund consulting cost?",
    answer: "TDF consulting fees vary by plan complexity, asset size, and engagement scope. PointOak operates on a fee-only model with no commissions or product-based compensation. TDF consulting is typically part of a broader retirement plan consulting relationship, with fees transparent, scaled to plan size and complexity, and disclosed before engagement begins. The complimentary initial consultation carries no cost and no obligation."
  },
  {
    question: "What's the difference between an off-the-shelf and custom target date fund?",
    answer: "Off-the-shelf TDFs use a generic glide path; custom TDFs are built around your plan's participant data. Off-the-shelf series assume a typical participant base and apply a standardized asset mix. Custom structures adjust the glide path, asset-class composition, and vehicle selection to match your plan's demographics. The comparison table above outlines trade-offs across six factors, and PointOak's evaluation determines which structure your fiduciary file supports."
  },
  {
    question: "How often should plan fiduciaries review target date funds?",
    answer: "DOL guidance calls for periodic TDF reviews, and most committees should evaluate at least annually. A documented annual review covers glide path fit, fee competitiveness, vehicle changes, and participant demographic shifts. PointOak establishes a monitoring framework and provides documentation for each review cycle. Significant plan events like a recordkeeper change warrant an interim review outside the standard cadence."
  },
  {
    question: "How do you choose the right target date fund for a 401(k) plan?",
    answer: "Start with participant demographics, then evaluate glide path fit, fees, vehicle type, and component-fund composition. DOL guidance identifies participant ages, retirement timing, salary levels, turnover, and contribution rates as factors fiduciaries should assess. PointOak applies these criteria through a structured evaluation and delivers committee-ready documentation with specific recommendations tied to your plan's data. Fiduciary support records are maintained throughout the process."
  },
  {
    question: "What is glide path analysis in a target date fund?",
    answer: "Glide path analysis evaluates how a TDF shifts its asset allocation from equities to fixed income over time. Two funds with the same target date hold materially different equity exposure at every point along the glide path. A \"to\" approach reduces equity by the target retirement date, while a \"through\" approach maintains higher equity into retirement. The right structure depends on how your participants behave after they stop contributing."
  },
  {
    question: "What is the difference between a \"to\" and \"through\" retirement glide path?",
    answer: "A \"to\" glide path reaches its most conservative allocation at retirement; a \"through\" glide path continues adjusting after. \"To\" designs assume participants withdraw or annuitize at retirement. \"Through\" designs assume participants stay invested and draw down gradually, maintaining higher equity longer. Neither is guaranteed to produce superior outcomes, and PointOak evaluates which philosophy matches your plan's participant behavior and retirement patterns."
  },
  {
    question: "Are all 2035 or 2040 target date funds basically the same?",
    answer: "No. Same-vintage TDFs differ substantially in equity exposure, asset-class composition, fees, and glide path design. Same-vintage funds show wide variation in equity allocation across providers. A 2040 fund from one provider holds significantly more equity than a 2040 from another, creating different risk profiles for participants who assume they are interchangeable. Independent analysis is the only way to evaluate fit for your plan's demographics."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Target Date Fund Consulting for Plan Sponsors and Fiduciary Committees",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Target Date Fund Consulting",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function TDFConsultingPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Target Date Fund Consulting" }
        ]}
        title="Target Date Fund Consulting for Plan Sponsors and Fiduciary Committees"
        subtitle="A brand-name target date fund with the right vintage year does not constitute a documented fiduciary process. PointOak's target date fund consulting helps plan sponsors and plan fiduciaries build a documented selection and glide path evaluation matched to plan participants' demographics and retirement savings patterns."
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

      {/* Benefits of Target Date Fund Consulting */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Target Date Fund Consulting
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

      {/* How Target Date Fund Consulting Works */}
      <AnimateOnScroll>
      <section className="bg-[#F5F3EF] py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Target Date Fund Consulting Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              A rigorous TDF evaluation starts with participant demographics: ages, target retirement dates, salary levels, contribution rates, and withdrawal patterns. The evaluation examines glide path design (static glide path vs. declining glide path), underlying asset allocation across stocks, bonds, cash, and other asset classes. Management style and component-fund investment strategies receive the same <Link href="/investment-analysis/" className="text-navy underline hover:text-medium-blue transition-colors">investment analysis</Link> rigor applied to the full plan menu and managed investments.
            </p>
            <p>
              <a href="https://www.morningstar.com/funds/target-date-funds-have-delivered-investors" target="_blank" rel="noopener noreferrer" className="text-navy underline hover:text-medium-blue transition-colors">Morningstar&apos;s 2024 target-date report</a> shows target-date mutual fund asset-weighted fees fell to 29 basis points in 2024. Fee compression and CIT growth make vehicle selection a live fiduciary requirement, not a historical checkbox. A plan holding high-cost mutual fund shares finds lower-cost CIT alternatives with identical underlying assets and bond exposure.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-300">
              <p>
                <Link href="/contact/" className="text-navy underline hover:text-medium-blue transition-colors font-medium">Schedule a consultation</Link> to evaluate your plan&apos;s target date fund lineup.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs Target Date Fund Consulting */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs Target Date Fund Consulting
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Not every plan needs independent TDF consulting. These scenarios help plan sponsors determine when a documented review is overdue.
          </p>
          <div className="space-y-6">
            {needsConsultingData.map((item, idx) => (
              <div key={idx} className="bg-cloud-blue rounded-lg p-6 md:p-8 border-l-4 border-navy">
                <h3 className="font-outfit text-navy text-lg md:text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
            <div className="bg-[#F5F3EF] rounded-lg p-6 md:p-8 border-l-4 border-warm-gold">
              <h3 className="font-outfit text-navy text-lg md:text-xl font-semibold mb-3">When TDF Consulting Might Not Be the Right Fit</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plans with straightforward demographics, limited governance capacity, and a well-documented existing process generally do not need outside TDF consulting. Existing <Link href="/our-services/" className="text-navy underline hover:text-medium-blue transition-colors">retirement plan consulting services</Link> are sufficient.
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
            Off-the-Shelf TDF vs. Custom TDF
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-10">
            Both traditional TDF and custom target date fund structures serve plan participants. The right path depends on participant demographics, plan size, fee leverage, and governance capacity.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Off-the-Shelf TDF</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Custom TDF</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Participant fit</td>
                  <td className="px-4 py-3 text-gray-700">Generic demographic assumptions</td>
                  <td className="px-4 py-3 text-gray-700">Glide path matched to plan data</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Vehicle options</td>
                  <td className="px-4 py-3 text-gray-700">Mutual funds, standard share classes</td>
                  <td className="px-4 py-3 text-gray-700">CITs (50.5% of TDF assets by mid-2024), mutual funds, or blended</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fee structure</td>
                  <td className="px-4 py-3 text-gray-700">Packaged expense ratio</td>
                  <td className="px-4 py-3 text-gray-700">Component-level fee negotiation</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Governance requirement</td>
                  <td className="px-4 py-3 text-gray-700">Standard monitoring cadence</td>
                  <td className="px-4 py-3 text-gray-700">Custom IPS with ongoing rebalancing oversight</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Portability</td>
                  <td className="px-4 py-3 text-gray-700">High; transfers with recordkeeper changes</td>
                  <td className="px-4 py-3 text-gray-700">Lower; requires restructuring</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Branding</td>
                  <td className="px-4 py-3 text-gray-700">Provider-branded series</td>
                  <td className="px-4 py-3 text-gray-700">Plan-branded or white-labeled</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Sway Research reports $371 billion in custom TDF strategies at year-end 2025. Custom wins when demographics diverge and plan size creates leverage for individual investments; off-the-shelf wins when governance is limited. PointOak&apos;s <Link href="/investment-analysis/" className="text-navy underline hover:text-medium-blue transition-colors">investment analysis</Link> resolves the question with your plan&apos;s data and a documented comparison.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our TDF Consulting Process
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
            Why Choose PointOak for Target Date Fund Consulting
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              The <a href="https://www.ici.org/index.php/resource-hubs/target-retirement-date-funds" target="_blank" rel="noopener noreferrer" className="text-navy underline hover:text-medium-blue transition-colors">Investment Company Institute</a> reports $4.0 trillion invested in target date funds at year-end 2024. That concentration makes TDF selection one of the most consequential fiduciary decisions in any DC plan. PointOak evaluates every series as an <Link href="/about/" className="text-navy underline hover:text-medium-blue transition-colors">independent, fee-only advisory firm</Link> with no product affiliations or recordkeeper ties, strengthening every recommendation and investment strategy.
            </p>
            <p>
              "We already have a TDF lineup" is the most common reason committees defer review. An existing lineup is not a documented fit analysis. PointOak&apos;s Live Bid methodology and DOL-aligned strategy create the fiduciary record that protects investment returns and supports long-term growth in participant outcomes.
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
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. SEC-registered investment advisor serving plan sponsors and high-net-worth individuals nationwide. Over $1.08 billion in assets under management. 50+ years of collective team experience. Darsh Makim, CRPC, leads a <Link href="/our-consulting-team/" className="text-navy underline hover:text-medium-blue transition-colors">senior advisory team</Link> present in every client relationship. <Link href="/contact/" className="text-navy underline hover:text-medium-blue transition-colors">Schedule a consultation</Link>.
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
