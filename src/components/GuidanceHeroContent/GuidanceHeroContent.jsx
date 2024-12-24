import HeroImg from "../../assets/imgs/umrahHeroSection.png";

const GuidanceHeroContent = () => {
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

      <div className="w-[90%] md:w-full mx-auto flex flex-col justify-center items-center gap-4   py-14">
        <p className="text-[#24aa86]">
          &ndash;Journey of spiritual fulfillment&ndash;
        </p>
        <h2 className="text-xl md:text-2xl text-center text-[#24aa86]">
          Detailed Umrah guidelines &#124; Step-by-step performing umrah
        </h2>
        <div className="w-[85%] mx-auto text-center space-y-2 text-gray-700">
          <p>
            {" "}
            Undertaking the sacred journey of Umrah is a deeply enriching
            experience that leaves a lasting impact on the hearts and souls of
            believers. This holy journey to the blessed cities of Mecca and
            Medina is a unique opportunity for believers to draw closer to
            Allah, seek forgiveness, and renew their faith.{" "}
          </p>
          <p>
            It is an opportunity for self-reflection, repentance, and seeking
            Allah's blessings. This guide by Hijaz Hajj & Umrah Kafela will
            provide you with essential Umrah guidelines to ensure a smooth and
            spiritually enriching experience.
          </p>
        </div>
        <div className="flex justify-center md:justify-start mt-5">
          <button className="min-w-[200px] px-6 py-3 bg-[#24aa86] text-white rounded-md shadow-lg hover:bg-[#27725e] transition">
            Plan Your Umrah Trip
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuidanceHeroContent;
