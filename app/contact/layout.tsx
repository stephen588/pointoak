import { Metadata } from "next";
import { SITE_URL, getPage } from "@/lib/content";

const contact = getPage("/contact/")!;

export const metadata: Metadata = {
  title: { absolute: contact.meta.title ?? "Contact PointOak" },
  description: contact.meta.description ?? undefined,
  alternates: { canonical: `${SITE_URL}/contact/` },
  openGraph: {
    title: contact.meta.title ?? "Contact PointOak",
    description: contact.meta.description ?? undefined,
    url: `${SITE_URL}/contact/`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
