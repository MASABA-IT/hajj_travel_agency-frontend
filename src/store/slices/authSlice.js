import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Simulate API calls for sign-up and sign-in
const fakeAuthApi = {
  signUp: async (userData) => {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve({ message: "Sign Up Success", user: userData }),
        1000
      );
    });
  },
  signIn: async (userData) => {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve({ message: "Sign In Success", user: userData }),
        1000
      );
    });
  },
};

// Async thunks to handle the signUp and signIn actions
export const signUp = createAsyncThunk("auth/signUp", async (userData) => {
  const response = await fakeAuthApi.signUp(userData);
  return response;
});

export const signIn = createAsyncThunk("auth/signIn", async (userData) => {
  const response = await fakeAuthApi.signIn(userData);
  return response;
});

// Slice definition
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("user"), // Initialize from localStorage
    loading: false,
    error: null,
    user: JSON.parse(localStorage.getItem("user")) || null, // Retrieve user data from localStorage
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user"); // Remove user data from localStorage on logout
    },
  },
  extraReducers: (builder) => {
    builder
      // Handling signUp actions
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user; // Set user data from sign-up response
        localStorage.setItem("user", JSON.stringify(action.payload.user)); // Store user data in localStorage
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Capture error message
      })
      // Handling signIn actions
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user; // Set user data from sign-in response
        localStorage.setItem("user", JSON.stringify(action.payload.user)); // Store user data in localStorage
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Capture error message
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
