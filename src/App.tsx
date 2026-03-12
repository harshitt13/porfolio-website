import { lazy, Suspense, useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";

const IdentityShowcase = lazy(() => import("./components/identity-showcase"));

const About = lazy(() => import("./components/about"));
const Skills = lazy(() => import("./components/skills"));
const Projects = lazy(() => import("./components/projects"));
const Contact = lazy(() => import("./components/contact"));
const Footer = lazy(() => import("./components/footer"));
const AuroraBackground = lazy(
  () => import("./components/aurora-background")
);
const ParticlesBackground = lazy(
  () => import("./components/particles-background")
);

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.substring(1);
      

      let attempts = 0;
      const maxAttempts = 50;

      const tryScroll = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          setTimeout(() => {
            const headerHeight = 80;
            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          }, 100);
          return true;
        }
        return false;
      };

      if (!tryScroll()) {
        const interval = setInterval(() => {
          attempts++;
          if (tryScroll() || attempts >= maxAttempts) {
            clearInterval(interval);
          }
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Suspense fallback={null}>
        <AuroraBackground />
        <ParticlesBackground />
      </Suspense>
      <div className="relative z-10">
        <Header />
        <Hero />
        <Suspense fallback={null}>
          <IdentityShowcase />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
