import { PromptLine } from './prompt-line'
import { PROJECTS, SOCIAL_LINKS } from '@/lib/config'
import type { Project } from '@/lib/types'

const STATUS_STYLES: Record<Project['statusLabel'], string> = {
  Active: 'bg-green-900/30 text-green-400 border-green-800/40 hover:bg-green-900/50',
  Github: 'bg-purple-900/30 text-purple-400 border-purple-800/40 hover:bg-purple-900/50',
  Live: 'bg-yellow-900/30 text-term-accent border-yellow-800/40 hover:bg-yellow-900/50',
  Demonstration: 'bg-yellow-900/30 text-term-accent border-yellow-800/40 hover:bg-yellow-900/50',
}

function StatusBadge({ project }: { project: Project }) {
  return (
    <a
      href={project.statusLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-xs px-2.5 py-1 rounded border transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-term-accent ${STATUS_STYLES[project.statusLabel]}`}
      aria-label={`${project.name} - ${project.statusLabel} (opens in a new tab)`}
    >
      {project.statusLabel} <span aria-hidden="true">↗</span>
    </a>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-3" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="sr-only">
        Projects
      </h2>
      <PromptLine command="ls ./projects" />

      <div className="bg-term-panel border border-term-edge rounded p-4 text-sm">
        <ul className="space-y-3 list-none">
          {PROJECTS.map(project => (
            <li
              key={project.id}
              className="border border-term-edge rounded px-3 py-2.5 hover:border-term-dim transition-colors bg-term-surface/50"
            >
              <div className="flex items-center justify-between mb-1.5 flex-wrap gap-1">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-term-cyan font-medium hover:text-term-accent transition-colors focus:outline-none focus:ring-2 focus:ring-term-accent rounded"
                >
                  {project.name}
                </a>
                <StatusBadge project={project} />
              </div>

              <p className="text-term-fg leading-relaxed mb-2 text-justify">
                <span className="text-term-dim" aria-hidden="true">
                  {'> '}
                </span>
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-1.5 list-none">
                {project.tech.map(tech => (
                  <li
                    key={tech}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-term-panel border border-term-edge text-term-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex justify-end">
          <a
            href={SOCIAL_LINKS.allRepositories}
            target="_blank"
            rel="noopener noreferrer"
            className="text-term-dim hover:text-term-accent transition-colors text-xs focus:outline-none focus:ring-2 focus:ring-term-accent rounded px-1"
            aria-label="Browse all repositories on GitHub"
          >
            ...more
          </a>
        </div>
      </div>
    </section>
  )
}
