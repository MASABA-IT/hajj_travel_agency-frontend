import HeroImg from "../../assets/imgs/umrahHeroSection.png";

const HajjHeroContent = () => {
  return (
    <section className=" max-w-[1400px] mx-auto h-auto ">
      <div
        className="w-[90%] md:w-full mx-auto bg-cover h-[400px] rounded-sm"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(30, 141, 121, 0.4), rgba(0, 0, 0, 0.2)), url(${HeroImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",

          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      <div className="w-[90%] md:w-full mx-auto flex flex-col justify-center items-center    py-14">
        <h2 className="text-xl md:text-2xl text-center text-[#24aa86]">
          Hajj pre-registration 2025 process from Dhaka, Bangladesh
        </h2>
        <div className="w-[70%] mx-auto text-center">
          <p> Pre-registration for the Hajj in 2024 is already complete. </p>
          <p>
            Register for Hajj 2025 right away to be the first to receive all the
            information you need! The order of reservations for all Hajj 2025
            packages is first come, first served.
          </p>
          <p>
            We are still pre-registering pilgrims for the Hajj in 2025.
            Please complete the form to request a price quote for the possible
            best Hajj packages in 2025.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HajjHeroContent;
