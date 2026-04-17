
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const roles = ["Developer", "Engineer", "Photographer", "Designer", "Gamer", "Seeker"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const current = roles[roleIndex];

    if (isDeleting) {
      if (displayed.length === 0) {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 400);
      } else {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, prev.length - 1));
        }, 40);
      }
    } else {
      if (displayed.length === current.length) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeout = setTimeout(() => {
          setDisplayed((prev) => current.slice(0, prev.length + 1));
        }, 80);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-[85svh] sm:min-h-[100svh] flex items-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 z-0 pointer-events-none hero-gradient-mask"
      />

      <div className="container px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="space-y-6 sm:space-y-8 hero-fade-in">
            <div className="space-y-4">
              <p
                className="text-blue-400 font-mono text-sm tracking-widest uppercase drop-shadow-[0_0_8px_rgba(59,130,246,0.4)] hero-stagger-1"
              >
                {'>'} Hello, world
              </p>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight hero-stagger-2"
              >
                <span className="text-white">I'm </span>
                <span className="text-gradient">Harshit</span>
                <br />
                <span className="text-gradient">Kushwaha</span>
              </h1>

              <div className="h-12 flex items-center hero-stagger-3">
                <span className="text-lg sm:text-xl md:text-2xl text-gray-400 font-mono">
                  {displayed}
                  <span className="animate-pulse text-blue-400 ml-0.5">|</span>
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg hero-stagger-4">
              A developer surviving through life with a cup of coffee. <br />
              I survive and force living.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 hero-stagger-5">
              <Button
                asChild
                size="lg"
                className="min-h-12 rounded-full px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold btn-gradient-glow transform hover:scale-105 transition-all duration-300"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-h-12 rounded-full px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold bg-transparent border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/30 transform hover:scale-105 transition-all duration-300"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>


            <div className="flex gap-4 pt-2 hero-stagger-6">
              {[
                { href: "https://github.com/harshitt13", icon: <Github className="w-5 h-5" />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/harshitt13/", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                { href: "https://linktr.ee/harshitt13", icon: <ExternalLink className="w-5 h-5" />, label: "Links" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-transparent border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/30 transform hover:-translate-y-[3px] hover:scale-105 transition-all duration-300"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center hero-fade-in-right">
            <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-6 -right-2 md:-top-4 md:-right-6 lg:-right-10 z-30 professional-card card-accent-top p-4 rounded-xl max-w-[210px] opacity-95 bg-black/60 shadow-xl"
              style={{ willChange: "transform" }}
            >
              <pre className="text-xs font-mono text-gray-400 leading-relaxed">
                <span className="text-purple-400">truth:</span>
                {"\n"}  <span className="text-blue-400">warning:</span>{" "}
                <span className="text-amber-300">|</span>
                {"\n"}    <span className="text-gray-300">i don't actually exist</span>
                {"\n"}    <span className="text-gray-300">so if u ever met me irl</span>
                {"\n"}    <span className="text-gray-300">you're schizophrenic</span>
              </pre>
            </motion.div>


            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10">
              <div className="w-full h-full rounded-3xl overflow-hidden profile-ring-glow border-2 border-gray-800/50 rotate-3 hover:rotate-0 transition-transform duration-500 shimmer-hover">
                <img
                  src="/profile.webp"
                  alt="Harshit Kushwaha"
                  width={400}
                  height={400}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>


          </div>
        </div>
      </div>


      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10 hero-stagger-7">
        <a 
          className="w-8 h-14 rounded-full border-2 border-gray-600/30 flex justify-center items-start p-2 hover:border-blue-500/40 hover:shadow-[0_0_12px_rgba(59,130,246,0.15)] transition-all duration-500 cursor-pointer group"
        >
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 group-hover:from-white group-hover:to-blue-300 rounded-full"
            animate={{ y: [0, 16, 0], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </a>
      </div>
    </section>
  );
}
