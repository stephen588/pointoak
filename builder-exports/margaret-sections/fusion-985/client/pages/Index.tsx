import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import AdvocateSection from "@/components/AdvocateSection";
import IndustrySection from "@/components/IndustrySection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <AdvocateSection />
        <IndustrySection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
