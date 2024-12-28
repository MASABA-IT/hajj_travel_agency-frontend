import HeroImg from "../../assets/imgs/umrahHeroSection.png";

const HajjPackageHero = () => {
  return (
    <div className=" max-w-[1400px] mx-auto h-auto ">
      <div
        className="w-[90%] md:w-full mx-auto bg-cover h-[400px] rounded-sm"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(30, 141, 121, 0.4), rgba(0, 0, 0, 0.2)), url(${HeroImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",

          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      <div className="w-[90%] md:w-full mx-auto flex flex-col justify-center items-center gap-4   py-14">
        <h2 className="text-xl md:text-2xl text-center text-[#24aa86]">
          Hajj Packages 2025 from Bangladesh
        </h2>
        <div className="w-[85%] mx-auto text-center space-y-2 text-gray-700">
          <p>
            If you are planning for a hassle-free, comprehensive Hajj journey
            for the next year 2025 or 2026 you may contact Hijaz Hajj & Umrah
            Kafela Bangladesh. We're offering the most affordable hajj
            management services for any Bangladeshi hajjis. The Kingdom of Saudi
            Arabia (KSA) higher authority has declared that they will allow
            127,198 pilgrims from Bangladesh to perform hajj in the year 2025.
            Don't wait if you like to go for Hajj next year. Register your Hajj
            package and take the first step towards religious journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HajjPackageHero;
