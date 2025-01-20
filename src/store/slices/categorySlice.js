import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create async thunk for fetching categories and subcategories
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories", // Action type
  async () => {
    const response = await fetch(
      "http://192.168.0.154:8000/api/category-with-subcategory"
    ); // Correct API endpoint
    const data = await response.json();
    return data.categories; // Assuming the API response has a `categories` array
  }
);

// Create the slice
const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
