'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/components/providers/language-provider'
import { getNavItems, sectionIds } from '@/lib/navigation'
import { cn } from '@/lib/utils'
import { Arrow } from './arrow-link'
import { LanguageSwitch } from './language-switch'
import { MobileMenu } from './mobile-menu'
import { Wordmark } from './wordmark'

const PROBE_Y = 30

export function SiteHeader() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setScrolled(window.scrollY > 24)
      const darkSections = document.querySelectorAll<HTMLElement>('[data-nav-theme="dark"]')
      let isDark = false
      darkSections.forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.top <= PROBE_Y && r.bottom >= PROBE_Y) isDark = true
      })
      setDark(isDark)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [pathname])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    menuButtonRef.current?.focus()
  }, [])

  const items = getNavItems(t)

  return (
    <>
      <header
        data-scrolled={scrolled}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
          dark ? 'text-ivory' : 'text-ink',
          scrolled && (dark ? 'bg-ink/95' : 'bg-ivory/95'),
        )}
      >
        <div
          className={cn(
            'mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 transition-[height] duration-500 ease-out-expo md:px-8',
            scrolled ? 'h-14' : 'h-16 md:h-20',
          )}
        >
          <Link href="/" aria-label={t.nav.home} className="-m-2 p-2">
            <Wordmark />
          </Link>

          <nav aria-label={t.nav.label} className="hidden lg:block">
            <ul className="flex items-center gap-8 text-sm">
              {items.map((item, i) => (
                <li key={item.href}>
                  <Link href={item.href} className="group inline-flex items-baseline gap-1.5">
                    <span className="font-meta text-[0.625rem] opacity-50" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="link-line">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <LanguageSwitch className="hidden sm:flex" />
            <Link
              href={`/#${sectionIds.contact}`}
              className={cn(
                'group hidden items-center gap-2 text-sm sm:inline-flex',
                dark ? 'text-cobalt-bright' : 'text-cobalt',
              )}
            >
              <span className="link-line">{t.nav.cta}</span>
              <span className="inline-flex transition-transform duration-500 ease-out-expo group-hover:translate-x-1">
                <Arrow />
              </span>
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
              onClick={() => setMenuOpen(true)}
              className="-mr-2 flex min-h-11 items-center gap-2.5 px-2 lg:hidden"
            >
              <span className="font-meta">{t.nav.menuTitle}</span>
              <span aria-hidden="true" className="flex w-5 flex-col gap-[5px]">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-3/5 self-end bg-current" />
              </span>
            </button>
          </div>
        </div>
        <div
          aria-hidden="true"
          className={cn('h-px w-full bg-current transition-opacity duration-500', scrolled ? 'opacity-15' : 'opacity-0')}
        />
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} items={items} />
    </>
  )
}
