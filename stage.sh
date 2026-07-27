#!/bin/bash
# Deploy current tree to the client staging URL: https://pointoak-staging.vercel.app
set -e
cd "$(dirname "$0")"
export $(grep -h '^VERCEL_TOKEN=' /opt/report-dashboard/.env.keys)
TEAM=team_0pSKaj9PcanYDS9jdaP04tYG
URL=$(vercel deploy --token "$VERCEL_TOKEN" --yes 2>&1 | grep -oE 'https://pointoak-[a-z0-9]+-tkx-media\.vercel\.app' | tail -1)
[ -n "$URL" ] || { echo "deploy failed"; exit 1; }
DPL=$(curl -s "https://api.vercel.com/v13/deployments/${URL#https://}?teamId=$TEAM" -H "Authorization: Bearer $VERCEL_TOKEN" | python3 -c "import json,sys; print(json.load(sys.stdin)['id'])")
curl -s -X POST "https://api.vercel.com/v2/deployments/$DPL/aliases?teamId=$TEAM" \
  -H "Authorization: Bearer $VERCEL_TOKEN" -H "Content-Type: application/json" \
  -d '{"alias":"pointoak-staging.vercel.app"}' >/dev/null
echo "staging updated: https://pointoak-staging.vercel.app ($URL)"
