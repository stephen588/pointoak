"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useConsultationModal } from "@/components/ConsultationModalProvider";
import { Shield, BarChart3, GraduationCap, Settings, Search, Target } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const services = [
  {
    title: "Fiduciary Support",
    description:
      "ERISA and the Department of Labor require you as plan sponsors and fiduciaries to act in the best interests of the plan participants \u2013 your valued employees. Acting as your named fiduciary under ERISA, we provide the support and advice you need to help meet your obligations.",
    icon: Shield,
  },
  {
    title: "Investment Analysis",
    description:
      "Align your investments with your plan\u2019s goals. With our guidance, you create, select and monitor the investments in your plan\u2019s menu. We help identify when investments begin to deviate from your investment strategy and recommend changes. You will no longer have to navigate these waters alone.",
    icon: BarChart3,
  },
  {
    title: "Education & Communications",
    description:
      "Improve plan participation and motivate your workforce. Make certain that employees\u2019 questions are answered and create an environment that encourages employees to take an active role in saving for their future needs.",
    icon: GraduationCap,
  },
  {
    title: "Plan Design",
    description:
      "It\u2019s complicated. With so many features and options available, how do you design a retirement plan that\u2019s right for everyone? With a customized plan design, we tell you what you need to know and guide you to a plan that is optimized for your company and its participants.",
    icon: Settings,
  },
  {
    title: "Provider and Fee Benchmarking",
    description:
      "Selecting and monitoring your plan provider and keeping fees reasonable are vital functions of your fiduciary responsibility. You\u2019re required to adhere to ERISA standards of prudence. As your advocate, we help to facilitate, monitor, and strengthen your provider relationships while ensuring your plan is competitive in your market.",
    icon: Search,
  },
  {
    title: "Target Date Fund (TDF) Consulting",
    description:
      "Traditional TDF or customized solution? We have a multi-step suitability and selection process to identify the TDF best aligned with your participants\u2019 characteristics. We then provide documentation and communication support for your fiduciary file and employees.",
    icon: Target,
  },
];

function ServiceBlock({ service, index }: { service: typeof services[0]; index: number }) {
  const { openModal } = useConsultationModal();
  const isEven = index % 2 === 0;
  const Icon = service.icon;
  
  return (
    <div className={`${isEven ? "bg-white" : "bg-cloud-blue"} py-12 md:py-16 lg:py-20`}>
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-16 items-center">
          {/* Icon — smaller on mobile */}
          <div className={`lg:col-span-2 flex items-center justify-center ${!isEven ? "lg:order-2" : ""}`}>
            <div className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full bg-navy/[0.06] flex items-center justify-center">
              <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] rounded-full bg-navy/[0.06] flex items-center justify-center">
                <Icon className="w-9 h-9 md:w-14 md:h-14 lg:w-16 lg:h-16 text-navy/70" strokeWidth={1.2} />
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className={`lg:col-span-3 ${!isEven ? "lg:order-1" : ""}`}>
            <h3 className="font-outfit text-navy text-2xl lg:text-3xl font-light mb-5 leading-snug">
              {service.title}
            </h3>
            <p className="font-outfit text-navy text-base leading-relaxed mb-6">
              {service.description}
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-[7px] text-white text-[16px] font-medium capitalize transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}
            >
              Schedule a Consultation
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1496 0.139911L15.3706 5.36096C15.4615 5.45187 15.5125 5.57516 15.5125 5.70372C15.5125 5.83228 15.4615 5.95557 15.3706 6.04648L10.1496 11.2675C10.0585 11.3575 9.93546 11.4078 9.8074 11.4074C9.67934 11.407 9.55664 11.356 9.46609 11.2655C9.37554 11.1749 9.32449 11.0522 9.3241 10.9241C9.32371 10.7961 9.37401 10.6731 9.46401 10.582L13.8575 6.18849L0.484769 6.18849C0.3562 6.18849 0.232897 6.13741 0.141986 6.0465C0.0510739 5.95559 0 5.83229 0 5.70372C0 5.57515 0.0510739 5.45185 0.141986 5.36094C0.232897 5.27002 0.3562 5.21895 0.484769 5.21895L13.8575 5.21895L9.46401 0.825464C9.37401 0.734365 9.32371 0.611355 9.3241 0.483298C9.32449 0.355239 9.37554 0.232537 9.46609 0.141985C9.55664 0.0514338 9.67934 0.000390308 9.8074 2.15673e-06C9.93546 -0.000386948 10.0585 0.0499108 10.1496 0.139911Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Hero — left aligned with breadcrumb, matching About page */}
      <AnimateOnScroll>
      <section 
        className="min-h-[400px] md:min-h-[500px] flex items-center pt-[78px]"
        style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}
      >
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 w-full">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="flex items-center gap-2 text-white/60 text-sm font-outfit">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Our Services</span>
            </nav>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-outfit text-white text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.4] mb-6">
              A sensible retirement framework for your company.
            </h1>
            <p className="font-outfit text-white/90 text-base md:text-lg lg:text-xl leading-relaxed pb-8 md:pb-0">
              As a business owner, you wear many hats. Managing a world-class retirement plan doesn&apos;t have to be another checkbox on your to-do list. As stakeholders in your continued success, Point Oak is committed to making sure your retirement plan needs are met, which includes helping you identify needs you may not know you have. We tackle the complexities of your plan so that you can concentrate on growing your business. Here&apos;s how we do it:
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Services Section */}
      <main>
        {services.map((service, index) => (
          <ServiceBlock key={service.title} service={service} index={index} />
        ))}
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
