import bgImg from "../../assets/imgs/Caliography.png";
import iconOne from "../../assets/icons/Vector.png";
import iconTwo from "../../assets/icons/Vector.png";
import iconThree from "../../assets/icons/Vector3.png";
import iconFour from "../../assets/icons/Vector4.png";
const SecurityAndSafetyInfo = () => {
  const safetyInfo = [
    {
      icon: iconOne,
      title: "Safe and Securely Umrah and Hajj Travel ",
      description:
        "Safe and secure Umrah and Hajj travel services, ensuring comfort, reliability, spiritual guidance, and a seamless pilgrimage experience.",
    },
    {
      icon: iconTwo,
      title: "We Will Give You 24/7 Hr Support to Help Your Trip",
      description:
        "We provide 24/7 support to ensure your trip is smooth, offering assistance, guidance, and solutions whenever you need them.",
    },
    {
      icon: iconThree,
      title: "Details and Discount For Your Hajj and Umrah!",
      description:
        "Discover exclusive details and discounts for your Hajj and Umrah journey, offering affordable, reliable, and spiritually enriching experiences.",
    },
    {
      icon: iconFour,
      title: "Official Registered Travel For Your Hajj and umrah",
      description:
        "Trust our officially registered travel services for your Hajj and Umrah, providing reliability, authenticity, and a seamless pilgrimage experience.",
    },
  ];

  return (
    <div
      className="w-full   py-12 pt-56 px-6 md:px-12  bg-cover "
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1400px] mx-auto  ">
        <h3 className="text-2xl md:text-4xl font-semibold text-center mb-8 text-[#24aa86]">
          We Will Give You 100% Security, Safety For Your Hajj and Umrah!
        </h3>
        <p className="text-center text-lg md:text-xl mb-10">
          We are dedicated to ensuring a seamless, comfortable, and affordable
          pilgrimage, combining professional expertise with unwavering
          commitment to your satisfaction and spiritual fulfillment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gray-500  p-6 rounded-lg shadow-lg text-center flex flex-col items-center gap-4"
            >
              <div className="text-4xl">
                <img src={info?.icon} alt="Icon" />
              </div>
              <h2 className="text-md md:text-xl font-bold text-white ">
                {info.title}
              </h2>
              <p className="text-sm md:text-base text-gray-50">
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityAndSafetyInfo;
