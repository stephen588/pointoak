"use client";

import Image from "next/image";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  bgOpacity: string;
}

function AssetsIcon() {
  return (
    <Image
      src="/images/icon-aum.png"
      alt="Assets Under Management"
      width={43}
      height={43}
      className="w-[43px] h-[43px] object-contain flex-shrink-0"
    />
  );
}

function ExperienceIcon() {
  return (
    <Image
      src="/images/icon-experience-new.png"
      alt="Trusted Experience"
      width={33}
      height={43}
      className="w-[33px] h-[43px] object-contain flex-shrink-0"
    />
  );
}

function FiduciaryIcon() {
  return (
    <Image
      src="/images/icon-fiduciary.png"
      alt="Fiduciary Standard"
      width={43}
      height={43}
      className="w-[43px] h-[43px] object-contain flex-shrink-0"
    />
  );
}

function AdvisorIcon() {
  return (
    <Image
      src="/images/icon-sec-ria.png"
      alt="Registered Advisor"
      width={43}
      height={35}
      className="w-[43px] h-[35px] object-contain flex-shrink-0"
    />
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  bg: string;
}

function StatCard({ icon, value, label, bg }: StatCardProps) {
  return (
    <div
      className="flex-1 flex items-center justify-center py-10 px-6 lg:px-10 min-w-[250px] flex-shrink-0 md:flex-shrink md:min-w-0"
      style={{ background: bg }}
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex flex-col gap-1">
          <span className="text-[#003754] text-xl font-bold leading-tight">{value}</span>
          <span className="text-[#707070] text-[10px] font-medium italic capitalize leading-tight">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function StatsBar() {
  const stats = [
    {
      icon: <AssetsIcon />,
      value: "$1.08B",
      label: "Assets Under Management",
      bg: "#E4E4E4",
    },
    {
      icon: <ExperienceIcon />,
      value: "Since 2017",
      label: "Trusted Experience",
      bg: "rgba(228,228,228,0.80)",
    },
    {
      icon: <FiduciaryIcon />,
      value: "Fee-Only",
      label: "Fiduciary Standard",
      bg: "rgba(228,228,228,0.60)",
    },
    {
      icon: <AdvisorIcon />,
      value: "SEC-RIA",
      label: "Registered Advisor",
      bg: "rgba(228,228,228,0.40)",
    },
  ];

  return (
    <section className="w-full bg-[#E4E4E4]">
      <style jsx>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-x {
          animation: scroll-x 15s linear infinite;
        }
        .animate-scroll-x:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Mobile: horizontal scrolling ticker */}
      <div className="md:hidden overflow-hidden">
        <div className="flex animate-scroll-x gap-0">
          {[...stats, ...stats].map((stat, i) => (
            <StatCard
              key={i}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              bg={stat.bg}
            />
          ))}
        </div>
      </div>

      {/* Desktop: static 4-column grid */}
      <div className="hidden md:flex flex-row">
        {stats.map((stat, i) => (
          <StatCard
            key={i}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            bg={stat.bg}
          />
        ))}
      </div>
    </section>
  );
}
