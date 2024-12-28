import Vector from "../../assets/imgs/vectorTwo.png";

const HajjPackagePriceView = () => {
  return (
    <div
      className="w-full mx-auto h-[500px]   bg-[#24aa86]"
      style={{
        backgroundImage: ` url(${Vector})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="max-w-[1400px] h-full mx-auto flex justify-center items-center">
        <div className="  flex flex-col justify-center items-center gap-4  ">
          <h2 className="text-xl md:text-4xl text-center text-white">
            Hajj visa requirements from Bangladesh
          </h2>

          <p className="text-white text-center md:w-[80%] mx-auto">
            The journey of a lifetime, the Hajj pilgrimage, is a deeply
            spiritual and sacred event for Muslims around the world. If you are
            a Bangladeshi citizen planning to perform on this remarkable
            journey during the year 2025 / 2026, it's crucial to be
            well-informed about the Hajj visa requirements to ensure a smooth
            and meaningful pilgrimage. Contact us for your Hajj visa
            requirements and application.
          </p>

          <button className="min-w-[200px] px-6 py-3 font-bold bg-[#fff] text-[#24aa86] rounded-md shadow-lg hover:bg-[#f2f2f2] transition">
            View Price
          </button>
        </div>
      </div>
    </div>
  );
};

export default HajjPackagePriceView;
