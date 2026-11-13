import { PromptLine } from './prompt-line'
import { CONTRIBUTIONS, SOCIAL_LINKS } from '@/lib/config'

export function ContributionsSection() {
  return (
    <section id="contributions" className="space-y-3" aria-labelledby="contributions-heading">
      <h2 id="contributions-heading" className="sr-only">
        Open source contributions
      </h2>
      <PromptLine command="ls -la ~/contributions" />

      <div className="bg-term-panel border border-term-edge rounded p-4 space-y-4 text-xs min-w-0">
        {CONTRIBUTIONS.map(group => (
          <div key={group.org} className="space-y-1">
            <h3 className="text-term-accent font-mono font-medium text-xs [overflow-wrap:anywhere]">
              /{group.org}
            </h3>
            <ul className="space-y-1 list-none">
              {group.prs.map(pr => (
                <li key={pr.link}>
                  <a
                    href={pr.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-6 items-start gap-2 py-1 pl-4 text-term-fg hover:text-term-accent transition-colors focus:outline-none focus:ring-2 focus:ring-term-accent rounded px-1"
                  >
                    <span className="text-term-muted flex-shrink-0">#{pr.number}</span>
                    <span className="min-w-0 [overflow-wrap:anywhere]">{pr.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-4 flex justify-end">
          <a
            href={SOCIAL_LINKS.allPRs}
            target="_blank"
            rel="noopener noreferrer"
            className="text-term-dim hover:text-term-accent transition-colors text-xs focus:outline-none focus:ring-2 focus:ring-term-accent rounded px-1"
            aria-label="View all merged pull requests on GitHub"
          >
            ...more
          </a>
        </div>
      </div>
    </section>
  )
}
