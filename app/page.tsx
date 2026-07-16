import { TerminalWindow } from '@/components/terminal-window'
import { NavPills } from '@/components/nav-pills'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { ContributionsSection } from '@/components/contributions-section'
import { CareerSection } from '@/components/career-section'
import { SkillsSection } from '@/components/skills-section'
import { ContactSection } from '@/components/contact-section'
import { StatusBar } from '@/components/status-bar'

export default function Home() {
  return (
    <main className="pb-12">
      <TerminalWindow>
        <NavPills />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContributionsSection />
        <CareerSection />
        <SkillsSection />
        <ContactSection />
      </TerminalWindow>
      <StatusBar />
    </main>
  )
}
