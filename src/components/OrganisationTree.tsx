import { ChevronDown, Film, Landmark, Network, ShieldCheck } from 'lucide-react'
import { useState, type ReactNode } from 'react'

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

export function MinacOrganisationTree() {
  return (
    <div className="org-tree" aria-label="Organigramme interactif du MINAC">
      <TreeNode title="MINISTÈRE DES ARTS ET DE LA CULTURE" subtitle="République du Cameroun" tone="root" defaultOpen>
        <TreeNode title="Ministre" tone="minister" defaultOpen>
          <TreeNode title="Secrétariat particulier" />
          <TreeNode title="Conseillers techniques" />
          <TreeNode title="Inspection Générale" />
          <TreeNode title="Administration centrale" defaultOpen>
            <TreeNode title="Directions et structures centrales" defaultOpen>
              <TreeNode
                title="Direction de la Cinématographie et des Productions Audiovisuelles"
                subtitle="DCPA"
                tone="dcpa"
                defaultOpen
              >
                <TreeNode title="Sous-Direction de la Cinématographie, des Normes et des Contrôles">
                  <TreeNode title="Service de la Cinématographie et de l’Audiovisuel" />
                  <TreeNode title="Service des Normes et des Contrôles" />
                </TreeNode>
                <TreeNode title="Sous-Direction de l’Audiovisuel">
                  <TreeNode title="Service de la Cinémathèque et des Projections" />
                  <TreeNode title="Service des Statistiques du Fichier Vidéo et Audiovisuel" />
                </TreeNode>
              </TreeNode>
            </TreeNode>
          </TreeNode>
          <TreeNode title="Services déconcentrés" />
          <TreeNode title="Services rattachés" />
        </TreeNode>
      </TreeNode>
    </div>
  )
}

export function DcpaOrganisationTree() {
  return (
    <div className="org-tree org-tree--dcpa" aria-label="Organisation interne de la DCPA">
      <TreeNode title="Direction de la Cinématographie et des Productions Audiovisuelles" subtitle="DCPA" tone="dcpa" defaultOpen>
        <TreeNode title="Sous-Direction de la Cinématographie, des Normes et des Contrôles" defaultOpen>
          <TreeNode title="Service de la Cinématographie et de l’Audiovisuel" />
          <TreeNode title="Service des Normes et des Contrôles" />
        </TreeNode>
        <TreeNode title="Sous-Direction de l’Audiovisuel" defaultOpen>
          <TreeNode title="Service de la Cinémathèque et des Projections" />
          <TreeNode title="Service des Statistiques du Fichier Vidéo et Audiovisuel" />
        </TreeNode>
      </TreeNode>
    </div>
  )
}

