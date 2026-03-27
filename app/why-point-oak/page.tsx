import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Shield, TrendingUp, Award, FileCheck, Target, Users } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Why PointOak | Retirement Plan Specialists | PointOak",
  description: "PointOak generates over 90% of revenue from retirement plans. Named ERISA fiduciary with 450+ data points per benchmarking bid and independent, conflict-free advice. Get in touch today.",
  alternates: {
    canonical: "https://www.pointoak.com/why-point-oak/"
  }
};

const strengths = [
  {
    title: "Specialists from Day One",
    icon: Award,
    description: "PointOak has been advising plan sponsors and participants since the very beginning. We have always been, and remain to this day, wholly focused on the retirement plan industry and the fiduciary obligations that impact plan sponsors. That focus allows us to provide nimble, efficient solutions and highly actionable advice that often brings immediate value to your organization.",
    benefits: [
      "Faster answers to complicated questions",
      "Proactive guidance on regulatory changes before they become problems",
      "Working with a firm that speaks the language of ERISA, DOL compliance, and fiduciary support fluently",
    ],
  },
  {
    title: "Named Fiduciary Protection",
    icon: Shield,
    description: "One of the most important questions you can ask a retirement plan advisor is this: will you put your name on it? PointOak's advisors are registered and act as fiduciaries under ERISA, serving as either a 3(21) co-fiduciary or 3(38) investment manager with all clients. We've been doing this since the first day we started our practice.",
    benefits: [
      "A 3(21) fiduciary provides recommendations and guidance while you retain final decision-making authority",
      "A 3(38) fiduciary assumes discretionary responsibility for selecting and monitoring your plan's investments",
      "Either way, we share the fiduciary burden with you — it's a legal commitment that directly reduces your liability exposure",
    ],
  },
  {
    title: "Independence You Can Trust",
    icon: TrendingUp,
    description: "As an independently owned and operated firm, PointOak has no parent company pushing proprietary products, no recordkeeper affiliation driving recommendations, and no outside considerations influencing our advice. Every recommendation we make is driven solely by what's in your plan's best interest.",
    benefits: [
      "No reason to favor one provider over another during benchmarking",
      "No incentive to minimize findings when we analyze your fees",
      "Objective, unfiltered guidance that gives you confidence to make informed decisions",
    ],
  },
  {
    title: "A Benchmarking Process Built for Accuracy",
    icon: Target,
    description: "You've certainly thought about cost. But how much is too much, and what are you getting for your money? How does your plan stack up against other similar-sized plans in your market? These are prudent questions, but the research required can be a drain on your time. PointOak's comprehensive Live Bid benchmarking process uses your specific plan information to deliver results that reflect your actual situation, not industry averages.",
    benefits: [
      "We review over 450 data points per bidder across three critical areas: fees, investments, and services",
      "That level of detail helps you uncover inefficiencies",
      "Gives you the data to renegotiate better terms with your current provider, or to make a switch if the numbers support it",
    ],
  },
  {
    title: "Investment Expertise You Can Act On",
    icon: FileCheck,
    description: "With over 40,000 mutual funds available, building and maintaining the right investment menu for your plan is no small task. PointOak's investment analysis methodology measures fund performance across multiple factors, including fund style, risk-adjusted returns, peer group rankings, fund manager tenure, and expense ratios.",
    benefits: [
      "We combine institutional measurement techniques with analytics that are clear enough for your Investment Committee to act on with confidence",
      "We don't just hand you a report full of jargon",
      "We give you specific, documented recommendations on which funds to keep, which to watch, and which to replace",
    ],
  },
  {
    title: "Process-Driven Protection",
    icon: Shield,
    description: "If the DOL comes knocking, the first thing they'll ask for is documentation. Can you show that you followed a prudent process for selecting investments, that fees were reviewed and benchmarked, and that fiduciary decisions were made with appropriate oversight? Most plan sponsors can't answer those questions with confidence.",
    benefits: [
      "PointOak applies a meticulous, technology-driven process developed over years of client engagement",
      "We document everything we do with you in our Virtual 401(k) Fiduciary File",
      "Our approach follows three phases: Analyze your current plan, Optimize through strategic recommendations, Implement changes with ongoing monitoring",
    ],
  },
  {
    title: "More Than a Vendor: Your Advocate",
    icon: Users,
    description: "We don't see ourselves as just another service provider. We're advocates for plan fiduciaries, working diligently on your behalf to help protect you from liability, create the right plan for your needs, strengthen provider relationships, make informed investment decisions, and do what's right for your employees.",
    benefits: [
      "Plan design that drives higher participation",
      "Target date fund consulting that evaluates your default investment option",
      "Education programs that build a financially savvy workforce",
    ],
  },
];

const whatYouGet = [
  "Retirement plan specialists who generate over 90% of revenue from corporate retirement plans, not generalists who treat your plan as an afterthought",
  "Named fiduciary status under ERISA, with advisors who serve as 3(21) or 3(38) fiduciaries and share the legal responsibility for plan decisions",
  "Truly independent advice from a firm with no parent company influence, no proprietary products, and no recordkeeper affiliations",
  "Accurate benchmarking through our Live Bid process, reviewing 450+ data points per bidder using your actual plan data",
  "Institutional-grade investment analysis measuring fund performance across multiple factors each quarter",
  "Meticulous documentation including Virtual 401(k) Fiduciary Files that protect you if you're ever audited by the DOL",
  "A proven process built on the Analyze, Optimize, Implement framework, designed to bring immediate and ongoing value to your organization",
];

export default function WhyPointOakPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Why Point Oak" }]}
        title="Why PointOak Retirement Advisors"
        subtitle="Your Retirement Plan Deserves More Than a Generalist"
      />

      {/* Intro */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="max-w-3xl">
            <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
              You already know that managing a corporate retirement plan is one of the most complex responsibilities on your plate. Between ERISA regulations, Department of Labor mandates, investment selection, fee oversight, and fiduciary liability, it&apos;s enough to keep any plan sponsor up at night.
            </p>
            <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
              The reality is that most financial advisors treat retirement plans as a side business, something they manage alongside wealth management, insurance, and a dozen other priorities. That&apos;s not how we operate. PointOak Retirement Advisors generates over 90% of its revenue from working with corporate retirement plans.
            </p>
            <p className="text-text-gray font-outfit text-base leading-relaxed">
              We don&apos;t dabble in retirement plan consulting. We live it every single day. That singular focus gives you something a generalist never can: a firm that has seen every challenge, navigated every regulatory shift, and built the processes to protect you through all of it.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Key Strengths */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="space-y-16">
            {strengths.map((strength, idx) => {
              const Icon = strength.icon;
              return (
                <div key={idx} className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-navy" />
                      </div>
                      <h2 className="text-navy font-outfit text-2xl md:text-3xl font-light leading-tight">
                        {strength.title}
                      </h2>
                    </div>
                    <p className="text-text-gray font-outfit text-base leading-relaxed mb-6">
                      {strength.description}
                    </p>
                    <ul className="space-y-2">
                      {strength.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                          <span className="text-text-gray font-outfit text-sm leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* What You Get */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What You Get When You Work with PointOak
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatYouGet.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-cloud-blue rounded-lg px-6 py-4">
                <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                <span className="text-text-gray font-outfit text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Next Step */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 text-center">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Take the Next Step
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed max-w-2xl mx-auto mb-4">
            You didn&apos;t get into business to become a retirement plan expert. But you do have a legal obligation to manage your plan prudently, and your employees are counting on you to get it right. PointOak is here to help you meet that obligation with confidence.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed max-w-2xl mx-auto">
            Let&apos;s start with a conversation about where your plan stands today and where it needs to go.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Disclaimer */}
      <AnimateOnScroll>
      <section className="bg-white py-6">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-medium-gray font-outfit text-xs leading-relaxed">
            Investment advisory services offered through PointOak Retirement Advisors, LLC, an SEC-registered investment advisor. This site is published for residents of the United States only. Not all of the products and services referenced on this site are available in every state and through every representative or advisor listed. PointOak Retirement Advisors, LLC does not provide tax or legal advice. PointOak coordinates with your tax and legal professionals but does not provide tax preparation, tax advice, or legal services. We recommend you consult with qualified tax and legal advisors for specific guidance related to your situation. Check the background of this investment professional on FINRA's BrokerCheck: brokercheck.finra.org
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <CTASection />
      <Footer />
    </main>
  );
}
