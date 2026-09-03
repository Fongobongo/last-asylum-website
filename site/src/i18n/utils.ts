export const languages = ['en', 'ru', 'es', 'pt', 'fr', 'de', 'id', 'ko', 'ja'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

export function getLang(pathname: string): Lang {
  const first = pathname.split('/').filter(Boolean)[0];
  return (languages as readonly string[]).includes(first) ? (first as Lang) : defaultLang;
}

export function localizedPath(lang: Lang, path: string): string {
  const clean = path.replace(/^\//, '').replace(/\/$/, '');
  if (!clean) return lang === defaultLang ? '/' : `/${lang}/`;
  return lang === defaultLang ? `/${clean}/` : `/${lang}/${clean}/`;
}

export const langNames: Record<Lang, string> = {
  en: 'English',
  ru: 'Русский',
  es: 'Español',
  pt: 'Português',
  fr: 'Français',
  de: 'Deutsch',
  id: 'Indonesia',
  ko: '한국어',
  ja: '日本語',
};