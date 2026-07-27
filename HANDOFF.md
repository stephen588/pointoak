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
