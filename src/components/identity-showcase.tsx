"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Code, Gamepad2, Palette, Laptop, Layers } from "lucide-react";

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
    title: "Photographer",
    icon: <Camera className="h-6 w-6" />,
    color: "from-amber-500 to-orange-400",
    description: "Capturing moments through images",
  },
  {
    id: 3,
    title: "Gamer",
    icon: <Gamepad2 className="h-6 w-6" />,
    color: "from-green-500 to-emerald-400",
    description: "Exploring virtual worlds to escape the real one ",
  },
  {
    id: 4,
    title: "Designer",
    icon: <Palette className="h-6 w-6" />,
    color: "from-purple-500 to-pink-400",
    description: "Creating visually stunning and intuitive experiences",
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
      // Manual rotation when user is interacting
      cubeRef.style.transform = `rotateX(${cubeRotation.x}deg) rotateY(${cubeRotation.y}deg)`;
      cubeRef.style.animation = "none";
    } else {
      // Auto rotation when not interacting - start from current position
      const startX = cubeRotation.x;
      const startY = cubeRotation.y;
      const endX = startX + 360;
      const endY = startY + 360;

      // Create dynamic keyframes animation starting from current position
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

      // Remove any existing dynamic styles
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
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

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
      <div className="relative">
        {/* Main display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdentity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-r ${activeIdentity.color} p-8 rounded-2xl shadow-lg text-white`}
            onMouseEnter={() => setIsAutoRotating(false)}
            onMouseLeave={() => setIsAutoRotating(true)}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white/20 p-6 rounded-full backdrop-blur-sm">
                {activeIdentity.icon}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">
                  I am a {activeIdentity.title}
                </h3>
                <p className="text-white/90">{activeIdentity.description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Identity selector */}
        <div className="flex justify-center mt-6 gap-3">
          {identities.map((identity) => (
            <motion.button
              key={identity.id}
              className={`p-3 rounded-full transition-all ${
                activeIdentity.id === identity.id
                  ? `bg-gradient-to-r ${identity.color} shadow-md`
                  : "bg-muted hover:bg-muted/80"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveIdentity(identity);
                setIsAutoRotating(false);
              }}
            >
              <div
                className={
                  activeIdentity.id === identity.id
                    ? "text-white"
                    : "text-foreground"
                }
              >
                {identity.icon}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* 3D rotating cube - visual representation of multiple identities */}
      <div className="mt-16 relative h-64 w-64 mx-auto perspective">
        <div
          ref={setCubeRef}
          className={`cube-container cursor-grab ${
            isDragging ? "cursor-grabbing" : ""
          } select-none transition-transform duration-300 ease-out`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="cube">
            <div className="cube-face front hover:brightness-110 transition-all duration-200">
              <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg p-4">
                <Code className="h-12 w-12 mb-2" />
                <span className="font-bold">Developer</span>
              </div>
            </div>
            <div className="cube-face back hover:brightness-110 transition-all duration-200">
              <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-amber-500 to-orange-400 text-white rounded-lg p-4">
                <Camera className="h-12 w-12 mb-2" />
                <span className="font-bold">Photographer</span>
              </div>
            </div>
            <div className="cube-face right hover:brightness-110 transition-all duration-200">
              <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-green-500 to-emerald-400 text-white rounded-lg p-4">
                <Gamepad2 className="h-12 w-12 mb-2" />
                <span className="font-bold">Gamer</span>
              </div>
            </div>
            <div className="cube-face left hover:brightness-110 transition-all duration-200">
              <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-lg p-4">
                <Palette className="h-12 w-12 mb-2" />
                <span className="font-bold">Designer</span>
              </div>
            </div>
            <div className="cube-face top hover:brightness-110 transition-all duration-200">
              <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-indigo-500 to-violet-400 text-white rounded-lg p-4">
                <Laptop className="h-12 w-12 mb-2" />
                <span className="font-bold">Creator</span>
              </div>
            </div>
            <div className="cube-face bottom hover:brightness-110 transition-all duration-200">
              <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-rose-500 to-red-400 text-white rounded-lg p-4">
                <Layers className="h-12 w-12 mb-2" />
                <span className="font-bold">Innovator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
