# Admin panel & editors guide

## Как это устроено

- **Админка**: `/admin/` — Sveltia CMS (открывается в браузере, работает поверх GitHub через OAuth)
- **Контент**: гайды лежат в `site/content/guides/{lang}/*.md` — редактируются через админку с превью или прямо на GitHub
- **Публикация**: editorial workflow — все правки идут через Pull Request; владелец мержит
- **Лимит правок**: не более **5 мержей в день** на автора (GitHub Actions `limit-edits.yml`); превышение = автокомментарий в PR + блокировка мержа

## Как создать редактора

1. **Пользователь**: редактор создаёт GitHub-аккаунт и говорит тебе свой username
2. **Доступ**: в настройках репозитория → *Collaborators* → *Add people* → вводишь username → роль **Write**
3. Редактор открывает `https://last-asylum-hub.netlify.app/admin/`, логинится через GitHub (OAuth), видит все коллекции: Guides (EN/RU), Events (EN/RU), DND
4. Все его изменения идут ветками + PR — ты контролируешь каждый мерж

> Владелец (Owner) и админы не ограничены лимитом? Нет — лимит действует для всех авторов PR, кроме `auto-update-bot` и `github-actions`. Если нужно exempt-правило для себя, добавь свой логин в список исключений в `limit-edits.yml`.

## Лимит правок (5/день)

`limit-edits.yml` срабатывает на каждый PR:
- Считает **merged** PR автора за последние 24 часа (Search API GitHub)
- > 5 → ❌ красный статус + комментарий «⛔ Daily edit limit reached», мерж заблокирован
- ≤ 5 → ✅ комментарий «Edit limit OK: N/5 used»

Изменить лимит: переменная `MAX_EDITS_PER_DAY` в `.github/workflows/limit-edits.yml`.

## OAuth для входа в админку

Sveltia CMS нужна GitHub OAuth-прокси (не храним секреты на статике):

**Вариант A — свой прокси (бесплатно, 5 минут):**
1. GitHub → Settings → Developer settings → OAuth Apps → New: Homepage `https://last-asylum-hub.netlify.app`, callback `https://<твой-прокси>.vercel.app/callback`
2. Разверни `sveltia/sveltia-cms-auth` на Vercel/Cloudflare Workers одной кнопкой: https://github.com/sveltia/sveltia-cms-auth — вставь Client ID/Secret
3. В `site/public/admin/config.yml` добавь под `backend:` строку `base_url: https://<твой-прокси>.vercel.app`

**Вариант B — без OAuth (локально):** запусти `npx @sveltia/cms`... или просто правь markdown в репо — структура предельно простая.

## DND-раздел (секретный)

- URL: **`/dnd/`** — нигде не линкуется, `noindex`, в robots.txt `Disallow`, НЕ в sitemap
- Контент: `site/content/dnd/*.md` → при билде шифруется **AES-256-GCM** (PBKDF2 150k итераций) в `public/dnd/payload.enc`
- Посетитель вводит фразу на странице → расшифровка в браузере (WebCrypto), без фразы в билде только ciphertext
- Парольная фраза: секрет **`DND_SECRET`** (GitHub Actions env / локально перед `npm run build`). Поменяешь — обновится весь зашифрованный контент
- Редактирование: коллекция «DND» в админке или прямо md-файлы; фронтма́ттер `title`/`updated`
- CI: `prebuild` скрипт `scripts/encrypt-dnd.mjs` запускается автоматически при билде; без `DND_SECRET` страница честно покажет «payload missing» (безопасный дефолт)

## Структура коллекций админки

| Коллекция | Путь | Что редактирует |
|---|---|---|
| Guides (EN) | `site/content/guides/en/` | 11 гайдов + новые |
| Guides (RU) | `site/content/guides/ru/` | русские версии |
| Event guides (EN/RU) | `.../events/` | 12 ивентов × 2 |
| DND | `site/content/dnd/` | секретные записи альянса |

Frontmatter каждого гайда: `title`, `description`, `lang`, `updated`, `videoTopic` (выбор из списка), `calculators`, `infographics`, `noindex`. Тело — markdown; заголовки с якорями: `## Заголовок {#anchor-id}`.