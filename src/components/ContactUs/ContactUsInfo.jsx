import React from "react";

const ContactUsInfo = () => {
  return (
    <section className="bg-purple-900 py-10 px-4 sm:px-6 md:px-10 lg:px-20 w-full sm:w-10/12 md:w-9/12 mx-auto">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
        <div>
          <h3 className="text-base font-semibold text-gray-200 mb-2">Working hours</h3>
          <hr className="border-gray-400 mb-4" />
          <p className="text-xl font-semibold text-white">Monday To Friday</p>
          <p className="text-xl font-semibold mb-4 text-white">9:00 AM to 8:00 PM</p>
          <p className="text-gray-200">Our Support Team is available 24/7</p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-200 mb-2">Contact Us</h3>
          <hr className="border-gray-400 mb-4" />
          <p className="text-xl font-semibold text-white">020 7993 2905</p>
          <p className="text-xl font-semibold text-white">hello@finsweet.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsInfo;
