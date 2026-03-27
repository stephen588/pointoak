import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { Search, BarChart3, Settings, FileCheck, Users, BookOpen, Shield, TrendingUp, Target, CheckCircle2 } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Our Process | Retirement Plan Consulting | PointOak",
  description:
    "PointOak's proven Analyze, Optimize, Implement process helps plan sponsors reduce fiduciary liability, lower fees, and build better retirement plans for employees.",
  openGraph: {
    title: "Our Process | Retirement Plan Consulting | PointOak",
    description:
      "PointOak's proven Analyze, Optimize, Implement process helps plan sponsors reduce fiduciary liability, lower fees, and build better retirement plans for employees.",
    url: "https://pointoak.com/our-process/",
  },
};

const analyzeItems = [
  {
    icon: Search,
    title: "Plan Design Review",
    desc: "We assess your current plan structure, including enrollment features, contribution formulas, vesting schedules, and eligibility provisions. Are your plan's design elements aligned with your company's goals and culture? We'll find out.",
  },
  {
    icon: BarChart3,
    title: "Fee and Provider Benchmarking",
    desc: "You've certainly thought about cost. But how much is too much, and what are you getting for your money? We conduct a custom Live Bid benchmarking study that reviews over 450 data points per bidder, using your actual plan information rather than average demographics.",
  },
  {
    icon: TrendingUp,
    title: "Investment Lineup Evaluation",
    desc: "With more than 40,000 funds available, selecting the right investment menu is no small task. Our investment analysis methodology measures fund performance across multiple factors, including fund style, risk-adjusted returns, peer group rankings, manager tenure, and expense ratios.",
  },
  {
    icon: Shield,
    title: "Fiduciary Process Assessment",
    desc: "Are your processes documented? Is your Investment Committee structured properly? Do you have a current Investment Policy Statement? We identify gaps in your fiduciary compliance and create a clear roadmap for closing them.",
  },
  {
    icon: Users,
    title: "Participant Outcomes Review",
    desc: "We look at participation rates, deferral levels, and retirement readiness metrics to understand how well your plan is actually serving your employees.",
  },
];

const optimizeItems = [
  {
    icon: Target,
    title: "Investment Menu Optimization",
    desc: "Based on our analysis, we recommend adjustments to your investment lineup to reduce costs, improve diversification, and align fund options with your participants' needs. Every recommendation is backed by our quarterly monitoring data and documented in your Investment Policy Statement.",
  },
  {
    icon: BarChart3,
    title: "Fee Negotiation and Provider Strategy",
    desc: "We help you uncover inefficiencies and then provide you with the data to renegotiate better fees and services, or to make a provider switch. Our benchmarking data gives you real leverage because it's based on live bids from competing providers, not industry averages.",
  },
  {
    icon: Settings,
    title: "Plan Design Enhancements",
    desc: "We help you move beyond a cookie-cutter plan. Whether it's implementing automatic enrollment, adding auto-escalation features, or restructuring your match formula, we tailor design recommendations to your specific company goals and workforce demographics.",
  },
  {
    icon: Shield,
    title: "Fiduciary Framework Development",
    desc: "We draft or update your Investment Policy Statement, establish or strengthen your Investment Committee structure, and build the governance framework that protects you. Acting as your 3(21) or 3(38) named fiduciary under ERISA, we share the fiduciary responsibility so you're not carrying it alone.",
  },
  {
    icon: CheckCircle2,
    title: "Target Date Fund Evaluation",
    desc: "If your plan uses TDFs (and most do), we conduct a multi-step suitability analysis to determine whether your current solution is the right fit for your participants, or whether a different approach would serve them better.",
  },
];

const implementItems = [
  {
    icon: Settings,
    title: "Change Execution",
    desc: "We coordinate with all parties to implement investment changes, plan design updates, provider transitions, and fee renegotiations. You don't have to manage the logistics.",
  },
  {
    icon: BarChart3,
    title: "Quarterly Investment Monitoring",
    desc: "Your plan doesn't stand still, and neither do we. We monitor your investment lineup every quarter using institutional-grade analytics, flagging any funds that fall below our performance thresholds and providing specific recommendations when action is needed.",
  },
  {
    icon: FileCheck,
    title: "Annual Fiduciary Plan Review",
    desc: "Each year, we deliver a comprehensive review presentation covering your plan's performance, compliance status, fee competitiveness, and participant outcomes. This keeps you informed and ensures your fiduciary file stays current.",
  },
  {
    icon: BookOpen,
    title: "Regulatory Updates and Education",
    desc: "The DOL and ERISA landscape changes constantly. We stay on top of evolving fiduciary rules and regulations so we can implement current compliance practices on your behalf. You'll never be caught off guard by a new requirement.",
  },
  {
    icon: Users,
    title: "Employee Education Programs",
    desc: "A strong plan means nothing if employees don't use it. Our licensed securities advisors lead interactive sessions covering retirement savings strategies, budgeting, and debt management to help your workforce take full advantage of the plan you've built.",
  },
  {
    icon: Shield,
    title: "Virtual 401(k) Fiduciary File",
    desc: "We document everything we do with you in a secure digital file. Every analysis, every recommendation, every committee meeting, every decision. If you're ever audited, your documentation is already in order.",
  },
];

export default function OurProcessPage() {
  return (
    <>
      <Header />
      <PageHero
        breadcrumbs={[{ label: "Our Process" }]}
        title="Our Process: How We Help Plan Sponsors Succeed"
        subtitle="Managing a retirement plan means juggling fiduciary obligations, investment decisions, provider relationships, and employee outcomes, all while running your business. You didn't sign up to become a retirement plan specialist. But you're still responsible for getting it right."
      />

      {/* Intro */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-text-gray font-outfit text-base leading-relaxed max-w-3xl mb-6">
            That&apos;s where we come in. PointOak follows a proven three-phase approach designed to take the weight off your shoulders, protect you from liability, and deliver a retirement plan your employees deserve. Every step is documented, every decision is defensible, and every recommendation is made with your best interests in mind.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Analyze, Optimize, Implement Overview */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-outfit text-4xl sm:text-5xl lg:text-[56px] font-light leading-tight text-dark-navy mb-6">
                Analyze. Optimize. Implement.
              </h2>
              <p className="font-outfit text-base md:text-lg leading-relaxed text-text-gray mb-4">
                Our process isn&apos;t a one-size-fits-all checklist. It&apos;s a meticulous, technology-driven methodology developed over years of working exclusively with plan sponsors like you. We start by understanding where your plan stands today, identify what needs to change, and then make it happen.
              </p>
              <p className="font-outfit text-base md:text-lg leading-relaxed text-text-gray">
                Because we generate over 90% of our revenue from working with corporate retirement plans, this process has been refined by real-world experience across a wide range of engagements. You get the benefit of all that insight applied directly to your plan.
              </p>
            </div>
            <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/asset-nature-01.png"
                alt="Professional team engaged in a collaborative retirement plan strategy meeting"
                fill
                className="object-cover object-[center_25%]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Phase 1: Analyze */}
      <AnimateOnScroll>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center text-white font-outfit font-bold text-xl">1</div>
            <span className="font-outfit text-sm uppercase tracking-widest text-text-gray/70">Phase One</span>
          </div>
          <h2 className="font-outfit text-4xl sm:text-5xl lg:text-[56px] font-light leading-tight text-dark-navy mb-4">
            Analyze
          </h2>
          <p className="font-outfit text-lg text-text-gray mb-10 max-w-3xl">
            We Start by Understanding Your Plan Inside and Out. Before we recommend a single change, we need to know exactly what you&apos;re working with. Our analysis phase is comprehensive, covering your plan&apos;s structure, fees, investments, provider relationships, and fiduciary processes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analyzeItems.map((item) => (
              <div key={item.title} className="bg-cloud-blue rounded-lg p-6 shadow-sm">
                <item.icon className="w-8 h-8 text-navy mb-4" strokeWidth={1.5} />
                <h3 className="font-outfit text-lg font-medium text-dark-navy mb-3">{item.title}</h3>
                <p className="font-outfit text-sm leading-relaxed text-text-gray">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="font-outfit text-base text-text-gray mt-8 italic">
            The result of this phase is a clear, detailed picture of where your plan stands and where the opportunities are. No guesswork. No assumptions. Just data.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Image Break — Data Analysis */}
      <AnimateOnScroll variant="fade">
      <section className="bg-cloud-blue py-4">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/asset-nature-02.png"
              alt="Clean laptop screen displaying colorful investment portfolio analytics dashboard"
              fill
              className="object-cover object-[center_25%]"
              sizes="(max-width: 1170px) 100vw, 1170px"
            />
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Phase 2: Optimize */}
      <AnimateOnScroll>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center text-white font-outfit font-bold text-xl">2</div>
            <span className="font-outfit text-sm uppercase tracking-widest text-text-gray/70">Phase Two</span>
          </div>
          <h2 className="font-outfit text-4xl sm:text-5xl lg:text-[56px] font-light leading-tight text-dark-navy mb-4">
            Optimize
          </h2>
          <p className="font-outfit text-lg text-text-gray mb-10 max-w-3xl">
            We Build a Strategy Tailored to Your Plan. Once we understand your plan&apos;s current state, we develop specific, actionable recommendations designed to strengthen every aspect of your retirement program. This isn&apos;t about making changes for the sake of change. It&apos;s about making the right changes for your organization and your employees.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optimizeItems.map((item) => (
              <div key={item.title} className="bg-cloud-blue rounded-lg p-6">
                <item.icon className="w-8 h-8 text-navy mb-4" strokeWidth={1.5} />
                <h3 className="font-outfit text-lg font-medium text-dark-navy mb-3">{item.title}</h3>
                <p className="font-outfit text-sm leading-relaxed text-text-gray">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="font-outfit text-base text-text-gray mt-8 italic">
            Every recommendation comes with clear documentation of our rationale, making your decisions defensible if you&apos;re ever audited.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Phase 3: Implement */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center text-white font-outfit font-bold text-xl">3</div>
            <span className="font-outfit text-sm uppercase tracking-widest text-text-gray/70">Phase Three</span>
          </div>
          <h2 className="font-outfit text-4xl sm:text-5xl lg:text-[56px] font-light leading-tight text-dark-navy mb-4">
            Implement
          </h2>
          <p className="font-outfit text-lg text-text-gray mb-10 max-w-3xl">
            We Put the Plan Into Action and Keep It on Track. Recommendations only matter if they&apos;re executed well. We work directly with your providers, recordkeepers, and third-party administrators to implement every change efficiently and accurately. Implementation isn&apos;t the finish line. It&apos;s the starting point for ongoing monitoring and support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementItems.map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 shadow-sm">
                <item.icon className="w-8 h-8 text-navy mb-4" strokeWidth={1.5} />
                <h3 className="font-outfit text-lg font-medium text-dark-navy mb-3">{item.title}</h3>
                <p className="font-outfit text-sm leading-relaxed text-text-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Why Our Process Works */}
      <AnimateOnScroll>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="font-outfit text-4xl sm:text-5xl lg:text-[56px] font-light leading-tight text-dark-navy mb-6">
            Why Our Process Works
          </h2>
          <p className="font-outfit text-base text-text-gray mb-10 max-w-3xl">
            Most advisory firms treat retirement plans as one item on a long list of financial services. PointOak has been wholly focused on the retirement plan industry since day one. That singular focus means our process has been built, tested, and refined through real-world experience across every engagement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-navy pl-6">
              <h3 className="font-outfit text-xl font-medium text-dark-navy mb-3">Independence Without Compromise</h3>
              <p className="font-outfit text-base leading-relaxed text-text-gray">
                As an independently owned and operated firm, we have no parent company products to push and no provider relationships that influence our advice. Every recommendation we make is driven by your interests alone.
              </p>
            </div>
            <div className="border-l-4 border-navy pl-6">
              <h3 className="font-outfit text-xl font-medium text-dark-navy mb-3">Documentation That Protects You</h3>
              <p className="font-outfit text-base leading-relaxed text-text-gray">
                Our meticulous, technology-driven process means every step is recorded, every decision is supported, and every action is defensible. Your fiduciary file isn&apos;t an afterthought. It&apos;s built into everything we do.
              </p>
            </div>
            <div className="border-l-4 border-navy pl-6">
              <h3 className="font-outfit text-xl font-medium text-dark-navy mb-3">Specialists, Not Generalists</h3>
              <p className="font-outfit text-base leading-relaxed text-text-gray">
                We generate over 90% of our revenue from corporate retirement plans. That singular focus gives us deeper expertise, more current regulatory knowledge, and a consulting process purpose-built for plan sponsors and fiduciaries.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Disclaimer */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-6">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="font-outfit text-xs text-text-gray/60 leading-relaxed">
            Investment advisory services offered through PointOak Retirement Advisors, LLC, an SEC-registered investment advisor. This site is published for residents of the United States only. Not all of the products and services referenced on this site are available in every state and through every representative or advisor listed. PointOak Retirement Advisors, LLC does not provide tax or legal advice. PointOak coordinates with your tax and legal professionals but does not provide tax preparation, tax advice, or legal services. We recommend you consult with qualified tax and legal advisors for specific guidance related to your situation. Check the background of this investment professional on FINRA's BrokerCheck: brokercheck.finra.org
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <CTASection />
      <Footer />
    </>
  );
}
