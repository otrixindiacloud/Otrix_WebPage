"use client";

import { useState, useEffect } from "react";

export default function StatsSection() {
  const [counts, setCounts] = useState({
    customers: 0,
    projects: 0,
    workers: 0,
    ongoing: 0
  });

  const stats = [
    { key: 'customers', value: 200, label: 'Happy Customers', suffix: '+' },
    { key: 'projects', value: 55, label: 'Completed Projects', suffix: '+' },
    { key: 'workers', value: 12, label: 'Expert Workers', suffix: '+' },
    { key: 'ongoing', value: 15, label: 'Ongoing Projects', suffix: '+' }
  ];

  useEffect(() => {
    const animateCounts = () => {
      stats.forEach(stat => {
        let current = 0;
        const increment = stat.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounts(prev => ({
            ...prev,
            [stat.key]: Math.floor(current)
          }));
        }, 30);
      });
    };

    animateCounts();
  }, []);

  return (
    <section className="py-20 bg-white text-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gray-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gray-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.key} className="text-center group">
              <div className="relative mb-6">
                {/* Enhanced stat icon with gradient background */}
                <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-bold text-white">
                    {stat.key === 'customers' && '👥'}
                    {stat.key === 'projects' && '📁'}
                    {stat.key === 'workers' && '👨‍💻'}
                    {stat.key === 'ongoing' && '⚡'}
                  </span>
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 w-24 h-24 border-2 border-black/30 rounded-full mx-auto animate-pulse"></div>
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-black">
                {counts[stat.key]}{stat.suffix}
              </div>
              <div className="text-lg font-medium text-gray-600 group-hover:text-black transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
