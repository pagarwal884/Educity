import React from "react";

const Footer = () => {
  return (
    <footer className="w-[90%] mx-auto mt-16 py-6 border-t border-gray-300">
      <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-600 md:flex-row">
        {/* Copyright */}
        <p>
          © {new Date().getFullYear()} Edusity. All rights reserved.
        </p>

        {/* Footer Links */}
        <ul className="flex flex-wrap items-center justify-center gap-6">
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