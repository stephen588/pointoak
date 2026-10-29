import { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PointOakSymbol from "@/components/brand/PointOakSymbol";
import ClientCenterTiles from "@/components/client-center/ClientCenterTiles";
import { SITE_URL } from "@/lib/content";
import { breadcrumbList, orgRef, social } from "@/lib/seo";

// Client Center (Darsh 10-13, links 10-19): account logins, secure upload, team contacts.
// Linked from the header (set apart from the main menu) and the footer.

const TITLE = "Client Center | PointOak Retirement Advisors";
const DESCRIPTION = "Log in to Charles Schwab or RightCapital, send documents to PointOak securely, or contact our team.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/client-center/` },
  ...social(TITLE, DESCRIPTION, `${SITE_URL}/client-center/`),
};

const HEX = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";
const MAPS = "https://maps.google.com/?q=1751+Pinnacle+Drive+Suite+600+McLean+VA+22102";
const CONTACTS = [
  { Icon: Phone, label: "Phone", value: "(703) 595-4444", href: "tel:+17035954444" },
  { Icon: Mail, label: "Message", value: "Use our contact form", href: "/contact/" },
  { Icon: MapPin, label: "Office", value: "1751 Pinnacle Drive, Suite 600, McLean, VA 22102", href: MAPS },
];

const jsonLd = [
  { "@context": "https://schema.org", "@type": "WebPage", name: TITLE, url: `${SITE_URL}/client-center/`, description: DESCRIPTION, publisher: orgRef },
  breadcrumbList([{ name: "Home", href: "/" }, { name: "Client Center", href: "/client-center/" }]),
];

export default function ClientCenterPage() {
  return (
    <main className="min-h-screen">
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
      <Header />

      <section className="relative overflow-hidden pt-[78px] xl:pt-[110px]" style={{ background: "linear-gradient(160deg, #002337 0%, #003754 55%, #0a5c8a 100%)" }}>
        <div aria-hidden className="absolute -right-40 bottom-[-200px] w-[560px] opacity-[0.05]">
          <PointOakSymbol mono="#ffffff" className="w-full h-auto" />
        </div>
        <div className="relative max-w-[1170px] mx-auto px-6 xl:px-0 pt-12 md:pt-16 pb-14 md:pb-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-white/60 text-sm">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <span className="text-white">Client Center</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl lg:text-[58px] font-bold leading-[1.05]">Client Center</h1>
          <p className="mt-6 max-w-2xl text-white/85 text-lg md:text-xl leading-[1.65]">
            Log in to your accounts, send us documents securely, or reach our&nbsp;team.
          </p>
        </div>
      </section>

      <section className="bg-cloud-blue py-14 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <ClientCenterTiles />
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-navy text-3xl md:text-4xl lg:text-[40px] font-light leading-tight">Contact our team</h2>
            <p className="mt-5 text-[#3D4B5C] text-[17px] leading-[1.7]">
              Questions about your account, a login or a document? Call us or send a&nbsp;message.
            </p>
          </div>
          <ul className="lg:col-span-7 flex flex-col gap-3">
            {CONTACTS.map(({ Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-[12px] border border-[#E3E8EE] px-5 py-4 hover:border-navy transition-colors"
                >
                  <span className="w-11 aspect-[0.866] bg-navy flex items-center justify-center flex-shrink-0" style={{ clipPath: HEX }}>
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-navy/60 text-xs uppercase tracking-[0.12em]">{label}</span>
                    <span className="text-navy text-base font-medium">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
