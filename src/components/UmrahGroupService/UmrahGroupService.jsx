import {
  MdHomeRepairService,
  MdLocalHotel,
  MdOutlineTimer,
} from "react-icons/md";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { ImPriceTags } from "react-icons/im";
import umrahApply from "../../assets/imgs/umrahApply.jpeg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const UmrahGroupService = () => {
  const details = [
    {
      icon: <ImPriceTags />,
      label: "Price",
      value: "From 6,50,000",
    },
    {
      icon: <MdOutlineTimer />,
      label: "Time & Duration",
      value: "Custom",
    },
    {
      icon: <MdLocalHotel />,
      label: "Hotel Makkah",
      value: "Custom",
    },
    {
      icon: <MdLocalHotel />,
      label: "Hotel Madinah",
      value: "Custom",
    },
    {
      icon: <FaPlaneDeparture />,
      label: "Flights Up",
      value: "Direct",
    },
    {
      icon: <FaPlaneArrival />,
      label: "Flights Down",
      value: "Direct",
    },
    {
      icon: <IoFastFoodSharp />,
      label: "Food",
      value: "Breakfast, Lunch & Dinner",
    },
    {
      icon: <MdHomeRepairService />,
      label: "Special Services",
      value: "Ziyara + Guide + Da’e + Workshop",
    },
    {
      icon: <span className="text-3xl text-[#24aa86]">*****</span>,
      label: "",
      value: "5/5 (88 Reviews)",
    },
  ];

  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <section className="max-w-[1400px] mx-auto h-auto bg-white py-10 px-4 md:px-8">
      <div className="w-full mx-auto flex flex-col justify-center gap-5">
        <h2 className="text-xl md:text-2xl text-[#24aa86] text-center">
          Group Umrah Service with Hajj & Umrah Kafela
        </h2>
        <p className="text-center text-sm md:text-base px-2 md:px-24 lg:px-48">
          At Hijaz Hajj & Umrah Kafela, we provide personalized Umrah services
          from Bangladesh designed to fit your needs, preferences, and budget.
          From accommodation to itinerary planning, we ensure your Umrah journey
          is smooth and meaningful. We aim to make your pilgrimage a memorable
          and spiritually uplifting experience.
        </p>

        <div className="flex flex-col justify-center items-center">
          {/* Buttons */}
          <div className="flex gap-3 flex-wrap justify-center">
            {[0, 1, 2].map((_, index) => (
              <button
                key={index}
                className={`w-[90%] md:w-auto px-4 py-2 md:px-6 md:py-3 ${
                  activeButton === index
                    ? "bg-[#24aa86] text-white"
                    : "border border-[#24aa86] hover:bg-[#27725e] hover:text-white"
                } text-sm md:text-lg rounded-md shadow-lg transition`}
                onClick={() => handleButtonClick(index)}
              >
                Explore Package
              </button>
            ))}
          </div>

          {/* Card Section */}
          <div className="grid grid-cols-1   md:grid-cols-2  gap-5 mt-10">
            {/* Details Card */}
            <div className="  flex flex-col border py-5 px-4 rounded-lg hover:shadow-md transition-shadow duration-150">
              <h2 className="text-lg md:text-xl text-center py-5 font-bold text-[#1a6d57]">
                Group 2412 Hajj Package
              </h2>
              {details.map((detail, index) => (
                <div
                  key={index}
                  className={`w-full text-[14px] ${
                    index % 2 !== 0 ? "text-gray-700" : "text-[#24aa86]"
                  } flex justify-between items-center py-3 px-2 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <p className="w-[47%] flex items-center gap-2">
                    <span>{detail.icon}</span>
                    <span>{detail.label}</span>
                  </p>
                  <p className="w-[47%]">
                    :<span className="px-1">{detail.value}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Image Card */}
            <div
              className=" order-first md:order-2 h-[300px] md:h-full bg-green-200 flex justify-center items-center rounded-md"
              style={{
                backgroundImage: `url(${umrahApply})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>

          {/* Apply Button */}
          <div className="flex justify-center items-center mt-5">
            <NavLink
              to="/umrah-appointment"
              className="px-6 py-3 bg-[#24aa86] text-white rounded-md shadow-lg hover:bg-[#27725e] transition"
            >
              Apply For Kafela
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UmrahGroupService;
