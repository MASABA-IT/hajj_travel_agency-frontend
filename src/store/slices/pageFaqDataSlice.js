import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching FAQ data based on the page
export const fetchFaqData = createAsyncThunk(
  "faq/fetchFaqData",
  async (pageName, thunkAPI) => {
    const data = {
      home: [
        {
          id: 1,
          question: "What is Home FAQ?",
          answer: "This is Home FAQ data.",
        },
        {
          id: 2,
          question: "How does Home work?",
          answer: "Home works dynamically.",
        },
      ],
      about: [
        {
          id: 1,
          question: "What is About FAQ?",
          answer: "This is About FAQ data.",
        },
        {
          id: 2,
          question: "Why choose About?",
          answer: "Because it's informative.",
        },
      ],
      management: [
        {
          id: 1,
          question: "What is the difference between Hajj and Umrah?",
          answer:
            "Hajj is a mandatory pilgrimage for Muslims performed during specific dates in Dhul-Hijjah, while Umrah can be performed any time of the year.",
        },
        {
          id: 2,
          question:
            "What services does your agency provide for Hajj and Umrah?",
          answer:
            "Our agency provides a range of services, including visa processing, travel arrangements, accommodation bookings, transportation, and guided tours for Hajj and Umrah pilgrims.",
        },
        {
          id: 3,
          question: "What documents are required for a Hajj or Umrah visa?",
          answer:
            "Typically, required documents include a valid passport, passport-sized photographs, proof of vaccination (for certain diseases), a completed visa application form, and a letter of invitation from an authorized agency.",
        },
        {
          id: 4,
          question: "How long does it take to process the Hajj or Umrah visa?",
          answer:
            "The processing time for a Hajj or Umrah visa usually takes between 7 to 15 working days, depending on the country and specific circumstances.",
        },
        {
          id: 5,
          question: "Can you arrange group packages or private accommodations?",
          answer:
            "Yes, we offer both group packages and private accommodations, ensuring flexibility to meet the needs of our clients.",
        },
      ],
    };

    // Simulate delay and return data for the requested page
    return new Promise((resolve) =>
      setTimeout(() => resolve(data[pageName] || []), 500)
    );
  }
);

// FAQ slice with async handling using createAsyncThunk
const faqSlice = createSlice({
  name: "faq",
  initialState: {
    faqData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFaqData.fulfilled, (state, action) => {
        state.loading = false;
        state.faqData = action.payload;
      })
      .addCase(fetchFaqData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default faqSlice.reducer;
