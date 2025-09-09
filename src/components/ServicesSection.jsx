"use client";


import { motion } from "framer-motion";
import { useState } from "react";
import TechnologyIcon from "./TechnologyIcon";
import { FaMobileAlt, FaGlobe, FaObjectGroup, FaChartBar } from "react-icons/fa";

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState(null);

  const serviceCards = [
    {
      name: "ERP / CRM",
      icon: <TechnologyIcon technology="Oracle Apex" size="w-12 h-12" />,
      desc: "Custom ERP and CRM solutions for business automation."
    },
    {
      name: "Web Development",
      icon: <FaGlobe className="w-12 h-12 text-[#3290AE]" />,
      desc: "Modern, scalable websites and web applications."
    },
    {
      name: "App Development",
      icon: <FaMobileAlt className="w-12 h-12 text-[#3290AE]" />,
      desc: "Cross-platform mobile app development (iOS & Android)."
    },
    {
      name: "Cloud Services",
      icon: <TechnologyIcon technology="AWS" size="w-12 h-12" />,
      desc: "Cloud migration, hosting, and management (AWS, Azure, Oracle Cloud)."
    },
    {
      name: "Data Analytics",
      icon: <FaChartBar className="w-12 h-12 text-[#3290AE]" />,
      desc: "Business intelligence, analytics, and reporting."
    },
    {
      name: "UI/UX Designer",
      icon: <FaObjectGroup className="w-12 h-12 text-[#3290AE]" />,
      desc: "User interface and experience design for digital products."
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#e0f7fa] to-[#f1f8e9] relative overflow-hidden">
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
            className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#3290AE] to-[#6BA464] drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We deliver innovative solutions in ERP/CRM, Data Analytics, Oracle Apex, Mobile & Web Development, and more. Explore our expertise below.
          </motion.p>
        </motion.div>

        {/* Modern Card Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {serviceCards.map((service, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer flex flex-col items-center justify-start text-center overflow-hidden p-0"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(50,144,174,0.25)",
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
            >
              {/* Accent Bar */}
              <div className="absolute left-0 top-0 h-full w-2  rounded-l-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Card Body */}
              <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-white/70 backdrop-blur-lg rounded-3xl  px-6 py-10 min-h-[240px]">
                {/* Service Icon */}
                <motion.div
                  className="mb-4"
                  whileHover={{
                    scale: 1.18,
                    rotate: [0, -6, 6, 0],
                    transition: { duration: 0.5 }
                  }}
                  animate={hoveredService === index ? {
                    scale: [1, 1.08, 1],
                    transition: { duration: 0.7, repeat: Infinity }
                  } : {}}
                >
                  {service.icon}
                </motion.div>
                {/* Service Name */}
                <motion.h4
                  className="text-lg font-bold text-[#3290AE] group-hover:text-[#6BA464] transition-colors duration-300 mb-2 drop-shadow-sm"
                  whileHover={{ scale: 1.07 }}
                >
                  {service.name}
                </motion.h4>
                {/* Service Description */}
                <p className="text-gray-700 text-sm font-medium mb-0 mt-1 px-1">
                  {service.desc}
                </p>
              </div>
              {/* Animated Border on Hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl  opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/services"
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#3290AE] to-[#6BA464] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg tracking-wide"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
          >
            View All Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
