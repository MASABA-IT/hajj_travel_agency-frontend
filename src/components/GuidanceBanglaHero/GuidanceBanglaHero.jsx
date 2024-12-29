import HeroImg from "../../assets/imgs/umrahHeroSection.png";

const GuidanceBanglaHero = () => {
  return (
    <div className=" max-w-[1400px] mx-auto h-auto ">
      <div
        className="w-[90%] md:w-full mx-auto bg-cover h-[400px] rounded-sm"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(30, 141, 121, 0.4), rgba(0, 0, 0, 0.2)), url(${HeroImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",

          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        }}
      ></div>

      <div className="w-[90%] md:w-full mx-auto flex flex-col justify-center items-center gap-4   py-14">
        <p>আধ্যাত্মিক পূর্ণতার যাত্রা</p>
        <h2 className="text-xl md:text-2xl text-center text-[#24aa86]">
          ওমরাহ গাইডলাইন । কিভাবে ওমরাহ করবেন?
        </h2>
        <div className="w-[65%] mx-auto text-center   text-gray-700 space-y-5">
          <p>
            ওমরাহ একটি আধ্যাত্মিক যাত্রা। এটি একটি সুযোগ যা বিশ্বের ধর্মপ্রাণ
            মুসলমানদের একত্রিত করে একটি সুমহান ঐতিহ্য উদযাপনের উপলক্ষ তৈরি করে
            দেয়। ওমরাহ আল্লাহর নৈকট্য অর্জন এবং গুনাহ থেকে মুক্তি লাভের মাধ্যমে
            আত্নশুদ্ধির সুযোগ তৈরি করে। আমরা এখানে ওমরাহ পালনের নির্দেশিকা
            বিস্তারিত আলোচনা করব ।
          </p>
        </div>
        <button className="px-4 py-2 md:px-6 md:py-3 bg-[#24aa86] text-white text-sm md:text-lg rounded-md shadow-lg hover:bg-[#27725e] transition">
          Plan Your Umrah Trip
        </button>
      </div>
    </div>
  );
};

export default GuidanceBanglaHero;
