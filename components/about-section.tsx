import { PromptLine } from './prompt-line'

export function AboutSection() {
  return (
    <section id="about" className="space-y-3">
      <PromptLine command="cat about.md" />
      
      <div className="bg-[#1b1714] border border-[#2c2620] rounded p-4 space-y-3 text-sm text-[#e9e4d8] leading-relaxed">
        <p>
          Hi! I&apos;m a Software Engineer who is actively contributing
          to the <span className="text-[#ffb648]">CNCF ecosystem and Observability</span>,
          specifically <span className="text-[#ffb648]">OpenTelemetry</span>,
          along with <span className="text-[#ffb648]">Meshery</span>,
          <span className="text-[#ffb648]"> Kestra</span>,
          and <span className="text-[#ffb648]">Jaeger</span>.
          My interests also include <span className="text-[#ffb648]">AIML</span>,
          <span className="text-[#ffb648]"> IOT</span>,
          <span className="text-[#ffb648]"> Full-Stack Development</span>,
          and <span className="text-[#ffb648]">Robotics</span>.
          Other than that I enjoy <span className="text-[#ffb648]">gaming</span>,
          <span className="text-[#ffb648]"> learning new technologies</span>,
          and <span className="text-[#ffb648]">stuff</span>.
        </p>
      </div>
    </section>
  )
}
