"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import TechnologyIcon from "./TechnologyIcon";

export default function TechnologiesSection() {
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    "Node JS",
    "C",
    "Bootstrap",
    "Angular",
    "HTML",
    "CSS",
    "Javascript",
    "Java",
    "Python",
    "Django",
    "React.js",
    "Flutter",
    "SQL",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Vue.js",
    "AI/ML",
    "Power BI",
    "Oracle Cloud",
    "Apex",
    "NextJS",
    "Azure",
    "TypeScript",
    "Git",
    "Docker",
    "Kubernetes",
    "Redis",
    "Elasticsearch",
    "AWS",
    "Google Cloud",
    "Firebase"
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-red-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-red-600 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl font-bold text-red-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technologies
          </motion.h2>
          <motion.h3 
            className="text-2xl font-semibold text-gray-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We Serve Technologies
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Looking for the best software development company? Hire Otrix India Tech for the latest technologies like AngularJs, ReactJs, NodeJs, Python, Swift, Kotlin, Flutter, Objective-C, Core Java, PHP etc.
          </motion.p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredTech(index)}
              onHoverEnd={() => setHoveredTech(null)}
            >
              <div className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:border-red-300">
                {/* Technology Icon */}
                <div className="mb-4 flex justify-center">
                  <TechnologyIcon 
                    technology={tech}
                    size="w-16 h-16"
                    showName={false}
                  />
                </div>
                
                {/* Technology Name */}
                <motion.h4 
                  className="text-sm font-semibold text-gray-800 text-center group-hover:text-red-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
