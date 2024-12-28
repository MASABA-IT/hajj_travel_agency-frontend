import umrahVisa from "../../assets/imgs/umrahVisa.png";

const UmrahVisaHero = () => {
  return (
    <div className=" max-w-[1400px] mx-auto h-auto ">
      <div
        className="w-[90%] md:w-full mx-auto bg-cover h-[400px] rounded-sm"
        style={{
          backgroundImage: `  url(${umrahVisa})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
        }}
      ></div>
    </div>
  );
};

export default UmrahVisaHero;
