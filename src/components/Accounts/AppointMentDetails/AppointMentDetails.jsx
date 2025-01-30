/* eslint-disable react/prop-types */
/* eslint-disable no-unsafe-optional-chaining */
import { IoLogoWhatsapp, IoMdArrowRoundBack } from "react-icons/io";
import { BASE_URL } from "../../../store/slices/apiConfig";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";

const AppointMentDetails = ({
  appointmentDetails,
  setIsClick,
  setSelectedSection,
}) => {
  const {
    approval_status,
    id,
    package_id,
    package_offer,
    package_offer_id,
    status,
    appointment_activities,
  } = appointmentDetails?.appointmentDetails;
  const { package_details, user, package_offer_consultant } = package_offer;

  const handleBack = () => {
    setIsClick(false);
    setSelectedSection("Appointment");
  };

  return (
    <div
      className="w-full min-h-screen px-8 py-10 flex flex-col md:flex-row gap-8 relative"
      style={{
        background: "linear-gradient(to top, #fff, #f8f8f8)", // Simulating a floor color
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", // Shadow to give depth to the container
      }}
    >
      {/* Back Button */}
      <div className="absolute top-2 left-8">
        <button
          className="relative text-2xl text-gray-600 group"
          onClick={handleBack}
        >
          <IoMdArrowRoundBack />
          <span className="absolute -top-4 -right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black text-sm">
            Back
          </span>
        </button>
      </div>

      {/* Left Side - Appointment Details */}
      <div className="flex-1 w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">
          {package_details?.title} {package_offer.year}
        </h1>
        <p>{package_details?.title}</p>
        <img
          src={`${BASE_URL}${package_details.thumbnail}`}
          alt="Appointment"
          className="w-full rounded-lg mt-4"
        />
        <p className="py-6 text-xl font-serif text-zinc-600">
          Price:{" "}
          <span className="font-semibold">{package_details.price} BDT</span>
        </p>

        {/* Specification Section */}
        <div className="max-w-2xl mx-auto py-8 px-4 bg-white">
          <h2 className="text-lg font-mono font-bold text-[#24aa86] uppercase tracking-wide border-b-2 border-zinc-400 pb-3">
            Specification:
          </h2>
          <ul className="space-y-2 text-sm text-zinc-800 font-serif mt-4">
            {[
              { label: "Year", value: package_offer.year },
              { label: "Start Date", value: package_offer.start_date },
              { label: "End Date", value: package_offer.end_date },
              { label: "Capacity", value: package_offer.capacity },
              { label: "Note", value: package_offer.note },
            ].map(({ label, value }, index) => (
              <li key={index}>
                <span className="font-semibold text-[#24aa86]">{label}:</span>{" "}
                {value}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 space-y-4">
          {appointment_activities?.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "10px",
              }}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-700">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <div className="text-sm text-gray-600">
                {new Date(item.created_at).toLocaleString("en-US")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Consultant Profile */}
      <div className="w-full md:w-[30%] max-h-[700px] min-h-[400px] bg-orange-50 p-8 rounded-lg shadow-lg font-serif">
        <p className="text-xs">Consultants</p>
        <h2 className="text-xl font-semibold mb-4">Main Consultant </h2>
        <div className="flex items-center mb-4">
          <img
            src={`${BASE_URL}${user.image}`}
            alt="Consultant"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">
              {user?.username || "Consultant Name"}
            </h3>
            <p className="text-sm text-gray-600">
              Expert in{" "}
              {package_details?.title?.toLowerCase().includes("hajj")
                ? "Hajj"
                : package_details?.title?.toLowerCase().includes("umrah")
                ? "Umrah"
                : ""}{" "}
              Services
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="flex gap-2 justify-start items-center">
            <MdOutlineMail /> {user.email}
          </p>
          <p className="flex gap-2 justify-start items-center">
            <FaPhoneFlip /> {user.phone_number}
          </p>
          <p className="flex gap-2 justify-start items-center text-green-500 hover:cursor-pointer text-lg">
            <IoLogoWhatsapp />
          </p>
        </div>

        {/* ------------------ */}
        <div className="w-full border-2 border-t-orange-200 my-4"></div>
        <div className="consultant-info">
          {package_offer_consultant.map((consultant, index) => (
            <div key={index} className="consultant-card flex items-center mb-6">
              <img
                src={`${BASE_URL}${consultant.user.image}`}
                alt={consultant.user.username}
                className="w-14 h-14 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  {consultant.user.username}
                </h3>
                <p className="text-sm text-gray-600">{consultant.user.email}</p>
                <p className="text-sm text-gray-600">
                  {consultant.user.phone_number}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointMentDetails;
