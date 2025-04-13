"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, X, ExternalLink, FileText } from "lucide-react"
import { Button } from "./ui/button"
import { FC } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2">Harshit Kushwaha</h2>
            <p className="text-muted-foreground text-center max-w-md">
              A Software Developer surviving through life with a cup of coffee
            </p>
          </div>

          <div className="flex space-x-4 mb-8">
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <a href="https://www.linkedin.com/in/harshitt13/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <a href="https://github.com/harshitt13" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <a href="https://twitter.com/harshittt_13" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <a href="https://linktr.ee/harshitt13" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">Linktr.ee</span>
                </Button>
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <a href="/Harshit-Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <FileText className="h-5 w-5" />
                  <span className="sr-only">Resume</span>
                </Button>
              </a>
            </motion.div>
          </div>

          <div className="w-full h-px bg-border mb-8" />

          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} Harshit Kushwaha. All rights reserved.</p>
            {/* <p className="mt-1">
              Created using v0 by Vercel
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
