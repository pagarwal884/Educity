import program_1 from "../Assets/program-1.png";
import program_2 from "../Assets/program-2.png";
import program_3 from "../Assets/program-3.png";

import program_Icon_1 from "../Assets/program-icon-1.png";
import program_Icon_2 from "../Assets/program-icon-2.png";
import program_Icon_3 from "../Assets/program-icon-3.png";

const programs = [
  {
    image: program_1,
    icon: program_Icon_1,
    alt: "Graduation Degree",
    label: "Graduation Degree",
  },
  {
    image: program_2,
    icon: program_Icon_2,
    alt: "Masters Degree",
    label: "Masters Degree",
  },
  {
    image: program_3,
    icon: program_Icon_3,
    alt: "Postgraduation",
    label: "Postgraduation",
  },
];

const Program = () => {
  return (
    <section
      className="w-full px-5 sm:px-8 md:px-12 lg:px-[10%] py-10 md:py-16"
      id="program"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

        {programs.map((program) => (
          <div
            key={program.label}
            className="group relative w-full overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            <img
              src={program.image}
              alt={program.alt}
              className="w-full h-72 sm:h-80 md:h-96 lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-[rgba(0,15,152,0.6)] opacity-0 transition-all duration-500 group-hover:opacity-100">

              <img
                src={program.icon}
                alt={`${program.label} Icon`}
                className="w-12 sm:w-14 md:w-16 mb-4"
              />

              <p className="text-lg sm:text-xl font-semibold text-white text-center px-4">
                {program.label}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Program;