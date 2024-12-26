import caliography from "../../assets/imgs/Caliography.png";
import rewards from "../../assets/imgs/rewards.png";

const BenefitContentFour = () => {
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
            Social benefits of Umrah
          </h2>

          <ul className="list-inside pl-5 space-y-3">
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#5a584f] rounded-full"></span>
              <span>
                Unity and solidarity: A spirit of solidarity, fraternity, and
                sisterhood among believers is fostered through the Umrah when
                Muslims from various backgrounds and cultures congregate in
                Makkah.
              </span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#5a584f] rounded-full"></span>
              <span>
                Cultural exchange: Interacting with other pilgrims from various
                nations provides a priceless chance to discover various
                cultures, traditions, and customs within the Muslim community.
              </span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#5a584f] rounded-full"></span>
              <span>
                Community bonding: Umrah provides a chance to strengthen
                relationships with family, friends, and fellow believers,
                fostering a sense of belonging and togetherness.
              </span>
            </li>
          </ul>
          <div className="flex justify-center md:justify-start mt-5">
            <button className="min-w-[200px] px-6 py-3 bg-[#5a584f] text-white rounded-md shadow-lg hover:bg-[#3f3e38] transition">
              Apply For Visa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitContentFour;
