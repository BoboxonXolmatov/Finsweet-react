import React from "react";

const ContactUsInput = () => {
  return (
    <div className="flex flex-col space-y-5 p-12 w-10/12 mx-auto rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Full Name"
        className="border border-gray-300 p-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="border border-gray-300 p-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Query Related"
        className="border border-gray-300 p-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        type="text"
        placeholder="message"
        className="border border-gray-300 p-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-slate-800 text-white p-6 rounded-md hover:bg-slate-700"
      >
        Submit
      </button>
    </div>
  );
};

export default ContactUsInput;
