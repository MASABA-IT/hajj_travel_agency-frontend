/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"; // Import useSelector from Redux
import FullPageLoader from "../../../share/FullPageLoader/FullPageLoader";

const ImgContent = ({ page, section }) => {
  const pageData = useSelector(
    (state) => state.page.pages.umrah[page][section]
  );

  if (!pageData) {
    return <FullPageLoader />;
  }
  return (
    <section
      className="w-full bg-cover py-14"
      style={{
        backgroundImage: `url(${pageData.bgImg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center bg-red-20 px-5 md:px-0">
        <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-start ">
          <img
            src={pageData.imgLink} // Fallback to rewards image if no imgLink in state
            alt="Visa"
            className="max-w-[400px]  w-full h-[400px]  object-contain"
          />
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h2 className="text-xl md:text-3xl text-[#727066] text-center md:text-left">
            {pageData.title}
          </h2>
          <p className="w-full md:w-3/4 mx-auto md:mx-0 text-center md:text-left">
            {pageData.description}
          </p>
          <ul className="list-inside pl-5 space-y-3">
            {pageData.list?.map((item, index) => (
              <li key={index} className="flex items-center space-x-3 ">
                <span className="flex justify-center  items-center w-2 h-2 p-[2px] bg-white border-2 border-[#5a584f] rounded-full"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center md:justify-start mt-5">
            <button className="min-w-[200px] px-6 py-3 bg-[#5a584f] text-white rounded-md shadow-lg hover:bg-[#3f3e38] transition">
              {pageData.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImgContent;
