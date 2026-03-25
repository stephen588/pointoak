import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Shield, TrendingUp, Award, FileCheck } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Why PointOak | Retirement Plan Specialists | PointOak",
  description: "PointOak generates over 90% of revenue from retirement plans. Named ERISA fiduciary, 10,000+ benchmarks yearly, $120B+ evaluated quarterly. Get in touch today.",
  alternates: {
    canonical: "https://www.pointoak.com/why-point-oak/"
  }
};

const strengths = [
  {
    title: "Retirement Plan Specialists",
    icon: Award,
    description: "PointOak generates over 90% of its revenue from working with corporate retirement plans. We don&apos;t dabble in retirement plan consulting. We live it every single day.",
    benefits: [
      "Faster answers to complicated questions",
      "Proactive guidance on regulatory changes before they become problems",
      "Team that speaks the language of ERISA, DOL compliance, and fiduciary support fluently",
    ],
  },
  {
    title: "Named Fiduciary Protection",
    icon: Shield,
    description: "PointOak&apos;s advisors are registered and act as fiduciaries under ERISA, serving as either a 3(21) co-fiduciary or 3(38) investment manager with all clients.",
    benefits: [
      "Direct reduction of your liability exposure",
      "Legal commitment to act in your participants&apos; best interests",
      "Shared fiduciary burden with documented accountability",
    ],
  },
  {
    title: "Independence You Can Trust",
    icon: TrendingUp,
    description: "As an independently owned and operated firm, PointOak has no parent company pushing proprietary products, no recordkeeper affiliation driving recommendations, and no outside considerations influencing our advice.",
    benefits: [
      "Objective, unfiltered guidance on provider selection",
      "No incentive to minimize fee analysis findings",
      "Recommendations driven solely by what&apos;s best for your plan",
    ],
  },
  {
    title: "Process-Driven Protection",
    icon: FileCheck,
    description: "We document everything we do with you, from investment reviews and committee meetings to benchmarking studies and plan design changes. All maintained in our Virtual 401(k) Fiduciary File.",
    benefits: [
      "Digital record that protects you if you&apos;re ever audited",
      "Documented evidence of prudent fiduciary process",
      "Clear trail of decisions and recommendations",
    ],
  },
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
              You already know that managing a corporate retirement plan is one of the most complex responsibilities on your plate. Between ERISA regulations, Department of Labor mandates, investment selection, fee oversight, and fiduciary liability, it&apos;s enough to keep any plan sponsor up at night. And the reality is that most financial advisors treat retirement plans as a side business, something they manage alongside wealth management, insurance, and a dozen other priorities.
            </p>
            <p className="text-text-gray font-outfit text-base leading-relaxed">
              That&apos;s not how we operate. PointOak Retirement Advisors generates over 90% of its revenue from working with corporate retirement plans. We don&apos;t dabble in retirement plan consulting. We live it every single day. That singular focus gives you something a generalist never can: a team that has seen every challenge, navigated every regulatory shift, and built the processes to protect you through all of it.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Specialists from Day One */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Specialists from Day One
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
            PointOak has been advising plan sponsors and participants since the very beginning. We have always been, and remain to this day, wholly focused on the retirement plan industry and the fiduciary obligations that impact plan sponsors. Our unique perspective allows us to provide nimble, efficient solutions and highly actionable advice that often brings immediate value to your organization.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            What does that specialization mean for you? It means faster answers to complicated questions. It means proactive guidance on regulatory changes before they become problems. And it means working with a team that speaks the language of ERISA, DOL compliance, and fiduciary support as fluently as you speak your own business.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Key Strengths */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="space-y-16">
            {strengths.map((strength, idx) => {
              const Icon = strength.icon;
              return (
                <div key={idx} className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-cloud-blue flex items-center justify-center flex-shrink-0">
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

      {/* Benchmarking */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            A Benchmarking Process Built for Accuracy
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
            You&apos;ve certainly thought about cost. But how much is too much, and what are you getting for your money? How does your plan stack up against other similar-sized plans in your market?
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            These are prudent questions, but the research required can be a drain on your time. PointOak performs over 10,000 benchmarks per year through our comprehensive &quot;Live Bid&quot; benchmarking process. Unlike standard industry benchmarks that rely on average plan demographics, our process uses your specific plan information to deliver results that reflect your actual situation. We review over 450 data points per bidder across three critical areas: fees, investments, and services.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Investment Expertise */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Investment Expertise at Scale
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
            With over 40,000 mutual funds available, building and maintaining the right investment menu for your plan is no small task. PointOak&apos;s investment analysis methodology evaluates over $120 billion in retirement plan assets every quarter. We measure fund performance across multiple factors, including fund style, risk-adjusted returns, peer group rankings, fund manager tenure, and expense ratios.
          </p>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            Our proprietary 10-point pass/fail scoring system combines sophisticated institutional measurement techniques with analytics that are clear enough for your Investment Committee to act on with confidence. We don&apos;t just hand you a report full of jargon. We give you specific, documented recommendations on which funds to keep, which to watch, and which to replace.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* What You Get */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What You Get When You Work with PointOak
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Dedicated retirement plan specialists who generate over 90% of revenue from corporate retirement plans, not generalists who treat your plan as an afterthought",
              "Named fiduciary status under ERISA, with advisors who serve as 3(21) or 3(38) fiduciaries and share the legal responsibility for plan decisions",
              "Truly independent advice from a firm with no parent company influence, no proprietary products, and no recordkeeper affiliations",
              "Industry-leading benchmarking with over 10,000 Live Bid benchmarks per year and 450+ data points reviewed per bidder using your actual plan data",
              "Institutional-grade investment analysis evaluating $120+ billion in plan assets quarterly through a proprietary 10-point scoring system",
              "Meticulous documentation including Virtual 401(k) Fiduciary Files that protect you if you&apos;re ever audited by the DOL",
              "A proven process built on the Analyze, Optimize, Implement framework, designed to bring immediate and ongoing value to your organization",
              "More than a vendor — your advocate working diligently to protect you from liability and do what&apos;s right for your employees",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white rounded-lg px-6 py-4">
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
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 text-center">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Take the Next Step
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed max-w-2xl mx-auto">
            You didn&apos;t get into business to become a retirement plan expert. But you do have a legal obligation to manage your plan prudently, and your employees are counting on you to get it right. PointOak is here to help you meet that obligation with confidence.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Disclaimer */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-6">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-medium-gray font-outfit text-xs leading-relaxed">
            Investment advisory services offered through PointOak Retirement Advisors, LLC. This site is published for residents of the United States only. Not all of the products and services referenced on this site are available in every state and through every representative or advisor listed. PointOak Retirement Advisors, LLC does not provide tax or legal advice.          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <CTASection />
      <Footer />
    </main>
  );
}
