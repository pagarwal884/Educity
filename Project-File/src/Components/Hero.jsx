import HeroImg from "../Assets/hero.png";
import Darkarrow from "../Assets/dark-arrow.png";

const Hero = () => {
  return (
    <section
      className="relative mb-10 min-h-screen w-full bg-cover bg-center pb-20"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(8,0,58,0.7)]"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 md:px-12">
        <div className="flex max-w-[800px] flex-col items-center gap-6 text-center text-white">
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            We Ensure Better Education for a Better World.
          </h1>

          <p className="text-lg leading-8 text-gray-200 md:text-xl">
            Our mission is to provide high-quality education that empowers
            individuals to reach their full potential and contribute
            positively to society.
          </p>

          <button className="flex h-12 w-44 items-center justify-center gap-2 rounded-full bg-white font-semibold text-[#08003A] transition-all duration-300 hover:bg-gray-200">
            Explore More
            <img src={Darkarrow} alt="Arrow" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
