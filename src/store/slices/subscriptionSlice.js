import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "./apiConfig";
import axios from "axios";
export const subscribeEmail = createAsyncThunk(
  "subscription/subscribeMail",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}api/mail/subscribe`, {
        email: email,
      });
      return response.data;
    } catch (error) {
      // If an error occurs, reject the promise and pass the error message
      return rejectWithValue(error.response?.data || "Subscription failed");
    }
  }
);
const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: {
    message: "",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(subscribeEmail.pending, (state) => {
      (state.loading = true), (state.error = null);
    }).addCase(subscribeEmail.fulfilled,(state,action)=>{
        state.loading = false,
        state.message =  action.payload.message
    }).addCase(subscribeEmail.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload || 'Something went wrong';  


    })
  },
});
export default subscriptionSlice.reducer;