"use client";

import { motion } from "framer-motion";
import TechnologyIcon from "../../components/TechnologyIcon";
import IndustriesSection from "../../components/IndustriesSection";
import { 
  FadeInUp, 
  FadeInLeft, 
  FadeInRight, 
  ScaleIn, 
  StaggerContainer, 
  StaggerItem, 
  HoverScale,
  CountUp,
  ScrollProgress,
  RevealOnScroll,
  TextReveal,
  MagneticButton,
  GlowCard
} from "../../components/animations";

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

const serviceCards = [
  {
    name: "Mobile App Development",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
      </svg>
    )
  },
  {
    name: "Web Development",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },
  {
    name: "Quality Assurance",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
      </svg>
    )
  },
  {
    name: "DevOps",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    name: "UI/UX Development",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },
  {
    name: "eCommerce Development",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    )
  },
  {
    name: "Networking Solution",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    name: "SEO & Digital Marketing",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  }
];

const servicesList = [
  "Web Development",
  "Android App Development", 
  "Angular JS Website Development",
  "React Js Website Development",
  "React Native Development",
  "Node JS Development"
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

const technologies = [
  "Data Analytics",
    "Node JS",
    "React Native",
    "Flutter",
    "Power BI",
    "Python",
    "Django",
    "React.js",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Oracle Cloud",
    "Oracle Apex",
    "NextJS",
    "Google Cloud",
    "Azure"
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Animated Background */}
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0f9ff]">
        {/* Decorative Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/service.png" 
            alt="Otrix Hero Background" 
            className="w-full h-100 object-cover object-center opacity-100 scale-100 blur-sm select-none pointer-events-none" 
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2e95b7]/70 via-white/60 to-[#e0f2fe]/80" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-4 py-24 flex flex-col items-center justify-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 text-[#2e95b7] drop-shadow-lg text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-gray-800 mb-6 max-w-3xl mx-auto drop-shadow text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Otrix India Tech is a leading information technology IT company for IT Solutions & software services
          </motion.p>
          {/* Statistics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: 100, label: "Projects Completed", suffix: "+" },
              { number: 50, label: "Technologies", suffix: "+" },
              { number: 8, label: "Countries Served", suffix: "+" },
              { number: 100, label: "Client Satisfaction", suffix: "%" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-[#2e95b7] mb-2">
                  <CountUp end={stat.number} duration={2} delay={1.0 + index * 0.2} />
                  {stat.suffix}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services List Section - moved and redesigned */}
      <section className="py-12 bg-gradient-to-r from-[#e0f2fe] via-white to-[#f0f9ff] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-10 w-40 h-40 bg-[#2e95b7] rounded-full blur-2xl opacity-10"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2e95b7] mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-700">Explore our main offerings for your digital growth</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/80 shadow-md border border-[#2e95b7]/10 hover:shadow-lg hover:bg-[#e0f2fe]/80 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
              >
                <div className="w-4 h-4 bg-[#2e95b7] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-[#2e95b7] transition-colors duration-300">
                  {service}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-[#2e95b7] rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#2e95b7] mb-6">Cities We Serve Internationally</h2>
            <p className="text-lg text-gray-700 mb-8">We proudly work with clients in these global cities:</p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Doha (Qatar)",
                "Manama (Bahrain)",
                "Dubai (UAE)",
                "Riyadh (Saudi Arabia)",
                "Kuwait City (Kuwait)",
                "Muscat (Oman)",
                "New York (USA)",
              ].map((city, idx) => (
                <motion.div
                  key={city}
                  className="bg-white border border-[#2e95b7]/30 rounded-xl px-6 py-4 shadow-md text-[#2e95b7] font-semibold text-lg flex items-center gap-2 hover:bg-[#e0f2fe] hover:text-[#1a5c7a] transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.07 }}
                  viewport={{ once: true }}
                >
                  <svg className="w-5 h-5 text-[#2e95b7] mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 20a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 110 12A6 6 0 0110 6zm0 2a4 4 0 100 8 4 4 0 000-8z" /></svg>
                  {city}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-[#2e95b7] mb-6">All Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive IT solutions to drive your business forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-200 flex flex-col items-center text-center"
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-[#2e95b7] rounded-full blur-2xl"></div>
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
              className="text-5xl font-bold text-[#2e95b7] mb-6"
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
              Looking for the best software development company? Hire Otrix India Tech for the latest technologies like Data Analytics,Node JS,React Native,Flutter, Power BI, Python,Django,React.js, MySQL,MongoDB, PostgreSQL,Oracle Cloud, Oracle Apex, NextJS,Google Cloud,Azure etc.
            </motion.p>
          </motion.div>

          {/* All Technologies Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">All Technologies</h4> */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.02,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -3,
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="relative bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-[#2e95b7] group-hover:bg-blue-50">
                    {/* Technology Icon */}
                    <div className="mb-2 flex justify-center">
                      <TechnologyIcon 
                        technology={tech}
                        size="w-10 h-10"
                        showName={false}
                      />
                    </div>
                    
                    {/* Technology Name */}
                    <motion.h5 
                      className="text-xs font-semibold text-gray-800 text-center group-hover:text-[#2e95b7] transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.h5>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intelligent Automation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="flex items-center justify-center mb-2">
                <span className="text-5xl text-[#2e95b7] mr-0">🤖</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 text-center">Intelligent Automation</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies to automate and optimize your business processes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationTech.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-200 flex flex-col items-center text-center"
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center items-center">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">
                  {tech.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-[#2e95b7] rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-[#2e95b7] mb-6">Why Choose Otrix India Tech?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We deliver exceptional results through our proven expertise and commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏆",
                title: "Expert Team",
                description: "Experienced developers with deep technical expertise"
              },
              {
                icon: "⚡",
                title: "Fast Delivery",
                description: "Agile development process ensuring timely project completion"
              },
              {
                icon: "🔒",
                title: "Secure Solutions",
                description: "Enterprise-grade security and data protection"
              },
              {
                icon: "📈",
                title: "Scalable Architecture",
                description: "Future-proof solutions that grow with your business"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="py-16 bg-[#a6d0de] relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/getquote.png" 
            alt="Call to Action Background" 
            className="w-full h-full object-cover object-center opacity-20 blur-sm select-none pointer-events-none" 
            draggable="false"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Get Quote And Get Free Estimation
              </h3>
              <p className="text-xl text-blue-100">
                Ready to transform your business with our expert services?
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
              viewport={{ once: true }}
            >
              <motion.button 
                className="bg-white text-[#2e95b7] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.button>
              <motion.button 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#2e95b7] transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Estimation
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
