import { useEffect, useState } from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-[10%] py-4 text-white transition-all duration-700 ${
        sticky ? "bg-[#212EA0] shadow-lg" : "bg-transparent"
      }`}
    >
      <img src={logo} alt="Logo" className="w-[180px]" />

      <ul className="flex items-center gap-8">
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
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
          >
            <button className="h-10 w-[120px] cursor-pointer rounded-full bg-white text-lg font-medium text-[#212121]">
              Contact Us
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;