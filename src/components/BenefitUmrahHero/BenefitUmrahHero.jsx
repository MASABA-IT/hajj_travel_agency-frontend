import umrahBenefit from "../../assets/imgs/umrahBenefit.jpeg";

const BenefitUmrahHero = () => {
  return (
    <div className="max-w-[1400px]   mx-auto">
      <div
        className="w-[90%] md:w-full mx-auto   min-h-[400px] bg-cover rounded-sm"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(30, 141, 121, 0.4), rgba(0, 0, 0, 0.2)), url(${umrahBenefit})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "100% 100%",

          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      ></div>
    </div>
  );
};

export default BenefitUmrahHero;
