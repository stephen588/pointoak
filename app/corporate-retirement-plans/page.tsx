import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScheduleButton from "@/components/page/ScheduleButton";
import Blocks, { Rich } from "@/components/page/Blocks";
import { SectionView } from "@/components/page/ContentPage";
import { HexTrio } from "@/components/page/HexGraphics";
import { HighlightStat, PlanBlueprint, SERVICE_COLORS, ServiceHoneycomb, serviceIcon } from "@/components/plans/PlanGraphics";
import type { Block, Card, Section } from "@/lib/content";
import { SITE_URL, breadcrumbs, getPage } from "@/lib/content";
import { breadcrumbList, orgRef, social } from "@/lib/seo";

// Retirement Plan Consulting has its own layout (Hannah 10-06: header-nav pages get unique heroes
// and custom graphics). All words come from corporate-retirement-plans.json.

const page = getPage("/corporate-retirement-plans/")!;

export const metadata: Metadata = {
  title: { absolute: page.meta.title ?? page.name },
  description: page.meta.description ?? undefined,
  alternates: { canonical: SITE_URL + page.route },
  ...social(page.meta.title ?? page.name, page.meta.description ?? undefined, SITE_URL + page.route),
};

type P = Extract<Block, { type: "p" }>;
const sec = (id: string) => page.sections.find((s) => s.id === id);
const cardsOf = (s?: Section): Card[] => (s?.blocks.find((b) => b.type === "cards") as Extract<Block, { type: "cards" }> | undefined)?.items ?? [];
const paras = (blocks: Block[]) => blocks.filter((b) => b.type === "p") as P[];
const cap = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);
const splitList = (t: string) => t.split(/,\s*(?:and\s+)?/).map((x) => cap(x.trim())).filter(Boolean);

const H2 = ({ children, light }: { children: React.ReactNode; light?: boolean }) => (
  <h2 className={`text-3xl md:text-4xl lg:text-[44px] font-light leading-tight ${light ? "text-white" : "text-navy"}`}>{children}</h2>
);
const Para = ({ p, light, small }: { p: P; light?: boolean; small?: boolean }) => (
  <p className={`${small ? "text-[15px] leading-[25px]" : "text-base md:text-lg leading-[30px]"} ${light ? "text-white/80" : "text-text-gray"}`}>
    <Rich text={p.text} segs={p.segs} tone={light ? "dark" : "light"} />
  </p>
);

export default function RetirementPlansPage() {
  const trail = breadcrumbs(page.route);
  const heroP = paras(page.hero.blocks);
  const heroText = heroP.map((p) => p.text).join(" ");
  const decisions = heroText.match(/involves important (.+?) decisions/);
  const audiences = heroText.match(/partners with (.+?) to provide/);
  const center = /retirement plan/i.test(heroText) ? "Retirement plan" : page.name;

  const why = sec("why-businesses-choose-pointoak");
  const services = sec("retirement-plan-consulting-services");
  const choose = sec("why-choose-pointoak");
  const custom = new Set([why, services, choose].filter(Boolean).map((s) => s!.id));

  const serviceCards = cardsOf(services);
  const chooseCard = cardsOf(choose)[0];
  const chooseParas = chooseCard ? paras(chooseCard.body) : [];
  const yearP = chooseParas.find((p) => /brings deep/i.test(p.text) && /\b(19|20)\d{2}\b/.test(p.text));
  const dataP = chooseParas.find((p) => /\d+\+ data points/i.test(p.text));
  const roleP = chooseParas.find((p) => /^3\(21\)/.test(p.text));
  const restP = chooseParas.filter((p) => p !== yearP && p !== dataP && p !== roleP);
  const chooseChips = (chooseCard?.body.find((b) => b.type === "chips") as Extract<Block, { type: "chips" }> | undefined)?.items ?? [];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.name,
      url: SITE_URL + page.route,
      description: page.meta.description ?? undefined,
      provider: orgRef,
      areaServed: ["Washington, DC metro area", "United States"],
    },
    breadcrumbList(trail),
  ];

  return (
    <main className="min-h-screen">
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
      <Header />

      {/* Hero: slate blueprint */}
      <section
        className="relative overflow-hidden pt-[78px] xl:pt-[110px] pb-16 md:pb-24"
        style={{
          backgroundColor: "#1f3550",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(135deg, #1b2f47 0%, #2f4560 55%, #3d5878 100%)",
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      >
        <div className="relative max-w-[1170px] mx-auto px-6 xl:px-0 pt-14 md:pt-20">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <h1 className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.08]">{page.hero.title}</h1>
              <p className="text-white/95 text-xl md:text-2xl font-light leading-snug">{page.hero.subtitle}</p>
              {heroP.map((p, i) => (
                <Para key={i} p={p} light />
              ))}
              <div className="pt-2">
                <ScheduleButton />
              </div>
            </div>
            <div className="lg:col-span-6">
              {decisions && <PlanBlueprint center={center} decisions={splitList(decisions[1])} audiences={audiences ? splitList(audiences[1]) : []} />}
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Choose PointOak: the hexagon trio */}
      {why && (
        <section id={why.id} className="bg-white py-16 md:py-24">
          <div className="max-w-[1170px] mx-auto px-6 xl:px-0 flex flex-col gap-10">
            <H2>{why.title}</H2>
            <HexTrio items={cardsOf(why)} />
          </div>
        </section>
      )}

      {/* Retirement Plan Consulting Services: honeycomb + numbered service cards */}
      {services && (
        <section id={services.id} className="bg-cloud-blue py-16 md:py-24">
          <div className="max-w-[1170px] mx-auto px-6 xl:px-0 flex flex-col gap-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-6">
                <H2>{services.title}</H2>
              </div>
              <div className="lg:col-span-6 flex flex-col gap-4">
                {paras(services.blocks).map((p, i) => (
                  <Para key={i} p={p} />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <ServiceHoneycomb items={serviceCards.map((c) => ({ title: c.title, href: c.link?.href }))} />
              </div>
              <ol className="lg:col-span-7 flex flex-col gap-4">
                {serviceCards.map((c, i) => {
                  const Icon = serviceIcon(c.title);
                  return (
                    <li key={c.title} className="bg-white rounded-[12px] border border-[#E3E8EE] overflow-hidden shadow-[0_1px_2px_rgba(0,55,84,0.04)] flex">
                      <span className={`w-2 flex-shrink-0 ${SERVICE_COLORS[i % SERVICE_COLORS.length]}`} aria-hidden />
                      <div className="flex-1 p-6 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-11 aspect-[0.866] flex items-center justify-center text-white ${SERVICE_COLORS[i % SERVICE_COLORS.length]}`}
                            style={{ clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)" }}
                          >
                            <Icon className="w-5 h-5" strokeWidth={1.7} />
                          </span>
                          <h3 className="text-navy text-xl font-semibold leading-snug">
                            <span className="text-text-gray font-normal mr-2">{String(i + 1).padStart(2, "0")}</span>
                            {c.title}
                          </h3>
                        </div>
                        <Blocks blocks={c.body} compact />
                        {c.link && (
                          <Link href={c.link.href} className="inline-flex items-center gap-2 font-medium text-medium-blue hover:text-navy">
                            {c.link.label}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose PointOak: highlights board */}
      {choose && chooseCard && (
        <section id={choose.id} className="bg-white py-16 md:py-24 relative overflow-hidden">
          <div className="relative max-w-[1170px] mx-auto px-6 xl:px-0 flex flex-col gap-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <H2>{choose.title}</H2>
                <p className="text-medium-blue text-lg font-medium">{chooseCard.title}</p>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-4">
                {restP.map((p, i) => (
                  <Para key={i} p={p} />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 rounded-[14px] bg-gradient-to-br from-navy to-[#0a5c8a] divide-y md:divide-y-0 md:divide-x divide-white/15 shadow-xl shadow-navy/15">
              {yearP && <HighlightStat big={yearP.text.match(/\b(19|20)\d{2}\b/)![0]} small={yearP.text} />}
              {dataP && <HighlightStat big={dataP.text.match(/\d+\+/)![0]} small={dataP.text} />}
              {roleP && <HighlightStat big="3(21) · 3(38)" small={roleP.text} />}
            </div>
            {chooseChips.length > 0 && (
              <ul className="flex flex-wrap items-center gap-y-1 text-navy text-sm font-medium">
                {chooseChips.map((c) => (
                  <li key={c} className="after:content-['·'] after:mx-2.5 after:text-medium-blue last:after:content-none">
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {page.sections.map((s, i) => (custom.has(s.id) ? null : <SectionView key={s.id} section={s} index={i} />))}

      <Footer />
    </main>
  );
}
