'use client'

import { useState, useEffect } from 'react'

export function TerminalWindow({ children }: { children: React.ReactNode }) {
  const [time, setTime] = useState<string>('00:00:00')
  const [isMinimized, setIsMinimized] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      setTime(`${hours}:${minutes}:${seconds}`)
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleClose = () => {
    setIsClosed(true)
  }

  const handleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  if (isClosed) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="text-[#6b6560] text-sm">Connection closed.</div>
          <button
            onClick={() => setIsClosed(false)}
            className="px-4 py-2 border border-[#2c2620] rounded text-sm text-[#948c7e] hover:border-[#ffb648] hover:text-[#ffb648] transition-colors"
          >
            $ ssh harshitt13@production
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`terminal-window ${isFullscreen ? 'fixed inset-0 p-0 z-50' : 'min-h-screen'} flex items-center justify-center ${!isFullscreen ? 'p-4 sm:p-6' : ''}`}>
      <div className={`content-wrapper ${isFullscreen ? 'w-full h-full' : 'w-full max-w-3xl'} flex flex-col`}>
        {/* Terminal window with macOS chrome */}
        <div className={`${isFullscreen ? 'w-full h-full rounded-none flex flex-col' : 'rounded-xl'} border border-[#2c2620] bg-[#141210] shadow-2xl overflow-hidden transition-all duration-300 ${isMinimized ? 'max-h-12' : ''}`}>
          {/* Title Bar */}
          <div className="bg-gradient-to-b from-[#1b1714] to-[#141210] border-b border-[#2c2620] px-4 py-3 flex items-center justify-between gap-3">
            {/* Traffic lights */}
            <div className="flex gap-2">
              <button
                onClick={handleClose}
                className="w-3 h-3 rounded-full bg-red-500 border border-red-600 shadow-sm hover:bg-red-600 transition-colors cursor-pointer group"
                title="Close"
                aria-label="Close terminal"
              >
                <span className="sr-only">Close</span>
              </button>
              <button
                onClick={handleMinimize}
                className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500 shadow-sm hover:bg-yellow-500 transition-colors cursor-pointer group"
                title={isMinimized ? 'Restore' : 'Minimize'}
                aria-label={isMinimized ? 'Restore terminal' : 'Minimize terminal'}
              >
                <span className="sr-only">{isMinimized ? 'Restore' : 'Minimize'}</span>
              </button>
              <button
                onClick={handleFullscreen}
                className="w-3 h-3 rounded-full bg-green-500 border border-green-600 shadow-sm hover:bg-green-600 transition-colors cursor-pointer group"
                title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              >
                <span className="sr-only">{isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}</span>
              </button>
            </div>

            {/* Title */}
            <div className="flex-1 text-center text-xs font-medium">
              <span className="text-[#6b6560]">harshitt13 — zsh — 88x24</span>
            </div>

            {/* Clock */}
            <div className="text-xs text-[#6b6560]">
              {time}
            </div>
          </div>

          {/* Content */}
          {!isMinimized && (
            <div className={`bg-[#141210] px-4 sm:px-6 py-4 sm:py-6 space-y-6 ${isFullscreen ? 'overflow-y-auto flex-1' : ''}`}>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
