import { PiAirplaneTiltFill, PiHandbagFill } from "react-icons/pi";
import customers from "../../assets/icons/customer.png";
import consultants from "../../assets/icons/consultants.png";

const HajjUmraCounts = () => {
  // Dynamic data array
  const highlights = [
    {
      id: 1,
      icons: [
        {
          component: PiHandbagFill,
          position: "top-[20%] left-[20%]",
          shadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        },
        {
          component: PiAirplaneTiltFill,
          position: "top-[40%] left-[50%]",
          shadow: "3px 3px 6px rgba(0, 0, 0, 0.4)",
        },
      ],
      count: "420+",
      title: "Ziyara Tours",
      description: "provided in last 1 year",
    },
    {
      id: 2,
      icon: { src: customers, alt: "Customers Icon" },
      count: "400+",
      title: "Customers",
      description: "We served",
    },
    {
      id: 3,
      icon: {
        src: consultants,
        alt: "Consultants Icon",
      }, // Dynamic image path
      count: "20+",
      title: "Consultants",
      description: "Worldwide",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto h-auto py-14">
      <div className="w-[90%] md:w-full mx-auto">
        <h1 className="md:text-3xl text-center py-5 text-[#24aa86] font-bold">
          <span>Key Highlights:</span> <br />{" "}
          <span>Hijaz Hajj & Umrah Kafela</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-5">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-center items-center gap-10 text-center sm:text-left"
            >
              {/* Icon container */}
              <div className="w-[60px] h-[60px] bg-white shadow-md rounded-sm relative flex justify-center items-center mb-4 sm:mb-0">
                {item.icons
                  ? item.icons.map((icon, idx) => {
                      const IconComponent = icon.component;
                      return (
                        <IconComponent
                          key={idx}
                          className={`absolute text-2xl text-[#24aa86] ${icon.position}`}
                          style={{
                            filter: `drop-shadow(${icon.shadow})`,
                          }}
                        />
                      );
                    })
                  : item.icon && (
                      <img
                        className="w-6 h-6"
                        src={item.icon.src}
                        alt={item.icon.alt}
                      />
                    )}
              </div>

              {/* Text content */}
              <div>
                <p
                  className="text-[#24aa86] font-bold text-3xl"
                  style={{
                    textShadow: `0px 2px 3px rgba(14, 44, 55, 0.3)`,
                  }}
                >
                  {item.count}
                </p>
                <h4 className="font-bold text-xl text-zinc-600 border-b-2 border-b-stone-400 py-2">
                  {item.title}
                </h4>
                <p className="text-zinc-800">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HajjUmraCounts;
