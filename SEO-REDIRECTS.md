# PointOak SEO Redirect Map

## Old URL → New URL (301 Permanent)

| Old Path | New Path | Type |
|----------|----------|------|
| `/fiduciary-support` | `/our-services` | 301 |
| `/investment-analysis` | `/our-services` | 301 |
| `/education-and-communications-program` | `/our-services` | 301 |
| `/education-and-communication` | `/our-services` | 301 |
| `/plan-design` | `/our-services` | 301 |
| `/provider-and-fee-benchmarking` | `/our-services` | 301 |
| `/target-date-fund-tdf-consulting` | `/our-services` | 301 |
| `/services` | `/our-services` | 301 |
| `/fiduciary-briefcase-login-pointoak-retirement-advisors` | External: emaplan.com login | 301 |
| `/privacy` | `/` (temporary) | 302 |

## Pages That Map Directly (no redirect needed)
| Old Path | New Path |
|----------|----------|
| `/` | `/` |
| `/about` | `/about` |
| `/our-services` | `/our-services` |
| `/contact` | `/contact` |

## Notes
- All old individual service pages consolidate to `/our-services`
- Privacy page needs to be built eventually (temporary redirect to homepage)
- Login redirects to the external emaplan.com portal
- Both with and without trailing slashes are handled
- Configured in `next.config.js` via Next.js `redirects()`
