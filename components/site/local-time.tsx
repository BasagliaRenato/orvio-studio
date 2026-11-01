'use client'

import { useEffect, useState } from 'react'
import { siteConfig } from '@/lib/site-config'

export function LocalTime({ locale }: { locale: 'pt' | 'en' }) {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = window.setInterval(() => setNow(new Date()), 15_000)
    return () => window.clearInterval(id)
  }, [])

  const formatted = now
    ? new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: siteConfig.timeZone,
      }).format(now)
    : '--:--'

  return (
    <time dateTime={now?.toISOString()} className="tabular-nums" suppressHydrationWarning>
      {formatted}
    </time>
  )
}
