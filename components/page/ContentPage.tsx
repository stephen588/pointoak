import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Blocks from "./Blocks";
import type { PageContent, Section } from "@/lib/content";
import { SITE_URL, allFaqs, breadcrumbs } from "@/lib/content";
import { pageImage } from "@/lib/pageImage";

function SectionView({ section, index }: { section: Section; index: number }) {
  if (section.layout === "cta") {
    return (
      <section id={section.id} className="relative overflow-hidden bg-navy py-16 md:py-28">
        <Image src="/images/home/investment-aerial.jpg" alt="" fill sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,35,55,0.96) 0%, rgba(0,55,84,0.85) 55%, rgba(0,120,184,0.55) 100%)" }} />
        <div className="relative max-w-[1170px] mx-auto px-6 xl:px-0 flex flex-col gap-6 items-start">
          <h2 className="text-white text-3xl md:text-4xl lg:text-[44px] font-light leading-tight max-w-4xl">{section.title}</h2>
          <Blocks blocks={section.blocks} tone="dark" />
        </div>
      </section>
    );
  }
  const bg = index % 2 === 0 ? "bg-white" : "bg-cloud-blue";
  // Text-only sections: heading on the left with an accent rule, paragraphs on the right
  if (section.blocks.length > 0 && section.blocks.every((b) => b.type === "p")) {
    return (
      <section id={section.id} className={`${bg} py-14 md:py-20 scroll-mt-24`}>
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col gap-5">
            <span aria-hidden className="block w-14 h-[3px] rounded-full bg-gradient-to-r from-[#B5875A] to-[#D9B48A]" />
            <h2 className="text-navy text-3xl md:text-4xl lg:text-[40px] font-light leading-tight">{section.title}</h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-5 lg:pt-6">
            <Blocks blocks={section.blocks} />
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id={section.id} className={`${bg} py-14 md:py-20 scroll-mt-24`}>
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0 flex flex-col gap-6 md:gap-8">
        <h2 className="text-navy text-3xl md:text-4xl lg:text-[44px] font-light leading-tight max-w-4xl">{section.title}</h2>
        <Blocks blocks={section.blocks} steps={section.layout === "steps"} />
      </div>
    </section>
  );
}

// Runs of short numbered sections ("1. Your Adviser Should Work for You" + one paragraph) read better as a grid.
const isNumbered = (s: Section) => /^\d+\.\s/.test(s.title) && s.blocks.every((b) => b.type === "p");

function groupSections(sections: Section[]): (Section | Section[])[] {
  const out: (Section | Section[])[] = [];
  for (const s of sections) {
    const last = out[out.length - 1];
    if (isNumbered(s) && Array.isArray(last)) last.push(s);
    else out.push(isNumbered(s) ? [s] : s);
  }
  return out.map((g) => (Array.isArray(g) && g.length === 1 ? g[0] : g));
}

function NumberedGrid({ sections, index }: { sections: Section[]; index: number }) {
  const bg = index % 2 === 0 ? "bg-white" : "bg-cloud-blue";
  return (
    <section className={`${bg} py-14 md:py-20`}>
      <div className="max-w-[1170px] mx-auto px-6 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sections.map((s) => {
          const m = s.title.match(/^(\d+)\.\s+(.+)$/)!;
          return (
            <div key={s.id} id={s.id} className="bg-white border border-[#E5EAF0] rounded-[7px] p-8 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center font-semibold text-lg">{m[1]}</div>
              <h2 className="text-navy text-xl md:text-2xl font-semibold leading-snug">{m[2]}</h2>
              <Blocks blocks={s.blocks} compact />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ArticleBody({ page }: { page: PageContent }) {
  const body = page.sections.filter((s) => s.layout !== "cta");
  const cta = page.sections.find((s) => s.layout === "cta");
  return (
    <>
      <article className="bg-white py-14 md:py-20">
        <div className="max-w-[780px] mx-auto px-6 flex flex-col gap-12">
          {page.hero.blocks.length > 0 && (
            <div className="flex flex-col gap-5">
              <Blocks blocks={page.hero.blocks} />
            </div>
          )}
          {body.map((s) => (
            <section key={s.id} id={s.id} className="flex flex-col gap-5 scroll-mt-24">
              <h2 className="text-navy text-2xl md:text-[32px] font-normal leading-tight">{s.title}</h2>
              <Blocks blocks={s.blocks} />
            </section>
          ))}
          {page.sources?.length ? (
            <section className="border-t border-[#E3E8EE] pt-8 flex flex-col gap-3">
              <h2 className="text-navy text-sm font-semibold uppercase tracking-wider">Sources</h2>
              <ul className="flex flex-col gap-2">
                {page.sources.map((src) => (
                  <li key={src.href} className="text-text-gray text-sm leading-relaxed">
                    <a href={src.href} target="_blank" rel="noopener noreferrer" className="text-medium-blue underline underline-offset-2 hover:text-navy">
                      {src.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </article>
      {cta && <SectionView section={cta} index={0} />}
    </>
  );
}

export default function ContentPage({ page }: { page: PageContent }) {
  const trail = breadcrumbs(page.route);
  const img = pageImage(page.route);
  const faqs = allFaqs(page);
  const jsonLd: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: trail.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.name,
        item: SITE_URL + t.href,
      })),
    },
  ];
  if (page.route.startsWith("/services/") || page.route.startsWith("/corporate-retirement-plans/")) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.name,
      url: SITE_URL + page.route,
      description: page.meta.description ?? undefined,
      provider: {
        "@type": "FinancialService",
        name: "PointOak Retirement Advisors",
        url: SITE_URL,
        address: {
          "@type": "PostalAddress",
          streetAddress: "1751 Pinnacle Drive, Suite 600",
          addressLocality: "McLean",
          addressRegion: "VA",
          postalCode: "22102",
          addressCountry: "US",
        },
      },
      areaServed: ["Washington, DC metro area", "United States"],
    });
  }
  // FAQs stay visible but carry no FAQPage markup (handoff PC07: no FAQ rich-result expectations).
  void faqs;
  if (page.kind === "article") {
    // No author or dates: PC07 asks for real author/reviewer/date fields only, and none are supplied yet.
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: page.hero.title,
      description: page.meta.description ?? undefined,
      url: SITE_URL + page.route,
      mainEntityOfPage: SITE_URL + page.route,
      publisher: { "@type": "Organization", name: "PointOak Retirement Advisors", url: SITE_URL },
    });
  }

  return (
    <main className="min-h-screen">
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
      <Header />

      <section
        className="relative pt-[78px] pb-16 md:pb-24"
        style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}
      >
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 pt-14 md:pt-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-white/60 text-sm">
              {trail.map((t, i) => (
                <li key={t.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i === trail.length - 1 ? (
                    <span className="text-white">{t.name}</span>
                  ) : (
                    <Link href={t.href} className="hover:text-white transition-colors">
                      {t.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className={`grid grid-cols-1 gap-12 items-center ${img ? "lg:grid-cols-12" : ""}`}>
            <div className={`flex flex-col gap-6 ${img ? "lg:col-span-7" : "max-w-4xl"}`}>
              <h1 className="text-white text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.15]">{page.hero.title}</h1>
              {page.hero.subtitle && (
                <p className="text-white/95 text-xl md:text-2xl font-light leading-snug">{page.hero.subtitle}</p>
              )}
              {page.kind !== "article" && <Blocks blocks={page.hero.blocks} tone="dark" />}
            </div>
            {img && (
              <div className="lg:col-span-5 relative">
                <div aria-hidden className="hidden lg:block absolute -inset-3 translate-x-4 translate-y-4 rounded-[14px] border border-white/25" />
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1600}
                  height={1200}
                  priority
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="relative w-full aspect-[4/3] object-cover rounded-[12px] shadow-2xl shadow-black/30"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {page.kind === "article" ? (
        <ArticleBody page={page} />
      ) : groupSections(page.sections).map((g, i) =>
        Array.isArray(g) ? (
          <NumberedGrid key={i} sections={g} index={i} />
        ) : (
          <SectionView key={g.id + i} section={g} index={i} />
        ),
      )}

      <Footer />
    </main>
  );
}
