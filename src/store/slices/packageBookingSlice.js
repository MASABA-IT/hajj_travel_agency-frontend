// bookingSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./apiConfig";

// Async Thunk for submitting booking data
export const submitPackageBookingData = createAsyncThunk(
  "booking/submitBookingData",
  async (bookingData, { rejectWithValue, getState }) => {
    try {
      // Retrieve token from the state or storage
      const state = getState();
      const token = state.auth?.token || localStorage.getItem("authToken"); // Adjust based on your auth setup

      const response = await axios.post(
        `${BASE_URL}api/user-appoinment`,
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token to the header
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Initial state
const initialState = {
  bookingData: {},
  isSubmitting: false,
  error: null,
};

// Redux slice
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitPackageBookingData.pending, (state) => {
        state.isSubmitting = true;
      })
      .addCase(submitPackageBookingData.fulfilled, (state, action) => {
        state.isSubmitting = false;
        state.bookingData = action.payload; // Store the API response
      })
      .addCase(submitPackageBookingData.rejected, (state, action) => {
        state.isSubmitting = false;
        state.error = action.payload; // Store the error message if any
      });
  },
});

export default bookingSlice.reducer;
