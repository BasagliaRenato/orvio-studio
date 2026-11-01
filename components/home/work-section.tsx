'use client'

import Link from 'next/link'
import { LineReveal, Reveal } from '@/components/motion/primitives'
import { useLanguage } from '@/components/providers/language-provider'
import { Arrow } from '@/components/site/arrow-link'
import { Visual } from '@/components/work/visuals'
import { sectionIds } from '@/lib/navigation'
import { pad, projects, type Project } from '@/lib/projects'
import { cn } from '@/lib/utils'

export function WorkSection() {
  const { t } = useLanguage()

  return (
    <section id={sectionIds.work} aria-labelledby="work-title" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-8">
        <div className="mb-14 grid gap-8 md:mb-24 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="font-meta mb-6">
              <span aria-hidden="true">(01) </span>
              {t.work.label}
            </p>
            <h2
              id="work-title"
              className="font-display text-[clamp(3rem,10vw,9rem)] font-medium uppercase [font-stretch:110%]"
            >
              <LineReveal
                lines={t.work.title}
                lineClassName={(i) => (i === 1 ? 'pl-[10vw] font-serif font-light normal-case italic tracking-[-0.03em] [font-stretch:100%]' : '')}
              />
            </h2>
          </div>
          <Reveal className="flex flex-col gap-4 md:col-span-4 md:pb-3">
            <p className="max-w-sm text-pretty leading-relaxed text-ink-soft">{t.work.intro}</p>
            <p className="font-meta">
              {pad(projects.length)} {t.work.total}
            </p>
          </Reveal>
        </div>

        <ol className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const { t, locale } = useLanguage()
  const reversed = index % 2 === 1
  const href = `/projetos/${project.slug}`
  const titleId = `project-${project.slug}`

  return (
    <li>
      <article aria-labelledby={titleId} className="group relative grid gap-6 md:grid-cols-12 md:gap-6">
        <Reveal className={cn('md:col-span-7', reversed && 'md:order-2 md:col-start-6')}>
          <Link href={href} aria-label={`${t.work.view}: ${project.name}`} className="group/preview relative z-10 block aspect-[4/5] overflow-hidden bg-[#d8d3c9] p-[7%] md:aspect-[5/4]">
              <div className="h-full w-full overflow-hidden border border-black/10 shadow-xl transition-transform duration-700 ease-out-expo group-hover/preview:scale-[1.025] group-focus-visible/preview:scale-[1.025] motion-reduce:transform-none">
                <Visual visual={project.cover.visual} label={project.cover.alt[locale]} fill />
              </div>
          </Link>
        </Reveal>

        <Reveal
          delay={0.1}
          className={cn(
            'flex flex-col justify-between gap-8 md:col-span-5 md:py-2',
            reversed ? 'md:order-1 md:col-span-4 md:pr-6' : 'md:pl-6',
          )}
        >
          <div className="flex items-start justify-between gap-4 border-t border-rule pt-4">
            <span className="font-meta">{pad(index + 1)}</span>
            <span className="font-meta rounded-full border border-current px-2.5 py-1 opacity-80">{t.work.concept}</span>
          </div>

          <div className="flex flex-col gap-5">
            <h3
              id={titleId}
              className="font-display text-[clamp(3.25rem,8vw,7.5rem)] font-semibold [font-stretch:125%]"
            >
              <Link href={href} className="focus-visible:outline-cobalt">
                {project.name}
              </Link>
            </h3>
            <p className="max-w-md text-xl leading-snug text-pretty">{project.tagline[locale]}</p>
          </div>

          <div className="flex flex-col gap-6">
            <dl className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="font-meta mb-1 opacity-60">{t.caseStudy.sector}</dt>
                <dd>{project.sector[locale]}</dd>
              </div>
              <div>
                <dt className="font-meta mb-1 opacity-60">{t.caseStudy.services}</dt>
                <dd>{project.services[locale].join(', ')}</dd>
              </div>
            </dl>
            <Link
              href={href}
              aria-label={`${t.work.view}: ${project.name}`}
              className="group/case inline-flex min-h-11 items-center gap-3 self-start text-cobalt"
            >
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-right-bottom bg-no-repeat transition-[background-size] duration-500 ease-out-expo group-hover/case:bg-[length:100%_1px] group-hover/case:bg-left-bottom group-focus-visible/case:bg-[length:100%_1px]">
                {t.work.view}
              </span>
              <Arrow className="transition-transform duration-500 ease-out-expo group-hover/case:translate-x-1 group-focus-visible/case:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-2 hidden rounded-sm outline-2 outline-offset-0 outline-cobalt group-has-[:focus-visible]:block"
        />
      </article>
    </li>
  )
}
