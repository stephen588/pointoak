"use client";

import Image from "next/image";
import { useConsultationModal } from "./ConsultationModalProvider";

const ArrowIcon = () => (
  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.33333 0L0 8.33333M8.33333 0H0.833333M8.33333 0V7.5" stroke="#003754" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function CircleIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-[70px] h-[70px] flex-shrink-0">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="35" fill="#003754" fillOpacity="0.1"/>
      </svg>
      <Image src={src} alt={alt} width={42} height={42} className="absolute" style={{ left: "14px", top: "14px" }} />
    </div>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onLearnMore: () => void;
}

function Card({ icon, title, description, onLearnMore }: CardProps) {
  return (
    <div className="bg-white rounded-[7px] border border-[#F3F4F6] p-8 flex flex-col gap-4 flex-1 min-w-0">
      {icon}
      <div className="flex flex-col gap-3 flex-1">
        <h3 className="text-navy font-outfit font-semibold text-xl leading-[30px]">
          {title}
        </h3>
        <p className="text-text-gray font-outfit text-base leading-[25px] flex-1">
          {description}
        </p>
      </div>
      <button
        onClick={onLearnMore}
        className="flex items-center gap-2 text-navy font-outfit text-sm font-medium leading-[14px] hover:opacity-70 transition-opacity w-fit"
      >
        Learn More
        <ArrowIcon />
      </button>
    </div>
  );
}

export default function WhyChooseUs() {
  const { openModal } = useConsultationModal();

  const cards = [
    {
      icon: <CircleIcon src="/images/why-independent.png" alt="Independent advisor" />,
      title: "Independent & Accountable",
      description:
        "As a fee-only, SEC-registered investment advisor, we are legally obligated to act in your best interest. We receive no commissions and are free from conflicts of interest.",
    },
    {
      icon: <CircleIcon src="/images/why-personal-service.png" alt="Personalized service" />,
      title: "Personalized",
      description:
        "We completely customize our advice for your specific situation and goals. Your dedicated, highly-experienced advisor will support you as often as you need, whenever you need.",
    },
    {
      icon: <CircleIcon src="/images/why-retirement.png" alt="Experienced advisors" />,
      title: "Experienced & Expert",
      description:
        "Each of our partners manages over $1B in assets and has extensive experience in not just wealth management, but in making it accessible, understandable, and straightforward.",
    },
    {
      icon: <CircleIcon src="/images/why-planning.png" alt="High-touch service" />,
      title: "High-Touch & Thorough",
      description:
        "If you're worried about the market, have a question, or just want to chat, reach out anytime. We are completely dedicated to you. And, if we don't have expertise or services you need, we will leave no stone unturned to find them for you.",
    },
  ];

  return (
    <section className="w-full bg-cloud-blue py-12 md:py-20 lg:py-24">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        {/* Header */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[44px] font-light leading-tight mb-3">
            Why Choose PointOak
          </h2>
          <p className="text-text-gray font-outfit text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl">
            How we&apos;re different from traditional firms and wirehouse advisors
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              onLearnMore={openModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
