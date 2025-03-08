"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Radar } from "react-chartjs-2"
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const skills = [
  { name: "React", level: 90 },
  { name: "Vite", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Tailwind CSS", level: 95 },
  { name: "GraphQL", level: 70 },
  { name: "MongoDB", level: 75 },
  { name: "AWS", level: 65 },
]

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Vite",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "REST API",
  "Git",
  "GitHub",
  "Docker",
  "AWS",
  "Firebase",
  "Vercel",
  "Tailwind CSS",
  "Framer Motion",
  "Redux",
  "Jest",
  "Cypress",
]

const skillCategories = [
  { name: "Frontend", skills: ["React", "Vite", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", skills: ["Node.js", "Express", "GraphQL", "MongoDB"] },
  { name: "DevOps", skills: ["AWS", "Docker", "Git", "CI/CD"] },
  { name: "Design", skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"] },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState(skillCategories[0])

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

  const chartData = {
    labels: activeCategory.skills,
    datasets: [
      {
        label: activeCategory.name,
        data: activeCategory.skills.map((skill) => skills.find((s) => s.name === skill)?.level || 50),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
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
                <motion.button
                  key={category.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory.name === category.name
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
            <div className="mt-8">
              <Radar data={chartData} options={chartOptions} />
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
              {technologies.map((tech) => (
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

