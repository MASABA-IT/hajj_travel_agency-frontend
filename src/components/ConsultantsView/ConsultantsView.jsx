import client1 from "../../assets/imgs/aliAkbar.png";
import client2 from "../../assets/imgs/AshikHasan.png";
import client3 from "../../assets/imgs/RatulIslam.png";
import client4 from "../../assets/imgs/ShamimRahman.png";
import client5 from "../../assets/imgs/aliAkbar.png";
import client6 from "../../assets/imgs/AshikHasan.png";

const consultants = [
  { id: 1, name: "Ali Akbar Hossain", image: client1 },
  { id: 2, name: "Ashik Hasan", image: client2 },
  { id: 3, name: "Ratul Islam", image: client3 },
  { id: 4, name: "Shamim Rahman", image: client4 },
  { id: 5, name: "Ali Akbar Hossain", image: client5 },
  { id: 6, name: "Ashik Hasan", image: client6 },
];

const ConsultantsView = () => {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-[1400px] mx-auto  flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex-1 flex flex-col items-center gap-2  md:items-start text-center md:text-start">
          <h1
            className="text-2xl  md:text-5xl font-bold text-[#24aa86] "
            style={{ textShadow: "0 2px 4px #d3be97" }}
          >
            Our distinguished Shariah consultants
          </h1>
          <p className="py-4">
            Our esteemed Shariah consultants, renowned for their expertise and
            integrity, provide invaluable guidance, ensuring adherence to
            Islamic principles in all endeavors, fostering trust, and upholding
            the highest standards of ethical and religious compliance.
          </p>
          <button className="max-w-[220px] text-zinc-100 px-4 py-2 md:px-6 md:py-3 bg-[#24aa86] text-sm md:text-lg rounded-md shadow-lg hover:bg-[#27725e] transition">
            View All Consultant
          </button>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 place-items-center gap-6">
          {consultants.map((consultant) => (
            <div
              key={consultant.id}
              className="relative text-center group overflow-hidden hover:cursor-pointer"
            >
              <div className="relative">
                <img
                  src={consultant.image}
                  alt={consultant.name}
                  className="w-40 h-40 aspect-square mx-auto rounded-md  transition-all transform group-hover:opacity-50 group-hover:scale-110 "
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

export default ConsultantsView;
