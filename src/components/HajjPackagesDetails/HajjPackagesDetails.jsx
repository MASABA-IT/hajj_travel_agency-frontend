/* eslint-disable react/prop-types */
import { ImPriceTags } from "react-icons/im";
import caliography from "../../assets/imgs/Caliography.png";
import imgOne from "../../assets/imgs/image1.png";
import imgTwo from "../../assets/imgs/image2.png";
import imgThree from "../../assets/imgs/image3.png";
import imgFour from "../../assets/imgs/image4.png";

import {
  MdHomeRepairService,
  MdLocalHotel,
  MdOutlineTimer,
} from "react-icons/md";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

const PackageDetailsCard = ({ imgSrc, title, details }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white p-4 shadow-md rounded-md transform transition-transform duration-700 scale-90 hover:scale-95 hover:cursor-pointer ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <img className="w-full" src={imgSrc} alt={title} />
      <h2 className="text-xl text-center py-5 font-bold border-b-2 text-[#1a6d57]">
        {title}
      </h2>
      <div className="flex flex-col">
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
    </div>
  );
};

const HajjPackagesDetails = () => {
  // Define details for each Hajj package
  const hajjPackages = [
    {
      imgSrc: imgOne,
      title: "Economy Hajj Package",
      details: [
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
      ],
    },
    {
      imgSrc: imgTwo, // You can replace with another image like imgTwo
      title: "Luxury Hajj Package",
      details: [
        {
          icon: <ImPriceTags />,
          label: "Price",
          value: "From 10,00,000",
        },
        {
          icon: <MdOutlineTimer />,
          label: "Time & Duration",
          value: "2 Weeks",
        },
        {
          icon: <MdLocalHotel />,
          label: "Hotel Makkah",
          value: "5 Star",
        },
        {
          icon: <MdLocalHotel />,
          label: "Hotel Madinah",
          value: "5 Star",
        },
        {
          icon: <FaPlaneDeparture />,
          label: "Flights Up",
          value: "Business Class",
        },
        {
          icon: <FaPlaneArrival />,
          label: "Flights Down",
          value: "Business Class",
        },
        {
          icon: <IoFastFoodSharp />,
          label: "Food",
          value: "Gourmet Meals",
        },
        {
          icon: <MdHomeRepairService />,
          label: "Special Services",
          value: "VIP Assistance",
        },
        {
          icon: <span className="text-3xl text-[#24aa86]">*****</span>,
          label: "",
          value: "5/5 (120 Reviews)",
        },
      ],
    },
    {
      imgSrc: imgThree, // Replace with imgThree
      title: "Premium Hajj Package",
      details: [
        {
          icon: <ImPriceTags />,
          label: "Price",
          value: "From 8,00,000",
        },
        {
          icon: <MdOutlineTimer />,
          label: "Time & Duration",
          value: "10 Days",
        },
        {
          icon: <MdLocalHotel />,
          label: "Hotel Makkah",
          value: "4 Star",
        },
        {
          icon: <MdLocalHotel />,
          label: "Hotel Madinah",
          value: "4 Star",
        },
        {
          icon: <FaPlaneDeparture />,
          label: "Flights Up",
          value: "Economy",
        },
        {
          icon: <FaPlaneArrival />,
          label: "Flights Down",
          value: "Economy",
        },
        {
          icon: <IoFastFoodSharp />,
          label: "Food",
          value: "Half Board",
        },
        {
          icon: <MdHomeRepairService />,
          label: "Special Services",
          value: "Guide & Assistance",
        },
        {
          icon: <span className="text-3xl text-[#24aa86]">*****</span>,
          label: "",
          value: "4.5/5 (45 Reviews)",
        },
      ],
    },
    {
      imgSrc: imgFour, // Replace with imgFour
      title: "Basic Hajj Package",
      details: [
        {
          icon: <ImPriceTags />,
          label: "Price",
          value: "From 5,00,000",
        },
        {
          icon: <MdOutlineTimer />,
          label: "Time & Duration",
          value: "Custom",
        },
        {
          icon: <MdLocalHotel />,
          label: "Hotel Makkah",
          value: "3 Star",
        },
        {
          icon: <MdLocalHotel />,
          label: "Hotel Madinah",
          value: "3 Star",
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
          value: "Breakfast & Dinner",
        },
        {
          icon: <MdHomeRepairService />,
          label: "Special Services",
          value: "Basic Assistance",
        },
        {
          icon: <span className="text-3xl text-[#24aa86]">*****</span>,
          label: "",
          value: "4/5 (20 Reviews)",
        },
      ],
    },
  ];

  return (
    <section
      className="w-full    py-14 bg-cover"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(144, 238, 144, 0.1), rgba(144, 238, 144, 0.2)), url(${caliography})`,
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <h1 className="text-3xl md:text-5xl text-center mb-8">
          Our Hajj, Umrah & Travel Packages
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {hajjPackages.map((packageItem, index) => (
            <PackageDetailsCard
              key={index}
              imgSrc={packageItem.imgSrc}
              title={packageItem.title}
              details={packageItem.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HajjPackagesDetails;
