import program_1 from "../Assets/program-1.png";
import program_2 from "../Assets/program-2.png";
import program_3 from "../Assets/program-3.png";

const Program = () => {
  return (
    <div className="my-20 mx-auto w-full flex items-center justify-around gap-2">
      <div className="basis-[31%] program-card">
        <img
          src={program_1}
          alt="Program 1"
          className="w-full rounded-[10px] block"
        />
      </div>

      <div className="basis-[31%] program-card ">
        <img
          src={program_2}
          alt="Program 2"
          className="w-full rounded-[10px] block"
        />
      </div>

      <div className="basis-[31%] program-card">
        <img
          src={program_3}
          alt="Program 3"
          className="w-full rounded-[10px] block"
        />
      </div>
    </div>
  );
};

export default Program;