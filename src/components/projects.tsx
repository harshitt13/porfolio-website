"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Stranger-Comms",
    description:
      "A platform for one-on-one interaction with strangers.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "Webrtc", "Socket.io"],
    githubUrl: "https://github.com/harshitt13/stranger-comms",
    liveUrl: "https://stranger-comms.vercel.app/",
  },
  {
    id: 2,
    title: "Meowscript",
    description: "A purrest programming language.",
    image: "/project2.png?height=400&width=600",
    tags: ["React", "JavaScript", "Node.js", "CSS"],
    githubUrl: "https://github.com/harshitt13/meowscripts",
    liveUrl: "https://meowscripts.vercel.app/",
  },
  {
    id: 3,
    title: "Stock Market ML Model",
    description: "A hybrid model for upcomming stocks predictions.",
    image: "/project3.png?height=400&width=600",
    tags: ["Python", "Pytorch", "Tensorflow", "Keras"],
    githubUrl: "https://github.com/harshitt13/Stock-Market-Prediction-Using-ML",
    liveUrl: "https://youtu.be/z8sXhWrwU0o",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence>
            {projects.map((project, index) => (
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
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title={`View ${project.title} on GitHub`}>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="rounded-full bg-background/20 hover:bg-background/40"
                        >
                          <Github className="h-5 w-5" />
                        </Button>
                      </a>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title={`Visit live demo of ${project.title}`}>
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
          <a href="https://github.com/harshitt13" target="_blank" rel="noopener noreferrer">
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
