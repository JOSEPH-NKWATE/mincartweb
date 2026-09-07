import { Link } from '@tanstack/react-router'

export function InstitutionalFooter() {
  return (
    <footer className="institutional-footer">
      <div className="institutional-footer-inner">
        <div className="institutional-footer-brand">
          <img src="/minac-logo.png" alt="Logo du Ministère des Arts et de la Culture" />
          <div>
            <strong>Ministère des Arts et de la Culture</strong>
            <span>République du Cameroun</span>
          </div>
        </div>
        <nav aria-label="Liens institutionnels">
          <Link to="/organisation">Organisation</Link>
          <Link to="/directions/cinematographie-productions-audiovisuelles">DCPA</Link>
          <Link to="/reglementation-cinematographique">Documents cinéma</Link>
        </nav>
      </div>
    </footer>
  )
}

