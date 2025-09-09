"use client";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Pharmacy ERP System",
      description: "Pharmacy provides trusted healthcare solutions, offering quality medicines and personalized customer care. We are committed to ensuring health, convenience, and reliability for every customer.",
      image: "/pharma.jpg"
    },
    {
      id: 2,
      title: "ERP System",
      description: "The ERP System Project is an Oracle APEX–based application built to streamline and digitize business processes. It enhances efficiency, accuracy, and overall organizational productivity",
      image: "/erp.jpg"
    },
    {
      id: 3,
      title: "Global Marketing Dashboard",
      description: "An interactive dashboard designed for sales and marketing analytics, providing real-time insights into performance metrics. It helps teams track trends, optimize strategies, and drive growth",
      image: "/global.png"
    },
    {
      id: 4,
      title: "Feeder Management System",
      description: "The Feeder Management System is a technology-driven solution that automates and optimizes feeding operations. It ensures efficiency, reduces waste, and improves overall productivity..",
      image: "/feeder.png"
    },
    {
      id: 5,
      title: "Strategic Dashboard",
      description: "The Strategic Dashboard is a business intelligence tool that delivers real-time KPI insights through interactive visualizations, helping leaders make quick, informed decisions.",
      image: "/powerbi.png"
    },
    {
      id: 6,
      title: "Baazar Market App",
      description: "A digital marketplace that connects buyers and sellers with secure payments, real-time order tracking, and vendor management tools for a seamless shopping experience.",
      image: "/grocery.png"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden w-full">
      <div className="w-full px-0 relative z-10"> {/* Remove max-width, remove horizontal padding */}
        <h2 className="text-4xl font-bold text-black mb-4 text-center w-full">Latest Projects</h2>
        <p className="text-lg text-gray-700 mb-10 text-center w-full max-w-3xl mx-auto">
          Explore some of our most recent and impactful projects, showcasing our expertise in delivering innovative solutions across various industries.
        </p>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          className="project-slider w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col items-center w-[90vw] max-w-[500px] h-[500px] mx-auto"> {/* Card width responsive to viewport */}
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-6 w-full flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2 text-center">{project.title}</h3>
                  <p className="text-gray-600 text-center">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
