# Admin panel & editors guide

## Как это устроено

- **Админка**: `/admin/` — Sveltia CMS (открывается в браузере, работает поверх GitHub через OAuth)
- **Контент**: гайды лежат в `site/content/guides/{lang}/*.md` — редактируются через админку с превью или прямо на GitHub
- **Публикация**: editorial workflow — все правки идут через Pull Request; владелец мержит
- **Лимит правок**: не более **5 мержей в день** на автора (GitHub Actions `limit-edits.yml`); превышение = автокомментарий в PR + блокировка мержа

## Как создать редактора

1. **Пользователь**: редактор создаёт GitHub-аккаунт и говорит тебе свой username
2. **Доступ**: в настройках репозитория → *Collaborators* → *Add people* → вводишь username → роль **Write**
3. Редактор открывает `https://lastasylum.pages.dev/admin/`, логинится через GitHub (OAuth), видит все коллекции: Guides (EN/RU), Events (EN/RU)
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

**Вариант A — свой прокси (прокси уже развёрнут 2026-10-16):**
1. ✅ Прокси развёрнут: `https://sveltia-cms-auth.tofong.workers.dev` (worker `sveltia-cms-auth` в CF-аккаунте, `base_url` уже вписан в `config.yml`, `ALLOWED_DOMAINS` настроен)
2. GitHub → Settings → Developer settings → OAuth Apps → New OAuth App: Homepage `https://lastasylum.pages.dev`, Authorization callback URL `https://sveltia-cms-auth.tofong.workers.dev/callback`
3. Полученные Client ID и Client Secret загрузи в worker:
   ```
   npx wrangler secret put GITHUB_CLIENT_ID --name sveltia-cms-auth
   npx wrangler secret put GITHUB_CLIENT_SECRET --name sveltia-cms-auth
   ```

**Вариант B — без OAuth (локально):** запусти `npx @sveltia/cms`... или просто правь markdown в репо — структура предельно простая.


| Коллекция | Путь | Что редактирует |
|---|---|---|
| Guides (EN) | `site/content/guides/en/` | 11 гайдов + новые |
| Guides (RU) | `site/content/guides/ru/` | русские версии |
| Event guides (EN/RU) | `.../events/` | 12 ивентов × 2 |

Frontmatter каждого гайда: `title`, `description`, `lang`, `updated`, `videoTopic` (выбор из списка), `calculators`, `infographics`, `noindex`. Тело — markdown; заголовки с якорями: `## Заголовок {#anchor-id}`.