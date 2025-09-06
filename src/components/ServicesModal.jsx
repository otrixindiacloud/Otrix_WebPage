"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    icon: "✏️",
    title: "UI/UX Development",
    description: "Creating experiences that inspires engagement"
  },
  {
    icon: "👥",
    title: "Hire Dedicated Team",
    description: "Hire developers with unbeatable Skills"
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description: "Build high-converting mobile apps"
  },
  {
    icon: "📦",
    title: "MVP Development",
    description: "Launch your Product to market faster"
  },
  {
    icon: "📢",
    title: "Digital Marketing",
    description: "Creating data-driven strategies to drive results"
  },
  {
    icon: "🏗️",
    title: "Product Engineering",
    description: "Your tech partner from concept to launch"
  },
  {
    icon: "🌐",
    title: "Web Development",
    description: "Websites that empower your online presence"
  },
  {
    icon: "⚙️",
    title: "Digital Transformation",
    description: "Modernizing legacy business processes"
  },
  {
    icon: "☁️",
    title: "Cloud Services",
    description: "Navigate success with our expert cloud solutions"
  },
  {
    icon: "💻",
    title: "Software Development",
    description: "Delivering best custom software to you"
  },
  {
    icon: "🛒",
    title: "E-Commerce Development",
    description: "Custom e-commerce solutions for all industries"
  },
  {
    icon: "💡",
    title: "Technology Consulting",
    description: "Creating digital transformation roadmaps"
  },
  {
    icon: "🤝",
    title: "IT Consulting",
    description: "Your partner in IT Consulting excellence"
  }
];

const automationTech = [
  {
    icon: "🧠",
    title: "AI/ML",
    description: "Artificial Intelligence & Machine Learning"
  },
  {
    icon: "🤖",
    title: "ChatBot",
    description: "Intelligent Conversational AI"
  },
  {
    icon: "🥽",
    title: "Augmented Reality",
    description: "Immersive AR Experiences"
  },
  {
    icon: "🔗",
    title: "Blockchain",
    description: "Secure Decentralized Solutions"
  },
  {
    icon: "📊",
    title: "Big Data",
    description: "Advanced Data Analytics"
  },
  {
    icon: "🌐",
    title: "Internet of Things",
    description: "Connected Smart Solutions"
  }
];

export default function ServicesModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("services");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        
        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-black text-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 p-6 z-10">
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                <button
                  onClick={() => setActiveTab("services")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "services"
                      ? "bg-red-600 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  Services
                </button>
                <button
                  onClick={() => setActiveTab("automation")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "automation"
                      ? "bg-red-600 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  Intelligent Automation
                </button>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
            {activeTab === "services" && (
              <div className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8"
                >
                  <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Comprehensive IT solutions to drive your business forward
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "automation" && (
              <div className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-1 h-8 bg-red-600 mr-4"></div>
                    <h2 className="text-4xl font-bold">Intelligent Automation</h2>
                  </div>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Cutting-edge automation technologies to transform your business
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {automationTech.map((tech, index) => (
                    <motion.div
                      key={tech.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-white">
                        {tech.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {tech.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="sticky bottom-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 p-6">
            <div className="text-center">
              <p className="text-lg mb-4">Get Quote And Get Free Estimation</p>
              <div className="flex justify-center space-x-4">
                <button className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-semibold">
                  Get Quote
                </button>
                <button className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-semibold">
                  Get Free Estimation
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
