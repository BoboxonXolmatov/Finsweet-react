import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className=" text-white">
      <div className="max-w-7xl mx-auto mt-10 py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold md:mb-0">{"{ Finsweet"}</div>
          <nav>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <Link to="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-yellow-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" className="hover:text-yellow-400">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contactUs" className="hover:text-yellow-400">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="hover:text-yellow-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full py-20 mt-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            <div className="text-center md:text-left mb-6 md:mb-0 md:w-1/2">
              <h1 className="text-xl md:text-xl lg:text-xl font-bold w-96">
                Subscribe to our newsletter to get latest updates and news
              </h1>
            </div>
            <form className="flex justify-center md:justify-end mt-2 md:mt-0 md:w-1/2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-2 rounded-l-md w-full md:w-64"
              />
              <button
                type="submit"
                className="p-2 bg-neutral-900 text-white rounded-r-md hover:bg-slate-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-white py-4 mt-2">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            <div className="text-center md:text-left mb-2 md:mb-0 md:w-1/2">
              <p>Finstreet 118 2561 Fintown</p>
              <p className="mt-2">
                <a href="mailto:hello@finsweet.com" className="hover:underline">
                  Hello@finsweet.com
                </a>{" "}
                020 7993 2905
              </p>
            </div>
            <div className="flex justify-center md:justify-end space-x-4 md:w-1/2">
              <a href="#facebook" className="hover:text-yellow-400">
                Facebook
              </a>
              <a href="#twitter" className="hover:text-yellow-400">
                Twitter
              </a>
              <a href="#instagram" className="hover:text-yellow-400">
                Instagram
              </a>
              <a href="#linkedin" className="hover:text-yellow-400">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
