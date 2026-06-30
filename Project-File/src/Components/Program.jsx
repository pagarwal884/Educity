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
    <section className="w-full py-5">
      <div className="flex w-full justify-center">
        <div className="grid w-full grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.label}
              className="group relative w-full max-w-full cursor-pointer overflow-hidden rounded-xl shadow-lg sm:max-w-[340px] md:max-w-[360px] lg:max-w-full"
            >
              <img
                src={program.image}
                alt={program.alt}
                className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-[rgba(0,15,152,0.6)] opacity-0 transition-all duration-500 group-hover:opacity-100">
                <img src={program.icon} alt={`${program.label} Icon`} className="mb-4 w-16" />
                <p className="text-xl font-semibold text-white">{program.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
