'use client'

import { Reveal } from '@/components/motion/primitives'
import { useLanguage } from '@/components/providers/language-provider'
import { pad } from '@/lib/projects'

export function ProcessSection() {
  const { t } = useLanguage()

  return (
    <section aria-labelledby="process-title" className="bg-ivory-deep py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-meta mb-6">
              <span aria-hidden="true">(04) </span>
              {t.process.label}
            </p>
            <h2 id="process-title" className="font-display max-w-[14ch] text-[clamp(2.25rem,5vw,4.5rem)] font-medium text-balance">
              {t.process.title}
            </h2>
          </div>
        </div>

        <ol className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.08} className="flex flex-col gap-4 border-t border-ink pt-5">
              <span className="font-display text-6xl font-light text-cobalt [font-stretch:110%] md:text-7xl">{pad(i + 1)}</span>
              <h3 className="font-display text-2xl font-medium">{step.title}</h3>
              <p className="max-w-xs leading-relaxed text-pretty text-ink-soft">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
