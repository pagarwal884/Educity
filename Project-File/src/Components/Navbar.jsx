import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../Assets/logo.png";
import menu_icon from "../Assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu after clicking a link
  const closeMenu = () => setMobileMenu(false);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        sticky ? "bg-[#212EA0] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-5 sm:px-8 md:px-12 lg:px-[10%] py-4">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-32 sm:w-36 md:w-40 lg:w-44 cursor-pointer"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-white">
          <li>
            <Link
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer hover:text-gray-200 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-gray-200 transition"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="program"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-gray-200 transition"
            >
              Programs
            </Link>
          </li>

          <li>
            <Link
              to="campus"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-gray-200 transition"
            >
              Campus
            </Link>
          </li>

          <li>
            <Link
              to="testimonials"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-gray-200 transition"
            >
              Testimonials
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
            >
              <button className="rounded-full bg-white px-6 py-2 font-medium text-[#212121] transition hover:bg-gray-200 cursor-pointer">
                Contact Us
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <img
          src={menu_icon}
          alt="Menu"
          className="block w-8 cursor-pointer lg:hidden"
          onClick={() => setMobileMenu(true)}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-72 bg-[#212EA0] shadow-xl transition-all duration-500 ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMobileMenu(false)}
            className="text-4xl text-white cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col gap-8 px-8 text-white text-lg">
          <li>
            <Link
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="program"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer"
            >
              Programs
            </Link>
          </li>

          <li>
            <Link
              to="campus"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer"
            >
              Campus
            </Link>
          </li>

          <li>
            <Link
              to="testimonials"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer"
            >
              Testimonials
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
            >
              <button className="w-full rounded-full bg-white py-3 font-medium text-[#212121] cursor-pointer">
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;