import { MetadataRoute } from "next";
import { pages } from "@/content";
import { SITE_URL } from "@/lib/content";

// Every page comes from content/pages/*.json, so the sitemap is just that list.
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: SITE_URL + p.route,
    lastModified: new Date(),
    changeFrequency: p.route === "/contact/" ? "yearly" : "monthly",
    priority: p.route === "/" ? 1 : p.route.split("/").filter(Boolean).length === 1 ? 0.9 : 0.7,
  }));
}
