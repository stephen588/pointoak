"use client";

import { ArrowRight } from "lucide-react";
import { useConsultationModal } from "@/components/ConsultationModalProvider";

// Primary sitewide CTA. Opens the consultation modal until PointOak sends the scheduling calendar link.
export default function ScheduleButton({
  label = "Schedule a Complimentary Consultation",
  tone = "light",
}: {
  label?: string;
  tone?: "light" | "dark";
}) {
  const { openModal } = useConsultationModal();
  const styles =
    tone === "light"
      ? "bg-[#EFEFEF] text-navy hover:bg-white"
      : "text-white hover:opacity-90";
  return (
    <button
      onClick={openModal}
      className={`inline-flex items-center justify-center gap-3 px-6 py-3 rounded-[7px] text-[16px] font-medium transition-colors ${styles}`}
      style={tone === "dark" ? { background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" } : undefined}
    >
      {label}
      <ArrowRight className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
    </button>
  );
}
