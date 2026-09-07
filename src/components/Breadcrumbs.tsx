import { Link } from '@tanstack/react-router'
import { ChevronRight, Home } from 'lucide-react'
import { useLanguage } from '@/lib/language'

type Breadcrumb =
  | { label: string; to: '/' | '/organisation' | '/directions/cinematographie-productions-audiovisuelles' }
  | { label: string; to?: never }

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  const { language } = useLanguage()
  return (
    <nav className="institutional-breadcrumbs" aria-label={language === 'fr' ? 'Fil d’Ariane' : 'Breadcrumb'}>
      <Link to="/" aria-label={language === 'fr' ? 'Accueil' : 'Home'}><Home size={15} /></Link>
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>
          <ChevronRight size={14} aria-hidden="true" />
          {item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </span>
      ))}
    </nav>
  )
}
