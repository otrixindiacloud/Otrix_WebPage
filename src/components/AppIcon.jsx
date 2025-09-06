"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AppIcon({ size = "w-14 h-14", className = "" }) {
  return (
    <motion.div
      className={`${size} ${className} relative overflow-hidden rounded-lg shadow-lg`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src="/otrix.jpg"
        alt="Otrix India Tech Logo"
        fill
        className="object-cover"
        sizes="(max-width: 1000px) 620px, 645px"
        priority
        onError={(e) => {
          // Fallback to a gradient that matches the site's color scheme
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement.innerHTML = `
            <div class="w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent"></div>
              <span class="text-white font-bold text-lg relative z-10">O</span>
              <div class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          `;
        }}
      />
    </motion.div>
  );
}
