import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import flatblack from "/img/flatblack.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(1);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    // Calculate opacity based on scroll position
    const newOpacity = Math.max(0, Math.min(1, 1 - scrollY / 10000));
    setNavbarOpacity(newOpacity);
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky w-full z-20 top-0 start-0 bg-gray-900 border-gray-200 dark:border-gray-900 font-['Avenir']" style={{ opacity: navbarOpacity }}>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo - Pojok Kiri */}
        <div href="aboutus" className="flex items-center space-x-3 rtl:space-x-reverse ">
          <img src={flatblack} className="h-8 md:w-20 md:h-20 cursor-pointer" alt="Logo" />
        </div>
        <div className="md:hidden ml-auto ">
          <button type="button" className="text-white focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? (
              // X icon when the menu is open
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              // Hamburger icon when the menu is closed
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Menu and Get Started Button - initially visible on larger screens */}
        <div className="hidden md:flex flex-grow justify-center items-center space-x-8">
          <ul className="text-[18px] text-white flex flex-row">
            <li>
              <a href="#Aboutus" className="block py-2 px-3" aria-current="page">
                About Us
              </a>
            </li>
            <li>
              <a href="#roadmap" className="block py-2 px-3">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#witepaper" className="block py-2 px-3">
                Whitepaper
              </a>
            </li>
            <li>
              <a href="#event" className="block py-2 px-3">
                Event
              </a>
            </li>
            <li>
              <a href="#team" className="block py-2 px-3">
                Developers
              </a>
            </li>
            <li>
              <a href="#parnert" className="block py-2 px-3">
                Partners
              </a>
            </li>
          </ul>
        </div>

        {/* Get Started Button - Pojok Kanan */}
        {/* <div className="md:flex hidden">
          <button type="button" className="bg-gradient-to-l from-stone-800 to-yellow-700 border border-yellow-700 text-white py-2 px-4 rounded-2xl">
            Get Started
          </button>
        </div> */}
        {/* Navigation Menu for smaller screens */}
        <div className={`md:hidden ${isMenuOpen ? "flex" : "hidden"} flex-col items-center text-center space-y-4 absolute top-full bg-opacity-80 right-0 bg-black w-full`}>
          <a href="#Aboutus" className="block py-2 px-3 text-white" aria-current="page">
            About Us
          </a>
          <a href="#roadmap" className="block py-2 px-3 text-white">
            Roadmap
          </a>
          <a href="#witepaper" className="block py-2 px-3 text-white">
            Whitepaper
          </a>
          <a href="#event" className="block py-2 px-3 text-white">
            Event
          </a>
          <a href="#team" className="block py-2 px-3 text-white">
            Developers
          </a>
          <a href="#parnert" className="block py-2 px-3 text-white">
            Partners
          </a>
          {/* Get Started Button - initially hidden on smaller screens */}
          <button type="button" className="bg-gradient-to-l from-stone-800 to-yellow-700 border border-yellow-700 text-white py-2 px-4 mb-4 rounded-2xl">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
