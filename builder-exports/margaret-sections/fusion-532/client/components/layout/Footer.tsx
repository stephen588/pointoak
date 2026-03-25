export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      {/* CTA Band */}
      <div id="contact" className="border-b border-white/10 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-outfit text-white/50 text-sm font-medium tracking-widest uppercase mb-4">
                Get Started
              </p>
              <h2 className="font-outfit text-white text-4xl lg:text-5xl font-light leading-tight mb-6">
                Ready to build a plan that works for you?
              </h2>
              <p className="font-outfit text-white/60 text-lg leading-relaxed max-w-lg">
                Schedule a complimentary discovery call. No obligation, no
                pressure — just clarity about your financial future.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a
                href="mailto:hello@meridianwealth.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-outfit font-medium text-sm px-8 py-4 rounded-sm hover:bg-white/90 transition-colors duration-200"
              >
                Schedule a Free Call
              </a>
              <a
                href="tel:+18005551234"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-outfit font-medium text-sm px-8 py-4 rounded-sm hover:bg-white/10 transition-colors duration-200"
              >
                Call Us: (800) 555-1234
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-sm bg-white/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1L16 5.5V12.5L9 17L2 12.5V5.5L9 1Z" stroke="white" strokeWidth="1.5" fill="none" />
                    <circle cx="9" cy="9" r="2.5" fill="white" />
                  </svg>
                </div>
                <span className="font-outfit font-semibold text-white text-base tracking-tight">
                  Meridian Wealth
                </span>
              </div>
              <p className="font-outfit text-white/50 text-sm leading-relaxed">
                Integrated financial guidance tailored to your specific
                situation.
              </p>
            </div>

            {/* Services */}
            <div>
              <p className="font-outfit text-white text-sm font-medium mb-4">
                Services
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Retirement Planning",
                  "Investment Management",
                  "Tax Strategies",
                  "401(k) Rollover",
                  "Social Security",
                  "Financial Planning",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="font-outfit text-white/50 text-sm hover:text-white/80 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="font-outfit text-white text-sm font-medium mb-4">
                Company
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Our Process", href: "#process" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-outfit text-white/50 text-sm hover:text-white/80 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="font-outfit text-white text-sm font-medium mb-4">
                Contact
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="mailto:hello@meridianwealth.com"
                    className="font-outfit text-white/50 text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    hello@meridianwealth.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+18005551234"
                    className="font-outfit text-white/50 text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    (800) 555-1234
                  </a>
                </li>
                <li className="font-outfit text-white/50 text-sm">
                  123 Financial Drive
                  <br />
                  Suite 400
                  <br />
                  New York, NY 10001
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-outfit text-white/30 text-xs">
              &copy; {currentYear} Meridian Wealth. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Disclosures"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="font-outfit text-white/30 text-xs hover:text-white/60 transition-colors duration-200"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          <p className="mt-6 font-outfit text-white/20 text-xs leading-relaxed max-w-2xl">
            Investment advisory services offered through Meridian Wealth
            Advisors, LLC, a registered investment adviser. Past performance is
            not indicative of future results. All investing involves risk.
          </p>
        </div>
      </div>
    </footer>
  );
}
