"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

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
    formData.append("access_key", import.meta.env.VITE_WEB3FORM_ACCESS_KEY);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        alert("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        e.currentTarget.reset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      value: "find.harshitkushwaha@gmail.com",
      href: "mailto:find.harshitkushwaha@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: "Phone",
      value: "+91 7409064489",
      href: "tel:+917409064489",
      color: "text-green-400",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: "Location",
      value: "Bhopal, India",
      href: "https://maps.app.goo.gl/kzsWyDH2b6LSXBnE8",
      color: "text-purple-400",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Get In Touch
                </h2>
                <div className="h-1.5 w-24 bg-gray-600 rounded-full" />
                <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-md">
                  Have a project in mind or just want to say hi? I'd love to hear from you.
                </p>
              </div>

              {/* Contact links */}
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Location" ? "_blank" : undefined}
                    rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className={`p-2.5 rounded-lg border border-gray-800 ${item.color} group-hover:border-gray-600 transition-all duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">{item.label}</p>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="professional-card card-accent-top p-6 md:p-8 rounded-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-mono text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="bg-black/40 border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-blue-500/10 rounded-xl p-4 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-mono text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-black/40 border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-blue-500/10 rounded-xl p-4 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-xs font-mono text-gray-500 uppercase tracking-wider"
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
                    className="bg-black/40 border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-blue-500/10 rounded-xl p-4 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-mono text-gray-500 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-black/40 border-gray-800 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-blue-500/10 rounded-xl p-4 transition-all duration-300 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full px-8 py-4 btn-gradient-glow text-white font-semibold rounded-xl text-base transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
