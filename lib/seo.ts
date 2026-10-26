import type { Metadata } from "next";
import { SITE_URL } from "@/lib/content";

// One place for the firm's structured data and social cards (SEO/AIO audit 2026-10-26).
// Facts come from the live site footer/About page and the SEC IAPD records; no new claims.

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const DARSH_ID = `${SITE_URL}/about/#darsh-makim`;

// 1200x630 share card; the plain logo is white on transparent and disappears on white previews.
export const OG_IMAGE = { url: "/images/og-card.jpg", width: 1200, height: 630, alt: "PointOak Retirement Advisors" };

/** Short reference to the firm entity, for provider/publisher/worksFor. */
export const orgRef = { "@type": "FinancialService", "@id": ORG_ID, name: "PointOak Retirement Advisors", url: SITE_URL };

export const organization = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": ORG_ID,
  name: "PointOak Retirement Advisors",
  legalName: "PointOak Retirement Advisors, LLC",
  url: SITE_URL,
  logo: `${SITE_URL}/images/pointoak-logo-square.png`,
  image: `${SITE_URL}${OG_IMAGE.url}`,
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
  hasMap: "https://maps.google.com/?q=1751+Pinnacle+Drive+Suite+600+McLean+VA+22102",
  areaServed: ["Washington, DC metro area", "United States"],
  serviceType: ["Wealth Management", "Investment Management", "Financial Planning", "Retirement Plan Consulting"],
  founder: { "@id": DARSH_ID },
  sameAs: [
    "https://www.linkedin.com/company/pointoak",
    "https://adviserinfo.sec.gov/firm/summary/314866",
    "https://www.bbb.org/us/va/mclean/profile/financial-services/pointoak-retirement-advisors-0241-236104016",
  ],
};

export const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "PointOak Retirement Advisors",
  url: SITE_URL,
  publisher: { "@id": ORG_ID },
};

// Wording from the About page ("Darsh Makim, CRPC® — Founder & Principal").
export const darsh = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": DARSH_ID,
  name: "Darsh Makim",
  honorificSuffix: "CRPC®",
  jobTitle: "Founder & Principal",
  image: `${SITE_URL}/images/team/darsh-makim.webp`,
  url: `${SITE_URL}/about/`,
  worksFor: orgRef,
  sameAs: ["https://adviserinfo.sec.gov/individual/summary/5043274"],
};

export function breadcrumbList(trail: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: SITE_URL + t.href })),
  };
}

/** Per-page Open Graph + Twitter tags. Next replaces (not merges) these objects, so every page sets the image itself. */
export function social(title: string, description: string | undefined, url: string): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "PointOak Retirement Advisors",
      title,
      description,
      url,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}
