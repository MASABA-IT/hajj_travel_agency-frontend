import HeroImg from "../../assets/imgs/umrahHeroSection.png";

const UmrahHeroSection = () => {
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

      <div className="w-[90%] md:w-full mx-auto flex flex-col justify-center items-start gap-5 py-14">
        <p>-Affordable Price & Process-</p>
        <div>
          <h2 className="text-xl md:text-2xl text-[#24aa86]">
            Best Umrah Packages 2024 from Dhaka, Bangladesh
          </h2>
          <p>
            Are you planning for the most purified Umrah journey this
            year? Hijaz Hajj & Umrah Kafela has designed all the best Umrah
            packages from Dhaka Bangladesh. We understand that every pilgrim has
            unique preferences and budgetary considerations. We have a diverse
            range of meticulously crafted Umrah packages to cater to your
            personalized needs.
          </p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl text-[#24aa86]">
            Available Umrah Packages
          </h2>
          <p>
            Call us today at +880 11234 456 7896 for details on budget-friendly
            and exclusive Umrah packages from Bangladesh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UmrahHeroSection;
