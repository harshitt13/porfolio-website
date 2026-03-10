import { lazy, Suspense } from "react";
import Header from "./components/header";
import Hero from "./components/hero";

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
