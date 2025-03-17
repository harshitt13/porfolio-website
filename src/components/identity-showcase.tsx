"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Camera, Code, Gamepad2, Palette, Laptop, Layers } from "lucide-react"

type Identity = {
  id: number
  title: string
  icon: React.ReactNode
  color: string
  description: string
}

const identities: Identity[] = [
  {
    id: 1,
    title: "Developer",
    icon: <Code className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-400",
    description: "Building elegant solutions with code",
  },
  {
    id: 2,
    title: "Photographer",
    icon: <Camera className="h-6 w-6" />,
    color: "from-amber-500 to-orange-400",
    description: "Capturing moments through images",
  },
  {
    id: 3,
    title: "Gamer",
    icon: <Gamepad2 className="h-6 w-6" />,
    color: "from-green-500 to-emerald-400",
    description: "Exploring virtual worlds to escape the real one ",
  },
  {
    id: 4,
    title: "Designer",
    icon: <Palette className="h-6 w-6" />,
    color: "from-purple-500 to-pink-400",
    description: "Creating visually stunning and intuitive experiences",
  },
]

export default function IdentityShowcase() {
  const [activeIdentity, setActiveIdentity] = useState<Identity>(identities[0])
  const [isAutoRotating, setIsAutoRotating] = useState(true)

  useEffect(() => {
    if (!isAutoRotating) return

    const interval = setInterval(() => {
      setActiveIdentity((prev) => {
        const currentIndex = identities.findIndex((identity) => identity.id === prev.id)
        const nextIndex = (currentIndex + 1) % identities.length
        return identities[nextIndex]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoRotating])

  return (
    <div className="w-full max-w-3xl mx-auto my-16">
      <div className="relative">
        {/* Main display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdentity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-r ${activeIdentity.color} p-8 rounded-2xl shadow-lg text-white`}
            onMouseEnter={() => setIsAutoRotating(false)}
            onMouseLeave={() => setIsAutoRotating(true)}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white/20 p-6 rounded-full backdrop-blur-sm">{activeIdentity.icon}</div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">I am a {activeIdentity.title}</h3>
                <p className="text-white/90">{activeIdentity.description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Identity selector */}
        <div className="flex justify-center mt-6 gap-3">
          {identities.map((identity) => (
            <motion.button
              key={identity.id}
              className={`p-3 rounded-full transition-all ${
                activeIdentity.id === identity.id
                  ? `bg-gradient-to-r ${identity.color} shadow-md`
                  : "bg-muted hover:bg-muted/80"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveIdentity(identity)
                setIsAutoRotating(false)
              }}
            >
              <div className={activeIdentity.id === identity.id ? "text-white" : "text-foreground"}>
                {identity.icon}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* 3D rotating cube - visual representation of multiple identities */}
      <div className="mt-16 relative h-64 w-64 mx-auto perspective">
        <div className="cube-container">
          <div className="cube">
            <div className="cube-face front">
              <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg p-4">
                <Code className="h-12 w-12 mb-2" />
                <span className="font-bold">Developer</span>
              </div>
            </div>
            <div className="cube-face back">
              <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-amber-500 to-orange-400 text-white rounded-lg p-4">
                <Camera className="h-12 w-12 mb-2" />
                <span className="font-bold">Photographer</span>
              </div>
            </div>
            <div className="cube-face right">
              <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-green-500 to-emerald-400 text-white rounded-lg p-4">
                <Gamepad2 className="h-12 w-12 mb-2" />
                <span className="font-bold">Gamer</span>
              </div>
            </div>
            <div className="cube-face left">
              <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-lg p-4">
                <Palette className="h-12 w-12 mb-2" />
                <span className="font-bold">Designer</span>
              </div>
            </div>
            <div className="cube-face top">
              <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-indigo-500 to-violet-400 text-white rounded-lg p-4">
                <Laptop className="h-12 w-12 mb-2" />
                <span className="font-bold">Creator</span>
              </div>
            </div>
            <div className="cube-face bottom">
              <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-rose-500 to-red-400 text-white rounded-lg p-4">
                <Layers className="h-12 w-12 mb-2" />
                <span className="font-bold">Innovator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

