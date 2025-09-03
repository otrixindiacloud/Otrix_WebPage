"use client";

import { useRef, useEffect, useState } from "react";

export default function IndustriesSection() {
  const scrollContainerRef = useRef(null);
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const autoScrollIntervalRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current && !isScrolling) {
      setIsScrolling(true);
      const newIndex = Math.max(0, currentScrollIndex - 1);
      setCurrentScrollIndex(newIndex);
      
      scrollContainerRef.current.scrollBy({ 
        left: -300, 
        behavior: 'smooth' 
      });
      
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current && !isScrolling) {
      setIsScrolling(true);
      const newIndex = Math.min(industries.length - 1, currentScrollIndex + 1);
      setCurrentScrollIndex(newIndex);
      
      scrollContainerRef.current.scrollBy({ 
        left: 300, 
        behavior: 'smooth' 
      });
      
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  // Auto-scroll functionality
  const startAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    
    autoScrollIntervalRef.current = setInterval(() => {
      if (!isHovered && scrollContainerRef.current && !isScrolling) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll - 10) {
          // Reset to beginning for infinite loop
          container.scrollTo({ left: 0, behavior: 'smooth' });
          setCurrentScrollIndex(0);
        } else {
          // Continue scrolling right
          container.scrollBy({ left: 300, behavior: 'smooth' });
          setCurrentScrollIndex(prev => Math.min(prev + 1, industries.length - 1));
        }
      }
    }, 2500); // Auto-scroll every 2.5 seconds
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  // Update scroll index based on scroll position
  const updateScrollIndex = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = 300; // Approximate card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentScrollIndex(Math.max(0, Math.min(newIndex, industries.length - 1)));
    }
  };

  // Stop any ongoing smooth scrolling when component unmounts
  const stopScrolling = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft,
        behavior: 'auto'
      });
    }
  };

  // Add event listeners and auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    
    if (scrollContainer) {
      const handleScroll = () => {
        updateScrollIndex();
        // Stop any ongoing smooth scrolling when user manually scrolls
        scrollContainer.style.scrollBehavior = 'auto';
      };

      const handleWheel = () => {
        // Stop smooth scrolling on wheel events
        scrollContainer.style.scrollBehavior = 'auto';
      };

      scrollContainer.addEventListener('scroll', handleScroll);
      scrollContainer.addEventListener('wheel', handleWheel);

      // Start auto-scroll when component mounts
      if (isAutoScrolling) {
        startAutoScroll();
      }

      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
        scrollContainer.removeEventListener('wheel', handleWheel);
        stopAutoScroll();
      };
    }
  }, [isAutoScrolling]);

  // Handle auto-scroll state changes
  useEffect(() => {
    if (isAutoScrolling && !isHovered) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
    
    return () => stopAutoScroll();
  }, [isAutoScrolling, isHovered]);

  const industries = [
    {
      id: 1,
      name: "BAGS & WALLETS",
      icon: (
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-amber-300 transition-all duration-500">
          <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
            <div className="w-16 h-8 bg-gray-300 rounded mb-1 group-hover:bg-amber-200 transition-colors duration-500"></div>
            <div className="w-12 h-6 bg-gray-300 rounded group-hover:bg-amber-300 transition-colors duration-500"></div>
          </div>
        </div>
      ),
      description: "Premium bags and wallets for corporate needs"
    },
    {
      id: 2,
      name: "DRINKWARE",
      icon: (
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-amber-300 transition-all duration-500">
          <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
            <div className="w-8 h-12 bg-gray-300 rounded-full mb-1 group-hover:bg-amber-200 transition-colors duration-500"></div>
            <div className="w-6 h-8 bg-gray-300 rounded-full group-hover:bg-amber-300 transition-colors duration-500"></div>
          </div>
        </div>
      ),
      description: "Elegant drinkware solutions"
    },
    {
      id: 3,
      name: "ELECTRONIC DEVICES",
      icon: (
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-amber-300 transition-all duration-500">
          <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
            <div className="w-16 h-10 bg-gray-300 rounded mb-1 group-hover:bg-amber-200 transition-colors duration-500"></div>
            <div className="w-8 h-6 bg-gray-300 rounded group-hover:bg-amber-300 transition-colors duration-500"></div>
          </div>
        </div>
      ),
      description: "Modern electronic gadgets and accessories"
    },
    {
      id: 4,
      name: "HOME & OFFICE ACCESSORIES",
      icon: (
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-amber-300 transition-all duration-500">
          <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
            <div className="w-16 h-12 bg-gray-300 rounded mb-1 group-hover:bg-amber-200 transition-colors duration-500"></div>
            <div className="w-8 h-4 bg-gray-300 rounded group-hover:bg-amber-300 transition-colors duration-500"></div>
          </div>
        </div>
      ),
      description: "Essential accessories for work and home"
    },
    {
      id: 5,
      name: "WRITING INSTRUMENTS",
      icon: (
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-amber-300 transition-all duration-500">
          <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
            <div className="w-2 h-16 bg-gray-300 rounded-full mb-1 group-hover:bg-amber-200 transition-colors duration-500"></div>
            <div className="w-8 h-2 bg-gray-300 rounded-full group-hover:bg-amber-300 transition-colors duration-500"></div>
          </div>
        </div>
      ),
      description: "Premium pens and writing accessories"
    },
    {
      id: 6,
      name: "TECHNOLOGY GADGETS",
      icon: (
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-amber-300 transition-all duration-500">
          <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
            <div className="w-12 h-8 bg-gray-300 rounded mb-1 group-hover:bg-amber-200 transition-colors duration-500"></div>
            <div className="w-6 h-4 bg-gray-300 rounded group-hover:bg-amber-300 transition-colors duration-500"></div>
          </div>
        </div>
      ),
      description: "Smart tech solutions for modern needs"
    },
    {
      id: 7,
      name: "FASHION ACCESSORIES",
      icon: (
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-amber-300 transition-all duration-500">
          <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
            <div className="w-10 h-10 bg-gray-300 rounded-full mb-1 group-hover:bg-amber-200 transition-colors duration-500"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full group-hover:bg-amber-300 transition-colors duration-500"></div>
          </div>
        </div>
      ),
      description: "Stylish accessories for professionals"
    },
    {
      id: 8,
      name: "WELLNESS PRODUCTS",
      icon: (
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-amber-300 transition-all duration-500">
          <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
            <div className="w-14 h-8 bg-gray-300 rounded mb-1 group-hover:bg-amber-200 transition-colors duration-500"></div>
            <div className="w-8 h-6 bg-gray-300 rounded group-hover:bg-amber-300 transition-colors duration-500"></div>
          </div>
        </div>
      ),
      description: "Health and wellness essentials"
    },
    {
      id: 9,
      name: "SPORTS EQUIPMENT",
      icon: (
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-amber-300 transition-all duration-500">
          <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
            <div className="w-16 h-6 bg-gray-300 rounded-full mb-1 group-hover:bg-amber-200 transition-colors duration-500"></div>
            <div className="w-10 h-4 bg-gray-300 rounded-full group-hover:bg-amber-300 transition-colors duration-500"></div>
          </div>
        </div>
      ),
      description: "Quality sports and fitness gear"
    },
    {
      id: 10,
      name: "GOURMET GIFTS",
      icon: (
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-amber-300 transition-all duration-500">
          <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
            <div className="w-12 h-12 bg-gray-300 rounded mb-1 group-hover:bg-amber-200 transition-colors duration-500"></div>
            <div className="w-8 h-8 bg-gray-300 rounded group-hover:bg-amber-300 transition-colors duration-500"></div>
          </div>
        </div>
      ),
      description: "Premium food and beverage gifts"
    }
  ];

  return (
    <section className="golden-tag-section bg-muted">
      <div className="golden-tag-container">
        {/* Section Divider with Animation */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="text-3xl font-bold text-amber-600 animate-pulse">
              STORE
            </div>
          </div>
          <div className="w-32 h-px bg-amber-300 mx-auto mb-4 animate-pulse"></div>
          <h2 className="golden-tag-heading animate-fade-in">BROWSE BY INDUSTRIES</h2>
          <p className="text-amber-600 font-semibold text-lg animate-fade-in-delay">Our Premium Product Categories</p>
        </div>

        {/* Horizontal Scrolling Industries */}
        <div className="relative">


          {/* Enhanced Navigation Arrows */}
          <button
            onClick={scrollLeft}
            disabled={isScrolling || currentScrollIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg border transition-all duration-500 transform hover:scale-125 ${
              currentScrollIndex === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50' 
                : 'bg-white/90 hover:bg-white text-amber-600 border-amber-200 hover:border-amber-300 hover:-translate-x-1'
            } ${isScrolling ? 'animate-pulse' : ''}`}
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            disabled={isScrolling || currentScrollIndex === industries.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg border transition-all duration-500 transform hover:scale-125 ${
              currentScrollIndex === industries.length - 1 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50' 
                : 'bg-white/90 hover:bg-white text-amber-600 border-amber-200 hover:border-amber-300 hover:translate-x-1'
            } ${isScrolling ? 'animate-pulse' : ''}`}
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className={`flex gap-6 overflow-x-auto pb-6 scrollbar-hide px-4 transition-all duration-300 ${
              isAutoScrolling && !isHovered ? 'ring-2 ring-amber-200 ring-opacity-50' : ''
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {industries.map((industry, index) => (
              <div 
                key={industry.id} 
                className="text-center group bg-white hover:bg-gradient-to-br hover:from-amber-50 hover:to-yellow-50 p-6 rounded-xl transition-all duration-500 flex-shrink-0 min-w-[280px] transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-amber-200 cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideInFromBottom 0.6s ease-out forwards'
                }}
              >
                <div className="mb-4 flex justify-center relative">
                  {industry.icon}
                  <div className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs px-2 py-1 rounded-full font-bold transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    GT
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-amber-600 transition-all duration-500 transform group-hover:scale-105">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground text-sm group-hover:text-gray-700 transition-colors duration-500">
                  {industry.description}
                </p>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-yellow-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
          
          {/* Dynamic Scroll Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = 300;
                    scrollContainerRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                    setCurrentScrollIndex(index);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-500 transform hover:scale-125 ${
                  index === currentScrollIndex 
                    ? 'bg-amber-500 scale-125 shadow-lg shadow-amber-500/50' 
                    : 'bg-amber-200 hover:bg-amber-300'
                }`}
                aria-label={`Go to category ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
