import React, { useState } from "react";
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

  const nextSlide = () => {
    if (currentSlide < 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section className="w-full px-[10%] py-16">
      <div className="relative mx-auto my-16 px-16">

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#212EA0] p-3 shadow-lg"
        >
          <img src={back_icon} alt="Previous" className="w-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#212EA0] p-3 shadow-lg"
        >
          <img src={next_icon} alt="Next" className="w-6" />
        </button>

        {/* Slider */}
        <div className="overflow-hidden">
          <ul
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {testimonials.map((item) => (
              <li key={item.id} className="w-1/2 flex-shrink-0 px-3">
                <div className="h-full rounded-xl bg-white p-6 shadow-lg">
                  <div className="mb-4 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-full border-4 border-[#212EA0]"
                    />

                    <div>
                      <h3 className="font-semibold text-[#212EA0]">
                        {item.name}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {item.country}
                      </span>
                    </div>
                  </div>

                  <p className="leading-7 text-gray-600">
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