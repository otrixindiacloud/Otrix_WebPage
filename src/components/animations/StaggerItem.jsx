"use client";

import { motion } from "framer-motion";

const StaggerItem = ({ 
  children, 
  className = "",
  ...props 
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default StaggerItem;
