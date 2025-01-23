import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "./apiConfig";

export const fetchPackages = createAsyncThunk(
  "packages/fetchPackages",
  async () => {
    const response = await fetch(`${BASE_URL}api/packages`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data ;
  }
);

const packageSlice = createSlice({
  name: "packages",
  initialState: {
    packages: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPackages.fulfilled, (state, action) => {
        state.loading = false;
        state.packages = action.payload;
      })
      .addCase(fetchPackages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default packageSlice.reducer;
