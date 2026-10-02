#!/usr/bin/env python3
"""Build the two retirement-plan hub pages Darsh's master copy doesn't include.

Run after import-copy.py. No new copy: hero lines are Darsh's own sentences from the
homepage/About copy, and each card uses the child page's own subtitle. Replace these
files with real hub copy when PointOak sends it.
"""
import json, pathlib, sys
import openpyxl

ROOT = pathlib.Path(__file__).resolve().parent.parent
PAGES = ROOT / "content" / "pages"


def load(route):
    for f in PAGES.glob("*.json"):
        d = json.loads(f.read_text())
        if d["route"] == route:
            return d
    raise SystemExit(f"missing {route}")


def card(route, title=None):
    d = load(route)
    return {"title": title or d["name"], "body": [{"type": "p", "text": d["hero"]["subtitle"]}],
            "link": {"label": "Learn More", "href": route}}


def meta(sitemap, name):
    ws = openpyxl.load_workbook(sitemap)["Final SEO Sitemap"]
    head = [c.value for c in ws[1]]
    for r in ws.iter_rows(min_row=2, values_only=True):
        row = dict(zip(head, r))
        if row.get("Final Page Name") == name:
            return {"title": row["Meta Title"], "description": row["Meta Description"], "schema": row["Schema"]}
    return {}


def find_text(route, startswith):
    d = load(route)
    def walk(blocks):
        for b in blocks:
            if b["type"] == "p" and b["text"].startswith(startswith):
                return b["text"]
            for it in b.get("items", []) if isinstance(b.get("items"), list) else []:
                if isinstance(it, dict):
                    t = walk(it.get("body", []))
                    if t:
                        return t
    for s in [d["hero"]] + d["sections"]:
        t = walk(s["blocks"])
        if t:
            return t
    raise SystemExit(f"text not found: {startswith}")


def main(sitemap):
    home_cta = next(s for s in load("/")["sections"] if s.get("layout") == "cta")
    hub = {
        "route": "/corporate-retirement-plans/",
        "name": "Retirement Plan Consulting",
        "parent": "Home",
        "meta": meta(sitemap, "Retirement Plan Consulting"),
        "hero": {
            "title": "Retirement Plan Consulting",
            "subtitle": find_text("/", "Independent fiduciary guidance"),
            "blocks": [
                {"type": "p", "text": find_text("/about/", "For businesses, PointOak provides")},
                {"type": "button", "label": "Schedule a Complimentary Consultation", "action": "schedule"},
            ],
        },
        "sections": [
            {"id": "services", "title": "Retirement Plan Consulting Services", "blocks": [{"type": "cards", "items": [
                {"title": "Participant Education & Communication",
                 # Darsh's own line for this topic on the Insights & Resources page
                 "body": [{"type": "p", "text": find_text("/resources/", "Retirement education, financial wellness")}],
                 "link": {"label": "Learn More", "href": "/corporate-retirement-plans/participant-education-communication/"}},
                card("/corporate-retirement-plans/fiduciary-governance/"),
                card("/corporate-retirement-plans/tdf-consulting/"),
            ]}]},
            home_cta,
        ],
    }
    edu = {
        "route": "/corporate-retirement-plans/participant-education-communication/",
        "name": "Participant Education & Communication",
        "parent": "Retirement Plan Consulting",
        "meta": meta(sitemap, "Participant Education & Communication"),
        "hero": {
            "title": "Participant Education & Communication",
            "blocks": [{"type": "button", "label": "Schedule a Complimentary Consultation", "action": "schedule"}],
        },
        "sections": [
            {"id": "services", "title": "Participant Education & Communication Services", "blocks": [{"type": "cards", "items": [
                card("/corporate-retirement-plans/participant-education-communication/retirement-education/"),
                card("/corporate-retirement-plans/participant-education-communication/financial-wellness/"),
                card("/corporate-retirement-plans/participant-education-communication/communications/"),
            ]}]},
            home_cta,
        ],
    }
    for d, name in ((hub, "hub-corporate-retirement-plans"), (edu, "hub-participant-education-communication")):
        (PAGES / f"{name}.json").write_text(json.dumps(d, indent=2, ensure_ascii=False) + "\n")
        print("ok", d["route"])


if __name__ == "__main__":
    main(sys.argv[1])
