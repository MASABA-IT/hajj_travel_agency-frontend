import { useState } from "react";
import img1 from "../../assets/imgs/image1.png";

const PackageDescription = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const facilities1 = [
    "Free parking",
    "Family rooms",
    "Free WiFi",
    "Airport shuttle",
    "Non-smoking rooms",
    "Room service",
    "Facilities for disabled guests",
    "24-hour front desk",
    "Lift",
    "Air conditioning",
  ];

  const facilities2 = [
    "Private bathroom",
    "Parking",
    "Free WiFi",
    "Bath",
    "Pets allowed",
    "Family rooms",
    "Flat-screen TV",
    "Room service",
    "Bathroom",
    "Toilet paper",
    "Towels",
    "Bidet",
    "Slippers",
    "Shower",
    "Linen",
    "Outdoor furniture",
    "Kitchen",
    "Electric kettle",
    "Clothes rack",
    "Pets are allowed. No extra charges.",
    "Flat-screen TV",
    "Coffee house on site",
    "WiFi is available in all areas and is free of charge.",
    "Free public parking is possible at a location nearby (reservation is needed).",
    "Private check-in/check-out",
    "Luggage storage",
    "Express check-in/check-out",
    "24-hour front desk",
    "Invoice provided",
    "Fire extinguishers",
    "Smoke alarms",
    "Security alarm",
    "Key access",
    "24-hour security",
    "Safety deposit box",
    "Air conditioning",
    "Non-smoking throughout",
    "Chapel/shrine",
    "Lift",
    "Family rooms",
    "Non-smoking rooms",
    "Public Bath",
    "Arabic, English spoken",
  ];

  return (
    <div className="mt-28 h-auto p-6 max-w-[1400px] mx-auto flex flex-col justify-between items-center">
      {/* Image Section */}
      <div className="w-full flex sm:flex-row justify-between items-center sm:space-x-6">
        <img
          src={img1}
          alt="Package"
          className="w-full sm:w-[45%] rounded-lg shadow-lg"
        />

        {/* Price Increment/Decrement */}
        <div className="flex items-center mt-4 sm:mt-0">
          <button
            onClick={handleDecrement}
            className="px-4 py-2 bg-gray-300 text-xl rounded-md"
          >
            -
          </button>
          <span className="mx-4 text-xl">{quantity}</span>
          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-gray-300 text-xl rounded-md"
          >
            +
          </button>
        </div>
      </div>

      {/* Package Details Section */}
      <div className="flex-1 mt-6 sm:mt-0 sm:px-6">
        <h1 className="text-2xl font-bold">Hajj Package Description</h1>
        <p className="mt-2 text-lg">
          <strong>Price:</strong> $500
        </p>

        <h3 className="mt-4 text-xl font-semibold">Description:</h3>
        <p className="text-md">
          This is an amazing Hajj package offering luxurious amenities and a
          comfortable stay with all the facilities you need.
        </p>

        <h3 className="mt-4 text-xl font-semibold">Reviews:</h3>
        <p>⭐⭐⭐⭐⭐ (4.5/5)</p>

        {/* Most Popular Facilities (Section 1) */}
        <h3 className="mt-4 text-xl font-semibold">Most Popular Facilities:</h3>
        <ul className="list-disc ml-6">
          {facilities1.map((facility, index) => (
            <li key={index} className="text-md">
              {facility}
            </li>
          ))}
        </ul>

        {/* Great for your stay (Section 2) */}
        <h3 className="mt-4 text-xl font-semibold">Great for Your Stay:</h3>
        <ul className="list-disc ml-6">
          {facilities2.map((facility, index) => (
            <li key={index} className="text-md">
              {facility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackageDescription;
