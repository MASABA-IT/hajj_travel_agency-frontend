import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./apiConfig";

// Async thunks for login, register, forgot password, and change password actions
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}api/register`, userData);
      console.log(userData, "userdata");
      return response.data; // Return the data from the API
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      // First, send login request
      const response = await axios.post(`${BASE_URL}api/login`, userData);

      // Get the token from login response
      const token = response.data.token;

      // Store the token in localStorage
      localStorage.setItem("token", token);

      // Fetch user profile with the token
      const profileResponse = await axios.get(`${BASE_URL}api/profile/show`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Return both the token and profile data
      return {
        token,
        user: profileResponse.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

// Forgot Password API
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}api/forget-password`, {
        email,
      });
      return response.data; // Assuming the API returns a success message
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Password reset failed"
      );
    }
  }
);

// Change Password API
// Change Password API
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async ({ oldPassword, newPassword, newPasswordConfirmation }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }

      const response = await axios.post(
        `${BASE_URL}api/change-password`,
        {
          old_password: oldPassword,
          new_password: newPassword,
          new_password_confirmation: newPasswordConfirmation,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data; // Assuming the API returns a success message
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Password change failed"
      );
    }
  }
);
export const resetSuccessState = () => ({ type: "auth/resetSuccessState" });
// Slice definition
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("user"),
    loading: false,
    success: false,
    error: null,
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    resetSuccessState: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register actions
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Login actions
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user; // Store profile data
        state.token = action.payload.token; // Store token
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Forgot Password actions
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Change Password actions
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
