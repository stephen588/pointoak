"use client";

import Image from "next/image";

const ArrowIcon = () => (
  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.33333 0L0 8.33333M8.33333 0H0.833333M8.33333 0V7.5" stroke="#003754" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IndependentIcon = () => (
  <div className="relative w-[70px] h-[70px] flex-shrink-0">
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="35" r="35" fill="#003754" fillOpacity="0.1"/>
    </svg>
    <Image 
      src="/images/why-independent.png" 
      alt="Independent advisor" 
      width={42} 
      height={42} 
      className="absolute" 
      style={{ left: '14px', top: '14px' }} 
    />
  </div>
);

const PersonalServiceIcon = () => (
  <div className="relative w-[70px] h-[70px] flex-shrink-0">
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="35" r="35" fill="#003754" fillOpacity="0.12"/>
    </svg>
    <Image 
      src="/images/why-personal-service.png" 
      alt="Personal service" 
      width={42} 
      height={42} 
      className="absolute" 
      style={{ left: '14px', top: '14px' }} 
    />
  </div>
);

const RetirementIcon = () => (
  <div className="relative w-[70px] h-[70px] flex-shrink-0">
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="35" r="35" fill="#003754" fillOpacity="0.1"/>
    </svg>
    <Image 
      src="/images/why-retirement.png" 
      alt="Retirement expertise" 
      width={42} 
      height={42} 
      className="absolute" 
      style={{ left: '14px', top: '14px' }} 
    />
  </div>
);

const PlanningIcon = () => (
  <div className="relative w-[70px] h-[70px] flex-shrink-0">
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="35" r="35" fill="#003754" fillOpacity="0.1"/>
    </svg>
    <Image 
      src="/images/why-planning.png" 
      alt="Planning icon" 
      width={42} 
      height={42} 
      className="absolute" 
      style={{ left: '14px', top: '14px' }} 
    />
  </div>
);

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Card({ icon, title, description }: CardProps) {
  return (
    <div className="bg-white rounded-[7px] border border-[#F3F4F6] p-8 flex flex-col gap-4 flex-1 min-w-0">
      {icon}
      <div className="flex flex-col gap-3 flex-1">
        <h3 className="text-navy font-outfit font-medium text-lg leading-[30px]">
          {title}
        </h3>
        <p className="text-text-gray font-outfit text-base leading-[25px] flex-1">
          {description}
        </p>
      </div>
      <a
        href="#"
        className="flex items-center gap-2 text-navy font-outfit text-sm font-medium leading-[14px] hover:opacity-70 transition-opacity w-fit"
      >
        Learn More
        <ArrowIcon />
      </a>
    </div>
  );
}

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <IndependentIcon />,
      title: "Independent & Unbiased",
      description:
        "As a fee-only, SEC-registered investment advisor, we&apos;re entirely independent. We work solely in your best interest — no commissions, no conflicts.",
    },
    {
      icon: <PersonalServiceIcon />,
      title: "White-Glove, Personal Service",
      description:
        "With each client supported by a dedicated support partner managing over $1 billion in assets, we offer a level of intimacy and expertise that&apos;s rare in the industry.",
    },
    {
      icon: <RetirementIcon />,
      title: "Deep Retirement Expertise",
      description:
        "As a fee-only, SEC-registered investment advisor, we&apos;re entirely independent and focused on helping you build the retirement you&apos;ve envisioned.",
    },
    {
      icon: <PlanningIcon />,
      title: "Sophisticated Planning, Simply Explained",
      description:
        "We take sophisticated financial concepts and explain them clearly so they truly make sense — empowering you to make confident decisions.",
    },
  ];

  return (
    <section className="w-full bg-cloud-blue py-12 md:py-20 lg:py-24">
      <div className="max-w-[1296px] mx-auto px-6 xl:px-0">
        {/* Header */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-navy font-outfit text-4xl sm:text-5xl lg:text-[68px] font-normal leading-tight mb-4 md:mb-5">
            Why Clients Choose PointOak
          </h2>
          <p className="text-text-gray font-outfit text-base md:text-lg lg:text-2xl leading-[33px] max-w-4xl">
            When it comes to choosing a wealth advisor, experience and approach make all the difference. Here&apos;s what sets us apart from traditional firms and wirehouse advisors.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
