import caliography from "../../assets/imgs/Caliography.png";
import visaImg from "../../assets/imgs/visa.png";

const UmrahVisaRequirements = () => {
  return (
    <section
      className="w-full bg-cover py-14"
      style={{
        backgroundImage: `url(${caliography})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center bg-red-20 px-5 md:px-0">
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h2 className="text-xl md:text-3xl text-[#24aa86] text-center md:text-left">
            Umrah visa requirements
          </h2>
          <p className="w-full md:w-3/4 mx-auto md:mx-0 text-center md:text-left">
            As a Bangladeshi citizen, you will need to fulfill certain
            requirements to obtain a beautiful Umrah journey. Here are the key
            requirements:
          </p>
          <ul className="list-inside pl-5 space-y-3">
            <li className="flex items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2 bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1 rounded-full bg-white "></span>
              </span>
              Valid passport (must be valid for 6 months from the date of
              travel)
            </li>
            <li className="flex items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2 bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1 rounded-full bg-white "></span>
              </span>
              Recent passport-sized photographs
            </li>
            <li className="flex items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2 bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1 rounded-full bg-white "></span>
              </span>
              Vaccination certificate
            </li>
            <li className="flex items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2 bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1 rounded-full bg-white "></span>
              </span>
              Copy of NID / Smart card
            </li>
            <li className="flex items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2 bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1 rounded-full bg-white "></span>
              </span>
              Birth certificate copy (for children)
            </li>
            <li className="flex items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2 bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1 rounded-full bg-white "></span>
              </span>
              Marriage certificate copy (for couples)
            </li>
          </ul>
          <div className="flex justify-center md:justify-start mt-5">
            <button className="max-w-[200px] px-6 py-3 bg-[#24aa86] text-white rounded-md shadow-lg hover:bg-[#27725e] transition">
              Apply For Visa
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center ">
          <img
            src={visaImg}
            alt="Visa"
            className="max-w-[300px] w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default UmrahVisaRequirements;
