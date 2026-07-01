import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-5 sm:px-8 md:px-12 lg:px-[10%] mt-10 md:mt-16 py-6 border-t border-gray-300">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-600">
          © {new Date().getFullYear()} Edusity. All rights reserved.
        </p>

        {/* Footer Links */}
        <ul className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
          <li>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#212EA0]"
            >
              Privacy Policy
            </a>
          </li>

          <li>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#212EA0]"
            >
              Terms of Service
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="transition-colors duration-300 hover:text-[#212EA0]"
            >
              Contact Us
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
};

export default Footer;