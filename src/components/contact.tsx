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
    <section id="contact" className="py-16 bg-black">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <div className="h-1 w-16 bg-gray-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -2 }}
                className="professional-card p-4 group hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Email
                      </h3>
                      <p className="text-gray-300 text-sm">
                        find.harshitkushwaha@gmail.com
                      </p>
                    </div>
                  </div>
                  <motion.a
                    href="mailto:find.harshitkushwaha@gmail.com"
                    className="text-white hover:text-gray-300 font-medium text-sm transition-colors duration-200 whitespace-nowrap"
                    whileHover={{ scale: 1.02 }}
                  >
                    Send a message
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -2 }}
                className="professional-card p-4 group hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300">
                      <Phone className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-300 text-sm">+91 74090-64489</p>
                    </div>
                  </div>
                  <motion.a
                    href="tel:+917409064489"
                    className="text-white hover:text-gray-300 font-medium text-sm transition-colors duration-200 whitespace-nowrap"
                    whileHover={{ scale: 1.02 }}
                  >
                    Call me
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -2 }}
                className="professional-card p-4 group hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-300">
                      <MapPin className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Location
                      </h3>
                      <p className="text-gray-300 text-sm">Bhopal, India</p>
                    </div>
                  </div>
                  <motion.a
                    href="https://maps.app.goo.gl/kzsWyDH2b6LSXBnE8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 font-medium text-sm transition-colors duration-200 whitespace-nowrap"
                    whileHover={{ scale: 1.02 }}
                  >
                    View on map
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="professional-card p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto px-12 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl text-lg shadow-glow transition-all duration-300"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
