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
  const { Projects, Reports, LabWork } = content;
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPDF, setShowPDF] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
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
      setShowGallery(false);
      setClosing(false);
    }, 300);
  };

  return (
    <section id="projects" className="min-h-screen bg-[#F5F1EB] flex flex-col items-center py-12 relative overflow-x-hidden">
      <div className="md:container px-5 w-full flex flex-col max-w-6xl mx-auto">
        
        {/* TITLES */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="title text-3xl md:text-4xl font-semibold text-[#333333]" data-aos="fade-down">
            {Projects.title} & {Reports.title}
          </h2>
          <h4 className="subtitle text-[#555555] mt-1" data-aos="fade-down" data-aos-delay="100">
            {Projects.subtitle}
          </h4>
        </div>

        {/* CONTENT AREA */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 xl:gap-12">
          <div className="hidden lg:flex flex-none w-52 xl:w-72" data-aos="fade-right" data-aos-delay="200">
            <img src={Projects.image} alt="Decoration" className="w-full h-auto object-contain" />
          </div>

          <div className="w-full flex-1 flex flex-col items-center gap-4">
            <div className="flex flex-col md:flex-row justify-center gap-6 w-full mb-2 items-center md:items-start">
              {/* Projects Swiper */}
              <div className="w-full max-w-[320px]" data-aos="fade-up" data-aos-delay="300">
                <p className="text-[10px] font-bold opacity-40 uppercase mb-2 tracking-[0.2em] text-center">Projects</p>
                <Swiper pagination={{ clickable: true }} spaceBetween={15} modules={[Pagination]} className="pb-10 custom-swiper">
                  {Projects.project_content.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-[#E0D8CC]/50 flex flex-col hover:shadow-md transition-all min-h-[250px]">
                        <img src={item.image} alt={item.title} className="rounded-2xl h-32 w-full object-cover" />
                        <div className="mt-4 flex flex-col flex-1">
                          <h5 className="font-bold text-[15px] text-[#333333] leading-tight">{item.title}</h5>
                          <button className="text-[10px] font-bold text-[#C6A87D] mt-auto self-end uppercase hover:underline" onClick={() => { setSelectedItem(item); setShowPDF(false); setShowGallery(false); }}>
                            Read More →
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Reports Swiper */}
              <div className="w-full max-w-[320px]" data-aos="fade-up" data-aos-delay="400">
                <p className="text-[10px] font-bold opacity-40 uppercase mb-2 tracking-[0.2em] text-center">Reports</p>
                <Swiper pagination={{ clickable: true }} spaceBetween={15} modules={[Pagination]} className="pb-10 custom-swiper">
                  {Reports.report_content.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-[#E0D8CC]/50 flex flex-col hover:shadow-md transition-all min-h-[250px]">
                        <img src={item.image} alt={item.title} className="rounded-2xl h-32 w-full object-cover" />
                        <div className="mt-4 flex flex-col flex-1">
                          <h5 className="font-bold text-[15px] text-[#333333] leading-tight">{item.title}</h5>
                          <button className="text-[10px] font-bold text-[#C6A87D] mt-auto self-end uppercase hover:underline" onClick={() => { setSelectedItem(item); setShowPDF(true); setShowGallery(false); }}>
                            View Report →
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {LabWork && (
              <div className="w-full max-w-[320px]" data-aos="fade-up" data-aos-delay="500">
                <p className="text-[10px] font-bold opacity-40 uppercase mb-2 tracking-[0.2em] text-center">Lab Work</p>
                <Swiper pagination={{ clickable: true }} spaceBetween={15} modules={[Pagination]} className="pb-10 custom-swiper">
                  {LabWork.lab_content.map((item, i) => {
                    const thumb = item.image || (typeof item.media?.[0] === 'string' ? item.media[0] : item.media?.[0]?.src);
                    return (
                      <SwiperSlide key={i}>
                        <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-[#E0D8CC]/50 flex flex-col hover:shadow-md transition-all min-h-[250px]">
                          <img src={thumb} alt={item.title} className="rounded-2xl h-32 w-full object-cover bg-[#F5F1EB]" />
                          <div className="mt-4 flex flex-col flex-1">
                            <h5 className="font-bold text-[15px] text-[#333333] leading-tight">{item.title}</h5>
                            <button className="text-[10px] font-bold text-[#C6A87D] mt-auto self-end uppercase hover:underline" onClick={() => { setSelectedItem(item); setShowPDF(false); setShowGallery(true); }}>
                              View Gallery →
                            </button>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MODAL POPUP */}
      {selectedItem && (
        <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[100] transition-opacity p-4 ${closing ? "opacity-0" : "opacity-100"}`}>
          <div ref={modalRef} className={`bg-[#F5F1EB] p-6 md:p-8 rounded-[2rem] flex flex-col shadow-2xl transform transition-transform ${closing ? "scale-95" : "scale-100"} ${showPDF || showGallery ? "w-full lg:w-[90%] h-auto lg:h-[85vh]" : "max-w-md w-full"}`}>
            
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#333333] leading-tight pr-4">{selectedItem.title}</h3>
              <button onClick={closeModal} className="text-2xl opacity-40 hover:opacity-100 p-2">✕</button>
            </div>

            <div className="flex-1 overflow-y-auto min-h-[200px]">
              {showPDF ? (
                <>
                  {/* LAPTOP VIEW: Show iframe */}
                  <div className="hidden lg:block w-full h-full">
                    <iframe 
                      src={`${selectedItem.link}#view=FitH`} 
                      title="PDF" 
                      className="w-full h-full rounded-xl border-none bg-white" 
                    />
                  </div>
                  {/* MOBILE VIEW: Show a Placeholder Card instead of a broken iframe */}
                  <div className="lg:hidden flex flex-col items-center justify-center py-10 bg-white rounded-2xl border border-[#E0D8CC] text-center px-4">
                    <div className="w-16 h-16 bg-[#F5F1EB] rounded-full flex items-center justify-center mb-4">
                       <span className="text-2xl">📄</span>
                    </div>
                    <p className="text-[#555555] font-medium mb-2">PDF Document Ready</p>
                    <p className="text-[#999999] text-xs">Mobile browsers work best when opening PDFs in a new window.</p>
                  </div>
                </>
              ) : showGallery ? (
                <div className="h-full bg-white p-2 rounded-xl">
                  <Swiper navigation pagination={{ type: "fraction" }} modules={[Navigation, Pagination]} className="h-full">
                    {(selectedItem.media || selectedItem.images || []).map((med, index) => (
                      <SwiperSlide key={index} className="flex justify-center items-center h-full">
                        <img src={med.src || med} className="max-w-full max-h-full object-contain rounded-lg" alt="Gallery"/>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ) : (
                <div className="text-[15px] text-[#555555] leading-relaxed">{selectedItem.description}</div>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col md:flex-row justify-end items-center gap-4 mt-6">
              {showPDF && (
                <a 
                  href={selectedItem.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full md:w-auto text-center bg-[#C6A87D] text-white px-8 py-3 rounded-xl font-bold text-[12px] uppercase tracking-wider hover:bg-[#b3966a] transition-all shadow-md active:scale-95"
                >
                  View / Download Full PDF ↗
                </a>
              )}
              
              {!showPDF && !showGallery && (
                <button onClick={closeModal} className="w-full md:w-auto bg-[#C6A87D] text-white px-10 py-2.5 rounded-xl font-medium hover:bg-[#b3966a] transition-all">
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;