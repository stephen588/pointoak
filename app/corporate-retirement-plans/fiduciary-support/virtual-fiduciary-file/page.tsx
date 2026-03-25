import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceDetailFAQ from "@/components/ServiceDetailFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Virtual 401(k) Fiduciary File | PointOak",
  description: "Expert 401(k) fiduciary documentation with Virtual Fiduciary File. Named 3(21)/3(38) fiduciary status. Protect against DOL audits and personal liability.",
  alternates: {
    canonical: "https://www.pointoak.com/corporate-retirement-plans/fiduciary-support/virtual-fiduciary-file/"
  }
};

const highlights = [
  "Named 3(21) or 3(38) fiduciary status",
  "Virtual 401(k) Fiduciary File system included",
  "Meticulous documentation for audit protection"
];

const processSteps = [
  {
    number: 1,
    title: "Document Assessment",
    description: "We review your current fiduciary documentation to identify gaps in plan administration, investment management, and compliance that could expose you to liability."
  },
  {
    number: 2,
    title: "Documentation System Setup",
    description: "You receive your customized Virtual 401(k) Fiduciary File with all required plan documents, participant records, and fiduciary files organized systematically for plan management."
  },
  {
    number: 3,
    title: "Process Implementation",
    description: "We implement documentation protocols for Investment Committee meetings, provider evaluations, fee benchmarking, and investment monitoring aligned with your plan&apos;s needs."
  },
  {
    number: 4,
    title: "Ongoing Documentation & Monitoring",
    description: "Your fiduciary decisions, quarterly investment reviews, monitoring activities, and compliance activities are automatically documented and maintained in your centralized file system."
  },
  {
    number: 5,
    title: "Annual Review & Updates",
    description: "We conduct comprehensive annual reviews that document your ongoing oversight, update processes for regulatory changes, and strengthen your audit readiness."
  }
];

const faqs = [
  {
    question: "What documents are required for 401(k) fiduciary compliance?",
    answer: "Required plan documents include the Plan Document, Trust Agreement, Summary Plan Description, Investment Policy Statement, Form 5500 filings, and Investment Committee meeting minutes. You also need documented records of provider selection and monitoring, fee benchmarking analyses, investment performance reviews, participant communications, and loan/distribution documentation. We maintain all required fiduciary documentation in your Virtual 401(k) Fiduciary File."
  },
  {
    question: "What makes PointOak Retirement Advisors different from other advisory firms?",
    answer: "Three key advantages: we generate over 90% of our revenue from retirement plans (true specialists, not generalists), all our advisors act as named 3(21) or 3(38) fiduciary roles providing direct liability protection, and our meticulous Virtual 401(k) Fiduciary File documents everything to protect you from liability if audited by government agencies."
  },
  {
    question: "Should I maintain separate documentation from my recordkeeper&apos;s records?",
    answer: "Yes. While recordkeepers maintain participant accounts and transaction records, plan sponsors need independent documentation of fiduciary decisions, Investment Committee meetings, provider evaluations, and fee benchmarking processes. Your Virtual 401(k) Fiduciary File ensures you maintain complete, independent records of all fiduciary activities regardless of provider relationships."
  },
  {
    question: "How long should I keep 401(k) plan records and fiduciary documentation?",
    answer: "ERISA regulations require plan documents be retained for six years after filing the Form 5500 they relate to. Best practice is indefinite retention for plan documents, seven-plus years for operational records, and permanent retention for Investment Committee minutes. We organize your documentation with clear retention schedules ensuring compliance with IRS rules and ERISA standards."
  },
  {
    question: "How do I document Investment Committee meetings to protect against liability?",
    answer: "Effective committee documentation includes meeting agendas, attendance records, materials reviewed, discussions of key decision factors, voting records on decisions, and clear rationale for choices made. The critical element is documenting the &apos;why&apos; behind decisions to demonstrate you followed a prudent process. We provide standardized templates and documentation protocols."
  },
  {
    question: "What happens during a DOL audit and what documentation will they request?",
    answer: "DOL investigators typically request plan documents, Form 5500 filings, Investment Committee meeting minutes, service provider agreements, fee disclosure documents, participant communications, payroll records, loan documentation, and distribution records. With our Virtual 401(k) Fiduciary File, you have all requested documentation organized and immediately accessible, significantly reducing the time burden and stress."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Virtual 401(k) Fiduciary File Services",
  provider: { "@type": "FinancialService", name: "PointOak Retirement Advisors" },
  serviceType: "Fiduciary Documentation",
  areaServed: { "@type": "Country", name: "United States" }
};

export default function VirtualFiduciaryFilePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <PageHero
        breadcrumbs={[
          { label: "For Businesses", href: "/corporate-retirement-plans" },
          { label: "Fiduciary Support", href: "/corporate-retirement-plans/fiduciary-support" },
          { label: "Virtual Fiduciary File" }
        ]}
        title="Virtual 401(k) Fiduciary File"
        subtitle="You know that maintaining proper fiduciary documentation protects you from personal liability, but keeping up with ERISA requirements while running your business feels overwhelming. PointOak Retirement Advisors provides systematic, technology-driven documentation processes that protect plan sponsors nationwide from fiduciary breaches and DOL scrutiny."
      />

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

      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-6">
            Why Choose Us for 401(k) Fiduciary Documentation?
          </h2>
          <div className="space-y-4 text-text-gray font-outfit text-base leading-relaxed">
            <p>
              PointOak has been wholly focused on the retirement plan industry since day one, generating over 90% of our revenue from working with corporate retirement plans. As investment fiduciary specialists rather than generalists, we serve plan sponsors across the United States with expertise in documenting core fiduciary duties and protecting business owners from compliance issues.
            </p>
            <p>
              What sets us apart is our meticulous, technology-driven process developed over years of client engagement experiences. We document everything we do with clients to help protect them from liability if they get audited. Our Virtual 401(k) Fiduciary File maintains all processes and procedures, giving you a defensible audit trail that demonstrates prudent process at every step.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            Our Fiduciary Documentation Services
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Virtual 401(k) Fiduciary File</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our Virtual 401(k) Fiduciary File is a digital documentation system that maintains all fiduciary processes and procedures in one centralized, organized platform. This system ensures you have complete, contemporaneous documentation of plan administration, plan investments, and all key responsibilities that demonstrates compliance with ERISA standards. The Virtual 401(k) Fiduciary File automatically tracks every fiduciary decision, meeting minute, provider evaluation, and investment review.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Investment Policy Statement Development</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our Investment Policy Statement development service creates comprehensive IPS documents that outline investment objectives and guidelines for selecting investments and diversifying plan investments. A well-documented IPS serves as your roadmap for prudent investment decisions and demonstrates your fiduciary process to regulators. We draft IPS documents aligned with your plan goals and participant demographics.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Investment Committee Services</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We help identify or establish your plan&apos;s Investment Committee structure and provide ongoing documentation of committee governance. Properly documented committee meetings, decisions, and rationales protect individual committee members from personal liability while demonstrating prudent fiduciary process and investment oversight. Our investment committee documentation includes detailed meeting minutes, decision frameworks, and rationale documentation.
              </p>
            </div>
            <div className="border-l-4 border-medium-blue pl-6">
              <h3 className="text-navy font-outfit text-xl lg:text-2xl font-medium mb-3">Annual Fiduciary Plan Review</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our annual fiduciary plan review provides comprehensive documentation of your plan&apos;s health, compliance status, and fiduciary responsibilities. This yearly documentation process creates a clear record of investment oversight, monitoring service providers, and plan fees that satisfies DOL requirements. The annual review presentation documents your ongoing fiduciary diligence, including investment performance analysis and fee benchmarking results.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy font-outfit text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-10">
            What To Expect: Our Documentation Process
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

      <AnimateOnScroll>
      <section className="bg-cloud-blue py-12 md:py-16 lg:py-20">
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
