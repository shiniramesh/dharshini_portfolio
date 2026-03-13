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
    <section 
      id="projects" 
      className="h-screen bg-[#F5F1EB] flex flex-col items-center pt-12 pb-4 overflow-hidden"
    >
      <div className="md:container px-5 w-full flex flex-col h-full max-w-6xl">
        
        {/* TITLES */}
        <div className="mb-4 text-center md:text-left">
            <h2 className="title text-3xl md:text-4xl font-semibold text-[#333333]" data-aos="fade-down">
              {Projects.title} & {Reports.title}
            </h2>
            <h4 className="subtitle text-[#555555] mt-1" data-aos="fade-down" data-aos-delay="100">
              {Projects.subtitle}
            </h4>
        </div>

        {/* CONTENT AREA */}
        <div className="flex flex-row items-center justify-center gap-6 xl:gap-12 flex-1">
          
          {/* LEFT DECORATION - Larger Sunflower */}
          <div 
            className="hidden lg:flex flex-none w-52 xl:w-72"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img 
              src={Projects.image} 
              alt="Decoration" 
              className="w-full h-auto object-contain" 
            />
          </div>

          {/* CARDS WRAPPER */}
          <div className="flex-1 flex flex-col items-center">
            
            {/* TOP ROW: Projects and Reports */}
            <div className="flex flex-row justify-center gap-6 w-full mb-2">
              
              {/* Projects Swiper */}
              <div className="w-full max-w-[320px]" data-aos="fade-up" data-aos-delay="300">
                <p className="text-[10px] font-bold opacity-40 uppercase mb-1 tracking-[0.2em] text-center">Projects</p>
                <Swiper pagination={{ clickable: true }} spaceBetween={15} modules={[Pagination]} className="pb-8 custom-swiper">
                  {Projects.project_content.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-[#E0D8CC]/50 flex flex-col hover:shadow-md transition-all min-h-[250px]">
                        <img src={item.image} alt={item.title} className="rounded-2xl h-32 w-full object-cover" />
                        <div className="mt-4 flex flex-col flex-1">
                          <h5 className="font-bold text-[15px] text-[#333333] leading-tight">
                            {item.title}
                          </h5>
                          {/* mt-auto pushes the button to the bottom without extra "box" space */}
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
                <p className="text-[10px] font-bold opacity-40 uppercase mb-1 tracking-[0.2em] text-center">Reports</p>
                <Swiper pagination={{ clickable: true }} spaceBetween={15} modules={[Pagination]} className="pb-8 custom-swiper">
                  {Reports.report_content.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-[#E0D8CC]/50 flex flex-col hover:shadow-md transition-all min-h-[250px]">
                        <img src={item.image} alt={item.title} className="rounded-2xl h-32 w-full object-cover" />
                        <div className="mt-4 flex flex-col flex-1">
                          <h5 className="font-bold text-[15px] text-[#333333] leading-tight">
                            {item.title}
                          </h5>
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

            {/* BOTTOM ROW: Lab Work (Centered) */}
            {LabWork && (
              <div className="w-full max-w-[320px]" data-aos="fade-up" data-aos-delay="500">
                <p className="text-[10px] font-bold opacity-40 uppercase mb-1 tracking-[0.2em] text-center">Lab Work</p>
                <Swiper pagination={{ clickable: true }} spaceBetween={15} modules={[Pagination]} className="pb-8 custom-swiper">
                  {LabWork.lab_content.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-[#E0D8CC]/50 flex flex-col hover:shadow-md transition-all min-h-[250px]">
                        <img src={item.images?.[0]} alt={item.title} className="rounded-2xl h-32 w-full object-cover" />
                        <div className="mt-4 flex flex-col flex-1">
                          <h5 className="font-bold text-[15px] text-[#333333] leading-tight">
                            {item.title}
                          </h5>
                          <button className="text-[10px] font-bold text-[#C6A87D] mt-auto self-end uppercase hover:underline" onClick={() => { setSelectedItem(item); setShowPDF(false); setShowGallery(true); }}>
                            View Gallery →
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MODAL POPUP - Clean style, no inner "text box" */}
      {selectedItem && (
        <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[100] transition-opacity ${closing ? "opacity-0" : "opacity-100"}`}>
          <div ref={modalRef} className={`bg-[#F5F1EB] p-8 rounded-[2.5rem] flex flex-col shadow-2xl transform transition-transform ${closing ? "scale-95" : "scale-100"} ${showPDF || showGallery ? "w-[90%] h-[85vh]" : "max-w-md w-[90%]"}`}>
            
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-[#333333] leading-tight pr-4">
                {selectedItem.title}
              </h3>
              <button onClick={closeModal} className="text-2xl opacity-40 hover:opacity-100 transition-opacity">✕</button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {showPDF ? (
                <iframe src={selectedItem.link} title="PDF" className="w-full h-full rounded-xl border-none bg-white" />
              ) : showGallery ? (
                <div className="w-full h-full bg-white rounded-xl border border-[#E0D8CC] p-2">
                  <Swiper navigation={true} pagination={{ type: "fraction" }} modules={[Navigation, Pagination]} className="w-full h-full">
                    {selectedItem.images?.map((imgSrc, index) => (
                      <SwiperSlide key={index} className="flex justify-center items-center h-full">
                        <img src={imgSrc} alt={`Gallery ${index}`} className="max-w-full max-h-full object-contain rounded-lg" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ) : (
                /* The text now sits directly on the modal background */
                <div className="text-[15px] text-[#555555] leading-relaxed pr-2">
                    {selectedItem.description}
                </div>
              )}
            </div>

            {/* Close Button - Matches the "earlier" clean style */}
            {!showPDF && !showGallery && (
              <div className="flex justify-end mt-8">
                <button 
                  onClick={closeModal}
                  className="bg-[#C6A87D] text-white px-10 py-2.5 rounded-xl font-medium hover:bg-[#b3966a] transition-all shadow-sm"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;