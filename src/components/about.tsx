"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-16 bg-black">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-6 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative professional-card p-4 group-hover:scale-105 transition-transform duration-500">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src="/aboutme.jpg?height=600&width=600"
                  alt="About Me"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About Me
              </h2>
              <div className="h-1.5 w-24 bg-gray-600 rounded-full"></div>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-gray-300">
                Hi! I'm a Software Developer with interest in AI/ML, IOT, and
                Full-Stack Development.
              </p>

              <p className="text-gray-300">
                I specialize in building and deploying ML models, responsive web
                applications.
              </p>

              <p className="text-gray-300">
                When I'm not coding, you can find me exploring new technologies,
                doing Stocks & Crypto, or enjoying video games.
              </p>
            </div>

            <div className="professional-card p-4 mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group">
                  <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-2">
                    Name:
                  </h3>
                  <p className="text-gray-300 text-lg duration-200">
                    Harshit Kushwaha
                  </p>
                </div>
                <div className="group">
                  <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-2">
                    Location:
                  </h3>
                  <p className="text-gray-300 text-lg duration-200">
                    Bhopal, India
                  </p>
                </div>
                <div className="group">
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
