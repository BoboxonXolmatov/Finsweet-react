import React, { useState } from "react";
import posts from "../../constants/BlogIndex.jsx";

const BlogAllPost = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5 ;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl mb-20">All posts</h1>
      <div className="max-w-5xl mx-auto space-y-12">
        {currentPosts.map((post) => (
          <div key={post.id} className="flex flex-col md:flex-row gap-12">
            <img
              className="w-full md:w-1/3 h-48 object-cover rounded-lg cursor-pointer"
              src={post.image}
              alt={post.title}
            />
            <div className="md:w-3/4">
              <span className="text-purple-600 font-semibold text-sm">
                {post.category}
              </span>
              <h2 className="text-2xl font-bold mt-2">{post.title}</h2>
              <p className="mt-4">{post.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-12 gap-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`cursor-pointer ${
            currentPage === 1 ? "text-gray-400" : "text-blue-600"
          } font-semibold`}
        >
          &lt; Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`cursor-pointer ${
            currentPage === totalPages ? "text-gray-400" : "text-blue-600"
          } font-semibold`}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default BlogAllPost;
