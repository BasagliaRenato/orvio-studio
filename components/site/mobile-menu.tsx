'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef } from 'react'
import { EASE_OUT } from '@/components/motion/primitives'
import { useLanguage } from '@/components/providers/language-provider'
import { sectionIds } from '@/lib/navigation'
import { siteConfig } from '@/lib/site-config'
import { Arrow } from './arrow-link'
import { LanguageSwitch } from './language-switch'
import { Wordmark } from './wordmark'

type Item = { href: string; label: string }

export function MobileMenu({ open, onClose, items }: { open: boolean; onClose: () => void; items: Item[] }) {
  const { t } = useLanguage()
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusables = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [])
    requestAnimationFrame(() => focusables()[0]?.focus())

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const els = focusables()
      if (!els.length) return
      const first = els[0]
      const last = els[els.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    const closeOnDesktop = () => window.innerWidth >= 1024 && onClose()
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', closeOnDesktop)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', closeOnDesktop)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.menuTitle}
          className="fixed inset-0 z-[60] flex flex-col bg-cobalt text-ivory lg:hidden"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
        >
          <div className="flex h-16 items-center justify-between px-5 md:px-8">
            <Link href="/" onClick={onClose} aria-label={t.nav.home} className="-m-2 p-2 [&_svg]:text-ivory">
              <Wordmark />
            </Link>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.nav.menuClose}
              className="-mr-2 flex min-h-11 items-center gap-2.5 px-2"
            >
              <span className="font-meta">{t.nav.menuClose.split(' ')[0]}</span>
              <span aria-hidden="true" className="relative block size-4">
                <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav aria-label={t.nav.label} className="flex flex-1 flex-col justify-center px-5 md:px-8">
            <ul className="border-t border-ivory/25">
              {items.map((item, i) => (
                <motion.li
                  key={item.href}
                  className="border-b border-ivory/25"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.5, delay: 0.12 + i * 0.05, ease: EASE_OUT }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex min-h-16 items-baseline justify-between py-3"
                  >
                    <span className="font-display text-[clamp(2.5rem,12vw,4.5rem)] font-medium [font-stretch:90%]">
                      {item.label}
                    </span>
                    <span className="font-meta opacity-70" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            className="flex flex-col gap-6 px-5 pb-8 pt-6 md:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <Link
              href={`/#${sectionIds.contact}`}
              onClick={onClose}
              className="group inline-flex items-center gap-3 self-start text-lg"
            >
              <span className="link-line-static">{t.nav.cta}</span>
              <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <div className="flex items-end justify-between gap-4">
              <p className="font-meta opacity-80">
                {siteConfig.contactEmail ?? t.contact.emailPending}
              </p>
              <LanguageSwitch size="lg" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
