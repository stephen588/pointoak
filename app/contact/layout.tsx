import { Metadata } from "next";
import { SITE_URL, getPage } from "@/lib/content";
import { breadcrumbList, orgRef, social } from "@/lib/seo";

const contact = getPage("/contact/")!;

export const metadata: Metadata = {
  title: { absolute: contact.meta.title ?? "Contact PointOak" },
  description: contact.meta.description ?? undefined,
  alternates: { canonical: `${SITE_URL}/contact/` },
  ...social(contact.meta.title ?? "Contact PointOak", contact.meta.description ?? undefined, `${SITE_URL}/contact/`),
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "ContactPage", name: contact.name, url: `${SITE_URL}/contact/`, description: contact.meta.description ?? undefined, about: orgRef },
    breadcrumbList([{ name: "Home", href: "/" }, { name: contact.name, href: "/contact/" }]),
  ];
  return (
    <>
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
      {children}
    </>
  );
}
