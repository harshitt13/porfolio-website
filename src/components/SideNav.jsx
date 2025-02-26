import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaFileAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.jpg"; // Ensure this path is correct

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      {!isDesktop && (
        <button
          className="fixed top-4 right-4 p-3 bg-[#0A0A0A] text-white rounded-full z-50 hover:bg-[#0A1F44] transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      )}

      {/* Overlay for Mobile */}
      <AnimatePresence>
        {isOpen && !isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Side Navigation Bar */}
      <AnimatePresence>
        {(isOpen || isDesktop) && (
          <motion.div
            initial={{ x: isDesktop ? 0 : -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed left-0 top-0 h-screen w-44 bg-[#0A0A0A] text-white p-6 z-40 shadow-lg"
          >
            {/* Profile Image */}
            <div className="flex justify-center">
              <motion.img
                src={profile}
                alt="Profile"
                className="w-64 h-64 rounded-full object-cover border-4 border-[#0A1F44] hover:border-blue-700 hover:shadow-xl transition-all"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              />
            </div>

            {/* Name */}
            <h1 className="text-lg font-semibold mt-4 mb-6 text-center text-white">
              Harshit Kushwaha
            </h1>

            {/* Navigation Links */}
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
                      className="flex items-center space-x-4 p-3 rounded-lg text-lg hover:bg-[#0A1F44] transition-all"
                    >
                      <span className="text-white text-xl">{item.icon}</span>
                      <span className="text-white font-medium">{item.name}</span>
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
