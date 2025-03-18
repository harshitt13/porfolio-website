"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const technologies = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Express", "MongoDB", "Firebase"],
  DevOps: ["Git", "GitHub", "Vercel"],
  Design: ["Figma", "OpenCV"],
  MachineLearning: ["Python", "Keras", "Matplotlib", "Pytorch", "Tensorflow"]
}

const skillCategories = [
  { name: "Frontend" },
  { name: "Backend" },
  { name: "DevOps" },
  { name: "Design" },
  { name: "MachineLearning" }
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks to create robust and scalable applications. Here's
            an overview of my technical expertise:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">Skill Categories</h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {skillCategories.map((category) => (
                <motion.div
                  key={category.name}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveCategory(category.name)}
                  className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-colors outline-none ${
                    activeCategory === category.name
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category.name}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Technologies & Tools</h3>
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="flex flex-wrap gap-3"
            >
              {technologies[activeCategory].map((tech) => (
                <motion.span
                  key={tech}
                  variants={item}
                  className="px-4 py-2 bg-background border border-border rounded-full text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
