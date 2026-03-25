import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "3(38) Investment Fiduciary Services | PointOak Advisors",
  description: "Transfer investment liability with PointOak&apos;s 3(38) fiduciary services. 90%+ retirement plan specialists. Full discretionary authority. Contact us today.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/fiduciary-support/3-38/"
  }
};

const highlights = [
  "Named fiduciary status from day one",
  "90%+ revenue from retirement plan services",
  "Proprietary 10-point investment scoring system"
];

const processSteps = [
  {
    number: 1,
    title: "Initial Consultation and Fiduciary Assessment",
    description: "Call or schedule online. We confirm your appointment within two business hours and conduct your fiduciary assessment, reviewing current fiduciary roles and responsibilities."
  },
  {
    number: 2,
    title: "Investment Analysis and Proposal",
    description: "We analyze your current investment lineup using our 10-point scoring system. You receive a comprehensive proposal documenting our investment management services approach and fiduciary structure."
  },
  {
    number: 3,
    title: "3(38) Fiduciary Appointment",
    description: "We execute the 3(38) investment manager agreement, establishing our named fiduciary status in writing per ERISA requirements. This transfers investment fiduciary responsibility from your committee."
  },
  {
    number: 4,
    title: "Ongoing Quarterly Monitoring",
    description: "Your plan investments receive quarterly reviews. We make necessary fund changes immediately and provide comprehensive documentation for your fiduciary file."
  }
];

const faqs = [
  {
    question: "How much does a 3(38) investment fiduciary cost?",
    answer: "Investment advisory services fees typically run 0.15% to 0.40% of plan assets annually, depending on plan size and complexity. Larger plans often negotiate lower basis point fees. We provide transparent, itemized pricing with no hidden charges. Many clients find the fiduciary liability protection and time savings justify the investment, especially considering average ERISA litigation settlements exceed $4 million."
  },
  {
    question: "What makes PointOak different from other 3(38) fiduciary providers?",
    answer: "Three things set us apart: we generate over 90% of revenue from retirement plans (true specialists, not financial advisors who treat retirement plans as side business), we&apos;re independently owned with no proprietary products to push, and our investment methodology evaluates over $120 billion in plan assets quarterly. We&apos;ve been registered as named fiduciaries since day one."
  },
  {
    question: "Is switching from 3(21) to 3(38) complicated?",
    answer: "The transition typically takes 2-4 weeks. We execute a new investment manager agreement establishing our 3(38) status, then assume discretionary authority over your existing investment options. We analyze current plan investments immediately using our due diligence process and make necessary fund changes. Most sponsors report the process is straightforward and the relief from fiduciary responsibility is immediate."
  },
  {
    question: "What is the difference between a 3(21) and a 3(38) fiduciary?",
    answer: "A 3(21) investment adviser can provide investment advice and recommendations, but you retain final decision-making authority and fiduciary liability. A 3(38) investment manager has full discretionary authority to select, monitor, and replace plan investments without your approval. The 3(38) assumes investment fiduciary responsibility under the Employee Retirement Income Security Act."
  },
  {
    question: "What are the benefits of hiring a 3(38) investment manager?",
    answer: "You transfer investment fiduciary liability to a registered investment advisor who acts on your behalf. Committee meetings shift from reviewing individual funds to focusing on participant outcomes and helping employees achieve comfortable retirement. Many sponsors reduce meeting frequency and committee size significantly, lowering costs. Research shows relief from worry and fiduciary risk is the primary motivator for business owners."
  },
  {
    question: "Does a 3(38) fiduciary eliminate all my liability?",
    answer: "No. You remain responsible for selecting and monitoring your 3(38) investment manager with the same fiduciary duty of prudence. You must demonstrate a prudent process for choosing us and periodically review our investment performance. However, you&apos;re no longer liable for specific investment decisions like fund selection or replacement. The 3(38) assumes that fiduciary responsibility under federal law."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "3(38) Investment Fiduciary Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "3(38) Investment Manager",
  areaServed: { "@type": "Country", name: "United States" }
};

export default function ThreeThirtyEightPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Fiduciary Support", href: "/corporate-retirement-plans/fiduciary-support" },
          { label: "3(38) Fiduciary Services" }
        ]}
        title="3(38) Investment Fiduciary Services"
        subtitle="You&apos;re responsible for your company&apos;s 401(k) plan, but managing investments isn&apos;t your expertise. PointOak Retirement Advisors acts as your 3(38) investment fiduciary, assuming full discretionary authority over plan investments so you can focus on running your business."
      />

      {/* Highlights Bar */}
      <section className="bg-cloud-blue py-8 md:py-10">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                <p className="text-text-gray font-outfit text-sm md:text-base leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Why Choose Us for 3(38) Investment Fiduciary Services?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              ERISA excessive fee litigation surged 35% in 2024, with the average settlement reaching $4.6 million. As plan fiduciaries, many plan sponsors face overwhelming fiduciary risk without the investment expertise to protect themselves. PointOak has been advising plan sponsors and participants since day one, acting as registered investment advisors under the Employee Retirement Income Security Act with full 3(38) named fiduciary status on every engagement.
            </p>
            <p>
              What sets us apart is our specialization. We generate over 90% of our revenue from corporate retirement plans, not general wealth management. Our investment methodology evaluates over $120 billion in retirement plan assets quarterly using a proprietary 10-point pass/fail scoring system. As your 3(38) investment manager, we handle all investment decisions on your behalf. We document everything in your Virtual 401(k) Fiduciary File to protect you if the DOL comes calling.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Services */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Our 3(38) Investment Manager Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">3(38) Investment Manager Services</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                As your 3(38) investment fiduciary, we accept full discretionary authority to select, monitor, and replace plan investments on your behalf. This transfers investment fiduciary responsibility from your committee to us under ERISA Section 3(38). Only registered investment advisors, banks, and insurance companies can serve in this fiduciary role under federal or state law. We make fund changes immediately when investment performance fails our criteria. No waiting for committee approval.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Investment Policy Statement Development</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We draft your Investment Policy Statement to document investment objectives, risk tolerance, and decision-making criteria. This IPS serves as your fiduciary roadmap and demonstrates prudent process during DOL audits or ERISA litigation. The Employee Retirement Income Security Act requires plan fiduciaries to follow plan documents and act in the best interest of plan participants. Your IPS aligns with participant demographics and plan design.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Quarterly Investment Monitoring</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our investment committee reviews your plan&apos;s fund lineup every quarter using institutional measurement techniques. We evaluate investment performance, expense ratios, style drift, and manager tenure against our proprietary 10-point scoring system. This ongoing due diligence ensures your investment portfolio meets ERISA requirements. Funds that fail our criteria get replaced automatically.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Investment Committee Services</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We establish or refine your Investment Committee structure and governance framework. Our financial advisors attend your committee meetings as named fiduciaries, providing direct investment advice and guiding strategic discussions. Committee meetings shift from reviewing individual fund performance to focusing on participant outcomes, retirement readiness, and plan design optimization. Many business owners report significant relief from no longer making complex investment decisions without proper investment expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Challenges Table */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Common Investment Fiduciary Challenges Nationwide
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-[#F3F4F6]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">Challenge</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">What It Looks Like</th>
                  <th className="px-6 py-4 text-left font-outfit text-base font-medium">How We Help</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">ERISA Litigation Exposure</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Excessive fee lawsuits increased 35% in 2024, with average settlements of $4.6 million. Even well-run plans get targeted by plaintiff firms pursuing fiduciary breach claims.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We assume full discretionary authority as your 3(38) fiduciary, transferring investment liability to us under federal law. Our fiduciary services include complete defense of investment decisions.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Investment Decision Complexity</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">40,000+ available investment options make selection overwhelming. Most committee members lack investment expertise to evaluate performance, expense ratios, and style drift properly.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our proprietary 10-point scoring system evaluates $120+ billion quarterly. We handle all investment due diligence using institutional measurement techniques our investment professionals apply systematically.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Time Burden on Executives</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Managing plan investments equals a part-time job. Committee meetings consume travel costs, billable hours, and executive focus. Business owners need to run their companies, not manage investment portfolios.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Clients reduce committee size from eight to two and switch from quarterly to semiannual meetings, cutting costs significantly while improving plan decisions.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">DOL Audit Anxiety</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">67% of DOL investigations result in monetary penalties or corrective action. Most sponsors lack proper documentation showing they followed correct procedures and fiduciary process requirements.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We maintain your Virtual 401(k) Fiduciary File with complete documentation of every investment decision and quarterly review, demonstrating compliance with ERISA requirements.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fear of Personal Liability</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Plan fiduciaries face personal fiduciary liability for breaches. Many executives don&apos;t realize they&apos;re fiduciaries until receiving lawsuit notice, despite ERISA defining broad fiduciary roles.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our 3(38) named fiduciary status transfers investment fiduciary responsibility to us, a registered investment advisor under federal law acting solely in participants&apos; best interest.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our Process */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Process
          </h2>
          <div className="relative">
            <div className="absolute left-[19px] top-10 bottom-10 w-px bg-[#C1C5C9] hidden sm:block" />
            <div className="flex flex-col gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-10 h-10 rounded-full bg-medium-blue flex items-center justify-center">
                      <span className="font-outfit font-semibold text-white text-lg leading-none">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="text-navy font-outfit text-lg lg:text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-text-gray font-outfit text-base leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* About */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            About PointOak Retirement Advisors
          </h2>
          <p className="text-text-gray font-outfit text-base leading-relaxed">
            PointOak Retirement Advisors is an independent retirement plan consulting firm headquartered in McLean, Virginia, serving plan sponsors nationwide. The firm generates over 90% of its revenue from corporate retirement plans and acts as a 3(21) or 3(38) named fiduciary under ERISA with every client. PointOak evaluates over $120 billion in retirement plan assets quarterly.
          </p>
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
