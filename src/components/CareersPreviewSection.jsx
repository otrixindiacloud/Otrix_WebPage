"use client";

import Link from "next/link";

export default function CareersPreviewSection() {
  const featuredJobs = [
    {
      title: "Senior Full Stack Developer",
      type: "Full-time",
      location: "Remote / Dewas, MP",
      experience: "3-5 years",
      category: "Development"
    },
    {
      title: "Data Scientist / AI Engineer",
      type: "Full-time", 
      location: "Remote / Dewas, MP",
      experience: "2-4 years",
      category: "Data Science"
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Remote / Dewas, MP", 
      experience: "2-3 years",
      category: "Design"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
            Join Our Team
          </h2>
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">We&apos;re Hiring Talented Professionals</h3>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8">
            Be part of our innovative team and help us build the future of technology. 
            We offer exciting opportunities for growth and development.
          </p>
          <Link 
            href="/careers"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            View All Openings
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredJobs.map((job, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 group">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {job.category}
                  </span>
                  <span className="bg-gradient-to-r from-green-500 to-teal-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h4>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-slate-600">
                  <span className="mr-2">📍</span>
                  {job.location}
                </div>
                <div className="flex items-center text-slate-600">
                  <span className="mr-2">💼</span>
                  {job.experience} experience
                </div>
              </div>

              <Link 
                href="/careers"
                className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center block"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                6+
              </div>
              <p className="text-slate-600 font-medium">Open Positions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
                12+
              </div>
              <p className="text-slate-600 font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-slate-600 font-medium">Remote Friendly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
