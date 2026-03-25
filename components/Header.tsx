"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useConsultationModal } from "./ConsultationModalProvider";

const navItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "For Individuals",
    href: "/services",
    children: [
      { label: "Retirement Income Planning", href: "/services/retirement-income-planning" },
      { label: "Investment Management", href: "/services/investment-management" },
      { label: "401(k) Rollovers & Roth", href: "/services/401k-rollovers-roth-conversions" },
      { label: "Tax-Efficient Wealth Strategies", href: "/services/tax-efficient-wealth-strategies" },
      { label: "Financial Planning", href: "/services/comprehensive-financial-planning" },
      { label: "Social Security & Pension", href: "/services/social-security-pension-optimization" },
      { label: "Estate Planning", href: "/services/estate-planning-coordination" },
      { label: "Executive Benefits", href: "/services/corporate-executive-benefits" },
    ],
  },
  {
    label: "For Businesses",
    href: "/corporate-retirement-plans",
    children: [
      { label: "Fiduciary Support", href: "/corporate-retirement-plans/fiduciary-support" },
      { label: "Provider & Fee Benchmarking", href: "/corporate-retirement-plans/provider-fee-benchmarking" },
      { label: "Investment Analysis", href: "/corporate-retirement-plans/investment-analysis" },
      { label: "TDF Consulting", href: "/corporate-retirement-plans/tdf-consulting" },
      { label: "Plan Design", href: "/corporate-retirement-plans/plan-design" },
      { label: "Education & Communications", href: "/corporate-retirement-plans/education-communications" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Retirement Income Planning Guide", href: "/resources/retirement-income-planning-guide" },
      { label: "Social Security Strategies", href: "/resources/social-security-claiming-strategies" },
      { label: "401(k) Rollover Guide", href: "/resources/401k-rollover-guide" },
      { label: "Tax-Efficient Investing", href: "/resources/tax-efficient-investing-strategies" },
      { label: "Independent RIA vs Wirehouse", href: "/resources/independent-ria-vs-wirehouse" },
      { label: "DC Metro Retirement Planning", href: "/resources/dc-metro-retirement-planning" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function DesktopDropdown({ item }: { item: typeof navItems[number] }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => { if (timeout.current) clearTimeout(timeout.current); };
  }, []);

  if (!item.children) {
    return (
      <Link href={item.href} className="text-white text-[15px] font-normal hover:text-white/80 transition-colors">
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Link
        href={item.href}
        className="flex items-center gap-1 text-white text-[15px] font-normal hover:text-white/80 transition-colors"
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </Link>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
          <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[260px]">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2.5 text-[14px] font-outfit text-text-gray hover:bg-cloud-blue hover:text-navy transition-colors"
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { openModal } = useConsultationModal();

  const toggleMobileSection = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

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
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <DesktopDropdown key={item.href} item={item} />
          ))}
        </nav>

        {/* CTA Button */}
        <button
          onClick={openModal}
          className="hidden lg:flex items-center gap-3 px-5 py-3 rounded-[7px] text-white text-[15px] font-medium capitalize transition-opacity hover:opacity-90"
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
        <div className="lg:hidden bg-navy/95 backdrop-blur-sm border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleMobileSection(item.label)}
                      className="flex items-center justify-between w-full text-white text-[16px] font-normal py-3 border-b border-white/10"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pl-4 pb-2">
                        <Link
                          href={item.href}
                          className="block text-white/70 text-[14px] py-2 border-b border-white/5"
                          onClick={() => setMobileOpen(false)}
                        >
                          View All →
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block text-white/70 text-[14px] py-2 border-b border-white/5"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-white text-[16px] font-normal py-3 border-b border-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                openModal();
              }}
              className="flex items-center justify-center gap-3 px-5 py-3 rounded-[7px] text-white text-[16px] font-medium mt-4"
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
