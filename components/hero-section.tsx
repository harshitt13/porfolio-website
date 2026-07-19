'use client'

import { useEffect, useState } from 'react'
import { BootSequence } from './boot-sequence'
import { PromptLine } from './prompt-line'

export function HeroSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
  }, [])

  return (
    <section id="whoami" className="space-y-4">
      <BootSequence />
      <PromptLine command="whoami" />
      <div className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#e9e4d8] flex items-baseline gap-2" style={{ fontFamily: 'var(--font-mono-heading)' }}>
          Harshit
          <span
            className={`w-2 h-10 sm:h-12 bg-[#ffb648] ${!prefersReducedMotion ? 'cursor-blink' : ''}`}
          ></span>
        </h1>

        <div className="text-lg sm:text-xl font-medium text-[#ffb648]" style={{ fontFamily: 'var(--font-mono-heading)', textShadow: '0 0 8px rgba(255, 182, 72, 0.3)' }}>
          Software Engineer | OSS Contributor
        </div>

        <p className="text-sm text-[#948c7e] max-w-2xl leading-relaxed">
          My favorite framework is understanding how things work.
        </p>
      </div>
    </section>
  )
}
