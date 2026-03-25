import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { ArrowRight, TrendingUp, Shield, DollarSign, Users, Briefcase, FileText, Building2, Award } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Financial Planning Services for Individuals & Families | PointOak Advisors",
  description: "Comprehensive wealth management and financial planning services for individuals and families. Retirement income planning, investment management, tax strategies, estate planning, and more.",
  openGraph: {
    title: "Financial Planning Services | PointOak Advisors",
    description: "Personalized financial planning and wealth management services from PointOak Retirement Advisors.",
    url: "https://www.pointoak.com/services/",
  },
};

const services = [
  {
    title: "Retirement Income Planning",
    description: "Develop a sustainable withdrawal strategy that balances income needs with long-term portfolio growth, tax efficiency, and inflation protection.",
    href: "/services/retirement-income-planning/",
    icon: TrendingUp,
    keywords: "Social Security timing, withdrawal strategies, RMD planning",
  },
  {
    title: "Investment Management",
    description: "Disciplined, research-driven portfolio management aligned with your goals, risk tolerance, and time horizon. We build and monitor your portfolio with a fiduciary standard.",
    href: "/services/investment-management/",
    icon: Award,
    keywords: "Portfolio construction, asset allocation, risk management",
  },
  {
    title: "401(k) Rollovers & Roth Conversions",
    description: "Navigate job transitions and retirement account consolidation with tax-smart rollover strategies and multi-year Roth conversion planning.",
    href: "/services/401k-rollovers-roth-conversions/",
    icon: FileText,
    keywords: "IRA rollovers, Roth conversion laddering, account consolidation",
  },
  {
    title: "Tax-Efficient Wealth Strategies",
    description: "Minimize your lifetime tax burden through strategic asset location, tax-loss harvesting, Roth conversions, and coordinated withdrawal planning.",
    href: "/services/tax-efficient-wealth-strategies/",
    icon: DollarSign,
    keywords: "Tax-loss harvesting, Roth conversions, asset location",
  },
  {
    title: "Comprehensive Financial Planning",
    description: "A holistic approach that integrates investments, taxes, insurance, estate planning, and retirement projections into a single coordinated strategy.",
    href: "/services/comprehensive-financial-planning/",
    icon: Users,
    keywords: "Holistic planning, goal-based strategies, life transitions",
  },
  {
    title: "Social Security & Pension Optimization",
    description: "Maximize your lifetime benefits with claiming strategy analysis, pension vs. lump sum evaluation, and coordination with your broader retirement income plan.",
    href: "/services/social-security-pension-optimization/",
    icon: Shield,
    keywords: "Claiming strategies, pension analysis, benefit maximization",
  },
  {
    title: "Estate Planning Coordination",
    description: "Coordinate with your legal and tax advisors to ensure your wealth transfer strategy reflects your wishes and minimizes estate taxes.",
    href: "/services/estate-planning-coordination/",
    icon: Briefcase,
    keywords: "Wealth transfer, trust coordination, beneficiary planning",
  },
  {
    title: "Corporate Executive Benefits",
    description: "Specialized planning for RSUs, stock options, deferred compensation, and other executive benefits. We help you make the most of complex compensation packages.",
    href: "/services/corporate-executive-benefits/",
    icon: Building2,
    keywords: "RSU planning, stock options, equity compensation, deferred comp",
  },
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Financial Planning Services for Individuals & Families",
    description: "Comprehensive wealth management and financial planning services from PointOak Retirement Advisors.",
    url: "https://www.pointoak.com/services/",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `https://www.pointoak.com${s.href}`,
      })),
    },
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        breadcrumbs={[{ label: "For Individuals & Families" }]}
        title="Financial Planning Services for Individuals & Families"
        subtitle="Personalized strategies to grow, protect, and sustain your wealth through every stage of life."
      />

      {/* Intro */}
      <AnimateOnScroll>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="max-w-3xl">
            <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-6">
              Your Financial Life, Simplified
            </h2>
            <p className="font-outfit text-dark-gray text-base leading-relaxed mb-4">
              Managing wealth isn&apos;t just about investments — it&apos;s about making every financial decision work together. At PointOak, we bring clarity to complexity by coordinating your retirement planning, tax strategy, estate goals, and investment management under one roof.
            </p>
            <p className="font-outfit text-dark-gray text-base leading-relaxed">
              Whether you&apos;re approaching retirement, navigating a career transition, or building long-term wealth, our team of specialists creates a plan that&apos;s built around your life — not a template.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Service Cards Grid */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-10 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="bg-white rounded-lg p-8 border border-gray-100 hover:shadow-lg hover:border-navy/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-cloud-blue flex items-center justify-center flex-shrink-0 group-hover:bg-navy/10 transition-colors">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-outfit text-navy text-xl font-medium mb-3 group-hover:text-navy/80 transition-colors flex items-center gap-2">
                        {service.title}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="font-outfit text-dark-gray text-sm leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <p className="font-outfit text-medium-gray text-xs">
                        {service.keywords}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Why PointOak */}
      <AnimateOnScroll>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 text-center">
          <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-6">
            Why Choose PointOak?
          </h2>
          <p className="font-outfit text-dark-gray text-base leading-relaxed max-w-2xl mx-auto mb-10">
            We&apos;re independent fiduciary advisors focused on retirement and wealth planning. With fewer than 100 clients per partner, we deliver personalized attention backed by deep expertise in retirement income strategies, tax efficiency, and coordinated financial planning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cloud-blue rounded-lg p-8">
              <div className="font-outfit text-navy text-3xl font-bold mb-2">$1.08B</div>
              <div className="font-outfit text-dark-gray text-sm">Assets Under Management</div>
            </div>
            <div className="bg-cloud-blue rounded-lg p-8">
              <div className="font-outfit text-navy text-3xl font-bold mb-2">50+ Years</div>
              <div className="font-outfit text-dark-gray text-sm">Collective advisory experience</div>
            </div>
            <div className="bg-cloud-blue rounded-lg p-8">
              <div className="font-outfit text-navy text-3xl font-bold mb-2">Fee-Only Fiduciary</div>
              <div className="font-outfit text-dark-gray text-sm">Independent. No conflicts. No proprietary products.</div>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Disclaimer */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-6">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="font-outfit text-medium-gray text-xs leading-relaxed">
            Investment advisory services offered through PointOak Retirement Advisors, LLC. This site is published for residents of the United States only.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <CTASection />
      <Footer />
    </>
  );
}
