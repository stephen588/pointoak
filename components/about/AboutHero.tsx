import Link from "next/link";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt="Professional office environment"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient overlay - subtle top, darker bottom for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 lg:px-24 pb-16 lg:pb-24 pt-32">
        {/* Italic tagline */}
        <p className="text-[#F5F3EF] text-xl lg:text-2xl font-normal italic mb-6 tracking-wide">
          Retirement Plan Specialists
        </p>

        {/* Main heading */}
        <h1 className="text-[#F5F3EF] text-4xl md:text-5xl lg:text-[48px] font-bold leading-[1.4] mb-6 max-w-4xl">
          Your Retirement Plan Deserves More Than a Generalist
        </h1>

        {/* Subtle divider */}
        <div className="w-full max-w-4xl h-px bg-white/20 mb-6" />

        {/* Description */}
        <p className="text-[15px] lg:text-[18px] leading-[1.6] max-w-3xl mb-10 font-normal text-[#EDEDED]">
          PointOak Retirement Advisors has dedicated our entire practice to one thing: 
          helping plan sponsors build better retirement outcomes for their company and 
          employees. That&apos;s exactly what we do. And it&apos;s all we do.
        </p>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-[7px] border border-[#EFEFEF] text-[#EFEFEF] text-[16px] font-medium capitalize hover:bg-white/10 transition-colors"
        >
          Schedule a Consultation
        </Link>
      </div>
    </section>
  );
}
