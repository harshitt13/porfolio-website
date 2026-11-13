'use client'

import { useMemo, useSyncExternalStore } from 'react'

interface IntervalValueOptions {
  /** Stop the timer while the tab is in the background. */
  pauseWhenHidden?: boolean
  /** Compute once and never tick when the visitor asked for reduced motion. */
  respectReducedMotion?: boolean
}

/**
 * External store that recomputes a value on an interval. Defined at module
 * level so its mutable bookkeeping lives outside any render pass - the store is
 * only ever driven from `subscribe`, which React calls from an effect.
 */
function createIntervalStore<T>(
  compute: () => T,
  intervalMs: number,
  serverSnapshot: T,
  { pauseWhenHidden = true, respectReducedMotion = false }: IntervalValueOptions
) {
  let snapshot = serverSnapshot
  let timer: ReturnType<typeof setInterval> | undefined
  let motionQuery: MediaQueryList | undefined
  const listeners = new Set<() => void>()

  const tick = () => {
    const next = compute()
    if (Object.is(next, snapshot)) return
    snapshot = next
    listeners.forEach(listener => listener())
  }

  const start = () => {
    if ((pauseWhenHidden && document.hidden) || motionQuery?.matches) return
    if (timer === undefined) timer = setInterval(tick, intervalMs)
  }

  const stop = () => {
    if (timer === undefined) return
    clearInterval(timer)
    timer = undefined
  }

  const onVisibilityChange = () => {
    if (document.hidden) {
      stop()
    } else {
      tick()
      start()
    }
  }

  const onMotionChange = () => {
    stop()
    if (!motionQuery?.matches) {
      tick()
      start()
    }
  }

  return {
    subscribe(listener: () => void) {
      listeners.add(listener)

      if (listeners.size === 1) {
        // Seed the snapshot before React reads it back, so the first client
        // paint already shows a real value instead of the server placeholder.
        tick()
        if (respectReducedMotion && window.matchMedia) {
          motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
          motionQuery.addEventListener('change', onMotionChange)
        }
        start()
        if (pauseWhenHidden) document.addEventListener('visibilitychange', onVisibilityChange)
      }

      return () => {
        listeners.delete(listener)
        if (listeners.size > 0) return
        stop()
        motionQuery?.removeEventListener('change', onMotionChange)
        motionQuery = undefined
        if (pauseWhenHidden) document.removeEventListener('visibilitychange', onVisibilityChange)
      }
    },
    getSnapshot: () => snapshot,
    getServerSnapshot: () => serverSnapshot,
  }
}

/**
 * Subscribe to a value recomputed on a fixed interval.
 *
 * Built on useSyncExternalStore rather than useEffect + setState: the server
 * render returns `serverSnapshot` (so there is nothing to hydrate-mismatch) and
 * the client takes over on subscribe, without the cascading render a
 * synchronous setState inside an effect would cause.
 *
 * `compute` must be referentially stable - pass a module-level function or one
 * memoised by the caller.
 */
export function useIntervalValue<T>(
  compute: () => T,
  intervalMs: number,
  serverSnapshot: T,
  options: IntervalValueOptions = {}
): T {
  const { pauseWhenHidden = true, respectReducedMotion = false } = options

  const store = useMemo(
    () =>
      createIntervalStore(compute, intervalMs, serverSnapshot, {
        pauseWhenHidden,
        respectReducedMotion,
      }),
    [compute, intervalMs, serverSnapshot, pauseWhenHidden, respectReducedMotion]
  )

  return useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot)
}
