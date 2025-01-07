import HeroImg from "../../assets/imgs/umrahHeroSection.png";

const FlagshipAgencyHero = () => {
  return (
    <section className=" max-w-[1400px] mx-auto h-auto ">
      <div
        className="w-[90%] md:w-full mx-auto bg-cover h-[400px] rounded-sm"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(30, 141, 121, 0.4), rgba(0, 0, 0, 0.2)), url(${HeroImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",

          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      <div className="w-[90%] md:w-full mx-auto flex flex-col justify-center items-center    py-14">
        <h2 className="text-xl md:text-2xl text-center text-[#24aa86]">
          Common Ziyarat Tours During Umrah Trip from Bangladesh
        </h2>
        <div className="w-[65%] mx-auto text-center   text-gray-700 space-y-5">
          <p>
            {" "}
            For pilgrims from Bangladesh, Hijaz Hajj & Umrah Kafela presents an
            exceptional platform to embark on Ziyarat tours for Hajj & Umrah
            pilgrims, combining religious devotion with enriching cultural
            experiences. Hajj and Umrah are sacred pilgrimages that
            hold profound significance for millions of Muslims worldwide.
          </p>
        </div>
        <button className="px-4 py-2 md:px-6 md:py-3 bg-[#24aa86] text-white text-sm md:text-lg rounded-md shadow-lg hover:bg-[#27725e] transition">
          Plan Your Umrah Trip
        </button>
      </div>
    </section>
  );
};

export default FlagshipAgencyHero;
