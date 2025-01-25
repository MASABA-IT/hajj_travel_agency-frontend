import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./apiConfig";

// Fetch reviews API
 // Fetch reviews API based on package_id
export const getReviews = createAsyncThunk(
    "review/getReviews",
    async (package_id, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          `${BASE_URL}api/package/details/${package_id}`,
        );
        return response.data; // assuming the API returns the review data directly
      } catch (error) {
        return rejectWithValue(error.response?.data || "Network error");
      }
    }
  );
  

// Submit review API
export const submitReview = createAsyncThunk(
  "review/submitReview",
  async (reviewData, { rejectWithValue }) => {
    try {
      const fakeToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDFhODQ2OWJhNTQ0NjQwMjE5NGM1ZTg2MjdiZGIwNmNjODhhYTU1NjBlNDdhYzdkM2U1ZjE3NDk3OGQ2MTkyNGRkNzBhZjY5ZGRhNDk5ODAiLCJpYXQiOjE3Mzc3OTgxNjIuMjcyOTE5ODkzMjY0NzcwNTA3ODEyNSwibmJmIjoxNzM3Nzk4MTYyLjI3MjkyMjAzOTAzMTk4MjQyMTg3NSwiZXhwIjoxNzY5MzM0MTYyLjI2NTQyNDAxMzEzNzgxNzM4MjgxMjUsInN1YiI6IjM4Iiwic2NvcGVzIjpbXX0.vx2piaeLfPoCr8dy-yMF1S4arKppBMl89A08nQx8tpDFTrFmSEFn5YXkiQmO3v8Uv1LSNbkaMY6iTXMqvz-xMuIkq_e1ZkUd7TG3Zx8EsgQBlclyqxWSa-EmHqCSxt7iMm-rSnlPPdOnAZbhRggbrQUc1BVuchA-afRaGJ1WPpiWgYzWPoX6kbPDfeM3UVv7rH1X2gGQjN78f73Pgy__LfZCp743z5TGXnCY758fskHZBOEQxC9POFtb7JwyWARXCtqfi5MAOd32YOTxQCid_rznD1ORzA-dFsKd0AbR-NfGaaJW4I9uT8UPCkBGbQdCPFmCga1vPTOTtBUvn_7kJESFIBIJwS59UYXqsJS1hCE-Jyj5mH8AtvBEs7_onht33YiqJ1F21Rv2IUKiCw6hK0BGYhZKQa7tPB0tAq8eKye7ymhRfsoU9csP74yOyjeRa1SOEu-IVDKXpVmTBOdzoN6HPwQODrr5yyncJ7CArFZq2THbe1HyZxppye1GpkN5nPwjQi1EmQbHdlJCfb3OZrulO2T1xGq_H6MGKPVrsF5UJcTmSoCExsAn--FDrdAfGt9AnvZB1RDaQ21jp7lzczSPJSvf8KtmK2ppe0bqv90D58xo9FY8j_aq5Kylsd9IJARjUq3VFqKe4Zksu2q44fE9zvGq1WcH3Dk5z50-lrE";

      const response = await axios.post(
        `${BASE_URL}api/package/review`,
        reviewData,
        {
          headers: {
            Authorization: `Bearer ${fakeToken}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Network error");
    }
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    reviews: [],
    isSubmitting: false,
    isLoading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload; // Store fetched reviews in the state
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(submitReview.pending, (state) => {
        state.isSubmitting = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitReview.fulfilled, (state) => {
        state.isSubmitting = false;
        state.success = true;
      })
      .addCase(submitReview.rejected, (state, action) => {
        state.isSubmitting = false;
        state.error = action.payload;
      });
  },
});

export default reviewSlice.reducer;
