import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container w-full h-auto text-white fixed top-0 left-0 flex items-center justify-between z-10">
      <img src={logo} alt="Logo" className="w-45" />

      <ul className="flex list-none gap-8 justify-center items-center">
        <li className="mx-2 my-1.5 cursor-pointer">Home</li>
        <li className="mx-2 my-1.5 cursor-pointer">About Us</li>
        <li className="mx-2 my-1.5 cursor-pointer">Program</li>
        <li className="mx-2 my-1.5 cursor-pointer">Campus</li>
        <li className="mx-2 my-1.5 cursor-pointer">Testimonials</li>

        <li className="mx-2 my-1.5">
          <button className="bg-white text-[#212121] w-30 h-10 rounded-full text-lg font-medium cursor-pointer border-0 outline-none">
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;