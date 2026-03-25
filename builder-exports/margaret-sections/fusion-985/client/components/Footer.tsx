import { Link } from "react-router-dom";

const mainLinks = ["About Us", "Our Services", "Contact", "FAQ"];

const resources = [
  "Retirement Income Planning Guide",
  "Social Security Claiming Strategies",
  "401(k) Rollover Guide",
  "Tax-Efficient Investing Strategies",
  "Independent RIA vs Wirehouse",
  "DC Metro Retirement Planning",
  "Blog",
];

const corporatePlans = [
  "Fiduciary Support",
  "Provider & Fee Benchmarking",
  "Investment Analysis",
  "Target Date Fund Consulting",
  "Plan Design",
  "Education & Communications",
];

const utility = [
  "Privacy Policy",
  "Terms of Use",
  "Important Disclosures",
  "Form ADV & CRS",
  "Accessibility",
  "Sitemap",
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark">
      {/* Main footer content */}
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0 py-16">
        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">
          {/* Main Links */}
          <div className="flex flex-col gap-8">
            <h3 className="font-brand text-white text-xl font-medium">Main Links</h3>
            <ul className="flex flex-col gap-0">
              {mainLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={link === "About Us" ? "/about" : link === "Our Services" ? "/services" : link === "FAQ" ? "#faq" : "#contact"}
                    className="font-brand text-white/80 hover:text-white text-sm transition-colors block py-[8px] leading-[35px]"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-8">
            <h3 className="font-brand text-white text-xl font-medium">Resources</h3>
            <ul className="flex flex-col gap-0">
              {resources.map((item) => (
                <li key={item}>
                  <Link
                    to="/resources"
                    className="font-brand text-white/80 hover:text-white text-sm transition-colors block py-[4px] leading-[35px]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Retirement Plans */}
          <div className="flex flex-col gap-8">
            <h3 className="font-brand text-white text-xl font-medium leading-[30px] w-[184px]">
              Corporate Retirement Plans
            </h3>
            <ul className="flex flex-col gap-0">
              {corporatePlans.map((item) => (
                <li key={item}>
                  <Link
                    to="/corporate"
                    className="font-brand text-white/80 hover:text-white text-sm transition-colors block py-[4px] leading-[35px]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility */}
          <div className="flex flex-col gap-8">
            <h3 className="font-brand text-white text-xl font-medium">Utility</h3>
            <ul className="flex flex-col gap-0">
              {utility.map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="font-brand text-white/80 hover:text-white text-sm transition-colors block py-[4px] leading-[35px]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col gap-8">
            <h3 className="font-brand text-white text-xl font-medium">Get In Touch</h3>
            <div className="flex flex-col gap-7">
              {/* Address */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z" fill="white"/>
                    <path d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z" fill="white"/>
                  </svg>
                  <span className="font-brand text-white text-base">Address</span>
                </div>
                <p className="font-brand text-white/80 text-sm leading-5">
                  PointOak Retirement Advisors, LLC<br />
                  1751 Pinnacle Drive, Suite 600<br />
                  McLean, VA 22102
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 3H3C2.175 3 1.5075 3.675 1.5075 4.5L1.5 13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V4.5C16.5 3.675 15.825 3 15 3ZM15 13.5H3V6L9 9.75L15 6V13.5ZM9 8.25L3 4.5H15L9 8.25Z" fill="white"/>
                  </svg>
                  <span className="font-brand text-white text-base">Phone</span>
                </div>
                <p className="font-brand text-white/80 text-sm">(703) 595-4444</p>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.905 3.75C4.95 4.4175 5.0625 5.07 5.2425 5.6925L4.3425 6.5925C4.035 5.6925 3.84 4.74 3.7725 3.75H4.905ZM12.3 12.765C12.9375 12.945 13.59 13.0575 14.25 13.1025V14.22C13.26 14.1525 12.3075 13.9575 11.4 13.6575L12.3 12.765ZM5.625 2.25H3C2.5875 2.25 2.25 2.5875 2.25 3C2.25 10.0425 7.9575 15.75 15 15.75C15.4125 15.75 15.75 15.4125 15.75 15V12.3825C15.75 11.97 15.4125 11.6325 15 11.6325C14.07 11.6325 13.1625 11.4825 12.3225 11.205C12.2475 11.175 12.165 11.1675 12.09 11.1675C11.895 11.1675 11.7075 11.2425 11.5575 11.385L9.9075 13.035C7.785 11.9475 6.045 10.215 4.965 8.0925L6.615 6.4425C6.825 6.2325 6.885 5.94 6.8025 5.6775C6.525 4.8375 6.375 3.9375 6.375 3C6.375 2.5875 6.0375 2.25 5.625 2.25Z" fill="white"/>
                  </svg>
                  <span className="font-brand text-white text-base">Email</span>
                </div>
                <p className="font-brand text-white/80 text-sm">info@pointoak.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Important Disclosures */}
        <div className="bg-brand-blue rounded-[30px] p-8 md:p-10 mb-8">
          <div className="max-w-[1095px]">
            <h4 className="font-brand text-white text-xl font-bold mb-4">Important Disclosures</h4>
            <div className="font-brand text-white/85 text-sm leading-relaxed space-y-4">
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
                Check the background of this investment professional on FINRA's BrokerCheck:{" "}
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
        <div className="border-t border-white/20 mb-8"></div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-brand text-white text-sm">
            © 2026 PointOak Retirement Advisors, LLC. All Rights Reserved.
          </p>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B2B2B2] hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
