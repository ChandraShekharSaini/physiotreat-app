import React from "react";
import { IoMdMail, IoMdTime } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="border-b-2 border-gray-300 text-blue-500 w-full py-4 px-6 flex flex-col md:flex-row md:items-center md:justify-between bg-white shadow-sm">
      
      {/* Brand Name */}
      <div className="flex justify-center md:justify-start mb-3 md:mb-0">
        <h1 className="text-3xl md:text-4xl text-[#444444] font-semibold">
          PHYSIOTREAT
        </h1>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-center md:text-left">
        
        {/* Email */}
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <IoMdMail className="text-black text-[20px]" />
            <p className="font-semibold font-mono text-black text-sm md:text-base">
              Email Address
            </p>
          </div>
          <p className="text-[#4f4b49] text-sm">booking@physiotreat.in</p>
        </div>

        {/* Time */}
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <IoMdTime className="text-black text-[20px]" />
            <p className="font-semibold font-mono text-black text-sm md:text-base">
              Working Hours
            </p>
          </div>
          <p className="text-[#4f4b49] text-sm">Sun - Fri 10:00 AM - 06:00 PM</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-black text-[20px]" />
            <p className="font-semibold font-mono text-black text-sm md:text-base">
              Contact Number
            </p>
          </div>
          <p className="text-[#4f4b49] text-sm">+91-9205062064</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
