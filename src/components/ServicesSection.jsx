"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState(null);

  const servicesList = [
    "ERP / CRM Development",
    "Data Analytics",
    "Oracle Apex Development",
    "Mobile App Development",
    "Web Development",
    "React Js Website Development",
  ];

  const serviceCards = [
    {
      name: "Mobile App Development",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
        </svg>
      )
    },
    {
      name: "Web Development",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      name: "Quality Assurance",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
        </svg>
      )
    },

    {
      name: "UI/UX Development",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      name: "eCommerce Development",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      )
    },
    {
      name: "Data Analytics",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 17h2v-7H3v7zm4 0h2v-4H7v4zm4 0h2V7h-2v10zm4 0h2v-2h-2v2zm4 0h2v-9h-2v9z" />
        </svg>
      )
    },
  ];

  return (
  <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
  {/* Decorative background elements removed as per request */}

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
            className="text-5xl font-bold mb-6 text-[#3290AE]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Services
          </motion.h2>
          <motion.p
            className="text-lg text- mb-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We are a leading ERP/CRM software development company, offering customized solutions
          </motion.p>
          <motion.p
            className="text-lg text- max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            in Oracle Apex, Data Analytics & AI, Python for Data Science, Django Python, OCI, Power BI, Microsoft Azure, Google Cloud, React Native, and Flutter.
          </motion.p>
        </motion.div>

  <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Services List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-4xl font-bold mb-8 text-[#6BA464]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="text-[#3290AE]">Services</span>{" "}
              <span className="text-[#6BA464]">We are Providing</span>
            </motion.h3>

            <div className="space-y-4">
              {servicesList.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#6BA464]/20 hover:to-[#3290AE]/20 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-3 h-3 bg-[#3290AE] rounded-sm flex-shrink-0 group-hover:bg-[#6BA464] transition-colors duration-300"></div>
                  <span className="text-lg text-[#3290AE] font-medium group-hover:text-[#6BA464] transition-colors duration-300">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Service Cards Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {serviceCards.map((service, index) => (
              <motion.div
                key={index}
                className="relative bg-white border-2 border-[#3290AE] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
              >
                {/* Hover Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#6BA464]/30 to-[#3290AE]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                <div className="relative z-10 flex flex-col items-center justify-center w-full">
                  {/* Service Icon */}
                  <motion.div
                    className="text-[#3290AE] group-hover:text-[#6BA464] transition-colors duration-300 mb-4 flex items-center justify-center"
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                    animate={hoveredService === index ? {
                      scale: [1, 1.1, 1],
                      transition: { duration: 0.6, repeat: Infinity }
                    } : {}}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Service Name */}
                  <motion.h4
                    className="text-xl font-bold text-[#3290AE] group-hover:text-[#6BA464] transition-colors duration-300 mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.name}
                  </motion.h4>

                  {/* Checkmark Icon: Only show when NOT hovered */}
                  {hoveredService !== index && (
                    <motion.div
                      className="text-[#6BA464] opacity-100 transition-opacity duration-300 mt-2"
                    >
                      <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </motion.div>
                  )}
                </div>

                {/* Animated Border on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-[#6BA464] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

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
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#3290AE] to-[#6BA464] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
