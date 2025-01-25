import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./apiConfig";

// Async thunk to fetch package details
export const fetchPackageDetailsById = createAsyncThunk(
  "packageDetails/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}api/package/details/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch package details"
      );
    }
  }
);

const packageSingleDetailsSlice = createSlice({
  name: "packageSingleDetails",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearPackageDetails: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackageDetailsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPackageDetailsById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPackageDetailsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearPackageDetails } = packageSingleDetailsSlice.actions;
export default packageSingleDetailsSlice.reducer;
