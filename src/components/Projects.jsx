import React, { useState, useEffect, useRef } from "react";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

const Projects = () => {
  const { Projects, Reports } = content;
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPDF, setShowPDF] = useState(false);
  const [closing, setClosing] = useState(false);
  const modalRef = useRef(null);

  // Initialize AOS (matching your About component)
  useEffect(() => {
    Aos.init({ duration: 1200, offset: 100, once: true });
  }, []);

  // Smooth close function
  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setSelectedItem(null);
      setShowPDF(false);
      setClosing(false);
    }, 300);
  };

  // Close popup on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (selectedItem) closeModal();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedItem]);

  // Close popup on clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    if (selectedItem) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedItem]);

  return (
    <section 
      id="projects" 
      className="min-h-screen bg-[#F5F1EB] flex items-center py-20 relative"
    >
      <div className="md:container px-5 w-full flex flex-col">
        
        {/* TITLES (Exact format from your About component) */}
        <h2
          className="title text-3xl md:text-4xl font-semibold text-[#333333]"
          data-aos="fade-down"
        >
          {Projects.title} & {Reports.title}
        </h2>
        <h4
          className="subtitle text-[#555555] mt-2"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          {Projects.subtitle}
        </h4>

        {/* MAIN CONTENT AREA */}
        <div className="flex items-center md:flex-row flex-col gap-10 mt-10">
          
          {/* Left: Featured Image */}
          <div 
            className="flex-1 flex justify-center"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img 
              src={Projects.image} 
              alt="Decoration" 
              className="w-full max-w-[300px] md:max-w-[400px] h-auto object-contain" 
            />
          </div>

          {/* Right: Dual Swipers */}
          <div className="flex flex-col gap-10 w-full max-w-[340px]">
            
            {/* PROJECTS SWIPER */}
            <div data-aos="fade-left" data-aos-delay="300">
              <p className="text-[10px] font-bold opacity-40 uppercase mb-2 tracking-widest">Projects</p>
              <Swiper pagination={{ clickable: true }} spaceBetween={10} modules={[Pagination]} className="pb-8 custom-swiper">
                {Projects.project_content.map((item, i) => (
                  <SwiperSlide key={i} className="pb-2">
                    <div className="bg-white rounded-3xl p-5 shadow-md border border-[#E0D8CC]">
                      <img src={item.image} alt={item.title} className="rounded-lg h-28 w-full object-cover" />
                      <div className="mt-4 flex flex-col">
                        <h5 className="font-bold text-xs text-[#333333] line-clamp-2">{item.title}</h5>
                        <button 
                          className="text-[10px] font-bold text-[#C6A87D] mt-4 self-end uppercase"
                          onClick={() => { setSelectedItem(item); setShowPDF(false); }}
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* REPORTS SWIPER */}
            <div data-aos="fade-left" data-aos-delay="400">
              <p className="text-[10px] font-bold opacity-40 uppercase mb-2 tracking-widest">Report</p>
              <Swiper pagination={{ clickable: true }} spaceBetween={10} modules={[Pagination]} className="pb-8 custom-swiper">
                {Reports.report_content.map((item, i) => (
                  <SwiperSlide key={i} className="pb-2">
                    <div className="bg-white rounded-3xl p-5 shadow-md border border-[#E0D8CC]">
                      <img src={item.image} alt={item.title} className="rounded-lg h-28 w-full object-cover" />
                      <div className="mt-4 flex flex-col">
                        <h5 className="font-bold text-xs text-[#333333] line-clamp-2">{item.title}</h5>
                        <button 
                          className="text-[10px] font-bold text-[#C6A87D] mt-4 self-end uppercase"
                          onClick={() => { setSelectedItem(item); setShowPDF(true); }}
                        >
                          View Report
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL POPUP (Shared Logic) */}
      {selectedItem && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 transition-opacity ${
            closing ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            ref={modalRef}
            className={`bg-white p-6 md:p-10 rounded-xl flex flex-col shadow-lg transform transition-transform ${
              closing ? "scale-95" : "scale-100"
            } ${showPDF ? "w-11/12 md:w-3/4 lg:w-1/2 h-[90vh]" : "max-w-md w-full"}`}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-[#333333]">{selectedItem.title}</h3>
              <button
                onClick={closeModal}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#E0D8CC] text-[#555555]"
              >
                ✖
              </button>
            </div>

            {/* Content Switcher */}
            <div className="flex-1 overflow-auto">
              {showPDF ? (
                <iframe
                  src={selectedItem.link}
                  title="PDF Viewer"
                  className="w-full h-full rounded-md border border-[#E0D8CC]"
                />
              ) : (
                <p className="leading-relaxed text-[#555555]">{selectedItem.description}</p>
              )}
            </div>

            {/* Optional Download Footer for PDFs */}
            {showPDF && (
              <div className="mt-4 flex justify-center">
                <a
                  href={selectedItem.link}
                  download
                  className="px-6 py-2 bg-[#C6A87D] text-white rounded-md hover:bg-[#B79362]"
                >
                  Download Report
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;