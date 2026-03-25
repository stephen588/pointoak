import Image from "next/image";

const stats = [
  {
    value: "$1.08 Billion",
    label: "Assets Under Management",
    icon: "/images/exp-aum.png",
  },
  {
    value: "50+ Years",
    label: "Collective Experience",
    icon: "/images/exp-collective.png",
  },
  {
    value: "Since 2017",
    label: "Serving Clients",
    icon: "/images/exp-since2017.png",
  },
  {
    value: "Fee-Only Fiduciary",
    label: "Since Inception",
    icon: "/images/exp-fiduciary.png",
  },
];

export default function Experience() {
  return (
    <section id="about" className="bg-white py-12 md:py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        {/* Centered single column layout */}
        <div className="flex flex-col items-center">
          <h2 className="font-outfit text-navy text-3xl md:text-4xl font-light leading-snug mb-8 md:mb-12 text-center">
            Experience You Can Trust
          </h2>

          {/* Stats in 4-column row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 w-full max-w-5xl">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col items-center gap-3 text-center">
                <div className="w-14 h-14 flex items-center justify-center">
                  <Image
                    src={stat.icon}
                    alt=""
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <div className="font-outfit text-navy text-lg font-bold leading-tight">
                  {stat.value}
                </div>
                <div className="font-outfit text-text-gray text-xs font-medium italic">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Description paragraph */}
          <div className="max-w-3xl text-center">
            <p className="font-poppins text-text-gray text-base leading-relaxed">
              PointOak Retirement Advisors has operated as a full-scope fiduciary since our founding.
              Based in McLean, Virginia, we serve clients across the DC metro area and nationwide
              through virtual relationships. Our SEC registration and fiduciary commitment mean your
              financial goals and well-being come first, always.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
