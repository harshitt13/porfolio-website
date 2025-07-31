"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Stranger-Comms",
    description: "A platform for one-on-one interaction with strangers.",
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
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured Projects
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore some of my{" "}
            <span className="text-blue-400 font-semibold">recent work</span> and
            side projects
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                layout
                className="group"
              >
                <div className="professional-card h-full flex flex-col overflow-hidden transition-all duration-500 group-hover:shadow-glow">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View ${project.title} on GitHub`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="p-4 rounded-full bg-black/60 backdrop-blur-sm border border-gray-600 hover:border-blue-400 transition-all duration-300 group-hover:animate-glow">
                          <Github className="h-6 w-6 text-white" />
                        </div>
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Visit live demo of ${project.title}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="p-4 rounded-full bg-black/60 backdrop-blur-sm border border-gray-600 hover:border-purple-400 transition-all duration-300 group-hover:animate-glow">
                          <ExternalLink className="h-6 w-6 text-white" />
                        </div>
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                          className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/harshitt13"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full professional-card text-white font-semibold border-gray-600 hover:border-blue-400 transition-all duration-300 group hover:shadow-glow">
              <Github className="h-5 w-5 group-hover:text-blue-400 transition-colors duration-300" />
              <span className="group-hover:text-blue-400 transition-colors duration-300">
                Show More Projects
              </span>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
