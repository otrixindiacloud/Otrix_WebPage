"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FadeInUp, 
  FadeInLeft, 
  FadeInRight, 
  ScaleIn, 
  StaggerContainer, 
  StaggerItem, 
  HoverScale,
  ScrollProgress,
  RevealOnScroll,
  TextReveal,
  MagneticButton,
  GlowCard
} from '../../components/animations';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for E-commerce Success",
      excerpt: "Discover the key strategies that can transform your online store into a thriving business...",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "Business Tips",
      readTime: "5 min read",
      image: "/blog-1.jpg"
    },
    {
      id: 2,
      title: "The Future of Online Shopping",
      excerpt: "Explore how AI and machine learning are revolutionizing the way we shop online...",
      author: "Mike Chen",
      date: "2024-01-12",
      category: "Technology",
      readTime: "7 min read",
      image: "/blog-2.jpg"
    },
    {
      id: 3,
      title: "Building Customer Trust in Digital Commerce",
      excerpt: "Learn the essential elements that help build and maintain customer trust...",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      category: "Customer Experience",
      readTime: "6 min read",
      image: "/blog-3.jpg"
    },
    {
      id: 4,
      title: "Optimizing Your Product Pages for Conversions",
      excerpt: "Maximize your sales with these proven product page optimization techniques...",
      author: "David Kim",
      date: "2024-01-08",
      category: "Marketing",
      readTime: "8 min read",
      image: "/blog-4.jpg"
    }
  ];

  const categories = ["All", "Business Tips", "Technology", "Customer Experience", "Marketing"];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <div className="absolute top-10 right-10 w-40 h-40 bg-red-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-red-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <FadeInUp className="text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-red-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Blog
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Insights, tips, and stories to help your business grow
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 group-hover:shadow-lg"
                />
                <motion.div 
                  className="absolute right-4 top-4 text-gray-600"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </FadeInUp>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <StaggerContainer className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category, index) => (
              <StaggerItem key={category}>
                <HoverScale>
                  <motion.button
                    className="px-6 py-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-red-600 border-2 border-gray-200 hover:border-red-300 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <StaggerItem key={post.id}>
                <HoverScale>
                  <motion.article 
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 group"
                    whileHover={{ y: -8 }}
                  >
                    <motion.div 
                      className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span 
                        className="text-red-600 text-6xl font-bold"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        {post.title.charAt(0)}
                      </motion.span>
                      <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.span 
                          className="px-4 py-2 bg-red-100 text-red-700 text-sm rounded-full font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          {post.category}
                        </motion.span>
                        <span className="text-gray-500 text-sm font-medium">{post.readTime}</span>
                      </div>
                      
                      <motion.h3 
                        className="text-xl font-bold mb-3 text-gray-800 group-hover:text-red-600 cursor-pointer transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {post.title}
                      </motion.h3>
                      
                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <motion.div 
                            className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <span className="text-white font-bold text-sm">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </motion.div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">{post.author}</p>
                            <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                        
                        <motion.button
                          className="text-red-600 hover:text-red-700 font-medium text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Read More →
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Load More Button */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeInUp>
            <HoverScale>
              <motion.button 
                className="px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More Articles
              </motion.button>
            </HoverScale>
          </FadeInUp>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 bg-red-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-red-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <FadeInUp className="text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-red-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Stay Updated
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Get the latest insights and tips delivered to your inbox
            </motion.p>
            
            <motion.div 
              className="max-w-md mx-auto flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
              <HoverScale>
                <motion.button 
                  className="px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </HoverScale>
            </motion.div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
