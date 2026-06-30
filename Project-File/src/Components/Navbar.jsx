import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-10 flex w-full items-center justify-between px-[10%] py-4 text-white">
      <img src={logo} alt="Logo" className="w-45" />

      <ul className="flex items-center justify-center gap-8 list-none">
        <li className="mx-2 my-1.5 cursor-pointer">Home</li>
        <li className="mx-2 my-1.5 cursor-pointer">About Us</li>
        <li className="mx-2 my-1.5 cursor-pointer">Program</li>
        <li className="mx-2 my-1.5 cursor-pointer">Campus</li>
        <li className="mx-2 my-1.5 cursor-pointer">Testimonials</li>

        <li className="mx-2 my-1.5">
          <button className="h-10 w-30 cursor-pointer rounded-full border-0 bg-white text-lg font-medium text-[#212121] outline-none">
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
