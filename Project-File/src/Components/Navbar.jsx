import { useEffect, useState } from "react";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-[10%] py-4 text-white transition-all duration-700 ${
        sticky ? "bg-[#212EA0] shadow-lg" : "bg-transparent"
      }`}
    >
      <img src={logo} alt="Logo" className="w-[180px]" />

      <ul className="flex items-center gap-8">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Program</li>
        <li className="cursor-pointer">Campus</li>
        <li className="cursor-pointer">Testimonials</li>

        <li>
          <button className="h-10 w-[120px] cursor-pointer rounded-full bg-white text-lg font-medium text-[#212121]">
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;