import img from "../../assets/imgs/emailImg.png";
const SendEmail = () => {
  return (
    <section className="w-full h-auto py-14">
      <div className="max-w-[1400px] mx-auto  ">
        <div className="w-[90%] md:w-full mx-auto grid grid-cols-1 md:grid-cols-2  ">
          {/* Left Side: Image */}
          <div className="flex  ">
            <img src={img} alt="Contact Us" className="rounded-lg shadow-lg" />
          </div>

          {/* Right Side: Form */}
          <div>
            <p className="text-base font-bold   mb-4 text-gray-600">
              Get in Touch
            </p>
            <h2 className=" mb-6 text-3xl md:text-5xl text-[#24aa86]">
              Send Us a Message
              <br />
            </h2>
            <p className="">
              {" "}
              Umrah experience designed to meet your unique needs and
              expectations. So Give Us a Message to Make Different Experience!
            </p>
            <form className="grid grid-cols-1 gap-4 mt-5">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>
              <input
                type="email"
                placeholder="E-mail Address"
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="p-2 border border-gray-300 rounded-md"
              />
              <textarea
                placeholder="Add Your Comment"
                className="p-2 border border-gray-300 rounded-md"
                rows="4"
              />
              <button
                type="text"
                className="bg-[#24aa86] text-white py-2 px-4 rounded-md hover:bg-[#247e66] transition-colors duration-200"
              >
                Submit Your Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendEmail;
