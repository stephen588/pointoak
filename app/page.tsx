import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Check,
  Compass,
  Landmark,
  LineChart,
  Mail,
  MapPin,
  Phone,
  Receipt,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScheduleButton from "@/components/page/ScheduleButton";
import type { Block, Card, Section } from "@/lib/content";
import { SITE_URL, getPage } from "@/lib/content";

// Layout follows the Figma homepage concept v4 (file t2opt1zP1oNb40eWjVUlnE); every word comes from
// content/pages/home.json (Darsh's master copy). Photos are from the same Figma file.

const home = getPage("/")!;

export const metadata: Metadata = {
  title: { absolute: home.meta.title ?? "PointOak Retirement Advisors" },
  description: home.meta.description ?? undefined,
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "PointOak Retirement Advisors",
  url: SITE_URL,
  logo: `${SITE_URL}/images/pointoak-logo.png`,
  description: home.meta.description,
  telephone: "+1-703-595-4444",
  email: "info@pointoak.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1751 Pinnacle Drive, Suite 600",
    addressLocality: "McLean",
    addressRegion: "VA",
    postalCode: "22102",
    addressCountry: "US",
  },
  areaServed: ["Washington, DC metro area", "United States"],
  serviceType: ["Wealth Management", "Investment Management", "Financial Planning", "Retirement Plan Consulting"],
};

const section = (id: string) => home.sections.find((s) => s.id === id) as Section;
const first = <T extends Block["type"]>(s: Section, type: T) =>
  s.blocks.find((b) => b.type === type) as Extract<Block, { type: T }> | undefined;
const paras = (s: Section) => s.blocks.filter((b) => b.type === "p").map((b) => (b as { text: string }).text);
const linkOf = (s: Section) => {
  const b = first(s, "button");
  return b && b.href ? { label: b.label, href: b.href } : undefined;
};
const cardText = (c: Card) => (c.body.find((b) => b.type === "p") as { text: string } | undefined)?.text ?? "";

const PILLAR_ICONS = [ShieldCheck, Receipt, Landmark, Award];
const SERVICE_ICONS: Record<string, typeof LineChart> = {
  "Investment Management": LineChart,
  "Comprehensive Financial Planning": Compass,
  "Retirement Income Planning": Wallet,
  "Tax-Aware Wealth Strategies": Receipt,
};
const AREA_IMAGES = [
  { src: "/images/home/individuals-families.jpg", alt: "Grandparent and child walking together along a park path at sunset" },
  { src: "/images/home/businesses-office.jpg", alt: "Colleagues working in a bright, modern office overlooking the city" },
];
const MOMENT_IMAGES = [
  { src: "/images/home/moment-changing-jobs.jpg", alt: "Man looking out over city lights at dusk" },
  { src: "/images/home/moment-retirement.jpg", alt: "Retired couple reviewing their plans together at home" },
  { src: "/images/home/moment-executive.jpg", alt: "Executive standing at an office window" },
];

function ArrowLink({ href, label, light }: { href: string; label: string; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 font-medium transition-colors ${light ? "text-white hover:text-white/75" : "text-medium-blue hover:text-navy"}`}
    >
      {label}
      <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
    </Link>
  );
}

export default function Home() {
  const pillars = section("a-different-kind-of-advisory-relationship");
  const areas = section("two-areas-of-expertise-one-coordinated-approach");
  const oneAccount = section("your-financial-life-does-not-fit-into-one-account");
  const broader = section("a-broader-investment-perspective");
  const moments = ["retiring-or-changing-jobs", "approaching-or-entering-retirement", "managing-complex-executive-benefits"].map(section);
  const bothSides = section("experience-on-both-sides-of-retirement");
  const cta = home.sections.find((s) => s.layout === "cta")!;
  const heroParas = home.hero.blocks.filter((b) => b.type === "p") as { text: string }[];
  const heroSecondary = home.hero.blocks.find((b) => b.type === "button" && b.secondary) as { label: string } | undefined;
  const services = (first(oneAccount, "links")?.items ?? []).map((l) => ({
    ...l,
    // each card uses that service page's own subtitle from the master copy
    text: getPage(l.href!)?.hero.subtitle ?? "",
  }));
  const band = first(broader, "band")?.text ?? "";
  const [bandLead, bandTail] = band.split(" — ");

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      {/* Hero — aerial interchange, as in the Figma concept */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-navy">
        <Image src="/images/home/hero-hexagon-aerial.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,35,55,0.6) 0%, rgba(0,35,55,0.55) 30%, rgba(0,35,55,0.93) 68%, #002337 100%)" }}
        />
        <div className="relative z-10 w-full max-w-[1170px] mx-auto px-6 xl:px-0 pt-40 pb-16 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <p className="text-bright-blue text-base md:text-lg font-medium">{home.hero.subtitle}</p>
              <h1 className="text-white text-4xl md:text-5xl lg:text-[60px] font-semibold leading-[1.08] tracking-[-0.01em]">{home.hero.title}</h1>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <ScheduleButton />
                {heroSecondary && (
                  <a
                    href="#services"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-[7px] border border-white/50 text-white text-[16px] font-medium hover:bg-white/10 transition-colors"
                  >
                    {heroSecondary.label}
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </a>
                )}
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4 lg:border-l lg:border-white/25 lg:pl-10">
              {heroParas.map((p, i) => (
                <p key={i} className="text-white/85 text-[15px] lg:text-[17px] leading-[1.7]">
                  {p.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials strip (Figma stats bar), with Darsh's four pillars */}
      <section aria-label={pillars.title} className="bg-[#F2F4F7] border-b border-[#E3E8EE]">
        <h2 className="sr-only">{pillars.title}</h2>
        <div className="max-w-[1170px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {(first(pillars, "pillars")?.items ?? []).map((card, i) => {
            const Icon = PILLAR_ICONS[i % PILLAR_ICONS.length];
            return (
              <div
                key={i}
                className={`flex items-start gap-4 px-6 py-7 border-[#E3E8EE] ${i % 2 === 1 ? "border-l" : ""} ${i === 2 ? "lg:border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""}`}
              >
                <Icon className="w-9 h-9 text-medium-blue flex-shrink-0" strokeWidth={1.4} />
                <div>
                  <p className="text-navy font-semibold text-lg leading-tight">{card.title}</p>
                  <p className="text-text-gray text-sm leading-snug mt-1">{cardText(card)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Two Areas of Expertise — image cards with an overlay label, like the Figma "We Serve" block */}
      <section id="services" className="bg-white py-16 md:py-28 scroll-mt-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy text-3xl md:text-4xl lg:text-[48px] font-light leading-tight mb-12 md:mb-16 max-w-3xl">{areas.title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-12">
            {(first(areas, "cards")?.items ?? []).map((card, i) => {
              const [audience, service] = card.title.split(" — ");
              return (
                <div key={i} className="flex flex-col">
                  <div className="relative">
                    <Image
                      src={AREA_IMAGES[i].src}
                      alt={AREA_IMAGES[i].alt}
                      width={1600}
                      height={900}
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="w-full h-[300px] md:h-[360px] object-cover rounded-[10px]"
                    />
                    <div className="absolute -bottom-6 left-6 right-6 sm:right-auto bg-navy text-white rounded-[7px] px-6 py-4 shadow-xl shadow-navy/20">
                      <p className="text-lg font-semibold leading-tight">{audience}</p>
                      {service && <p className="text-white/75 text-sm italic mt-1">{service}</p>}
                    </div>
                  </div>
                  <div className="pt-12 flex flex-col gap-5 flex-1">
                    <p className="text-text-gray text-base md:text-lg leading-[30px] flex-1">{cardText(card)}</p>
                    {card.link && <ArrowLink href={card.link.href} label={card.link.label} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Your Financial Life — intro + service cards (Figma "Why Clients Choose" cards) */}
      <section id="individuals" className="bg-cloud-blue py-16 md:py-28">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12">
            <h2 className="lg:col-span-5 text-navy text-3xl md:text-4xl lg:text-[48px] font-light leading-tight">{oneAccount.title}</h2>
            <div className="lg:col-span-7 flex flex-col gap-4 lg:pt-2">
              {paras(oneAccount).map((t, i) => (
                <p key={i} className="text-text-gray text-base md:text-lg leading-[30px]">
                  {t}
                </p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => {
              const Icon = SERVICE_ICONS[s.label] ?? BadgeCheck;
              return (
                <Link
                  key={s.label}
                  href={s.href!}
                  className="group bg-white rounded-[10px] border border-[#E3E8EE] p-7 flex flex-col gap-4 hover:border-navy hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-navy/[0.07] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-navy" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-navy text-xl font-semibold leading-snug">{s.label}</h3>
                  <p className="text-text-gray text-[15px] leading-[24px] flex-1">{s.text}</p>
                  <span className="inline-flex items-center gap-1.5 text-navy text-sm font-medium">
                    Learn More <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* A Broader Investment Perspective — dark aerial band */}
      <section className="relative overflow-hidden bg-navy">
        <Image src="/images/home/investment-aerial.jpg" alt="" fill sizes="100vw" className="object-cover object-center opacity-45" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(0,35,55,0.97) 0%, rgba(0,35,55,0.85) 50%, rgba(0,35,55,0.55) 100%)" }}
        />
        <div className="relative max-w-[1170px] mx-auto px-6 xl:px-0 py-20 md:py-32 flex flex-col gap-8">
          <h2 className="text-white text-3xl md:text-4xl lg:text-[48px] font-light leading-tight max-w-3xl">{broader.title}</h2>
          {paras(broader).map((t, i) => (
            <p key={i} className="text-white/85 text-base md:text-lg leading-[30px] max-w-3xl">
              {t}
            </p>
          ))}
          {band && (
            <div className="flex flex-col gap-2 border-y border-white/25 py-6 max-w-4xl">
              <p className="text-white text-lg md:text-2xl font-semibold tracking-wide">{bandLead}</p>
              {bandTail && <p className="text-bright-blue text-base md:text-lg">{bandTail}</p>}
            </div>
          )}
          {linkOf(broader) && <ArrowLink {...linkOf(broader)!} light />}
        </div>
      </section>

      {/* Life moments — Figma checkerboard of photo + panel */}
      <section className="bg-white">
        {moments.map((s, i) => {
          const panel = ["bg-navy", "bg-[#3F5672]", "bg-[#E9EEF4]"][i];
          const dark = i < 2;
          return (
            <div key={s.id} className="grid grid-cols-1 md:grid-cols-2">
              <div className={`relative min-h-[280px] md:min-h-[420px] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <Image src={MOMENT_IMAGES[i].src} alt={MOMENT_IMAGES[i].alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className={`${panel} flex items-center px-6 py-14 md:px-16 lg:px-24`}>
                <div className="flex flex-col gap-5 max-w-[460px]">
                  <h2 className={`text-2xl md:text-3xl lg:text-[36px] font-light leading-tight ${dark ? "text-white" : "text-navy"}`}>{s.title}</h2>
                  <p className={`text-base md:text-lg leading-[28px] ${dark ? "text-white/80" : "text-text-gray"}`}>{paras(s)[0]}</p>
                  {linkOf(s) && <ArrowLink {...linkOf(s)!} light={dark} />}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Experience on Both Sides of Retirement — the oak table */}
      <section id="businesses" className="bg-white py-16 md:py-28">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Image
            src="/images/home/oak-table-book.jpg"
            alt="Open book on an oak table in soft window light"
            width={1600}
            height={900}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="w-full h-[320px] md:h-[440px] object-cover rounded-[10px]"
          />
          <div className="flex flex-col gap-6">
            <h2 className="text-navy text-3xl md:text-4xl lg:text-[48px] font-light leading-tight">{bothSides.title}</h2>
            {paras(bothSides).map((t, i) => (
              <p key={i} className="text-text-gray text-base md:text-lg leading-[30px]">
                {t}
              </p>
            ))}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 border-t border-[#E3E8EE] pt-6">
              {(first(bothSides, "list")?.items ?? []).map((item) => (
                <li key={item} className="flex items-center gap-3 text-navy font-medium">
                  <Check className="w-5 h-5 text-medium-blue flex-shrink-0" strokeWidth={2.25} />
                  {item}
                </li>
              ))}
            </ul>
            {linkOf(bothSides) && <ArrowLink {...linkOf(bothSides)!} />}
          </div>
        </div>
      </section>

      {/* CTA — centered, with contact cards (Figma) */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}>
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 flex flex-col items-center text-center gap-10">
          <h2 className="text-white text-3xl md:text-4xl lg:text-[52px] font-light leading-tight">{cta.title}</h2>
          <ScheduleButton />
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-left">
            {[
              { Icon: Phone, label: "Call Us", value: "(703) 595-4444", href: "tel:+17035954444" },
              { Icon: Mail, label: "Email Us", value: "info@pointoak.com", href: "mailto:info@pointoak.com" },
              {
                Icon: MapPin,
                label: "Visit",
                value: "1751 Pinnacle Drive, Suite 600, McLean, VA 22102",
                href: "https://maps.google.com/?q=1751+Pinnacle+Drive+Suite+600+McLean+VA+22102",
              },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 bg-white/[0.08] border border-white/15 rounded-[10px] p-6 hover:bg-white/[0.14] transition-colors"
              >
                <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                </span>
                <span>
                  <span className="block text-white font-semibold">{label}</span>
                  <span className="block text-white/75 text-sm mt-0.5">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
