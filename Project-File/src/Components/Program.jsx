import program_1 from "../Assets/program-1.png";
import program_2 from "../Assets/program-2.png";
import program_3 from "../Assets/program-3.png";

import program_Icon_1 from "../Assets/program-icon-1.png";
import program_Icon_2 from "../Assets/program-icon-2.png";
import program_Icon_3 from "../Assets/program-icon-3.png";

const Program = () => {
  return (
    <section className="py-20">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
            <img
              src={program_1}
              alt="Graduation Degree"
              className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-[rgba(0,15,152,0.6)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <img
                src={program_Icon_1}
                alt="Graduation Icon"
                className="w-16 mb-4"
              />
              <p className="text-white text-xl font-semibold">
                Graduation Degree
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
            <img
              src={program_2}
              alt="Masters Degree"
              className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-[rgba(0,15,152,0.6)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <img
                src={program_Icon_2}
                alt="Masters Icon"
                className="w-16 mb-4"
              />
              <p className="text-white text-xl font-semibold">
                Masters Degree
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
            <img
              src={program_3}
              alt="Postgraduation"
              className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-[rgba(0,15,152,0.6)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <img
                src={program_Icon_3}
                alt="Postgraduation Icon"
                className="w-16 mb-4"
              />
              <p className="text-white text-xl font-semibold">
                Postgraduation
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Program;
