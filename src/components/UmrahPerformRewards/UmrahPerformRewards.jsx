import caliography from "../../assets/imgs/Caliography.png";
import rewards from "../../assets/imgs/rewards.png";

const UmrahPerformRewards = () => {
  return (
    <section
      className="w-full bg-cover py-14"
      style={{
        backgroundImage: `url(${caliography})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col  md:flex-row justify-between items-center bg-red-20 px-5 md:px-0  ">
        <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-start ">
          <img
            src={rewards}
            alt="Visa"
            className="max-w-[400px]  w-full h-[400px]  object-contain"
          />
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h2 className="text-xl md:text-3xl text-[#24aa86] text-center md:text-left">
            Rewards of performing Umrah: A spiritual journey that may change
            your eternal life
          </h2>
          <p className="w-full md:w-3/4 mx-auto md:mx-0 text-center md:text-left">
            Embarking on the sacred pilgrimage of Umrah offers a multitude of
            rewards and blessings that touch the heart, purify the soul, and
            strengthen one&apos;s connection with Allah.
          </p>
          <ul className="list-inside pl-5 space-y-3">
            <li className="flex items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2 bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1 rounded-full bg-white "></span>
              </span>
              Nearness to Allah
            </li>
            <li className="flex items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2 bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1 rounded-full bg-white "></span>
              </span>
              Deduction of poverty
            </li>
            <li className="flex items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2 bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1 rounded-full bg-white "></span>
              </span>
              Nearness to Allah
            </li>
            <li className="flex items-center">
              <span className="flex justify-center items-center shadow-lg w-2 h-2 bg-[#24aa86] rounded-full mr-3 ">
                <span className="w-1 h-1 rounded-full bg-white "></span>
              </span>
              Deduction of poverty
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
      </div>
    </section>
  );
};

export default UmrahPerformRewards;
