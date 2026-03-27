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
  title: "Estate Planning Coordination | PointOak Retirement Advisors",
  description: "PointOak coordinates your estate documents, beneficiaries, and tax-aware transfer strategy with your attorney and CPA. Fee-only fiduciary. Schedule a consultation.",
  alternates: {
    canonical: "https://www.pointoak.com/services/estate-planning-coordination/"
  }
};

const highlights = [
  "Fee-only fiduciary, zero commissions",
  "Attorney and CPA coordination built in",
  "Complimentary estate plan review consultation"
];

const benefitsData = [
  {
    title: "Alignment Across Documents, Accounts, and Titling",
    description: "When a will says one thing and a retirement account beneficiary form says another, the beneficiary form wins. Misaligned beneficiary designations and asset titling cause assets to pass to unintended recipients. Coordinated review catches these conflicts before they create outcomes your family never anticipated."
  },
  {
    title: "Tax-Aware Transfer Strategy",
    description: "Cerulli Associates' 2024 research estimates nearly $124 trillion in wealth transfer through 2048. Coordinated gifting, titling, and withdrawal sequencing reduce estate tax exposure on future appreciation of inherited assets. Without unified wealth transfer strategies, families lose ground to avoidable estate taxes across generations."
  },
  {
    title: "Defined Roles Between Your Advisor, Attorney, and CPA",
    description: "Your independent, fee-only advisory firm reviews accounts and transfer strategy while your attorney handles documents and your CPA models tax implications. Each professional stays in their domain with no overlap. You get one coordinated plan rather than three disconnected opinions."
  },
  {
    title: "Family Communication and Legacy Intent",
    description: "Legacy planning includes values, philanthropic intent, and education funding goals for the next generation. Inheritance decisions carry family meaning beyond account balances. Protecting that intent requires documenting it alongside the financial strategy rather than leaving it to assumption."
  },
  {
    title: "Ongoing Review Instead of One-Time Drafting",
    description: "Life events, tax law changes, and new assets can break alignment between your documents and accounts at any time. A one-time estate plan becomes outdated without scheduled reviews. Ongoing coordination keeps your legacy intact and your transfer strategy current as circumstances shift."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Review Your Current Documents and Goals",
    description: "You share estate documents, account statements, and family objectives. Schedule a complimentary consultation to begin."
  },
  {
    number: 2,
    title: "Audit Beneficiaries, Titling, and Account Alignment",
    description: "Retirement account designations, insurance policies, and ownership structures are checked against your stated intentions."
  },
  {
    number: 3,
    title: "Build a Coordinated Strategy With Your Attorney and CPA",
    description: "Each professional is responsible for their domain, working from a shared framework with a target date."
  },
  {
    number: 4,
    title: "Execute Updates Across Documents and Accounts",
    description: "Beneficiary forms, titling changes, trust funding, and documents are updated as next steps."
  },
  {
    number: 5,
    title: "Schedule Ongoing Reviews and Life-Event Updates",
    description: "Your plan is reviewed on a regular cadence and whenever major life events occur."
  }
];

const whoNeedsData = [
  {
    title: "Approaching Retirement With Complex Income Sources",
    description: "Retirement accounts, pension elections, Social Security timing, and required distributions all intersect with your estate documents. Income sources affect cash flow, tax positioning, and how assets ultimately pass to a spouse or children."
  },
  {
    title: "Recently Experienced a Major Life Event",
    description: "Marriage, divorce, death of a spouse, or the birth of a child can break alignment between documents and beneficiary forms. Each life event demands immediate review of your financial situation."
  },
  {
    title: "Built Wealth Through Career or Business",
    description: "Concentrated stock positions, RSU vesting events, or business ownership create estate complexity that a standard will does not address. New assets increase the financial stakes with every vesting cycle or business milestone."
  },
  {
    title: "Frustrated With Fragmented Advice",
    description: "Separate advisors, attorneys, and CPAs working without coordination create conflicting strategies and missed deadlines. PointOak's senior advisory team acts as the central coordinator."
  },
  {
    title: "Preparing for a Family Wealth Conversation",
    description: "Fidelity found 97% of families recognize the importance of estate-plan conversations, yet many avoid starting them. A structured process with your financial advisor gives the conversation a framework focused on shared goals."
  }
];

const faqs = [
  {
    question: "How much does estate planning coordination cost?",
    answer: "PointOak charges a fee-only, asset-based advisory fee with no commissions or hidden costs. The fee varies by account size and complexity, with a $500,000 minimum in investable assets required. Estate planning coordination is part of PointOak's integrated wealth management engagement rather than a standalone billable service. The fee covers review of all accounts, funds, and coordination with your attorney and CPA. Your initial consultation is complimentary with no obligation. Schedule a complimentary consultation to discuss your situation."
  },
  {
    question: "What is the difference between estate planning coordination and just having a will?",
    answer: "A will covers document-level intent, but coordination aligns every account, beneficiary form, and tax strategy with that intent. Beneficiary designations on retirement accounts and life insurance policies can override what a will directs. Coordination reviews account titling, trust funding, gifting strategy, and family communication alongside the legal documents to ensure your wishes are carried out as intended. Each element is subject to different legal rules and timing requirements."
  },
  {
    question: "How often should you review an estate plan?",
    answer: "Experts recommend reviewing every two to five years and after any major life event. Marriage, divorce, a death in the family, the birth of children, a significant change in assets, or new tax law can all break alignment. PointOak schedules regular reviews so your estate plan stays current rather than aging in a drawer."
  },
  {
    question: "What is estate planning coordination?",
    answer: "It is the process of aligning your estate documents, financial accounts, beneficiary designations, and tax strategy through a shared framework. A financial advisor reviews your accounts and transfer strategy. An estate planning attorney handles documents. A CPA models tax implications. PointOak acts as the central coordinator so each professional works from the same plan rather than in isolation."
  },
  {
    question: "Does a beneficiary designation override a will?",
    answer: "In most cases, yes; beneficiary designations on retirement accounts and insurance policies take priority over directions in a will. A retirement account could pass to an ex-spouse or unintended recipient if the beneficiary form was never updated after a life event. Coordination catches these conflicts before they become irreversible for your loved ones and your spouse."
  },
  {
    question: "What should be included in an estate plan review?",
    answer: "A thorough review covers documents, beneficiary designations, account titling, trust funding, tax exposure, healthcare directives, and family communication. Each area can fall out of alignment independently. Reviewing the will and trust alone misses retirement account designations, ownership structures, advance healthcare directives, and gifting strategy. Every element should match your current intentions and account for changes in investments or family circumstances."
  },
  {
    question: "What happens if my will doesn't match my beneficiary designations?",
    answer: "The beneficiary designation on the account typically controls where that asset goes, regardless of what the will says. This is one of the most common estate planning coordination failures. PointOak reviews every account's beneficiary form against your estate documents to identify gaps and resolve these conflicts before they create unintended outcomes for your family."
  },
  {
    question: "How do we start the family conversation about inheritance and legacy?",
    answer: "Start with your intentions and values before discussing specific dollar amounts or account details. Most families recognize these conversations matter but avoid them because the topic feels uncomfortable. A structured agenda, prepared with your advisor, gives the conversation a framework that reduces anxiety and keeps the focus on shared wishes rather than taxation of specific assets."
  },
  {
    question: "When should a trust be reviewed?",
    answer: "Review a trust after any major life event, change in assets, or change in state or federal law. A trust created years ago may not account for current estate tax thresholds, the exemption amount, or your family's evolving circumstances. Virginia's Uniform Trust Code includes provisions like decanting that may create new options worth reviewing with your attorney and advisor."
  },
  {
    question: "How can I transfer wealth to children tax efficiently?",
    answer: "Tax-efficient wealth transfer uses annual gifting, trust structures, and account-level strategies coordinated with your CPA. The IRS sets an annual gift-tax exclusion that allows direct transfers without triggering gift tax. Beyond that, trust-based strategies, Roth IRA conversions, and beneficiary planning can reduce overall tax exposure across generations. The maximum amount you can gift annually changes with inflation adjustments. PointOak coordinates these strategies with your CPA but does not provide tax advice directly."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Estate Planning Coordination",
  "provider": {
    "@type": "FinancialService",
    "name": "PointOak Retirement Advisors"
  },
  "serviceType": "Estate Planning Coordination",
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
      "name": "Estate Planning Coordination",
      "item": "https://www.pointoak.com/services/estate-planning-coordination/"
    }
  ]
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our Estate Planning Coordination Process",
  "step": processSteps.map((step, idx) => ({
    "@type": "HowToStep",
    "position": idx + 1,
    "name": step.title,
    "text": step.description
  }))
};

export default function EstatePlanningCoordinationPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Individuals & Families", href: "/for-individuals-families" },
          { label: "Estate Planning Coordination" }
        ]}
        title="Estate Planning Coordination: Aligning Your Documents, Accounts, and Legacy"
        subtitle="A will or trust alone does not keep your estate plan aligned over time. A 2025 study found only 24% of Americans have a will; those who do often leave beneficiary designations and account titling misaligned. PointOak Retirement Advisors provides estate planning coordination across documents, accounts, and your broader financial plan."
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

      {/* Benefits of Estate Planning Coordination */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Estate Planning Coordination
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

      {/* How Estate Planning Coordination Works */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Estate Planning Coordination Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Coordinated estate planning review examines retirement account beneficiaries, insurance policy designations, account titling, trust funding status, and advance directives. A registered investment advisor, estate planning attorney, and CPA each review their domain as part of a shared process. This identifies gaps that no single professional catches working alone.
            </p>
            <p>
              <a href="https://www.fidelity.com/viewpoints/wealth-management/estate-planning-made-easy" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">Fidelity&apos;s estate planning guidance</a> confirms that beneficiary designations typically override directions in a will. Account-level review, not document review alone, determines whether your assets transfer as intended. <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule your complimentary consultation</Link> to review your estate plan&apos;s alignment across documents and accounts.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Image Break */}
      {/* Who Needs Estate Planning Coordination */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/services/estate-planning.png"
                alt="Financial advisor consulting with clients about estate planning coordination"
                width={2936}
                height={1638}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
                Who Needs Estate Planning Coordination
              </h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Not every family needs formal coordination. Complexity, not wealth alone, determines whether your current circumstances call for it.
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
              <strong className="text-navy">When Estate Planning Coordination Might Not Be the Right Fit:</strong> Individuals with straightforward estates, limited account types, and no coordination complexity may not need this level of service. An estate planning attorney can handle basic document drafting independently without ongoing advisory involvement.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Estate Planning Coordination vs. Document-Only Planning */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Estate Planning Coordination vs. Document-Only Planning
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Both approaches serve a valid purpose. The right choice depends on your estate plan&apos;s complexity, account structure, and whether your documents reflect your current intentions.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Document-Only Planning</th>
                  <th className="px-4 py-3 text-left font-outfit font-semibold">Coordinated Estate Planning</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Scope of review</td>
                  <td className="px-4 py-3 text-gray-700">Will, trust, powers of attorney</td>
                  <td className="px-4 py-3 text-gray-700">Documents plus retirement accounts, insurance, titling, gifting strategy</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Beneficiary alignment</td>
                  <td className="px-4 py-3 text-gray-700">Assumed correct after signing</td>
                  <td className="px-4 py-3 text-gray-700">Audited across every account</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Tax awareness</td>
                  <td className="px-4 py-3 text-gray-700">Limited to attorney&apos;s scope</td>
                  <td className="px-4 py-3 text-gray-700">Advisor, attorney, and CPA coordinate tax efficient strategies</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Professional coordination</td>
                  <td className="px-4 py-3 text-gray-700">Attorney works independently</td>
                  <td className="px-4 py-3 text-gray-700">Shared review framework across all professionals</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Review frequency</td>
                  <td className="px-4 py-3 text-gray-700">Typically one-time or reactive</td>
                  <td className="px-4 py-3 text-gray-700">Scheduled every 2-5 years and after major life events</td>
                </tr>
                <tr className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 font-medium">Family communication</td>
                  <td className="px-4 py-3 text-gray-700">Rarely addressed</td>
                  <td className="px-4 py-3 text-gray-700">Structured conversation prep and legacy documentation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Regular reviews help catch shifts in tax law, family circumstances, and asset values that break alignment. Document-only planning works for simple estates, but coordination becomes necessary for any taxpayer with estate taxes, multiple account types, or exemption considerations.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* What To Expect: Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Estate Planning Coordination Process
          </h2>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[19px] top-10 bottom-10 w-px bg-[#C1C5C9] hidden sm:block" />

            <div className="flex flex-col gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 z-10">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                      <span className="font-outfit font-semibold text-white text-lg leading-none">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step content */}
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
            Why Choose PointOak for Estate Planning Coordination
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              <a href="https://www.irs.gov/publications/p559" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:text-navy underline">IRS Publication 559</a> shows the 2025 Form 706 filing threshold is $13,990,000, and portability elections require timely filing regardless of estate value. A financial advisor catches these tax deadlines during coordinated review. PointOak&apos;s corporate retirement plan background includes thousands of participant beneficiary scenarios, creating coordination depth that most wealth advisory firms lack.
            </p>
            <p>
              PointOak does not draft legal documents or provide tax advice. We review your financial accounts, beneficiary designations, and transfer strategy, then coordinate with your attorney and CPA so each professional works from the same plan. <Link href="/about" className="text-medium-blue hover:text-navy underline">PointOak&apos;s advisory approach</Link> fills the gap between legal drafting and financial execution.
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
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm founded in 2017 and headquartered in McLean, Virginia. We provide wealth management and retirement plan consulting for clients across the DC/MD/VA metro area and nationwide. SEC-registered investment advisor. Over $1.08 billion in assets under management. Over 50 years of collective advisory experience. <Link href="/contact" className="text-medium-blue hover:text-navy underline">Schedule a complimentary consultation</Link>.
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
            <Link href="/contact" className="text-medium-blue hover:text-navy underline font-semibold">
              Schedule your complimentary consultation
            </Link> to find out whether your estate plan, beneficiaries, and accounts are aligned.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <CTASection />
      <Footer />
    </main>
  );
}
