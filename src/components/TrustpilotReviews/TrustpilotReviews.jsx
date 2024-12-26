import user1 from "../../assets/imgs/aliAkbar.png";
import user2 from "../../assets/imgs/AshikHasan.png";
import user3 from "../../assets/imgs/RatulIslam.png";
import user4 from "../../assets/imgs/ShamimRahman.png";
import user5 from "../../assets/imgs/aliAkbar.png";
import user6 from "../../assets/imgs/AshikHasan.png";
import user7 from "../../assets/imgs/RatulIslam.png";
import user8 from "../../assets/imgs/ShamimRahman.png";
import user9 from "../../assets/imgs/aliAkbar.png";
import user10 from "../../assets/imgs/AshikHasan.png";
import user11 from "../../assets/imgs/RatulIslam.png";
import user12 from "../../assets/imgs/ShamimRahman.png";

const TrustpilotReviews = () => {
  const userData = [
    {
      id: 1,
      img: user1,
      name: "Ashik Ahmed",
      review:
        "This is an amazing product. It exceeded my expectations in terms of quality and performance. Highly recommended for anyone looking for something reliable and long-lasting.",
      rating: 5,
    },
    {
      id: 2,
      img: user2,
      name: "Rushdi Ahmed",
      review:
        "The service was great, but the product itself didn’t quite meet my expectations. It works fine, but it could use some improvements in the design and usability.",
      rating: 3,
    },
    {
      id: 3,
      img: user3,
      name: "Ashraful Islam",
      review:
        "I absolutely love this item. It’s exactly what I was looking for. The quality is top-notch, and it works flawlessly. Will definitely purchase again if needed!",
      rating: 1,
    },
    {
      id: 4,
      img: user4,
      name: "Ismaile Hossain",
      review:
        "The product did not meet my expectations. It’s okay for basic use, but I wouldn’t recommend it for anything more serious. The build quality is lacking.",
      rating: 2,
    },
    {
      id: 5,
      img: user5,
      name: "Shamim Hossain",
      review:
        "Good quality for the price. While it’s not the best out there, it does its job well. Perfect for those on a budget who need something functional.",
      rating: 4,
    },
    {
      id: 6,
      img: user6,
      name: "Hamim Ahmed",
      review:
        "Fantastic service! The product arrived on time, and the quality was exceptional. It’s definitely worth the price, and I’m very satisfied with my purchase.",
      rating: 5,
    },
    {
      id: 7,
      img: user7,
      name: "Sakib Hussain",
      review:
        "It’s decent, but I expected more. The product is functional but feels cheap, and there are some usability issues. Not bad for casual use, but I wouldn’t rely on it long-term.",
      rating: 3,
    },
    {
      id: 8,
      img: user8,
      name: "Ratul Islam",
      review:
        "One of the best products I’ve bought in a while. It’s efficient, well-made, and delivers great performance. I’ve had no issues so far, and it’s truly a game-changer.",
      rating: 5,
    },
    {
      id: 9,
      img: user9,
      name: "User",
      review:
        "It didn’t meet my expectations at all. While the concept is good, the execution was poor. The product feels fragile and didn’t perform as advertised.",
      rating: 2,
    },
    {
      id: 10,
      img: user10,
      name: "User",
      review:
        "Good for everyday use. The build quality is solid, and it performs as expected. Not groundbreaking, but a reliable option for the price.",
      rating: 4,
    },
    {
      id: 11,
      img: user11,
      name: "User",
      review:
        "This is a game-changer! I’ve been using it for a while now, and it’s been a fantastic experience. The quality, design, and performance are outstanding.",
      rating: 5,
    },
    {
      id: 12,
      img: user12,
      name: "User",
      review:
        "It’s an okay product. It works well for the most part, but I feel like there are better alternatives out there for the price. It’s just not perfect.",
      rating: 3,
    },
  ];

  return (
    <section className="w-full   py-14 bg-slate-50">
      <div className="max-w-[1400px] mx-auto flex justify-center items-center flex-col space-y-10">
        <h2 className="text-xl md:text-3xl font-bold text-zinc-700">
          Import Your Trustpilot Reviews Now!
        </h2>
        <p>
          Easily collect and share testimonials, simplify feedback, and speed up
          your success.{" "}
        </p>
        <div className="flex justify-center items-center gap-4">
          <button className="max-w-[200px] text-zinc-100 px-4 py-2 md:px-6 md:py-3 bg-[#24aa86] text-sm md:text-lg rounded-md shadow-lg hover:bg-[#27725e] transition">
            Get all Reviews
          </button>
          <button className="max-w-[200px] text-zinc-100 px-4 py-2 md:px-6 md:py-3 bg-[#24aa86] text-sm md:text-lg rounded-md shadow-lg hover:bg-gray-50 transition-all border hover:border-[#24aa86] hover:text-zinc-800   duration-75">
            Explore
          </button>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {userData.map((user, index) => (
            <div
              key={user?.id}
              className="w-[90%] md:w-full mx-auto bg-gray-50 p-4 flex justify-center items-center border-r-[2.5px] border-gray-400 transition-shadow duration-200"
            >
              <div className="w-full grid gri d-cols-5 grid-rows-[auto,auto,auto,auto]">
                <div className="col-span-1 row-span-2 flex items-center justify-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.img}
                    alt="user img"
                  />
                </div>

                <p className="col-start-2 col-span-4 row-span-1 font-bold">
                  {user?.name}
                </p>

                <div className="col-start-2 col-span-4 row-span-1 flex gap-3">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`h-[22px] w-[18px] px-[2px] rounded-md text-4xl ${
                        user?.rating === 1 && index === 0
                          ? "bg-red-500 text-white"
                          : user?.rating >= 1
                          ? index < user?.rating
                            ? "bg-[#24aa86] text-white"
                            : "bg-gray-300 text-gray-500"
                          : "bg-gray-300 text-gray-500"
                      }`}
                    >
                      *
                    </span>
                  ))}
                </div>

                <p className="text-sm col-span-5 row-span-1">
                  &ldquo;{user?.review}&rdquo;
                </p>
              </div>
            </div>
          ))}

          {/* Full-width border for the end of rows */}
        </div>
      </div>
    </section>
  );
};

export default TrustpilotReviews;
