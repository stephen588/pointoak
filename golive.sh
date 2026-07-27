#!/bin/bash
# PRODUCTION deploy to www.pointoak.com — run ONLY after client/Adam approval of staging.
set -e
cd "$(dirname "$0")"
export $(grep -h '^VERCEL_TOKEN=' /opt/report-dashboard/.env.keys)
vercel deploy --prod --token "$VERCEL_TOKEN" --yes
echo "LIVE: https://www.pointoak.com"
