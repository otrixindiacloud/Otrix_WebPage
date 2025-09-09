"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { industryIcons } from "./industryIcons";

export default function IndustriesSection() {
  const [hoveredIndustry, setHoveredIndustry] = useState(null);

  const industries = [
    "Healthcare & Fitness",
    "Education & Learning", 
    "Government",
    "On-Demand Solution",
    "Information Services",
    "Insurance",
    "Food & Restaurant",
    "B2B Solution",
    "Shopping App",
    "Manufacturing",
    "Ecommerce & Retail",
    "Travel & Hospitality",
    "Booking Application",
    "Real Estate & Property",
    "Power & renewable energy",
    "Beauty & Wellness",
    "CRM Solution",
    "Transportation"
  ];

  return (
  <section className="py-20 relative overflow-hidden" >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, #3290AE 0%, #6BA464 100%)' }}></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full blur-3xl" style={{ background: '#6BA464' }}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full blur-2xl" style={{ background: '#3290AE' }}></div>
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
            className="text-5xl font-bold mb-6"
            style={{ background: 'linear-gradient(90deg, #6BA464 0%, #3290AE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Industries
          </motion.h2>
          <motion.p 
            className="text-lg text max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Otrix India Tech provides solutions for various leading industries across the globe. We have expertise in delivering cutting-edge technology solutions tailored to specific industry needs.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {industries.map((industry, index) => {
            const Icon = industryIcons[industry];
            return (
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
                onHoverStart={() => setHoveredIndustry(index)}
                onHoverEnd={() => setHoveredIndustry(null)}
              >
                <div className="relative bg-white/80 border border-[#6BA464] rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:border-[#3290AE] flex flex-col items-center justify-center min-h-[160px] min-w-[160px] h-[160px] w-full">
                  {/* Industry Icon */}
                  {Icon && (
                    <Icon className="mb-2 text-3xl transition-colors duration-300" style={{ color: hoveredIndustry === index ? '#3290AE' : '#6BA464' }} />
                  )}
                  {/* Industry Name */}
                  <motion.h4 
                    className="text-sm font-semibold text-gray-800 text-center group-hover:text-[#3290AE] transition-colors duration-300 pr-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    {industry}
                  </motion.h4>
                </div>
              </motion.div>
            );
          })}
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
            className="px-8 py-4 bg-gradient-to-r from-[#6BA464] to-[#3290AE] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}