'use client'

import { useEffect, useState } from 'react'
import { formatTime } from '@/lib/utils'
import { useIntervalValue } from '@/lib/use-interval-value'

const readClock = () => formatTime()

export function TerminalWindow({ children }: { children: React.ReactNode }) {
  // Empty on the server: the visitor's local clock is not knowable at render
  // time, so filling it in would guarantee a hydration mismatch.
  const time = useIntervalValue(readClock, 1000, '')

  const [isMinimized, setIsMinimized] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  // Escape leaves fullscreen, matching what the control implies.
  useEffect(() => {
    if (!isFullscreen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsFullscreen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isFullscreen])

  if (isClosed) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="text-term-dim text-sm">Connection closed.</div>
          <button
            type="button"
            onClick={() => setIsClosed(false)}
            className="px-4 py-2 border border-term-edge rounded text-sm text-term-muted hover:border-term-accent hover:text-term-accent transition-colors focus:outline-none focus:ring-2 focus:ring-term-accent"
          >
            $ ssh harshitt13@production
          </button>
        </div>
      </div>
    )
  }

  // Keep the 12px dots inside separate 24px buttons so hit areas never overlap.
  const controlClass =
    'w-6 h-6 shrink-0 flex items-center justify-center rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-term-surface focus:ring-term-accent'

  return (
    <div
      className={`terminal-window ${isFullscreen ? 'fixed inset-0 p-0 z-50' : 'min-h-screen p-4 sm:p-6'} flex items-center justify-center`}
    >
      <div
        className={`content-wrapper ${isFullscreen ? 'w-full h-full' : 'w-full max-w-3xl'} flex flex-col`}
      >
        <div
          className={`${isFullscreen ? 'w-full h-full rounded-none flex flex-col' : 'rounded-xl'} border border-term-edge bg-term-surface shadow-2xl overflow-hidden transition-all duration-300 ${isMinimized ? 'max-h-12' : ''}`}
        >
          <div className="bg-gradient-to-b from-term-panel to-term-surface border-b border-term-edge px-4 py-3 flex items-center justify-between gap-3">
            <div className="flex shrink-0">
              <button
                type="button"
                onClick={() => setIsClosed(true)}
                className={`${controlClass} group`}
                title="Close"
                aria-label="Close terminal"
              >
                <span
                  aria-hidden="true"
                  className="w-3 h-3 rounded-full border border-red-600 bg-red-500 group-hover:bg-red-600"
                />
              </button>
              <button
                type="button"
                onClick={() => setIsMinimized(v => !v)}
                className={`${controlClass} group`}
                title={isMinimized ? 'Restore' : 'Minimize'}
                aria-label={isMinimized ? 'Restore terminal' : 'Minimize terminal'}
                aria-expanded={!isMinimized}
              >
                <span
                  aria-hidden="true"
                  className="w-3 h-3 rounded-full border border-yellow-500 bg-yellow-400 group-hover:bg-yellow-500"
                />
              </button>
              <button
                type="button"
                onClick={() => setIsFullscreen(v => !v)}
                className={`${controlClass} group`}
                title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                aria-pressed={isFullscreen}
              >
                <span
                  aria-hidden="true"
                  className="w-3 h-3 rounded-full border border-green-600 bg-green-500 group-hover:bg-green-600"
                />
              </button>
            </div>

            <div className="flex-1 text-center text-xs font-medium">
              <span className="text-term-dim">harshitt13 - zsh - 88x24</span>
            </div>

            <div
              className="text-xs text-term-dim tabular-nums w-[52px] text-right"
              aria-hidden="true"
            >
              {time}
            </div>
          </div>

          {!isMinimized && (
            <div
              className={`bg-term-surface px-4 sm:px-6 py-4 sm:py-6 space-y-6 ${isFullscreen ? 'overflow-y-auto flex-1' : ''}`}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
