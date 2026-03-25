"use client";

import Link from "next/link";
import Image from "next/image";
import { useConsultationModal } from "./ConsultationModalProvider";

export default function Advocate() {
  const { openModal } = useConsultationModal();
  return (
    <section className="bg-cloud-blue py-12 md:py-20 lg:py-28">
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <h2 className="font-outfit text-navy text-3xl md:text-4xl font-light leading-snug mb-4 md:mb-6">
              Your Personal Financial Advocate
            </h2>
            <div className="space-y-5 font-poppins text-text-gray text-base leading-relaxed">
              <p>
                Our primary goal is to take things off your plate. We act as your advocate,
                identifying gaps in your planning, proactively solving problems, and streamlining
                every aspect of your financial life. By handling the heavy lifting, we ensure your
                experience is seamless, efficient, and focused on your long-term peace of mind.
              </p>
              <p>
                With just three partners managing over $1 billion, we offer intimacy and white-glove
                attention that&apos;s virtually impossible at larger firms. You&apos;re not another account
                number. You&apos;re a valued relationship. We&apos;re available when you need us, proactive in
                our guidance, and committed to your success.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={openModal}
                className="font-outfit inline-flex items-center gap-2 bg-navy text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-navy/90 transition-colors"
              >
                Get Started
                <svg width="14" height="10" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1496 0.139911L15.3706 5.36096C15.4615 5.45187 15.5125 5.57516 15.5125 5.70372C15.5125 5.83228 15.4615 5.95557 15.3706 6.04648L10.1496 11.2675C10.0585 11.3575 9.93546 11.4078 9.8074 11.4074C9.67934 11.407 9.55664 11.356 9.46609 11.2655C9.37554 11.1749 9.32449 11.0522 9.3241 10.9241C9.32371 10.7961 9.37401 10.6731 9.46401 10.582L13.8575 6.18849L0.484769 6.18849C0.3562 6.18849 0.232897 6.13741 0.141986 6.0465C0.0510739 5.95559 0 5.83229 0 5.70372C0 5.57515 0.0510739 5.45185 0.141986 5.36094C0.232897 5.27002 0.3562 5.21895 0.484769 5.21895L13.8575 5.21895L9.46401 0.825464C9.37401 0.734365 9.32371 0.611355 9.3241 0.483298C9.32449 0.355239 9.37554 0.232537 9.46609 0.141985C9.55664 0.0514338 9.67934 0.000390308 9.8074 2.15673e-06C9.93546 -0.000386948 10.0585 0.0499108 10.1496 0.139911Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative flex items-center justify-center">
            <Image
              src="/images/advocate-hexagons-v2.png"
              alt="White-Glove Service, Direct Partner Access, Proactive Guidance"
              width={1200}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
