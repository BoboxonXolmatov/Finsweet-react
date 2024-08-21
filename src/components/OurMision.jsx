import React from 'react'
import { aboutData, missionData } from '../constants/index';


const OurMision = () => {
  return (
    <div className="pt-12 gap-8 flex flex-col lg:flex-row lg:space-x-4">
    <div className="w-full lg:w-1/2 p-10">
      <h2 className="text-lg font-medium mb-2">{aboutData.title}</h2>
      <h3 className="text-2xl font-=medium mb-4">{aboutData.heading}</h3>
      <p className="text-gray-600 mb-4">
        {aboutData.description}
      </p>
      <a href="#" className="text-blue-500 font-semibold">{aboutData.linkText}</a>
    </div>
    <div className="w-full lg:w-1/2 p-10">
      <h2 className="text-lg font-medium mb-2">{missionData.title}</h2>
      <h3 className="text-2xl font-medium mb-4">{missionData.heading}</h3>
      <p className="text-gray-600 mb-4">
        {missionData.description}
      </p>
    </div>
  </div>
 )
}

export default OurMision