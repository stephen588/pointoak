import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import PointOakSymbol from "@/components/brand/PointOakSymbol";
import { breadcrumbs, getPage } from "@/lib/content";

// Contact has its own layout (Hannah 10-06): the form sits in the hero so it's the first thing seen.
// The form itself is the existing ConsultationForm until the qualifying form (Darsh's answers) replaces it.

const contact = getPage("/contact/")!;
const intro = contact.hero.blocks.find((b) => b.type === "p") as { text: string } | undefined;
const cta = contact.hero.blocks.find((b) => b.type === "button") as { label: string } | undefined;

const HEX = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";
const ADDRESS = ["PointOak Retirement Advisors, LLC", "1751 Pinnacle Drive, Suite 600", "McLean, VA 22102"];
const MAPS = "https://maps.google.com/?q=1751+Pinnacle+Drive+Suite+600+McLean+VA+22102";
const METHODS = [
  { Icon: Phone, label: "Phone", value: "(703) 595-4444", href: "tel:+17035954444" },
  { Icon: Mail, label: "Email", value: "info@pointoak.com", href: "mailto:info@pointoak.com" },
  { Icon: MapPin, label: "Office", value: "McLean, Virginia", href: MAPS },
];

export default function ContactPage() {
  const trail = breadcrumbs(contact.route);
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero: split, with the form card in the hero */}
      <section className="relative overflow-hidden pt-[78px] xl:pt-[110px]" style={{ background: "linear-gradient(160deg, #002337 0%, #003754 55%, #0a5c8a 100%)" }}>
        <div aria-hidden className="absolute -left-40 bottom-[-180px] w-[620px] opacity-[0.05]">
          <PointOakSymbol mono="#ffffff" className="w-full h-auto" />
        </div>
        <div className="relative max-w-[1170px] mx-auto px-6 xl:px-0 pt-12 md:pt-16 pb-16 md:pb-24">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-white/60 text-sm">
              {trail.map((t, i) => (
                <li key={t.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i === trail.length - 1 ? <span className="text-white">{t.name}</span> : <Link href={t.href} className="hover:text-white">{t.name}</Link>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            <div className="lg:col-span-5 flex flex-col gap-8 lg:pt-6">
              <h1 className="text-white text-4xl md:text-5xl lg:text-[58px] font-bold leading-[1.05]">{contact.hero.title}</h1>
              {intro && <p className="text-white/85 text-lg md:text-xl leading-[1.65]">{intro.text}</p>}
              <ul className="flex flex-col gap-3">
                {METHODS.map(({ Icon, label, value, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-[12px] bg-white/[0.06] border border-white/10 px-4 py-3.5 hover:bg-white/[0.12] transition-colors"
                    >
                      <span className="w-11 aspect-[0.866] bg-bright-blue flex items-center justify-center flex-shrink-0" style={{ clipPath: HEX }}>
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-white/60 text-xs uppercase tracking-[0.12em]">{label}</span>
                        <span className="text-white text-base font-medium">{value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div id="form" className="lg:col-span-7 scroll-mt-24">
              <div className="rounded-[18px] bg-white shadow-2xl shadow-black/30 p-6 sm:p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 aspect-[0.866] bg-navy flex items-center justify-center" style={{ clipPath: HEX }}>
                    <PointOakSymbol mono="#ffffff" className="w-[55%] h-auto" />
                  </span>
                  <h2 className="text-navy text-2xl md:text-[28px] font-semibold leading-tight">{cta?.label}</h2>
                </div>
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office: map with an address card */}
      <section className="relative bg-cloud-blue">
        <div className="relative h-[380px] md:h-[440px]">
          <iframe
            src="https://maps.google.com/maps?q=1751%20Pinnacle%20Dr%20Suite%20600%2C%20McLean%2C%20VA%2022102&z=15&output=embed"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0, filter: "saturate(0.35) hue-rotate(190deg) brightness(1.04)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PointOak office location"
          />
          <div className="absolute inset-0 pointer-events-none bg-navy/[0.06]" />
          <div className="relative max-w-[1170px] mx-auto px-6 xl:px-0 h-full flex items-end md:items-center pb-6 md:pb-0 pointer-events-none">
            <div className="pointer-events-auto bg-white rounded-[14px] shadow-xl shadow-navy/15 p-6 flex gap-4 max-w-[340px]">
              <span className="w-11 h-[51px] self-start bg-navy flex items-center justify-center flex-shrink-0" style={{ clipPath: HEX }}>
                <MapPin className="w-5 h-5 text-white" strokeWidth={1.8} />
              </span>
              <div className="flex flex-col gap-2">
                <address className="not-italic text-navy text-[15px] leading-6">
                  {ADDRESS.map((l, i) => (
                    <span key={l} className={`block ${i === 0 ? "font-semibold" : ""}`}>
                      {l}
                    </span>
                  ))}
                </address>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="text-medium-blue text-sm font-medium hover:text-navy">
                  Get directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
