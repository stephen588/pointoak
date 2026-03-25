"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useConsultationModal } from "./ConsultationModalProvider";

export default function AboutCTA() {
  const { openModal } = useConsultationModal();
  return (
    <section className="w-full bg-white py-16 lg:py-20 px-6 lg:px-24">
      <div className="max-w-[1170px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
        {/* Left: description */}
        <div className="max-w-2xl">
          <p className="text-[15px] lg:text-[18px] leading-[1.65] font-normal capitalize text-[#3a3a3a]">
            <span className="font-semibold text-[#003754]">PointOak</span>
            <span className="text-[#5a5a5a]">
              {" "}is an independent, fee-only wealth advisory firm serving
              high-net-worth individuals and families. With over{" "}
            </span>
            <span className="font-medium text-[#003754]">
              50 years of collective experience,
            </span>
            <span className="text-[#5a5a5a]">
              {" "}we take sophisticated financial strategies and make them
              clear, actionable, and aligned with your long-term goals.
            </span>
          </p>
        </div>

        {/* Right: CTA button */}
        <div className="flex-shrink-0">
          <button
            onClick={openModal}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-[7px] text-white text-[16px] font-medium capitalize transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}
          >
            Book A Consultation
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
