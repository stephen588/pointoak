import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Target Date Fund Glide Path Evaluation | PointOak",
  description: "Evaluate target date fund glide paths with a fiduciary framework built for plan committees. Named 3(21) and 3(38) ERISA fiduciary. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/tdf-consulting/glide-path/"
  }
};

const highlights = [
  "Named 3(21) and 3(38) ERISA fiduciary",
  "DOL-aligned multi-step selection process",
  "Fee-only, independent of fund manufacturers"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "Review current TDF investments, glide path design, fees, and participant demographics against plan investment goals."
  },
  {
    number: 2,
    title: "Optimize",
    description: "Recommend glide path changes or alternative investment strategies aligned with participant data and retirement savings objectives."
  },
  {
    number: 3,
    title: "Implement",
    description: "Execute changes with full fiduciary documentation through our target date fund consulting process and a periodic review schedule."
  }
];

const faqs = [
  {
    question: "How much does target date fund consulting cost?",
    answer: "TDF consulting fees vary by plan size, complexity, and scope of the engagement. PointOak uses a fee-only model with no commissions, added expenses, or fund-company payments. Consulting fees reflect plan asset size and the scope of evaluation, whether a standalone glide path review or ongoing fiduciary support with periodic reassessment. A fee-only structure at low cost relative to fiduciary protection ensures recommendations serve your committee's interests rather than product revenue. The initial consultation is complimentary with no obligation, typically lasting 30 to 45 minutes. Schedule a complimentary consultation to discuss your plan's scope and pricing."
  },
  {
    question: "What is the difference between a \"to\" and \"through\" glide path?",
    answer: "A \"to\" glide path reaches its most conservative point at the target date; a \"through\" glide path continues derisking after target retirement. A \"to\" design prioritizes downside protection at the target retirement date by reaching its conservative point at participants' expected retirement year. A \"through\" design maintains equity exposure past retirement for participants who stay invested longer. The right choice depends on withdrawal behavior and retirement-income objectives, not which approach sounds safer."
  },
  {
    question: "How often should a plan review its target-date fund glide path?",
    answer: "DOL guidance calls for periodic review, and any material change in demographics or plan strategy should trigger reassessment. PointOak recommends reviewing glide path fit whenever participant demographics shift, the provider changes strategy, or plan objectives evolve. Shifts in market conditions or assumptions about future returns can also expose misalignment during participants' retirement years. DOL requires ongoing monitoring, not just a one-time selection."
  },
  {
    question: "What is a target date fund glide path?",
    answer: "A glide path is the predetermined schedule that shifts a target date fund's asset allocation from growth-oriented to conservative over time. The glide path determines how the date fund allocates across equity, fixed income, and asset classes like high yield bonds at each stage. The fund name's approximate year represents an expected retirement date, not a risk guarantee. Two funds labeled \"2040\" can hold different allocations at every point."
  },
  {
    question: "Are all target-date funds with the same retirement year basically the same?",
    answer: "Same-year target date funds differ significantly in glide path design, equity exposure, fees, and underlying asset classes. DOL has warned about \"considerable differences\" among funds with identical target dates. Past performance does not predict future results, and one provider may hold 50% equity at that date while another holds 65%. Evaluate the actual allocation curve and underlying asset classes rather than assuming the label tells the story."
  },
  {
    question: "How much equity should a target-date fund hold at retirement?",
    answer: "No single correct equity level exists at retirement; the right equity allocation depends on participant withdrawal behavior and income needs. Providers differ materially on this point. Some target 50% equity at age 65 while others maintain higher exposure to offset interest rate and longevity risk over longer drawdowns. PointOak's evaluation matches equity allocation to actual plan demographics rather than default assumptions about retirement income needs."
  },
  {
    question: "Are target-date funds too conservative?",
    answer: "Some glide paths are more conservative than others, and whether that is a problem depends on your participant profile. Glide path differences have narrowed, but end-of-path equity ranges remain wider than expected. A plan with younger investors may require more risk; that higher risk posture is appropriate when tenure is long. Portfolio construction determines whether the fund protects principal invested and matches the population it serves."
  },
  {
    question: "Should I pick a later target date if I want more stocks?",
    answer: "Choosing a later-dated fund to increase stock market exposure is common, but it changes the entire derisking timeline. Selecting a later target date shifts the entire glide path, changing when equity exposure decreases. For committees, evaluate whether current equity levels and expected returns match plan needs rather than gaming dates. Individual participants using this workaround may enhance returns short-term but accept misaligned time horizons and unintended risk near retirement."
  },
  {
    question: "What should fiduciaries document when selecting or reviewing a TDF suite?",
    answer: "Document the review of glide path design, fees, underlying investments, and alignment with participant demographics. DOL identifies specific areas: \"to\" versus \"through\" philosophy, the most conservative allocation point, participant salary levels, turnover, contribution rates, and withdrawal patterns. PointOak builds this documentation as part of every engagement, covering plan's objectives and individual circumstances. Fiduciary support services ensure the file includes important disclosures and is audit-ready."
  },
  {
    question: "What is the difference between an off-the-shelf and custom target-date glide path?",
    answer: "Off-the-shelf target date glide paths use standardized assumptions; custom glide paths are built around a specific plan's participant data. A significant share of plans rely on standardized defaults that assume average demographics. Custom approaches require more governance but improve alignment when your participant population differs materially from industry norms. PointOak helps committees determine which model fits and documents the rationale as part of the retirement planning and investment strategies review."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Target Date Fund Glide Path Evaluation",
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
          { label: "Glide Path Evaluation" }
        ]}
        title="Evaluating Target Date Fund Glide Paths for Your Plan"
        subtitle="Most plan sponsors never evaluate their target date fund glide path. Approximately $4.0 trillion sat in target date funds at year-end 2024, and much of that rides on unexamined allocation decisions. PointOak Retirement Advisors provides independent glide path evaluation for retirement planning committees, matched to your participant demographics."
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

      {/* Benefits Section */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Target Date Fund Glide Path Evaluation
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Documented Fiduciary Protection</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                DOL expects fiduciaries to document why a specific TDF suite was selected, including how glide path characteristics align with plan participants. Independent <Link href="/corporate-retirement-plans/tdf-consulting" className="text-medium-blue hover:underline">target date fund consulting</Link> produces that documentation. Without it, your committee&apos;s investment objectives and selection rationale remain assumptions, not evidence.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Glide Path Design Matched to Your Participants</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Standardized glide paths assume average salary levels, turnover rates, and retirement ages. Your workforce isn&apos;t average. Demographic fit analysis maps your actual participant data to glide path implications, revealing whether the default allocation curve manages risk appropriately for the people depending on it.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Reduced Default-Selection Risk</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                85% of 401(k) plans offer target date funds, and 68% of participants hold them. That concentration means a mismatched default affects most retirement outcomes in your plan. Evaluating glide path fit reduces the investment risk of accepting a recordkeeper&apos;s standard lineup.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Clearer Committee Decision-Making</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Fund manufacturers present their glide path as the answer. Independent evaluation replaces branded narratives with neutral criteria. Committee members can identify key factors through structured <Link href="/corporate-retirement-plans/investment-analysis" className="text-medium-blue hover:underline">investment analysis</Link> and defend selections with documented analysis, not sales presentations.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Stronger Participant Retirement Outcomes</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A glide path matched to actual workforce demographics drives successful retirement outcomes by aligning risk exposure with participants&apos; time horizons and retirement income needs. Mismatched allocations expose participants to excessive inflation risk or insufficient growth, undermining wealth outcomes across the plan.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* How It Works */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Target Date Fund Glide Path Evaluation Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Glide path evaluation examines the asset allocation trajectory: underlying funds, asset classes, equity exposure, and the most conservative point. <a href="https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/fact-sheets/target-date-retirement-funds-tips-for-erisa-plan-fiduciaries" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">DOL guidance on TDF evaluation</a> and J.P. Morgan&apos;s six-factor framework assess glide path design variables including asset allocation changes and whether the fund targets a more conservative portfolio at each stage.
            </p>
            <p>
              Average TDF expense ratios fell from 0.67% in 2008 to 0.29% in 2024. When fees converge, the glide path becomes the primary differentiator between suites. How a fund handles periodically rebalancing across asset classes and manages equity exposure post-retirement matters more than headline cost.
            </p>
          </div>
          <div className="mt-8 bg-navy text-white rounded-lg p-6 md:p-8">
            <p className="font-outfit text-base leading-relaxed">
              <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-warm-gold hover:underline font-semibold">Schedule a Consultation</a> to discuss your plan&apos;s target date fund glide path.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs It */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Who Needs Target Date Fund Glide Path Evaluation
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            These scenarios signal when a glide path evaluation should move to the top of the committee agenda.
          </p>
          <div className="space-y-8">
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Plan&apos;s TDF Suite Was Inherited, Not Selected</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                58% of DC plan assets sit in off-the-shelf target date funds. Many plan sponsors accepted the recordkeeper&apos;s default without documenting glide path alignment with their plan&apos;s objectives.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Participant Demographics Have Shifted</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Workforce age, turnover rate, and early career hiring patterns affect glide path fit. If your participant population has shifted since the last review, the risk tolerance assumptions behind your current suite may no longer apply.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Your Committee Is Facing a Provider Change or RFP</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A new recordkeeper means a new TDF lineup. Our <Link href="/corporate-retirement-plans" className="text-medium-blue hover:underline">retirement plan consulting services</Link> map each provider&apos;s glide path to your participants&apos; individual circumstances and contribution rates.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">You Cannot Document Why Your Current Glide Path Fits</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                DOL expects fiduciaries to demonstrate they reviewed TDF characteristics against participant demographics. If your committee cannot document why the current glide path fits, you need <Link href="/corporate-retirement-plans/fiduciary-support" className="text-medium-blue hover:underline">fiduciary support</Link>.
              </p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 md:p-8">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">When a review is not needed:</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Plans that completed a documented, independent TDF evaluation within the past 12-18 months and have experienced no material change in participant demographics or plan objectives do not need a new review.
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
            "To Retirement" vs. "Through Retirement" Glide Paths
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            The most misunderstood choice in TDF evaluation is when the asset mix reaches its most conservative portfolio. "To" and "through" address that target retirement date question differently.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Design Factor</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">"To Retirement"</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">"Through Retirement"</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Conservative point reached</td>
                  <td className="px-4 py-3 text-gray-700">At the target retirement date</td>
                  <td className="px-4 py-3 text-gray-700">Years after target date (e.g., age 75)</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Equity allocation at retirement</td>
                  <td className="px-4 py-3 text-gray-700">Lower equity at target date</td>
                  <td className="px-4 py-3 text-gray-700">Higher; derisking continues post-retirement</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Post-retirement trajectory</td>
                  <td className="px-4 py-3 text-gray-700">Holds at conservative allocation</td>
                  <td className="px-4 py-3 text-gray-700">Funds continue reducing equity 5-10+ years</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Longevity risk approach</td>
                  <td className="px-4 py-3 text-gray-700">Prioritizes downside protection at retirement</td>
                  <td className="px-4 py-3 text-gray-700">Maintains more risk for extended drawdown</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Best participant profile</td>
                  <td className="px-4 py-3 text-gray-700">Higher turnover or early withdrawal patterns</td>
                  <td className="px-4 py-3 text-gray-700">Extended drawdown with longer horizons</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Variation within approach</td>
                  <td className="px-4 py-3 text-gray-700">Narrow range at conservative point</td>
                  <td className="px-4 py-3 text-gray-700">Wide: State Street 90% vs 95% starting equity, landing age 75</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-gray font-outfit text-sm italic mt-6">
            Source: DOL, State Street Global Advisors
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            "To" glide paths reach peak fixed income securities allocation as the target retirement date approaches. "Through" designs accept higher risk by maintaining equity securities exposure past retirement. "To" suits early-withdrawal plans. "Through" fits extended drawdowns. Your committee&apos;s data determines which, as <a href="https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/fact-sheets/target-date-retirement-funds-tips-for-erisa-plan-fiduciaries" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">DOL fiduciary tips for TDF selection</a> affirms.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Target Date Fund Consulting Process
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

      {/* Why Choose PointOak */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Why Choose PointOak for Target Date Fund Glide Path Evaluation
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Your recordkeeper offers a TDF lineup, but a product shelf is not a fiduciary evaluation. Three of the five top-ranking pages for this topic are published by fund manufacturers. As a named 3(21) and 3(38) ERISA fiduciary and <Link href="/about" className="text-medium-blue hover:underline">independent, fee-only advisory firm</Link>, we evaluate across providers with no product incentives.
            </p>
            <p>
              Our fee-only model eliminates investment manager and fund-family bias that any commission-based financial professional carries. Whether evaluating active management options or low cost index suites, we produce valuable insights about glide path fit through <Link href="/corporate-retirement-plans/provider-and-fee-benchmarking" className="text-medium-blue hover:underline">provider and fee benchmarking</Link>.
            </p>
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
            PointOak Retirement Advisors is an SEC-registered, fee-only wealth advisory firm founded in 2017 in McLean, Virginia. Retirement plan consulting and wealth management for the DC/MD/VA metro area and nationwide. Over $1.08 billion in assets under management, over 50 years of collective experience, led by Darsh Makim, CRPC. Named 3(21) and 3(38) ERISA fiduciary since inception. <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Schedule a complimentary consultation</a> or meet <Link href="/our-consulting-team" className="text-medium-blue hover:underline">our consulting team</Link>.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            <a href="https://www.pointoak.com/contact/" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Schedule a Consultation</a> to start your plan&apos;s glide path review.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
