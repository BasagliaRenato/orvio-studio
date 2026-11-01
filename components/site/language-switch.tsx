'use client'

import { useLanguage } from '@/components/providers/language-provider'
import { locales } from '@/lib/content'
import { cn } from '@/lib/utils'

export function LanguageSwitch({ className, size = 'sm' }: { className?: string; size?: 'sm' | 'lg' }) {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div role="group" aria-label={t.language.label} className={cn('flex items-center font-meta', className)}>
      {locales.map((l, i) => {
        const active = l === locale
        return (
          <span key={l} className="flex items-center">
            {i > 0 && (
              <span aria-hidden="true" className="px-1 opacity-40">
                /
              </span>
            )}
            <button
              type="button"
              lang={l === 'pt' ? 'pt-BR' : 'en'}
              aria-label={t.language[l]}
              aria-pressed={active}
              onClick={() => setLocale(l)}
              className={cn(
                'relative inline-flex items-center justify-center transition-opacity duration-300',
                size === 'lg' ? 'min-h-11 min-w-11 text-sm' : 'min-h-8 min-w-8',
                active ? 'opacity-100' : 'opacity-50 hover:opacity-100',
              )}
            >
              {l.toUpperCase()}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute inset-x-2 bottom-1 h-px origin-left bg-current transition-transform duration-500 ease-out-expo',
                  active ? 'scale-x-100' : 'scale-x-0',
                )}
              />
            </button>
          </span>
        )
      })}
    </div>
  )
}
