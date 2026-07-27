"use client";

import Image from "next/image";

// Life stage icons
const lifeStages = [
  {
    icon: "/images/icon-accumulation.png",
    iconW: 38,
    name: "Accumulation",
    description: "Building Wealth Strategically",
  },
  {
    icon: "/images/icon-active-retirement.png",
    iconW: 48,
    name: "Pre-Retirement",
    description: "Planning Your Transition",
  },
  {
    icon: "/images/icon-wealth-transition-new.png",
    iconW: 30,
    name: "Active Retirement",
    description: "Sustainable Income Strategies",
  },
  {
    icon: "/images/icon-pre-retirement-new.png",
    iconW: 36,
    name: "Wealth Transition",
    description: "Legacy Planning",
  },
];

export default function WhoWeServe() {
  return (
    <section id="individuals" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <h2 className="font-outfit text-navy text-3xl md:text-4xl lg:text-[44px] font-light leading-tight mb-3">
            PointOak for Individuals and Families
          </h2>
          <p className="font-outfit text-navy text-base md:text-lg lg:text-xl leading-relaxed">
            Personalized wealth management for every stage
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-start">
          {/* Life stages rail */}
          <div className="w-full lg:w-[200px] flex-shrink-0 grid grid-cols-2 lg:grid-cols-1 gap-7">
            {lifeStages.map((stage) => (
              <div key={stage.name} className="flex flex-col gap-1.5">
                <div className="h-11 flex items-center">
                  <Image
                    src={stage.icon}
                    alt={stage.name}
                    width={stage.iconW}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="font-outfit text-navy font-bold text-lg leading-tight">
                  {stage.name}
                </p>
                <p className="font-outfit text-text-gray font-medium text-[10.5px] italic">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          {/* Body copy */}
          <div className="w-full lg:flex-1 font-outfit text-text-gray text-base leading-[27px] space-y-5">
            <p>
              As you build wealth, financial planning becomes more complex. You want to make the
              best decisions, with guidance specifically tailored to your goals and situation. As
              independent, fee-only financial advisors, we do not get commissions or affiliate
              with any products. We work only for the best interests of you and your family. We
              coordinate investments, retirement planning, tax strategies, changing regulations
              and all aspects of your financial picture, tackling the complexities so you can
              focus on living well.
            </p>
            <p>
              Whether you prefer to meet in person in the DC metro area or virtually from
              anywhere, we provide generations of affluent and high-net-worth individuals and
              families with sophisticated guidance, clearly and without jargon.
            </p>
          </div>

          {/* Photo */}
          <div className="w-full lg:w-[380px] flex-shrink-0">
            <Image
              src="/images/families.png"
              alt="Multi-generational family planning their financial future together"
              width={800}
              height={534}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
