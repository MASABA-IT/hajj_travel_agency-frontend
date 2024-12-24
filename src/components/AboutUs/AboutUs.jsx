import bgCaliography from "../../assets/imgs/Caliography.png";
import leftImg from "../../assets/imgs/imageleft.png";
import rightImg from "../../assets/imgs/imageright.png";
import bottomImg from "../../assets/imgs/imagebottom.png";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <section
      className="w-full bg-cover py-14"
      style={{
        backgroundImage: `url(${bgCaliography})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1400px] min-h-[600px] mx-auto grid grid-cols-1 md:grid-cols-2 py-10">
        {/* Left Side: Images */}
        <div className=" relative w-full h-full parent">
          <img
            src={leftImg}
            alt="Left Top Image"
            className="absolute md:top-10 md:left-[30%] transform scale-90     object-cover rounded-lg shadow-2xl  hover:z-50  hover:scale-100 transition-all duration-200"
          />
          <img
            src={rightImg}
            alt="Right Top Image"
            className="absolute  md:-right-4  md:top-[20%]  object-cover rounded-lg shadow-2xl   hover:z-50 transform scale-90  hover:scale-100 transition-all duration-200"
          />
          <img
            src={bottomImg}
            alt="Bottom Image"
            className="absolute  md:left-[45%]  md:bottom-0  object-cover rounded-lg shadow-2xl  hover:z-50 transform scale-90  hover:scale-100 transition-all duration-200"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="  md:mt-0 flex flex-col justify-center py-8 text-black ml-10">
          <h2 className="text-xl mb-4 text-[#24aa86]">About Us</h2>
          <h4 className="text-4xl font-semibold mb-4 text-gray-700">
            We are the best <br />
            travel agency For Umrah & Hajj
          </h4>
          <p className="mb-6">
            We are the best travel agency for Umrah and Hajj, offering seamless,
            comfortable, and spiritually fulfilling journeys.
          </p>
          <p className="mb-6">
            With expert guidance, personalized packages, and reliable services,
            we ensure your sacred pilgrimage is stress-free and memorable.
          </p>
          <button
            className="w-[110px]  border-b-2 border-[#24aa86] hover:bg-[#24aa86] hover:text-white hover:-translate-y-[3px]  active:translate-y-[1px] duration-200 transition-all px-1"
            title="Read more about us"
          >
            Read More &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
