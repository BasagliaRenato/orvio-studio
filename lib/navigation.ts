import type { Dictionary } from './content'

export const sectionIds = {
  work: 'projetos',
  studio: 'estudio',
  services: 'servicos',
  contact: 'contato',
} as const

export function getNavItems(t: Dictionary) {
  return [
    { href: `/#${sectionIds.work}`, label: t.nav.work },
    { href: `/#${sectionIds.studio}`, label: t.nav.studio },
    { href: `/#${sectionIds.services}`, label: t.nav.services },
    { href: `/#${sectionIds.contact}`, label: t.nav.contact },
  ]
}
