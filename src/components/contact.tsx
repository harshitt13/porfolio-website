import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin } from "lucide-react";

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
                  Have a question or a project in mind? Feel free to reach out.
                </p>
              </div>


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


              <div className="w-full h-40 rounded-xl overflow-hidden border border-gray-800/50 mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465563.1456167813!2d77.06176842871094!3d23.25404530000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1672847400000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen={true}
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bhopal Location Map"
                  className="grayscale hover:grayscale-0 transition-all duration-500 border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-full max-w-xl mx-auto md:mx-0 p-2"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-0">
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="bg-transparent border border-white/10 text-gray-200 placeholder:text-gray-500 focus:border-white/30 focus:ring-0 rounded-lg px-4 py-6 transition-all duration-300 text-base"
                  />
                </div>
                <div className="space-y-0">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="bg-transparent border border-white/10 text-gray-200 placeholder:text-gray-500 focus:border-white/30 focus:ring-0 rounded-lg px-4 py-6 transition-all duration-300 text-base"
                  />
                </div>
                <div className="space-y-0">
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="bg-transparent border border-white/10 text-gray-200 placeholder:text-gray-500 focus:border-white/30 focus:ring-0 rounded-lg px-4 py-6 transition-all duration-300 text-base"
                  />
                </div>
                <div className="space-y-0 pt-2">
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={6}
                    required
                    className="bg-transparent border border-white/10 text-gray-200 placeholder:text-gray-500 focus:border-white/30 focus:ring-0 rounded-lg p-4 transition-all duration-300 resize-none text-base"
                  />
                </div>
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full h-14 bg-transparent border border-white/10 text-gray-300 hover:bg-white/5 hover:border-white/20 hover:text-white font-medium rounded-lg text-base transition-all duration-300"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
