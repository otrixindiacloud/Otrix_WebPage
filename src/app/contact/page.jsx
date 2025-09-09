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
import EmailIcon from "../../components/ui/EmailIcon";
import CallIcon from "../../components/ui/CallIcon";

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
  const [visibleSections, setVisibleSections] = useState(new Set());
  
  const sectionRefs = useRef({});

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

  const handleSubmit = async (e) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField("");
  };

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Contact Hero Section */}
      <section 
        id="hero"
        ref={(el) => { sectionRefs.current.hero = el; }}
        className="relative bg-[#c3d4d9] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/contact.png" 
            alt="Contact Hero Background" 
            className="w-full h-full object object-center opacity-20 blur-sm select-none pointer-events-none" 
            draggable="false"
          />
        </div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-200/30 to-amber-200/30 dark:from-yellow-600/10 dark:to-amber-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-200/30 to-orange-200/30 dark:from-amber-600/10 dark:to-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-100/20 to-amber-100/20 dark:from-yellow-600/5 dark:to-amber-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="golden-tag-container relative z-10">
          <div className={`text-center transition-all duration-1000 ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#3290AE' }}>
              Contact Us
            </h1>
            <p className="text-center text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: '#000000ff' }}>
              Get in touch with our team for personalized corporate gifting solutions and custom branding services
            </p>
            <div className="flex justify-center">
              <span className="px-8 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{ background: 'linear-gradient(to right, #3290AE, #6BA464)', color: 'white' }}>
                Premium Service Since 2015
              </span>
            </div>
          </div>
        </div>
      </section>
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
                <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #3290AE, #6BA464)' }}>
                  <span className="text-white text-2xl font-bold flex items-center gap-1">
                    <CountUp end={200} duration={2} delay={1.0} />
                    <span className="text-lg font-bold align-top">+</span>
                  </span>
                </div>
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
                <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #3290AE, #6BA464)' }}>
                  <span className="text-white text-2xl font-bold flex items-center gap-1">
                    <CountUp end={55} duration={2} delay={1.2} />
                    <span className="text-lg font-bold align-top">+</span>
                  </span>
                </div>
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
                <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #3290AE, #6BA464)' }}>
                  <span className="text-white text-2xl font-bold flex items-center gap-1">
                    <CountUp end={12} duration={2} delay={1.4} />
                    <span className="text-lg font-bold align-top">+</span>
                  </span>
                </div>
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
                <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #3290AE, #6BA464)' }}>
                  <span className="text-white text-2xl font-bold flex items-center gap-1">
                    <CountUp end={15} duration={2} delay={1.6} />
                    <span className="text-lg font-bold align-top">+</span>
                  </span>
                </div>
                <p className="text-gray-600 font-semibold">Ongoing Projects</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        {/* Contact Email & Address Card */}
        <div className="w-full max-w-7xl mx-auto mt-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Card */}
            <a
              href="mailto:otrixindiatech@gmail.com?subject=Inquiry%20from%20Otrix%20Website&body=Hello%20Otrix%20Team,%0D%0A%0D%0AI%20would%20like%20to%20know%20more%20about%20your%20services.%20Please%20contact%20me.%0D%0A%0D%0AThank%20you!"
              rel="noopener noreferrer"
              role="button"
              tabIndex={0}
              className="bg-white border-2 border-[#3290AE] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl hover:bg-[#e6f7fb] active:bg-[#d0eaf3] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#3290AE]"
            >
              <span className="inline-block w-12 h-12 bg-[#3290AE] text-white rounded-full flex items-center justify-center mb-4">
                {/* Email Icon */}
                <EmailIcon className="w-7 h-7" />
              </span>
              <h4 className="text-lg font-semibold text-[#3290AE] mb-2">Email</h4>
              <span className="text-gray-800 underline hover:text-[#3290AE] transition-colors text-base">otrixindiatech@gmail.com</span>
            </a>
            {/* Mobile Card */}
            <a
              href="tel:+919770076130"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              tabIndex={0}
              className="bg-white border-2 border-[#6BA464] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl hover:bg-[#eafbe6] active:bg-[#d7f5d0] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6BA464]"
            >
              <span className="inline-block w-12 h-12 bg-[#6BA464] text-white rounded-full flex items-center justify-center mb-4">
                {/* Mobile Icon */}
                <CallIcon className="w-7 h-7"/>
              </span>
              <h4 className="text-lg font-semibold text-[#6BA464] mb-2">Mobile</h4>
              <span className="text-gray-800 underline hover:text-[#6BA464] transition-colors text-base">+91 97700 76130</span>
            </a>
            {/* Address Card */}
            <div className="bg-white border-2 border-gray-400 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <span className="inline-block w-12 h-12 bg-gray-300 text-[#3290AE] rounded-full flex items-center justify-center mb-4">
                {/* Address Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" fill="currentColor"/></svg>
              </span>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Address</h4>
              <span className="text-gray-800 text-base">Otrix India Tech Pvt Ltd ,<br/>Dewas, Madhya Pradesh, India - 455001</span>
            </div>
          </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Card (left) */}
            <motion.div 
              className="flex items-center justify-center w-full max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9907515327513!2d76.02994097439766!3d22.950567719013126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396317be22fcefd5%3A0x7dc9d7c0095581e8!2sOtrix%20Mp%20Online%20Service!5e0!3m2!1sen!2sin!4v1757334365370!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 2 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl border border-gray-300 shadow-2xl w-full min-w-[300px]"
                title="Otrix MP Online Services Location - Dewas, MP"
              ></iframe>
            </motion.div>

            {/* Contact Form Card (right, smaller) */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-2 md:p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] group w-full h-full flex flex-col justify-between max-w-md ml-auto lg:mx-10"
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

                {/* Get a Free Quote Heading */}
                <div className="mb-6 text-center">
                  <h2 className="text-xl font-bold tracking-tight" style={{ color: '#E53935' }}>
                    Get a Free Quote
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
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
                      className={`w-full px-4 py-1 border rounded transition-all duration-300 focus:outline-none text-sm font-medium text-gray-800 bg-white/90 ${
                        focusedField === 'name' 
                        ? 'border-[#3290AE] shadow-lg shadow-blue-100/50' 
                        : 'border-gray-300 hover:border-[#3290AE]/60'
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
                      className={`w-full px-4 py-1 border rounded transition-all duration-300 focus:outline-none text-sm font-medium text-gray-800 bg-white/90 ${
                        focusedField === 'phone' 
                        ? 'border-[#3290AE] shadow-lg shadow-blue-100/50' 
                        : 'border-gray-300 hover:border-[#3290AE]/60'
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
                      className={`w-full px-4 py-1 border rounded transition-all duration-300 focus:outline-none text-sm font-medium text-gray-800 bg-white/90 ${
                        focusedField === 'email' 
                        ? 'border-[#3290AE] shadow-lg shadow-blue-100/50' 
                        : 'border-gray-300 hover:border-[#3290AE]/60'
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
                      className={`w-full px-4 py-1 border rounded transition-all duration-300 focus:outline-none text-sm font-medium text-gray-800 bg-white/90 ${
                        focusedField === 'services' 
                        ? 'border-[#3290AE] shadow-lg shadow-blue-100/50' 
                        : 'border-gray-300 hover:border-[#3290AE]/60'
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
                      rows={1}
                      className={`w-full px-4 py-2 border rounded transition-all duration-300 focus:outline-none resize-none text-sm font-medium text-gray-800 bg-white/90 h-10 ${
                        focusedField === 'message' 
                        ? 'border-[#3290AE] shadow-lg shadow-blue-100/50' 
                        : 'border-gray-300 hover:border-[#3290AE]/60'
                      }`}
                    placeholder="Tell us about your project requirements"
                  />
                  </div>

                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 text-base font-semibold rounded transition-all duration-300 transform ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-[#3290AE] to-[#6BA464] hover:opacity-90 hover:scale-105 hover:shadow-xl'
                    } text-white shadow font-bold`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          </div>
        </div>
      </section>


    </main>
  );
}