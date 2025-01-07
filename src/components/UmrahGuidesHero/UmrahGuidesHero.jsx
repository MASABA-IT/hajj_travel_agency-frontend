import HeroImg from "../../assets/imgs/umrahHeroSection.png";

const UmrahGuidesHero = () => {
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
        <p className="text-[#24aa86]">
          &ndash;Journey of spiritual fulfillment&ndash;
        </p>
        <h2 className="text-xl md:text-2xl text-center text-[#24aa86]">
          Expert Umrah Guide for a Profound Journey from Bangladesh
        </h2>
        <div className="w-[85%] mx-auto text-center space-y-2 text-gray-700">
          <p>
            Experience a profound and transformative Umrah journey with our
            knowledgeable guide at Hijaz Hajj & Umrah Kafela in Dhaka,
            Bangladesh. From start to finish, our expert companion ensures
            seamless navigation, deepening your connection with Allah and
            enhancing your understanding of sacred rituals. Trust in our
            guidance for an unforgettable pilgrimage filled with tranquility and
            spiritual enlightenment.
          </p>
        </div>
        <div className="flex justify-center md:justify-start mt-5">
          <button className="min-w-[200px] px-6 py-3 bg-[#24aa86] text-white rounded-md shadow-lg hover:bg-[#27725e] transition">
            Plan Your Umrah Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default UmrahGuidesHero;
