"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/20"></div>
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
              
              {/* Placeholder for company image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <span className="text-black text-4xl font-bold">OT</span>
                  </div>
                  <p className="text-white text-lg font-medium">Company Image</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">
                Our Short Story
              </h2>
              <h3 className="text-2xl font-semibold text-gray-300">Who We Are</h3>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              We are a leading ERP/CRM software development company, offering customized solutions in Oracle Apex, Data Analytics & AI, Python for Data Science, Django Python, OCI, Power BI, Microsoft Azure, Google Cloud, React Native, and Flutter.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 12 years of experience in the industry, we provide comprehensive IT solutions that help businesses streamline their operations, improve efficiency, and drive growth through innovative technology.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Oracle Apex
              </div>
              <div className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Data Analytics
              </div>
              <div className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                AI Solutions
              </div>
              <div className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Python Development
              </div>
              <div className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Cloud Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
