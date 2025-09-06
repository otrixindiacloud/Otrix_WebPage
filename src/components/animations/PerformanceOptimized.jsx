"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useMemo } from "react";

export default function PerformanceOptimized({ 
  children, 
  className = "",
  animationType = "fadeIn",
  delay = 0,
  duration = 0.6
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  const animations = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 }
      };
    }

    const animationMap = {
      fadeIn: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration, delay, ease: "easeOut" }
      },
      slideInLeft: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration, delay, ease: "easeOut" }
      },
      slideInRight: {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration, delay, ease: "easeOut" }
      },
      scaleIn: {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration, delay, ease: "easeOut" }
      }
    };

    return animationMap[animationType] || animationMap.fadeIn;
  }, [shouldReduceMotion, animationType, duration, delay]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={animations.initial}
      animate={isInView ? animations.animate : animations.initial}
      transition={animations.transition}
    >
      {children}
    </motion.div>
  );
}
