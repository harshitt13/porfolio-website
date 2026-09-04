import { BootSequence } from './boot-sequence'
import { PromptLine } from './prompt-line'
import { SITE_CONFIG } from '@/lib/config'

// Server component: the blink is suppressed purely in CSS via
// prefers-reduced-motion, so no client JS or hydration pass is needed.
export function HeroSection() {
  return (
    <section id="whoami" className="space-y-4" aria-labelledby="whoami-heading">
      <BootSequence />
      <PromptLine command="whoami" />

      <div className="space-y-3">
        <h1
          id="whoami-heading"
          className="font-mono-heading text-4xl sm:text-5xl font-bold text-term-fg flex flex-wrap items-baseline gap-x-3 gap-y-1"
        >
          {SITE_CONFIG.name}
          <span className="w-2 h-10 sm:h-12 bg-term-accent cursor-blink" aria-hidden="true" />
        </h1>

        <p className="font-mono-heading glow-text text-lg sm:text-xl font-medium text-term-accent">
          {SITE_CONFIG.title.replace(' & ', ' | ')}
        </p>

        <p className="text-sm text-term-muted max-w-2xl leading-relaxed">{SITE_CONFIG.tagline}</p>
      </div>
    </section>
  )
}
