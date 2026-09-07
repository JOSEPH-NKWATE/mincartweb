import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { label: 'Accueil', to: '/' as const },
  { label: 'Organisation', to: '/organisation' as const },
  { label: 'DCPA', to: '/directions/cinematographie-productions-audiovisuelles' as const },
  { label: 'Réglementation cinéma', to: '/reglementation-cinematographique' as const },
]

export function InstitutionalHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="institutional-header">
      <div className="institutional-flag" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="institutional-header-inner">
        <Link to="/" className="institutional-brand" aria-label="Accueil du MINAC">
          <span className="institutional-brand-mark">
            <img src="/minac-logo.png" alt="" />
          </span>
          <span>
            <strong>Ministère des Arts et de la Culture</strong>
            <small>République du Cameroun</small>
          </span>
        </Link>

        <nav className="institutional-nav" aria-label="Navigation principale">
          {navigation.map(item => (
            <Link key={item.to} to={item.to} activeProps={{ className: 'active' }}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="institutional-menu-button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen(value => !value)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {open && (
        <nav className="institutional-mobile-nav" aria-label="Navigation mobile">
          {navigation.map(item => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

