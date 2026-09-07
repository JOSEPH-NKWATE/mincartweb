import { createFileRoute } from '@tanstack/react-router'
import {
  Archive, BarChart3, Camera, ChevronDown, Clapperboard, FileCheck2, FileText,
  Film, Handshake, Library, LineChart, Scale, ShieldCheck, Sparkles,
} from 'lucide-react'
import { useState } from 'react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { InstitutionalFooter } from '@/components/InstitutionalFooter'
import { InstitutionalHeader } from '@/components/InstitutionalHeader'
import { DcpaOrganisationTree } from '@/components/OrganisationTree'

export const Route = createFileRoute('/directions/cinematographie-productions-audiovisuelles')({
  component: DcpaPage,
  head: () => ({
    meta: [
      { title: 'DCPA | Direction de la Cinématographie et des Productions Audiovisuelles' },
      { name: 'description', content: 'Missions, attributions et organisation de la Direction de la Cinématographie et des Productions Audiovisuelles du Cameroun.' },
    ],
  }),
})

const missions = [
  { icon: Clapperboard, title: 'Développement de la cinématographie', text: 'Définition des stratégies de développement de la cinématographie et des productions audiovisuelles.' },
  { icon: Camera, title: 'Production audiovisuelle', text: 'Conception et réalisation de productions audiovisuelles destinées à promouvoir et renforcer l’identité culturelle nationale.' },
  { icon: Handshake, title: 'Appui aux professionnels', text: 'Appui à la production audiovisuelle et cinématographique.' },
  { icon: Scale, title: 'Réglementation', text: 'Préparation et mise en application de la réglementation relative aux activités cinématographiques et audiovisuelles.' },
  { icon: ShieldCheck, title: 'Contrôle des activités', text: 'Suivi et contrôle des professions et activités cinématographiques et audiovisuelles.' },
  { icon: Sparkles, title: 'Promotion de l’industrie cinématographique', text: 'Mise en place et animation de structures favorisant le développement de l’art, du commerce et de l’industrie cinématographiques.' },
  { icon: Archive, title: 'Patrimoine audiovisuel', text: 'Suivi de la cinématographie nationale ainsi que des archives filmées et audiovisuelles.' },
  { icon: BarChart3, title: 'Données et statistiques', text: 'Collecte des données statistiques relatives à la production, à la distribution et à l’exploitation cinématographiques.' },
  { icon: FileCheck2, title: 'Autorisations de tournage', text: 'Instruction des demandes d’autorisation de tournage de films et de documents audiovisuels sur le territoire national.' },
  { icon: Film, title: 'Contrôle des films', text: 'Animation de la commission de contrôle des films cinématographiques et audiovisuels.' },
]

const departments = [
  {
    title: 'Sous-Direction de la Cinématographie, des Normes et des Contrôles',
    description: 'Cette sous-direction contribue à l’encadrement, au développement et au suivi des activités cinématographiques et audiovisuelles. Elle intervient notamment dans l’application de la réglementation, l’examen des demandes de prise de vue professionnelle, le suivi des professions du secteur, les études relatives au développement de l’industrie cinématographique et l’appui aux professionnels.',
    note: 'Ses attributions portent également sur le financement du cinéma, les salles de cinéma, l’appui technique aux producteurs et distributeurs, la coopération, les festivals et la collecte de données statistiques.',
    services: [
      {
        title: 'Service de la Cinématographie et de l’Audiovisuel',
        responsibilities: [
          'Études relatives au développement de l’art, du commerce et de l’industrie cinématographiques',
          'Étude des questions liées au financement du cinéma national',
          'Appui technique aux producteurs, distributeurs et exploitants nationaux',
          'Participation à la collecte des données statistiques relatives aux activités cinématographiques',
        ],
      },
      {
        title: 'Service des Normes et des Contrôles',
        responsibilities: [
          'Participation à la préparation et à la mise en application de la réglementation',
          'Examen des demandes de prise de vue cinématographique et audiovisuelle professionnelle',
          'Suivi des professions et activités cinématographiques et audiovisuelles',
        ],
      },
    ],
  },
  {
    title: 'Sous-Direction de l’Audiovisuel',
    description: 'La Sous-Direction de l’Audiovisuel contribue à la conception, à la production et à la valorisation des contenus audiovisuels à caractère culturel. Elle participe également à la conservation du patrimoine filmique et au suivi de la cinémathèque nationale et des archives filmées.',
    note: 'Ses attributions comprennent l’appui à la production audiovisuelle, les contenus médiatiques culturels, la préservation du patrimoine filmique, la gestion de la cinémathèque nationale et les statistiques audiovisuelles.',
    services: [
      {
        title: 'Service de la Cinémathèque et des Projections',
        responsibilities: [
          'Conception et réalisation de supports vidéographiques destinés à promouvoir l’identité culturelle nationale',
          'Suivi de l’exploitation des produits audiovisuels à caractère culturel par les médias',
          'Appui technique à la production vidéographique et audiovisuelle',
          'Suivi de la gestion de la cinémathèque nationale et des archives filmées',
        ],
      },
      {
        title: 'Service des Statistiques du Fichier Vidéo et Audiovisuel',
        responsibilities: [
          'Collecte des données statistiques sur la production, la distribution et l’exploitation cinématographiques',
          'Exploitation et analyse des données statistiques',
          'Élaboration et suivi des indicateurs clés du secteur filmique et audiovisuel',
          'Constitution et mise à jour d’une banque de projets audiovisuels',
          'Conception et réalisation d’études sur le cinéma et les productions audiovisuelles',
        ],
      },
    ],
  },
]

const documents = [
  { title: 'Loi sur la réglementation du cinéma', href: '/documents/loi-reglementation-cinema-cameroun.pdf', meta: 'PDF · Document officiel' },
  { title: 'Loi régissant l’audiovisuel au Cameroun', href: '/documents/loi-audiovisuel-cameroun-2015.pdf', meta: 'PDF · Document officiel' },
  { title: 'Règles de police et d’hygiène', href: '/documents/loi-regles-police-hygiene.pdf', meta: 'PDF · Document officiel' },
  { title: 'Droits et taxes', href: '/documents/loi-droits-et-taxes.pdf', meta: 'PDF · Document officiel' },
]

function ServiceCard({ title, responsibilities }: { title: string; responsibilities: string[] }) {
  const [open, setOpen] = useState(false)
  return (
    <article className={`dcpa-service-card${open ? ' is-open' : ''}`}>
      <button type="button" onClick={() => setOpen(value => !value)} aria-expanded={open}>
        <span><Library size={20} aria-hidden="true" /></span>
        <strong>{title}</strong>
        <ChevronDown size={20} aria-hidden="true" />
      </button>
      <div className="dcpa-service-content" hidden={!open}>
        <ul>
          {responsibilities.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </article>
  )
}

function DcpaPage() {
  return (
    <div className="institutional-page dcpa-page">
      <InstitutionalHeader />
      <main>
        <section className="dcpa-institutional-hero">
          <div className="dcpa-hero-photo" aria-hidden="true" />
          <div className="dcpa-hero-pattern" aria-hidden="true" />
          <div className="institutional-container dcpa-institutional-hero-inner">
            <Breadcrumbs items={[{ label: 'Le Ministère' }, { label: 'Organisation', to: '/organisation' }, { label: 'DCPA' }]} />
            <div className="dcpa-hero-content">
              <span className="institutional-eyebrow">Direction centrale · DCPA</span>
              <img className="dcpa-wordmark" src="/dcpa-logo.png" alt="DCPA" />
              <h1>Direction de la Cinématographie et des Productions Audiovisuelles</h1>
              <p>Développement de la cinématographie et des productions audiovisuelles au service de la promotion de l’identité culturelle nationale.</p>
              <div className="dcpa-hero-actions">
                <a className="institutional-button" href="#missions">Découvrir les missions</a>
                <a className="institutional-button institutional-button--outline" href="#documents">Documents officiels</a>
              </div>
            </div>
          </div>
        </section>

        <section className="institutional-section dcpa-presentation">
          <div className="institutional-container institutional-prose-grid">
            <div>
              <span className="institutional-section-number">01</span>
              <span className="institutional-eyebrow">Présentation</span>
              <h2>Une direction dédiée au développement du cinéma camerounais</h2>
            </div>
            <div className="institutional-rich-copy">
              <p>Placée sous l’autorité d’un Directeur, la Direction de la Cinématographie et des Productions Audiovisuelles est chargée de contribuer au développement de la cinématographie et des productions audiovisuelles au Cameroun.</p>
              <p>Elle intervient notamment dans la définition des stratégies de développement du secteur, l’appui à la production audiovisuelle et cinématographique, l’application de la réglementation, le suivi des professions et activités cinématographiques et audiovisuelles, ainsi que la préservation et la valorisation du patrimoine filmique et audiovisuel national.</p>
            </div>
          </div>
        </section>

        <section className="institutional-section dcpa-missions" id="missions">
          <div className="institutional-container">
            <div className="institutional-section-heading">
              <div>
                <span className="institutional-eyebrow">Champ d’action</span>
                <h2>Missions et attributions</h2>
                <p>Les principales responsabilités officielles de la DCPA, présentées par domaine d’intervention.</p>
              </div>
              <span className="dcpa-mission-count">10 missions</span>
            </div>
            <div className="dcpa-mission-grid">
              {missions.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="dcpa-mission-card">
                  <span className="dcpa-mission-index">{String(index + 1).padStart(2, '0')}</span>
                  <Icon size={26} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="institutional-section dcpa-organisation-section" id="organisation">
          <div className="institutional-container">
            <div className="institutional-section-heading">
              <div>
                <span className="institutional-eyebrow">Structure interne</span>
                <h2>Organisation de la Direction</h2>
                <p>Ouvrez ou refermez chaque branche pour parcourir la structure de la DCPA.</p>
              </div>
            </div>
            <DcpaOrganisationTree />
          </div>
        </section>

        <section className="institutional-section dcpa-departments">
          <div className="institutional-container">
            <div className="institutional-section-heading">
              <div>
                <span className="institutional-eyebrow">Sous-directions et services</span>
                <h2>Attributions par structure</h2>
                <p>Sélectionnez un service pour consulter ses responsabilités officielles.</p>
              </div>
            </div>
            <div className="dcpa-department-stack">
              {departments.map((department, index) => (
                <article className="dcpa-department" key={department.title}>
                  <div className="dcpa-department-heading">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{department.title}</h3>
                      <p>{department.description}</p>
                      <small>{department.note}</small>
                    </div>
                  </div>
                  <div className="dcpa-service-list">
                    {department.services.map(service => <ServiceCard key={service.title} {...service} />)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="institutional-section dcpa-data-band">
          <div className="institutional-container">
            <LineChart size={34} aria-hidden="true" />
            <div>
              <span className="institutional-eyebrow">Connaissance du secteur</span>
              <h2>Documenter, analyser et préserver</h2>
              <p>La collecte statistique, les études sectorielles et la conservation des archives contribuent au suivi durable du patrimoine filmique et audiovisuel national.</p>
            </div>
          </div>
        </section>

        <section className="institutional-section institutional-documents" id="documents">
          <div className="institutional-container">
            <div className="institutional-section-heading">
              <div>
                <span className="institutional-eyebrow">Ressources</span>
                <h2>Documents officiels</h2>
                <p>Consultez les textes officiels actuellement fournis dans le portail.</p>
              </div>
            </div>
            <div className="dcpa-document-grid">
              {documents.map(document => (
                <a key={document.href} href={document.href} target="_blank" rel="noreferrer" className="dcpa-document-card">
                  <FileText size={25} aria-hidden="true" />
                  <span><strong>{document.title}</strong><small>{document.meta}</small></span>
                  <span aria-hidden="true">PDF</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <InstitutionalFooter />
    </div>
  )
}

