const Footer = () => {
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
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md border-none outline-none"
            />
            <button className="px-4 py-2 bg-white text-[#24aa86] rounded-r-md">
              Subscribe
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
            <ul className="text-white flex gap-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
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
          <div className="flex justify-between items-center">
            <p className="text-white text-sm">
              Copyright @2024, <span className="font-semibold">MASABA</span> All
              Rights Reserved
            </p>
            <ul className="flex space-x-6 text-white text-sm">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
