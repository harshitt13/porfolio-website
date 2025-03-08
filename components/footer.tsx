"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, ExternalLink, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2">Your Name</h2>
            <p className="text-muted-foreground text-center max-w-md">
              A passionate developer creating beautiful digital experiences
            </p>
          </div>

          <div className="flex space-x-4 mb-8">
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Link href="https://linktr.ee/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">Linktr.ee</span>
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Link href="/your-resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <FileText className="h-5 w-5" />
                  <span className="sr-only">Resume</span>
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="w-full h-px bg-border mb-8" />

          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} Your Name. All rights reserved.</p>
            <p className="mt-1">
              Created using{" "}
              <a
                href="https://s0.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                s0.dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

