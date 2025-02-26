import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaFileAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.jpg"; // Ensure this path is correct

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <button
        className="fixed top-4 left-4 p-2 bg-black text-white rounded lg:hidden z-50 hover:bg-blue-900 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Overlay for Mobile */}
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

      {/* Side Navigation Bar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed left-0 top-0 h-screen w-64 bg-black text-white p-6 z-40"
          >
            {/* Circular Photo */}
            <div className="flex justify-center">
              <motion.img
                src={profile}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-900 hover:border-blue-700 hover:shadow-lg transition-all"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              />
            </div>

            {/* Navigation Links */}
            <h1 className="text-2xl font-bold mt-4 mb-8 text-center text-blue-900">Harshit Kushwaha</h1>
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
                      className="flex items-center space-x-2 p-2 rounded hover:bg-blue-900 hover:text-white transition-colors"
                    >
                      <span className="lg:hidden text-blue-900 hover:text-blue-700 transition-colors">
                        {item.icon}
                      </span>
                      <span className="text-blue-900 hover:text-blue-700">{item.name}</span>
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