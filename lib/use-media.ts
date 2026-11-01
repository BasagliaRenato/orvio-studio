'use client'

import { useSyncExternalStore } from 'react'

function subscribeTo(query: string) {
  return (callback: () => void) => {
    const mql = window.matchMedia(query)
    mql.addEventListener('change', callback)
    return () => mql.removeEventListener('change', callback)
  }
}

export function useMediaQuery(query: string, serverValue = false) {
  return useSyncExternalStore(
    subscribeTo(query),
    () => window.matchMedia(query).matches,
    () => serverValue,
  )
}

/** Large pointer-driven screens, where scroll-linked effects are allowed. */
export function useRichMotion() {
  const desktop = useMediaQuery('(min-width: 1024px)')
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)')
  return desktop && !reduced
}
