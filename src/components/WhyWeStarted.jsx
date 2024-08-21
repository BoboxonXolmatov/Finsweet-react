import React from "react";
import { whyWeStartedData } from "../constants/index";

const WhyWeStarted = () => {
  return (
    <div>
      <div className="container mx-auto py-16">
        {whyWeStartedData.map((item, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center mb-8 gap-12">
            <div className="lg:w-1/2">
              <img src={item.imageUrl} alt={item.title} className="rounded-lg shadow-lg"/>
            </div>
            <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-8">
              <h2 className="text-sm font-semibold uppercase">
                {item.title}
              </h2>
              <h3 className="text-3xl mt-6">{item.heading}</h3>
              <p className="mt-6">{item.description}</p>
              <button className="mt-8 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600">
                {item.buttonText} &gt;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWeStarted;
