"use client";

import { motion } from "framer-motion";

const FadeInUp = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  distance = 30,
  className = "",
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;
