"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HoverLink } from "./ui/hover-link";
import { Typewriter, CountUp } from "./animations";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-black via-blue-900 to-red-900 text-white py-20 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Dots */}
        <motion.div 
          className="absolute top-20 left-20 w-3 h-3 bg-red-500 rounded-full opacity-60"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-2 h-2 bg-blue-400 rounded-full opacity-80"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-32 w-4 h-4 bg-white rounded-full opacity-70"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-2 h-2 bg-blue-400 rounded-full opacity-90"
          animate={{ 
            y: [0, -18, 0],
            opacity: [0.9, 1, 0.9]
          }}
          transition={{ 
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-red-500 to-blue-500 rounded-lg"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-40 w-24 h-24 bg-gradient-to-br from-blue-500 to-white rounded-lg"
          animate={{ 
            rotate: [0, -3, 3, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-60 right-60 w-20 h-20 bg-gradient-to-br from-red-500 to-black rounded-lg"
          animate={{ 
            rotate: [0, 4, -4, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-80 right-80 w-16 h-16 bg-gradient-to-br from-white to-blue-500 rounded-lg"
          animate={{ 
            rotate: [0, -2, 2, 0],
            scale: [1, 1.12, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Process Labels */}
      <div className="absolute right-20 top-32 space-y-8 opacity-60">
        <motion.div 
          className="text-sm font-semibold text-white/80"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Idea
        </motion.div>
        <motion.div 
          className="text-sm font-semibold text-white/80"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Initiate
        </motion.div>
        <motion.div 
          className="text-sm font-semibold text-white/80"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Implement
        </motion.div>
        <motion.div 
          className="text-sm font-semibold text-white/80"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          Innovate
        </motion.div>
      </div>

      {/* Blue Notification Icon */}
      <motion.div 
        className="absolute top-20 left-20 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{ 
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 0 0 rgba(62, 153, 174, 0.7)",
            "0 0 0 10px rgba(62, 153, 174, 0)",
            "0 0 0 0 rgba(62, 153, 174, 0)"
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-red-500 font-semibold text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A Trusted IT Partner
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The best place for your all{" "}
            <Typewriter 
              text="Web Development & IT Solutions" 
              speed={100}
              delay={1.2}
              className="text-red-400"
            />
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-white mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Otrix India Tech is a leading information technology (IT) company for IT Solutions & software services, deals in Web and Mobile Apps Development.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <HoverLink 
              href="/contact" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              hoverDelay={700}
            >
              FREE CONSULTATION
            </HoverLink>
            <HoverLink 
              href="/careers" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 text-center"
              hoverDelay={700}
            >
              Join Our Team
            </HoverLink>
          </motion.div>

          {/* Statistics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              { number: 500, label: "Projects Completed", suffix: "+" },
              { number: 8, label: "Countries Served", suffix: "+" },
              { number: 10, label: "Years Experience", suffix: "+" },
              { number: 99, label: "Client Satisfaction", suffix: "%" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">
                  <CountUp end={stat.number} duration={2} delay={1.5 + index * 0.2} />
                  {stat.suffix}
                </div>
                <div className="text-sm text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Geometric shapes are already positioned above */}
        <div className="hidden lg:block">
          {/* This space is for the geometric shapes which are positioned absolutely */}
        </div>
      </div>
    </section>
  );
}
