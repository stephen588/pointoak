import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { ArrowRight, TrendingUp, DollarSign, Shield, PiggyBank, Building2, MapPin } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Resources & Guides | PointOak Retirement Advisors",
  description: "Free retirement planning guides and resources. Social Security strategies, 401(k) rollovers, tax-efficient investing, and more from PointOak Retirement Advisors.",
  alternates: {
    canonical: "https://www.pointoak.com/resources/"
  }
};

const resources = [
  {
    title: "Retirement Income Planning Guide",
    description: "Develop a sustainable withdrawal strategy that balances income needs with long-term portfolio growth, tax efficiency, and inflation protection throughout retirement.",
    href: "/resources/retirement-income-planning-guide/",
    icon: TrendingUp,
    keywords: "Withdrawal strategies, income planning, portfolio longevity",
  },
  {
    title: "Social Security Claiming Strategies",
    description: "Maximize your lifetime Social Security benefits with strategic claiming decisions. Understand spousal benefits, survivor benefits, and optimal timing for your situation.",
    href: "/resources/social-security-claiming-strategies/",
    icon: Shield,
    keywords: "Claiming age, spousal benefits, benefit maximization",
  },
  {
    title: "401(k) Rollover Guide",
    description: "Navigate job transitions and retirement account consolidation with confidence. Learn the tax implications, rollover options, and common mistakes to avoid.",
    href: "/resources/401k-rollover-guide/",
    icon: PiggyBank,
    keywords: "IRA rollovers, account consolidation, tax considerations",
  },
  {
    title: "Tax-Efficient Investing Strategies",
    description: "Minimize your lifetime tax burden through strategic asset location, tax-loss harvesting, Roth conversions, and coordinated withdrawal planning.",
    href: "/resources/tax-efficient-investing-strategies/",
    icon: DollarSign,
    keywords: "Tax-loss harvesting, asset location, Roth conversions",
  },
  {
    title: "Independent RIA vs Wirehouse",
    description: "Understand the difference between independent Registered Investment Advisors and traditional wirehouses. Learn which model aligns best with your financial planning needs.",
    href: "/resources/independent-ria-vs-wirehouse/",
    icon: Building2,
    keywords: "Fiduciary standard, advisor selection, fee structures",
  },
  {
    title: "DC Metro Retirement Planning",
    description: "Specialized retirement planning for federal employees, government contractors, and private sector professionals in the Washington DC metropolitan area.",
    href: "/resources/dc-metro-retirement-planning/",
    icon: MapPin,
    keywords: "Federal benefits, TSP, DC area planning",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Resources" }]}
        title="Resources & Guides"
        subtitle="Free guides and insights to help you make informed decisions about retirement planning, investments, and wealth management."
      />

      {/* Intro */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="max-w-3xl">
            <h2 className="text-navy font-outfit text-2xl md:text-3xl font-light leading-tight mb-6">
              Knowledge That Empowers Better Decisions
            </h2>
            <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
              Retirement planning doesn&apos;t have to be overwhelming. Our resource library is designed to give you clear, actionable insights on the topics that matter most to your financial future.
            </p>
            <p className="text-text-gray font-outfit text-base leading-relaxed">
              Whether you&apos;re exploring Social Security claiming strategies, evaluating a 401(k) rollover, or building a tax-efficient investment plan, these guides provide the foundation you need to move forward with confidence.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Resource Cards Grid */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="bg-white rounded-lg p-8 border border-gray-100 hover:shadow-lg hover:border-navy/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-cloud-blue flex items-center justify-center flex-shrink-0 group-hover:bg-navy/10 transition-colors">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-navy font-outfit text-xl font-medium mb-3 group-hover:text-navy/80 transition-colors flex items-center gap-2">
                        {resource.title}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-text-gray font-outfit text-sm leading-relaxed mb-3">
                        {resource.description}
                      </p>
                      <p className="text-medium-gray font-outfit text-xs">
                        {resource.keywords}
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

      {/* CTA */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 text-center">
          <h2 className="text-navy font-outfit text-2xl md:text-3xl font-light leading-tight mb-6">
            Have Questions About Your Specific Situation?
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed max-w-2xl mx-auto mb-8">
            These guides provide general information, but every financial situation is unique. If you&apos;d like personalized guidance tailored to your goals and circumstances, we&apos;re here to help.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Disclaimer */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-6">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-medium-gray font-outfit text-xs leading-relaxed">
            Investment advisory services offered through PointOak Retirement Advisors, LLC. This site is published for residents of the United States only. PointOak Retirement Advisors, LLC does not provide tax or legal advice.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <CTASection />
      <Footer />
    </main>
  );
}
