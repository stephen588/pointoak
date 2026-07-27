"use client";

import { ArrowRight } from "lucide-react";
import { useConsultationModal } from "./ConsultationModalProvider";

export default function Hero() {
  const { openModal } = useConsultationModal();
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-video-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src="/images/hero-video-web.mp4" type="video/mp4" />
      </video>

      {/* Screened navy overlay for text readability */}
      <div className="absolute inset-0" style={{ background: "rgba(0, 45, 68, 0.82)" }} />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1170px] mx-auto px-6 xl:px-0 pt-32 pb-16">
        {/* Divider above heading */}
        <div className="w-full h-px bg-white/25 mb-10" />

        {/* Main heading */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] mb-3">
          Concierge Wealth Management
        </h1>

        {/* Subheading */}
        <p className="text-white/95 text-xl md:text-2xl font-light mb-10">
          Your dedicated, fiduciary financial advisors
        </p>

        {/* Description */}
        <p className="text-white/85 text-[15px] lg:text-[18px] leading-[1.7] max-w-3xl mb-10">
          PointOak is an independent, fee-only wealth advisory firm and fiduciary. We serve
          both businesses and private individuals with sophisticated financial and retirement
          planning strategies, made simple and accessible. If you need a world-class retirement
          plan for your company, or have more than $500K in investable assets, we can help you
          reach your goals.
        </p>

        {/* CTA */}
        <button
          onClick={openModal}
          className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-[7px] bg-[#EFEFEF] text-[#003754] text-[16px] font-medium hover:bg-white transition-colors"
        >
          Schedule A Consultation
          <ArrowRight className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}
