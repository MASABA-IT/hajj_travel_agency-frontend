import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFaqs } from "../../redux/faqSlice";  // Import the selector
import caliography from "../../assets/imgs/Caliography.png";

const OurFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = useSelector(selectFaqs);   

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
          Our FAQ
        </h1>
        <div className="w-full md:w-[70%] mx-auto px-4">
          {faqs.map((item, index) => (
            <div key={index} className="mb-6">
              <div
                onClick={() => toggleAnswer(index)}
                className={`cursor-pointer py-3 px-4 text-gray-800 rounded-md shadow-sm hover:bg-[#27725e] hover:text-white transition duration-300 flex justify-between items-center ${
                  activeIndex === index ? "bg-[#24aa86] text-white" : "bg-white"
                }`}
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <span className="text-lg">{activeIndex === index ? "-" : "+"}</span>
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

export default OurFaq;
