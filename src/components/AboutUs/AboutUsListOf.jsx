import React from "react";
import { profileData } from "../../constants/AboutUsIndex";

const AboutUsListOf = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-normal text-center mb-10">List of Authors</h2>
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
      {profileData.map((profile, index) => (
        <div
          key={index}
          className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden hover:bg-slate-950"
        >
          <div className="px-6 py-4">
            <div className="flex justify-center">
              <img
                className="h-24 w-24 rounded-full object-cover mt-4"
                src={profile.image}
                alt={profile.name}
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <p className="text-gray-300 mt-1">{profile.position}</p>
              <div className="flex justify-center mt-4">
                {profile.socialLinks.map((link, index) => (
                  <a key={index} href={link.url} className="text-gray-600 mx-1">
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AboutUsListOf;
