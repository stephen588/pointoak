"use client";

import Image from "next/image";

const planServices = [
  {
    title: "Fiduciary Support",
    description:
      "ERISA and the Department of Labor require you, as plan sponsors and fiduciaries, to act in the best interests of the plan participants (your employees). This is precisely our role. We share the legal responsibility and protect you from liability while ensuring you meet your obligations.",
  },
  {
    title: "Investment Analysis",
    description:
      "We help you create, select and monitor the investments in your plan's menu. We evaluate more than $120 billion in plan assets quarterly. Our institutional-grade monitoring process identifies when investments begin to deviate from your plan strategy, and we recommend any changes clearly and quickly.",
  },
  {
    title: "Plan Design",
    description:
      "With so many features and options available, how do you design a retirement plan that's right for everyone? From auto-enrollment to safe harbor design, we customize your plan to increase participation, improve retirement-readiness, and meet your specific goals.",
  },
  {
    title: "Target Date Fund (TDF) Advising",
    description:
      "Traditional TDF or customized solution? Is your plan appropriate for your employee demographics? We use a multi-step suitability and selection process to identify the TDF best suited to your company. And, we take care of the documentation and communication support for your fiduciary file and employees.",
  },
  {
    title: "Provider & Fee Benchmarking",
    description:
      "Selecting and monitoring your plan provider and keeping fees reasonable are vital functions of your fiduciary responsibility. We analyze more than 450 data points per bidder to bring you the best products. Then we perform more than 10,000 benchmarks each year using actual plan data. As your advocate, we facilitate, monitor, and strengthen your provider relationships so you get competitive pricing and quality service.",
  },
  {
    title: "Education & Communications",
    description:
      "Most employees don't understand their retirement plan. That's not just an engagement problem, it's a fiduciary liability. Because we are independent, we provide your employees with education focused on retirement readiness and financial security, not sales pitches. An educated workforce improves your plan participation and engagement and meets your obligations.",
  },
];

export default function Businesses() {
  return (
    <section id="businesses" className="bg-cloud-blue py-16 md:py-24">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <h2 className="font-outfit text-navy text-3xl md:text-4xl lg:text-[44px] font-light leading-tight mb-3">
            PointOak for Businesses
          </h2>
          <p className="font-outfit text-navy text-base md:text-lg lg:text-xl leading-relaxed">
            Customized retirement plans for your company
          </p>
        </div>

        {/* Copy + photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14 md:mb-20">
          <div className="font-outfit text-text-gray text-base leading-[27px] space-y-5">
            <p>
              As a business owner, you wear many hats. Managing a world-class retirement plan
              doesn&apos;t have to be on your list. As fiduciaries committed to your company&apos;s
              continued success, we customize retirement plan offerings specifically for your
              company and your employee needs. We tackle the complexities of your plan so that
              you can concentrate on growing your business.
            </p>
            <p>
              We are your on-call retirement specialists, and can even help you improve
              participation and increase employee motivation.
            </p>
          </div>
          <div>
            <Image
              src="/images/business-team.png"
              alt="Business team meeting about their company retirement plan"
              width={800}
              height={534}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Divider + subheading */}
        <div className="border-t-2 border-navy/40 pt-10 md:pt-14 mb-10 md:mb-14 max-w-4xl">
          <h3 className="font-outfit text-navy text-2xl md:text-3xl lg:text-[32px] font-light leading-snug mb-5">
            Concierge Retirement Planning Services
          </h3>
          <p className="font-outfit text-text-gray text-base leading-[27px]">
            We&apos;re your on-call company retirement planner. We have been advising plan sponsors
            and participants since day one. As a result, we know how to add immediate value to
            your organization. We can help you with all aspects of your plan creation and
            maintenance, and identify needs you may not even know you have. Our recommendations
            take into account your company and employees, with tailored services that grow with
            you.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
          {planServices.map((service) => (
            <div key={service.title} className="flex flex-col gap-5">
              <h4 className="font-outfit text-navy text-xl lg:text-2xl font-light leading-snug">
                {service.title}
              </h4>
              <p className="font-outfit text-navy text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
