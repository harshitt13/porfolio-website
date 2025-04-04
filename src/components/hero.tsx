"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Camera, Code, Gamepad2, Palette } from "lucide-react"
import { Button } from "./ui/button"
import { Link } from "react-scroll"
import ParticlesBackground from "./particles-background"

const IdentityBadge = ({ icon, label }: { icon: React.ReactNode; label: string }) => {
  return (
    <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center">
      <div className="bg-background/80 backdrop-blur-sm shadow-lg rounded-full p-2 border border-border">{icon}</div>
      <span className="text-xs font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>
    </motion.div>
  )
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      <ParticlesBackground />
      <div
        className={`absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0 opacity-${Math.min(1, scrollY / 500)}`}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container px-4 md:px-6 z-10"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative mb-10"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-primary/20 mx-auto">
              <img src="/profile.jpg?height=400&width=400" alt="Profile" className="object-cover w-full h-full" />
            </div>

            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
              <IdentityBadge icon={<Code className="h-4 w-4" />} label="Developer" />
              <IdentityBadge icon={<Camera className="h-4 w-4" />} label="Photographer" />
              <IdentityBadge icon={<Gamepad2 className="h-4 w-4" />} label="Gamer" />
              <IdentityBadge icon={<Palette className="h-4 w-4" />} label="Designer" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
          >
            <span className="text-primary">Hello, I'm </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
              Harshit
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mt-4"
          >
            A Softwrae Developer surviving through life with a cup of coffee
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Link to="projects" smooth={true} duration={500}>
              <Button size="lg" className="rounded-full px-8">
                View My Work
              </Button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <Button variant="outline" size="lg" className="rounded-full px-8">
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
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <Link to="about" smooth={true} duration={500}>
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              <ArrowDown className="h-6 w-6 text-primary" />
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </section>
  )
}

