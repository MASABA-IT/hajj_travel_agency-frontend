import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../store/slices/apiConfig";

const PackageDetailsCard = ({ imgSrc, title, details = [], id }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  const handlePackage = (e) => {
    console.log(id);
    e.preventDefault();
    navigate("/umrah/packageDescription", { state: { id } });
    //   const location = useLocation();
    //   const id = location.state?.id;
  };
  return (
    <div
      onClick={handlePackage}
      ref={cardRef}
      className={`bg-white p-4 shadow-md rounded-md transform transition-transform duration-700 scale-90 hover:scale-95 hover:cursor-pointer ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      <img className="w-full" src={`${BASE_URL}/${imgSrc}`} alt={title} />
      <h2 className="text-xl text-center py-5 font-bold border-b-2 text-[#4b635c]">
        {title}
      </h2>
      <div className="flex flex-col">
        {details.map((detail, index) => (
          <div
            key={index}
            className={`w-full text-[14px] ${
              index % 2 !== 0 ? "text-gray-600" : "text-[#24aa86]"
            } flex justify-between items-center py-3 px-2 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <p className="w-[47%] flex items-center gap-2">
              <span>{detail.icon}</span>
              <span>{detail.label}</span>
            </p>

            <p className="w-[47%]">
              :<span className="px-1">{detail.value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageDetailsCard;
