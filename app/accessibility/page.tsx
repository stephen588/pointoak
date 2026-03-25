import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Accessibility | PointOak Retirement Advisors",
  description: "PointOak Retirement Advisors is committed to making our website accessible to all users. Learn about our accessibility standards and how to report concerns.",
  alternates: {
    canonical: "https://www.pointoak.com/accessibility/"
  }
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Accessibility" }]}
        title="Accessibility Statement"
        subtitle="Our commitment to making our website accessible to everyone"
      />

      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[800px] mx-auto px-6 xl:px-0">
          <div className="space-y-10">

            {/* Commitment */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Our Commitment</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                PointOak Retirement Advisors, LLC is committed to ensuring that our website is accessible to people with disabilities. We believe that everyone should have equal access to information about retirement planning and our advisory services, regardless of ability.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                We are continually working to improve the accessibility of our website and to ensure that it meets or exceeds the requirements of the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, published by the World Wide Web Consortium (W3C).
              </p>
            </div>

            {/* Measures */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Accessibility Measures</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                PointOak Retirement Advisors takes the following measures to ensure accessibility of our website:
              </p>
              <ul className="space-y-2">
                {[
                  "Incorporate accessibility into our internal policies and procedures",
                  "Provide ongoing accessibility training for our staff",
                  "Assign clear accessibility goals and responsibilities",
                  "Test our website regularly using assistive technologies",
                  "Employ formal accessibility quality assurance methods",
                  "Work with external accessibility consultants and experts",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-gray font-outfit text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Standards */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Conformance Status</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Our website strives to be fully conformant with WCAG 2.1 Level AA. &quot;Fully conformant&quot; means that the content meets all of the success criteria of the specified level without exceptions.
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Accessibility Features</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Our website includes the following accessibility features:
              </p>
              <ul className="space-y-2">
                {[
                  "Clear and consistent navigation structure throughout the site",
                  "Alternative text for images and meaningful graphics",
                  "Sufficient color contrast between text and background",
                  "Keyboard-accessible navigation and interactive elements",
                  "Descriptive page titles and headings",
                  "Readable and understandable content with clear language",
                  "Proper semantic HTML markup for screen reader compatibility",
                  "Responsive design that adapts to different screen sizes and devices",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-gray font-outfit text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compatibility */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Technical Specifications</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Accessibility of our website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
              </p>
              <ul className="space-y-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "WAI-ARIA (Accessible Rich Internet Applications)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-gray font-outfit text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Limitations */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Known Limitations</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Despite our best efforts to ensure accessibility, there may be some limitations. We are actively working to address any issues and welcome feedback to help us improve.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If you encounter any accessibility barriers on our website, please let us know so we can work to resolve them.
              </p>
            </div>

            {/* Feedback */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Feedback and Contact Information</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="bg-cloud-blue rounded-lg p-6">
                <p className="text-navy font-outfit text-base font-medium">PointOak Retirement Advisors, LLC</p>
                <p className="text-text-gray font-outfit text-sm mt-1">McLean, Virginia</p>
                <p className="text-text-gray font-outfit text-sm mt-1">
                  Website: <a href="https://www.pointoak.com/contact/" className="text-navy hover:underline">pointoak.com/contact</a>
                </p>
                <p className="text-text-gray font-outfit text-sm mt-3">
                  We aim to respond to accessibility feedback within 5 business days.
                </p>
              </div>
            </div>

            {/* Assessment */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Assessment and Evaluation</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                PointOak Retirement Advisors assesses the accessibility of our website through self-evaluation, automated testing tools, and ongoing user feedback. We are committed to continuous improvement and regularly review our website to identify and address accessibility issues.
              </p>
            </div>

            {/* Date */}
            <div className="bg-cloud-blue rounded-lg p-6">
              <p className="text-text-gray font-outfit text-sm">
                This accessibility statement was last updated on <strong>March 2026</strong>. We review and update this statement periodically to reflect our ongoing accessibility efforts.
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
