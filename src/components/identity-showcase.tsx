
import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Code, Gamepad2, Palette, Cpu, Compass } from "lucide-react";

type Identity = {
  id: number;
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
};

const identities: Identity[] = [
  {
    id: 1,
    title: "Developer",
    icon: <Code className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-400",
    description: "Building elegant solutions with code",
  },
  {
    id: 2,
    title: "Engineer",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-indigo-500 to-violet-400",
    description: "Architecting and building robust systems",
  },
  {
    id: 3,
    title: "Photographer",
    icon: <Camera className="h-6 w-6" />,
    color: "from-amber-500 to-orange-400",
    description: "Capturing moments through images",
  },
  {
    id: 4,
    title: "Designer",
    icon: <Palette className="h-6 w-6" />,
    color: "from-purple-500 to-pink-400",
    description: "Creating visually stunning and intuitive experiences",
  },
  {
    id: 5,
    title: "Gamer",
    icon: <Gamepad2 className="h-6 w-6" />,
    color: "from-green-500 to-emerald-400",
    description: "Exploring virtual worlds to escape the real one",
  },
  {
    id: 6,
    title: "Seeker",
    icon: <Compass className="h-6 w-6" />,
    color: "from-rose-500 to-red-400",
    description: "Constantly exploring and learning new things",
  },
];

export default function IdentityShowcase() {
  const [activeIdentity, setActiveIdentity] = useState<Identity>(identities[0]);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setActiveIdentity((prev) => {
        const currentIndex = identities.findIndex(
          (identity) => identity.id === prev.id
        );
        const nextIndex = (currentIndex + 1) % identities.length;
        return identities[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoRotating]);


  return (
    <div className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto my-4 sm:my-10 md:my-16">
      <div
        className="relative min-h-[160px]"
        onMouseEnter={() => setIsAutoRotating(false)}
        onMouseLeave={() => setIsAutoRotating(true)}
      >

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdentity.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-transparent border border-white/10 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg transition-colors duration-500 identity-glow"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 text-center md:text-left">
              <div className={`p-4 sm:p-6 flex-shrink-0 rounded-full bg-white/5 border border-white/10 ${activeIdentity.color} bg-clip-text text-transparent flex items-center justify-center`}>
                <div className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  {activeIdentity.icon}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white">
                  I am {/^[AEIOU]/i.test(activeIdentity.title) ? "an" : "a"}{" "}
                  <span className={`bg-gradient-to-r ${activeIdentity.color} bg-clip-text text-transparent drop-shadow-sm`}>{activeIdentity.title}</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-300 min-h-[40px] sm:min-h-[48px] flex items-center justify-center md:justify-start">{activeIdentity.description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>


        <div className="flex justify-center mt-6 gap-3">
          {identities.map((identity) => (
            <motion.button
              key={identity.id}
              className={`p-3 rounded-full border transition-all duration-300 ${activeIdentity.id === identity.id
                  ? `bg-white/10 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.15)]`
                  : "bg-transparent border-white/10 hover:bg-white/5 hover:border-white/20"
                }`}
              aria-label={`Show ${identity.title} card`}
              title={`Show ${identity.title} card`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveIdentity(identity);
                setIsAutoRotating(false);
              }}
            >
              <div
                className={`transition-colors duration-300 ${activeIdentity.id === identity.id
                    ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    : "text-gray-500"
                  }`}
              >
                {identity.icon}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

    </div>
  );
}
