import React from "react";

const AboutUsNavbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-16 px-12 max-w-7xl mx-auto">
      <div className="md:w-1/2">
        <h2 className="text-sm font-bold uppercase tracking-wider">
          About Us
        </h2>
        <h1 className="w-4/6 text-xl font-bold mt-4">
          We are a team of content writers who share their learnings
        </h1>
      </div>
      <div className="mt-6 md:mt-0 md:w-1/2">
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default AboutUsNavbar;
