import { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/content";

// Website Privacy Policy: Darsh's final PointOak_Website_Privacy_Policy.docx (email 10-23), word for word.
// Section 5 names Google Analytics, so GA must be on the site at launch; no ad tags without asking him first.
// No "Last updated" line (his call, 10-21). Linked from Terms of Use Section 14 and the footer.

const TITLE = "Website Privacy Policy | PointOak Retirement Advisors";
const DESCRIPTION = "What information www.pointoak.com collects, how PointOak Retirement Advisors uses it, and the choices you have.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/website-privacy-policy/` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/website-privacy-policy/` },
};

const a = "text-medium-blue underline underline-offset-2 hover:text-navy";
const Ext = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={a}>
    {children}
  </a>
);
const List = ({ items }: { items: ReactNode[] }) => (
  <ul className="list-disc pl-6 flex flex-col gap-2 marker:text-medium-blue">
    {items.map((it, i) => (
      <li key={i}>{it}</li>
    ))}
  </ul>
);

const SECTIONS: { title: string; body: ReactNode[] }[] = [
  {
    title: "1. Information you give us",
    body: [
      "We collect the information you choose to provide, including when you:",
      <List
        key="l"
        items={[
          <><strong className="text-navy">Contact us</strong> through a website form: typically your name, email address, phone number, and the message you send.</>,
          <><strong className="text-navy">Schedule a meeting</strong> through our scheduling tool: your name, contact details, the meeting type, and any notes you add. Our scheduling provider also keeps your booking details.</>,
          <><strong className="text-navy">Upload documents</strong> through our secure upload link: the files you send and your name or email address.</>,
        ]}
      />,
      "Please don't include Social Security numbers, account numbers or similar sensitive information in contact forms or scheduling notes. Your PointOak advisor will give you a secure way to share that information.",
    ],
  },
  {
    title: "2. Information collected automatically",
    body: [
      "When you visit the Website, we and our service providers automatically collect limited technical information, such as your browser and device type, IP address, general location (city or region), the pages you view, how long you stay, and the site or search that referred you. We collect this through cookies and similar technologies (see Section 5).",
    ],
  },
  {
    title: "3. How we use information",
    body: [
      "We use the information collected through the Website to:",
      <List
        key="l"
        items={[
          "Respond to your questions and requests, and schedule and prepare for meetings.",
          "Send emails, newsletters or event information you asked for. Every marketing email includes a way to unsubscribe.",
          "Understand how visitors use the Website so we can improve its content and performance.",
          "Measure whether our advertising and outreach are effective.",
          "Keep the Website secure and prevent misuse.",
          "Meet our legal and regulatory obligations, including recordkeeping requirements for registered investment advisers.",
        ]}
      />,
    ],
  },
  {
    title: "4. How we share information",
    body: [
      "We do not sell your personal information. We share information collected through the Website only:",
      <List
        key="l"
        items={[
          "With service providers that help us run the Website and our business, such as website hosting, analytics, scheduling, email, file-storage and customer-relationship-management providers. They may use the information only to provide services to us.",
          "When required by law, regulation or legal process, or in response to a request from a regulator such as the U.S. Securities and Exchange Commission.",
          "To protect the rights, property or safety of PointOak, our clients or others.",
          "In connection with a merger, sale or transfer of all or part of our business, subject to applicable law.",
        ]}
      />,
      <>
        If you become a client, information you provide is also handled as described in our{" "}
        <Ext href="/disclosures/privacy-statement.pdf">Privacy Statement</Ext>.
      </>,
    ],
  },
  {
    title: "5. Cookies, analytics and advertising",
    body: [
      "The Website itself does not set cookies for visitors. We use Google Analytics, which places cookies in your browser so we can see, in aggregate, how visitors find and use the Website. Embedded tools from other companies, such as our scheduling tool and the Google map on our Contact page, may also set their own cookies when they load; their privacy policies apply to that information.",
      "We do not currently use advertising or tracking tags on the Website. If we add them, we will update this policy first.",
      <>
        You can block or delete cookies through your browser settings; the Website will still work, though embedded tools may not. You can opt
        out of Google Analytics with <Ext href="https://tools.google.com/dlpage/gaoptout">Google&apos;s browser add-on</Ext>. Some browsers send
        &quot;Do Not Track&quot; signals; because there is no common standard for them, the Website does not currently respond to&nbsp;them.
      </>,
    ],
  },
  {
    title: "6. Third-party sites and tools",
    body: [
      "The Website links to and embeds services run by others, including our custodian Charles Schwab, our financial planning and client portal, our scheduling tool, our secure file-upload service, Google Maps, and the Better Business Bureau seal. When you use them, their own privacy policies apply. We are not responsible for their privacy practices.",
    ],
  },
  {
    title: "7. Email communications",
    body: [
      "If you receive marketing emails from us, you can unsubscribe at any time using the link in the email or by contacting us. We honor requests promptly. Even after you unsubscribe, clients will still receive account-related and required regulatory communications.",
    ],
  },
  {
    title: "8. Security",
    body: [
      "We use administrative, technical and physical safeguards designed to protect information collected through the Website, consistent with our information-security program. No website or internet transmission is completely secure, so please use the secure methods we provide for sensitive information.",
    ],
  },
  {
    title: "9. How long we keep information",
    body: [
      "We keep information as long as needed for the purposes described above. As a registered investment adviser, we are required to keep certain business records and communications, including inquiries sent through the Website, for at least five years.",
    ],
  },
  {
    title: "10. Children",
    body: [
      "The Website is intended for adults. We do not knowingly collect personal information from children under 13. If you believe a child has provided us information, please contact us and we will delete it.",
    ],
  },
  {
    title: "11. Changes to this policy",
    body: ["We may update this policy by posting a revised version on this page. Changes take effect when posted."],
  },
  {
    title: "12. Contact us",
    body: [
      "Questions about this policy or requests about your information can be sent to:",
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
const nbsp = (t: string) => t.replace(/ (\S+)$/, " $1");

export default function WebsitePrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
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
                <span className="text-white">Website Privacy Policy</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl lg:text-[58px] font-bold leading-[1.05]">Website Privacy Policy</h1>
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
          <article className="lg:col-span-8 max-w-[760px] text-[#3D4B5C] text-[16px] leading-[1.75] flex flex-col gap-4">
            <p>
              This Website Privacy Policy explains what information PointOak Retirement Advisors, LLC (&quot;PointOak,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) collects through www.pointoak.com (the &quot;Website&quot;), how we use it, and the choices you
              have. It applies only to the&nbsp;Website.
            </p>
            <p>
              If you are a prospective, current or former client, our <Ext href="/disclosures/privacy-statement.pdf">Privacy Statement</Ext>{" "}
              explains how we collect, use, share and protect your nonpublic personal information. If anything in this policy conflicts with the
              Privacy Statement, the Privacy Statement&nbsp;controls.
            </p>
            {SECTIONS.map((s) => (
              <section key={s.title} id={slug(s.title)} className="scroll-mt-24 mt-6">
                <h2 className="text-navy text-xl md:text-2xl font-semibold leading-snug mb-3">{s.title}</h2>
                <div className="flex flex-col gap-4">
                  {s.body.map((b, i) => (typeof b === "string" ? <p key={i}>{nbsp(b)}</p> : <div key={i}>{b}</div>))}
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
