'use client'

import { MotionConfig } from 'motion/react'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { dictionaries, type Dictionary, type Locale } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'

const STORAGE_KEY = 'orvio-locale'

type LanguageContextValue = {
  locale: Locale
  t: Dictionary
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(siteConfig.defaultLocale)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'pt' || stored === 'en') setLocaleState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en'
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const value = useMemo(() => ({ locale, t: dictionaries[locale], setLocale }), [locale, setLocale])

  return (
    <LanguageContext.Provider value={value}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
