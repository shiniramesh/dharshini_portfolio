import { useNavigate } from "react-router-dom";
import { content } from "../Content";
import { useEffect } from "react";

import reflectionImg from "../assets/images/BlogImg/1.JPG";
import sideRoleImg from "../assets/images/BlogImg/2.png";
import teamworkImg from "../assets/images/BlogImg/3.png";
const VideoDetail = () => {
  const navigate = useNavigate();
  const videoPost = content.blog.posts.find((p) => p.type === "video");

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
        <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-8 leading-tight">
          {videoPost.title}
        </h2>

        {/* Video */}
        <iframe
        src="https://www.youtube.com/embed/hGXjlXMoMAo"
        title={videoPost.title}
        className="w-full aspect-video rounded-xl shadow-md mb-8"
        allowFullScreen
      ></iframe>


        {/* Technical Specifications */}
        <h3 className="text-2xl font-semibold text-[#333333] mb-3">Technical Specifications</h3>
        <ul className="list-disc list-inside text-[#555555] text-lg mb-8 space-y-2">
          <li>We used iPhone 15 Pro Max and iPhone 16 for shooting the video.</li>
          <li>Two cameras were used because the iPhone 15 Pro Max offered superior zoom quality for close-up shots.</li>
          <li>Shots were taken at the CS Building and the Student Centre, and the sunny weather matched the look we wanted, so we didn’t face many challenges.</li>
        </ul>

        {/* Reflection on Contribution */}
        <h3 className="text-2xl font-semibold text-[#333333] mb-3">Reflection on My Contribution</h3>
        <p className="text-[#555555] text-lg mb-6 leading-relaxed">
          Working on the Coffee advertisement was an enjoyable and collaborative experience. I contributed in both camera work and side role acting, working alongside my team members Sindhu, Christian, Roisin, Grace, and Mughunthan. Even though I didn’t film all the footage, I played an active part during my turns, helping ensure smooth filming and visually appealing shots.
        </p>

        {/* Image after Reflection */}
        <div className="relative mb-10">
          <img
            src={reflectionImg } // replace with your image path
            alt="Reflection on Contribution"
            className="rounded-xl shadow-lg mx-auto w-3/4 sm:w-2/3 md:w-1/2 h-auto"
          />
        </div>

        {/* Camera Work */}
        <h3 className="text-2xl font-semibold text-[#333333] mb-3">Camera Work</h3>
        <p className="text-[#555555] text-lg mb-6 leading-relaxed">
          I took turns operating the cameras with Sindhu and Christian, focusing on proper framing, lighting, and angles to highlight the coffee. Using the iPhone 15 Pro Max allowed us to capture detailed zoomed shots, while the iPhone 16 provided additional coverage. Collaborating and sharing responsibilities with the team helped maintain continuity across scenes and ensured efficient filming.
        </p>

        {/* Side Role & On-Set Support */}
        <h3 className="text-2xl font-semibold text-[#333333] mb-3">Side Role & On-Set Support</h3>
        <p className="text-[#555555] text-lg mb-6 leading-relaxed">
          Alongside Roisin and Grace, I performed a side role, assisting with small on-set tasks and supporting the team in maintaining the flow of production. This included helping with shot setups, guiding the positioning of props, and making sure filming ran smoothly according to the ad’s vision.
        </p>

        {/* Image after Side Role */}
        <div className="relative mb-10">
          <img
            src={sideRoleImg} // replace with your image path
            alt="Side Role"
            className="rounded-xl shadow-lg mx-auto w-3/4 sm:w-2/3 md:w-1/2 h-auto"
          />
        </div>

        {/* Teamwork & Learning */}
        <h3 className="text-2xl font-semibold text-[#333333] mb-3">Teamwork & Learning</h3>
        <p className="text-[#555555] text-lg mb-6 leading-relaxed">
          Filming in turns and coordinating roles gave me practical experience in collaborative filming, mobile cinematography, and working efficiently on location. This project reinforced the importance of teamwork, technical precision, and timing, and allowed me to contribute meaningfully to a polished final advertisement.
        </p>

        {/* Image after Teamwork */}
        <div className="relative mb-12">
          <img
            src={teamworkImg} // replace with your image path
            alt="Teamwork & Learning"
            className="rounded-xl shadow-lg mx-auto w-3/4 sm:w-2/3 md:w-1/2 h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default VideoDetail;
