import { useEffect, useState } from "react";

import { TiStar } from "react-icons/ti";
import {
  MdOutlineDoNotDisturb,
  MdOutlineHealthAndSafety,
  MdOutlineLanguage,
  MdSpatialTracking,
} from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";

import { CiHeart } from "react-icons/ci";
import { PiShareFatThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchPackageDetailsById } from "../../store/slices/packageSingleSlice";
import ModalBooking from "../ModalBooking/ModalBooking";
import { BASE_URL } from "../../store/slices/apiConfig";
import Description from "../Description/Description";
import { submitPackageBookingData } from "../../store/slices/packageBookingSlice";
import {
  getReviews,
  submitReview,
} from "../../store/slices/reviewPackageSlice";
import ReviewList from "../ReviewList/ReviewList";
import ReviewForm from "../ReviewForm/ReviewForm";

const PackageDescription = () => {
  // const { review, isLoading, error } = useSelector((state) => state.review);
  // console.log(review);
  const dispatch = useDispatch();
  const location = useLocation(); // Using useLocation to access state
  const { id } = location.state || {}; // Extract the ID passed through location state

  const [isModalOpen, setIsModalOpen] = useState(false); // To manage modal visibility
  const [bookingData, setBookingData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    note: "",
  }); // Store the form data

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

  /////////////
  ///Review

  const username = "user";
  const [reviews, setReviews] = useState([]); // To store reviews
  const [formData, setFormData] = useState({
    text: "",
    rating: 0,
    package_id: id, // Assuming packageId is passed as a prop
  });

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("message");
    if (formData.text && formData.rating) {
      const newReview = {
        id: Date.now(), // Unique review id
        user_name: username,
        text: formData.text, // Only include text
        rating: formData.rating, // Only include rating
        package_id: formData.package_id, // Include package_id
        date: new Date(), // Add the current date
      };
      console.log(newReview, "newReview");
      setReviews([newReview, ...reviews]); // Add new review to the top
      setFormData({ name: "user", text: "", rating: 0, package_id: id }); // Reset form fields

      // Dispatch the submitReview action with only text, rating, and package_id
      dispatch(
        submitReview({
          text: formData.text,
          rating: formData.rating,
          package_id: formData.package_id,
        })
      );
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(getReviews(id)); // Dispatch the action with package_id
    }
  }, [dispatch, id]);
  ////////////////////
  /////////single -DATA

  // Access Redux state for package details
  const { data, loading, error } = useSelector(
    (state) => state.packageSingleDetails
  );

  // Fetch package details when component mounts
  useEffect(() => {
    if (id) {
      dispatch(fetchPackageDetailsById(id));
    }
  }, [dispatch, id]);

  // Conditional rendering based on loading, error, and data states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No package details available.</div>;
  }
  /////////////////
  ///////////STAR-
  const [packagesKey = "packages", packages = {}] = data || []; // Default values if data is empty or undefined

  const averageRating = parseFloat(packages.reviews_avg_rating) || 0; // Safely convert to number or set default 0
  const totalStars = 5; // Max number of stars
  const fullStars = Math.floor(averageRating); // Full stars
  const halfStar = averageRating % 1 >= 0.5 ? 1 : 0; // Half star if remainder is 0.5 or greater
  const emptyStars = totalStars - fullStars - halfStar;

  // console.log(data, "data"); // The full data structure or empty array if data is undefined
  // console.log(packagesKey, "key"); // The "packages" key or default value
  // console.log(packages); // The package data or empty object if no data

  ////////////////
  /////////MODAL

  const handlePackageData = () => {
    setIsModalOpen(true); // Open the modal when the button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleModalInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();

    const updatedBookingData = {
      ...bookingData,
      package_id: id,
    };

    console.log("Booking Submitted", updatedBookingData);
    dispatch(submitPackageBookingData(updatedBookingData));
    setIsModalOpen(false); // Close the modal
    setBookingData({ full_name: "", email: "", phone_number: "", note: "" });
  };

  return (
    <div className="mt-28 h-auto p-6 max-w-[1400px] mx-auto flex flex-col justify-between items-center">
      {/* Header Section */}
      <div className="w-full flex flex-col  items-start ">
        <h2 className="text-xl md:text-3xl font-bold text-gray-700">
          {packages?.title}
        </h2>
        <div className="flex justify-center items-center mt-2 text-gray-600">
          {/* <span className="flex items-center">
            <BiSolidMap className="mr-1" />
            Gothenburg
          </span>
          <span className="mx-2">|</span> */}
          {
            <span className="flex items-center">
              {/* Full stars */}
              {Array(fullStars)
                .fill(0)
                .map((_, index) => (
                  <TiStar
                    key={`full-${index}`}
                    className="mr-1 text-[#24aa86]"
                  />
                ))}

              {/* Half star */}
              {halfStar === 1 && (
                <TiStar
                  key="half"
                  className="mr-1 text-[#24aa86]"
                  style={{ clipPath: "inset(0 50% 0 0)" }}
                />
              )}

              {/* Empty stars */}
              {Array(emptyStars)
                .fill(0)
                .map((_, index) => (
                  <TiStar
                    key={`empty-${index}`}
                    className="mr-1 text-gray-300"
                  />
                ))}

              <span className="text-sm text-gray-500">
                {packages?.reviews_count === 0
                  ? "No reviews"
                  : `(${packages?.reviews_count} ${
                      packages?.reviews_count === 1 ? "review" : "reviews"
                    })`}
              </span>
            </span>
          }
        </div>
      </div>

      {/* Main Section */}
      <div className="w-full flex flex-col space-y-5 md:space-y-0 sm:flex-row justify-between items-start sm:space-x-6 mt-6">
        {/* Image Section */}
        <div className="basis-[65%]">
          <img
            src={`${BASE_URL}/${packages?.thumbnail}`}
            alt="Package"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Booking Details */}
        <div className="w-full md:basis-[30%] p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-xl font-semibold mb-4">Booking</h1>
          <form className="space-y-4">
            {/* <div>
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
            </div> */}
            {/* <div>
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
            </div> */}
            {/* <div>
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
            </div> */}
            <div className="flex flex-col justify-center items-center text-sm font-medium text-gray-700">
              <h3>Subtotal</h3>
              <h1 className="text-gray-700 text-2xl md:text-3xl">
                ৳{packages?.price}
              </h1>
            </div>
            <button
              type="button"
              onClick={handlePackageData}
              className="w-full bg-[#24aa86] text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-[#24aa86] transition"
            >
              Confirm Booking
            </button>
            {/* Modal component */}
            {isModalOpen && (
              <ModalBooking
                closeModal={closeModal}
                bookingData={bookingData}
                handleModalInputChange={handleModalInputChange}
                handleModalSubmit={handleModalSubmit}
              />
            )}
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

      {/* Description*/}
      {packages?.description && (
        <Description description={packages?.description} />
      )}

      {/* Review */}
      <div className="w-full min-h-[300px] mx-auto my-5">
        <h2 className="text-2xl  font-bold text-gray-800 text-start mb-6">
          Leave a Review
        </h2>

        {/* Review Form */}
        <ReviewForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        {/* Reviews Display */}
        <ReviewList packageId={id} />
      </div>
    </div>
  );
};

export default PackageDescription;
