import { IoMdArrowDroprightCircle } from "react-icons/io";
import hero from "../../assets/imgs/Hero.png";

const HomeHero = () => {
  return (
    <div
      className="flex flex-col w-full pt-[5rem] md:pt-[10rem] min-h-[600px] bg-center"
      style={{
        backgroundImage: `
        linear-gradient(
          to right bottom, 
          rgba(7, 7, 7, 0.8), 
          rgba(40, 181, 131, 0.4)
        ), 
        url(${hero})
      `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="min-h-[500px] md:min-h-[600px] max-w-[1400px] mx-auto py-14 px-4 md:py-14 md:px-12 text-white relative">
        {/* Content Section */}
        <section className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10">
          <h2 className="text-3xl md:text-6xl font-bold leading-snug">
            Hajj And Umrah <br />
            Tours Redefined!
          </h2>
          <p className="text-sm md:text-lg">
            Transform your pilgrimage with our redefined Hajj and Umrah tours,
            offering personalized services, comfort, and spiritual fulfillment
            for a meaningful and unforgettable holy journey.
          </p>
          <div className="flex justify-start items-center gap-4 md:gap-10">
            <button className="px-4 py-2 md:px-6 md:py-3 bg-[#24aa86] text-sm md:text-lg rounded-md shadow-lg hover:bg-[#27725e] transition">
              Explore Package
            </button>
            <span className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center bg-[#24aa86] hover:bg-[#27725e] shadow-lg">
              <IoMdArrowDroprightCircle className="text-2xl md:text-3xl text-white" />
            </span>
          </div>
        </section>

        {/* Date Picker Section */}
        <div className="absolute top-[105%] md:top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 md:p-6 rounded-lg shadow-xl w-full max-w-[90%] md:max-w-[900px] text-[#24aa86]">
          <h3 className="text-base md:text-xl font-bold text-center mb-4">
            Find Your Booking Appointment Date & Time
          </h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Category Column */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base font-semibold">
                Select Category
              </label>
              <select className="p-2 md:p-3 border border-gray-300 rounded-md">
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            </div>

            {/* Duration Column */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base font-semibold">
                Select Duration
              </label>
              <select className="p-2 md:p-3 border border-gray-300 rounded-md">
                <option>1 Hour</option>
                <option>2 Hours</option>
                <option>3 Hours</option>
              </select>
            </div>

            {/* Destination Column */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base font-semibold">
                Select Destination
              </label>
              <select className="p-2 md:p-3 border border-gray-300 rounded-md">
                <option>Destination 1</option>
                <option>Destination 2</option>
                <option>Destination 3</option>
              </select>
            </div>
          </div>

          {/* Submit Button Row */}
          <div className="flex justify-end mt-4">
            <button className="px-4 py-2 md:px-6 md:py-3 bg-[#24aa86] text-white text-sm md:text-lg rounded-md shadow-lg hover:bg-[#27725e] transition">
              Submit & View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
