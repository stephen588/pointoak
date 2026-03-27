import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Investment Management | PointOak Retirement Advisors",
  description: "PointOak delivers tax-aware investment management for high-net-worth families. Fee-only fiduciary, open-architecture portfolios, $500K minimum. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/services/investment-management/"
  }
};

const highlights = [
  "Fee-only fiduciary since 2017",
  "SEC-registered, open-architecture portfolios",
  "Complimentary initial consultation"
];

const benefitsData = [
  {
    title: "Coordinated Planning Beyond Portfolio Returns",
    description: "70% of U.S. adults expect estate planning to be part of their financial plans, according to a Trust & Will survey. Your asset allocation connects to retirement planning, tax coordination, and investment objectives rather than treating fund selection as an isolated exercise. Fund selection in isolation misses the decisions that matter most to your financial goals."
  },
  {
    title: "Tax-Aware Strategies That Protect More of Your Wealth",
    description: "PointOak uses multi-year projections and asset location decisions across tax-deferred, tax-free, and taxable accounts to manage your brackets over time. Withdrawal sequencing improves after-tax outcomes throughout retirement, not just next year's bill. Tax planning across account types protects more of your wealth over decades."
  },
  {
    title: "Open-Architecture Access Across the Entire Market",
    description: "PointOak selects from the full marketplace of asset classes. No proprietary products, no corporate sales quotas, no limited shelf. Your risk tolerance drives every decision about appropriate investments because a fiduciary standard requires acting in your best interest at all times, not just recommending products considered suitable."
  },
  {
    title: "A Single Advisor Relationship for Every Financial Decision",
    description: "Fragmented advice creates gaps when your investment manager, tax advisor, and estate attorney operate in silos. PointOak acts as your central financial advisor, coordinating every decision into one integrated plan."
  },
  {
    title: "Direct Senior-Level Access From Your First Meeting",
    description: "Darsh and his team are present from your first conversation onward. You will not be handed off to a junior associate or call center after onboarding. The advisors who build your strategy are the same ones who monitor and adjust your plan as your financial life evolves."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Understand",
    description: "Share your financial goals, concerns, and complete picture. Schedule a complimentary consultation to begin."
  },
  {
    number: 2,
    title: "Design",
    description: "Your strategy integrates investment management services, financial planning, and tax-aware considerations into one coordinated plan."
  },
  {
    number: 3,
    title: "Implement and Monitor",
    description: "Your plan goes into action with ongoing monitoring, check-ins, and adjustments as your life evolves."
  }
];

const whoNeedsData = [
  {
    title: "Approaching Retirement With Complex Income Decisions",
    description: "You are within five years of retirement with multiple income sources to coordinate. Social Security timing, withdrawal sequencing, and pension decisions all interact. Wealth management services that connect these decisions prevent costly sequencing mistakes and protect your assets during the transition."
  },
  {
    title: "Rolling Over a 401(k) After a Job Change or Retirement",
    description: "A rollover involves more than moving investments between accounts. Roth conversion timing and consolidation decisions affect your wealth for decades, so each option deserves evaluation against your long term goals."
  },
  {
    title: "Outgrowing a Previous Advisor's Service Model",
    description: "Schwab's 2024 RIA Benchmarking Study found sub-$1M relationships make up 55% of clients at larger firms but only 21% of revenue. If your advisor has become harder to reach, the firm's economics may explain why."
  },
  {
    title: "Managing Wealth From a Business Sale or Inheritance",
    description: "A sudden influx of wealth from a sale, inheritance, or equity event creates decisions across investments, taxes, and estate planning that are directly linked. Without coordination aligned to your life goals, tax exposure compounds quickly."
  },
  {
    title: "Wanting One Advisor Who Knows Your Full Picture",
    description: "Multiple advisors and call centers that do not know your name produce fragmented results. One advisor who understands the many responsibilities across your financial life eliminates gaps that cost you money."
  }
];

const faqs = [
  {
    question: "How much does a wealth manager charge?",
    answer: "Most fee-only advisors charge an asset-based percentage; at PointOak, the fee reflects the full scope of planning you receive. Asset-based fees typically range from 0.5% to 1.5% of assets under management depending on the firm and scope of services. Investor.gov recommends asking what a percentage fee translates to in actual dollars. PointOak uses a fee-only model where your fee covers investment management, retirement income planning, tax-aware strategies, and ongoing monitoring. No commissions, no product-based compensation. The initial consultation is complimentary, and PointOak's minimum is $500,000 in investable assets. Clients receive transparent pricing before any engagement begins."
  },
  {
    question: "What is the difference between a financial advisor and a wealth manager?",
    answer: "A financial advisor may focus on a single planning area, while a wealth manager coordinates investments, income, taxes, and estate planning in one relationship. A financial advisor might specialize in investment selection or retirement projections without connecting those decisions to your tax situation or estate plan. Wealth management brings those disciplines together under one advisor relationship. PointOak provides integrated wealth management rather than portfolio-only advice, so each recommendation accounts for your broader financial goals and investment objectives."
  },
  {
    question: "What does an investment manager actually do?",
    answer: "An investment manager constructs, monitors, and adjusts your portfolio based on your goals and risk tolerance. PointOak selects from the entire marketplace rather than a proprietary product shelf, coordinates with your tax and estate professionals, and adjusts allocations as your financial life changes. Ongoing monitoring means your portfolio stays aligned with your financial planning objectives rather than drifting after initial setup. Financial reporting keeps you informed of portfolio performance and adjustments made in response to changing financial markets."
  },
  {
    question: "Is a fee-only fiduciary better than a commission-based advisor?",
    answer: "A fee-only fiduciary is compensated solely by you, which removes product-sale incentives from every recommendation. NAPFA defines fee-only as having no product-contingent compensation, which reduces conflicts of interest between what benefits the advisor and what benefits you. Commission-based advisors may recommend suitable products that also generate revenue for their firm. Clients seeking integrated retirement and tax coordination benefit most from fee-only arrangements where regulatory constraints at financial institutions do not limit recommendations."
  },
  {
    question: "What questions should I ask before hiring a financial advisor?",
    answer: "Start with registration status, fee structure in dollars, and whether the advisor acts as a fiduciary in every interaction. Verify registration through the SEC or FINRA BrokerCheck and review any disciplinary history. Ask what services the fee covers and whether commissions or revenue sharing exist. Investor.gov's advisor evaluation guide provides a full checklist of questions covering designation requirements, fee transparency, and fiduciary status."
  },
  {
    question: "How do I choose an investment professional?",
    answer: "Regulators recommend confirming licensing, reviewing disciplinary records, understanding fees, and asking about service scope before signing anything. The SEC and FINRA both maintain searchable databases where you can verify registration and check for complaints. PointOak is an SEC-registered investment advisor with a clean regulatory record. Legislative and regulatory constraints shape what different firms can recommend, so ask whether your investments are managed in the context of broader retirement and tax planning."
  },
  {
    question: "Should I hire a wealth manager or invest on my own?",
    answer: "Self-directed investing works when your financial picture is straightforward and you have the discipline to manage tax implications and rebalancing. When retirement income, tax-bracket management, and estate coordination overlap, the cost of mistakes often exceeds the advisory fee. The decision point is complexity, not a philosophical stance on paying for advice."
  },
  {
    question: "At what point should someone consider hiring a wealth manager?",
    answer: "The threshold is complexity rather than a specific dollar amount, though PointOak requires $500,000 in investable assets. Common triggers include a 401(k) rollover, approaching retirement, a business sale, or inheriting assets. When decisions across investments, taxes, and income timing interact, professional coordination adds measurable value."
  },
  {
    question: "What credentials should a wealth manager have?",
    answer: "Look for SEC or state registration first, then evaluate what any professional designation actually required to earn and maintain. FINRA advises asking about the training, exams, and continuing education behind any credential, as designations vary in rigor. PointOak's founder, Darsh Makim, holds the CRPC (Chartered Retirement Planning Counselor) designation, which focuses specifically on retirement planning. Registration status is verifiable online and is the baseline when evaluating investment professionals."
  },
  {
    question: "Is there any cost for the initial consultation?",
    answer: "PointOak's initial consultation is complimentary with no cost and no obligation. The meeting typically lasts 30 to 45 minutes and covers your goals, concerns, and financial picture. You can bring a spouse or partner. The purpose is to determine whether PointOak's approach is the right fit for your situation before any commitment on either side."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Investment Management",
  "provider": {
    "@type": "FinancialService",
    "name": "PointOak Retirement Advisors"
  },
  "serviceType": "Investment Management",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.pointoak.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "For Individuals & Families",
      "item": "https://www.pointoak.com/for-individuals-families/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Investment Management",
      "item": "https://www.pointoak.com/services/investment-management/"
    }
  ]
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our Investment Management Process",
  "step": processSteps.map((step, idx) => ({
    "@type": "HowToStep",
    "position": idx + 1,
    "name": step.title,
    "text": step.description
  }))
};

export default function InvestmentManagementPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Individuals & Families", href: "/for-individuals-families" },
          { label: "Investment Management" }
        ]}
        title="Investment Management Built Around Your Full Financial Picture"
        subtitle="Your portfolio is one piece of a broader financial life. 41% of affluent clients with $500,000 or more in financial assets would switch financial advisors over service-level changes alone. PointOak Retirement Advisors delivers investment management integrating retirement income, tax coordination, and estate planning into wealth management strategies."
      />

      {/* Highlights Bar */}
      <section className="bg-cloud-blue py-8 md:py-10">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                <p className="text-text-gray font-outfit text-sm md:text-base leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Investment Management */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Investment Management
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefitsData.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-navy font-outfit text-xl font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* How Investment Management Works */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Investment Management Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              PointOak builds tax-aware portfolios using open-architecture selection, positioning fixed income, equities, mutual funds, and alternative investments so retirement income needs and advisory fees are supported by portfolio cash flow. Securities within client portfolios are monitored against market trends. Investment strategies adapt as your circumstances and time horizon change.
            </p>
            <p>
              Independent RIAs are projected to grow 4% annually to 56,000 advisors by 2028, according to Cerulli research via Schwab. This growth reflects investors choosing strategies built without captive product constraints. Firms with <Link href="/our-services" className="text-medium-blue hover:text-navy underline">retirement plan consulting expertise</Link> bring depth to investment decisions through exposure to thousands of real participant scenarios and diverse plan structures.
            </p>
            <p>
              <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule your consultation</Link> to discuss how investment management fits your retirement and tax goals.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Image Break */}
      {/* Who Needs Investment Management */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/services/investment-management.png"
                alt="Financial advisors collaborating on investment strategy and portfolio management"
                width={2936}
                height={1638}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
                Who Needs Investment Management
              </h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Investment management adds the most value when overlapping decisions across investments, taxes, and income timing demand coordination.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {whoNeedsData.map((item, idx) => (
              <div key={idx}>
                <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                  {item.title}
                </h3>
                <p className="text-text-gray font-outfit text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-[#F5F3EF] rounded-lg">
            <p className="text-text-gray font-outfit text-base leading-relaxed">
              <strong className="text-navy">When Investment Management Might NOT Be the Right Fit:</strong> If your investable assets are below $500,000 or your financial needs are straightforward enough for a single index fund strategy, a passive management approach with lower fees may serve you better.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Fee-Only vs Commission-Based - Table */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Fee-Only Investment Management vs. Commission-Based Advising
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            How your advisor is compensated shapes every piece of investment advice you receive. The structural difference between fee-only and commission-based models is the first decision for clients evaluating wealth advisors.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Criteria</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Fee-Only Fiduciary (PointOak)</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Commission-Based Advisor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fiduciary Duty</td>
                  <td className="px-4 py-3 text-gray-700">Legally required to act in your best interest at all times</td>
                  <td className="px-4 py-3 text-gray-700">Often held to suitability standard; must be suitable, not necessarily lowest cost</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Fee Structure</td>
                  <td className="px-4 py-3 text-gray-700">Asset-based fee paid by you; no commissions</td>
                  <td className="px-4 py-3 text-gray-700">May include commissions, revenue sharing, or product incentives</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Product Selection</td>
                  <td className="px-4 py-3 text-gray-700">Open architecture: full marketplace access</td>
                  <td className="px-4 py-3 text-gray-700">May favor proprietary funds or a limited product shelf</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Service Scope</td>
                  <td className="px-4 py-3 text-gray-700">Integrated: investments, retirement income, tax coordination, estate</td>
                  <td className="px-4 py-3 text-gray-700">Often portfolio-focused; planning may require a separate engagement</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Minimum Investment</td>
                  <td className="px-4 py-3 text-gray-700">$500,000 in investable assets (PointOak)</td>
                  <td className="px-4 py-3 text-gray-700">Varies; some accept lower minimums but may tier service levels</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Fee-only fiduciary advice is strongest when retirement income timing, tax-bracket management, and estate coordination are in play. Commission-based services may suit buyers seeking insurance or annuity products who accept the compensation trade-offs. <Link href="/about" className="text-medium-blue hover:text-navy underline">PointOak&apos;s independence</Link> as a fee-only firm eliminates those conflicts entirely.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* What To Expect: Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Investment Management Process
          </h2>

          <div className="relative">
            <div className="absolute left-[19px] top-10 bottom-10 w-px bg-[#C1C5C9] hidden sm:block" />

            <div className="flex flex-col gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                      <span className="font-outfit font-semibold text-white text-lg leading-none">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-gray font-outfit text-base leading-relaxed">
                      {step.description}
                    </p>
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
            Why Choose PointOak for Investment Management
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              40% of financial advisory clients would switch advisors based on estate planning services alone. Investors leave when investment management exists in a silo. PointOak integrates retirement income, tax strategy, and estate coordination into every portfolio because those gaps drive departures.
            </p>
            <p>
              Self-directed investing works until retirement income, tax brackets, and withdrawal timing interact. <Link href="/our-consulting-team" className="text-medium-blue hover:text-navy underline">Darsh and his team</Link> bring experience from working with plan sponsors and participants since 2005, and that exposure to thousands of real-world scenarios shapes how portfolios are built and where tax savings are found.
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
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-6">
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. We are an SEC-registered investment advisor serving clients in the DC metro area and nationwide through virtual relationships. Over $1.08 billion in assets under management with 50+ years of collective experience. Led by Darsh Makim, CRPC, with a practice dating to 2005.
          </p>
          <p>
            <Link href="/contact" className="text-medium-blue hover:text-navy underline font-outfit text-base">
              Schedule a complimentary consultation
            </Link>
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* FAQ Section */}
      <ServiceDetailFAQ faqs={faqs} />

      {/* Final CTA */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 text-center">
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            Call (703) 595-4444 or{" "}
            <Link href="/contact" className="text-medium-blue hover:text-navy underline font-semibold">
              book a consultation
            </Link>{" "}
            to discuss your investment management goals with Darsh and his team.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <CTASection />
      <Footer />
    </main>
  );
}
