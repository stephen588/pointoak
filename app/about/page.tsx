import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScheduleButton from "@/components/page/ScheduleButton";
import { Rich } from "@/components/page/Blocks";
import { SectionView } from "@/components/page/ContentPage";
import { ConvergeIntoOne, GuidancePillars } from "@/components/home/AreaGraphics";
import { BeliefsTrack, CommitmentsGraphic, UniverseGraphic } from "@/components/about/AboutGraphics";
import PointOakSymbol from "@/components/brand/PointOakSymbol";
import type { Block, Card, Section } from "@/lib/content";
import { SITE_URL, breadcrumbs, getPage } from "@/lib/content";

// About has its own layout (Hannah 10-06: header-nav pages get unique heroes and custom graphics).
// All words come from content/pages/about.json; the graphics only rearrange them.

const page = getPage("/about/")!;

export const metadata: Metadata = {
  title: { absolute: page.meta.title ?? page.name },
  description: page.meta.description ?? undefined,
  alternates: { canonical: SITE_URL + page.route },
  openGraph: { title: page.meta.title ?? page.name, description: page.meta.description ?? undefined, url: SITE_URL + page.route },
};

type P = Extract<Block, { type: "p" }>;
const section = (id: string) => page.sections.find((s) => s.id === id);
const cardsOf = (s?: Section): Card[] => (s?.blocks.find((b) => b.type === "cards") as Extract<Block, { type: "cards" }> | undefined)?.items ?? [];
const firstP = (blocks: Block[]) => blocks.find((b) => b.type === "p") as P | undefined;
const cap = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);
const splitList = (t: string) => t.split(/,\s*(?:and\s+)?/).map((x) => cap(x.trim())).filter(Boolean);

export default function AboutPage() {
  const trail = breadcrumbs(page.route);
  const heroParas = page.hero.blocks.filter((b) => b.type === "p") as P[];
  const commitments = (page.hero.subtitle ?? "").split(/\.\s*/).filter(Boolean);

  const beliefs = section("what-we-believe");
  const areas = section("two-areas-of-expertise-one-coordinated-approach");
  const independent = section("independent-by-design");
  const special = new Set(["what-we-believe", "two-areas-of-expertise-one-coordinated-approach", "independent-by-design"]);

  const [wealth, plans] = cardsOf(areas);
  const wealthText = wealth ? firstP(wealth.body)?.text ?? "" : "";
  const plansText = plans ? firstP(plans.body)?.text ?? "" : "";
  const wealthList = wealthText.match(/coordinate (.+?)\.$/);
  const plansMatch = plansText.match(/provides (.+?), along with (.+?)\.$/);

  const indP = independent ? firstP(independent.blocks) : undefined;
  const universe = indP?.text.match(/may include (.+?), and, (where appropriate), (.+?)\./);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: page.name,
      url: SITE_URL + page.route,
      description: page.meta.description ?? undefined,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: SITE_URL + t.href })),
    },
  ];

  return (
    <main className="min-h-screen">
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
      <Header />

      {/* Hero: solid navy with the PointOak symbol and its three commitments */}
      <section className="relative overflow-hidden bg-[#002a40] pt-[78px] xl:pt-[110px] pb-16 md:pb-24">
        <div aria-hidden className="absolute -left-24 -bottom-32 w-[520px] opacity-[0.05]">
          <PointOakSymbol mono="#ffffff" className="w-full h-auto" />
        </div>
        <div aria-hidden className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#004a73]/60 to-transparent" />
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
              <h1 className="text-white text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.12]">{page.hero.title}</h1>
              <p className="text-bright-blue text-lg md:text-xl font-medium">{page.hero.subtitle}</p>
              {heroParas.map((p, i) => (
                <p key={i} className="text-white/85 text-base md:text-[17px] leading-[1.75]">
                  <Rich text={p.text} segs={p.segs} tone="dark" />
                </p>
              ))}
              <div className="pt-2">
                <ScheduleButton />
              </div>
            </div>
            <div className="lg:col-span-6">
              <CommitmentsGraphic commitments={commitments} />
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      {beliefs && (
        <section id={beliefs.id} className="bg-cloud-blue py-16 md:py-24">
          <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
            <BeliefsTrack
              title={beliefs.title}
              items={cardsOf(beliefs).map((c) => ({ title: c.title, text: firstP(c.body)?.text ?? "", segs: firstP(c.body)?.segs }))}
            />
          </div>
        </section>
      )}

      {/* Two Areas of Expertise */}
      {areas && wealth && plans && (
        <section id={areas.id} className="bg-white py-16 md:py-24">
          <div className="max-w-[1170px] mx-auto px-6 xl:px-0 flex flex-col gap-12">
            <h2 className="text-navy text-3xl md:text-4xl lg:text-[44px] font-light leading-tight max-w-3xl">{areas.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                { card: wealth, dark: "from-navy to-[#0a5c8a]", graphic: wealthList && <ConvergeIntoOne pieces={splitList(wealthList[1])} result={wealth.title} /> },
                { card: plans, dark: "from-[#2f4560] to-[#4A5A70]", graphic: plansMatch && <GuidancePillars beam={plansMatch[1]} pillars={splitList(plansMatch[2])} /> },
              ].map(({ card, dark, graphic }) => (
                <div key={card.title} className="flex flex-col gap-6">
                  <h3 className="text-navy text-2xl font-semibold">{card.title}</h3>
                  {graphic && <div className={`rounded-[12px] bg-gradient-to-br ${dark} min-h-[340px]`}>{graphic}</div>}
                  {card.body.map((b, k) =>
                    b.type === "p" ? (
                      <p key={k} className="text-text-gray text-base md:text-lg leading-[30px]">
                        <Rich text={b.text} segs={b.segs} tone="light" />
                      </p>
                    ) : null,
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.sections.map((s, i) => {
        if (s.id === "independent-by-design" && independent && indP) {
          return (
            <section key={s.id} id={s.id} className="bg-cloud-blue py-16 md:py-24">
              <div className="max-w-[1170px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-6 flex flex-col gap-5">
                  <h2 className="text-navy text-3xl md:text-4xl lg:text-[40px] font-light leading-tight">{s.title}</h2>
                  <p className="text-text-gray text-base md:text-lg leading-[30px]">
                    <Rich text={indP.text} segs={indP.segs} tone="light" />
                  </p>
                </div>
                <div className="lg:col-span-6">
                  {universe ? (
                    <UniverseGraphic core={splitList(universe[1])} conditionalNote={cap(universe[2])} conditional={cap(universe[3])} />
                  ) : null}
                </div>
              </div>
            </section>
          );
        }
        if (special.has(s.id)) return null;
        return <SectionView key={s.id} section={s} index={i} />;
      })}

      <Footer />
    </main>
  );
}
