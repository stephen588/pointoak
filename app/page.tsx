import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhoWeServe from "@/components/WhoWeServe";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import Experience from "@/components/Experience";
import Associations from "@/components/Associations";
import Advocate from "@/components/Advocate";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

// JSON-LD structured data for rich search results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "PointOak Retirement Advisors",
  url: "https://www.pointoak.com",
  logo: "https://www.pointoak.com/images/pointoak-logo.png",
  description:
    "Independent, fee-only fiduciary wealth management for high-net-worth individuals and families. Retirement planning, investment management, tax-efficient strategies, and 401(k) rollover guidance.",
  areaServed: [
    { "@type": "State", name: "District of Columbia" },
    { "@type": "State", name: "Maryland" },
    { "@type": "State", name: "Virginia" },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: [
    "Wealth Management",
    "Retirement Planning",
    "Investment Management",
    "Financial Planning",
    "401(k) Rollover",
    "Tax-Efficient Investing",
    "Social Security Optimization",
  ],
  knowsAbout: [
    "Fiduciary Wealth Management",
    "Fee-Only Financial Advisory",
    "Retirement Income Planning",
    "High Net Worth Wealth Management",
    "SEC Registered Investment Advisor",
  ],
  slogan: "Analyze. Optimize. Maximize.",
  foundingDate: "2017",
  sameAs: [],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does it mean to be a fee-only fiduciary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As a fee-only fiduciary, PointOak is legally obligated to act in your best interest. We earn no commissions or kickbacks from product sales — our only compensation comes directly from the advisory fees you pay, eliminating conflicts of interest.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum investment to work with PointOak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PointOak primarily works with high-net-worth individuals and families. Contact us for a complimentary consultation to discuss your specific situation and needs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve clients outside the DC metro area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While we are based in the DC, Maryland, and Virginia metro area, we serve clients nationwide through virtual meetings and comprehensive digital collaboration.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <Hero />
      <StatsBar />
      <WhyChooseUs />
      <WhoWeServe />
      <Services />
      <HowItWorks />
      <Associations />
      <Comparison />
      {/* Fiduciary seal overlapping Comparison→Experience boundary */}
      <div className="relative">
        <div className="absolute -top-[180px] right-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] z-10 pointer-events-none">
          <img
            src="/images/fiduciary-seal-v2.png"
            alt="Fiduciary Seal"
            className="w-full h-full object-contain opacity-20"
          />
        </div>
      </div>
      <Experience />
      <Advocate />
      <Testimonials />
      <CTASection />
      <FAQ />
      <Footer />
    </main>
  );
}
