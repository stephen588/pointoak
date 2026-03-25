import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "3(21) Fiduciary Advisor for Retirement Plans | PointOak",
  description: "3(21) fiduciary advisor sharing your 401(k) liability. Expert investment advice, independent recommendations. 90% retirement specialists. Get started today.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/fiduciary-support/3-21/"
  }
};

const highlights = [
  "Named fiduciary acting in participants' best interests",
  "90% revenue from retirement plan advising exclusively",
  "Independent advice free from conflicts of interest"
];

const processSteps = [
  {
    number: 1,
    title: "Initial Consultation",
    description: "You schedule a consultation. We respond within 24 hours to understand your fiduciary responsibilities."
  },
  {
    number: 2,
    title: "Comprehensive Plan Analysis",
    description: "We analyze your plan's assets, fees, and investment options. You receive detailed findings within two weeks."
  },
  {
    number: 3,
    title: "Strategic Recommendations",
    description: "We provide investment recommendations on funds, fees, and compliance. You decide what investment decisions to implement."
  },
  {
    number: 4,
    title: "Implementation & Ongoing Support",
    description: "We implement approved changes on your behalf. Quarterly monitoring keeps investments aligned with participants' best interests and ERISA requirements."
  }
];

const faqs = [
  {
    question: "How much does a 3(21) fiduciary advisor cost?",
    answer: "3(21) fiduciary advisor fees typically range from 0.25% to 1.00% of plan assets annually. Smaller plans under $1 million may pay 0.75%-1.00%, while larger plans often pay 0.25%-0.50%. We provide transparent cost quotes with no hidden service provider fees or revenue sharing arrangements."
  },
  {
    question: "What makes PointOak different from other 3(21) advisors?",
    answer: "Three key differences: we generate over 90% of revenue from retirement plan fiduciary services (true specialists, not generalists), we're an independent registered investment advisor with zero conflicts from parent companies, and our investment methodology evaluates $120 billion using institutional-grade analytics."
  },
  {
    question: "How long does it take to implement 3(21) fiduciary services?",
    answer: "Initial plan analysis takes 2-3 weeks. Implementing our investment recommendations typically spans 30-90 days. Quarterly monitoring of investment performance begins immediately. Most plan sponsors see measurable improvements in documentation and fee competitiveness within 90 days."
  },
  {
    question: "What is the difference between a 3(21) and 3(38) fiduciary?",
    answer: "A 3(21) investment advisor is a co-fiduciary who provides investment recommendations, but you retain final authority over investment decisions. A 3(38) investment manager has full discretion to select and replace investments without employer approval. The 3(21) costs less and maintains your control, while the 3(38) offers maximum liability transfer."
  },
  {
    question: "Can a 3(21) fiduciary help reduce my liability?",
    answer: "Yes. As a named fiduciary under ERISA, we share fiduciary responsibilities and render investment advice you can rely upon. While you retain final authority, courts recognize that acting on prudent 3(21) investment recommendations significantly reduces business owner personal liability exposure."
  },
  {
    question: "Are all financial advisors fiduciaries?",
    answer: "No. Many are broker-dealers held only to a 'suitability' standard, meaning they must recommend appropriate investment options but not necessarily the best choices serving participants' best interests. Only registered investment advisors are legally required to act as investment fiduciaries. Always ask if your advisor is a fiduciary 100% of the time."
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "3(21) Fiduciary Advisor Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "3(21) Co-Fiduciary Advisory",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function ThreeTwentyOnePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Fiduciary Support", href: "/corporate-retirement-plans/fiduciary-support" },
          { label: "3(21) Fiduciary Services" }
        ]}
        title="3(21) Fiduciary Advisor Services"
        subtitle="As your 3(21) fiduciary advisor, PointOak shares the burden of advising plan sponsors while you retain control over investment decisions. We navigate ERISA's fiduciary responsibilities so you can focus on running your business."
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
            Why Choose Us for 3(21) Fiduciary Advisory?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              The Department of Labor restored nearly $1.4 billion to retirement plans last year due to fiduciary breaches. We&apos;ve been advising plan fiduciaries since day one, wholly focused on fiduciary responsibilities for plan sponsors nationwide.
            </p>
            <p>
              What sets us apart is our specialization. We generate over 90% of our revenue from corporate retirement plan advisory services. As an independently owned registered investment advisor, we offer unbiased guidance without pressure to push proprietary products.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Our 3(21) Services */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Our 3(21) Fiduciary Advisory Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">3(21) Co-Fiduciary Services</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We provide investment recommendations while you retain authority over final investment decisions. We share fiduciary liability without taking discretionary authority over your plan&apos;s assets. Acting as your named fiduciary under ERISA, we render investment advice in your plan participants&apos; best interests.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Investment Policy Statement Development</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Your IPS outlines investment objectives required under ERISA. We draft comprehensive IPS documents aligned with plan participants&apos; needs and your fiduciary duties, creating the foundation for prudent management of plan assets.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Investment Monitoring & Committee Support</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our quarterly investment monitoring uses institutional techniques to evaluate investment performance. We attend Investment Committee meetings to present analysis, answer questions, and document decisions using our proprietary 10-point scoring system.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Provider & Fee Benchmarking</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our Live Bid process analyzes 450+ data points per bidder using your actual plan information. We review recordkeepers, TPAs, and investment managers to ensure reasonable compensation, exceeding the DOL&apos;s three-year benchmarking requirement with annual reviews.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Virtual 401(k) Fiduciary File</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Every investment decision, committee meeting, and recommendation gets recorded in your Virtual 401(k) Fiduciary File. This comprehensive documentation demonstrates your prudent process and protects plan fiduciaries from DOL audits.
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
            Common 3(21) Fiduciary Challenges
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
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">ERISA complexity</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Most business owners lack the expertise required under the Prudent Expert Standard.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We provide guidance on fiduciary duties and implement documented best practices.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Personal liability</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Recent lawsuits resulted in $50M+ settlements against employers.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">As your named fiduciary, we share liability and minimize your risk exposure.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Fee benchmarking</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">84% of plans have violations. Hidden fees make true costs unclear.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Live Bid benchmarking reviews recordkeeper, TPA, and investment manager fees annually.</td>
                </tr>
                <tr className="bg-cloud-blue">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Investment selection</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">40,000+ investment options. Plan sponsors lack expertise to evaluate them.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Our methodology evaluates $120B quarterly using institutional metrics.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-outfit text-base text-text-gray font-medium">Conflicted advice</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">Recordkeeper-affiliated advisors have inherent conflicts of interest.</td>
                  <td className="px-6 py-4 font-outfit text-sm text-text-gray">We&apos;re an independent RIA with no parent company or revenue sharing.</td>
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
