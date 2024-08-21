import React from "react";
import BlogFeaturedPost from "./BlogFeaturedPost";
import BlogAllPost from "./BlogAllPost";
import Categories from "../Categories"
import JoinUs from "../JoinUs";


const Blog = () => {
  return (
    <div>
      <BlogFeaturedPost />
      <BlogAllPost />
      <Categories />
      <JoinUs />
    </div> 
  );
};

export default Blog;
