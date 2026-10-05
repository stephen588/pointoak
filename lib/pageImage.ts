import fs from "fs";
import path from "path";
import alts from "@/content/page-images.json";

/** The page's photo (public/images/pages/<slug>.webp), or null if it doesn't have one. Server-only. */
export function pageImage(route: string): { src: string; alt: string } | null {
  const slug = route.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "home";
  const src = `/images/pages/${slug}.webp`;
  if (!fs.existsSync(path.join(process.cwd(), "public", src))) return null;
  return { src, alt: (alts as Record<string, string>)[slug] ?? "" };
}
