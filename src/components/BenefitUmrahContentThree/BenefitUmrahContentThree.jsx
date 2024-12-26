import caliography from "../../assets/imgs/Caliography.png";
import hajjPreReg from "../../assets/imgs/hajjPreReg.png";

const BenefitUmrahContentThree = () => {
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
            Personal benefits of Umrah
          </h2>

          <ul className="list-inside pl-5 space-y-3">
            <li className="flex  items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2 p-[2px]  bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1   rounded-full bg-white "></span>
              </span>
              Inner peace and tranquillity: Umrah provides a special setting for
              introspection, self-reflection, and discovering inner calm amidst
              the holy sites of Makkah and Madinah.
            </li>
            <li className="flex items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2  p-[2px] bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1   rounded-full bg-white "></span>
              </span>
              Strengthened faith: People get a stronger sense of faith and a
              closer bond with Islam and its teachings as a result of
              participating in the numerous Umrah rites.
            </li>
            <li className="flex items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2  p-[2px] bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1   rounded-full bg-white "></span>
              </span>
              Enhanced self-discipline: The rigorous routines and adherence to
              rituals during Umrah cultivate self-discipline, which can be
              carried forward to other aspects of life.
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

export default BenefitUmrahContentThree;
