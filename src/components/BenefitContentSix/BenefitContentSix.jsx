import caliography from "../../assets/imgs/Caliography.png";
import rewards from "../../assets/imgs/rewards.png";

const BenefitContentSix = () => {
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
            src={rewards}
            alt="Visa"
            className="max-w-[300px] w-full h-auto object-contain"
          />
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h2 className="text-xl md:text-3xl text-[#727066] text-center md:text-left">
            Umrah: Journey of Spiritual Healing
          </h2>
          <p className="w-full md:w-3/4 mx-auto md:mx-0 text-center md:text-left">
            Embarking on the sacred pilgrimage of Umrah offers a multitude of
            rewards and blessings that touch the heart, purify the soul, and
            strengthen one's connection with Allah.
          </p>
          <ul className="list-inside pl-5 space-y-3">
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#5a584f] rounded-full"></span>
              <span>
                Drawing closer to Allah: Umrah fosters a deep connection with
                Allah, allowing individuals to seek His forgiveness and
                blessings.
              </span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#5a584f] rounded-full"></span>
              <span>
                Increased spirituality: The rituals of Umrah, like wearing Ihram
                and performing Tawaf, inspire spiritual growth and renewal.
              </span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#5a584f] rounded-full"></span>
              <span>
                Forgiveness of sins: Sincere Umrah leads to the expiation of
                past sins, offering a fresh start.
              </span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#5a584f] rounded-full"></span>
              <span>
                Hadith: The Prophet (PBUH) said, “Umrah is an expiation for sins
                committed between it and the previous one, and Hajj Mabrur’s
                reward is Paradise.” (Sahih Al-Bukhari)
              </span>
            </li>
          </ul>
          <div className="flex justify-center md:justify-start mt-5">
            <button className="min-w-[200px] px-6 py-3 bg-[#5a584f] text-white rounded-md shadow-lg hover:bg-[#3f3e38] transition">
              Talk To Our Consultant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitContentSix;
