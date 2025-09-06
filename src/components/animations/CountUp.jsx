"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const CountUp = ({ 
  end, 
  duration = 2,
  className = "",
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime;
      const startCount = 0;
      const endCount = end;
      const increment = endCount / (duration * 60); // 60fps

      const updateCount = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * endCount));
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isInView, end, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      {...props}
    >
      {count}
    </motion.span>
  );
};

export default CountUp;
