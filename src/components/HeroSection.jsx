import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-grey-800 flex flex-col items-start">
      <div className="items-center text-gray-400">
        POSTED ON
        <span className="font-semibold text-slate-100 tracking-wide">
          {" "}
          STARTUP
        </span>
      </div>

      <h1 className="mt-4 w-2/3 text-2xl sm:text-4xl lg:text-5xl tracking-wide">
        Step-by-step guide to choosing great font pairs
      </h1>
      <p className="mt-10 text-lg max-4-xl text-2xl">
        By <span className="text-yellow-600 ">James West </span>| May 23, 2022
      </p>
      <div className="w-5/6 my-10 text-gray-300 text-2xl">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </div>
      <button className="mt-6 px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400">
        Read More &gt;
      </button>
    </div>
  );
};

export default HeroSection;
