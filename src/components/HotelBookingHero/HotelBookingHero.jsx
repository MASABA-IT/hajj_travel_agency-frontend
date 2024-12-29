import HeroImg from "../../assets/imgs/umrahHeroSection.png";

const HotelBookingHero = () => {
  return (
    <div className=" max-w-[1400px] mx-auto h-auto ">
      <div
        className="w-[90%] md:w-full mx-auto bg-cover h-[400px] rounded-sm"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(30, 141, 121, 0.4), rgba(0, 0, 0, 0.2)), url(${HeroImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",

          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        }}
      ></div>

      <div className="w-[90%] md:w-full mx-auto flex flex-col justify-center items-center gap-4   py-14">
        <h2 className="text-xl md:text-2xl text-center text-[#24aa86]">
          Hotel booking service before Umrah Journey to Makkah, Madinah
        </h2>
        <div className="w-[65%] mx-auto text-center   text-gray-700 space-y-5">
          <p>
            Are you planning to undertake the sacred pilgrimage of Hajj or Umrah
            from Bangladesh? Hijaz Hajj & Umrah Kafela is your trusted companion
            in ensuring a seamless and fulfilling experience. With our extensive
            expertise and dedicated services, we simplify the process of hotel
            bookings in Makkah and Medina, allowing you to focus on the
            spiritual significance of your journey.
          </p>
          <p>
            We offer a wide range of hotel options in Makkah and Medina to cater
            to the diverse requirements of pilgrims from Bangladesh. Whether you
            seek luxurious accommodations or more affordable alternatives, our
            team will assist you in finding the perfect hotel that aligns with
            your preferences and budget.
          </p>
        </div>
        <button className="px-4 py-2 md:px-6 md:py-3 bg-[#24aa86] text-white text-sm md:text-lg rounded-md shadow-lg hover:bg-[#27725e] transition">
          Request to Booking A Hotel
        </button>
      </div>
    </div>
  );
};

export default HotelBookingHero;
