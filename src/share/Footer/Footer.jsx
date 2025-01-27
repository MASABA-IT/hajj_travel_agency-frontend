import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { subscribeEmail } from "../../store/slices/subscriptionSlice";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { message, loading, error } = useSelector(
    (state) => state.subscription
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(subscribeEmail(email));
      setEmail("");
    }
  };
  useEffect(() => {
    if (message) {
      toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
    }
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
    }
  }, [message, error]);
  return (
    <footer className="w-full bg-[#24aa86] py-10">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* 1st Row: Newsletter Section */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-white text-2xl font-semibold mb-4 md:mb-0">
            Join Our Newsletter
          </h2>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md border-none outline-none"
            />
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-white text-[#24aa86] hover:text-[#1e6854] rounded-r-md transition-colors duration-75"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </div>

        {/* 2nd Row: Tour Service + Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {/* Extra Tour Service */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Extraordinary Tour Service
            </h3>
            <ul className="text-white  flex gap-2">
              <a
                href="#"
                className="transition-all duration-300 transform hover:scale-110 hover:text-[#3b5998]" // Facebook color
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="transition-all duration-300 transform hover:scale-110 hover:text-[#2f688b]" // Twitter color
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="transition-all duration-300 transform hover:scale-110 hover:text-[#0077b5]" // LinkedIn color
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="transition-all duration-300 transform hover:scale-110 hover:text-[#e4405f]" // Instagram color
              >
                <FaSquareInstagram />
              </a>
            </ul>
          </div>

          {/* Contact and Company List */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <div className="text-white flex justify-between items-start">
              {/* Contact Us section */}
              <div className="mb-4">
                <p className="font-semibold mb-2">Contact Us</p>
                <ul>
                  <li className="mb-2 cursor-pointer hover:text-[#f1f1f1]">
                    Email
                  </li>
                  <li className="mb-2 cursor-pointer hover:text-[#f1f1f1]">
                    Phone
                  </li>
                  <li className="mb-2 cursor-pointer hover:text-[#f1f1f1]">
                    Location
                  </li>
                </ul>
              </div>

              {/* Company Info section */}
              <div className="mb-4">
                <p className="font-semibold mb-2">Company Info</p>
                <ul>
                  <li className="mb-2 cursor-pointer hover:text-[#f1f1f1]">
                    About Us
                  </li>
                  <li className="mb-2 cursor-pointer hover:text-[#f1f1f1]">
                    Careers
                  </li>
                  <li className="mb-2 cursor-pointer hover:text-[#f1f1f1]">
                    Privacy Policy
                  </li>
                </ul>
              </div>

              {/* Open Trip section */}
              <div>
                <p className="font-semibold mb-2">Open Trip</p>
                <ul>
                  <li className="mb-2 cursor-pointer hover:text-[#f1f1f1]">
                    Upcoming Trips
                  </li>
                  <li className="mb-2 cursor-pointer hover:text-[#f1f1f1]">
                    Special Offers
                  </li>
                  <li className="mb-2 cursor-pointer hover:text-[#f1f1f1]">
                    Booking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd Row: Copyright + Legal Section */}
        <div className="border-t border-white pt-4 mt-8">
          <div className="flex justify-between  flex-wrap-reverse md:flex-row items-center gap-5">
            <p className=" w-full md:w-auto text-white text-sm text-center">
              Copyright @2024, <span className="font-semibold ">MASABA</span>{" "}
              All Rights Reserved
            </p>
            <ul className="w-full md:w-auto flex justify-center  items-center   space-x-6   text-white text-sm ">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
};

export default Footer;
