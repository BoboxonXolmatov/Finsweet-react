import React from "react";
import { featuredPostData } from "../constants/index.jsx";

const FeaturedPost = () => {
  return (
    <div className="w-full lg:w-2/3 mt-8 p-6 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold mb-4">Featured Post</h2>
        {featuredPostData.map((feature, index) => (
          <div key={index} className="mt-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src={feature.image}
                alt="Featured"
                className="mt-4 w-5/6 h-72 rounded-lg object-cover"
              />
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-500">
                By{" "}
                <a href="#" className="text-blue-500">
                  {feature.author}
                </a>{" "}
                | {feature.date}
              </div>
              <h3 className="text-3xl font-normal mt-2">{feature.title}</h3>
              <p className="mt-4 text-gray-600">{feature.excerpt}</p>
              <button className="mt-6 px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400">
                Read More &gt;
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FeaturedPost;
