import { PromptLine } from './prompt-line'

export function AboutSection() {
  return (
    <section id="about" className="space-y-3" aria-labelledby="about-heading">
      <h2 id="about-heading" className="sr-only">
        About
      </h2>
      <PromptLine command="cat about.md" />

      <div className="bg-term-panel border border-term-edge rounded p-4 space-y-3 text-sm text-term-fg leading-relaxed">
        <p className="text-justify">
          Hi! I&apos;m a Software Engineer who is actively contributing to the{' '}
          <span className="text-term-accent">CNCF ecosystem and Observability</span>, specifically{' '}
          <span className="text-term-accent">OpenTelemetry</span>, along with{' '}
          <span className="text-term-accent">Meshery</span>,{' '}
          <span className="text-term-accent">Kestra</span>, and{' '}
          <span className="text-term-accent">Jaeger</span>. My interests also include{' '}
          <span className="text-term-accent">AIML</span>,{' '}
          <span className="text-term-accent">IOT</span>,{' '}
          <span className="text-term-accent">Full-Stack Development</span>, and{' '}
          <span className="text-term-accent">Robotics</span>. Other than that I enjoy{' '}
          <span className="text-term-accent">gaming</span>,{' '}
          <span className="text-term-accent">learning new technologies</span>, and{' '}
          <span className="text-term-accent">stuff</span>.
        </p>
      </div>
    </section>
  )
}
