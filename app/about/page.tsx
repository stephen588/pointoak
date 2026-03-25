import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About PointOak Retirement Advisors | Wealth Management & Retirement Planning",
  description:
    "PointOak Retirement Advisors is a full-service wealth advisory firm specializing in retirement planning and wealth management. Fee-only, independent, Fiduciary since 2017. $1.08B AUM.",
  openGraph: {
    title: "About PointOak Retirement Advisors | Wealth Management & Retirement Planning",
    description:
      "PointOak Retirement Advisors is a full-service wealth advisory firm specializing in retirement planning and wealth management. Fee-only, independent, Fiduciary since 2017. $1.08B AUM.",
    url: "https://www.pointoak.com/about/",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "FinancialService"],
  name: "PointOak Retirement Advisors",
  url: "https://www.pointoak.com",
  description:
    "Full-service wealth advisory firm specializing in retirement planning and wealth management. Fee-only, SEC-registered, independent fiduciary serving individuals and businesses nationwide.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1751 Pinnacle Drive, Suite 600",
    addressLocality: "McLean",
    addressRegion: "VA",
    postalCode: "22102",
    addressCountry: "US",
  },
  telephone: "+1-703-595-4444",
  email: "info@pointoak.com",
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.pointoak.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://www.pointoak.com/about/",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <PageHero
        breadcrumbs={[{ label: "About Us" }]}
        title="About PointOak Retirement Advisors"
        subtitle="You've worked hard to build your wealth. You deserve an advisor who works just as hard to protect it, grow it, and make sure it lasts. At PointOak, we've been a fiduciary since the day we opened our doors, legally obligated to act in your best interest at all times. As an SEC-registered investment advisor, we hold ourselves to the highest standard in the industry so you can make confident decisions about your financial future."
      />

      {/* Intro Section */}
      <AnimateOnScroll>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="font-outfit text-4xl sm:text-5xl lg:text-[68px] font-light leading-tight text-dark-navy mb-8">
            A Wealth Advisory Firm Built on Expertise and Trust
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="font-outfit text-base md:text-lg leading-relaxed text-text-gray mb-6">
                PointOak Retirement Advisors is a full-service wealth advisory firm specializing in retirement planning and wealth management. We were founded on a simple idea: that financial advice should be clear, personal, and always in your best interest.
              </p>
              <p className="font-outfit text-base md:text-lg leading-relaxed text-text-gray">
                We take sophisticated financial concepts and explain them in a way that truly makes sense. We know the jargon — but our day-to-day relationships with clients are much more personal than that. We&apos;re the team that identifies the gaps in your financial picture, proactively addresses issues before they become problems, and helps streamline your entire financial life.
              </p>
            </div>
            <div>
              <p className="font-outfit text-base md:text-lg leading-relaxed text-text-gray">
                What makes PointOak different? We bring a dual expertise that few firms can match. Our deep background in corporate retirement plan consulting means we&apos;ve seen thousands of real-world retirement scenarios across every industry. And our private wealth management practice takes that same institutional-level rigor and applies it directly to your personal financial plan. That experience translates into smarter retirement income planning, better investment strategies, and a level of insight that generalist advisors simply don&apos;t have.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Stats Bar */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-10">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-outfit text-3xl md:text-4xl font-bold text-dark-navy">$1.08B</div>
              <div className="font-outfit text-sm text-text-gray mt-1">Assets Under Management</div>
            </div>
            <div>
              <div className="font-outfit text-3xl md:text-4xl font-bold text-dark-navy">50+</div>
              <div className="font-outfit text-sm text-text-gray mt-1">Years Collective Experience</div>
            </div>
            <div>
              <div className="font-outfit text-3xl md:text-4xl font-bold text-dark-navy">100%</div>
              <div className="font-outfit text-sm text-text-gray mt-1">Fiduciary</div>
            </div>
            <div>
              <div className="font-outfit text-3xl md:text-4xl font-bold text-dark-navy">SEC-Registered</div>
              <div className="font-outfit text-sm text-text-gray mt-1">Investment Advisor</div>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Mission */}
      <AnimateOnScroll>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="font-outfit text-4xl sm:text-5xl lg:text-[68px] font-light leading-tight text-dark-navy mb-8">
            Our Mission
          </h2>
          <p className="font-outfit text-lg md:text-xl lg:text-2xl leading-relaxed text-text-gray max-w-4xl">
            To serve as your personal financial advocate, helping you build, protect, and maximize your wealth through every stage of life. Whether you&apos;re planning for retirement, navigating a financial transition, or overseeing a corporate benefit plan, we believe you deserve independent, fiduciary-level guidance delivered with clarity, accountability, and genuine care.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Image Break — Darsh on Fox 5 */}
      <AnimateOnScroll variant="fade">
      <section className="bg-cloud-blue py-4">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/darsh-fox5.jpg"
              alt="Darsh Makim, PointOak founder, featured on Fox 5 discussing personal finance and retirement planning"
              fill
              className="object-cover object-[center_25%]"
              sizes="(max-width: 1170px) 100vw, 1170px"
            />
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* How We Work */}
      <AnimateOnScroll>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="font-outfit text-4xl sm:text-5xl lg:text-[68px] font-light leading-tight text-dark-navy mb-12">
            How We Work: Understand. Design. Implement&nbsp;&amp;&nbsp;Monitor.
          </h2>
          <p className="font-outfit text-base md:text-lg leading-relaxed text-text-gray mb-12 max-w-3xl">
            Every client relationship begins with listening. We follow a straightforward process that puts your goals at the center of everything we do.
          </p>

          {/* Process Steps */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-navy/20 hidden md:block" />

            <div className="space-y-10">
              {/* Step 1 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-outfit font-bold text-lg relative z-10">
                  1
                </div>
                <div>
                  <h3 className="font-outfit text-2xl font-medium text-dark-navy mb-3">Understand</h3>
                  <p className="font-outfit text-base leading-relaxed text-text-gray max-w-3xl">
                    We start by getting to know you — your financial picture, your goals, your concerns, and what keeps you up at night. This isn&apos;t a questionnaire. It&apos;s a real conversation about where you are, where you want to be, and what matters most to you and your family.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-outfit font-bold text-lg relative z-10">
                  2
                </div>
                <div>
                  <h3 className="font-outfit text-2xl font-medium text-dark-navy mb-3">Design</h3>
                  <p className="font-outfit text-base leading-relaxed text-text-gray max-w-3xl">
                    Based on what we learn, we build a personalized strategy tailored to your specific situation. From investment management and retirement income planning to tax-efficient strategies and risk management — every recommendation is designed around your life, not a template.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-outfit font-bold text-lg relative z-10">
                  3
                </div>
                <div>
                  <h3 className="font-outfit text-2xl font-medium text-dark-navy mb-3">Implement &amp; Monitor</h3>
                  <p className="font-outfit text-base leading-relaxed text-text-gray max-w-3xl">
                    We put your plan into action and stay engaged for the long haul. Markets shift. Life changes. We provide ongoing monitoring, regular reviews, and proactive adjustments so your financial plan evolves as you do. You&apos;ll never wonder where things stand.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="font-outfit text-base leading-relaxed text-text-gray mt-10 max-w-3xl">
            At every step, you work with a senior-level advisor who knows you personally. Not an 800 number. Not a call center. That&apos;s the kind of direct accountability that makes all the difference.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Why Clients Choose PointOak */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="font-outfit text-4xl sm:text-5xl lg:text-[68px] font-light leading-tight text-dark-navy mb-12">
            Why Clients Choose PointOak
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Independent & Fee-Only */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-outfit text-xl font-medium text-dark-navy mb-4">Independent &amp; Fee-Only</h3>
              <p className="font-outfit text-base leading-relaxed text-text-gray">
                We&apos;re a fee-only, SEC-registered investment advisor. No commissions, no proprietary products, no hidden agendas. Our advice is completely independent — we choose from the entire marketplace to find what&apos;s genuinely best for you.
              </p>
            </div>

            {/* Fiduciary Since Day One */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-outfit text-xl font-medium text-dark-navy mb-4">Fiduciary Since Day One</h3>
              <p className="font-outfit text-base leading-relaxed text-text-gray">
                We&apos;ve been a fiduciary since inception. That means we&apos;re legally obligated to act in your best interest, not just held to a &ldquo;suitability&rdquo; standard. It&apos;s a higher bar, and it&apos;s how we&apos;ve operated from the very beginning.
              </p>
            </div>

            {/* White-Glove Service */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-outfit text-xl font-medium text-dark-navy mb-4">White-Glove Service</h3>
              <p className="font-outfit text-base leading-relaxed text-text-gray">
                We intentionally limit the number of clients we serve so that every relationship gets the attention it deserves. You won&apos;t get handed off to a junior associate. You work directly with experienced advisors who know your name, your family, and your goals.
              </p>
            </div>

            {/* Sophisticated Planning Simply Explained */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-outfit text-xl font-medium text-dark-navy mb-4">Sophisticated Planning, Simply Explained</h3>
              <p className="font-outfit text-base leading-relaxed text-text-gray">
                We take complex financial concepts and explain them in a clear, practical way that truly makes sense. You&apos;ll always understand the &ldquo;why&rdquo; behind every recommendation — no jargon walls, no confusion, no nodding along and hoping for the best.
              </p>
            </div>

            {/* Dual Expertise — full width */}
            <div className="bg-white rounded-lg p-8 shadow-sm md:col-span-2">
              <h3 className="font-outfit text-xl font-medium text-dark-navy mb-4">Dual Expertise That Sets Us Apart</h3>
              <p className="font-outfit text-base leading-relaxed text-text-gray">
                Our deep background in corporate 401(k) consulting gives us an edge that most private wealth advisors simply don&apos;t have. And our private wealth practice brings a level of personalized attention that institutional firms can&apos;t match. We&apos;ve analyzed thousands of retirement plans across every industry, which means we understand real-world retirement scenarios at a level of detail that directly benefits your personal retirement income planning and investment strategy.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Difference at a Glance — Comparison Table */}
      <AnimateOnScroll>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="font-outfit text-4xl sm:text-5xl lg:text-[68px] font-light leading-tight text-dark-navy mb-10">
            The PointOak Difference at a Glance
          </h2>
          <p className="font-outfit text-base md:text-lg leading-relaxed text-text-gray mb-8 max-w-3xl">
            Not all financial advisors are the same. Here&apos;s how an independent RIA like PointOak compares to traditional wirehouses and broker-dealers.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="font-outfit font-medium text-left px-6 py-4 text-sm uppercase tracking-wider">Feature</th>
                  <th className="font-outfit font-medium text-left px-6 py-4 text-sm uppercase tracking-wider">PointOak (Independent RIA)</th>
                  <th className="font-outfit font-medium text-left px-6 py-4 text-sm uppercase tracking-wider">Wirehouse / Broker-Dealer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Fiduciary Standard", "Fiduciary since inception: legally obligated to act in your best interest", "Suitability standard — only needs to be \"suitable,\" not best"],
                  ["Compensation", "Fee-only — no commissions, no hidden incentives", "Commissions and proprietary product sales incentives"],
                  ["Product Selection", "Open architecture — access to the entire marketplace", "Limited to firm-approved or proprietary products"],
                  ["Independence", "100% independent — no parent company, no conflicts", "Employed by a large corporation or uses a broker/dealer for back-office firm operations"],
                  ["Who Do Our Clients Work With", "Directly with senior advisors who know your name, your goals, and your financial picture", "Branch employees who may manage hundreds of households. You're a number, not a relationship."],
                  ["Accountability", "Your advisor has direct accountability to you", "Advisors answer to corporate management first"],
                ].map(([feature, pointoak, wirehouse], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-cloud-blue/50"}>
                    <td className="font-outfit font-medium text-dark-navy px-6 py-4 text-base">{feature}</td>
                    <td className="font-outfit text-text-gray px-6 py-4 text-base">{pointoak}</td>
                    <td className="font-outfit text-text-gray px-6 py-4 text-base">{wirehouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Leadership */}
      <AnimateOnScroll variant="fade">
      <section className="bg-cloud-blue py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="font-outfit text-4xl sm:text-5xl lg:text-[68px] font-light leading-tight text-dark-navy mb-12">
            Our Leadership
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <div className="relative w-full h-[400px] lg:h-[480px] rounded-lg overflow-hidden">
                <Image
                  src="/images/darsh-makim.jpg"
                  alt="Darsh Makim, CRPC — Founder and Principal of PointOak Retirement Advisors"
                  fill
                  className="object-cover object-[center_15%]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <h3 className="font-outfit text-2xl font-medium text-dark-navy mb-2">Darsh Makim, CRPC</h3>
              <p className="font-outfit text-sm text-text-gray/70 mb-6">Founder &amp; Principal</p>
              <p className="font-outfit text-base md:text-lg leading-relaxed text-text-gray mb-6">
                Darsh Makim has been advising clients on their financial futures since 2005. He founded PointOak Retirement Advisors in 2017 with a clear vision: build a firm where every client gets the caliber of advice and attention usually reserved for the ultra-wealthy — delivered with genuine care and zero conflicts of interest.
              </p>
              <p className="font-outfit text-base md:text-lg leading-relaxed text-text-gray mb-6">
                As a Chartered Retirement Planning Counselor (CRPC), Darsh brings deep expertise across wealth management, retirement income planning, and corporate retirement plan consulting. His unique background spanning both private wealth and institutional retirement plans gives clients a perspective that few advisors can offer.
              </p>
              <p className="font-outfit text-base md:text-lg leading-relaxed text-text-gray">
                At PointOak, you won&apos;t get handed off after the first meeting. You work directly with Darsh and his team, experienced professionals who are at every meeting from the start, who know your goals, and who treat your financial well-being as their own responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Who We Serve */}
      <AnimateOnScroll>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="font-outfit text-4xl sm:text-5xl lg:text-[68px] font-light leading-tight text-dark-navy mb-8">
            Who We Serve
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="font-outfit text-2xl font-medium text-dark-navy mb-4">Individuals &amp; Families</h3>
              <p className="font-outfit text-base md:text-lg leading-relaxed text-text-gray mb-4">
                We work with individuals and families who are serious about their financial future — whether you&apos;re in the accumulation phase building wealth, approaching retirement and planning your income strategy, already retired and focused on preservation, or navigating an inheritance or business transition.
              </p>
              <p className="font-outfit text-base md:text-lg leading-relaxed text-text-gray">
                Based in McLean, Virginia, we serve clients across the DC metro area and nationwide. Our typical clients have $500K or more in investable assets, though we evaluate every relationship on a case-by-case basis. What matters most is that we&apos;re the right fit for each other.
              </p>
            </div>
            <div>
              <h3 className="font-outfit text-2xl font-medium text-dark-navy mb-4">Corporate Plan Sponsors</h3>
              <p className="font-outfit text-base md:text-lg leading-relaxed text-text-gray mb-4">
                We also serve as trusted retirement plan consultants for businesses across the country — including business owners, CFOs, HR directors, and investment committee members managing 401(k) and other retirement programs.
              </p>
              <p className="font-outfit text-base md:text-lg leading-relaxed text-text-gray">
                Our corporate retirement plan consulting is one of the foundations PointOak was built on, and it remains a core strength. We serve as named ERISA fiduciaries, provide rigorous provider and fee benchmarking, and deliver the kind of specialized plan oversight that helps protect both fiduciaries and participants.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Core Services */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="font-outfit text-4xl sm:text-5xl lg:text-[68px] font-light leading-tight text-dark-navy mb-10">
            Our Core Services
          </h2>

          {/* Private Wealth Services */}
          <h3 className="font-outfit text-2xl font-medium text-dark-navy mb-6">Private Wealth Management</h3>
          <p className="font-outfit text-base md:text-lg leading-relaxed text-text-gray mb-8 max-w-3xl">
            Comprehensive, personalized financial guidance for every stage of your life:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {[
              {
                title: "Retirement Income Planning",
                desc: "Strategies designed to turn your savings into reliable, tax-efficient income that lasts through every year of retirement.",
                href: "/wealth-management/",
              },
              {
                title: "Investment Management",
                desc: "Open-architecture portfolio management tailored to your risk tolerance, goals, and timeline — with access to the full marketplace.",
                href: "/wealth-management/",
              },
              {
                title: "Financial Planning",
                desc: "A holistic view of your financial picture — from cash flow and debt management to estate planning and insurance needs.",
                href: "/wealth-management/",
              },
              {
                title: "Pre-Retirement Strategy",
                desc: "Guidance for the critical years leading up to retirement — maximizing savings, optimizing Social Security, and planning your transition.",
                href: "/wealth-management/",
              },
              {
                title: "Wealth Preservation",
                desc: "Protecting what you've built through tax-efficient strategies, risk management, and thoughtful estate planning.",
                href: "/wealth-management/",
              },
              {
                title: "Life Transition Planning",
                desc: "Expert guidance through inheritances, business sales, divorce, career changes, and other pivotal financial moments.",
                href: "/wealth-management/",
              },
            ].map((service, idx) => (
              <Link key={idx} href={service.href} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
                <h3 className="font-outfit text-lg font-medium text-dark-navy mb-3 group-hover:text-navy transition-colors">{service.title}</h3>
                <p className="font-outfit text-sm leading-relaxed text-text-gray">{service.desc}</p>
              </Link>
            ))}
          </div>

          {/* Corporate Retirement Plan Services */}
          <h3 className="font-outfit text-2xl font-medium text-dark-navy mb-6">Corporate Retirement Plan Consulting</h3>
          <p className="font-outfit text-base md:text-lg leading-relaxed text-text-gray mb-8 max-w-3xl">
            Specialized consulting for businesses that want to do right by their employees:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Fiduciary Support",
                desc: "Named 3(21) or 3(38) fiduciary services to help you meet ERISA obligations and reduce liability exposure.",
                href: "/corporate-retirement-plans/fiduciary-support/",
              },
              {
                title: "Provider & Fee Benchmarking",
                desc: "Live Bid benchmarking studies that ensure your fees are competitive and your provider is delivering real value.",
                href: "/corporate-retirement-plans/provider-fee-benchmarking/",
              },
              {
                title: "Investment Analysis",
                desc: "Quarterly investment monitoring using our proprietary scoring system to keep your plan on track.",
                href: "/corporate-retirement-plans/investment-analysis/",
              },
              {
                title: "Plan Design",
                desc: "Customized plan design recommendations that drive participation, improve outcomes, and align with your goals.",
                href: "/corporate-retirement-plans/plan-design/",
              },
              {
                title: "Target Date Fund Consulting",
                desc: "Specialized TDF evaluation and selection aligned with DOL guidelines and your participants' demographics.",
                href: "/corporate-retirement-plans/target-date-fund-consulting/",
              },
              {
                title: "Education & Communications",
                desc: "Interactive sessions led by licensed advisors to help employees make informed retirement decisions.",
                href: "/corporate-retirement-plans/education-communications/",
              },
            ].map((service, idx) => (
              <Link key={idx} href={service.href} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
                <h3 className="font-outfit text-lg font-medium text-dark-navy mb-3 group-hover:text-navy transition-colors">{service.title}</h3>
                <p className="font-outfit text-sm leading-relaxed text-text-gray">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Disclaimer */}
      <section className="bg-white py-8">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="font-outfit text-xs italic text-text-gray leading-relaxed">
            Investment advisory services offered through PointOak Retirement Advisors, LLC, an SEC-registered investment advisor. This site is published for residents of the United States only. Not all of the products and services referenced on this site are available in every state and through every representative or advisor listed. PointOak Retirement Advisors, LLC does not provide tax or legal advice.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}