'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { EASE_OUT, LineReveal } from '@/components/motion/primitives'
import { useLanguage } from '@/components/providers/language-provider'
import { Arrow } from '@/components/site/arrow-link'
import { Visual } from '@/components/work/visuals'
import { sectionIds } from '@/lib/navigation'
import { pad, projects } from '@/lib/projects'

export function Hero() {
  const { t, locale } = useLanguage()
  const featured = projects[1]
  const [first, second] = t.hero.lines

  const lines = [
    <span key="a">{first[0]}</span>,
    <span key="b" className="font-serif font-light italic tracking-[-0.03em] text-cobalt">
      {first[1]}
    </span>,
    <span key="c">{second[0]}</span>,
    <span key="d" className="font-serif font-light italic tracking-[-0.03em] text-cobalt">
      {second[1]}
    </span>,
  ]

  return (
    <section aria-labelledby="hero-title" className="relative">
      <div className="mx-auto flex min-h-svh max-w-[1600px] flex-col justify-between gap-12 px-5 pb-8 pt-28 md:px-8 md:pt-36">
        <div>
          <motion.p
            data-reveal=""
            className="font-meta mb-6 flex items-center gap-3 md:mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span aria-hidden="true" className="block h-px w-8 bg-current" />
            {t.hero.eyebrow}
          </motion.p>

          <h1
            id="hero-title"
            key={locale}
            className="font-display text-[clamp(2.75rem,12.2vw,11rem)] font-medium uppercase leading-[0.86] [font-stretch:100%]"
          >
            <LineReveal
              trigger="mount"
              delay={0.15}
              stagger={0.09}
              lines={lines}
              lineClassName={(i) =>
                i % 2 === 1 ? 'pl-[14vw] normal-case md:pl-[24vw] lg:pl-[30vw]' : ''
              }
            />
          </h1>
        </div>

        <motion.div
          data-reveal=""
          className="grid gap-8 border-t border-rule pt-6 md:grid-cols-12 md:gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE_OUT }}
        >
          <div className="flex flex-col gap-6 md:col-span-5">
            <p className="max-w-sm text-lg leading-snug text-pretty md:text-xl">{t.hero.supporting}</p>
            <Link
              href={`#${sectionIds.work}`}
              className="group inline-flex min-h-11 items-center gap-3 self-start text-cobalt"
            >
              <span className="link-line-static">{t.hero.cta}</span>
              <Arrow direction="down" className="transition-transform duration-500 ease-out-expo group-hover:translate-y-1" />
            </Link>
          </div>

          <p className="font-meta self-end md:col-span-4">{t.hero.disciplines}</p>

          <Link
            href={`/projetos/${featured.slug}`}
            className="group hidden items-end gap-4 justify-self-end md:col-span-3 md:flex"
          >
            <span className="flex flex-col items-end gap-1 text-right">
              <span className="font-meta opacity-60">{t.hero.featured}</span>
              <span className="link-line font-display text-lg font-semibold [font-stretch:115%]">
                {featured.name}
              </span>
              <span className="font-meta opacity-60">{pad(2)}</span>
            </span>
            <span className="block w-28 overflow-hidden lg:w-36">
              <span className="block transition-transform duration-700 ease-out-expo group-hover:scale-105">
                <Visual visual={featured.cover.visual} label={featured.cover.alt[locale]} />
              </span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
