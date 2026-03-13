import React, { useState, useEffect, useRef } from "react";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";

const Projects = () => {
  const { Projects, Reports } = content;
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPDF, setShowPDF] = useState(false);
  const [closing, setClosing] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000, offset: 100, once: true });
  }, []);

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setSelectedItem(null);
      setShowPDF(false);
      setClosing(false);
    }, 300);
  };

  return (
    <section 
      id="projects" 
      className="min-h-screen bg-[#F5F1EB] flex items-center py-10 overflow-hidden"
    >
      <div className="md:container px-5 w-full flex flex-col">
        
        {/* TITLES */}
        <div className="mb-8 text-center md:text-left">
            <h2 className="title text-3xl md:text-4xl font-semibold text-[#333333]" data-aos="fade-down">
              {Projects.title} & {Reports.title}
            </h2>
            <h4 className="subtitle text-[#555555] mt-1" data-aos="fade-down" data-aos-delay="100">
              {Projects.subtitle}
            </h4>
        </div>

        {/* THREE COLUMN LAYOUT */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          
          {/* COLUMN 1: Left Decoration (The Flower) */}
          <div 
            className="flex-none w-32 md:w-48 lg:w-64"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img 
              src={Projects.image} 
              alt="Decoration" 
              className="w-full h-auto object-contain opacity-100" 
            />
          </div>

          {/* COLUMN 2: Projects Swiper (Center) */}
          <div className="flex-1 w-full max-w-sm" data-aos="fade-up" data-aos-delay="300">
            <p className="text-[10px] font-bold opacity-40 uppercase mb-3 tracking-[0.2em] text-center">Projects</p>
            <Swiper 
              pagination={{ clickable: true }} 
              spaceBetween={20} 
              slidesPerView={1} // Shows one card at a time
              modules={[Pagination, Navigation]} 
              className="pb-12 custom-swiper"
            >
              {Projects.project_content.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white rounded-3xl p-5 shadow-md border border-[#E0D8CC] h-full flex flex-col hover:shadow-lg transition-all">
                    <img src={item.image} alt={item.title} className="rounded-2xl h-48 w-full object-cover" />
                    <div className="mt-4 flex flex-col flex-1">
                      <h5 className="font-bold text-sm text-[#333333] leading-snug min-h-[40px]">
                          {item.title}
                      </h5>
                      <button 
                        className="text-[10px] font-bold text-[#C6A87D] mt-4 self-end uppercase hover:underline"
                        onClick={() => { setSelectedItem(item); setShowPDF(false); }}
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* COLUMN 3: Reports Swiper (Right) */}
          <div className="flex-1 w-full max-w-sm" data-aos="fade-up" data-aos-delay="400">
            <p className="text-[10px] font-bold opacity-40 uppercase mb-3 tracking-[0.2em] text-center">Reports</p>
            <Swiper 
              pagination={{ clickable: true }} 
              spaceBetween={20} 
              slidesPerView={1} // Shows one card at a time
              modules={[Pagination, Navigation]} 
              className="pb-12 custom-swiper"
            >
              {Reports.report_content.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white rounded-3xl p-5 shadow-md border border-[#E0D8CC] h-full flex flex-col hover:shadow-lg transition-all">
                    <img src={item.image} alt={item.title} className="rounded-2xl h-48 w-full object-cover" />
                    <div className="mt-4 flex flex-col flex-1">
                      <h5 className="font-bold text-sm text-[#333333] leading-snug min-h-[40px]">
                          {item.title}
                      </h5>
                      <button 
                        className="text-[10px] font-bold text-[#C6A87D] mt-4 self-end uppercase hover:underline"
                        onClick={() => { setSelectedItem(item); setShowPDF(true); }}
                      >
                        View Report →
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>

      {/* MODAL (Same logic) */}
      {selectedItem && (
        <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[100] transition-opacity ${closing ? "opacity-0" : "opacity-100"}`}>
          <div ref={modalRef} className={`bg-[#F5F1EB] p-6 rounded-3xl flex flex-col shadow-2xl transform transition-transform ${closing ? "scale-95" : "scale-100"} ${showPDF ? "w-[90%] h-[85vh]" : "max-w-md w-[90%]"}`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-[#333333]">{selectedItem.title}</h3>
              <button onClick={closeModal} className="text-xl">✕</button>
            </div>
            <div className="flex-1 overflow-auto">
              {showPDF ? (
                <iframe src={selectedItem.link} title="PDF" className="w-full h-full rounded-xl border-none bg-white" />
              ) : (
                <div className="bg-white p-5 rounded-xl border border-[#E0D8CC] text-sm text-[#555555] leading-relaxed">
                    {selectedItem.description}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;