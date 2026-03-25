"use client";

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
      a: "No. The initial consultation is complimentary and carries no obligation. It's an opportunity for both parties to determine if we're a good fit.",
    },
    {
      q: "What should I prepare before our first conversation?",
      a: "Bring questions and a general sense of your financial goals. We'll discuss your current situation, what prompted you to seek advice, and how we might help. Detailed documentation comes later if we move forward.",
    },
    {
      q: "Can I bring my spouse or partner?",
      a: "Absolutely. We encourage it. Financial planning works best when all decision makers are involved from the start.",
    },
    {
      q: "How long does the initial consultation take?",
      a: "Typically 30-45 minutes, though we're happy to extend the conversation if you have additional questions.",
    },
  ],
  "Fees & Structure": [
    {
      q: "How do you charge for your services?",
      a: "We operate as a fee-only advisor and charge an asset-based fee that varies by account size and complexity. Our pricing is transparent and designed to be competitive. There are no commissions, hidden fees, or revenue sharing arrangements. We're paid only by you. We're happy to discuss our specific fee structure during your consultation.",
    },
    {
      q: "Why does being fee-only and fiduciary matter?",
      a: "Fee-only means we earn no commissions from selling investment products, eliminating conflicts of interest. Fiduciary means we're legally obligated to act in your best interest at all times, not just recommend suitable products. Together, these ensure our advice is unbiased and aligned with your objectives.",
    },
    {
      q: "How does your fee compare to other advisors?",
      a: "Our fees are competitive with other independent RIAs and often lower than wirehouse firms when you account for all costs. More importantly, our fee-only structure means you know exactly what you're paying for. We focus on delivering value, not maximizing our compensation.",
    },
  ],
  "Process & Service": [
    {
      q: "What makes you different from other financial advisors?",
      a: "Three things: our independent, fiduciary structure free from conflicts of interest; our exceptional service ratio with just three partners managing over $1 billion; and our deep retirement plan expertise that translates into superior income planning. We take complex concepts and explain them clearly, making the experience straightforward rather than overwhelming.",
    },
    {
      q: "How is working with an independent RIA different from a wirehouse?",
      a: "Independent RIAs like PointOak operate under a fiduciary standard and have complete freedom to select investments from the entire marketplace. Wirehouses often push proprietary products and operate under a lower suitability standard. You get unbiased advice and direct access to decision-makers with us.",
    },
    {
      q: "How often will we meet or communicate?",
      a: "Engagement is more frequent during onboarding, then typically transitions to semi-annual review meetings. Additional meetings happen as needed based on life changes or market events. You're always encouraged to contact us by phone or email whenever questions arise. Our team typically responds within 24 business hours.",
    },
    {
      q: "Do you work with my CPA and attorney?",
      a: "Yes. We coordinate with your existing professionals to ensure your financial plan integrates with your tax and estate planning. While we don't provide tax or legal advice ourselves, we work collaboratively to create a cohesive strategy.",
    },
  ],
  "Credentials & Compliance": [
    {
      q: "Are you registered with the SEC?",
      a: "Yes. PointOak Retirement Advisors, LLC is an SEC-registered investment advisor. We're authorized to serve clients nationally and can complete state registrations within two business days when needed.",
    },
    {
      q: "Where can I find your Form ADV?",
      a: "Our Form ADV Part 2A is available here. This document provides detailed data about our company, services, fees, and potential conflicts of interest.",
    },
  ],
  "401(k) Rollover Specific": [
    {
      q: "Should I roll over my old 401(k)?",
      a: "It depends on your specific situation. Rollovers can provide more investment options, lower fees, and consolidated management. But there are cases where staying in your plan makes sense. We evaluate your unique circumstances, including fees, investment quality, and special protections, before recommending.",
    },
    {
      q: "What are the tax implications of a 401(k) rollover?",
      a: "Done correctly through a direct rollover, there are no immediate tax consequences. The money moves tax-free from your 401(k) to an IRA. Indirect rollovers have different rules and potential tax traps. We guide you through the process to avoid costly mistakes.",
    },
    {
      q: "How long does a 401(k) rollover take?",
      a: "Typically 2-4 weeks from initiation to completion, depending on your former employer's recordkeeper. We handle the paperwork and fill in the coordination gaps to make the process as smooth as possible.",
    },
  ],
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("Before First Meeting");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentFAQs = faqData[activeCategory] || [];

  return (
    <section id="faq" className="bg-white py-12 md:py-20 lg:py-28">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        {/* Top text */}
        <div className="mb-8 md:mb-14">
          <h2 className="font-sans text-navy text-5xl md:text-[56px] font-bold leading-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="font-poppins text-[#777] text-base italic leading-relaxed max-w-xl">
            We&apos;ve answered the most common questions about working with us. If you don&apos;t see your
            question here, we&apos;re happy to discuss it during your consultation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-14">
          {/* Tab sidebar - optimized for mobile with horizontal scrolling */}
          <div className="flex flex-row lg:flex-col gap-0 overflow-x-auto lg:overflow-visible w-full lg:w-[281px] flex-shrink-0 scroll-smooth snap-x snap-mandatory -webkit-overflow-scrolling-touch pb-2 lg:pb-0">
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
                  font-poppins font-semibold text-sm md:text-base snap-start
                  min-w-[200px] lg:min-w-0 mr-4 lg:mr-0
                  ${
                    activeCategory === cat
                      ? "border-bright-blue text-navy"
                      : "border-transparent text-mid-gray hover:text-navy/60"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ items - optimized spacing for mobile */}
          <div className="flex flex-col gap-3 md:gap-2 flex-1 w-full">
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
                    className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left min-h-[44px]"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="font-sans text-navy text-lg md:text-2xl font-semibold leading-snug pr-2">
                      {faq.q}
                    </span>
                    <div
                      className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-colors touch-manipulation ${
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
                    <div className="px-4 md:px-5 pb-5">
                      <p className="font-poppins text-[#4E4E4E] text-base leading-relaxed">{faq.a}</p>
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
