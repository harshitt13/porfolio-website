"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    formData.append("access_key", "af2e849d-afb1-46ce-9ebb-07e14091b799");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      console.error("Error", res);
      alert("Something went wrong. Please try again later.");
    }
  };

  // Removed unused 'onSubmit' function to resolve the error

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get In Touch
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out! I'm always open to{" "}
            <span className="text-blue-400 font-semibold">new ideas</span> and
            collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="professional-card p-8 text-center group hover:shadow-glow transition-all duration-500"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                <Mail className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Email</h3>
              <p className="text-gray-300 break-all">
                find.harshitkushwaha@gmail.com
              </p>
              <motion.a
                href="mailto:find.harshitkushwaha@gmail.com"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                Send a message
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="professional-card p-8 text-center group hover:shadow-glow transition-all duration-500"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 group-hover:from-purple-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                <MapPin className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Location</h3>
              <p className="text-gray-300">Bhopal, India</p>
              <motion.a
                href="https://maps.app.goo.gl/kzsWyDH2b6LSXBnE8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                View on map
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="professional-card p-8 text-center group hover:shadow-glow transition-all duration-500"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all duration-300">
                <Phone className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Phone</h3>
              <p className="text-gray-300">+91 74090-64489</p>
              <motion.a
                href="tel:+917409064489"
                className="text-green-400 hover:text-green-300 font-semibold transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                Call me
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="professional-card p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-white uppercase tracking-wider"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-black/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl p-4 text-lg transition-all duration-300"
                />
              </div>
              <div className="space-y-3">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-white uppercase tracking-wider"
                >
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-black/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl p-4 text-lg transition-all duration-300"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label
                htmlFor="subject"
                className="text-sm font-semibold text-white uppercase tracking-wider"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
                className="bg-black/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl p-4 text-lg transition-all duration-300"
              />
            </div>
            <div className="space-y-3">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-white uppercase tracking-wider"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello, I'd like to talk about..."
                rows={6}
                required
                className="bg-black/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl p-4 text-lg transition-all duration-300 resize-none"
              />
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl text-lg shadow-glow transition-all duration-300"
              >
                Send Message
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
