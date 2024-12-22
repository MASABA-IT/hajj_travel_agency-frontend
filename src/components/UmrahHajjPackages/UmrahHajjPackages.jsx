import UmrahCart from "../../assets/imgs/UmrahCart.png";
import EidHajjCart from "../../assets/imgs/EidHajjCart.png";
import PreeBookingCart from "../../assets/imgs/PreeBookingCart.png";
import CustomPackage from "../../assets/imgs/CustomPackage.png";
import caliography from "../../assets/imgs/Caliography.png";
import "./UmrahHajjPackages.css";
import { TbHandFingerDown } from "react-icons/tb";
const packages = [
  {
    id: 1,
    title: "Umrah Hajj Package",
    description:
      "Experience comfort and spiritual fulfillment with this package.",
    image: UmrahCart,
    details: "More details about Package One...",
  },
  {
    id: 2,
    title: "Eid Hajj Package",
    description: "Discover the holy journey with personalized services.",
    image: EidHajjCart,
    details: "More details about Package Two...",
  },
  {
    id: 3,
    title: "Umrah & Hajj Prebooking",
    description: "A premium offering tailored for your pilgrimage needs.",
    image: PreeBookingCart,
    details: "More details about Package Three...",
  },
  {
    id: 4,
    title: "Custom Umrah and Hajj Package",
    description:
      "Unlock exclusive benefits and unparalleled comfort with our all-inclusive Hajj and Umrah package.",
    image: CustomPackage,
    details: "More details about the Exclusive Package...",
    isFullWidth: true, // This can be used to make this package span the full width
  },
];

const UmrahHajjPackages = () => {
  return (
    <section
      className="w-full bg-gray-50 py-12 bg-cover"
      style={{
        backgroundImage: `url(${caliography})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Section Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Choose From Our Diverse Hajj & Umrah Offering
        </h1>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`w-[90%] md:w-full mx-auto h-[250px] md:h-[350px] bg-red-200 p-8 shadow-lg rounded-md text-center relative overflow-hidden group ${
                pkg.isFullWidth ? "md:col-span-3" : ""
              }`}
              style={{
                backgroundImage: `linear-gradient(to right bottom, rgba(155, 61, 44, 0.2), rgba(0, 0, 0, 0.3)), url(${pkg.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.6)",
              }}
            >
              <h2
                className=" text-xl font-semibold text-gray-50    "
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                {pkg.title}
              </h2>

              {/* Hidden Bottom Part */}
              <button className="absolute bottom-0 left-0 w-full backdrop-blur-sm bg-[#27725ec5] text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">
                  {pkg.details} <span className="text-3xl"> &#x2192;</span>
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UmrahHajjPackages;
