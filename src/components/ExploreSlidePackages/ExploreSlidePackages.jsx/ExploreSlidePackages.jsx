import { useState, useEffect } from "react";
import caliography from "../../../assets/imgs/Caliography.png";
import img1 from "../../../assets/imgs/slideImgOne.png";
import img2 from "../../../assets/imgs/slideImgTwo.png";
import img3 from "../../../assets/imgs/slideImgThree.png";
import img4 from "../../../assets/imgs/slideImgFour.png";
import { GoDotFill } from "react-icons/go";
import "./ExploreSlidePackages.css";

const ExploreSlidePackages = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [img1, img2, img3, img4];

  const handleImageChange = (event) => {
    setSelectedImage(Number(event.target.value));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="w-full h-auto bg-cover flex justify-center items-center md:py-14"
      style={{
        backgroundImage: `url(${caliography})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1400px] mx-auto py-14 flex flex-col-reverse md:flex-row justify-between items-center md:gap-10">
        <div className="mt-10 md:mt-0 w-[90%] md:w-full flex-1 flex flex-col gap-5">
          <h1 className=" text-3xl md:text-5xl text-[#24aa86]">
            Find the best Umrah package from Bangladesh
          </h1>
          <p className="text-gray-700">
            Explore amazing packages at exclusive rates with expert guides and
            Sharia consultants, ensuring a personalized, spiritually enriching,
            and reliable Hajj or Umrah experience designed to meet your unique
            needs and expectations.
          </p>
          <button className="max-w-[200px] px-4 py-2 md:px-6 md:py-3 bg-[#24aa86] text-gray-100 text-sm md:text-lg rounded-md shadow-lg hover:bg-[#27725e] transition">
            Explore Package
          </button>
        </div>

        {/* Right side: Image container */}
        <div className="w-[90%] md:w-full flex-1 relative overflow-hidden">
          {/* Display the current image based on selectedImage */}
          <img
            src={images[selectedImage]}
            alt="Explore Package"
            className="w-full h-full object-cover rounded-md transition-all duration-500 ease-in-out"
          />

          {/* Number selectors */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
            {images.map((_, index) => (
              <div key={index} className="relative">
                <input
                  type="radio"
                  id={`image${index}`}
                  name="imageSelector"
                  value={index}
                  checked={selectedImage === index}
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label
                  htmlFor={`image${index}`}
                  className={`w-6 h-6 flex justify-center items-center rounded-full cursor-pointer text-white font-semibold transition-all duration-300 ${
                    selectedImage === index
                      ? "bg-transparent border-[1px] border-[#e7dfdc] shadow-[0_0_20px_2px_rgba(39,114,94,0.5)] backdrop-blur-sm animate-wave"
                      : "bg-gray-500 backdrop-blur-md"
                  }`}
                >
                  <GoDotFill className="w-4 h-4 rounded-full bg-[#27725e]" />
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSlidePackages;
