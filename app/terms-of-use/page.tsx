import { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/content";
import { breadcrumbList, orgRef, social } from "@/lib/seo";

// Terms of Use: Darsh's PointOak_Terms_of_Use_1.docx (email 10-19, "final pending one last review"), word for word.
// Disclosure links are root-relative so they resolve to www.pointoak.com at launch (his note).
// Section 14 links the Website Privacy Policy page (his docx 10-21).

const TITLE = "Terms of Use | PointOak Retirement Advisors";
const DESCRIPTION = "The terms that govern your use of www.pointoak.com, operated by PointOak Retirement Advisors, LLC.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/terms-of-use/` },
  ...social(TITLE, DESCRIPTION, `${SITE_URL}/terms-of-use/`),
};

const a = "text-medium-blue underline underline-offset-2 hover:text-navy";
const Pdf = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={a}>
    {children}
  </a>
);

const SECTIONS: { title: string; body: ReactNode[] }[] = [
  {
    title: "1. Who may use the Website",
    body: [
      "The Website is intended for people 18 or older who are located in the United States. By using it, you confirm that you meet these requirements.",
    ],
  },
  {
    title: "2. Information only; not an offer or advice",
    body: [
      "Content on the Website, including Insights articles, guides and webinar materials, is for general educational and informational purposes. It is not individualized investment, tax or legal advice, and it is not an offer to buy or sell any security or a solicitation to provide advisory services in any jurisdiction where that would be unlawful.",
      "PointOak provides investment advice only under a written agreement with a client, after we have learned about the client's situation and objectives. Please consult your own tax and legal professionals about your circumstances.",
      "Investing involves risk, including possible loss of principal. Past performance does not guarantee future results. Information is believed to be reliable as of the date it is published, but it may become outdated, and we don't undertake to update it.",
    ],
  },
  {
    title: "3. About PointOak and our disclosures",
    body: [
      <>
        PointOak is an SEC-registered investment adviser. Registration does not imply a certain level of skill or training.
        PointOak provides advisory services only in states where it is registered, notice-filed or exempt from registration.
        More information about our services, fees and conflicts of interest is available in our{" "}
        <Pdf href="/disclosures/form-adv-2a.pdf">Form ADV Part&nbsp;2A</Pdf> and <Pdf href="/disclosures/form-crs.pdf">Form&nbsp;CRS</Pdf>, and at
        the SEC&apos;s{" "}
        <a href="https://adviserinfo.sec.gov" target="_blank" rel="noopener noreferrer" className={a}>
          Investment Adviser Public Disclosure&nbsp;website
        </a>
        .
      </>,
    ],
  },
  {
    title: "4. Communications with PointOak",
    body: [
      "Contacting us through a website form, scheduling link or email does not create a client relationship. Please don't send trade orders, money-movement requests or other time-sensitive instructions through the Website or by email; they may not be received or acted on promptly. Please don't send Social Security numbers, account numbers or similar sensitive information through general contact forms. Use the secure methods your PointOak advisor provides.",
      "As a registered investment adviser, we are required to retain business communications, and communications you send us may be reviewed and archived.",
    ],
  },
  {
    title: "5. Client center and third-party sites",
    body: [
      "The Website may link to services operated by others, such as our custodian Charles Schwab, financial planning and secure document portals, file-upload tools and scheduling services. Those sites have their own terms and privacy policies, which govern your use of them. PointOak does not control and is not responsible for third-party sites' content, availability or security. A link is not an endorsement of any third party's products or services.",
    ],
  },
  {
    title: "6. Intellectual property and permitted use",
    body: [
      "The Website's content, design, logos and trademarks belong to PointOak or its licensors. You may view, download and print content for your personal, non-commercial use. You may link to and share Website pages and articles, provided you don't alter the content, remove notices or imply that PointOak endorses you. Any other copying, republishing or commercial use requires our written permission.",
      "Search engines and AI answer services may index Website content as permitted by our robots.txt file.",
    ],
  },
  {
    title: "7. Acceptable use",
    body: [
      "You agree not to: (a) use the Website in violation of any law; (b) attempt to gain unauthorized access to the Website, our systems or other users' information; (c) introduce malware or interfere with the Website's operation; (d) impersonate PointOak, our employees or anyone else; or (e) use the Website to send spam or unsolicited advertising.",
    ],
  },
  {
    title: "8. Changes to the Website and these Terms",
    body: [
      "We may update, suspend or discontinue any part of the Website at any time. We may revise these Terms by posting an updated version on this page. Changes take effect when posted, and continued use of the Website means you accept them.",
    ],
  },
  {
    title: "9. Disclaimer of warranties",
    body: [
      'The Website and its content are provided "as is" and "as available." To the extent permitted by law, PointOak disclaims all warranties, express or implied, about the Website, including warranties of accuracy, completeness, merchantability, fitness for a particular purpose and non-infringement. We don\'t guarantee that the Website will be uninterrupted, error-free or free of viruses or other harmful components.',
    ],
  },
  {
    title: "10. Limitation of liability",
    body: [
      "To the extent permitted by law, PointOak and its members, officers and employees will not be liable for any indirect, incidental, special, consequential or punitive damages arising from your use of, or inability to use, the Website or its content. This section applies only to use of the Website and is subject to Section 12.",
    ],
  },
  {
    title: "11. Indemnification",
    body: [
      "You agree to indemnify PointOak against third-party claims, losses and reasonable costs (including attorneys' fees) arising from your violation of these Terms or misuse of the Website. This section is subject to Section 12.",
    ],
  },
  {
    title: "12. Your rights as a client are not limited",
    body: [
      "These Terms apply only to your use of the Website. If you are a PointOak client, your advisory relationship is governed by your written agreement with PointOak and our Form ADV. Nothing in these Terms limits PointOak's fiduciary duty to its clients or waives or limits any rights you have under federal or state securities laws, including the Investment Advisers Act of 1940, or any other law that cannot be waived by contract.",
    ],
  },
  {
    title: "13. Governing law and disputes",
    body: [
      "These Terms are governed by the laws of the Commonwealth of Virginia, without regard to its conflict-of-law rules, and by applicable federal law. Any dispute about the Website or these Terms will be brought in the state or federal courts located in Fairfax County, Virginia, and you consent to their jurisdiction. Before filing a claim, we ask that you contact us so we can try to resolve the matter informally.",
      "If you are a PointOak client, any dispute about your advisory relationship or services is governed by your Investment Advisory Agreement, including its dispute-resolution provisions, and not by this section.",
    ],
  },
  {
    title: "14. Privacy",
    body: [
      <>
        Our <Pdf href="/disclosures/privacy-statement.pdf">Privacy Statement</Pdf> explains how we collect, use and protect nonpublic personal
        information about prospective, current and former clients. Our{" "}
        <Link href="/website-privacy-policy/" className={a}>Website Privacy Policy</Link> explains what information the Website itself
        collects, such as contact form and scheduling submissions, cookies and analytics data, and how we use&nbsp;it.
      </>,
    ],
  },
  {
    title: "15. General",
    body: [
      "If any provision of these Terms is found unenforceable, the rest remain in effect. Our failure to enforce a provision is not a waiver. These Terms, together with our Privacy Statement and Website Privacy Policy, are the entire agreement between you and PointOak about the Website and don't replace any client agreement.",
    ],
  },
  {
    title: "16. Contact us",
    body: [
      <>
        PointOak Retirement Advisors, LLC
        <br />
        1751 Pinnacle Dr., Suite 600, McLean, VA 22102
        <br />
        <a href="tel:+17035954444" className={a}>(703) 595-4444</a> ·{" "}
        <a href="mailto:info@pointoak.com" className={a}>info@pointoak.com</a>
      </>,
    ],
  },
];

const slug = (t: string) => "section-" + t.split(".")[0];

const jsonLd = [
  { "@context": "https://schema.org", "@type": "WebPage", name: TITLE, url: `${SITE_URL}/terms-of-use/`, description: DESCRIPTION, publisher: orgRef },
  breadcrumbList([{ name: "Home", href: "/" }, { name: "Terms of Use", href: "/terms-of-use/" }]),
];

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen">
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
      <Header />

      <section className="relative overflow-hidden pt-[78px] xl:pt-[110px]" style={{ background: "linear-gradient(160deg, #002337 0%, #003754 55%, #0a5c8a 100%)" }}>
        <div className="relative max-w-[1170px] mx-auto px-6 xl:px-0 pt-12 md:pt-16 pb-12 md:pb-16">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-white/60 text-sm">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <span className="text-white">Terms of Use</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl lg:text-[58px] font-bold leading-[1.05]">Terms of Use</h1>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <nav aria-label="Sections" className="hidden lg:block lg:col-span-4">
            <ol className="sticky top-8 flex flex-col gap-2 border-l border-[#E3E8EE] pl-5">
              {SECTIONS.map((s) => (
                <li key={s.title}>
                  <a href={`#${slug(s.title)}`} className="text-[#3D4B5C] text-sm leading-snug hover:text-navy">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="lg:col-span-8 max-w-[760px] text-[#3D4B5C] text-[16px] leading-[1.75]">
            <p>
              These Terms of Use govern your use of www.pointoak.com (the &quot;Website&quot;), operated by PointOak Retirement Advisors,
              LLC (&quot;PointOak,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By using the Website, you agree to these Terms
              and acknowledge the privacy terms described in <a href="#section-14" className={a}>Section 14</a>. If you don&apos;t agree,
              please don&apos;t use the&nbsp;Website.
            </p>
            {SECTIONS.map((s) => (
              <section key={s.title} id={slug(s.title)} className="scroll-mt-24 mt-10">
                <h2 className="text-navy text-xl md:text-2xl font-semibold leading-snug mb-3">{s.title}</h2>
                <div className="flex flex-col gap-4">
                  {s.body.map((b, i) => (
                    <p key={i}>{typeof b === "string" ? b.replace(/ (\S+)$/, "\u00a0$1") : b}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
