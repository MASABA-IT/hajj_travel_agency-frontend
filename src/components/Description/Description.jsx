/* eslint-disable react/prop-types */
import "./Description.css";
/* eslint-disable react/prop-types */
import { useState } from "react";

const Description = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle "Read More" or "Read Less"
  const toggleReadMore = () => {
    setIsExpanded((prevState) => !prevState);
  };

  // Shorten the description text if not expanded
  const Description = description.slice(0, 250); // Show first 150 characters

  return (
    <div className="w-full text-gray-500 mb-5   md:px-0">
      <h2 className="text-2xl md:text-4xl py-3 text-gray-700">Description</h2>
      {/* Dynamic content container */}
      <div className="dynamic-content">
        {isExpanded ? (
          // Show full description when expanded
          <div dangerouslySetInnerHTML={{ __html: description }} />
        ) : (
          // Show shortened description
          <div dangerouslySetInnerHTML={{ __html: Description + "..." }} />
        )}
      </div>
      {/* Read More / Read Less Button */}
      <button
        className={`text-blue-500 mt-2 hover:underline ${
          isExpanded ? "hidden" : "block"
        }`}
        onClick={toggleReadMore}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default Description;
