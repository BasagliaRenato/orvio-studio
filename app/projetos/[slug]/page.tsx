import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CaseStudy } from '@/components/case-study/case-study'
import { getProject, projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.name} — ${project.sector.pt}`,
    description: project.description.pt,
    openGraph: { title: project.name, description: project.description.pt },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!getProject(slug)) notFound()
  return <CaseStudy slug={slug} />
}
