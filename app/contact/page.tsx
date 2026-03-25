"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <AnimateOnScroll>
      <section
        className="min-h-[400px] md:min-h-[500px] flex items-center pt-[78px]"
        style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}
      >
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 w-full">
          <div className="mb-6">
            <nav className="flex items-center gap-2 text-white/60 text-sm font-outfit">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Contact</span>
            </nav>
          </div>
          <div className="max-w-4xl">
            <h1 className="font-outfit text-white text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.4] mb-6">
              Get In Touch
            </h1>
            <p className="font-outfit text-white/90 text-base md:text-lg lg:text-xl leading-relaxed pb-8 md:pb-0">
              We&apos;d love to hear from you. Whether you have a question about our services, want to schedule a consultation, or just want to learn more about how we can help — reach out and we&apos;ll get back to you promptly.
            </p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Contact Info + Form */}
      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — Contact Info */}
            <div>
              <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-8">
                Contact Information
              </h2>

              <div className="flex flex-col gap-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z" fill="#003754"/>
                      <path d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z" fill="#003754"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-outfit text-navy font-medium text-lg mb-1">Office</h3>
                    <a
                      href="https://maps.google.com/?q=1751+Pinnacle+Drive+Suite+600+McLean+VA+22102"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-outfit text-text-gray text-base leading-7 hover:text-navy transition-colors"
                    >
                      PointOak Retirement Advisors, LLC<br />
                      1751 Pinnacle Drive, Suite 600<br />
                      McLean, VA 22102
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.905 3.75C4.95 4.4175 5.0625 5.07 5.2425 5.6925L4.3425 6.5925C4.035 5.6925 3.84 4.74 3.7725 3.75H4.905ZM12.3 12.765C12.9375 12.945 13.59 13.0575 14.25 13.1025V14.22C13.26 14.1525 12.3075 13.9575 11.4 13.6575L12.3 12.765ZM5.625 2.25H3C2.5875 2.25 2.25 2.5875 2.25 3C2.25 10.0425 7.9575 15.75 15 15.75C15.4125 15.75 15.75 15.4125 15.75 15V12.3825C15.75 11.97 15.4125 11.6325 15 11.6325C14.07 11.6325 13.1625 11.4825 12.3225 11.205C12.2475 11.175 12.165 11.1675 12.09 11.1675C11.895 11.1675 11.7075 11.2425 11.5575 11.385L9.9075 13.035C7.785 11.9475 6.045 10.215 4.965 8.0925L6.615 6.4425C6.825 6.2325 6.885 5.94 6.8025 5.6775C6.525 4.8375 6.375 3.9375 6.375 3C6.375 2.5875 6.0375 2.25 5.625 2.25Z" fill="#003754"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-outfit text-navy font-medium text-lg mb-1">Phone</h3>
                    <a href="tel:+17035954444" className="font-outfit text-text-gray text-base hover:text-navy transition-colors">
                      (703) 595-4444
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 3H3C2.175 3 1.5075 3.675 1.5075 4.5L1.5 13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V4.5C16.5 3.675 15.825 3 15 3ZM15 13.5H3V6L9 9.75L15 6V13.5ZM9 8.25L3 4.5H15L9 8.25Z" fill="#003754"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-outfit text-navy font-medium text-lg mb-1">Email</h3>
                    <a href="mailto:info@pointoak.com" className="font-outfit text-text-gray text-base hover:text-navy transition-colors">
                      info@pointoak.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map with blue tint */}
              <div className="mt-10 rounded-[12px] overflow-hidden border-2 border-navy/10 shadow-lg shadow-navy/5 ring-1 ring-navy/5">
                <div className="bg-navy/[0.03] p-1.5">
                  <div className="rounded-[8px] overflow-hidden relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.3!2d-77.2195!3d38.9275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64a8d21a1e5b7%3A0x5e3b5d5e5e5e5e5e!2s1751%20Pinnacle%20Dr%20%23600%2C%20McLean%2C%20VA%2022102!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                      width="100%"
                      height="350"
                      style={{ border: 0, filter: "saturate(0.3) hue-rotate(190deg) brightness(1.05)" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="PointOak Office Location"
                    ></iframe>
                    <div className="absolute inset-0 bg-navy/[0.08] pointer-events-none mix-blend-multiply" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div>
              <h2 className="font-outfit text-navy text-2xl md:text-3xl font-light mb-8">
                Send Us a Message
              </h2>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      <Footer />
    </div>
  );
}
