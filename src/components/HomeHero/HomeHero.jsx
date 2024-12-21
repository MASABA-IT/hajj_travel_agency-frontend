import { IoMdArrowDroprightCircle } from "react-icons/io";
import hero from "../../assets/imgs/Hero.png";
const HomeHero = () => {
  return (
    <div
      className="flex flex-col w-full pt-[10vh]  min-h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="h-[50vh] max-w-[1400px] mx-auto  py-14 px-6 md:px-12 text-white">
        <section className="w-1/2 flex flex-col gap-10 ">
          <h2 className="text-4xl md:text-6xl font-bold leading-snug">
            Hajj And Umrah <br />
            Tours Redefined!
          </h2>
          <p className="text-md md:text-lg">
            Transform your pilgrimage with our redefined Hajj and Umrah tours,
            offering personalized services, comfort, and spiritual fulfillment
            for a meaningful and unforgettable holy journey.
          </p>
          <div className="flex justify-start items-center gap-3">
            <button className="px-6 py-3 bg-[#24aa86] text-lg md:text-xl rounded-md shadow-lg hover:bg-[#27725e]  transition">
              Explore Package
            </button>
            <span className="w-12 h-12 rounded-full flex justify-center items-center bg-[#24aa86] hover:bg-[#27725e] shadow-lg">
              <IoMdArrowDroprightCircle className="text-3xl text-white" />
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeHero;
