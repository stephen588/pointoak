"use client";

import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Understand",
    description:
      "We start by listening. This includes understanding your goals, concerns, financial picture, and what prompted you to seek advice. Our focus is on clarity so both sides are aligned before any recommendations are made.",
  },
  {
    number: 2,
    title: "Design",
    description:
      "We develop a customized strategy integrating investment management, retirement planning, and tax-aware considerations. Each recommendation is intentional, transparent, and tailored to your specific situation. No cookie-cutter approaches.",
  },
  {
    number: 3,
    title: "Implement & Monitor",
    description:
      "We put the plan into action and stay actively involved. This includes ongoing monitoring, regular check-ins, and adjustments as your life and goals evolve so your strategy remains aligned over time.",
  },
];

function HexDiagram() {
  return (
    <div className="w-full max-w-[500px] mx-auto">
      <Image
        src="/images/hex-process-diagram.png"
        alt="Our three-step process: Understand, Design, Implement & Monitor"
        width={975}
        height={1000}
        className="w-full h-auto"
      />
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="process" className="bg-white py-12 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-10 md:mb-16 lg:mb-20">
          <p className="font-outfit text-navy text-2xl lg:text-[2rem] font-light leading-tight mb-3">
            How Working
          </p>
          <h2 className="font-outfit text-navy text-5xl lg:text-6xl font-light leading-none">
            With Us Works
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: hex diagram + description */}
          <div>
            <p className="font-outfit text-text-gray text-base leading-relaxed max-w-sm mb-10 capitalize">
              We Follow A Proven Three-Step Process That Makes Complex Financial
              Planning Straightforward. From The First Conversation To Ongoing
              Monitoring, We&apos;re With You Every Step Of The Way.
            </p>
            <HexDiagram />
          </div>

          {/* Right: step cards */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[27px] top-14 bottom-14 w-px bg-[#C1C5C9] hidden sm:block" />

            <div className="flex flex-col gap-0">
              {steps.map((step, idx) => (
                <div key={step.number} className="flex gap-6 sm:gap-8">
                  {/* Step number */}
                  <div className="flex flex-col items-center z-10 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-medium-blue flex items-center justify-center flex-shrink-0">
                      <span className="font-outfit font-semibold text-white text-xl leading-none">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step card */}
                  <div
                    className={`flex-1 border border-[#F3F4F6] rounded-md bg-white p-6 lg:p-8 ${
                      idx < steps.length - 1 ? "mb-6" : ""
                    }`}
                  >
                    <h3 className="font-outfit text-navy text-xl lg:text-2xl font-light mb-4">
                      {step.title}
                    </h3>
                    <p className="font-poppins text-text-gray text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
