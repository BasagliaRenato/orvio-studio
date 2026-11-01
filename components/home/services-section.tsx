'use client'

import { Reveal } from '@/components/motion/primitives'
import { useLanguage } from '@/components/providers/language-provider'
import { sectionIds } from '@/lib/navigation'
import { pad } from '@/lib/projects'

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id={sectionIds.services} aria-labelledby="services-title" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-8">
        <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="font-meta mb-6">
              <span aria-hidden="true">(03) </span>
              {t.services.label}
            </p>
            <h2
              id="services-title"
              className="font-display text-[clamp(2.75rem,7vw,6.5rem)] font-medium uppercase [font-stretch:110%]"
            >
              {t.services.title}
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-pretty text-ink-soft md:col-span-4 md:col-start-9 md:pb-2">
            {t.services.intro}
          </p>
        </div>

        <ol className="border-t border-ink">
          {t.services.items.map((service, i) => (
            <Reveal as="li" key={service.title} className="group border-b border-rule">
              <div className="grid gap-6 py-8 md:grid-cols-12 md:gap-6 md:py-12">
                <span className="font-meta pt-2 md:col-span-1">{pad(i + 1)}</span>
                <div className="flex flex-col gap-4 md:col-span-5">
                  <h3 className="font-display text-[clamp(1.875rem,3.6vw,3.25rem)] font-medium leading-[0.95] transition-colors duration-500 group-hover:text-cobalt">
                    {service.title}
                  </h3>
                  <p className="max-w-sm leading-relaxed text-pretty text-ink-soft">{service.summary}</p>
                </div>
                <div className="md:col-span-5 md:col-start-8">
                  <h4 className="font-meta mb-4 text-ink-soft">{t.services.deliverables}</h4>
                  <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex gap-2.5 text-sm leading-snug">
                        <span aria-hidden="true" className="mt-[0.45em] block size-1 shrink-0 bg-cobalt" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
