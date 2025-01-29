import { useEffect, useState } from "react";
import { FaTrash, FaEye } from "react-icons/fa";
import "./Appointment.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAppointment,
  fetchAppointments,
  setPage,
} from "../../../store/slices/appointmentSlice";
import { toast } from "react-toastify";

const Appointment = () => {
  const dispatch = useDispatch();
  const { appointments, currentPage, totalPages, isLoading, error } =
    useSelector((state) => state.appointments);

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  console.log(currentPage, totalPages, appointments);
  useEffect(() => {
    dispatch(fetchAppointments(currentPage));
  }, [dispatch, currentPage]);

  const handleViewDetails = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleCloseModal = () => {
    setSelectedAppointment(null);
  };

  const handleDelete = (appointmentId) => {
    // Dispatch the deleteAppointment thunk to delete the appointment
    dispatch(deleteAppointment(appointmentId))
      .then(() => {
        toast.success("Appointment deleted successfully!");
        dispatch(fetchAppointments(currentPage)); // Re-fetch appointments after deletion
      })
      .catch((err) => {
        toast.error("Failed to delete appointment!");
      });
  };

  const handlePageChange = (newPage) => {
    console.log(newPage);
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setPage(newPage));
    }
  };
  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     dispatch(fetchAppointments(currentPage + 1)); // Increment page number
  //   }
  // };

  // const handlePreviousPage = () => {
  //   if (currentPage > 1) {
  //     dispatch(fetchAppointments(currentPage - 1)); // Decrement page number
  //   }
  // };

  return (
    <div className="appointment-container">
      <h1>Your Scheduled Appointments & Status</h1>

      {isLoading ? (
        <div className="loading-skeleton">
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
        </div>
      ) : appointments?.data?.length > 0 ? (
        <>
          <table className="appointment-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Package Name</th>
                <th>Submitted Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.data.map((appointment, index) => (
                <tr key={appointment.id}>
                  <td>{index + 1}</td>
                  <td>{appointment.package?.title || "N/A"}</td>
                  <td>
                    {new Date(appointment.created_at).toLocaleDateString(
                      "en-US"
                    )}
                  </td>
                  <td
                    className={
                      appointment.approval_status === 0
                        ? "text-red-600"
                        : "text-green-600"
                    }
                  >
                    {appointment.approval_status === 0 ? "Pending" : "Approved"}
                  </td>
                  <td>
                    <div className="action-btns">
                      {appointment.approval_status === 0 ? (
                        <button
                          onClick={() => handleDelete(appointment.id)}
                          className="delete-btn"
                        >
                          <FaTrash />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleViewDetails(appointment)}
                          className="view-details-btn"
                        >
                          <FaEye />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination-buttons">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="pagination-btn"
            >
              Previous
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="pagination-btn"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p className="no-data-text">
          No appointments available. Please schedule one!
        </p>
      )}

      {selectedAppointment && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Appointment Details</h2>
            <p>
              <strong>Package Name:</strong>{" "}
              {selectedAppointment.package?.title || "N/A"}
            </p>
            <p>
              <strong>Submitted Date:</strong>{" "}
              {new Date(selectedAppointment.created_at).toLocaleDateString(
                "en-US"
              )}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {selectedAppointment.approval_status === 0
                ? "Pending"
                : "Approved"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
