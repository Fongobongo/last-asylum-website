#!/usr/bin/env bash
# Deploy guard: never ship a dist without the pagefind search index again.
# Context: 2026-10-15 the local pagefind postbuild was OOM-killed, the build
# exited 1, and three manual "wrangler pages deploy" runs shipped a site with
# a 404 on /pagefind/pagefind.js — search was dead on prod for hours.
set -euo pipefail
cd "$(dirname "$0")/.."

if [ ! -f dist/pagefind/pagefind.js ]; then
  echo "✖ dist/pagefind/pagefind.js отсутствует — индекс поиска не собран."
  echo "  Деплой отменён. Пересобери: npm run build (следи за exit-кодом!)"
  echo "  Если pagefind падает по памяти локально — деплой из CI (deploy.yml) соберёт индекс на раннере."
  exit 1
fi

echo "✓ pagefind-индекс на месте ($(du -sh dist/pagefind | cut -f1))"
exec npx wrangler pages deploy dist --project-name=lastasylum --branch=main "$@"
