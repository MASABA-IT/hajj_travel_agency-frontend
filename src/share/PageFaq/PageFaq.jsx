import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import caliography from "../../assets/imgs/Caliography.png";
import { fetchFaqData } from "../../store/slices/pageFaqDataSlice";

const PageFaq = ({ pageName }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const dispatch = useDispatch();

  const { faqData, loading, error } = useSelector((state) => state.faq);

  useEffect(() => {
    dispatch(fetchFaqData(pageName));
  }, [pageName, dispatch]);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="w-full bg-cover py-14"
      style={{
        backgroundImage: `url(${caliography})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1400px] mx-auto text-center">
        <h1 className="text-xl md:text-4xl text-[#24aa86] font-bold mb-8">
          Page FAQ
        </h1>
        <div className="w-full md:w-[70%] mx-auto px-4">
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && faqData.length === 0 && (
            <p>No FAQ available for this page.</p>
          )}
          {!loading &&
            !error &&
            faqData.length > 0 &&
            faqData.map((item, index) => (
              <div key={index} className="mb-4">
                <div
                  onClick={() => toggleAnswer(index)}
                  className={`cursor-pointer py-3 px-4 text-gray-800 rounded-md shadow-sm hover:bg-[#27725e] hover:text-white transition duration-300 flex justify-between items-center ${
                    activeIndex === index
                      ? "bg-[#24aa86] text-white"
                      : "bg-white"
                  }`}
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <span className="text-lg">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>

                {activeIndex === index && (
                  <div
                    className="transition-all duration-500 ease-in-out overflow-hidden mt-2"
                    style={{
                      width: activeIndex === index ? "100%" : "0",
                      paddingTop: "1rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    <p className="text-sm text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PageFaq;
