import React from 'react'
import {categoriess, icons} from "../constants/index.jsx"

const Categories = () => {
  return (
    <div className="container mx-auto py-12 ">
      <h2 className="text-3xl font-bold text-center mb-8">Choose A Category</h2>
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {categoriess.map((category, index) => {
          const Icon = icons[category.icon];
          return (
            <div key={index} className={`p-6 rounded-lg shadow-lg hover:bg-gray-900 cursor-pointer`}>
              <Icon className="h-8 w-8 mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Categories