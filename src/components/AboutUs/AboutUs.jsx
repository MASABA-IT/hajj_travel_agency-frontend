import bgCaliography from "../../assets/imgs/Caliography.png";
import leftImg from "../../assets/imgs/imageleft.png";
import rightImg from "../../assets/imgs/imageright.png";
import bottomImg from "../../assets/imgs/imagebottom.png";

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
        <div className="relative w-full h-full">
          <img
            src={leftImg}
            alt="Left Top Image"
            className="absolute top-10 left-[35%] transform scale-90 w-[300px] h-[300px] object-cover rounded-lg shadow-2xl z-30 hover:z-50 hover:border-[10px] hover:border-[#24aa86] hover:scale-100 transition-all duration-200"
          />
          <img
            src={rightImg}
            alt="Right Top Image"
            className="absolute right-0 top-[25%] w-[300px] h-[300px] object-cover rounded-lg shadow-2xl z-20 hover:z-50 transform scale-90 hover:border-[10px] hover:border-[#24aa86] hover:scale-100 transition-all duration-200"
          />
          <img
            src={bottomImg}
            alt="Bottom Image"
            className="absolute left-[30%] bottom-5 w-[300px] h-[300px] object-cover rounded-lg shadow-2xl z-10 hover:z-50 transform scale-90 hover:border-[10px] hover:border-[#24aa86] hover:scale-100 transition-all duration-200"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center py-8 text-black ml-10">
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
            className="w-[150px] h-[50px] text-base font-medium border-2 border-transparent rounded-md bg-transparent text-[#24aa86] hover:text-[#28816a] hover:border-[#24aa86] transform transition-all duration-200 hover:translate-y-[-3px] focus:outline-none focus:ring-2 focus:ring-[#24aa86] focus:ring-offset-2"
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
