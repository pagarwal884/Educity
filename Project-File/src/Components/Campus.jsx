import React from "react";
import gallery_pic_1 from "../Assets/gallery-1.png";
import gallery_pic_2 from "../Assets/gallery-2.png";
import gallery_pic_3 from "../Assets/gallery-3.png";
import gallery_pic_4 from "../Assets/gallery-4.png";
import white_arrow from "../Assets/white-arrow.png";

const Campus = () => {
  return (
    <section className="w-full px-[10%] py-16">
      <div className="mx-auto w-full text-center">
        <div className="flex flex-wrap justify-center gap-6">
          <img
            src={gallery_pic_1}
            alt="Campus 1"
            className="w-full sm:w-[48%] lg:w-[23%] rounded-lg object-cover"
          />
          <img
            src={gallery_pic_2}
            alt="Campus 2"
            className="w-full sm:w-[48%] lg:w-[23%] rounded-lg object-cover"
          />
          <img
            src={gallery_pic_3}
            alt="Campus 3"
            className="w-full sm:w-[48%] lg:w-[23%] rounded-lg object-cover"
          />
          <img
            src={gallery_pic_4}
            alt="Campus 4"
            className="w-full sm:w-[48%] lg:w-[23%] rounded-lg object-cover"
          />
        </div>

        <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#212EA0] px-8 py-3 text-white font-medium transition-all duration-300 hover:bg-[#1a2585]">
          See More
          <img src={white_arrow} alt="Arrow" className="w-5" />
        </button>
      </div>
    </section>
  );
};

export default Campus;