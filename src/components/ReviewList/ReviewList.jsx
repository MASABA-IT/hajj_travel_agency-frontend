/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { FaRegUserCircle, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../store/slices/reviewPackageSlice";

const ReviewList = (packageId) => {
  const dispatch = useDispatch();

  const {
    reviews = [], // Fallback to empty array
    isLoading,
    error,
  } = useSelector((state) => state.reviews || {}); // Default to empty object if review state is undefined

  useEffect(() => {
    if (packageId && !reviews.length) {
      dispatch(getReviews(packageId));
    }
  }, [dispatch, reviews, packageId]); // Only refetch when packageId changes

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Recent Reviews
      </h3>
      {reviews && reviews.length > 0 ? (
        <ul className="space-y-4">
          {reviews
            .slice()
            .reverse()
            .map((review) => (
              <li
                key={review.id}
                className="bg-white shadow-md p-6 rounded-md mb-4 flex flex-col"
              >
                {/* User and Review */}
                <div className="flex items-center space-x-2">
                  <FaRegUserCircle className="text-gray-500 text-2xl" />
                  <p className="text-sm text-gray-700 font-medium">
                    {review.user_name.username}
                  </p>
                </div>

                {/* Review Rating */}
                <div className="flex space-x-1 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`${
                        star <= parseInt(review.rating) // Ensure review.rating is a number
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-600 leading-relaxed mt-2">
                  {review.text}
                </p>

                {/* Date */}
                <span className="text-xs text-gray-400 self-end mt-2">
                  {review.created_at
                    ? new Date(review.created_at).toLocaleDateString("en-US", {
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
