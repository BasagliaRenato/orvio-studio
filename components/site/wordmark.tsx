import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

/** Studio wordmark: name set wide, with a small registration mark that echoes the framing language. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <svg viewBox="0 0 12 12" aria-hidden="true" className="size-3 text-cobalt">
        <path d="M0 6h12M6 0v12" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="6" cy="6" r="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="font-display text-[1.05rem] font-semibold leading-none tracking-[0.02em] [font-stretch:125%]">
        {siteConfig.name}
      </span>
    </span>
  )
}
