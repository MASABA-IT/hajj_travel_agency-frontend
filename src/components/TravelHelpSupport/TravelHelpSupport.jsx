import bg from "../../assets/imgs/helpSupportBg.png";
const TravelHelpSupport = () => {
  const locationSupportData = [
    { name: "Dhaka", supportType: "Main Hub for Hajj and Umrah Services" },
    { name: "Comilla", supportType: "Hajj Registration and Travel Assistance" },
    { name: "Feni", supportType: "Regional Hajj Office and Travel Support" },
    {
      name: "India",
      supportType: "Hajj and Umrah Coordination for Bangladeshi Pilgrims",
    },
    { name: "Bangladesh", supportType: "National Hajj and Umrah Support" },
    { name: "Turkey", supportType: "Hajj and Umrah Services for Bangladeshis" },
    {
      name: "Syria",
      supportType: "Hajj Visa Assistance and Travel Coordination",
    },
    { name: "Malaysia", supportType: "Hajj and Umrah Travel Assistance" },
    {
      name: "Singapore",
      supportType: "Travel and Visa Support for Hajj Pilgrims",
    },
    {
      name: "London",
      supportType: "Hajj Support and Travel Coordination for UK-based Pilgrims",
    },
    { name: "Italy", supportType: "Hajj Visa Processing and Support Services" },
    { name: "Rangpur", supportType: "Local Hajj Services and Guidance" },
    { name: "Dinajpur", supportType: "Hajj Registration and Travel Support" },
  ];

  return (
    <section
      className="w-full min-h-[450px] bg-no-repeat bg-cover py-14 flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(144, 238, 144, 0.3), rgba(144, 238, 144, 0.8)), url(${bg})`,
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-4 ">
        <p className="text-sm md:text-xl">Our Travel Support Area</p>
        <h1
          className="text-3xl md:text-5xl font-bold py-4 text-[#24aa86] "
          style={{ textShadow: "0px 2px 3px #fff" }}
        >
          We can help you at...
        </h1>
        <ul className="flex justify-center gap-4 md:gap-10 flex-wrap">
          {locationSupportData.map((support, i) => (
            <li
              key={i}
              className="text-sm md:text-xl px-4 py-2 bg-green-800 text-white rounded-full"
            >
              {support?.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TravelHelpSupport;
