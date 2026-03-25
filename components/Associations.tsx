import Image from "next/image";

export default function Associations() {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-24 border-t border-gray-100">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        {/* Heading */}
        <h2 className="font-outfit text-navy text-4xl md:text-5xl font-light text-center mb-8 md:mb-14">
          Industry Associations
        </h2>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Logo 1 - TiE */}
          <div className="border border-gray-100 rounded-lg bg-white flex items-center justify-center p-5 h-[107px]">
            <Image
              src="/images/assoc-logo-tie.png"
              alt="TiE - World's Largest Community of Entrepreneurs"
              width={260}
              height={80}
              className="max-w-full max-h-[80px] object-contain"
            />
          </div>

          {/* Logo 2 - ASPPA */}
          <div className="border border-gray-100 rounded-lg bg-white flex items-center justify-center p-5 h-[107px]">
            <Image
              src="/images/assoc-logo-asppa.png"
              alt="ASPPA - American Society of Pension Professionals & Actuaries"
              width={200}
              height={100}
              className="max-w-full max-h-[100px] object-contain"
            />
          </div>

          {/* Logo 3 - RPAG */}
          <div className="border border-gray-100 rounded-lg bg-white flex items-center justify-center p-5 h-[107px]">
            <Image
              src="/images/assoc-logo-rpag.png"
              alt="RPAG"
              width={120}
              height={120}
              className="max-w-full max-h-[120px] object-contain"
            />
          </div>

          {/* Logo 4 - SHRM */}
          <div className="border border-gray-100 rounded-lg bg-white flex items-center justify-center p-5 h-[107px]">
            <Image
              src="/images/assoc-logo-shrm.png"
              alt="SHRM"
              width={190}
              height={74}
              className="max-w-full max-h-[74px] object-contain"
            />
          </div>

          {/* Logo 5 - NIPA */}
          <div className="border border-gray-100 rounded-lg bg-white flex items-center justify-center p-5 h-[107px]">
            <Image
              src="/images/assoc-logo-nipa.png"
              alt="NIPA - National Institute of Pension Administrators"
              width={240}
              height={80}
              className="max-w-full max-h-[80px] object-contain"
            />
          </div>

          {/* Logo 6 - NAPA */}
          <div className="border border-gray-100 rounded-lg bg-white flex items-center justify-center p-5 h-[107px]">
            <Image
              src="/images/assoc-logo-napa.png"
              alt="NAPA - National Association of Plan Advisors"
              width={240}
              height={100}
              className="max-w-full max-h-[100px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
