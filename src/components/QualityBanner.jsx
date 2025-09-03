"use client";

export default function QualityBanner() {
  return (
    <section className="relative py-20 bg-secondary">
      <div className="golden-tag-container">
        <div className="relative">
          {/* Background Image Placeholder */}
          <div className="w-full h-96 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg relative overflow-hidden">
            {/* Desk Scene Elements */}
            <div className="absolute inset-0 flex items-center justify-between px-8">
              {/* Left Side - Gift Items */}
              <div className="flex items-center space-x-4">
                <div className="w-32 h-40 bg-gray-700 rounded-lg relative">
                  <div className="absolute top-2 left-2 right-2 h-1 bg-primary rounded"></div>
                  <div className="absolute bottom-2 left-2 right-2 h-1 bg-primary rounded"></div>
                </div>
                <div className="w-20 h-20 bg-gray-600 rounded-lg relative">
                  <div className="absolute top-2 left-2 right-2 h-1 bg-gray-400 rounded"></div>
                  <div className="absolute bottom-2 left-2 right-2 h-1 bg-gray-400 rounded"></div>
                </div>
              </div>

              {/* Right Side - Writing Scene */}
              <div className="flex items-center space-x-4">
                <div className="w-32 h-20 bg-white rounded-lg relative">
                  <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-300"></div>
                  <div className="absolute top-6 left-4 right-4 h-0.5 bg-gray-300"></div>
                  <div className="absolute top-8 left-4 right-4 h-0.5 bg-gray-300"></div>
                </div>
                <div className="w-4 h-8 bg-gray-800 rounded-full"></div>
              </div>
            </div>

            {/* Quality Rating Overlay */}
            <div className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground font-semibold">Good Quality.</p>
            </div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="flex justify-center mb-8">
                <div className="text-2xl font-bold text-white">
                  STORE
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Quality Assurance
              </h3>
              <p className="text-lg opacity-90 max-w-md mx-auto mb-6">
                Experience the difference that premium quality makes in every corporate gift
              </p>
              <div className="flex items-center justify-center space-x-4">
                <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Since 2015
                </span>
                <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Premium Quality
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
