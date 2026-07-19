import { PromptLine } from './prompt-line'

const projects = [
  {
    name: 'NyxChat',
    description: 'P2P decentralized serverless encrypted messaging application',
    tech: ['Dart', 'Serverless', 'Decentralized', 'Encrypted'],
    repoLink: 'https://github.com/harshitt13/NyxChat',
    statusLabel: 'Active',
    statusLink: 'https://github.com/harshitt13/NyxChat/releases',
  },
  {
    name: 'Krtrimahastah',
    description: 'Open-Source, affordable and intelligent prosthetic hand for amputees',
    tech: ['ESP32', 'SinricPro', 'Multimodal', 'Robotics', 'IoT'],
    repoLink: 'https://github.com/harshitt13/Krtrimahastah',
    statusLabel: 'Demonstration',
    statusLink: 'https://youtu.be/BNZyQIecj14',
  },
  {
    name: 'Meowscript',
    description: 'Cat theme based purrest programming language',
    tech: ['React', 'JavaScript', 'Node.js'],
    repoLink: 'https://github.com/harshitt13/meowscripts',
    statusLabel: 'Live',
    statusLink: 'https://meowscript.harshitt13.in/',
  },
  {
    name: 'Stock-Market-Prediction-Model',
    description: 'Quantitative forecasting engine. Features a PyTorch Time-Series Transformer, Bayesian architecture optimization, and dynamic Volatility-Aware (VIX) Meta-Learning',
    tech: ['Python', 'XGBoost', 'Random Forest', 'LSTM (PyTorch)', 'Time-Series Transformer'],
    repoLink: 'https://github.com/harshitt13/Stock-Market-Prediction-Model',
    statusLabel: 'Github',
    statusLink: 'https://github.com/harshitt13/Stock-Market-Prediction-Model',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-3">
      <PromptLine command="ls ./projects" />

      <div className="bg-[#1b1714] border border-[#2c2620] rounded p-4 text-sm">
        <div className="space-y-3">
          {projects.map((project) => (
            <div key={project.name} className="border border-[#2c2620] rounded px-3 py-2.5 hover:border-[#6b6560] transition-colors bg-[#141210]/50 group">
              <div className="flex items-center justify-between mb-1.5 flex-wrap gap-1">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7fd8e8] font-medium hover:text-[#ffb648] transition-colors"
                >
                  {project.name}
                </a>
                <a
                  href={project.statusLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs px-2.5 py-1 rounded cursor-pointer transition-all hover:scale-105 ${project.statusLabel === 'Active'
                      ? 'bg-green-900/30 text-green-400 border border-green-800/40 hover:bg-green-900/50'
                      : project.statusLabel === 'Github'
                        ? 'bg-purple-900/30 text-purple-400 border border-purple-800/40 hover:bg-purple-900/50'
                        : 'bg-yellow-900/30 text-[#ffb648] border border-yellow-800/40 hover:bg-yellow-900/50'
                    }`}
                >
                  {project.statusLabel} ↗
                </a>
              </div>

              <div className="text-[#e9e4d8] leading-relaxed mb-2 text-justify">
                <span className="text-[#6b6560]">{'>'} </span>
                {project.description}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-[#1b1714] border border-[#2c2620] text-[#948c7e]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <a
            href="https://github.com/harshitt13?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b6560] hover:text-[#ffb648] transition-colors text-xs"
          >
            ...more
          </a>
        </div>
      </div>
    </section>
  )
}
