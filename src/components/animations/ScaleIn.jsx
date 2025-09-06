"use client";

import { motion } from "framer-motion";

const ScaleIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  scale = 0.8,
  className = "",
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScaleIn;
