import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Briefcase, DollarSign, Users, Shield } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Who We Serve | Retirement Plan Consulting for Plan Sponsors | PointOak",
  description: "PointOak serves plan sponsors, CFOs, HR directors, and fiduciaries nationwide. Independent retirement plan consulting with named fiduciary status, fee benchmarking, and investment analysis.",
  alternates: {
    canonical: "https://www.pointoak.com/who-we-serve/"
  }
};

const audiences = [
  {
    title: "Business Owners & C-Suite Executives",
    icon: Briefcase,
    description: "You built this company. The retirement plan should reflect that same standard of excellence, not become another source of liability. PointOak helps business owners and executives take control of their retirement plan strategy without it consuming their calendar. We act as your 3(21) or 3(38) named fiduciary under ERISA, sharing or assuming the fiduciary responsibility that would otherwise rest on your shoulders.",
    priorities: [
      "Minimizing personal fiduciary liability exposure",
      "Ensuring plan fees are competitive without sacrificing quality",
      "Offering a retirement benefit that attracts and retains top talent",
      "Having documented, defensible processes in case of a DOL audit",
    ],
  },
  {
    title: "CFOs & Financial Officers",
    icon: DollarSign,
    description: "You think in terms of cost, risk, and return. Our annual Live Bid benchmarking process reviews over 450 data points per bidder using your actual plan information, not industry averages. We perform over 10,000 benchmarks per year, giving you the data and leverage to renegotiate better fees or make an informed provider switch.",
    priorities: [
      "Transparent, defensible fee structures with documented benchmarking",
      "Quantifiable ROI from advisory services",
      "Risk mitigation through proper fiduciary documentation",
      "Clear reporting for board and committee presentations",
    ],
  },
  {
    title: "HR Directors & Benefits Administrators",
    icon: Users,
    description: "You're on the front lines. Employees come to you with questions about their 401(k) plan, enrollment, investment options, and whether they're saving enough. PointOak partners with HR teams to lighten that load with education programs led by licensed securities advisors, plan design optimization, and day-to-day support.",
    priorities: [
      "Increasing employee participation and retirement readiness",
      "Reducing the administrative burden on internal staff",
      "Having a knowledgeable partner for day-to-day plan questions",
      "Staying current with evolving regulations and compliance requirements",
    ],
  },
  {
    title: "Plan Fiduciaries & Investment Committee Members",
    icon: Shield,
    description: "Serving on your company's Investment Committee comes with real legal responsibility. ERISA's fiduciary standards require prudent decision-making, proper documentation, and ongoing monitoring. PointOak gives committee members the tools, data, and expert guidance to fulfill their duties with confidence.",
    priorities: [
      "Understanding and fulfilling personal fiduciary obligations",
      "Having expert support for investment selection and monitoring",
      "Maintaining comprehensive documentation for audit protection",
      "Accessing independent advice free from conflicts of interest",
    ],
  },
];

const industries = [
  "Technology and software companies",
  "Professional services and consulting firms",
  "Healthcare systems and medical groups",
  "Manufacturing and distribution companies",
  "Nonprofit organizations and associations",
  "Government contractors and defense industry firms",
  "Financial institutions and insurance companies",
];

const faqs = [
  {
    question: "What types of retirement plans does PointOak support?",
    answer: "We work with plan sponsors who offer 401(k) plans, 403(b) plans, defined benefit plans, and other employer-sponsored retirement plans. Our consulting services are structured to meet the unique requirements of each plan type and the fiduciary obligations that come with them.",
  },
  {
    question: "Do I need to be local to work with PointOak?",
    answer: "Not at all. While our office is based in McLean, Virginia, we serve plan sponsors across the entire United States. Most of our consulting, benchmarking, and investment analysis work is delivered through a combination of virtual meetings and on-site visits as needed.",
  },
  {
    question: "How is PointOak different from our current financial advisor?",
    answer: "Most financial advisors are generalists who manage retirement plans as one of many product lines. PointOak is a retirement plan specialist, generating over 90% of our revenue from corporate retirement plan consulting. That singular focus gives us deeper expertise, more current regulatory knowledge, and a consulting process purpose-built for plan sponsors and fiduciaries.",
  },
  {
    question: "What does it mean that PointOak acts as a named fiduciary?",
    answer: "As a named fiduciary under ERISA, PointOak takes on direct legal responsibility for the advice and recommendations we provide. Under a 3(21) arrangement, we serve as a co-fiduciary while you retain decision-making authority. Under a 3(38) arrangement, we assume discretionary responsibility for selecting and monitoring plan investments. Either way, we share the fiduciary burden with you.",
  },
  {
    question: "How do I know if my current plan needs a specialist?",
    answer: "If you're unsure whether your plan fees are competitive, haven't benchmarked your provider in three or more years, struggle with low participation rates, or simply feel overwhelmed by ERISA compliance, those are strong signals that a specialist can add immediate value. Contact us for a no-obligation conversation.",
  },
];

export default function WhoWeServePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Who We Serve" }]}
        title="Who We Serve"
        subtitle="PointOak works exclusively with plan sponsors and plan fiduciaries who want more than a checkbox advisor. We serve organizations across the United States that are ready for a true retirement plan specialist."
      />

      {/* Audience Cards */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="space-y-16">
            {audiences.map((audience, idx) => {
              const Icon = audience.icon;
              return (
                <div key={idx} className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-cloud-blue flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-navy" />
                      </div>
                      <h2 className="text-navy font-outfit text-2xl md:text-3xl font-light leading-tight">
                        {audience.title}
                      </h2>
                    </div>
                    <p className="text-text-gray font-outfit text-base leading-relaxed mb-6">
                      {audience.description}
                    </p>
                    <div>
                      <h3 className="text-navy font-outfit text-lg font-medium mb-3">What matters most to you:</h3>
                      <ul className="space-y-2">
                        {audience.priorities.map((p, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                            <span className="text-text-gray font-outfit text-sm leading-relaxed">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Industries */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Industries and Organizations We Serve
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            PointOak works with plan sponsors across a broad range of industries and organization sizes. Whether you&apos;re a mid-market company with 200 employees or a large enterprise with thousands of participants, our consulting approach is tailored to your plan&apos;s specific needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industries.map((industry, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white rounded-lg px-6 py-4">
                <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                <span className="text-text-gray font-outfit text-base">{industry}</span>
              </div>
            ))}
          </div>
          <p className="text-text-gray font-outfit text-base leading-relaxed mt-8">
            What connects our clients isn&apos;t their industry — it&apos;s a shared commitment to doing right by their employees and a recognition that retirement plan management demands specialized expertise.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Why PointOak */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Why Plan Sponsors Choose PointOak
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cloud-blue rounded-lg p-8">
              <h3 className="text-navy font-outfit text-xl font-medium mb-3">Retirement Plan Specialists</h3>
              <p className="text-text-gray font-outfit text-sm leading-relaxed">
                PointOak generates over 90% of its revenue from working with corporate retirement plans. This isn&apos;t a side business — it&apos;s our entire focus.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-8">
              <h3 className="text-navy font-outfit text-xl font-medium mb-3">Named Fiduciary From Day One</h3>
              <p className="text-text-gray font-outfit text-sm leading-relaxed">
                Every PointOak advisor acts as a 3(21) or 3(38) named fiduciary under ERISA. We don&apos;t just advise — we stand beside you with direct accountability.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-8">
              <h3 className="text-navy font-outfit text-xl font-medium mb-3">Independence You Can Trust</h3>
              <p className="text-text-gray font-outfit text-sm leading-relaxed">
                Independently owned and operated. No parent company products, no recordkeeper affiliations, no conflicts of interest driving recommendations.
              </p>
            </div>
            <div className="bg-cloud-blue rounded-lg p-8">
              <h3 className="text-navy font-outfit text-xl font-medium mb-3">A Process That Protects You</h3>
              <p className="text-text-gray font-outfit text-sm leading-relaxed">
                We apply a meticulous, technology-driven process that documents everything: Analyze → Optimize → Implement. If you face an audit, your fiduciary file is ready.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      <ServiceDetailFAQ faqs={faqs} />

      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-sm leading-relaxed italic text-center">
            Investment advisory services offered through PointOak Retirement Advisors, LLC. This site is published for residents of the United States only. PointOak Retirement Advisors, LLC does not provide tax or legal advice.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
