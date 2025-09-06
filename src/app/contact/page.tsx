"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MapComponent from "../../components/MapComponent";
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setShowSuccess(true);
    setFormData({ name: "", phone: "", email: "", services: "", message: "" });
    setIsSubmitting(false);
    
    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField("");
  };

  return (
    <main className="min-h-screen overflow-hidden">
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
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 bg-red-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-red-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-red-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contact Us
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 mb-4 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We are a leading ERP/CRM software development company, offering customized solutions
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 max-w-5xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              in Oracle Apex, Data Analytics & AI, Python for Data Science, Django Python, OCI, Power BI, Microsoft Azure, Google Cloud, React Native, and Flutter.
            </motion.p>
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <span className="bg-red-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                With over 12 years of experience
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 bg-red-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-red-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Happy Customers */}
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">
                    <CountUp end={200} duration={2} delay={1.0} />
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">+</h3>
                <p className="text-gray-600 font-semibold">Happy Customers</p>
              </div>
            </motion.div>

            {/* Completed Projects */}
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">
                    <CountUp end={55} duration={2} delay={1.2} />
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">+</h3>
                <p className="text-gray-600 font-semibold">Completed Projects</p>
              </div>
            </motion.div>

            {/* Expert Workers */}
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">
                    <CountUp end={12} duration={2} delay={1.4} />
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">+</h3>
                <p className="text-gray-600 font-semibold">Expert Workers</p>
              </div>
            </motion.div>

            {/* Ongoing Projects */}
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">
                    <CountUp end={15} duration={2} delay={1.6} />
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">+</h3>
                <p className="text-gray-600 font-semibold">Ongoing Projects</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 bg-red-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-red-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold text-red-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
                  FREE CONSULTATION
            </motion.h2>
            <motion.h3 
              className="text-2xl font-bold text-gray-800 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
                  Get a Free Quote
            </motion.h3>
          </motion.div>

          <div className="space-y-8">
            {/* Contact Form Card */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
                {/* Success Message */}
                {showSuccess && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg animate-bounce">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-green-800 font-medium">Thank you! We'll get back to you soon.</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                        focusedField === 'name' 
                        ? 'border-red-500 shadow-lg shadow-red-200/50 transform scale-[1.02]' 
                        : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                        focusedField === 'phone' 
                        ? 'border-red-500 shadow-lg shadow-red-200/50 transform scale-[1.02]' 
                        : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                        focusedField === 'email' 
                        ? 'border-red-500 shadow-lg shadow-red-200/50 transform scale-[1.02]' 
                        : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="relative">
                  <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">
                      Services
                    </label>
                    <select
                      id="services"
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      onFocus={() => handleFocus('services')}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                        focusedField === 'services' 
                        ? 'border-red-500 shadow-lg shadow-red-200/50 transform scale-[1.02]' 
                        : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="oracle-apex">Oracle Apex & ERP</option>
                      <option value="data-analytics">Data Analytics & AI</option>
                      <option value="python">Python for Data Science</option>
                      <option value="django">Django Python for Web</option>
                      <option value="databases">Postgres & MySQL Database</option>
                      <option value="oci">Oracle Cloud Infrastructure</option>
                      <option value="powerbi">Power BI for Visualization</option>
                      <option value="azure">Microsoft Azure</option>
                      <option value="gcp">Google Cloud</option>
                      <option value="react-native">React Native</option>
                      <option value="flutter">Flutter</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      required
                      rows={5}
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none resize-none ${
                        focusedField === 'message' 
                        ? 'border-red-500 shadow-lg shadow-red-200/50 transform scale-[1.02]' 
                        : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="Tell us about your project requirements"
                    />
                  </div>

                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-red-600 hover:bg-red-700 hover:scale-105 hover:shadow-xl'
                    } text-white shadow-lg`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      'Get A Free Quote'
                    )}
                </motion.button>
                </form>
            </motion.div>

            {/* Contact Information Card */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <motion.h2 
                className="text-3xl font-bold text-red-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                Contact Information
              </motion.h2>
              
              <div className="space-y-8">
                {/* Office Location Card */}
                <motion.div 
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Office Location</h3>
                  <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white text-lg font-bold">OT</span>
                      </div>
                      <h4 className="font-bold text-gray-800 text-xl">OTRIX INDIA TECH</h4>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      <strong className="text-gray-800">Software Development Company</strong><br />
                      ERP/CRM Solutions Provider<br />
                      <span className="text-red-600 font-semibold">12+ Years Experience</span>
                    </p>
                  </div>
                </motion.div>

                {/* Contact Details Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Details</h3>
                  <div className="space-y-4">
                    {/* Phone Card */}
                    <motion.div 
                      className="group bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700 text-lg">Phone</p>
                          <p className="text-gray-800 font-semibold text-xl">+91 9893377444</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Email Card */}
                    <motion.div 
                      className="group bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700 text-lg">Email</p>
                          <p className="text-gray-800 font-semibold text-xl">info@otrix.com</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Business Hours Card */}
                    <motion.div 
                      className="group bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 2.0 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700 text-lg">Business Hours</p>
                          <p className="text-gray-800 font-semibold text-xl">24/7 Support</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 bg-red-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-red-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-red-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              FIND US
            </motion.h2>
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our Location
            </motion.h3>
            <motion.p 
              className="text-gray-700 font-semibold text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Visit our office in Dewas, Madhya Pradesh
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <MapComponent className="border border-gray-300 shadow-2xl rounded-2xl" />
            <motion.div 
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
                <p className="text-lg text-gray-700 mb-4">
                <strong className="text-gray-800">Otrix India Tech</strong><br />
                  159 LIG Vikas Nagar, Ganga Nagar<br />
                  Dewas, Madhya Pradesh 455001
                </p>
              <motion.a 
                  href="https://www.google.com/maps/dir//Otrix+Online+159+LIG+Vikas+Nagar,+Ganga+Nagar+Dewas,+Madhya+Pradesh+455001/@22.9528705,76.0292178,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39631782832fffff:0xe90e0a24a71cfa0e!2m2!1d76.0292178!2d22.9528705?entry=ttu&g_ep=EgoyMDI1MDkwMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">📍</span>
                  Get Directions
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 bg-red-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-red-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-red-600 animate-bounce">
                OTRIX INDIA TECH
              </div>
            </motion.div>
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ready to Get Started?
            </motion.h3>
            <motion.p 
              className="text-gray-700 text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              We provide ERP/CRM software solutions in Oracle Apex, AI, Python, Django, OCI, Power BI, Azure, Google Cloud, React Native, and Flutter.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Call Us Card */}
              <motion.div 
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white text-3xl">📞</span>
                  </div>
                  <h4 className="font-bold text-gray-800 text-xl mb-3">Call Us</h4>
                  <p className="text-gray-800 text-lg font-semibold">+91 9893377444</p>
                </div>
              </motion.div>

              {/* Email Us Card */}
              <motion.div 
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white text-3xl">✉️</span>
                  </div>
                  <h4 className="font-bold text-gray-800 text-xl mb-3">Email Us</h4>
                  <p className="text-gray-800 text-lg font-semibold">info@otrix.com</p>
                </div>
              </motion.div>

              {/* Visit Us Card */}
              <motion.div 
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white text-3xl">🌐</span>
                  </div>
                  <h4 className="font-bold text-gray-800 text-xl mb-3">Visit Us</h4>
                  <p className="text-gray-800 text-lg font-semibold">www.otrix.com</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}