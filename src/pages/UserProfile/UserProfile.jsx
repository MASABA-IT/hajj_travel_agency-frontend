import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import {
  FaUser,
  FaCogs,
  FaShieldAlt,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa"; // Import icons

const UserProfile = () => {
  const [selectedSection, setSelectedSection] = useState("Profile Info");
  const [showSettings, setShowSettings] = useState(false); // State for toggling settings menu
  const [isMounted, setIsMounted] = useState(false); // State for animation control

  const handleMenuClick = (section) => {
    setSelectedSection(section);
  };

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings); // Toggle visibility of settings menu (icon + text)
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setIsMounted(true); // Trigger animation when component is mounted
  }, []);

  return (
    <div className={`user-profile mt-24 h-auto max-w-[1400px] mx-auto flex`}>
      <div
        className={`sidebar w-64 h-[90vh] bg-[#24aa86] text-white p-4 shadow-lg transition-all ease-in-out duration-300 ${
          isMounted ? "animate-slideInSidebar" : ""
        }`}
      >
        <ul>
          <li
            className="flex items-center gap-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md"
            onClick={toggleSettings}
          >
            <FaCogs /> {showSettings && <span>Account Setting</span>}
          </li>

          <>
            <li
              className="flex items-center gap-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md"
              onClick={() => handleMenuClick("Profile Info")}
            >
              <FaUser /> {showSettings && <span>Profile Info</span>}
            </li>
            <li
              className="flex items-center gap-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md"
              onClick={() => handleMenuClick("Account Settings")}
            >
              <FaCogs /> {showSettings && <span>Account Settings</span>}
            </li>
            <li
              className="flex items-center gap-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md"
              onClick={() => handleMenuClick("Security")}
            >
              <FaShieldAlt /> {showSettings && <span>Security</span>}
            </li>
            <li
              className="flex items-center gap-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md"
              onClick={() => handleMenuClick("Notifications")}
            >
              <FaBell /> {showSettings && <span>Notifications</span>}
            </li>
          </>

          <li>
            <button
              onClick={handleLogout}
              className="flex items-center gap-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md mt-4"
            >
              <FaSignOutAlt /> {showSettings && <span>Logout</span>}
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
        <p className="text-gray-600">
          {selectedSection === "Profile Info" &&
            "Here is your profile information."}
          {selectedSection === "Account Settings" &&
            "Manage your account settings here."}
          {selectedSection === "Security" && "Update your security settings."}
          {selectedSection === "Notifications" &&
            "Manage your notification preferences."}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
