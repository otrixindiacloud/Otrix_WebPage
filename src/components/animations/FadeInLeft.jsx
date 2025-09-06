"use client";

import { motion } from "framer-motion";

const FadeInLeft = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  distance = 50,
  className = "",
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -distance }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeInLeft;
