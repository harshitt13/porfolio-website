/**
 * Utility functions for common operations
 * Centralizes reusable logic across components
 */

export const formatElapsedTime = (ms: number): string => {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000))
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
  const seconds = String(totalSeconds % 60).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}

export const formatTime = (date: Date = new Date()): string => {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}

/**
 * True when the visitor has asked the OS to reduce motion.
 * Returns false during SSR so the server render never assumes a preference.
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Render an ISO year-month ('2026-04') as a short display label ('Apr 2026').
 * Parsed as UTC so the label never shifts a month across time zones.
 */
export const formatMonthYear = (isoYearMonth: string): string => {
  const date = new Date(`${isoYearMonth}-01T00:00:00Z`)
  if (Number.isNaN(date.getTime())) return isoYearMonth
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}
