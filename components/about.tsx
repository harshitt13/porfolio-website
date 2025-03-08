"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-primary/20 to-primary-foreground/20 blur-lg opacity-75"></div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img src="/placeholder.svg?height=600&width=600" alt="About Me" className="object-cover w-full h-full" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-3xl font-bold">About Me</h2>
              <div className="h-1 w-20 bg-primary mt-2"></div>
            </div>

            <p className="text-muted-foreground">
              Hello! I'm a passionate developer with a strong foundation in both front-end and back-end technologies. My
              journey in software development began 5 years ago, and I've been crafting digital experiences ever since.
            </p>

            <p className="text-muted-foreground">
              I specialize in building responsive web applications using modern frameworks like React, Next.js, and
              Node.js. I'm dedicated to writing clean, efficient code and creating intuitive user experiences.
            </p>

            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying outdoor activities to maintain a healthy work-life balance.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="font-medium">Name:</h3>
                <p className="text-muted-foreground">Your Name</p>
              </div>
              <div>
                <h3 className="font-medium">Email:</h3>
                <p className="text-muted-foreground">your.email@example.com</p>
              </div>
              <div>
                <h3 className="font-medium">Location:</h3>
                <p className="text-muted-foreground">City, Country</p>
              </div>
              <div>
                <h3 className="font-medium">Availability:</h3>
                <p className="text-muted-foreground">Open to opportunities</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

