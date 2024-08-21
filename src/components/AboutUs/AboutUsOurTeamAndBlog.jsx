import React from 'react'
import {teamAndBlogData} from "../../constants/AboutUsIndex"

const AboutUsOurTeamAndBlog = () => {
  return (
    <div className="py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="flex flex-col justify-center">
          <h3 className="text-base uppercase">{teamAndBlogData.team.title}</h3>
          <h2 className="mt-4 text-xl font-medium">{teamAndBlogData.team.heading}</h2>
          <p className="mt-4 font-thin">{teamAndBlogData.team.description}</p>
        </div>
        <div className="flex justify-center items-center">
          <img src={teamAndBlogData.team.image} alt="Our Team" className="rounded-lg shadow-md w-10/12" />
        </div>
        <div className="flex  items-center order-last md:order-none">
          <img src={teamAndBlogData.blog.image} alt="Why We Started This Blog" className="rounded-lg shadow-md w-10/12" />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-base uppercase ">{teamAndBlogData.blog.title}</h3>
          <h2 className="mt-4 text-xl font-medium">{teamAndBlogData.blog.heading}</h2>
          <p className="mt-4 font-thin">{teamAndBlogData.blog.description}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutUsOurTeamAndBlog
