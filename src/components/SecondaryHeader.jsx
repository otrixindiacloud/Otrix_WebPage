"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SecondaryHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/products", label: "PRODUCTS" },
    { href: "/store", label: "STORE" },
    { href: "/e-catalog", label: "E-CATALOG" },
    { href: "/contact", label: "CONTACT" }
  ];

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-background border-b border-border shadow-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
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
            {navigationItems.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link 
                  href={link.href} 
                  className="text-foreground hover:text-primary transition-all duration-200 font-medium text-sm relative group"
                >
                  {link.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
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
              <nav className="px-4 py-4 space-y-2">
                {navigationItems.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="block text-foreground hover:text-primary transition-colors duration-200 font-medium text-base py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
}
