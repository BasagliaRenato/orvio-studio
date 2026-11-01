import { cn } from '@/lib/utils'

export type VisualProps = {
  label: string
  /** Fill the parent instead of keeping an intrinsic aspect ratio. */
  fill?: boolean
  priority?: boolean
  className?: string
}

/**
 * Container for brand compositions. Exposed to assistive tech as a single image;
 * children use container-query units so the artwork scales as one piece.
 */
export function Frame({
  label,
  fill,
  ratio,
  className,
  style,
  children,
}: {
  label: string
  fill?: boolean
  ratio: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn('@container relative w-full overflow-hidden', fill && 'h-full', className)}
      style={{ ...(fill ? {} : { aspectRatio: ratio }), ...style }}
    >
      {children}
    </div>
  )
}
