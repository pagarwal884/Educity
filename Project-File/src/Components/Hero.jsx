import HeroImg from "../Assets/hero.png";
import Darkarrow from "../Assets/dark-arrow.png";

const Hero = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,0,58,0.7)] to-[rgba(8,0,58,0.7)]"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 md:px-12">
        <div className="max-w-[800px] text-center text-white flex flex-col items-center gap-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            We Ensure Better Education for a Better World.
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-8">
            Our mission is to provide high-quality education that empowers
            individuals to reach their full potential and contribute positively
            to society.
          </p>

          <button className="flex items-center justify-center gap-2 w-44 h-12 bg-white text-[#08003A] rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
            Explore More
            <img
              src={Darkarrow}
              alt="Arrow"
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;