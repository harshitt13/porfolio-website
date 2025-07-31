import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import IdentityShowcase from "./components/identity-showcase";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <IdentityShowcase />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
