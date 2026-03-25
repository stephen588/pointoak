"use client";

import Image from "next/image";

// Life stage icons
function AccumulationIcon() {
  return (
    <Image
      src="/images/icon-accumulation.png"
      alt="Accumulation"
      width={38}
      height={40}
      className="object-contain"
    />
  );
}

function PreRetirementIcon() {
  return (
    <Image
      src="/images/icon-active-retirement.png"
      alt="Pre-Retirement"
      width={48}
      height={40}
      className="object-contain"
    />
  );
}

function ActiveRetirementIcon() {
  return (
    <Image
      src="/images/icon-wealth-transition-new.png"
      alt="Active Retirement"
      width={30}
      height={42}
      className="object-contain"
    />
  );
}

function WealthTransitionIcon() {
  return (
    <Image
      src="/images/icon-pre-retirement-new.png"
      alt="Wealth Transition"
      width={36}
      height={40}
      className="object-contain"
    />
  );
}

const lifeStages = [
  {
    icon: <AccumulationIcon />,
    name: "Accumulation",
    description: "Building wealth strategically",
  },
  {
    icon: <PreRetirementIcon />,
    name: "Pre-Retirement",
    description: "Planning your transition",
  },
  {
    icon: <ActiveRetirementIcon />,
    name: "Active Retirement",
    description: "Sustainable income strategies",
  },
  {
    icon: <WealthTransitionIcon />,
    name: "Wealth Transition",
    description: "Legacy planning",
  },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Text Content - order-1 on mobile (appears first), left on desktop */}
          <div className="w-full lg:w-[52%] pt-0 lg:pt-2 order-1 lg:order-2">
            {/* Heading */}
            <h2
              className="font-outfit leading-tight mb-9"
              style={{ color: "#003754", fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 400, lineHeight: "1.25" }}
            >
              We Serve High-Net-Worth Individuals and Families
            </h2>

            {/* Body text */}
            <div
              className="font-outfit space-y-5 mb-9"
              style={{ color: "#707070", fontSize: "16px", fontWeight: 400, lineHeight: "25px" }}
            >
              <p style={{ textTransform: "capitalize" }}>
                You&apos;ve built wealth through your career, business, or inheritance. Now the financial decisions are more complex. Retirement income, tax strategies, coordinated planning. You want sophisticated guidance without the overwhelming jargon.
              </p>
              <p style={{ textTransform: "capitalize" }}>
                We work with affluent individuals across multiple life stages: accumulation, pre-retirement planning, active retirement, and wealth transition. Whether you prefer in-person meetings in the DC metro or a virtual relationship nationwide, we provide the white-glove service and expertise you need.
              </p>
            </div>

            {/* Growing capabilities text */}
            <p
              className="font-outfit"
              style={{ color: "#707070", fontSize: "16px", fontWeight: 400, lineHeight: "25px", textTransform: "capitalize" }}
            >
              As we continue to grow, we&apos;re expanding our capabilities to serve ultra-high-net-worth families with more comprehensive wealth coordination.
            </p>
          </div>

          {/* Life Stages Grid + Blue card - order-2 on mobile (appears second), right on desktop */}
          <div className="w-full lg:w-[48%] flex-shrink-0 order-2 lg:order-1">
            {/* Life Stages Grid - horizontal scroll on mobile */}
            <div 
              id="life-stages" 
              className="flex lg:grid lg:grid-cols-2 gap-4 lg:gap-y-7 lg:gap-x-8 overflow-x-auto lg:overflow-x-visible -webkit-overflow-scrolling-touch scroll-smooth mb-8"
              style={{
                scrollSnapType: 'x mandatory',
              }}
            >
              {lifeStages.map((stage) => (
                <div 
                  key={stage.name} 
                  className="flex flex-col gap-1.5 min-w-[200px] flex-shrink-0 lg:min-w-0 lg:flex-shrink"
                  style={{
                    scrollSnapAlign: 'start',
                  }}
                >
                  <div className="h-11 flex items-center">
                    {stage.icon}
                  </div>
                  <p
                    className="font-outfit"
                    style={{ color: "#003754", fontWeight: 700, fontSize: "18px", lineHeight: "1.2" }}
                  >
                    {stage.name}
                  </p>
                  <p
                    className="font-outfit"
                    style={{ color: "#707070", fontWeight: 500, fontSize: "10.5px", fontStyle: "italic", textTransform: "capitalize" }}
                  >
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Blue card - moved below grid */}
            <div className="px-9 py-6 bg-[#016BA4] rounded-lg text-center">
              <p className="font-outfit text-white font-bold text-xl leading-tight">
                Serving clients ages 25–75
              </p>
              <p className="font-outfit text-white font-medium text-sm italic mt-1">
                across DC/MD/VA metro and nationwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
