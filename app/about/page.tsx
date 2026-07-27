"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Associations from "@/components/Associations";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center pt-[78px]" style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}>
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 w-full">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="flex items-center gap-2 text-white/60 text-sm font-outfit">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">About Us</span>
            </nav>
          </div>

          {/* Hero Content */}
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white font-outfit leading-[1.4] mb-6">
              We are retirement plan specialists. Not generalists.
            </h1>
            <p className="text-white/90 font-outfit text-base md:text-lg lg:text-xl leading-relaxed pb-8 md:pb-0">
              When it comes to choosing an advisor for your retirement plan, experience and perspective make all the difference. PointOak has been advising plan sponsors and participants since day one. We have always been, and remain to this day, wholly focused on the retirement plan industry and the fiduciary obligations impacting plan sponsors. Our unique perspective allows us to provide nimble, efficient solutions and highly actionable advice that often brings immediate value to your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Context Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="text-navy font-outfit text-lg md:text-xl leading-relaxed max-w-4xl">
            PointOak generates over 90% of its revenue from working with corporate retirement plans, which means we are fully dedicated to helping you achieve a successful retirement plan for your employees.
          </p>
        </div>
      </section>

      {/* Our Firm at a Glance */}
      <section className="bg-cloud-blue py-12 md:py-20 lg:py-28">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          {/* Section Header */}
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-navy font-outfit text-4xl sm:text-5xl lg:text-[68px] font-normal leading-tight mb-4 md:mb-5">
              Our Firm at a Glance
            </h2>
            <p className="text-text-gray font-outfit text-base md:text-lg lg:text-2xl leading-[33px] max-w-4xl">
              These pillars define who we are and how we serve our clients every day.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-[7px] border border-[#F3F4F6] p-8">
              <h3 className="text-navy font-outfit font-medium text-lg mb-4">
                Retirement Plan Roots
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Founded by Darsh Makim, CRPC®, AIF®, one of Washington, DC&apos;s top retirement plan consultants who has worked with plan sponsors and participants since 2005.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[7px] border border-[#F3F4F6] p-8">
              <h3 className="text-navy font-outfit font-medium text-lg mb-4">
                The Power of Independence
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We offer independent advice without being driven by any outside considerations other than our clients&apos; interests in mind. PointOak is independently owned and operated, which means we are free from pressure to push proprietary products of a parent company.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[7px] border border-[#F3F4F6] p-8">
              <h3 className="text-navy font-outfit font-medium text-lg mb-4">
                Process-Driven
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We apply a meticulous, technology-driven process we&apos;ve developed over years of client engagement experiences. As diligent stewards, we document everything we do with our clients to help protect them from liability if they get audited.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[7px] border border-[#F3F4F6] p-8">
              <h3 className="text-navy font-outfit font-medium text-lg mb-4">
                10,000+ Benchmarks Per Year
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our Live Bid benchmarking study is among the most comprehensive in the industry. With over 450 data points reviewed per bidder, we increase data accuracy that can beat industry benchmarks. Our Live Bid process relies on your specific plan information when we benchmark, not average plan demographic.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-[7px] border border-[#F3F4F6] p-8">
              <h3 className="text-navy font-outfit font-medium text-lg mb-4">
                Investment Evaluation Experts
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Evaluating investment managers and providing easy to understand fund analytics are two of our core strengths. Our investment methodology is used to evaluate over $120 billion in retirement plan assets every quarter.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-[7px] border border-[#F3F4F6] p-8">
              <h3 className="text-navy font-outfit font-medium text-lg mb-4">
                We Are Named Fiduciaries
              </h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We&apos;ve been registered and acting as fiduciaries since the first day we started our practice. PointOak&apos;s advisors can act either as a 3(21) or 3(38) named fiduciary under ERISA with all of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Associations */}
      <Associations />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
