"use client";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Enterprise ERP System",
      description: "Comprehensive enterprise resource planning system for manufacturing company",
      image: "/OtrixPNG.png"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with real-time transactions",
    image: "/OtrixPNG.png"
    },
    {
      id: 3,
      title: "Business Intelligence Dashboard",
      description: "Interactive dashboard for sales and marketing analytics",
    image: "/OtrixPNG.png"
    },
    {
      id: 4,
      title: "Machine Learning Platform",
      description: "AI-powered platform for predictive analytics and automation",
    image: "/OtrixPNG.png"
    },
    {
      id: 5,
      title: "E-commerce Mobile App",
      description: "Cross-platform e-commerce application with payment integration",
    image: "/OtrixPNG.png"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-black mb-10 text-center">Latest Projects</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          className="project-slider"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col items-center">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-6 w-full">
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
