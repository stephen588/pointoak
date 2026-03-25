"use client";

import { useConsultationModal } from "./ConsultationModalProvider";

const services = [
  {
    title: "Retirement Income Planning",
    description:
      "We engineer sustainable income solutions that protect your principal while generating the cash flow you need throughout retirement. Our focus is optimizing how much income your portfolio can deliver, not just building savings. We evaluate your resources and develop a plan to help you maximize every dollar.",
  },
  {
    title: "Investment Management",
    description:
      "Tax-aware portfolio construction designed for optimal risk-adjusted returns. We build diversified investing strategies aligned with your time horizon and coordinate with your broader financial plan for accumulation or income generation. Our team reviews your objectives and constructs a portfolio using the best investment products available in the marketplace.",
  },
  {
    title: "Tax-Efficient Wealth Strategies",
    description:
      "We utilize tax-aware portfolio models and advanced tax-loss harvesting to minimize tax cost over time. Strategies include concentrated position management and low-cost-basis optimization.",
    disclaimer: "PointOak does not provide tax advice. We coordinate with your CPA.",
  },
  {
    title: "401(k) Rollover & Workplace Benefit Optimization",
    description:
      "Our corporate retirement plan background means superior guidance on rollovers, contribution strategy, and maximizing workplace benefits. As former retirement plan advisors, we've advised thousands of participants and understand the nuances of defined contribution plans that other advisors might miss. We help you achieve the best value from your company's retirement programs.",
  },
  {
    title: "Social Security & Pension Optimization",
    description:
      "We use advanced planning software to evaluate and model optimal claiming scenarios for primary and spousal Social Security benefits. Each strategy is integrated with your broader retirement income plan and tax situation to help you maximize lifetime benefits.",
  },
  {
    title: "Comprehensive Financial Planning",
    description:
      "Coordinated guidance across investments, retirement, taxes, and estate planning. We act as your personal financial advocate, taking things off your plate so you can focus on what matters most. Our advice addresses every aspect of your financial life with the combination of expertise and personal attention you deserve.",
  },
];

function ArrowIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
      <path
        d="M8.33333 0L0 8.33333M8.33333 0H0.833333M8.33333 0V7.5"
        stroke="#003754"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Services() {
  const { openModal } = useConsultationModal();
  
  return (
    <section id="services" className="bg-light-gray py-12 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 md:mb-16 lg:mb-20 max-w-4xl">
          <h2 className="font-outfit text-navy text-4xl sm:text-5xl lg:text-[68px] font-light leading-tight mb-4 md:mb-5">
            Comprehensive Wealth Management Services
          </h2>
          <p className="font-outfit text-text-gray text-base md:text-lg lg:text-xl leading-relaxed">
            We provide a full spectrum of integrated financial guidance tailored to your specific situation. Our services work together to create a cohesive strategy aligned with your financial goals, values, and life stage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col gap-6">
              <h3 className="font-outfit text-navy text-2xl lg:text-[2rem] font-light leading-snug">
                {service.title}
              </h3>
              <div className="flex-1">
                <p className="font-outfit text-navy text-base leading-relaxed">
                  {service.description}
                </p>
                {service.disclaimer && (
                  <p className="font-outfit text-text-gray text-xs italic mt-2">
                    {service.disclaimer}
                  </p>
                )}
              </div>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 text-navy font-outfit text-sm font-medium hover:gap-3 transition-all duration-200"
              >
                Learn More
                <ArrowIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
