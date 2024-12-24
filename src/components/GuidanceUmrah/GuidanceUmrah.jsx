import hajjPreReg from "../../assets/imgs/hajjPreReg.png";

const GuidanceUmrah = () => {
  return (
    <section className="w-full   py-14">
      <div className="max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center bg-red-20 px-5 md:px-0">
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
            {/* Main UI: Introduction */}
            <li className="flex items-start space-x-3">
              <span className="flex justify-center items-center w-2 h-2 p-[2px] bg-white border-2 border-[#24aa86] rounded-full mt-1"></span>
              <span>
                Umrah is an act of worship performed by millions of Muslims
                every year. Following in the footsteps of Prophet Muhammad
                (PBUH), believers experience deep spiritual connections, seek
                Allah's blessings, and find opportunities for self-reflection
                and repentance.
              </span>
            </li>

            {/* Main UI: Umrah Customs Heading */}
            <li className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="flex justify-center items-center w-2 h-2 p-[2px] bg-white border-2 border-[#24aa86] rounded-full mt-1"></span>
                <span>Umrah has four (4) different customs:</span>
              </div>

              {/* Sub-UI: List of Umrah Customs */}
              <ul className="pl-8 list-inside space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="flex justify-center items-center w-2 h-2 p-[2px] bg-violet-400 border-2 border-[#24aa86] rounded-full mt-1"></span>
                  <span>Putting up of Ihram</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex justify-center items-center w-2 h-2 p-[2px] bg-violet-400 border-2 border-[#24aa86] rounded-full mt-1"></span>
                  <span>Tawaf</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex justify-center items-center w-2 h-2 p-[2px] bg-violet-400 border-2 border-[#24aa86] rounded-full mt-1"></span>
                  <span>Sa’yee</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex justify-center items-center w-2 h-2 p-[2px] bg-violet-400 border-2 border-[#24aa86] rounded-full mt-1"></span>
                  <span>Halq or Taqsir</span>
                </li>
              </ul>
            </li>
          </ul>

          <div className="flex justify-center md:justify-start mt-5">
            <button className="min-w-[200px] px-6 py-3 bg-[#24aa86] text-white rounded-md shadow-lg hover:bg-[#27725e] transition">
              Book For Next Umrah
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

export default GuidanceUmrah;
