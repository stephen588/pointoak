import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Clock, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Rich } from "@/components/page/Blocks";
import { SectionView } from "@/components/page/ContentPage";
import { ArticleCover, HEX, topicIcon, topicsFor } from "@/components/resources/ResourceGraphics";
import type { Block, Card, Section } from "@/lib/content";
import { SITE_URL, breadcrumbs, getPage } from "@/lib/content";

// Insights & Resources has its own layout (Hannah 10-06: header-nav pages get unique heroes).
// Words come from resources.json; read times are computed from each article's word count at
// 225 words/minute (the handoff workbook's reading-speed assumption).

const page = getPage("/resources/")!;

export const metadata: Metadata = {
  title: { absolute: page.meta.title ?? page.name },
  description: page.meta.description ?? undefined,
  alternates: { canonical: SITE_URL + page.route },
  openGraph: { title: page.meta.title ?? page.name, description: page.meta.description ?? undefined, url: SITE_URL + page.route },
};

type P = Extract<Block, { type: "p" }>;
type Article = { label: string; href: string; text?: string };
const sec = (id: string) => page.sections.find((s) => s.id === id);
const cardsOf = (s?: Section): Card[] => (s?.blocks.find((b) => b.type === "cards") as Extract<Block, { type: "cards" }> | undefined)?.items ?? [];
const paras = (blocks: Block[]) => blocks.filter((b) => b.type === "p") as P[];
const cardText = (c: Card) => paras(c.body).map((p) => p.text).join(" ");

function words(blocks: Block[]): number {
  let n = 0;
  for (const b of blocks) {
    if (b.type === "p" || b.type === "h3") n += b.text.split(/\s+/).length;
    else if (b.type === "list") n += b.items.join(" ").split(/\s+/).length;
    else if (b.type === "table") n += b.rows.flat().join(" ").split(/\s+/).length;
  }
  return n;
}
function readMinutes(href: string) {
  const a = getPage(href);
  if (!a) return null;
  const total = words(a.hero.blocks) + a.sections.reduce((n, s) => n + words(s.blocks), 0);
  return Math.max(1, Math.ceil(total / 225));
}

export default function ResourcesPage() {
  const trail = breadcrumbs(page.route);
  const heroP = paras(page.hero.blocks);
  const individuals = sec("individuals-families");
  const businesses = sec("businesses-retirement-plan-sponsors");
  const featured = sec("featured-insights");
  const custom = new Set([individuals, businesses, featured].filter(Boolean).map((s) => s!.id));
  const articles = ((featured?.blocks.find((b) => b.type === "articles") as Extract<Block, { type: "articles" }> | undefined)?.items ?? []) as Article[];
  const [lead, ...rest] = articles;
  const indTopics = cardsOf(individuals).map((c) => ({ title: c.title, text: cardText(c) }));
  const bizTopics = cardsOf(businesses).map((c) => ({ title: c.title, text: cardText(c) }));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: page.name,
      url: SITE_URL + page.route,
      description: page.meta.description ?? undefined,
      hasPart: articles.map((a) => ({ "@type": "BlogPosting", headline: a.label, url: SITE_URL + a.href })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: SITE_URL + t.href })),
    },
  ];

  const TopicColumn = ({ section, topics, Icon, dark }: { section?: Section; topics: { title: string; text: string }[]; Icon: typeof Users; dark?: boolean }) =>
    section ? (
      <div id={section.id} className={`scroll-mt-24 rounded-[16px] p-6 md:p-8 flex flex-col gap-5 ${dark ? "bg-[#2f4560]" : "bg-navy"}`}>
        <div className="flex items-center gap-3">
          <span className="w-11 aspect-[0.866] bg-white flex items-center justify-center" style={{ clipPath: HEX }}>
            <Icon className="w-5 h-5 text-navy" strokeWidth={1.7} />
          </span>
          <h2 className="text-white text-2xl md:text-[28px] font-light">{section.title}</h2>
        </div>
        <ul className="flex flex-col divide-y divide-white/10">
          {topics.map((t) => {
            const TIcon = topicIcon(t.title);
            const related = articles.filter((a) => topicsFor(a.label, [t]).length > 0);
            return (
              <li key={t.title} className="py-4 flex gap-4">
                <TIcon className="w-5 h-5 mt-0.5 text-light-blue flex-shrink-0" strokeWidth={1.7} />
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-white font-semibold">{t.title}</h3>
                  <p className="text-white/70 text-sm leading-snug">{t.text}</p>
                  {related.length > 0 && (
                    <ul className="flex flex-wrap gap-2 pt-1">
                      {related.map((a) => (
                        <li key={a.href}>
                          <Link href={a.href} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 px-3 py-1 text-white text-xs transition-colors">
                            {a.label.split(":")[0]}
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    ) : null;

  return (
    <main className="min-h-screen">
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
      <Header />

      {/* Hero: light editorial masthead with the lead article */}
      <section className="relative overflow-hidden bg-[#F4F7FB]">
        <div className="bg-navy h-[78px] xl:h-[110px]" aria-hidden />
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 pt-12 md:pt-16 pb-14 md:pb-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-text-gray text-sm">
              {trail.map((t, i) => (
                <li key={t.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i === trail.length - 1 ? <span className="text-navy">{t.name}</span> : <Link href={t.href} className="hover:text-navy">{t.name}</Link>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-navy/[0.06] px-3 py-1 text-medium-blue text-xs font-semibold uppercase tracking-[0.14em]">
                {articles.length} articles · {indTopics.length + bizTopics.length} topics
              </span>
              <h1 className="text-navy text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05]">{page.hero.title}</h1>
              <p className="text-navy/80 text-xl md:text-2xl font-light leading-snug">{page.hero.subtitle}</p>
              {heroP.map((p, i) => (
                <p key={i} className="text-text-gray text-base md:text-lg leading-[30px]">
                  <Rich text={p.text} segs={p.segs} tone="light" />
                </p>
              ))}
              <div className="flex flex-wrap gap-3 pt-1">
                {individuals && (
                  <a href={`#${individuals.id}`} className="inline-flex items-center gap-2 rounded-[7px] bg-navy text-white px-5 py-3 text-sm font-medium hover:bg-[#0a5c8a]">
                    <Users className="w-4 h-4" /> {individuals.title}
                  </a>
                )}
                {businesses && (
                  <a href={`#${businesses.id}`} className="inline-flex items-center gap-2 rounded-[7px] border border-navy/25 text-navy px-5 py-3 text-sm font-medium hover:border-navy">
                    <Building2 className="w-4 h-4" /> {businesses.title}
                  </a>
                )}
              </div>
            </div>
            {lead && (
              <Link href={lead.href} className="lg:col-span-7 group rounded-[18px] overflow-hidden bg-white shadow-2xl shadow-navy/15 border border-[#E3E8EE] flex flex-col">
                <ArticleCover title={lead.label} className="h-[220px] md:h-[280px]" />
                <div className="p-6 md:p-8 flex flex-col gap-3">
                  <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-medium-blue">
                    {featured?.title}
                    {readMinutes(lead.href) && (
                      <span className="inline-flex items-center gap-1 text-text-gray font-medium normal-case tracking-normal">
                        <Clock className="w-3.5 h-3.5" /> {readMinutes(lead.href)} min read
                      </span>
                    )}
                  </span>
                  <h2 className="text-navy text-2xl md:text-[30px] font-semibold leading-tight group-hover:text-medium-blue transition-colors">{lead.label}</h2>
                  {lead.text && <p className="text-text-gray text-base leading-[27px]">{lead.text}</p>}
                  <span className="inline-flex items-center gap-2 text-navy font-medium mt-1">
                    Read the article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Featured Insights: covers grid */}
      {featured && rest.length > 0 && (
        <section id={featured.id} className="bg-white py-16 md:py-20">
          <div className="max-w-[1170px] mx-auto px-6 xl:px-0 flex flex-col gap-10">
            <h2 className="text-navy text-3xl md:text-4xl lg:text-[44px] font-light leading-tight">{featured.title}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((a) => (
                <li key={a.href}>
                  <Link href={a.href} className="group h-full rounded-[14px] overflow-hidden bg-white border border-[#E3E8EE] flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 transition-all">
                    <ArticleCover title={a.label} className="h-[150px]" />
                    <div className="p-6 flex flex-col gap-2.5 flex-1">
                      {readMinutes(a.href) && (
                        <span className="inline-flex items-center gap-1 text-text-gray text-xs">
                          <Clock className="w-3.5 h-3.5" /> {readMinutes(a.href)} min read
                        </span>
                      )}
                      <h3 className="text-navy text-lg font-semibold leading-snug group-hover:text-medium-blue transition-colors">{a.label}</h3>
                      {a.text && <p className="text-text-gray text-[15px] leading-[24px] flex-1">{a.text}</p>}
                      <span className="inline-flex items-center gap-2 text-navy text-sm font-medium pt-1">
                        Read the article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Topic library: two audiences */}
      <section className="bg-[#F4F7FB] py-16 md:py-20">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TopicColumn section={individuals} topics={indTopics} Icon={Users} />
          <TopicColumn section={businesses} topics={bizTopics} Icon={Building2} dark />
        </div>
      </section>

      {page.sections.map((s, i) => (custom.has(s.id) ? null : <SectionView key={s.id} section={s} index={i} />))}

      <Footer />
    </main>
  );
}
