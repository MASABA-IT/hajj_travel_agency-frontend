/* eslint-disable react/prop-types */
import { ImPriceTags } from "react-icons/im";
import caliography from "../../assets/imgs/Caliography.png";
import imgOne from "../../assets/imgs/image1.png";
import {
  MdHomeRepairService,
  MdLocalHotel,
  MdOutlineTimer,
} from "react-icons/md";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";

const PackageDetailsCard = ({ imgSrc, title, details }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <img className="w-full" src={imgSrc} alt={title} />
      <h2 className="text-xl text-center py-5">{title}</h2>
      <div className="grid grid-cols-1 gap-4">
        {details.map((detail, index) => (
          <div
            key={index}
            className={`w-full flex justify-between   py-3 px-2 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <p className="flex-1 flex justify-between items-center gap-1">
              {detail.icon}
              <span>{detail.label}</span>
            </p>
            <p className="flex-1 text-wrap">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const HajjPackagesDetails = () => {
  const economyHajjDetails = [
    {
      icon: <ImPriceTags />,
      label: "Price",
      value: ":From 6,50,000",
    },
    {
      icon: <MdOutlineTimer />,
      label: "Time & Duration",
      value: ":Custom",
    },
    {
      icon: <MdLocalHotel />,
      label: "Hotel Makkah",
      value: ":Custom",
    },
    {
      icon: <MdLocalHotel />,
      label: "Hotel Madinah",
      value: ":Custom",
    },
    {
      icon: <FaPlaneDeparture />,
      label: "Flights Up",
      value: ":Direct",
    },
    {
      icon: <FaPlaneArrival />,
      label: "Flights Down",
      value: ":Direct",
    },
    {
      icon: <IoFastFoodSharp />,
      label: "Food",
      value: ":Breakfast, Lunch & Dinner",
    },
    {
      icon: <MdHomeRepairService />,
      label: "Special Service",
      value: ":Ziyara+Guide+Da’e+Workshop",
    },
  ];

  return (
    <section
      className="w-full min-h-[100vh] py-14 bg-cover"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(144, 238, 144, 0.1), rgba(144, 238, 144, 0.2)), url(${caliography})`,
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <h1 className="text-3xl md:text-5xl text-center mb-8">
          Our Hajj, Umrah & Travel Packages
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <PackageDetailsCard
            imgSrc={imgOne}
            title="Economy Hajj Package"
            details={economyHajjDetails}
          />
          <div className="bg-green-700 p-4">Card 2</div>
          <div className="bg-green-500 p-4">Card 3</div>
          <div className="bg-green-300 p-4">Card 4</div>
        </div>
      </div>
    </section>
  );
};

export default HajjPackagesDetails;
