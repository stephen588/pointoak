import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/components/page/ContentPage";
import { SITE_URL, genericRoutes, getPage } from "@/lib/content";
import { social } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return genericRoutes().map((route) => ({ slug: route.split("/").filter(Boolean) }));
}

function routeFor(slug: string[]) {
  return "/" + slug.join("/") + "/";
}

export async function generateMetadata(props: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const params = await props.params;
  const page = getPage(routeFor(params.slug));
  if (!page) return {};
  const url = SITE_URL + page.route;
  return {
    // sitemap titles already end in "| PointOak", so skip the layout's title template
    title: { absolute: page.meta.title ?? page.name },
    description: page.meta.description ?? undefined,
    alternates: { canonical: url },
    ...social(page.meta.title ?? page.name, page.meta.description ?? undefined, url),
  };
}

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;
  const page = getPage(routeFor(params.slug));
  if (!page) notFound();
  return <ContentPage page={page} />;
}
