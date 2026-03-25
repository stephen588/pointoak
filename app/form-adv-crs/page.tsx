import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { FileText, Download } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Form ADV & CRS | PointOak Retirement Advisors",
  description: "Download PointOak Retirement Advisors Form ADV Part 2A, Part 2B, and Form CRS. Required regulatory disclosures about our advisory services, fees, and obligations.",
  alternates: {
    canonical: "https://www.pointoak.com/form-adv-crs/"
  }
};

export default function FormADVCRSPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Form ADV & CRS" }]}
        title="Form ADV & Client Relationship Summary"
        subtitle="Required regulatory disclosures about our services, fees, and obligations"
      />

      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[800px] mx-auto px-6 xl:px-0">
          <div className="space-y-10">

            {/* Intro */}
            <div>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                As a registered investment advisor, PointOak Retirement Advisors, LLC is required to provide certain regulatory disclosures to clients and prospective clients. These documents describe our services, fees, obligations, conflicts of interest, and other important information you should know before engaging our services.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The documents below are available for download. If you have any questions about the information contained in these disclosures, please contact us directly.
              </p>
            </div>

            {/* Form ADV Part 2A */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-cloud-blue flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h2 className="text-navy font-outfit text-2xl font-light mb-2">Form ADV Part 2A - Firm Brochure</h2>
                  <p className="text-text-gray font-outfit text-sm italic">Required disclosure document for all registered investment advisors</p>
                </div>
              </div>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Form ADV Part 2A is the firm&apos;s disclosure brochure. This document provides detailed information about PointOak Retirement Advisors, LLC, including:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Types of advisory services offered",
                  "Fee schedules and compensation structures",
                  "Disciplinary information and legal disclosures",
                  "Conflicts of interest and how we address them",
                  "Investment strategies and risk factors",
                  "Client obligations and our fiduciary responsibilities",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-gray font-outfit text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-navy text-white font-outfit text-sm px-6 py-3 rounded-lg hover:bg-navy/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Form ADV Part 2A
              </a>
            </div>

            {/* Form ADV Part 2B */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-cloud-blue flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h2 className="text-navy font-outfit text-2xl font-light mb-2">Form ADV Part 2B - Brochure Supplement</h2>
                  <p className="text-text-gray font-outfit text-sm italic">Individual advisor disclosure for supervised persons</p>
                </div>
              </div>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Form ADV Part 2B provides information about the individual advisors who will be working with you. This supplement includes:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Educational background and business experience",
                  "Professional designations and certifications",
                  "Disciplinary information, if any",
                  "Other business activities and potential conflicts",
                  "Additional compensation arrangements",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-gray font-outfit text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-navy text-white font-outfit text-sm px-6 py-3 rounded-lg hover:bg-navy/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Form ADV Part 2B
              </a>
            </div>

            {/* Form CRS */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-cloud-blue flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h2 className="text-navy font-outfit text-2xl font-light mb-2">Form CRS - Client Relationship Summary</h2>
                  <p className="text-text-gray font-outfit text-sm italic">Plain-language summary of our client relationship</p>
                </div>
              </div>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Form CRS (Client Relationship Summary) is a brief, plain-language summary designed to help you understand:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "The types of client relationships and services we offer",
                  "The fees, costs, conflicts of interest, and required standard of conduct associated with those relationships and services",
                  "Whether we or our financial professionals have reportable legal or disciplinary history",
                  "How to get additional information about us",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-gray font-outfit text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-navy text-white font-outfit text-sm px-6 py-3 rounded-lg hover:bg-navy/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Form CRS
              </a>
            </div>

            {/* Request Copies */}
            <div className="bg-cloud-blue rounded-lg p-8">
              <h3 className="text-navy font-outfit text-xl font-medium mb-3">Request Printed Copies</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                If you would like to receive printed copies of any of these documents, or if you have questions about the information they contain, please contact us:
              </p>
              <div className="bg-white rounded-lg p-6">
                <p className="text-navy font-outfit text-base font-medium">PointOak Retirement Advisors, LLC</p>
                <p className="text-text-gray font-outfit text-sm mt-1">McLean, Virginia</p>
                <p className="text-text-gray font-outfit text-sm mt-1">
                  Website: <a href="https://www.pointoak.com/contact/" className="text-navy hover:underline">pointoak.com/contact</a>
                </p>
              </div>
            </div>

            {/* Additional Resources */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Additional Resources</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                You can also find additional information about PointOak Retirement Advisors, LLC and our advisors through the SEC&apos;s Investment Adviser Public Disclosure (IAPD) website at <a href="https://adviserinfo.sec.gov/" target="_blank" rel="noopener noreferrer" className="text-navy hover:underline">adviserinfo.sec.gov</a>.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                For more information about our services, please visit our <a href="/disclosures/" className="text-navy hover:underline">Important Disclosures</a> page.
              </p>
            </div>

          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Disclaimer */}
      <AnimateOnScroll>
      <section className="bg-cloud-blue py-6">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <p className="font-outfit text-medium-gray text-xs leading-relaxed">
            Investment advisory services offered through PointOak Retirement Advisors, LLC. This site is published for residents of the United States only. PointOak Retirement Advisors, LLC does not provide tax or legal advice.
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      <Footer />
    </main>
  );
}
