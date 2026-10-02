import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Blocks from "./Blocks";
import type { PageContent, Section } from "@/lib/content";
import { SITE_URL, allFaqs, breadcrumbs } from "@/lib/content";

function SectionView({ section, index }: { section: Section; index: number }) {
  if (section.layout === "cta") {
    return (
      <section id={section.id} className="py-16 md:py-24" style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}>
        <div className="max-w-[1170px] mx-auto px-6 xl:px-0 flex flex-col gap-6 items-start">
          <h2 className="text-white text-3xl md:text-4xl lg:text-[44px] font-light leading-tight max-w-4xl">{section.title}</h2>
          <Blocks blocks={section.blocks} tone="dark" />
        </div>
      </section>
    );
  }
  const bg = index % 2 === 0 ? "bg-white" : "bg-cloud-blue";
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

export default function ContentPage({ page }: { page: PageContent }) {
  const trail = breadcrumbs(page.route);
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
  if (faqs.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
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
          <div className="max-w-4xl flex flex-col gap-6">
            <h1 className="text-white text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.15]">{page.hero.title}</h1>
            {page.hero.subtitle && (
              <p className="text-white/95 text-xl md:text-2xl font-light leading-snug">{page.hero.subtitle}</p>
            )}
            <Blocks blocks={page.hero.blocks} tone="dark" />
          </div>
        </div>
      </section>

      {groupSections(page.sections).map((g, i) =>
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
