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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-red-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl font-bold text-red-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 mb-4 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Otrix India Tech is a leading information technology (IT) company for IT Solutions & software services
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 max-w-5xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We specialize in Web and Mobile Apps Development, offering customized solutions in Oracle Apex, Data Analytics & AI, Python for Data Science, Django Python, OCI, Power BI, Microsoft Azure, Google Cloud, React Native, and Flutter.
            </motion.p>
            <motion.div 
              className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-lg font-bold text-red-700 mb-3 text-center">🌍 Our Services Available In:</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["India", "Dubai", "Qatar", "UAE", "Saudi Arabia", "Bahrain", "Kuwait", "Oman"].map((country, index) => (
                  <motion.span
                    key={country}
                    className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-red-200 shadow-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: "#fef2f2" }}
                  >
                    {country}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { number: 500, label: "Projects Completed", suffix: "+" },
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
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    <CountUp end={stat.number} duration={2} delay={1.0 + index * 0.2} />
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-red-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Services List */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="text-red-600">Services</span>{" "}
                <span className="text-gray-800">We are Providing</span>
              </motion.h2>
              
              <div className="space-y-4">
                {servicesList.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-3 h-3 bg-gray-800 rounded-sm flex-shrink-0 group-hover:bg-red-600 transition-colors duration-300"></div>
                    <span className="text-lg text-gray-800 font-medium group-hover:text-red-600 transition-colors duration-300">
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
                  className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
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
                >
                  {/* Hover Background Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  <div className="relative z-10 flex items-center space-x-4">
                    {/* Service Icon */}
                    <motion.div 
                      className="text-gray-700 group-hover:text-red-600 transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    {/* Service Name */}
                    <motion.h4 
                      className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300 flex-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.name}
                    </motion.h4>
                    
                    {/* Checkmark Icon */}
                    <motion.div 
                      className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </motion.div>
                  </div>

                  {/* Animated Border on Hover */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl border-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
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
            <h2 className="text-5xl font-bold text-red-600 mb-6">All Services</h2>
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
                className="bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-200"
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
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

          {/* Technology Categories */}
          <div className="mb-12">
            {[
              {
                title: "Frontend Technologies",
                techs: ["React.js", "Angular", "Vue.js", "NextJS", "TypeScript", "HTML", "CSS", "Bootstrap", "Javascript"]
              },
              {
                title: "Backend Technologies", 
                techs: ["Node JS", "Python", "Django", "Java", "C", "PHP"]
              },
              {
                title: "Mobile Development",
                techs: ["Flutter", "React Native", "Swift", "Kotlin", "Objective-C"]
              },
              {
                title: "Databases",
                techs: ["SQL", "MySQL", "MongoDB", "PostgreSQL", "Redis", "Elasticsearch"]
              },
              {
                title: "Cloud & DevOps",
                techs: ["AWS", "Google Cloud", "Azure", "Oracle Cloud", "Docker", "Kubernetes", "Git", "Firebase"]
              },
              {
                title: "Data & Analytics",
                techs: ["AI/ML", "Power BI", "Apex", "Big Data", "Data Analytics"]
              }
            ].map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">{category.title}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {category.techs.map((tech, techIndex) => {
                    const techIndexInMain = technologies.indexOf(tech);
                    return (
                      <motion.div
                        key={techIndex}
                        className="group cursor-pointer"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: techIndex * 0.05,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          y: -3,
                          scale: 1.03,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="relative bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-red-300 group-hover:bg-red-50">
                          {/* Technology Icon */}
                          <div className="mb-3 flex justify-center">
                            <TechnologyIcon 
                              technology={tech}
                              size="w-12 h-12"
                              showName={false}
                            />
                          </div>
                          
                          {/* Technology Name */}
                          <motion.h5 
                            className="text-xs font-semibold text-gray-800 text-center group-hover:text-red-600 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.h5>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Technologies Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">All Technologies</h4>
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
                  <div className="relative bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-red-300 group-hover:bg-red-50">
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
                      className="text-xs font-semibold text-gray-800 text-center group-hover:text-red-600 transition-colors duration-300"
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
            <div className="flex items-center justify-center mb-6">
              <div className="w-1 h-12 bg-red-500 mr-4"></div>
              <h2 className="text-4xl font-bold text-gray-800">Intelligent Automation</h2>
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
                className="bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-200"
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {tech.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence & Service Areas Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-red-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-red-600 mb-6">Global Presence</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Otrix India Tech operates globally with offices and partnerships across multiple continents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Global Operations */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">🌍 Global Operations</h3>
              <div className="space-y-4">
                {[
                  { region: "Asia Pacific", countries: ["India", "Australia"] },
                  { region: "North America", countries: ["Canada", "USA"] },
                  { region: "Europe", countries: ["UK", "Europe"] }
                ].map((region, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{region.region}</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.countries.map((country, countryIndex) => (
                        <span
                          key={countryIndex}
                          className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">🚀 Service Areas</h3>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <p className="text-gray-600 mb-6">
                  Our IT solutions and software services are specifically available in the following regions:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["India", "Dubai", "Qatar", "UAE", "Saudi Arabia", "Bahrain", "Kuwait", "Oman"].map((country, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{country}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <IndustriesSection />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-red-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-red-600 mb-6">Why Choose Otrix India Tech?</h2>
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
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4">
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
              <p className="text-xl text-red-100">
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
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.button>
              <motion.button 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-all duration-300 hover:scale-105"
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
