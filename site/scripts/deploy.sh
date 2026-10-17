#!/usr/bin/env bash
# Deploy guard: never ship a dist without the pagefind search index again.
# Context: 2026-10-15 the local pagefind postbuild was OOM-killed, the build
# exited 1, and three manual "wrangler pages deploy" runs shipped a site with
# a 404 on /pagefind/pagefind.js — search was dead on prod for hours.
# Also: wrangler resolves the Pages Functions dir as path.join(cwd, "functions"),
# so we run from the REPO ROOT — from site/ it would strip /api/* from prod
# (exactly what the first CI deploy did on 2026-10-16).
set -euo pipefail
cd "$(dirname "$0")/../.."   # repo root

if [ ! -f site/dist/pagefind/pagefind.js ]; then
  echo "✖ site/dist/pagefind/pagefind.js отсутствует — индекс поиска не собран."
  echo "  Деплой отменён. Пересобери: npm run build (следи за exit-кодом!)"
  echo "  Если pagefind падает по памяти локально — деплой из CI (deploy.yml) соберёт индекс на раннере."
  exit 1
fi

echo "✓ pagefind-индекс на месте ($(du -sh site/dist/pagefind | cut -f1))"
echo "✓ Pages Functions: $(ls site/../functions/api/*.js 2>/dev/null | wc -l) endpoint'а уйдут из ./functions"
exec site/node_modules/.bin/wrangler pages deploy site/dist --project-name=lastasylum --branch=main "$@"
