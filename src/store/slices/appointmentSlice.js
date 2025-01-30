import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./apiConfig";

// Async thunk for fetching appointments with pagination
export const fetchAppointments = createAsyncThunk(
  "appointments/fetchAppointments",
  async (page = 1, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${BASE_URL}api/user-appoinment/list?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data; // Returning the full response to get current_page, last_page, and myAppointments
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for deleting an appointment
export const deleteAppointment = createAsyncThunk(
  "appointments/deleteAppointment",
  async (appointmentId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `${BASE_URL}api/user-appoinment/delete/${appointmentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return appointmentId; // Returning the appointment ID to filter it from the state
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Async thunk for fetching appointment details by ID
export const fetchAppointmentDetails = createAsyncThunk(
  "appointments/fetchAppointmentDetails",
  async (appointmentId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${BASE_URL}api/user-appoinment/details/${appointmentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data; // Returning the details of the specific appointment
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Appointments slice
const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: {
    appointments: [],
    currentPage: 1,
    totalPages: 1,
    isLoading: false,
    error: null,
    deleteMessage: "",
    emptyMessage: "",
    appointmentDetails: {},
  },
  reducers: {
    setPage: (state, action) => {
      console.log(action.payload, "action.payload");
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch appointments
      .addCase(fetchAppointments.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appointments = action.payload.myAppointments;
        state.currentPage = action.payload.myAppointments.current_page;
        state.totalPages = action.payload.myAppointments.last_page;
        state.emptyMessage = ""; // Reset empty message when data is fetched
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Delete appointment
      .addCase(deleteAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        // Filter out the deleted appointment
        state.appointments = state.appointments.data.filter(
          (appointment) => appointment.id !== action.payload
        );

        // If no appointments left, show empty message
        if (state.appointments.length === 0) {
          state.emptyMessage = "Appointment data not available.";
        } else {
          state.deleteMessage = "Appointment deleted successfully!";
        }
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAppointmentDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAppointmentDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appointmentDetails = action.payload; // Store appointment details
      })
      .addCase(fetchAppointmentDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { setPage } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
