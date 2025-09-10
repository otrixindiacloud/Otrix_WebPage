"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null as File | null,
    coverLetter: ''
  });

  // Set page metadata
  useEffect(() => {
    document.title = "Careers - Join Our Team";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Join our team of talented professionals at Otrix Online. We're hiring developers, designers, data scientists, and more. Explore current job openings and apply today.");
    }
  }, []);

  const jobCategories = ['All', 'Development', 'Mobile Development', 'Analytics', 'Cloud Services', 'Design'];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Python Developer",
      category: "Development",
      type: "Full-time",
      location: "Remote/India",
      experience: "3-5 years",
      description: "We are looking for an experienced Python developer to join our team and work on exciting projects involving Django, data analytics, and machine learning.",
      requirements: [
        "Strong experience with Python and Django framework",
        "Knowledge of data science libraries (Pandas, NumPy, Scikit-learn)",
        "Experience with RESTful API development",
        "Familiarity with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills"
      ],
      skills: ["Python", "Django", "PostgreSQL", "Docker", "Git"],
      benefits: [
        "Competitive salary package",
        "Flexible working hours",
        "Health insurance coverage",
        "Professional development opportunities",
        "Work from home options"
      ],
      postedDate: "2025-09-01"
    },
    {
      id: 2,
      title: "Oracle Apex Developer",
      category: "Development",
      type: "Full-time",
      location: "Remote/India",
      experience: "2-4 years",
      description: "Join our team as an Oracle Apex developer to build enterprise-grade applications and work with cutting-edge Oracle technologies.",
      requirements: [
        "Proficiency in Oracle Apex development",
        "Strong SQL and PL/SQL skills",
        "Experience with Oracle Database",
        "Knowledge of JavaScript and CSS",
        "Understanding of web application security"
      ],
      skills: ["Oracle Apex", "PL/SQL", "Oracle Database", "JavaScript", "HTML/CSS"],
      benefits: [
        "Competitive salary package",
        "Flexible working hours",
        "Health insurance coverage",
        "Professional development opportunities",
        "Work from home options"
      ],
      postedDate: "2025-09-10"
    },
    {
      id: 3,
      title: "React Native Developer",
      category: "Mobile Development",
      type: "Full-time",
      location: "Remote/India",
      experience: "2-4 years",
      description: "We are seeking a talented React Native developer to create cross-platform mobile applications for iOS and Android.",
      requirements: [
        "Strong experience with React Native framework",
        "Knowledge of JavaScript and TypeScript",
        "Experience with mobile app deployment",
        "Familiarity with native mobile development",
        "Understanding of mobile UI/UX principles"
      ],
      skills: ["React Native", "JavaScript", "TypeScript", "iOS", "Android"],
      benefits: [
        "Competitive salary package",
        "Flexible working hours",
        "Health insurance coverage",
        "Professional development opportunities",
        "Work from home options"
      ],
      postedDate: "2025-08-31"
    },
    {
      id: 4,
      title: "Data Analyst",
      category: "Analytics",
      type: "Full-time",
      location: "Remote/India",
      experience: "1-3 years",
      description: "Join our analytics team to help clients make data-driven decisions using Power BI, Python, and advanced analytics techniques.",
      requirements: [
        "Experience with Power BI and data visualization",
        "Strong analytical and problem-solving skills",
        "Knowledge of SQL and data modeling",
        "Experience with Python for data analysis",
        "Understanding of business intelligence concepts"
      ],
      skills: ["Power BI", "Python", "SQL", "Excel", "Statistics"],
      benefits: [
        "Competitive salary package",
        "Flexible working hours",
        "Health insurance coverage",
        "Professional development opportunities",
        "Work from home options"
      ],
      postedDate: "2025-09-01"
    },
    {
      id: 5,
      title: "Cloud Solutions Architect",
      category: "Cloud Services",
      type: "Full-time",
      location: "Remote/India",
      experience: "4-6 years",
      description: "Lead cloud migration and architecture projects using Oracle Cloud Infrastructure, Azure, and Google Cloud Platform.",
      requirements: [
        "Expertise in cloud platforms (OCI, Azure, GCP)",
        "Experience with cloud migration projects",
        "Knowledge of DevOps and CI/CD practices",
        "Strong understanding of cloud security",
        "Certification in cloud technologies preferred"
      ],
      skills: ["OCI", "Azure", "GCP", "Docker", "Kubernetes"],
      benefits: [
        "Competitive salary package",
        "Flexible working hours",
        "Health insurance coverage",
        "Professional development opportunities",
        "Work from home options"
      ],
      postedDate: "2025-08-01"
    },
    {
      id: 6,
      title: "UI/UX Designer",
      category: "Design",
      type: "Full-time",
      location: "Remote/India",
      experience: "2-4 years",
      description: "Create beautiful and intuitive user interfaces for web and mobile applications that delight our clients and their users.",
      requirements: [
        "Strong portfolio showcasing UI/UX design skills",
        "Proficiency in design tools (Figma, Adobe Creative Suite)",
        "Understanding of user research and testing",
        "Knowledge of responsive design principles",
        "Experience with mobile app design"
      ],
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
      benefits: [
        "Competitive salary package",
        "Flexible working hours",
        "Health insurance coverage",
        "Professional development opportunities",
        "Work from home options"
      ],
      postedDate: "2025-09-01"
    }
  ];

  const filteredJobs = activeFilter === 'All' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === activeFilter);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      resume: e.target.files?.[0] || null
    });
  };

  const handleJobApply = (job: any) => {
    setSelectedJob(job);
    setFormData({
      ...formData,
      position: job.title
    });
    setShowApplicationForm(true);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle application submission here
    console.log('Application submitted:', formData);
    alert('Application submitted successfully! We will get back to you soon.');
    setShowApplicationForm(false);
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen">
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
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/image copy.png" 
            alt="Careers Hero Background" 
            className="w-full h-full object-cover object-center opacity-40 blur-sm select-none pointer-events-none" 
            draggable="false"
          />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-[#2e95b7] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-[#2e95b7] rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-[#2e95b7] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join Our Team
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Build the Future with Us
            </motion.h2>
            <motion.p 
              className="text-lg text-black-700 mb-4 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Be part of a dynamic team that&apos;s building the future of technology. We&apos;re looking for passionate individuals who want to make a difference.
            </motion.p>
            <motion.p 
              className="text-lg text-black-600 max-w-5xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              We offer more than just a job - we provide an environment where you can grow, learn, and make a real impact on businesses worldwide.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.button 
                onClick={() => setShowApplicationForm(true)}
                className="bg-gradient-to-r from-[#2e95b7] to-[#236f8a] hover:from-[#236f8a] hover:to-[#1e5a70] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
              <motion.button 
                onClick={() => {
                  const element = document.getElementById('job-listings');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent border-2 border-[#2e95b7] text-[#2e95b7] hover:bg-[#2e95b7] hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Openings
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section id="why-work-with-us" className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 bg-[#2e95b7] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-[#2e95b7] rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold text-[#2e95b7] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why Work With Us?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We offer more than just a job - we provide an environment where you can grow, learn, and make a real impact.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: "💰",
                title: "Competitive Salary",
                description: "We offer competitive salaries that reflect your skills and experience, with regular performance reviews and salary adjustments."
              },
              {
                icon: "🏠",
                title: "Flexible Work",
                description: "Enjoy flexible working hours and remote work options that help you maintain a healthy work-life balance."
              },
              {
                icon: "📚",
                title: "Learning & Development",
                description: "Continuous learning opportunities with access to courses, conferences, and certifications to advance your career."
              },
              {
                icon: "🏥",
                title: "Health & Wellness",
                description: "Comprehensive health insurance and wellness programs to keep you and your family healthy and happy."
              },
              {
                icon: "🎉",
                title: "Team Events",
                description: "Regular team building events, company outings, and celebrations to foster a strong team culture."
              },
              {
                icon: "📈",
                title: "Career Growth",
                description: "Clear career progression paths and opportunities to take on leadership roles as you grow with the company."
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 bg-[#2e95b7] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-[#2e95b7] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section id="job-listings" className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 bg-[#2e95b7] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-[#2e95b7] rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold text-[#2e95b7] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Current Openings
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Explore our current job openings and find the perfect role for your career growth.
            </motion.p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {jobCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Job Cards - Horizontal Single Card Layout */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {filteredJobs.map((job, index) => (
              <motion.div 
                key={job.id} 
                className="bg-white border border-[#3290AE] rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                {/* Left Side - Job Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-[#3290AE] mb-2 group-hover:text-[#6BA464] transition-colors duration-300">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-[#6BA464] text-white text-sm font-medium px-4 py-2 rounded-full">
                          {job.category}
                        </span>
                        <span className="bg-[#3290AE] text-white text-sm font-medium px-4 py-2 rounded-full">
                          {job.type}
                        </span>
                        <span className="bg-gray-200 text-[#3290AE] text-sm font-medium px-4 py-2 rounded-full border border-[#3290AE]/30">
                          {job.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="flex items-center text-[#3290AE] font-medium">
                      <span className="mr-2">📍</span>
                      {job.location}
                    </div>
                    <div className="flex items-center text-[#6BA464] font-medium">
                      <span className="mr-2">📅</span>
                      Posted on {new Date(job.postedDate).toLocaleDateString()}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {job.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#3290AE] mb-3 text-lg">Key Requirements:</h4>
                    <ul className="list-none space-y-2 md:columns-2 md:gap-8">
                      {job.requirements.slice(0, 4).map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2">
                          <span className="mt-0 text-[#6BA464] text-base">•</span>
                          <span className="text-sm text-gray-700 leading-snug">{req}</span>
                        </li>
                      ))}
                      
                    </ul>
                  </div>

                  {job.skills && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#6BA464] mb-3 text-lg">Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-[#eaf6ef] text-[#6BA464] text-sm font-medium px-3 py-1 rounded-full border border-[#6BA464]/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side - Apply Button */}
                <div className="lg:w-56 flex-shrink-0 flex items-center justify-center">
                  <motion.button
                    onClick={() => handleJobApply(job)}
                    className="w-full bg-gradient-to-r from-[#3290AE] to-[#6BA464] hover:from-[#6BA464] hover:to-[#3290AE] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-[#3290AE] focus:outline-none focus:ring-2 focus:ring-[#6BA464]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply for this Position
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredJobs.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your filter criteria or check back later for new openings.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Don't See Your Perfect Role Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 bg-[#3290AE] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#6BA464] rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-[#6BA464] rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-6"
              style={{ color: '#6BA464' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Don&apos;t See Your Perfect Role?
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 max-w-3xl mx-auto"
              style={{ color: '#3290AE' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We&apos;re always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=support@otrixindia.com&su=Resume%20Submission%20for%20Otrix%20India%20Tech&body=Dear%20Otrix%20India%20Tech%20Team%2C%0D%0A%0D%0APlease%20find%20my%20resume%20attached%20for%20your%20consideration.%0D%0A%0D%0ARegards%2C%0D%0A%5BYour%20Name%5D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#6BA464] to-[#3290AE] hover:from-[#3290AE] hover:to-[#6BA464] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Your Resume
              </motion.a>
              <motion.button 
                onClick={() => {
                  const element = document.getElementById('why-work-with-us');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent border-2 border-[#3290AE] text-[#3290AE] hover:bg-[#3290AE] hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <motion.div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-red-600">
                  Job Application
                </h3>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {selectedJob && (
                <div className="mb-6 p-4 bg-red-50 rounded-xl border border-red-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Applying for: {selectedJob.title}</h4>
                  <p className="text-sm text-gray-600">{selectedJob.category} • {selectedJob.type} • {selectedJob.location}</p>
                </div>
              )}

              <form onSubmit={handleSubmitApplication} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                      placeholder="Your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                      required
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <motion.button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Application
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
