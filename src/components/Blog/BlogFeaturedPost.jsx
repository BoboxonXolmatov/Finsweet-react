import React from "react";
import BlogImg1 from "../../assets/Blog_img/Blog_img_1.png";


const BlogFeaturedPost = () => {
  return (
    <div className="py-10">
      <div className="mx-auto rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="p-10 md:w-2/3">
            <h3 className="uppercase tracking-wide text-base">Featured Post</h3>
            <h2 className="mt-4 w-96 text-2xl font-normal">
              Step-by-step guide to choosing great font pairs
            </h2>

            <div className="mt-6 flex items-center">
              <div className="text-sm">
                By{" "}
                <span className="text-indigo-600 font-semibold cursor-pointer">
                  John Doe
                </span>
                <span className="mx-2">|</span> May 23, 2022
              </div>
            </div>
            <p className="text-base mt-6 w-3/4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="mt-6 py-3 px-4 bg-yellow-600 text-black rounded hover:bg-yellow-500 font-semibold text-sm"
              >
                Read More {">"}
              </a>
            </div>
          </div>
          <div className="md:w-1/3">
            <img className="object-cover rounded-lg w-full h-full" src={BlogImg1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFeaturedPost;
