import hajjPreReg from "../../assets/imgs/hajjPreReg.png";
const GuidanceSteps = () => {
  return (
    <section className="w-full   py-14">
      <div className="max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center bg-red-20 px-5 md:px-0">
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h2 className="text-xl md:text-3xl text-[#24aa86] text-center md:text-left">
            The rites of Umrah: A profound spiritual journey
          </h2>
          <p className="w-full md:w-3/4 mx-auto md:mx-0 text-center md:text-left">
            The rites of Umrah offer a unique opportunity for self-reflection,
            devotion, and a renewed connection with the divine, making this
            journey an unforgettable and life-changing experience.
          </p>
          <ul className="list-inside pl-5 space-y-3">
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#24aa86] rounded-full"></span>
              <span>Tawaf: Circumambulation of the Kaaba </span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#24aa86] rounded-full"></span>
              <span>
                Upon reaching the Masjid al-Haram in Mecca, pilgrims perform
                Tawaf, which involves walking seven times around the Kaaba in a
                counterclockwise direction. This ritual represents the
                commitment to Allah and the solidarity of Muslims.
              </span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#24aa86] rounded-full"></span>
              <span>Sa’yee: Walking between Safa and Marwah</span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#24aa86] rounded-full"></span>
              <span>
                After Tawaf, pilgrims perform Sai, walking seven times between
                the hills of Safa and Marwah. This commemorates the actions of
                Hajar, the wife of Prophet Ibrahim (peace be upon them), who
                searched for water for her son Ismail in the exact location.
              </span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#24aa86] rounded-full"></span>
              <span>Halq or Taqsir </span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#24aa86] rounded-full"></span>
              <span>
                Halaq refers to the act of shaving or trimming the hair after
                completing the Hajj pilgrimage, a mandatory religious duty for
                Muslims who are physically and financially able to undertake it.
                For those, who choose not to shave their heads completely,
                trimming a portion of the hair is also acceptable.{" "}
              </span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#24aa86] rounded-full"></span>
              <span>Prayers and supplications </span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#24aa86] rounded-full"></span>
              <span>
                Throughout the Umrah journey, prayers and supplications hold
                great significance. Pilgrims are encouraged to spend time in
                reflection, asking for forgiveness, and making sincere prayers
                for themselves, their families, and the entire Muslim community.
              </span>
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

export default GuidanceSteps;
