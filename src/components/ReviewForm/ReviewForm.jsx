import { useState } from "react"; // Import useState from React
import { FaStar } from "react-icons/fa";
import "./ReviewForm.css";

// eslint-disable-next-line react/prop-types
const ReviewForm = ({ formData = {}, handleChange, handleSubmit }) => {
  const [rating, setRating] = useState(formData.rating || 0); // Initialize rating state

  const handleTextareaChange = (e) => {
    // Adjust the textarea height dynamically
    e.target.style.height = "auto"; // Reset height
    e.target.style.height = `${e.target.scrollHeight}px`; // Set new height based on content
    handleChange(e); // Call the original handleChange function
  };

  const [hoverRating, setHoverRating] = useState(0); //
  // Handle the rating change
  const handleRatingChange = (value) => {
    setRating(value); // Update the rating value
    handleChange({ target: { name: "rating", value } }); // Update the formData with the new rating
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-[80%] flex flex-col justify-center bg-white shadow-md rounded-lg p-6 mb-8"
    >
      {/* Text Input (formerly Review Input) */}
      <div className="mb-4">
        <label
          htmlFor="text"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Review
        </label>
        <textarea
          id="text"
          name="text"
          value={formData.text}
          onChange={handleTextareaChange}
          placeholder="Write your review..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:outline-none resize-none"
        />
      </div>

      {/* Rating Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Rating
        </label>
        <div className="flex space-x-4 flex-wrap items-center">
          <ul id="rating" className="flex space-x-1 md:text-2xl">
            {[1, 2, 3, 4, 5].map((value) => (
              <li
                key={value}
                data-value={value}
                className={`cursor-pointer ${
                  value <= (hoverRating || rating)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`} // Apply color based on hoverRating or rating
                onMouseEnter={() => setHoverRating(value)} // Set hover rating on hover
                onMouseLeave={() => setHoverRating(0)} // Reset hover rating on mouse leave
                onClick={() => setRating(value)} // Set the rating when clicked
              >
                <FaStar />
              </li>
            ))}
          </ul>
        </div>
        <span className="ml-2 md:text-lg font-semibold">{rating} / 5</span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-[200px] px-6 py-2 text-white bg-[#24aa86] hover:bg-[#227c64] rounded-md transition duration-300"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
