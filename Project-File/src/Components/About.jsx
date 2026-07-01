import React from "react";
import about_img from "../Assets/about.png";
import play_icon from "../Assets/play-icon.png";

function About() {
  return (
    <section
      className="w-full px-5 sm:px-8 md:px-12 lg:px-[10%] py-10 md:py-16"
      id="about"
    >
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">

        {/* Left Image */}
        <div className="relative w-full lg:w-[40%]">
          <img
            src={about_img}
            alt="About University"
            className="w-full rounded-lg"
          />

          <img
            src={play_icon}
            alt="Play Video"
            className="absolute top-1/2 left-1/2 w-12 sm:w-14 md:w-16 lg:w-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[56%] text-center lg:text-left">
          <h3 className="text-[#212EA0] uppercase font-semibold tracking-wider text-sm sm:text-base mb-2">
            ABOUT UNIVERSITY
          </h3>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000F38] leading-tight mb-5">
            Nurturing Tomorrow's Leaders Today
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-7 mb-5">
            Our university is committed to providing a world-class education
            that empowers students with knowledge, critical thinking, and
            practical skills. We foster an environment where innovation,
            creativity, and academic excellence thrive.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-7 mb-5">
            Through experienced faculty, modern facilities, and
            industry-focused programs, we prepare students to excel in their
            chosen careers while encouraging research, collaboration, and
            lifelong learning.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-7">
            Beyond academics, we emphasize personal growth, leadership, and
            social responsibility. By nurturing talent and inspiring
            confidence, we help shape future leaders who are ready to make a
            meaningful impact on the world.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;