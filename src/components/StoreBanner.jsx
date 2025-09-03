"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";



export default function StoreBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const bannerSlides = [
    {
      id: 1,
      title: "Request Your Catalog",
      subtitle: "Get a personalized catalog tailored to your corporate gift needs",
      description: "Discover our comprehensive collection of premium corporate gifts and promotional items. Request your personalized catalog today and explore our curated selection designed for your business needs.",
      background: "linear-gradient(135deg, #ff6b35 0%, #ffffff 25%, #ffd23f 50%, #ff6b35 75%, #e55a2b 100%)",
      accent: "from-orange-500 via-white to-orange-600",
      cta: "Request Catalog"
    },
    {
      id: 2,
      title: "Premium Corporate Gifts",
      subtitle: "Excellence Since 2015",
      description: "Serving leading multinational companies in Bahrain with premium quality gifts that make lasting impressions on your clients and employees.",
      background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 25%, #ffff00 50%, #000000 75%, #333333 100%)",
      accent: "from-black via-yellow-400 to-gray-800",
      cta: "View Products"
    },
    {
      id: 3,
      title: "Custom Branding Solutions",
      subtitle: "Your Brand, Our Expertise",
      description: "Professional logo embossing, custom color schemes, and personalized messaging for your corporate identity. Get your personalized catalog to see our full range.",
      background: "linear-gradient(135deg, #ffb366 0%, #ffcc99 25%, #ffd9b3 50%, #ffa366 75%, #ff9933 100%)",
      accent: "from-orange-300 via-orange-200 to-orange-400",
      cta: "Get Catalog"
    },
    {
      id: 4,
      title: "Luxury Gift Collections",
      subtitle: "Premium Quality, Exceptional Service",
      description: "Explore our exclusive range of luxury corporate gifts designed to impress your most valued clients and partners. From elegant accessories to sophisticated office essentials.",
      background: "linear-gradient(135deg, #6b7280 0%, #9ca3af 25%, #d1d5db 50%, #4b5563 75%, #374151 100%)",
      accent: "from-gray-500 via-gray-300 to-gray-600",
      cta: "Explore Collection"
    },
    {
      id: 5,
      title: "Seasonal Specials",
      subtitle: "Limited Time Offers",
      description: "Discover our seasonal collection of corporate gifts perfect for holidays, celebrations, and special occasions. Limited quantities available.",
      background: "linear-gradient(135deg, #fbbf24 0%, #fde047 25%, #fef3c7 50%, #f59e0b 75%, #d97706 100%)",
      accent: "from-yellow-400 via-yellow-200 to-yellow-500",
      cta: "Shop Now"
    },
    {
      id: 6,
      title: "Corporate Partnerships",
      subtitle: "Building Lasting Relationships",
      description: "Partner with us for your corporate gifting needs. We offer customized solutions, bulk discounts, and dedicated account management for your business.",
      background: "linear-gradient(135deg, #dc2626 0%, #ef4444 25%, #fca5a5 50%, #b91c1c 75%, #991b1b 100%)",
      accent: "from-red-600 via-red-300 to-red-700",
      cta: "Partner With Us"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [bannerSlides.length, isTransitioning]);

  const goToSlide = (index) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  return (
    <motion.div 
      className="relative w-full h-96 md:h-[32rem] lg:h-[36rem] overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Slides with Advanced Animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ 
            opacity: 0, 
            scale: 1.1,
            x: 100,
            rotateY: 15
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: 0,
            rotateY: 0
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.9,
            x: -100,
            rotateY: -15
          }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="absolute inset-0"
        >
          {/* Background with Pattern */}
          <motion.div 
            className="absolute inset-0"
            style={{ background: bannerSlides[currentSlide].background }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Geometric Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            </div>
            
            {/* Accent Gradient */}
            <motion.div 
              className={`absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l ${bannerSlides[currentSlide].accent} opacity-30`}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.3 }}
            ></motion.div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="relative z-10 h-full flex items-end pb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <div className="text-center mb-6">
                  <motion.div 
                    className="flex justify-center mb-3"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <motion.div 
                      className="text-lg md:text-xl font-black text-white tracking-wider uppercase bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent"
                      animate={{ 
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    >
                      CORPORATE GIFTS
                    </motion.div>
                  </motion.div>
                  <motion.h1 
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-3 leading-tight tracking-tight"
                    initial={{ y: 30, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {bannerSlides[currentSlide].title}
                  </motion.h1>
                  <motion.h2 
                    className="text-xl md:text-2xl text-orange-200 font-bold mb-2 tracking-wide"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {bannerSlides[currentSlide].subtitle}
                  </motion.h2>
                  <motion.p 
                    className="text-base md:text-lg text-gray-100 leading-relaxed mb-6 font-medium max-w-xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {bannerSlides[currentSlide].description}
                  </motion.p>
                </div>
                
                <motion.button 
                  className={`bg-gradient-to-r ${bannerSlides[currentSlide].accent} text-white font-black px-10 py-5 rounded-full text-lg uppercase tracking-wider border-2 border-white/20 shadow-2xl`}
                  initial={{ y: 30, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.5, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {bannerSlides[currentSlide].cta}
                </motion.button>
              </div>
            </div>

            {/* Animated Decorative Elements */}
            <motion.div 
              className="absolute right-20 top-20 w-32 h-32 bg-gradient-to-br from-orange-500 via-white to-orange-600 rounded-full opacity-25"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
                opacity: [0.25, 0.5, 0.25]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            ></motion.div>
            <motion.div 
              className="absolute right-40 bottom-20 w-20 h-20 bg-gradient-to-br from-black via-yellow-400 to-gray-800 rounded-full opacity-25"
              animate={{ 
                scale: [1, 1.6, 1],
                opacity: [0.25, 0.7, 0.25]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
            ></motion.div>
            <motion.div 
              className="absolute left-20 top-32 w-16 h-16 bg-gradient-to-br from-orange-300 via-orange-200 to-orange-400 rounded-full opacity-20"
              animate={{ 
                scale: [1, 1.4, 1],
                rotate: [360, 0, 360],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 2
              }}
            ></motion.div>
            <motion.div 
              className="absolute left-40 bottom-32 w-12 h-12 bg-gradient-to-br from-gray-500 via-gray-300 to-gray-600 rounded-full opacity-20"
              animate={{ 
                scale: [1, 1.5, 1],
                rotate: [0, -180, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 3
              }}
            ></motion.div>
            
            {/* Animated Luxury Brand Icons */}
            <motion.div 
              className="absolute right-10 top-1/2 transform -translate-y-1/2 space-y-4 opacity-30"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 0.3 }}
              transition={{ duration: 1, delay: 1.7 }}
            >
              {["DIOR", "CHANEL", "ARMANI"].map((brand, index) => (
                <motion.div 
                  key={brand}
                  className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.9 + index * 0.2 }}
                  whileHover={{ 
                    scale: 1.2, 
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    y: -5
                  }}
                >
                  <span className="text-white text-xs font-bold">{brand}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        disabled={isTransitioning}
        className={`absolute left-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 via-white to-orange-600 text-black p-4 rounded-full backdrop-blur-sm z-20 shadow-xl border-2 border-white/30 ${
          isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        whileHover={{ 
          scale: 1.25, 
          x: -5,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous slide"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      
      <motion.button
        onClick={nextSlide}
        disabled={isTransitioning}
        className={`absolute right-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-black via-yellow-400 to-gray-800 text-white p-4 rounded-full backdrop-blur-sm z-20 shadow-xl border-2 border-white/30 ${
          isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        whileHover={{ 
          scale: 1.25, 
          x: 5,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next slide"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Enhanced Slide Indicators */}
      <motion.div 
        className="absolute top-20 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        {bannerSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-4 h-4 rounded-full ${
              isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.4 + index * 0.1 }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              className={`w-full h-full rounded-full ${
                index === currentSlide 
                  ? "bg-gradient-to-r from-orange-500 via-white to-orange-600" 
                  : "bg-gray-400/50"
              }`}
              animate={{
                scale: index === currentSlide ? [1, 1.5, 1] : 1,
                boxShadow: index === currentSlide 
                  ? ["0 0 0 0 rgba(249, 115, 22, 0.5)", "0 0 0 10px rgba(249, 115, 22, 0)", "0 0 0 0 rgba(249, 115, 22, 0)"]
                  : "0 0 0 0 rgba(0, 0, 0, 0)"
              }}
              transition={{ 
                duration: 2, 
                repeat: index === currentSlide ? Infinity : 0,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        ))}
      </motion.div>

      {/* Brand Badge - Removed as it's now positioned below header */}



      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: "25%", left: "25%", color: "orange-400", size: "w-2 h-2", delay: 0 },
          { top: "75%", right: "33%", color: "yellow-400", size: "w-1 h-1", delay: 1 },
          { top: "50%", left: "50%", color: "gray-500", size: "w-1.5 h-1.5", delay: 2 },
          { top: "33%", right: "25%", color: "black", size: "w-1 h-1", delay: 3 },
          { bottom: "33%", left: "33%", color: "orange-300", size: "w-1.5 h-1.5", delay: 4 },
          { top: "60%", left: "15%", color: "white", size: "w-1 h-1", delay: 5 },
          { bottom: "20%", right: "20%", color: "yellow-300", size: "w-1 h-1", delay: 6 },
          { top: "40%", right: "15%", color: "gray-400", size: "w-1 h-1", delay: 7 },
          { bottom: "60%", left: "60%", color: "orange-200", size: "w-1 h-1", delay: 8 }
        ].map((particle, index) => (
          <motion.div
            key={index}
            className={`absolute ${particle.size} bg-${particle.color} rounded-full opacity-60`}
            style={{
              top: particle.top,
              left: particle.left,
              right: particle.right,
              bottom: particle.bottom
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
