"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const technologies: { [key: string]: string[] } = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
  ],
  Backend: ["Node.js", "Express", "MongoDB", "Firebase"],
  DevOps: ["Git", "GitHub", "Vercel"],
  Design: ["Figma"],
  "Machine Learning": [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Matplotlib",
  ],
  "Artificial Intelligence": ["Python", "TensorFlow", "PyTorch", "OpenCV"],
  "Generative AI": ["Python", "TensorFlow", "PyTorch", "OpenCV"],
};

const skillCategories = [
  { name: "Frontend" },
  { name: "Backend" },
  { name: "DevOps" },
  { name: "Design" },
  { name: "Machine Learning" },
  { name: "Artificial Intelligence" },
  { name: "Generative AI" },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My Skills
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            I've worked with a variety of technologies and frameworks to create robust and scalable applications. Here's an overview of my technical expertise:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-8 text-white">
              Skill Categories
            </h3>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.name)}
                  className={`cursor-pointer px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 outline-none shadow-lg ${
                    activeCategory === category.name
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-glow"
                      : "professional-card text-gray-300 hover:text-white border-gray-600 hover:border-blue-400"
                  }`}
                >
                  {category.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">
              Technologies & Tools
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="flex flex-wrap gap-4"
            >
              {technologies[activeCategory].map(
                (tech: string, index: number) => (
                  <motion.span
                    key={tech}
                    variants={item}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-5 py-3 professional-card text-white font-medium rounded-xl text-sm border-gray-600 hover:border-blue-400 transition-all duration-300 cursor-default"
                    style={{
                      background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)`,
                    }}
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
