import { Link } from "react-router-dom";
import { content } from "../Content";

const Blog = () => {
  const blogPosts = content.blog.posts;

  return (
    <section id="blog" className="bg-[#F5F1EB] py-20">
      <div className="md:container px-5">
        <h2 className="title text-[#333333] mb-2">{content.blog.title}</h2>
        <h4 className="subtitle text-[#555555] mb-10">{content.blog.subtitle}</h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="transform transition hover:scale-105"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-[#E0D8CC] cursor-pointer h-full flex flex-col p-3">
                
                {/* Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-72 md:h-80 object-cover object-center rounded-md mb-3"
                />

                {/* Title Only */}
                <h3 className="font-semibold text-[#333333] text-sm line-clamp-1">
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
