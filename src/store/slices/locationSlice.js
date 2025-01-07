import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching location data
export const fetchLocationData = createAsyncThunk(
  "location/fetchLocationData",
  async (pageName, thunkAPI) => {
    const data = {
      home: [
        {
          id: 1,
          name: "Dhaka",
          supportType: "Main Hub for Hajj and Umrah Services",
        },
        {
          id: 2,
          name: "Comilla",
          supportType: "Hajj Registration and Travel Assistance",
        },
        {
          id: 3,
          name: "Feni",
          supportType: "Regional Hajj Office and Travel Support",
        },
      ],
      about: [
        {
          id: 4,
          name: "India",
          supportType: "Hajj and Umrah Coordination for Pilgrims",
        },
        {
          id: 5,
          name: "Turkey",
          supportType: "Hajj and Umrah Services for Bangladeshis",
        },
        {
          id: 6,
          name: "Syria",
          supportType: "Hajj Visa Assistance and Travel Coordination",
        },
      ],
      management: [
        {
          id: 7,
          name: "Dhaka",
          supportType: "Main Hub for Hajj and Umrah Services",
        },
        {
          id: 8,
          name: "Comilla",
          supportType: "Hajj Registration and Travel Assistance",
        },
        {
          id: 9,
          name: "Feni",
          supportType: "Regional Hajj Office and Travel Support",
        },
        {
          id: 10,
          name: "India",
          supportType: "Hajj and Umrah Coordination for Bangladeshi Pilgrims",
        },
        {
          id: 11,
          name: "Bangladesh",
          supportType: "National Hajj and Umrah Support",
        },
        {
          id: 12,
          name: "Turkey",
          supportType: "Hajj and Umrah Services for Bangladeshis",
        },
        {
          id: 13,
          name: "Syria",
          supportType: "Hajj Visa Assistance and Travel Coordination",
        },
        {
          id: 14,
          name: "Malaysia",
          supportType: "Hajj and Umrah Travel Assistance",
        },
        {
          id: 15,
          name: "Singapore",
          supportType: "Travel and Visa Support for Hajj Pilgrims",
        },
        {
          id: 16,
          name: "London",
          supportType:
            "Hajj Support and Travel Coordination for UK-based Pilgrims",
        },
        {
          id: 17,
          name: "Italy",
          supportType: "Hajj Visa Processing and Support Services",
        },
        {
          id: 18,
          name: "Rangpur",
          supportType: "Local Hajj Services and Guidance",
        },
        {
          id: 19,
          name: "Dinajpur",
          supportType: "Hajj Registration and Travel Support",
        },
      ],
    };

    // Simulate API Response Delay
    return new Promise((resolve) =>
      setTimeout(() => resolve(data[pageName] || []), 500)
    );
  }
);

const locationSlice = createSlice({
  name: "location",
  initialState: {
    locationData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocationData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLocationData.fulfilled, (state, action) => {
        state.loading = false;
        state.locationData = action.payload;
      })
      .addCase(fetchLocationData.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error?.message || "An error occurred while fetching data";
      });
  },
});

export default locationSlice.reducer;
