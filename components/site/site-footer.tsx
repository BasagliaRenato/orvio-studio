'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/providers/language-provider'
import { getNavItems } from '@/lib/navigation'
import { siteConfig } from '@/lib/site-config'
import { Arrow } from './arrow-link'
import { LanguageSwitch } from './language-switch'
import { LocalTime } from './local-time'

export function SiteFooter() {
  const { t, locale } = useLanguage()
  const items = getNavItems(t)
  const year = new Date().getFullYear()

  return (
    <footer data-nav-theme="dark" className="theme-dark overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-5 pt-16 md:px-8 md:pt-24">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-rule pt-8 md:grid-cols-12">
          <nav aria-label={t.footer.nav} className="col-span-1 md:col-span-3">
            <h2 className="font-meta mb-4 opacity-60">{t.footer.nav}</h2>
            <ul className="flex flex-col gap-2 text-sm">
              {items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-line">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-1 md:col-span-3">
            <h2 className="font-meta mb-4 opacity-60">{t.contact.emailLabel}</h2>
            {siteConfig.contactEmail ? (
              <a href={`mailto:${siteConfig.contactEmail}`} className="link-line text-sm">
                {siteConfig.contactEmail}
              </a>
            ) : (
              <p className="text-sm opacity-80">{t.contact.emailPending}</p>
            )}
          </div>

          <div className="col-span-1 md:col-span-3">
            <h2 className="font-meta mb-4 opacity-60">{t.footer.localTime}</h2>
            <p className="font-display text-3xl font-light [font-stretch:110%]">
              <LocalTime locale={locale} />
            </p>
            <p className="mt-2 text-xs opacity-60">{t.footer.timezone}</p>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h2 className="font-meta mb-3 opacity-60">{t.footer.language}</h2>
            <LanguageSwitch size="lg" className="-ml-3" />
          </div>
        </div>

        <p
          aria-hidden="true"
          className="font-display mt-16 select-none whitespace-nowrap text-[23.5vw] font-semibold leading-[0.78] tracking-[-0.05em] [font-stretch:125%] md:mt-24 2xl:text-[376px]"
        >
          {siteConfig.name}
        </p>

        <div className="flex flex-col gap-4 border-t border-rule py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p className="opacity-70">
            © {year} {siteConfig.studioName}. {t.footer.rights} {t.footer.note}
          </p>
          <a href="#conteudo" className="group inline-flex min-h-11 items-center gap-2 self-start md:self-auto">
            <span className="link-line">{t.footer.top}</span>
            <Arrow direction="up" className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  )
}
