import { useState, useEffect, useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import HajjUmrah from "../../assets/logos/hajjUmrah.png";
import { MdOutlineWhatsapp } from "react-icons/md";
import "./Navbar.css";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [clickedMenu, setClickedMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle
  const menuRef = useRef(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [iconRotation, setIconRotation] = useState(false);

  // Define menu items with actual href paths for the submenu items
  const menuItems = [
    {
      name: "Umrah",
      link: "/umrah", // Added link for Umrah
      subMenu: [
        { name: "Umrah Packages", link: "/umrah" },
        { name: "Benefit Of Umrah", link: "/umrah/benefit-of-umrah" },
        { name: "How To Perform Umrah", link: "/umrah/how-to-perform-umrah" },
        {
          name: "Umrah Visa Requirement",
          link: "/umrah/umrah-visa-requirement",
        },
      ],
    },
    {
      name: "Hajj",
      link: "/hajj",
      subMenu: [
        { name: "Hajj Pre Registration", link: "/hajj" },
        {
          name: "Hajj Visa Requirements",
          link: "/hajj/hajj-visa-requirements",
        },
        { name: "Hajj Packages 2025", link: "/hajj/hajj-package" },
      ],
    },
    {
      name: "Facilities",
      link: "/facilities",
      subMenu: [
        { name: "Visa Processing", link: "/facilities/visa-processing" },
        { name: "Hotel Booking", link: "/facilities/hotel-booking" },
        { name: "Ziyarat Tours", link: "/facilities/ziyarat-tours" },
        { name: "Airline Ticketing", link: "/facilities/airline-ticketing" },
        { name: "Umrah Training", link: "/facilities/umrah-training" },
      ],
    },
    {
      name: "Guidance",
      link: "/guidance",
      subMenu: [
        {
          name: "Umrah Guideline In English",
          link: "/guidance/guidance-english",
        },
        {
          name: "Umrah Guideline in Bangla",
          link: "/guidance/guidance-bangla",
        },
      ],
    },
    {
      name: "Management Board",
      link: "/management-board",
      subMenu: [
        { name: "Special Da'e", link: "/" },
        { name: "Umrah Guides", link: "/board-item-2" },
        { name: "Sharia Consultant", link: "/board-item-1" },
        { name: "Business Associate", link: "/board-item-2" },
        { name: "Flagship Agency", link: "/board-item-1" },
        { name: "Board Of Director", link: "/board-item-2" },
      ],
    },
    {
      name: "About Us",
      link: "/about-us", // Added link for About Us
      subMenu: [{ name: "Company Info", link: "/about-us" }],
    },
  ];

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutId);
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      if (clickedMenu === null) {
        setActiveMenu(null);
      }
    }, 300);
    setTimeoutId(id);
  };

  const handleMenuClick = (index) => {
    setClickedMenu(index === clickedMenu ? null : index);
    setIconRotation(!iconRotation); // Toggle icon rotation
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setActiveMenu(null);
      setClickedMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <header
      className="fixed inset-x-0 z-50 mx-auto w-full backdrop-blur-md shadow-md "
      style={{
        background:
          "linear-gradient(to right, rgba(6, 78, 59, 0.3), rgba(16, 185, 129, 0.7), rgba(167, 243, 208, 1))",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center py-4 px-6">
        <div className="navbar__logo">
          <Link to="/">
            <img
              src={HajjUmrah}
              alt="Logo"
              className="navbar__logo-img w-[60px] h-[60px]"
            />
          </Link>
        </div>

        <nav ref={menuRef} className="w-2/3">
          <div className="md:hidden flex items-center">
            {/* Hamburger Menu */}
            <button onClick={toggleMobileMenu} className="text-white text-3xl">
              &#9776;
            </button>
          </div>

          <ul
            className={`md:flex items-center justify-end gap-4 py-4 text-base font-medium ${
              isMobileMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative px-3 "
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to={item?.link}
                  className={({ isActive }) =>
                    `block text-white transition duration-200 ${
                      isActive ? "text-[#343f38]" : ""
                    }`
                  }
                  onClick={() => handleMenuClick(index)}
                >
                  <span>{item.name}</span>
                  {item.subMenu && item.subMenu.length > 0 && (
                    <AiFillCaretDown
                      className={`inline-block ml-2 transition-transform duration-200 transform ${
                        activeMenu === index || clickedMenu === index
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  )}
                </NavLink>
                {/* Dropdown Menu */}
                {item.subMenu &&
                  item.subMenu.length > 0 &&
                  (activeMenu === index || clickedMenu === index) && (
                    <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg min-w-[150px] inline-block h-auto">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="hover:bg-gray-100 py-2 px-4 transition-all duration-75 hover:border-b-[2px] hover:border-green-600"
                        >
                          <NavLink
                            to={subItem.link} // Link for submenu items
                            className="block text-md whitespace-nowrap"
                          >
                            {subItem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </nav>
        {/* user/login */}
        <div className="flex justify-center items-center gap-3">
          {/* Conditional rendering based on token existence */}
          {token ? (
            <NavLink
              to="/account"
              className="flex items-center gap-2 group p-1  pr-4    "
              style={{ textShadow: "2px 2px 4px rgba(0, 255, 0, 0.3)" }}
            >
              <FaRegUserCircle
                className="text-3xl text-[#24aa86] border-2 rounded-full border-amber-200 transition-all duration-300 group-hover:scale-[110%]"
                style={{ boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)" }}
              />

              <p className="text-gray-700 text-sm md:text-xl font-medium hover:text-shadow-md transition-all duration-300">
                <span className="hidden md:inline-block">Welcome, </span>
                <span
                  className="text-[#404e42]"
                  style={{ textShadow: "0 2px 4px #fff" }}
                >
                  {user?.data.username
                    ?.split(" ")
                    .map((word) => word.charAt(0).toUpperCase())
                    .join("")}{" "}
                </span>
              </p>
              {/* User Icon */}
            </NavLink>
          ) : (
            <NavLink
              to="/signInUp"
              className="text-gray-700 min-w-[90px] mx-auto flex justify-center items-center bg-white py-2 px-4 rounded-full text-xl font-medium shadow-md hover:shadow-md transition-all duration-300 transform hover:scale-110 active:scale-95"
              style={{ textShadow: "0 2px 15px rgba(36, 170, 134, 0.2)" }}
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
