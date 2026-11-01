'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { useRichMotion } from '@/lib/use-media'

export const EASE_OUT = [0.16, 1, 0.3, 1] as const

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'li' | 'section' | 'figure' | 'p'
}

/** Section entrance: opacity + small lift, once, when scrolled into view. */
export function Reveal({ children, className, delay = 0, y = 20, as = 'div' }: RevealProps) {
  const Component = motion[as]
  return (
    <Component
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.7, delay, ease: EASE_OUT }}
    >
      {children}
    </Component>
  )
}

type LineRevealProps = {
  lines: React.ReactNode[]
  className?: string
  lineClassName?: string | ((index: number) => string)
  delay?: number
  stagger?: number
  trigger?: 'mount' | 'view'
}

/** Masked line-by-line typography reveal. */
export function LineReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.08,
  trigger = 'view',
}: LineRevealProps) {
  const animateProps =
    trigger === 'mount'
      ? { animate: { y: '0%' } }
      : { whileInView: { y: '0%' }, viewport: { once: true, margin: '0px 0px -10% 0px' } }

  return (
    <span className={cn('block', className)}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={cn(
            'block overflow-hidden pt-[0.08em] pb-[0.12em] -mt-[0.08em] -mb-[0.12em] leading-[1.05]',
            typeof lineClassName === 'function' ? lineClassName(i) : lineClassName,
          )}
        >
          <motion.span
            data-reveal=""
            className="block will-change-transform"
            initial={{ y: '108%' }}
            {...animateProps}
            transition={{ duration: 0.8, delay: delay + i * stagger, ease: EASE_OUT }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/** Scroll-linked reframing for media inside a fixed container (desktop only). */
export function Reframe({
  children,
  className,
  strength = 6,
}: {
  children: React.ReactNode
  className?: string
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const rich = useRichMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.08, 1.14])

  return (
    <div ref={ref} className={cn('relative h-full w-full overflow-hidden', className)}>
      <motion.div className="h-full w-full" style={rich ? { y, scale } : undefined}>
        {children}
      </motion.div>
    </div>
  )
}
