import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef, useMemo } from 'react'
import {
  Film, Camera, Disc, Building2, FileText, Clock, ShieldCheck, Phone,
  Download, Search, ChevronDown, ChevronRight, CheckCircle2, Mail,
  MapPin, ArrowRight, ScrollText, Users, Eye, Home, Send, Megaphone,
} from 'lucide-react'

export const Route = createFileRoute('/reglementation-cinematographique')({
  head: () => ({
    meta: [
      { title: 'Réglementation Cinématographique – MINAC | République du Cameroun' },
      {
        name: 'description',
        content:
          "Autorisations et contrôle des activités cinématographiques au Cameroun. Procédures, visas d'exploitation, délais et formulaires conformément au Décret N°90/1462 du 09 novembre 1990.",
      },
    ],
  }),
  component: CinemaRegulation,
})

type Lang = 'fr' | 'en'

// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
const CT = {
  fr: {
    back_home: 'Accueil',
    breadcrumb: ['Accueil', 'Services', 'Réglementation Cinématographique'],
    eyebrow: 'Ministère des Arts et de la Culture',
    hero_kicker: '🎬 Réglementation Cinématographique',
    hero_title: "Autorisations d'Exercice de l'Activité Cinématographique",
    hero_sub:
      "Découvrez les procédures, autorisations et conditions requises pour produire, distribuer et exploiter des œuvres cinématographiques au Cameroun, conformément au Décret N°90/1462 du 09 novembre 1990.",
    cta_decree: 'Télécharger le Décret',
    cta_request: 'Faire une Demande',
    cta_contact: 'Contact MINAC',
    nav_overview: "Vue d'ensemble",
    nav_authorizations: "Types d'Autorisations",
    nav_construction: 'Construction de Salle',
    nav_visa: "Visa d'Exploitation",
    nav_deadlines: 'Délais Administratifs',
    nav_commission: 'Commission de Contrôle',
    nav_downloads: 'Formulaires',
    nav_faq: 'Questions Fréquentes',
    nav_contact: 'Contact',
    on_this_page: 'Sur cette page',
    overview_label: "Vue d'ensemble",
    overview_title: 'Les Activités Cinématographiques Réglementées',
    overview_sub:
      "Quatre grands domaines d'activité sont encadrés par la réglementation cinématographique camerounaise.",
    overview: [
      { icon: 'film', title: 'Production', desc: 'Création de films cinématographiques et enregistrements sonores.' },
      { icon: 'camera', title: 'Prise de Vue', desc: 'Autorisation pour réaliser des tournages et enregistrements.' },
      { icon: 'disc', title: 'Distribution', desc: "Autorisation pour diffuser ou commercialiser des œuvres." },
      { icon: 'building', title: 'Exploitation', desc: "Autorisation pour exploiter une salle, un cinéma ambulant ou des vidéogrammes." },
    ],
    auth_label: 'Procédures',
    auth_title: "Types d'Autorisations",
    auth_sub: 'Sélectionnez une catégorie pour consulter les documents requis et les délais applicables.',
    docs_required: 'Documents requis',
    deadline: 'Délai',
    deadline_value: '90 jours maximum',
    subcategories: 'Sous-catégories',
    auth: [
      {
        icon: '🎥',
        title: 'Autorisation de Production',
        docs: ['Demande timbrée', 'Titre provisoire du film', 'Format et modalités techniques', 'Lieux de tournage', 'Nom du laboratoire', 'Date de début du tournage', 'Casier judiciaire du réalisateur', 'Statuts de la société (si applicable)'],
        sub: [] as string[],
      },
      {
        icon: '📹',
        title: 'Autorisation de Prise de Vue',
        docs: ['Demande timbrée', 'Scénario', 'Contrats des auteurs', 'Contrat du réalisateur', 'Liste du personnel technique', 'Autorisation de production', "Informations d'état civil"],
        sub: [],
      },
      {
        icon: '📀',
        title: 'Autorisation de Distribution',
        docs: ['Demande timbrée', 'Casier judiciaire', 'Statuts de la société'],
        sub: [],
      },
      {
        icon: '🎬',
        title: "Autorisation d'Exploitation",
        docs: [] as string[],
        sub: ['Salle de cinéma', 'Cinéma ambulant', 'Vidéogrammes'],
      },
    ],
    construction_label: 'Procédure',
    construction_title: "Construction d'une Salle de Cinéma",
    construction_sub: "De la préparation du dossier à l'autorisation de construire, suivez chaque étape de la procédure.",
    steps: [
      { title: 'Préparer le dossier', desc: 'Rassembler toutes les pièces administratives et techniques requises.' },
      { title: 'Dépôt à la Délégation Provinciale', desc: "Soumettre le dossier complet auprès de la Délégation Provinciale du MINAC." },
      { title: 'Examen par la Commission Provinciale', desc: "La Commission étudie la conformité et la recevabilité du dossier." },
      { title: 'Décision du Gouverneur', desc: "Le Gouverneur statue sur la demande d'autorisation." },
      { title: 'Autorisation de Construction', desc: "Délivrance de l'autorisation officielle de construire la salle." },
    ],
    construction_docs_title: 'Documents à fournir',
    construction_docs: ['Demande timbrée', 'Casier judiciaire', 'CNI', 'Titre foncier ou bail', 'Autorisation de bâtir', 'Plans architecturaux', 'Devis détaillé'],
    visa_label: 'Contrôle',
    visa_title: "Visa d'Exploitation",
    visa_badge: 'Obligatoire avant diffusion publique',
    visa_statement: "Aucun film ne peut être projeté au Cameroun sans visa d'exploitation délivré par le Ministère de la Culture.",
    visa_types_title: 'Types de visa',
    visa_types: [
      { color: 'green', label: 'Tous publics', desc: 'Œuvre accessible à tout public sans restriction.' },
      { color: 'yellow', label: 'Interdit aux moins de 13 ans', desc: 'Diffusion soumise à une restriction d’âge.' },
      { color: 'red', label: 'Interdit aux moins de 18 ans', desc: 'Œuvre réservée à un public adulte.' },
      { color: 'black', label: "Refus d'exploitation", desc: 'Œuvre non autorisée à la diffusion publique.' },
    ],
    deadlines_label: 'Repères',
    deadlines_title: 'Délais Administratifs',
    deadlines_sub: 'Les principaux délais de traitement prévus par la réglementation.',
    deadlines: [
      { value: 90, unit: 'jours', label: 'Autorisation de Production' },
      { value: 90, unit: 'jours', label: 'Autorisation de Prise de Vue' },
      { value: 90, unit: 'jours', label: 'Autorisation de Distribution' },
      { value: 4, unit: 'types', label: 'Catégories de Visa' },
    ],
    commission_label: 'Gouvernance',
    commission_title: 'Commission Nationale de Contrôle',
    commission_sub: "Organe chargé du contrôle des œuvres cinématographiques et de la délivrance des visas d'exploitation.",
    missions_title: 'Missions',
    missions: ['Protection de la jeunesse', 'Respect des valeurs nationales', 'Protection de la morale publique', "Préservation de l'image du Cameroun", 'Contrôle des œuvres cinématographiques'],
    org_root: 'Commission Nationale de Contrôle',
    org_nodes: ['Présidence de la Commission', 'Secrétariat Technique', 'Représentants Ministériels', 'Magistrats & Juristes', 'Experts & Société Civile'],
    downloads_label: 'Centre de Téléchargement',
    downloads_title: 'Télécharger les Formulaires',
    downloads_sub: 'Téléchargez les formulaires officiels nécessaires à vos démarches.',
    search_placeholder: 'Rechercher un formulaire…',
    filter_all: 'Tous',
    download_btn: 'Télécharger',
    no_results: 'Aucun formulaire ne correspond à votre recherche.',
    forms: [
      { title: 'Formulaire Production', cat: 'Production' },
      { title: 'Formulaire Prise de Vue', cat: 'Prise de Vue' },
      { title: 'Formulaire Distribution', cat: 'Distribution' },
      { title: 'Formulaire Exploitation', cat: 'Exploitation' },
    ],
    faq_label: 'Aide',
    faq_title: 'Questions Fréquentes',
    faq_sub: 'Trouvez rapidement des réponses aux questions les plus courantes.',
    faq_search: 'Rechercher une question…',
    faq: [
      { q: 'Quel est le texte de référence ?', a: "L'activité cinématographique au Cameroun est régie par le Décret N°90/1462 du 09 novembre 1990 relatif aux autorisations et au contrôle des activités cinématographiques." },
      { q: 'Combien de temps prend le traitement d’une demande ?', a: "Le délai maximum de traitement est de 90 jours pour les autorisations de production, de prise de vue et de distribution." },
      { q: "Un film peut-il être diffusé sans visa d'exploitation ?", a: "Non. Aucun film ne peut être projeté publiquement au Cameroun sans un visa d'exploitation délivré par le Ministère de la Culture." },
      { q: 'Qui délivre l’autorisation de construire une salle de cinéma ?', a: "L'autorisation de construction est délivrée par le Gouverneur, après examen du dossier par la Commission Provinciale." },
      { q: 'Quels documents sont communs à la plupart des demandes ?', a: "La demande timbrée, le casier judiciaire et, le cas échéant, les statuts de la société figurent parmi les pièces les plus fréquemment exigées." },
      { q: 'Comment classer un film selon son public ?', a: "La Commission Nationale de Contrôle attribue l'un des visas suivants : tous publics, interdit aux moins de 13 ans, interdit aux moins de 18 ans, ou refus d'exploitation." },
    ],
    contact_label: 'Contact',
    contact_title: 'Contacter le Ministère',
    contact_sub: "Pour toute question relative à la réglementation cinématographique, contactez les services du MINAC.",
    contact_addr_label: 'Adresse',
    contact_addr: 'Ministère des Arts et de la Culture, Yaoundé, Région du Centre, Cameroun',
    contact_phone_label: 'Téléphone',
    contact_phone: '+237 222 22 00 00',
    contact_email_label: 'Courriel',
    contact_email: 'contact@minac.cm',
    contact_cta_title: 'Démarrer une demande en ligne',
    contact_cta_desc: 'Initiez votre demande d’autorisation directement auprès des services compétents.',
    contact_cta_btn: 'Faire une Demande en Ligne',
    soon_notice: 'Document bientôt disponible. Veuillez contacter le MINAC pour l’obtenir.',
  },
  en: {
    back_home: 'Home',
    breadcrumb: ['Home', 'Services', 'Cinema Regulation'],
    eyebrow: 'Ministry of Arts and Culture',
    hero_kicker: '🎬 Cinema Regulation',
    hero_title: 'Authorizations for Cinematographic Activities',
    hero_sub:
      'Explore the procedures, authorizations and conditions required to produce, distribute and exhibit cinematographic works in Cameroon, in accordance with Decree N°90/1462 of 09 November 1990.',
    cta_decree: 'Download the Decree',
    cta_request: 'Submit a Request',
    cta_contact: 'Contact MINAC',
    nav_overview: 'Overview',
    nav_authorizations: 'Authorization Types',
    nav_construction: 'Cinema Construction',
    nav_visa: 'Exhibition Visa',
    nav_deadlines: 'Administrative Deadlines',
    nav_commission: 'Control Commission',
    nav_downloads: 'Forms',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    on_this_page: 'On this page',
    overview_label: 'Overview',
    overview_title: 'Regulated Cinematographic Activities',
    overview_sub: 'Four major areas of activity are governed by Cameroon’s cinema regulation.',
    overview: [
      { icon: 'film', title: 'Production', desc: 'Creation of cinematographic films and sound recordings.' },
      { icon: 'camera', title: 'Filming', desc: 'Authorization to carry out shoots and recordings.' },
      { icon: 'disc', title: 'Distribution', desc: 'Authorization to broadcast or commercialize works.' },
      { icon: 'building', title: 'Exhibition', desc: 'Authorization to operate a theatre, mobile cinema or videograms.' },
    ],
    auth_label: 'Procedures',
    auth_title: 'Authorization Types',
    auth_sub: 'Select a category to view the required documents and applicable deadlines.',
    docs_required: 'Required documents',
    deadline: 'Deadline',
    deadline_value: '90 days maximum',
    subcategories: 'Subcategories',
    auth: [
      {
        icon: '🎥',
        title: 'Production Authorization',
        docs: ['Stamped application', 'Provisional film title', 'Format and technical details', 'Filming locations', 'Laboratory name', 'Shooting start date', "Director's criminal record", 'Company statutes (if applicable)'],
        sub: [] as string[],
      },
      {
        icon: '📹',
        title: 'Filming Authorization',
        docs: ['Stamped application', 'Screenplay', "Authors' contracts", "Director's contract", 'Technical staff list', 'Production authorization', 'Civil status information'],
        sub: [],
      },
      {
        icon: '📀',
        title: 'Distribution Authorization',
        docs: ['Stamped application', 'Criminal record', 'Company statutes'],
        sub: [],
      },
      {
        icon: '🎬',
        title: 'Exhibition Authorization',
        docs: [] as string[],
        sub: ['Cinema theatre', 'Mobile cinema', 'Videograms'],
      },
    ],
    construction_label: 'Procedure',
    construction_title: 'Building a Cinema Theatre',
    construction_sub: 'From preparing the file to the building permit, follow every step of the procedure.',
    steps: [
      { title: 'Prepare the file', desc: 'Gather all required administrative and technical documents.' },
      { title: 'Submit to the Provincial Delegation', desc: 'File the complete application with the MINAC Provincial Delegation.' },
      { title: 'Review by the Provincial Commission', desc: 'The Commission examines compliance and admissibility of the file.' },
      { title: "Governor's decision", desc: 'The Governor rules on the authorization request.' },
      { title: 'Building Authorization', desc: 'Issuance of the official authorization to build the theatre.' },
    ],
    construction_docs_title: 'Documents to provide',
    construction_docs: ['Stamped application', 'Criminal record', 'National ID card', 'Land title or lease', 'Building permit', 'Architectural plans', 'Detailed cost estimate'],
    visa_label: 'Control',
    visa_title: 'Exhibition Visa',
    visa_badge: 'Mandatory before public screening',
    visa_statement: 'No film may be screened in Cameroon without an exhibition visa issued by the Ministry of Culture.',
    visa_types_title: 'Visa types',
    visa_types: [
      { color: 'green', label: 'General audiences', desc: 'Work accessible to all audiences without restriction.' },
      { color: 'yellow', label: 'Not for under 13s', desc: 'Screening subject to an age restriction.' },
      { color: 'red', label: 'Not for under 18s', desc: 'Work reserved for adult audiences.' },
      { color: 'black', label: 'Exhibition refused', desc: 'Work not authorized for public screening.' },
    ],
    deadlines_label: 'Key figures',
    deadlines_title: 'Administrative Deadlines',
    deadlines_sub: 'The main processing deadlines set by the regulation.',
    deadlines: [
      { value: 90, unit: 'days', label: 'Production Authorization' },
      { value: 90, unit: 'days', label: 'Filming Authorization' },
      { value: 90, unit: 'days', label: 'Distribution Authorization' },
      { value: 4, unit: 'types', label: 'Visa Categories' },
    ],
    commission_label: 'Governance',
    commission_title: 'National Control Commission',
    commission_sub: 'The body responsible for controlling cinematographic works and issuing exhibition visas.',
    missions_title: 'Missions',
    missions: ['Protection of youth', 'Respect for national values', 'Protection of public morality', "Preservation of Cameroon's image", 'Control of cinematographic works'],
    org_root: 'National Control Commission',
    org_nodes: ['Commission Chair', 'Technical Secretariat', 'Ministerial Representatives', 'Magistrates & Jurists', 'Experts & Civil Society'],
    downloads_label: 'Download Center',
    downloads_title: 'Download Forms',
    downloads_sub: 'Download the official forms needed for your procedures.',
    search_placeholder: 'Search for a form…',
    filter_all: 'All',
    download_btn: 'Download',
    no_results: 'No form matches your search.',
    forms: [
      { title: 'Production Form', cat: 'Production' },
      { title: 'Filming Form', cat: 'Prise de Vue' },
      { title: 'Distribution Form', cat: 'Distribution' },
      { title: 'Exhibition Form', cat: 'Exploitation' },
    ],
    faq_label: 'Help',
    faq_title: 'Frequently Asked Questions',
    faq_sub: 'Quickly find answers to the most common questions.',
    faq_search: 'Search a question…',
    faq: [
      { q: 'What is the reference text?', a: 'Cinematographic activity in Cameroon is governed by Decree N°90/1462 of 09 November 1990 on the authorization and control of cinematographic activities.' },
      { q: 'How long does processing a request take?', a: 'The maximum processing time is 90 days for production, filming and distribution authorizations.' },
      { q: 'Can a film be screened without an exhibition visa?', a: 'No. No film may be publicly screened in Cameroon without an exhibition visa issued by the Ministry of Culture.' },
      { q: 'Who issues the authorization to build a cinema theatre?', a: 'The building authorization is issued by the Governor, after the file has been reviewed by the Provincial Commission.' },
      { q: 'Which documents are common to most requests?', a: 'The stamped application, the criminal record and, where applicable, the company statutes are among the most frequently required documents.' },
      { q: 'How is a film classified by audience?', a: 'The National Control Commission assigns one of the following visas: general audiences, not for under 13s, not for under 18s, or exhibition refused.' },
    ],
    contact_label: 'Contact',
    contact_title: 'Contact the Ministry',
    contact_sub: 'For any question regarding cinema regulation, contact the MINAC services.',
    contact_addr_label: 'Address',
    contact_addr: 'Ministry of Arts and Culture, Yaoundé, Centre Region, Cameroon',
    contact_phone_label: 'Phone',
    contact_phone: '+237 222 22 00 00',
    contact_email_label: 'Email',
    contact_email: 'contact@minac.cm',
    contact_cta_title: 'Start an online request',
    contact_cta_desc: 'Begin your authorization request directly with the relevant services.',
    contact_cta_btn: 'Submit an Online Request',
    soon_notice: 'Document coming soon. Please contact MINAC to obtain it.',
  },
} as const

const SECTIONS = [
  'overview', 'authorizations', 'construction', 'visa',
  'deadlines', 'commission', 'downloads', 'faq', 'contact',
] as const
type SectionId = (typeof SECTIONS)[number]

const OVERVIEW_ICONS = { film: Film, camera: Camera, disc: Disc, building: Building2 } as const

// ─── COUNT-UP HOOK ─────────────────────────────────────────────────────────────
function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf = 0
    let start = 0
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])
  return value
}

function StatCard({ value, unit, label, delay }: { value: number; unit: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const count = useCountUp(value, active)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="cine-reveal cine-stat" style={{ transitionDelay: `${delay}ms` }}>
      <div className="cine-stat-num">{count}<span className="cine-stat-unit"> {unit}</span></div>
      <div className="cine-stat-label">{label}</div>
    </div>
  )
}

export default function CinemaRegulation() {
  const [lang, setLang] = useState<Lang>('fr')
  const [active, setActive] = useState<SectionId>('overview')
  const [openAuth, setOpenAuth] = useState<number>(0)
  const [openFaq, setOpenFaq] = useState<number>(-1)
  const [formQuery, setFormQuery] = useState('')
  const [formFilter, setFormFilter] = useState('all')
  const [faqQuery, setFaqQuery] = useState('')
  const [notice, setNotice] = useState('')
  const t = CT[lang]

  const navItems: { id: SectionId; label: string }[] = [
    { id: 'overview', label: t.nav_overview },
    { id: 'authorizations', label: t.nav_authorizations },
    { id: 'construction', label: t.nav_construction },
    { id: 'visa', label: t.nav_visa },
    { id: 'deadlines', label: t.nav_deadlines },
    { id: 'commission', label: t.nav_commission },
    { id: 'downloads', label: t.nav_downloads },
    { id: 'faq', label: t.nav_faq },
    { id: 'contact', label: t.nav_contact },
  ]

  // Scrollspy
  useEffect(() => {
    const els = SECTIONS
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)
    const obs = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id as SectionId)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll('.cine-reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 },
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [lang])

  // Notice auto-dismiss
  useEffect(() => {
    if (!notice) return
    const id = setTimeout(() => setNotice(''), 4000)
    return () => clearTimeout(id)
  }, [notice])

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const formCategories = useMemo(
    () => Array.from(new Set(t.forms.map(f => f.cat))),
    [t.forms],
  )

  const filteredForms = t.forms.filter(f => {
    const matchesQuery = f.title.toLowerCase().includes(formQuery.trim().toLowerCase())
    const matchesFilter = formFilter === 'all' || f.cat === formFilter
    return matchesQuery && matchesFilter
  })

  const filteredFaq = t.faq.filter(item => {
    const q = faqQuery.trim().toLowerCase()
    return !q || item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
  })

  return (
    <div className="cine-page">
      {/* TOP BAR */}
      <header className="cine-topbar">
        <div className="cine-topbar-inner">
          <Link to="/" className="cine-brand" aria-label={t.back_home}>
            <span className="logo-badge logo-badge--cine"><img src="/minac-logo.png" alt="MINAC — Ministry of Arts and Culture" /></span>
            <span className="cine-brand-text">
              <span className="cine-brand-top">{t.eyebrow}</span>
              <span className="cine-brand-main">République du Cameroun</span>
            </span>
          </Link>
          <nav className="cine-topbar-right" aria-label="Language">
            <Link to="/" className="cine-home-link"><Home size={16} aria-hidden /> {t.back_home}</Link>
            <div className="cine-lang" role="group" aria-label="Language selector">
              <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')} aria-pressed={lang === 'fr'}>FR</button>
              <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
            </div>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="cine-hero" aria-label={t.hero_title}>
        <div className="cine-hero-bg" aria-hidden />
        <div className="cine-hero-overlay" aria-hidden />
        <div className="cine-hero-grain" aria-hidden />
        <div className="cine-hero-content">
          <nav className="cine-breadcrumb" aria-label="Breadcrumb">
            {t.breadcrumb.map((b, i) => (
              <span key={b} className="cine-crumb">
                {i > 0 && <ChevronRight size={13} aria-hidden />}
                {i === t.breadcrumb.length - 1 ? <span aria-current="page">{b}</span> : <span>{b}</span>}
              </span>
            ))}
          </nav>
          <span className="cine-hero-kicker">{t.hero_kicker}</span>
          <h1 className="cine-hero-title">{t.hero_title}</h1>
          <p className="cine-hero-sub">{t.hero_sub}</p>
          <div className="cine-hero-cta">
            <button className="cine-btn cine-btn-gold" onClick={() => setNotice(t.soon_notice)}>
              <Download size={18} aria-hidden /> {t.cta_decree}
            </button>
            <button className="cine-btn cine-btn-outline" onClick={() => scrollTo('downloads')}>
              <Send size={18} aria-hidden /> {t.cta_request}
            </button>
            <button className="cine-btn cine-btn-ghost" onClick={() => scrollTo('contact')}>
              <Phone size={18} aria-hidden /> {t.cta_contact}
            </button>
          </div>
        </div>
      </section>

      <div className="cine-shell">
        {/* STICKY SIDE NAV */}
        <aside className="cine-sidenav" aria-label={t.on_this_page}>
          <div className="cine-sidenav-inner">
            <p className="cine-sidenav-title">{t.on_this_page}</p>
            <ul>
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    className={active === item.id ? 'active' : ''}
                    onClick={() => scrollTo(item.id)}
                    aria-current={active === item.id ? 'true' : undefined}
                  >
                    <span className="cine-sidenav-dot" aria-hidden />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="cine-main">
          {/* 1. OVERVIEW */}
          <section id="overview" className="cine-section">
            <SectionHead label={t.overview_label} title={t.overview_title} sub={t.overview_sub} />
            <div className="cine-overview-grid">
              {t.overview.map((c, i) => {
                const Icon = OVERVIEW_ICONS[c.icon as keyof typeof OVERVIEW_ICONS]
                return (
                  <article key={c.title} className="cine-reveal cine-overview-card" style={{ transitionDelay: `${i * 90}ms` }}>
                    <div className="cine-overview-icon"><Icon size={26} aria-hidden /></div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </article>
                )
              })}
            </div>
          </section>

          {/* 2. AUTHORIZATIONS */}
          <section id="authorizations" className="cine-section">
            <SectionHead label={t.auth_label} title={t.auth_title} sub={t.auth_sub} />
            <div className="cine-accordion">
              {t.auth.map((a, i) => {
                const isOpen = openAuth === i
                return (
                  <div key={a.title} className={`cine-reveal cine-acc-item${isOpen ? ' open' : ''}`} style={{ transitionDelay: `${i * 60}ms` }}>
                    <button
                      className="cine-acc-head"
                      onClick={() => setOpenAuth(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`acc-panel-${i}`}
                    >
                      <span className="cine-acc-emoji" aria-hidden>{a.icon}</span>
                      <span className="cine-acc-title">{a.title}</span>
                      <ChevronDown className="cine-acc-chevron" size={20} aria-hidden />
                    </button>
                    <div id={`acc-panel-${i}`} className="cine-acc-panel" role="region">
                      <div className="cine-acc-panel-inner">
                        {a.docs.length > 0 && (
                          <>
                            <p className="cine-acc-subhead"><FileText size={15} aria-hidden /> {t.docs_required}</p>
                            <ul className="cine-doc-list">
                              {a.docs.map(d => (
                                <li key={d}><CheckCircle2 size={15} aria-hidden /> {d}</li>
                              ))}
                            </ul>
                          </>
                        )}
                        {a.sub.length > 0 && (
                          <>
                            <p className="cine-acc-subhead"><ChevronRight size={15} aria-hidden /> {t.subcategories}</p>
                            <div className="cine-subcats">
                              {a.sub.map(s => <span key={s} className="cine-subcat">{s}</span>)}
                            </div>
                          </>
                        )}
                        {a.docs.length > 0 && (
                          <div className="cine-deadline-pill">
                            <Clock size={15} aria-hidden /> <strong>{t.deadline}&nbsp;:</strong> {t.deadline_value}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* 3. CONSTRUCTION TIMELINE */}
          <section id="construction" className="cine-section">
            <SectionHead label={t.construction_label} title={t.construction_title} sub={t.construction_sub} />
            <ol className="cine-timeline">
              {t.steps.map((s, i) => (
                <li key={s.title} className="cine-reveal cine-tl-item" style={{ transitionDelay: `${i * 110}ms` }}>
                  <div className="cine-tl-marker"><span>{i + 1}</span></div>
                  <div className="cine-tl-card">
                    <span className="cine-tl-step">{lang === 'fr' ? 'Étape' : 'Step'} {i + 1}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="cine-reveal cine-docpanel">
              <h3><ScrollText size={18} aria-hidden /> {t.construction_docs_title}</h3>
              <ul className="cine-doc-list cine-doc-list-grid">
                {t.construction_docs.map(d => (
                  <li key={d}><CheckCircle2 size={15} aria-hidden /> {d}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* 4. VISA */}
          <section id="visa" className="cine-section">
            <SectionHead label={t.visa_label} title={t.visa_title} sub="" />
            <div className="cine-reveal cine-visa-card">
              <span className="cine-visa-badge"><Eye size={15} aria-hidden /> {t.visa_badge}</span>
              <p className="cine-visa-statement">{t.visa_statement}</p>
              <p className="cine-visa-types-title">{t.visa_types_title}</p>
              <div className="cine-visa-grid">
                {t.visa_types.map((v, i) => (
                  <div key={v.label} className="cine-reveal cine-visa-type" style={{ transitionDelay: `${i * 80}ms` }}>
                    <span className={`cine-visa-light cine-visa-${v.color}`} aria-hidden />
                    <div>
                      <strong>{v.label}</strong>
                      <span>{v.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. DEADLINES */}
          <section id="deadlines" className="cine-section">
            <SectionHead label={t.deadlines_label} title={t.deadlines_title} sub={t.deadlines_sub} />
            <div className="cine-stats-grid">
              {t.deadlines.map((d, i) => (
                <StatCard key={d.label} value={d.value} unit={d.unit} label={d.label} delay={i * 90} />
              ))}
            </div>
          </section>

          {/* 6. COMMISSION */}
          <section id="commission" className="cine-section">
            <SectionHead label={t.commission_label} title={t.commission_title} sub={t.commission_sub} />
            <div className="cine-commission">
              <div className="cine-reveal cine-org">
                <div className="cine-org-root"><ShieldCheck size={18} aria-hidden /> {t.org_root}</div>
                <div className="cine-org-connector" aria-hidden />
                <div className="cine-org-nodes">
                  {t.org_nodes.map((n, i) => (
                    <div key={n} className="cine-reveal cine-org-node" style={{ transitionDelay: `${i * 70}ms` }}>
                      <Users size={15} aria-hidden /> {n}
                    </div>
                  ))}
                </div>
              </div>
              <div className="cine-reveal cine-missions">
                <h3><Megaphone size={17} aria-hidden /> {t.missions_title}</h3>
                <ul>
                  {t.missions.map(m => (
                    <li key={m}><CheckCircle2 size={16} aria-hidden /> {m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 7. DOWNLOADS */}
          <section id="downloads" className="cine-section">
            <SectionHead label={t.downloads_label} title={t.downloads_title} sub={t.downloads_sub} />
            <div className="cine-reveal cine-downloads-toolbar">
              <div className="cine-search">
                <Search size={17} aria-hidden />
                <input
                  type="search"
                  value={formQuery}
                  onChange={e => setFormQuery(e.target.value)}
                  placeholder={t.search_placeholder}
                  aria-label={t.search_placeholder}
                />
              </div>
              <div className="cine-filters" role="group" aria-label="Filter">
                <button className={formFilter === 'all' ? 'active' : ''} onClick={() => setFormFilter('all')}>{t.filter_all}</button>
                {formCategories.map(c => (
                  <button key={c} className={formFilter === c ? 'active' : ''} onClick={() => setFormFilter(c)}>{c}</button>
                ))}
              </div>
            </div>
            <div className="cine-downloads-grid">
              {filteredForms.map((f, i) => (
                <article key={f.title} className="cine-reveal cine-download-card" style={{ transitionDelay: `${i * 70}ms` }}>
                  <div className="cine-download-icon"><FileText size={22} aria-hidden /></div>
                  <div className="cine-download-meta">
                    <h3>{f.title}</h3>
                    <span>{f.cat}</span>
                  </div>
                  <button className="cine-btn cine-btn-gold cine-btn-sm" onClick={() => setNotice(t.soon_notice)}>
                    <Download size={16} aria-hidden /> {t.download_btn}
                  </button>
                </article>
              ))}
              {filteredForms.length === 0 && <p className="cine-empty">{t.no_results}</p>}
            </div>
          </section>

          {/* 8. FAQ */}
          <section id="faq" className="cine-section">
            <SectionHead label={t.faq_label} title={t.faq_title} sub={t.faq_sub} />
            <div className="cine-reveal cine-search cine-search-wide">
              <Search size={17} aria-hidden />
              <input
                type="search"
                value={faqQuery}
                onChange={e => setFaqQuery(e.target.value)}
                placeholder={t.faq_search}
                aria-label={t.faq_search}
              />
            </div>
            <div className="cine-faq">
              {filteredFaq.map((item) => {
                const realIndex = t.faq.indexOf(item)
                const isOpen = openFaq === realIndex
                return (
                  <div key={item.q} className={`cine-reveal cine-faq-item${isOpen ? ' open' : ''}`}>
                    <button
                      className="cine-faq-q"
                      onClick={() => setOpenFaq(isOpen ? -1 : realIndex)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${realIndex}`}
                    >
                      <span>{item.q}</span>
                      <ChevronDown className="cine-acc-chevron" size={18} aria-hidden />
                    </button>
                    <div id={`faq-${realIndex}`} className="cine-faq-a" role="region">
                      <p>{item.a}</p>
                    </div>
                  </div>
                )
              })}
              {filteredFaq.length === 0 && <p className="cine-empty">{t.no_results}</p>}
            </div>
          </section>

          {/* 9. CONTACT */}
          <section id="contact" className="cine-section">
            <SectionHead label={t.contact_label} title={t.contact_title} sub={t.contact_sub} />
            <div className="cine-contact">
              <div className="cine-reveal cine-contact-info">
                <div className="cine-contact-row">
                  <span className="cine-contact-ic"><MapPin size={18} aria-hidden /></span>
                  <div><span className="cine-contact-label">{t.contact_addr_label}</span><p>{t.contact_addr}</p></div>
                </div>
                <div className="cine-contact-row">
                  <span className="cine-contact-ic"><Phone size={18} aria-hidden /></span>
                  <div><span className="cine-contact-label">{t.contact_phone_label}</span><p><a href={`tel:${t.contact_phone.replace(/\s/g, '')}`}>{t.contact_phone}</a></p></div>
                </div>
                <div className="cine-contact-row">
                  <span className="cine-contact-ic"><Mail size={18} aria-hidden /></span>
                  <div><span className="cine-contact-label">{t.contact_email_label}</span><p><a href={`mailto:${t.contact_email}`}>{t.contact_email}</a></p></div>
                </div>
              </div>
              <div className="cine-reveal cine-contact-cta">
                <h3>{t.contact_cta_title}</h3>
                <p>{t.contact_cta_desc}</p>
                <a className="cine-btn cine-btn-gold" href={`mailto:${t.contact_email}`}>
                  {t.contact_cta_btn} <ArrowRight size={18} aria-hidden />
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* TOAST NOTICE */}
      <div className={`cine-toast${notice ? ' show' : ''}`} role="status" aria-live="polite">
        {notice}
      </div>
    </div>
  )
}

function SectionHead({ label, title, sub }: { label: string; title: string; sub: string }) {
  return (
    <div className="cine-reveal cine-section-head">
      <span className="cine-section-label">{label}</span>
      <h2 className="cine-section-title">{title}</h2>
      {sub && <p className="cine-section-sub">{sub}</p>}
    </div>
  )
}
