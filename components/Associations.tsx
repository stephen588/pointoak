import Image from "next/image";

const logos = [
  { src: "/images/assoc-logo-tie.png", alt: "TiE - World's Largest Community of Entrepreneurs" },
  { src: "/images/assoc-logo-asppa.png", alt: "ASPPA - American Society of Pension Professionals & Actuaries" },
  { src: "/images/assoc-logo-rpag.png", alt: "RPAG" },
  { src: "/images/assoc-logo-shrm.png", alt: "SHRM" },
  { src: "/images/assoc-logo-nipa.png", alt: "NIPA - National Institute of Pension Administrators" },
  { src: "/images/assoc-logo-napa.png", alt: "NAPA - National Association of Plan Advisors" },
];

export default function Associations() {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-24 border-t border-gray-100">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        {/* Heading */}
        <h2 className="font-outfit text-navy text-3xl md:text-4xl lg:text-[44px] font-light mb-8 md:mb-14">
          Industry Associations
        </h2>

        {/* Logo grid — uniform visual weight */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="border border-gray-100 rounded-lg bg-white flex items-center justify-center p-6 h-[107px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={60}
                className="max-w-full max-h-[52px] w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
