import caliography from "../../assets/imgs/Caliography.png";
import benefitFive from "../../assets/imgs/benefitFive.png";

const BenefitContentFive = () => {
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
            Health benefits of Umrah
          </h2>

          <ul className="list-inside pl-5 space-y-3">
            <li className="flex  items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2 p-[2px]  bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1   rounded-full bg-white "></span>
              </span>
              Physical activity: The performance of Umrah involves walking,
              standing, and physical exertion, which can contribute to improved
              cardiovascular health and overall fitness.
            </li>
            <li className="flex items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2  p-[2px] bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1   rounded-full bg-white "></span>
              </span>
              Mental well-being: The spiritual nature of Umrah, coupled with the
              peaceful surroundings, can positively impact mental health,
              reducing stress and promoting relaxation.
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
            src={benefitFive}
            alt="Visa"
            className="max-w-[300px] w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitContentFive;
