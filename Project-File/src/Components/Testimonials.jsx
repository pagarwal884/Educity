import React, { useEffect, useState } from "react";
import next_icon from "../Assets/next-icon.png";
import back_icon from "../Assets/back-icon.png";
import user_1 from "../Assets/user-1.png";
import user_2 from "../Assets/user-2.png";
import user_3 from "../Assets/user-3.png";
import user_4 from "../Assets/user-4.png";

const testimonials = [
  {
    id: 1,
    image: user_1,
    name: "Emily Williams",
    country: "Edusity, USA",
    review:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, exceptional faculty, and commitment to academic excellence have truly exceeded my expectations.",
  },
  {
    id: 2,
    image: user_2,
    name: "William Jackson",
    country: "Edusity, USA",
    review:
      "The university gave me the confidence, practical experience, and opportunities I needed to grow professionally. I couldn't have asked for a better learning environment.",
  },
  {
    id: 3,
    image: user_3,
    name: "Sophia Davis",
    country: "Edusity, Canada",
    review:
      "The professors and campus environment inspired me to achieve my goals. Every semester brought new opportunities to learn and grow.",
  },
  {
    id: 4,
    image: user_4,
    name: "James Wilson",
    country: "Edusity, Australia",
    review:
      "I developed technical skills, leadership qualities, and lifelong friendships during my time here. It was an unforgettable experience.",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth < 768);
      setCurrentSlide(0);
    };

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const cardsPerSlide = isMobile ? 1 : 2;
  const maxSlide = Math.ceil(testimonials.length / cardsPerSlide) - 1;

  const nextSlide = () => {
    if (currentSlide < maxSlide) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <section
      className="w-full px-5 sm:px-8 md:px-12 lg:px-[10%] py-10 md:py-16"
      id="testimonials"
    >
      <div className="relative mx-auto">

        {/* Previous */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full bg-[#212EA0] p-2 sm:p-3 shadow-lg"
        >
          <img src={back_icon} alt="Previous" className="w-4 sm:w-6" />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full bg-[#212EA0] p-2 sm:p-3 shadow-lg"
        >
          <img src={next_icon} alt="Next" className="w-4 sm:w-6" />
        </button>

        <div className="overflow-hidden px-8 sm:px-12 md:px-16">
          <ul
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {testimonials.map((item) => (
              <li
                key={item.id}
                className={`${
                  isMobile ? "w-full" : "w-1/2"
                } flex-shrink-0 px-3`}
              >
                <div className="h-full rounded-xl bg-white p-5 sm:p-6 shadow-lg">

                  <div className="mb-5 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-14 sm:h-16 sm:w-16 rounded-full border-4 border-[#212EA0]"
                    />

                    <div>
                      <h3 className="text-lg font-semibold text-[#212EA0]">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {item.country}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base leading-7 text-gray-600">
                    {item.review}
                  </p>

                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;