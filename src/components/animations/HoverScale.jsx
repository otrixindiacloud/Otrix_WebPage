"use client";

import { motion } from "framer-motion";

const HoverScale = ({ 
  children, 
  scale = 1.05,
  className = "",
  ...props 
}) => {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default HoverScale;
