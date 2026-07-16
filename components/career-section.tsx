import { PromptLine } from './prompt-line'

const commits = [
  {
    role: 'Member',
    org: 'OpenTelemetry — CNCF',
    scope: 'OSS Contributor',
    message: 'Collaborate with project maintainers to steer the development of critical observability components, ensuring stability and performance at scale',
    period: 'Apr 2026 — Present',
  },
  {
    role: 'Core Member',
    org: 'Software Development Club, VIT Bhopal',
    scope: 'ML',
    message: 'Collaborated with technical team to organize workshops and events, mentored peers in machine learning fundamentals',
    period: 'Dec 2024 — Aug 2025',
  },
  {
    role: 'Intern',
    org: 'CarCID',
    scope: 'Web Dev',
    message: 'Collaborated on creating webpages for CarCID, improving SEO and user experience with modern web standards',
    period: 'Apr 2025 — Jun 2025',
  },
  {
    role: 'Freelance',
    org: 'Outlier',
    scope: 'AI Trainer',
    message: 'Collaborated on projects to train AI models, improving their performance and accuracy through iterative feedback loops',
    period: 'Nov 2024 — Dec 2024',
  },
]

export function CareerSection() {
  return (
    <section id="career" className="space-y-3">
      <PromptLine command="git log --oneline --graph -- career" />

      <div className="bg-[#1b1714] border border-[#2c2620] rounded p-4 text-sm">
        {/* Timeline */}
        <div className="relative">
          {/* Continuous vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#2c2620]" />

          <div className="space-y-5">
            {commits.map((commit) => (
              <div key={commit.org} className="relative pl-8 group">
                {/* Timeline node */}
                <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-[#ffb648] bg-[#141210] z-10 transition-all duration-300 group-hover:shadow-[0_0_6px_rgba(255,182,72,0.3)]" />

                {/* Horizontal connector line */}
                <div className="absolute left-[15px] top-[13px] w-[13px] h-px bg-[#2c2620]" />

                {/* Content card */}
                <div className="border border-[#2c2620] rounded px-3 py-2.5 hover:border-[#6b6560] transition-colors bg-[#141210]/50">
                  {/* Top row: role + period */}
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[#7fd8e8] font-medium">{commit.role}</span>
                      <span className="text-[#6b6560]">@</span>
                      <span className="text-[#ffb648]">{commit.org}</span>
                    </div>
                    <span className="text-xs text-[#6b6560] whitespace-nowrap">{commit.period}</span>
                  </div>

                  {/* Conventional commit message */}
                  <div className="text-[#e9e4d8] leading-relaxed mb-2 text-justify">
                    <span className="text-[#6b6560]">{'>'} </span>
                    <span className="text-[#948c7e]">{commit.scope}</span>
                    <span className="text-[#6b6560]">: </span>
                    {commit.message}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
