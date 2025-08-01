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
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      color: "hover:text-gray-300",
    },
    {
      href: "https://github.com/harshitt13",
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      href: "https://twitter.com/harshittt_13",
      icon: <X className="h-5 w-5" />,
      label: "Twitter",
      color: "hover:text-gray-300",
    },
    {
      href: "https://linktr.ee/harshitt13",
      icon: <ExternalLink className="h-5 w-5" />,
      label: "Linktr.ee",
      color: "hover:text-gray-300",
    },
    {
      href: "/Harshit-Resume.pdf",
      icon: <FileText className="h-5 w-5" />,
      label: "Resume",
      color: "hover:text-gray-300",
    },
  ];

  return (
    <footer className="border-t border-gray-800/80 py-6 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-8 lg:gap-12">
          {/* Left Side - Social Icons + Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center lg:items-start gap-5"
          >
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className={`p-3 rounded-xl bg-gray-900/60 backdrop-blur-sm ${link.color} transition-all duration-300 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-gray-900/25 border border-gray-800/30 hover:border-gray-700/50`}
                >
                  <div className="text-gray-400 hover:text-gray-200 transition-colors duration-300">
                    {link.icon}
                  </div>
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm leading-relaxed">
                © {currentYear}{" "}
                <span className="text-white font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Harshit Kushwaha
                </span>
                . All rights reserved.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Spotify Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-auto flex justify-center lg:justify-end mt-8 lg:mt-4"
          >
            <iframe
              src="https://open.spotify.com/embed/track/6pj9JkwBA6VzYdLXvaJkPh?si=5562a60653e1480a?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="Spotify Currently Playing"
              className="rounded-lg min-w-[300px] max-w-[400px]"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
