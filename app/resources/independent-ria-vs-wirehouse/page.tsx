import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Independent RIA vs. Wirehouse: How to Verify Your Advisor | PointOak",
  description: "CFP Board says 'fee-based' means 'fee and commission,' not fee-only. Learn how to verify an advisor's registration, compensation, and fiduciary status before you hire.",
  alternates: {
    canonical: "https://www.pointoak.com/resources/independent-ria-vs-wirehouse/"
  }
};

const tocItems = [
  { id: "intro", label: "Introduction" },
  { id: "what-it-means", label: "What 'Financial Advisor' Actually Means" },
  { id: "compensation", label: "Fee-Only vs. Fee-Based vs. Commission" },
  { id: "comparison", label: "Independent RIA vs. Wirehouse" },
  { id: "verify", label: "How to Verify an Advisor's Claims" },
  { id: "which-fits", label: "Which Advisor Model Fits Your Situation" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const faqs = [
  {
    question: "What is the difference between a fiduciary and a broker?",
    answer: "An investment adviser owes fiduciary duty continuously; a broker-dealer follows Regulation Best Interest, a related but distinct standard adopted in 2019. The SEC structures these obligations differently. Fiduciary duty requires both a duty of care and a duty of loyalty, meaning the adviser must act in your best interests and cannot place their own interests ahead of yours. Reg BI requires broker-dealers to meet four obligations: Disclosure, Care, Conflict of Interest, and Compliance. The Care obligation mirrors some fiduciary principles, but Reg BI does not impose the continuous duty of loyalty that defines the fiduciary relationship. Most financial advisors operating under Reg BI work within wirehouse firms or broker-dealer platforms where business strategy and product selection differ from the independent RIA model."
  },
  {
    question: "What does 'fee-based' actually mean?",
    answer: "The CFP Board treats 'fee-based' as equivalent to 'fee and commission,' meaning the financial advisor may earn income from product sales alongside your advisory fee. The label misleads readers because it sounds like 'fee-only' with a minor variation. A fee-based advisor collects your management fee and may also receive commissions, 12b-1 fees, or revenue-sharing payments when you purchase certain products. This dual income stream means the advisor's compensation can increase based on which products they recommend rather than which ones perform for you. Always ask whether a financial advisor receives any compensation beyond what you pay directly."
  },
  {
    question: "What is the difference between an RIA and a wirehouse?",
    answer: "An RIA is independently registered and owes fiduciary duty; a wirehouse is a large broker-dealer with proprietary products and employed advisors. The independent RIA model has been gaining market share steadily as investors seek fiduciary relationships and open-architecture investment selection. An independent, fee-only advisory firm selects from the entire marketplace rather than a corporate-approved shelf. A wirehouse employs financial advisors who operate within the firm's infrastructure and product ecosystem. Both models can serve investors, but the structural incentives differ. Your choice depends on whether you need ongoing fiduciary advice or transaction-level execution."
  },
  {
    question: "How do I know if my advisor is really a fiduciary?",
    answer: "Check their registration on Investor.gov, request their Form CRS, and review their Form ADV brochure supplement for conflicts and compensation. Investor.gov routes your search to IAPD for registered investment advisers and BrokerCheck for broker-dealers. If the financial advisor claims fiduciary status, they should appear in IAPD as a registered investment adviser. Form CRS confirms whether they offer advisory services, brokerage services, or both. PointOak publishes its registration details and fiduciary commitment openly because transparency is the standard, not an exception."
  },
  {
    question: "What questions should I ask a financial advisor before hiring them?",
    answer: "Ask how they are compensated, whether they owe fiduciary duty on every transaction, and what conflicts their Form CRS discloses. Investor.gov publishes 'Conversation Starters' designed for exactly this situation. Ask whether the financial advisor or their firm receives any compensation from third parties. Ask whether their fiduciary obligation applies to all services or only specific account types. Ask what happens to your account if the advisor leaves the firm. These questions expose the structural differences that marketing materials obscure."
  },
  {
    question: "Is fee-only better than commission-based?",
    answer: "Fee-only removes the conflict of earning compensation from product sales, but the right model depends on the services you need. NAPFA defines fee-only as compensation solely from the client through hourly fees, retainers, flat fees, or percentage-of-assets charges. That structure means your financial advisor has no financial incentive to recommend one product over another. Commission-based models can work for investors who need occasional transactions and do not require ongoing planning. The tradeoff is that every recommendation carries a revenue motive. If you need continuous advisory oversight, a fee-only model aligns the advisor's incentives with yours."
  },
  {
    question: "Can an advisor be a fiduciary sometimes and not others?",
    answer: "Yes, dual-registered advisors may owe fiduciary duty for advisory services and operate under Reg BI for brokerage transactions. The SEC requires dual registrants to disclose the capacity in which they act on each transaction. In practice, the same person sitting across from you may be held to different legal standards depending on whether they are providing investment advice or executing a trade. Ask your advisor to confirm, in writing, when they act as a fiduciary and when they act as a broker. Form CRS should clarify which services trigger which standard, but the burden of understanding falls on you as the investor."
  },
  {
    question: "What should I look for on BrokerCheck or Form CRS?",
    answer: "BrokerCheck shows complaints, regulatory actions, and terminations; Form CRS shows services, fees, conflicts, and disciplinary history. On BrokerCheck, focus on customer complaint patterns rather than isolated incidents. Multiple complaints involving similar conduct across different firms suggest a systemic problem. Check employment termination reasons, which may include policy violations or customer disputes. On Form CRS, read the fees and costs section to understand total compensation, review the conflicts of interest section for revenue-sharing or proprietary product incentives, and note whether disciplinary events appear. Form ADV supplements add education and business experience details for each registered investment adviser."
  }
];

export default function IndependentRIAvsWirehousePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Independent RIA vs. Wirehouse: What Your Advisor Actually Is",
      description: "CFP Board says 'fee-based' means 'fee and commission,' not fee-only. Learn how to verify an advisor's registration, compensation, and fiduciary status before you hire.",
      url: "https://www.pointoak.com/resources/independent-ria-vs-wirehouse/",
      publisher: { "@type": "Organization", name: "PointOak Retirement Advisors" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Resources",
          item: "https://www.pointoak.com/resources/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Independent RIA vs. Wirehouse"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Verify an Advisor's Claims Before You Hire",
      step: [
        {
          "@type": "HowToStep",
          name: "Check registration on Investor.gov",
          text: "Start with Investor.gov's free background check tool. Enter the advisor's name or firm name. The tool routes you to IAPD for registered investment advisers and BrokerCheck for broker-dealers."
        },
        {
          "@type": "HowToStep",
          name: "Search BrokerCheck for complaints and disciplinary history",
          text: "BrokerCheck shows employment history, licenses, exams passed, customer complaints, regulatory actions, bankruptcies, and employment terminations."
        },
        {
          "@type": "HowToStep",
          name: "Request and read Form CRS",
          text: "Every broker-dealer and registered investment adviser must deliver a Form CRS covering services offered, fees and costs, conflicts of interest, and disciplinary history."
        },
        {
          "@type": "HowToStep",
          name: "Review Form ADV brochure supplements",
          text: "For registered investment advisers, Form ADV Part 2B discloses each advisor's education, business experience, disciplinary history, other business activities, professional designations, and compensation incentives."
        }
      ]
    }
  ];

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        breadcrumbs={[
          { label: "Resources", href: "/resources/" },
          { label: "Independent RIA vs. Wirehouse" }
        ]}
        title="Independent RIA vs. Wirehouse: What Your Advisor Actually Is"
        subtitle="The title 'financial advisor' does not tell you what legal standard applies to the person sitting across the table. The independent RIA vs. wirehouse distinction determines whether your advisor owes you fiduciary duty or follows a different rule entirely. This post covers the advisor models, compensation structures, and free government tools that let you verify any financial advisor's claims before you hire."
      />
      <AnimateOnScroll>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Table of Contents */}
            <aside className="lg:w-[280px] flex-shrink-0">
              <div className="lg:sticky lg:top-8">
                <h3 className="font-outfit text-navy text-sm font-bold uppercase tracking-wider mb-4">In This Guide</h3>
                <nav className="space-y-2">
                  {tocItems.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="block font-outfit text-dark-gray text-sm hover:text-navy transition-colors py-1 border-l-2 border-transparent hover:border-navy pl-3">
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
            {/* Main Content */}
            <article className="flex-1 min-w-0">
              <div id="intro" className="mb-10">
                <p className="font-outfit text-sm text-medium-gray mb-4"><strong>Last Updated: March 2026</strong></p>
                <div className="bg-cloud-blue rounded-lg p-6 mb-8">
                  <h3 className="font-outfit text-navy text-lg font-medium mb-3">Key Takeaways</h3>
                  <ul className="list-disc pl-5 text-dark-gray space-y-2">
                    <li>The CFP Board treats "fee-based" as equivalent to "fee and commission," not fee-only</li>
                    <li>Independent RIAs are projected to grow 4% annually through 2028 (Cerulli, 2025)</li>
                    <li>Free tools on Investor.gov, BrokerCheck, and IAPD let you verify any advisor's registration, complaints, and compensation before hiring</li>
                    <li>A fiduciary duty is not always "on"; dual-registered advisors may operate under different standards depending on the transaction</li>
                  </ul>
                </div>
              </div>

              <div id="what-it-means" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">What "Financial Advisor" Actually Means (and What It Doesn't)</h2>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  "Financial advisor" is a marketing term, not a regulated title. No single federal law restricts who can use it. The regulatory framework sorts financial professionals into three categories based on registration and legal obligation.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  <strong>Registered investment advisers (RIAs)</strong> register with the SEC or state regulators and owe fiduciary duty: a duty of care and a duty of loyalty. An independent registered investment advisor, like any <Link href="/about/" className="text-medium-blue hover:underline">SEC-registered investment advisor</Link>, must act in your best interests when providing investment advice. That obligation is continuous under the fiduciary standard, not limited to the moment of sale.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  <strong>Broker-dealers</strong> register with FINRA and the Securities and Exchange Commission. A broker dealer making recommendations is subject to <a href="https://www.sec.gov/regulation-best-interest" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Regulation Best Interest</a> since 2019. Reg BI requires acting in your best interests at the time of a recommendation, a real upgrade from the old suitability standard. But it does not impose a continuous duty of loyalty, and it does not eliminate all potential conflicts. Many financial advisors operating through broker dealer platforms work under this framework rather than the fiduciary model.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  <strong>Dual registrants</strong> hold both registrations and can shift between standards depending on the transaction. SEC guidance notes that a broker-dealer using the title "adviser" without also being a registered investment adviser is presumed to violate Reg BI capacity disclosure requirements. In forum discussions, investors describe this dynamic as the advisor "flipping to broker mode." What a financial advisor offers you on one transaction may carry a different legal obligation than the next.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  These key differences are structural. Knowing which registration applies to your financial advisor determines what standard protects you and shapes your financial future. The suitability standard that governed broker-dealers before Reg BI required only that recommendations be suitable for your situation, not that they serve your best interests.
                </p>
              </div>

              <div id="compensation" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">Fee-Only vs. Fee-Based vs. Commission: Follow the Money</h2>
                <blockquote className="border-l-4 border-medium-blue pl-4 text-gray-600 italic mb-4">
                  The CFP Board defines "fee-based" as equivalent to "fee and commission," not fee-only. (CFP Board Code of Ethics, 2018)
                </blockquote>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  That single definition clears up the most common label confusion in the industry. Three compensation models exist, and only one eliminates sales-related conflicts entirely.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Under the <a href="https://www.cfp.net/ethics/code-of-ethics-and-standards-of-conduct" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">CFP Board Code of Ethics</a>, fee-only requires that neither the advisor, the firm, nor any related party receives sales-related compensation. NAPFA further specifies that fee-only advisors may be compensated through hourly fees, retainers, percentage-of-assets charges, or a flat fee. The money comes from you, period.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Fee-based advisors (fee and commission) collect your advisory fee and may also earn commissions when selling specific financial products like mutual funds or alternative investments. That dual compensation creates potential conflicts because the advisor's income can increase based on which investment products they recommend. Fee-based advisors operate under different fee structures than fee-only practitioners, and those differences affect your financial well being over time.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Commission-only advisors earn nothing unless you buy. Every recommendation carries the question of whether it serves your client interests or their income. Selling financial products under a commission model means the advisor's compensation depends entirely on transactions rather than ongoing guidance.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Model</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Who Pays</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Conflict Profile</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Typical Structures</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Fee-only</td>
                        <td className="px-4 py-3 text-gray-700">Client only</td>
                        <td className="px-4 py-3 text-gray-700">Lowest; no sales incentives</td>
                        <td className="px-4 py-3 text-gray-700">AUM percentage, flat fee, hourly, retainer</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Fee-based (fee and commission)</td>
                        <td className="px-4 py-3 text-gray-700">Client + product sponsors</td>
                        <td className="px-4 py-3 text-gray-700">Mixed; advisory fee plus commission based sales</td>
                        <td className="px-4 py-3 text-gray-700">AUM fee + transaction commissions, trails</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Commission-only</td>
                        <td className="px-4 py-3 text-gray-700">Product sponsors</td>
                        <td className="px-4 py-3 text-gray-700">Highest; income tied to selling financial products</td>
                        <td className="px-4 py-3 text-gray-700">Front-end loads, 12b-1 fees, trails</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Understanding these compensation models matters before you sign anything. The common fee structures an advisor discloses in Form CRS should match the categories above, not a vague label on a website. Potential conflicts emerge when an advisor can earn more by recommending one financial product over another, and a flat fee or percentage-of-assets model removes that incentive entirely.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  This distinction extends beyond individual accounts. It applies to <Link href="/our-services/" className="text-medium-blue hover:underline">retirement plan consulting</Link> relationships where plan sponsors evaluate advisor compensation as part of their own fiduciary obligations.
                </p>
              </div>

              <div id="comparison" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">Independent RIA vs. Wirehouse: A Side-by-Side Comparison</h2>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Factor</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Independent RIA</th>
                        <th className="px-4 py-3 text-left font-outfit font-semibold">Wirehouse</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Legal duty</td>
                        <td className="px-4 py-3 text-gray-700">Fiduciary (continuous)</td>
                        <td className="px-4 py-3 text-gray-700">Reg BI (at point of recommendation)</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Product selection</td>
                        <td className="px-4 py-3 text-gray-700">Open architecture; entire marketplace</td>
                        <td className="px-4 py-3 text-gray-700">Primarily proprietary or approved lists</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Compensation model</td>
                        <td className="px-4 py-3 text-gray-700">Typically fee-only</td>
                        <td className="px-4 py-3 text-gray-700">Fee-based, commission, or hybrid</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Advisor continuity</td>
                        <td className="px-4 py-3 text-gray-700">Advisor owns client relationships</td>
                        <td className="px-4 py-3 text-gray-700">Firm owns client relationships</td>
                      </tr>
                      <tr className="border-b border-gray-100 even:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Minimum flexibility</td>
                        <td className="px-4 py-3 text-gray-700">Varies by firm</td>
                        <td className="px-4 py-3 text-gray-700">Often $250K-$1M+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  The structural differences between an independent RIA (a registered investment advisor RIA) and wirehouse firms go beyond philosophy. They shape what you're offered, what it costs, and whose interests the business model prioritizes.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Wirehouse advisors operate within a structured environment where the parent firm controls product shelves, sets revenue targets, and owns client relationships. If your advisor leaves, your account stays. Wirehouse firms offer broad platforms and name recognition, but investment strategies may favor proprietary funds that generate revenue for the firm rather than reflect your investment philosophy. Wirehouse advisors typically work under fee-based or commission models that introduce potential conflicts between their compensation and your outcomes.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Independent RIAs own their practices, choose from the entire marketplace to recommend investments, and build direct client relationships. That independence means personalized guidance is driven by your goals rather than a corporate product menu. Many financial advisors in the independent channel structure their advisory business around fee-only compensation to eliminate product sales conflicts entirely. Wealth management at an independent RIA often includes integrated financial planning and coordinated tax strategies that wirehouse platforms may not prioritize.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  The market data shows this shift accelerating. According to <a href="https://www.wealthmanagement.com/ria-news/cerulli-independent-rias-to-outpace-all-other-channels-by-2028" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Cerulli's 2025 outlook</a>, independent RIAs are projected to grow 4% annually through 2028, reaching 56,103 advisors. Fee-based assets grew 169% from roughly $6.5 trillion in 2014 to more than $17 trillion in 2023. Wirehouses are projected to cede 6.5 percentage points of asset market share by year-end 2025.
                </p>
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  These numbers reflect a structural shift in wealth management, not a passing trend. More investors are choosing firms that serve clients under a fiduciary model through <Link href="/" className="text-medium-blue hover:underline">fee-only fiduciary wealth advisory</Link> relationships.
                </p>
              </div>

              <div id="verify" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">How to Verify an Advisor's Claims Before You Hire</h2>
                <blockquote className="border-l-4 border-medium-blue pl-4 text-gray-600 italic mb-4">
                  Unlicensed, unregistered persons commit much of the investment fraud in the United States, according to Investor.gov.
                </blockquote>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
                  Verification takes less than ten minutes and costs nothing. Four steps confirm whether a financial advisor's claims about registration, compensation, and disciplinary history hold up. Finding the right financial advisor starts with evidence, not marketing campaigns.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Step 1: Check registration on Investor.gov</h3>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      Start with <a href="https://www.investor.gov/research-you-invest/free-investment-professional-background-check" target="_blank" rel="noopener noreferrer" className="text-medium-blue hover:underline">Investor.gov's free background check tool</a>. Enter the advisor's name or firm name. The tool routes you to IAPD (Investment Adviser Public Disclosure) for registered investment advisers and BrokerCheck for broker-dealers. If the financial advisor does not appear in either database, that is a serious red flag. Legitimate financial advisors are registered in at least one.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Step 2: Search BrokerCheck for complaints and disciplinary history</h3>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      BrokerCheck, maintained by the Financial Industry Regulatory Authority (FINRA), shows employment history, licenses held, exams passed, customer complaints, regulatory actions, bankruptcies, and employment terminations. Look for patterns, not isolated incidents. Multiple complaints involving the same conduct type across different firms suggest a systemic issue rather than a single misunderstanding.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Step 3: Request and read Form CRS</h3>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      Every broker-dealer and registered investment adviser must deliver a Form CRS (Client Relationship Summary) before or at the earliest of a recommendation, order placement, or account opening. This two-page document covers services offered, fees and costs, conflicts of interest, and disciplinary history. The "Conversation Starters" section at the bottom of each page lists questions the SEC wants you to ask. Use them.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Step 4: Review Form ADV brochure supplements</h3>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      For registered investment advisers, Form ADV Part 2B discloses each advisor's education, business experience, disciplinary history, other business activities, professional designations, and compensation incentives. This is where you find out whether your financial advisor has outside relationships that could influence their recommendations. Cross-reference what the advisor told you verbally with what the form discloses.
                    </p>
                  </div>
                </div>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mt-6">
                  These four steps give you the specialized knowledge and evidence to make an informed decision rather than relying on marketing language. You're reading the same documents regulators review. The right financial advisor will welcome this scrutiny. Pay attention to communication style during the process: transparency about registration and compensation signals transparency about your money.
                </p>
              </div>

              <div id="which-fits" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">Which Advisor Model Fits Your Situation?</h2>
                <div className="space-y-6">
                  <div>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed mb-2">
                      <strong>Approaching retirement with a 401(k) rollover decision?</strong>
                    </p>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      You're facing tax planning, distribution sequencing, and Social Security timing decisions that interact with each other. These complex financial decisions benefit from a long term relationship with financial planners who operate under fiduciary duty and fee-only compensation, where your financial goals drive every recommendation.
                    </p>
                  </div>
                  <div>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed mb-2">
                      <strong>Primarily executing trades with a strategy you've built yourself?</strong>
                    </p>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      A brokerage relationship may suffice for managing investments on your terms. Verify that Reg BI obligations apply to any recommendations you receive, and confirm the fee structures match a transaction-based model.
                    </p>
                  </div>
                  <div>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed mb-2">
                      <strong>Coordinating retirement income, taxes, estate management, and employer benefits across multiple accounts?</strong>
                    </p>
                    <p className="font-outfit text-dark-gray text-base leading-relaxed">
                      These specific financial decisions require investment analysis, ongoing support, and direct access to an advisor who sees your full financial life. An independent RIA with integrated financial planning services, like <Link href="/our-consulting-team/" className="text-medium-blue hover:underline">Darsh Makim and his team</Link>, can coordinate retirement planning across all these areas rather than addressing each in isolation.
                    </p>
                  </div>
                </div>
                <p className="font-outfit text-dark-gray text-base leading-relaxed mt-6">
                  Investor.gov frames the core decision as choosing between an advisory service, a brokerage service, or both. Your risk tolerance and financial needs determine which model fits.
                </p>
              </div>

              <div id="faq" className="mb-10">
                <h2 className="font-outfit text-navy text-2xl font-light mb-4">Frequently Asked Questions</h2>
                <ServiceDetailFAQ faqs={faqs} />
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p className="font-outfit text-dark-gray text-base leading-relaxed">
                  PointOak Retirement Advisors is an SEC-registered, fee-only fiduciary since 2017 with over $1.08 billion in assets under management. Our founder has advised plan sponsors and participants since 2005, and his senior team is present from your first conversation. <Link href="/contact/" className="text-medium-blue hover:underline">Schedule a complimentary consultation</Link> at no cost and with no obligation.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      </AnimateOnScroll>
      <CTASection />
      <Footer />
    </>
  );
}
