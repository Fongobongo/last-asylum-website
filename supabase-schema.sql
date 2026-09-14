-- ==============================================================================
-- Last Asylum: Plague Hub — Supabase Database Schema
-- Run this script in the Supabase SQL Editor (https://supabase.com/dashboard)
-- ==============================================================================

-- 1. Create articles table
CREATE TABLE IF NOT EXISTS public.articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL,
    lang TEXT NOT NULL DEFAULT 'ru',
    title TEXT NOT NULL,
    description TEXT DEFAULT '',
    content TEXT NOT NULL,
    type TEXT NOT NULL DEFAULT 'guide', -- 'guide' or 'event'
    video_topic TEXT,
    updated_at DATE DEFAULT CURRENT_DATE,
    published BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT unique_lang_slug UNIQUE (lang, slug)
);

-- 2. Indexes for fast querying by language, slug and status
CREATE INDEX IF NOT EXISTS idx_articles_lang_slug ON public.articles (lang, slug);
CREATE INDEX IF NOT EXISTS idx_articles_published ON public.articles (published);
CREATE INDEX IF NOT EXISTS idx_articles_updated_at ON public.articles (updated_at DESC);

-- 3. Row Level Security (RLS) policies
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Allow anyone (including anonymous site visitors / build scripts) to read published articles
CREATE POLICY "Allow public read published articles"
    ON public.articles
    FOR SELECT
    USING (published = true);

-- Allow authenticated users / service role to perform all actions
CREATE POLICY "Allow service role full access"
    ON public.articles
    FOR ALL
    USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

-- 4. Comment on table and columns
COMMENT ON TABLE public.articles IS 'Knowledge base articles and event guides for Last Asylum: Plague';
COMMENT ON COLUMN public.articles.slug IS 'URL slug (e.g. "beginners", "supreme-duel", "tier-list")';
COMMENT ON COLUMN public.articles.lang IS 'Language code (e.g. "ru", "en", "es", "de", "fr", "pt", "id", "ko", "ja")';
COMMENT ON COLUMN public.articles.type IS 'Category: "guide" (default) or "event" (for event guides)';
COMMENT ON COLUMN public.articles.video_topic IS 'Optional YouTube video topic ID (e.g. "arena", "alliance_duel", "beginner")';
