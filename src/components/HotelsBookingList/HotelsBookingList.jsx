import { FaHotel } from "react-icons/fa";

const HotelsBookingList = () => {
  // Example data for the hotels
  const hotels = [
    { id: 1, name: "Hotel Luxe", place: "Paris", category: "5 Star" },
    { id: 2, name: "Ocean View", place: "Maldives", category: "4 Star" },
    { id: 3, name: "Mountain Retreat", place: "Alps", category: "3 Star" },
  ];

  return (
    <div className="w-full py-7  text-white">
      <div
        className="max-w-[1400px] mx-auto  py-7 rounded-sm"
        style={{
          background: `linear-gradient(to right, #24aa86, #30c39e, #1e8e7f, #0f7b61, #003e30, #000000)`,
        }}
      >
        <div
          className="w-[90%] md:w-[70%] mx-auto text-center md:text-3xl border-b text-[#f0c980]"
          style={{ textShadow: "0 2px 4px #777" }}
        >
          List of popular hotels in Makkah and Medina
        </div>

        <div className="min-h-[300px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Column 1: SL No */}
          <div className="flex flex-col justify-center items-center text-center w-full">
            <div className="font-bold border-b-2 border-b-white w-full max-w-[150px]  ">
              SL No
            </div>
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="border-b   w-full max-w-[150px] py-2"
              >
                {hotel.id}
              </div>
            ))}
          </div>

          {/* Column 2: Hotel Name */}
          <div className="flex flex-col justify-center items-center text-center w-full">
            <div className="font-bold border-b-2 border-b-white w-full max-w-[150px]">
              Hotel Name
            </div>
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="border-b  w-full max-w-[150px] py-2"
              >
                {hotel.name}
              </div>
            ))}
          </div>

          {/* Column 3: Place */}
          <div className="flex flex-col justify-center items-center text-center w-full">
            <div className="font-bold border-b-2 border-b-white w-full max-w-[150px]">
              Place
            </div>
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="border-b w-full max-w-[150px] py-2"
              >
                {hotel.place}
              </div>
            ))}
          </div>

          {/* Column 4: Category */}
          <div className="flex flex-col justify-center items-center text-center w-full">
            <div className="font-bold border-b-2 border-b-white w-full max-w-[150px]">
              Category
            </div>
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="border-b w-full max-w-[150px] py-2"
              >
                {hotel.category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsBookingList;
