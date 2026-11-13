'use client'

import { useMemo } from 'react'
import { formatElapsedTime } from '@/lib/utils'
import { useIntervalValue } from '@/lib/use-interval-value'

function createElapsedReader() {
  let mountedAt: number | null = null
  return () => {
    mountedAt ??= Date.now()
    return formatElapsedTime(Date.now() - mountedAt)
  }
}

export function StatusBar() {
  // The reader is built during render but only reads the clock when it is first
  // called - from the store's subscribe, i.e. inside an effect, never in render.
  const readElapsed = useMemo(() => createElapsedReader(), [])

  const elapsed = useIntervalValue(readElapsed, 1000, '00:00:00')

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-term-panel to-term-surface border-t border-term-edge flex items-center justify-between px-4 sm:px-6 text-xs text-term-dim"
      aria-label="Session status"
    >
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-term-cyan" aria-hidden="true" />
        <span>STATUS: available</span>
      </div>

      <div className="flex items-center gap-4">
        <div>
          <span className="text-term-muted">SESSION:</span>{' '}
          {/* aria-hidden: this ticks every second and would otherwise spam
              assistive tech with announcements. */}
          <span className="tabular-nums" aria-hidden="true">
            {elapsed}
          </span>
        </div>
      </div>
    </div>
  )
}
