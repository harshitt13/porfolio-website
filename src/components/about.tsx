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
              <img src="/aboutme.jpg?height=600&width=600" alt="About Me" className="object-cover w-full h-full" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-3xl font-bold">About Me</h2>
              <div className="h-1 w-20 bg-primary mt-2"></div>
            </div>

            <p className="text-muted-foreground">
              Hello! I'm a Software Developer with interset in AI/ML, IOT, and Full-Stack Development.
            </p>

            <p className="text-muted-foreground">
              I specialize in building and deploying ML models, responsive web applications.
            </p>

            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, doing Stocks & Crypto, or enjoying video games.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="font-medium">Name:</h3>
                <p className="text-muted-foreground">Harshit Kushwaha</p>
              </div>
              <div>
                <h3 className="font-medium">Email:</h3>
                <p className="text-muted-foreground">find.harshitkushwaha@gmail.com</p>
              </div>
              <div>
                <h3 className="font-medium">Location:</h3>
                <p className="text-muted-foreground">Agra, India</p>
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

