import { useParams, useNavigate } from "react-router-dom";
import { content } from "../Content";
import { useEffect } from "react";

const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = content.blog.posts.find((p) => p.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post)
    return (
      <p className="text-center mt-10 text-[#555555]">
        Post not found!
      </p>
    );

  return (
    <section className="bg-[#F5F1EB] min-h-screen py-20">
      <div className="md:container px-5">

        {/* Back Button */}
        <button
          onClick={() => navigate("/", { state: { scrollToBlog: true } })}
          className="inline-block mb-8 px-4 py-2 bg-[#C6A87D] hover:bg-[#B79362] 
                     text-white font-semibold rounded-lg transition"
        >
          ← Back to Blog
        </button>

        {/* Title */}
        <h2 className="title text-[#333333] mb-6">{post.title}</h2>

        {/* Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full max-w-sm mx-auto mb-8 rounded-xl shadow-md 
                     border border-[#E0D8CC]"
        />

        {/* Technical Specifications */}
        <div className="mb-6">
          <h4 className="subtitle text-[#555555] mb-2">
            Technical Specifications:
          </h4>

          <p className="text-[#555555]">
            Shot on: {post.technical_specifications.shot_on}
          </p>

          <p className="text-[#555555]">
            Aperture: {post.technical_specifications.aperture}, 
            Shutter Speed: {post.technical_specifications.shutter_speed}, 
            ISO: {post.technical_specifications.ISO}
          </p>
        </div>

        {/* Editing Details */}
        <div className="mb-6">
          <h4 className="subtitle text-[#555555] mb-2">Editing Details:</h4>

          <ul className="list-disc list-inside text-[#555555]">
            {post.edits.map((edit, i) => (
              <li key={i}>{edit}</li>
            ))}
          </ul>
        </div>



        {/* Description */}
        <div className="mb-6">
          <h4 className="subtitle text-[#555555] mb-2">Description:</h4>

          <ul className="list-disc list-inside text-[#555555]">
            {post.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>

        {/* Reason */}
        <div>
          <h4 className="subtitle text-[#555555] mb-2">Reason:</h4>
          <p className="text-[#555555]">{post.reason}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
