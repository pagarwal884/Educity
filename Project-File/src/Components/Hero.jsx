import HeroImg from "../Assets/hero.png";
import Darkarrow from "../Assets/dark-arrow.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center mb-10"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(8,0,58,0.7)]"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 sm:px-8 md:px-12 lg:px-[10%] py-20">
        <div className="max-w-4xl text-center text-white">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We Ensure Better Education for a Better World.
          </h1>

          <p className="mt-5 text-sm sm:text-base md:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-200 max-w-3xl mx-auto">
            Our mission is to provide high-quality education that empowers
            individuals to reach their full potential and contribute
            positively to society.
          </p>

          <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#08003A] transition-all duration-300 hover:bg-gray-200">
            Explore More
            <img
              src={Darkarrow}
              alt="Arrow"
              className="w-4 sm:w-5"
            />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;