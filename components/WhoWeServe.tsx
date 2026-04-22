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

          {/* Life Stages Timeline + Blue card - order-2 on mobile (appears second), right on desktop */}
          <div className="w-full lg:w-[48%] flex-shrink-0 order-2 lg:order-1">
            {/* ===== Desktop timeline (horizontal) ===== */}
            <div id="life-stages" className="hidden lg:block mb-8">
              <div className="relative">
                {/* Connecting gradient line */}
                <div
                  className="absolute top-7 left-7 right-7 h-0.5 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #A8D4EB 0%, #0078B8 50%, #003754 100%)",
                  }}
                  aria-hidden="true"
                />

                {/* Stage nodes */}
                <div className="relative grid grid-cols-4 gap-2">
                  {lifeStages.map((stage, idx) => (
                    <div key={stage.name} className="flex flex-col items-center text-center">
                      {/* Icon node circle */}
                      <div
                        className="relative w-14 h-14 rounded-full bg-white border-2 flex items-center justify-center shadow-md transition-transform hover:scale-105"
                        style={{ borderColor: "#0078B8" }}
                      >
                        <div className="scale-75">{stage.icon}</div>
                        {/* Step number badge */}
                        <span
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-white font-outfit text-[10px] font-bold flex items-center justify-center shadow"
                          style={{
                            background:
                              "linear-gradient(135deg, #003754 0%, #0078B8 100%)",
                          }}
                        >
                          {idx + 1}
                        </span>
                      </div>

                      {/* Stage label */}
                      <p
                        className="font-outfit mt-3"
                        style={{
                          color: "#003754",
                          fontWeight: 700,
                          fontSize: "14px",
                          lineHeight: "1.25",
                        }}
                      >
                        {stage.name}
                      </p>
                      <p
                        className="font-outfit mt-1"
                        style={{
                          color: "#707070",
                          fontWeight: 500,
                          fontSize: "11px",
                          fontStyle: "italic",
                          lineHeight: "1.3",
                          textTransform: "capitalize",
                        }}
                      >
                        {stage.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== Mobile timeline (vertical) ===== */}
            <div className="lg:hidden mb-8">
              <div className="relative pl-12">
                {/* Vertical connecting line */}
                <div
                  className="absolute left-[22px] top-2 bottom-2 w-0.5 rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, #A8D4EB 0%, #0078B8 50%, #003754 100%)",
                  }}
                  aria-hidden="true"
                />

                <div className="space-y-5">
                  {lifeStages.map((stage, idx) => (
                    <div key={stage.name} className="relative flex items-center gap-4">
                      {/* Icon node */}
                      <div
                        className="absolute -left-12 w-11 h-11 rounded-full bg-white border-2 flex items-center justify-center shadow-md"
                        style={{ borderColor: "#0078B8" }}
                      >
                        <div className="scale-[0.6]">{stage.icon}</div>
                        <span
                          className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-white font-outfit text-[9px] font-bold flex items-center justify-center shadow"
                          style={{
                            background:
                              "linear-gradient(135deg, #003754 0%, #0078B8 100%)",
                          }}
                        >
                          {idx + 1}
                        </span>
                      </div>

                      {/* Stage text */}
                      <div>
                        <p
                          className="font-outfit"
                          style={{
                            color: "#003754",
                            fontWeight: 700,
                            fontSize: "16px",
                            lineHeight: "1.2",
                          }}
                        >
                          {stage.name}
                        </p>
                        <p
                          className="font-outfit mt-0.5"
                          style={{
                            color: "#707070",
                            fontWeight: 500,
                            fontSize: "12px",
                            fontStyle: "italic",
                            lineHeight: "1.3",
                            textTransform: "capitalize",
                          }}
                        >
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
