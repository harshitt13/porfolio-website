import { ThemeToggle } from "./components/theme-toggle"
import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"
import IdentityShowcase from "./components/identity-showcase"
import Testimonials from "./components/testimonials"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <IdentityShowcase />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

