import { Link } from "react-router-dom";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Blog = () => {
  const blogPosts = content.blog.posts;
  const videoPosts = blogPosts.filter((post) => post.type === "video");
  const regularPosts = blogPosts.filter((post) => post.type !== "video");

  return (
    <section id="blog" className="bg-[#F5F1EB] py-10">
      <div className="md:container px-5 flex flex-col gap-6 max-w-6xl mx-auto">

        {/* TITLES */}
        <div>
          <h2 className="title text-[#333333] mb-2">{content.blog.title}</h2>
          <h4 className="subtitle text-[#555555] mb-6">{content.blog.subtitle}</h4>
        </div>

        {/* VIDEO CARDS */}
        {videoPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full">
            {videoPosts.map((video, index) => (
              <div key={video.id || index} className="w-full">
                
                {video.slides ? (
                  <div className="w-full bg-white rounded-xl overflow-hidden shadow-md border border-[#E0D8CC] relative">
                    <Swiper
                      pagination={{ clickable: true }}
                      modules={[Pagination]}
                      className="custom-blog-swiper w-full h-full"
                    >
                      {video.slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                          <Link to={`/video/${slide.id}`} className="block">
                            <div className="relative group">
                              <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-48 sm:h-56 md:h-60 object-cover"
                              />
                              {/* Subtle Bottom Gradient to help the dots pop */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 pointer-events-none"></div>
                            </div>
                          </Link>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                ) : (
                  /* Static Video Card (Media Project) */
                  <Link to={`/video/${video.id}`} className="transform transition hover:scale-[1.02] block w-full">
                    <div className="w-full bg-white rounded-xl overflow-hidden shadow-md border border-[#E0D8CC]">
                      <img 
                        src={video.image} 
                        alt={video.title} 
                        className="w-full h-48 sm:h-56 md:h-60 object-cover" 
                      />
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}

        {/* REGULAR BLOG CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {regularPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="transform transition hover:scale-105">
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-[#E0D8CC] flex flex-col h-full">
                <img src={post.image} alt={post.title} className="w-full h-48 sm:h-52 md:h-56 object-cover object-center" />
                <h3 className="font-semibold text-[#333333] text-sm p-3 line-clamp-1 text-center">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;