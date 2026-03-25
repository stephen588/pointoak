import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, DollarSign, TrendingUp, Target, Settings, Users } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Corporate Retirement Plan Consulting | PointOak",
  description: "Comprehensive retirement plan consulting for plan sponsors nationwide. Fiduciary support, fee benchmarking, investment analysis, plan design, and participant education.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/"
  }
};

const services = [
  {
    title: "Fiduciary Support",
    description: "Named fiduciary services under ERISA as your 3(21) co-fiduciary or 3(38) investment manager. We share the legal responsibility and help protect you from liability.",
    href: "/corporate-retirement-plans/fiduciary-support/",
    icon: Shield,
    keywords: "3(21), 3(38), ERISA compliance, liability protection",
  },
  {
    title: "Provider & Fee Benchmarking",
    description: "Over 10,000 benchmarks per year using your actual plan data. We review 450+ data points per bidder to ensure you&apos;re getting competitive pricing and quality service.",
    href: "/corporate-retirement-plans/provider-fee-benchmarking/",
    icon: DollarSign,
    keywords: "Live Bid process, fee analysis, provider evaluation",
  },
  {
    title: "Investment Analysis",
    description: "Institutional-grade investment monitoring evaluating $120B+ in plan assets quarterly. Our proprietary 10-point scoring system delivers clear, actionable recommendations.",
    href: "/corporate-retirement-plans/investment-analysis/",
    icon: TrendingUp,
    keywords: "Fund evaluation, performance monitoring, investment lineup",
  },
  {
    title: "Target Date Fund Consulting",
    description: "Evaluate your plan&apos;s default investment option with comprehensive analysis of glide path design, underlying investments, fees, and appropriateness for your participant demographics.",
    href: "/corporate-retirement-plans/tdf-consulting/",
    icon: Target,
    keywords: "TDF analysis, QDIA evaluation, glide path review",
  },
  {
    title: "Plan Design",
    description: "Optimize your plan structure to drive higher participation, improve retirement readiness, and meet your organization&apos;s goals. From auto-enrollment to safe harbor design.",
    href: "/corporate-retirement-plans/plan-design/",
    icon: Settings,
    keywords: "Auto-enrollment, safe harbor, plan features, vesting",
  },
  {
    title: "Education & Communications",
    description: "Licensed securities advisors deliver engaging participant education programs. Increase enrollment, improve savings rates, and build a financially confident workforce.",
    href: "/corporate-retirement-plans/education-communications/",
    icon: Users,
    keywords: "Participant education, enrollment meetings, financial wellness",
  },
];

export default function CorporateRetirementPlansPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "For Businesses" }]}
        title="Corporate Retirement Plan Consulting"
        subtitle="Serving plan sponsors nationwide with specialized retirement plan consulting, fiduciary support, and participant education."
      />

      {/* Intro */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="max-w-3xl">
            <h2 className="text-navy font-outfit text-2xl md:text-3xl font-light leading-tight mb-6">
              Retirement Plan Specialists, Not Generalists
            </h2>
            <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
              Managing a corporate retirement plan is one of the most complex responsibilities on your plate. Between ERISA regulations, Department of Labor mandates, investment selection, fee oversight, and fiduciary liability, it&apos;s enough to keep any plan sponsor up at night.
            </p>
            <p className="text-text-gray font-outfit text-base leading-relaxed">
              PointOak Retirement Advisors generates over 90% of its revenue from working with corporate retirement plans. We don&apos;t dabble in retirement plan consulting — we live it every single day. That singular focus gives you a team that has seen every challenge, navigated every regulatory shift, and built the processes to protect you through all of it.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Service Cards Grid */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-2xl md:text-3xl font-light leading-tight mb-10 text-center">
            Our Corporate Services
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
                      <h3 className="text-navy font-outfit text-xl font-medium mb-3 group-hover:text-navy/80 transition-colors flex items-center gap-2">
                        {service.title}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-text-gray font-outfit text-sm leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <p className="text-medium-gray font-outfit text-xs">
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

      {/* Stats */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 text-center">
          <h2 className="text-navy font-outfit text-2xl md:text-3xl font-light leading-tight mb-6">
            Why Plan Sponsors Choose PointOak
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed max-w-2xl mx-auto mb-10">
            We&apos;re retirement plan specialists, not generalists. That focus means deeper expertise, more relevant solutions, and advice that&apos;s aligned solely with your interests.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cloud-blue rounded-lg p-8">
              <div className="text-navy font-outfit text-3xl font-bold mb-2">90%+</div>
              <div className="text-text-gray font-outfit text-sm">Revenue from retirement plan consulting</div>
            </div>
            <div className="bg-cloud-blue rounded-lg p-8">
              <div className="text-navy font-outfit text-3xl font-bold mb-2">$120B+</div>
              <div className="text-text-gray font-outfit text-sm">In retirement plan assets evaluated quarterly</div>
            </div>
            <div className="bg-cloud-blue rounded-lg p-8">
              <div className="text-navy font-outfit text-3xl font-bold mb-2">10,000+</div>
              <div className="text-text-gray font-outfit text-sm">Benchmarks performed annually</div>
            </div>
          </div>
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
