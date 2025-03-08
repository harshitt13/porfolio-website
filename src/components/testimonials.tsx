"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO at TechCorp",
    content:
      "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills are unmatched.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Project Manager at DesignHub",
    content:
      "I was impressed by the creativity and technical expertise brought to our project. The results exceeded our expectations.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "CTO at InnovateTech",
    content:
      "The ability to understand complex requirements and deliver elegant solutions sets this developer apart. Highly recommended!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">What People Say</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Quote className="h-8 w-8 text-primary" />
                    <p className="text-lg italic">{testimonials[currentIndex].content}</p>
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                      <AvatarFallback>{testimonials[currentIndex].name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-background rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-background rounded-full p-2 shadow-md"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

