import { useState, useEffect } from "react";
import {
  FaCogs,
  FaUser,
  FaShieldAlt,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";
import AccountProfile from "../../components/Accounts/AccountProfile/AccountProfile";

// Define your components for each section

const AccountSettings = () => <div>Manage your account settings here.</div>;
const Security = () => <div>Update your security settings here.</div>;
const Notifications = () => <div>Manage your notification preferences.</div>;

function Sidebar() {
  // Custom hook to detect screen size
  function useMediaQuery(query) {
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
  }

  const isDesktop = useMediaQuery("(min-width: 768px)"); // Detect if screen size is desktop
  const [showSettings, setShowSettings] = useState(false); // State for toggling settings on mobile
  const [selectedSection, setSelectedSection] = useState("Profile Info"); // State for selected section
  const [isMounted, setIsMounted] = useState(false); // For fade-in animation

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSettings = () => {
    setShowSettings((prev) => !prev);
  };

  const handleMenuClick = (section) => {
    setSelectedSection(section); // Update selected section
  };

  const handleLogout = () => {
    console.log("Logging out");
  };

  // Map of sections to their respective components
  const sectionComponents = {
    "Profile Info": <AccountProfile />,
    "Account Settings": <AccountSettings />,
    Security: <Security />,
    Notifications: <Notifications />,
  };

  return (
    <div className={`user-profile mt-28 h-auto max-w-[1400px] mx-auto flex`}>
      {/* Sidebar */}
      <div
        className={`sidebar h-[90vh]  bg-[#24aa86d5] text-white p-4 shadow-lg transition-all duration-300 ease-in-out ${
          showSettings || isDesktop ? "w-72" : "w-16"
        }`}
      >
        <ul>
          {[
            {
              icon: <FaCogs />,
              text: "Account Setting",
              onClick: toggleSettings,
            },
            {
              icon: <FaUser />,
              text: "Profile Info",
              onClick: () => handleMenuClick("Profile Info"),
            },
            {
              icon: <FaCogs />,
              text: "Account Settings",
              onClick: () => handleMenuClick("Account Settings"),
            },
            {
              icon: <FaShieldAlt />,
              text: "Security",
              onClick: () => handleMenuClick("Security"),
            },
            {
              icon: <FaBell />,
              text: "Notifications",
              onClick: () => handleMenuClick("Notifications"),
            },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md"
              onClick={item.onClick}
            >
              {item.icon}
              {(showSettings || isDesktop) && (
                <span
                  className={`transition-all duration-300 ease-in-out transform ${
                    showSettings || isDesktop
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2"
                  }`}
                >
                  {item.text}
                </span>
              )}
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
        className={`content flex-1 p-6 bg-gray-100 rounded-lg ml-4 ${
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
