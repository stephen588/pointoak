const services = [
  {
    title: "Retirement Income Planning",
    description:
      "We engineer sustainable income strategies that protect your principal while generating the cash flow you need. Our focus is optimizing how much income your portfolio can generate, not just building savings.",
  },
  {
    title: "Investment Management",
    description:
      "Tax-aware portfolio construction designed for optimal risk-adjusted returns. We build diversified strategies aligned with your time horizon and coordinate with your broader financial plan for accumulation or income generation.",
  },
  {
    title: "Tax-Efficient Wealth Strategies",
    description:
      "We utilize tax-aware portfolio models and advanced tax-loss harvesting to minimize tax impact over time. Strategies include concentrated position management and low-cost-basis optimization.",
  },
  {
    title: "401(k) Rollover & Workplace Benefit Optimization",
    description:
      "Our corporate retirement plan background means superior guidance on rollovers, contribution strategies, and maximizing workplace benefits. We've advised thousands of participants and understand the nuances other advisors might miss.",
  },
  {
    title: "Social Security & Pension Optimization",
    description:
      "We use advanced planning software to model optimal claiming scenarios for primary and spousal Social Security benefits. Each strategy is integrated with your broader retirement income plan and tax situation.",
  },
  {
    title: "Comprehensive Financial Planning",
    description:
      "Coordinated guidance across investments, retirement, taxes, and estate planning. We act as your personal financial advocate, taking things off your plate so you can focus on what matters most.",
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

export default function ServicesSection() {
  return (
    <section id="services" className="bg-brand-bg py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div className="flex flex-col gap-4 lg:gap-5 max-w-xl">
            <p className="font-outfit text-brand-navy text-2xl font-light leading-tight">
              Comprehensive Wealth
            </p>
            <h2 className="font-outfit text-brand-navy text-5xl lg:text-6xl font-light leading-none">
              Comprehensive Wealth
            </h2>
          </div>
          <p className="font-outfit text-brand-gray text-xl lg:text-2xl leading-relaxed max-w-lg capitalize">
            We Provide Integrated Financial Guidance Tailored To Your Specific
            Situation. Our Services Work Together To Create A Cohesive Strategy
            Aligned With Your Goals, Values, And Life Stage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col gap-6">
              <h3 className="font-outfit text-brand-navy text-2xl lg:text-[2rem] font-light leading-snug">
                {service.title}
              </h3>
              <p className="font-outfit text-brand-navy text-base leading-relaxed flex-1">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-brand-navy font-outfit text-sm font-medium hover:gap-3 transition-all duration-200"
              >
                Learn More
                <ArrowIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
