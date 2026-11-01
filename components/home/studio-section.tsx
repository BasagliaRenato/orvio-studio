'use client'

import { LineReveal, Reveal } from '@/components/motion/primitives'
import { useLanguage } from '@/components/providers/language-provider'
import { sectionIds } from '@/lib/navigation'
import { pad } from '@/lib/projects'

export function StudioSection() {
  const { t } = useLanguage()

  return (
    <section
      id={sectionIds.studio}
      aria-labelledby="studio-title"
      data-nav-theme="dark"
      className="theme-dark py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-8">
        <p className="font-meta mb-10 md:mb-16">
          <span aria-hidden="true">(02) </span>
          {t.studio.label}
        </p>

        <h2
          id="studio-title"
          className="font-display max-w-[16ch] text-[clamp(2.25rem,6.4vw,6.25rem)] font-medium leading-[0.95] text-balance"
        >
          <LineReveal
            trigger="mount"
            lines={t.studio.statement}
            stagger={0.12}
            lineClassName={(i) => (i === 1 ? 'text-cobalt-bright' : '')}
          />
        </h2>

        <div className="mt-20 grid gap-14 md:mt-32 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-5">
            <ol className="border-t border-rule">
              {t.studio.axis.map((item, i) => (
                <li key={item.term} className="flex items-baseline justify-between gap-4 border-b border-rule py-5">
                  <span className="flex items-baseline gap-4">
                    <span className="font-meta opacity-60">{pad(i + 1)}</span>
                    <span className="font-display text-3xl font-medium md:text-4xl">{item.term}</span>
                  </span>
                  <span className="font-serif text-lg italic opacity-80">{item.role}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6 md:col-span-6 md:col-start-7">
            <p className="text-xl leading-snug text-pretty md:text-2xl">{t.studio.body[0]}</p>
            <p className="max-w-prose leading-relaxed text-pretty opacity-75">{t.studio.body[1]}</p>
            <p className="max-w-prose leading-relaxed text-pretty opacity-75">{t.studio.body[2]}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
