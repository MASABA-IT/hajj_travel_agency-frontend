import img from "../../assets/imgs/emailImg.png";
const AppointmentForm = () => {
  return (
    <section className="w-full h-auto py-14">
      <div className="max-w-[1400px] mx-auto">
        <div className="w-[90%] md:w-full mx-auto grid grid-cols-1 md:grid-cols-2">
          {/* Left Side: Image */}
          <div className="flex">
            <img src={img} alt="Contact Us" className="rounded-lg shadow-lg" />
          </div>

          {/* Right Side: Form */}
          <div>
            <p className="text-base font-bold mb-4 text-gray-600">
              Fill The Box
            </p>
            <h2 className="mb-6 text-3xl md:text-5xl text-[#24aa86]">
              Send Us Your Info for Contact With You
              <br />
            </h2>
            <p>
              Umrah experience designed to meet your unique needs and
              expectations. So Give Us a Message to Make Different Experience !
            </p>
            <form className="grid grid-cols-1 gap-4 mt-5">
              <div className="grid grid-cols-1">
                <label htmlFor="group" className="font-semibold text-gray-700">
                  Select Kafela Name
                </label>
                <select
                  id="group"
                  className="p-2 border border-gray-300 rounded-md focus:border-[#24aa86] focus:outline-none"
                >
                  <option value="">Select a Group</option>
                  <option value="group1">Group 1</option>
                  <option value="group2">Group 2</option>
                  <option value="group3">Group 3</option>
                  <option value="group4">Group 4</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-2 border border-gray-300 rounded-md focus:border-[#24aa86] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-2 border border-gray-300 rounded-md focus:border-[#24aa86] focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="E-mail Address"
                className="p-2 border border-gray-300 rounded-md focus:border-[#24aa86] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="p-2 border border-gray-300 rounded-md focus:border-[#24aa86] focus:outline-none"
              />
              <textarea
                placeholder="Add Your Comment"
                className="p-2 border border-gray-300 rounded-md focus:border-[#24aa86] focus:outline-none"
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

export default AppointmentForm;
