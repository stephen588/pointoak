import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Corporate Plans", href: "/corporate" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-2">
              <svg width="36" height="36" viewBox="0 0 385 444" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M148.333 418.128L149.167 375.981L191.667 400.602L346.25 312.135L347.083 133.951L193.75 43.8158L38.75 132.282L37.9167 310.466L57.5 322.985L56.6667 365.132L0 332.583L0.833333 110.165L193.75 0L385 111.835L384.167 333.835L192.5 444L148.333 418.128Z" fill="#08B0EF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M84.1602 284.177V158.571L193.327 96.3947L302.077 160.241L300.827 285.846L192.494 347.605L84.1602 284.177ZM122.077 180.271V262.06L191.66 303.789L262.91 263.729L263.744 181.523L192.494 139.376L122.077 180.271Z" fill="white"/>
              </svg>
              <div>
                <div className="font-brand text-white text-lg font-semibold leading-tight">PointOak</div>
                <div className="font-brand text-brand-accent text-[10px] font-medium tracking-widest uppercase leading-tight">Retirement Advisors</div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-brand text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-brand text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="font-brand text-sm font-medium text-white border border-white/40 hover:border-white px-5 py-2.5 rounded-md transition-all duration-200 hover:bg-white/10 flex items-center gap-2"
            >
              Schedule Consultation
              <svg width="14" height="10" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1496 0.139911L15.3706 5.36096C15.4615 5.45187 15.5125 5.57516 15.5125 5.70372C15.5125 5.83228 15.4615 5.95557 15.3706 6.04648L10.1496 11.2675C10.0585 11.3575 9.93546 11.4078 9.8074 11.4074C9.67934 11.407 9.55664 11.356 9.46609 11.2655C9.37554 11.1749 9.32449 11.0522 9.3241 10.9241C9.32371 10.7961 9.37401 10.6731 9.46401 10.582L13.8575 6.18849L0.484769 6.18849C0.3562 6.18849 0.232897 6.13741 0.141986 6.0465C0.0510739 5.95559 0 5.83229 0 5.70372C0 5.57515 0.0510739 5.45185 0.141986 5.36094C0.232897 5.27002 0.3562 5.21895 0.484769 5.21895L13.8575 5.21895L9.46401 0.825464C9.37401 0.734365 9.32371 0.611355 9.3241 0.483298C9.32449 0.355239 9.37554 0.232537 9.46609 0.141985C9.55664 0.0514338 9.67934 0.000390308 9.8074 2.15673e-06C9.93546 -0.000386948 10.0585 0.0499108 10.1496 0.139911Z" fill="white"/>
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 pb-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-brand text-white/80 hover:text-white text-sm font-medium px-2 py-3 border-b border-white/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="font-brand text-white/80 hover:text-white text-sm font-medium px-2 py-3 border-b border-white/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href="#contact"
                className="mt-4 font-brand text-sm font-medium text-white border border-white/40 px-5 py-3 rounded-md text-center"
                onClick={() => setMobileOpen(false)}
              >
                Schedule Consultation
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
