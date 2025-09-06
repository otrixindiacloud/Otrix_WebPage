"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AppIcon({ size = "w-14 h-14", className = "" }) {
  return (
    <motion.div
      className={`w-52 h-0 ${className} flex items-center justify-start rounded-lg shadow-lg bg-transparent`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      style={{ marginLeft: '-70px' , marginTop: '20px' }}
    >
      <Image
        src="/OtrixPNG.png"
        alt="Otrix India Tech Logo"
        width={520}
        height={80}
        className="object-contain"
        priority
      />
    </motion.div>
  );
}
