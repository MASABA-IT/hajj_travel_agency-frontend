import { IoShieldCheckmark } from "react-icons/io5";
import bgImg from '../../assets/imgs/Caliography.png'
const SecurityAndSafetyInfo = () => {
  const safetyInfo = [
    {
      icon: <IoShieldCheckmark className="text-4xl text-[#24aa86]" />,
      title: "100% Safety Guaranteed",
      description:
        "We ensure your safety with top-notch services, including 24/7 support and guidance throughout your journey.",
    },
    {
      icon: <IoShieldCheckmark className="text-4xl text-[#24aa86]" />,
      title: "Comfortable Accommodations",
      description:
        "We provide comfortable and convenient accommodations to make your pilgrimage peaceful and relaxing.",
    },
    {
      icon: <IoShieldCheckmark className="text-4xl text-[#24aa86]" />,
      title: "Affordable Packages",
      description:
        "Our packages are designed to fit various budgets, ensuring you get the best value for your pilgrimage experience.",
    },
    {
      icon: <IoShieldCheckmark className="text-4xl text-[#24aa86]" />,
      title: "Expert Guides & Support",
      description:
        "We provide expert guidance and support during your pilgrimage, ensuring a smooth and spiritual journey.",
    },
  ];

  return (
    <div className="w-full   py-12 pt-44 px-6 md:px-12  bg-cover" style={{
            backgroundImage: `url(${bgImg})`,
            backgroundRepeat: "no-repeat",
          }}>
            <div className="max-w-[1400px] mx-auto  ">
                
      <h3 className="text-2xl md:text-4xl font-semibold text-center mb-8">
        We Will Give You 100% Security, Safety For Your Hajj and Umrah!
      </h3>
      <p className="text-center text-lg md:text-xl mb-10">
        We are dedicated to ensuring a seamless, comfortable, and affordable
        pilgrimage, combining professional expertise with unwavering commitment
        to your satisfaction and spiritual fulfillment.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {safetyInfo.map((info, index) => (
            <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center gap-4"
            >
            <div className="text-4xl">{info.icon}</div>
            <h2 className="text-xl md:text-2xl font-bold text-[#24aa86]">
              {info.title}
            </h2>
            <p className="text-sm md:text-base text-gray-600">
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
