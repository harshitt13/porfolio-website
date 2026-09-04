import { PromptLine } from './prompt-line'
import { SKILLS } from '@/lib/config'

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-3" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="sr-only">
        Skills
      </h2>
      <PromptLine command="cat skills.json" />

      <div className="bg-term-panel border border-term-edge rounded p-4 text-sm leading-relaxed">
        <div className="text-term-dim" aria-hidden="true">
          {'{'}
        </div>
        <div className="ml-4 space-y-2">
          {SKILLS.map(({ category, skills }, categoryIndex) => (
            <div key={category}>
              <h3 className="inline text-term-cyan font-normal">&quot;{category}&quot;</h3>
              <span className="text-term-dim" aria-hidden="true">
                : [
              </span>
              <div className="ml-4 flex flex-wrap">
                {skills.map((skill, index) => (
                  <span key={skill} className="mr-2">
                    <span className="text-term-accent">&quot;{skill}&quot;</span>
                    {index < skills.length - 1 && (
                      <span className="text-term-dim" aria-hidden="true">
                        ,
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <span className="text-term-dim" aria-hidden="true">
                ]{categoryIndex < SKILLS.length - 1 && ','}
              </span>
            </div>
          ))}
        </div>
        <div className="text-term-dim" aria-hidden="true">
          {'}'}
        </div>
      </div>
    </section>
  )
}
