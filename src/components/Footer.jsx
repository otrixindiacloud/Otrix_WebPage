"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HoverLink } from "./ui/hover-link";

export default function Footer() {

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Otrix India Tech", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Industries", href: "/industries" },
        { name: "Contact Us", href: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Apps", href: "/services/mobile-apps" },
        { name: "Software Solutions", href: "/services/software" },
        { name: "IT Consulting", href: "/services/consulting" },
        { name: "Cloud Solutions", href: "/services/cloud" },
        { name: "Digital Marketing", href: "/services/digital-marketing" }
      ]
    },
    {
      title: "Connect with Us",
      links: [
        { name: "Facebook", href: "https://www.facebook.com", external: true },
        { name: "LinkedIn", href: "https://www.linkedin.com", external: true },
        { name: "Instagram", href: "https://www.instagram.com", external: true },
        { name: "Twitter", href: "https://www.twitter.com", external: true }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Documentation", href: "/docs" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" }
      ]
    }
  ];



  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-secondary text-secondary-foreground relative"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Company Address and Map Section */}
        <div className="mb-8 pb-8 border-b border-blue-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Otrix India Tech</h3>
              <p className="text-black mb-4">Leading IT solutions provider specializing in software development, web applications, and technology consulting.</p>
              <div className="space-y-2 text-black">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  159 LIG Vikas Nagar, Ganga Nagar<br />
                  Dewas, Madhya Pradesh 455001, India
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@otrixindia.com
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 98765 43210
                </p>
              </div>
            </div>
            
            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold text-black mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm">
                  Ready to start your next project? Contact us today for a consultation.
                </p>
                <div className="mt-4">
                  <HoverLink
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-black rounded-lg transition-colors duration-200"
                    hoverDelay={600}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Contact Us
                  </HoverLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-secondary-foreground font-bold text-lg mb-3">{section.title}</h3>
              {section.title === "Connect with Us" ? (
                <ul className="space-y-1">
                  {section.links.map((link, linkIndex) => {
                    const getIcon = (name) => {
                      switch (name) {
                        case "Facebook":
                          return (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          );
                        case "Twitter":
                          return (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                          );
                        case "Instagram":
                          return (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          );
                        default:
                          return null;
                      }
                    };

                    const getHoverColor = (name) => {
                      switch (name) {
                        case "Facebook":
                          return "hover:text-blue-400";
                        case "Twitter":
                          return "hover:text-blue-400";
                        case "Instagram":
                          return "hover:text-pink-400";
                        default:
                          return "hover:text-black";
                      }
                    };

                    return (
                      <li key={linkIndex}>
                        <motion.a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-secondary-foreground transition-colors duration-200 text-sm flex items-center space-x-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className={`text-muted-foreground/70 ${getHoverColor(link.name)} transition-colors duration-200`}>
                            {getIcon(link.name)}
                          </span>
                          <span>{link.name}</span>
                        </motion.a>
                      </li>
                    );
                  })}
                </ul>
              ) : (
              <ul className="space-y-1">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <motion.a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-red-600 transition-colors duration-200 text-sm"
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
                        <HoverLink 
                          href={link.href}
                          className="text-black hover:text-red-600 transition-colors duration-200 text-sm"
                          hoverDelay={500}
                        >
                          {link.name}
                        </HoverLink>
                      </motion.div>
                    )}
                  </li>
                ))}
              </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Copyright Section - Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Center - Copyright */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
              <div className="mx-2 w-2 h-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
            </div>
            
            <p className="text-black text-sm font-medium">
              Copyright 2025 © Otrix India Tech. All rights reserved.
            </p>
          </div>

          {/* Center - Back to Top Button */}
          <div className="flex justify-end mt-4">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group relative p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-gray-600"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Back to top"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <svg className="w-5 h-5 text-black group-hover:text-black transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
