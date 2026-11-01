'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { EASE_OUT, LineReveal, Reveal } from '@/components/motion/primitives'
import { useLanguage } from '@/components/providers/language-provider'
import { Arrow, ArrowLink } from '@/components/site/arrow-link'
import { Visual } from '@/components/work/visuals'
import { sectionIds } from '@/lib/navigation'
import { getNextProject, getProject, pad, projectIndex, projects, type GalleryItem } from '@/lib/projects'
import { cn } from '@/lib/utils'

const spanClass: Record<GalleryItem['span'], string> = {
  full: 'md:col-span-12',
  wide: 'md:col-span-8',
  narrow: 'md:col-span-4',
  half: 'md:col-span-6',
}

export function CaseStudy({ slug }: { slug: string }) {
  const { t, locale } = useLanguage()
  const project = getProject(slug)!
  const next = getNextProject(slug)
  const index = projectIndex(slug)
  const c = t.caseStudy

  return (
    <article aria-labelledby="case-title">
      <header
        data-nav-theme="dark"
        className="pt-24 md:pt-32"
        style={{ background: project.theme.bg, color: project.theme.fg }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-8">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 md:mb-16">
            <ArrowLink href={`/#${sectionIds.work}`} direction="left" arrowFirst className="font-meta min-h-11">
              {c.back}
            </ArrowLink>
            <span className="font-meta">
              {c.project} {pad(index)} {c.of} {pad(projects.length)}
            </span>
          </div>

          <h1
            id="case-title"
            key={locale}
            className="font-display text-[clamp(4.5rem,19vw,17rem)] font-semibold leading-[0.8] [font-stretch:125%]"
          >
            <LineReveal trigger="mount" lines={[project.name]} delay={0.1} />
          </h1>

          <motion.div
            data-reveal=""
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASE_OUT }}
            className="mt-10 grid gap-8 border-t pb-12 pt-6 md:grid-cols-12 md:gap-6 md:pb-20"
            style={{ borderColor: `${project.theme.fg}33` }}
          >
            <p className="font-serif text-2xl leading-snug text-pretty md:col-span-6 md:text-3xl">
              {project.tagline[locale]}
            </p>
            <dl className="grid grid-cols-2 gap-6 text-sm md:col-span-5 md:col-start-8 md:grid-cols-3">
              <div>
                <dt className="font-meta mb-2 opacity-60">{c.sector}</dt>
                <dd>{project.sector[locale]}</dd>
              </div>
              <div>
                <dt className="font-meta mb-2 opacity-60">{c.services}</dt>
                <dd>
                  <ul>
                    {project.services[locale].map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="font-meta mb-2 opacity-60">{c.status}</dt>
                <dd>{c.concept}</dd>
              </div>
            </dl>
          </motion.div>
        </div>

        <div className="mx-auto max-w-[1600px] px-5 pb-5 md:px-8 md:pb-8">
          <div className="relative aspect-[4/5] bg-[#d8d3c9] p-[6%] md:aspect-[16/10]">
            <div className="h-full overflow-hidden border border-black/10 shadow-2xl">
              <Visual visual={project.cover.visual} label={project.cover.alt[locale]} fill priority />
            </div>
          </div>
        </div>
      </header>

      <section aria-labelledby="challenge-title" className="py-20 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 md:grid-cols-12 md:gap-6 md:px-8">
          <Reveal className="md:col-span-3">
            <p className="font-meta flex items-start gap-3 border border-rule p-4 leading-relaxed normal-case tracking-normal">
              <span aria-hidden="true" className="mt-1 block size-2 shrink-0 rounded-full" style={{ background: project.theme.accent }} />
              <span className="text-xs text-ink-soft">{c.conceptNote}</span>
            </p>
          </Reveal>
          <div className="flex flex-col gap-16 md:col-span-8 md:col-start-5">
            <Reveal>
              <h2 id="challenge-title" className="font-meta mb-5">
                {c.challenge}
              </h2>
              <p className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-normal leading-[1.08] tracking-[-0.02em] text-pretty">
                {project.challenge[locale]}
              </p>
            </Reveal>
            <Reveal>
              <h2 className="font-meta mb-5">{c.approach}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {project.approach[locale].map((p) => (
                  <p key={p.slice(0, 24)} className="leading-relaxed text-pretty text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="applications-title" className="pb-20 md:pb-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-8">
          <h2 id="applications-title" className="font-meta mb-6 border-t border-rule pt-4">
            {c.applications}
          </h2>
          <ul className="grid gap-x-5 gap-y-10 md:grid-cols-12 md:gap-y-16">
            {project.gallery.map((item, i) => (
              <Reveal as="li" key={item.visual} className={cn(spanClass[item.span])}>
                <figure>
                  <figcaption className="mb-6 grid gap-4 border-t border-rule pt-5 md:grid-cols-12 md:gap-6">
                    <div className="flex items-baseline gap-4 md:col-span-5">
                      <span className="font-meta text-cobalt">{pad(i + 1)}</span>
                      <h3 className="font-display text-2xl font-medium leading-tight md:text-3xl">{item.caption[locale]}</h3>
                    </div>
                    <p className="max-w-prose leading-relaxed text-ink-soft md:col-span-6 md:col-start-7">{item.description[locale]}</p>
                  </figcaption>
                  <div className="border border-black/10 bg-[#d8d3c9] p-3 md:p-8">
                    <Visual visual={item.visual} label={item.alt[locale]} />
                  </div>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <NextProject slug={next.slug} />
    </article>
  )
}

function NextProject({ slug }: { slug: string }) {
  const { t, locale } = useLanguage()
  const project = getProject(slug)!

  return (
    <section aria-label={t.caseStudy.next} data-nav-theme="dark" style={{ background: project.theme.bg, color: project.theme.fg }}>
      <Link href={`/projetos/${project.slug}`} className="group block focus-visible:outline-offset-[-6px]">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-16 md:grid-cols-12 md:items-end md:gap-6 md:px-8 md:py-24">
          <div className="md:col-span-8">
            <p className="font-meta mb-6 flex items-center gap-3">
              {t.caseStudy.next}
              <Arrow className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
            </p>
            <p className="font-display text-[clamp(4rem,14vw,12rem)] font-semibold leading-[0.8] [font-stretch:125%]">
              {project.name}
            </p>
            <p className="mt-6 max-w-md text-lg leading-snug opacity-80">{project.tagline[locale]}</p>
          </div>
          <div className="hidden bg-[#d8d3c9] p-4 md:col-span-3 md:col-start-10 md:block">
            <div className="overflow-hidden border border-black/10 shadow-lg">
              <Visual visual={project.cover.visual} label={project.cover.alt[locale]} />
            </div>
          </div>
        </div>
      </Link>
    </section>
  )
}
