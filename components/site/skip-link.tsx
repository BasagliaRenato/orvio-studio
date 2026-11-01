'use client'

import { useLanguage } from '@/components/providers/language-provider'

export function SkipLink() {
  const { t } = useLanguage()
  return (
    <a
      href="#conteudo"
      className="fixed left-4 top-3 z-[100] -translate-y-20 bg-cobalt px-4 py-2 text-sm text-ivory transition-transform focus:translate-y-0"
    >
      {t.skip}
    </a>
  )
}
