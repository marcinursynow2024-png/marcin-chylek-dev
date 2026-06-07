interface Props {
  currentLang: 'pl' | 'en';
}

export default function LangSwitch({ currentLang }: Props) {
  const otherPath = currentLang === 'pl' ? '/en/' : '/';

  return (
    <a href={otherPath} className="lang-switch" aria-label={currentLang === 'pl' ? 'Switch to English' : 'Przełącz na polski'}>
      {currentLang === 'pl' ? 'EN' : 'PL'}
    </a>
  );
}
