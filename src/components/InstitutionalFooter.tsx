import { Link } from '@tanstack/react-router'
import { useLanguage } from '@/lib/language'

export function InstitutionalFooter() {
  const { language } = useLanguage()
  return (
    <footer className="institutional-footer">
      <div className="institutional-footer-inner">
        <div className="institutional-footer-brand">
          <img src="/minac-logo.png" alt={language === 'fr' ? 'Logo du Ministère des Arts et de la Culture' : 'Ministry of Arts and Culture logo'} />
          <div>
            <strong>{language === 'fr' ? 'Ministère des Arts et de la Culture' : 'Ministry of Arts and Culture'}</strong>
            <span>{language === 'fr' ? 'République du Cameroun' : 'Republic of Cameroon'}</span>
          </div>
        </div>
        <nav aria-label={language === 'fr' ? 'Liens institutionnels' : 'Institutional links'}>
          <Link to="/organisation">Organisation</Link>
          <Link to="/directions/cinematographie-productions-audiovisuelles">DCPA</Link>
          <Link to="/reglementation-cinematographique">{language === 'fr' ? 'Documents cinéma' : 'Cinema documents'}</Link>
        </nav>
      </div>
    </footer>
  )
}
