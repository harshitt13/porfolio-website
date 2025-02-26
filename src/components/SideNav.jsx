// src/components/SideNav.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaFileAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.jpg";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 left-4 p-2 bg-gray-800 text-white rounded lg:hidden z-50 hover:bg-gray-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed left-0 top-0 h-screen w-64 bg-gray-800 text-white p-6 z-40"
          >
            <div className="flex justify-center">
              <motion.img
                src={profile}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-400 hover:border-blue-500 hover:shadow-lg transition-all"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              />
            </div>

            <h1 className="text-2xl font-bold mt-4 mb-8 text-center">My Portfolio</h1>
            <nav>
              <ul className="space-y-4">
                {[
                  { name: "Home", icon: <FaHome /> },
                  { name: "About", icon: <FaUser /> },
                  { name: "Resume", icon: <FaFileAlt /> },
                  { name: "Projects", icon: <FaProjectDiagram /> },
                  { name: "Contact", icon: <FaEnvelope /> },
                ].map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={`#${item.name.toLowerCase()}`}
                      className="hover:text-blue-400 hover:bg-gray-700 hover:underline transition-colors flex items-center space-x-2 p-2 rounded"
                    >
                      <span className="lg:hidden hover:text-blue-400 hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}