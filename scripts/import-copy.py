#!/usr/bin/env python3
"""Convert Darsh's master copy (.docx) + SEO sitemap (.xlsx) into content/pages/*.json.

Usage: python3 scripts/import-copy.py <master-copy.docx> <sitemap.xlsx>

Every word on the page comes from the master copy. This script only decides
structure (hero, sections, cards, lists, FAQs, links); it never writes copy.
Anything it can't place is printed as a WARN line so a human can check it.
"""
import json, re, sys, pathlib
import docx, openpyxl
from docx.table import Table
from docx.text.paragraph import Paragraph

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "content" / "pages"

# doc page title -> (route, sitemap row name)
PAGES = {
    "HOME": ("/", "Home"),
    "WEALTH MANAGEMENT": ("/services/wealth-management/", "Wealth Management"),
    "ABOUT": ("/about/", "About PointOak Retirement Advisors"),
    "WHY POINTOAK": ("/why-point-oak/", "Why PointOak"),
    "Investment Management": ("/services/investment-management/", "Investment Management"),
    "Comprehensive Financial Planning": ("/services/comprehensive-financial-planning/", "Comprehensive Financial Planning"),
    "401(k) Rollovers & Roth Conversions": ("/services/401k-rollovers-roth-conversions/", "401(k) Rollovers & Roth Conversions"),
    "Retirement Income Planning": ("/services/retirement-income-planning/", "Retirement Income Planning"),
    "Tax-Aware Wealth Strategies": ("/services/tax-aware-wealth-strategies/", "Tax-Aware Wealth Strategies"),
    "Executive Benefits Planning": ("/services/executive-benefits-planning/", "Executive Benefits Planning"),
    "Social Security & Pension Planning": ("/services/social-security-pension-planning/", "Social Security & Pension Planning"),
    "Estate Planning Coordination": ("/services/estate-planning-coordination/", "Estate Planning Coordination"),
    "Retirement Education & One-on-One Participant Guidance": ("/corporate-retirement-plans/participant-education-communication/retirement-education/", "Retirement Education & One-on-One Participant Guidance"),
    "Financial Wellness Programs": ("/corporate-retirement-plans/participant-education-communication/financial-wellness/", "Financial Wellness Programs"),
    "Retirement Plan Communications": ("/corporate-retirement-plans/participant-education-communication/communications/", "Retirement Plan Communications"),
    "Fiduciary Governance & Committee Support": ("/corporate-retirement-plans/fiduciary-governance/", "Fiduciary Governance & Committee Support"),
    "3(21) Fiduciary Services": ("/corporate-retirement-plans/fiduciary-governance/3-21-fiduciary/", "3(21) Fiduciary Services"),
    "3(38) Investment Manager Services": ("/corporate-retirement-plans/fiduciary-governance/3-38-investment-manager/", "3(38) Investment Manager Services"),
    "Plan Governance & Committee Support": ("/corporate-retirement-plans/fiduciary-governance/plan-governance/", "Plan Governance & Committee Support"),
    "Target Date Fund Consulting": ("/corporate-retirement-plans/tdf-consulting/", "Target Date Fund Consulting"),
    "FREQUENTLY ASKED QUESTIONS": ("/faq/", "Frequently Asked Questions"),
    "INSIGHTS & RESOURCES": ("/resources/", "Insights & Resources"),
    "CONTACT": ("/contact/", "Contact / Schedule"),
}

# "Learn More" under a service card -> route of that card's page (None = page not written yet)
CARD_LINKS = {
    "3(21) fiduciary services": "/corporate-retirement-plans/fiduciary-governance/3-21-fiduciary/",
    "3(38) fiduciary services": "/corporate-retirement-plans/fiduciary-governance/3-38-investment-manager/",
    "plan governance & committee support": "/corporate-retirement-plans/fiduciary-governance/plan-governance/",
}

# link text (after stripping "Explore", arrows, etc.) -> route
LINKS = {
    "wealth management": "/services/wealth-management/",
    "investment management": "/services/investment-management/",
    "our investment approach": "/services/investment-management/",
    "comprehensive financial planning": "/services/comprehensive-financial-planning/",
    "401(k) rollovers & roth conversions": "/services/401k-rollovers-roth-conversions/",
    "your 401(k) rollover options": "/services/401k-rollovers-roth-conversions/",
    "retirement income planning": "/services/retirement-income-planning/",
    "tax-aware wealth strategies": "/services/tax-aware-wealth-strategies/",
    "executive benefits planning": "/services/executive-benefits-planning/",
    "social security & pension planning": "/services/social-security-pension-planning/",
    "estate planning coordination": "/services/estate-planning-coordination/",
    "retirement plan consulting": "/corporate-retirement-plans/",
    "why pointoak": "/why-point-oak/",
    "view more faqs": "/faq/",
    "our services": "/#services",
    "learn about custom vs. off-the-shelf tdfs": "#off-the-shelf-vs-custom-target-date-funds",
}

SKIP_BANDS = ("Implementation note", "Primary implementation", "Primary sitewide")


def warn(page, msg):
    print(f"WARN [{page}] {msg}")


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def read_doc(path):
    d = docx.Document(path)
    pages, cur = [], None
    for el in d.element.body.iterchildren():
        tag = el.tag.split("}")[1]
        if tag == "p":
            p = Paragraph(el, d)
            t, s = p.text.strip(), p.style.name
            if not t:
                continue
            if s == "Title":
                if t.startswith("PART 1"):
                    continue
                if t.startswith("SITEWIDE") or t.startswith("PART 2"):
                    break
                cur = {"label": t, "blocks": []}
                pages.append(cur)
                continue
            if cur is None:
                continue
            typ = {"Heading 1": "h1", "Heading 2": "h2", "Heading 3": "h3", "List Bullet": "li",
                   "Subtitle": "subtitle", "Page Label": "band"}.get(s, "p")
            cur["blocks"].append({"t": typ, "x": t})
        elif tag == "tbl" and cur is not None:
            rows = [[c.text.strip() for c in r.cells] for r in Table(el, d).rows]
            cur["blocks"].append({"t": "table", "rows": rows})
    return pages


def read_sitemap(path):
    ws = openpyxl.load_workbook(path)["Final SEO Sitemap"]
    head = [c.value for c in ws[1]]
    out = {}
    for r in ws.iter_rows(min_row=2, values_only=True):
        row = dict(zip(head, r))
        if row.get("Final Page Name"):
            out[row["Final Page Name"]] = row
    return out


def link_for(text):
    """'CTA: Explore Wealth Management →' -> (label, href or None, kind)"""
    t = re.sub(r"^(Secondary )?CTA:\s*", "", text).strip()
    is_secondary = text.startswith("Secondary CTA")
    label = t.rstrip("→").strip()
    key = re.sub(r"^(explore|learn about)\s+", "", label.lower()) if label.lower() not in LINKS else label.lower()
    if re.match(r"schedule", label, re.I):
        return {"label": label, "action": "schedule"}
    href = LINKS.get(label.lower()) or LINKS.get(key)
    return {"label": label, "href": href, "secondary": is_secondary}


def is_short(t, n=60):
    return len(t) <= n and not t.endswith(".") and not t.endswith(":") and not t.endswith("→")


def build_blocks(raw, page, faq_section=False):
    """raw: list of {'t','x'} inside one section (after its h2). Returns typed blocks."""
    out, i = [], 0
    while i < len(raw):
        b = raw[i]
        t, x = b["t"], b.get("x", "")
        # CTA / buttons
        if x.startswith("CTA:") or x.startswith("Secondary CTA:"):
            lk = link_for(x)
            if lk.get("action") != "schedule" and not lk.get("href") and lk["label"].lower() != "learn more":
                warn(page, f"no route for CTA '{x}'")
            out.append({"type": "button", **lk})
            i += 1
            continue
        # arrow links (grouped)
        if t in ("p", "li") and x.endswith("→"):
            items = []
            while i < len(raw) and raw[i]["t"] in ("p", "li") and raw[i].get("x", "").endswith("→"):
                lk = link_for(raw[i]["x"])
                if not lk.get("href"):
                    warn(page, f"no route for link '{raw[i]['x']}'")
                items.append(lk)
                i += 1
            out.append({"type": "links", "items": items})
            continue
        if t == "table":
            if raw[i]["rows"] and raw[i]["rows"][0][0] == "Meta Title":
                i += 1
                continue
            out.append({"type": "table", "rows": raw[i]["rows"]})
            i += 1
            continue
        if t == "band":
            if not x.startswith(SKIP_BANDS):
                out.append({"type": "band", "text": x})
            i += 1
            continue
        if t == "li":
            items = []
            while i < len(raw) and raw[i]["t"] == "li" and not raw[i]["x"].endswith("→"):
                items.append(raw[i]["x"])
                i += 1
            pill = [re.match(r"^([A-Z][\w &()'-]+?) — (.+)$", it) for it in items]
            if all(pill):
                # "FIDUCIARY — Your interests come first." / "Understand — Learn what matters..."
                out.append({"type": "pillars", "items": [
                    {"title": m.group(1).title() if m.group(1).isupper() else m.group(1),
                     "body": [{"type": "p", "text": m.group(2)}]} for m in pill]})
            elif all(it.lower() in LINKS for it in items):
                # a list of service names -> links to those pages
                out.append({"type": "links", "items": [{"label": it, "href": LINKS[it.lower()]} for it in items]})
            else:
                out.append({"type": "list", "items": items})
            continue
        if t == "h3":
            # group of h3 + following paragraphs/lists
            items = []
            while i < len(raw) and raw[i]["t"] == "h3" and not raw[i]["x"].startswith("CTA:"):
                title = raw[i]["x"]
                i += 1
                body_raw = []
                while i < len(raw) and raw[i]["t"] not in ("h3",) and not raw[i].get("x", "").startswith("CTA:") \
                        and not raw[i].get("x", "").endswith("→") and raw[i]["t"] != "table":
                    body_raw.append(raw[i])
                    i += 1
                body = build_blocks(body_raw, page) if body_raw else []
                if title.endswith("?"):
                    if not body:
                        warn(page, f"FAQ with no answer dropped: '{title}'")
                        continue
                    items.append({"q": title, "a": body})
                else:
                    items.append({"title": title, "body": body})
            if items and "q" in items[0] and not all("q" in it for it in items):
                warn(page, "mixed FAQ/card group: " + ", ".join(it.get("q", it.get("title", "")) for it in items))
            if items and "q" in items[0]:
                out.append({"type": "faq", "items": items})
            elif items:
                out.append({"type": "cards", "items": items})
            continue
        if t in ("p", "subtitle"):
            # lead line ending with ':' followed by short items -> list
            if x.endswith(":") and i + 1 < len(raw) and raw[i + 1]["t"] == "p" and len(raw[i + 1]["x"]) <= 140:
                items, j = [], i + 1
                while j < len(raw) and raw[j]["t"] == "p" and len(raw[j]["x"]) <= 140 \
                        and not raw[j]["x"].endswith(":") and not raw[j]["x"].endswith("→") \
                        and not raw[j]["x"].startswith("CTA:"):
                    items.append(raw[j]["x"])
                    j += 1
                if len(items) >= 2:
                    out.append({"type": "list", "lead": x, "items": items})
                    i = j
                    continue
            # run of short label-like lines -> chips
            if is_short(x):
                items, j = [], i
                while j < len(raw) and raw[j]["t"] == "p" and is_short(raw[j]["x"]):
                    items.append(raw[j]["x"])
                    j += 1
                if len(items) >= 2:
                    out.append({"type": "chips", "items": items})
                    i = j
                    continue
            # "LABEL — text" pillars
            m = re.match(r"^([A-Z][A-Z \-&()0-9]+) — (.+)$", x)
            if m:
                items, j = [], i
                while j < len(raw) and raw[j]["t"] == "p":
                    mm = re.match(r"^([A-Z][A-Z \-&()0-9]+) — (.+)$", raw[j]["x"])
                    if not mm:
                        break
                    items.append({"title": mm.group(1).title(), "body": [{"type": "p", "text": mm.group(2)}]})
                    j += 1
                out.append({"type": "pillars", "items": items})
                i = j
                continue
            out.append({"type": "p", "text": x})
            i += 1
            continue
        warn(page, f"unplaced block {t}: {x[:60]}")
        i += 1
    return merge_card_links(out, page)


def merge_card_links(blocks, page):
    """[cards(1), button] [cards(1), button] ... -> one cards block whose items carry a link."""
    out = []
    for b in blocks:
        prev = out[-1] if out else None
        if b["type"] == "button" and b.get("action") != "schedule" and prev and prev["type"] == "cards" \
                and "link" not in prev["items"][-1]:
            card = prev["items"][-1]
            href = b.get("href")
            if b["label"].lower() == "learn more":
                href = CARD_LINKS.get(card["title"].lower())
                if not href:
                    warn(page, f"'Learn More' under '{card['title']}' has no page yet; link left off")
            if href:
                card["link"] = {"label": b["label"], "href": href}
            continue
        if b["type"] == "cards" and prev and prev["type"] == "cards" and len(b["items"]) == 1 \
                and "link" in prev["items"][-1]:
            prev["items"].extend(b["items"])
            continue
        out.append(b)
    return out


STEP_TITLES = re.compile(r"process|how .* works?|what to expect|how we work", re.I)


def convert(page):
    label, blocks = page["label"], page["blocks"]
    blocks = [b for b in blocks if b["t"] != "subtitle"]
    # hero = h1, optional h2 straight after it, then everything until the next h2
    i = next(k for k, b in enumerate(blocks) if b["t"] == "h1")
    pre = [b for b in blocks[:i] if b["t"] == "table"]
    hero = {"title": blocks[i]["x"]}
    i += 1
    if i < len(blocks) and blocks[i]["t"] == "h2":
        hero["subtitle"] = blocks[i]["x"]
        i += 1
    j = i
    while j < len(blocks) and blocks[j]["t"] != "h2":
        j += 1
    hero["blocks"] = build_blocks(blocks[i:j], label)
    sections = []
    while j < len(blocks):
        title = blocks[j]["x"]
        k = j + 1
        while k < len(blocks) and blocks[k]["t"] != "h2":
            k += 1
        is_faq = bool(re.search(r"frequently asked", title, re.I)) or label == "FREQUENTLY ASKED QUESTIONS"
        sec = {"id": slug(title), "title": title, "blocks": build_blocks(blocks[j + 1:k], label, faq_section=is_faq)}
        if STEP_TITLES.search(title) and any(b["type"] in ("cards", "pillars") for b in sec["blocks"]):
            sec["layout"] = "steps"
        if is_faq:
            sec["layout"] = "faq"
        sections.append(sec)
        j = k
    if sections and any(b["type"] == "button" and b.get("action") == "schedule" for b in sections[-1]["blocks"]):
        sections[-1]["layout"] = "cta"
    return hero, sections, pre


def main(doc_path, xlsx_path):
    sitemap = read_sitemap(xlsx_path)
    OUT.mkdir(parents=True, exist_ok=True)
    registry = []
    for page in read_doc(doc_path):
        if page["label"] not in PAGES:
            warn(page["label"], "page not mapped to a route; skipped")
            continue
        route, sm_name = PAGES[page["label"]]
        sm = sitemap.get(sm_name, {})
        hero, sections, _ = convert(page)
        data = {
            "route": route,
            "name": sm_name,
            "parent": sm.get("Parent Page"),
            "meta": {
                "title": sm.get("Meta Title"),
                "description": sm.get("Meta Description"),
                "schema": sm.get("Schema"),
            },
            "hero": hero,
            "sections": sections,
        }
        fname = slug(route) or "home"
        (OUT / f"{fname}.json").write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
        registry.append((route, fname))
        print(f"ok {route} ({len(sections)} sections)")
    # index lists every page file, including hand-built hub pages (content/pages/hub-*.json)
    files = sorted(f.stem for f in OUT.glob("*.json"))
    lines = ["// Generated by scripts/import-copy.py — do not edit by hand.", "import type { PageContent } from \"@/lib/content\";"]
    for f in files:
        lines.append(f"import p_{f.replace('-', '_')} from \"./pages/{f}.json\";")
    lines.append("\nexport const pages: PageContent[] = [")
    for f in files:
        lines.append(f"  p_{f.replace('-', '_')} as PageContent,")
    lines.append("];\n")
    (ROOT / "content" / "index.ts").write_text("\n".join(lines))


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
