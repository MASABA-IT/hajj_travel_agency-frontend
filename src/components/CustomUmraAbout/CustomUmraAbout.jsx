import caliography from "../../assets/imgs/Caliography.png";
const CustomUmraAbout = () => {
  return (
    <section
      className="w-full h-auto py-14  bg-cover bg-[#48cc8e6b]"
      style={{
        backgroundImage: `url(${caliography})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center items-center py-14   gap-5 text-gray-800">
        <h1 className="md:text-3xl text-zinc-700">
          Customized Umrah packages from Bangladesh
        </h1>
        <p className="w-1/2 text-center text-neutral-600">
          Explore amazing packages at exclusive rates with expert guides and
          Sharia consultants, ensuring a personalized, spiritually enriching,
          and reliable Hajj or Umrah experience designed to meet your unique
          needs and expectations.
        </p>
        <button className="max-w-[200px] px-4 py-2 md:px-6 md:py-3 bg-[#24aa86] text-gray-100 text-sm md:text-lg rounded-md shadow-lg hover:bg-[#27725e] transition">
          Explore Package
        </button>
      </div>
    </section>
  );
};

export default CustomUmraAbout;
