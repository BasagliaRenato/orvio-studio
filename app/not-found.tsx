'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { ArrowLink } from '@/components/site/arrow-link'

export default function NotFound() {
  const { t } = useLanguage()
  return (
    <section className="mx-auto flex min-h-[80svh] max-w-[1600px] flex-col justify-end gap-8 px-5 pb-16 pt-32 md:px-8">
      <p className="font-meta">404</p>
      <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-medium uppercase">{t.notFound.title}</h1>
      <p className="max-w-md text-lg text-ink-soft">{t.notFound.body}</p>
      <ArrowLink href="/" className="min-h-11 self-start text-cobalt">
        {t.notFound.cta}
      </ArrowLink>
    </section>
  )
}
