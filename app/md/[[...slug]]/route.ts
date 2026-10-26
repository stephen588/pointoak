import { getPage } from "@/lib/content";
import { pageMarkdown } from "@/lib/markdown";

// Target of the middleware rewrite for "Accept: text/markdown" requests; not linked anywhere.
export function GET(_req: Request, { params }: { params: { slug?: string[] } }) {
  const route = params.slug?.length ? "/" + params.slug.join("/") + "/" : "/";
  const page = getPage(route);
  if (!page) return new Response("Not found\n", { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  const md = pageMarkdown(page);
  return new Response(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": String(Math.ceil(md.length / 4)),
      Vary: "Accept",
      "X-Robots-Tag": "noindex",
    },
  });
}
