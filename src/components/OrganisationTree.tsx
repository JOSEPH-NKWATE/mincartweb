import { ChevronDown, Film, Landmark, Network, ShieldCheck } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import type { Language } from '@/lib/language'

interface TreeNodeProps {
  title: string
  subtitle?: string
  children?: ReactNode
  tone?: 'root' | 'minister' | 'branch' | 'dcpa'
  defaultOpen?: boolean
}

function TreeNode({ title, subtitle, children, tone = 'branch', defaultOpen = false }: TreeNodeProps) {
  const [open, setOpen] = useState(defaultOpen)
  const expandable = Boolean(children)

  return (
    <div className={`org-node org-node--${tone}${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="org-node-card"
        onClick={() => expandable && setOpen(value => !value)}
        aria-expanded={expandable ? open : undefined}
      >
        <span className="org-node-icon" aria-hidden="true">
          {tone === 'root' ? <Landmark size={24} /> : tone === 'dcpa' ? <Film size={21} /> : tone === 'minister' ? <ShieldCheck size={21} /> : <Network size={20} />}
        </span>
        <span className="org-node-copy">
          <strong>{title}</strong>
          {subtitle && <small>{subtitle}</small>}
        </span>
        {expandable && <ChevronDown className="org-node-chevron" size={20} aria-hidden="true" />}
      </button>
      {expandable && (
        <div className="org-node-children" hidden={!open}>
          <div className="org-node-children-inner">{children}</div>
        </div>
      )}
    </div>
  )
}

const treeCopy = {
  fr: {
    minac: 'MINISTÈRE DES ARTS ET DE LA CULTURE', republic: 'République du Cameroun', minister: 'Ministre', privateOffice: 'Secrétariat particulier', advisers: 'Conseillers techniques', inspection: 'Inspection Générale', central: 'Administration centrale', centralStructures: 'Directions et structures centrales', dcpa: 'Direction de la Cinématographie et des Productions Audiovisuelles', cinemaStandards: 'Sous-Direction de la Cinématographie, des Normes et des Contrôles', cinemaService: 'Service de la Cinématographie et de l’Audiovisuel', standardsService: 'Service des Normes et des Contrôles', audiovisual: 'Sous-Direction de l’Audiovisuel', archiveService: 'Service de la Cinémathèque et des Projections', statisticsService: 'Service des Statistiques du Fichier Vidéo et Audiovisuel', decentralised: 'Services déconcentrés', affiliated: 'Services rattachés', minacLabel: 'Organigramme interactif du MINAC', dcpaLabel: 'Organisation interne de la DCPA',
  },
  en: {
    minac: 'MINISTRY OF ARTS AND CULTURE', republic: 'Republic of Cameroon', minister: 'Minister', privateOffice: 'Private Office', advisers: 'Technical Advisers', inspection: 'General Inspectorate', central: 'Central Administration', centralStructures: 'Central Directorates and Structures', dcpa: 'Directorate of Cinematography and Audiovisual Productions', cinemaStandards: 'Sub-Directorate of Cinematography, Standards and Controls', cinemaService: 'Cinematography and Audiovisual Service', standardsService: 'Standards and Controls Service', audiovisual: 'Sub-Directorate of Audiovisual Affairs', archiveService: 'Film Library and Screening Service', statisticsService: 'Video and Audiovisual Records Statistics Service', decentralised: 'Decentralised Services', affiliated: 'Affiliated Services', minacLabel: 'Interactive MINAC organisation chart', dcpaLabel: 'Internal DCPA organisation',
  },
} as const

export function MinacOrganisationTree({ language }: { language: Language }) {
  const copy = treeCopy[language]
  return (
    <div className="org-tree" aria-label={copy.minacLabel}>
      <TreeNode title={copy.minac} subtitle={copy.republic} tone="root" defaultOpen>
        <TreeNode title={copy.minister} tone="minister" defaultOpen>
          <TreeNode title={copy.privateOffice} />
          <TreeNode title={copy.advisers} />
          <TreeNode title={copy.inspection} />
          <TreeNode title={copy.central} defaultOpen>
            <TreeNode title={copy.centralStructures} defaultOpen>
              <TreeNode
                title={copy.dcpa}
                subtitle="DCPA"
                tone="dcpa"
                defaultOpen
              >
                <TreeNode title={copy.cinemaStandards}>
                  <TreeNode title={copy.cinemaService} />
                  <TreeNode title={copy.standardsService} />
                </TreeNode>
                <TreeNode title={copy.audiovisual}>
                  <TreeNode title={copy.archiveService} />
                  <TreeNode title={copy.statisticsService} />
                </TreeNode>
              </TreeNode>
            </TreeNode>
          </TreeNode>
          <TreeNode title={copy.decentralised} />
          <TreeNode title={copy.affiliated} />
        </TreeNode>
      </TreeNode>
    </div>
  )
}

export function DcpaOrganisationTree({ language }: { language: Language }) {
  const copy = treeCopy[language]
  return (
    <div className="org-tree org-tree--dcpa" aria-label={copy.dcpaLabel}>
      <TreeNode title={copy.dcpa} subtitle="DCPA" tone="dcpa" defaultOpen>
        <TreeNode title={copy.cinemaStandards} defaultOpen>
          <TreeNode title={copy.cinemaService} />
          <TreeNode title={copy.standardsService} />
        </TreeNode>
        <TreeNode title={copy.audiovisual} defaultOpen>
          <TreeNode title={copy.archiveService} />
          <TreeNode title={copy.statisticsService} />
        </TreeNode>
      </TreeNode>
    </div>
  )
}
