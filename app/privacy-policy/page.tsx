import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Privacy Policy | PointOak Retirement Advisors",
  description: "Privacy policy for PointOak Retirement Advisors. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://www.pointoak.com/privacy-policy/"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Privacy Policy" }]}
        title="Privacy Policy"
        subtitle="Last updated: March 2026"
      />

      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[800px] mx-auto px-6 xl:px-0">
          <div className="space-y-10">

            {/* Introduction */}
            <div>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                PointOak Retirement Advisors, LLC (&quot;PointOak,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at pointoak.com or engage with our services. Please read this policy carefully. By accessing or using our website, you agree to the terms of this Privacy Policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Information We Collect</h2>

              <h3 className="text-navy font-outfit text-lg font-medium mb-2">Personal Information</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide when you contact us through our website, request a consultation, subscribe to communications, or otherwise interact with us. This may include:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Name, email address, phone number, and company name",
                  "Job title and professional role",
                  "Information about your retirement plan or financial needs",
                  "Any other information you choose to provide in forms or communications",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-gray font-outfit text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-navy font-outfit text-lg font-medium mb-2">Automatically Collected Information</h3>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                When you visit our website, we may automatically collect certain information including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits. We may use cookies and similar tracking technologies to collect this information.
              </p>
            </div>

            {/* How We Use */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">How We Use Your Information</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">We may use the information we collect to:</p>
              <ul className="space-y-2">
                {[
                  "Respond to your inquiries and provide the services you request",
                  "Communicate with you about our services, including updates and educational content",
                  "Improve our website, services, and user experience",
                  "Comply with legal obligations and regulatory requirements",
                  "Protect against fraudulent, unauthorized, or illegal activity",
                  "Analyze website usage and trends to improve functionality",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-gray font-outfit text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sharing */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Sharing Your Information</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="space-y-2">
                {[
                  "With service providers who assist us in operating our website and delivering our services",
                  "When required by law, regulation, or legal process",
                  "To protect the rights, property, or safety of PointOak, our clients, or others",
                  "In connection with a merger, acquisition, or sale of all or a portion of our assets",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-gray font-outfit text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings. Disabling cookies may limit certain features of our website.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Data Security</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Third-Party Links</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Children&apos;s Privacy</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our website is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that we have collected personal information from a child under 18, we will take steps to delete that information promptly.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Your Rights</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict the processing of your data. To exercise these rights, please contact us using the information below.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Changes to This Privacy Policy</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Contact Us</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 bg-cloud-blue rounded-lg p-6">
                <p className="text-navy font-outfit text-base font-medium">PointOak Retirement Advisors, LLC</p>
                <p className="text-text-gray font-outfit text-sm mt-1">McLean, Virginia</p>
                <p className="text-text-gray font-outfit text-sm mt-1">
                  Website: <a href="https://www.pointoak.com/contact/" className="text-navy hover:underline">pointoak.com/contact</a>
                </p>
              </div>
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
