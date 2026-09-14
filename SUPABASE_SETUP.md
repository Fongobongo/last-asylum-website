# 🗄️ Инструкция по подключению базы данных Supabase (Вариант 2)

Данная интеграция позволяет публиковать и редактировать статьи прямо через браузерную веб-админку (или в интерфейсе Supabase), не трогая файлы сайта и Git-репозиторий. Сайт остаётся статическим, сверхбыстрым и бесплатным на Netlify.

---

## Шаг 1. Создание бесплатного проекта в Supabase

1. Перейдите на [supabase.com](https://supabase.com) и войдите через GitHub или создайте аккаунт.
2. Нажмите **New project** (Новый проект).
3. Укажите:
   * **Name:** `last-asylum-hub` (любое имя);
   * **Database Password:** сохраните надёжный пароль;
   * **Region:** выберите ближайший регион (например, `Central Europe (Frankfurt)`).
4. Подождите 1–2 минуты, пока база инициализируется.

---

## Шаг 2. Создание таблицы статей (1 клик)

1. В левом меню Supabase откройте **SQL Editor** (иконка `>_`).
2. Нажмите **New query** (или откройте пустой редактор).
3. Скопируйте всё содержимое файла [`supabase-schema.sql`](./supabase-schema.sql) и вставьте в окно SQL Editor.
4. Нажмите **Run** (зелёная кнопка внизу справа).
5. Таблица `articles` со всеми индексами и правами доступа создана!

---

## Шаг 3. Первичный экспорт всех текущих статей в Supabase

Чтобы перенести все 30+ существующих статей с сайта в новую базу:

1. В Supabase перейдите в **Project Settings** (шестерёнка слева внизу) $\rightarrow$ **API**.
2. Скопируйте:
   * **Project URL** (`https://xxxxxxxxxxxx.supabase.co`)
   * **service_role secret** (нажмите *Reveal secret* и скопируйте ключ).
3. В терминале выполните команду импорта:
   ```bash
   SUPABASE_URL="https://xxxxxxxxxxxx.supabase.co" \
   SUPABASE_SERVICE_ROLE_KEY="ваш_service_role_ключ" \
   npm run db:seed --prefix site
   ```
4. Скрипт автоматически загрузит все статьи на всех языках в таблицу `articles` в Supabase!

---

## Шаг 4. Настройка переменных в Netlify (для автосборки)

Чтобы Netlify при сборке автоматически затягивал новые статьи из базы:

1. Откройте панель управления [app.netlify.com](https://app.netlify.com) $\rightarrow$ ваш сайт.
2. Перейдите в **Site configuration** $\rightarrow$ **Environment variables**.
3. Добавьте две переменные:
   * `SUPABASE_URL` = `https://xxxxxxxxxxxx.supabase.co`
   * `SUPABASE_ANON_KEY` = `ваш_anon_публичный_ключ` (из Project Settings $\rightarrow$ API)

---

## Шаг 5. Настройка вебхука на пересборку (Webhook)

Чтобы при добавлении новой статьи сайт **сам пересобирался на Netlify без вашего участия**:

1. В Netlify: **Site configuration** $\rightarrow$ **Build & deploy** $\rightarrow$ **Build hooks**.
2. Нажмите **Add build hook**:
   * Название: `Supabase Article Publish`
   * Ветка: `main`
3. Скопируйте сгенерированный URL вида:
   `https://api.netlify.com/build_hooks/650000000000000000000000`
4. В Supabase:
   * Откройте меню **Database** $\rightarrow$ **Webhooks**.
   * Нажмите **Create a new hook**:
     * Name: `netlify-build-trigger`
     * Table: `articles`
     * Events: отметьте `Insert`, `Update`, `Delete`
     * Type: `HTTP Request`
     * Method: `POST`
     * URL: вставьте скопированный Netlify Build Hook URL.
5. Нажмите **Create webhook**.

---

## Готово! Как теперь добавлять статьи:

У вас есть два удобных способа:

### Способ А: Через встроенную админку сайта (`/admin/articles/`)
1. Откройте на сайте страницу `/admin/articles/`.
2. Нажмите **Настройки API** и укажите ваш Supabase URL и Ключ (сохраняются локально в браузере).
3. Нажмите **➕ Новая статья**, заполните заголовок, slug и текст на Markdown $\rightarrow$ **Сохранить в базу**.
4. Сработает вебхук и через 30 секунд статья появится на живом сайте!

### Способ Б: Напрямую через Table Editor в Supabase
1. Зайдите на [supabase.com/dashboard](https://supabase.com/dashboard) с любого устройства (даже со смартфона).
2. Откройте таблицу `articles` (интерфейс выглядит как Google Таблицы / Notion).
3. Добавьте строку или отредактируйте текст любой статьи.
4. Вебхук моментально отправит команду на публикацию!
