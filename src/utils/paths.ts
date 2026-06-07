export function getBasePath(): string {
  const base = import.meta.env.BASE_URL;
  return base.endsWith('/') ? base : `${base}/`;
}

export function getLocalizedPath(lang: 'pl' | 'en'): string {
  const base = getBasePath();
  return lang === 'pl' ? base : `${base}en/`;
}

export function getAlternateLangPath(currentLang: 'pl' | 'en'): string {
  return getLocalizedPath(currentLang === 'pl' ? 'en' : 'pl');
}
