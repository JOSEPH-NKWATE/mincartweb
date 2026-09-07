import { useLanguage } from '@/lib/language'

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { language, setLanguage } = useLanguage()
  const label = language === 'fr' ? 'Choisir la langue' : 'Choose language'

  return (
    <div className={`site-language-toggle ${className}`.trim()} role="group" aria-label={label}>
      <button type="button" className={language === 'fr' ? 'active' : ''} onClick={() => setLanguage('fr')} aria-pressed={language === 'fr'}>FR</button>
      <button type="button" className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
    </div>
  )
}
