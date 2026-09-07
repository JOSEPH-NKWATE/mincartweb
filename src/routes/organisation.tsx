import { createFileRoute, Link } from '@tanstack/react-router'
import { Building2, Download, FileClock, Film, Landmark, MapPinned } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { InstitutionalFooter } from '@/components/InstitutionalFooter'
import { InstitutionalHeader } from '@/components/InstitutionalHeader'
import { MinacOrganisationTree } from '@/components/OrganisationTree'
import { useLanguage } from '@/lib/language'

export const Route = createFileRoute('/organisation')({
  component: OrganisationPage,
  head: () => ({
    meta: [
      { title: 'Organisation du MINAC | Ministère des Arts et de la Culture' },
      { name: 'description', content: 'Découvrez la structure du Ministère des Arts et de la Culture du Cameroun et son organigramme interactif.' },
    ],
  }),
})

const organisationCopy = {
  fr: {
    ministry: 'Le Ministère', title: 'Organisation du Ministère des Arts et de la Culture',
    lead: 'Le Ministère des Arts et de la Culture est placé sous l’autorité d’un Ministre. Il est chargé de l’élaboration et de la mise en œuvre de la politique du Gouvernement en matière de promotion et de développement artistique et culturel.',
    emblem: 'Arts · Culture · Patrimoine', introTitle: 'Une organisation au service de la politique culturelle nationale',
    intro: 'Pour l’accomplissement de ses missions, le Ministère s’appuie sur une administration centrale, des services déconcentrés et des services rattachés, ainsi que sur les différentes directions et structures qui concourent à la mise en œuvre de la politique nationale dans les domaines des arts, de la culture et du patrimoine.',
    cards: [
      ['Administration centrale', 'Les directions et structures qui concourent à la mise en œuvre de la politique nationale.'],
      ['Services déconcentrés', 'Les services qui assurent la présence et l’action du Ministère sur le territoire.'],
      ['Services rattachés', 'Les structures rattachées au Ministère dans le cadre de ses missions.'],
    ],
    structure: 'Structure institutionnelle', chart: 'Organigramme du MINAC', chartHelp: 'Sélectionnez une structure pour afficher ou masquer les niveaux qui lui sont rattachés.',
    download: 'Télécharger l’organigramme', downloadLabel: 'Consulter la disponibilité de l’organigramme officiel',
    source: 'Cette représentation reprend uniquement les structures expressément communiquées dans la documentation fournie. Aucun titulaire de poste n’est affiché.',
    central: 'Direction centrale', dcpaTitle: 'Direction de la Cinématographie et des Productions Audiovisuelles', dcpaText: 'Découvrez les missions, l’organisation interne et les services de la DCPA.', dcpaLink: 'Découvrir la DCPA',
    documents: 'Documents', official: 'Documents officiels', documentTitle: 'Organigramme officiel du MINAC', documentText: 'Document à publier par l’administrateur du MINAC. Aucun fichier d’organigramme n’a été fourni dans les ressources disponibles.', pending: 'En attente de publication',
  },
  en: {
    ministry: 'The Ministry', title: 'Organisation of the Ministry of Arts and Culture',
    lead: 'The Ministry of Arts and Culture is placed under the authority of a Minister. It develops and implements Government policy for the promotion and development of arts and culture.',
    emblem: 'Arts · Culture · Heritage', introTitle: 'An organisation serving the national cultural policy',
    intro: 'To carry out its missions, the Ministry relies on a central administration, decentralised services and affiliated services, together with the directorates and structures that implement national policy in the fields of arts, culture and heritage.',
    cards: [
      ['Central administration', 'The directorates and structures that contribute to implementing national policy.'],
      ['Decentralised services', 'The services that ensure the Ministry’s presence and action throughout the country.'],
      ['Affiliated services', 'The structures attached to the Ministry as part of its missions.'],
    ],
    structure: 'Institutional structure', chart: 'MINAC organisation chart', chartHelp: 'Select a structure to show or hide its attached levels.',
    download: 'Download the organisation chart', downloadLabel: 'View the availability of the official organisation chart',
    source: 'This representation includes only the structures explicitly identified in the available documentation. No office holders are displayed.',
    central: 'Central directorate', dcpaTitle: 'Directorate of Cinematography and Audiovisual Productions', dcpaText: 'Discover the missions, internal organisation and services of the DCPA.', dcpaLink: 'Discover the DCPA',
    documents: 'Documents', official: 'Official documents', documentTitle: 'Official MINAC organisation chart', documentText: 'This document is awaiting publication by the MINAC administrator. No organisation chart file was included in the available resources.', pending: 'Awaiting publication',
  },
} as const

const structureIcons = [Building2, MapPinned, Landmark]

function OrganisationPage() {
  const { language } = useLanguage()
  const copy = organisationCopy[language]
  return (
    <div className="institutional-page">
      <InstitutionalHeader />
      <main>
        <section className="organisation-hero">
          <div className="institutional-container">
            <Breadcrumbs items={[{ label: copy.ministry }, { label: 'Organisation' }]} />
            <div className="organisation-hero-grid">
              <div>
                <span className="institutional-eyebrow">{copy.ministry}</span>
                <h1>{copy.title}</h1>
                <p className="institutional-lead">{copy.lead}</p>
              </div>
              <div className="organisation-emblem" aria-hidden="true">
                <span className="organisation-emblem-ring"><Landmark size={58} /></span>
                <strong>MINAC</strong>
                <small>{copy.emblem}</small>
              </div>
            </div>
          </div>
        </section>

        <section className="institutional-section institutional-section--intro">
          <div className="institutional-container institutional-prose-grid">
            <div>
              <span className="institutional-section-number">01</span>
              <h2>{copy.introTitle}</h2>
            </div>
            <p>{copy.intro}</p>
          </div>
          <div className="institutional-container organisation-structure-cards">
            {copy.cards.map(([title, text], index) => {
              const Icon = structureIcons[index]
              return (
              <article key={title}>
                <Icon size={25} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
              )
            })}
          </div>
        </section>

        <section className="institutional-section organisation-chart-section" id="organigramme">
          <div className="institutional-container">
            <div className="institutional-section-heading">
              <div>
                <span className="institutional-eyebrow">{copy.structure}</span>
                <h2>{copy.chart}</h2>
                <p>{copy.chartHelp}</p>
              </div>
              <a className="institutional-button institutional-button--muted" href="#documents" aria-label={copy.downloadLabel}>
                <Download size={18} /> {copy.download}
              </a>
            </div>
            <MinacOrganisationTree language={language} />
            <p className="organisation-source-note">{copy.source}</p>
          </div>
        </section>

        <section className="institutional-section organisation-featured-direction">
          <div className="institutional-container organisation-featured-card">
            <div className="organisation-featured-icon"><Film size={31} /></div>
            <div>
              <span className="institutional-eyebrow">{copy.central}</span>
              <h2>{copy.dcpaTitle}</h2>
              <p>{copy.dcpaText}</p>
            </div>
            <Link className="institutional-button" to="/directions/cinematographie-productions-audiovisuelles">{copy.dcpaLink}</Link>
          </div>
        </section>

        <section className="institutional-section institutional-documents" id="documents">
          <div className="institutional-container">
            <div className="institutional-section-heading">
              <div>
                <span className="institutional-eyebrow">{copy.documents}</span>
                <h2>{copy.official}</h2>
              </div>
            </div>
            <article className="document-placeholder">
              <FileClock size={25} aria-hidden="true" />
              <div>
                <h3>{copy.documentTitle}</h3>
                <p>{copy.documentText}</p>
              </div>
              <span>{copy.pending}</span>
            </article>
          </div>
        </section>
      </main>
      <InstitutionalFooter />
    </div>
  )
}
