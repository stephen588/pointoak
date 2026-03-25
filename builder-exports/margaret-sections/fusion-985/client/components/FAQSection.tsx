import { useState } from "react";

const categories = [
  "Before First Meeting",
  "Fees & Structure",
  "Process & Service",
  "Credentials & Compliance",
  "401(k) Rollover Specific",
];

const faqData: Record<string, { q: string; a: string }[]> = {
  "Before First Meeting": [
    {
      q: "What is your minimum investment requirement?",
      a: "Our minimum is $500,000 in investable assets. This allows us to provide the comprehensive, high-touch service our clients expect while maintaining the exceptional advisor-to-client ratio that sets us apart.",
    },
    {
      q: "Is there any cost for the initial consultation?",
      a: "No, your initial consultation is completely complimentary. We believe in giving you the opportunity to evaluate whether we're the right fit for your needs before any commitments are made.",
    },
    {
      q: "What should I prepare before our first conversation?",
      a: "It's helpful to have a general sense of your current financial picture — retirement accounts, investments, debts, income sources. Don't worry about having everything perfectly organized; we'll guide the conversation and let you know what documentation we'll need.",
    },
    {
      q: "Can I bring my spouse or partner?",
      a: "Absolutely, and we encourage it. Financial planning decisions affect both partners, and it's important that everyone involved feels comfortable and informed from the very start of our relationship.",
    },
    {
      q: "How long does the initial consultation take?",
      a: "Our initial consultations typically last 45–60 minutes. We'll discuss your goals, current financial situation, and how we might work together — and of course answer any questions you have for us.",
    },
  ],
  "Fees & Structure": [
    {
      q: "How are you compensated?",
      a: "We are a fee-only firm, meaning we are compensated solely by our clients — never through commissions or product sales. Our fees are transparent and disclosed upfront.",
    },
    {
      q: "What is your fee structure?",
      a: "We charge an annual management fee based on a percentage of assets under management. The exact percentage varies based on the complexity of your situation and total assets. We'll provide full transparency during your consultation.",
    },
    {
      q: "Are there any hidden fees?",
      a: "No. As a fee-only fiduciary, we have no incentive to recommend products that pay us commissions. All fees are disclosed in our ADV and client agreement.",
    },
  ],
  "Process & Service": [
    {
      q: "How often will we meet?",
      a: "We typically conduct comprehensive reviews at least twice per year, with additional meetings as needed. We also proactively reach out when market conditions or tax planning opportunities arise.",
    },
    {
      q: "What services do you provide?",
      a: "We offer comprehensive wealth management including investment management, retirement planning, tax planning coordination, estate planning coordination, Social Security optimization, and more.",
    },
    {
      q: "Do you work with clients outside the DC area?",
      a: "Yes. While we're based in McLean, Virginia, we serve clients nationwide through virtual relationships. Many of our clients find virtual meetings equally effective.",
    },
  ],
  "Credentials & Compliance": [
    {
      q: "Are you a registered investment advisor?",
      a: "Yes. PointOak Retirement Advisors, LLC is registered with the Securities and Exchange Commission (SEC) as an investment advisor.",
    },
    {
      q: "What is a fiduciary?",
      a: "A fiduciary is legally required to act in your best interest at all times. Unlike brokers who must only ensure a product is 'suitable,' fiduciaries must prioritize your interests over their own.",
    },
    {
      q: "How can I verify your credentials?",
      a: "You can check the background of our investment professionals on FINRA's BrokerCheck at brokercheck.finra.org, or view our Form ADV on the SEC's Investment Adviser Public Disclosure website.",
    },
  ],
  "401(k) Rollover Specific": [
    {
      q: "Should I roll over my 401(k) when I retire?",
      a: "It depends on your specific situation. Rolling over to an IRA can provide more investment flexibility and potentially lower costs, but there are situations where keeping assets in a 401(k) may be beneficial. We'll help you evaluate your options.",
    },
    {
      q: "What are the tax implications of a 401(k) rollover?",
      a: "A direct rollover to an IRA is generally tax-free. However, if funds are paid to you first, you have 60 days to complete the rollover or face taxes and potentially a 10% early withdrawal penalty. We'll guide you through the process.",
    },
    {
      q: "How long does a 401(k) rollover take?",
      a: "Typically 2–4 weeks, though it can vary depending on your former employer's plan administrator. We assist clients through this process to ensure it's completed correctly and efficiently.",
    },
  ],
};

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("Before First Meeting");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentFAQs = faqData[activeCategory] || [];

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        {/* Top text */}
        <div className="mb-14">
          <h2 className="font-sans text-brand-dark text-5xl md:text-[56px] font-bold leading-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-[#777] text-base italic leading-relaxed max-w-xl">
            We've answered the most common questions about working with us. If you don't see your
            question here, we're happy to discuss it during your consultation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-14">
          {/* Tab sidebar */}
          <div className="flex flex-row lg:flex-col gap-0 overflow-x-auto lg:overflow-visible w-full lg:w-[281px] flex-shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`
                  flex items-center gap-2 px-0 py-5 text-left border-b-4 lg:border-b-4 
                  whitespace-nowrap lg:whitespace-normal transition-all duration-200
                  font-body font-semibold text-base
                  ${
                    activeCategory === cat
                      ? "border-[#08B0EF] text-brand-dark"
                      : "border-transparent text-[#B2B2B2] hover:text-brand-dark/60"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ items */}
          <div className="flex flex-col gap-2 flex-1 w-full">
            {currentFAQs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`border rounded-lg transition-all duration-200 ${
                    isOpen ? "border-[#B4C1C6]" : "border-[#DFE4E5]"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 p-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="font-sans text-brand-dark text-xl md:text-2xl font-semibold leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isOpen ? "bg-[#FBFBFB]" : "bg-white"
                      }`}
                    >
                      {isOpen ? (
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.667 14.667H17.3337H25.3337V17.3337H17.3337H14.667H6.66699V14.667H14.667Z" fill="#003245"/>
                        </svg>
                      ) : (
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.6667 14.667V6.66699H17.3333V14.667H25.3333V17.3337H17.3333V25.3337H14.6667V17.3337H6.66666V14.667H14.6667Z" fill="#BABABA"/>
                        </svg>
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5">
                      <p className="font-body text-[#4E4E4E] text-base leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
