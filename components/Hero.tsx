"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useConsultationModal } from "./ConsultationModalProvider";

export default function Hero() {
  const { openModal } = useConsultationModal();
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
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
        {/* Italic subtitle */}
        <p className="text-[#F5F3EF] text-xl lg:text-2xl font-normal italic mb-6 tracking-wide">
          Analyze - Optimize - Maximize
        </p>

        {/* Main heading */}
        <h1 className="text-[#F5F3EF] text-4xl md:text-5xl lg:text-[48px] font-bold leading-[1.4] mb-6 max-w-4xl">
          Your Financial Journey...<br />Our Expertise.
        </h1>

        {/* Subtle divider */}
        <div className="w-full max-w-4xl h-px bg-white/20 mb-6" />

        {/* Description */}
        <p className="text-[15px] lg:text-[18px] leading-[1.6] max-w-3xl mb-10 font-normal"
           style={{ textTransform: "capitalize" }}>
          <span className="text-[#EDEDED] font-semibold">PointOak</span>
          <span className="text-[#C3C3C3]">
            {" "}is an independent, fee-only wealth advisory firm and fiduciary serving
            high-net-worth individuals and families. With over{" "}
          </span>
          <span className="text-[#EDEDED] font-medium">
            50 years of collective experience,
          </span>
          <span className="text-[#C3C3C3]">
            {" "}we turn sophisticated financial strategies into clear,
            actionable plans aligned with your long-term goals.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Outlined button */}
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[7px] border border-[#EFEFEF] text-[#EFEFEF] text-[16px] font-medium capitalize hover:bg-white/10 transition-colors"
          >
            Learn About Our Process
          </Link>

          {/* Filled button */}
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-[7px] bg-[#EFEFEF] text-[#003754] text-[16px] font-medium capitalize hover:bg-white transition-colors"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
