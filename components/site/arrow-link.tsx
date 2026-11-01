import Link from 'next/link'
import { cn } from '@/lib/utils'

type Direction = 'right' | 'down' | 'left' | 'up-right' | 'up'

export function Arrow({ direction = 'right', className }: { direction?: Direction; className?: string }) {
  const rotate = { right: 0, down: 90, left: 180, 'up-right': -45, up: -90 }[direction]
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn('size-[0.9em] shrink-0', className)}
      style={{ rotate: `${rotate}deg` }}
    >
      <path d="M1 8h13M9 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

const shift: Record<Direction, string> = {
  right: 'group-hover:translate-x-1 group-focus-visible:translate-x-1',
  down: 'group-hover:translate-y-1 group-focus-visible:translate-y-1',
  left: 'group-hover:-translate-x-1 group-focus-visible:-translate-x-1',
  'up-right': 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
  up: 'group-hover:-translate-y-1 group-focus-visible:-translate-y-1',
}

export function ArrowLink({
  href,
  children,
  direction = 'right',
  className,
  arrowFirst = false,
  ...rest
}: {
  href: string
  children: React.ReactNode
  direction?: Direction
  className?: string
  arrowFirst?: boolean
} & Omit<React.ComponentProps<typeof Link>, 'href'>) {
  const arrow = (
    <span className={cn('inline-flex transition-transform duration-500 ease-out-expo', shift[direction])}>
      <Arrow direction={direction} />
    </span>
  )
  return (
    <Link href={href} className={cn('group inline-flex items-center gap-2', className)} {...rest}>
      {arrowFirst && arrow}
      <span className="link-line pb-0.5">{children}</span>
      {!arrowFirst && arrow}
    </Link>
  )
}
