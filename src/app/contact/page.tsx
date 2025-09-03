"use client";

import { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import ContactInfo from "../../components/ContactInfo";
import MapSection from "../../components/MapSection";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="bg-muted py-16">
        <div className="golden-tag-container">
          <div className="flex justify-center mb-8">
            <div className="text-4xl font-bold text-amber-600">
              STORE
            </div>
          </div>
          <h1 className="golden-tag-heading">Contact Us</h1>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Get in touch with our team for personalized corporate gifting solutions and custom branding services
          </p>
          <div className="flex justify-center">
            <span className="bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold">
              Premium Service Since 2015
            </span>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16">
        <div className="golden-tag-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your corporate gifting needs"
                  />
                </div>

                <button
                  type="submit"
                  className="golden-tag-button w-full py-3 text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Office Location</h3>
                  <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">GT</span>
                      </div>
                      <h4 className="font-bold text-amber-800">STORE</h4>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      <strong>Manama, Bahrain</strong><br />
                      Serving the Kingdom of Bahrain<br />
                      Since 2015
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Contact Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-amber-600 font-semibold">+973 3663 0814</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-amber-600 font-semibold">Info@goldentag.com.bh</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Business Hours</p>
                        <p className="text-amber-600 font-semibold">Always Open</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted py-16">
        <div className="golden-tag-container">
          <div className="text-center mb-8">
            <h2 className="golden-tag-heading">Find Us</h2>
            <p className="text-amber-600 font-semibold text-lg">Located in the Heart of Manama, Bahrain</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-amber-200">
            <div className="w-full h-64 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg flex items-center justify-center relative">
              <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                GT
              </div>
              <div className="text-center">
                <span className="text-6xl mb-4 block">🗺️</span>
                <p className="text-foreground font-semibold mb-2">Manama, Kingdom of Bahrain</p>
                <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                <p className="text-sm text-muted-foreground mt-2">
                  We're working on adding an interactive map to help you find our location
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Brand Section */}
      <section className="bg-amber-50 border-t border-amber-200 py-16">
        <div className="golden-tag-container">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-4xl font-bold text-amber-600">
                STORE
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your corporate gifting needs. Our team is ready to help you create meaningful gifts that strengthen your business relationships.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
                <p className="text-muted-foreground text-sm">+973 3663 0814</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
                <p className="text-muted-foreground text-sm">Info@goldentag.com.bh</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌐</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Visit Us</h4>
                <p className="text-muted-foreground text-sm">www.goldentag.com.bh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
