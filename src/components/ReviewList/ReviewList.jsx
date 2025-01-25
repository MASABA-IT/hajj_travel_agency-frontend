/* eslint-disable react/prop-types */
import { FaRegUserCircle } from "react-icons/fa";

const ReviewList = ({ reviews = [] }) => {
    
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Recent Reviews
      </h3>
      {reviews.length > 0 ? (
        <ul className="space-y-4">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="bg-white shadow-md p-6 rounded-md mb-4 flex flex-col"
            >
              {/* User and Review */}
              <div className="flex items-center space-x-2">
                <FaRegUserCircle className="text-gray-500 text-2xl" />
                <p className="text-sm text-gray-700 font-medium">
                  {review.username}
                </p>
              </div>

              {/* Review Text */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {review.text}
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
  );
};

export default ReviewList;
