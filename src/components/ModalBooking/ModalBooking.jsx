/* eslint-disable react/prop-types */
const ModalBooking = ({
  closeModal,
  bookingData,
  handleModalInputChange,
  handleModalSubmit,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-[800px]">
        <h2 className="text-xl font-semibold mb-4">Confirm Booking</h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              name="full_name"
              value={bookingData.name}
              onChange={handleModalInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={bookingData.email}
              onChange={handleModalInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold">Phone</label>
            <input
              type="number"
              name="phone_number"
              value={bookingData.phone}
              onChange={handleModalInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold">Note</label>
            <textarea
              type="textarea"
              name="note"
              value={bookingData.note}
              onChange={handleModalInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter any additional notes"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white py-2 px-4 rounded-md"
            >
              Close
            </button>
            <button
              type="button"
              className="bg-[#24aa86] text-white py-2 px-4 rounded-md"
              onClick={handleModalSubmit}
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalBooking;
