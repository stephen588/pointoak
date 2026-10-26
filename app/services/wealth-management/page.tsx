import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Route as RouteIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScheduleButton from "@/components/page/ScheduleButton";
import Blocks, { Rich } from "@/components/page/Blocks";
import { SectionView } from "@/components/page/ContentPage";
import { cardIcons } from "@/components/page/cardIcon";
import { FinancialLifeHub } from "@/components/home/Graphics";
import { BeliefsTrack } from "@/components/about/AboutGraphics";
import ServiceExplorer from "@/components/wealth/ServiceExplorer";
import { BeyondRings, CoordinationGraphic, OrbitHero, PromiseBand, StageCurve } from "@/components/wealth/WealthGraphics";
import type { Block, Card, Section } from "@/lib/content";
import { SITE_URL, breadcrumbs, getPage } from "@/lib/content";
import { breadcrumbList, orgRef, social } from "@/lib/seo";
import { pages } from "@/content";

// Wealth Management has its own layout (Hannah 10-06: header-nav pages get unique heroes and
// attention-grabbing graphics). All words come from services-wealth-management.json.

const page = getPage("/services/wealth-management/")!;

export const metadata: Metadata = {
  title: { absolute: page.meta.title ?? page.name },
  description: page.meta.description ?? undefined,
  alternates: { canonical: SITE_URL + page.route },
  ...social(page.meta.title ?? page.name, page.meta.description ?? undefined, SITE_URL + page.route),
};

type P = Extract<Block, { type: "p" }>;
const sec = (id: string) => page.sections.find((s) => s.id === id);
const of = <T extends Block["type"]>(s: Section | undefined, t: T) => s?.blocks.find((b) => b.type === t) as Extract<Block, { type: T }> | undefined;
const paras = (blocks: Block[]) => blocks.filter((b) => b.type === "p") as P[];
const cardText = (c: Card) => paras(c.body).map((p) => p.text).join(" ");
const cap = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);
const splitList = (t: string) => t.split(/,\s*(?:and\s+)?/).map((x) => cap(x.trim())).filter(Boolean);
const routeFor = (name: string) => pages.find((p) => p.name === name)?.route;

const H2 = ({ children, light }: { children: React.ReactNode; light?: boolean }) => (
  <h2 className={`text-3xl md:text-4xl lg:text-[44px] font-light leading-tight ${light ? "text-white" : "text-navy"}`}>{children}</h2>
);
const Para = ({ p, light }: { p: P; light?: boolean }) => (
  <p className={`text-base md:text-lg leading-[30px] ${light ? "text-white/80" : "text-text-gray"}`}>
    <Rich text={p.text} segs={p.segs} tone={light ? "dark" : "light"} />
  </p>
);

export default function WealthManagementPage() {
  const trail = breadcrumbs(page.route);
  const heroP = paras(page.hero.blocks);
  const heroList = (page.hero.blocks.find((b) => b.type === "list") as Extract<Block, { type: "list" }> | undefined)?.items ?? [];

  const relationship = sec("a-relationship-built-around-your-interests");
  const connected = sec("your-financial-life-is-connected");
  const services = sec("private-wealth-services");
  const retiring = sec("retiring-or-changing-jobs");
  const who = sec("who-we-work-with");
  const stages = sec("wealth-through-every-stage");
  const beyond = sec("investing-beyond-traditional-markets");
  const boutique = sec("a-boutique-relationship-without-a-narrow-perspective");
  const how = sec("how-we-work");
  const custom = new Set(
    [relationship, connected, services, retiring, who, stages, beyond, boutique, how].filter(Boolean).map((s) => s!.id),
  );

  const connectedText = connected ? paras(connected.blocks).map((p) => p.text).join(" ") : "";
  const spokes = connectedText.match(/(Retirement, .+?) can all influence/);
  const beyondCard = of(beyond, "cards")?.items[0];
  const beyondText = beyondCard ? cardText(beyondCard) : "";
  const beyondMatch = beyondText.match(/may evaluate (.+?), and other alternative or private-market strategies alongside (traditional investments)/);
  const boutiqueText = boutique ? paras(boutique.blocks).map((p) => p.text).join(" ") : "";
  const parties = boutiqueText.match(/coordinate with a client[’']s (.+?) so important/);

  const serviceCards = of(services, "cards")?.items ?? [];
  const serviceIcons = cardIcons(serviceCards.map((c) => c.title));
  const whoList = of(who, "list")?.items ?? [];
  const whoIcons = cardIcons(whoList);

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

      {/* Hero: diagonal navy-to-teal with the orbit graphic */}
      <section className="relative overflow-hidden pt-[78px] xl:pt-[110px] pb-16 md:pb-24" style={{ background: "linear-gradient(135deg, #002337 0%, #003754 45%, #0a6496 100%)" }}>
        <div aria-hidden className="absolute right-[-120px] top-[-80px] w-[560px] h-[560px] rounded-full bg-bright-blue/10 blur-3xl" />
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
              <h1 className="text-white text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.05]">{page.hero.title}</h1>
              <p className="text-white/95 text-xl md:text-2xl font-light leading-snug">{page.hero.subtitle}</p>
              {heroP.map((p, i) => (
                <Para key={i} p={p} light />
              ))}
              <div className="pt-2">
                <ScheduleButton />
              </div>
            </div>
            <div className="lg:col-span-6">
              <OrbitHero items={heroList} />
            </div>
          </div>
        </div>
      </section>

      {/* A Relationship Built Around Your Interests: compact light row with icons */}
      {relationship && (
        <section id={relationship.id} className="bg-white py-14 md:py-20">
          <div className="max-w-[1170px] mx-auto px-6 xl:px-0 flex flex-col gap-8">
            <H2>{relationship.title}</H2>
            <PromiseBand items={(of(relationship, "pillars")?.items ?? []).map((c) => ({ title: c.title, text: cardText(c) }))} />
            {paras(relationship.blocks).map((p, i) => (
              <div key={i} className="flex gap-4 max-w-3xl">
                <span aria-hidden className="w-1 rounded-full bg-bright-blue flex-shrink-0" />
                <Para p={p} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Your Financial Life Is Connected */}
      {connected && (
        <section id={connected.id} className="bg-cloud-blue py-16 md:py-24">
          <div className="max-w-[1170px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <H2>{connected.title}</H2>
              {paras(connected.blocks).map((p, i) => (
                <Para key={i} p={p} />
              ))}
            </div>
            <div className="lg:col-span-7">{spokes && <FinancialLifeHub center="Investment decisions" spokes={splitList(spokes[1])} />}</div>
          </div>
        </section>
      )}

      {/* Private Wealth Services: interactive explorer */}
      {services && (
        <section id={services.id} className="bg-white py-16 md:py-24">
          <div className="max-w-[1170px] mx-auto px-6 xl:px-0 flex flex-col gap-10">
            <H2>{services.title}</H2>
            <ServiceExplorer
              items={serviceCards.map((c, i) => {
                const Icon = serviceIcons[i];
                return {
                  title: c.title,
                  icon: <Icon className="w-5 h-5" strokeWidth={1.7} />,
                  panel: (
                    <div className="flex flex-col gap-4">
                      <Blocks blocks={c.body} tone="dark" compact />
                    </div>
                  ),
                  href: routeFor(c.title),
                };
              })}
            />
          </div>
        </section>
      )}

      {/* Retiring or Changing Jobs? */}
      {retiring && (
        <section id={retiring.id} className="bg-cloud-blue">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[280px] md:min-h-[400px] bg-[#DCEAF8] overflow-hidden" aria-hidden>
              <svg viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
                <path d="M -10 120 C 40 120, 60 70, 100 70 S 160 20, 210 20" fill="none" stroke="#003754" strokeOpacity="0.25" strokeWidth="1.4" strokeDasharray="4 4" />
                <circle cx="100" cy="70" r="3" fill="#00a7ef" />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28%] max-w-[160px] aspect-[0.866] bg-navy flex items-center justify-center" style={{ clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)" }}>
                <RouteIcon className="w-[42%] h-[42%] text-white" strokeWidth={1.5} />
              </div>
            </div>
            <div className="flex items-center px-6 py-14 md:px-16 lg:px-24">
              <div className="flex flex-col gap-5 max-w-[480px]">
                <H2>{retiring.title}</H2>
                {paras(retiring.blocks).map((p, i) => (
                  <Para key={i} p={p} />
                ))}
                {retiring.blocks
                  .filter((b) => b.type === "button" && b.href)
                  .map((b) => {
                    const btn = b as Extract<Block, { type: "button" }>;
                    return (
                      <Link key={btn.label} href={btn.href!} className="inline-flex items-center gap-2 font-medium text-medium-blue hover:text-navy">
                        {btn.label}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Who We Work With: persona cards */}
      {who && (
        <section id={who.id} className="bg-white py-16 md:py-24">
          <div className="max-w-[1170px] mx-auto px-6 xl:px-0 flex flex-col gap-10">
            <H2>{who.title}</H2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {whoList.map((w, i) => {
                const Icon = whoIcons[i];
                return (
                  <li key={w} className="group relative overflow-hidden rounded-[14px] bg-gradient-to-b from-cloud-blue to-white border border-[#E3E8EE] p-6 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 transition-all">
                    <span
                      className={`w-14 aspect-[0.866] flex items-center justify-center ${["bg-navy", "bg-[#4A5A70]", "bg-bright-blue", "bg-[#0a5c8a]", "bg-navy"][i % 5]}`}
                      style={{ clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)" }}
                    >
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.7} />
                    </span>
                    <span className="text-navy text-[15px] leading-snug font-medium">{w}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {/* Wealth Through Every Stage: rising curve */}
      {stages && (
        <section id={stages.id} className="bg-cloud-blue py-16 md:py-24 overflow-hidden">
          <div className="max-w-[1170px] mx-auto px-6 xl:px-0 flex flex-col gap-12">
            <H2>{stages.title}</H2>
            {(stages.blocks.find((b) => b.type === "band") as Extract<Block, { type: "band" }> | undefined) && (
              <StageCurve text={(stages.blocks.find((b) => b.type === "band") as Extract<Block, { type: "band" }>).text} />
            )}
          </div>
        </section>
      )}

      {/* Investing Beyond Traditional Markets */}
      {beyond && beyondCard && (
        <section id={beyond.id} className="bg-white py-16 md:py-24">
          <div className="max-w-[1170px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-5">
              <H2>{beyond.title}</H2>
              <p className="text-navy text-xl font-semibold">{beyondCard.title}</p>
              {paras(beyondCard.body).map((p, i) => (
                <Para key={i} p={p} />
              ))}
            </div>
            <div className="lg:col-span-6">
              {beyondMatch && <BeyondRings core={cap(beyondMatch[2])} ring={splitList(beyondMatch[1])} />}
            </div>
          </div>
        </section>
      )}

      {/* A Boutique Relationship Without a Narrow Perspective */}
      {boutique && (
        <section id={boutique.id} className="bg-cloud-blue py-16 md:py-24">
          <div className="max-w-[1170px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 flex flex-col gap-5">
              <H2>{boutique.title}</H2>
              {paras(boutique.blocks).map((p, i) => (
                <Para key={i} p={p} />
              ))}
            </div>
            <div className="lg:col-span-6">{parties && <CoordinationGraphic parties={splitList(parties[1])} />}</div>
          </div>
        </section>
      )}

      {/* How We Work: the PointOak track */}
      {how && (
        <section id={how.id} className="bg-white py-16 md:py-24">
          <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
            <BeliefsTrack
              title={how.title}
              ring="ring-white"
              items={(of(how, "pillars")?.items ?? of(how, "cards")?.items ?? []).map((c) => ({ title: c.title, text: cardText(c) }))}
            />
          </div>
        </section>
      )}

      {page.sections.map((s, i) => (custom.has(s.id) ? null : <SectionView key={s.id} section={s} index={i} />))}

      <Footer />
    </main>
  );
}
