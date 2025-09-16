import React from "react";
import Creditcards from "../assets/website/credit-cards.webp";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaPhone, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300">
      <div className="container mx-auto p-8 grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Coder’s Coffee</h2>
          <p className="text-sm">
            Brewing fresh code and coffee since 2023. ☕ <br /> 
            Perfect place to fuel your projects and ideas.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#menu" className="hover:text-white">Menu</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="flex items-center gap-2">
            <FaPhone /> +1 (555) 123-4567
          </p>
          <p className="flex items-center gap-2">
            <FaGithub /> @SomPNG
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-white"><FaFacebook /></a>
            <a href="#" className="hover:text-white"><FaGoogle /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">We Accept</h3>
          <img src={Creditcards} alt="credit cards" className="w-40" />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} SomPng. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
