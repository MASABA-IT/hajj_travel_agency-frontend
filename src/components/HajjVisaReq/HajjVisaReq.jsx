import caliography from "../../assets/imgs/Caliography.png";
import hajjVisaReq from "../../assets/imgs/hajjVisaReq.png";

const HajjVisaReq = () => {
  return (
    <section
      className="w-full bg-cover py-14"
      style={{
        backgroundImage: `url(${caliography})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center bg-red-20 px-5 md:px-0">
        <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center ">
          <img
            src={hajjVisaReq}
            alt="Visa"
            className="max-w-[300px] w-full h-auto object-contain"
          />
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h2 className="text-xl md:text-3xl text-[#24aa86] text-center md:text-left">
            Hajj pre-registration 2025 process from Dhaka, Bangladesh
          </h2>
          <p className="w-full md:w-3/4 mx-auto md:mx-0 text-center md:text-left">
            As a Bangladeshi citizen, you will need to fulfill certain
            requirements to obtain a beautiful Umrah journey. Here are the key
            requirements:
          </p>
          <ul className="list-inside pl-5 space-y-3">
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#24aa86] rounded-full"></span>
              <span>
                Pre-registration for the Hajj in 2024 is already complete.
              </span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#24aa86] rounded-full"></span>
              <span>Recent passport-sized photographs</span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#24aa86] rounded-full"></span>
              <span>
                Register for Hajj 2025 right away to be the first to receive all
                the information you need! The order of reservations for all Hajj
                2025 packages is first come, first served.
              </span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#24aa86] rounded-full"></span>
              <span>
                We are still pre-registering pilgrims for the Hajj in 2025.
                Please complete the form to request a price quote for the
                possible best Hajj packages in 2025.
              </span>
            </li>
          </ul>
          <div className="flex justify-center md:justify-start mt-5">
            <button className="min-w-[200px] px-6 py-3 bg-[#5a584f] text-white rounded-md shadow-lg hover:bg-[#3f3e38] transition">
              Book For Next Umrah
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HajjVisaReq;
