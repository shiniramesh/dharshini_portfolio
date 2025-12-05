import { Link } from "react-router-dom";
import { content } from "../Content";

const Blog = () => {
  const blogPosts = content.blog.posts;

  const videoPost = blogPosts.find((post) => post.type === "video");
  const regularPosts = blogPosts.filter((post) => post.type !== "video");

  return (
    <section id="blog" className="bg-[#F5F1EB] py-10">
      <div className="md:container px-5 flex flex-col gap-6">

        <div>
          <h2 className="title text-[#333333] mb-2">{content.blog.title}</h2>
          <h4 className="subtitle text-[#555555] mb-6">{content.blog.subtitle}</h4>
        </div>

        {/* Video Card */}
        {videoPost && (
          <div className="flex justify-center mb-6">
            <Link
              to={`/video/${videoPost.id}`}
              className="transform transition hover:scale-105 w-full sm:w-4/5 md:w-2/3 lg:w-1/2"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-[#E0D8CC] cursor-pointer">
                <img
                  src={videoPost.image}
                  alt={videoPost.title}
                  className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-md"
                />
              </div>
            </Link>
          </div>
        )}

        {/* Regular Blog/Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {regularPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="transform transition hover:scale-105"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-[#E0D8CC] cursor-pointer flex flex-col">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 sm:h-52 md:h-56 object-cover object-center rounded-md"
                />
                <h3 className="font-semibold text-[#333333] text-sm p-2 line-clamp-1 text-center">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
