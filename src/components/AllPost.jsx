import React from "react";
import { posts } from "../constants/index";

const AllPost = () => {
  return (
    <div className="w-full lg:w-1/3 p-4 ml-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Posts</h2>
        <a href="#" className="text-blue-500">
          View All
        </a>
      </div>
      <div>
        {posts.map((post, index) => (
          <div key={index} className="mb-4 p-4 rounded-lg shadow-md">
            <div className="text-sm text-gray-500">
              By {" "}
              <a href="#" className="text-blue-500">
                {post.author}
              </a>{" "}
              | {post.date}
            </div>
            <h3 className="text-xl font-medium mt-4">{post.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPost;
