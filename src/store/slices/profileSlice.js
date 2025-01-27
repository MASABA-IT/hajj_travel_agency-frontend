// src/features/profile/profileSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./authorization";
import axios from "axios";
import { BASE_URL } from "./apiConfig";
// Initial state
const initialState = {
  username: "",
  phone_number: "",
  email: "",
  first_name: "",
  last_name: "",
  address: "",
  image: "",
  union_id: "",
  thana_id: "",
  district_id: "",
  division_id: "",
  isLoading: false,
  success: false,
  error: null,
  divisions: [],
  districts: [],
  thanas: [],
  unions: [],
};

// Async thunk to fetch profile data
export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async () => {
    const response = await axiosInstance.get("api/profile/show");
    return response.data.data;
  }
);

// Async thunk to update profile data
export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (profileData) => {
    const response = await axiosInstance.put("api/profile/update", profileData);
    return response.data.data;
  }
);

// Async actions for fetching divisions, districts, thanas, and unions
export const fetchDivisions = createAsyncThunk(
  "profile/fetchDivisions",
  async () => {
    const response = await axios.get(`${BASE_URL}api/divisions`);

    return response.data;
  }
);

export const fetchDistricts = createAsyncThunk(
  "profile/fetchDistricts",
  async (divisionId) => {
    const response = await axios.get(
      `${BASE_URL}api/get-districts/${divisionId}}`
    );
    console.log("district-----------------", response.data );
    return response.data.districts;
  }
);

export const fetchThanas = createAsyncThunk(
  "profile/fetchThanas",
  async (districtId) => {
    const response = await axiosInstance.get(`api/get-thanas/${districtId}`);
    return response.data.thanas;
  }
);

export const fetchUnions = createAsyncThunk(
  "profile/fetchUnions",
  async (thanaId) => {
    const response = await axiosInstance.get(`api/get-unions/${thanaId}`);
    return response.data.unions;
  }
);

// Profile slice
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch profile
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        Object.assign(state, action.payload);
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.error.message;
      })
      // Update profile
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        Object.assign(state, action.payload);
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.error.message;
      })
      // Fetch divisions
      .addCase(fetchDivisions.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(fetchDivisions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.divisions = action.payload;
      })
      .addCase(fetchDivisions.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.error.message;
      })
      // Fetch districts
      .addCase(fetchDistricts.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(fetchDistricts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.districts = action.payload;
      })
      .addCase(fetchDistricts.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.error.message;
      })
      // Fetch thanas
      .addCase(fetchThanas.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(fetchThanas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.thanas = action.payload;
      })
      .addCase(fetchThanas.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.error.message;
      })
      // Fetch unions
      .addCase(fetchUnions.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(fetchUnions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.unions = action.payload;
      })
      .addCase(fetchUnions.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;