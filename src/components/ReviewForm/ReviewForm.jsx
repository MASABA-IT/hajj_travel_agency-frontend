import { useState } from "react"; // Import useState from React
import { FaStar } from "react-icons/fa";
import "./ReviewForm.css";

// eslint-disable-next-line react/prop-types
const ReviewForm = ({ formData = {}, handleChange, handleSubmit }) => {
  const [rating, setRating] = useState(formData.rating || 5);

  const handleTextareaChange = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    handleChange(e);
  };

  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingChange = (value) => {
    console.log(value);
    setRating(value);
    handleChange({ target: { name: "rating", value } });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-[80%] flex flex-col justify-center bg-white shadow-md rounded-lg p-6 mb-8"
    >
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
                onClick={() => handleRatingChange(value)} // Update rating on click
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
