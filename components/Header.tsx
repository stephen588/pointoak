"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useConsultationModal } from "./ConsultationModalProvider";

type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

// Darsh's final navigation (developer handoff 2026-10-04).
const NAV: NavItem[] = [
  {
    label: "About",
    href: "/about/",
    children: [
      { label: "About PointOak", href: "/about/" },
      { label: "Why PointOak", href: "/why-point-oak/" },
    ],
  },
  {
    label: "Wealth Management",
    href: "/services/wealth-management/",
    children: [
      { label: "Wealth Management Overview", href: "/services/wealth-management/" },
      { label: "Investment Management", href: "/services/investment-management/" },
      { label: "Comprehensive Financial Planning", href: "/services/comprehensive-financial-planning/" },
      { label: "401(k) Rollovers & Roth Conversions", href: "/services/401k-rollovers-roth-conversions/" },
      { label: "Retirement Income Planning", href: "/services/retirement-income-planning/" },
      { label: "Tax-Aware Wealth Strategies", href: "/services/tax-aware-wealth-strategies/" },
      { label: "Executive Benefits Planning", href: "/services/executive-benefits-planning/" },
      { label: "Social Security & Pension Planning", href: "/services/social-security-pension-planning/" },
      { label: "Estate Planning Coordination", href: "/services/estate-planning-coordination/" },
    ],
  },
  {
    label: "Retirement Plans",
    href: "/corporate-retirement-plans/",
    children: [
      { label: "Retirement Plan Consulting Overview", href: "/corporate-retirement-plans/" },
      { label: "Participant Education & Communication", href: "/corporate-retirement-plans/participant-education-communication/" },
      { label: "Fiduciary Governance & Committee Support", href: "/corporate-retirement-plans/fiduciary-governance/" },
      { label: "401(k) Evaluation & Benchmarking", href: "/corporate-retirement-plans/evaluation-benchmarking/" },
      { label: "Investment Analysis & Monitoring", href: "/corporate-retirement-plans/investment-analysis-monitoring/" },
      { label: "Target Date Fund Consulting", href: "/corporate-retirement-plans/tdf-consulting/" },
      { label: "Plan Design", href: "/corporate-retirement-plans/plan-design/" },
    ],
  },
  {
    label: "Resources",
    href: "/resources/",
    children: [
      { label: "Insights & Resources", href: "/resources/" },
      { label: "Frequently Asked Questions", href: "/faq/" },
    ],
  },
  { label: "Contact", href: "/contact/" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const { openModal } = useConsultationModal();

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1170px] px-6 xl:px-0 flex items-center justify-between h-[78px]">
        <Link href="/" className="flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/pointoak-logo.png" alt="PointOak Retirement Advisors" className="h-[56px] w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-white text-[16px] font-normal hover:text-white/80 transition-colors py-6"
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 opacity-70" />
                </Link>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 top-full pt-1">
                  <ul className="min-w-[300px] rounded-[7px] bg-white shadow-xl shadow-navy/20 py-3">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block px-5 py-2.5 text-navy text-[15px] hover:bg-cloud-blue transition-colors">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="text-white text-[16px] font-normal hover:text-white/80 transition-colors">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <button
          onClick={openModal}
          className="hidden lg:flex items-center gap-3 px-5 py-3 rounded-[7px] text-white text-[16px] font-medium transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}
        >
          Schedule a Consultation
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </button>

        <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy/95 backdrop-blur-sm border-t border-white/10 max-h-[calc(100vh-78px)] overflow-y-auto">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-white/10">
                  <button
                    className="w-full flex items-center justify-between text-white text-[16px] py-3"
                    onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                    aria-expanded={openGroup === item.label}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openGroup === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {openGroup === item.label && (
                    <ul className="pb-3 pl-3">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block text-white/80 text-[15px] py-2" onClick={() => setMobileOpen(false)}>
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white text-[16px] py-3 border-b border-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <button
              onClick={() => {
                setMobileOpen(false);
                openModal();
              }}
              className="flex items-center justify-center gap-3 px-5 py-3 rounded-[7px] text-white text-[16px] font-medium mt-4"
              style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}
            >
              Schedule a Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
