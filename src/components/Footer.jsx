"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCountry, setSelectedCountry] = useState("Bahrain");

  const footerSections = [
    {
      title: "Get to Know Us",
      links: [
        { name: "About Golden Tag", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press Releases", href: "/press" },
        { name: "Golden Tag Science", href: "/science" }
      ]
    },
    {
      title: "Connect with Us",
      links: [
        { name: "Facebook", href: "https://www.facebook.com", external: true },
        { name: "Twitter", href: "https://www.twitter.com", external: true },
        { name: "Instagram", href: "https://www.instagram.com", external: true }
      ]
    },
    {
      title: "Make Money with Us",
      links: [
        { name: "Sell on Golden Tag", href: "/sell" },
        { name: "Sell under Golden Tag Accelerator", href: "/accelerator" },
        { name: "Protect and Build Your Brand", href: "/brand-protection" },
        { name: "Golden Tag Global Selling", href: "/global-selling" },
        { name: "Supply to Golden Tag", href: "/supply" },
        { name: "Become an Affiliate", href: "/affiliate" },
        { name: "Fulfilment by Golden Tag", href: "/fulfillment" },
        { name: "Advertise Your Products", href: "/advertise" },
        { name: "Golden Tag Pay on Merchants", href: "/pay-merchants" }
      ]
    },
    {
      title: "Let Us Help You",
      links: [
        { name: "Your Account", href: "/account" },
        { name: "Returns Centre", href: "/returns" },
        { name: "Recalls and Product Safety Alerts", href: "/safety" },
        { name: "100% Purchase Protection", href: "/protection" },
        { name: "Golden Tag App Download", href: "/app" },
        { name: "Help", href: "/help" }
      ]
    }
  ];

  const socialIcons = [
    {
      name: "Facebook",
      href: "https://www.facebook.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      href: "https://www.twitter.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: "hover:text-pink-400"
    }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <motion.a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.name}
                      </motion.a>
                    ) : (
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link 
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">
                golden tag
              </span>
              <motion.div
                className="ml-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white text-xs font-bold">G</span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Language and Country Selectors */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            {/* Language Selector */}
            <div className="relative">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent appearance-none pr-8"
              >
                <option value="English">English</option>
                <option value="العربية">العربية</option>
                <option value="हिन्दी">हिन्दी</option>
                <option value="اردو">اردو</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Country Selector */}
            <div className="relative">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent appearance-none pr-8"
              >
                <option value="Bahrain">🇧🇭 Bahrain</option>
                <option value="UAE">🇦🇪 UAE</option>
                <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
                <option value="Kuwait">🇰🇼 Kuwait</option>
                <option value="Qatar">🇶🇦 Qatar</option>
                <option value="Oman">🇴🇲 Oman</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-6 space-x-6"
        >
          {socialIcons.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${social.color} transition-colors duration-200`}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              title={`Follow us on ${social.name}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-6 pt-6 border-t border-gray-700"
        >
          <p className="text-gray-400 text-sm">
            Copyright 2025 © Golden Tag Corporate Gifts. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Back to top"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
