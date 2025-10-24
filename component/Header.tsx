"use client";
import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#106637] text-white text-sm px-4 py-2 flex justify-between items-center">
        <div className="flex space-x-4">
          <span>Email: info@mahafpo.org</span>
          <span>Phone: +91 9876543210</span>
        </div>
        <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-4 py-4">
          {/* Logo */}
          <div className="flex items-center mb-2 md:mb-0">
            <Image
              src="/MahaFPO.png"
              alt="MahaFPO Logo"
              width={110}
              height={30}
            />
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-col md:flex-row md:space-x-8 items-center text-gray-700 font-bold text-lg">
              <li><a href="/" className="hover:text-[#61CE70]">Home</a></li>
              <li><a href="#" className="hover:text-[#61CE70]">About Us</a></li>
              <li><a href="#" className="hover:text-[#61CE70]">Membership</a></li>
              <li><a href="#" className="hover:text-[#61CE70]">Service</a></li>
              <li><a href="#" className="hover:text-[#61CE70]">News & Event</a></li>
              <li><a href="Contact-us" className="hover:text-[#61CE70]">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom News Bar */}
      <div className="bg-[#ee9b35] border-t border-gray-300">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          {/* News Label (Blinking) */}
          <div className="font-bold text-xl mr-4 animate-blink">News:</div>

          {/* Rolling News */}
          <div className="flex-1 overflow-hidden relative text-black font-semibold text-lg">
            <div className="whitespace-nowrap animate-scroll">
              <span className="mr-8">
                🌾 MahaFPO launches new farmer support program.
              </span>
              <span className="mr-8">
                📢 Membership drive starts this month.
              </span>
              <span className="mr-8">
                📰 Upcoming workshops on sustainable farming.
              </span>
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button className="bg-[#61CE70] text-white px-4 py-1 rounded hover:bg-green-600 font-semibold">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Scroll & Blink Animations */}
      <style jsx>{`
        /* Slow Scrolling Animation */
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          display: inline-block;
          padding-left: 100%;
          animation: scroll 30s linear infinite; /* Slower speed */
        }

        /* Blink Only "News:" Label */
        @keyframes blink {
          0%, 50%, 100% {
            color: black;
          }
          25%, 75% {
            color: white;
          }
        }
        .animate-blink {
          animation: blink 1s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
