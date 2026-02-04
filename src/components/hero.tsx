"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Camera, Code, Gamepad2, Palette } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-scroll";
import ParticlesBackground from "./particles-background";

const IdentityBadge = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.05 }} className="group relative">
      <div className="professional-card p-3 rounded-full animate-glow">
        {icon}
      </div>
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/80 px-2 py-1 rounded whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
};

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-black"
    >
      <ParticlesBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent z-0" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container px-4 md:px-6 z-10"
      >
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="relative mb-8"
          >
            <div className="relative w-36 h-36 md:w-44 md:h-44 overflow-hidden rounded-full mx-auto group border-2 border-gray-700">
              <img
                src="/profile.jpg?height=400&width=400"
                alt="Profile"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
              <IdentityBadge
                icon={<Code className="h-5 w-5 text-blue-400" />}
                label="Developer"
              />
              <IdentityBadge
                icon={<Camera className="h-5 w-5 text-green-400" />}
                label="Photographer"
              />
              <IdentityBadge
                icon={<Gamepad2 className="h-5 w-5 text-purple-400" />}
                label="Gamer"
              />
              <IdentityBadge
                icon={<Palette className="h-5 w-5 text-pink-400" />}
                label="Designer"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl tracking-tight"
          >
            <span className="text-white">Hi, I'm Harshit Kushwaha</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed whitespace-nowrap"
          >
            A Software Developer surviving through life with a cup of coffee
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-6"
          >
            <Link to="projects" smooth={true} duration={500}>
              <Button
                size="lg"
                className="rounded-full px-10 py-6 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-glow"
              >
                View My Work
              </Button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-10 py-6 text-lg font-semibold border-2 border-gray-600 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
      >
        <Link to="about" smooth={true} duration={500}>
          <div className="flex flex-col items-center group">
            <span className="text-sm text-gray-400 mb-3 group-hover:text-white transition-colors duration-200">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="p-3 rounded-full professional-card group-hover:animate-glow transition-all duration-300"
            >
              <ArrowDown className="h-5 w-5 text-blue-400" />
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
