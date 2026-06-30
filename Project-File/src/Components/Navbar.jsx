import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="w-[90%] max-w-7xl mx-auto flex items-center justify-between py-5 text-white">
        <img src={logo} alt="Logo" className="w-44" />

        <ul className="flex items-center gap-8">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Program</li>
          <li className="cursor-pointer">Campus</li>
          <li className="cursor-pointer">Testimonials</li>

          <li>
            <button className="w-32 h-10 rounded-full bg-white text-[#212121] font-medium">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;