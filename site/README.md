# Last Asylum: Plague — Fan Hub

Мультиязычный фан-сайт по игре Last Asylum: Plague: гайды, события, промокоды, патчноуты, калькуляторы. Контент собран из официального Discord-сервера (гайды из `#official-guide` и `#player-guide`), фансайта thelaphub.com и видео сообщества.

## Стек

- **Astro 5** — статическая генерация, zero-JS по умолчанию
- **Tailwind CSS 4** — кастомная «plague»-тема
- **Pagefind** — статический поиск по сайту (19 языков, ~292 тыс. слов)
- **Cloudflare Pages** — хостинг + Pages Functions (голосование, заявки на коды) + D1
- **TypeScript** — строгая типизация

## Языки (19)

`/` EN (дефолт) · `/ru/` · `/es/` · `/pt/` · `/fr/` · `/de/` · `/id/` · `/ko/` · `/ja/` · `/ar/` · `/it/` · `/ms/` · `/nl/` · `/th/` · `/tr/` · `/vi/` · `/zh/` · `/pl/` · `/zh-tw/`

Переключение — дропдаун 🌐 в хедере. Каждая страница снабжена `hreflang`-альтернативами и canonical.

## Структура

```
site/
├── public/               # og-cover, иконки PWA, manifest, favicon,
│                         # _redirects (Cloudflare), инфографики, hero-art
├── src/
│   ├── components/       # Header (поиск+языки), Footer, GuidePage (TOC),
│   │                     # VideoSection (youtube-фасады), GiftCodes (copy-to-clipboard),
│   │                     # PatchNotes, CodexGrid, калькуляторы
│   ├── data/             # videos.ts, giftcodes.ts, patchnotes.ts, heroCodex.ts, official*.json
│   ├── i18n/             # 19-язычный словарь UI
│   ├── pages/            # EN в корне, 18 переводов в /<lang>/
│   │   ├── beginners | buildings | heroes | economy | raven | era
│   │   ├── codes | patch-notes | credits | support | shop | atlas
│   │   └── events/       # 24 события + hub
│   └── styles/global.css
└── dist/                 # билд: ~4275 страниц + pagefind-индекс
```

Контент гайдов — `site/content/guides/<lang>/*.md` (по 191 файлу на локаль).

## Команды

```bash
cd site
npm install
npm run dev        # http://localhost:4321
npm run build      # билд + pagefind-индекс (postbuild)
npm run build:local # то же, но с обходом шима безопасных удалений (песочница WorkBuddy)
npm run check:links # проверка внутренних ссылок и локальных ассетов в dist/
npm run preview    # превью
node serve.cjs     # простой статический сервер для проверки dist/
npm run deploy     # деплой в Cloudflare Pages (требует wrangler + токен)
```

## Особенности

- **Поиск**: `/`-хоткей или кнопка 🔍 — модалка на Pagefind, работает без бэкенда
- **Видео**: ленивые фасады YouTube (nocookie) — клик подгружает плеер, превью с бейджем EN для неангл. страниц
- **Калькуляторы**: лимит грабежа (economy), очки Фазы 4 Дуэли (heroes), шарды Claire UR (era), бюджет колеса Cynthia (beginners)
- **Кодекс героев**: `/codex/` — 32 героя с навыками и билдами, страницы на 19 языках
- **Тир-лист**: `/tier-list/` — S/A/B/C с контекстом
- **Календарь**: `/calendar/` — недельный ритм, очковые дни, сбросы
- **Снаряжение**: `/gear/` — крафт UR, промоушен, слоты, гир против боссов
- **FAQ**: секция на странице `/tips/` всех языков, FAQPage schema для rich snippets
- **Сравнения**: `/compare/` — Marlena vs Zoya, Annie vs Joker, тайминг Claire
- **Статус серверов**: `/status/` — баги/фиксы/скам-алерты из официального канала
- **Инфографики**: `/infographics/` — локализованные гайды сообщества (WebP/JPG, по языкам)
- **Промокоды**: copy-to-clipboard, голосование за коды игроков (Pages Function + D1), архив истёкших
- **RSS**: `/feed.xml` — коды + обновления
- **SEO**: OG-теги, hreflang, JSON-LD (WebSite + FAQPage), sitemap с lastmod, robots.txt
- **PWA**: manifest + маскируемые иконки, service worker (network-first для контента)
- **Мобильный TOC** + breadcrumbs
- **Feedback-виджет**: «Помог ли гайд?» с Umami-событиями — на каждой гайд-странице
- **Discord-баннер**: официальное сообщество на страницах гайдов
- **Аналитика**: опционально Umami (`PUBLIC_UMAMI_ID` и `PUBLIC_UMAMI_SRC` env)

## Автообновление данных

`.github/workflows/auto-update.yml` — ежедневно в 06:00 UTC:
1. `parse_channel.py` скрапит каналы Discord (`DISCORD_TOKEN` в секретах)
2. `update_data.py` регенерирует `patchnotes.ts`
3. Сборка, авто-коммит обновлённых данных и деплой в Cloudflare Pages

Ручное обновление: `python parse_channel.py && python update_data.py` в корне.

## Админка и редакторы

Подробно — `site/README-ADMIN.md`. Кратко:
- `/admin/` — Sveltia CMS (GitHub OAuth), контент в `content/guides/**/*.md`, публикация через PR (editorial workflow)
- CMS настроена на EN и RU; остальные 17 локалей правятся напрямую в markdown
- **Создать редактора**: Collaborators → Add people → роль Write; лимит правок — 5 мержей/день на автора (`limit-edits.yml`)

## Донат-раздел (`/support/`)

Заглушки в `site/src/pages/support.astro` и `site/src/pages/<lang>/support.astro` (19 локалей):
- `REF_LINK = '#'` — реф-ссылка на магазин пополнений
- `DONATE_LINK = '#'` — донат автору

Найди и замени `'#'` на реальные URL во всех 19 файлах `support.astro`.

## Деплой

- **Cloudflare Pages** через `.github/workflows/deploy.yml`: `npm ci` → `npm run build` → `check:links` → проверка `dist/pagefind/pagefind.js` → `wrangler pages deploy` из **корня репозитория** (иначе пропадают `/api/*` из `functions/`).
- Секреты: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `SITE_URL`.
- **Netlify** больше не хостит сайт: `netlify.toml` отдаёт 301 на `https://lastasylum.pages.dev`.
- Внутренние редиректы (`/atlas/` → `/guides/`, `/faq/` → `/tips/`, `/en/*`) — в `site/public/_redirects`.

## Обновление данных

- **Промокоды**: `site/src/data/giftcodes.ts` — обновляется вручную
- **Патчи**: `site/src/data/patchnotes.ts` (из `#patch-notes`)
- Ре-ран парсера Discord: `python parse_channel.py` в корне репозитория (токен в `.env`)

## Дисклеймер

Неофициальный фан-сайт. Не связан с разработчиками Last Asylum: Plague. Все гайды принадлежат их авторам (см. `/credits/`).
