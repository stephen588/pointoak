import Link from "next/link";

const footerColumns = [
  {
    title: "For Individuals",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Retirement Income Planning", href: "/services/retirement-income-planning" },
      { label: "Investment Management", href: "/services/investment-management" },
      { label: "Tax-Efficient Wealth Strategies", href: "/services/tax-efficient-wealth-strategies" },
      { label: "Social Security & Pension", href: "/services/social-security-pension-optimization" },
      { label: "401(k) Rollovers & Roth", href: "/services/401k-rollovers-roth-conversions" },
      { label: "Financial Planning", href: "/services/comprehensive-financial-planning" },
      { label: "Estate Planning", href: "/services/estate-planning-coordination" },
      { label: "Executive Benefits", href: "/services/corporate-executive-benefits" },
    ],
  },
  {
    title: "For Businesses",
    links: [
      { label: "Corporate Plans", href: "/corporate-retirement-plans" },
      { label: "Fiduciary Support", href: "/corporate-retirement-plans/fiduciary-support" },
      { label: "Fee Benchmarking", href: "/corporate-retirement-plans/provider-fee-benchmarking" },
      { label: "Investment Analysis", href: "/corporate-retirement-plans/investment-analysis" },
      { label: "TDF Consulting", href: "/corporate-retirement-plans/tdf-consulting" },
      { label: "Plan Design", href: "/corporate-retirement-plans/plan-design" },
      { label: "Education & Comms", href: "/corporate-retirement-plans/education-communications" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "All Resources", href: "/resources" },
      { label: "Retirement Income Guide", href: "/resources/retirement-income-planning-guide" },
      { label: "Social Security Strategies", href: "/resources/social-security-claiming-strategies" },
      { label: "401(k) Rollover Guide", href: "/resources/401k-rollover-guide" },
      { label: "Tax-Efficient Investing", href: "/resources/tax-efficient-investing-strategies" },
      { label: "RIA vs Wirehouse", href: "/resources/independent-ria-vs-wirehouse" },
      { label: "DC Metro Planning", href: "/resources/dc-metro-retirement-planning" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About PointOak", href: "/about" },
      { label: "Our Process", href: "/our-process" },
      { label: "Who We Serve", href: "/who-we-serve" },
      { label: "Why Point Oak", href: "/why-point-oak" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Client Login", href: "/client-login" },
    ],
  },
];

const utilityLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Disclosures", href: "/disclosures" },
  { label: "Form ADV & CRS", href: "/form-adv-crs" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap-page" },
];

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0 py-12 md:py-16">

        {/* Top Section — Logo + Contact + Link Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-10 md:mb-12">

          {/* Left — Logo + tagline + contact */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/pointoak-logo.png"
              alt="PointOak Retirement Advisors"
              className="h-[48px] w-auto self-start"
            />
            <p className="font-outfit text-white/60 text-sm leading-relaxed max-w-[280px]">
              Independent, fee-only fiduciary wealth management for high-net-worth individuals and families.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 mt-2">
              <a
                href="https://maps.google.com/?q=1751+Pinnacle+Drive+Suite+600+McLean+VA+22102"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 font-outfit text-white/70 text-sm leading-5 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z" fill="white"/>
                  <path d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z" fill="white"/>
                </svg>
                1751 Pinnacle Drive, Suite 600<br />McLean, VA 22102
              </a>
              <a href="tel:+17035954444" className="flex items-center gap-2 font-outfit text-white/70 text-sm hover:text-white transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.905 3.75C4.95 4.4175 5.0625 5.07 5.2425 5.6925L4.3425 6.5925C4.035 5.6925 3.84 4.74 3.7725 3.75H4.905ZM12.3 12.765C12.9375 12.945 13.59 13.0575 14.25 13.1025V14.22C13.26 14.1525 12.3075 13.9575 11.4 13.6575L12.3 12.765ZM5.625 2.25H3C2.5875 2.25 2.25 2.5875 2.25 3C2.25 10.0425 7.9575 15.75 15 15.75C15.4125 15.75 15.75 15.4125 15.75 15V12.3825C15.75 11.97 15.4125 11.6325 15 11.6325C14.07 11.6325 13.1625 11.4825 12.3225 11.205C12.2475 11.175 12.165 11.1675 12.09 11.1675C11.895 11.1675 11.7075 11.2425 11.5575 11.385L9.9075 13.035C7.785 11.9475 6.045 10.215 4.965 8.0925L6.615 6.4425C6.825 6.2325 6.885 5.94 6.8025 5.6775C6.525 4.8375 6.375 3.9375 6.375 3C6.375 2.5875 6.0375 2.25 5.625 2.25Z" fill="white"/>
                </svg>
                (703) 595-4444
              </a>
              <a href="mailto:info@pointoak.com" className="flex items-center gap-2 font-outfit text-white/70 text-sm hover:text-white transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 3H3C2.175 3 1.5075 3.675 1.5075 4.5L1.5 13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V4.5C16.5 3.675 15.825 3 15 3ZM15 13.5H3V6L9 9.75L15 6V13.5ZM9 8.25L3 4.5H15L9 8.25Z" fill="white"/>
                </svg>
                info@pointoak.com
              </a>
            </div>
          </div>

          {/* Right — Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6">
            {footerColumns.map((column, idx) => (
              <div key={idx}>
                <h3 className="font-outfit text-white text-sm font-bold uppercase tracking-wider mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-2.5">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="font-outfit text-white/60 text-[13px] hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-6 md:mb-8"></div>

        {/* Important Disclosures */}
        <div className="bg-medium-blue rounded-[30px] p-6 md:p-10 mb-6 md:mb-8">
          <div className="max-w-[1095px]">
            <h4 className="font-outfit text-white text-lg md:text-xl font-bold mb-3 md:mb-4">Important Disclosures</h4>
            <div className="font-outfit text-white/85 text-xs md:text-sm leading-relaxed space-y-3 md:space-y-4">
              <p>
                Investment advisory services offered through PointOak Retirement Advisors, LLC, an
                SEC-registered investment advisor. This site is published for residents of the United
                States only. Not all of the products and services referenced on this site are
                available in every state and through every representative or advisor listed.
              </p>
              <p>
                <span className="font-semibold text-white">
                  PointOak Retirement Advisors, LLC does not provide tax or legal advice.
                </span>{" "}
                PointOak coordinates with your tax and legal professionals but does not provide tax
                preparation, tax advice, or legal services. We recommend you consult with qualified
                tax and legal advisors for specific guidance related to your situation.
              </p>
              <p>
                For questions about our regulatory status or to report concerns, contact us at (703)
                595-4444 or info@pointoak.com.
              </p>
              <p className="font-bold text-white">
                Check the background of this investment professional on FINRA&apos;s BrokerCheck:{" "}
                <a
                  href="https://brokercheck.finra.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white/80 transition-colors"
                >
                  brokercheck.finra.org
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-6 md:mb-8"></div>

        {/* Bottom bar — Utility Links + Copyright + Social */}
        <div className="flex flex-col gap-4">
          {/* Utility Links Row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
            {utilityLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="font-outfit text-white/50 text-xs hover:text-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright + LinkedIn */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-outfit text-white/50 text-xs">
              &copy; 2026 PointOak Retirement Advisors, LLC. All Rights Reserved.
            </p>
            <a
              href="https://www.linkedin.com/company/pointoak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
