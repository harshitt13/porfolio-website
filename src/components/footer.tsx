"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, X, ExternalLink, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { FC } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/harshitt13/",
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      href: "https://github.com/harshitt13",
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      href: "https://twitter.com/harshittt_13",
      icon: <X className="h-6 w-6" />,
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      href: "https://linktr.ee/harshitt13",
      icon: <ExternalLink className="h-6 w-6" />,
      label: "Linktr.ee",
      color: "hover:text-green-400",
    },
    {
      href: "/Harshit-Resume.pdf",
      icon: <FileText className="h-6 w-6" />,
      label: "Resume",
      color: "hover:text-purple-400",
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Let's Connect
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Follow me on social media or check out my latest work
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`group p-4 rounded-full professional-card ${link.color} transition-all duration-300 hover:shadow-glow`}
              >
                <div className="text-gray-400 group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm leading-relaxed">
              © {currentYear}{" "}
              <span className="text-white font-semibold">Harshit Kushwaha</span>
              . All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Crafted with <span className="text-red-400">♥</span> using React,
              Tailwind CSS & Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
