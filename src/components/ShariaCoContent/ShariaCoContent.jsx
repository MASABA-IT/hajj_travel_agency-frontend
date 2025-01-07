import client1 from "../../assets/imgs/aliAkbar.png";
import client2 from "../../assets/imgs/AshikHasan.png";
import client3 from "../../assets/imgs/RatulIslam.png";
import client4 from "../../assets/imgs/ShamimRahman.png";
import client5 from "../../assets/imgs/aliAkbar.png";
import client6 from "../../assets/imgs/AshikHasan.png";
import client7 from "../../assets/imgs/aliAkbar.png";
import client8 from "../../assets/imgs/AshikHasan.png";

const consultants = [
  { id: 1, name: "Ali Akbar Hossain", image: client1 },
  { id: 2, name: "Ashik Hasan", image: client2 },
  { id: 3, name: "Ratul Islam", image: client3 },
  { id: 4, name: "Shamim Rahman", image: client4 },
  { id: 5, name: "Ali Akbar Hossain", image: client5 },
  { id: 6, name: "Rushdi Hasan", image: client6 },
  { id: 7, name: "Ali Akbar Hossain", image: client7 },
  { id: 8, name: "Ashik Hasan", image: client8 },
];

const ShariaCoContent = () => {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-[1400px] mx-auto  flex flex-col   justify-between items-center gap-4">
        <div className="flex flex-col justify-center items-center space-y-5 py-10">
          <div className="w-[85%] mx-auto  text-center space-y-2 text-gray-700">
            <h2 className="text-xl md:text-2xl text-center text-[#24aa86]">
              Significance and Virtues of Umrah in Muslim Life
            </h2>
            <p>
              We understand the significance of embarking on this sacred journey
              and the importance of observing religious obligations throughout.
              Our consultant will provide comprehensive assistance, guiding you
              every step of the way, from pre-departure preparations to rituals
              and spiritual practices during Hajj and Umrah. With their
              extensive expertise and deep understanding of Islamic traditions,
              our Sharia consultant will help you attain a truly transformative
              and spiritually enriching experience.
            </p>
          </div>
          <div className="w-[85%] mx-auto text-center space-y-2 text-gray-700">
            <h2 className="text-xl md:text-2xl text-center text-[#24aa86]">
              Enlisted Member of Shariah Committee
            </h2>
            <p>
              It's our great honor that, we have enlisted some of the most
              diversified and knowledgeable Shariah experts in our Shariah
              Committee who are maintaining and guiding us in Islamic law,
              jurisprudence, and theology. They have a deep understanding of the
              Quran, Hadith, and other Islamic legal sources, as well as
              relevant expertise in finance or law.
            </p>
            <p>
              Such guidance is invaluable in upholding the spiritual
              significance of Umrah, making it a deeply fulfilling and
              spiritually uplifting experience for the pilgrims.
            </p>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 place-items-center gap-6">
          {consultants.map((consultant) => (
            <div
              key={consultant.id}
              className="relative text-center group overflow-hidden hover:cursor-pointer"
            >
              <div className="relative">
                <img
                  src={consultant.image}
                  alt={consultant.name}
                  className="md:w-60  aspect-square mx-auto rounded-md  transition-all transform group-hover:opacity-50 group-hover:scale-110 "
                />
              </div>
              <p
                className="absolute left-0 right-0 bottom-0  translate-y-10 group-hover:translate-y-0 transition-all duration-300 p-2 text-white opacity-0 group-hover:opacity-100 font-bold group-hover:text-gray-50 block text-sm"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(44, 38, 44, 0.5), rgba(144, 238, 144, 0.9))",
                  textShadow: "0 1px 4px #333",
                }}
              >
                {consultant.name} <span className="inline-block">&rarr;</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShariaCoContent;