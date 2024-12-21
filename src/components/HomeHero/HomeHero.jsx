import { IoMdArrowDroprightCircle } from "react-icons/io";
import hero from "../../assets/imgs/Hero.png";

const HomeHero = () => {
  return (
    <div
      className=" flex flex-col w-full pt-[10vh] min-h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-[600px] max-w-[1400px] mx-auto py-14 px-6 md:px-12 text-white relative">
        {/* Content Section */}
        <section className="w-full md:w-1/2 flex flex-col gap-10">
          <h2 className="text-4xl md:text-6xl font-bold leading-snug">
            Hajj And Umrah <br />
            Tours Redefined!
          </h2>
          <p className="text-md md:text-lg">
            Transform your pilgrimage with our redefined Hajj and Umrah tours,
            offering personalized services, comfort, and spiritual fulfillment
            for a meaningful and unforgettable holy journey.
          </p>
          <div className="flex justify-start items-center gap-10">
            <button className="px-6 py-3 bg-[#24aa86] text-lg md:text-xl rounded-md shadow-lg hover:bg-[#27725e] transition">
              Explore Package
            </button>
            <span className="w-12 h-12 rounded-full flex justify-center items-center bg-[#24aa86] hover:bg-[#27725e] shadow-lg">
              <IoMdArrowDroprightCircle className="text-3xl text-white" />
            </span>
          </div>
        </section>

        {/* Date Picker Section */}
        <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-full max-w-[900px] text-[#24aa86]">
          <h3 className="text-xl font-bold text-center mb-4">
            Find Your Booking Appointment Date & Time
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">
            {/* Category Column */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Select Category</label>
              <select className="p-3 border border-gray-300 rounded-md">
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            </div>

            {/* Duration Column */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Select Duration</label>
              <select className="p-3 border border-gray-300 rounded-md">
                <option>1 Hour</option>
                <option>2 Hours</option>
                <option>3 Hours</option>
              </select>
            </div>

            {/* Destination Column */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Select Destination</label>
              <select className="p-3 border border-gray-300 rounded-md">
                <option>Destination 1</option>
                <option>Destination 2</option>
                <option>Destination 3</option>
              </select>
            </div>
          </div>

          {/* Submit Button Row */}
          <div className="flex justify-end mt-4">
            <button className="px-6 py-3 bg-[#24aa86] text-white text-lg md:text-xl rounded-md shadow-lg hover:bg-[#27725e] transition">
              Submit & Views
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Content Section */}
       
    </div>
  );
};

export default HomeHero;
