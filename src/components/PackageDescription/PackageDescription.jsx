import { useState } from "react";
import img1 from "../../assets/imgs/hotelRoom.jpg";
import { BiSolidMap } from "react-icons/bi";
import { TiStar } from "react-icons/ti";
import {
  MdOutlineDoNotDisturb,
  MdOutlineHealthAndSafety,
  MdOutlineLanguage,
  MdSpatialTracking,
} from "react-icons/md";
import { IoAnalyticsSharp, IoLocationSharp } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiShareFatThin } from "react-icons/pi";

const PackageDescription = () => {
  const [quantity, setQuantity] = useState(1);

  // Handlers for incrementing and decrementing quantity
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  // Facilities list for the package
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

  const [bookingDetails, setBookingDetails] = useState({
    from: "2021-12-10",
    to: "2021-12-10",
    guests: 2,
    subtotal: 78.9,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };
  const dataDesco = [
    {
      title: "Free cancellation",
      text: "Cancel up to 24 hours in advance to receive a full refund",
      icon: <MdOutlineDoNotDisturb />,
    },
    {
      title: "Health precautions",
      text: "Special health and safety measures apply. Learn more",
      icon: <MdOutlineHealthAndSafety />,
    },
    {
      title: "Mobile ticketing",
      text: "Use your phone or print your voucher",
      icon: <MdSpatialTracking />,
    },
    {
      title: "Duration",
      text: "3.5 hours. Check availability to see starting times.",
      icon: <GiDuration />,
    },
    {
      title: "Instant confirmation",
      text: "Don’t wait for the confirmation!",
      icon: <IoAnalyticsSharp />,
    },
    {
      title: "Live tour guide in English",
      text: "English",
      icon: <MdOutlineLanguage />,
    },
  ];
  const [reviews, setReviews] = useState([]); // To store reviews
  const [formData, setFormData] = useState({
    name: "",
    review: "",
  });

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.review) {
      const newReview = {
        id: Date.now(),
        ...formData,
        date: new Date(), // Add the current date here
      };
      setReviews([newReview, ...reviews]); // Add new review to the top
      setFormData({ name: "", review: "" }); // Clear form fields
    }
  };
  return (
    <div className="mt-28 h-auto p-6 max-w-[1400px] mx-auto flex flex-col justify-between items-center">
      {/* Header Section */}
      <div className="w-full flex flex-col  items-start ">
        <h2 className="text-xl md:text-3xl font-bold text-gray-700">
          Vintage Double Decker Bus Tour & Thames River Cruise
        </h2>
        <div className="flex justify-center items-center mt-2 text-gray-600">
          <span className="flex items-center">
            <BiSolidMap className="mr-1" />
            Gothenburg
          </span>
          <span className="mx-2">|</span>
          <span className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <TiStar key={index} className="mr-1 text-yellow-500" />
              ))}
            (358 reviews)
          </span>
        </div>
      </div>

      {/* Main Section */}
      <div className="w-full flex flex-col space-y-5 md:space-y-0 sm:flex-row justify-between items-start sm:space-x-6 mt-6">
        {/* Image Section */}
        <div className="basis-[65%]">
          <img
            src={img1}
            alt="Package"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Booking Details */}
        <div className="w-full md:basis-[30%] p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-xl font-semibold mb-4">Booking</h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="locationFrom"
                className="block text-sm font-medium text-gray-700"
              >
                From Location
              </label>
              <input
                type="text"
                id="locationFrom"
                name="locationFrom"
                value={bookingDetails.locationFrom}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm  outline-none focus:outline-slate-400"
                placeholder="Enter departure location"
                autoComplete="off"
              />
            </div>
            <div>
              <label
                htmlFor="locationTo"
                className="block text-sm font-medium text-gray-700"
              >
                To Location
              </label>
              <input
                type="text"
                id="locationTo"
                name="locationTo"
                value={bookingDetails.locationTo}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm outline-none focus:outline-slate-400"
                placeholder="Enter destination location"
                autoComplete="off"
              />
            </div>
            <div>
              <label
                htmlFor="guests"
                className="block text-sm font-medium text-gray-700"
              >
                No. of Guests
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={bookingDetails.guests}
                onChange={handleInputChange}
                min="1"
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm outline-none focus:outline-slate-400"
              />
            </div>
            <div className="flex flex-col justify-center items-center text-sm font-medium text-gray-700">
              <h3>Subtotal</h3>
              <h1 className="text-gray-900 text-2xl md:text-5xl">
                ${bookingDetails.subtotal.toFixed(2)}
              </h1>
            </div>
            <button
              type="button"
              className="w-full bg-[#24aa86] text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-[#24aa86] transition"
            >
              Confirm Booking
            </button>
          </form>

          <div className="mt-6 flex flex-col justify-between space-y-4  ">
            <button
              type="button"
              className=" flex justify-center items-center gap-x-2 bg-gray-200 text-gray-700 font-medium py-2   rounded-md hover:bg-gray-300 transition"
            >
              <CiHeart className="text-2xl" />
              Save to Wishlist
            </button>
            <button
              type="button"
              className=" flex justify-center items-center gap-x-2 bg-gray-200 text-gray-700 font-medium py-2   rounded-md hover:bg-gray-300 transition"
            >
              <PiShareFatThin className="text-2xl" />
              Share the Activity
            </button>
          </div>
        </div>
      </div>

      {/* Package Details Section */}
      <div className="w-full mt-10">
        <div className="md:w-1/2 p-10 grid grid-cols-1 md:grid-cols-2   gap-3 bg-zinc-100 rounded-lg">
          {dataDesco.map((data, index) => (
            <ul key={index}>
              <li className="flex flex-col justify-center items-start gap-y-2">
                <h2 className="text-lg flex justify-center items-center gap-2">
                  <span className="inline-block text-green-500">
                    {data.icon}
                  </span>{" "}
                  {data.title}
                </h2>
                <p className="text-sm ml-7">{data.text}</p>
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div className="mt-8 w-full">
        <h1 className="text-2xl font-bold">Hajj Package Description</h1>
        <p className="mt-2 text-lg">
          <strong>Price:</strong> $500
        </p>

        <h3 className="mt-4 text-xl font-semibold">Description:</h3>
        <p className="text-md mt-1">
          This is an amazing Hajj package offering luxurious amenities and a
          comfortable stay with all the facilities you need.
        </p>

        {/* Most Popular Facilities */}
        <h3 className="mt-4 text-xl font-semibold">Most Popular Facilities:</h3>
        <ul className="md:w-[50%] list-disc grid grid-cols-2  ml-6 mt-2">
          {facilities1.map((facility, index) => (
            <li key={index} className="text-md">
              {facility}
            </li>
          ))}
        </ul>
      </div>

      {/* Review */}
      <div className="w-full mx-auto my-5">
        <h2 className="text-2xl  font-bold text-gray-800 text-start mb-6">
          Leave a Review
        </h2>

        {/* Review Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-[40%] ml-auto  flex flex-col justify-center  bg-white shadow-md rounded-lg p-6 mb-8"
        >
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              required
            />
          </div>

          {/* Review Input */}
          <div className="mb-4">
            <label
              htmlFor="review"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Review
            </label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              placeholder="Write your review..."
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-2 text-white bg-[#24aa86] hover:bg-[#227c64] rounded-md transition duration-300"
          >
            Submit Review
          </button>
        </form>

        {/* Reviews Display */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Reviews
          </h3>
          {reviews.length > 0 ? (
            <ul className="space-y-4">
              {reviews.map((review) => (
                <li
                  key={review.id}
                  className="bg-white shadow-md p-6 rounded-md mb-4 flex flex-col  "
                >
                  {/* User and Review */}
                  <div className="flex items-center space-x-2">
                    <FaRegUserCircle className="text-gray-500 text-2xl" />
                    <p className="text-sm text-gray-700 font-medium">
                      {review.name}
                    </p>
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {review.review}
                  </p>

                  {/* Date */}
                  <span className="text-xs text-gray-400 self-end">
                    {review.date
                      ? new Date(review.date).toLocaleDateString("en-US", {
                          month: "numeric",
                          day: "numeric",
                          year: "2-digit",
                        })
                      : "Loading..."}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No reviews yet. Be the first!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PackageDescription;
