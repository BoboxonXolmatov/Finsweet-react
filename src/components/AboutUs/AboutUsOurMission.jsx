import React from "react";
import { stats, missionVision } from "../../constants/AboutUsIndex";

const AboutUsOurMission = () => {
  return (
    <div className="py-16">
      <div className="px-6 lg:px-8">
        <div
          className="flex flex-col md:flex-row  justify-between items-center bg-cover bg-center bg-no-repeat p-8 rounded-lg shadow-md text-white"
          style={{
            backgroundImage: "url(../src/assets/AboutUs_img/friend.png)",
            height: "400px",
          }}
        >
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {missionVision.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg uppercase">{item.title}</h3>
              <h2 className="mt-4 text-2xl font-light w-3/4">
                {item.description}
              </h2>
              <p className="mt-6 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsOurMission;
