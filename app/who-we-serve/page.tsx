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
  description: "PointOak serves plan sponsors, CFOs, HR directors, and fiduciaries nationwide. Independent retirement plan consulting with named fiduciary status, fee benchmarking, and investment analysis. Get in touch.",
  alternates: {
    canonical: "https://www.pointoak.com/who-we-serve/"
  }
};

const audiences = [
  {
    title: "Business Owners and C-Suite Executives",
    icon: Briefcase,
    description: "You built this company. The retirement plan should reflect that same commitment to your workforce, not become another source of liability. But between ERISA obligations, DOL oversight, and the constant pressure to balance costs against employee outcomes, it's easy for your 401(k) plan to fall into the &ldquo;we&rsquo;ll deal with it later&rdquo; category. That's where we come in. PointOak helps business owners and executives take control of their retirement plan strategy without it consuming their calendar. We act as your 3(21) or 3(38) named fiduciary under ERISA, which means we share or assume the fiduciary responsibility that would otherwise rest on your shoulders. You focus on growing your business. We focus on making sure your plan is legally sound, cost-effective, and working for your employees.",
    priorities: [
      "Minimizing personal fiduciary liability exposure",
      "Ensuring plan fees are competitive without sacrificing participant outcomes",
      "Offering a retirement benefit that attracts and retains top talent",
      "Having documented, defensible processes in case of a DOL audit",
    ],
  },
  {
    title: "CFOs and Financial Officers",
    icon: DollarSign,
    description: "You think in terms of cost, risk, and return. For your company's retirement plan, you want to know that every dollar of plan expense is justified and that the organization isn't exposed to unnecessary fiduciary risk. PointOak speaks your language. Our annual Live Bid benchmarking process reviews over 450 data points per bidder using your actual plan information, not industry averages. That gives you the data and leverage to renegotiate better fees or make an informed provider switch. Because we're independently owned with no ties to any recordkeeper or fund family, our recommendations are driven by your plan's best interest, period. We also provide quarterly investment monitoring that evaluates performance across fund style, risk-adjusted returns, peer group rankings, manager tenure, and expense ratios. That analysis is presented in a format your Investment Committee can act on, giving you institutional-grade insight without the institutional overhead.",
    priorities: [
      "Transparent, defensible fee structures with documented benchmarking",
      "Quantifiable ROI from advisory services",
      "Risk mitigation through proper fiduciary documentation",
      "Clear reporting for board and committee presentations",
    ],
  },
  {
    title: "HR Directors and Benefits Administrators",
    icon: Users,
    description: "You're on the front lines. Employees come to you with questions about their 401(k) plan, enrollment, investment options, and whether they're saving enough. Meanwhile, you're managing open enrollment, coordinating with your recordkeeper, and trying to keep up with SECURE 2.0 provisions rolling out through 2026. PointOak partners with HR teams to lighten that load. Our education and communications programs are led by licensed securities advisors who deliver customized group sessions, one-on-one consultations, and online webinars that actually get employees engaged with their retirement savings. We coordinate directly with your plan provider to leverage their education resources while filling the gaps they can't. Beyond participant education, we help you optimize plan design features like automatic enrollment and auto-escalation that drive higher participation rates without adding complexity to your workflow. And when your employees ask questions you shouldn't have to answer, our advisors are there as an extension of your team.",
    priorities: [
      "Increasing employee participation and retirement readiness",
      "Reducing the administrative burden on internal staff",
      "Having a knowledgeable partner for day-to-day plan questions",
      "Staying current with evolving regulations and compliance requirements",
    ],
  },
  {
    title: "Plan Fiduciaries and Investment Committee Members",
    icon: Shield,
    description: "Whether you volunteered or were volunteered, serving on your company's Investment Committee comes with real legal responsibility. ERISA's fiduciary standards of care require prudent decision-making, proper documentation, and ongoing monitoring of plan investments and service providers. That's a significant obligation for anyone whose primary job isn't managing retirement plans. PointOak's investment analysis services give committee members the tools, data, and expert guidance to fulfill their fiduciary duties with confidence. We help identify or establish your Investment Committee structure, draft your Investment Policy Statement, and conduct quarterly reviews using institutional measurement techniques that evaluate every fund in your lineup against objective criteria. Our Virtual 401(k) Fiduciary File documents every decision, every meeting, and every recommendation, creating a clear paper trail that protects committee members if the plan is ever audited. We've been registered and acting as fiduciaries since day one. This isn't a service we added to our menu; it's the foundation of our practice.",
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
    answer: "As a named fiduciary under ERISA, PointOak takes on direct legal responsibility for the advice and recommendations we provide. Under a 3(21) arrangement, we serve as a co-fiduciary and provide guidance while you retain decision-making authority. Under a 3(38) arrangement, we assume discretionary responsibility for selecting and monitoring plan investments. Either way, we share the fiduciary burden with you rather than leaving it entirely on your plate.",
  },
  {
    question: "How do I know if my current plan needs a specialist?",
    answer: "If you're unsure whether your plan fees are competitive, haven't benchmarked your provider in three or more years, struggle with low participation rates, or simply feel overwhelmed by ERISA compliance, those are strong signals that a specialist can add immediate value. Contact us for a no-obligation conversation about where your plan stands.",
  },
];

export default function WhoWeServePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Who We Serve" }]}
        title="Who We Serve"
        subtitle="You wear a lot of hats. Running your business, managing your team, and somewhere in between, making sure your company's retirement plan stays compliant, competitive, and genuinely helpful to the people who depend on it. That's a tall order, especially when the regulatory landscape keeps shifting and the stakes keep rising."
      />

      {/* Intro */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-base leading-relaxed max-w-3xl">
            PointOak Retirement Advisors works exclusively with plan sponsors and plan fiduciaries who want more than a checkbox advisor. We serve organizations across the United States that are ready for a true retirement plan specialist, one that brings independent advice, fiduciary accountability, and a process built to protect you.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Audience Cards */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="space-y-16">
            {audiences.map((audience, idx) => {
              const Icon = audience.icon;
              return (
                <div key={idx} className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
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
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Industries and Organizations We Serve
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-8">
            PointOak works with plan sponsors across a broad range of industries and organization sizes. Whether you&apos;re a mid-market company with 200 employees or a large enterprise with thousands of participants, our consulting approach is tailored to your plan&apos;s specific needs and goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {industries.map((industry, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-cloud-blue rounded-lg px-6 py-4">
                <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                <span className="text-text-gray font-outfit text-base">{industry}</span>
              </div>
            ))}
          </div>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            What connects our clients isn&apos;t their industry. It&apos;s a shared commitment to doing right by their employees and a recognition that retirement plan management demands specialized expertise, not a generalist financial advisor who treats your 401(k) as an afterthought.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Why PointOak */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Why Plan Sponsors Nationwide Choose PointOak
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-navy font-outfit text-xl font-medium mb-3">Retirement Plan Specialists, Not Generalists</h3>
              <p className="text-text-gray font-outfit text-sm leading-relaxed">
                PointOak generates over 90% of its revenue from working with corporate retirement plans. This isn&apos;t a side business for us. It&apos;s our entire focus, and it has been since day one.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-navy font-outfit text-xl font-medium mb-3">Named Fiduciary From Day One</h3>
              <p className="text-text-gray font-outfit text-sm leading-relaxed">
                Every PointOak advisor can act as a 3(21) or 3(38) named fiduciary under ERISA. We don&apos;t just advise. We stand beside you with direct fiduciary accountability.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-navy font-outfit text-xl font-medium mb-3">Independence You Can Trust</h3>
              <p className="text-text-gray font-outfit text-sm leading-relaxed">
                As an independently owned and operated firm, we have no parent company products to push, no recordkeeper affiliations to protect, and no conflicts of interest driving our recommendations. Our services are built entirely around your plan&apos;s success.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-navy font-outfit text-xl font-medium mb-3">A Process That Protects You</h3>
              <p className="text-text-gray font-outfit text-sm leading-relaxed">
                We apply a meticulous, technology-driven process that documents everything we do with you: Analyze. Optimize. Implement. If you ever face an audit, your fiduciary file will be ready.
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
            Investment advisory services offered through PointOak Retirement Advisors, LLC, an SEC-registered investment advisor. This site is published for residents of the United States only. Not all of the products and services referenced on this site are available in every state and through every representative or advisor listed. PointOak Retirement Advisors, LLC does not provide tax or legal advice. PointOak coordinates with your tax and legal professionals but does not provide tax preparation, tax advice, or legal services. We recommend you consult with qualified tax and legal advisors for specific guidance related to your situation. Check the background of this investment professional on FINRA&apos;s BrokerCheck: brokercheck.finra.org
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
