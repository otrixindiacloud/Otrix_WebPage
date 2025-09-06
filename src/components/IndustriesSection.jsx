"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
    "Tracking Systems",
    "Social Networking",
    "Shopping App",
    "Manufacturing",
    "Logistics",
    "Smart City",
    "Non Profit",
    "Ecommerce & Retail",
    "Music & Entertainment",
    "Telecom",
    "Events and Ticketing",
    "Travel & Hospitality",
    "Booking Application",
    "Real Estate & Property",
    "Fintech",
    "Power & renewable energy",
    "Beauty & Wellness",
    "Enterprise Mobility",
    "CRM Solution",
    "Transportation",
    "Specialties And Services",
    "Auction System"
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
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
            Industries
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
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
          {industries.map((industry, index) => (
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
              <div className="relative bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 group-hover:border-red-300 group-hover:bg-red-50">
                {/* Checkmark Icon */}
                <motion.div 
                  className="absolute top-2 right-2 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                </motion.div>
                
                {/* Industry Name */}
                <motion.h4 
                  className="text-sm font-semibold text-gray-800 text-center group-hover:text-red-600 transition-colors duration-300 pr-6"
                  whileHover={{ scale: 1.05 }}
                >
                  {industry}
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
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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