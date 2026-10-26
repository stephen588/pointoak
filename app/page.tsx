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
  UserCheck,
  PiggyBank,
  TreePine,
  Building2,
  Users,
  BarChart3,
  Hourglass,
  PenTool,
  Route,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScheduleButton from "@/components/page/ScheduleButton";
import { Rich } from "@/components/page/Blocks";
import { BothSidesBridge, ConvergeHexes, FinancialLifeHub } from "@/components/home/Graphics";
import { ConvergeIntoOne, GuidancePillars, HexQuad } from "@/components/home/AreaGraphics";
import type { Block, Card, Section } from "@/lib/content";
import { SITE_URL, getPage } from "@/lib/content";
import { organization, social, website } from "@/lib/seo";

// Layout follows the Figma homepage concept v4 (file t2opt1zP1oNb40eWjVUlnE); every word comes from
// content/pages/home.json (Darsh's master copy). Photos are from the same Figma file.

const home = getPage("/")!;

export const metadata: Metadata = {
  title: { absolute: home.meta.title ?? "PointOak Retirement Advisors" },
  description: home.meta.description ?? undefined,
  alternates: { canonical: SITE_URL },
  ...social(home.meta.title ?? "PointOak Retirement Advisors", home.meta.description ?? undefined, SITE_URL + "/"),
};

const jsonLd = [{ ...organization, description: home.meta.description ?? undefined }, website];

const section = (id: string) => home.sections.find((s) => s.id === id) as Section;
const first = <T extends Block["type"]>(s: Section, type: T) =>
  s.blocks.find((b) => b.type === type) as Extract<Block, { type: T }> | undefined;
const paras = (s: Section) => s.blocks.filter((b) => b.type === "p") as Extract<Block, { type: "p" }>[];
const linkOf = (s: Section) => {
  const b = first(s, "button");
  return b && b.href ? { label: b.label, href: b.href } : undefined;
};
const cardText = (c: Card) => (c.body.find((b) => b.type === "p") as { text: string } | undefined)?.text ?? "";

const SERVICE_ICONS: Record<string, typeof LineChart> = {
  "Investment Management": LineChart,
  "Comprehensive Financial Planning": Compass,
  "Retirement Income Planning": Wallet,
  "Tax-Aware Wealth Strategies": Receipt,
};
// Life-moment graphics (icons only; these replaced stock photos 10-05)
const MOMENT_ICONS: LucideIcon[] = [Route, Wallet, Briefcase];

const cap = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);
const splitList = (t: string) => t.split(/,\s*(?:and\s+)?/).map((x) => cap(x.trim())).filter(Boolean);
/** "…bring investments, retirement, … together into one coordinated strategy." */
function areaParts(text: string) {
  const m = text.match(/bring (.+?) together into (one coordinated strategy)/i);
  return m ? { pieces: splitList(m[1]), result: cap(m[2]) } : { pieces: [], result: "" };
}
/** "Independent fiduciary guidance for plan governance, investments, …." */
function bizParts(text: string) {
  const m = text.match(/^(.+?guidance) for (.+?)\.?$/i);
  return m ? { beam: m[1], pillars: splitList(m[2]) } : { beam: text, pillars: [] };
}

function MomentGraphic({ Icon, i }: { Icon: LucideIcon; i: number }) {
  const HEXP = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";
  const bg = ["bg-[#E9F1FA]", "bg-[#F2F4F7]", "bg-[#DCEAF8]"][i];
  return (
    <div className={`absolute inset-0 ${bg} overflow-hidden`} aria-hidden>
      <svg viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
        <polygon points="100,12 152,42 152,98 100,128 48,98 48,42" fill="none" stroke="#003754" strokeOpacity="0.14" strokeWidth="0.8" strokeDasharray="3 3" />
        <polygon points="100,26 140,49 140,91 100,114 60,91 60,49" fill="none" stroke="#016ba4" strokeOpacity="0.18" strokeWidth="0.6" />
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] max-w-[170px] aspect-[0.866] bg-navy flex items-center justify-center" style={{ clipPath: HEXP }}>
        <Icon className="w-[42%] h-[42%] text-white" strokeWidth={1.5} />
      </div>
      <div className="absolute left-[24%] top-[22%] w-[9%] max-w-[54px] aspect-[0.866] bg-[#4A5A70]" style={{ clipPath: HEXP }} />
      <div className="absolute right-[22%] bottom-[20%] w-[11%] max-w-[64px] aspect-[0.866] bg-bright-blue/70" style={{ clipPath: HEXP }} />
      <div className="absolute right-[28%] top-[18%] w-[6%] max-w-[36px] aspect-[0.866] bg-white" style={{ clipPath: HEXP }} />
    </div>
  );
}

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
  const heroParas = home.hero.blocks.filter((b) => b.type === "p") as Extract<Block, { type: "p" }>[];
  const heroSecondary = home.hero.blocks.find((b) => b.type === "button" && b.secondary) as { label: string } | undefined;
  const services = (first(oneAccount, "links")?.items ?? []).map((l) => ({
    ...l,
    // each card uses that service page's own subtitle from the master copy
    text: getPage(l.href!)?.hero.subtitle ?? "",
  }));
  // Diagram labels come straight from the copy: the list in "Retirement accounts, taxes, … can all affect"
  const oneText = paras(oneAccount).map((p) => p.text).join(" ");
  const listMatch = oneText.match(/(Retirement accounts,.+?) can all affect/);
  const spokes = listMatch
    ? listMatch[1].split(/,\s*(?:and\s+)?/).map((t) => t.charAt(0).toUpperCase() + t.slice(1))
    : [];
  const hubCenter = /Your investments/.test(oneText) ? "Your investments" : "";
  const band = first(broader, "band")?.text ?? "";
  const [bandLead, bandTail] = band.split(" — ");
  const bandInputs = (bandLead ?? "").split(" + ").map((t) => t.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()));

  return (
    <main className="min-h-screen">
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
      <Header />

      {/* Hero — aerial interchange, as in the Figma concept */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-navy">
        <Image src="/images/home/hero-hexagon-aerial.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center hero-zoom" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,35,55,0.6) 0%, rgba(0,35,55,0.55) 30%, rgba(0,35,55,0.93) 68%, #002337 100%)" }}
        />
        <div className="relative z-10 w-full max-w-[1170px] mx-auto px-6 xl:px-0 pt-40 pb-16 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-9 flex flex-col gap-5">
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
          </div>
        </div>
      </section>

      {/* A Different Kind of Advisory Relationship: Darsh's intro + the four pillars as the hexagon cluster */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="text-navy text-3xl md:text-4xl lg:text-[44px] font-light leading-tight">{pillars.title}</h2>
            {heroParas.map((p, i) => (
              <p key={i} className="text-text-gray text-base md:text-lg leading-[30px]">
                <Rich text={p.text} segs={p.segs} tone="light" />
              </p>
            ))}
          </div>
          <div className="lg:col-span-7">
            <HexQuad items={(first(pillars, "pillars")?.items ?? []).map((c) => ({ title: c.title, text: cardText(c) }))} />
          </div>
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
                    <div
                      className={`w-full h-[340px] md:h-[380px] rounded-[10px] overflow-hidden pb-8 ${i === 0 ? "bg-gradient-to-br from-navy to-[#0a5c8a]" : "bg-gradient-to-br from-[#2f4560] to-[#4A5A70]"}`}
                    >
                      {i === 0 ? (
                        <ConvergeIntoOne pieces={areaParts(cardText(card)).pieces} result={areaParts(cardText(card)).result} />
                      ) : (
                        <GuidancePillars beam={bizParts(cardText(card)).beam} pillars={bizParts(cardText(card)).pillars} />
                      )}
                    </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <h2 className="text-navy text-3xl md:text-4xl lg:text-[48px] font-light leading-tight">{oneAccount.title}</h2>
              {paras(oneAccount).map((t, i) => (
                <p key={i} className="text-text-gray text-base md:text-lg leading-[30px]">
                  <Rich text={t.text} segs={t.segs} tone="light" />
                </p>
              ))}
            </div>
            {spokes.length > 0 && (
              <div className="lg:col-span-6">
                <FinancialLifeHub center={hubCenter} spokes={spokes} />
              </div>
            )}
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
        <div className="relative max-w-[1170px] mx-auto px-6 xl:px-0 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-8">
            <h2 className="text-white text-3xl md:text-4xl lg:text-[48px] font-light leading-tight">{broader.title}</h2>
            {paras(broader).map((t, i) => (
              <p key={i} className="text-white/85 text-base md:text-lg leading-[30px]">
                <Rich text={t.text} segs={t.segs} tone="dark" />
              </p>
            ))}
            {band && <p className="sr-only">{band}</p>}
            {linkOf(broader) && <ArrowLink {...linkOf(broader)!} light />}
          </div>
          {bandInputs.length > 1 && (
            <div className="lg:col-span-6">
              <ConvergeHexes inputs={bandInputs} result={(bandTail ?? "").replace(/\.$/, "")} />
            </div>
          )}
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
                <MomentGraphic Icon={MOMENT_ICONS[i]} i={i} />
              </div>
              <div className={`${panel} flex items-center px-6 py-14 md:px-16 lg:px-24`}>
                <div className="flex flex-col gap-5 max-w-[460px]">
                  <h2 className={`text-2xl md:text-3xl lg:text-[36px] font-light leading-tight ${dark ? "text-white" : "text-navy"}`}>{s.title}</h2>
                  <p className={`text-base md:text-lg leading-[28px] ${dark ? "text-white/80" : "text-text-gray"}`}>{paras(s)[0] && <Rich text={paras(s)[0].text} segs={paras(s)[0].segs} tone={dark ? "dark" : "light"} />}</p>
                  {linkOf(s) && <ArrowLink {...linkOf(s)!} light={dark} />}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Experience on Both Sides of Retirement — employer plans and private wealth, bridged */}
      <section id="businesses" className="bg-white py-16 md:py-28">
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="text-navy text-3xl md:text-4xl lg:text-[48px] font-light leading-tight">{bothSides.title}</h2>
            {paras(bothSides).map((t, i) => (
              <p key={i} className="text-text-gray text-base md:text-lg leading-[30px]">
                <Rich text={t.text} segs={t.segs} tone="light" />
              </p>
            ))}
            {linkOf(bothSides) && <ArrowLink {...linkOf(bothSides)!} />}
          </div>
          <div className="lg:col-span-7 rounded-[14px] bg-cloud-blue p-6 sm:p-10">
            {/* hexagon labels are phrases from the paragraph: "employer-sponsored retirement plans" / "private-wealth team" */}
            <BothSidesBridge left="Employer-Sponsored Retirement Plans" right="Private Wealth" bridge={first(bothSides, "list")?.items ?? []} />
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
