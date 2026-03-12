

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
        }, 400); // slight pause before typing next word
      } else {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, prev.length - 1));
        }, 40);
      }
    } else {
      if (displayed.length === current.length) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // pause at end of word
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
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 z-0 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
        }}
      />

      <div className="container px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-blue-400 font-mono text-sm tracking-widest uppercase"
              >
                {'>'} Hello, world
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                <span className="text-white">I'm </span>
                <span className="text-gradient">Harshit</span>
                <br />
                <span className="text-gradient">Kushwaha</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="h-12 flex items-center"
              >
                <span className="text-lg sm:text-xl md:text-2xl text-gray-400 font-mono">
                  {displayed}
                  <span className="animate-pulse text-blue-400 ml-0.5">|</span>
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg"
            >
              A developer surviving through life with a cup of coffee. <br />
              I survive and force living.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
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
            </motion.div>


            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-4 pt-2"
            >
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
                  className="p-2.5 rounded-lg border border-gray-800 text-gray-500 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl" />


            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 md:top-2 md:right-0 z-20 professional-card card-accent-top p-4 rounded-xl max-w-[200px] opacity-80"
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
              <div className="w-full h-full rounded-3xl overflow-hidden profile-ring-glow border-2 border-gray-800/50 rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/profile.webp"
                  alt="Harshit Kushwaha"
                  width={400}
                  height={400}
                  loading="eager"
                  decoding="async"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>


          </motion.div>
        </div>
      </div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <a 
          className="w-8 h-14 rounded-full border-2 border-gray-600/50 flex justify-center items-start p-2 hover:border-gray-400 transition-colors cursor-pointer group"
        >
          <motion.div
            className="w-1 h-3 bg-gray-500 group-hover:bg-white rounded-full"
            animate={{ y: [0, 16, 0], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </a>
      </motion.div>
    </section>
  );
}
