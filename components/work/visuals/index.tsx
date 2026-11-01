import type { VisualKey } from '@/lib/projects'
import type { VisualProps } from './frame'
import { AurenHome, AurenStory, AurenProjects, SableHome, SableStory, SableVisit, AtlasHome, AtlasStory, AtlasServices } from './landings'

const registry: Record<VisualKey, (props: VisualProps) => React.ReactNode> = {
  'auren-cover': AurenHome,
  'auren-story': AurenStory,
  'auren-projects': AurenProjects,
  'sable-cover': SableHome,
  'sable-story': SableStory,
  'sable-visit': SableVisit,
  'atlas-cover': AtlasHome,
  'atlas-story': AtlasStory,
  'atlas-services': AtlasServices,
}

export function Visual({ visual, ...props }: VisualProps & { visual: VisualKey }) {
  const Component = registry[visual]
  return <Component {...props} />
}
