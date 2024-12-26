import HeroImg from "../../assets/imgs/umrahHeroSection.png";

const AppointmentHero = () => {
  return (
    <div className="max-w-[1400px]   mx-auto">
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
          Make an Appointment With
        </h2>
        <div className="w-[55%] mx-auto text-center space-y-2 text-gray-700">
          <p>
            If You want to make an appointment With us about your hajj and Umrah
            Plan Then Set the time & Date, then we will Contact With Us!
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

export default AppointmentHero;
