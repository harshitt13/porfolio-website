import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import IdentityShowcase from "@/components/identity-showcase"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <IdentityShowcase />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

