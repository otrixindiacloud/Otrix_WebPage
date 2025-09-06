"use client";

import { useState } from "react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Mobile Apps', 'Oracle Apex & ERP', 'Power BI', 'Python'];

  const projects = [
    {
      id: 1,
      title: "Enterprise ERP System",
      category: "Oracle Apex & ERP",
      description: "Comprehensive enterprise resource planning system for manufacturing company",
      image: "/placeholder.png",
      technologies: ["Oracle Apex", "Oracle Database", "JavaScript"]
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Apps",
      description: "Secure mobile banking application with real-time transactions",
      image: "/placeholder.png",
      technologies: ["React Native", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "Business Intelligence Dashboard",
      category: "Power BI",
      description: "Interactive dashboard for sales and marketing analytics",
      image: "/placeholder.png",
      technologies: ["Power BI", "SQL Server", "Azure"]
    },
    {
      id: 4,
      title: "Machine Learning Platform",
      category: "Python",
      description: "AI-powered platform for predictive analytics and automation",
      image: "/placeholder.png",
      technologies: ["Python", "TensorFlow", "Django"]
    },
    {
      id: 5,
      title: "E-commerce Mobile App",
      category: "Mobile Apps",
      description: "Cross-platform e-commerce application with payment integration",
      image: "/placeholder.png",
      technologies: ["Flutter", "Firebase", "Stripe"]
    },
    {
      id: 6,
      title: "CRM System",
      category: "Oracle Apex & ERP",
      description: "Customer relationship management system with automation features",
      image: "/placeholder.png",
      technologies: ["Oracle Apex", "Oracle Cloud", "REST APIs"]
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gray-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gray-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            RECENTLY COMPLETED
          </h2>
          <h3 className="text-2xl font-semibold text-gray-600 mb-6">Our Latest Projects</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various industries and technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-black text-white shadow-xl hover:shadow-2xl'
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-lg border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:scale-105">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-gray-300/20"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-black/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gray-400/20 rounded-full blur-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-2xl">
                      <span className="text-white text-3xl font-bold">
                        {project.category === 'Mobile Apps' && '📱'}
                        {project.category === 'Oracle Apex & ERP' && '🏢'}
                        {project.category === 'Power BI' && '📊'}
                        {project.category === 'Python' && '🐍'}
                      </span>
                    </div>
                    <p className="text-black text-sm font-medium">Project Image</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-black text-white text-xs font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h4 className="text-xl font-semibold text-black mb-3 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
