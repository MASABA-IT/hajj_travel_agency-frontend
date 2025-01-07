import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import bg from "../../assets/imgs/helpSupportBg.png";
import { fetchLocationData } from "../../store/slices/locationSlice";

const TravelsArea = ({ pageName }) => {
  const dispatch = useDispatch();

  const { locationData, loading, error } = useSelector(
    (state) => state.location
  );

  useEffect(() => {
    dispatch(fetchLocationData(pageName));
  }, [pageName, dispatch]);

  console.log(locationData);

  return (
    <section
      className="w-full min-h-[450px] bg-no-repeat bg-cover py-14 flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(144, 238, 144, 0.3), rgba(144, 238, 144, 0.8)), url(${bg})`,
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-4">
        <p className="text-sm md:text-xl">Our Travel Support Area</p>
        <h1
          className="text-3xl md:text-5xl font-bold py-4 text-[#24aa86]"
          style={{ textShadow: "0px 2px 3px #fff" }}
        >
          We can help you at...
        </h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          <ul className="flex justify-center gap-4 md:gap-10 flex-wrap">
            {!loading &&
              !error &&
              locationData.length > 0 &&
              locationData?.map((support, i) => (
                <li
                  key={i}
                  className="text-sm md:text-xl px-4 py-2 bg-green-800 text-white rounded-full"
                  title={support?.supportType}
                >
                  {support?.name}
                </li>
              ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default TravelsArea;
