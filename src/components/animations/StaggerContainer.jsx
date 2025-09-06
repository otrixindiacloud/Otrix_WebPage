"use client";

import { motion } from "framer-motion";

const StaggerContainer = ({ 
  children, 
  delay = 0, 
  staggerDelay = 0.1,
  className = "",
  ...props 
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        staggerChildren: staggerDelay,
        delayChildren: delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
