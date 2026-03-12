
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
  const [cubeRotation, setCubeRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [cubeRef, setCubeRef] = useState<HTMLDivElement | null>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useEffect(() => {
    if (!cubeRef) return;

    if (isUserInteracting) {

      cubeRef.style.transform = `rotateX(${cubeRotation.x}deg) rotateY(${cubeRotation.y}deg)`;
      cubeRef.style.animation = "none";
    } else {

      const startX = cubeRotation.x;
      const startY = cubeRotation.y;
      const endX = startX + 360;
      const endY = startY + 360;


      const animationName = `rotate-from-${Math.round(startX)}-${Math.round(
        startY
      )}-${Date.now()}`;
      const keyframes = `
        @keyframes ${animationName} {
          from {
            transform: rotateX(${startX}deg) rotateY(${startY}deg);
          }
          to {
            transform: rotateX(${endX}deg) rotateY(${endY}deg);
          }
        }
      `;


      const existingStyle = document.getElementById("dynamic-cube-animation");
      if (existingStyle) {
        existingStyle.remove();
      }

      // Add new dynamic animation
      const style = document.createElement("style");
      style.id = "dynamic-cube-animation";
      style.textContent = keyframes;
      document.head.appendChild(style);

      // Apply the animation
      cubeRef.style.animation = `${animationName} 25s infinite linear`;
    }
  }, [cubeRotation, cubeRef, isUserInteracting]);

  // Auto-rotation timeout to resume auto-rotation after user stops interacting
  useEffect(() => {
    if (!isUserInteracting) return;

    const timeout = setTimeout(() => {
      setIsUserInteracting(false);
    }, 1250); // Resume auto-rotation after 1.25 seconds of no interaction

    return () => clearTimeout(timeout);
  }, [cubeRotation, isUserInteracting]);

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
    }, 4000); // Increased to 4s to allow full 0.5s exit/enter animations

    return () => clearInterval(interval);
  }, [isAutoRotating, activeIdentity.id]); // Added activeIdentity.id to reset timer when manually changed

  const getCurrentRotationFromMatrix = (element: HTMLDivElement) => {
    const computedStyle = window.getComputedStyle(element);
    const transform = computedStyle.transform;

    if (transform && transform !== "none") {
      const matrix = new DOMMatrix(transform);
      const currentX = Math.atan2(matrix.m32, matrix.m33) * (180 / Math.PI);
      const currentY =
        Math.atan2(
          -matrix.m31,
          Math.sqrt(matrix.m32 * matrix.m32 + matrix.m33 * matrix.m33)
        ) *
        (180 / Math.PI);

      return { x: currentX, y: currentY };
    }

    return { x: 0, y: 0 };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsUserInteracting(true);

    // If cube was auto-rotating, capture its current animated position
    if (!isUserInteracting && cubeRef) {
      const currentRotation = getCurrentRotationFromMatrix(cubeRef);
      setCubeRotation(currentRotation);
    }

    setLastMousePos({ x: e.clientX, y: e.clientY });
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;

    setIsUserInteracting(true);
    setCubeRotation((prev) => ({
      x: prev.x - deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
    }));

    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;

      setIsUserInteracting(true);
      setCubeRotation((prev) => ({
        x: prev.x - deltaY * 0.5,
        y: prev.y + deltaX * 0.5,
      }));

      setLastMousePos({ x: e.clientX, y: e.clientY });
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, lastMousePos]);

  return (
    <div className="w-full max-w-3xl mx-auto my-16">
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
            className="bg-transparent border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg transition-colors duration-500"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
              <div className={`p-6 flex-shrink-0 rounded-full bg-white/5 border border-white/10 ${activeIdentity.color} bg-clip-text text-transparent flex items-center justify-center`}>
                <div className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  {activeIdentity.icon}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                  I am a <span className={`bg-gradient-to-r ${activeIdentity.color} bg-clip-text text-transparent drop-shadow-sm`}>{activeIdentity.title}</span>
                </h2>
                <p className="text-gray-300 min-h-[48px] flex items-center justify-center md:justify-start">{activeIdentity.description}</p>
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


      <div className="mt-16 relative h-64 w-64 mx-auto perspective">
        <div
          ref={setCubeRef}
          className={`cube-container cursor-grab ${isDragging ? "cursor-grabbing" : ""
            } select-none transition-transform duration-300 ease-out`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="cube">
            <div className="cube-face front hover:brightness-125 transition-all duration-300">
              <div className="flex flex-col items-center justify-center h-full bg-black/40 backdrop-blur-sm border-2 border-blue-500/30 hover:border-blue-400/80 shadow-[inset_0_0_30px_rgba(59,130,246,0.15)] rounded-xl p-4 group transition-colors duration-300">
                <div className="text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-12 w-12 mb-3" />
                </div>
                <span className="font-bold tracking-wider text-sm uppercase text-blue-300/90 group-hover:text-blue-200 transition-colors">Developer</span>
              </div>
            </div>
            <div className="cube-face back hover:brightness-125 transition-all duration-300">
              <div className="flex flex-col items-center justify-center h-full bg-black/40 backdrop-blur-sm border-2 border-amber-500/30 hover:border-amber-400/80 shadow-[inset_0_0_30px_rgba(245,158,11,0.15)] rounded-xl p-4 group transition-colors duration-300">
                <div className="text-amber-500 drop-shadow-[0_0_12px_rgba(245,158,11,0.8)] group-hover:scale-110 transition-transform duration-300">
                  <Camera className="h-12 w-12 mb-3" />
                </div>
                <span className="font-bold tracking-wider text-sm uppercase text-amber-300/90 group-hover:text-amber-200 transition-colors">Photographer</span>
              </div>
            </div>
            <div className="cube-face right hover:brightness-125 transition-all duration-300">
              <div className="flex flex-col items-center justify-center h-full bg-black/40 backdrop-blur-sm border-2 border-emerald-500/30 hover:border-emerald-400/80 shadow-[inset_0_0_30px_rgba(16,185,129,0.15)] rounded-xl p-4 group transition-colors duration-300">
                <div className="text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.8)] group-hover:scale-110 transition-transform duration-300">
                  <Gamepad2 className="h-12 w-12 mb-3" />
                </div>
                <span className="font-bold tracking-wider text-sm uppercase text-emerald-300/90 group-hover:text-emerald-200 transition-colors">Gamer</span>
              </div>
            </div>
            <div className="cube-face left hover:brightness-125 transition-all duration-300">
              <div className="flex flex-col items-center justify-center h-full bg-black/40 backdrop-blur-sm border-2 border-fuchsia-500/30 hover:border-fuchsia-400/80 shadow-[inset_0_0_30px_rgba(217,70,239,0.15)] rounded-xl p-4 group transition-colors duration-300">
                <div className="text-fuchsia-400 drop-shadow-[0_0_12px_rgba(217,70,239,0.8)] group-hover:scale-110 transition-transform duration-300">
                  <Palette className="h-12 w-12 mb-3" />
                </div>
                <span className="font-bold tracking-wider text-sm uppercase text-fuchsia-300/90 group-hover:text-fuchsia-200 transition-colors">Designer</span>
              </div>
            </div>
            <div className="cube-face top hover:brightness-125 transition-all duration-300">
              <div className="flex flex-col items-center justify-center h-full bg-black/40 backdrop-blur-sm border-2 border-indigo-500/30 hover:border-indigo-400/80 shadow-[inset_0_0_30px_rgba(99,102,241,0.15)] rounded-xl p-4 group transition-colors duration-300">
                <div className="text-indigo-400 drop-shadow-[0_0_12px_rgba(99,102,241,0.8)] group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="h-12 w-12 mb-3" />
                </div>
                <span className="font-bold tracking-wider text-sm uppercase text-indigo-300/90 group-hover:text-indigo-200 transition-colors">Engineer</span>
              </div>
            </div>
            <div className="cube-face bottom hover:brightness-125 transition-all duration-300">
              <div className="flex flex-col items-center justify-center h-full bg-black/40 backdrop-blur-sm border-2 border-rose-500/30 hover:border-rose-400/80 shadow-[inset_0_0_30px_rgba(244,63,94,0.15)] rounded-xl p-4 group transition-colors duration-300">
                <div className="text-rose-400 drop-shadow-[0_0_12px_rgba(244,63,94,0.8)] group-hover:scale-110 transition-transform duration-300">
                  <Compass className="h-12 w-12 mb-3" />
                </div>
                <span className="font-bold tracking-wider text-sm uppercase text-rose-300/90 group-hover:text-rose-200 transition-colors">Seeker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
