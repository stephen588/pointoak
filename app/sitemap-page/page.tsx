import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | PointOak Retirement Advisors",
  description: "Complete sitemap for PointOak Retirement Advisors. Find all pages including services, corporate retirement plans, resources, and more.",
  alternates: {
    canonical: "https://www.pointoak.com/sitemap-page/"
  }
};

const sitemapSections = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About PointOak", href: "/about" },
      { label: "Our Process", href: "/our-process" },
      { label: "Who We Serve", href: "/who-we-serve" },
      { label: "Why Point Oak", href: "/why-point-oak" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Individual Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Retirement Income Planning", href: "/services/retirement-income-planning" },
      { label: "Investment Management", href: "/services/investment-management" },
      { label: "Tax-Efficient Wealth Strategies", href: "/services/tax-efficient-wealth-strategies" },
      { label: "Social Security & Pension Optimization", href: "/services/social-security-pension-optimization" },
      { label: "401(k) Rollovers & Roth Conversions", href: "/services/401k-rollovers-roth-conversions" },
      { label: "Comprehensive Financial Planning", href: "/services/comprehensive-financial-planning" },
      { label: "Estate Planning Coordination", href: "/services/estate-planning-coordination" },
      { label: "Corporate Executive Benefits", href: "/services/corporate-executive-benefits" },
    ],
  },
  {
    title: "Corporate Retirement Plans",
    links: [
      { label: "All Corporate Services", href: "/corporate-retirement-plans" },
      { label: "Fiduciary Support", href: "/corporate-retirement-plans/fiduciary-support" },
      { label: "Provider & Fee Benchmarking", href: "/corporate-retirement-plans/provider-fee-benchmarking" },
      { label: "Investment Analysis", href: "/corporate-retirement-plans/investment-analysis" },
      { label: "Target Date Fund Consulting", href: "/corporate-retirement-plans/tdf-consulting" },
      { label: "Plan Design", href: "/corporate-retirement-plans/plan-design" },
      { label: "Education & Communications", href: "/corporate-retirement-plans/education-communications" },
    ],
  },
  {
    title: "Fiduciary Support",
    links: [
      { label: "3(21) Fiduciary Services", href: "/corporate-retirement-plans/fiduciary-support/3-21" },
      { label: "3(38) Fiduciary Services", href: "/corporate-retirement-plans/fiduciary-support/3-38" },
      { label: "ERISA Compliance", href: "/corporate-retirement-plans/fiduciary-support/erisa-compliance" },
      { label: "Virtual Fiduciary File", href: "/corporate-retirement-plans/fiduciary-support/virtual-fiduciary-file" },
    ],
  },
  {
    title: "Provider & Fee Benchmarking",
    links: [
      { label: "Fee Benchmarking", href: "/corporate-retirement-plans/provider-fee-benchmarking/fee-benchmarking" },
      { label: "Recordkeeper RFP", href: "/corporate-retirement-plans/provider-fee-benchmarking/recordkeeper-rfp" },
      { label: "Provider Evaluation", href: "/corporate-retirement-plans/provider-fee-benchmarking/provider-evaluation" },
      { label: "Live Bid Process", href: "/corporate-retirement-plans/provider-fee-benchmarking/live-bid" },
    ],
  },
  {
    title: "Investment Analysis",
    links: [
      { label: "Investment Policy Statement", href: "/corporate-retirement-plans/investment-analysis/ips" },
      { label: "Fund Monitoring", href: "/corporate-retirement-plans/investment-analysis/fund-monitoring" },
      { label: "Manager Selection", href: "/corporate-retirement-plans/investment-analysis/manager-selection" },
      { label: "Share Class Analysis", href: "/corporate-retirement-plans/investment-analysis/share-class-analysis" },
    ],
  },
  {
    title: "TDF Consulting",
    links: [
      { label: "TDF Selection", href: "/corporate-retirement-plans/tdf-consulting/tdf-selection" },
      { label: "Glide Path Analysis", href: "/corporate-retirement-plans/tdf-consulting/glide-path" },
      { label: "Custom TDF", href: "/corporate-retirement-plans/tdf-consulting/custom-tdf" },
      { label: "TDF Documentation", href: "/corporate-retirement-plans/tdf-consulting/tdf-documentation" },
    ],
  },
  {
    title: "Plan Design",
    links: [
      { label: "Auto-Enrollment", href: "/corporate-retirement-plans/plan-design/auto-enrollment" },
      { label: "Employer Match", href: "/corporate-retirement-plans/plan-design/employer-match" },
      { label: "Plan Benchmarking", href: "/corporate-retirement-plans/plan-design/benchmarking" },
      { label: "Plan Optimization", href: "/corporate-retirement-plans/plan-design/optimization" },
    ],
  },
  {
    title: "Education & Communications",
    links: [
      { label: "Retirement Education", href: "/corporate-retirement-plans/education-communications/retirement-education" },
      { label: "Financial Wellness", href: "/corporate-retirement-plans/education-communications/financial-wellness" },
      { label: "Participant Support", href: "/corporate-retirement-plans/education-communications/participant-support" },
      { label: "Communications", href: "/corporate-retirement-plans/education-communications/communications" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "All Resources", href: "/resources" },
      { label: "Retirement Income Planning Guide", href: "/resources/retirement-income-planning-guide" },
      { label: "Social Security Claiming Strategies", href: "/resources/social-security-claiming-strategies" },
      { label: "401(k) Rollover Guide", href: "/resources/401k-rollover-guide" },
      { label: "Tax-Efficient Investing Strategies", href: "/resources/tax-efficient-investing-strategies" },
      { label: "Independent RIA vs Wirehouse", href: "/resources/independent-ria-vs-wirehouse" },
      { label: "DC Metro Retirement Planning", href: "/resources/dc-metro-retirement-planning" },
    ],
  },
  {
    title: "Legal & Utility",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Important Disclosures", href: "/disclosures" },
      { label: "Form ADV & CRS", href: "/form-adv-crs" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Client Login", href: "/client-login" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Sitemap" }]}
        title="Sitemap"
        subtitle="Find every page on the PointOak Retirement Advisors website."
      />

      {/* Sitemap Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {sitemapSections.map((section, idx) => (
              <div key={idx}>
                <h2 className="font-outfit text-navy text-lg font-bold mb-4 pb-2 border-b border-border-gray">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="font-outfit text-text-gray text-sm hover:text-bright-blue transition-colors"
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
      </section>

      <Footer />
    </main>
  );
}
