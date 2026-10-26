# PointOak — HANDOFF

Live site: https://www.pointoak.com (Vercel, team tkx-media, project `pointoak` prj_KpDD9GIYCMnOiu8bmyNhPpAYbvTt)
Staging: https://pointoak-staging.vercel.app (stable alias, publicly viewable, no deployment protection)

## Workflow (client change rounds)
1. Edit code in /opt/pointoak (branch `preview`).
2. `./stage.sh` → builds on Vercel, re-points pointoak-staging.vercel.app. Send URL to client.
3. Client approves → `./golive.sh` (PROD — Adam/client approval required first).
4. Commit + push `preview` after each round (webhook is dead, pushes deploy nothing).

Token: sourced from `/opt/report-dashboard/.env.keys` (VERCEL_TOKEN). Git push auth: remote pinned to `stephen588@github.com` credential (store has a second x-access-token entry that 403s on this repo).

## Critical context (2026-07-27)
- **git `main` ≠ live prod.** main (Mar 25) contains ~15 extra pages (faq, who-we-serve, our-process, disclosures, privacy-policy, etc.) that are NOT live — they 404 on prod. Live prod = a trimmed 145-file CLI deploy from 2026-04-24 (dpl_Dm4abnop6rXFkpz3Gc7FrpfzxWZw), same day project `pointoak-prod-restore` was created → looks like an emergency restore/rollback. Do NOT deploy main to prod without checking whether those pages were rolled back on purpose.
- Branch `preview` = live prod source, downloaded from that deployment via Vercel API (v8 files endpoint) and committed at 0c6ba4d. This is the baseline for all client changes.
- GitHub→Vercel auto-deploy is DEAD (last git-triggered deploy 04-24; pushes trigger nothing; no Vercel webhook/app on repo). All deploys are CLI. Fixing needs GitHub UI access to reinstall the Vercel app.
- Stale branches on origin: `staging` (Michael, Mar 26 — superseded, force-push to it was blocked, hence branch name `preview`), `dev/footer-fix`.
- Other Vercel projects: `pointoak-prod-restore` (empty), `pointoak-site` (ERROR build) — both unused leftovers.

## Kickoff prompt
> PointOak site: /opt/pointoak branch `preview` = live prod baseline. Client changes → edit, run ./stage.sh, share https://pointoak-staging.vercel.app. Prod push = ./golive.sh, Adam-gated. Read HANDOFF.md first — main is NOT the live source.

## 2026-10-02 — Darsh's master copy build (Hannah)
- Copy source: Darsh's `PointOak_Website_Master_Copy_Final_and_Editorial.docx` + `PointOak_Final_SEO_Sitemap_Implementation_Map.xlsx` (Drive folder 1Rw9HjyAai7SvekDi6N_scNcApSHfIf50). 23 of his 44 sitemap pages have copy; the rest are not built.
- Pages are data: `content/pages/*.json`, rendered by `app/[...slug]` (generic template) and `app/page.tsx` (home). Contact keeps its own page + form.
- Regenerate after a new copy doc: `python3 scripts/import-copy.py <docx> <xlsx> && python3 scripts/build-hubs.py <xlsx>` (WARN lines = things to check). Hub pages (`hub-*.json`) are assembled from Darsh's existing sentences until he sends hub copy.
- Nav lives in `components/Header.tsx`; pages without copy are left out of it.
- `trailingSlash: true`; *.vercel.app hosts send `X-Robots-Tag: noindex`.
- Deploy token: `/root/.vercel-token` (the report-dashboard token lost team access 10-02).
- Schedule CTAs open the existing consultation modal until PointOak sends their scheduling calendar link.

## 2026-10-05 — Rebuilt on Darsh's FINAL developer handoff
- Source: `PointOak_Website_Master_Developer_Handoff_FINAL_2026-10-04.docx` + `PointOak_SEO_Implementation_Map_FINAL_2026-10-04.xlsx` (Darsh email 10-04 in Hannah's "Updates" thread; not in Drive). Supersedes the 10-01 master copy.
- All 44 units built: 38 core pages + 6 Insights at /insights/<slug>/ (collection stays /resources/). Copy check: 4072/4072 doc lines on the pages.
- Regenerate: `python3 scripts/import-copy.py <handoff.docx> <map.xlsx>` (old build-hubs.py removed; no hand-built pages now).
- Open release items from the workbook's Publication Checks: PC01 RMD age (IN04) + PC02 Reg BI (C03, IN06) sign-off; PC04 affiliations/BBB; PC05 Calendly URL (CTAs still open the form modal); PC07 real article author/date; PC08 professional review; PC09 utility pages (privacy, terms, ADV/CRS, logins).

## 2026-10-06 — Qualifying consultation form (as sent to Darsh 10-05)
- Rules + options: `lib/leadRouting.ts` (one place). Form: `components/ConsultationForm.tsx` (Contact page + every "Schedule" pop-up). API: `app/api/contact/route.ts` decides the route server-side, saves answers + route to Supabase `form_submissions.metadata`, emails NOTIFY_EMAIL with a "Calendar lead"/"Inbox lead" subject. Admin inbox shows the answers.
- Routing: personal $500K+ -> advisor calendar; $250–500K -> team calendar; under $250K, not-offered services, "something else", business owners (until Darsh says where), throwaway/test emails -> inbox; participants -> participant calendar. Honeypot submissions are dropped.
- Calendly links: set Vercel env NEXT_PUBLIC_CALENDLY_ADVISOR / _TEAM / _PARTICIPANT, then restage (they are build-time). Until set, a "Calendar goes here" box shows. Tested end to end locally with a dummy link (prefills name/email).
- Still open with Darsh: thresholds, services-not-offered list, the 3 links, business routing, inbox recipient, email-list consent text.

## 2026-10-08 — Form revised per Darsh's 10-07 reply
- 4 need options (tax/insurance/budgeting removed). Personal: new asset question + 6 ranges; $500K+ -> Darsh, $250K–$499,999 -> Taylor (TEAM link), under $250K -> inbox. Timing adds 6–12 months.
- Business: adds required "Approximate plan assets" (PLAN_ASSET_OPTIONS — TKX-proposed ranges, pending Darsh's OK) and now routes to Darsh's calendar.
- Participants: no details step and no phone/message — name + email, then straight to the participant Calendly (it asks employer, reason, phone, and sends reminders).
- Calendly prefill: name/email always. To prefill an event's custom questions, fill `CALENDLY_ANSWER_MAP` in lib/leadRouting.ts (a1, a2… = question order on that event) once Darsh sends each event's questions. Calendly's SMS-reminder phone can't be prefilled.

## 2026-10-19 — Client Center + Terms of Use (Darsh's 10-19 reply)
- `/client-center/`: app/client-center/page.tsx + components/client-center/ClientCenterTiles.tsx. Schwab + RightCapital logins open Darsh's "You're leaving pointoak.com" notice (his text) with Continue/Cancel; the SharePoint upload link opens directly (PointOak's own). Plan Sponsor Portal tile shows "Coming soon": set PLAN_SPONSOR_PORTAL_URL to make it live, or SHOW_PLAN_SPONSOR_TILE=false to hide it.
- Header: desktop utility bar (32px, top right) holds the Client Center link, so every hero's top padding is now `pt-[78px] xl:pt-[110px]` (resources: `h-[78px] xl:h-[110px]`). Mobile: in the hamburger menu. Footer: Client Center in the bottom bar.
- `/terms-of-use/`: Darsh's docx word for word ("final pending one last review"). Footer link sits next to the Privacy Statement link (relabeled from "Privacy Policy" to match his document). Disclosure links are root-relative, so they point to www.pointoak.com at launch. Section 14's Website Privacy Policy has no link yet (his doc: page in progress).
- Both pages added to app/sitemap.ts (they have no content JSON).
- Darsh 10-21 (staged): inbox leads -> marketing@pointoak.com (INBOX_NOTIFY_EMAIL, default in app/api/contact/route.ts; calendar leads still NOTIFY_EMAIL). BBB Dynamic Seal + his rating line under it in the credentials block (HexSeals in components/page/Diagrams.tsx; the BBB list item renders as the seal; the "covering the period" blank dropped because the seal shows the date). /website-privacy-policy/ = his docx verbatim, linked from Terms Section 14 + footer + sitemap. No "Last updated" line on either page (his call).
- Still open: Section 5 of the Website Privacy Policy still shows his bracketed drafting notes until he sends final wording (must not go live like that); team contacts for the Client Center.

## 2026-10-26 — Git push (the 403 fix)
Plain `git push` 403s because the credential store answers as TKXMediaTools, which has no access to stephen588/pointoak. Push with the stephen588 account that `gh` is logged into:
```
git -c credential.helper= -c credential.helper='!f(){ echo username=stephen588; echo "password=$(gh auth token -u stephen588)"; }; f' push origin preview
```
Pushing still deploys nothing (webhook dead); deploys stay `./stage.sh` / `./golive.sh`.
