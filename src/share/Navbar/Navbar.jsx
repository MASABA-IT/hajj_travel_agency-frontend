import { useState, useEffect, useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import HajjUmrah from "../../assets/logos/hajjUmrah.png";
import { MdOutlineWhatsapp } from "react-icons/md";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [clickedMenu, setClickedMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle
  const menuRef = useRef(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const menuItems = [
    { name: "Umrah", subMenu: ["Sub item 1", "Sub item 2"] },
    { name: "Hajj", subMenu: ["Sub item 1", "Sub item 2"] },
    { name: "Facilities", subMenu: ["Sub item 1 Sub item item", "Sub item 2"] },
    { name: "Guidance", subMenu: ["Sub item 1", "Sub item 2"] },
    { name: "Management Board", subMenu: ["Sub item 1", "Sub item 2"] },
    { name: "About Us", subMenu: [] },
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

  return (
    <header
      className="fixed inset-x-0 mx-auto w-full backdrop-blur-md shadow-md"
      style={{
        background:
          "linear-gradient(to right, rgba(6, 78, 59, 0.8), rgba(16, 185, 129, 1), rgba(167, 243, 208, 0.7))",
        
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
            className={` md:flex items-center justify-end gap-4 py-4 text-base font-medium ${
              isMobileMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative px-3"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to="#"
                  className="block text-white transition duration-200"
                  onClick={() => handleMenuClick(index)}
                >
                  <span>{item.name}</span>
                  {item.subMenu && item.subMenu.length > 0 && (
                    <AiFillCaretDown
                      className={`inline-block ml-2 transition-transform duration-200 transform ${
                        activeMenu === index || clickedMenu === index
                          ? "rotate-180  "
                          : " "
                      }`}
                    />
                  )}
                </NavLink>

                {/* Dropdown Menu */}
                {item.subMenu &&
                  item.subMenu.length > 0 &&
                  (activeMenu === index || clickedMenu === index) && (
                    <ul className="absolute top-full left-0 mt-2 bg-white text-black   rounded shadow-lg min-w-[150px] inline-block h-auto">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="hover:bg-gray-100 py-2 px-4 transition-all duration-75 hover:border-b-[2px] hover:border-green-600"
                        >
                          <NavLink
                            to="#"
                            className="block text-md whitespace-nowrap"
                          >
                            {subItem}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center items-center gap-3">
          <span className="text-white py-2 px-3 rounded-full bg-green-700">
            +1 (234) 567-890
          </span>
          <span className="w-8 h-8   flex justify-center items-center  rounded-full bg-green-700">
            <MdOutlineWhatsapp className="text-3xl text-white p-[3px]" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
