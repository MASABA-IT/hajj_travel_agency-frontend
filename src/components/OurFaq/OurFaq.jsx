import { useState } from "react";
import caliography from "../../assets/imgs/Caliography.png";

const OurFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAndAnswers = [
    {
      question: "What is the difference between Hajj and Umrah?",
      answer:
        "Hajj is a mandatory pilgrimage for Muslims performed during specific dates in Dhul-Hijjah, while Umrah can be performed any time of the year.",
    },
    {
      question: "What services does your agency provide for Hajj and Umrah?",
      answer:
        "We offer a range of services including visa processing, travel arrangements, accommodation booking, guided tours, and more to ensure a smooth pilgrimage experience.",
    },
    {
      question: "What documents are required for a Hajj or Umrah visa?",
      answer:
        "Typically, you'll need a passport, passport-size photos, a completed visa application form, and proof of your travel booking. Specific requirements may vary.",
    },
    {
      question: "How long does it take to process the Hajj or Umrah visa?",
      answer:
        "Visa processing usually takes around 7-10 business days, but it may vary depending on the country and time of year.",
    },
    {
      question: "Can you arrange group packages or private accommodations?",
      answer:
        "Yes, we offer both group packages and private accommodations. You can choose based on your preferences and budget.",
    },
  ];

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
          {questionsAndAnswers.map((item, index) => (
            <div key={index} className="mb-4">
              <div
                onClick={() => toggleAnswer(index)}
                className={` cursor-pointer py-3 px-4   text-gray-800 rounded-md shadow-sm hover:bg-[#27725e] hover:text-white transition duration-300 flex justify-between items-center ${
                  activeIndex === index ? "bg-[#24aa86] text-white" : "bg-white"
                } `}
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

export default OurFaq;
