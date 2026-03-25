const services = [
  {
    number: "1",
    title: "White-Glove Service",
    subtitle: "Personalized attention you deserve",
    description:
      "Every client works directly with a partner — not a junior associate. We take a comprehensive approach, coordinating all aspects of your financial life so nothing falls through the cracks.",
    bgClass: "bg-brand-dark",
    textClass: "text-white",
    subtitleClass: "text-brand-accent",
    numberBg: "bg-white/10",
    numberText: "text-white",
  },
  {
    number: "2",
    title: "Direct Partner Access",
    subtitle: "Work directly with decision-makers",
    description:
      "With just three partners overseeing more than $1 billion in assets, you always have a direct line to the people making decisions about your financial future — not a call center.",
    bgClass: "bg-gray-100",
    textClass: "text-brand-dark",
    subtitleClass: "text-brand-gray",
    numberBg: "bg-brand-dark/10",
    numberText: "text-brand-dark",
  },
  {
    number: "3",
    title: "Proactive Guidance",
    subtitle: "We anticipate your needs",
    description:
      "We don't wait for you to call us with problems. We proactively identify opportunities and risks in your plan, reaching out with recommendations before issues arise.",
    bgClass: "bg-brand-mid",
    textClass: "text-white",
    subtitleClass: "text-brand-accent",
    numberBg: "bg-white/10",
    numberText: "text-white",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-brand text-brand-dark text-4xl md:text-5xl font-light mb-4">
            What Sets Us Apart
          </h2>
          <p className="font-body text-brand-gray text-lg max-w-xl mx-auto">
            Three principles that define every client relationship at PointOak.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`${service.bgClass} rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden`}
            >
              {/* Hex decorative background */}
              <div className="absolute -bottom-8 -right-8 opacity-10">
                <svg width="120" height="138" viewBox="0 0 256 294" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M255.253 220.4V73.4653L127.626 0L0 73.4653V220.4L127.626 293.865L255.253 220.4Z" fill="currentColor"/>
                </svg>
              </div>

              {/* Number */}
              <div
                className={`w-12 h-12 rounded-xl ${service.numberBg} flex items-center justify-center flex-shrink-0`}
              >
                <span className={`font-brand ${service.numberText} text-xl font-bold`}>
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className={`font-brand ${service.textClass} text-xl font-semibold mb-1`}>
                  {service.title}
                </h3>
                <p className={`font-brand ${service.subtitleClass} text-xs font-medium italic mb-4`}>
                  {service.subtitle}
                </p>
                <p className={`font-body ${service.textClass === "text-white" ? "text-white/70" : "text-brand-gray"} text-sm leading-relaxed`}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
