"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function GlowCard({ 
  children, 
  className = "",
  glowColor = "red",
  intensity = "medium"
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const glowIntensity = {
    low: "opacity-20",
    medium: "opacity-40",
    high: "opacity-60"
  };

  const glowColors = {
    red: "from-red-500 to-pink-500",
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-indigo-500",
    green: "from-green-500 to-emerald-500"
  };

  return (
    <motion.div
      className={`relative group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow Effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${glowColors[glowColor]} ${glowIntensity[intensity]} blur-xl transition-opacity duration-300`}
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
