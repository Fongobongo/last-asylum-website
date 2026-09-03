# Last Asylum: Plague — Fan Hub

Мультиязычный фан-сайт по игре Last Asylum: Plague: гайды, события, промокоды, патчноуты, калькуляторы. Контент собран из официального Discord-сервера (528 гайдов из `#official-guide` и `#player-guide`), фансайта thelaphub.com и видео сообщества.

## Стек

- **Astro 5** — статическая генерация, zero-JS по умолчанию
- **Tailwind CSS 4** — кастомная «plague»-тема
- **Pagefind** — статический поиск по сайту (2+ языка, ~6000 слов)
- **TypeScript** — строгая типизация

## Языки (9)

`/` EN (дефолт) · `/ru/` · `/es/` · `/pt/` · `/fr/` · `/de/` · `/id/` · `/ko/` · `/ja/`

Переключение — дропдаун 🌐 в хедере. Каждая страница снабжена `hreflang`-альтернативами и canonical.

## Структура

```
site/
├── public/               # og-cover, иконки PWA, manifest, favicon
├── src/
│   ├── components/       # Header (поиск+языки), Footer, GuidePage (TOC),
│   │                     # VideoSection (youtube-фасады), GiftCodes (copy-to-clipboard),
│   │                     # PatchNotes, PlunderCalculator
│   ├── data/             # videos.ts, giftcodes.ts, patchnotes.ts
│   ├── i18n/             # 9-язычный словарь UI
│   ├── pages/            # EN в корне, 8 переводов в /<lang>/
│   │   ├── beginners | buildings | heroes | economy | raven | era
│   │   ├── codes | patch-notes | credits | support
│   │   └── events/       # 12 событий + hub
│   └── styles/global.css
└── dist/                 # билд: 217 страниц + pagefind-индекс
```

## Команды

```bash
cd site
npm install
npm run dev        # http://localhost:4321
npm run build      # билд + pagefind-индекс (postbuild)
npm run preview    # превью
node serve.cjs     # простой статический сервер для проверки dist/
```

## Особенности

- **Поиск**: `/`-хоткей или кнопка 🔍 — модалка на Pagefind, работает без бэкенда
- **Видео**: ленивые фасады YouTube (nocookie) — клик подгружает плеер, превью с бейджем EN для неангл. страниц
- **Калькуляторы**: лимит грабежа (economy), очки Фазы 4 Дуэли (heroes), шарды Claire UR (era), бюджет колеса Cynthia (beginners)
- **Кодекс героев**: `/codex/` — 28 героев с навыками и билдами, динамические роуты на 9 языках
- **Тир-лист**: `/tier-list/` — S/A/B/C с контекстом
- **Календарь**: `/calendar/` — недельный ритм, очковые дни, сбросы
- **Снаряжение**: `/gear/` — крафт UR, промоушен, слоты, гир против боссов
- **FAQ**: `/faq/` — 12 вопросов на каждом языке, FAQPage schema для rich snippets
- **Сравнения**: `/compare/` — Marlena vs Zoya, Annie vs Joker, тайминг Claire
- **Статус серверов**: `/status/` — баги/фиксы/скам-алерты из официального канала
- **Инфографики**: 18 WebP-гайдов сообщества (оптимизированы, −83% веса)
- **Промокоды**: copy-to-clipboard, свежие/архивные, официальная страница активации
- **RSS**: `/feed.xml` — коды + обновления
- **SEO**: OG-теги, hreflang, JSON-LD (WebSite + FAQPage), sitemap с lastmod, robots.txt
- **PWA**: manifest + маскируемые иконки
- **Мобильный TOC** + breadcrumbs
- **Feedback-виджет**: «Помог ли гайд?» с Umami-событиями — на каждой гайд-странице
- **Комментарии**: Giscus (GitHub Discussions) — заполни константы в `src/components/Comments.astro` после публикации репо
- **Discord-баннер**: официальное сообщество на страницах гайдов
- **Аналитика**: опционально Umami (`PUBLIC_UMAMI_ID` и `PUBLIC_UMAMI_SRC` env)

## Автообновление данных

`.github/workflows/auto-update.yml` — ежедневно в 06:00 UTC:
1. `parse_channel.py` скрапит каналы Discord (`DISCORD_TOKEN` в секретах)
2. `update_data.py` регенерирует `giftcodes.ts` и `patchnotes.ts` (коды активны 45 дней)
3. Сборка + авто-коммит + деплой через `deploy.yml`
4. `announce_codes.py` — при появлении новых кодов постит в Telegram-канал (`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` в секретах; опционально)

Ручное обновление: `python parse_channel.py && python update_data.py` в корне.

## Админка и редакторы

Подробно — `site/README-ADMIN.md`. Кратко:
- `/admin/` — Sveltia CMS (GitHub OAuth), контент в `content/guides/**/*.md`, публикация через PR (editorial workflow)
- **Создать редактора**: Collaborators → Add people → роль Write; лимит правок — 5 мержей/день на автора (`limit-edits.yml`)
- **DND-раздел** `/dnd/`: зашифрован AES-256-GCM, ключ — секрет `DND_SECRET`, не индексируется и отсутствует в sitemap

## Донат-раздел (`/support/`)

Заглушки в `site/src/pages/support.astro` и `site/src/pages/ru/support.astro` (и аналоги для 7 языков):
- `REF_LINK = '#'` — реф-ссылка на магазин пополнений
- `DONATE_LINK = '#'` — донат автору

Найди и замени `'#'` на реальные URL во всех 9 файлах `support.astro`.

## Деплой

- **GitHub Actions** (`.github/workflows/deploy.yml`): build + Netlify. Добавь секреты `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`, `SITE_URL`
- **Netlify вручную**: `netlify.toml` настроен (base=site, publish=site/dist, редирект `/en/*` → `/*`)

## Обновление данных

- **Промокоды**: `site/src/data/giftcodes.ts` (данные из парсера `dump_codes.py` по каналу `#giftcode`)
- **Патчи**: `site/src/data/patchnotes.ts` (из `#patch-notes`)
- Ре-ран парсера Discord: `python parse_channel.py` в корне репозитория (токен в `.env`)

## Дисклеймер

Неофициальный фан-сайт. Не связан с разработчиками Last Asylum: Plague. Все гайды принадлежат их авторам (см. `/credits/`).