import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScheduleButton from "@/components/page/ScheduleButton";
import Blocks from "@/components/page/Blocks";
import type { Block, Card, Section } from "@/lib/content";
import { SITE_URL, getPage } from "@/lib/content";

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

const PILLAR_ICONS = ["/images/why-independent.png", "/images/why-planning.png", "/images/why-personal-service.png", "/images/why-retirement.png"];
const AREA_IMAGES = [
  { src: "/images/families.png", alt: "Family meeting with a financial adviser" },
  { src: "/images/business-team.png", alt: "Business team reviewing their company retirement plan" },
];

function ArrowLink({ href, label, light }: { href: string; label: string; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 font-medium transition-colors ${light ? "text-white hover:text-white/80" : "text-medium-blue hover:text-navy"}`}
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

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
        <video autoPlay muted loop playsInline poster="/images/hero-video-poster.jpg" className="absolute inset-0 w-full h-full object-cover object-center">
          <source src="/images/hero-video-web.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(0, 45, 68, 0.82)" }} />
        <div className="relative z-10 w-full max-w-[1170px] mx-auto px-6 xl:px-0 pt-32 pb-16">
          <div className="w-full h-px bg-white/25 mb-10" />
          <h1 className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] mb-4 max-w-4xl">{home.hero.title}</h1>
          <p className="text-white/95 text-xl md:text-2xl font-light mb-8">{home.hero.subtitle}</p>
          <div className="flex flex-col gap-4 max-w-3xl mb-10">
            {heroParas.map((p, i) => (
              <p key={i} className="text-white/85 text-[15px] lg:text-[18px] leading-[1.7]">
                {p.text}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <ScheduleButton />
            {heroSecondary && <ArrowLink href="#services" label={heroSecondary.label} light />}
          </div>
        </div>
      </section>

      {/* A Different Kind of Advisory Relationship */}
      <section className="bg-cloud-blue py-14 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy text-3xl md:text-4xl lg:text-[44px] font-light leading-tight mb-10">{pillars.title}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {(first(pillars, "pillars")?.items ?? []).map((card: Card, i) => (
              <div key={i} className="bg-white rounded-[7px] border border-[#F3F4F6] p-5 md:p-7 flex flex-col gap-3 md:gap-4">
                <div className="relative w-[70px] h-[70px] rounded-full bg-navy/10">
                  <Image src={PILLAR_ICONS[i % PILLAR_ICONS.length]} alt="" width={42} height={42} className="absolute left-[14px] top-[14px]" />
                </div>
                <h3 className="text-navy font-semibold text-xl">{card.title}</h3>
                <p className="text-text-gray text-base leading-[25px]">{(card.body[0] as { text: string }).text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Areas of Expertise */}
      <section id="services" className="bg-white py-14 md:py-24 scroll-mt-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
          <h2 className="text-navy text-3xl md:text-4xl lg:text-[44px] font-light leading-tight mb-10 md:mb-14">{areas.title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {(first(areas, "cards")?.items ?? []).map((card, i) => (
              <div key={i} className="flex flex-col rounded-[10px] overflow-hidden border border-[#E5EAF0] bg-white">
                <Image src={AREA_IMAGES[i].src} alt={AREA_IMAGES[i].alt} width={800} height={534} className="w-full h-[260px] object-cover" />
                <div className="p-8 flex flex-col gap-4 flex-1">
                  <h3 className="text-navy text-2xl font-light leading-snug">{card.title}</h3>
                  <p className="text-text-gray text-base leading-[27px] flex-1">{(card.body[0] as { text: string }).text}</p>
                  {card.link && <ArrowLink href={card.link.href} label={card.link.label} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Financial Life Does Not Fit Into One Account */}
      <section id="individuals" className="bg-cloud-blue py-14 md:py-24">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="text-navy text-3xl md:text-4xl lg:text-[44px] font-light leading-tight">{oneAccount.title}</h2>
            {paras(oneAccount).map((t, i) => (
              <p key={i} className="text-text-gray text-base md:text-lg leading-[30px]">
                {t}
              </p>
            ))}
          </div>
          <ul className="flex flex-col gap-3 lg:pt-3">
            {(first(oneAccount, "links")?.items ?? []).map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href!}
                  className="flex items-center justify-between gap-4 bg-white rounded-[7px] border border-[#E5EAF0] px-6 py-5 text-navy text-lg hover:border-navy transition-colors"
                >
                  {l.label}
                  <ArrowRight className="w-5 h-5 text-medium-blue" strokeWidth={1.75} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* A Broader Investment Perspective */}
      <section className="bg-white py-14 md:py-24">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 flex flex-col gap-8">
          <h2 className="text-navy text-3xl md:text-4xl lg:text-[44px] font-light leading-tight">{broader.title}</h2>
          {paras(broader).map((t, i) => (
            <p key={i} className="text-text-gray text-base md:text-lg leading-[30px] max-w-4xl">
              {t}
            </p>
          ))}
          <Blocks blocks={broader.blocks.filter((b) => b.type === "band")} />
          {linkOf(broader) && <ArrowLink {...linkOf(broader)!} />}
        </div>
      </section>

      {/* Three moments */}
      <section className="bg-navy py-14 md:py-24">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 grid grid-cols-1 md:grid-cols-3 gap-5">
          {moments.map((s) => (
            <div key={s.id} className="bg-white/[0.07] border border-white/10 rounded-[7px] p-8 flex flex-col gap-4">
              <h2 className="text-white text-2xl font-light leading-snug">{s.title}</h2>
              <p className="text-white/80 text-base leading-[26px] flex-1">{paras(s)[0]}</p>
              {linkOf(s) && <ArrowLink {...linkOf(s)!} light />}
            </div>
          ))}
        </div>
      </section>

      {/* Experience on Both Sides of Retirement */}
      <section id="businesses" className="bg-cloud-blue py-14 md:py-24">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-navy text-3xl md:text-4xl lg:text-[44px] font-light leading-tight">{bothSides.title}</h2>
            {paras(bothSides).map((t, i) => (
              <p key={i} className="text-text-gray text-base md:text-lg leading-[30px]">
                {t}
              </p>
            ))}
            {linkOf(bothSides) && <ArrowLink {...linkOf(bothSides)!} />}
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(first(bothSides, "list")?.items ?? []).map((item) => (
              <li key={item} className="flex items-center gap-3 bg-white rounded-[7px] border border-[#E5EAF0] px-5 py-4 text-navy">
                <Check className="w-5 h-5 text-medium-blue flex-shrink-0" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24" style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}>
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 flex flex-col gap-8 items-start">
          <h2 className="text-white text-3xl md:text-4xl lg:text-[44px] font-light leading-tight">{cta.title}</h2>
          <ScheduleButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}
