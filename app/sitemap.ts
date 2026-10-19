import { MetadataRoute } from "next";
import { pages } from "@/content";
import { SITE_URL } from "@/lib/content";

// Every page comes from content/pages/*.json, plus the custom pages listed below.
export default function sitemap(): MetadataRoute.Sitemap {
  // Custom pages without a content JSON (Client Center, Terms of Use: Darsh 10-19)
  const extra = ["/client-center/", "/terms-of-use/"].map((route) => ({
    url: SITE_URL + route,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));
  return [...pages.map((p) => ({
    url: SITE_URL + p.route,
    lastModified: new Date(),
    changeFrequency: (p.route === "/contact/" ? "yearly" : "monthly") as "yearly" | "monthly",
    priority: p.route === "/" ? 1 : p.route.split("/").filter(Boolean).length === 1 ? 0.9 : 0.7,
  })), ...extra];
}
