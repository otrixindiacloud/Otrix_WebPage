"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-secondary text-secondary-foreground py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border border-white rounded-full"></div>
      </div>

      {/* Product Silhouettes */}
      <div className="absolute inset-0 opacity-20">
        {/* Tote Bag - Main */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48">
          <div className="w-full h-full bg-white rounded-lg relative">
            <div className="absolute top-4 left-4 right-4 h-8 bg-white rounded-t-lg"></div>
            <div className="absolute bottom-4 left-4 right-4 h-2 bg-white rounded-b-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-sm font-bold">
              YOUR DESIGN HERE
            </div>
          </div>
        </div>

        {/* Other Product Silhouettes */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-white rounded-full opacity-60"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-white rounded-full opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-1/3 left-10 w-10 h-10 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-2/3 right-10 w-16 h-16 bg-white rounded-full opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="golden-tag-container">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="text-2xl sm:text-4xl font-bold text-white">
              STORE
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 px-4">
            ULTIMATE TRENDY GIFTS & GIVEAWAYS IN BAHRAIN
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 opacity-90 max-w-3xl mx-auto px-4">
            Premium gifts that make lasting impressions. Serving leading multinational companies in the Kingdom of Bahrain since 2015.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link 
              href="/products" 
              className="golden-tag-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-block bg-amber-600 hover:bg-amber-700"
            >
              BROWSE PRODUCTS
            </Link>
            <Link 
              href="/contact" 
              className="golden-tag-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
    </section>
  );
}
