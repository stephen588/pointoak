import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Important Disclosures | PointOak Retirement Advisors",
  description: "Important investment advisory disclosures for PointOak Retirement Advisors. Fiduciary status, Form ADV availability, risk disclaimers, and fee disclosure.",
  alternates: {
    canonical: "https://www.pointoak.com/disclosures/"
  }
};

export default function DisclosuresPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Important Disclosures" }]}
        title="Important Disclosures"
        subtitle="Legal and regulatory information about our advisory services"
      />

      <AnimateOnScroll>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[800px] mx-auto px-6 xl:px-0">
          <div className="space-y-10">

            {/* Advisory Services */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Advisory Services</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Investment advisory services are offered through PointOak Retirement Advisors, LLC, a registered investment advisor. PointOak Retirement Advisors, LLC provides investment advisory and consulting services only to clients or prospective clients where the firm and its representatives are properly licensed or exempt from licensure.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                This website is limited to the dissemination of general information pertaining to PointOak Retirement Advisors&apos; investment advisory services and general economic market conditions. The information contained herein should not be construed as personalized investment advice.
              </p>
            </div>

            {/* Fiduciary Status */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Fiduciary Status</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                PointOak Retirement Advisors, LLC serves as a fiduciary under the Employee Retirement Income Security Act of 1974 (ERISA) and acts in accordance with applicable fiduciary standards when providing investment advice. Our advisors serve as either a 3(21) co-fiduciary or 3(38) investment manager as defined under ERISA, depending on the engagement terms with each client.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                As a fiduciary, we are legally obligated to act in the best interests of our clients, providing advice and recommendations that prioritize our clients&apos; needs above our own.
              </p>
            </div>

            {/* Form ADV */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Form ADV and Other Disclosures</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                A copy of PointOak Retirement Advisors, LLC&apos;s current written disclosure Brochure (Form ADV Part 2A) and Brochure Supplement (Form ADV Part 2B) are available for your review upon request. Our Form CRS (Client Relationship Summary) is also available and describes our services, fees, obligations to clients, and conflicts of interest.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Please contact us directly or visit our <a href="/form-adv-crs/" className="text-navy hover:underline">Form ADV & CRS page</a> to request copies of these documents.
              </p>
            </div>

            {/* No Guarantee */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">No Guarantee of Results</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Past performance is no guarantee of future results. All investment strategies and investments involve risk of loss. Nothing contained in this website should be construed as investment advice or as a guarantee, promise, or suggestion that any investment strategy will achieve any particular outcome.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                The information provided on this website is for educational and informational purposes only and is not intended to provide, and should not be relied upon for, specific investment, legal, tax, or accounting advice. You should consult your own tax, legal, and accounting advisors before engaging in any transaction.
              </p>
            </div>

            {/* Performance Disclaimer */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Performance and Risk Disclosure</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                Different types of investments involve varying degrees of risk, and there can be no assurance that any specific investment or strategy will be suitable or profitable for a client&apos;s portfolio. Economic factors, market conditions, and investment strategies will affect the performance of any portfolio, and there are no assurances that a portfolio will match or outperform any particular benchmark.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Investing in securities involves risk of loss that clients should be prepared to bear. No investment strategy or risk management technique can guarantee returns or eliminate risk in any market environment.
              </p>
            </div>

            {/* Fee Disclosure */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Fee Disclosure</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed mb-4">
                PointOak Retirement Advisors, LLC is compensated for its advisory services through fees paid by clients. Fee structures vary depending on the type of service provided and are disclosed in our Form ADV Part 2A and in each client&apos;s written advisory agreement.
              </p>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                In addition to our advisory fees, clients may also incur charges imposed by third parties such as custodians, broker-dealers, mutual funds, and other investment products. These charges may include transaction fees, account fees, and operating expenses. Please refer to your advisory agreement and Form ADV Part 2A for a complete description of fees and expenses.
              </p>
            </div>

            {/* No Tax or Legal Advice */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">No Tax or Legal Advice</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                PointOak Retirement Advisors, LLC does not provide tax or legal advice. Information presented on this website or in any communication with our firm should not be construed as tax or legal advice and is not a substitute for consultation with a qualified tax advisor, attorney, or other professional.
              </p>
            </div>

            {/* Conflicts of Interest */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Conflicts of Interest</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                PointOak Retirement Advisors, LLC is an independently owned and operated firm. We do not have any parent company affiliations, proprietary products, or recordkeeper relationships that could influence our recommendations. Our business model is designed to minimize conflicts of interest and prioritize our clients&apos; best interests. A full disclosure of any material conflicts of interest can be found in our Form ADV Part 2A.
              </p>
            </div>

            {/* Forward-Looking Statements */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Forward-Looking Statements</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                Certain statements on this website may constitute forward-looking statements. These statements are based on current expectations, estimates, and projections about the markets and the financial services industry, and they involve risks and uncertainties. Actual results may differ materially from those anticipated in any forward-looking statements.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-navy font-outfit text-2xl font-light mb-4">Questions?</h2>
              <p className="text-text-gray font-outfit text-base leading-relaxed">
                If you have questions about these disclosures or our services, please contact us at:
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
