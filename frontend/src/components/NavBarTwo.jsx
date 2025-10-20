import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBarTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* TOP NAV */}
      <nav className="flex justify-center w-full h-[55px] bg-white shadow-md  ">
        <div className="w-[90%] md:w-[80%] flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-[#f06d22] font-bold text-xl md:text-2xl">
            {/* PHYSIOTREAT */}
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 text-[15px] font-medium text-gray-700">
            <Link to="/" className="hover:text-[#f06d22]">HOME</Link>
            <Link to="/about-us" className="hover:text-[#f06d22]">ABOUT US</Link>
            <Link to="/services" className="hover:text-[#f06d22]">SERVICES</Link>
            <Link to="/packages" className="hover:text-[#f06d22]">PACKAGES</Link>
            <Link to="/contact" className="hover:text-[#f06d22]">CONTACT US</Link>
          </div>

          {/* Quote Button (Desktop) */}
          <button className="hidden md:block bg-[#f06d22] text-white px-4 py-2 rounded hover:bg-[#d75c12] transition-all">
            Get A Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#f06d22] text-2xl"
            onClick={() => setIsOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* MOBILE SLIDING MENU */}
      <div
        className={` h-[80%] absolute w-[70%] border-[3px]sm:w-[60%] lg:hidden bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-[#f06d22] font-bold text-lg">MENU</h2>
          <button
            className="text-[#f06d22] text-2xl"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-start px-6 py-4 gap-4 text-gray-700 text-[16px] font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#f06d22]">
            HOME
          </Link>
          <Link to="/about-us" onClick={() => setIsOpen(false)} className="hover:text-[#f06d22]">
            ABOUT US
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-[#f06d22]">
            SERVICES
          </Link>
          <Link to="/packages" onClick={() => setIsOpen(false)} className="hover:text-[#f06d22]">
            PACKAGES
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#f06d22]">
            CONTACT US
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-[#f06d22] text-white px-4 py-2 rounded hover:bg-[#d75c12] transition-all"
          >
            Get A Quote
          </button>
        </div>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default NavBarTwo;
