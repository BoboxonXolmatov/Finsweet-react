import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="py-8">
      <div className="container px-6 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight cursor-pointer">
              Finsweet
            </span>
          </div>
          <ul className="hidden lg:flex ml-24 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link className="hover:text-yellow-400" to={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link to="/subscribe" className="py-2 px-3 hover:text-yellow-400">
              Subscribe
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div
            className="fixed right-0 z-20 bg-neutral-900 w-full p-12
            flex flex-col justify-center items-center lg:hidden"
          >
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.href} onClick={toggleNavbar}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link
                to=""
                className="from-zinc-900 to-zinc-800
            py-2 px-3 rounded-md"
                onClick={toggleNavbar}
              >
                Subscribe
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
