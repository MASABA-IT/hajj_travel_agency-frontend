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
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchPackages } from "../../store/slices/packageSlice";
import PackageDetailsCard from "../PackageDetailsCard/PackageDetailsCard";

const HajjPackagesDetails = () => {
  const dispatch = useDispatch();
  const { packages, loading, error } = useSelector((state) => state.packages);

  useEffect(() => {
    dispatch(fetchPackages());
  }, [dispatch]);
  console.log(packages, "packages");
  const hajjPackages = packages.map((pkg) => ({
    imgSrc: pkg?.thumbnail, // Set image source from package data
    title: pkg.title,
    id: pkg.id,
    details: [
      {
        icon: <ImPriceTags />,
        label: "Price",
        value: `From ${pkg.price}`,
      },
      {
        icon: <MdOutlineTimer />,
        label: "Time & Duration",
        value: pkg.duration,
      },
      {
        icon: <MdLocalHotel />,
        label: "Hotel Makkah",
        value: pkg.hotel_makkah,
      },
      {
        icon: <MdLocalHotel />,
        label: "Hotel Madinah",
        value: pkg.hotel_madinah,
      },
      {
        icon: <FaPlaneDeparture />,
        label: "Flights Up",
        value: pkg.flight_up,
      },
      {
        icon: <FaPlaneArrival />,
        label: "Flights Down",
        value: pkg.flight_down,
      },
      {
        icon: <IoFastFoodSharp />,
        label: "Food",
        value: pkg.food,
      },
      {
        icon: <MdHomeRepairService />,
        label: "Special Services",
        value: pkg.special_service,
      },
      {
        icon: <span className="text-3xl text-[#24aa86]">*****</span>,
        label: "",
        value: `${pkg.reviews_avg_rating || "No Rating"} (${
          pkg.reviews_count
        } Reviews)`,
      },
    ],
  }));

  console.log(hajjPackages, "Updated Hajj Packages");

  return (
    <section
      className="w-full    py-14 bg-cover"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(144, 238, 144, 0.1), rgba(144, 238, 144, 0.2)), url(${caliography})`,
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <h1 className="text-3xl md:text-3xl text-center mb-8 text-[#24aa86] font-bold">
          Our Hajj, Umrah & Travel Packages
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {hajjPackages.map((packageItem, index) => (
            <PackageDetailsCard
              key={index}
              imgSrc={packageItem.imgSrc}
              title={packageItem.title}
              details={packageItem.details}
              id={packageItem.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HajjPackagesDetails;
