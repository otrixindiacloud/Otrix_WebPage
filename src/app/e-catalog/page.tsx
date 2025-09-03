"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ECatalogPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    companySize: '',
    industry: '',
    budget: '',
    eventType: '',
    quantity: '',
    deliveryDate: '',
    selectedCategories: [],
    specialRequirements: '',
    preferredContactMethod: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const productCategories = [
    { id: 'bags', name: 'Bags & Wallets', icon: '👜', description: 'Executive bags, laptop sleeves, wallets' },
    { id: 'drinkware', name: 'Drinkware', icon: '🥤', description: 'Water bottles, coffee mugs, tumblers' },
    { id: 'electronics', name: 'Electronics', icon: '📱', description: 'Power banks, speakers, tech accessories' },
    { id: 'accessories', name: 'Office Accessories', icon: '✏️', description: 'Pens, notebooks, desk organizers' },
    { id: 'apparel', name: 'Apparel & Fashion', icon: '👔', description: 'Polo shirts, jackets, caps' },
    { id: 'home', name: 'Home & Living', icon: '🏠', description: 'Home decor, kitchen items, wellness products' },
    { id: 'tech', name: 'Tech Gadgets', icon: '💻', description: 'USB drives, wireless chargers, smart devices' },
    { id: 'wellness', name: 'Wellness & Health', icon: '🧘', description: 'Fitness items, health products, spa items' },
    { id: 'travel', name: 'Travel & Outdoor', icon: '✈️', description: 'Travel accessories, outdoor gear' },
    { id: 'food', name: 'Food & Beverage', icon: '🍫', description: 'Gourmet items, gift baskets, snacks' },
    { id: 'sports', name: 'Sports & Fitness', icon: '⚽', description: 'Sports equipment, fitness accessories' }
  ];

  const companySizes = [
    '1-10 employees',
    '11-50 employees', 
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Retail',
    'Real Estate',
    'Consulting',
    'Government',
    'Non-Profit',
    'Other'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  const eventTypes = [
    'Corporate Events',
    'Trade Shows',
    'Employee Recognition',
    'Client Gifts',
    'Holiday Gifts',
    'Product Launch',
    'Conference Giveaways',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryToggle = (categoryId) => {
    setFormData(prev => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(categoryId)
        ? prev.selectedCategories.filter(id => id !== categoryId)
        : [...prev.selectedCategories, categoryId]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4 text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <motion.h2 
            className="text-2xl font-bold text-gray-800 mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Request Submitted!
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Thank you for your catalog request. Our team will review your requirements and send you a personalized catalog within 24 hours.
          </motion.p>
          <motion.button 
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 font-medium transform hover:scale-105"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Another Request
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 text-white py-20 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full opacity-20"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full opacity-20"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          ></motion.div>
          <motion.div 
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full opacity-20"
            animate={{ 
              scale: [1, 1.4, 1],
              rotate: [0, -180, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          ></motion.div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { top: "25%", left: "25%", color: "orange-400", size: "w-2 h-2", delay: 0 },
            { top: "75%", right: "33%", color: "yellow-400", size: "w-1 h-1", delay: 1 },
            { top: "50%", left: "50%", color: "orange-300", size: "w-1.5 h-1.5", delay: 2 },
            { top: "33%", right: "25%", color: "yellow-300", size: "w-1 h-1", delay: 3 },
            { bottom: "33%", left: "33%", color: "orange-500", size: "w-1.5 h-1.5", delay: 4 },
            { top: "60%", left: "15%", color: "white", size: "w-1 h-1", delay: 5 },
            { bottom: "20%", right: "20%", color: "yellow-300", size: "w-1 h-1", delay: 6 }
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
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ y: 30, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
          >
            Request Your Catalog
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            Get a personalized catalog tailored to your corporate gift needs
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8">
            {/* Company Information Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <motion.span 
                  className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center mr-3"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                >
                  <span className="text-white font-bold">1</span>
                </motion.span>
                Company Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select company size</option>
                    {companySizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select industry</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Project Details Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <motion.span 
                  className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                >
                  <span className="text-white font-bold">2</span>
                </motion.span>
                Project Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map(event => (
                      <option key={event} value={event}>{event}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., 100-500 pieces"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Date
                  </label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Product Categories Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <motion.span 
                  className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full flex items-center justify-center mr-3"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                >
                  <span className="text-white font-bold">3</span>
                </motion.span>
                Product Categories of Interest
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {productCategories.map((category) => (
                  <motion.div
                    key={category.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      formData.selectedCategories.includes(category.id)
                        ? 'border-orange-500 bg-gradient-to-r from-orange-50 to-yellow-50 shadow-lg'
                        : 'border-gray-200 hover:border-orange-300 hover:shadow-md'
                    }`}
                    onClick={() => handleCategoryToggle(category.id)}
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">{category.icon}</span>
                      <h3 className="font-semibold text-gray-800">{category.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{category.description}</p>
                    {formData.selectedCategories.includes(category.id) && (
                      <motion.div 
                        className="mt-2 flex items-center text-orange-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">Selected</span>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Requirements Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <motion.span 
                  className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mr-3"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                >
                  <span className="text-white font-bold">4</span>
                </motion.span>
                Additional Requirements
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requirements or Notes
                  </label>
                  <textarea
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Any specific requirements, branding needs, or special requests..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContactMethod"
                        value="email"
                        checked={formData.preferredContactMethod === 'email'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContactMethod"
                        value="phone"
                        checked={formData.preferredContactMethod === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Phone
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Request...
                  </div>
                ) : (
                  'Request Catalog'
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
