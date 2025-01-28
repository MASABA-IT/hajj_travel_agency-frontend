import { useState, useEffect } from "react";
import { FaCogs, FaUser, FaBell, FaSignOutAlt } from "react-icons/fa";
import AccountProfile from "../../components/Accounts/AccountProfile/AccountProfile";
import { logout } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChangePassword from "../../components/Accounts/ChangePassword/ChangePassword";
import { IoBook } from "react-icons/io5";
import Appointment from "../../components/Accounts/Appointment/Appointment";

const Notifications = () => <div>Manage your notification preferences.</div>;

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Hook to detect screen size
  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener("resize", listener);
      return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
  };

  const isDesktop = useMediaQuery("(min-width: 768px)"); // Detect desktop size
  const [showSettings, setShowSettings] = useState(false); // Sidebar toggle for mobile
  const [selectedSection, setSelectedSection] = useState("Profile Info"); // Current section
  const [isMounted, setIsMounted] = useState(false); // Animation state
  const [activeIndex, setActiveIndex] = useState(1); // Active menu item

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSettings = () => {
    setShowSettings((prev) => !prev);
  };

  const handleMenuClick = (section, index) => {
    setSelectedSection(section);
    setActiveIndex(index); // Highlight selected menu
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // Map of sections to their components
  const sectionComponents = {
    "Profile Info": <AccountProfile />,
    "Change Password": <ChangePassword />,
    Appointment: <Appointment />,
    Notifications: <Notifications />,
  };

  const menuItems = [
    {
      icon: <FaCogs />,
      text: "Account Setting",
      onClick: toggleSettings,
      hiddenOnDesktop: true,
    },
    {
      icon: <FaUser />,
      text: "Profile Info",
      onClick: (index) => handleMenuClick("Profile Info", index),
    },
    {
      icon: <FaCogs />,
      text: "Change Password",
      onClick: (index) => handleMenuClick("Change Password", index),
    },
    {
      icon: <IoBook />,
      text: "Appointment",
      onClick: (index) => handleMenuClick("Appointment", index),
    },
    {
      icon: <FaBell />,
      text: "Notifications",
      onClick: (index) => handleMenuClick("Notifications", index),
    },
  ];

  return (
    <div className="user-profile mt-28 h-auto max-w-[1400px] mx-auto flex">
      {/* Sidebar */}
      <div
        className={`sidebar h-[90vh] bg-[#24aa86d5] text-white p-4 shadow-lg transition-all duration-300 ease-in-out ${
          showSettings || isDesktop ? "w-72" : "w-16"
        }`}
      >
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`relative flex items-center gap-4 cursor-pointer p-2 rounded-md overflow-hidden group ${
                activeIndex === index ? "bg-[#24aa86]" : "hover:bg-[#24aa86]"
              } ${item.hiddenOnDesktop ? "md:hidden" : ""}`}
              onClick={() => item.onClick(index)}
            >
              {/* Icon */}
              <div className="relative z-10">{item.icon}</div>

              {/* Text */}
              {(showSettings || isDesktop) && (
                <span
                  className={`relative z-10 transition-all duration-300 ease-in-out transform ${
                    showSettings || isDesktop
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2"
                  }`}
                >
                  {item.text}
                </span>
              )}

              {/* Background transition effect */}
              <div
                className={`absolute inset-0 bg-[#186b55] transition-transform duration-300 ease-in-out scale-x-0 origin-left group-hover:scale-x-100 ${
                  activeIndex === index ? "scale-x-100" : ""
                }`}
              ></div>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center gap-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md mt-4"
            >
              <FaSignOutAlt />
              {(showSettings || isDesktop) && (
                <span
                  className={`transition-all duration-300 ease-in-out transform ${
                    showSettings || isDesktop
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2"
                  }`}
                >
                  Logout
                </span>
              )}
            </button>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div
        className={`content flex-1 p-6  bg-gray-100 rounded-lg   ${
          isMounted ? "animate-fadeInContent" : ""
        }`}
      >
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          {selectedSection}
        </h1>
        <div className="text-gray-600">
          {/* Render the selected section's component */}
          {sectionComponents[selectedSection]}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
