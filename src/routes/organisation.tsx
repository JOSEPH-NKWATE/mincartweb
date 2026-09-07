import { createFileRoute, Link } from '@tanstack/react-router'
import { Building2, Download, FileClock, Film, Landmark, MapPinned } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { InstitutionalFooter } from '@/components/InstitutionalFooter'
import { InstitutionalHeader } from '@/components/InstitutionalHeader'
import { MinacOrganisationTree } from '@/components/OrganisationTree'

export const Route = createFileRoute('/organisation')({
  component: OrganisationPage,
  head: () => ({
    meta: [
      { title: 'Organisation du MINAC | Ministère des Arts et de la Culture' },
      { name: 'description', content: 'Découvrez la structure du Ministère des Arts et de la Culture du Cameroun et son organigramme interactif.' },
    ],
  }),
})

const structureCards = [
  { icon: Building2, title: 'Administration centrale', text: 'Les directions et structures qui concourent à la mise en œuvre de la politique nationale.' },
  { icon: MapPinned, title: 'Services déconcentrés', text: 'Les services qui assurent la présence et l’action du Ministère sur le territoire.' },
  { icon: Landmark, title: 'Services rattachés', text: 'Les structures rattachées au Ministère dans le cadre de ses missions.' },
]

function OrganisationPage() {
  return (
    <div className="institutional-page">
      <InstitutionalHeader />
      <main>
        <section className="organisation-hero">
          <div className="institutional-container">
            <Breadcrumbs items={[{ label: 'Le Ministère' }, { label: 'Organisation' }]} />
            <div className="organisation-hero-grid">
              <div>
                <span className="institutional-eyebrow">Le Ministère</span>
                <h1>Organisation du Ministère des Arts et de la Culture</h1>
                <p className="institutional-lead">Le Ministère des Arts et de la Culture est placé sous l’autorité d’un Ministre. Il est chargé de l’élaboration et de la mise en œuvre de la politique du Gouvernement en matière de promotion et de développement artistique et culturel.</p>
              </div>
              <div className="organisation-emblem" aria-hidden="true">
                <span className="organisation-emblem-ring"><Landmark size={58} /></span>
                <strong>MINAC</strong>
                <small>Arts · Culture · Patrimoine</small>
              </div>
            </div>
          </div>
        </section>

        <section className="institutional-section institutional-section--intro">
          <div className="institutional-container institutional-prose-grid">
            <div>
              <span className="institutional-section-number">01</span>
              <h2>Une organisation au service de la politique culturelle nationale</h2>
            </div>
            <p>Pour l’accomplissement de ses missions, le Ministère s’appuie sur une administration centrale, des services déconcentrés et des services rattachés, ainsi que sur les différentes directions et structures qui concourent à la mise en œuvre de la politique nationale dans les domaines des arts, de la culture et du patrimoine.</p>
          </div>
          <div className="institutional-container organisation-structure-cards">
            {structureCards.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon size={25} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="institutional-section organisation-chart-section" id="organigramme">
          <div className="institutional-container">
            <div className="institutional-section-heading">
              <div>
                <span className="institutional-eyebrow">Structure institutionnelle</span>
                <h2>Organigramme du MINAC</h2>
                <p>Sélectionnez une structure pour afficher ou masquer les niveaux qui lui sont rattachés.</p>
              </div>
              <a className="institutional-button institutional-button--muted" href="#documents" aria-label="Consulter la disponibilité de l’organigramme officiel">
                <Download size={18} /> Télécharger l’organigramme
              </a>
            </div>
            <MinacOrganisationTree />
            <p className="organisation-source-note">Cette représentation reprend uniquement les structures expressément communiquées dans la documentation fournie. Aucun titulaire de poste n’est affiché.</p>
          </div>
        </section>

        <section className="institutional-section organisation-featured-direction">
          <div className="institutional-container organisation-featured-card">
            <div className="organisation-featured-icon"><Film size={31} /></div>
            <div>
              <span className="institutional-eyebrow">Direction centrale</span>
              <h2>Direction de la Cinématographie et des Productions Audiovisuelles</h2>
              <p>Découvrez les missions, l’organisation interne et les services de la DCPA.</p>
            </div>
            <Link className="institutional-button" to="/directions/cinematographie-productions-audiovisuelles">Découvrir la DCPA</Link>
          </div>
        </section>

        <section className="institutional-section institutional-documents" id="documents">
          <div className="institutional-container">
            <div className="institutional-section-heading">
              <div>
                <span className="institutional-eyebrow">Documents</span>
                <h2>Documents officiels</h2>
              </div>
            </div>
            <article className="document-placeholder">
              <FileClock size={25} aria-hidden="true" />
              <div>
                <h3>Organigramme officiel du MINAC</h3>
                <p>Document à publier par l’administrateur du MINAC. Aucun fichier d’organigramme n’a été fourni dans les ressources disponibles.</p>
              </div>
              <span>En attente de publication</span>
            </article>
          </div>
        </section>
      </main>
      <InstitutionalFooter />
    </div>
  )
}

