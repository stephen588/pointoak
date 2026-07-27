"use client";

import { useConsultationModal } from "./ConsultationModalProvider";

const services = [
  {
    title: "Retirement Income Planning",
    description:
      "You want to make sure you have the cash you need throughout your retirement. That means not just saving, but building a portfolio that delivers income while protecting your investment. We'll evaluate your resources and develop a custom plan to help you maximize every dollar and build the future you want.",
  },
  {
    title: "Investment Management",
    description:
      "A successful portfolio isn't static. It should change over time with changes in the market or your personal situation. We take into account current tax laws, risk, time horizons, and your broader financial picture to make adjustments that keep you on track.",
  },
  {
    title: "Tax-Efficient Wealth Strategies",
    description:
      "Everyone wants to minimize taxes. But when you generate wealth, that wealth is going to be taxed. By using strategies like concentrated position management, low-cost-basis optimization, and tax-aware portfolio models, we can minimize your tax costs over time. Not sure what those are? Get in touch with us and we'll show you.",
    disclaimer: "PointOak does not provide tax advice. We coordinate with your CPA.",
  },
  {
    title: "401(k) Rollover & Workplace Benefit Optimization",
    description:
      "We've spent years managing corporate retirement plans. That means we offer tested, specific guidance on rollovers, contribution strategies, and work benefits. Your personal financial advisor can offer you independent advice on when, where, and how much to contribute, and help you get the most value from your company retirement plan.",
  },
  {
    title: "Social Security & Pension Optimization",
    description:
      "When should you start taking benefits? How much should you take? Will they be taxed, and if so, how much? What about your spouse? We can answer all these questions and more. We'll model multiple different scenarios and customize your distribution strategy as part of your integrated retirement income plan, so you can maximize your lifetime benefits.",
  },
  {
    title: "Comprehensive Financial Planning",
    description:
      "There is a lot more to financial management than retirement planning. Income generation, investment, debt, taxes, real-estate, and overall risk management—we address every aspect of your financial life. As your wealth management concierge, we take these things off your plate so you can focus on what you enjoy, knowing that your finances are getting expert, personal attention from people dedicated to your wellbeing.",
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
    <section id="services" className="bg-white pb-12 md:pb-20 lg:pb-28 pt-2">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        {/* Divider + subheading */}
        <div className="border-t-2 border-navy/40 pt-10 md:pt-14 mb-10 md:mb-14 max-w-4xl">
          <h3 className="font-outfit text-navy text-2xl md:text-3xl lg:text-[32px] font-light leading-snug mb-5">
            Concierge Wealth Management Services
          </h3>
          <p className="font-outfit text-text-gray text-base leading-[27px]">
            We&apos;re your personal financial strategist. We can help you with all aspects of your
            financial situation, and identify needs you may not even know you have. Our
            recommendations take into account your full picture, with services that work together
            to create a unified financial strategy specific to your goals, values, and life stage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col gap-6">
              <h4 className="font-outfit text-navy text-xl lg:text-2xl font-light leading-snug">
                {service.title}
              </h4>
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
