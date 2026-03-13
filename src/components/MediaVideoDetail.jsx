import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MediaVideoDetail = () => {
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
          className="px-4 py-2 bg-[#C6A87D] text-white rounded-lg hover:bg-[#B79362] mb-10 shadow-md transition-all"
        >
          ← Back to Blog
        </button>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-2 leading-tight">
          City vs Countryside Soundscape
        </h2>
        <p className="text-[#C6A87D] font-medium mb-8 uppercase tracking-widest text-sm">
          Interactive & Algorithmic Performance
        </p>

        {/* Video Player */}
        <div className="relative group mb-12">
          <iframe
            src="https://www.youtube.com/embed/_dyeREUqpRU" 
            title="Interactive Media Assignment"
            className="w-full aspect-video rounded-2xl shadow-2xl border border-[#E0D8CC]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold text-[#333333] mb-4">Project Concept</h3>
            <p className="text-[#555555] text-lg leading-relaxed">
              This performance explores the narrative contrast between urban and rural environments. 
              Inspired by cinematic transitions where music shifts based on a character's setting, 
              I used a rule-based system to evolve the soundscape from energetic city life to 
              a calm countryside atmosphere.
            </p>
          </div>
          <div className="bg-white/50 p-6 rounded-2xl border border-[#E0D8CC]">
            <h4 className="font-bold text-[#333333] mb-3">Software Used</h4>
            <p className="text-[#555555] text-sm leading-loose">
              • Freesound Explorer<br/>
              • Rule-based Logic<br/>
              • Real-time Audio Clustering
            </p>
          </div>
        </div>

        {/* Technical Sections */}
        <div className="space-y-10">
          
          <section>
            <h3 className="text-2xl font-semibold text-[#333333] mb-4">The Performance Rules</h3>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E0D8CC]">
              <p className="text-[#555555] mb-6 italic">
                To introduce randomness while maintaining creative control, I implemented a dice-based selection process:
              </p>
              <ul className="space-y-4 text-[#555555]">
                <li className="flex gap-4">
                  <span className="text-[#C6A87D] font-bold">01.</span>
                  <span><strong>The Roll:</strong> A six-sided dice determines the category for each of the 10 sound layers.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#C6A87D] font-bold">02.</span>
                  <span><strong>Odds (1, 3, 5):</strong> Triggers a "City" instrument like Saxophone, Synthesizer, or Electric Guitar.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#C6A87D] font-bold">03.</span>
                  <span><strong>Evens (2, 4, 6):</strong> Triggers "Countryside" sounds such as Flute, Violin, or Fiddle.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#C6A87D] font-bold">04.</span>
                  <span><strong>Layering:</strong> Each sound is added to a "Path" for a final synchronized playback.</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-[#333333] mb-4">Motivation & Reflection</h3>
            <p className="text-[#555555] text-lg leading-relaxed mb-6">
              I grew up in a noisy, busy place and only later realized how profoundly different a quiet 
              environment feels. I wanted to represent this personal journey through 
              interactive sound exploration.
            </p>
            <p className="text-[#555555] text-lg leading-relaxed">
              Using Freesound Explorer’s path feature allowed me to focus on the interaction and 
              the narrative rather than manual file management. Every performance remains 
              unique due to the inherent randomness of the dice and the variation within the audio clusters.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-[#E0D8CC] text-center">
          <p className="text-[#999999] text-sm uppercase tracking-widest">
            Interactive Media Project • University of Limerick
          </p>
        </div>

      </div>
    </section>
  );
};

export default MediaVideoDetail;