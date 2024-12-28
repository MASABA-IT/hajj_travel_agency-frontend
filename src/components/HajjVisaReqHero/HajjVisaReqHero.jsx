import HeroImg from "../../assets/imgs/umrahHeroSection.png";

const HajjVisaReqHero = () => {
  return (
    <div className=" max-w-[1400px] mx-auto h-auto ">
      <div
        className="w-[90%] md:w-full mx-auto bg-cover h-[400px] rounded-sm"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(30, 141, 121, 0.4), rgba(0, 0, 0, 0.2)), url(${HeroImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",

          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      <div className="w-[90%] md:w-full mx-auto flex flex-col justify-center items-center gap-4   py-14">
        <h2 className="text-xl md:text-2xl text-center text-[#24aa86]">
          Hajj Visa Requirements
        </h2>
        <div className="w-[85%] mx-auto text-center space-y-2 text-gray-700">
          <p>
            To obtain a Hajj visa, you need a valid passport (with at least six
            months validity and two blank pages), recent passport-sized
            photographs, and a completed visa application form. Mandatory
            vaccination certificates for Meningitis (ACWY) and other recommended
            vaccines like influenza and COVID-19 are required. Women under 45
            traveling without a Mahram need a notarized No Objection Certificate
            and proof of relationship. Applicants must provide confirmed flight
            tickets, accommodation details, and proof of payment for Hajj
            services. Hajj visas are issued through licensed agents, and
            restrictions may apply, such as not having performed Hajj in the
            past five years (for some countries). Always check with your local
            Saudi Embassy or agent for updates.
          </p>
        </div>
         
      </div>
    </div>
  );
};

export default HajjVisaReqHero;
