import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "401(k) Rollover Guide | PointOak Retirement Advisors",
  description: "Navigate job transitions and retirement account consolidation with tax-smart rollover strategies and multi-year Roth conversion planning. Independent fiduciary guidance from PointOak.",
  alternates: {
    canonical: "https://www.pointoak.com/services/401k-rollovers-roth-conversions/"
  }
};

const highlights = [
  "20% mandatory withholding avoided via direct rollover (IRS)",
  "$1,711,975 IRA bankruptcy exemption, effective April 1, 2025",
  "Independent, fiduciary-led guidance with full documentation"
];

const processSteps = [
  {
    number: 1,
    title: "Analyze",
    description: "We review your employer&apos;s retirement plan, fees, investment products, and distribution notice to map your starting position."
  },
  {
    number: 2,
    title: "Map Your Rollover Options",
    description: "We compare rollover options across the receiving plan, traditional ira, roth ira, and staying put, with tax benefits and protection factors documented."
  },
  {
    number: 3,
    title: "Coordinate Tax Implications",
    description: "We identify income taxes, tax rate, and withholding exposure for your specific situation and connect you with your tax professional or tax advisor for execution."
  },
  {
    number: 4,
    title: "Implement and Document",
    description: "We guide the trustee to trustee transfer, confirm receipt at the financial institution, and maintain your documentation for audit protection."
  }
];

const faqs = [
  {
    question: "Do you pay taxes on a 401(k) rollover?",
    answer: "A direct rollover avoids all withholding; an indirect rollover triggers 20% mandatory withholding on the entire distribution. The IRS requires you to roll over the entire distribution to keep it tax deferred, not just the net amount you received (IRS Topic 413). You must replace the withheld funds from other sources within 60 days or owe income taxes on the shortfall, plus a possible early withdrawal penalty before age 59."
  },
  {
    question: "Is it better to roll a 401(k) to an IRA or a new employer plan?",
    answer: "The right answer depends on creditor protection, investment strategies, and whether the receiving plan accepts rollovers. Rolling to a traditional ira expands investment products and simplifies tax planning, but ERISA creditor protection does not transfer. IRA protection is capped at $1,711,975 federally (Federal Register, 2025). New employer plans preserve ERISA protections if the plan administrator confirms the plan accepts incoming funds, which is not guaranteed."
  },
  {
    question: "Can I undo a Roth IRA conversion?",
    answer: "No. The IRS permanently prohibited recharacterization of Roth conversions effective January 1, 2018. Since 2018, the converted amount becomes part of your ordinary income for the conversion year and cannot be reversed (IRS IRA FAQs). PointOak recommends multi-year, bracket-managed roth ira conversion planning so you control the impact on your current bracket and owe taxes in smaller increments over time."
  },
  {
    question: "What is the difference between a direct rollover and a 60-day rollover?",
    answer: "A direct rollover moves funds trustee to trustee with no withholding; a 60-day rollover pays you first and triggers mandatory withholding. In a direct rollover, the plan administrator sends funds made payable to the new account, bypassing the 20% withholding rule. In a 60-day rollover, you receive the funds and have 60 days to redeposit the entire distribution, including replacing the withheld taxes from your own funds."
  },
  {
    question: "What happens if I do nothing with my old 401(k)?",
    answer: "The plan administrator may automatically roll balances of $1,000 to $5,000 into an IRA in your name if you make no election. The IRS states that plan administrators may deposit balances of $1,000 to $5,000 into an automatic IRA if no election is made (IRS). Balances under $1,000 may be distributed as cash, triggering income taxes and an early withdrawal penalty before age 59."
  },
  {
    question: "How many IRA rollovers can I do per year?",
    answer: "Only one IRA-to-IRA rollover is allowed per 12-month period regardless of how many IRAs or retirement accounts you hold. Beginning after January 1, 2015, the IRS limits IRA-to-IRA rollovers to one per year across all of your IRAs (IRS). Direct trustee to trustee transfers are not subject to this rule, which is why PointOak&apos;s process favors direct transfers. Violating the one-rollover rule makes the second rollover a taxable distribution."
  },
  {
    question: "Does a Roth IRA conversion reduce future required minimum distributions?",
    answer: "Yes. Roth IRAs carry no annual required minimum distributions during the owner&apos;s lifetime, removing taxable income after age 73. Roth IRA accounts are exempt from required minimum distributions rmds during the owner&apos;s lifetime, and SECURE 2.0 sets the RMD starting age at 73 (IRS, 2023). Converting pre tax balances before RMDs begin reduces ordinary income and income taxes you would owe each year, a key benefit for high earners expecting a higher bracket in retirement."
  },
  {
    question: "Can after-tax 401(k) money roll to a Roth IRA without taxes on earnings?",
    answer: "Yes, under IRS Notice 2014-54, after tax contributions can roll to a Roth IRA while pre tax earnings roll to a traditional IRA. IRS Notice 2014-54 permits a split rollover: after tax contributions roll to a roth ira tax free while pre tax earnings roll to a traditional ira to grow tax deferred (IRS, 2014). This tax smart strategy lets participants take advantage of tax free growth on roth ira contributions without triggering ordinary income taxes on the full account balance."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "401(k) Rollover Services",
  "provider": {
    "@type": "FinancialService",
    "name": "PointOak Retirement Advisors"
  },
  "serviceType": "Retirement Planning",
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
      "name": "401(k) Rollovers & Roth Conversions",
      "item": "https://www.pointoak.com/services/401k-rollovers-roth-conversions/"
    }
  ]
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our Rollover Process",
  "step": processSteps.map((step, idx) => ({
    "@type": "HowToStep",
    "position": idx + 1,
    "name": step.title,
    "text": step.description
  }))
};

export default function RolloversConversionsPage() {
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
          { label: "401(k) Rollovers & Roth Conversions" }
        ]}
        title="401(k) Rollover: Rules, Options, and Roth Conversion Strategies"
        subtitle="Moving retirement savings out of your employer&apos;s retirement plan is only tax deferred if executed correctly. The IRS requires 20% mandatory withholding on any eligible rollover distribution paid directly to you, even if you intend to roll over every dollar (IRS Topic 413). PointOak&apos;s independent advisory services help plan sponsors and participants protect their retirement accounts."
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

      {/* How 401(k) Rollovers Work */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            How 401(k) Rollovers Work
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              The IRS recognizes two execution paths. A direct rollover sends funds from your plan administrator to the receiving plan or new account as a trustee to trustee transfer, bypassing withholding entirely. An indirect rollover cuts a check made payable to you, triggering 20% mandatory withholding on the entire distribution, even when you plan to redeposit every dollar.
            </p>
            <p>
              With an indirect approach, you have 60 days to redeposit the funds and must replace the withheld amount out of pocket or owe taxes on the shortfall. Beginning after January 1, 2015, only one IRA-to-IRA rollover is permitted in any 12-month period regardless of how many other IRAs or retirement accounts you hold (IRS). Trustee to trustee transfers do not count against this limit.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Image Break */}
      <AnimateOnScroll variant="fade">
      <section className="bg-cloud-blue py-4">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/asset-advisor-05.png"
              alt="Financial advisor consulting with client on 401(k) rollover options"
              fill
              className="object-cover object-[center_25%]"
              sizes="(max-width: 1170px) 100vw, 1170px"
            />
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Your 401(k) Rollover Options */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Your 401(k) Rollover Options
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            Four main options exist when you leave an employer. The right choice depends on creditor protection needs, investment goals, and plan acceptance.
          </p>

          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Leave It in Your Old Plan
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                ERISA-qualified retirement plans provide unlimited federal creditor protection and may allow penalty free access for participants who leave at age 55 or older, avoiding the early withdrawal penalty before age 59. If your old plan has low-cost investment products and you remain actively employed at a second employer, staying put can preserve valuable features.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Roll Over to a Traditional IRA
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Moving ira money to a traditional ira lets assets grow tax deferred in a new account with broader investment strategies and investment products. IRA bankruptcy protection is capped at $1,711,975 under federal law (Federal Register, 2025), a concrete tradeoff versus ERISA-plan creditor protection that every rollover decision should weigh.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Roll Over to a New Employer Plan
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                A new plan keeps funds inside a qualified retirement plan with ERISA protections and plan loan eligibility. The receiving plan is not required to accept rollovers, so confirm acceptance with the plan administrator first. 403(b) plans and simple IRAs each have separate eligibility rules for incoming rollover funds.
              </p>
            </div>

            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                Cash Out
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Cashing out triggers ordinary income taxes, a possible 10% early withdrawal penalty before age 59, and permanent loss of tax deferred growth. EBRI estimates cashouts cost savers $60 billion to $105 billion annually (EBRI, 2022). It is rarely the right move when rollover options exist.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Roth Conversion Strategies */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Roth Conversion Strategies
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              A roth ira conversion moves pre tax money from a 401(k) or traditional ira into a roth ira, where funds grow tax free and no required minimum distributions apply during your lifetime. The converted amount counts as ordinary income and is taxed at your ordinary income taxes rate in that year.
            </p>
            <p>
              Since the IRS prohibited recharacterization effective January 1, 2018, roth ira conversion decisions are permanent (IRS IRA FAQs). Tax smart strategies spread conversions across lower-income years to keep taxable income within a current bracket and reduce future taxes plus required minimum distributions rmds that begin at age 73 under SECURE 2.0 (IRS, 2023). High earners expecting a higher bracket later benefit most.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who Needs Rollover Guidance */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Who Needs Rollover Guidance?
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                You Are Leaving an Employer
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                When actively employed status ends, a distribution election is required. The IRS notes plan administrators may default balances of $1,000 to $5,000 into an automatic IRA if you make no election (IRS). Specific advice before that deadline protects your rollover options and tax planning.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                You Have Multiple Retirement Accounts
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Consolidation was the primary rollover motivation for 19% of IRA-owning households in mid-2024 (ICI). Combining funds into one account simplifies future taxes, investment strategies, and tracking of required minimum distributions rmds across retirement accounts.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                You Are Pre-RMD Planning
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Years before age 73 are the window for bracket-managed roth ira conversion work. Converting pre tax funds in low-income years reduces the ordinary income and future taxes you would owe on rmds in higher-bracket retirement years.
              </p>
            </div>

            <div>
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">
                When a Rollover May Not Be the Right Fit
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If you need penalty free access before age 59, carry employer stock with net unrealized appreciation, or rely on plan loans, staying in the old plan may serve you better. A tax advisor or registered investment adviser should review your specific situation before moving any funds.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
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
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
                Why Choose PointOak for 401(k) Rollover Guidance?
              </h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                PointOak manages over $1 billion in client assets with a team of three partners bringing more than 50 years of collective experience. Our deep background in retirement plan consulting means we understand the mechanics, tax implications, and strategic considerations of 401(k) rollovers and Roth conversions better than most advisors. As a fee-only, independent fiduciary firm with no proprietary products, we compare all your options objectively — staying in your employer plan, rolling to an IRA, or converting to Roth — without product-sales pressure or conflicts of interest. With fewer than 100 clients per partner, you receive the personalized guidance this important transition deserves.
              </p>
            </div>
            <div className="relative w-full h-[300px] lg:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/images/asset-couples-03.png"
                alt="Couple planning their retirement rollover strategy with advisor"
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
      <section className="bg-white py-12 md:py-16 lg:py-20">
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
