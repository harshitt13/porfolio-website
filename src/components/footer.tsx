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
    <footer className="bg-black border-t border-gray-800 py-4">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-6">
          {/* Left Side - Social Icons + Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center lg:items-start gap-4"
          >
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                  className={`p-2 rounded-lg bg-gray-900/50 ${link.color} transition-all duration-200 hover:bg-gray-800/50`}
                >
                  <div className="text-gray-400">{link.icon}</div>
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear}{" "}
              <span className="text-white font-semibold">Harshit Kushwaha</span>
              . All rights reserved.
            </p>
          </motion.div>

          {/* Right Side - Spotify Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-auto flex justify-center lg:justify-end mt-8"
          >
            <iframe
              src="https://open.spotify.com/embed/track/4iV5W9uYEdYUVa79Axb7Rh?utm_source=generator&theme=0"
              width="100%"
              height="120"
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
