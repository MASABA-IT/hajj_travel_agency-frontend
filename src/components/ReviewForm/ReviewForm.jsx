import "./ReviewForm.css";
// eslint-disable-next-line react/prop-types
const ReviewForm = ({ formData = {}, handleChange, handleSubmit }) => {
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
          id="text" // Changed id to "text"
          name="text" // Changed name to "text"
          value={formData.text} // Bind to text
          onChange={handleChange}
          placeholder="Write your review..."
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring   focus:outline-none"
          required
        ></textarea>
      </div>

      {/* Rating Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Rating
        </label>
        <div className="flex items-center space-x-4">
          {[1, 2, 3, 4, 5].map((rating) => (
            <label key={rating} className="flex items-center space-x-2">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={formData.rating === rating}
                onChange={handleChange}
                className="form-radio text-[#24aa86] focus:ring focus:ring-blue-300 custom-radio"
              />

              <span className="text-yellow-600">
                {rating} Star{rating > 1 ? "s" : ""}
              </span>
            </label>
          ))}
        </div>
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
