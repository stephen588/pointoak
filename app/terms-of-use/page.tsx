import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Terms of Use | PointOak Retirement Advisors",
  description: "Terms of use for PointOak Retirement Advisors website. Learn about your rights and obligations when using our services and website.",
  alternates: {
    canonical: "https://www.pointoak.com/terms-of-use/"
  }
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Terms of Use" }]}
        title="Terms of Use"
        subtitle="Last updated: March 2026"
      />

      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[800px] mx-auto px-6 xl:px-0">
          <div className="space-y-10">

            {/* Introduction */}
            <div>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Welcome to PointOak Retirement Advisors, LLC (&quot;PointOak,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using our website at pointoak.com (the &quot;Site&quot;), you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use our Site.
              </p>
            </div>

            {/* Acceptance */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Acceptance of Terms</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                These Terms of Use constitute a legally binding agreement between you and PointOak Retirement Advisors, LLC. By accessing or using this Site, you acknowledge that you have read, understood, and agree to be bound by these terms, as well as our Privacy Policy.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We reserve the right to modify these Terms of Use at any time. Any changes will be posted on this page with an updated revision date. Your continued use of the Site following the posting of changes constitutes your acceptance of those changes.
              </p>
            </div>

            {/* Use of Site */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Use of Site</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                This Site is intended for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities or investment advisory services. You may use this Site only for lawful purposes and in accordance with these Terms of Use.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">You agree not to:</p>
              <ul className="space-y-2">
                {[
                  "Use the Site in any way that violates any applicable federal, state, local, or international law or regulation",
                  "Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Site",
                  "Use the Site to transmit any advertising or promotional material without our prior written consent",
                  "Attempt to gain unauthorized access to any portion of the Site or any systems or networks connected to the Site",
                  "Use any automated means to access the Site for any purpose without our express written permission",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-gray font-outfit text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Intellectual Property</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by PointOak Retirement Advisors, LLC, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, except as permitted by these Terms of Use or with our prior written consent.
              </p>
            </div>

            {/* Disclaimers */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Disclaimers</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                The information provided on this Site is for general informational purposes only. It is not intended to be, and should not be construed as, financial, investment, tax, or legal advice. You should not rely solely on the information contained on this Site to make financial decisions.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the Site or the information, products, services, or related graphics contained on the Site for any purpose. Any reliance you place on such information is strictly at your own risk.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Investment advisory services are offered only to clients or prospective clients where PointOak Retirement Advisors, LLC and its representatives are properly licensed or exempt from licensure. Past performance is no guarantee of future results. No investment strategy or risk management technique can guarantee returns or eliminate risk in any market environment.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Limitation of Liability</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                In no event will PointOak Retirement Advisors, LLC, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Site, any websites linked to it, any content on the Site or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Governing Law and Jurisdiction</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                These Terms of Use and any dispute or claim arising out of or related to them, their subject matter, or their formation (in each case, including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of the Commonwealth of Virginia, without giving effect to any choice or conflict of law provision or rule.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Changes to Terms of Use</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We may revise and update these Terms of Use from time to time at our sole discretion. All changes are effective immediately when posted and apply to all access to and use of the Site thereafter. Your continued use of the Site following the posting of revised Terms of Use means that you accept and agree to the changes.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Contact Us</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If you have questions about these Terms of Use, please contact us at:
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
