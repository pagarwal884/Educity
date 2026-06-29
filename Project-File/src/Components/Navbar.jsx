import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#333] px-12 py-5 text-white">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-[180px] cursor-pointer select-none"
      />

      {/* Navigation */}
      <ul className="flex items-center gap-10">
        <li className="cursor-pointer font-medium transition-all duration-300 hover:text-yellow-400">
          Home
        </li>

        <li className="cursor-pointer font-medium transition-all duration-300 hover:text-yellow-400">
          About Us
        </li>

        <li className="cursor-pointer font-medium transition-all duration-300 hover:text-yellow-400">
          Program
        </li>

        <li className="cursor-pointer font-medium transition-all duration-300 hover:text-yellow-400">
          Campus
        </li>

        <li className="cursor-pointer font-medium transition-all duration-300 hover:text-yellow-400">
          Testimonials
        </li>

        <li>
          <button className="rounded-full bg-yellow-400 px-7 py-3 font-semibold text-black transition-all duration-300 hover:bg-yellow-300">
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;