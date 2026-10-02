#!/bin/bash
# PRODUCTION deploy to www.pointoak.com — run ONLY after client/Adam approval of staging.
set -e
cd "$(dirname "$0")"
VERCEL_TOKEN=$(cat /root/.vercel-token)  # tkx-media team token; the report-dashboard one lost team access (10-02)
vercel deploy --prod --token "$VERCEL_TOKEN" --yes
echo "LIVE: https://www.pointoak.com"
