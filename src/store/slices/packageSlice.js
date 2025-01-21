import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPackages = createAsyncThunk(
  "Packages/fetchPackages",
  async () => {
    const response = await fetch("http://192.168.0.154:8000/api/packages"); // Correct API endpoint
    const data = await response.json();
    return data.categories;
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
