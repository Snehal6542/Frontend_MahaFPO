"use client";
import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome,
  FaQuestionCircle,
  FaAddressCard,
  FaCogs,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2e2751] text-white py-10">
      {/* Main Footer Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10">
        {/* ===== Left Section ===== */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image src="/MahaFPO.png" alt="MahaFPC Logo" width={100} height={60} />
          </div>
          <p className="text-sm leading-6">
            MahaFPC is a state-level farmer producer company which is a consortium
            of farmer producer companies registered under the Company Act 1956.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-5">
            <a href="#" className="hover:text-[#ee9b35] transition-transform hover:scale-110">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-[#ee9b35] transition-transform hover:scale-110">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-[#ee9b35] transition-transform hover:scale-110">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="hover:text-[#ee9b35] transition-transform hover:scale-110">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="hover:text-[#ee9b35] transition-transform hover:scale-110">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* ===== Quick Links Section ===== */}
        <div className="ml-10">
          <h2 className="text-lg font-semibold mb-4 border-b-2 border-[#ee9b35] inline-block">
            Quick Links
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2 hover:text-[#ee9b35] cursor-pointer">
              <FaHome /> <span>Home</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-[#ee9b35] cursor-pointer">
              <FaQuestionCircle /> <span>About Us</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-[#ee9b35] cursor-pointer">
              <FaCogs /> <span>Services</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-[#ee9b35] cursor-pointer">
              <FaAddressCard /> <span>Contact Us</span>
            </li>
          </ul>
        </div>

        {/* ===== Contact Section ===== */}
        <div className="lg:col-span-1">
          <h2 className="text-lg font-semibold mb-4 border-b-2 border-[#ee9b35] inline-block">
            Contact Us
          </h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center space-x-3">
              <FaPhoneAlt />
              <span>+91 9876543210</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope />
              <span>info@mahafpo.org</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt />
              <span>123, Agri Tower, Pune, Maharashtra, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="mt-10 border-t border-gray-500 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} MahaFPC. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
