import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { LanguageToggle } from '@/components/LanguageToggle'
import { useLanguage } from '@/lib/language'

const navigation = {
  fr: ['Accueil', 'Organisation', 'DCPA', 'Réglementation cinéma'],
  en: ['Home', 'Organisation', 'DCPA', 'Cinema regulation'],
} as const

const routes = ['/', '/organisation', '/directions/cinematographie-productions-audiovisuelles', '/reglementation-cinematographique'] as const

export function InstitutionalHeader() {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()
  const labels = navigation[language]

  return (
    <header className="institutional-header">
      <div className="institutional-flag" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="institutional-header-inner">
        <Link to="/" className="institutional-brand" aria-label={language === 'fr' ? 'Accueil du MINAC' : 'MINAC home'}>
          <span className="institutional-brand-mark">
            <img src="/minac-logo.png" alt="" />
          </span>
          <span>
            <strong>{language === 'fr' ? 'Ministère des Arts et de la Culture' : 'Ministry of Arts and Culture'}</strong>
            <small>{language === 'fr' ? 'République du Cameroun' : 'Republic of Cameroon'}</small>
          </span>
        </Link>

        <nav className="institutional-nav" aria-label={language === 'fr' ? 'Navigation principale' : 'Main navigation'}>
          {routes.map((to, index) => (
            <Link key={to} to={to} activeProps={{ className: 'active' }}>
              {labels[index]}
            </Link>
          ))}
        </nav>

        <LanguageToggle className="institutional-language-toggle" />

        <button
          type="button"
          className="institutional-menu-button"
          aria-label={open ? (language === 'fr' ? 'Fermer le menu' : 'Close menu') : (language === 'fr' ? 'Ouvrir le menu' : 'Open menu')}
          aria-expanded={open}
          onClick={() => setOpen(value => !value)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {open && (
        <nav className="institutional-mobile-nav" aria-label={language === 'fr' ? 'Navigation mobile' : 'Mobile navigation'}>
          {routes.map((to, index) => (
            <Link key={to} to={to} onClick={() => setOpen(false)}>
              {labels[index]}
            </Link>
          ))}
          <LanguageToggle className="institutional-mobile-language-toggle" />
        </nav>
      )}
    </header>
  )
}
