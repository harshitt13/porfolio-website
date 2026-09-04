import { PromptLine } from './prompt-line'
import { CAREER } from '@/lib/config'
import { formatMonthYear } from '@/lib/utils'

export function CareerSection() {
  return (
    <section id="career" className="space-y-3" aria-labelledby="career-heading">
      <h2 id="career-heading" className="sr-only">
        Career
      </h2>
      <PromptLine command="git log --oneline --graph -- career" />

      <div className="bg-term-panel border border-term-edge rounded p-4 text-sm">
        <div className="relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-term-edge"
            aria-hidden="true"
          />
          <ol className="space-y-5 list-none">
            {CAREER.map(entry => (
              <li key={entry.id} className="relative pl-8 group">
                <div
                  className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-term-accent bg-term-surface z-10 transition-all duration-300 group-hover:glow-accent-sm"
                  aria-hidden="true"
                />
                <div
                  className="absolute left-[15px] top-[13px] w-[13px] h-px bg-term-edge"
                  aria-hidden="true"
                />
                <article className="border border-term-edge rounded px-3 py-2.5 hover:border-term-dim transition-colors bg-term-surface/50">
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-term-cyan font-medium">{entry.role}</h3>
                      <span className="text-term-dim" aria-hidden="true">
                        @
                      </span>
                      <span className="text-term-accent">{entry.org}</span>
                    </div>
                    <span className="text-xs text-term-dim whitespace-nowrap">
                      <time dateTime={entry.start}>{formatMonthYear(entry.start)}</time>
                      {' — '}
                      {entry.end ? (
                        <time dateTime={entry.end}>{formatMonthYear(entry.end)}</time>
                      ) : (
                        'Present'
                      )}
                    </span>
                  </div>
                  <p className="text-term-fg leading-relaxed text-justify">
                    <span className="text-term-dim" aria-hidden="true">
                      {'> '}
                    </span>
                    <span className="text-term-muted">{entry.scope}</span>
                    <span className="text-term-dim" aria-hidden="true">
                      :{' '}
                    </span>
                    {entry.message}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
