import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-700 tracking-wide text-navy font-outfit" style={{ color: "#003754", fontWeight: 700, letterSpacing: "0.05em" }}>
                MERIDIAN
              </span>
              <span className="text-xs tracking-widest uppercase font-outfit" style={{ color: "#016BA4", letterSpacing: "0.2em", fontSize: "9px", fontWeight: 500 }}>
                WEALTH ADVISORS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#who-we-serve">Who We Serve</NavLink>
            <NavLink href="#life-stages">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded font-outfit font-500 text-sm tracking-wide transition-colors"
              style={{ backgroundColor: "#016BA4", color: "#fff", fontWeight: 500 }}
            >
              Schedule a Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5" style={{ color: "#003754" }}>
              <span className={`block h-0.5 w-6 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-4">
            <MobileNavLink href="#who-we-serve" onClick={() => setMobileOpen(false)}>Who We Serve</MobileNavLink>
            <MobileNavLink href="#life-stages" onClick={() => setMobileOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setMobileOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setMobileOpen(false)}>Contact</MobileNavLink>
            <a
              href="#contact"
              className="mt-2 px-6 py-2.5 rounded font-outfit text-sm font-medium text-center"
              style={{ backgroundColor: "#016BA4", color: "#fff" }}
              onClick={() => setMobileOpen(false)}
            >
              Schedule a Consultation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="font-outfit text-sm font-medium transition-colors hover:opacity-70"
      style={{ color: "#003754", fontWeight: 500 }}
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <a
      href={href}
      className="font-outfit text-sm font-medium py-1"
      style={{ color: "#003754", fontWeight: 500 }}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
