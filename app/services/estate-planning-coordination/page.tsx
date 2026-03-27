import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Estate Planning Coordination | PointOak Retirement Advisors",
  description: "Coordinate with your legal and tax advisors to ensure your wealth transfer strategy reflects your wishes and minimizes estate taxes. Independent guidance from PointOak.",
  alternates: {
    canonical: "https://www.pointoak.com/services/estate-planning-coordination/"
  }
};

const highlights = [
  "Only 24% of Americans report having a will (Caring.com, 2025)",
  "Beneficiary designations supersede will provisions on most accounts",
  "Documented, independent coordination with no tax or legal advice"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We inventory your estate plans, accounts, beneficiary designations, and asset titling to identify gaps and conflicts."
  },
  {
    number: 2,
    title: "Optimize",
    description: "We map each asset to its transfer mechanism and identify updates needed across every financial institution, insurance provider, and retirement plan."
  },
  {
    number: 3,
    title: "Implement",
    description: "We coordinate updates with custodians, document completion in your file, and provide a consolidated action log and estate map for your family and heirs."
  }
];

const faqs = [
  {
    question: "Do beneficiary designations override a will or trust?",
    answer: "Yes. Beneficiary designations on retirement plans, life insurance, and transfer on death accounts supersede will provisions. Beneficiary designations control transfers for any asset with a direct beneficiary on file, regardless of what your will says. This applies to retirement plans, life insurance policies, and transfer on death accounts. Keeping designations current is one of the highest-impact steps in estate planning. PointOak reviews all designations as part of coordination."
  },
  {
    question: "Does estate planning coordination replace an estate attorney?",
    answer: "No. Coordination handles implementation across accounts. An estate attorney drafts and revises legal documents. Both roles are necessary. A financial advisor running coordination reviews documents, updates account designations, and verifies trust funding. An attorney creates and executes legal documents. Kitces describes these as two distinct roles in the estate planning life cycle. PointOak coordinates implementation and refers legal and tax questions to the appropriate professionals."
  },
  {
    question: "How often should I review my estate plan?",
    answer: "Every three to five years is the standard recommendation, and immediately after any major life event. Husch Blackwell recommends reviewing estate plans at least every three to five years, with immediate review triggered by marriage, divorce, a new child, a move, or a major account change. New retirement accounts are a common trigger since they often open with no designated beneficiary on file."
  },
  {
    question: "What happens to my IRA or 401(k) when I die?",
    answer: "Your beneficiary designation controls the transfer, and distribution rules differ based on who inherits. Per the IRS, most non-spouse beneficiaries of retirement accounts inherited after 2019 must distribute the full balance within 10 years. Eligible designated beneficiaries, including a surviving spouse and minor children, have options that are typically lower in tax burden when structured correctly. Beneficiary setup on a large IRA is one of the most consequential steps in wealth transfer planning."
  },
  {
    question: "What is &quot;funding a trust&quot; and why does it matter?",
    answer: "Funding a trust means retitling assets into it. An unfunded trust does not avoid probate, regardless of how well it was drafted. Creating a revocable trust does not automatically move assets into it. Each account or property must be retitled or have the trust named as beneficiary. Fidelity confirms that an estate plan is not complete until assets are titled and designations are updated. PointOak verifies funding status as part of trust coordination."
  },
  {
    question: "What documents are included in a comprehensive estate plan?",
    answer: "A comprehensive estate plan includes a will, trust documents, powers of attorney, healthcare directives, and verified beneficiary designations across all accounts. A Health Affairs meta-analysis found only 36.7% of adults had completed an advance directive. A fully coordinated estate plan verifies that each financial institution, insurance provider, and retirement plan has current instructions on file. PointOak treats account-level designations as core to the full estate plan."
  },
  {
    question: "How does coordination support wealth transfer strategies?",
    answer: "Coordination is the implementation layer that makes wealth transfer strategies function across accounts, institutions, and heirs. Strategies for transferring wealth, including annual gifting at $19,000 per recipient, using irrevocable trusts to shelter future appreciation, or funding accounts for educational expenses, require correctly titled and designated accounts to function. Without coordination, well-designed financial plans fail at execution. PointOak brings that discipline to your broader financial planning."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Estate Planning Coordination Services",
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
      "item": "https://www.pointoak.com/services/"
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
  "name": "Our Process",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Individuals & Families", href: "/services" },
          { label: "Estate Planning Coordination" }
        ]}
        title="Estate Planning Coordination: Aligning Every Document, Account, and Beneficiary"
        subtitle="Estate planning coordination is what makes your estate plan actually work. It aligns your estate planning documents, beneficiary designations, and account titling so your current wishes are carried out, not contradicted. Caring.com&apos;s 2025 study found only 24% of Americans have a will, and most have never verified their accounts match."
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

      {/* How It Works */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How Estate Planning Coordination Works
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              Estate planning documents, including wills, revocable trusts, irrevocable trusts, and powers of attorney, govern some transfers. But beneficiary designations on retirement plans, life insurance policies, transfer on death accounts, and insurance policies at each financial institution control others, regardless of what your will says. Coordination maps every asset to its transfer mechanism and verifies alignment.
            </p>
            <p>
              When trust funding is incomplete, assets pass through probate even when a revocable trust exists. Per the IRS, most non-spouse beneficiaries of retirement accounts inherited after 2019 face a 10-year distribution rule under the SECURE Act. How you designate those accounts affects how your children and heirs pay income taxes on inherited funds.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Image Break */}
      <AnimateOnScroll variant="fade">
      <section className="bg-cloud-blue py-4">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="relative w-full rounded-lg overflow-hidden">
            <Image
              src="/images/services/estate-planning.png"
              alt="Couple reviewing estate planning coordination documents"
              width={2936}
              height={1638}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Benefits */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Benefits of Estate Planning Coordination
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Fewer Conflicts Between Documents and Accounts
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Beneficiary designations supersede will and trust provisions for any asset with a direct beneficiary on file. Without a review, designations from a prior relationship or an outdated financial plan can redirect wealth to the wrong person. Coordination ensures your estate plans and account instructions reflect your current wishes.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Clearer Execution for Your Heirs and Loved Ones
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                eMoney reports that Fidelity&apos;s 2024 Investor Insight Study found a quarter of clients working with advisors want estate planning guidance but are not receiving it. A documented estate map and who-to-contact list helps loved ones act quickly after death, protecting the next generation.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-4">
                Awareness of Federal and State Tax Thresholds
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The IRS set the 2026 basic exclusion amount at $15,000,000 and the annual gift exclusion at $19,000 per recipient. But Tax Foundation reports 12 states plus Washington, D.C. impose separate estate taxes, and five states levy inheritance taxes. Coordination helps you plan ahead so you can consult the right professionals and minimize estate taxes where strategies apply.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Services */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Our Estate Planning Coordination Services
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            The right scope depends on your circumstances, accounts, and whether existing estate planning documents need review. A customized estate plan requires ongoing coordination, not just a one-time document signing.
          </p>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Estate Plan Review and Coordination
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Full review of your estate planning documents, account titling, and beneficiary designations mapped against your current wishes. Best for families whose comprehensive estate plan has not been reviewed in three or more years.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Beneficiary Designation Audit
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Account-by-account beneficiary review across retirement plans, life insurance policies, and transfer on death accounts. Best after divorce, remarriage, a new child, or a recent rollover.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Trust Funding and Titling Coordination
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Verification that assets have been retitled into a revocable trust or irrevocable trusts as intended. Unfunded trusts do not avoid probate. Best when trust funding status is unclear.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Retirement Account Legacy Planning
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Aligns IRA and 401(k) beneficiary designations with SECURE Act distribution rules and your wealth transfer strategy. Best when pre-tax balances are significant or heirs include minor children or a spouse with specific planning needs.
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
            Estate Planning Coordination vs. Alternatives
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Both options serve a role in sound financial planning. The question is which applies to your situation right now.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-[#F3F4F6]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Factor</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Estate Planning Coordination</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Attorney-Only Drafting</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Drafts new documents</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">No</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Yes</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Reviews existing documents</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Yes</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Sometimes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Updates beneficiary designations</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Yes</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Rarely</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Verifies trust funding</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Yes</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Sometimes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Coordinates across institutions</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Yes</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">No</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Ongoing review cadence</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">Yes</td>
                  <td className="px-6 py-4 font-outfit text-base text-text-gray">No</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-text-gray font-outfit text-base leading-relaxed mt-6">
            Coordination is the right choice when your documents exist and implementation is the issue: accounts need updating, trusts need funding, records need organizing for the people responsible for executing your plan. Engage an estate attorney when documents are legally outdated or require complex drafting. The two approaches work best together.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs This */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Who Needs Estate Planning Coordination
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                You Have Documents But Have Not Reviewed Them Recently
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Accounts opened since you created your estate plan often carry default or missing designations. Husch Blackwell recommends reviewing estate plans every three to five years, and immediately after any life event affecting family structure or assets.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                You Have Experienced a Major Life Event
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Marriage, divorce, the birth of a child, a parent&apos;s death, a move, or a significant account change all affect how existing estate planning documents and beneficiary designations apply. State law governs some designations, and changed circumstances require reassessment.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                You Hold Significant Retirement Plan Balances
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The Richmond Fed reports over 54% of families hold retirement accounts. SECURE Act rules create significant income tax consequences for children and heirs depending on how beneficiary designations are structured. Coordination ensures retirement plans benefit the right people in the right way.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                When Coordination Is Not the Right Fit
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If your documents are legally outdated or have never been created, consult an estate attorney first. Coordination is an implementation service, not a legal drafting service. PointOak does not provide tax or legal advice.
              </p>
            </div>
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
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
                Why Choose PointOak for Estate Planning Coordination
              </h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                PointOak manages over $1 billion in client assets with a team of three partners bringing more than 50 years of collective experience. Estate planning coordination requires precision — ensuring your beneficiary designations, account titling, trust funding, and legal documents all work together. Our background in retirement plan administration gives us deep knowledge of how these pieces interact, especially with qualified accounts. As a fee-only, independent fiduciary firm, we coordinate objectively with your estate attorney and tax advisor, documenting every update and maintaining a consolidated estate map. With fewer than 100 clients per partner, we provide the meticulous attention estate coordination demands.
              </p>
            </div>
            <div className="relative w-full h-[300px] lg:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/images/asset-advisor-07.png"
                alt="Estate planning coordination consultation with financial advisor"
                fill
                className="object-cover object-[center_25%]"
                sizes="(max-width: 1024px) 100vw, 585px"
              />
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* About PointOak */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            About PointOak Retirement Advisors
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            PointOak Retirement Advisors is an independent, fee-only wealth advisory firm headquartered in McLean, Virginia, specializing in retirement planning and wealth management for high-net-worth individuals and families. The firm has operated as a full-scope fiduciary since inception, managing over $1 billion in assets with a team of three partners bringing more than 50 years of collective experience. PointOak also serves corporate plan sponsors through its retirement plan consulting practice.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* FAQ Section */}
      <ServiceDetailFAQ faqs={faqs} />

      {/* Disclaimer */}
      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            Investment advisory services offered through PointOak Retirement Advisors, LLC. This site is published for residents of the United States only. Not all of the products and services referenced on this site are available in every state and through every representative or advisor listed. PointOak Retirement Advisors, LLC does not provide tax or legal advice.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
