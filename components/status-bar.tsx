'use client'

import { useState, useEffect } from 'react'

export function StatusBar() {
  const [elapsed, setElapsed] = useState<string>('00:00:00')

  useEffect(() => {
    const startTime = Date.now()

    const updateTime = () => {
      const elapsedMs = Date.now() - startTime
      const totalSeconds = Math.floor(elapsedMs / 1000)
      const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
      const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
      const s = String(totalSeconds % 60).padStart(2, '0')
      setElapsed(`${h}:${m}:${s}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-[#1b1714] to-[#141210] border-t border-[#2c2620] flex items-center justify-between px-6 text-xs text-[#6b6560]"
      role="status"
      aria-label="Portfolio status bar"
    >
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#7fd8e8]"></span>
        <span>STATUS: available</span>
      </div>

      <div className="hidden sm:flex items-center gap-4">
        <div>
          <span className="text-[#948c7e]">SESSION:</span> {elapsed}
        </div>
      </div>
    </div>
  )
}
