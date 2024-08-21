import React from "react";
import Jonathon from "../assets/Profile picture.png";

const TestimonialCard = () => {
  return (
    <div className="py-10 px-4">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="md:w-2/5">
          <h2 className="text-xl font-semibold">TESTIMONIALS</h2>
          <h3 className="text-2xl font-semibold mt-4">
            What people say about our blog
          </h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className="md:w-3/5 ml-20 flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row items-center">
          <div className="">
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center justify-between">
              <div className="mt-12 flex items-center">
                <img
                  className="w-12 h-12 mr-4"
                  src={Jonathon}
                  alt="Profile"
                />
                <div>
                  <p className="font-semibold">Jonathan Vallem</p>
                  <p className="text-sm">New York, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
