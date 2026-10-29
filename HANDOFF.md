# PointOak — HANDOFF

Live site: https://www.pointoak.com (Vercel, team tkx-media, project `pointoak` prj_KpDD9GIYCMnOiu8bmyNhPpAYbvTt)
Staging: https://pointoak-staging.vercel.app (stable alias, publicly viewable, no deployment protection)

## Workflow (client change rounds)
1. Edit code in /opt/pointoak (branch `preview`).
2. `./stage.sh` → builds on Vercel, re-points pointoak-staging.vercel.app. Send URL to client.
3. Client approves → `./golive.sh` (PROD — Adam/client approval required first).
4. Commit + push `preview` after each round. **Since 10-28 a push to `preview` IS a production deploy** (GitHub → Vercel reconnected, production branch = `preview`). So push `preview` only with prod-ready, approved code; stage work on a side branch + `./stage.sh` first.

Token: sourced from `/opt/report-dashboard/.env.keys` (VERCEL_TOKEN). Git push auth: remote pinned to `stephen588@github.com` credential (store has a second x-access-token entry that 403s on this repo).

## Critical context (2026-07-27)
- **git `main` ≠ live prod.** main (Mar 25) contains ~15 extra pages (faq, who-we-serve, our-process, disclosures, privacy-policy, etc.) that are NOT live — they 404 on prod. Live prod = a trimmed 145-file CLI deploy from 2026-04-24 (dpl_Dm4abnop6rXFkpz3Gc7FrpfzxWZw), same day project `pointoak-prod-restore` was created → looks like an emergency restore/rollback. Do NOT deploy main to prod without checking whether those pages were rolled back on purpose.
- Branch `preview` = live prod source, downloaded from that deployment via Vercel API (v8 files endpoint) and committed at 0c6ba4d. This is the baseline for all client changes.
- GitHub→Vercel auto-deploy was dead 04-24 → 10-28 (all deploys CLI). Reconnected 10-28, see that entry.
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
Until 10-28 pushing deployed nothing; since 10-28 a push to `preview` deploys production (see below).
Rollback: production before 2026-10-26 launch = dpl_Dm4abnop6rXFkpz3Gc7FrpfzxWZw (2026-04-24 deploy)

## 2026-10-26 — SEO/AIO + agent-readiness fixes (LIVE 10-26 late, approved by Stephen)
- Prod = dpl_6Xwk4D7LQasABNxCMWPcXc1amJHt (commit afba618, also carries e4feac7 Gmail form notifications). Rollback = dpl_3V2ksac687paz9r5nTFZ9FKajd6a. isitagentready.com on www.pointoak.com: 43 → 86.
- Audit: /root/handoffs/pointoak-seo-aio-audit-2026-10-26/REPORT.md. isitagentready.com (Content Site): live 43 → staging 86; only DNS-AID fails (DNS records, not applicable).
- `lib/seo.ts`: one FinancialService entity (`/#organization`, sameAs LinkedIn/IAPD 314866/BBB), WebSite, Person for Darsh (IAPD 5043274), `social()` per-page OG/Twitter with the 1200x630 `/images/og-card.jpg` (the logo PNG is white-on-transparent). WebPage/ContactPage + breadcrumbs on the pages that had none.
- Removed the unapproved "Over 50 years of collective experience" homepage OG text; layout defaults now use the homepage meta from Darsh's map.
- Agents: `/llms.txt` (app/llms.txt/route.ts, built from page meta), `Accept: text/markdown` → middleware rewrite to `/md/...` (lib/markdown.ts, same words + footer disclosures; keep DISCLOSURES in step with Footer.tsx), Link header (llms.txt + sitemap), robots.txt Content-Signal `search=yes, ai-input=yes, ai-train=no` + named AI bots.
- Sitemap has no lastmod (it was build time). /news, /newsletter → /resources/.
- Held for Darsh: FAQPage markup and article author/dates (PC07 dropped them on purpose); ai-train=no is our default, his call.

## 2026-10-27 — Launched; form email fixed
- www.pointoak.com went live 10-26 from `preview` (e9c6fc6). pointoak.com → www redirect set in Vercel (Sherry).
- Form notifications were silently failing (Mailgun 535 on the old admin@webleadnotification.com login; every submission still saved to Supabase). Fixed 10-27: SMTP_USER / SMTP_FROM / SMTP_PASS in Vercel are now the `pointoak@webleadnotification.com` Mailgun SMTP credential. Both routes tested end to end to sherry@; test rows deleted.
- Notify routing in prod: calendar leads → NOTIFY_EMAIL (info@pointoak.com); inbox leads → INBOX_NOTIFY_EMAIL (unset, code default marketing@pointoak.com).
- Env changes need a redeploy (`./golive.sh`) to take effect. Runtime logs: `vercel logs https://www.pointoak.com --scope tkx-media --token "$(cat /root/.vercel-token)" --json --limit 1000`.
- GA4 Realtime CONFIRMED 10-27 (Stephen, phone visit showed in property 560555336 under analytics2@). analytics@ still has no access (needs Darsh, Admin, to add it as Viewer).
- Still open: Search Console verification (Darsh or DNS TXT at GoDaddy), then submit sitemap + Bing Webmaster Tools; official PageSpeed run; Google Business Profile link/NAP check.

## 2026-10-27 — Dev follow-ups (sent to the devs on Slack by Stephen)
1. ~~Reconnect GitHub → Vercel~~ DONE 10-28 (see entry below). Never deploy/merge `main` (stale).
2. ~~Next.js 14.2.35 → 15.5.28~~ LIVE 10-28 (ec33f88, dpl_EGRbkuLXkRo1ooR1mzACVFghEsdv) — see 10-28 entry.
3. Homepage mobile LCP ~3.6s (hero image, `hero-zoom` animation): LIVE 10-28 (merge bc592ad, dpl_33Mbnfb16wDrai7yrtNqCa6kWaNA) — see 10-28 entry.
4. Waiting on Darsh: FAQPage + Insights author/dates (PC07); 307 → 308 for /our-consulting-team, /insights, /privacy; GSC DNS TXT.
- Recheck rankings / AI citations / indexing ~2026-12-01 (cloud routine).

## 2026-10-28 — GitHub → Vercel reconnected (Faisal + Sherry)
- Vercel project `pointoak` is linked to GitHub `stephen588/pointoak` again (Sherry installed the Vercel GitHub App on stephen588; Vercel UI only showed faisal2002012's namespace, so faisal2002012 was added as a write collaborator on the repo but the install still had to come from stephen588).
- Production branch = `preview` (Settings → Environments → Production → Branch Tracking). NOTE: the reconnect reset it to `main` — it had to be set to `preview` a second time after the repo was linked. Check this after any future reconnect. The project API does not let you change it; UI only.
- Verified: empty commit 5683080 pushed to `preview` → Vercel production deployment from git (source `git`, target production, READY) → www.pointoak.com 200. **A push to `preview` is now a prod deploy.** `./golive.sh` still works for CLI deploys; `./stage.sh` still re-points the staging alias from the working tree.
- Rule from here: nothing lands on `preview` that isn't approved for prod. Build on a side branch, `./stage.sh`, get the OK, then merge/push.
- Hero mobile LCP (dev follow-up #3): branch `hero-mobile-lcp` (8a416ce). Phones get a 3:4 portrait crop (`public/images/home/hero-hexagon-aerial-mobile.jpg`, art-directed via `getImageProps` + `<picture>` in app/page.tsx) and the `hero-zoom` animation is desktop-only (`@media (min-width: 768px)` in app/globals.css). No copy touched. Local Lighthouse mobile: live LCP 5.3s / perf 66 → staging LCP 2.9s / perf 94 (staging has no GA4 tag, so the TBT part is overstated; the LCP gain is real). Merged to `preview` and LIVE 10-28 (merge bc592ad → dpl_33Mbnfb16wDrai7yrtNqCa6kWaNA, git-triggered; Faisal's call, Hannah had asked for exactly this in her 10-27 list). Rollback = dpl_8nAy2bRPDxKqEuG5DVAT5ZM8nDke (85d5072, same code as before the fix). If Hannah wants the mobile zoom back, drop the `@media (min-width: 768px)` wrapper in app/globals.css.
- Also added `.vercelignore` (`.claude`) on that branch so the stale Claude worktree stays out of CLI deploys.

## 2026-10-28 — Next.js 15.5.28 upgrade (LIVE, Faisal)
- next 14.2.35 → 15.5.28, react/react-dom 18 → 19, @types/react(-dom) 19, eslint-config-next 15.5.28, lucide-react 0.379 → 1.63 (needed for React 19 peer deps; icons unchanged, they now carry aria-hidden).
- Code changes: `next-async-request-api` codemod made `params` a Promise in app/[...slug]/page.tsx and app/md/[[...slug]]/route.ts (admin [id] route + lib/admin-auth.ts `await cookies()` already were). components/Footer.tsx: the three internal `<a>` links (Terms, Website Privacy Policy, Client Center) are `<Link>` now — Next 15's `no-html-link-for-pages` lint rule fails the Vercel build otherwise (passes locally, fails on Vercel). No copy, content JSON, CSS, middleware, robots or next.config touched, so no isitagentready re-run needed.
- Verified on staging then live: all 47 sitemap pages identical visible text / JSON-LD / meta to the Next 14 build; redirects, trailing slash, Accept: text/markdown rewrite, llms.txt, robots, sitemap, 404, X-Robots-Tag on *.vercel.app, Link header; /api/contact validation; admin login → submissions → settings → /admin → logout with the real password (env pulled to a scratch file, deleted after). Not exercised: a real form submission (would email the client). Phone/desktop screenshots clean, no hydration errors in the browser console.
- Known: Next 15 logs `Error: Internal: NoFallbackError` on unknown-URL 404s under `next start` locally (dynamicParams=false in app/[...slug]/page.tsx); on Vercel the 404 is served without that error, so left as is.
- Prod = dpl_EGRbkuLXkRo1ooR1mzACVFghEsdv (ec33f88). Rollback = dpl_GfVKFaxK8UaNBLV59nDpHsuBydpy (005ec66, last Next 14 build, hero fix included).
- Local `node_modules` is on Next 15 now; `npm ci` after checking out anything older.

## 2026-10-29 — Darsh's 10-29 answers (branch `darsh-1029`, STAGED, not live)
- Worktree: /opt/pointoak-worktrees/darsh-1029 (node_modules hardlinked with `cp -al`; never npm install there). Merge to `preview` = prod deploy, only after Darsh OKs the preview.
- Notifications (lib/notify.ts, server-only so the addresses stay out of client JS): advisor-calendar ($500K+ personal, business) → dmakim@pointoak.com (ADVISOR_NOTIFY_EMAIL), everything else → marketing@ (INBOX_NOTIFY_EMAIL). NOTIFY_EMAIL (= info@ in Vercel) is no longer read. Business → Darsh and participants → marketing@ are our defaults, asked him to confirm.
- info@ replaced by "Use our contact form" (/contact/) on home CTA cards, CTASection, footer contact column, Client Center; removed from Contact methods, Organization schema, llms.txt, markdown footer. KEPT (his legal wording, asked him): footer disclosure line (+ lib/markdown.ts DISCLOSURES), Terms of Use, Website Privacy Policy.
- FAQPage JSON-LD on all 32 pages with visible FAQs (lib/seo.ts faqPage). Insights: "By Darsh Makim, CRPC®" byline → /about/, BlogPosting author; NO dates (he wants dates only with a regular posting schedule).
- /our-consulting-team, /insights, /privacy → 308.
- Search Console: sc-domain:pointoak.com (Darsh, verified via GoDaddy), analytics2@ = siteFullUser. Sitemap submitted 10-29 via API (am-hub scripts/one-off/pointoak-gsc-sitemap-2026-10-29.mts). Bing import still to do (needs a Microsoft login).
- GA4: analytics@ can't be added (Google per-user account limit); analytics2@ is already Editor, nothing needed from Darsh.
- Darsh 10-29 18:02 reply (STAGED c47a716): business → him confirmed; participants keep the calendar for booking + form notice to marketing@ (as built). Removed from footer disclosures (+ lib/markdown.ts DISCLOSURES): the regulatory-contact line and the FinRA BrokerCheck line. Terms + Website Privacy Policy contact = phone + "Contact form" (/contact/), no info@. info@ is now nowhere on the site. Branch merged preview (b2941b2 footer credit, which is LIVE via CLI but NOT on origin/preview).
