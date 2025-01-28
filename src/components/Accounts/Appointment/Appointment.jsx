import { useState } from "react";
import { FaTrash, FaEye } from "react-icons/fa"; // Importing React Icons
import "./Appointment.css";

const appointments = [
  {
    id: 1,
    packageName: "Premium Package",
    submittedDate: "2025-01-15",
    status: "Pending",
    details: "View Details",
  },
  {
    id: 2,
    packageName: "Basic Package",
    submittedDate: "2025-01-18",
    status: "Confirmed",
    details: "View Details",
  },
  {
    id: 3,
    packageName: "Standard Package",
    submittedDate: "2025-01-22",
    status: "Cancelled",
    details: "View Details",
  },
];

const Appointment = () => {
  const [appointmentsList, setAppointmentsList] = useState(appointments);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleDelete = (id) => {
    setAppointmentsList(
      appointmentsList.filter((appointment) => appointment.id !== id)
    );
  };

  const handleViewDetails = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleCloseModal = () => {
    setSelectedAppointment(null);
  };

  return (
    <div>
      <h1>Appointment</h1>
      <table className="appointment-table ">
        <thead>
          <tr>
            <th>No</th>
            <th>Package Name</th>
            <th>Submitted Date</th>
            <th>Status</th>
            <th>Action</th> {/* New Action column */}
          </tr>
        </thead>
        <tbody>
          {appointmentsList.map((appointment, index) => (
            <tr key={appointment.id}>
              <td>{index + 1}</td>
              <td>{appointment.packageName}</td>
              <td>{appointment.submittedDate}</td>
              <td>{appointment.status}</td>
              <td>
                <div className="action-btns ">
                  <button
                    onClick={() => handleDelete(appointment.id)}
                    className="delete-btn  ml-2 md:m-0"
                  >
                    <FaTrash className="w-[11px] md:w-[15px]" />
                  </button>
                  <button
                    onClick={() => handleViewDetails(appointment)}
                    className="view-details-btn "
                  >
                    <FaEye />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedAppointment && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Appointment Details</h2>
            <p>
              <strong>Package Name:</strong> {selectedAppointment.packageName}
            </p>
            <p>
              <strong>Submitted Date:</strong>{" "}
              {selectedAppointment.submittedDate}
            </p>
            <p>
              <strong>Status:</strong> {selectedAppointment.status}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
