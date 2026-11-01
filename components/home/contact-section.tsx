'use client'

import { LineReveal, Reveal } from '@/components/motion/primitives'
import { useLanguage } from '@/components/providers/language-provider'
import { sectionIds } from '@/lib/navigation'
import { siteConfig } from '@/lib/site-config'
import { ContactForm } from './contact-form'

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section
      id={sectionIds.contact}
      aria-labelledby="contact-title"
      data-nav-theme="dark"
      className="bg-cobalt py-24 text-ivory md:py-32"
    >
      <div className="mx-auto grid max-w-[1600px] gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-6">
        <div className="flex flex-col justify-between gap-12 lg:col-span-6">
          <div>
            <p className="font-meta mb-8">
              <span aria-hidden="true">(05) </span>
              {t.contact.label}
            </p>
            <h2
              id="contact-title"
              className="font-display text-[clamp(2.5rem,6vw,5.75rem)] font-medium leading-[0.92]"
            >
              <LineReveal
                lines={t.contact.title}
                lineClassName={(i) => (i === 2 ? 'font-serif font-light italic tracking-[-0.03em]' : '')}
              />
            </h2>
          </div>
          <Reveal className="flex flex-col gap-6">
            <p className="max-w-md text-lg leading-snug text-pretty">{t.contact.intro}</p>
            <div className="border-t border-ivory/30 pt-4">
              <p className="font-meta mb-2 opacity-70">{t.contact.emailLabel}</p>
              {siteConfig.contactEmail ? (
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="link-line-static font-display text-2xl font-medium md:text-3xl"
                >
                  {siteConfig.contactEmail}
                </a>
              ) : (
                <p className="text-lg opacity-80">{t.contact.emailPending}</p>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-6">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
