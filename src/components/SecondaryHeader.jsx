"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import AppIcon from "./AppIcon";
import { useServicesModal } from "../contexts/ServicesModalContext";
import { HoverLink } from "./ui/hover-link";

export default function SecondaryHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useServicesModal();
  const pathname = usePathname();

  const navigationItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    // { href: "/industries", label: "INDUSTRIES" },
    { href: "/careers", label: "CAREERS" },
    { href: "/contact", label: "CONTACT" }
  ];

  // Function to check if a navigation item is active
  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10); // Make fixed when scrolling more than 10px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      document.body.style.paddingTop = '64px'; // 64px is the height of secondary header
    } else {
      document.body.style.paddingTop = '0px';
    }
  }, [isScrolled]);

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : ''} bg-background border-b border-border shadow-sm`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo and Company Name - Left Side */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <HoverLink href="/" className="flex items-center space-x-3 group" hoverDelay={300}>
              <AppIcon size="w-10 h-10" />
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Otrix India Tech
                </h1>
                {/* <p className="text-xs text-muted-foreground group-hover:text-primary/70 transition-colors">
                  Let's make it perfect!
                </p> */}
              </div>
            </HoverLink>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors p-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex flex-1 justify-center space-x-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navigationItems.map((link, index) => {
              const active = isActive(link.href);
              return (
                <motion.div
                  key={link.href || link.label}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <HoverLink 
                    href={link.href} 
                    className={`relative group font-medium text-sm transition-all duration-200 ${
                      active 
                        ? "text-primary bg-primary/10 px-3 py-1 rounded-md" 
                        : "text-foreground hover:text-primary"
                    }`}
                    hoverDelay={300}
                  >
                    {link.label}
                    {/* Active underline animation */}
                    <motion.div
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                      initial={{ width: active ? "100%" : 0 }}
                      animate={{ width: active ? "100%" : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Active highlight background animation */}
                    {active && (
                      <motion.div
                        className="absolute inset-0 bg-primary/5 rounded-md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </HoverLink>
                </motion.div>
              );
            })}
          </motion.nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div 
              className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg z-50 md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Mobile Company Info */}
              <div className="px-4 py-3 border-b border-border">
                <div className="flex items-center space-x-3">
                  <AppIcon size="w-8 h-8" />
                  <div>
                    <h2 className="text-lg font-bold text-foreground">Otrix India Tech</h2>
                    <p className="text-sm text-muted-foreground">Let's make it perfect!</p>
                  </div>
                </div>
              </div>
              
              <nav className="px-4 py-4 space-y-2">
                {navigationItems.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link 
                      key={link.href}
                      href={link.href} 
                      className={`block transition-all duration-200 font-medium text-base py-2 px-3 rounded-md ${
                        active 
                          ? "text-primary bg-primary/10 border-l-4 border-primary" 
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
}
