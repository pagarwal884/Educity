
const Title = ({subTitle, title}) => {
  return (
    <section className="mt-8 mb-2 text-center">
      <p className="text-[15px] font-semibold uppercase tracking-wider text-[#212EA0]">
        {subTitle}
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#000F38] md:text-2xl">
        {title}
      </h2>
    </section>
  );
};

export default Title;
