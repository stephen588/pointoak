"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useConsultationModal } from "./ConsultationModalProvider";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openModal } = useConsultationModal();

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto px-6 lg:px-24 flex items-center justify-between h-[78px]">
        {/* Logo → Home */}
        <Link href="/" className="flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/pointoak-logo.png"
            alt="PointOak Retirement Advisors"
            className="h-[56px] w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/about" className="text-white text-[16px] font-normal hover:text-white/80 transition-colors">
            About
          </Link>
          <Link href="/our-services" className="text-white text-[16px] font-normal hover:text-white/80 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-white text-[16px] font-normal hover:text-white/80 transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <button
          onClick={openModal}
          className="hidden lg:flex items-center gap-3 px-5 py-3 rounded-[7px] text-white text-[16px] font-medium capitalize transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}
        >
          Book a Consultation
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </button>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy/95 backdrop-blur-sm border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link href="/about" className="text-white text-[16px] font-normal py-2 border-b border-white/10" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="/our-services" className="text-white text-[16px] font-normal py-2 border-b border-white/10" onClick={() => setMobileOpen(false)}>
              Services
            </Link>
            <Link href="/contact" className="text-white text-[16px] font-normal py-2 border-b border-white/10" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <button
              onClick={() => {
                setMobileOpen(false);
                openModal();
              }}
              className="flex items-center justify-center gap-3 px-5 py-3 rounded-[7px] text-white text-[16px] font-medium mt-2"
              style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}
            >
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
