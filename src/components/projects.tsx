"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment integration.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Development",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    category: "Web Development",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing projects and skills with a clean, responsive design.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    category: "Web Development",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Nature Photography Collection",
    description: "A curated collection of nature photographs from around the world.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Photography", "Adobe Lightroom", "Gallery"],
    category: "Photography",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Game Asset Pack",
    description: "A collection of 3D assets for game developers, including characters, props, and environments.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["3D Modeling", "Blender", "Game Assets"],
    category: "Game Development",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "UI/UX Design System",
    description: "A comprehensive design system for creating consistent and beautiful user interfaces.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["UI/UX", "Figma", "Design System"],
    category: "Design",
    githubUrl: "#",
    liveUrl: "#",
  },
]

const categories = ["All", "Web Development", "Photography", "Game Development", "Design"]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents my passion for creating intuitive and impactful
            digital experiences.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                layout
              >
                <Card className="h-full flex flex-col overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="rounded-full bg-background/20 hover:bg-background/40"
                        >
                          <Github className="h-5 w-5" />
                        </Button>
                      </a>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="rounded-full bg-background/20 hover:bg-background/40"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              <Github className="mr-2 h-4 w-4" />
              Show More Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

