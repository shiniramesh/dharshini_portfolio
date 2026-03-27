import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PodcastVideoDetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#F5F1EB] min-h-screen py-20">
      <div className="md:container px-5 max-w-3xl mx-auto font-sans">

        {/* Back Button */}
        <button
          onClick={() => navigate("/", { state: { scrollToBlog: true } })}
          className="px-4 py-2 bg-[#C6A87D] text-white rounded-lg hover:bg-[#B79362] mb-10 shadow-md transition-all flex items-center gap-2"
        >
          <span>←</span> Back to Blog
        </button>

        
        {/* Video Player */}
        <div className="relative group mb-12">
          <iframe
            src="https://www.youtube.com/embed/DN8WFWXU8Ok" 
            title="Reflection Video"
            className="w-full aspect-video rounded-2xl shadow-2xl border border-[#E0D8CC]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Footer info */}
        <div className="mt-16 pt-8 border-t border-[#E0D8CC] text-center">
          <p className="text-[#999999] text-sm uppercase tracking-widest">
            Reflection Video 
          </p>
        </div>

      </div>
    </section>
  );
};

export default PodcastVideoDetail;