import caliography from "../../assets/imgs/Caliography.png";
import hajjPreReg from "../../assets/imgs/hajjPreReg.png";

const BenefitUmrahContent = () => {
  return (
    <section
      className="w-full bg-cover py-14 text-gray-600"
      style={{
        backgroundImage: `url(${caliography})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center bg-red-20 px-5 md:px-0">
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h2 className="text-xl md:text-3xl text-[#24aa86] text-center md:text-left">
            Benefits of Umrah: Spiritual rewards of Umrah pilgrimage
          </h2>
          <p className="w-full md:w-3/4 mx-auto md:mx-0 text-center md:text-left">
            As a Bangladeshi citizen, you will need to fulfill certain
            requirements to obtain a beautiful Umrah journey. Here are the key
            requirements:
          </p>
          <ul className="list-inside pl-5 space-y-3">
            <li className="flex  items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2 p-[2px]  bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1   rounded-full bg-white "></span>
              </span>
              The Prophet Muhammad (PBUH) regarded Umrah as the most uplifting
              Sunnah since it is a spiritual act of worship. Millions of
              pilgrims travel to Makkah to conduct Umrah every year as a
              spiritual journey.
            </li>
            <li className="flex items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2  p-[2px] bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1   rounded-full bg-white "></span>
              </span>
              The rewards and benefits of Umrah are given to those who execute
              this spiritual rite with sincere intention. Muslims pray to the
              merciful Allah for blessings and ask for pardon for their sins.
            </li>
          </ul>
          <div className="flex justify-center md:justify-start mt-5">
            <button className="min-w-[200px] px-6 py-3 bg-[#24aa86] text-white rounded-md shadow-lg hover:bg-[#27725e] transition">
              Apply For Visa
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center ">
          <img
            src={hajjPreReg}
            alt="Visa"
            className="max-w-[300px] w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitUmrahContent;
